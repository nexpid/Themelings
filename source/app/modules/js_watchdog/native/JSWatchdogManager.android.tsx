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
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function JSWatchdogManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
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
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var4;
                var3 = function CONNECTION_OPEN_SUPPLEMENTAL() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpenSupplemental;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = arg1;
                var3 = var1.state;
                var1 = _closure1_slot9;
                var1 = var1.ACTIVE;
                if(!(var3 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var2.stopWatchdog;
                var1 = var1.bind(var2)();
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var1 = var2.startWatchdog;
                var1 = var1.bind(var2)();
case 11:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[0];
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var _closure4_slot0 = var5;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0004_ip = 14; continue _fun0004 }
case 10:
                    var2 = false;
case 14:
                    var10 = var2;
                    var9 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=41);
case 15:
                    return var3;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 11:
                    var16 = false;
                    var5['_pingCompleted'] = var16;
case 18: // try_start_0 // try_start_2
                    var4 = var5.getCurrentSessionId;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=72);
case 19:
                    return var4;
case 3:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var9 = var4;
                    var11 = null;
                    if(!(var11 != var4)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var14 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var12 = 9;
                    var6 = var6[var12];
                    var6 = var14.bind(var3)(var6);
                    var14 = var11 == var6;
                    var6 = undefined;
                    if(var14) { _fun0004_ip = 24; continue _fun0004 }
case 25:
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
case 24:
                    SaveGenerator(address=184);
case 26:
                    return var6;
case 27:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    if(!var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var14 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var14.bind(var3)(var10);
                    var14 = var11 == var10;
                    var10 = undefined;
                    if(var14) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var12];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.checkForStallReport;
                    var10 = var14.bind(var15)();
case 32:
                    var13 = var10;
                    if(!(var11 != var10)) { _fun0004_ip = 30; continue _fun0004 }
case 34:
                    var14 = var5._lastSessionId;
                    var10 = var9;
                    if(!(var14 !== var10)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var10 = var9;
                    var5['_lastSessionId'] = var10;
                    var10 = 3;
                    var5['_analyticsReportsRemaining'] = var10;
case 35:
                    var10 = var5._analyticsReportsRemaining;
                    var14 = parseFloat(var10);
                    var10 = var14 - 1;
                    var5['_analyticsReportsRemaining'] = var10;
                    var10 = 0;
                    if(!(var14 > var10)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var15 = var5.reportStall;
                    var22 = var13;
                    var21 = var9;
                    var19 = var5._analyticsReportsRemaining;
                    var23 = var5;
                    var20 = false;
                    var9 = var23[var15](var22, var21, var20, var19, var18);
case 37:
                    var9 = var5._analyticsReportsRemaining;
                    if(!(var10 === var9)) { _fun0004_ip = 30; continue _fun0004 }
case 39:
                    var9 = var5.stopWatchdog;
                    var9 = var9.bind(var5)();
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var9 = var13.bind(var3)(var9);
                    var9 = var11 == var9;
                    var10 = var9;
                    if(var9) { _fun0004_ip = 30; continue _fun0004 }
case 40:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var11 = var11.bind(var3)(var9);
                    var9 = var11.disable;
                    var10 = var9.bind(var11)();
case 30:
                    var9 = var5._enabled;
                    if(!var9) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var9 = global;
                    var10 = var9.setTimeout;
                    var9 = _closure1_slot12;
                    var8 = function() {
                        var2 = _closure4_slot0;
                        var1 = var2.ping;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var8 = var10.bind(var3)(var8, var9);
                    var5['_timeoutId'] = var8;
case 41: // try_end0
                    _fun0004_ip = 43; continue _fun0004;
case 28: // try_end2
                    var8 = true;
                    var5['_pingCompleted'] = var8;
                    return var6;
case 22: // try_start_1 // try_start_3
                    var8 = var5._enabled;
                    var6 = var8;
                    if(!var8) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var8 = global;
                    var9 = var8.setTimeout;
                    var8 = _closure1_slot12;
                    var7 = function() {
                        var2 = _closure4_slot0;
                        var1 = var2.ping;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var9.bind(var3)(var7, var8);
                    var5['_timeoutId'] = var7;
                    var6 = var7;
case 44: // try_end1 // try_end3
                    var7 = true;
                    var5['_pingCompleted'] = var7;
                    var6 = undefined;
                    return var6;
case 20:
                    var6 = true;
                    var5['_pingCompleted'] = var6;
                    return var4;
case 46: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 10;
                    var4 = var8[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.captureException;
                    var4 = var4.bind(var6)(var7);
case 43: // try_end4
                    var4 = true;
                    var5['_pingCompleted'] = var4;
                    return var3;
case 47: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    var4 = true;
                    var5['_pingCompleted'] = var4;
                    throw var3;
case 17:
                    return var2;
case 12:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var2 = var5._timeoutId;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0005_ip = 50; continue _fun0005 }
case 10:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var9 = undefined;
                    var2 = var4.bind(var9)(var2);
                    if(!(var3 != var2)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var2 = var5.getCurrentSessionId;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=74);
case 3:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    if(!(var3 != var2)) { _fun0005_ip = 50; continue _fun0005 }
case 54:
                    var4 = var5._lastSessionId;
                    if(!(var4 === var2)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var7 = var5._analyticsReportsRemaining;
                    var4 = 0;
                    if(!(var4 !== var7)) { _fun0005_ip = 50; continue _fun0005 }
case 55:
                    var8 = _closure1_slot11;
                    var7 = var8.info;
                    var4 = 'startWatchdog()';
                    var4 = var7.bind(var8)(var4);
                    var4 = true;
                    var5['_enabled'] = var4;
                    var7 = var5._pingCompleted;
                    if(!var7) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var9)(var7);
                    var8 = var3 == var7;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var8 = var8.bind(var9)(var6);
                    var6 = var8.checkForStallReport;
                    var7 = var6.bind(var8)();
case 59:
                    if(!(var3 != var7)) { _fun0005_ip = 57; continue _fun0005 }
case 61:
                    var6 = var5.reportStall;
                    var11 = -1;
                    var15 = var5;
                    var14 = var7;
                    var13 = var2;
                    var12 = true;
                    var3 = var15[var6](var14, var13, var12, var11, var10);
case 57:
                    var3 = var5.ping;
                    var3 = var3.bind(var5)(var4);
case 50:
                    var3 = undefined;
                    return var3;
case 52:
                    return var2;
case 48:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 11;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.APP_JS_STALLED;
                var2 = {};
                var8 = _closure1_slot0;
                var7 = 12;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.getDeviceMetadata;
                var11 = var7.bind(var8)();
                var12 = var2;
                var7 = copyDataProperties(var12, var11);
                var8 = 1;
                var7 = 'version';
                var2[6] = var8;
                var8 = var6.stallTime;
                var7 = 'stall_time';
                var2[6] = var8;
                var8 = arg3;
                var7 = 'is_previous';
                var2[6] = var8;
                var8 = arg4;
                var7 = 'reports_remaining';
                var2[6] = var8;
                var10 = var6.sessionId;
                var7 = null;
                var9 = arg2;
                var8 = null;
                if(!(var10 !== var9)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var8 = var6.sessionId;
case 62:
                var6 = 'stall_session_id';
                var2[5] = var8;
                var6 = 'trace';
                var2[5] = var7;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 64; continue _fun0007 }
case 49:
                    var2 = var4._cachedSession;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0007_ip = 19; continue _fun0007 }
case 65:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isSessionExpired;
                    var2 = var4._cachedSession;
                    var2 = var5.bind(var6)(var2);
                    if(!var2) { _fun0007_ip = 25; continue _fun0007 }
case 19:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var5 = var5[var2];
                    var2 = undefined;
                    var5 = var6.bind(var2)(var5);
                    var2 = var5.getSession;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=109);
case 66:
                    return var2;
case 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 68; continue _fun0007 }
case 55:
                    if(!(var3 != var2)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                    var4['_cachedSession'] = var2;
case 25:
                    var4 = var4._cachedSession;
                    var4 = var4.uuid;
                    return var4;
case 69:
                    return var3;
case 68:
                    return var2;
case 64:
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/js_watchdog/native/JSWatchdogManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();