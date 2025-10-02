// app/stores/native/IAPStore.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function updateProduct(arg1) {
        var2 = arg1;
        var3 = var2.currencyCode;
        var1 = var3.toLowerCase;
        var4 = var1.bind(var3)();
        var3 = var2.price;
        var1 = 100;
        var6 = var3 / var1;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.formatPrice;
        var1 = {};
        var7 = false;
        var1['convertToMajorUnits'] = var7;
        var3 = var3.bind(var5)(var6, var4, var1);
        var1 = {};
        var10 = var1;
        var9 = var2;
        var5 = copyDataProperties(var10, var9);
        var5 = var2.price;
        var2 = 'price';
        var1[var2] = var5;
        var2 = 'currencyCode';
        var1[var2] = var4;
        var2 = 'priceString';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot19 = var1;
    var9 = function skusLoaded(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.skus;
            var2 = var1.skusType;
            var1 = undefined;
            var5 = undefined;
            var8 = undefined;
            var6 = var7.forEach;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot11;
                var2 = var3.set;
                var1 = var4.identifier;
                var1 = var2.bind(var3)(var1, var4);
                var1 = undefined;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var3 = global;
            var9 = var3.Array;
            var7 = var9.from;
            var10 = _closure1_slot11;
            var6 = var10.values;
            var6 = var6.bind(var10)();
            var11 = var7.bind(var9)(var6);
            var7 = null;
            var6 = var7 == var11;
            var10 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var9 = var11.filter;
            var6 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var10 = var9.bind(var11)(var6);
case 6:
            _closure1_slot10 = var10;
            if(!(var7 != var10)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var9 = var10.forEach;
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = var3.offerIds;
case 10:
                    if(!(var2 != var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = _closure1_slot12;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6);
case 8: // try_start_0
            var6 = _closure1_slot10;
            var8 = var6;
            var9 = var7 == var6;
            var6 = undefined;
            if(var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var10 = var8;
            var9 = var10.map;
            var8 = _closure1_slot19;
            var6 = var9.bind(var10)(var8);
case 14:
            _closure1_slot10 = var6;
case 16: // try_end0
            _fun0002_ip = 17; continue _fun0002;
case 18: // catch_target0
            CatchBlockStart(arg_register=8);
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 7;
            var6 = var10[var6];
            var8 = var8.bind(var1)(var6);
            var6 = var8.captureBillingException;
            var6 = var6.bind(var8)(var9);
case 17:
            var6 = _closure1_slot10;
            var5 = var6;
            if(!(var7 != var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = var5;
            var5 = var6.forEach;
            var4 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot11;
                var2 = var3.set;
                var1 = var4.identifier;
                var1 = var2.bind(var3)(var1, var4);
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
case 19:
            var4 = var2;
            var2 = _closure1_slot8;
            var2 = var2.IN_APP;
            if(!(var2 !== var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = _closure1_slot8;
            var2 = var2.SUBSCRIPTION;
            if(!(var2 === var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = false;
            _closure1_slot17 = var2;
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var2 = false;
            _closure1_slot16 = var2;
case 23:
            return var1;
        }
    };
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
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
    var2 = 5;
    var2 = var6[var2];
    var10 = var5.bind(var1)(var2);
    var2 = var10.GPlayConnectionState;
    var _closure1_slot7 = var2;
    var10 = var10.GPlaySkusType;
    var _closure1_slot8 = var10;
    var2 = var2.DISCONNECTED;
    var _closure1_slot9 = var2;
    var2 = null;
    var _closure1_slot10 = var2;
    var10 = var8.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot11 = var10;
    var10 = var8.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot12 = var10;
    var8 = var8.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var2;
    var2 = false;
    var _closure1_slot15 = var2;
    var _closure1_slot16 = var2;
    var _closure1_slot17 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function IAPStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 27; continue _fun0004;
case 25:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 27:
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
        var1 = 'getProducts';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOfferIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot11;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var1 = var2;
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isBusy';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure1_slot13;
                var3 = var1.size;
                var1 = 0;
                var1 = var3 > var1;
                if(var1) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                var1 = _closure1_slot15;
case 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isPurchasingProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isReady';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot9;
            var1 = _closure1_slot7;
            var1 = var1.CONNECTED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasConnectionError';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot9;
            var1 = _closure1_slot7;
            var1 = var1.ERROR;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getPendingDowngrade';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isFetchingGoogleSkus';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure1_slot17;
                if(var1) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var1 = _closure1_slot16;
case 32:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'IAPStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function updateConnectionState(arg1) {
        var1 = arg1;
        var2 = var1.connectionState;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_UPDATE_CONNECTION_STATE'] = var10;
    var10 = function handleFetchSubscriptionSkusStart() {
        var1 = true;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_FETCH_SUBSCRIPTION_SKUS_START'] = var10;
    var2['GPLAY_SUBSCRIPTION_SKUS_LOADED'] = var9;
    var10 = function handleFetchSubscriptionSkusFailed() {
        var1 = false;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED'] = var10;
    var10 = function handleFetchInAppSkusStart() {
        var1 = true;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_FETCH_IN_APP_SKUS_START'] = var10;
    var2['GPLAY_IN_APP_SKUS_LOADED'] = var9;
    var9 = function handleFetchInAppSkusFailed() {
        var1 = false;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_FETCH_IN_APP_SKUS_FAILED'] = var9;
    var9 = function handleVerificationStart(arg1) {
        var1 = arg1;
        var3 = var1.productId;
        var2 = _closure1_slot13;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_VERIFICATION_START'] = var9;
    var9 = function handleVerificationEnd(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.productId;
            var4 = _closure1_slot13;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0008_ip = 34; continue _fun0008 }
case 29:
            var2 = global;
            var5 = var2.Error;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = 'Tried verifying product without initialization: ';
            var6 = var4.bind(var2)(var3);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            throw var2;
case 34:
            var2 = _closure1_slot13;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['GPLAY_VERIFICATION_END'] = var9;
    var9 = function handleUpdatePendingDowngrade(arg1) {
        var1 = arg1;
        var2 = var1.pendingDowngrade;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_UPDATE_PENDING_DOWNGRADE'] = var9;
    var4 = function handleUpdateIsDowngrading(arg1) {
        var1 = arg1;
        var2 = var1.isDowngrading;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_UPDATE_IS_DOWNGRADING'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/native/IAPStore.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();