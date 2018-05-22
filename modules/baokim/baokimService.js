//Nhớ thêm tên service vào controller
angular.module('baokimModule')
    .service('baokimService', function ($http) {
        var service = {
            cong2so: cc,
            accessible: checkAccessible,
            getTable:getTable,
            updateTable:updateTable
        };
        return service;

        function cc(a, b) {
            return a + b;
        }

        function checkAccessible(username, password) {
            var accessible = false;
            if ("admin" == username && "1" == password) accessible = true;
            return accessible


        }
        function getTable() {
            return $http({
                url:'http://192.168.1.105:8080/getrecord',
                method:'GET'

            })
        }
        function updateTable() {
            return $http({
                url:'http://192.168.1.105:8080/updaterecord',
                method:'GET'

            })
        }
    });
    
    
 