//Nhớ thêm tên module vào app.js
angular.module('dongtienModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('dongtien', { //Định nghĩa 1 state
                url: '/dongtien',     //Khai báo URl hiển thị
                templateUrl: 'modules/dongtien/dongtien.html', //Đường dẫn view: modules/about/about.html
                controller: 'dongtienController'   //Khai báo Controller phụ vụ state này
            })


    });
