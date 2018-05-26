angular.module('trangthaihocphiModule')
    .controller('trangthaihocphiController', function ($scope,initialPaymentTable) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây

        $scope.initialPaymentTable = initialPaymentTable;
        $scope.adminPaymentList = $scope.initialPaymentTable[0].data;
        $scope.parentPaymentList = $scope.initialPaymentTable[1].data;
        // $scope.parentPaymentList = parentInitialPaymentTable;
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