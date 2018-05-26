angular.module('baokimModule')
    .controller('baokimController', function ($scope, baokimService, bangGiaoDich, moment,cfpLoadingBar) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.table = bangGiaoDich;
        $scope.orderByField = function (record) {
            return moment(record.thoiGian, "hh:mm DD/MM/YYYY").toDate();
        };
        $scope.updateButton = function () {
            cfpLoadingBar.start();
            baokimService.updateTable()
                .then(
                    function (response) {
                        $scope.table = response.data;
                        console.log(response)
                        cfpLoadingBar.complete();

                    },
                    function (error,data) {
                        console.log(error)
                    }
                );
        }

    });