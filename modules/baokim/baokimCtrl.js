angular.module('baokimModule')
    .controller('baokimController', function ($scope, baokimService, initialTable, moment) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.table = initialTable;
        $scope.orderByField = function (record) {
            return moment(record.thoiGian, "hh:mm DD/MM/YYYY").toDate();
        };
        $scope.updateButton = function () {
            baokimService.updateTable()
                .then(
                    function (response) {
                        $scope.table = response.data;
                        console.log(response)
                    },
                    function (error,data) {
                        console.log(error)
                    }
                );
        }

    });