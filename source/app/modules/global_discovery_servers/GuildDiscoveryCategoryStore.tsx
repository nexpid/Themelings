// app/modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot8 = var8;
    var8 = var4.OTHER_DISCOVERY_CATEGORY_ID;
    var _closure1_slot9 = var8;
    var8 = var4.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot10 = var8;
    var4 = var4.DISCOVERY_SIDEBAR_CATEGORIES;
    var _closure1_slot11 = var4;
    var4 = null;
    var _closure1_slot12 = var4;
    var4 = new Array(0);
    var _closure1_slot13 = var4;
    var4 = new Array(0);
    var _closure1_slot14 = var4;
    var4 = {};
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildDiscoveryCategoryStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
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
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getPrimaryCategories';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getDiscoveryCategories';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot11;
            var3 = var4.map;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var3 = _closure1_slot14;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.categoryId;
                    var1 = _closure4_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var10 = var3.bind(var4)(var2);
            var2 = {};
            var1 = _closure1_slot10;
            var2['categoryId'] = var1;
            var1 = 8;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.Ym2Ri4;
            var1 = var4.bind(var5)(var1);
            var2['name'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var9 = 1;
            var11 = var1;
            var2 = arraySpread(var11, var10, var9);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getClanDiscoveryCategories';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot11;
            var3 = var4.map;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var3 = _closure1_slot14;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.categoryId;
                    var1 = _closure4_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var10 = var3.bind(var4)(var2);
            var2 = {};
            var1 = _closure1_slot10;
            var2['categoryId'] = var1;
            var1 = 8;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.QToH29;
            var1 = var4.bind(var5)(var1);
            var2['name'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var9 = 1;
            var11 = var1;
            var2 = arraySpread(var11, var10, var9);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAllCategories';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFetchedLocale';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCategoryName';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot10;
                if(!(var3 !== var1)) { _fun0003_ip = 24; continue _fun0003 }
 14:
                var1 = _closure1_slot15;
                var1 = var1[var3];
                _fun0003_ip = 81; continue _fun0003;
 24:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.Ym2Ri4;
                var1 = var3.bind(var4)(var2);
 81:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var8);
    var4 = 'GuildDiscoveryCategoryStore';
    var9['displayName'] = var4;
    var4 = 10;
    var4 = var7[var4];
    var12 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleCategoryFetchSuccess(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var8 = var1.categories;
            var5 = var1.locale;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var4 = new Array(0);
            var _closure2_slot1 = var4;
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var7 = var8.sort;
            var6 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = arg2;
                    var1 = var1.name;
                    var2 = var2 < var1;
                    var1 = 1;
                    if(!var2) { _fun0005_ip = 32; continue _fun0005 }
 26:
                    var1 = -1;
 32:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var6);
            var7 = var8.forEach;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.id;
                    var2 = var1.name;
                    var5 = var1.is_primary;
                    var4 = _closure1_slot8;
                    if(!(var3 !== var4)) { _fun0006_ip = 130; continue _fun0006 }
 32:
                    var4 = _closure1_slot9;
                    if(!(var3 === var4)) { _fun0006_ip = 60; continue _fun0006 }
 40:
                    var6 = {};
                    var6['categoryId'] = var3;
                    var6['name'] = var2;
                    _closure2_slot0 = var6;
                    _fun0006_ip = 130; continue _fun0006;
 60:
                    var4 = true;
                    if(!(var4 === var5)) { _fun0006_ip = 94; continue _fun0006 }
 66:
                    var6 = _closure2_slot1;
                    var5 = var6.push;
                    var4 = {};
                    var4['categoryId'] = var3;
                    var4['name'] = var2;
                    var4 = var5.bind(var6)(var4);
 94:
                    var6 = _closure2_slot2;
                    var5 = var6.push;
                    var4 = {};
                    var4['categoryId'] = var3;
                    var4['name'] = var2;
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure1_slot15;
                    var1[var3] = var2;
 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var7 = _closure2_slot0;
            var6 = null;
            if(!(var6 != var7)) { _fun0004_ip = 131; continue _fun0004 }
 84:
            var2 = _closure2_slot0;
            var7 = var2.categoryId;
            var6 = var2.name;
            var8 = var4.push;
            var2 = {};
            var2['categoryId'] = var7;
            var2['name'] = var6;
            var2 = var8.bind(var4)(var2);
            var2 = _closure1_slot15;
            var2[var7] = var6;
 131:
            _closure1_slot12 = var5;
            _closure1_slot13 = var4;
            _closure1_slot14 = var3;
            return var1;
        }
    };
    var4['GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var13 = var5;
    var11 = var4;
    var4 = new var13[var9](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function areDiscoveryCategoriesEqual(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.isEqual;
        var5 = var7.map;
        var2 = function(arg1) {
            var2 = arg1;
            var3 = var2.categoryId;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.name;
            var1[1] = var2;
            return var1;
        };
        var2 = var5.bind(var7)(var2);
        var5 = var6.map;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.categoryId;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.name;
            var1[1] = var2;
            return var1;
        };
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['areDiscoveryCategoriesEqual'] = var2;
    return var1;
})();