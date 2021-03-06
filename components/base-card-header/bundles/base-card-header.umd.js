(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-card-header', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-card-header'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardHeaderComponent = /** @class */ (function () {
        function BaseCardHeaderComponent() {
        }
        /**
         * @return {?}
         */
        BaseCardHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCardHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-card-header',
                        template: "<div class=\"card-header\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseCardHeaderComponent.ctorParameters = function () { return []; };
        return BaseCardHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card-header.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardHeaderModule = /** @class */ (function () {
        function BaseCardHeaderModule() {
        }
        BaseCardHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCardHeaderComponent],
                        imports: [],
                        exports: [BaseCardHeaderComponent]
                    },] }
        ];
        return BaseCardHeaderModule;
    }());

    exports.BaseCardHeaderComponent = BaseCardHeaderComponent;
    exports.BaseCardHeaderModule = BaseCardHeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-card-header.umd.js.map
