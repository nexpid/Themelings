// app/modules/analytics_sessions/SessionAdManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = 1;
    var4 = var6[var4];
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var4 = var4.AppStates;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'DEFAULT';
    var4['DEFAULT'] = var8;
    var8 = 'USER_LOGOUT';
    var4['USER_LOGOUT'] = var8;
    var8 = 'WINDOW_FOCUS';
    var4['WINDOW_FOCUS'] = var8;
    var8 = 'APP_STATE_UPDATE';
    var4['APP_STATE_UPDATE'] = var8;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function SessionAdManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var7 = this;
                var3 = 0;
                var15 = 0;
                var1 = copyRestArgs(var15);
                var8 = _closure1_slot3;
                var5 = _closure2_slot0;
                var6 = undefined;
                var8 = var8.bind(var6)(var7, var5);
                var12 = new Array(0);
                var15 = var12;
                var14 = var1;
                var13 = 0;
                var1 = arraySpread(var15, var14, var13);
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 88; continue _fun0002 }
 75:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0002_ip = 122; continue _fun0002;
 88:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot6;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
 122:
                var1 = var5.bind(var6)(var7, var1);
                var _closure3_slot0 = var1;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var4 = var8.isForegrounded;
                var4 = var4.bind(var8)();
                var1['focusedOrForegrounded'] = var4;
                var4 = 7;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.Interval;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['heartbeatInterval'] = var4;
                var4 = false;
                var1['schedulerStarted'] = var4;
                var1['lastHeartbeatTimestamp'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.heartbeatInterval;
                        var2 = var3.isStarted;
                        var2 = var2.bind(var3)();
                        if(var2) { _fun0003_ip = 107; continue _fun0003 }
 26:
                        var1 = _closure3_slot0;
                        var2 = var1.trackHeartbeat;
                        var2 = var2.bind(var1)();
                        var4 = var1.heartbeatInterval;
                        var3 = var4.start;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var2 = var2.Millis;
                        var5 = var2.MINUTE;
                        var2 = 5;
                        var2 = var2 * var5;
                        var1 = var1.trackHeartbeat;
                        var1 = var3.bind(var4)(var2, var1);
 107:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['maybeStartHeartbeat'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.schedulerStarted;
                        if(var2) { _fun0004_ip = 88; continue _fun0004 }
 16:
                        var2 = _closure3_slot0;
                        var1 = true;
                        var2['schedulerStarted'] = var1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.addBreadcrumb;
                        var1 = {'category': 'ad', 'message': 'Starting ad session heartbeat'};
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.maybeStartHeartbeat;
                        var1 = var1.bind(var2)();
 88:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['startAnalyticHeartbeat'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0005_ip = 11; continue _fun0005 }
 9:
                        var7 = false;
 11:
                        var3 = _closure3_slot0;
                        var3 = var3.schedulerStarted;
                        if(var3) { _fun0005_ip = 102; continue _fun0005 }
 27:
                        if(var7) { _fun0005_ip = 102; continue _fun0005 }
 30:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.addBreadcrumb;
                        var3 = {'category': 'ad', 'message': 'Ad heartbeat called but scheduler not started'};
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var4 = var3.heartbeatInterval;
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        var3 = undefined;
                        return var3;
 102:
                        var3 = global;
                        var4 = var3.performance;
                        var3 = var4.now;
                        var3 = var3.bind(var4)();
                        var4 = _closure3_slot0;
                        var4 = var4.lastHeartbeatTimestamp;
                        var6 = var3 - var4;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 8;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.Millis;
                        var8 = var5.MINUTE;
                        var5 = 5;
                        var5 = var5 * var8;
                        if(var7) { _fun0005_ip = 198; continue _fun0005 }
 178:
                        var7 = _closure3_slot0;
                        var8 = var7.lastHeartbeatTimestamp;
                        var7 = 0;
                        if(!(var8 > var7)) { _fun0005_ip = 198; continue _fun0005 }
 194:
                        if(!(!(var6 < var5))) { _fun0005_ip = 307; continue _fun0005 }
 198:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 10;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.getOrRefreshAdSession;
                        var8 = var5.bind(var6)();
                        var6 = _closure1_slot1;
                        var5 = 11;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot8;
                        var5 = var4.CLIENT_AD_HEARTBEAT;
                        var4 = {};
                        var9 = var8.uuid;
                        var4['client_ad_session_id'] = var9;
                        var8 = var8.createdAtTimestamp;
                        var4['client_heartbeat_initialization_timestamp'] = var8;
                        var8 = 2;
                        var4['client_heartbeat_version'] = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        var2 = _closure3_slot0;
                        var2['lastHeartbeatTimestamp'] = var3;
 307:
                        return var1;
                    }
                };
                var1['trackHeartbeat'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var8 = arguments[0];
                        var1 = undefined;
                        if(!(var8 === var1)) { _fun0006_ip = 22; continue _fun0006 }
 9:
                        var2 = _closure1_slot10;
                        var8 = var2.DEFAULT;
 22:
                        var3 = _closure3_slot0;
                        var3 = var3.schedulerStarted;
                        if(!var3) { _fun0006_ip = 148; continue _fun0006 }
 38:
                        var2 = _closure3_slot0;
                        var3 = false;
                        var2['schedulerStarted'] = var3;
                        var3 = 0;
                        var2['lastHeartbeatTimestamp'] = var3;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.addBreadcrumb;
                        var3 = {};
                        var6 = 'ad';
                        var3['category'] = var6;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'Stopping ad session heartbeat: ';
                        var6 = var7.bind(var6)(var8);
                        var3['message'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = var2.heartbeatInterval;
                        var2 = var3.stop;
                        var2 = var2.bind(var3)();
 148:
                        return var1;
                    }
                };
                var1['stopAnalyticHeartbeat'] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0007_ip = 22; continue _fun0007 }
 9:
                        var2 = _closure1_slot10;
                        var5 = var2.DEFAULT;
 22:
                        var3 = _closure3_slot0;
                        var3 = var3.focusedOrForegrounded;
                        if(var3) { _fun0007_ip = 55; continue _fun0007 }
 38:
                        var4 = _closure3_slot0;
                        var3 = var4.stopAnalyticHeartbeat;
                        var3 = var3.bind(var4)(var5);
                        _fun0007_ip = 107; continue _fun0007;
 55: // try_start_0
                        var3 = _closure3_slot0;
                        var2 = var3.startAnalyticHeartbeat;
                        var2 = var2.bind(var3)();
 69: // try_end0
                        _fun0007_ip = 107; continue _fun0007;
 71: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
 107:
                        return var1;
                    }
                };
                var1['scheduleHeartbeatTracking'] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var1 = var3.scheduleHeartbeatTracking;
                    var1 = var1.bind(var3)();
                    var2 = var3.trackHeartbeat;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleLogin'] = var3;
                var3 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.stopAnalyticHeartbeat;
                    var2 = _closure1_slot10;
                    var2 = var2.USER_LOGOUT;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearAdSession;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handleLogout'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getOrRefreshAdSession;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleEnrollmentSuccess'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.focused;
                    var3 = _closure3_slot0;
                    var3['focusedOrForegrounded'] = var1;
                    var2 = var3.scheduleHeartbeatTracking;
                    var1 = _closure1_slot10;
                    var1 = var1.WINDOW_FOCUS;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleWindowFocus'] = var3;
                var2 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.state;
                    var3 = _closure3_slot0;
                    var2 = _closure1_slot9;
                    var2 = var2.ACTIVE;
                    var2 = var4 === var2;
                    var3['focusedOrForegrounded'] = var2;
                    var2 = var3.scheduleHeartbeatTracking;
                    var1 = _closure1_slot10;
                    var1 = var1.APP_STATE_UPDATE;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleAppStateUpdate'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var4 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.isForegrounded;
            var4 = var4.bind(var6)();
            var3['focusedOrForegrounded'] = var4;
            var4 = _closure1_slot1;
            var2 = 12;
            var6 = var5[var2];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var3.handleWindowFocus;
            var6 = 'WINDOW_FOCUS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var2];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var3.handleAppStateUpdate;
            var6 = 'APP_STATE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var2];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var3.handleEnrollmentSuccess;
            var6 = 'QUESTS_ENROLL_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var2];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var3.handleLogin;
            var6 = 'LOGIN_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var2 = var5[var2];
            var6 = var4.bind(var1)(var2);
            var5 = var6.subscribe;
            var4 = var3.handleLogout;
            var2 = 'LOGOUT';
            var2 = var5.bind(var6)(var2, var4);
            var2 = var3.scheduleHeartbeatTracking;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var1 = var2.stopAnalyticHeartbeat;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 12;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleWindowFocus;
            var6 = 'WINDOW_FOCUS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleAppStateUpdate;
            var6 = 'APP_STATE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleEnrollmentSuccess;
            var6 = 'QUESTS_ENROLL_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleLogin;
            var6 = 'LOGIN_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleLogout;
            var2 = 'LOGOUT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/analytics_sessions/SessionAdManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();