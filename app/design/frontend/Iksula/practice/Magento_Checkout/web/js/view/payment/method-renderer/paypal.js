define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Magento_Checkout/payment/paypal'
            },

            getCode: function(){
                return "paypal"
           }
           ,

           getTitle: function(){
            return "Paypal"
       }
        });
    }
);