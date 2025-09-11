// app/modules/activities/DeveloperActivityShelfStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ApplicationFlags;
    var _closure1_slot7 = var2;
    var2 = {'lastUsedObject': null, 'useActivityUrlOverride': false, 'activityUrlOverride': null, 'filter': ''};
    var4 = {};
    var2['lastUsedObject'] = var4;
    var _closure1_slot8 = var2;
    var2 = {};
    var4 = 'INITIALIZED';
    var2['INITIALIZED'] = var4;
    var4 = 'LOADING';
    var2['LOADING'] = var4;
    var4 = 'LOADED';
    var2['LOADED'] = var4;
    var4 = 'ERROR';
    var2['ERROR'] = var4;
    var _closure1_slot9 = var2;
    var4 = var2.INITIALIZED;
    var _closure1_slot10 = var4;
    var4 = new Array(0);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function DeveloperActivityShelfStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot12;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var2 = {'lastUsedObject': null, 'useActivityUrlOverride': false, 'activityUrlOverride': null, 'filter': ''};
                var3 = {};
                var2['lastUsedObject'] = var3;
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 33; continue _fun0003 }
 31:
                var1 = {};
 33:
                var5 = var2;
                var4 = var1;
                var1 = copyDataProperties(var5, var4);
                _closure1_slot8 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getIsEnabled';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.DeveloperMode;
                var1 = var3.getSetting;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0004_ip = 59; continue _fun0004 }
 44:
                var2 = _closure1_slot11;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastUsedObject';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.lastUsedObject;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUseActivityUrlOverride';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2.getIsEnabled;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0005_ip = 29; continue _fun0005 }
 16:
                var2 = _closure1_slot8;
                var1 = var2.useActivityUrlOverride;
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getActivityUrlOverride';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var1 = var2.getIsEnabled;
                var2 = var1.bind(var2)();
                var1 = null;
                if(!var2) { _fun0006_ip = 31; continue _fun0006 }
 18:
                var2 = _closure1_slot8;
                var1 = var2.activityUrlOverride;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getFilter';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var1 = var2.getIsEnabled;
                var2 = var1.bind(var2)();
                var1 = '';
                if(!var2) { _fun0007_ip = 32; continue _fun0007 }
 20:
                var2 = _closure1_slot8;
                var1 = var2.filter;
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getDeveloperShelfItems';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var1 = var2.getIsEnabled;
                var1 = var1.bind(var2)();
                if(var1) { _fun0008_ip = 22; continue _fun0008 }
 16:
                var1 = new Array(0);
                _fun0008_ip = 29; continue _fun0008;
 22:
                var1 = _closure1_slot11;
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'inDevModeForApplication';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = var3.getIsEnabled;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0009_ip = 54; continue _fun0009 }
 25:
                var4 = _closure1_slot11;
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var1 = var2 != var3;
 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'DeveloperActivityShelfStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(1);
    var10 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.isEnabled;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var4[0] = var10;
    var9['migrations'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var13 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function reset() {
        var1 = {'lastUsedObject': null, 'useActivityUrlOverride': false, 'activityUrlOverride': null, 'filter': ''};
        var2 = {};
        var1['lastUsedObject'] = var2;
        _closure1_slot8 = var1;
        var1 = _closure1_slot9;
        var1 = var1.INITIALIZED;
        _closure1_slot10 = var1;
        var1 = new Array(0);
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var10;
    var10 = function handleToggleUseActivityUrlOverride() {
        var2 = _closure1_slot8;
        var1 = var2.useActivityUrlOverride;
        var1 = !var1;
        var2['useActivityUrlOverride'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE'] = var10;
    var10 = function handleSetActivityUrlOverride(arg1) {
        var1 = arg1;
        var2 = var1.activityUrlOverride;
        var1 = _closure1_slot8;
        var1['activityUrlOverride'] = var2;
        var1 = undefined;
        return var1;
    };
    var4['DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE'] = var10;
    var10 = function handleMarkActivityUsed(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var _closure2_slot0 = var3;
            var2 = var1.timestamp;
            var6 = _closure1_slot11;
            var5 = var6.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = null;
            if(!(var4 != var5)) { _fun0010_ip = 67; continue _fun0010 }
 49:
            var1 = _closure1_slot8;
            var1 = var1.lastUsedObject;
            var1[var3] = var2;
            var1 = undefined;
            return var1;
 67:
            var1 = false;
            return var1;
        }
    };
    var4['DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED'] = var10;
    var10 = function DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        var1 = _closure1_slot9;
        var1 = var1.LOADING;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEVELOPER_ACTIVITY_SHELF_FETCH_START'] = var10;
    var10 = function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(arg1) {
        var1 = arg1;
        var4 = var1.applications;
        var1 = _closure1_slot9;
        var1 = var1.LOADED;
        _closure1_slot10 = var1;
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var2 = var3.flags;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 69; continue _fun0011 }
 17:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.hasFlag;
                var3 = var3.flags;
                var2 = _closure1_slot7;
                var2 = var2.EMBEDDED;
                var1 = var4.bind(var5)(var3, var2);
 69:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS'] = var10;
    var10 = function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg1) {
        var1 = arg1;
        var1 = var1.type;
        var1 = _closure1_slot9;
        var1 = var1.ERROR;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL'] = var10;
    var10 = function handleUpdateFilter(arg1) {
        var1 = arg1;
        var2 = var1.filter;
        var1 = _closure1_slot8;
        var1['filter'] = var2;
        var1 = undefined;
        return var1;
    };
    var4['DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER'] = var10;
    var5 = function USER_SETTINGS_PROTO_UPDATE() {
        var1 = undefined;
        return var1;
    };
    var4['USER_SETTINGS_PROTO_UPDATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/DeveloperActivityShelfStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DevShelfFetchState'] = var2;
    return var1;
})();