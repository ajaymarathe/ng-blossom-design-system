import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseModalComponent = /** @class */ (function () {
    function BaseModalComponent() {
    }
    /**
     * @return {?}
     */
    BaseModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-modal',
                    template: "<div [class]=\"'modal fade bd-example-modal-'+size\" [id]=\"target\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div [class]=\"'modal-dialog modal-dialog-centered modal-'+size\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseModalComponent.ctorParameters = function () { return []; };
    BaseModalComponent.propDecorators = {
        target: [{ type: Input }],
        size: [{ type: Input }]
    };
    return BaseModalComponent;
}());
if (false) {
    /** @type {?} */
    BaseModalComponent.prototype.target;
    /** @type {?} */
    BaseModalComponent.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseModalModule = /** @class */ (function () {
    function BaseModalModule() {
    }
    BaseModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseModalComponent],
                    imports: [],
                    exports: [BaseModalComponent]
                },] }
    ];
    return BaseModalModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-modal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseModalComponent, BaseModalModule };
//# sourceMappingURL=base-modal.js.map
