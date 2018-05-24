//Nhớ thêm tên service vào controller
angular.module('trangthaihocphiModule')
    .service('trangthaihocphiService', function ($http) {
        var service = {
            adminGetPaymentList:adminGetPaymentList
        };
        return service;


        function adminGetPaymentList() {
            return $http({
                url:'http://localhost:8081/admingetpayment',
                method:'GET'

            })
        }
    });
    
    
 