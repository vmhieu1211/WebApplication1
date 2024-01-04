//var myApp = angular.module('myApp', []);

var newsController = function ($scope, $http) {
    $scope.user = {};
    $scope.news = {};
    $scope.details = {};
    $scope.selectedCat = 0;

    $scope.currentpage = 1;
    $scope.pageSize = 6;

    $scope.categories = {}; //số lượng object
    $scope.charImageList = {};
    $scope.screenImageList = {};

    $scope.loadCategories = function (top, topnews) {
        showNewsLoader();
        $.ajax({
            type: "GET",
            url: "/api/category/list",
            contentType: "application/json; charset=utf-8",
            data: {
                top: top
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {

                $scope.categories = result;
                $scope.selectedCat = $scope.categories[0].Id; // số lượng tin tức header

                $scope.showNewsList($scope.selectedCat, topnews);
                hideNewsLoader();
                $scope.$apply();

            },
            error: function (result) {
                hideNewsLoader();
                //hideLoader();
                //showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });


    };

    $scope.selectedCatCss = function (id) {
        if ($scope.selectedCat == id) {
            return "active active-tintuc-header active-tintuc-bar";
        }

        return "";
    };



    $scope.showNewsList = function (category, top) {

        $scope.selectedCat = category;
        $scope.currentpage = 1;
        //$scope.$apply();



        showNewsLoader();
        $.ajax({
            type: "GET",
            url: "/api/news/list",
            contentType: "application/json; charset=utf-8",
            data: {
                top: top,
                cat: category
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {
                hideNewsLoader();
                $scope.news = result;
                $scope.$apply();
            },
            error: function (result) {
                hideNewsLoader();
                //hideLoader();
                //showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });
    };


    $scope.scrollTop = function () {

    }

    $scope.loadFirstItems = function (pagesize) {

        //alert('first');

        var nextpage = 1;
        $scope.currentpage = 1;
        //$scope.$apply();
        showNewsLoader();
        $.ajax({
            type: "GET",
            url: "/api/news/paging",
            contentType: "application/json; charset=utf-8",
            data: {
                cateid: $scope.selectedCat,
                page: nextpage,
                pagesize: pagesize
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {
                hideNewsLoader();
                $scope.news = result;
                $scope.currentpage = nextpage;

                $scope.scrollTop();
                $scope.$apply();


            },
            error: function (result) {
                hideNewsLoader();
                //hideLoader();
                //showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });
    };

    $scope.loadNextItems = function (pagesize) {

        var nextpage = $scope.currentpage + 1;

        //$scope.$apply();
        showNewsLoader();
        $.ajax({
            type: "GET",
            url: "/api/news/paging",
            contentType: "application/json; charset=utf-8",
            data: {
                cateid: $scope.selectedCat,
                page: nextpage,
                pagesize: pagesize
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {
                hideNewsLoader();
                $scope.news = result;
                $scope.currentpage = nextpage;
                $scope.scrollTop();

                $scope.$apply();
            },
            error: function (result) {
                hideNewsLoader();
                //hideLoader();
                //showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });
    };

    $scope.loadPreItems = function (pagesize) {

        var nextpage = $scope.currentpage - 1;

        if (nextpage < 1)
            nextpage = 1;

        //$scope.$apply();
        showNewsLoader();
        $.ajax({
            type: "GET",
            url: "/api/news/paging",
            contentType: "application/json; charset=utf-8",
            data: {
                cateid: $scope.selectedCat,
                page: nextpage,
                pagesize: pagesize
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {
                hideNewsLoader();
                $scope.news = result;
                $scope.currentpage = nextpage;
                $scope.scrollTop();

                $scope.$apply();
            },
            error: function (result) {
                hideNewsLoader();
                //hideLoader();
                //showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });
    };

    $scope.loadNews = function (id) {
        showNewsLoader();
        $("#popup-info-title").html("Đang tải dữ liệu");
        $("#popup-info-content").html("Đang tải dữ liệu");
        //$("#modalInfo").modal();
        $.ajax({
            type: "GET",
            url: "/api/news/details",
            contentType: "application/json; charset=utf-8",
            data: {
                id: id
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {
                hideNewsLoader();
                $scope.details = result;

                $("#popup-info-title").html(result.Title);
                $("#popup-info-content").html(result.Description);
                $("#modalInfo").modal();

                $scope.$apply();
            },
            error: function (result) {
                hideNewsLoader();
            }
        });

    };

    $scope.loadImages = function (type) {
        //showNewsLoader();
        $.ajax({
            type: "GET",
            url: "/api/loadimage/list",
            contentType: "application/json; charset=utf-8",
            data: {
                type: type
            },
            //data: JSON.stringify({
            //    type: 1
            //}),
            dataType: "json",
            success: function (result) {

                if (type == "chars") {
                    $scope.charImageList = result;
                }
                if (type == "screen") {
                    $scope.screenImageList = result;
                }

                //hideNewsLoader();
                $scope.$apply();

            },
            error: function (result) {
                hideNewsLoader();
                //hideLoader();
                //showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });


    };

    //$scope.loadUser();

    $scope.updateInfo = function () {


        var username = $scope.user.username;
        var fullname = $scope.user.fullname;

        var captcha = $scope.user.captcha;
        var agree = $scope.user.agree;

        var dob = $scope.user.dob;
        var address = $scope.user.address;
        var idnumber = $scope.user.idnumber;
        var idregdate = $scope.user.idregdate;

        if (isNullOrEmpty(username) || isNullOrEmpty(fullname)) {
            showMessage("Thông báo", "Vui lòng nhập đầy đủ thông tin");
            return;
        }


        showLoader();
        $.ajax({
            type: "POST",
            url: "/api/accounts/updateaccount",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                username: username,
                fullname: fullname,
                email: $scope.user.email,
                phone: $scope.user.phone,
                dob: dob,
                address: address,
                idnumber: idnumber,
                idregdate: idregdate,
                captcha: captcha,
                agree: agree
            }),
            dataType: "json",
            success: function (result) {

                var resultmsg = result.errMessage;

                if (result.errCode == 0) {
                    showMessage("Update thành công", resultmsg);
                    //redirect to dashboard
                    //window.location = "/account/login";
                } else {
                    showMessage("Thông báo", resultmsg);
                }
                hideLoader();

            },
            error: function (result) {
                hideLoader();
                showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });

    };


    $scope.changePassword = function () {


        if (isNullOrEmpty($scope.user.oldpassword) ||
            isNullOrEmpty($scope.user.password) ||
            isNullOrEmpty($scope.user.passwordconfirm) ||
            isNullOrEmpty($scope.user.captcha)) {
            showMessage("Thông báo", "Vui lòng nhập đầy đủ thông tin");
            return;
        }

        showLoader();
        $.ajax({
            type: "POST",
            url: "/api/accounts/changepassword",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                level: $scope.user.level,
                oldpassword: $scope.user.oldpassword,
                password: $scope.user.password,
                passwordconfirm: $scope.user.passwordconfirm,
                twofacode: $scope.user.twofacode,
                captcha: $scope.user.captcha
            }),
            dataType: "json",
            success: function (result) {

                var resultmsg = result.errMessage;

                if (result.errCode == 0) {
                    $scope.user = {};
                    $scope.$apply();
                    showMessage("Update thành công", resultmsg);
                } else {
                    showMessage("Thông báo", resultmsg);
                }
                hideLoader();

            },
            error: function (result) {
                hideLoader();
                showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });

    };

    $scope.signOut = function () {
        showLoader();
        $.ajax({
            type: "POST",
            url: "/api/accounts/signout",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({}),
            dataType: "json",
            success: function (result) {

                var resultmsg = result.errMessage;

                if (result.errCode == 0) {
                    $scope.user = {};
                    $scope.$apply();
                    showMessage("Update thành công", resultmsg);
                } else {
                    showMessage("Thông báo", resultmsg);
                }
                hideLoader();

            },
            error: function (result) {
                hideLoader();
                showMessage("Thông báo", result.responseJSON.ExceptionMessage);
                window.location = "/account/login";
            }
        });
    };

    $scope.resendActiveEmail = function () {


        if (isNullOrEmpty($scope.user.captcha)) {
            showMessage("Thông báo", "Vui lòng nhập đầy đủ thông tin");
            return;
        }

        showLoader();
        $.ajax({
            type: "POST",
            url: "/api/accounts/resendActiveEmail",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                captcha: $scope.user.captcha
            }),
            dataType: "json",
            success: function (result) {

                var resultmsg = result.errMessage;

                if (result.errCode == 0) {
                    $scope.user = {};
                    $scope.$apply();
                    showMessage("Email đã được gửi thành công, vui lòng kiểm tra hòm thư và làm theo hướng dẫn!", resultmsg);
                } else {
                    showMessage("Thông báo", resultmsg);
                }
                $scope.refreshCaptcha();
                hideLoader();

            },
            error: function (result) {
                hideLoader();
                $scope.refreshCaptcha();
                showMessage("Thông báo", result.responseJSON.ExceptionMessage);
            }
        });

    };

    $scope.refreshCaptcha = function () {
        var id = Math.random();
        $("#imgCaptcha").attr('src', '/Utils/CaptchaImg?d=' + id);
    };
};

newsController.$inject = ['$scope', '$http'];
myApp.controller("newsController", newsController);