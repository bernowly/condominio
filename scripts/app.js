!function(e){"use strict";var r=e.querySelector("#app");r.baseUrl="/",""===window.location.port,r.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},r.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),r.scrollPageToTop=function(){r.$.headerPanelMain.scrollToTop(!0)},r.closeDrawer=function(){r.$.paperDrawerPanel.closeDrawer()}}(document);var reg;"serviceWorker"in navigator&&(console.log("Service Worker is supported"),navigator.serviceWorker.register("sw.js").then(function(){return navigator.serviceWorker.ready}).then(function(e){reg=e,console.log("Service Worker is ready :^)",reg)})["catch"](function(e){console.log("Service Worker Error :^(",e)}));