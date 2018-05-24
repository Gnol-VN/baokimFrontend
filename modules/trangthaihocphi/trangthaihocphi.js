//Nhớ thêm tên module vào app.js
angular.module('trangthaihocphiModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('trangthaihocphi', { //Định nghĩa 1 state
                url: '/trangthaihocphi',     //Khai báo URl hiển thị
                templateUrl: 'modules/trangthaihocphi/trangthaihocphi.html', //Đường dẫn view: modules/about/about.html
                controller: 'trangthaihocphiController'   //Khai báo Controller phụ vụ state này
            })


    });
