// ==UserScript==
// @name         Steam Wishlist - See Ranks
// @version      1.1.1
// @description  View wishlist ranks for other users
// @author       Carlmundo
// @match        *://store.steampowered.com/wishlist/profiles/*
// @match        *://store.steampowered.com/wishlist/id/*
// @grant        none
// @downloadURL  https://github.com/Carlmundo/SteamUserscripts/raw/master/wishlistranks.user.js
// @updateURL    https://github.com/Carlmundo/SteamUserscripts/raw/master/wishlistranks.user.js
// ==/UserScript==
jQuery(".controls").before('<div class="darkframe"><a id="getRanks" class="btnv6_green_white_innerfade btn_medium"><span>Show Wishlist Ranks</span></a></div>');
jQuery("#getRanks").click(function() {
    jQuery('head').prepend('<style>.hover_handle .top,.hover_handle img{display:none}.hover_handle{pointer-events:none}</style>');
    jQuery('#wishlist_ctn').addClass('sort_order');
    g_rgWishlistData.each(function( index, value ) {
        if (index.priority == 0){g_rgWishlistData[value].priority = 999;}
    });
    g_rgWishlistData.sort(function(a, b){
        var a1= a.priority, b1= b.priority;
        if(a1== b1) return 0;
        return a1> b1? 1: -1;
    });
    g_rgWishlistData.each(function( index, value ) {
        jQuery('[data-app-id='+index.appid+'] .order_input').val(value+1);
         g_rgWishlistData[value].priority = value+1;
    });
});
