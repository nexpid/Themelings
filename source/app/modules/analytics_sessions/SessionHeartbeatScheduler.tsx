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
case 0:
            var2 = _closure1_slot16;
            var3 = null;
            var4 = var3 == var2;
            var2 = false;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot16;
            var5 = var4.type;
            var4 = 'timeout';
            if(!(var4 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 'interval';
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot16;
            var4 = var4.type;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = global;
            var6 = var4.clearInterval;
            var4 = _closure1_slot16;
            var5 = var4.id;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var4 = global;
            var6 = var4.clearTimeout;
            var4 = _closure1_slot16;
            var5 = var4.id;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
case 8:
            _closure1_slot16 = var3;
            var2 = true;
case 2:
            if(!var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
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
case 9:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = global;
                    var3 = var5.Date;
                    var2 = var3.now;
                    var11 = var2.bind(var3)();
                    var2 = _closure1_slot39;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=44);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = var5.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var7 = null;
                    if(!(var7 == var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
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
                    _fun0002_ip = 19; continue _fun0002;
case 17:
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
                    var6 = 26;
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
                    if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var8 = var6;
case 20:
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
case 19:
                    return var3;
case 15:
                    return var2;
case 11:
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
case 0:
            var2 = new Array(0);
            var4 = _closure1_slot23;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = _closure1_slot22;
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = var2.push;
            var1 = 'foregrounded';
            var1 = var4.bind(var2)(var1);
case 24:
            var4 = _closure1_slot21;
            var1 = _closure1_slot10;
            var1 = var1.DISCONNECTED;
            var1 = var4 !== var1;
            if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var4 = _closure1_slot21;
            var3 = _closure1_slot10;
            var3 = var3.RTC_DISCONNECTED;
            var1 = var4 !== var3;
case 26:
            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 28:
            var3 = var2.push;
            var1 = 'rtc_connected';
            var1 = var3.bind(var2)(var1);
case 22:
            var1 = {};
            var4 = var2.length;
            var3 = 0;
            var3 = var4 > var3;
            var1['active'] = var3;
            var3 = 26;
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
case 0:
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
            if(var3) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = _closure1_slot24;
            var3 = var3.bind(var1)();
            _fun0004_ip = 31; continue _fun0004;
case 29:
            var3 = function startAnalyticsHeartbeat() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot16;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var1 = _closure1_slot19;
                    var6 = 0;
                    if(!(var6 !== var1)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var3 = _closure1_slot11;
                    var1 = global;
                    var4 = var1.performance;
                    var1 = var4.now;
                    var4 = var1.bind(var4)();
                    var1 = _closure1_slot19;
                    var1 = var4 - var1;
                    var6 = var3 - var1;
case 34:
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
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var3.bind(var1)();
case 31:
            var4 = _closure1_slot4;
            var3 = var4.getSocket;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var4.handleActiveStateChange;
            var2 = _closure1_slot27;
            var2 = var2.bind(var1)();
            var2 = var3.bind(var4)(var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function scheduleHeartbeatSkippedTracking() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot17;
            var1 = null;
            if(!(var1 == var3)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var1 = {};
            var3 = global;
            var6 = var3.setInterval;
            var5 = _closure1_slot11;
            var4 = undefined;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot23;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0007_ip = 40; continue _fun0007 }
case 33:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.shouldLogClientHeartbeatSkipped;
                    var2 = var3.bind(var4)();
case 40:
                    if(!var2) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var2 = global;
                    var3 = var2.performance;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot19;
                    var3 = var3 - var2;
                    var2 = _closure1_slot11;
                    if(!(!(var3 <= var2))) { _fun0007_ip = 41; continue _fun0007 }
case 43:
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
                    var5 = 26;
                    var1['client_heartbeat_version'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var4)(var3, var5);
            var1['id'] = var3;
            var3 = 'interval';
            var1['type'] = var3;
            _closure1_slot17 = var1;
case 38:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function validateClientSession(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var3 = null;
            var2 = var3 == var7;
            var1 = null;
            if(var2) { _fun0008_ip = 44; continue _fun0008 }
case 23:
            var6 = var7.version;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 15;
            var2 = var2[var9];
            var8 = undefined;
            var2 = var5.bind(var8)(var2);
            var5 = var2.CLIENT_SESSION_STORAGE_VERSION;
            var2 = var7;
            if(!(var6 !== var5)) { _fun0008_ip = 45; continue _fun0008 }
case 27:
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
case 45:
            var1 = var2;
case 44:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var5 = _closure1_slot39;
                    var3 = undefined;
                    var2 = false;
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=27);
case 48:
                    return var2;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var5 = null;
                    if(!(var5 != var2)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var7 = _closure1_slot4;
                    var6 = var7.getSocket;
                    var8 = var6.bind(var7)();
                    if(!(var5 != var8)) { _fun0009_ip = 52; continue _fun0009 }
case 54:
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
case 52:
                    return var3;
case 50:
                    return var2;
case 46:
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
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getToken;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot23;
            if(!(var3 !== var2)) { _fun0010_ip = 8; continue _fun0010 }
case 48:
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
case 8:
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleRTCStateChange() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot7;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot21;
            if(!(var3 !== var2)) { _fun0011_ip = 53; continue _fun0011 }
case 48:
            _closure1_slot21 = var2;
            var2 = _closure1_slot29;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 53:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function handleWindowFocus(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = var1.focused;
            var3 = _closure1_slot22;
            if(!(var3 !== var2)) { _fun0012_ip = 55; continue _fun0012 }
case 56:
            _closure1_slot22 = var2;
            var2 = _closure1_slot29;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 55:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function handleAppStateUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.state;
            var2 = _closure1_slot9;
            var2 = var2.ACTIVE;
            var2 = var3 === var2;
            var3 = _closure1_slot22;
            if(!(var3 !== var2)) { _fun0013_ip = 57; continue _fun0013 }
case 51:
            _closure1_slot22 = var2;
            var2 = _closure1_slot29;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 57:
            var1 = undefined;
            return var1;
        }
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0014_ip = 60; continue _fun0014 }
case 61:
                    var2 = true;
case 60:
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var4;
                    var _closure4_slot2 = var4;
                    SaveGenerator(address=39);
case 62:
                    return var4;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 63; continue _fun0014 }
case 40:
                    var7 = null;
                    _closure4_slot1 = var7;
                    var6 = _closure1_slot20;
                    var9 = var6.state;
                    var8 = 'loaded';
                    var6 = null;
                    if(!(var8 === var9)) { _fun0014_ip = 8; continue _fun0014 }
case 64:
                    var8 = _closure1_slot20;
                    var8 = var8.session;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0014_ip = 65; continue _fun0014 }
case 29:
                    var7 = var8.uuid;
case 65:
                    var6 = var7;
case 8:
                    _closure4_slot2 = var6;
case 52: // try_start_0
                    var6 = _closure1_slot20;
                    var7 = var6.state;
                    var6 = 'uninitialized';
                    if(!(var6 !== var7)) { _fun0014_ip = 66; continue _fun0014 }
case 67:
                    var6 = _closure1_slot20;
                    var7 = var6.session;
                    _fun0014_ip = 68; continue _fun0014;
case 66:
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
case 69:
                    return var6;
case 70:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                    var7 = var8.bind(var4)(var6);
case 68:
                    _closure4_slot1 = var7;
case 73: // try_end0
                    _fun0014_ip = 74; continue _fun0014;
case 71:
                    return var6;
case 75: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.captureException;
                    var5 = var5.bind(var6)(var7);
case 74:
                    var3 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var6 = global;
                            var2 = var6.Date;
                            var1 = var2.now;
                            var5 = var1.bind(var2)();
                            var1 = _closure1_slot28;
                            var8 = undefined;
                            var7 = var1.bind(var8)();
                            var4 = _closure4_slot1;
                            var3 = null;
                            if(var7) { _fun0015_ip = 76; continue _fun0015 }
case 13:
                            var7 = var3 != var4;
                            if(!var7) { _fun0015_ip = 43; continue _fun0015 }
case 77:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 15;
                            var9 = var11[var9];
                            var11 = var10.bind(var8)(var9);
                            var10 = var11.isSessionExpired;
                            var9 = _closure4_slot1;
                            var7 = var10.bind(var11)(var9);
case 43:
                            if(!var7) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                            _closure4_slot1 = var3;
                            _fun0015_ip = 78; continue _fun0015;
case 76:
                            var4 = var3 == var4;
                            if(var4) { _fun0015_ip = 44; continue _fun0015 }
case 31:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 15;
                            var7 = var10[var7];
                            var10 = var9.bind(var8)(var7);
                            var9 = var10.isSessionExpired;
                            var7 = _closure4_slot1;
                            var4 = var9.bind(var10)(var7);
case 44:
                            if(!var4) { _fun0015_ip = 80; continue _fun0015 }
case 81:
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
case 80:
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
                            if(!(!(var7 < var6))) { _fun0015_ip = 78; continue _fun0015 }
case 82: // try_start_0
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
case 83: // try_end0
                            _fun0015_ip = 78; continue _fun0015;
case 84: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var5 = var5.bind(var8)(var4);
                            var4 = var5.captureException;
                            var4 = var4.bind(var5)(var6);
case 78:
                            var4 = {};
                            var5 = 'loaded';
                            var4['state'] = var5;
                            var5 = _closure4_slot1;
                            var4['session'] = var5;
                            _closure1_slot20 = var4;
                            var4 = _closure4_slot1;
                            var4 = var3 != var4;
                            if(!var4) { _fun0015_ip = 85; continue _fun0015 }
case 86:
                            var6 = _closure4_slot2;
                            var5 = _closure4_slot1;
                            var5 = var5.uuid;
                            var4 = var6 !== var5;
case 85:
                            if(!var4) { _fun0015_ip = 87; continue _fun0015 }
case 88:
                            var4 = _closure4_slot0;
case 87:
                            if(!var4) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                            var5 = _closure1_slot4;
                            var4 = var5.getSocket;
                            var6 = var4.bind(var5)();
                            if(!(var3 != var6)) { _fun0015_ip = 89; continue _fun0015 }
case 91:
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
case 89:
                            var1 = _closure4_slot1;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)();
                    return var3;
case 63:
                    return var2;
case 58:
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = _closure1_slot20;
            var2 = var1.state;
            var1 = 'uninitialized';
            if(!(var1 !== var2)) { _fun0016_ip = 55; continue _fun0016 }
case 92:
            var1 = _closure1_slot20;
            var2 = var1.session;
            _fun0016_ip = 30; continue _fun0016;
case 55:
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
case 30:
            var4 = null;
            var5 = var4 == var2;
            var1 = null;
            if(var5) { _fun0016_ip = 41; continue _fun0016 }
case 93:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.isSessionExpired;
            var3 = var3.bind(var5)(var2);
            var1 = null;
            if(var3) { _fun0016_ip = 41; continue _fun0016 }
case 94:
            var1 = var2;
case 41:
            return var1;
        }
    };
    var3['getActiveSessionUnsafe'] = var2;
    return var1;
})();