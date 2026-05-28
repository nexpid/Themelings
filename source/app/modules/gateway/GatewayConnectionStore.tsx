// app/modules/gateway/GatewayConnectionStore.tsx
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
            _closure1_slot30 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function _handleConnectionOpen() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var9 = global;
                    var3 = var9.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    _closure1_slot25 = var2;
                    var2 = arg1;
                    var2 = var2.sessionId;
                    _closure1_slot26 = var2;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var7 = 18;
                    var3 = var2[var7];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var5 = var3.localPresenceState;
                    var3 = var5.handleConnectionOpen;
                    var3 = var3.bind(var5)();
                    var5 = {};
                    var6 = _closure1_slot17;
                    var3 = var6.getVoiceChannelId;
                    var10 = var3.bind(var6)();
                    var3 = null;
                    var8 = var5;
                    if(!(var3 != var10)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var14 = 21;
                    var6 = var6[var14];
                    var6 = var11.bind(var2)(var6);
                    var11 = var6.Storage;
                    var6 = var11.get;
                    var13 = 'discord_watchdog_restart_timestamp';
                    var16 = var6.bind(var11)(var13);
                    var6 = var3 != var16;
                    if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var12 = var9.Date;
                    var11 = var12.now;
                    var12 = var11.bind(var12)();
                    var15 = var9.parseInt;
                    var11 = 10;
                    var11 = var15.bind(var2)(var16, var11);
                    var12 = var12 - var11;
                    var11 = 60000;
                    var6 = var12 < var11;
case 10:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var11 = var11[var14];
                    var11 = var12.bind(var2)(var11);
                    var12 = var11.Storage;
                    var11 = var12.remove;
                    var11 = var11.bind(var12)(var13);
                    var9 = var9.window;
                    var12 = var3 == var9;
                    var11 = undefined;
                    if(var12) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var13 = var9.performance;
                    var9 = var3 == var13;
                    var11 = undefined;
                    if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                    var9 = var13.getEntriesByType;
                    var9 = var3 == var9;
                    var11 = undefined;
                    if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 15:
                    var12 = var13.getEntriesByType;
                    var9 = 'navigation';
                    var12 = var12.bind(var13)(var9);
                    var9 = var3 == var12;
                    var11 = undefined;
                    if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 16:
                    var9 = 0;
                    var9 = var12[var9];
                    var12 = var3 == var9;
                    var11 = undefined;
                    if(var12) { _fun0002_ip = 12; continue _fun0002 }
case 17:
                    var11 = var9.type;
case 12:
                    var9 = 'reload';
                    if(!(var9 !== var11)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    if(var6) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                    var6 = _closure1_slot23;
                    var9 = var3 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var9 = _closure1_slot23;
                    var11 = var9.processUtils;
                    var9 = var3 == var11;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                    var9 = var11.getLastCrash;
                    var9 = var3 == var9;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 21; continue _fun0002 }
case 24:
                    var9 = var11.getLastCrash;
                    var6 = var9.bind(var11)();
case 21:
                    SaveGenerator(address=407);
case 25:
                    return var6;
case 26:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var11 = var3 == var6;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var9 = var6.rendererCrashReason;
case 29:
                    if(!(var3 == var9)) { _fun0002_ip = 18; continue _fun0002 }
case 31:
                    var9 = _closure1_slot27;
                    if(!var9) { _fun0002_ip = 18; continue _fun0002 }
case 32:
                    var12 = _closure1_slot15;
                    var11 = var12.setLastSessionVoiceChannelId;
                    var13 = var3 != var10;
                    var9 = null;
                    if(!var13) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var9 = var10;
case 33:
                    var9 = var11.bind(var12)(var9);
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var9 = 23;
                    var9 = var12[var9];
                    var11 = var11.bind(var2)(var9);
                    var9 = var11.selectVoiceChannel;
                    var9 = var9.bind(var11)(var3);
                    var8 = var5;
                    _fun0002_ip = 8; continue _fun0002;
case 27:
                    return var6;
case 18:
                    var9 = _closure1_slot13;
                    var6 = var9.getChannel;
                    var9 = var6.bind(var9)(var10);
                    var8 = var5;
                    if(!(var3 != var9)) { _fun0002_ip = 8; continue _fun0002 }
case 35:
                    var5 = {};
                    var6 = var9.getGuildId;
                    var6 = var6.bind(var9)();
                    var5['guildId'] = var6;
                    var5['channelId'] = var10;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var6 = 22;
                    var6 = var11[var6];
                    var9 = var9.bind(var2)(var6);
                    var6 = var9.muteCustomJoinSound;
                    var6 = var6.bind(var9)(var10);
                    var8 = var5;
case 8:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var5 = var6.bind(var2)(var5);
                    var7 = var5.localVoiceState;
                    var6 = var7.update;
                    var5 = true;
                    var5 = var6.bind(var7)(var8, var5);
                    var5 = false;
                    _closure1_slot27 = var5;
                    _closure1_slot29 = var3;
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var9 = function handleClipsFlags() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var2.localVoiceState;
        var2 = var3.update;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot32 = var9;
    var1 = function handleMediaEngineChange() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.localVoiceState;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        var1 = false;
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function handleLocalPresenceChange() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.localPresenceState;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        var1 = false;
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function deleteStream(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = _closure1_slot0;
            var1 = _closure1_slot3;
            var4 = 18;
            var3 = var1[var4];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var5 = var3.socket;
            var3 = var5.isSessionEstablished;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.socket;
            var3 = var4.streamDelete;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function cleanupAllStreamsExceptSelf() {
        var3 = function getSelfStreamKey() {
            var2 = _closure1_slot19;
            var1 = var2.getAllActiveStreamKeys;
            var3 = var1.bind(var2)();
            var2 = var3.find;
            var1 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 27;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.decodeStreamKey;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var2 = var2.ownerId;
                var3 = _closure1_slot11;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = undefined;
        var3 = var3.bind(var1)();
        var _closure2_slot0 = var3;
        var4 = _closure1_slot19;
        var3 = var4.getAllActiveStreamKeys;
        var5 = var3.bind(var4)();
        var4 = var5.filter;
        var3 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var1 !== var2;
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = _closure1_slot35;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var10 = global;
    var12 = var10.Object;
    var11 = var12.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var2);
    var2 = 0;
    var11 = var6[var2];
    var1 = undefined;
    var11 = var7.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 1;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 2;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 3;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 4;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 5;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot9 = var11;
    var11 = 6;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot10 = var11;
    var11 = 7;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot11 = var11;
    var11 = 8;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot12 = var11;
    var11 = 9;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot13 = var11;
    var11 = 10;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot14 = var11;
    var11 = 11;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot15 = var11;
    var11 = 12;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot16 = var11;
    var11 = 13;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot17 = var11;
    var11 = 14;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot18 = var11;
    var11 = 15;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot19 = var11;
    var11 = 16;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var12 = var11.RTCConnectionStates;
    var _closure1_slot20 = var12;
    var11 = var11.AppStates;
    var _closure1_slot21 = var11;
    var11 = 17;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.UserSettingsTypes;
    var _closure1_slot22 = var11;
    var10 = var10.window;
    var10 = var10.DiscordNative;
    var _closure1_slot23 = var10;
    var10 = 18;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.socket;
    var11 = var10.dispatcher;
    var10 = 19;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var11['getDispatchHandler'] = var10;
    var10 = 20;
    var10 = var6[var10];
    var12 = var7.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var15 = 'ConnectionStore';
    var16 = var11;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot24 = var10;
    var _closure1_slot25 = var2;
    var2 = null;
    var _closure1_slot26 = var2;
    var _closure1_slot27 = var8;
    var _closure1_slot28 = var2;
    var _closure1_slot29 = var2;
    var2 = 29;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GatewayConnectionStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot30;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 40; continue _fun0004;
case 38:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 40:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var13 = var4.waitFor;
            var23 = _closure1_slot11;
            var22 = _closure1_slot12;
            var21 = _closure1_slot13;
            var2 = _closure1_slot14;
            var19 = _closure1_slot15;
            var18 = _closure1_slot16;
            var17 = _closure1_slot17;
            var5 = _closure1_slot18;
            var15 = _closure1_slot19;
            var14 = _closure1_slot10;
            var24 = var4;
            var20 = var2;
            var16 = var5;
            var3 = var24[var13](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
            var6 = var4.syncWith;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot33;
            var2 = var6.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot34;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSocket';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.socket;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isTryingToConnect';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.socket;
            var1 = var2.isClosed;
            var1 = var1.bind(var2)();
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isConnected';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.socket;
            var1 = var2.isSessionEstablished;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isConnectedOrOverlay';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.socket;
                var1 = var2.isSessionEstablished;
                var1 = var1.bind(var2)();
                if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 37:
                var1 = false;
case 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'lastTimeConnectedChanged';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GatewayConnectionStore';
    var8['displayName'] = var2;
    var2 = 30;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleSessionStart() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var5 = 18;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.socket;
            var1 = var3.isClosed;
            var1 = var1.bind(var3)();
            var7 = _closure1_slot24;
            var6 = var7.verbose;
            if(var1) { _fun0006_ip = 38; continue _fun0006 }
case 42:
            var1 = 'Socket is not reconnecting during a new session because it is not closed';
            var1 = var6.bind(var7)(var1);
            var1 = false;
            _fun0006_ip = 9; continue _fun0006;
case 38:
            var3 = 'Socket is reconnecting because of starting new session';
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var3 = var2.socket;
            var2 = var3.connect;
            var1 = var2.bind(var3)();
case 9:
            return var1;
        }
    };
    var2['START_SESSION'] = var10;
    var10 = function handleSessionRefresh() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var9 = _closure1_slot24;
            var8 = var9.verbose;
            var7 = {};
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var5 = 18;
            var6 = var1[var5];
            var4 = undefined;
            var6 = var3.bind(var4)(var6);
            var10 = var6.socket;
            var6 = var10.isSessionEstablished;
            var6 = var6.bind(var10)();
            var7['isEstablished'] = var6;
            var6 = 'session refresh dispatched';
            var6 = var8.bind(var9)(var6, var7);
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var3 = var1.socket;
            var1 = var3.isSessionEstablished;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = var2[var5];
            var6 = var3.bind(var4)(var6);
            var7 = var6.socket;
            var6 = var7.close;
            var6 = var6.bind(var7)();
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var3 = var2.socket;
            var2 = var3.connect;
            var1 = var2.bind(var3)();
case 43:
            return var1;
        }
    };
    var2['LOGIN_SUCCESS'] = var10;
    var10 = function handleLogout(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.localPresenceState;
            var1 = var2.handleAccountSwitch;
            var1 = var1.bind(var2)();
case 45:
            var4 = _closure1_slot24;
            var3 = var4.verbose;
            var2 = 'Closing socket because of logout';
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.socket;
            var2 = var3.close;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var2['LOGOUT'] = var10;
    var10 = function handleClearCaches(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var1 = var1.resetSocket;
            if(!var1) { _fun0009_ip = 47; continue _fun0009 }
case 46:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 18;
            var5 = var4[var1];
            var2 = undefined;
            var5 = var3.bind(var2)(var5);
            var6 = var5.socket;
            var5 = var6.close;
            var5 = var5.bind(var6)();
            var5 = var4[var1];
            var5 = var3.bind(var2)(var5);
            var5 = var5.socket;
            var6 = var5.dispatcher;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
            var1 = var4[var1];
            var1 = var3.bind(var2)(var1);
            var2 = var1.socket;
            var1 = var2.connect;
            var1 = var1.bind(var2)();
case 47:
            var1 = false;
            return var1;
        }
    };
    var2['CLEAR_CACHES'] = var10;
    var10 = function CONNECTION_OPEN(arg1) {
        var3 = function handleConnectionOpen() {
            var1 = undefined;
            var4 = _closure1_slot31;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        var2 = !var2;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionResumed() {
        var1 = null;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_RESUMED'] = var10;
    var10 = function handleConnectionClosed() {
        var4 = _closure1_slot24;
        var3 = var4.verbose;
        var1 = 'connection closed dispatched';
        var1 = var3.bind(var4)(var1);
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot25 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var10;
    var10 = function handleRTCConnectionState(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.state;
            var3 = _closure1_slot20;
            var3 = var3.DISCONNECTED;
            if(!(var4 === var3)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var3 = var1.willReconnect;
            if(!var3) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var4 = var1.streamKey;
            var3 = null;
            if(!(var3 == var4)) { _fun0010_ip = 52; continue _fun0010 }
case 41:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 18;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var4 = var3.socket;
            var3 = var4.voiceServerPing;
            var3 = var3.bind(var4)();
            _fun0010_ip = 50; continue _fun0010;
case 52:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.socket;
            var2 = var3.streamPing;
            var1 = var1.streamKey;
            var1 = var2.bind(var3)(var1);
case 50:
            var1 = undefined;
            return var1;
case 48:
            var1 = false;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var10;
    var10 = function handleVoiceChannelSelect(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var4 = 18;
            var5 = var3[var4];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var7 = var5.localVoiceState;
            var6 = var7.update;
            var5 = {};
            var8 = var2.guildId;
            var5['guildId'] = var8;
            var8 = var2.channelId;
            var5['channelId'] = var8;
            var5 = var6.bind(var7)(var5);
            var7 = var2.lockVoiceStateForResume;
            var5 = null;
            var6 = null;
            if(!var7) { _fun0011_ip = 53; continue _fun0011 }
case 54:
            var7 = var2.channelId;
            var7 = var5 != var7;
            var6 = null;
            if(!var7) { _fun0011_ip = 53; continue _fun0011 }
case 55:
            var6 = var2.channelId;
case 53:
            _closure1_slot29 = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var6 = 24;
            var6 = var8[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.isIOS;
            var6 = var6.bind(var7)();
            if(!var6) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var8 = _closure1_slot28;
            var7 = _closure1_slot21;
            var7 = var7.BACKGROUND;
            var6 = var8 === var7;
case 56:
            if(!var6) { _fun0011_ip = 58; continue _fun0011 }
case 59:
            var2 = var2.channelId;
            if(!(var5 != var2)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var5 = var2.socket;
            var2 = var5.isClosed;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0011_ip = 58; continue _fun0011 }
case 62:
            var6 = _closure1_slot2;
            var2 = _closure1_slot3;
            var5 = 25;
            var5 = var2[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.setIsPaused;
            var5 = false;
            var5 = var6.bind(var7)(var5);
            var5 = _closure1_slot0;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var5 = var2.socket;
            var2 = var5.connect;
            var2 = var2.bind(var5)();
            _fun0011_ip = 58; continue _fun0011;
case 60:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var4];
            var1 = var2.bind(var3)(var1);
            var3 = var1.socket;
            var2 = var3.close;
            var1 = true;
            var1 = var2.bind(var3)(var1);
case 58:
            var1 = false;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var10;
    var10 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var4 = _closure1_slot11;
                var3 = var4.getId;
                var4 = var3.bind(var4)();
                var3 = var6.userId;
                if(!(var4 === var3)) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                var4 = var6.sessionId;
                var3 = _closure1_slot26;
                if(!(var4 !== var3)) { _fun0012_ip = 48; continue _fun0012 }
case 65:
                var4 = var6.guildId;
                var8 = _closure1_slot0;
                var3 = _closure1_slot3;
                var7 = 18;
                var3 = var3[var7];
                var5 = undefined;
                var3 = var8.bind(var5)(var3);
                var3 = var3.localVoiceState;
                var3 = var3.guildId;
                if(!(var4 === var3)) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var3 = var4.bind(var5)(var3);
                var5 = var3.localVoiceState;
                var4 = var5.setState;
                var3 = {'guildId': null, 'channelId': null};
                var3 = var4.bind(var5)(var3);
                _fun0012_ip = 68; continue _fun0012;
case 66:
                return var1;
case 48:
                var4 = _closure1_slot29;
                var3 = null;
                if(!(var3 == var4)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.localVoiceState;
                var4 = var5.setState;
                var3 = {};
                var7 = var6.guildId;
                var3['guildId'] = var7;
                var6 = var6.channelId;
                var3['channelId'] = var6;
                var3 = var4.bind(var5)(var3);
case 68:
                var3 = true;
                return var3;
case 69:
                var5 = _closure1_slot24;
                var4 = var5.verbose;
                var3 = _closure1_slot29;
                var2 = 'Ignoring voice state for own session due to VSU lock on channel:';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
case 63:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var10;
    var10 = function handleGuildDelete(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = var1.id;
            var6 = _closure1_slot0;
            var1 = _closure1_slot3;
            var4 = 18;
            var3 = var1[var4];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.localVoiceState;
            var3 = var3.guildId;
            if(!(var5 === var3)) { _fun0013_ip = 53; continue _fun0013 }
case 71:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.localVoiceState;
            var3 = var4.setState;
            var2 = {'guildId': null, 'channelId': null};
            var2 = var3.bind(var4)(var2);
case 53:
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var10 = function handleChannelDelete(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var5 = var1.id;
            var6 = _closure1_slot0;
            var1 = _closure1_slot3;
            var4 = 18;
            var3 = var1[var4];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.localVoiceState;
            var3 = var3.channelId;
            if(!(var5 === var3)) { _fun0014_ip = 53; continue _fun0014 }
case 71:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.localVoiceState;
            var3 = var4.setState;
            var2 = {'guildId': null, 'channelId': null};
            var2 = var3.bind(var4)(var2);
case 53:
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleCallDelete(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var6 = _closure1_slot0;
            var1 = _closure1_slot3;
            var4 = 18;
            var3 = var1[var4];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.localVoiceState;
            var3 = var3.channelId;
            if(!(var5 === var3)) { _fun0015_ip = 72; continue _fun0015 }
case 73:
            var3 = _closure1_slot29;
            if(!(var3 !== var5)) { _fun0015_ip = 74; continue _fun0015 }
case 75:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.localVoiceState;
            var3 = var4.setState;
            var2 = {'guildId': null, 'channelId': null};
            var2 = var3.bind(var4)(var2);
case 72:
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var2['CALL_DELETE'] = var10;
    var10 = function handleFocus(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 24;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0016_ip = 61; continue _fun0016 }
case 37:
            var4 = var1.state;
            var3 = _closure1_slot21;
            var3 = var3.ACTIVE;
            if(!(var4 === var3)) { _fun0016_ip = 76; continue _fun0016 }
case 77:
            var4 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 25;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.setIsPaused;
            var3 = false;
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot11;
            var3 = var4.isAuthenticated;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0016_ip = 76; continue _fun0016 }
case 78:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 18;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var6 = var3.socket;
            var4 = var6.resetBackoff;
            var3 = 'App state is active';
            var3 = var4.bind(var6)(var3);
            _fun0016_ip = 76; continue _fun0016;
case 61:
            var4 = _closure1_slot11;
            var3 = var4.isAuthenticated;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0016_ip = 79; continue _fun0016 }
case 80:
            var4 = _closure1_slot28;
            var3 = _closure1_slot21;
            var3 = var3.INACTIVE;
            if(!(var4 === var3)) { _fun0016_ip = 81; continue _fun0016 }
case 82:
            var4 = var1.state;
            var3 = _closure1_slot21;
            var3 = var3.BACKGROUND;
            if(!(var4 === var3)) { _fun0016_ip = 81; continue _fun0016 }
case 83:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var6 = 18;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.localVoiceState;
            var4 = var3.channelId;
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 28; continue _fun0016 }
case 81:
            var4 = _closure1_slot28;
            var3 = _closure1_slot21;
            var3 = var3.BACKGROUND;
            var3 = var4 === var3;
            if(!var3) { _fun0016_ip = 84; continue _fun0016 }
case 15:
            var7 = var1.state;
            var4 = _closure1_slot21;
            var4 = var4.ACTIVE;
            var3 = var7 === var4;
case 84:
            if(!var3) { _fun0016_ip = 85; continue _fun0016 }
case 86:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 18;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var7 = var4.socket;
            var4 = var7.isClosed;
            var3 = var4.bind(var7)();
case 85:
            if(!var3) { _fun0016_ip = 79; continue _fun0016 }
case 20:
            var4 = _closure1_slot2;
            var7 = _closure1_slot3;
            var3 = 25;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.setIsPaused;
            var3 = false;
            var3 = var4.bind(var8)(var3);
            var4 = _closure1_slot0;
            var3 = 18;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.socket;
            var3 = var4.connect;
            var3 = var3.bind(var4)();
            _fun0016_ip = 79; continue _fun0016;
case 28:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var5 = var3.socket;
            var4 = var5.close;
            var3 = true;
            var3 = var4.bind(var5)(var3);
case 79:
            var1 = var1.state;
            _closure1_slot28 = var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var2['APP_STATE_UPDATE'] = var10;
    var10 = function handleGuildMembersRequest(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var7 = 18;
            var5 = var4[var7];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var6 = var5.socket;
            var5 = var6.isSessionEstablished;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0017_ip = 87; continue _fun0017 }
case 75:
            var5 = 'userIds';
            var5 = var5 in var2;
            if(var5) { _fun0017_ip = 70; continue _fun0017 }
case 88:
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var6.bind(var4)(var5);
            var8 = var5.socket;
            var7 = var8.requestGuildMembers;
            var6 = var2.guildIds;
            var5 = {};
            var9 = var2.query;
            var5['query'] = var9;
            var9 = var2.limit;
            var5['limit'] = var9;
            var9 = var2.presences;
            var9 = !var9;
            var9 = !var9;
            var5['presences'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            _fun0017_ip = 87; continue _fun0017;
case 70:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 26;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var2 = var2.userIds;
            var4 = var3.bind(var4)(var2);
            var3 = var4.chunk;
            var2 = 100;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var5 = var2.socket;
                var4 = var5.requestGuildMembers;
                var6 = _closure2_slot0;
                var3 = var6.guildIds;
                var2 = {};
                var7 = arg1;
                var2['userIds'] = var7;
                var6 = var6.presences;
                var6 = !var6;
                var6 = !var6;
                var2['presences'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 87:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_MEMBERS_REQUEST'] = var10;
    var10 = function handleGuildSearchRecentMembers(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var7 = var1.query;
            var6 = var1.continuationToken;
            var8 = _closure1_slot0;
            var1 = _closure1_slot3;
            var4 = 18;
            var3 = var1[var4];
            var1 = undefined;
            var3 = var8.bind(var1)(var3);
            var8 = var3.socket;
            var3 = var8.isSessionEstablished;
            var3 = var3.bind(var8)();
            if(!var3) { _fun0018_ip = 89; continue _fun0018 }
case 90:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.socket;
            var3 = var4.searchRecentMembers;
            var2 = {};
            var2['query'] = var7;
            var2['continuationToken'] = var6;
            var2 = var3.bind(var4)(var5, var2);
case 89:
            return var1;
        }
    };
    var2['GUILD_SEARCH_RECENT_MEMBERS'] = var10;
    var10 = function handleGuildSubscriptionsFlush(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.subscriptions;
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var5 = 18;
            var2 = var2[var5];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var6 = var2.socket;
            var2 = var6.isSessionEstablished;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0019_ip = 91; continue _fun0019 }
case 71:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.socket;
            var1 = var2.updateGuildSubscriptions;
            var1 = var1.bind(var2)(var3);
case 91:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SUBSCRIPTIONS_FLUSH'] = var10;
    var10 = function handleCallConnect(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var5 = 18;
            var2 = var2[var5];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var6 = var2.socket;
            var2 = var6.isSessionEstablished;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0020_ip = 92; continue _fun0020 }
case 93:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.socket;
            var1 = var2.callConnect;
            var1 = var1.bind(var2)(var3);
case 92:
            var1 = false;
            return var1;
        }
    };
    var2['CALL_CONNECT'] = var10;
    var10 = function handleCallConnectMultiple(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelIds;
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var2 = var1.socket;
            var1 = var2.isSessionEstablished;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0021_ip = 3; continue _fun0021 }
case 71:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.socket;
                var3 = var4.callConnect;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 3:
            var1 = false;
            return var1;
        }
    };
    var2['CALL_CONNECT_MULTIPLE'] = var10;
    var2['STREAM_CREATE'] = var9;
    var10 = function handleStreamStart(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var6 = var1.streamType;
            var5 = var1.guildId;
            var4 = var1.channelId;
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var10 = 18;
            var1 = var1[var10];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var2 = var1.socket;
            var1 = var2.isSessionEstablished;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0022_ip = 94; continue _fun0022 }
case 77:
            var8 = null;
            if(!(var8 == var5)) { _fun0022_ip = 95; continue _fun0022 }
case 5:
            var2 = _closure1_slot12;
            var1 = var2.getCall;
            var1 = var1.bind(var2)(var4);
            var2 = var8 == var1;
            var3 = undefined;
            if(var2) { _fun0022_ip = 74; continue _fun0022 }
case 96:
            var3 = var1.region;
case 74:
            _fun0022_ip = 97; continue _fun0022;
case 95:
            var2 = _closure1_slot13;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var4);
            var11 = var8 == var2;
            var1 = undefined;
            if(var11) { _fun0022_ip = 98; continue _fun0022 }
case 99:
            var1 = var2.rtcRegion;
case 98:
            var3 = var1;
case 97:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var10];
            var1 = var2.bind(var9)(var1);
            var2 = var1.socket;
            var1 = var2.streamCreate;
            if(!(var8 == var3)) { _fun0022_ip = 100; continue _fun0022 }
case 101:
            var8 = _closure1_slot16;
            var7 = var8.getPreferredRegion;
            var3 = var7.bind(var8)();
case 100:
            var16 = var2;
            var15 = var6;
            var14 = var5;
            var13 = var4;
            var12 = var3;
            var1 = var16[var1](var15, var14, var13, var12, var11);
case 94:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_START'] = var10;
    var10 = function handleStreamWatch(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var3 = var1.streamKey;
            var2 = var1.allowMultiple;
            var7 = _closure1_slot0;
            var4 = _closure1_slot3;
            var5 = 18;
            var6 = var4[var5];
            var4 = undefined;
            var6 = var7.bind(var4)(var6);
            var7 = var6.socket;
            var6 = var7.isSessionEstablished;
            var6 = var6.bind(var7)();
            if(!var6) { _fun0023_ip = 44; continue _fun0023 }
case 102:
            if(var2) { _fun0023_ip = 3; continue _fun0023 }
case 103:
            var2 = _closure1_slot36;
            var2 = var2.bind(var4)();
case 3:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.socket;
            var1 = var2.streamWatch;
            var1 = var1.bind(var2)(var3);
case 44:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_WATCH'] = var10;
    var10 = function handleStreamStop(arg1) {
        var1 = arg1;
        var4 = var1.streamKey;
        var3 = _closure1_slot35;
        var2 = undefined;
        var3 = var3.bind(var2)(var4);
        var1 = _closure1_slot32;
        var1 = var1.bind(var2)();
        var1 = false;
        return var1;
    };
    var2['STREAM_STOP'] = var10;
    var10 = function handleStreamSetPaused(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var5 = var1.streamKey;
            var4 = var1.paused;
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 18;
            var3 = var1[var6];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var7 = var3.socket;
            var3 = var7.isSessionEstablished;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0024_ip = 96; continue _fun0024 }
case 102:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var3 = var2.socket;
            var2 = var3.streamSetPaused;
            var2 = var2.bind(var3)(var5, var4);
case 96:
            return var1;
        }
    };
    var2['STREAM_SET_PAUSED'] = var10;
    var10 = function handlePushNotificationClick() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var5 = var1.socket;
        var4 = var5.expeditedHeartbeat;
        var3 = 5000;
        var2 = 'user clicked on notification';
        var1 = true;
        var1 = var4.bind(var5)(var3, var2, var1);
        var1 = false;
        return var1;
    };
    var2['PUSH_NOTIFICATION_CLICK'] = var10;
    var10 = function handleRequestForumUnreads(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var5 = var1.channelId;
        var4 = var1.threads;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var2.socket;
        var2 = var3.requestForumUnreads;
        var2 = var2.bind(var3)(var6, var5, var4);
        return var1;
    };
    var2['REQUEST_FORUM_UNREADS'] = var10;
    var10 = function handleRequestSoundboardSounds(arg1) {
        var1 = arg1;
        var4 = var1.guildIds;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var2.socket;
        var2 = var3.requestSoundboardSounds;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['REQUEST_SOUNDBOARD_SOUNDS'] = var10;
    var10 = function handleRemoteCommand(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sessionId;
            var3 = var1.payload;
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 18;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var7.bind(var5)(var2);
            var7 = var2.socket;
            var2 = var7.isSessionEstablished;
            var2 = var2.bind(var7)();
            if(!var2) { _fun0025_ip = 96; continue _fun0025 }
case 102:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var6];
            var1 = var2.bind(var5)(var1);
            var2 = var1.socket;
            var1 = var2.remoteCommand;
            var1 = var1.bind(var2)(var4, var3);
case 96:
            var1 = false;
            return var1;
        }
    };
    var2['REMOTE_COMMAND'] = var10;
    var10 = function handleResetSocket(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 18;
            var3 = var7[var4];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.socket;
            var5 = var3.connectionState;
            var6 = _closure1_slot1;
            var3 = 28;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.WILL_RECONNECT;
            if(!(var5 !== var3)) { _fun0026_ip = 44; continue _fun0026 }
case 104:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.socket;
            var3 = var4.resetSocketAndClearCacheOnError;
            var2 = arg1;
            var2 = var2.args;
            var2 = var3.bind(var4)(var2);
case 44:
            return var1;
        }
    };
    var2['RESET_SOCKET'] = var10;
    var2['CLIPS_SETTINGS_UPDATE'] = var9;
    var2['RUNNING_GAMES_CHANGE'] = var9;
    var4 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arg1;
            var1 = var3.settings;
            var4 = var1.type;
            var2 = _closure1_slot22;
            var2 = var2.PRELOADED_USER_SETTINGS;
            var2 = var4 === var2;
            if(!var2) { _fun0027_ip = 105; continue _fun0027 }
case 51:
            var3 = var3.settings;
            var3 = var3.proto;
            var5 = var3.clips;
            var4 = null;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0027_ip = 38; continue _fun0027 }
case 104:
            var3 = var5.allowVoiceRecording;
case 38:
            var2 = var4 != var3;
case 105:
            if(!var2) { _fun0027_ip = 92; continue _fun0027 }
case 106:
            var2 = _closure1_slot32;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 92:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewayConnectionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();