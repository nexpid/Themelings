// app/modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getKey(arg1) {
        var1 = arg1;
        var5 = var1.surface;
        var4 = var1.activeState;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'surface:';
        var1 = ' activeState:';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var10 = 0;
    var2 = var6[var10];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var9 = 1;
    var2 = var6[var9];
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
    var2['FETCHING'] = var10;
    var4 = 'FETCHING';
    var2[var10] = var4;
    var2['FETCHED'] = var9;
    var4 = 'FETCHED';
    var2[var9] = var4;
    var2['ERROR'] = var8;
    var4 = 'ERROR';
    var2[var8] = var4;
    var _closure1_slot7 = var2;
    var4 = new Array(0);
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = {};
    var _closure1_slot10 = var4;
    var4 = {};
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function ApplicationDirectoryCollectionsStore() {
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
                var1 = _closure1_slot12;
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
        var1 = 'getLastFetchTimeMs';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var1 = arg1;
            var5 = var1.surface;
            var1 = var1.activeState;
            var2 = _closure1_slot11;
            var4 = _closure1_slot13;
            var3 = {};
            var3['surface'] = var5;
            var3['activeState'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var5 = var1.surface;
            var1 = var1.activeState;
            var2 = _closure1_slot10;
            var4 = _closure1_slot13;
            var3 = {};
            var3['surface'] = var5;
            var3['activeState'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCollections';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var6 = var1.surface;
                var1 = var1.activeState;
                var3 = _closure1_slot9;
                var5 = _closure1_slot13;
                var4 = {};
                var4['surface'] = var6;
                var4['activeState'] = var1;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = _closure1_slot8;
case 9:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 7;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleFetchAppDirectoryCollections(arg1) {
        var1 = arg1;
        var6 = var1.surface;
        var1 = var1.activeState;
        var3 = {};
        var7 = _closure1_slot10;
        var8 = var3;
        var4 = copyDataProperties(var8, var7);
        var5 = _closure1_slot13;
        var4 = {};
        var4['surface'] = var6;
        var4['activeState'] = var1;
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = _closure1_slot7;
        var4 = var4.FETCHING;
        var3[var5] = var4;
        _closure1_slot10 = var3;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_COLLECTIONS'] = var9;
    var9 = function handleFetchAppDirectoryCollectionsSuccess(arg1) {
        var1 = arg1;
        var6 = var1.collections;
        var5 = var1.surface;
        var1 = var1.activeState;
        var4 = _closure1_slot13;
        var2 = {};
        var2['surface'] = var5;
        var2['activeState'] = var1;
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var4 = var6.map;
        var2 = function(arg1) {
            var1 = arg1;
            var5 = var1.application_directory_collection_items;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.sortBy;
            var2 = ['position', 'id'];
            var2 = var3.bind(var4)(var5, var2);
            var1['application_directory_collection_items'] = var2;
            return var1;
        };
        var7 = var4.bind(var6)(var2);
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 5;
        var2 = var6[var2];
        var6 = var4.bind(var1)(var2);
        var4 = var6.sortBy;
        var2 = ['position', 'id'];
        var4 = var4.bind(var6)(var7, var2);
        var2 = {};
        var8 = _closure1_slot9;
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var2[var5] = var4;
        _closure1_slot9 = var2;
        var2 = {};
        var8 = _closure1_slot10;
        var9 = var2;
        var4 = copyDataProperties(var9, var8);
        var4 = _closure1_slot7;
        var4 = var4.FETCHED;
        var2[var5] = var4;
        _closure1_slot10 = var2;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var4 = var2.bind(var4)();
        var2 = {};
        var8 = _closure1_slot11;
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var2[var5] = var4;
        _closure1_slot11 = var2;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS'] = var9;
    var5 = function handleFetchAppDirectoryCollectionsFailure(arg1) {
        var1 = arg1;
        var6 = var1.surface;
        var1 = var1.activeState;
        var3 = {};
        var7 = _closure1_slot10;
        var8 = var3;
        var4 = copyDataProperties(var8, var7);
        var5 = _closure1_slot13;
        var4 = {};
        var4['surface'] = var6;
        var4['activeState'] = var1;
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = _closure1_slot7;
        var4 = var4.ERROR;
        var3[var5] = var4;
        _closure1_slot10 = var3;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var8](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();