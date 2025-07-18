// app/stores/native/IAPStore.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.GPlayConnectionState;
    var _closure1_slot7 = var2;
    var2 = var2.DISCONNECTED;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot10 = var9;
    var9 = var8.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot11 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var2;
    var2 = false;
    var _closure1_slot14 = var2;
    var _closure1_slot15 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function IAPStore() {
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
                var1 = _closure1_slot16;
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
        var1 = 'getProducts';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOfferIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot10;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0003_ip = 32; continue _fun0003 }
 29:
                var1 = var2;
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isBusy';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot12;
                var3 = var1.size;
                var1 = 0;
                var1 = var3 > var1;
                if(var1) { _fun0004_ip = 25; continue _fun0004 }
 21:
                var1 = _closure1_slot14;
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isPurchasingProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
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
            var2 = _closure1_slot8;
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
            var2 = _closure1_slot8;
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
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isFetchingGoogleSkus';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot15;
            return var1;
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
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function updateConnectionState(arg1) {
        var1 = arg1;
        var2 = var1.connectionState;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_UPDATE_CONNECTION_STATE'] = var9;
    var9 = function handleFetchSkusStart() {
        var1 = true;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_FETCH_SKUS_START'] = var9;
    var9 = function skusLoaded(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var6 = var1.skus;
            var1 = undefined;
            var4 = undefined;
            var7 = undefined;
            var5 = var6.forEach;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot10;
                var2 = var3.set;
                var1 = var4.identifier;
                var1 = var2.bind(var3)(var1, var4);
                var1 = undefined;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var3 = global;
            var8 = var3.Array;
            var6 = var8.from;
            var9 = _closure1_slot10;
            var5 = var9.values;
            var5 = var5.bind(var9)();
            var10 = var6.bind(var8)(var5);
            var6 = null;
            var5 = var6 == var10;
            var9 = undefined;
            if(var5) { _fun0005_ip = 92; continue _fun0005 }
 77:
            var8 = var10.filter;
            var5 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var9 = var8.bind(var10)(var5);
 92:
            _closure1_slot9 = var9;
            if(!(var6 != var9)) { _fun0005_ip = 115; continue _fun0005 }
 100:
            var8 = var9.forEach;
            var5 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0006_ip = 22; continue _fun0006 }
 16:
                    var4 = var3.offerIds;
 22:
                    if(!(var2 != var4)) { _fun0006_ip = 43; continue _fun0006 }
 26:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = _closure1_slot11;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5);
 115: // try_start_0
            var5 = _closure1_slot9;
            var7 = var5;
            var8 = var6 == var5;
            var5 = undefined;
            if(var8) { _fun0005_ip = 148; continue _fun0005 }
 131:
            var9 = var7;
            var8 = var9.map;
            var7 = _closure1_slot17;
            var5 = var8.bind(var9)(var7);
 148:
            _closure1_slot9 = var5;
 152: // try_end0
            _fun0005_ip = 187; continue _fun0005;
 154: // catch_target0
            CatchBlockStart(arg_register=7);
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.captureBillingException;
            var5 = var5.bind(var7)(var8);
 187:
            var5 = _closure1_slot9;
            var4 = var5;
            if(!(var6 != var5)) { _fun0005_ip = 216; continue _fun0005 }
 198:
            var5 = var4;
            var4 = var5.forEach;
            var2 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot10;
                var2 = var3.set;
                var1 = var4.identifier;
                var1 = var2.bind(var3)(var1, var4);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
 216:
            var2 = false;
            _closure1_slot15 = var2;
            return var1;
        }
    };
    var2['GPLAY_SKUS_LOADED'] = var9;
    var9 = function handleFetchSkusFailed() {
        var1 = false;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_FETCH_SKUS_FAILED'] = var9;
    var9 = function handleVerificationStart(arg1) {
        var1 = arg1;
        var3 = var1.productId;
        var2 = _closure1_slot12;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_VERIFICATION_START'] = var9;
    var9 = function handleVerificationEnd(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.productId;
            var4 = _closure1_slot12;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0007_ip = 81; continue _fun0007 }
 29:
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
 81:
            var2 = _closure1_slot12;
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
        _closure1_slot13 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_UPDATE_PENDING_DOWNGRADE'] = var9;
    var4 = function handleUpdateIsDowngrading(arg1) {
        var1 = arg1;
        var2 = var1.isDowngrading;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GPLAY_UPDATE_IS_DOWNGRADING'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
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