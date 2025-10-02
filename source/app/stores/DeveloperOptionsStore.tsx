// app/stores/DeveloperOptionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function setOptions(arg1) {
        var1 = {};
        var6 = _closure1_slot16;
        var7 = var1;
        var3 = copyDataProperties(var7, var6);
        var6 = _closure1_slot17;
        var7 = var1;
        var3 = copyDataProperties(var7, var6);
        var6 = arg1;
        var7 = var1;
        var3 = copyDataProperties(var7, var6);
        _closure1_slot17 = var1;
        var4 = _closure1_slot14;
        var3 = var4.set;
        var1 = _closure1_slot17;
        var1 = var1.sourceMapsEnabled;
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot15;
        var2 = _closure1_slot17;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var11 = true;
    var8['value'] = var11;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var9 = var6[var8];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var12 = 5;
    var9 = var6[var12];
    var9 = var5.bind(var1)(var9);
    var9 = var9.UserFlags;
    var _closure1_slot9 = var9;
    var9 = var2.location;
    var19 = var9.protocol;
    var9 = var2.location;
    var17 = var9.host;
    var2 = var2.HermesInternal;
    var13 = var2.concat;
    var20 = '';
    var18 = '//';
    var16 = '/__development/source_maps';
    var2 = var20[var13](var19, var18, var17, var16, var15);
    var _closure1_slot10 = var2;
    var2 = null;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var6[var2];
    var10 = var7.bind(var1)(var2);
    var2 = 7;
    var9 = var6[var2];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var12 * var9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.MINUTE;
    var18 = var8 * var2;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var20 = var8;
    var19 = var9;
    var17 = true;
    var2 = new var20[var10](var19, var18, var17, var16);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = function y() {
        var4 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 8;
        var3 = var9[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.put;
        var3 = {};
        var6 = _closure1_slot10;
        var3['url'] = var6;
        var6 = {};
        var8 = _closure1_slot2;
        var7 = 9;
        var7 = var9[var7];
        var8 = var8.bind(var1)(var7);
        var7 = var8.getToken;
        var7 = var7.bind(var8)();
        var6['Authorization'] = var7;
        var3['headers'] = var6;
        var6 = true;
        var3['oldFormErrors'] = var6;
        var3['rejectWithError'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var3 = var1.status;
                var2 = 401;
                if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var1.status;
                var2 = 403;
                if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                var3 = var1.status;
                var2 = 200;
                if(!(var2 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = _closure1_slot12;
                var3 = var4.succeed;
                var3 = var3.bind(var4)();
                var3 = global;
                var5 = var3.setTimeout;
                var4 = _closure1_slot13;
                var1 = var1.body;
                var6 = var1.sourceMapCookieTTLSeconds;
                var7 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var1 = var1.Millis;
                var1 = var1.SECOND;
                var6 = var6 * var1;
                var1 = 0.75;
                var1 = var6 * var1;
                var1 = var5.bind(var3)(var4, var1);
                _closure1_slot11 = var1;
                _fun0002_ip = 11; continue _fun0002;
case 9:
                var1 = global;
                var5 = var1.setTimeout;
                var4 = _closure1_slot13;
                var3 = _closure1_slot12;
                var1 = var3.fail;
                var3 = var1.bind(var3)();
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3);
                _closure1_slot11 = var1;
                _fun0002_ip = 11; continue _fun0002;
case 6:
                var2 = null;
                _closure1_slot11 = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setDeveloperOptionSettings;
                var1 = {};
                var4 = false;
                var1['sourceMapsEnabled'] = var4;
                var1 = var2.bind(var3)(var1);
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var2 = function() {
            var1 = global;
            var5 = var1.setTimeout;
            var4 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = var2.fail;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot11 = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot13 = var2;
    var2 = {};
    var8 = function set(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot11;
            var3 = null;
            var1 = var3 != var1;
            if(!(var4 !== var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = global;
            if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = var1.clearTimeout;
            var4 = _closure1_slot11;
            var9 = undefined;
            var4 = var5.bind(var9)(var4);
            _closure1_slot11 = var3;
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 8;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var5 = var3.HTTP;
            var4 = var5.del;
            var3 = {};
            var6 = _closure1_slot10;
            var3['url'] = var6;
            var6 = {};
            var8 = _closure1_slot2;
            var7 = 9;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var8.getToken;
            var7 = var7.bind(var8)();
            var6['Authorization'] = var7;
            var3['headers'] = var6;
            var6 = true;
            var3['oldFormErrors'] = var6;
            var3['rejectWithError'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0003_ip = 12; continue _fun0003;
case 14:
            var5 = var1.setTimeout;
            var4 = _closure1_slot13;
            var3 = undefined;
            var1 = 0;
            var1 = var5.bind(var3)(var4, var1);
            _closure1_slot11 = var1;
case 12:
            var1 = undefined;
            return var1;
        }
    };
    var2['set'] = var8;
    var _closure1_slot14 = var2;
    var2 = 'DeveloperOptionsStore';
    var _closure1_slot15 = var2;
    var9 = {'trace': false, 'canary': false, 'logGatewayEvents': false, 'logOverlayEvents': false, 'logAnalyticsEvents': false, 'sourceMapsEnabled': false, 'axeEnabled': false, 'cssDebuggingEnabled': false, 'layoutDebuggingEnabled': false, 'analyticsDebuggerEnabled': false, 'bugReporterEnabled': true, 'idleStatusIndicatorEnabled': false, 'onlyShowPreviewAppCollections': false, 'disableAppCollectionsCache': false, 'isStreamInfoOverlayEnabled': false, 'preventPopoutClose': false, 'logKeyboardMismatches': false};
    var _closure1_slot16 = var9;
    var8 = {};
    var19 = var8;
    var18 = var9;
    var9 = copyDataProperties(var19, var18);
    var _closure1_slot17 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var9 = var8.Store;
    var8 = function(arg1) {
        var4 = function DeveloperOptionsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 16; continue _fun0004 }
case 10:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 17; continue _fun0004;
case 16:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 17:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.get;
                var2 = _closure1_slot15;
                var4 = var4.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var4)) { _fun0005_ip = 18; continue _fun0005 }
case 10:
                var2 = {};
                var6 = _closure1_slot16;
                var7 = var2;
                var5 = copyDataProperties(var7, var6);
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                _closure1_slot17 = var2;
case 18:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'isTracingRequests';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.trace;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isForcedCanary';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.canary;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isLoggingGatewayEvents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.logGatewayEvents;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isLoggingOverlayEvents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.logOverlayEvents;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isLoggingAnalyticsEvents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.logAnalyticsEvents;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isAxeEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.axeEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'cssDebuggingEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.cssDebuggingEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'layoutDebuggingEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.layoutDebuggingEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'sourceMapsEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.sourceMapsEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isAnalyticsDebuggerEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.analyticsDebuggerEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isBugReporterEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.bugReporterEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isIdleStatusIndicatorEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.idleStatusIndicatorEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'onlyShowPreviewAppCollections';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.onlyShowPreviewAppCollections;
            return var1;
        };
        var5['get'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'disableAppCollectionsCache';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.disableAppCollectionsCache;
            return var1;
        };
        var5['get'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isStreamInfoOverlayEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.isStreamInfoOverlayEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'preventPopoutClose';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.preventPopoutClose;
            return var1;
        };
        var5['get'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'logKeyboardMismatches';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.logKeyboardMismatches;
            return var1;
        };
        var5['get'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getDebugOptionsHeaderValue';
        var5['key'] = var7;
        var6 = function getDebugOptionsHeaderValue() {
            var3 = global;
            var6 = var3.Object;
            var5 = var6.keys;
            var4 = _closure1_slot17;
            var6 = var5.bind(var6)(var4);
            var5 = var6.map;
            var4 = function(arg1) {
                var2 = _closure1_slot17;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = var3.Object;
            var3 = var4.keys;
            var2 = _closure1_slot17;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = _closure1_slot17;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ',';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var9);
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var19 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLogout(arg1) {
        var3 = _closure1_slot19;
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleConnectionOpen(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = var3.user;
            var1 = var1.flags;
            var4 = null;
            var2 = var4 != var1;
            var6 = 0;
            if(!var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var6 = var1;
case 19:
            var2 = _closure1_slot9;
            var5 = var2.STAFF;
            var5 = var6 & var5;
            var2 = var2.STAFF;
            var2 = var5 === var2;
            var6 = var2;
            if(var6) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var3 = var3.user;
            var3 = var3.personal_connection_id;
            var6 = var4 != var3;
case 21:
            if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 18:
            var4 = _closure1_slot14;
            var3 = var4.set;
            var2 = _closure1_slot17;
            var2 = var2.sourceMapsEnabled;
            var2 = var3.bind(var4)(var2);
case 23:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setTags;
            var2 = {};
            var5 = var6.toString;
            var5 = var5.bind(var6)();
            var2['isStaff'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var4 = function handleUpdateSettings(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = _closure1_slot19;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['DEVELOPER_OPTIONS_UPDATE_SETTINGS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var20 = var4;
    var18 = var2;
    var2 = new var20[var8](var19, var18, var17);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/DeveloperOptionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();