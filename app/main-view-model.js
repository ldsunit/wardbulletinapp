"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_decorator_1 = require("~/shared/observable-decorator");
var MainViewModel = /** @class */ (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this.src = "http://wardbulletin.com";
        _this.webPageLoaded = false;
        return _this;
    }
    __decorate([
        observable_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], MainViewModel.prototype, "webPageLoaded", void 0);
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
