// app/modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getCacheKey(arg1) {
        var1 = arg1;
        var12 = var1.applicationId;
        var10 = var1.guildId;
        var8 = var1.page;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var13 = 'applicationId:';
        var11 = ' guildId:';
        var9 = ' page:';
        var1 = var13[var4](var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot0 = var2;
    var10 = 1;
    var2 = var6[var10];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var9 = 2;
    var2 = var6[var9];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var8 = 3;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var11;
    var4 = 'NOT_FETCHED';
    var2[var11] = var4;
    var2['FETCHING'] = var10;
    var4 = 'FETCHING';
    var2[var10] = var4;
    var2['FETCHED'] = var9;
    var4 = 'FETCHED';
    var2[var9] = var4;
    var2['ERROR'] = var8;
    var4 = 'ERROR';
    var2[var8] = var4;
    var _closure1_slot5 = var2;
    var4 = 5;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = {};
    var8 = 20;
    var4['max'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var15 = var8;
    var14 = var4;
    var4 = new var15[var9](var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot6 = var4;
    var4 = {};
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function ApplicationDirectorySimilarApplicationsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getSimilarApplications';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var6 = var1.applicationId;
                var5 = var1.guildId;
                var2 = var1.page;
                var1 = null;
                if(!(var1 == var6)) { _fun0003_ip = 29; continue _fun0003 }
 25:
                var1 = undefined;
                return var1;
 29:
                var4 = _closure1_slot9;
                var3 = {};
                var3['applicationId'] = var6;
                var3['guildId'] = var5;
                var3['page'] = var2;
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = _closure1_slot6;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var6 = var1.applicationId;
                var5 = var1.guildId;
                var2 = var1.page;
                var1 = null;
                if(!(var1 == var6)) { _fun0004_ip = 29; continue _fun0004 }
 25:
                var1 = undefined;
                return var1;
 29:
                var4 = _closure1_slot9;
                var3 = {};
                var3['applicationId'] = var6;
                var3['guildId'] = var5;
                var3['page'] = var2;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1 = _closure1_slot7;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'ApplicationDirectorySimilarApplicationsStore';
    var8['displayName'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleFetchSimilarApplications(arg1) {
        var1 = arg1;
        var6 = var1.applicationId;
        var5 = var1.guildId;
        var1 = var1.page;
        var4 = _closure1_slot9;
        var2 = {};
        var2['applicationId'] = var6;
        var2['guildId'] = var5;
        var2['page'] = var1;
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var2 = {};
        var7 = _closure1_slot7;
        var8 = var2;
        var4 = copyDataProperties(var8, var7);
        var4 = _closure1_slot5;
        var4 = var4.FETCHING;
        var2[var5] = var4;
        _closure1_slot7 = var2;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS'] = var9;
    var9 = function handleFetchSimilarApplicationsSuccess(arg1) {
        var2 = arg1;
        var5 = var2.applicationId;
        var1 = var2.guildId;
        var10 = var2.similarApplications;
        var9 = var2.loadId;
        var8 = var2.page;
        var7 = var2.totalPages;
        var4 = _closure1_slot9;
        var2 = {};
        var2['applicationId'] = var5;
        var2['guildId'] = var1;
        var2['page'] = var8;
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var6 = _closure1_slot6;
        var4 = var6.set;
        var2 = {};
        var11 = global;
        var12 = var11.Date;
        var11 = var12.now;
        var11 = var11.bind(var12)();
        var2['lastFetchTimeMs'] = var11;
        var2['applications'] = var10;
        var2['loadId'] = var9;
        var2['page'] = var8;
        var2['totalPages'] = var7;
        var2 = var4.bind(var6)(var5, var2);
        var2 = {};
        var13 = _closure1_slot7;
        var14 = var2;
        var4 = copyDataProperties(var14, var13);
        var4 = _closure1_slot5;
        var4 = var4.FETCHED;
        var2[var5] = var4;
        _closure1_slot7 = var2;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS'] = var9;
    var5 = function handleFetchSimilarApplicationsFailure(arg1) {
        var1 = arg1;
        var6 = var1.applicationId;
        var5 = var1.guildId;
        var1 = var1.page;
        var4 = _closure1_slot9;
        var2 = {};
        var2['applicationId'] = var6;
        var2['guildId'] = var5;
        var2['page'] = var1;
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var2 = {};
        var7 = _closure1_slot7;
        var8 = var2;
        var4 = copyDataProperties(var8, var7);
        var4 = _closure1_slot5;
        var4 = var4.ERROR;
        var2[var5] = var4;
        _closure1_slot7 = var2;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE'] = var5;
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
    var5 = 'modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();