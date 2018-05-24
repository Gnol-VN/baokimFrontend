//Nhớ thêm tên service vào controller
angular.module('loginModule')
    .service('loginService', function ($http) {
        var service = {
            parentLogin:parentLogin,
            staffLogin:staffLogin,
            adminLogin:adminLogin
        };
        return service;

        function parentLogin(opts) {
            return $http({
                url:'http://localhost:8081/parent/login',
                method:'POST',
                data:opts
            })
        }

        function staffLogin(opts) {
            return $http({
                url:'http://localhost:8081/staff/login',
                method:'POST',
                data:opts
            })
        }
        function adminLogin(opts) {
            return $http({
                url:'http://localhost/school1/index.php?login/ajax_login',
                method:'POST',
                data:opts
            })
        }
    });
    
    
 