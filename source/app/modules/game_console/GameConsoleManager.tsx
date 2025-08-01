// app/modules/game_console/GameConsoleManager.tsx
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function syncLocalState() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _syncLocalState() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 214; continue _fun0002 }
 13:
                    var3 = _closure1_slot11;
                    var2 = var3.getChannelId;
                    var6 = var2.bind(var3)();
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var7 = var7.bind(var3)(var2);
                    var2 = null;
                    var6 = var2 == var6;
                    var2 = 'Syncing to remote while in voice!';
                    var2 = var7.bind(var3)(var6, var2);
                    var6 = var5.selfMute;
                    var7 = _closure1_slot10;
                    var2 = var7.isSelfMute;
                    var2 = var2.bind(var7)();
                    if(!(var6 !== var2)) { _fun0002_ip = 144; continue _fun0002 }
 94:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var2 = var7[var2];
                    var7 = var6.bind(var3)(var2);
                    var6 = var7.toggleSelfMute;
                    var2 = {};
                    var8 = false;
                    var2['syncRemote'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=138);
 136:
                    return var2;
 138:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 211; continue _fun0002 }
 144:
                    var6 = var5.selfDeaf;
                    var7 = _closure1_slot10;
                    var5 = var7.isSelfDeaf;
                    var5 = var5.bind(var7)();
                    if(!(var6 !== var5)) { _fun0002_ip = 208; continue _fun0002 }
 168:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 16;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.toggleSelfDeaf;
                    var4 = {};
                    var7 = false;
                    var4['syncRemote'] = var7;
                    var4 = var5.bind(var6)(var4);
 208:
                    return var3;
 211:
                    return var2;
 214:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GAME_CONSOLE_SESSIONS;
    var _closure1_slot15 = var8;
    var4 = var4.USER_ACTION_REQUIRED_ERROR_CODES;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'GameConsoleManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot18 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function GameConsoleManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)();
                if(var1) { _fun0003_ip = 86; continue _fun0003 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0003_ip = 120; continue _fun0003;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 18;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.Timeout;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['rollbackCommandTimeout'] = var7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Timeout;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['awaitRemoteTimeout'] = var3;
                var3 = {};
                var4 = function WAIT_FOR_REMOTE_SESSION() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleWaitForRemoteSession;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['WAIT_FOR_REMOTE_SESSION'] = var4;
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleSessionsChanged;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function SESSIONS_REPLACE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleSessionsChanged;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['SESSIONS_REPLACE'] = var4;
                var4 = function AUDIO_TOGGLE_SELF_DEAF(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAudioStateToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['AUDIO_TOGGLE_SELF_DEAF'] = var4;
                var4 = function AUDIO_TOGGLE_SELF_MUTE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAudioStateToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['AUDIO_TOGGLE_SELF_MUTE'] = var4;
                var4 = function VOICE_STATE_UPDATES(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceStateUpdates;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['VOICE_STATE_UPDATES'] = var4;
                var4 = function CONSOLE_COMMAND_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleConsoleCommandUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CONSOLE_COMMAND_UPDATE'] = var4;
                var4 = function PASSIVE_UPDATE_V2(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceStateUpdates;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['PASSIVE_UPDATE_V2'] = var4;
                var4 = function REMOTE_SESSION_DISCONNECT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleRemoteSessionDisconnect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['REMOTE_SESSION_DISCONNECT'] = var4;
                var1['actions'] = var3;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = function findRemoteSession(arg1) {
                            var3 = arg1;
                            var4 = _closure1_slot14;
                            var2 = var4.getAwaitingRemoteSessionInfo;
                            var2 = var2.bind(var4)();
                            var _closure5_slot0 = var2;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var4 = arg1;
                                    var3 = _closure1_slot15;
                                    var2 = var3.has;
                                    var1 = var4.clientInfo;
                                    var1 = var1.os;
                                    var1 = var2.bind(var3)(var1);
                                    var7 = _closure1_slot13;
                                    var5 = var7.getVoiceStateForSession;
                                    var3 = _closure1_slot9;
                                    var2 = var3.getId;
                                    var3 = var2.bind(var3)();
                                    var2 = var4.sessionId;
                                    var2 = var5.bind(var7)(var3, var2);
                                    var7 = null;
                                    var2 = var7 != var2;
                                    var3 = _closure5_slot0;
                                    var3 = var7 == var3;
                                    if(var3) { _fun0005_ip = 146; continue _fun0005 }
 88:
                                    var8 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var6 = 17;
                                    var7 = var7[var6];
                                    var6 = undefined;
                                    var7 = var8.bind(var6)(var7);
                                    var6 = var7.coercePlatformTypeToConsoleType;
                                    var5 = _closure5_slot0;
                                    var5 = var5.type;
                                    var5 = var6.bind(var7)(var5);
                                    var4 = var4.clientInfo;
                                    var4 = var4.os;
                                    var3 = var5 === var4;
 146:
                                    if(!var1) { _fun0005_ip = 152; continue _fun0005 }
 149:
                                    var1 = var3;
 152:
                                    if(!var1) { _fun0005_ip = 158; continue _fun0005 }
 155:
                                    var1 = var2;
 158:
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = undefined;
                        var1 = arg1;
                        var4 = var3.bind(var2)(var1);
                        var1 = null;
                        if(!(var1 != var4)) { _fun0004_ip = 139; continue _fun0004 }
 25:
                        var3 = _closure3_slot0;
                        var5 = var3.awaitRemoteTimeout;
                        var3 = var5.stop;
                        var3 = var3.bind(var5)();
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 19;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.connectToRemote;
                        var5 = var4.sessionId;
                        var5 = var6.bind(var7)(var5);
                        var7 = _closure1_slot13;
                        var6 = var7.getVoiceStateForSession;
                        var8 = _closure1_slot9;
                        var5 = var8.getId;
                        var5 = var5.bind(var8)();
                        var4 = var4.sessionId;
                        var4 = var6.bind(var7)(var5, var4);
                        if(!(var1 != var4)) { _fun0004_ip = 137; continue _fun0004 }
 128:
                        var3 = _closure1_slot20;
                        var3 = var3.bind(var2)(var4);
 137:
                        return var2;
 139:
                        return var1;
                    }
                };
                var1['maybeConnect'] = var3;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.syncRemote;
                        var5 = var1.context;
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        if(!var3) { _fun0006_ip = 244; continue _fun0006 }
 28:
                        var4 = _closure1_slot17;
                        var4 = var4.DEFAULT;
                        if(!(var5 === var4)) { _fun0006_ip = 244; continue _fun0006 }
 48:
                        var5 = _closure1_slot10;
                        var4 = var5.isSelfDeaf;
                        var8 = var4.bind(var5)();
                        var5 = _closure1_slot10;
                        var4 = var5.isSelfMute;
                        var7 = var4.bind(var5)();
                        var5 = _closure1_slot9;
                        var4 = var5.getId;
                        var10 = var4.bind(var5)();
                        var5 = _closure1_slot14;
                        var4 = var5.getRemoteSessionId;
                        var6 = var4.bind(var5)();
                        var4 = null;
                        if(!(var4 != var6)) { _fun0006_ip = 244; continue _fun0006 }
 113:
                        var9 = _closure1_slot13;
                        var5 = var9.getVoiceStateForSession;
                        var5 = var5.bind(var9)(var10, var6);
                        _closure4_slot0 = var5;
                        if(!(var4 != var5)) { _fun0006_ip = 244; continue _fun0006 }
 137:
                        var4 = var5.selfDeaf;
                        var4 = var4 === var8;
                        if(!var4) { _fun0006_ip = 160; continue _fun0006 }
 150:
                        var5 = var5.selfMute;
                        var4 = var5 === var7;
 160:
                        if(var4) { _fun0006_ip = 244; continue _fun0006 }
 163:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 19;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.remoteVoiceStateUpdate;
                        var3 = {};
                        var3['selfDeaf'] = var8;
                        var3['selfMute'] = var7;
                        var3 = var4.bind(var5)(var6, var3);
                        var3 = _closure3_slot0;
                        var5 = var3.rollbackCommandTimeout;
                        var4 = var5.start;
                        var3 = 3000;
                        var2 = function() {
                            var3 = _closure1_slot20;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var3, var2);
 244:
                        return var1;
                    }
                };
                var1['handleAudioStateToggle'] = var3;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.voiceStates;
                        var5 = _closure1_slot14;
                        var3 = var5.getRemoteSessionId;
                        var5 = var3.bind(var5)();
                        var _closure4_slot0 = var5;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0007_ip = 98; continue _fun0007 }
 38:
                        var6 = var4.find;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.sessionId;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var6 = var6.bind(var4)(var5);
                        if(!(var3 != var6)) { _fun0007_ip = 94; continue _fun0007 }
 60:
                        var3 = _closure3_slot0;
                        var5 = var3.rollbackCommandTimeout;
                        var3 = var5.stop;
                        var3 = var3.bind(var5)();
                        var5 = _closure1_slot20;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var6);
 94:
                        var3 = undefined;
                        return var3;
 98:
                        var3 = var4.map;
                        var2 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.sessionId;
                                var1 = null;
                                var2 = var1 != var4;
                                if(!var2) { _fun0008_ip = 36; continue _fun0008 }
 18:
                                var3 = _closure1_slot12;
                                var2 = var3.getSessionById;
                                var1 = var2.bind(var3)(var4);
 36:
                                return var1;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.filter;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 20;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.isNotNullish;
                        var3 = var2.bind(var3)(var1);
                        var2 = _closure3_slot0;
                        var1 = var2.maybeConnect;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    }
                };
                var1['handleVoiceStateUpdates'] = var3;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var3 = _closure1_slot14;
                        var2 = var3.getRemoteSessionId;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        var4 = var2 != var3;
                        if(!var4) { _fun0009_ip = 45; continue _fun0009 }
 26:
                        var6 = _closure1_slot12;
                        var5 = var6.getSessionById;
                        var5 = var5.bind(var6)(var3);
                        var4 = var2 == var5;
 45:
                        if(!var4) { _fun0009_ip = 80; continue _fun0009 }
 48:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 19;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.disconnectRemote;
                        var4 = var4.bind(var5)();
 80:
                        if(!(var2 == var3)) { _fun0009_ip = 134; continue _fun0009 }
 84:
                        var3 = _closure3_slot0;
                        var2 = var3.maybeConnect;
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.values;
                        var6 = _closure1_slot12;
                        var1 = var6.getSessions;
                        var1 = var1.bind(var6)();
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
 134:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSessionsChanged'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var4 = var1.awaitRemoteTimeout;
                    var3 = var4.start;
                    var2 = 60000;
                    var1 = function() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 19;
                        var3 = var9[var1];
                        var1 = undefined;
                        var4 = var8.bind(var1)(var3);
                        var3 = var4.disconnectRemote;
                        var3 = var3.bind(var4)();
                        var3 = _closure1_slot1;
                        var2 = 21;
                        var2 = var9[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var5 = 22;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.wGMxr6;
                        var6 = var7.bind(var10)(var6);
                        var2['title'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.i5k8b2;
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleWaitForRemoteSession'] = var3;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var7 = var1.id;
                        var8 = var1.result;
                        var1 = var1.error;
                        var2 = 'failed';
                        var3 = var2 === var8;
                        if(var3) { _fun0010_ip = 45; continue _fun0010 }
 32:
                        var2 = 'n/a';
                        if(!(var2 === var8)) { _fun0010_ip = 523; continue _fun0010 }
 45:
                        var5 = null;
                        if(!(var5 != var1)) { _fun0010_ip = 523; continue _fun0010 }
 54:
                        var9 = _closure1_slot18;
                        var6 = var9.info;
                        var4 = 'Console command Error result:';
                        var4 = var6.bind(var9)(var4, var8, var1);
                        var6 = _closure1_slot14;
                        var4 = var6.getAwaitingRemoteSessionInfo;
                        var9 = var4.bind(var6)();
                        var10 = var5 == var9;
                        var4 = undefined;
                        var6 = undefined;
                        if(var10) { _fun0010_ip = 111; continue _fun0010 }
 105:
                        var6 = var9.commandId;
 111:
                        if(!(var6 === var7)) { _fun0010_ip = 523; continue _fun0010 }
 118:
                        var11 = _closure1_slot14;
                        var10 = var11.getDevice;
                        var7 = var9.type;
                        var12 = var9.deviceId;
                        var13 = var5 != var12;
                        var6 = '';
                        if(!var13) { _fun0010_ip = 153; continue _fun0010 }
 150:
                        var6 = var12;
 153:
                        var6 = var10.bind(var11)(var7, var6);
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var7 = 23;
                        var7 = var11[var7];
                        var7 = var10.bind(var4)(var7);
                        if(!(var5 == var6)) { _fun0010_ip = 307; continue _fun0010 }
 186:
                        var10 = {};
                        var11 = 'id';
                        var10['id'] = var11;
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var11 = 22;
                        var12 = var15[var11];
                        var12 = var14.bind(var4)(var12);
                        var16 = var12.intl;
                        var13 = var16.string;
                        var12 = var15[var11];
                        var12 = var14.bind(var4)(var12);
                        var12 = var12.t;
                        var12 = var12.UQMV/P;
                        var12 = var13.bind(var16)(var12);
                        var10['platform'] = var12;
                        var12 = var15[var11];
                        var12 = var14.bind(var4)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var4)(var11);
                        var11 = var11.t;
                        var11 = var11.UQMV/P;
                        var11 = var12.bind(var13)(var11);
                        var10['name'] = var11;
                        var6 = var10;
 307:
                        var8 = var7.bind(var4)(var6, var8, var1);
                        if(!(var5 != var8)) { _fun0010_ip = 401; continue _fun0010 }
 318:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 24;
                        var5 = var7[var5];
                        var7 = var6.bind(var4)(var5);
                        var6 = var7.showSelfDismissableAlert;
                        var5 = {};
                        var10 = var8.title;
                        var5['title'] = var10;
                        var10 = var8.body;
                        var5['body'] = var10;
                        var10 = var8.errorCodeMessage;
                        var5['errorCodeMessage'] = var10;
                        var10 = var8.isAccountLinkError;
                        var8 = undefined;
                        if(!var10) { _fun0010_ip = 391; continue _fun0010 }
 386:
                        var8 = var9.type;
 391:
                        var5['reconnectPlatformType'] = var8;
                        var5 = var6.bind(var7)(var5);
 401:
                        var6 = _closure1_slot16;
                        var5 = var6.has;
                        var1 = var1.code;
                        var1 = var5.bind(var6)(var1);
                        if(!var1) { _fun0010_ip = 449; continue _fun0010 }
 423:
                        var5 = _closure3_slot0;
                        var6 = var5.awaitRemoteTimeout;
                        var5 = var6.isStarted;
                        var5 = var5.bind(var6)();
                        if(var5) { _fun0010_ip = 484; continue _fun0010 }
 449:
                        if(!var3) { _fun0010_ip = 523; continue _fun0010 }
 452:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 19;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.disconnectRemote;
                        var2 = var2.bind(var3)();
                        _fun0010_ip = 523; continue _fun0010;
 484:
                        var1 = _closure3_slot0;
                        var5 = var1.awaitRemoteTimeout;
                        var4 = var5.start;
                        var3 = 180000;
                        var2 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.disconnectRemote;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1 = true;
                        var1 = var4.bind(var5)(var3, var2, var1);
 523:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConsoleCommandUpdate'] = var3;
                var2 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.awaitRemoteTimeout;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleRemoteSessionDisconnect'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/GameConsoleManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();