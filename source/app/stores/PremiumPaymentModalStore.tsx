// app/stores/PremiumPaymentModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var10 = function handleSubscribeFailure(arg1) {
        var1 = arg1;
        var2 = var1.error;
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var9 = function handleClearError() {
        var1 = null;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot11 = var9;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = null;
    var _closure1_slot7 = var2;
    var _closure1_slot8 = var2;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PremiumPaymentModalStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'paymentError';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGiftCode';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot9;
                var3 = arg1;
                var1 = null;
                if(!(var3 === var4)) { _fun0003_ip = 20; continue _fun0003 }
 16:
                var1 = _closure1_slot8;
 20:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PremiumPaymentModalStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['PREMIUM_PAYMENT_SUBSCRIBE_FAIL'] = var10;
    var2['PREMIUM_PAYMENT_UPDATE_FAIL'] = var10;
    var10 = function handleSubscribeSuccess() {
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS'] = var10;
    var2['PREMIUM_PAYMENT_UPDATE_SUCCESS'] = var9;
    var2['PREMIUM_PAYMENT_ERROR_CLEAR'] = var9;
    var9 = function handlePayPalTokenizeFailure(arg1) {
        var1 = arg1;
        var5 = var1.message;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.BillingError;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var7 = var4;
        var6 = var5;
        var2 = new var7[var2](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot7 = var2;
        return var1;
    };
    var2['BRAINTREE_TOKENIZE_PAYPAL_FAIL'] = var9;
    var9 = function handleVenmoTokenizeFailure(arg1) {
        var1 = arg1;
        var5 = var1.message;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.BillingError;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var7 = var4;
        var6 = var5;
        var2 = new var7[var2](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot7 = var2;
        return var1;
    };
    var2['BRAINTREE_TOKENIZE_VENMO_FAIL'] = var9;
    var9 = function handleSKUPurchaseSuccess(arg1) {
        var1 = arg1;
        var3 = var1.giftCode;
        _closure1_slot8 = var3;
        var1 = var1.skuId;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_SUCCESS'] = var9;
    var9 = function handleSKUPurchaseFail(arg1) {
        var1 = arg1;
        var2 = var1.error;
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_FAIL'] = var9;
    var9 = function handleSKUPurchaseAwaitConfirmation(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.isGift;
            if(!var2) { _fun0004_ip = 25; continue _fun0004 }
 12:
            var2 = var1.skuId;
            _closure1_slot9 = var2;
 25:
            var1 = undefined;
            return var1;
        }
    };
    var2['SKU_PURCHASE_AWAIT_CONFIRMATION'] = var9;
    var4 = function handleGiftCodeCreate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.giftCode;
            var3 = var1.uses;
            var2 = 0;
            if(!(var2 === var3)) { _fun0005_ip = 51; continue _fun0005 }
 21:
            var4 = var1.sku_id;
            var3 = _closure1_slot9;
            if(!(var4 === var3)) { _fun0005_ip = 51; continue _fun0005 }
 38:
            var1 = var1.code;
            _closure1_slot8 = var1;
            var1 = undefined;
            return var1;
 51:
            var1 = false;
            return var1;
        }
    };
    var2['GIFT_CODE_CREATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PremiumPaymentModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();