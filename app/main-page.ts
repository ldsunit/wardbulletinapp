import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { MainViewModel } from "./main-view-model";
import { LoadEventData, WebView } from "tns-core-modules/ui/web-view";

export function navigatingTo(args: EventData) {
  const page: Page = args.object as Page;

  page.backgroundSpanUnderStatusBar = true;
  page.bindingContext = new MainViewModel();
}

export function onWebViewLoaded(args: any): void {
  const webview: WebView = args.object;

  const page: Page = <Page> args.object.page;
  const vm = page.bindingContext as MainViewModel;

  // handle WebView load finish event
  webview.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
    if (!args.error) {
      webview.height = "auto";
      vm.set('webPageLoaded', true);
    } else {
      alert("Sorry, we're having issues connecting");
    }
  });
}
