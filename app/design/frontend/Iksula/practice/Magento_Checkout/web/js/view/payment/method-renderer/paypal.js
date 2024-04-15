define(
    [
        'ko',
        'Magento_Checkout/js/view/payment/default'
    ],
    function (ko,Component) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Magento_Checkout/payment/paypal'
            },
            currentChecked:ko.observable("investmentbank"),
            getCode:function(){
                return 'paypal'
            },
            getTitle(){
                return 'Paypal'
            },

        });
    }
);