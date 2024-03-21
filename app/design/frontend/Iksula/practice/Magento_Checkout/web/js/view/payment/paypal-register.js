define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'paypal',
                component: 'Magento_Checkout/js/view/payment/method-renderer/paypal'
            },
            // other payment method renderers if required
        );
        /** Add view logic here if needed */
        return Component.extend({
        });
    }
);
