// ==UserScript==
// @name         Steam Wishlist - See Ranks
// @version      1.1
// @description  View wishlist ranks for other users
// @author       Carlmundo
// @match        *://store.steampowered.com/wishlist/profiles/*
// @match        *://store.steampowered.com/wishlist/id/*
// @grant        none
// @downloadURL  https://github.com/Carlmundo/SteamUserscripts/raw/master/wishlistranks.user.js
// @updateURL    https://github.com/Carlmundo/SteamUserscripts/raw/master/wishlistranks.user.js
// ==/UserScript==
function SortByPriority(a, b){
  var aPriority = a.priority;
  var bPriority = b.priority;
  return ((aPriority < bPriority) ? -1 : ((aPriority > bPriority) ? 1 : 0));
}
jQuery(".controls").before('<div class="darkframe"><a id="getRanks" class="btnv6_green_white_innerfade btn_medium"><span>Show Wishlist Ranks</span></a></div>');
jQuery("#getRanks").click(function() {
    jQuery('head').prepend('<style>.hover_handle .top,.hover_handle img{display:none}.hover_handle{pointer-events:none}</style>');
    jQuery('#wishlist_ctn').addClass('sort_order');
    orderWishlist = g_rgWishlistData.sort(SortByPriority);
    g_rgWishlistData.each(function( index, value ) {
        jQuery('[data-app-id='+index.appid+'] .order_input').val(value+1);
    });
});