//Nhớ thêm tên service vào controller
angular.module('trangthaihocphiModule')
    .service('trangthaihocphiService', function ($http) {
        var service = {
            adminGetPaymentList:adminGetPaymentList,
            parentGetPaymentList:parentGetPaymentList
        };
        return service;


        function adminGetPaymentList() {
            return $http({
                url:'http://localhost:8081/admingetpayment',
                method:'GET'

            })
        }
        function parentGetPaymentList(parentName) {
            return $http({
                url:'http://localhost:8081/parentgetpayment',
                method:'GET',
                headers: {
                    'role':'parent',
                    'parentName': parentName
                }

            })
        }
    });
    
    
 