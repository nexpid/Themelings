// app/modules/errors/native/SentryInitUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function filterError(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var1 = null;
            var3 = var1 == var4;
            var5 = undefined;
            var7 = undefined;
            if(var3) { _fun0001_ip = 25; continue _fun0001 }
 19:
            var7 = var4.originalException;
 25:
            var3 = var1 == var7;
            var6 = undefined;
            if(var3) { _fun0001_ip = 39; continue _fun0001 }
 34:
            var6 = var7.status;
 39:
            if(!var6) { _fun0001_ip = 57; continue _fun0001 }
 42:
            var3 = 400;
            var6 = var6 >= var3;
            var3 = true;
            if(var6) { _fun0001_ip = 116; continue _fun0001 }
 57:
            var8 = var1 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var6 = var7.captchaFields;
 72:
            var6 = var1 != var6;
            var8 = null;
            if(!var6) { _fun0001_ip = 98; continue _fun0001 }
 81:
            var9 = var1 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 95; continue _fun0001 }
 90:
            var6 = var7.code;
 95:
            var8 = var6;
 98:
            var3 = false;
            if(!var8) { _fun0001_ip = 116; continue _fun0001 }
 103:
            var6 = 0;
            var6 = var8 < var6;
            var3 = false;
            if(!var6) { _fun0001_ip = 116; continue _fun0001 }
 114:
            var3 = true;
 116:
            if(var3) { _fun0001_ip = 787; continue _fun0001 }
 122:
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0001_ip = 137; continue _fun0001 }
 131:
            var3 = var4.originalException;
 137:
            var6 = var1 == var3;
            var7 = undefined;
            if(var6) { _fun0001_ip = 166; continue _fun0001 }
 146:
            var3 = var3.err;
            var6 = var1 == var3;
            var7 = undefined;
            if(var6) { _fun0001_ip = 166; continue _fun0001 }
 161:
            var7 = var3.code;
 166:
            var6 = 'ABORTED';
            var3 = false;
            if(!(var6 === var7)) { _fun0001_ip = 180; continue _fun0001 }
 178:
            var3 = true;
 180:
            if(var3) { _fun0001_ip = 787; continue _fun0001 }
 186:
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0001_ip = 201; continue _fun0001 }
 195:
            var3 = var4.originalException;
 201:
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 215; continue _fun0001 }
 210:
            var4 = var3.status;
 215:
            if(!(var1 != var4)) { _fun0001_ip = 249; continue _fun0001 }
 219:
            var3 = var2.tags;
            if(!(var1 == var3)) { _fun0001_ip = 237; continue _fun0001 }
 229:
            var3 = {};
            var2['tags'] = var3;
 237:
            var3 = var2.tags;
            var3['httpStatusCode'] = var4;
 249:
            var8 = _closure1_slot9;
            var7 = var8.info;
            var6 = {};
            var6['event'] = var2;
            var6['hint'] = var5;
            var4 = 'Crash';
            var4 = var7.bind(var8)(var4, var6);
            var6 = var2.level;
            var4 = 'fatal';
            if(!(var4 !== var6)) { _fun0001_ip = 317; continue _fun0001 }
 300:
            var6 = var2.level;
            var4 = 'error';
            if(!(var4 === var6)) { _fun0001_ip = 727; continue _fun0001 }
 317:
            var7 = var2.level;
            var6 = 1;
            var4 = 'error';
            if(!(var4 === var7)) { _fun0001_ip = 344; continue _fun0001 }
 334:
            var6 = 0.01;
 344:
            var4 = _closure1_slot12;
            if(var4) { _fun0001_ip = 366; continue _fun0001 }
 351:
            var4 = _closure1_slot17;
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0001_ip = 727; continue _fun0001 }
 366:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 5;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.getHistory;
            var4 = var4.bind(var6)();
            var9 = var4.location;
            var6 = _closure1_slot1;
            var4 = 6;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var7 = var8.track;
            var4 = _closure1_slot5;
            var6 = var4.APP_CRASHED;
            var4 = {};
            var9 = var9.pathname;
            var4['path'] = var9;
            var4['extra'] = var5;
            var9 = _closure1_slot15;
            var9 = var9.bind(var5)(var2);
            var4['error_message'] = var9;
            var9 = var2.level;
            var4['error_level'] = var9;
            var9 = _closure1_slot16;
            var9 = var9.bind(var5)(var2);
            var4['error_stack'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            var4 = var2.tags;
            var7 = var1 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 516; continue _fun0001 }
 510:
            var6 = var4.event.origin;
 516:
            var4 = 'javascript';
            if(!(var4 !== var6)) { _fun0001_ip = 558; continue _fun0001 }
 524:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 7;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.AppCrashedReasons;
            var11 = var4.UNHANDLED_NATIVE_ERROR;
            _fun0001_ip = 590; continue _fun0001;
 558:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 7;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.AppCrashedReasons;
            var11 = var4.UNHANDLED_JS_ERROR;
 590:
            var6 = _closure1_slot1;
            var10 = _closure1_slot3;
            var4 = 8;
            var4 = var10[var4];
            var8 = var6.bind(var5)(var4);
            var7 = var8.increment;
            var6 = {};
            var9 = _closure1_slot0;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.MetricEvents;
            var4 = var4.APP_CRASHED;
            var6['name'] = var4;
            var9 = global;
            var4 = var9.HermesInternal;
            var10 = var4.concat;
            var4 = 'reason:';
            var10 = var10.bind(var4)(var11);
            var4 = new Array(2);
            var4[0] = var10;
            var11 = var2.level;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = 'level:';
            var9 = var10.bind(var9)(var11);
            var4[1] = var9;
            var6['tags'] = var4;
            var4 = true;
            var4 = var7.bind(var8)(var6, var4);
 727:
            var4 = _closure1_slot11;
            var7 = var2.level;
            var6 = 'error';
            if(!(var6 === var7)) { _fun0001_ip = 755; continue _fun0001 }
 745:
            var4 = 0.005;
 755:
            var6 = _closure1_slot12;
            if(var6) { _fun0001_ip = 785; continue _fun0001 }
 762:
            var6 = _closure1_slot13;
            var6 = var6.bind(var5)();
            if(!var6) { _fun0001_ip = 787; continue _fun0001 }
 773:
            var3 = _closure1_slot17;
            var3 = var3.bind(var5)(var4);
            if(!var3) { _fun0001_ip = 787; continue _fun0001 }
 785:
            return var2;
 787:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getCrashErrorMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = var2.exception;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0002_ip = 40; continue _fun0002 }
 20:
            var5 = var4.values;
            var4 = var3 == var5;
            var1 = undefined;
            if(var4) { _fun0002_ip = 40; continue _fun0002 }
 34:
            var4 = 0;
            var1 = var5[var4];
 40:
            if(!(var3 != var1)) { _fun0002_ip = 86; continue _fun0002 }
 44:
            var6 = var1.type;
            var5 = var1.value;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = ': ';
            var1 = var4.bind(var3)(var6, var1, var5);
            _fun0002_ip = 91; continue _fun0002;
 86:
            var1 = var2.message;
 91:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getErrorStackTrace(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.exception;
            var2 = null;
            var5 = var2 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var5) { _fun0003_ip = 42; continue _fun0003 }
 22:
            var5 = var4.values;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0003_ip = 42; continue _fun0003 }
 36:
            var4 = 0;
            var1 = var5[var4];
 42:
            if(!(var2 == var1)) { _fun0003_ip = 48; continue _fun0003 }
 46:
            return var3;
 48:
            var4 = var1.stacktrace;
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0003_ip = 109; continue _fun0003 }
 63:
            var4 = var4.frames;
            var2 = var2 == var4;
            var1 = undefined;
            if(var2) { _fun0003_ip = 109; continue _fun0003 }
 78:
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var11 = var1.filename;
                var9 = var1.lineno;
                var7 = var1.colno;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = ':';
                var10 = var1;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.join;
            var2 = '\n';
            var1 = var3.bind(var4)(var2);
 109:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function sample(arg1) {
        var1 = global;
        var2 = var1.Math;
        var1 = var2.random;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var1 = var2 <= var1;
        return var1;
    };
    var _closure1_slot17 = var1;
    var9 = global;
    var10 = var9.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot5 = var5;
    var10 = var4.Endpoints;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.PRIMARY_DOMAIN;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ReactNavigationInstrumentation;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var20 = var5;
    var4 = new var20[var4](var19);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot7 = var4;
    var13 = var9.RegExp;
    var5 = var9.window;
    var5 = var5.GLOBAL_ENV;
    var12 = var5.API_VERSION;
    var11 = var10.METRICS;
    var5 = var9.HermesInternal;
    var5 = var5.concat;
    var14 = '/v';
    var19 = var5.bind(var14)(var12, var11);
    var11 = var13.prototype;
    var11 = Object.create(var11, {constructor: {value: var13}});
    var12 = 'g';
    var20 = var11;
    var18 = var12;
    var5 = new var20[var13](var19, var18, var17);
    var11 = var5 instanceof Object ? var5 : var11;
    var5 = new Array(3);
    var5[0] = var11;
    var15 = var9.RegExp;
    var11 = var9.window;
    var11 = var11.GLOBAL_ENV;
    var16 = var11.API_VERSION;
    var13 = var10.METRICS_V2;
    var11 = var9.HermesInternal;
    var11 = var11.concat;
    var19 = var11.bind(var14)(var16, var13);
    var13 = var15.prototype;
    var13 = Object.create(var13, {constructor: {value: var15}});
    var20 = var13;
    var18 = var12;
    var11 = new var20[var15](var19, var18, var17);
    var11 = var11 instanceof Object ? var11 : var13;
    var5[1] = var11;
    var11 = var9.RegExp;
    var13 = var9.window;
    var13 = var13.GLOBAL_ENV;
    var13 = var13.API_VERSION;
    var10 = var10.TRACK;
    var9 = var9.HermesInternal;
    var9 = var9.concat;
    var19 = var9.bind(var14)(var13, var10);
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var20 = var10;
    var18 = var12;
    var9 = new var20[var11](var19, var18, var17);
    var9 = var9 instanceof Object ? var9 : var10;
    var5[2] = var9;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var19 = 'Sentry';
    var20 = var8;
    var5 = new var20[var9](var19, var18);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot9 = var5;
    var5 = ['The operation couldn’t be completed. (com.apple.CallKit.error.requesttransaction', 'Request has been terminated', "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", 'database is no longer open'];
    var _closure1_slot10 = var5;
    var5 = 0.05;
    var _closure1_slot11 = var5;
    var5 = false;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.filterThrottle;
    var5 = {'maxBudgetMinute': 1, 'maxBudgetHour': 15};
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/errors/native/SentryInitUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['routingInstrumentation'] = var4;
    var2 = function initSentry() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = _closure1_slot4;
            var3 = var1.CrashReportingManager;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 37; continue _fun0004 }
 19:
            var2 = var3.getIsUserStaffForCrashReporting;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    _closure1_slot12 = var2;
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getConstants;
                    var4 = var3.bind(var4)();
                    var3 = var4.ReleaseChannel;
                    var6 = var3.indexOf;
                    var5 = 'debug';
                    var5 = var6.bind(var3)(var5);
                    var7 = -1;
                    if(!(var7 === var5)) { _fun0005_ip = 717; continue _fun0005 }
 76:
                    var6 = var3.indexOf;
                    var5 = 'developer';
                    var5 = var6.bind(var3)(var5);
                    if(!(var7 === var5)) { _fun0005_ip = 717; continue _fun0005 }
 100:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 12;
                    var5 = var6[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.isStable;
                    var13 = _closure1_slot9;
                    var12 = var13.verbose;
                    var10 = {};
                    var10['releaseChannel'] = var3;
                    var10['isProductionChannel'] = var5;
                    var9 = 'Initialize';
                    var9 = var12.bind(var13)(var9, var10);
                    var12 = 13;
                    var6 = var6[var12];
                    var8 = var8.bind(var1)(var6);
                    var6 = var8.isAndroid;
                    var6 = var6.bind(var8)();
                    if(!var6) { _fun0005_ip = 241; continue _fun0005 }
 184:
                    if(!var5) { _fun0005_ip = 241; continue _fun0005 }
 187:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 14;
                    var6 = var9[var6];
                    var8 = var8.bind(var1)(var6);
                    var6 = var8.getDevice;
                    var9 = var6.bind(var8)();
                    var8 = var9.indexOf;
                    var6 = 'vivo';
                    var6 = var8.bind(var9)(var6);
                    if(!(var7 === var6)) { _fun0005_ip = 717; continue _fun0005 }
 241:
                    var6 = 0.05;
                    _closure1_slot11 = var6;
                    var6 = var4.SentryDsn;
                    if(var5) { _fun0005_ip = 277; continue _fun0005 }
 264:
                    var5 = 1;
                    _closure1_slot11 = var5;
                    var6 = var4.SentryAlphaBetaDsn;
 277:
                    if(!var2) { _fun0005_ip = 293; continue _fun0005 }
 280:
                    var6 = var4.SentryStaffDsn;
                    var5 = 1;
                    _closure1_slot11 = var5;
 293:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 3;
                    var5 = var9[var2];
                    var8 = var10.bind(var1)(var5);
                    var7 = var8.init;
                    var5 = {};
                    var9 = var9[var12];
                    var10 = var10.bind(var1)(var9);
                    var9 = var10.isAndroid;
                    var9 = var9.bind(var10)();
                    var10 = 'ios';
                    if(!var9) { _fun0005_ip = 350; continue _fun0005 }
 346:
                    var10 = 'android';
 350:
                    var9 = '/error-reporting-proxy/';
                    var9 = var9 + var10;
                    var5['tunnel'] = var9;
                    var9 = false;
                    var5['autoInitializeNativeSdk'] = var9;
                    var9 = _closure1_slot14;
                    var5['beforeSend'] = var9;
                    var9 = '4661';
                    var5['dist'] = var9;
                    var5['dsn'] = var6;
                    var5['environment'] = var3;
                    var3 = 0;
                    var5['tracesSampleRate'] = var3;
                    var3 = 1;
                    var5['sampleRate'] = var3;
                    var3 = _closure1_slot10;
                    var5['ignoreErrors'] = var3;
                    var3 = 'discord_android@299.8.0-2+299208';
                    var5['release'] = var3;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var10 = var6[var2];
                    var10 = var3.bind(var1)(var10);
                    var12 = var10.ReactNativeTracing;
                    var10 = {};
                    var13 = _closure1_slot7;
                    var10['routingInstrumentation'] = var13;
                    var13 = _closure1_slot6;
                    var11 = new Array(1);
                    var11[0] = var13;
                    var10['tracePropagationTargets'] = var11;
                    var11 = function shouldCreateSpanForRequest(arg1) {
                        var3 = _closure1_slot8;
                        var2 = var3.some;
                        var1 = arg1;
                        var1 = var1.match;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var10['shouldCreateSpanForRequest'] = var11;
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var16 = var11;
                    var15 = var10;
                    var10 = new var16[var12](var15, var14);
                    var11 = var10 instanceof Object ? var10 : var11;
                    var10 = new Array(1);
                    var10[0] = var11;
                    var5['integrations'] = var10;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6[var2];
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.setTag;
                    var5 = 'buildNumber';
                    var5 = var7.bind(var8)(var5, var9);
                    var5 = var6[var2];
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.setTag;
                    var5 = var4.Version;
                    var4 = 'appVersion';
                    var4 = var7.bind(var8)(var4, var5);
                    var4 = var6[var2];
                    var8 = var3.bind(var1)(var4);
                    var7 = var8.setTag;
                    var4 = 15;
                    var4 = var6[var4];
                    var4 = var3.bind(var1)(var4);
                    var4 = var4.DesignIds;
                    var9 = var4.DESIGN_TABS_IA;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = '';
                    var5 = var5.bind(var4)(var9);
                    var4 = 'design_id';
                    var4 = var7.bind(var8)(var4, var5);
                    var2 = var6[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setTag;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isFabric;
                    var3 = var2.bind(var3)();
                    var2 = 'newArchEnabled';
                    var2 = var4.bind(var5)(var2, var3);
 717:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 37:
            var1 = undefined;
            return var1;
        }
    };
    var3['initSentry'] = var2;
    return var1;
})();