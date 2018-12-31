"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
function ObservableProperty() {
    return function (obj, key) {
        var storedValue = obj[key];
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function () { return storedValue; },
            set: function (value) {
                if (storedValue === value) {
                    return;
                }
                storedValue = value;
                this.notify({
                    eventName: observable_1.Observable.propertyChangeEvent,
                    propertyName: key,
                    object: this,
                    value: value,
                });
            }
        });
    };
}
exports.ObservableProperty = ObservableProperty;
