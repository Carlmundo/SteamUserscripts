// ==UserScript==
// @name        Steam Wallet - Buy Custom Amount
// @author      Carlmundo
// @version     1.0
// @description Buy a custom amount of Steam Wallet
// @include     *://store.steampowered.com/steamaccount/addfunds
// @grant       none
// @downloadURL https://github.com/Carlmundo/SteamUserscripts/raw/master/addfunds.user.js
// @updateURL   https://github.com/Carlmundo/SteamUserscripts/raw/master/addfunds.user.js
// ==/UserScript==

function submitCustomFunds() {
   document.getElementById('form_addfunds').submit();
}
jQuery("body").on("change paste keyup mouseup", function() {
	custom_value = jQuery('#add_custom').val().replace(/\D/g,'');
    jQuery('#input_amount').val(custom_value);
});
jQuery('head').append('<style>.es_custom_money{display:none}</style>');
custom_minimum = jQuery('#prices_user .addfunds_area_purchase_game:first h1').text();
custom_currency = jQuery('#input_currency').val();
custom_button = '<div class="addfunds_area_purchase_game game_area_purchase_game"><div class="addfunds_purchase_action game_purchase_action" style="float: right"><div class="game_purchase_action_bg"><div class="game_purchase_price price">' + custom_currency + ' <input type="number" id="add_custom" min="4" step=".01" value="4" style="margin-top: -5px;width: 55px;height: 18px;"></div><a class="btnv6_green_white_innerfade btn_medium" data-amount="400" data-currency="'+custom_currency+'" href="#" onclick="javascript:submitCustomFunds();"><span>Add funds</span></a></div></div><h1>Add your own amount</h1><p>'+custom_minimum+' Minimum</p></div>';
jQuery('#prices_user').prepend(custom_button);
