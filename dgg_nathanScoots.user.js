// ==UserScript==
// @name         Depressing script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  I'M NOT WEB DEVELOPER. IDK SHIT ABOUT JS | the syntax is EMOTE :EMOTE-YOU-WANT-THE-ANIMATION-OF Ex: OMEGALUL :COGGERS This will coggers the omegalul
// @author       de_pressed
// @match        https://www.destiny.gg/bigscreen
// @icon         https://www.google.com/s2/favicons?domain=destiny.gg
// @grant        none
// @run-at       document-idle
// ==/UserScript==
//use
const DGG_ANIMATION_EMOTES = [
    "AYAYA", "Blesstiny", "Blade", "COGGERS", "COOMER", "Hhhehhehe",
    "JAMSTINY", "Nappa", "PepeLaugh", "PepoTurkey", "widepeepoHappy", "MLADY"
];
// Emotes with animations don't get additional animation?
// Some animations just replaces the whole emote
const DGG_EMOTES_THAT_WOULD_LOOK_STUPID_WITH_HALLOWEEN_ANIMATION = [
    "GODSTINY","OverRustle",
];
(function() {
//
    'use-strict';
     const imgUrl = ' <img style="max-height: 32px; position: relative; margin-top: -32px; top: 7.5px;" src="data:image/jpeg;base64,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" \> ';
     let observer = new MutationObserver((mutations) => {
       mutations.forEach((m) => {
           var o = m.addedNodes[0];
           var repStr = o.innerHTML;
           if (repStr.includes(" :") && repStr.includes('class="emote ')) {
               for (var emote of DGG_ANIMATION_EMOTES) {
                   if (repStr.includes(" :" + emote)) {
                       var theIndx = repStr.indexOf('class="emote ', repStr.indexOf(" :" + emote) - 50) + 13;
                       repStr = repStr.slice(0, theIndx) + " "+ emote +" " + repStr.slice(theIndx);
                       repStr = repStr.replace(" :" + emote, "");
                   }
               }
 
           }
           o.innerHTML = repStr.replaceAll("KEKW", imgUrl);
       });
    });
 
    function observeDOM() {
        observer.observe(document.querySelectorAll("iframe")[1].contentWindow.document.querySelector(".chat-lines"), {
            childList: true,
            attributes: true,
            attributeFilter: ['style'],
            subtree: true
        });
    };
 
    setTimeout(observeDOM, 3000);
})();
