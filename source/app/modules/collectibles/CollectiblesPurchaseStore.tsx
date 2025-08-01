// app/modules/collectibles/CollectiblesPurchaseStore.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot7 = var2;
    var _closure1_slot8 = var2;
    var2 = false;
    var _closure1_slot9 = var2;
    var _closure1_slot10 = var1;
    var _closure1_slot11 = var1;
    var _closure1_slot12 = var1;
    var _closure1_slot13 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function CollectiblesPurchaseStore() {
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
                var1 = _closure1_slot14;
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
        var1 = 'isFetching';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'isClaiming';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'purchases';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'fetchError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'claimError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasPreviouslyFetched';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPurchase';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0003_ip = 31; continue _fun0003 }
 14:
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
 31:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CollectiblesPurchaseStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function COLLECTIBLES_PURCHASES_FETCH() {
        var1 = true;
        _closure1_slot9 = var1;
        var1 = undefined;
        _closure1_slot11 = var1;
        return var1;
    };
    var2['COLLECTIBLES_PURCHASES_FETCH'] = var9;
    var9 = function COLLECTIBLES_PURCHASES_FETCH_SUCCESS(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.purchases;
            var2 = var2.length;
            var7 = 0;
            if(!(var7 !== var2)) { _fun0004_ip = 152; continue _fun0004 }
 23:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isEqual;
            var4 = _closure1_slot8;
            var3 = var4.values;
            var9 = var3.bind(var4)();
            var4 = new Array(0);
            var10 = var4;
            var8 = 0;
            var3 = arraySpread(var10, var9, var8);
            var3 = var1.purchases;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0004_ip = 163; continue _fun0004 }
 95:
            var3 = global;
            var4 = var3.Map;
            var5 = var1.purchases;
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var10 = var3.bind(var5)(var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var1 = new var11[var4](var10, var9);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot8 = var1;
            _fun0004_ip = 163; continue _fun0004;
 152:
            var1 = _closure1_slot7;
            _closure1_slot8 = var1;
 163:
            var1 = true;
            _closure1_slot13 = var1;
            var1 = false;
            _closure1_slot9 = var1;
            var1 = undefined;
            _closure1_slot11 = var1;
            return var1;
        }
    };
    var2['COLLECTIBLES_PURCHASES_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_PURCHASES_FETCH_FAILURE(arg1) {
        var1 = arg1;
        var1 = var1.error;
        var3 = _closure1_slot7;
        _closure1_slot8 = var3;
        var3 = false;
        _closure1_slot9 = var3;
        _closure1_slot11 = var1;
        var1 = true;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_PURCHASES_FETCH_FAILURE'] = var9;
    var9 = function COLLECTIBLES_CLAIM(arg1) {
        var1 = arg1;
        var1 = var1.skuId;
        _closure1_slot10 = var1;
        var1 = undefined;
        _closure1_slot12 = var1;
        return var1;
    };
    var2['COLLECTIBLES_CLAIM'] = var9;
    var9 = function COLLECTIBLES_CLAIM_SUCCESS(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.purchases;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 167; continue _fun0005 }
 18:
            var2 = var1.purchases;
            var2 = var2.length;
            var7 = 0;
            if(!(var7 !== var2)) { _fun0005_ip = 167; continue _fun0005 }
 38:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.isEqual;
            var4 = _closure1_slot8;
            var3 = var4.values;
            var9 = var3.bind(var4)();
            var4 = new Array(0);
            var10 = var4;
            var8 = 0;
            var3 = arraySpread(var10, var9, var8);
            var3 = var1.purchases;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0005_ip = 178; continue _fun0005 }
 110:
            var3 = global;
            var4 = var3.Map;
            var5 = var1.purchases;
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var10 = var3.bind(var5)(var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var1 = new var11[var4](var10, var9);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot8 = var1;
            _fun0005_ip = 178; continue _fun0005;
 167:
            var1 = _closure1_slot7;
            _closure1_slot8 = var1;
 178:
            var1 = undefined;
            _closure1_slot10 = var1;
            _closure1_slot12 = var1;
            return var1;
        }
    };
    var2['COLLECTIBLES_CLAIM_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_CLAIM_FAILURE(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = var1.skuId;
        _closure1_slot10 = var3;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_CLAIM_FAILURE'] = var9;
    var4 = function LOGOUT() {
        var1 = _closure1_slot7;
        _closure1_slot8 = var1;
        var2 = false;
        _closure1_slot9 = var2;
        var1 = undefined;
        _closure1_slot10 = var1;
        _closure1_slot11 = var1;
        _closure1_slot12 = var1;
        _closure1_slot13 = var2;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/CollectiblesPurchaseStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();