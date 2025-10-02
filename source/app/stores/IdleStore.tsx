// app/stores/IdleStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot19 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = function isSystemIdle() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot16;
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = _closure1_slot17;
case 6:
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = _closure1_slot18;
case 10:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var _closure1_slot20 = var1;
        var11 = function checkIdleAFK() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = global;
                var2 = var3.Date;
                var1 = var2.now;
                var4 = var1.bind(var2)();
                var1 = _closure1_slot13;
                var4 = var4 - var1;
                var1 = _closure1_slot9;
                if(!(!(var4 > var1))) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var1 = _closure1_slot20;
                var5 = undefined;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 14:
                var1 = _closure1_slot14;
                if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var5 = var4.bind(var5)(var1);
                var4 = var5.dispatch;
                var1 = {'type': 'IDLE', 'idle': false};
                var1 = var4.bind(var5)(var1);
                _fun0004_ip = 15; continue _fun0004;
case 12:
                var1 = _closure1_slot14;
                if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.dispatch;
                var1 = {'type': 'IDLE', 'idle': true};
                var6 = _closure1_slot13;
                var1['idleSince'] = var6;
                var1 = var4.bind(var5)(var1);
case 15:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = var4.AfkTimeout;
                var4 = var5.getSetting;
                var5 = var4.bind(var5)();
                var4 = 0;
                if(!(var4 !== var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var6 = _closure1_slot12;
                var4 = null;
                if(!(var4 == var6)) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                var6 = var3.Date;
                var4 = var6.now;
                var6 = var4.bind(var6)();
                var4 = _closure1_slot13;
                var4 = var6 - var4;
                var7 = var3.Math;
                var6 = var7.min;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 10;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.Millis;
                var3 = var3.SECOND;
                var5 = var5 * var3;
                var3 = _closure1_slot9;
                var3 = var6.bind(var7)(var5, var3);
                if(!(!(var4 > var3))) { _fun0004_ip = 18; continue _fun0004 }
case 21:
                var3 = _closure1_slot20;
                var3 = var3.bind(var1)();
                if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 22:
                var3 = _closure1_slot15;
                if(!var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.dispatch;
                var3 = {'type': 'AFK', 'afk': false};
                var3 = var4.bind(var5)(var3);
                _fun0004_ip = 23; continue _fun0004;
case 18:
                var3 = _closure1_slot15;
                if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 25:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {'type': 'AFK', 'afk': true};
                var2 = var3.bind(var4)(var2);
case 23:
                return var1;
            }
        };
        var _closure1_slot21 = var11;
        var1 = function handlePowerEvent(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'handlePowerEvent';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = var3.power_events;
                if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var3 = arg1;
                if(!var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var _closure1_slot12 = var3;
case 28:
                var3 = _closure1_slot21;
                var3 = var3.bind(var1)();
                _fun0005_ip = 30; continue _fun0005;
case 26:
                var3 = _closure1_slot23;
                var2 = {};
                var2 = var3.bind(var1)(var2);
case 30:
                return var1;
            }
        };
        var _closure1_slot22 = var1;
        var9 = function handleGenericAction(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var2 = var1.timestamp;
                var3 = var1.type;
                var1 = 'OVERLAY_SET_NOT_IDLE';
                var3 = var1 === var3;
                if(!var3) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                var1 = null;
                var3 = var1 != var2;
case 31:
                var1 = var3;
                if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var4 = _closure1_slot13;
                var1 = var2 <= var4;
case 33:
                if(var1) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                var4 = null;
                _closure1_slot12 = var4;
                if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var2 = var3.bind(var4)();
case 37:
                _closure1_slot13 = var2;
                var2 = _closure1_slot21;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 35:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot23 = var9;
        var8 = global;
        var12 = var8.Object;
        var10 = var12.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var12)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 5;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var10 = var2.IDLE_DURATION;
        var _closure1_slot9 = var10;
        var2 = var2.AppStates;
        var _closure1_slot10 = var2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.SpeakingFlags;
        var _closure1_slot11 = var2;
        var10 = var8.Date;
        var2 = var10.now;
        var2 = var2.bind(var10)();
        var _closure1_slot13 = var2;
        var2 = false;
        var _closure1_slot14 = var2;
        var _closure1_slot15 = var2;
        var _closure1_slot16 = var2;
        var _closure1_slot17 = var2;
        var _closure1_slot18 = var2;
        var2 = 8;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.isPlatformEmbedded;
        if(!var2) { _fun0001_ip = 39; continue _fun0001 }
case 40:
        var2 = 12;
        var10 = var6[var2];
        var10 = var7.bind(var1)(var10);
        var12 = null;
        var13 = var12 == var10;
        var10 = undefined;
        if(var13) { _fun0001_ip = 41; continue _fun0001 }
case 42:
        var13 = var6[var2];
        var13 = var7.bind(var1)(var13);
        var10 = var13.remotePowerMonitor;
case 41:
        if(!(var12 == var10)) { _fun0001_ip = 43; continue _fun0001 }
case 39:
        var10 = var8.setInterval;
        var8 = 10;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var8 = var8.Millis;
        var12 = var8.SECOND;
        var8 = 30;
        var8 = var8 * var12;
        var8 = var10.bind(var1)(var11, var8);
        _fun0001_ip = 44; continue _fun0001;
case 43:
        var8 = function checkNativeIdle() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = function handleIdleTime(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = global;
                        var2 = var3.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = arg1;
                        var7 = var2 - var1;
                        var4 = _closure1_slot12;
                        var1 = null;
                        var4 = var1 == var4;
                        if(var4) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                        var5 = _closure1_slot12;
                        var4 = var7 > var5;
case 45:
                        if(!var4) { _fun0008_ip = 47; continue _fun0008 }
case 11:
                        var6 = var3.Math;
                        var5 = var6.max;
                        var4 = _closure1_slot13;
                        var4 = var5.bind(var6)(var7, var4);
                        _closure1_slot13 = var4;
                        _closure1_slot12 = var1;
case 47:
                        var4 = _closure1_slot21;
                        var1 = undefined;
                        var4 = var4.bind(var1)();
                        var4 = var3.setTimeout;
                        var3 = _closure1_slot24;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 10;
                        var2 = var2[var5];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.Millis;
                        var2 = var2.SECOND;
                        var2 = var5 * var2;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = 12;
                var3 = var1[var5];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var6 = null;
                var7 = var6 == var3;
                var3 = undefined;
                if(var7) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var5];
                var7 = var8.bind(var1)(var7);
                var7 = var7.remotePowerMonitor;
                var8 = var6 == var7;
                var3 = undefined;
                if(var8) { _fun0007_ip = 48; continue _fun0007 }
case 50:
                var3 = var7.getSystemIdleTimeMs;
case 48:
                if(!(var6 != var3)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var1)(var2);
                var3 = var2.remotePowerMonitor;
                var2 = var3.getSystemIdleTimeMs;
                var3 = var2.bind(var3)();
                var2 = global;
                var2 = var2.Promise;
                var2 = var3 instanceof var2;
                if(var2) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var2 = var4.bind(var1)(var3);
                _fun0007_ip = 51; continue _fun0007;
case 53:
                var2 = var3.then;
                var2 = var2.bind(var3)(var4);
case 51:
                return var1;
            }
        };
        var _closure1_slot24 = var8;
        var8 = var8.bind(var1)();
        var8 = var6[var2];
        var8 = var7.bind(var1)(var8);
        var12 = var8.remotePowerMonitor;
        var11 = var12.on;
        var10 = 'resume';
        var8 = function() {
            var3 = false;
            _closure1_slot16 = var3;
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var8 = var11.bind(var12)(var10, var8);
        var8 = var6[var2];
        var8 = var7.bind(var1)(var8);
        var12 = var8.remotePowerMonitor;
        var11 = var12.on;
        var10 = 'suspend';
        var8 = function() {
            var4 = true;
            _closure1_slot16 = var4;
            var3 = _closure1_slot22;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.disconnect;
            var2 = var2.bind(var3)();
            return var1;
        };
        var8 = var11.bind(var12)(var10, var8);
        var8 = var6[var2];
        var8 = var7.bind(var1)(var8);
        var12 = var8.remotePowerMonitor;
        var11 = var12.on;
        var10 = 'lock-screen';
        var8 = function() {
            var3 = true;
            _closure1_slot17 = var3;
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var8 = var11.bind(var12)(var10, var8);
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var11 = var2.remotePowerMonitor;
        var10 = var11.on;
        var8 = 'unlock-screen';
        var2 = function() {
            var3 = false;
            _closure1_slot17 = var3;
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var2 = var10.bind(var11)(var8, var2);
case 44:
        var2 = 15;
        var2 = var6[var2];
        var10 = var7.bind(var1)(var2);
        var8 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'handleGenericInput';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = var3.generic_inputs;
                if(!var3) { _fun0009_ip = 55; continue _fun0009 }
case 27:
                var3 = _closure1_slot23;
                var2 = {};
                var2 = var3.bind(var1)(var2);
case 55:
                return var1;
            }
        };
        var2 = 500;
        var2 = var10.bind(var1)(var8, var2);
        var2 = 16;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function IdleStore() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot19;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0010_ip = 56; continue _fun0010 }
case 11:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0010_ip = 30; continue _fun0010;
case 56:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 30:
                    var1 = var2.bind(var3)(var4, var1);
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
            var1 = 'isIdle';
            var5['key'] = var1;
            var1 = function value() {
                var1 = _closure1_slot14;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(5);
            var1[0] = var5;
            var5 = {};
            var7 = 'isAFK';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot15;
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'getIdleSince';
            var5['key'] = var7;
            var7 = function value() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot14;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                    var1 = _closure1_slot13;
case 57:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getSystemSuspended';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot16;
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'getSystemLocked';
            var5['key'] = var7;
            var6 = function value() {
                var1 = _closure1_slot17;
                return var1;
            };
            var5['value'] = var6;
            var1[4] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'IdleStore';
        var8['displayName'] = var2;
        var2 = 11;
        var2 = var6[var2];
        var16 = var7.bind(var1)(var2);
        var2 = {};
        var10 = function handleIdle(arg1) {
            var1 = arg1;
            var2 = var1.idle;
            _closure1_slot14 = var2;
            var1 = undefined;
            return var1;
        };
        var2['IDLE'] = var10;
        var10 = function handleAFK(arg1) {
            var1 = arg1;
            var2 = var1.afk;
            _closure1_slot15 = var2;
            var1 = undefined;
            return var1;
        };
        var2['AFK'] = var10;
        var10 = function handleSpeaking(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var4 = var1.userId;
                var3 = var1.speakingFlags;
                var2 = _closure1_slot11;
                var2 = var2.NONE;
                var2 = var3 !== var2;
                if(!var2) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                var5 = _closure1_slot8;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                var2 = var4 === var3;
case 59:
                if(!var2) { _fun0012_ip = 55; continue _fun0012 }
case 10:
                var3 = _closure1_slot23;
                var2 = undefined;
                var1 = {};
                var1 = var3.bind(var2)(var1);
case 55:
                var1 = false;
                return var1;
            }
        };
        var2['SPEAKING'] = var10;
        var10 = function handleAppStateUpdate(arg1) {
            var1 = arg1;
            var3 = var1.state;
            var2 = _closure1_slot10;
            var2 = var2.BACKGROUND;
            var2 = var3 === var2;
            _closure1_slot18 = var2;
            var2 = null;
            _closure1_slot12 = var2;
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var2 = var2.bind(var3)();
            _closure1_slot13 = var2;
            var2 = _closure1_slot21;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = false;
            return var1;
        };
        var2['APP_STATE_UPDATE'] = var10;
        var2['OVERLAY_SET_NOT_IDLE'] = var9;
        var2['CHANNEL_SELECT'] = var9;
        var2['VOICE_CHANNEL_SELECT'] = var9;
        var2['WINDOW_FOCUS'] = var9;
        var2['OVERLAY_INITIALIZE'] = var9;
        var2['OVERLAY_SET_INPUT_LOCKED'] = var9;
        var4 = function handleSettingsProtoUpdate() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'handleSettingsProtoUpdate';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = var3.settings_updates;
                if(var3) { _fun0013_ip = 61; continue _fun0013 }
case 27:
                var3 = false;
                return var3;
case 61:
                var3 = _closure1_slot23;
                var2 = {};
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var17 = var4;
        var15 = var2;
        var2 = new var17[var8](var16, var15, var14);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 17;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/IdleStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();