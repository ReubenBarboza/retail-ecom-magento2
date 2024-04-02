<?php
namespace Iksula\Practice\Plugin\Block\Checkout;

/**
 * Class AttributeMerger
 * @package Iksula\Practice\Plugin\Block\Checkout\AttributeMerger
 */
class AttributeMerger
{
    /**
     * @param \Magento\Checkout\Block\Checkout\AttributeMerger $subject
     * @param $result
     * @return mixed
     */
    public function afterMerge(
        \Magento\Checkout\Block\Checkout\AttributeMerger $subject,
        $result
    )
    {
        $result['firstname']['placeholder'] = __('First Name*');
        $result['lastname']['placeholder'] = __('Last name*');
        $result['street']['children'][0]['placeholder'] = __('Street*');
        $result['street']['children'][1]['placeholder'] = __('Houses*');
        $result['city']['placeholder'] = __('Location');
        $result['postcode']['placeholder'] = __('PostalCode*');
        $result['telephone']['placeholder'] = __('Phone Number');
        $result['country_id']['caption']=__('Select Country');
        
        return $result;
    }

}