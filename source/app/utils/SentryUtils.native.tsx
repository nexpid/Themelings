// app/utils/SentryUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function updateNativeReporter() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 21; continue _fun0001 }
 9:
            var2 = {};
            var3 = false;
            var2['staff'] = var3;
            var4 = var2;
 21:
            var2 = _closure1_slot4;
            var3 = var2.CrashReportingManager;
            var2 = var3.setUser;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
        var2 = _closure1_slot6;
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
        var2 = _closure1_slot6;
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var1 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var1)) { _fun0002_ip = 86; continue _fun0002 }
 16:
                var1 = _closure2_slot1;
                var1 = var1.tags;
                if(!(var3 != var1)) { _fun0002_ip = 51; continue _fun0002 }
 30:
                var5 = var4.setTags;
                var1 = _closure2_slot1;
                var1 = var1.tags;
                var1 = var5.bind(var4)(var1);
 51:
                var1 = _closure2_slot1;
                var1 = var1.extra;
                if(!(var3 != var1)) { _fun0002_ip = 86; continue _fun0002 }
 65:
                var3 = var4.setExtras;
                var1 = _closure2_slot1;
                var1 = var1.extra;
                var1 = var3.bind(var4)(var1);
 86:
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(var8) { _fun0003_ip = 71; continue _fun0003 }
 65:
            var6 = var5.tags;
 71:
            if(!(var3 != var6)) { _fun0003_ip = 93; continue _fun0003 }
 75:
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0003_ip = 90; continue _fun0003 }
 84:
            var3 = var5.tags;
 90:
            var7 = var3;
 93:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var1 = var5 != var1;
                    if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 19:
                    var2 = _closure2_slot2;
                    var2 = var2.extra;
                    var1 = var5 != var2;
 33:
                    if(!var1) { _fun0004_ip = 57; continue _fun0004 }
 36:
                    var2 = var4.setExtras;
                    var1 = _closure2_slot2;
                    var1 = var1.extra;
                    var1 = var2.bind(var4)(var1);
 57:
                    var2 = var4.setTags;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var4)(var1);
                    var2 = var4.setLevel;
                    var1 = 'fatal';
                    var1 = var2.bind(var4)(var1);
                    var2 = var4.addEventProcessor;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.exception;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            if(var5) { _fun0005_ip = 40; continue _fun0005 }
 20:
                            var5 = var4.values;
                            var4 = var2 == var5;
                            var3 = undefined;
                            if(var4) { _fun0005_ip = 40; continue _fun0005 }
 34:
                            var4 = 0;
                            var3 = var5[var4];
 40:
                            if(!(var2 != var3)) { _fun0005_ip = 76; continue _fun0005 }
 44:
                            var2 = {};
                            var7 = var3.mechanism;
                            var8 = var2;
                            var4 = copyDataProperties(var8, var7);
                            var5 = false;
                            var4 = 'handled';
                            var2[var4] = var5;
                            var3['mechanism'] = var2;
 76:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var1 = _closure2_slot1;
                var5 = null;
                var1 = var5 != var1;
                if(!var1) { _fun0006_ip = 33; continue _fun0006 }
 19:
                var3 = _closure2_slot1;
                var3 = var3.extra;
                var1 = var5 != var3;
 33:
                if(!var1) { _fun0006_ip = 57; continue _fun0006 }
 36:
                var3 = var4.setExtras;
                var1 = _closure2_slot1;
                var1 = var1.extra;
                var1 = var3.bind(var4)(var1);
 57:
                var1 = _closure2_slot1;
                var1 = var5 != var1;
                if(!var1) { _fun0006_ip = 82; continue _fun0006 }
 68:
                var3 = _closure2_slot1;
                var3 = var3.tags;
                var1 = var5 != var3;
 82:
                if(!var1) { _fun0006_ip = 106; continue _fun0006 }
 85:
                var3 = var4.setTags;
                var1 = _closure2_slot1;
                var1 = var1.tags;
                var1 = var3.bind(var4)(var1);
 106:
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.getConstants;
            var2 = var2.bind(var5)();
            var5 = var2.ReleaseChannel;
            var2 = 'canaryRelease';
            if(!(var2 !== var5)) { _fun0007_ip = 56; continue _fun0007 }
 54:
            return var4;
 56:
            var8 = _closure1_slot2;
            var2 = _closure1_slot3;
            var5 = 3;
            var6 = var2[var5];
            var7 = var8.bind(var3)(var6);
            var6 = var7.getCurrentHub;
            var7 = var6.bind(var7)();
            var6 = var7.getIntegration;
            var2 = var2[var5];
            var2 = var8.bind(var3)(var2);
            var2 = var2.ReactNativeTracing;
            var6 = var6.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var6)) { _fun0007_ip = 126; continue _fun0007 }
 118:
            var2 = true;
            var6['useAppStartWithProfiler'] = var2;
 126:
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var3 = var2.bind(var3)(var1);
            var2 = var3.withProfiler;
            var1 = {'includeRender': true, 'includeUpdates': true};
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var2['profiledRootComponent'] = var7;
    var4 = function crash() {
        var1 = _closure1_slot4;
        var2 = var1.CrashReportingManager;
        var1 = var2.crash;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['crash'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/SentryUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();