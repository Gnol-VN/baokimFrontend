angular.module('dongtienModule')
    .controller('dongtienController', function ($scope,$window) {
        $scope.paymentContent = ''; //Xử lý logic ở đây

        $scope.dongtien = function () {
            $window.location.href = "https://www.baokim.vn/payment/product/version11?business=nambeca%40gmail.com&id=&order_description=&product_name="+$scope.paymentContent+"&product_price=10000&product_quantity=1&total_amount=10000&url_cancel=https%3A%2F%2Fwww.youtube.com%2Fthatbai&url_detail=https%3A%2F%2Fgithub.com%2FGnol-VN%2F&url_success=https%3A%2F%2Fwww.youtube.com%2Fthanhcong"
        }
    });