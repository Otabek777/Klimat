$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass("fixed");
    } else {
        $('.header').removeClass("fixed");
    }
});
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};
$(".open_search").click(function() {
    $(".search_wrap").addClass("active");
    setTimeout(function() {
        $(".search_wrap").addClass("open");
    },100);
    $(".header__catalog_btn").removeClass("rotate");
    setTimeout(function() {
        $(".header__catalog_btn").removeClass("active");
    }, 300);
    $(".header__catalog").removeClass("open");
});
$(".main").click(function() {
    $(".search_wrap").removeClass("open");
    setTimeout(function() {
        $(".search_wrap").removeClass("active");
    },500);
    $(".header__catalog_btn").removeClass("rotate");
    setTimeout(function() {
        $(".header__catalog_btn").removeClass("active");
    }, 300);
    $(".header__catalog").removeClass("open");
});
$(".header__catalog_btn").click(function() {
    if($(".header__catalog_btn").hasClass("active")) {
        $(".header__catalog_btn").removeClass("rotate");
        setTimeout(function() {
            $(".header__catalog_btn").removeClass("active");
        }, 300);
        $(".header__catalog").removeClass("open");
    } else {
        $(".header__catalog_btn").addClass("active");
        setTimeout(function() {
            $(".header__catalog_btn").addClass("rotate");
        }, 300);
        $(".header__catalog").addClass("open");
    };
    $(".search_wrap").removeClass("open");
    setTimeout(function() {
        $(".search_wrap").removeClass("active");
    },500);
});
if(document.querySelector(".catalog_filter_btn")) {
    $(".catalog_filter_btn .btn").click(function() {
        $(".main_page__aside").addClass("open");
    });
    $(".main_page__aside .close").click(function() {
        $(".main_page__aside").removeClass("open");
    });
};

// Mobile Menu
$(".menu_mobile_bottom .item_burgir").click(function() {
    if($(".menu_mobile_bottom .item_burgir").hasClass("active")) {
        $(".menu_mobile").removeClass("open");
    } else {
        $(".menu_mobile").addClass("open");
    };
});
$(".menu_mobile_bottom .item_catalog").click(function() {
    if($(".menu_mobile_bottom .item_catalog").hasClass("active")) {
        $(".header__catalog").removeClass("open");
    } else {
        $(".header__catalog").addClass("open");
    };
});
$(".menu_mobile_bottom .item").click(function() {
    var thisItem = $(this);
    
    if(thisItem.hasClass("active")) {
        thisItem.removeClass("rotate");
        setTimeout(function() {
            thisItem.removeClass("active");
        }, 300);
    } else {
        thisItem.addClass("active");
        setTimeout(function() {
            thisItem.addClass("rotate");
        }, 300);
    };
});
$(".menu_mobile_bottom .item_burgir").click(function() {
    $(".header__catalog").removeClass("open");
    $(".menu_mobile_bottom .item_catalog").removeClass("rotate");
    setTimeout(function() {
        $(".menu_mobile_bottom .item_catalog").removeClass("active");
    }, 300);
});
$(".menu_mobile_bottom .item_catalog").click(function() {
    $(".menu_mobile").removeClass("open");
    $(".menu_mobile_bottom .item_burgir").removeClass("rotate");
    setTimeout(function() {
        $(".menu_mobile_bottom .item_burgir").removeClass("active");
    }, 300);
});

if(document.querySelector(".tab_btn")) {
    // Tab
    function tabFun(num) {
        if(document.querySelector("#tab-btn-" + num)) {
            $("#tab-btn-" + num).click(function() {
                $(".tab-btn-all").removeClass("active");
                $(".tab-block-all").removeClass("active");
                $(this).addClass("active");
                $("#tab-block-" + num).addClass("active");
            });
        };
    };
    tabFun("1");
    tabFun("2");
    tabFun("3");
    tabFun("4");
    tabFun("5");
    tabFun("6");
    tabFun("7");
    tabFun("8");
    tabFun("9");
    tabFun("10");
}