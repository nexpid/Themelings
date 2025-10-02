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
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.FALLBACK_RECOMMENDED_GIFT_SKU_IDS;
    var _closure1_slot9 = var8;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var18 = var10;
    var8 = new var18[var8](var17);
    var13 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot10 = var13;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var18 = var10;
    var8 = new var18[var8](var17);
    var12 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot11 = var12;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var18 = var10;
    var8 = new var18[var8](var17);
    var11 = var8 instanceof Object ? var8 : var10;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var18 = var10;
    var8 = new var18[var8](var17);
    var10 = var8 instanceof Object ? var8 : var10;
    var8 = new Array(0);
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var13;
    var _closure1_slot14 = var12;
    var _closure1_slot15 = var11;
    var11 = new Array(0);
    var _closure1_slot16 = var11;
    var _closure1_slot17 = var10;
    var _closure1_slot18 = var8;
    var8 = null;
    var _closure1_slot19 = var8;
    var8 = false;
    var _closure1_slot20 = var8;
    var8 = var4.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var18 = var10;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var1;
    var8 = var4.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var18 = var10;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot23 = var8;
    var4 = var4.Map;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var18 = var8;
    var4 = new var18[var4](var17);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot24 = var4;
    var _closure1_slot25 = var1;
    var _closure1_slot26 = var1;
    var4 = {};
    var _closure1_slot27 = var4;
    var _closure1_slot28 = var2;
    var2 = function handleFetchCategoriesSuccessInner(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 8;
            var3 = var7[var3];
            var8 = undefined;
            var7 = var6.bind(var8)(var3);
            var6 = var7.isEqual;
            var9 = _closure1_slot13;
            var3 = var9.values;
            var16 = var3.bind(var9)();
            var3 = new Array(0);
            var17 = var3;
            var15 = 0;
            var9 = arraySpread(var17, var16, var15);
            var3 = var6.bind(var7)(var3, var5);
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = arg2;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var6 = global;
            var9 = var6.Map;
            var7 = var5.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var17 = var7.bind(var5)(var3);
            var7 = var9.prototype;
            var7 = Object.create(var7, {constructor: {value: var9}});
            var18 = var7;
            var3 = new var18[var9](var17, var16);
            var3 = var3 instanceof Object ? var3 : var7;
            var _closure2_slot0 = var3;
            var7 = var6.Date;
            var9 = var7.prototype;
            var9 = Object.create(var9, {constructor: {value: var7}});
            var18 = var9;
            var7 = new var18[var7](var17);
            var7 = var7 instanceof Object ? var7 : var9;
            var _closure2_slot1 = var7;
            var10 = _closure1_slot13;
            var9 = var10.forEach;
            var7 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot0;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var3);
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = var4.unpublishedAt;
                    var5 = null;
                    var5 = var5 == var6;
                    if(var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var7 = var4.unpublishedAt;
                    var6 = _closure2_slot1;
                    var5 = var7 > var6;
case 13:
                    var2 = var5;
case 11:
                    if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var4);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7);
            _closure1_slot13 = var3;
            var9 = var6.Map;
            var7 = _closure1_slot13;
            var3 = var7.values;
            var16 = var3.bind(var7)();
            var10 = new Array(0);
            var17 = var10;
            var15 = 0;
            var3 = arraySpread(var17, var16, var15);
            var7 = var10.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.storeListingId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var17 = var7.bind(var10)(var3);
            var7 = var9.prototype;
            var7 = Object.create(var7, {constructor: {value: var9}});
            var18 = var7;
            var3 = new var18[var9](var17, var16);
            var3 = var3 instanceof Object ? var3 : var7;
            _closure1_slot17 = var3;
            var12 = var6.Map;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var10 = var9[var3];
            var14 = var7.bind(var8)(var10);
            var13 = var14.getProductsFromCategories;
            var11 = _closure1_slot13;
            var10 = true;
            var13 = var13.bind(var14)(var11, var10);
            var11 = var13.map;
            var10 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var17 = var11.bind(var13)(var10);
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var18 = var11;
            var10 = new var18[var12](var17, var16);
            var10 = var10 instanceof Object ? var10 : var11;
            _closure1_slot14 = var10;
            var6 = var6.Map;
            var3 = var9[var3];
            var9 = var7.bind(var8)(var3);
            var8 = var9.getProductsFromCategories;
            var7 = _closure1_slot13;
            var3 = false;
            var7 = var8.bind(var9)(var7, var3);
            var3 = var7.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.storeListingId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var17 = var3.bind(var7)(var1);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var18 = var3;
            var1 = new var18[var6](var17, var16);
            var3 = var1 instanceof Object ? var1 : var3;
            _closure1_slot15 = var3;
            var1 = var3.values;
            var16 = var1.bind(var3)();
            var1 = new Array(0);
            var17 = var1;
            var3 = arraySpread(var17, var16, var15);
            _closure1_slot16 = var1;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var1 = _closure1_slot10;
            _closure1_slot13 = var1;
            var1 = _closure1_slot11;
            _closure1_slot14 = var1;
case 8:
            var4 = _closure1_slot30;
            var3 = _closure1_slot14;
            var1 = undefined;
            var3 = var4.bind(var1)(var5, var3);
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            _closure1_slot25 = var3;
            var3 = false;
            _closure1_slot20 = var3;
            _closure1_slot22 = var1;
            _closure1_slot26 = var1;
            return var1;
        }
    };
    var _closure1_slot29 = var2;
    var2 = function setRecommendedGiftSkuIds(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var2 = var5.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = _closure1_slot12;
            _closure1_slot18 = var1;
            _fun0004_ip = 19; continue _fun0004;
case 17:
            var3 = _closure1_slot19;
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 10;
            var1 = var1[var6];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var1.GiftRecommendationAlgorithm;
            var1 = var1.POPULAR;
            if(!(var1 !== var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var7.bind(var4)(var1);
            var1 = var1.GiftRecommendationAlgorithm;
            var1 = var1.RECENT;
            if(!(var1 !== var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.GiftRecommendationAlgorithm;
            var1 = var1.NONE;
            var1 = _closure1_slot12;
            _closure1_slot18 = var1;
            _fun0004_ip = 19; continue _fun0004;
case 22:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.getRecommendedGiftSkuIds;
            var1 = arg2;
            var1 = var3.bind(var4)(var5, var1);
            _closure1_slot18 = var1;
            _fun0004_ip = 19; continue _fun0004;
case 20:
            var1 = _closure1_slot9;
            _closure1_slot18 = var1;
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var2;
    var4 = function reset() {
        var1 = _closure1_slot10;
        _closure1_slot13 = var1;
        var1 = _closure1_slot11;
        _closure1_slot14 = var1;
        var1 = _closure1_slot12;
        _closure1_slot18 = var1;
        var1 = undefined;
        _closure1_slot25 = var1;
        var2 = false;
        _closure1_slot20 = var2;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var5 = var4;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot21 = var2;
        _closure1_slot22 = var1;
        _closure1_slot26 = var1;
        var2 = {};
        _closure1_slot27 = var2;
        var2 = 0;
        _closure1_slot28 = var2;
        return var1;
    };
    var _closure1_slot31 = var4;
    var2 = function handleExperimentChange() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot7;
            var1 = var1.hasLoadedExperiments;
            if(!var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var6 = var1.ShopSKUsInGiftFlowExperiment;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var1 = 'CollectiblesCategoryStore handleExperimentChange';
            var4['location'] = var1;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var1.giftRecommendationAlgorithm;
            var4 = _closure1_slot19;
            if(!(var1 !== var4)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            _closure1_slot25 = var3;
case 26:
            _closure1_slot19 = var1;
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var2;
    var2 = 11;
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
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot33;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 30; continue _fun0006;
case 28:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 30:
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
            var5 = var4.syncWith;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot31;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot32;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(20);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetchingCategories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
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
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0007_ip = 12; continue _fun0007 }
case 31:
                var3 = _closure1_slot21;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'error';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastErrorTimestamp';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'lastSuccessfulFetch';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'lastFetchOptions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'categories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'products';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'productsWithVariantsAsGroup';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'recommendedGiftSkuIds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'skipNumCategories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getCategory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0008_ip = 32; continue _fun0008 }
case 18:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getProduct';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0009_ip = 32; continue _fun0009 }
case 18:
                var3 = _closure1_slot14;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 32:
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
        var7 = 'getProductFetchError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0010_ip = 32; continue _fun0010 }
case 18:
                var3 = _closure1_slot23;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getProductFetchErrorTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = undefined;
                if(!var2) { _fun0011_ip = 32; continue _fun0011 }
case 18:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
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
                if(!var2) { _fun0012_ip = 32; continue _fun0012 }
case 18:
                var3 = _closure1_slot15;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
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
                if(!var2) { _fun0013_ip = 32; continue _fun0013 }
case 18:
                var3 = _closure1_slot17;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
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
                if(var5) { _fun0014_ip = 33; continue _fun0014 }
case 34:
                var1 = var4.categorySkuId;
case 33:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[19] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CollectiblesCategoryStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function COLLECTIBLES_CATEGORIES_FETCH(arg1) {
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        _closure1_slot22 = var1;
        _closure1_slot26 = var1;
        var2 = arg1;
        var2 = var2.options;
        _closure1_slot27 = var2;
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH'] = var10;
    var10 = function COLLECTIBLES_CATEGORIES_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var4 = _closure1_slot29;
        var3 = var1.categories;
        var2 = var1.noOp;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_SUCCESS'] = var10;
    var10 = function COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var4 = _closure1_slot29;
        var2 = var1.categories;
        var3 = var2.categories;
        var2 = var1.noOp;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS'] = var10;
    var10 = function COLLECTIBLES_CATEGORIES_FETCH_FAILURE(arg1) {
        var1 = arg1;
        var3 = var1.error;
        var1 = _closure1_slot10;
        _closure1_slot13 = var1;
        var1 = _closure1_slot11;
        _closure1_slot14 = var1;
        var1 = _closure1_slot12;
        _closure1_slot18 = var1;
        var1 = false;
        _closure1_slot20 = var1;
        var1 = global;
        var4 = var1.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot21 = var4;
        _closure1_slot22 = var3;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot26 = var1;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_CATEGORIES_FETCH_FAILURE'] = var10;
    var10 = function COLLECTIBLES_PRODUCT_FETCH(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = global;
        var6 = var2.Set;
        var7 = _closure1_slot21;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot21 = var5;
        var4 = var5.add;
        var4 = var4.bind(var5)(var3);
        var6 = var2.Map;
        var7 = _closure1_slot23;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot23 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var5 = var2.Map;
        var7 = _closure1_slot24;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var8 = var4;
        var2 = new var8[var5](var7, var6);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot24 = var2;
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
        var4 = _closure1_slot14;
        var2 = var4.set;
        var2 = var2.bind(var4)(var3, var5);
        var2 = global;
        var6 = var2.Set;
        var8 = _closure1_slot21;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot21 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var6 = var2.Map;
        var8 = _closure1_slot23;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot23 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var5 = var2.Map;
        var8 = _closure1_slot24;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var9 = var4;
        var2 = new var9[var5](var8, var7);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot24 = var2;
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
        var9 = _closure1_slot21;
        var5 = var7.prototype;
        var5 = Object.create(var5, {constructor: {value: var7}});
        var10 = var5;
        var3 = new var10[var7](var9, var8);
        var5 = var3 instanceof Object ? var3 : var5;
        _closure1_slot21 = var5;
        var3 = var5.delete;
        var3 = var3.bind(var5)(var4);
        var7 = var1.Map;
        var9 = _closure1_slot23;
        var5 = var7.prototype;
        var5 = Object.create(var5, {constructor: {value: var7}});
        var10 = var5;
        var3 = new var10[var7](var9, var8);
        var5 = var3 instanceof Object ? var3 : var5;
        _closure1_slot23 = var5;
        var3 = var5.set;
        var3 = var3.bind(var5)(var4, var6);
        var6 = var1.Map;
        var9 = _closure1_slot24;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var10 = var5;
        var3 = new var10[var6](var9, var8);
        var3 = var3 instanceof Object ? var3 : var5;
        _closure1_slot24 = var3;
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = var2.shopHome;
            var3 = var3.categories;
            var3 = var3.length;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0015_ip = 35; continue _fun0015 }
case 32:
            var3 = global;
            var6 = var3.Map;
            var2 = var2.shopHome;
            var7 = var2.categories;
            var4 = var7.map;
            var2 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var11 = var4.bind(var7)(var2);
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var12 = var4;
            var2 = new var12[var6](var11, var10);
            var8 = var2 instanceof Object ? var2 : var4;
            var7 = var3.Map;
            var10 = _closure1_slot13;
            var4 = new Array(0);
            var11 = var4;
            var9 = 0;
            var9 = arraySpread(var11, var10, var9);
            var11 = var4;
            var10 = var8;
            var6 = arraySpread(var11, var10, var9);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var4;
            var4 = new var12[var7](var11, var10);
            var4 = var4 instanceof Object ? var4 : var6;
            _closure1_slot13 = var4;
            var6 = var3.Map;
            var7 = _closure1_slot13;
            var4 = var7.values;
            var10 = var4.bind(var7)();
            var7 = new Array(0);
            var11 = var7;
            var9 = 0;
            var4 = arraySpread(var11, var10, var9);
            var5 = var7.map;
            var4 = function(arg1) {
                var2 = arg1;
                var3 = var2.storeListingId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var11 = var5.bind(var7)(var4);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var12 = var5;
            var4 = new var12[var6](var11, var10);
            var4 = var4 instanceof Object ? var4 : var5;
            _closure1_slot17 = var4;
            var4 = var3.Map;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 9;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.getProductsFromCategories;
            var5 = _closure1_slot13;
            var3 = true;
            var5 = var6.bind(var7)(var5, var3);
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.skuId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var11 = var3.bind(var5)(var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var12 = var3;
            var1 = new var12[var4](var11, var10);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot14 = var1;
case 35:
            var1 = undefined;
            return var1;
        }
    };
    var2['COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS'] = var10;
    var9 = function COLLECTIBLES_SKIP_NUM_CATEGORIES(arg1) {
        var1 = arg1;
        var2 = var1.skipNumCategories;
        _closure1_slot28 = var2;
        var1 = undefined;
        return var1;
    };
    var2['COLLECTIBLES_SKIP_NUM_CATEGORIES'] = var9;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
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