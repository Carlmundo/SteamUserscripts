// ==UserScript==
// @name         Steam Wishlist - Show User Ranks
// @version      1.0
// @description  View wishlist ranks for other users
// @author       Carlmundo
// @match        *://store.steampowered.com/wishlist/profiles/*
// @match        *://store.steampowered.com/wishlist/id/*
// @grant        none
// @downloadURL  http://highog.com/tools/steam_wishlistranks.user.js
// @updateURL    http://highog.com/tools/steam_wishlistranks.user.js
// ==/UserScript==
jQuery('head').prepend('<style>.hover_handle .top,.hover_handle img{display:none}.hover_handle{pointer-events:none}</style>');
jQuery('#wishlist_ctn').bind("DOMSubtreeModified",function(){
  jQuery(this).addClass('sort_order');
});