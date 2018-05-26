angular.module('app', ['ui.router',
    'aboutModule',
    'featureModule',
    'formModule',
    'ajaxModule',
    'plusModule',
    'todoModule',
    'tweenMaxModule',
    'baokimModule',
    'dongtienModule',
    'loginModule',
    'angularMoment',
    'trangthaihocphiModule',
    'angular-loading-bar'

])
    .run(function($rootScope, $state) {
        $rootScope.displayName=localStorage['displayName'];
        $rootScope.isLoggedInAdmin = false;
        $rootScope.isLoggedInStaff = false;
        $rootScope.isLoggedInParent = false;
        $rootScope.loggedAsAdmin=localStorage['loggedAsAdmin'] ;
        $rootScope.loggedAsStaff=localStorage['loggedAsStaff'] ;
        $rootScope.loggedAsParent=localStorage['loggedAsParent'];
        $rootScope.getRole = function () {
            if($rootScope.loggedAsAdmin == "true" || $rootScope.loggedAsAdmin == true){
                $rootScope.isLoggedInAdmin = true;
                $rootScope.isLoggedInStaff = false;
                $rootScope.isLoggedInParent = false;
            }
            if($rootScope.loggedAsStaff == "true" || $rootScope.loggedAsStaff == true){
                $rootScope.isLoggedInStaff = true;
                $rootScope.isLoggedInParent = false;
                $rootScope.isLoggedInAdmin = false;
            }
            if($rootScope.loggedAsParent == "true" || $rootScope.loggedAsParent == true){
                $rootScope.isLoggedInStaff = false;
                $rootScope.isLoggedInParent = true;
                $rootScope.isLoggedInAdmin = false;
            }
        };
        $rootScope.$broadcast("someEvent", $rootScope.getRole());
        $rootScope.logOut = function () {
            $rootScope.isLoggedInParent = false;
            $rootScope.isLoggedInStaff = false;
            $rootScope.isLoggedInAdmin = false;
            localStorage.clear();
            $state.go("home");
        }

    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home')
        $stateProvider
        // nested list with custom controller
            .state('home', { //Định nghĩa 1 state
                url: '/home',     //Khai báo URl hiển thị
                templateUrl: 'modules/home.html', //Đường dẫn view
                controller: 'homeController'   //Khai báo Controller phụ vụ state này
            })


    })
    ;

angular.module('app')
    .controller('homeController', function ($scope /*,injectables */) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
    });