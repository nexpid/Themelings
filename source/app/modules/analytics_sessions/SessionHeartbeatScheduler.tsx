// app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function stopAnalyticsHeartbeat() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot16;
            var3 = null;
            var4 = var3 == var2;
            var2 = false;
            if(var4) { _fun0001_ip = 110; continue _fun0001 }
 18:
            var4 = _closure1_slot16;
            var5 = var4.type;
            var4 = 'timeout';
            if(!(var4 !== var5)) { _fun0001_ip = 80; continue _fun0001 }
 35:
            var4 = 'interval';
            if(!(var4 !== var5)) { _fun0001_ip = 54; continue _fun0001 }
 43:
            var4 = _closure1_slot16;
            var4 = var4.type;
            _fun0001_ip = 104; continue _fun0001;
 54:
            var4 = global;
            var6 = var4.clearInterval;
            var4 = _closure1_slot16;
            var5 = var4.id;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            _fun0001_ip = 104; continue _fun0001;
 80:
            var4 = global;
            var6 = var4.clearTimeout;
            var4 = _closure1_slot16;
            var5 = var4.id;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
 104:
            _closure1_slot16 = var3;
            var2 = true;
 110:
            if(!var2) { _fun0001_ip = 193; continue _fun0001 }
 113:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var5 = var6.addBreadcrumb;
            var2 = {};
            var7 = _closure1_slot14;
            var2['category'] = var7;
            var7 = 'Stopping Analytics Heartbeat';
            var2['message'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.drainClickstream;
            var1 = var1.bind(var2)();
 193:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function trackHeartbeat() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _trackHeartbeat() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 519; continue _fun0002 }
 10:
                    var5 = global;
                    var3 = var5.Date;
                    var2 = var3.now;
                    var11 = var2.bind(var3)();
                    var2 = _closure1_slot39;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=44);
 42:
                    return var2;
 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 516; continue _fun0002 }
 53:
                    var7 = var5.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var7 = null;
                    if(!(var7 == var2)) { _fun0002_ip = 152; continue _fun0002 }
 74:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 9;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.captureException;
                    var10 = var5.Error;
                    var13 = var6 - var11;
                    var6 = var5.HermesInternal;
                    var12 = var6.concat;
                    var11 = 'Null session when tracking session heartbeat. Waited ';
                    var6 = 'ms';
                    var6 = var12.bind(var11)(var13, var6);
                    var6 = var10.bind(var3)(var6);
                    var6 = var8.bind(var9)(var6);
                    _fun0002_ip = 513; continue _fun0002;
 152:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 9;
                    var6 = var9[var6];
                    var10 = var8.bind(var3)(var6);
                    var8 = var10.addBreadcrumb;
                    var6 = {};
                    var11 = _closure1_slot14;
                    var6['category'] = var11;
                    var11 = 'Tracking Heartbeat';
                    var6['message'] = var11;
                    var11 = {};
                    var12 = var2.createdAtTimestamp;
                    var11['initialized'] = var12;
                    var6['data'] = var11;
                    var6 = var8.bind(var10)(var6);
                    var10 = {};
                    var6 = var2.createdAtTimestamp;
                    var10['client_heartbeat_initialization_timestamp'] = var6;
                    var6 = 25;
                    var10['client_heartbeat_version'] = var6;
                    var8 = _closure1_slot0;
                    var6 = 11;
                    var6 = var9[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.getClientHeartbeatPiggybackProperties;
                    var14 = var6.bind(var8)();
                    var15 = var10;
                    var6 = copyDataProperties(var15, var14);
                    var8 = _closure1_slot6;
                    var6 = var8.getIdleSince;
                    var6 = var6.bind(var8)();
                    var7 = var7 != var6;
                    var8 = 0;
                    if(!var7) { _fun0002_ip = 301; continue _fun0002 }
 298:
                    var8 = var6;
 301:
                    var6 = {};
                    var9 = _closure1_slot6;
                    var7 = var9.isIdle;
                    var7 = var7.bind(var9)();
                    var6['is_idle'] = var7;
                    var9 = var5.Date;
                    var7 = var9.now;
                    var7 = var7.bind(var9)();
                    var7 = var7 - var8;
                    var6['idle_duration_ms'] = var7;
                    var8 = _closure1_slot6;
                    var7 = var8.isAFK;
                    var7 = var7.bind(var8)();
                    var6['is_afk'] = var7;
                    var8 = _closure1_slot6;
                    var7 = var8.getSystemSuspended;
                    var7 = var7.bind(var8)();
                    var6['is_system_suspended'] = var7;
                    var8 = _closure1_slot6;
                    var7 = var8.getSystemLocked;
                    var7 = var7.bind(var8)();
                    var6['is_system_locked'] = var7;
                    var15 = var10;
                    var14 = var6;
                    var6 = copyDataProperties(var15, var14);
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 12;
                    var7 = var6[var7];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.track;
                    var7 = _closure1_slot8;
                    var7 = var7.CLIENT_HEARTBEAT;
                    var7 = var8.bind(var9)(var7, var10);
                    var7 = var5.performance;
                    var5 = var7.now;
                    var5 = var5.bind(var7)();
                    _closure1_slot19 = var5;
                    var5 = _closure1_slot0;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.drainClickstream;
                    var4 = var4.bind(var5)();
 513:
                    return var3;
 516:
                    return var2;
 519:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function buildHeartbeatQOSPayload() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = new Array(0);
            var4 = _closure1_slot23;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 98; continue _fun0003 }
 17:
            var1 = _closure1_slot22;
            if(!var1) { _fun0003_ip = 40; continue _fun0003 }
 24:
            var4 = var2.push;
            var1 = 'foregrounded';
            var1 = var4.bind(var2)(var1);
 40:
            var4 = _closure1_slot21;
            var1 = _closure1_slot10;
            var1 = var1.DISCONNECTED;
            var1 = var4 !== var1;
            if(!var1) { _fun0003_ip = 79; continue _fun0003 }
 61:
            var4 = _closure1_slot21;
            var3 = _closure1_slot10;
            var3 = var3.RTC_DISCONNECTED;
            var1 = var4 !== var3;
 79:
            if(!var1) { _fun0003_ip = 98; continue _fun0003 }
 82:
            var3 = var2.push;
            var1 = 'rtc_connected';
            var1 = var3.bind(var2)(var1);
 98:
            var1 = {};
            var4 = var2.length;
            var3 = 0;
            var3 = var4 > var3;
            var1['active'] = var3;
            var3 = 25;
            var1['ver'] = var3;
            var1['reasons'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function isActive() {
        var2 = _closure1_slot27;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.active;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function scheduleHeartbeatTracking() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.addBreadcrumb;
            var3 = {};
            var7 = _closure1_slot22;
            var6 = 'Heartbeat Track State Parameters Changed. Foregrounded ';
            var8 = var6 + var7;
            var7 = _closure1_slot21;
            var6 = ', Connection State: ';
            var6 = var8 + var6;
            var6 = var6 + var7;
            var3['message'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot28;
            var3 = var3.bind(var1)();
            if(var3) { _fun0004_ip = 95; continue _fun0004 }
 85:
            var3 = _closure1_slot24;
            var3 = var3.bind(var1)();
            _fun0004_ip = 106; continue _fun0004;
 95:
            var3 = function startAnalyticsHeartbeat() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot16;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 176; continue _fun0005 }
 16:
                    var1 = _closure1_slot19;
                    var6 = 0;
                    if(!(var6 !== var1)) { _fun0005_ip = 59; continue _fun0005 }
 26:
                    var3 = _closure1_slot11;
                    var1 = global;
                    var4 = var1.performance;
                    var1 = var4.now;
                    var4 = var1.bind(var4)();
                    var1 = _closure1_slot19;
                    var1 = var4 - var1;
                    var6 = var3 - var1;
 59:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var1 = var4[var1];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var1);
                    var4 = var7.addBreadcrumb;
                    var1 = {};
                    var3 = global;
                    var8 = var3.HermesInternal;
                    var11 = var8.concat;
                    var10 = 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ';
                    var8 = 1000;
                    var9 = var6 / var8;
                    var8 = ' seconds. Scheduling Heartbeat';
                    var8 = var11.bind(var10)(var9, var8);
                    var1['message'] = var8;
                    var1 = var4.bind(var7)(var1);
                    var1 = {};
                    var4 = 'timeout';
                    var1['type'] = var4;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        var2 = _closure1_slot25;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var2 = {};
                        var4 = 'interval';
                        var2['type'] = var4;
                        var4 = global;
                        var6 = var4.setInterval;
                        var5 = _closure1_slot11;
                        var4 = function() {
                            var2 = _closure1_slot25;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var4 = var6.bind(var1)(var4, var5);
                        var2['id'] = var4;
                        _closure1_slot16 = var2;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3, var6);
                    var1['id'] = var3;
                    _closure1_slot16 = var1;
 176:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var3.bind(var1)();
 106:
            var4 = _closure1_slot4;
            var3 = var4.getSocket;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 147; continue _fun0004 }
 126:
            var3 = var4.handleActiveStateChange;
            var2 = _closure1_slot27;
            var2 = var2.bind(var1)();
            var2 = var3.bind(var4)(var2);
 147:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function scheduleHeartbeatSkippedTracking() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot17;
            var1 = null;
            if(!(var1 == var3)) { _fun0006_ip = 58; continue _fun0006 }
 13:
            var1 = {};
            var3 = global;
            var6 = var3.setInterval;
            var5 = _closure1_slot11;
            var4 = undefined;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot23;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0007_ip = 48; continue _fun0007 }
 16:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.shouldLogClientHeartbeatSkipped;
                    var2 = var3.bind(var4)();
 48:
                    if(!var2) { _fun0007_ip = 137; continue _fun0007 }
 51:
                    var2 = global;
                    var3 = var2.performance;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot19;
                    var3 = var3 - var2;
                    var2 = _closure1_slot11;
                    if(!(!(var3 <= var2))) { _fun0007_ip = 137; continue _fun0007 }
 84:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot8;
                    var2 = var1.CLIENT_HEARTBEAT_SKIPPED;
                    var1 = {};
                    var5 = 25;
                    var1['client_heartbeat_version'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 137:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var4)(var3, var5);
            var1['id'] = var3;
            var3 = 'interval';
            var1['type'] = var3;
            _closure1_slot17 = var1;
 58:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function validateClientSession(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arg1;
            var3 = null;
            var2 = var3 == var7;
            var1 = null;
            if(var2) { _fun0008_ip = 141; continue _fun0008 }
 17:
            var6 = var7.version;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 15;
            var2 = var2[var9];
            var8 = undefined;
            var2 = var5.bind(var8)(var2);
            var5 = var2.CLIENT_SESSION_STORAGE_VERSION;
            var2 = var7;
            if(!(var6 !== var5)) { _fun0008_ip = 138; continue _fun0008 }
 61:
            var6 = _closure1_slot15;
            var5 = var6.warn;
            var10 = var7.version;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var7.bind(var8)(var4);
            var9 = var4.CLIENT_SESSION_STORAGE_VERSION;
            var4 = global;
            var4 = var4.HermesInternal;
            var8 = var4.concat;
            var7 = 'Throwing away client session with invalid version: ';
            var4 = ', expected ';
            var4 = var8.bind(var7)(var10, var4, var9);
            var4 = var5.bind(var6)(var4);
            var2 = null;
 138:
            var1 = var2;
 141:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function forceDispatchSessionIdUpdate() {
        var1 = undefined;
        var4 = _closure1_slot33;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function _forceDispatchSessionIdUpdate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 114; continue _fun0009 }
 7:
                    var5 = _closure1_slot39;
                    var3 = undefined;
                    var2 = false;
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=27);
 25:
                    return var2;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 111; continue _fun0009 }
 33:
                    var5 = null;
                    if(!(var5 != var2)) { _fun0009_ip = 108; continue _fun0009 }
 39:
                    var7 = _closure1_slot4;
                    var6 = var7.getSocket;
                    var8 = var6.bind(var7)();
                    if(!(var5 != var8)) { _fun0009_ip = 108; continue _fun0009 }
 57:
                    var7 = var8.handleUpdateTimeSpentSessionId;
                    var6 = var2.createdAtTimestamp;
                    var5 = var2.uuid;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 16;
                    var4 = var10[var4];
                    var4 = var9.bind(var3)(var4);
                    var4 = var4.clientLaunchId;
                    var4 = var7.bind(var8)(var6, var5, var4);
 108:
                    return var3;
 111:
                    return var2;
 114:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function handleAuthenticationChange() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.getToken;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot23;
            if(!(var3 !== var2)) { _fun0010_ip = 104; continue _fun0010 }
 25:
            _closure1_slot23 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var5 = var2.Storage;
            var4 = var5.remove;
            var2 = _closure1_slot13;
            var2 = var4.bind(var5)(var2);
            var2 = {'state': 'loaded', 'session': null};
            _closure1_slot20 = var2;
            var2 = _closure1_slot24;
            var2 = var2.bind(var3)();
            var2 = 0;
            _closure1_slot19 = var2;
 104:
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleRTCStateChange() {
        var3 = _closure1_slot7;
        var2 = var3.getState;
        var2 = var2.bind(var3)();
        _closure1_slot21 = var2;
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function handleWindowFocus(arg1) {
        var1 = arg1;
        var2 = var1.focused;
        _closure1_slot22 = var2;
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function handleAppStateUpdate(arg1) {
        var1 = arg1;
        var3 = var1.state;
        var2 = _closure1_slot9;
        var2 = var2.ACTIVE;
        var2 = var3 === var2;
        _closure1_slot22 = var2;
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function handleFluxInitialized() {
        var3 = _closure1_slot7;
        var1 = var3.getState;
        var1 = var1.bind(var3)();
        _closure1_slot21 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.isForegrounded;
        var3 = var3.bind(var4)();
        _closure1_slot22 = var3;
        var2 = _closure1_slot34;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot38 = var1;
    var4 = function getSession() {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var4;
    var1 = function _getSession() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 256; continue _fun0011 }
 15:
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0011_ip = 23; continue _fun0011 }
 21:
                    var2 = true;
 23:
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var4;
                    var _closure4_slot2 = var4;
                    SaveGenerator(address=39);
 37:
                    return var4;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 253; continue _fun0011 }
 48:
                    var7 = null;
                    _closure4_slot1 = var7;
                    var6 = _closure1_slot20;
                    var9 = var6.state;
                    var8 = 'loaded';
                    var6 = null;
                    if(!(var8 === var9)) { _fun0011_ip = 104; continue _fun0011 }
 76:
                    var8 = _closure1_slot20;
                    var8 = var8.session;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0011_ip = 101; continue _fun0011 }
 95:
                    var7 = var8.uuid;
 101:
                    var6 = var7;
 104:
                    _closure4_slot2 = var6;
 108: // try_start_0
                    var6 = _closure1_slot20;
                    var7 = var6.state;
                    var6 = 'uninitialized';
                    if(!(var6 !== var7)) { _fun0011_ip = 139; continue _fun0011 }
 127:
                    var6 = _closure1_slot20;
                    var7 = var6.session;
                    _fun0011_ip = 199; continue _fun0011;
 139:
                    var8 = _closure1_slot31;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 14;
                    var6 = var10[var6];
                    var6 = var9.bind(var4)(var6);
                    var10 = var6.Storage;
                    var9 = var10.getAfterRefresh;
                    var6 = _closure1_slot13;
                    var6 = var9.bind(var10)(var6);
                    SaveGenerator(address=188);
 186:
                    return var6;
 188:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0011_ip = 205; continue _fun0011 }
 194:
                    var7 = var8.bind(var4)(var6);
 199:
                    _closure4_slot1 = var7;
 203: // try_end0
                    _fun0011_ip = 241; continue _fun0011;
 205:
                    return var6;
 208: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.captureException;
                    var5 = var5.bind(var6)(var7);
 241:
                    var3 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var6 = global;
                            var2 = var6.Date;
                            var1 = var2.now;
                            var5 = var1.bind(var2)();
                            var1 = _closure1_slot28;
                            var8 = undefined;
                            var7 = var1.bind(var8)();
                            var4 = _closure4_slot1;
                            var3 = null;
                            if(var7) { _fun0012_ip = 99; continue _fun0012 }
 42:
                            var7 = var3 != var4;
                            if(!var7) { _fun0012_ip = 84; continue _fun0012 }
 49:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 15;
                            var9 = var11[var9];
                            var11 = var10.bind(var8)(var9);
                            var10 = var11.isSessionExpired;
                            var9 = _closure4_slot1;
                            var7 = var10.bind(var11)(var9);
 84:
                            if(!var7) { _fun0012_ip = 357; continue _fun0012 }
 90:
                            _closure4_slot1 = var3;
                            _fun0012_ip = 357; continue _fun0012;
 99:
                            var4 = var3 == var4;
                            if(var4) { _fun0012_ip = 141; continue _fun0012 }
 106:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 15;
                            var7 = var10[var7];
                            var10 = var9.bind(var8)(var7);
                            var9 = var10.isSessionExpired;
                            var7 = _closure4_slot1;
                            var4 = var9.bind(var10)(var7);
 141:
                            if(!var4) { _fun0012_ip = 224; continue _fun0012 }
 144:
                            var4 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 19;
                            var7 = var10[var7];
                            var11 = var9.bind(var8)(var7);
                            var7 = var11.v4;
                            var7 = var7.bind(var11)();
                            var4['uuid'] = var7;
                            var4['createdAtTimestamp'] = var5;
                            var4['lastUsedTimestamp'] = var5;
                            var7 = 15;
                            var7 = var10[var7];
                            var7 = var9.bind(var8)(var7);
                            var7 = var7.CLIENT_SESSION_STORAGE_VERSION;
                            var4['version'] = var7;
                            _closure4_slot1 = var4;
                            var4 = 0;
                            _closure1_slot18 = var4;
 224:
                            var4 = _closure4_slot1;
                            var4['lastUsedTimestamp'] = var5;
                            var7 = _closure4_slot1;
                            var5 = var7;
                            var4 = undefined;
                            var7 = var6.performance;
                            var6 = var7.now;
                            var7 = var6.bind(var7)();
                            var4 = var7;
                            var6 = _closure1_slot18;
                            var7 = var7 - var6;
                            var6 = _closure1_slot12;
                            if(!(!(var7 < var6))) { _fun0012_ip = 357; continue _fun0012 }
 277: // try_start_0
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 14;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            var9 = var6.Storage;
                            var7 = var9.set;
                            var6 = _closure1_slot13;
                            var5 = var7.bind(var9)(var6, var5);
                            _closure1_slot18 = var4;
 322: // try_end0
                            _fun0012_ip = 357; continue _fun0012;
 324: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var5 = var5.bind(var8)(var4);
                            var4 = var5.captureException;
                            var4 = var4.bind(var5)(var6);
 357:
                            var4 = {};
                            var5 = 'loaded';
                            var4['state'] = var5;
                            var5 = _closure4_slot1;
                            var4['session'] = var5;
                            _closure1_slot20 = var4;
                            var4 = _closure4_slot1;
                            var4 = var3 != var4;
                            if(!var4) { _fun0012_ip = 409; continue _fun0012 }
 391:
                            var6 = _closure4_slot2;
                            var5 = _closure4_slot1;
                            var5 = var5.uuid;
                            var4 = var6 !== var5;
 409:
                            if(!var4) { _fun0012_ip = 416; continue _fun0012 }
 412:
                            var4 = _closure4_slot0;
 416:
                            if(!var4) { _fun0012_ip = 496; continue _fun0012 }
 419:
                            var5 = _closure1_slot4;
                            var4 = var5.getSocket;
                            var6 = var4.bind(var5)();
                            if(!(var3 != var6)) { _fun0012_ip = 496; continue _fun0012 }
 437:
                            var5 = var6.handleUpdateTimeSpentSessionId;
                            var3 = _closure4_slot1;
                            var4 = var3.createdAtTimestamp;
                            var3 = _closure4_slot1;
                            var3 = var3.uuid;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 16;
                            var2 = var9[var2];
                            var2 = var7.bind(var8)(var2);
                            var2 = var2.clientLaunchId;
                            var2 = var5.bind(var6)(var4, var3, var2);
 496:
                            var1 = _closure4_slot1;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)();
                    return var3;
 253:
                    return var2;
 256:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var5 = 0;
    var8 = var7[var5];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var9 = 3;
    var9 = var7[var9];
    var9 = var11.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var11.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var10 = 5;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var12 = var10.AnalyticEvents;
    var _closure1_slot8 = var12;
    var12 = var10.AppStates;
    var _closure1_slot9 = var12;
    var10 = var10.RTCConnectionStates;
    var _closure1_slot10 = var10;
    var10 = 6;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.Millis;
    var13 = var12.MINUTE;
    var12 = 15;
    var12 = var12 * var13;
    var _closure1_slot11 = var12;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.SECOND;
    var _closure1_slot12 = var10;
    var10 = 'LAST_CLIENT_HEARTBEAT_SESSION';
    var _closure1_slot13 = var10;
    var10 = 'user';
    var _closure1_slot14 = var10;
    var10 = 7;
    var10 = var7[var10];
    var12 = var11.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var16 = 'SessionHeartbeatScheduler';
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot15 = var10;
    var10 = null;
    var _closure1_slot16 = var10;
    var _closure1_slot17 = var10;
    var _closure1_slot18 = var5;
    var _closure1_slot19 = var5;
    var5 = {};
    var10 = 'uninitialized';
    var5['state'] = var10;
    var _closure1_slot20 = var5;
    var5 = var9.getState;
    var5 = var5.bind(var9)();
    var _closure1_slot21 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var5 = var9.isForegrounded;
    var5 = var5.bind(var9)();
    var _closure1_slot22 = var5;
    var5 = var8.getToken;
    var5 = var5.bind(var8)();
    var _closure1_slot23 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/analytics_sessions/SessionHeartbeatScheduler.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function initSessionHeartbeatScheduler() {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 9;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.addBreadcrumb;
        var3 = {};
        var8 = 'Initializing SessionHeartbeatScheduler';
        var3['message'] = var8;
        var3 = var6.bind(var7)(var3);
        var7 = _closure1_slot7;
        var6 = var7.addChangeListener;
        var3 = _closure1_slot35;
        var3 = var6.bind(var7)(var3);
        var7 = _closure1_slot5;
        var6 = var7.addChangeListener;
        var3 = _closure1_slot34;
        var3 = var6.bind(var7)(var3);
        var3 = 17;
        var6 = var5[var3];
        var9 = var4.bind(var1)(var6);
        var8 = var9.subscribe;
        var7 = _closure1_slot36;
        var6 = 'WINDOW_FOCUS';
        var6 = var8.bind(var9)(var6, var7);
        var6 = var5[var3];
        var9 = var4.bind(var1)(var6);
        var8 = var9.subscribe;
        var7 = _closure1_slot37;
        var6 = 'APP_STATE_UPDATE';
        var6 = var8.bind(var9)(var6, var7);
        var3 = var5[var3];
        var8 = var4.bind(var1)(var3);
        var7 = var8.subscribe;
        var6 = _closure1_slot32;
        var3 = 'CONNECTION_OPEN';
        var3 = var7.bind(var8)(var3, var6);
        var3 = _closure1_slot29;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot30;
        var3 = var3.bind(var1)();
        var3 = 18;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var4 = var3.initialized;
        var3 = var4.then;
        var2 = _closure1_slot38;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['initSessionHeartbeatScheduler'] = var5;
    var3['getSession'] = var4;
    var2 = function getActiveSessionUnsafe() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = _closure1_slot20;
            var2 = var1.state;
            var1 = 'uninitialized';
            if(!(var1 !== var2)) { _fun0013_ip = 34; continue _fun0013 }
 22:
            var1 = _closure1_slot20;
            var2 = var1.session;
            _fun0013_ip = 85; continue _fun0013;
 34:
            var5 = _closure1_slot31;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var7 = var1.Storage;
            var6 = var7.get;
            var1 = _closure1_slot13;
            var1 = var6.bind(var7)(var1);
            var2 = var5.bind(var4)(var1);
 85:
            var4 = null;
            var5 = var4 == var2;
            var1 = null;
            if(var5) { _fun0013_ip = 137; continue _fun0013 }
 96:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.isSessionExpired;
            var3 = var3.bind(var5)(var2);
            var1 = null;
            if(var3) { _fun0013_ip = 137; continue _fun0013 }
 134:
            var1 = var2;
 137:
            return var1;
        }
    };
    var3['getActiveSessionUnsafe'] = var2;
    return var1;
})();