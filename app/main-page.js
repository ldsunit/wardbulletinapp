"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var web_view_1 = require("tns-core-modules/ui/web-view");
function navigatingTo(args) {
    var page = args.object;
    page.backgroundSpanUnderStatusBar = true;
    page.bindingContext = new main_view_model_1.MainViewModel();
}
exports.navigatingTo = navigatingTo;
function onWebViewLoaded(args) {
    var webview = args.object;
    var page = args.object.page;
    var vm = page.bindingContext;
    // handle WebView load finish event
    webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        if (!args.error) {
            webview.height = "auto";
            vm.set('webPageLoaded', true);
        }
        else {
            alert("Sorry, we're having issues connecting");
        }
    });
}
exports.onWebViewLoaded = onWebViewLoaded;
