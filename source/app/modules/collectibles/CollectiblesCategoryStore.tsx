// app/modules/collectibles/CollectiblesCategoryStore.tsx
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var17 = var10;
    var8 = new var17[var8](var16);
    var12 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot8 = var12;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var17 = var10;
    var8 = new var17[var8](var16);
    var11 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot9 = var11;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var17 = var10;
    var8 = new var17[var8](var16);
    var10 = var8 instanceof Object ? var8 : var10;
    var8 = var4.Map;
    var13 = var8.prototype;
    var13 = Object.create(var13, {constructor: {value: var8}});
    var17 = var13;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var13;
    var _closure1_slot10 = var12;
    var _closure1_slot11 = var11;
    var _closure1_slot12 = var10;
    var10 = new Array(0);
    var _closure1_slot13 = var10;
    var _closure1_slot14 = var8;
    var8 = false;
    var _closure1_slot15 = var8;
    var8 = var4.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var17 = var10;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var1;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var17 = var10;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot18 = var8;
    var4 = var4.Map;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var17 = var8;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot19 = var4;
    var _closure1_slot20 = var1;
    var _closure1_slot21 = var1;
    var4 = {};
    var _closure1_slot22 = var4;
    var _closure1_slot23 = var2;
    var2 = function updateCategoriesAndProducts(arg1) {
        var1 = arg1;
        _closure1_slot10 = var1;
        var6 = global;
        var7 = var6.Map;
        var4 = _closure1_slot10;
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
        _closure1_slot14 = var1;
        var11 = var6.Map;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 7;
        var9 = var8[var4];
        var1 = undefined;
        var13 = var7.bind(var1)(var9);
        var12 = var13.getProductsFromCategories;
        var10 = _closure1_slot10;
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
        _closure1_slot11 = var9;
        var6 = var6.Map;
        var4 = var8[var4];
        var9 = var7.bind(var1)(var4);
        var8 = var9.getProductsFromCategories;
        var7 = _closure1_slot10;
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
        _closure1_slot12 = var4;
        var2 = var4.values;
        var15 = var2.bind(var4)();
        var2 = new Array(0);
        var16 = var2;
        var4 = arraySpread(var16, var15, var14);
        _closure1_slot13 = var2;
        return var1;
    };
    var _closure1_slot24 = var2;
    var4 = function reset() {
        var1 = _closure1_slot8;
        _closure1_slot10 = var1;
        var1 = _closure1_slot9;
        _closure1_slot11 = var1;
        var1 = undefined;
        _closure1_slot20 = var1;
        var2 = false;
        _closure1_slot15 = var2;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var5 = var4;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot16 = var2;
        _closure1_slot17 = var1;
        _closure1_slot21 = var1;
        var2 = {};
        _closure1_slot22 = var2;
        var2 = 0;
        _closure1_slot23 = var2;
        return var1;
    };
    var _closure1_slot25 = var4;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function CollectiblesCategoryStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.syncWith;
            var5 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot25;
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
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure1_slot16;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'error';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastErrorTimestamp';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'lastSuccessfulFetch';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'lastFetchOptions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'categories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'products';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'productsWithVariantsAsGroup';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'skipNumCategories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getCategory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = _closure1_slot10;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var3 = _closure1_slot11;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getProductsBySkus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = arg1;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot11;
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
        var1[13] = var5;
        var5 = {};
        var7 = 'getProductFetchError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0006_ip = 11; continue _fun0006 }
case 12:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getProductFetchErrorTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0007_ip = 11; continue _fun0007 }
case 12:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getProductByStoreListingId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0008_ip = 11; continue _fun0008 }
case 12:
                var3 = _closure1_slot12;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getCategoryByStoreListingId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0009_ip = 11; continue _fun0009 }
case 12:
                var3 = _closure1_slot14;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getCategoryForProduct';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = this;
                var2 = var3.getProduct;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = var3.getCategory;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                var1 = var4.categorySkuId;
case 13:
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
    var10 = function COLLECTIBLES_CATEGORIES_FETCH(arg1) {
        var1 = true;
        _closure1_slot15 = var1;
        var1 = undefined;
        _closure1_slot17 = var1;
        _closure1_slot21 = var1;
        var2 = arg1;
        var2 = var2.options;
        _closure1_slot22 = var2;
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH'] = var10;
    var10 = function COLLECTIBLES_CATEGORIES_FETCH_SUCCESS(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = var2.categories;
            var8 = var1.categories;
            var1 = var8.length;
            var10 = 0;
            if(!(var10 !== var1)) { _fun0011_ip = 15; continue _fun0011 }
case 11:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 6;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.isEqual;
            var9 = _closure1_slot10;
            var5 = var9.values;
            var12 = var5.bind(var9)();
            var5 = new Array(0);
            var13 = var5;
            var11 = 0;
            var9 = arraySpread(var13, var12, var11);
            var5 = var6.bind(var7)(var5, var8);
            if(var5) { _fun0011_ip = 16; continue _fun0011 }
case 17:
            var2 = var2.noOp;
            if(var2) { _fun0011_ip = 16; continue _fun0011 }
case 18:
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
            var6 = _closure1_slot10;
            var5 = var6.forEach;
            var4 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot0;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var3);
                    var2 = !var2;
                    if(!var2) { _fun0012_ip = 19; continue _fun0012 }
case 9:
                    var6 = var4.unpublishedAt;
                    var5 = null;
                    var5 = var5 == var6;
                    if(var5) { _fun0012_ip = 20; continue _fun0012 }
case 21:
                    var7 = var4.unpublishedAt;
                    var6 = _closure2_slot1;
                    var5 = var7 > var6;
case 20:
                    var2 = var5;
case 19:
                    if(!var2) { _fun0012_ip = 22; continue _fun0012 }
case 23:
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var4);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var1 = _closure1_slot24;
            var1 = var1.bind(var3)(var2);
            _fun0011_ip = 16; continue _fun0011;
case 15:
            var1 = _closure1_slot8;
            _closure1_slot10 = var1;
            var1 = _closure1_slot9;
            _closure1_slot11 = var1;
case 16:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            _closure1_slot20 = var1;
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            _closure1_slot17 = var1;
            _closure1_slot21 = var1;
            return var1;
        }
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_SUCCESS'] = var10;
    var10 = function COLLECTIBLES_CATEGORIES_FETCH_FAILURE(arg1) {
        var1 = arg1;
        var3 = var1.error;
        var1 = _closure1_slot8;
        _closure1_slot10 = var1;
        var1 = _closure1_slot9;
        _closure1_slot11 = var1;
        var1 = false;
        _closure1_slot15 = var1;
        var1 = global;
        var4 = var1.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot16 = var4;
        _closure1_slot17 = var3;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_FAILURE'] = var10;
    var10 = function COLLECTIBLES_PRODUCT_FETCH(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = global;
        var6 = var2.Set;
        var7 = _closure1_slot16;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot16 = var5;
        var4 = var5.add;
        var4 = var4.bind(var5)(var3);
        var6 = var2.Map;
        var7 = _closure1_slot18;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot18 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var5 = var2.Map;
        var7 = _closure1_slot19;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var8 = var4;
        var2 = new var8[var5](var7, var6);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot19 = var2;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_PRODUCT_FETCH'] = var10;
    var10 = function COLLECTIBLES_PRODUCT_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var5 = var1.product;
        var4 = _closure1_slot11;
        var2 = var4.set;
        var2 = var2.bind(var4)(var3, var5);
        var2 = global;
        var6 = var2.Set;
        var8 = _closure1_slot16;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot16 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var6 = var2.Map;
        var8 = _closure1_slot18;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot18 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var5 = var2.Map;
        var8 = _closure1_slot19;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var9 = var4;
        var2 = new var9[var5](var8, var7);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot19 = var2;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_SUCCESS'] = var10;
    var10 = function COLLECTIBLES_PRODUCT_FETCH_FAILURE(arg1) {
        var1 = arg1;
        var4 = var1.skuId;
        var6 = var1.error;
        var1 = global;
        var7 = var1.Set;
        var9 = _closure1_slot16;
        var5 = var7.prototype;
        var5 = Object.create(var5, {constructor: {value: var7}});
        var10 = var5;
        var3 = new var10[var7](var9, var8);
        var5 = var3 instanceof Object ? var3 : var5;
        _closure1_slot16 = var5;
        var3 = var5.delete;
        var3 = var3.bind(var5)(var4);
        var7 = var1.Map;
        var9 = _closure1_slot18;
        var5 = var7.prototype;
        var5 = Object.create(var5, {constructor: {value: var7}});
        var10 = var5;
        var3 = new var10[var7](var9, var8);
        var5 = var3 instanceof Object ? var3 : var5;
        _closure1_slot18 = var5;
        var3 = var5.set;
        var3 = var3.bind(var5)(var4, var6);
        var6 = var1.Map;
        var9 = _closure1_slot19;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var10 = var5;
        var3 = new var10[var6](var9, var8);
        var3 = var3 instanceof Object ? var3 : var5;
        _closure1_slot19 = var3;
        var2 = var3.set;
        var5 = var1.Date;
        var1 = var5.now;
        var1 = var1.bind(var5)();
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_PRODUCT_FETCH_FAILURE'] = var10;
    var10 = function COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.shopHome;
            var2 = var2.categories;
            var2 = var2.length;
            var6 = 0;
            if(!(var6 !== var2)) { _fun0013_ip = 24; continue _fun0013 }
case 9:
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
            var3 = _closure1_slot24;
            var4 = var2.Map;
            var8 = _closure1_slot10;
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
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var2['COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS'] = var10;
    var9 = function COLLECTIBLES_SKIP_NUM_CATEGORIES(arg1) {
        var1 = arg1;
        var2 = var1.skipNumCategories;
        _closure1_slot23 = var2;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/CollectiblesCategoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();