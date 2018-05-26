//Nhớ thêm tên module vào app.js
angular.module('baokimModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('baokim', { //Định nghĩa 1 state
                url: '/baokim',     //Khai báo URl hiển thị
                templateUrl: 'modules/baokim/baokim.html', //Đường dẫn view: modules/about/about.html
                controller: 'baokimController',
                resolve:{
                    bangGiaoDich:['baokimService', function (baokimService) {
                        return baokimService.getTable()
                            .then(function (response) {
                                return response.data;
                            })
                    }]
                }//Khai báo Controller phụ vụ state này
            })


    });
