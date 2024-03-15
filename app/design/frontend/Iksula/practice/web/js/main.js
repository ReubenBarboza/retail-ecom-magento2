define(["jquery", "underscore", "domReady!"], function ($, _) {
    "use strict";

    $(".form.minisearch").css("display", "none");
    $(".search-icon").on("click", function (e) {
        $(".form.minisearch").toggle("slow");
    });

    function arrangeElementsForMobile() {
        const practiceRightNav = $(".practiceRightNav");
        if ($(window).width() < 768) {
            $(".header.content").append(practiceRightNav);
            $(".footer__copyright").appendTo(".footer.content");
        } else {
            $(".panel.wrapper").append(practiceRightNav);
            $(".footer__copyright").appendTo(".footer__container");
        }
    }

    arrangeElementsForMobile();

    // mobile

    $(window).on("resize", _.throttle(arrangeElementsForMobile, 100));

    //cart

    //remove SAR
    $(".cart-price .price").each((_, price) => {
        return $(price).text($(price).text().slice(3));
    });
});
