// app/modules/applications/ApplicationAssetsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
    var5 = function handleFetchEmbeddedActivityShelfSuccess(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.assets;
            var3 = {};
            var20 = _closure1_slot8;
            var21 = var3;
            var1 = copyDataProperties(var21, var20);
            var11 = var13;
            var7 = global;
            var6 = 5;
            var1 = undefined;
            var5 = 'name';
            var4 = null;
            for(var8 in var11)
 49:
            {
 58:
                var16 = var8;
                var19 = var13[var16];
                var14 = _closure1_slot7;
                var14 = var14.FETCH_SUCCESS;
                var3[var16] = var14;
                var15 = _closure1_slot9;
                var14 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot1;
                var17 = var17[var6];
                var18 = var18.bind(var1)(var17);
                var17 = var18.keyBy;
                var17 = var17.bind(var18)(var19, var5);
                if(!(var4 == var17)) { _fun0002_ip = 120; continue _fun0002 }
 118:
                var17 = {};
 120:
                var14['assets'] = var17;
                var18 = var7.Date;
                var17 = var18.now;
                var17 = var17.bind(var18)();
                var14['lastUpdated'] = var17;
                var15[var16] = var14;
                _fun0002_ip = 49; continue _fun0002;
            }
 151:
            _closure1_slot8 = var3;
            return var1;
        }
    };
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var10 = 1;
    var2 = var6[var10];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var8 = 2;
    var2 = var6[var8];
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
    var2 = {};
    var2['NOT_FETCHED'] = var11;
    var4 = 'NOT_FETCHED';
    var2[var11] = var4;
    var2['FETCHING'] = var10;
    var4 = 'FETCHING';
    var2[var10] = var4;
    var2['FETCH_SUCCESS'] = var8;
    var4 = 'FETCH_SUCCESS';
    var2[var8] = var4;
    var _closure1_slot7 = var2;
    var4 = {};
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function ApplicationAssetsStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
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
        var1 = 'getApplicationAssetFetchState';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot8;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 30; continue _fun0004 }
 20:
                var2 = _closure1_slot7;
                var1 = var2.NOT_FETCHED;
 30:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFetchingIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot8;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var7 = var6().value;
                    var9 = var2;
                    var9 = var9 === var8;
                    var3 = var9;
                    if(var9) { _fun0005_ip = 32; continue _fun0005 }
 29:
                    var5 = var7;
 32:
                    var5 = undefined;
                    var7 = var3;
                    if(var7) { _fun0005_ip = 60; continue _fun0005 }
 40:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0005_ip = 60; continue _fun0005 }
 57:
                    var5 = var6;
 60:
                    var4 = var5;
                    var5 = var3;
                    if(var5) { _fun0005_ip = 72; continue _fun0005 }
 69:
                    var2.return();
 72:
                    var5 = var4;
                    var4 = _closure1_slot7;
                    var4 = var4.FETCHING;
                    var4 = var5 === var4;
                    return var4;
 94:
                    CatchBlockStart(arg_register=0);
                    if(var3) { _fun0005_ip = 102; continue _fun0005 }
 99:
                    var2.return();
 102:
                    throw var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var4 = var1().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    if(var3) { _fun0006_ip = 25; continue _fun0006 }
 22:
                    var1 = var4;
 25:
                    if(var3) { _fun0006_ip = 31; continue _fun0006 }
 28:
                    var2.return();
 31:
                    return var1;
                }
            };
            var6 = var2.bind(var3)(var1);
            var1 = new Array(0);
            var5 = 0;
            var7 = var1;
            var2 = arraySpread(var7, var6, var5);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getApplicationAssets';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'ApplicationAssetsStore';
    var8['displayName'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var10 = function handleFetchApplicationAssets(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var2 = {};
        var5 = _closure1_slot8;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = _closure1_slot7;
        var3 = var3.FETCHING;
        var2[var4] = var3;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_ASSETS_FETCH'] = var10;
    var10 = function handleFetchApplicationAssetsSuccess(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var2 = {};
        var5 = _closure1_slot8;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = _closure1_slot7;
        var3 = var3.FETCH_SUCCESS;
        var2[var4] = var3;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_ASSETS_FETCH_SUCCESS'] = var10;
    var9 = function handleUpdateApplicationAssets(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var8 = var1.assets;
            var5 = null;
            if(!(var5 == var8)) { _fun0007_ip = 33; continue _fun0007 }
 20:
            var1 = _closure1_slot9;
            var1 = delete var1[var3];
            _fun0007_ip = 117; continue _fun0007;
 33:
            var2 = _closure1_slot9;
            var1 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 5;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.keyBy;
            var4 = 'name';
            var4 = var6.bind(var7)(var8, var4);
            if(!(var5 == var4)) { _fun0007_ip = 86; continue _fun0007 }
 84:
            var4 = {};
 86:
            var1['assets'] = var4;
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var1['lastUpdated'] = var4;
            var2[var3] = var1;
 117:
            var1 = undefined;
            return var1;
        }
    };
    var4['APPLICATION_ASSETS_UPDATE'] = var9;
    var4['EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS'] = var5;
    var4['DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/ApplicationAssetsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();