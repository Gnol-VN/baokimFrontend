angular.module('loginModule')
    .controller('loginController', function ($http,$rootScope,$scope,loginService,$state,$httpParamSerializerJQLike) {
        $scope.ketqua="chưa đăng nhập";
        $scope.logging={
            name:"",
            password:""
        };
        $scope.loginAs = "Staff";
        $scope.login = function () {
            if($scope.loginAs == "Admin"){
                var request = {
                    email:$scope.logging.name,
                    password: $scope.logging.password
                };
                $http({
                    url: 'http://localhost:80/school1/index.php?login/ajax_login',
                    method: 'POST',
                    data: $httpParamSerializerJQLike(request),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    console.log(response);
                    $scope.token = response.data.token;
                    localStorage.setItem("token", $scope.token);
                    $rootScope.token = response.data.token;
                    $rootScope.displayName = "Admin";
                    localStorage.setItem('displayName',"Admin");
                    localStorage.setItem('loggedAsAdmin',true);
                    localStorage.setItem('loggedAsParent',false);
                    localStorage.setItem('loggedAsStaff',false);
                    $rootScope.loggedAsAdmin = true;
                    $rootScope.loggedAsStaff = false;
                    $rootScope.loggedAsParent = false;
                    $rootScope.displayName = localStorage['displayName'];
                    $rootScope.token = localStorage['token'];
                    $rootScope.$broadcast("someEvent", $rootScope.getRole());

                    $state.go('baokim');
                });
            }
            if($scope.loginAs == "Parent"){
                var request = {
                    email:$scope.logging.name,
                    password: $scope.logging.password
                };
                $http({
                    url: 'http://localhost:80/school1/index.php?login/ajax_login',
                    method: 'POST',
                    data: $httpParamSerializerJQLike(request),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    console.log(response);
                    $scope.token = response.data.token;
                    localStorage.setItem("token", $scope.token);
                    $rootScope.token = response.data.token;
                    $rootScope.displayName = response.data.profile.name;
                    localStorage.setItem('displayName',response.data.profile.name);
                    localStorage.setItem('loggedAsAdmin',false);
                    localStorage.setItem('loggedAsParent',true);
                    localStorage.setItem('loggedAsStaff',false);
                    $rootScope.loggedAsAdmin = false;
                    $rootScope.loggedAsStaff = false;
                    $rootScope.loggedAsParent = true;
                    $rootScope.displayName = localStorage['displayName'];
                    $rootScope.token = localStorage['token'];
                    $rootScope.$broadcast("someEvent", $rootScope.getRole());

                    $state.go('trangthaihocphi');
                });
            }
            if($scope.loginAs == "Staff"){
                var request = {
                    staffName:$scope.logging.name,
                    password: $scope.logging.password
                };
                loginService.staffLogin(request)
                    .then(function (response) {
                        $scope.token = response.data.token;
                        localStorage.setItem("token", $scope.token);
                        $rootScope.token = response.data.token;
                        $rootScope.displayName = response.data.staffName;
                        localStorage.setItem('displayName',response.data.staffName);
                        localStorage.setItem('loggedAsStaff',true);
                        localStorage.setItem('loggedAsParent',false);
                        $rootScope.loggedAsStaff = true;
                        $rootScope.loggedAsParent = false;
                        $rootScope.displayName = localStorage['displayName'];
                        $rootScope.token = localStorage['token'];
                        $rootScope.$broadcast("someEvent", $rootScope.getRole());

                        $state.go('welcomeStaff');

                    },function (error,data) {
                        console.log(error.data.message);
                        $scope.showErrorModel(error.data.message);
                        localStorage.clear()
                        }
                    );
            }

            // $scope.ketqua = "đăng nhập thành công";
        };
        // $scope.showErrorModel = function(errormessage) {
        //
        //     // ModalService.showModal({
        //             // templateUrl: "modules/login/errorLogin.html",
        //             // controller: "errorLoginController",
        //             // preClose: (modal) => { modal.element.modal('hide'); },
        //             // inputs: {
        //             //     title: errormessage
        //             // }
        //     ModalService.showModal({
        //             templateUrl: "modules/login/complex.html",
        //             controller: "CComplexController",
        //             preClose: (modal) => { modal.element.modal('hide'); },
        //             inputs: {
        //                 title: errormessage
        //             }
        // }).then(function(modal) {
        //         modal.element.modal();
        //         modal.close.then(function(result) {
        //         });
        //     });
        // };
    });