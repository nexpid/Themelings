// app/modules/collectibles/CollectiblesCategoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
            var9 = _closure1_slot29;
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
            var7 = _closure1_slot29;
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
    var _closure1_slot28 = var1;
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
    var _closure1_slot29 = var1;
    var1 = function updateCategoriesAndProducts(arg1) {
        var1 = arg1;
        _closure1_slot19 = var1;
        var6 = global;
        var7 = var6.Map;
        var4 = _closure1_slot19;
        var1 = var4.values;
        var15 = var1.bind(var4)();
        var8 = new Array(0);
        var16 = var8;
        var14 = 0;
        var1 = arraySpread(var16, var15, var14);
        var4 = var8.map;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.storeListingId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var16 = var4.bind(var8)(var1);
        var4 = var7.prototype;
        var4 = Object.create(var4, {constructor: {value: var7}});
        var17 = var4;
        var1 = new var17[var7](var16, var15);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot20 = var1;
        var11 = var6.Map;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 11;
        var9 = var8[var4];
        var1 = undefined;
        var13 = var7.bind(var1)(var9);
        var12 = var13.getProductsFromCategories;
        var10 = _closure1_slot19;
        var9 = true;
        var12 = var12.bind(var13)(var10, var9);
        var10 = var12.map;
        var9 = function(arg1) {
            var2 = arg1;
            var3 = var2.skuId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var16 = var10.bind(var12)(var9);
        var10 = var11.prototype;
        var10 = Object.create(var10, {constructor: {value: var11}});
        var17 = var10;
        var9 = new var17[var11](var16, var15);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure2_slot0 = var9;
        var12 = _closure1_slot14;
        var11 = var12.forEach;
        var10 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var5 = _closure2_slot0;
                var3 = var5.has;
                var2 = var4.skuId;
                var2 = var3.bind(var5)(var2);
                if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 38:
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = var4.skuId;
                var1 = var2.bind(var3)(var1, var4);
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var10 = var11.bind(var12)(var10);
        _closure1_slot14 = var9;
        var6 = var6.Map;
        var4 = var8[var4];
        var9 = var7.bind(var1)(var4);
        var8 = var9.getProductsFromCategories;
        var7 = _closure1_slot19;
        var4 = false;
        var7 = var8.bind(var9)(var7, var4);
        var4 = var7.map;
        var2 = function(arg1) {
            var2 = arg1;
            var3 = var2.storeListingId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var16 = var4.bind(var7)(var2);
        var4 = var6.prototype;
        var4 = Object.create(var4, {constructor: {value: var6}});
        var17 = var4;
        var2 = new var17[var6](var16, var15);
        var4 = var2 instanceof Object ? var2 : var4;
        _closure1_slot15 = var4;
        var2 = var4.values;
        var15 = var2.bind(var4)();
        var2 = new Array(0);
        var16 = var2;
        var4 = arraySpread(var16, var15, var14);
        _closure1_slot16 = var2;
        return var1;
    };
    var _closure1_slot30 = var1;
    var4 = function reset() {
        var1 = _closure1_slot12;
        _closure1_slot19 = var1;
        var1 = _closure1_slot13;
        _closure1_slot14 = var1;
        var1 = undefined;
        _closure1_slot23 = var1;
        var2 = false;
        _closure1_slot21 = var2;
        var2 = {};
        _closure1_slot18 = var2;
        var2 = global;
        var5 = var2.Object;
        var4 = var5.values;
        var2 = _closure1_slot17;
        var5 = var4.bind(var5)(var2);
        var4 = var5.forEach;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.cancel;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var4.bind(var5)(var2);
        var2 = {};
        _closure1_slot17 = var2;
        _closure1_slot22 = var1;
        _closure1_slot24 = var1;
        var2 = {};
        _closure1_slot25 = var2;
        var2 = 0;
        _closure1_slot26 = var2;
        return var1;
    };
    var _closure1_slot31 = var4;
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var2 = 0;
    var10 = var6[var2];
    var1 = undefined;
    var10 = var7.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var11 = var6[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.Millis;
    var12 = var11.SECOND;
    var11 = 10;
    var12 = var11 * var12;
    var _closure1_slot10 = var12;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var11 * var10;
    var _closure1_slot11 = var10;
    var10 = var8.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var17 = var11;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot12 = var10;
    var11 = var8.Map;
    var12 = var11.prototype;
    var12 = Object.create(var12, {constructor: {value: var11}});
    var17 = var12;
    var11 = new var17[var11](var16);
    var12 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot13 = var12;
    var11 = var8.Map;
    var13 = var11.prototype;
    var13 = Object.create(var13, {constructor: {value: var11}});
    var17 = var13;
    var11 = new var17[var11](var16);
    var11 = var11 instanceof Object ? var11 : var13;
    var8 = var8.Map;
    var13 = var8.prototype;
    var13 = Object.create(var13, {constructor: {value: var8}});
    var17 = var13;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var13;
    var _closure1_slot14 = var12;
    var _closure1_slot15 = var11;
    var11 = new Array(0);
    var _closure1_slot16 = var11;
    var11 = {};
    var _closure1_slot17 = var11;
    var11 = {};
    var _closure1_slot18 = var11;
    var _closure1_slot19 = var10;
    var _closure1_slot20 = var8;
    var8 = false;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var1;
    var _closure1_slot23 = var1;
    var _closure1_slot24 = var1;
    var8 = {};
    var _closure1_slot25 = var8;
    var _closure1_slot26 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function CollectiblesCategoryStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 42; continue _fun0006;
case 40:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 42:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.syncWith;
            var5 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot31;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetchingCategories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var2 = _closure1_slot18;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var3 = var2.state;
case 45:
                var2 = 'fetching';
                var1 = var2 === var3;
case 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isProductFetchBackedOff';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0008_ip = 47; continue _fun0008 }
case 44:
                var2 = _closure1_slot17;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 46:
                var3 = var2.pending;
case 48:
                var2 = true;
                var1 = var2 === var3;
case 47:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'error';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'lastErrorTimestamp';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'lastSuccessfulFetch';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'lastFetchOptions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'categories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'products';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'productsWithVariantsAsGroup';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'skipNumCategories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getCategory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0009_ip = 49; continue _fun0009 }
case 36:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0010_ip = 49; continue _fun0010 }
case 36:
                var3 = _closure1_slot14;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getProductsBySkus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = arg1;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot14;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getProductFetch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0011_ip = 50; continue _fun0011 }
case 36:
                var2 = _closure1_slot18;
                var1 = var2[var3];
case 50:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getProductByStoreListingId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0012_ip = 49; continue _fun0012 }
case 36:
                var3 = _closure1_slot15;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getCategoryByStoreListingId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0013_ip = 49; continue _fun0013 }
case 36:
                var3 = _closure1_slot20;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getCategoryForProduct';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = this;
                var2 = var3.getProduct;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = var3.getCategory;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if(var5) { _fun0014_ip = 51; continue _fun0014 }
case 52:
                var1 = var4.categorySkuId;
case 51:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CollectiblesCategoryStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleFetchCategories(arg1) {
        var1 = true;
        _closure1_slot21 = var1;
        var1 = undefined;
        _closure1_slot22 = var1;
        _closure1_slot24 = var1;
        var2 = arg1;
        var2 = var2.options;
        _closure1_slot25 = var2;
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH'] = var10;
    var10 = function handleFetchCategoriesSuccess(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var1 = var2.categories;
            var1 = var1.collections;
            var1 = var1.length;
            var10 = 0;
            if(!(!(var1 > var10))) { _fun0015_ip = 53; continue _fun0015 }
case 38:
            var1 = var2.categories;
            var8 = var1.categories;
            _fun0015_ip = 54; continue _fun0015;
case 53:
            var1 = var2.categories;
            var5 = var1.collections;
            var3 = var5.map;
            var1 = _closure1_slot9;
            var1 = var1.fromStorefrontCollectionRecord;
            var8 = var3.bind(var5)(var1);
case 54:
            var1 = var8.length;
            if(!(var10 !== var1)) { _fun0015_ip = 55; continue _fun0015 }
case 56:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.isEqual;
            var9 = _closure1_slot19;
            var5 = var9.values;
            var12 = var5.bind(var9)();
            var5 = new Array(0);
            var13 = var5;
            var11 = 0;
            var9 = arraySpread(var13, var12, var11);
            var5 = var6.bind(var7)(var5, var8);
            if(var5) { _fun0015_ip = 57; continue _fun0015 }
case 58:
            var2 = var2.noOp;
            if(var2) { _fun0015_ip = 57; continue _fun0015 }
case 59:
            var5 = global;
            var7 = var5.Map;
            var6 = var8.map;
            var2 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var13 = var6.bind(var8)(var2);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var14 = var6;
            var2 = new var14[var7](var13, var12);
            var2 = var2 instanceof Object ? var2 : var6;
            var _closure2_slot0 = var2;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var _closure2_slot1 = var5;
            var6 = _closure1_slot19;
            var5 = var6.forEach;
            var4 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot0;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var3);
                    var2 = !var2;
                    if(!var2) { _fun0016_ip = 11; continue _fun0016 }
case 60:
                    var6 = var4.unpublishedAt;
                    var5 = null;
                    var5 = var5 == var6;
                    if(var5) { _fun0016_ip = 61; continue _fun0016 }
case 47:
                    var7 = var4.unpublishedAt;
                    var6 = _closure2_slot1;
                    var5 = var7 > var6;
case 61:
                    var2 = var5;
case 11:
                    if(!var2) { _fun0016_ip = 54; continue _fun0016 }
case 62:
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var4);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var1 = _closure1_slot30;
            var1 = var1.bind(var3)(var2);
            _fun0015_ip = 57; continue _fun0015;
case 55:
            var1 = _closure1_slot12;
            _closure1_slot19 = var1;
            var1 = _closure1_slot13;
            _closure1_slot14 = var1;
case 57:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            _closure1_slot23 = var1;
            var1 = false;
            _closure1_slot21 = var1;
            var1 = undefined;
            _closure1_slot22 = var1;
            _closure1_slot24 = var1;
            return var1;
        }
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchCategoriesFailure(arg1) {
        var1 = arg1;
        var1 = var1.error;
        var3 = _closure1_slot12;
        _closure1_slot19 = var3;
        var3 = _closure1_slot13;
        _closure1_slot14 = var3;
        var3 = false;
        _closure1_slot21 = var3;
        var3 = {};
        _closure1_slot18 = var3;
        _closure1_slot22 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_FAILURE'] = var10;
    var10 = function handleFetchProduct(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var4 = var1.startedAt;
        var2 = _closure1_slot18;
        var1 = {};
        var5 = 'fetching';
        var1['state'] = var5;
        var1['startedAt'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_PRODUCT_FETCH'] = var10;
    var10 = function handleFetchProductSuccess(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = var1.skuId;
            var6 = var1.product;
            var7 = var1.endedAt;
            var2 = _closure1_slot14;
            var1 = var2.get;
            var1 = var1.bind(var2)(var4);
            var2 = null;
            if(!(var2 != var1)) { _fun0017_ip = 63; continue _fun0017 }
case 6:
            var12 = global;
            var9 = var12.Object;
            var8 = var9.keys;
            var5 = var6.prices;
            var5 = var8.bind(var9)(var5);
            var5 = var5.length;
            var11 = 0;
            if(!(var11 === var5)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
            var5 = var1.prices;
            var6['prices'] = var5;
            var5 = var1.bundledProducts;
            if(!(var2 != var5)) { _fun0017_ip = 63; continue _fun0017 }
case 65:
            var5 = var6.bundledProducts;
            if(!(var2 != var5)) { _fun0017_ip = 63; continue _fun0017 }
case 66:
            var8 = var12.Map;
            var9 = var1.bundledProducts;
            var5 = var9.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.prices;
                var1[1] = var2;
                return var1;
            };
            var19 = var5.bind(var9)(var1);
            var5 = var8.prototype;
            var5 = Object.create(var5, {constructor: {value: var8}});
            var20 = var5;
            var1 = new var20[var8](var19, var18);
            var10 = var1 instanceof Object ? var1 : var5;
            var5 = _closure1_slot28;
            var1 = var6.bundledProducts;
            var9 = undefined;
            var8 = var5.bind(var9)(var1);
            var5 = var8.bind(var9)();
            var1 = var5.done;
            if(var1) { _fun0017_ip = 63; continue _fun0017 }
case 67:
            var13 = var5.value;
            var14 = var10.get;
            var1 = var13.skuId;
            var1 = var14.bind(var10)(var1);
            var14 = var2 != var1;
            if(!var14) { _fun0017_ip = 68; continue _fun0017 }
case 69:
            var17 = var12.Object;
            var16 = var17.keys;
            var15 = var13.prices;
            var15 = var16.bind(var17)(var15);
            var15 = var15.length;
            var14 = var11 === var15;
case 68:
            if(!var14) { _fun0017_ip = 70; continue _fun0017 }
case 71:
            var13['prices'] = var1;
case 70:
            var13 = var8.bind(var9)();
            var1 = var13.done;
            var5 = var13;
            if(!var1) { _fun0017_ip = 67; continue _fun0017 }
case 63:
            var5 = _closure1_slot14;
            var1 = var5.set;
            var1 = var1.bind(var5)(var4, var6);
            var6 = _closure1_slot18;
            var5 = {};
            var1 = 'success';
            var5['state'] = var1;
            var1 = _closure1_slot18;
            var9 = var1[var4];
            var10 = var2 == var9;
            var1 = undefined;
            var8 = undefined;
            if(var10) { _fun0017_ip = 72; continue _fun0017 }
case 30:
            var8 = var9.startedAt;
case 72:
            var5['startedAt'] = var8;
            var5['endedAt'] = var7;
            var6[var4] = var5;
            var3 = _closure1_slot17;
            var3 = var3[var4];
            if(!(var2 != var3)) { _fun0017_ip = 73; continue _fun0017 }
case 74:
            var2 = var3.succeed;
            var2 = var2.bind(var3)();
case 73:
            return var1;
        }
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchProductFailure(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var6 = var1.skuId;
            var _closure2_slot0 = var6;
            var8 = var1.error;
            var9 = var1.endedAt;
            var7 = _closure1_slot18;
            var4 = {};
            var1 = 'error';
            var4['state'] = var1;
            var1 = _closure1_slot18;
            var11 = var1[var6];
            var3 = null;
            var12 = var3 == var11;
            var1 = undefined;
            var10 = undefined;
            if(var12) { _fun0018_ip = 40; continue _fun0018 }
case 75:
            var10 = var11.startedAt;
case 40:
            var4['startedAt'] = var10;
            var4['endedAt'] = var9;
            var4['error'] = var8;
            var7[var6] = var4;
            var4 = _closure1_slot17;
            var4 = var4[var6];
            if(!(var3 == var4)) { _fun0018_ip = 19; continue _fun0018 }
case 76:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var9 = var7.bind(var1)(var3);
            var14 = _closure1_slot10;
            var13 = _closure1_slot11;
            var7 = var9.prototype;
            var7 = Object.create(var7, {constructor: {value: var9}});
            var15 = var7;
            var3 = new var15[var9](var14, var13, var12);
            var3 = var3 instanceof Object ? var3 : var7;
            var5 = _closure1_slot17;
            var5[var6] = var3;
            var4 = var3;
case 19:
            var3 = var4.pending;
            if(var3) { _fun0018_ip = 77; continue _fun0018 }
case 78:
            var3 = var4.fail;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED';
                var1['type'] = var4;
                var4 = _closure2_slot0;
                var1['skuId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 77:
            return var1;
        }
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_FAILURE'] = var10;
    var10 = function handleProductFetchBackoffExpired(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var2 = var1.skuId;
            var1 = _closure1_slot17;
            var2 = var1[var2];
            var1 = null;
            if(!(var1 != var2)) { _fun0019_ip = 79; continue _fun0019 }
case 50:
            var1 = var2.cancel;
            var1 = var1.bind(var2)();
case 79:
            var1 = undefined;
            return var1;
        }
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED'] = var10;
    var10 = function handleFetchShopHomeSuccess(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.shopHome;
            var2 = var2.categories;
            var2 = var2.length;
            var6 = 0;
            if(!(var6 !== var2)) { _fun0020_ip = 80; continue _fun0020 }
case 60:
            var2 = global;
            var4 = var2.Map;
            var1 = var1.shopHome;
            var5 = var1.categories;
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var9 = var3.bind(var5)(var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var5 = var1 instanceof Object ? var1 : var3;
            var3 = _closure1_slot30;
            var4 = var2.Map;
            var8 = _closure1_slot19;
            var1 = new Array(0);
            var9 = var1;
            var7 = 0;
            var7 = arraySpread(var9, var8, var7);
            var9 = var1;
            var8 = var5;
            var2 = arraySpread(var9, var8, var7);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var10 = var2;
            var9 = var1;
            var1 = new var10[var4](var9, var8);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 80:
            var1 = undefined;
            return var1;
        }
    };
    var2['COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS'] = var10;
    var9 = function handleSetSkipNumCategories(arg1) {
        var1 = arg1;
        var2 = var1.skipNumCategories;
        _closure1_slot26 = var2;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_SKIP_NUM_CATEGORIES'] = var9;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/CollectiblesCategoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();