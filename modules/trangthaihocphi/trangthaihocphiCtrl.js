angular.module('trangthaihocphiModule')
    .controller('trangthaihocphiController', function ($scope,adminInitialPaymentTable) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây

        $scope.paymentList = adminInitialPaymentTable;
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
        };
    });