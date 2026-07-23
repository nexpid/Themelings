// app/modules/application_assets_v2/ApplicationAssetsV2Store.tsx
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function updateAssetsFromConfigs(arg1) {
        var2 = false;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.entries;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 5;
        var5 = var5[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var5);
        var6 = var7.groupBy;
        var5 = arg1;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.application_id;
            return var1;
        };
        var2 = var6.bind(var7)(var5, var2);
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var5 = var6().value;
                var3 = var1;
                var8 = undefined;
                var4 = var3 === var8;
                var3 = undefined;
                if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var5;
case 6:
                var _closure3_slot0 = var3;
                var5 = undefined;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var8;
                var5 = undefined;
                var4 = var6;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                var5 = var7;
                var4 = var6;
case 8:
                if(var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var1.return();
case 11:
                var1 = new Array(2);
                var1[0] = var3;
                var4 = var5.flatMap;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.resolved_assets;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var1 = new Array(0);
case 13:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure3_slot0;
                        var2 = _closure1_slot7;
                        var1 = var2.get;
                        var5 = var1.bind(var2)(var4);
                        var1 = null;
                        var4 = var1 == var5;
                        var2 = undefined;
                        if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 9:
                        var4 = var3.key;
                        var2 = var5[var4];
case 15:
                        var1 = var1 == var2;
                        if(var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var4 = global;
                        var6 = var4.Date;
                        var7 = var3.updated_at;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var8 = var5;
                        var3 = new var8[var6](var7, var6);
                        var3 = var3 instanceof Object ? var3 : var5;
                        var5 = var4.Date;
                        var7 = var2.updated_at;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var8 = var4;
                        var2 = new var8[var5](var7, var6);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var1 = var3 > var2;
case 16:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1[1] = var2;
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var1 = var4().value;
                var1 = var2;
                var6 = undefined;
                var3 = var1 === var6;
                var1 = undefined;
                if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var5 = var4().value;
                var4 = var2;
                var4 = var4 === var6;
                var1 = undefined;
                var3 = var4;
                if(var4) { _fun0005_ip = 18; continue _fun0005 }
case 20:
                var1 = var5;
                var3 = var4;
case 18:
                if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var2.return();
case 21:
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var5 = var3().value;
                var2 = var1;
                var6 = undefined;
                var2 = var2 === var6;
                var4 = undefined;
                if(var2) { _fun0006_ip = 23; continue _fun0006 }
case 19:
                var4 = var5;
case 23:
                var9 = undefined;
                if(var2) { _fun0006_ip = 10; continue _fun0006 }
case 24:
                var5 = var3().value;
                var3 = var1;
                var3 = var3 === var6;
                var9 = undefined;
                var2 = var3;
                if(var3) { _fun0006_ip = 10; continue _fun0006 }
case 25:
                var9 = var5;
                var2 = var3;
case 10:
                if(var2) { _fun0006_ip = 8; continue _fun0006 }
case 26:
                var1.return();
case 8:
                var1 = true;
                _closure2_slot0 = var1;
                var3 = _closure1_slot7;
                var2 = var3.set;
                var1 = {};
                var6 = _closure1_slot7;
                var5 = var6.get;
                var10 = var5.bind(var6)(var4);
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var5 = global;
                var7 = var5.Object;
                var6 = var7.fromEntries;
                var8 = var9.map;
                var5 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.key;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var5 = var8.bind(var9)(var5);
                var10 = var6.bind(var7)(var5);
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function handleFeaturedOrDeveloperFetchSuccess(arg1) {
        var3 = _closure1_slot9;
        var1 = global;
        var4 = var1.Object;
        var2 = var4.values;
        var1 = arg1;
        var1 = var1.configs;
        var2 = var2.bind(var4)(var1);
        var1 = var2.flat;
        var2 = var1.bind(var2)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
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
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ApplicationAssetsV2Store() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 11; continue _fun0007 }
case 25:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 27; continue _fun0007;
case 11:
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
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'getAssets';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationAssetsV2Store';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleLogout() {
        var2 = _closure1_slot7;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var10;
    var9 = function handleFetchSuccess(arg1) {
        var3 = _closure1_slot9;
        var1 = arg1;
        var2 = var1.configs;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS'] = var9;
    var2['APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS'] = var4;
    var2['APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_assets_v2/ApplicationAssetsV2Store.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();