// app/modules/profile_effects/ProfileEffectStore.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
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
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.isProfileEffectRecord;
    var _closure1_slot7 = var8;
    var8 = {};
    var _closure1_slot8 = var8;
    var8 = 6;
    var9 = var6[var8];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var _closure1_slot9 = var9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var _closure1_slot10 = var8;
    var8 = false;
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var2;
    var2 = function handleProfileEffectUpdate(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 7;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.isEqual;
            var1 = _closure1_slot8;
            var1 = var1[var4];
            var1 = var5.bind(var6)(var1, var3);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 67; continue _fun0002 }
 57:
            var2 = _closure1_slot8;
            var2[var4] = var3;
            var1 = true;
 67:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var2 = function handleProductUpdate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = false;
        var _closure2_slot1 = var3;
        var4 = var2.items;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var6 = arg1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var6);
                if(!var2) { _fun0003_ip = 78; continue _fun0003 }
 20:
                var5 = {};
                var2 = var6.id;
                var5['id'] = var2;
                var2 = _closure2_slot0;
                var7 = var2.skuId;
                var5['skuId'] = var7;
                var5['config'] = var6;
                var4 = _closure1_slot14;
                var2 = var2.skuId;
                var2 = var4.bind(var1)(var2, var5);
                if(!var2) { _fun0003_ip = 78; continue _fun0003 }
 72:
                var2 = true;
                _closure2_slot1 = var2;
 78:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot1;
        return var1;
    };
    var _closure1_slot15 = var2;
    var2 = function handleCategoriesUpdate(arg1) {
        var4 = arg1;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = var1.products;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot15;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    if(!var2) { _fun0004_ip = 29; continue _fun0004 }
 20:
                    var2 = true;
                    _closure2_slot0 = var2;
 29:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot16 = var2;
    var2 = function handlePurchasesUpdate(arg1) {
        var4 = arg1;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                if(!var2) { _fun0005_ip = 29; continue _fun0005 }
 20:
                var2 = true;
                _closure2_slot0 = var2;
 29:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot17 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ProfileEffectStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
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
        var1 = 'getAllProfileEffects';
        var5['key'] = var1;
        var1 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getProfileEffect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0007_ip = 25; continue _fun0007 }
 14:
                var2 = _closure1_slot8;
                var1 = var2[var3];
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingAll';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'canFetchAll';
        var5['key'] = var7;
        var6 = function value() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot12;
            var1 = var2 >= var1;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ProfileEffectStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function PROFILE_EFFECTS_FETCH_ALL() {
        var1 = true;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL'] = var9;
    var9 = function PROFILE_EFFECTS_FETCH_ALL_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.configs;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot14;
            var3 = var1.skuId;
            var2 = {};
            var5 = var1.id;
            var2['id'] = var5;
            var5 = var1.skuId;
            var2['skuId'] = var5;
            var2['config'] = var1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = global;
        var1 = var1.Number;
        var1 = var1.POSITIVE_INFINITY;
        _closure1_slot12 = var1;
        var1 = 0;
        _closure1_slot13 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL_SUCCESS'] = var9;
    var9 = function PROFILE_EFFECTS_FETCH_ALL_FAILURE() {
        var1 = global;
        var3 = var1.Date;
        var2 = var3.now;
        var3 = var2.bind(var3)();
        var8 = _closure1_slot13;
        var6 = var1.Math;
        var5 = var6.min;
        var4 = _closure1_slot9;
        var9 = 2;
        var1 = exponentiationOperator(var9, var8);
        var4 = var4 * var1;
        var1 = _closure1_slot10;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var3 + var1;
        _closure1_slot12 = var1;
        var3 = _closure1_slot13;
        var1 = 1;
        var1 = var3 + var1;
        _closure1_slot13 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL_FAILURE'] = var9;
    var9 = function COLLECTIBLES_PRODUCT_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.product;
        var2 = _closure1_slot15;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_CATEGORIES_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.categories;
        var2 = _closure1_slot16;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var1 = var1.categories;
        var3 = _closure1_slot16;
        var2 = var1.categories;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var1 = var1.shopHome;
        var3 = _closure1_slot16;
        var2 = var1.categories;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_PURCHASES_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.purchases;
        var2 = _closure1_slot17;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['COLLECTIBLES_PURCHASES_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_CLAIM_SUCCESS(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.purchases;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0008_ip = 32; continue _fun0008 }
 18:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 32:
            return var1;
        }
    };
    var2['COLLECTIBLES_CLAIM_SUCCESS'] = var9;
    var4 = function LOGOUT() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = 0;
        _closure1_slot12 = var1;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/ProfileEffectStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();