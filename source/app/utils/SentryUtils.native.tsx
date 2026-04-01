// app/utils/SentryUtils.native.tsx
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
    var1 = function isNonEmptyString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = 'string';
            var1 = typeof var2;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function updateNativeReporter() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = {};
            var3 = false;
            var2['staff'] = var3;
            var4 = var2;
case 4:
            var2 = _closure1_slot4;
            var3 = var2.CrashReportingManager;
            var2 = var3.setUser;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var7 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'Sentry';
    var13 = var7;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var2 = var7.initSentry;
    var2 = var2.bind(var7)();
    var2 = {};
    var7 = function setUser(arg1, arg2, arg3, arg4) {
        var3 = {};
        var1 = arg1;
        var3['id'] = var1;
        var1 = arg2;
        var3['username'] = var1;
        var1 = arg3;
        var3['email'] = var1;
        var1 = arg4;
        var3['staff'] = var1;
        var5 = _closure1_slot2;
        var4 = _closure1_slot3;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.getCurrentScope;
        var5 = var4.bind(var5)();
        var4 = var5.setUser;
        var4 = var4.bind(var5)(var3);
        var2 = _closure1_slot7;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['setUser'] = var7;
    var7 = function clearUser() {
        var4 = _closure1_slot2;
        var3 = _closure1_slot3;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.getCurrentScope;
        var5 = var3.bind(var4)();
        var4 = var5.setUser;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot7;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['clearUser'] = var7;
    var7 = function setTags(arg1) {
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getCurrentScope;
        var4 = var2.bind(var3)();
        var3 = var4.setTags;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setTags'] = var7;
    var7 = function setExtra(arg1) {
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getCurrentScope;
        var4 = var2.bind(var3)();
        var3 = var4.setExtras;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setExtra'] = var7;
    var7 = function captureException(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 4;
        var4 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var4);
        var6 = var7.getUpdatedOptions;
        var4 = arg2;
        var4 = var6.bind(var7)(var4);
        var _closure2_slot1 = var4;
        var4 = _closure1_slot2;
        var3 = 3;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.withScope;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var1 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var1)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = _closure2_slot1;
                var1 = var1.tags;
                if(!(var3 != var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var5 = var4.setTags;
                var1 = _closure2_slot1;
                var1 = var1.tags;
                var1 = var5.bind(var4)(var1);
case 8:
                var1 = _closure2_slot1;
                var1 = var1.extra;
                if(!(var3 != var1)) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                var3 = var4.setExtras;
                var1 = _closure2_slot1;
                var1 = var1.extra;
                var1 = var3.bind(var4)(var1);
case 6:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.captureException;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['captureException'] = var7;
    var7 = function captureCrash(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 4;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.getUpdatedOptions;
            var3 = arg2;
            var5 = var5.bind(var6)(var3);
            var _closure2_slot2 = var5;
            var7 = {};
            var3 = null;
            var8 = var3 == var5;
            var6 = undefined;
            if(var8) { _fun0004_ip = 11; continue _fun0004 }
case 10:
            var6 = var5.tags;
case 11:
            if(!(var3 != var6)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = var5.tags;
case 14:
            var7 = var3;
case 12:
            var3 = global;
            var6 = var3.Object;
            var5 = var6.assign;
            var3 = {};
            var8 = 'true';
            var3['crash'] = var8;
            var3 = var5.bind(var6)(var3, var7);
            var _closure2_slot3 = var3;
            var3 = _closure1_slot2;
            var5 = _closure1_slot3;
            var2 = 3;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.withScope;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var1 = var5 != var1;
                    if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var2 = _closure2_slot2;
                    var2 = var2.extra;
                    var1 = var5 != var2;
case 16:
                    if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var2 = var4.setExtras;
                    var1 = _closure2_slot2;
                    var1 = var1.extra;
                    var1 = var2.bind(var4)(var1);
case 18:
                    var2 = var4.setTags;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var4)(var1);
                    var2 = var4.setLevel;
                    var1 = 'fatal';
                    var1 = var2.bind(var4)(var1);
                    var2 = var4.addEventProcessor;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.exception;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            if(var5) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                            var5 = var4.values;
                            var4 = var2 == var5;
                            var3 = undefined;
                            if(var4) { _fun0006_ip = 20; continue _fun0006 }
case 22:
                            var4 = 0;
                            var3 = var5[var4];
case 20:
                            if(!(var2 != var3)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                            var2 = {};
                            var7 = var3.mechanism;
                            var8 = var2;
                            var4 = copyDataProperties(var8, var7);
                            var5 = false;
                            var4 = 'handled';
                            var2[3] = var5;
                            var3['mechanism'] = var2;
case 23:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var4)(var1);
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.captureException;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    var _closure2_slot1 = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot1;
            return var1;
        }
    };
    var2['captureCrash'] = var7;
    var7 = function captureMessage(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 4;
        var4 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var4);
        var6 = var7.getUpdatedOptions;
        var4 = arg2;
        var4 = var6.bind(var7)(var4);
        var _closure2_slot1 = var4;
        var4 = _closure1_slot2;
        var3 = 3;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.withScope;
        var2 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = _closure2_slot1;
                var5 = null;
                var1 = var5 != var1;
                if(!var1) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                var3 = _closure2_slot1;
                var3 = var3.extra;
                var1 = var5 != var3;
case 16:
                if(!var1) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                var3 = var4.setExtras;
                var1 = _closure2_slot1;
                var1 = var1.extra;
                var1 = var3.bind(var4)(var1);
case 18:
                var1 = _closure2_slot1;
                var1 = var5 != var1;
                if(!var1) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var3 = _closure2_slot1;
                var3 = var3.tags;
                var1 = var5 != var3;
case 25:
                if(!var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                var3 = var4.setTags;
                var1 = _closure2_slot1;
                var1 = var1.tags;
                var1 = var3.bind(var4)(var1);
case 27:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.captureMessage;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['captureMessage'] = var7;
    var7 = function addFeatureFlag(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot2;
            var1 = _closure1_slot3;
            var5 = 3;
            var3 = var1[var5];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var3 = var3.getClient;
            var4 = null;
            var3 = var4 == var3;
            var6 = undefined;
            if(var3) { _fun0008_ip = 29; continue _fun0008 }
case 30:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getClient;
            var6 = var2.bind(var3)();
case 29:
            var2 = var4 == var6;
            var5 = undefined;
            if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var2 = var6.getIntegrationByName;
            var2 = var4 == var2;
            var5 = undefined;
            if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 12:
            var3 = var6.getIntegrationByName;
            var2 = 'FeatureFlags';
            var5 = var3.bind(var6)(var2);
case 31:
            var2 = var4 == var5;
            if(var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
            var3 = var5.addFeatureFlag;
            var2 = var4 == var3;
case 33:
            if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var4 = var5.addFeatureFlag;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
case 35:
            return var1;
        }
    };
    var2['addFeatureFlag'] = var7;
    var7 = function addBreadcrumb(arg1) {
        var3 = arg1;
        var5 = _closure1_slot5;
        var4 = var5.verbose;
        var2 = 'Breadcrumb';
        var2 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['addBreadcrumb'] = var7;
    var7 = function profiledRootComponent(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 6;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getConstants;
            var1 = var1.bind(var3)();
            var6 = var1.ReleaseChannel;
            var3 = 'canaryRelease';
            var1 = var5;
            if(!(var3 === var6)) { _fun0009_ip = 37; continue _fun0009 }
case 18:
            var3 = _closure1_slot2;
            var6 = _closure1_slot3;
            var2 = 3;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.withProfiler;
            var2 = {'includeRender': true, 'includeUpdates': true};
            var1 = var3.bind(var4)(var5, var2);
case 37:
            return var1;
        }
    };
    var2['profiledRootComponent'] = var7;
    var7 = function crash() {
        var1 = _closure1_slot4;
        var2 = var1.CrashReportingManager;
        var1 = var2.crash;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['crash'] = var7;
    var7 = function markCrashHandled(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = var2;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0010_ip = 38; continue _fun0010 }
case 3: // try_start_0
            var3 = _closure1_slot4;
            var3 = var3.CrashReportingManager;
            var4 = var3.markCrashHandled;
            var3 = null;
            if(!(var3 != var4)) { _fun0010_ip = 39; continue _fun0010 }
case 30:
            var2 = _closure1_slot4;
            var3 = var2.CrashReportingManager;
            var2 = var3.markCrashHandled;
            var1 = var2.bind(var3)(var1);
case 39: // try_end0
            _fun0010_ip = 38; continue _fun0010;
case 10: // catch_target0
            CatchBlockStart(arg_register=3);
            var3 = _closure1_slot5;
            var2 = var3.warn;
            var1 = 'Failed to mark crash as handled';
            var1 = var2.bind(var3)(var1, var4);
case 38:
            var1 = undefined;
            return var1;
        }
    };
    var2['markCrashHandled'] = var7;
    var4 = function getLastCrashReport() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = _closure1_slot4;
                var4 = var1.CrashReportingManager;
                var3 = null;
                var7 = var3 == var4;
                var1 = undefined;
                var6 = undefined;
                if(var7) { _fun0011_ip = 40; continue _fun0011 }
case 30:
                var6 = var4.getLastCrashReport;
case 40:
                if(!(var3 == var6)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                var3 = var5.bind(var1)(var3);
                _fun0011_ip = 13; continue _fun0011;
case 41:
                var3 = var4.getLastCrashReport;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var4 = arg1;
case 43: // try_start_0
                        var3 = _closure3_slot0;
                        var2 = var4;
                        var1 = null;
                        var5 = var1 == var2;
                        var2 = null;
                        if(var5) { _fun0012_ip = 44; continue _fun0012 }
case 45:
                        var5 = var4.timestamp;
                        var7 = undefined;
                        var8 = 'number';
                        var5 = typeof var5;
                        var6 = undefined;
                        if(!(var8 === var5)) { _fun0012_ip = 46; continue _fun0012 }
case 40:
                        var5 = global;
                        var9 = var5.Number;
                        var8 = var9.isNaN;
                        var5 = var4.timestamp;
                        var5 = var8.bind(var9)(var5);
                        var6 = undefined;
                        if(var5) { _fun0012_ip = 46; continue _fun0012 }
case 32:
                        var8 = var4.timestamp;
                        var5 = 1000;
                        var6 = var8 / var5;
case 46:
                        var8 = var4.level;
                        if(!(var1 == var8)) { _fun0012_ip = 47; continue _fun0012 }
case 48:
                        var9 = var4.is_native;
                        var5 = 'error';
                        if(!var9) { _fun0012_ip = 49; continue _fun0012 }
case 34:
                        var5 = 'fatal';
case 49:
                        var8 = var5;
case 47:
                        var1 = var1 == var8;
                        var5 = undefined;
                        if(var1) { _fun0012_ip = 50; continue _fun0012 }
case 51:
                        var1 = var8.toLowerCase;
                        var5 = var1.bind(var8)();
case 50:
                        var1 = {};
                        var1['type'] = var7;
                        var8 = var4.event_id;
                        var1['event_id'] = var8;
                        var1['timestamp'] = var6;
                        var1['level'] = var5;
                        var8 = _closure1_slot6;
                        var6 = var4.origin;
                        var8 = var8.bind(var7)(var6);
                        var6 = undefined;
                        if(!var8) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                        var8 = {};
                        var9 = var4.origin;
                        var8['event.origin'] = var9;
                        var6 = var8;
case 52:
                        var1['tags'] = var6;
                        var8 = {};
                        var9 = _closure1_slot6;
                        var6 = var4.error_message;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                        var6 = var4.error_message;
                        var1['message'] = var6;
                        var6 = var4.error_message;
                        var8['persisted_error_message'] = var6;
case 54:
                        var9 = _closure1_slot6;
                        var6 = var4.error_stack;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 56; continue _fun0012 }
case 57:
                        var6 = var4.error_stack;
                        var8['persisted_error_stack'] = var6;
case 56:
                        var6 = var4.is_native;
                        if(!var6) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                        var9 = _closure1_slot6;
                        var6 = var4.exit_reason;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                        var6 = var4.exit_reason;
                        var8['native_exit_reason'] = var6;
case 60:
                        var9 = _closure1_slot6;
                        var6 = var4.exit_description;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                        var6 = var4.exit_description;
                        var8['native_exit_description'] = var6;
case 62:
                        var9 = _closure1_slot6;
                        var6 = var4.tombstone;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                        var6 = var4.tombstone;
                        var8['native_tombstone'] = var6;
case 64:
                        var9 = _closure1_slot6;
                        var6 = var4.tombstone_cause;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                        var6 = var4.tombstone_cause;
                        var8['native_tombstone_cause'] = var6;
case 66:
                        var9 = _closure1_slot6;
                        var6 = var4.tombstone_hash;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                        var6 = var4.tombstone_hash;
                        var8['native_tombstone_hash'] = var6;
case 68:
                        var9 = _closure1_slot6;
                        var6 = var4.tombstone_group_by;
                        var6 = var9.bind(var7)(var6);
                        if(!var6) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                        var6 = var4.tombstone_group_by;
                        var8['native_tombstone_group_by'] = var6;
case 70:
                        var6 = _closure1_slot6;
                        var5 = var4.tombstone_origin;
                        var5 = var6.bind(var7)(var5);
                        if(!var5) { _fun0012_ip = 58; continue _fun0012 }
case 72:
                        var5 = var4.tombstone_origin;
                        var8['native_tombstone_origin'] = var5;
case 58:
                        var5 = var4.is_native;
                        var4 = 'false';
                        if(!var5) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                        var4 = 'true';
case 73:
                        var8['native_is_native'] = var4;
                        var4 = global;
                        var7 = var4.Object;
                        var6 = var7.assign;
                        var5 = var1.extra;
                        var4 = {};
                        var4 = var6.bind(var7)(var4, var5, var8);
                        var1['extra'] = var4;
                        var2 = var1;
case 44:
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 75: // try_end0
                        _fun0012_ip = 76; continue _fun0012;
case 77: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 76:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 13:
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2['getLastCrashReport'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/SentryUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();