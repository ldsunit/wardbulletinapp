import { Observable } from "tns-core-modules/data/observable";
import { ObservableProperty } from "~/shared/observable-decorator";

export class MainViewModel extends Observable {
  @ObservableProperty() public webPageLoaded: boolean;

  public src: string;

  constructor() {
    super();

    this.src = "http://wardbulletin.com";
    this.webPageLoaded = false;
  }
}
