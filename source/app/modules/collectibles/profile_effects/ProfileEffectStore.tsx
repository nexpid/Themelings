// app/modules/collectibles/profile_effects/ProfileEffectStore.tsx
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.isProfileEffectRecord;
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = function handleProfileEffectUpdate(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.isEqual;
            var1 = _closure1_slot8;
            var1 = var1[var4];
            var1 = var5.bind(var6)(var1, var3);
            var1 = !var1;
            if(!var1) { _fun0005_ip = 34; continue _fun0005 }
case 39:
            var2 = _closure1_slot8;
            var2[var4] = var3;
            var1 = true;
case 34:
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var2 = function handleProductOrPurchaseUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 7;
            var2 = var2[var5];
            var7 = undefined;
            var2 = var4.bind(var7)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var3 !== var2)) { _fun0006_ip = 40; continue _fun0006 }
case 9:
            var3 = var1.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var4.bind(var7)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.VARIANTS_GROUP;
            if(!(var3 === var2)) { _fun0006_ip = 41; continue _fun0006 }
case 40:
            var12 = var1.items;
            var3 = new Array(0);
            var11 = 0;
            var13 = var3;
            var2 = arraySpread(var13, var12, var11);
            var9 = var1.variants;
            var4 = null;
            var5 = var4 == var9;
            var1 = undefined;
            if(var5) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var6 = var9.flatMap;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.items;
                return var1;
            };
            var1 = var6.bind(var9)(var5);
case 42:
            if(!(var4 == var1)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var1 = new Array(0);
case 44:
            var13 = var3;
            var12 = var1;
            var11 = var2;
            var1 = arraySpread(var13, var12, var11);
            var2 = var3.filter;
            var1 = _closure1_slot7;
            var5 = var2.bind(var3)(var1);
            var2 = _closure1_slot14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var4 = var3.bind(var7)(var1);
            var3 = var4.uniqBy;
            var1 = 'skuId';
            var1 = var3.bind(var4)(var5, var1);
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = false;
            var1 = false;
            if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var2 = var3.value;
            var10 = {};
            var9 = var2.skuId;
            var10['skuId'] = var9;
            var10['config'] = var2;
            var9 = _closure1_slot9;
            var2 = var2.skuId;
            var2 = var9.bind(var7)(var2, var10);
            if(!var2) { _fun0006_ip = 14; continue _fun0006 }
case 48:
            var4 = true;
case 14:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var3 = var10;
            var1 = var4;
            if(!var2) { _fun0006_ip = 47; continue _fun0006 }
case 46:
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var2;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    if(!var2) { _fun0007_ip = 49; continue _fun0007 }
case 33:
                    var2 = true;
                    _closure2_slot0 = var2;
case 49:
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
    var _closure1_slot11 = var2;
    var2 = function handlePurchasesUpdate(arg1) {
        var4 = arg1;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot10;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                if(!var2) { _fun0008_ip = 49; continue _fun0008 }
case 33:
                var2 = true;
                _closure2_slot0 = var2;
case 49:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ProfileEffectStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 52; continue _fun0009;
case 50:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 52:
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
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getProfileEffect';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0010_ip = 53; continue _fun0010 }
case 36:
                var2 = _closure1_slot8;
                var1 = var2[var3];
case 53:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
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
    var9 = function COLLECTIBLES_PRODUCT_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.product;
        var2 = _closure1_slot10;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_CATEGORIES_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var1 = var1.categories;
        var3 = _closure1_slot11;
        var2 = var1.categories;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var1 = var1.shopHome;
        var3 = _closure1_slot11;
        var2 = var1.categories;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_PURCHASES_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.purchases;
        var2 = _closure1_slot12;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['COLLECTIBLES_PURCHASES_FETCH_SUCCESS'] = var9;
    var9 = function COLLECTIBLES_CLAIM_SUCCESS(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.purchases;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0011_ip = 54; continue _fun0011 }
case 55:
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 54:
            return var1;
        }
    };
    var2['COLLECTIBLES_CLAIM_SUCCESS'] = var9;
    var4 = function LOGOUT() {
        var1 = {};
        _closure1_slot8 = var1;
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
    var4 = 'modules/collectibles/profile_effects/ProfileEffectStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();