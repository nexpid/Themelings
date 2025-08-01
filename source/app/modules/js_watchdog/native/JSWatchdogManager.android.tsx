// app/modules/js_watchdog/native/JSWatchdogManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AppStates;
    var _closure1_slot9 = var9;
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var10 = var7.bind(var1)(var4);
    var4 = var10.prototype;
    var9 = Object.create(var4, {constructor: {value: var10}});
    var13 = 'JSWatchdogManager';
    var14 = var9;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HALF_SECOND;
    var4 = var8 * var4;
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function JSWatchdogManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var2 = _closure2_slot3;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = true;
                var1['_enabled'] = var2;
                var4 = null;
                var1['_timeoutId'] = var4;
                var5 = 3;
                var1['_analyticsReportsRemaining'] = var5;
                var1['_cachedSession'] = var4;
                var1['_lastSessionId'] = var4;
                var1['_pingCompleted'] = var2;
                var2 = {};
                var4 = function APP_STATE_UPDATE(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.JSWatchdogExperiment;
                        var3 = var4.getCurrentConfig;
                        var2 = {};
                        var5 = 'APP_STATE_UPDATE';
                        var2['location'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.enabled;
                        if(!var2) { _fun0003_ip = 81; continue _fun0003 }
 60:
                        var4 = _closure3_slot0;
                        var3 = var4.handleAppStateUpdate;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
 81:
                        return var1;
                    }
                };
                var2['APP_STATE_UPDATE'] = var4;
                var3 = function CONNECTION_OPEN_SUPPLEMENTAL() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.JSWatchdogExperiment;
                        var3 = var4.getCurrentConfig;
                        var2 = {};
                        var5 = 'CONNECTION_OPEN_SUPPLEMENTAL';
                        var2['location'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.enabled;
                        if(!var2) { _fun0004_ip = 77; continue _fun0004 }
 60:
                        var3 = _closure3_slot0;
                        var2 = var3.handleConnectionOpenSupplemental;
                        var2 = var2.bind(var3)();
 77:
                        return var1;
                    }
                };
                var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot3 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'handleAppStateUpdate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = arg1;
                var3 = var1.state;
                var1 = _closure1_slot9;
                var1 = var1.ACTIVE;
                if(!(var3 !== var1)) { _fun0005_ip = 40; continue _fun0005 }
 28:
                var1 = var2.stopWatchdog;
                var1 = var1.bind(var2)();
                _fun0005_ip = 50; continue _fun0005;
 40:
                var1 = var2.startWatchdog;
                var1 = var1.bind(var2)();
 50:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var8 = 'handleConnectionOpenSupplemental';
        var5['key'] = var8;
        var8 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = global;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                var2 = _closure3_slot0;
                var1 = var2.startWatchdog;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2 = 0;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'ping';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[0];
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 537; continue _fun0006 }
 18:
                    var _closure4_slot0 = var5;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0006_ip = 30; continue _fun0006 }
 28:
                    var2 = false;
 30:
                    var10 = var2;
                    var9 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=41);
 39:
                    return var3;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 534; continue _fun0006 }
 50:
                    var16 = false;
                    var5['_pingCompleted'] = var16;
 58: // try_start_0 // try_start_1
                    var4 = var5.getCurrentSessionId;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=72);
 70:
                    return var4;
 72:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 464; continue _fun0006 }
 81:
                    var9 = var4;
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var12 = 10;
                    var6 = var6[var12];
                    var6 = var11.bind(var3)(var6);
                    var11 = null;
                    var14 = var11 == var6;
                    var6 = undefined;
                    if(var14) { _fun0006_ip = 173; continue _fun0006 }
 118:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var12];
                    var18 = var15.bind(var3)(var14);
                    var17 = var18.ping;
                    var14 = global;
                    var15 = var14.Date;
                    var14 = var15.now;
                    var22 = var14.bind(var15)();
                    var21 = var9;
                    var20 = var10;
                    var23 = var18;
                    var19 = false;
                    var6 = var23[var17](var22, var21, var20, var19, var18);
 173:
                    SaveGenerator(address=177);
 175:
                    return var6;
 177:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0006_ip = 453; continue _fun0006 }
 186:
                    if(!var6) { _fun0006_ip = 411; continue _fun0006 }
 192:
                    var14 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var14.bind(var3)(var10);
                    var14 = var11 == var10;
                    var10 = undefined;
                    if(var14) { _fun0006_ip = 245; continue _fun0006 }
 218:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var12];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.checkForStallReport;
                    var10 = var14.bind(var15)();
 245:
                    var13 = var10;
                    if(!(var11 != var10)) { _fun0006_ip = 411; continue _fun0006 }
 255:
                    var14 = var5._lastSessionId;
                    var10 = var9;
                    if(!(var14 !== var10)) { _fun0006_ip = 286; continue _fun0006 }
 268:
                    var10 = var9;
                    var5['_lastSessionId'] = var10;
                    var10 = 3;
                    var5['_analyticsReportsRemaining'] = var10;
 286:
                    var10 = var5._analyticsReportsRemaining;
                    var14 = parseFloat(var10);
                    var10 = var14 - 1;
                    var5['_analyticsReportsRemaining'] = var10;
                    var10 = 0;
                    if(!(var14 > var10)) { _fun0006_ip = 337; continue _fun0006 }
 310:
                    var15 = var5.reportStall;
                    var22 = var13;
                    var21 = var9;
                    var19 = var5._analyticsReportsRemaining;
                    var23 = var5;
                    var20 = false;
                    var9 = var23[var15](var22, var21, var20, var19, var18);
 337:
                    var9 = var5._analyticsReportsRemaining;
                    if(!(var10 === var9)) { _fun0006_ip = 411; continue _fun0006 }
 347:
                    var9 = var5.stopWatchdog;
                    var9 = var9.bind(var5)();
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var9 = var13.bind(var3)(var9);
                    var9 = var11 == var9;
                    var10 = var9;
                    if(var9) { _fun0006_ip = 411; continue _fun0006 }
 384:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var11 = var11.bind(var3)(var9);
                    var9 = var11.disable;
                    var10 = var9.bind(var11)();
 411:
                    var9 = var5._enabled;
                    if(!var9) { _fun0006_ip = 451; continue _fun0006 }
 420:
                    var9 = global;
                    var9 = var9.setTimeout;
                    var8 = _closure1_slot12;
                    var7 = function() {
                        var2 = _closure4_slot0;
                        var1 = var2.ping;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var9.bind(var3)(var7, var8);
                    var5['_timeoutId'] = var7;
 451: // try_end0
                    _fun0006_ip = 511; continue _fun0006;
 453: // try_end1
                    var7 = true;
                    var5['_pingCompleted'] = var7;
                    return var6;
 464:
                    var6 = true;
                    var5['_pingCompleted'] = var6;
                    return var4;
 475: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 11;
                    var4 = var8[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.captureException;
                    var4 = var4.bind(var6)(var7);
 511: // try_end2
                    var4 = true;
                    var5['_pingCompleted'] = var4;
                    return var3;
 522: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var4 = true;
                    var5['_pingCompleted'] = var4;
                    throw var3;
 534:
                    return var2;
 537:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot2 = var7;
        var7 = function ping() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'startWatchdog';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 249; continue _fun0007 }
 13:
                    var2 = var5._timeoutId;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0007_ip = 241; continue _fun0007 }
 28:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 10;
                    var2 = var2[var10];
                    var9 = undefined;
                    var2 = var4.bind(var9)(var2);
                    if(!(var3 != var2)) { _fun0007_ip = 241; continue _fun0007 }
 60:
                    var2 = var5.getCurrentSessionId;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=74);
 72:
                    return var2;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 246; continue _fun0007 }
 83:
                    var4 = var5._lastSessionId;
                    if(!(var4 === var2)) { _fun0007_ip = 108; continue _fun0007 }
 93:
                    var7 = var5._analyticsReportsRemaining;
                    var4 = 0;
                    if(!(var4 !== var7)) { _fun0007_ip = 241; continue _fun0007 }
 108:
                    var8 = _closure1_slot11;
                    var7 = var8.info;
                    var4 = 'startWatchdog()';
                    var4 = var7.bind(var8)(var4);
                    var4 = true;
                    var5['_enabled'] = var4;
                    var7 = var5._pingCompleted;
                    if(!var7) { _fun0007_ip = 230; continue _fun0007 }
 146:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var9)(var7);
                    var8 = var3 == var7;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 199; continue _fun0007 }
 172:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var8 = var8.bind(var9)(var6);
                    var6 = var8.checkForStallReport;
                    var7 = var6.bind(var8)();
 199:
                    if(!(var3 != var7)) { _fun0007_ip = 230; continue _fun0007 }
 203:
                    var6 = var5.reportStall;
                    var11 = -1;
                    var15 = var5;
                    var14 = var7;
                    var13 = var2;
                    var12 = true;
                    var3 = var15[var6](var14, var13, var12, var11, var10);
 230:
                    var3 = var5.ping;
                    var3 = var3.bind(var5)(var4);
 241:
                    var3 = undefined;
                    return var3;
 246:
                    return var2;
 249:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function startWatchdog() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'stopWatchdog';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var4 = _closure1_slot11;
            var2 = var4.info;
            var1 = 'stopWatchdog()';
            var1 = var2.bind(var4)(var1);
            var1 = false;
            var3['_enabled'] = var1;
            var1 = global;
            var4 = var1.clearTimeout;
            var2 = var3._timeoutId;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = null;
            var3['_timeoutId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'reportStall';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = arg1;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 12;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.APP_JS_STALLED;
                var2 = {};
                var8 = _closure1_slot0;
                var7 = 13;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.getDeviceMetadata;
                var11 = var7.bind(var8)();
                var12 = var2;
                var7 = copyDataProperties(var12, var11);
                var8 = 1;
                var7 = 'version';
                var2[var7] = var8;
                var8 = var6.stallTime;
                var7 = 'stall_time';
                var2[var7] = var8;
                var8 = arg3;
                var7 = 'is_previous';
                var2[var7] = var8;
                var8 = arg4;
                var7 = 'reports_remaining';
                var2[var7] = var8;
                var10 = var6.sessionId;
                var7 = null;
                var9 = arg2;
                var8 = null;
                if(!(var10 !== var9)) { _fun0008_ip = 160; continue _fun0008 }
 154:
                var8 = var6.sessionId;
 160:
                var6 = 'stall_session_id';
                var2[var6] = var8;
                var6 = 'trace';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCurrentSessionId';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 172; continue _fun0009 }
 13:
                    var2 = var4._cachedSession;
                    var3 = null;
                    var2 = var3 == var2;
                    if(var2) { _fun0009_ip = 70; continue _fun0009 }
 28:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 14;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.isSessionExpired;
                    var5 = var4._cachedSession;
                    var2 = var6.bind(var7)(var5);
 70:
                    if(!var2) { _fun0009_ip = 145; continue _fun0009 }
 73:
                    var7 = _closure1_slot11;
                    var6 = var7.log;
                    var5 = 'Refreshing session...';
                    var5 = var6.bind(var7)(var5);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var5 = var5[var2];
                    var2 = undefined;
                    var5 = var6.bind(var2)(var5);
                    var2 = var5.getSession;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=133);
 131:
                    return var2;
 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 169; continue _fun0009 }
 139:
                    var4['_cachedSession'] = var2;
 145:
                    var4 = var4._cachedSession;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if(var5) { _fun0009_ip = 166; continue _fun0009 }
 160:
                    var3 = var4.uuid;
 166:
                    return var3;
 169:
                    return var2;
 172:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function getCurrentSessionId() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/js_watchdog/native/JSWatchdogManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();