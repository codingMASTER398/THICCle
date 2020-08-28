// ==UserScript==
// @name         THICCle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Google remix - THICCle
// @author       codingMASTER398
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getImagesByAlt(alt) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alt) {
            images.push(allImages[i]);
        }
    }
    return images;
    }

    getImagesByAlt("Google")[0].src = "https://i.ibb.co/KjjkDD5/Logo.png"
    document.getElementById("hplogo").src = "https://i.ibb.co/KjjkDD5/Logo.png"
    document.getElementById("hplogo").srcset = "https://i.ibb.co/KjjkDD5/Logo.png"
})();