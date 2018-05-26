//Nhớ thêm tên module vào app.js
angular.module('trangthaihocphiModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('trangthaihocphi', { //Định nghĩa 1 state
                url: '/trangthaihocphi',     //Khai báo URl hiển thị
                templateUrl: 'modules/trangthaihocphi/trangthaihocphi.html', //Đường dẫn view: modules/about/about.html
                controller: 'trangthaihocphiController',   //Khai báo Controller phụ vụ state này
                resolve:{
                    initialPaymentTable:['trangthaihocphiService','$q','$http', function (trangthaihocphiService, $q,$http) {
                        promiseList = [];
                        promiseList.push(list1());
                        promiseList.push(list2());
                        function list1() {
                            // return $q.when($http.get("http://localhost:8081/admingetpayment"));
                            return $q.when(trangthaihocphiService.adminGetPaymentList());
                            // trangthaihocphiService.adminGetPaymentList()
                            //     .then(function (response) {
                            //         return response.data;
                            //     });
                        }

                        function list2() {
                            return $q.when(trangthaihocphiService.parentGetPaymentList(localStorage.getItem('displayName')));

                            // trangthaihocphiService.parentGetPaymentList(localStorage.getItem('displayName'))
                            //     .then(function (response) {
                            //         return response.data;
                            //     });
                        }



                        return $q.all(promiseList).then(function (response) {
                           return(response)
                        }).catch(function (error) {
                            console.log("it failed....");
                        });
                    }]
                }

                // resolve:[
                //     {
                //         adminInitialPaymentTable:['trangthaihocphiService', function (trangthaihocphiService) {
                //             return trangthaihocphiService.adminGetPaymentList()
                //                 .then(function (response) {
                //                     return response.data;
                //                 })
                //         }]
                //     },
                //     {
                //         parentInitialPaymentTable:['trangthaihocphiService', function (trangthaihocphiService) {
                //             return trangthaihocphiService.parentGetPaymentList(localStorage.getItem('displayName'))
                //                 .then(function (response) {
                //                     return response.data;
                //                 })
                //         }]
                //     }
                //
                // ]


            })


    });
