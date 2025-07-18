// app/modules/billing/native/GenericIAPStore.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
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
    var8 = false;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GenericIAPStore() {
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
        var1 = 'isGenericIapConnected';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasGenericSubscription';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot7;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 38; continue _fun0003 }
 16:
                var4 = _closure1_slot7;
                var3 = var4.some;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.identifier;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.ProductIds;
                    var1 = var1.GENERIC_SUBSCRIPTION;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 38:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getProducts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getStoreFront';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GenericIAPStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function initGenericProducts(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var2 = var2.products;
            var3 = global;
            var4 = var3.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var10 = var5;
            var4 = new var10[var4](var9);
            var6 = var4 instanceof Object ? var4 : var5;
            var _closure2_slot0 = var6;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var10 = var4;
            var3 = new var10[var3](var9);
            var5 = var3 instanceof Object ? var3 : var4;
            var _closure2_slot1 = var5;
            var3 = var2.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure2_slot1;
                var4 = var5.add;
                var3 = var1.countryCode;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = var1.currencyCode;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var6.size;
            var4 = 1;
            var1 = var4 === var1;
            if(!var1) { _fun0004_ip = 112; continue _fun0004 }
 103:
            var3 = var5.size;
            var1 = var4 === var3;
 112:
            if(!var1) { _fun0004_ip = 178; continue _fun0004 }
 115:
            var3 = {};
            var1 = new Array(0);
            var4 = 0;
            var9 = var1;
            var8 = var6;
            var7 = 0;
            var6 = arraySpread(var9, var8, var7);
            var1 = var1[var4];
            var3['currency'] = var1;
            var1 = new Array(0);
            var9 = var1;
            var8 = var5;
            var5 = arraySpread(var9, var8, var7);
            var1 = var1[var4];
            var3['country'] = var1;
            _closure1_slot9 = var3;
            _closure1_slot7 = var2;
 178:
            var1 = undefined;
            return var1;
        }
    };
    var2['IAP_LOAD_GENERIC_PRODUCTS'] = var9;
    var9 = function genericIapInitConnection(arg1) {
        var1 = arg1;
        var2 = var1.connected;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GENERIC_IAP_INIT_CONNECTION'] = var9;
    var9 = function genericIapInitConnectionFailed() {
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GENERIC_IAP_INIT_CONNECTION_FAILED'] = var9;
    var4 = function genericIapEndConnection() {
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GENERIC_IAP_END_CONNECTION'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/GenericIAPStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();