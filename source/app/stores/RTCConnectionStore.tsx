// app/stores/RTCConnectionStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function createRTCConnection(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg2;
            var1 = _closure1_slot16;
            var2 = null;
            if(!(var2 != var1)) { _fun0002_ip = 647; continue _fun0002 }
 21:
            var5 = _closure1_slot9;
            var1 = var5.getId;
            var5 = var1.bind(var5)();
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var10.bind(var6)(var1);
            var9 = var1.default;
            var1 = {};
            var1['userId'] = var5;
            var5 = _closure1_slot16;
            var1['sessionId'] = var5;
            var5 = arg1;
            var1['guildId'] = var5;
            var1['channelId'] = var7;
            var5 = var9.prototype;
            var5 = Object.create(var5, {constructor: {value: var9}});
            var15 = var5;
            var14 = var1;
            var1 = new var15[var9](var14, var13);
            var1 = var1 instanceof Object ? var1 : var5;
            var _closure2_slot0 = var1;
            var12 = var1.on;
            var5 = 11;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.State;
            var9 = function(arg1, arg2, arg3) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = arg3;
                var _closure3_slot2 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'RTC_CONNECTION_STATE';
                    var1['type'] = var4;
                    var5 = _closure3_slot0;
                    var1['state'] = var5;
                    var6 = _closure3_slot1;
                    var7 = var1;
                    var5 = copyDataProperties(var7, var6);
                    var6 = _closure3_slot2;
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.Video;
            var9 = function(arg1, arg2, arg3, arg4, arg5) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = arg3;
                var _closure3_slot2 = var1;
                var1 = arg4;
                var _closure3_slot3 = var1;
                var1 = arg5;
                var _closure3_slot4 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'RTC_CONNECTION_VIDEO';
                    var1['type'] = var5;
                    var6 = _closure3_slot0;
                    var1['guildId'] = var6;
                    var6 = _closure3_slot1;
                    var1['channelId'] = var6;
                    var6 = _closure3_slot2;
                    var1['userId'] = var6;
                    var6 = _closure3_slot3;
                    var1['streamId'] = var6;
                    var5 = _closure3_slot4;
                    var1['rtcServerId'] = var5;
                    var4 = _closure1_slot14;
                    var4 = var4.DEFAULT;
                    var1['context'] = var4;
                    var5 = _closure2_slot0;
                    var4 = var5.getMediaEngineConnectionId;
                    var4 = var4.bind(var5)();
                    var1['mediaEngineConnectionId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.Ping;
            var9 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'RTC_CONNECTION_PING';
                    var1['type'] = var4;
                    var5 = _closure3_slot0;
                    var1['pings'] = var5;
                    var4 = _closure3_slot1;
                    var1['quality'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.OutboundLossRate;
            var9 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'RTC_CONNECTION_LOSS_RATE';
                    var1['type'] = var4;
                    var4 = _closure3_slot0;
                    var1['lossRate'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.Speaking;
            var9 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot20;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0003_ip = 33; continue _fun0003 }
 13:
                    var3 = var4.setSpeaking;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.Flags;
            var9 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_CONNECTION_FLAGS';
                    var2['type'] = var5;
                    var6 = _closure3_slot1;
                    var2['flags'] = var6;
                    var5 = _closure3_slot0;
                    var2['userId'] = var5;
                    var6 = _closure2_slot0;
                    var6 = var6.guildId;
                    var2['guildId'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.channelId;
                    var2['channelId'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.context;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.UsersMerged;
            var9 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'RTC_CONNECTION_USERS_MERGED';
                var2['type'] = var5;
                var5 = arg1;
                var2['userIds'] = var5;
                var5 = arg2;
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.ClientConnect;
            var9 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_CONNECTION_CLIENT_CONNECT';
                    var2['type'] = var5;
                    var5 = _closure3_slot0;
                    var2['userIds'] = var5;
                    var6 = _closure2_slot0;
                    var6 = var6.guildId;
                    var2['guildId'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.channelId;
                    var2['channelId'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.context;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.ClientDisconnect;
            var9 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_CONNECTION_CLIENT_DISCONNECT';
                    var2['type'] = var5;
                    var5 = _closure3_slot0;
                    var2['userId'] = var5;
                    var6 = _closure2_slot0;
                    var6 = var6.guildId;
                    var2['guildId'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.channelId;
                    var2['channelId'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.context;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.Platform;
            var9 = function(arg1, arg2, arg3) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = arg3;
                var _closure3_slot2 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_CONNECTION_PLATFORM';
                    var2['type'] = var5;
                    var6 = _closure3_slot1;
                    var2['platform'] = var6;
                    var6 = _closure3_slot0;
                    var2['userId'] = var6;
                    var5 = _closure3_slot2;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var12 = var1.on;
            var9 = var8[var5];
            var9 = var10.bind(var6)(var9);
            var9 = var9.RTCConnectionEvent;
            var11 = var9.SecureFramesUpdate;
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_CONNECTION_SECURE_FRAMES_UPDATE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var12.bind(var1)(var11, var9);
            var9 = var1.on;
            var5 = var8[var5];
            var5 = var10.bind(var6)(var5);
            var5 = var5.RTCConnectionEvent;
            var5 = var5.RosterMapUpdate;
            var4 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_CONNECTION_ROSTER_MAP_UPDATE';
                    var2['type'] = var5;
                    var5 = _closure3_slot0;
                    var2['userIds'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var9.bind(var1)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 13;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot9;
            var4 = var5.getId;
            var14 = var4.bind(var5)();
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var15 = var5;
            var13 = var7;
            var4 = new var15[var6](var14, var13, var12);
            var4 = var4 instanceof Object ? var4 : var5;
            _closure1_slot20 = var4;
            _closure1_slot21 = var2;
            var2 = false;
            _closure1_slot22 = var2;
            _closure1_slot23 = var2;
            return var1;
 647:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var14 = 'Creating RTCConnection without session.';
            var15 = var2;
            var1 = new var15[var3](var14, var13);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function destroyRTCConnection() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = _closure1_slot15;
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 124; continue _fun0004 }
 13:
            var4 = _closure1_slot15;
            var1 = var4.getDuration;
            var1 = var1.bind(var4)();
            _closure1_slot21 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
            var4['type'] = var7;
            var8 = _closure1_slot15;
            var7 = var8.getMediaEngineConnectionId;
            var7 = var7.bind(var8)();
            var4['mediaEngineConnectionId'] = var7;
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot15;
            var4 = var5.destroy;
            var4 = var4.bind(var5)();
            var _closure1_slot15 = var2;
            _closure1_slot20 = var2;
            var2 = false;
            _closure1_slot25 = var2;
            return var1;
 124:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var10 = function handleClearRemoteDisconnectVoiceChannelId() {
        var1 = null;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var7 = function handleChannelDelete(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = _closure1_slot15;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 51; continue _fun0005 }
 21:
            var3 = _closure1_slot15;
            var3 = var3.channelId;
            var2 = var2.id;
            if(!(var3 === var2)) { _fun0005_ip = 51; continue _fun0005 }
 39:
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 51:
            var1 = false;
            return var1;
        }
    };
    var11 = function handleRtcAction() {
        var1 = true;
        return var1;
    };
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RTCConnectionStates;
    var _closure1_slot11 = var9;
    var9 = var2.AppStates;
    var _closure1_slot12 = var9;
    var2 = var2.RTCConnectionQuality;
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaEngineContextTypes;
    var _closure1_slot14 = var2;
    var2 = new Array(0);
    var _closure1_slot17 = var2;
    var9 = null;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var9;
    var _closure1_slot20 = var9;
    var _closure1_slot21 = var9;
    var2 = false;
    var _closure1_slot22 = var2;
    var _closure1_slot23 = var2;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function RTCConnectionStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var4 = var2.waitFor;
            var3 = _closure1_slot10;
            var3 = var4.bind(var2)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.setVideoToggleAnalyticsParams;
            var3 = var2.getRTCConnectionId;
            var2 = var2.getMediaSessionId;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(30);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRTCConnection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 25; continue _fun0007 }
 13:
                var1 = _closure1_slot11;
                var1 = var1.DISCONNECTED;
                _fun0007_ip = 34; continue _fun0007;
 25:
                var2 = _closure1_slot15;
                var1 = var2.state;
 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isConnected';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot11;
            var1 = var1.RTC_CONNECTED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isDisconnected';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot11;
            var1 = var1.DISCONNECTED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRemoteDisconnectVoiceChannelId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getLastSessionVoiceChannelId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'setLastSessionVoiceChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getGuildId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot15;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0008_ip = 23; continue _fun0008 }
 18:
                var1 = var2.guildId;
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getChannelId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot15;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0009_ip = 23; continue _fun0009 }
 18:
                var1 = var2.channelId;
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getHostname';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var3 = var1 != var3;
                var1 = '';
                if(!var3) { _fun0010_ip = 30; continue _fun0010 }
 20:
                var2 = _closure1_slot15;
                var1 = var2.hostname;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getQuality';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                if(!(var1 == var3)) { _fun0011_ip = 25; continue _fun0011 }
 13:
                var1 = _closure1_slot13;
                var1 = var1.UNKNOWN;
                _fun0011_ip = 35; continue _fun0011;
 25:
                var2 = _closure1_slot15;
                var1 = var2.quality;
 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getPings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                if(!(var1 == var3)) { _fun0012_ip = 19; continue _fun0012 }
 13:
                var1 = _closure1_slot17;
                _fun0012_ip = 33; continue _fun0012;
 19:
                var3 = _closure1_slot15;
                var2 = var3.getPings;
                var1 = var2.bind(var3)();
 33:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getAveragePing';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = _closure1_slot15;
                var2 = null;
                var4 = var2 != var1;
                var1 = 0;
                if(!var4) { _fun0013_ip = 44; continue _fun0013 }
 18:
                var4 = _closure1_slot15;
                var3 = var2 == var4;
                var2 = undefined;
                if(var3) { _fun0013_ip = 41; continue _fun0013 }
 31:
                var3 = var4.getAveragePing;
                var2 = var3.bind(var4)();
 41:
                var1 = var2;
 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getLastPing';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0014_ip = 28; continue _fun0014 }
 18:
                var2 = var3.getLastPing;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getOutboundLossRate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0015_ip = 28; continue _fun0015 }
 18:
                var2 = var3.getOutboundLossRate;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getMediaSessionId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0016_ip = 28; continue _fun0016 }
 18:
                var2 = var3.getMediaSessionId;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getRTCConnectionId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0017_ip = 28; continue _fun0017 }
 18:
                var2 = var3.getRTCConnectionId;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getDuration';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = _closure1_slot15;
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0018_ip = 28; continue _fun0018 }
 18:
                var4 = var5.getDuration;
                var1 = var4.bind(var5)();
 28:
                if(!(var3 == var1)) { _fun0018_ip = 36; continue _fun0018 }
 32:
                var1 = _closure1_slot21;
 36:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getVoiceFilterSpeakingDurationMs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0019_ip = 28; continue _fun0019 }
 18:
                var2 = var3.getVoiceFilterSpeakingDurationMs;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getPacketStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0020_ip = 28; continue _fun0020 }
 18:
                var2 = var3.getPacketStats;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getVoiceStateStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = _closure1_slot20;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0021_ip = 28; continue _fun0021 }
 18:
                var2 = var3.getStats;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getWasEverMultiParticipant';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getWasEverRtcConnected';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getUserIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0022_ip = 28; continue _fun0022 }
 18:
                var2 = var3.getUserIds;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'isUserConnected';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var4 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0023_ip = 32; continue _fun0023 }
 18:
                var3 = var4.getIsUserConnected;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getSecureFramesState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0024_ip = 28; continue _fun0024 }
 18:
                var2 = var3.getSecureFramesState;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getSecureFramesRosterMapEntry';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var5 = _closure1_slot15;
                var2 = null;
                var3 = var2 == var5;
                var4 = undefined;
                if(var3) { _fun0025_ip = 28; continue _fun0025 }
 18:
                var3 = var5.getSecureFramesRosterMap;
                var4 = var3.bind(var5)();
 28:
                var2 = var2 == var4;
                var1 = undefined;
                if(var2) { _fun0025_ip = 50; continue _fun0025 }
 37:
                var3 = var4.get;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 50:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'getLastNonZeroRemoteVideoSinkWantsTime';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'getWasMoved';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var6;
        var1[29] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'RTCConnectionStore';
    var9['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var15 = var8.bind(var1)(var2);
    var2 = {};
    var12 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var2 = var1.sessionId;
        var _closure1_slot16 = var2;
        var2 = null;
        _closure1_slot18 = var2;
        _closure1_slot19 = var2;
        var2 = _closure1_slot29;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var12;
    var12 = function handleConnectionClosed() {
        var2 = null;
        _closure1_slot16 = var2;
        _closure1_slot18 = var2;
        _closure1_slot19 = var2;
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var12;
    var12 = function handleRTCConnectionState(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var3 = var1.state;
            var1 = _closure1_slot11;
            var1 = var1.RTC_CONNECTED;
            if(!(var3 === var1)) { _fun0026_ip = 31; continue _fun0026 }
 25:
            var1 = true;
            _closure1_slot23 = var1;
 31:
            var1 = true;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var12;
    var2['RTC_CONNECTION_PING'] = var11;
    var2['RTC_CONNECTION_LOSS_RATE'] = var11;
    var12 = function handleRtcConnectionUpdateId(arg1) {
        var1 = arg1;
        var2 = var1.connection;
        var1 = _closure1_slot15;
        var1 = var2 === var1;
        return var1;
    };
    var2['RTC_CONNECTION_UPDATE_ID'] = var12;
    var2['RTC_CONNECTION_SECURE_FRAMES_UPDATE'] = var11;
    var2['RTC_CONNECTION_CLIENT_CONNECT'] = var11;
    var2['RTC_CONNECTION_CLIENT_DISCONNECT'] = var11;
    var11 = function handleRtcConnectionRemoteVideoSinkWants(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var1 = arg1;
            var2 = var1.context;
            var6 = var1.wants;
            var1 = _closure1_slot14;
            var1 = var1.DEFAULT;
            var1 = var2 === var1;
            if(!var1) { _fun0027_ip = 104; continue _fun0027 }
 34:
            var3 = global;
            var5 = var3.Object;
            var2 = var5.entries;
            var6 = var2.bind(var5)(var6);
            var5 = var6.some;
            var2 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0028_ip = 27; continue _fun0028 }
 24:
                    var2 = var3;
 27:
                    var3 = undefined;
                    if(var4) { _fun0028_ip = 57; continue _fun0028 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0028_ip = 57; continue _fun0028 }
 51:
                    var3 = var6;
                    var4 = var5;
 57:
                    if(var4) { _fun0028_ip = 63; continue _fun0028 }
 60:
                    var1.return();
 63:
                    var1 = 'any';
                    var1 = var1 !== var2;
                    if(!var1) { _fun0028_ip = 80; continue _fun0028 }
 74:
                    var2 = 0;
                    var1 = var2 !== var3;
 80:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var5 = !var2;
            var2 = !var5;
            if(var5) { _fun0027_ip = 101; continue _fun0027 }
 80:
            var5 = var3.performance;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            _closure1_slot24 = var3;
            var2 = undefined;
 101:
            var1 = var2;
 104:
            return var1;
        }
    };
    var2['RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS'] = var11;
    var11 = function handleVideoSizeUpdate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var5 = var1.streamId;
            var4 = var1.width;
            var3 = var1.height;
            var2 = _closure1_slot15;
            var1 = null;
            if(!(var1 != var2)) { _fun0029_ip = 45; continue _fun0029 }
 32:
            var1 = var2.setVideoSize;
            var1 = var1.bind(var2)(var5, var4, var3);
 45:
            var1 = undefined;
            return var1;
        }
    };
    var2['VIDEO_SIZE_UPDATE'] = var11;
    var11 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var2 = arg2;
                var7 = _closure1_slot20;
                var4 = null;
                if(!(var4 != var7)) { _fun0030_ip = 40; continue _fun0030 }
 16:
                var6 = var7.updateVoiceStates;
                var5 = var2.userId;
                var3 = var2.channelId;
                var3 = var6.bind(var7)(var5, var3);
 40:
                var3 = _closure1_slot22;
                if(var3) { _fun0030_ip = 95; continue _fun0030 }
 47:
                var7 = _closure1_slot20;
                var6 = var4 == var7;
                var5 = undefined;
                if(var6) { _fun0030_ip = 76; continue _fun0030 }
 60:
                var6 = var7.getStats;
                var6 = var6.bind(var7)();
                var5 = var6.max_voice_state_count;
 76:
                var7 = var4 != var5;
                var6 = 0;
                if(!var7) { _fun0030_ip = 88; continue _fun0030 }
 85:
                var6 = var5;
 88:
                var5 = 1;
                var3 = var6 > var5;
 95:
                _closure1_slot22 = var3;
                var5 = _closure1_slot9;
                var3 = var5.getId;
                var5 = var3.bind(var5)();
                var3 = var2.userId;
                if(!(var5 === var3)) { _fun0030_ip = 602; continue _fun0030 }
 125:
                var3 = _closure1_slot15;
                if(!(var4 == var3)) { _fun0030_ip = 250; continue _fun0030 }
 133:
                var5 = var2.sessionId;
                var3 = _closure1_slot16;
                if(!(var5 === var3)) { _fun0030_ip = 245; continue _fun0030 }
 147:
                var3 = var2.channelId;
                if(!(var4 != var3)) { _fun0030_ip = 245; continue _fun0030 }
 156:
                _closure1_slot18 = var4;
                _closure1_slot19 = var4;
                var7 = _closure1_slot28;
                var6 = var2.guildId;
                var5 = var2.channelId;
                var3 = undefined;
                var5 = var7.bind(var3)(var6, var5);
                _closure1_slot15 = var5;
                var6 = _closure1_slot20;
                var5 = var4 == var6;
                if(var5) { _fun0030_ip = 217; continue _fun0030 }
 201:
                var5 = var6.getStats;
                var5 = var5.bind(var6)();
                var3 = var5.max_voice_state_count;
 217:
                var6 = var4 != var3;
                var5 = 0;
                if(!var6) { _fun0030_ip = 229; continue _fun0030 }
 226:
                var5 = var3;
 229:
                var3 = 1;
                var3 = var5 > var3;
                _closure1_slot22 = var3;
                _fun0030_ip = 598; continue _fun0030;
 245:
                var3 = arg1;
                return var3;
 250:
                var5 = var2.sessionId;
                var3 = _closure1_slot16;
                if(!(var5 !== var3)) { _fun0030_ip = 355; continue _fun0030 }
 264:
                var5 = var2.guildId;
                var3 = _closure1_slot15;
                var3 = var3.guildId;
                if(!(var5 === var3)) { _fun0030_ip = 598; continue _fun0030 }
 285:
                var5 = _closure1_slot8;
                var3 = var5.getAwaitingRemoteSessionInfo;
                var3 = var3.bind(var5)();
                var3 = var4 != var3;
                if(!var3) { _fun0030_ip = 324; continue _fun0030 }
 306:
                var6 = _closure1_slot8;
                var5 = var6.getRemoteSessionId;
                var5 = var5.bind(var6)();
                var3 = var4 != var5;
 324:
                if(var3) { _fun0030_ip = 340; continue _fun0030 }
 327:
                var3 = _closure1_slot15;
                var3 = var3.channelId;
                _closure1_slot18 = var3;
 340:
                var5 = _closure1_slot29;
                var3 = undefined;
                var3 = var5.bind(var3)();
                _fun0030_ip = 598; continue _fun0030;
 355:
                var3 = var2.guildId;
                if(!(var4 != var3)) { _fun0030_ip = 385; continue _fun0030 }
 364:
                var5 = var2.guildId;
                var3 = _closure1_slot15;
                var3 = var3.guildId;
                if(!(var5 !== var3)) { _fun0030_ip = 556; continue _fun0030 }
 385:
                var3 = var2.guildId;
                if(!(var4 == var3)) { _fun0030_ip = 415; continue _fun0030 }
 394:
                var5 = var2.channelId;
                var3 = _closure1_slot15;
                var3 = var3.channelId;
                if(!(var5 !== var3)) { _fun0030_ip = 556; continue _fun0030 }
 415:
                var5 = var2.guildId;
                var3 = _closure1_slot15;
                var3 = var3.guildId;
                var3 = var5 !== var3;
                if(!var3) { _fun0030_ip = 445; continue _fun0030 }
 436:
                var5 = var2.channelId;
                var3 = var4 == var5;
 445:
                if(var3) { _fun0030_ip = 458; continue _fun0030 }
 448:
                var5 = _closure1_slot29;
                var3 = undefined;
                var3 = var5.bind(var3)();
 458:
                var3 = var2.channelId;
                if(!(var4 != var3)) { _fun0030_ip = 598; continue _fun0030 }
 470:
                _closure1_slot18 = var4;
                _closure1_slot19 = var4;
                var7 = _closure1_slot28;
                var6 = var2.guildId;
                var5 = var2.channelId;
                var3 = undefined;
                var5 = var7.bind(var3)(var6, var5);
                _closure1_slot15 = var5;
                var6 = _closure1_slot20;
                var5 = var4 == var6;
                if(var5) { _fun0030_ip = 531; continue _fun0030 }
 515:
                var5 = var6.getStats;
                var5 = var5.bind(var6)();
                var3 = var5.max_voice_state_count;
 531:
                var6 = var4 != var3;
                var5 = 0;
                if(!var6) { _fun0030_ip = 543; continue _fun0030 }
 540:
                var5 = var3;
 543:
                var3 = 1;
                var3 = var5 > var3;
                _closure1_slot22 = var3;
                _fun0030_ip = 598; continue _fun0030;
 556:
                var3 = var2.channelId;
                if(!(var4 != var3)) { _fun0030_ip = 588; continue _fun0030 }
 565:
                var3 = _closure1_slot15;
                var2 = var2.channelId;
                var3['channelId'] = var2;
                var2 = true;
                _closure1_slot25 = var2;
                _fun0030_ip = 598; continue _fun0030;
 588:
                var2 = _closure1_slot29;
                var1 = undefined;
                var1 = var2.bind(var1)();
 598:
                var1 = true;
                return var1;
 602:
                var1 = false;
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var11;
    var11 = function handleVoiceChannelSelect(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot15;
            var2 = null;
            if(!(var2 != var4)) { _fun0031_ip = 50; continue _fun0031 }
 21:
            if(!(var2 != var3)) { _fun0031_ip = 38; continue _fun0031 }
 25:
            var2 = _closure1_slot15;
            var2 = var2.channelId;
            if(!(var2 !== var3)) { _fun0031_ip = 50; continue _fun0031 }
 38:
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 50:
            var1 = false;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var11;
    var11 = function handleAudioSetNoiseCancellation(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var3 = _closure1_slot15;
            var1 = null;
            if(!(var1 != var3)) { _fun0032_ip = 32; continue _fun0032 }
 13:
            var2 = var3.setNoiseCancellationEnabled;
            var1 = arg1;
            var1 = var1.enabled;
            var1 = var2.bind(var3)(var1);
 32:
            var1 = undefined;
            return var1;
        }
    };
    var2['AUDIO_SET_NOISE_CANCELLATION'] = var11;
    var11 = function handleVoiceServerUpdate(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot15;
            var6 = null;
            var1 = var6 != var1;
            if(!var1) { _fun0033_ip = 121; continue _fun0033 }
 19:
            var2 = var4.guildId;
            var2 = var6 == var2;
            if(var2) { _fun0033_ip = 49; continue _fun0033 }
 31:
            var7 = var4.guildId;
            var3 = _closure1_slot15;
            var3 = var3.guildId;
            var2 = var7 === var3;
 49:
            if(!var2) { _fun0033_ip = 118; continue _fun0033 }
 52:
            var3 = var4.channelId;
            var3 = var6 == var3;
            if(var3) { _fun0033_ip = 82; continue _fun0033 }
 64:
            var7 = var4.channelId;
            var6 = _closure1_slot15;
            var6 = var6.channelId;
            var3 = var7 === var6;
 82:
            if(!var3) { _fun0033_ip = 115; continue _fun0033 }
 85:
            var7 = _closure1_slot15;
            var6 = var7.connect;
            var5 = var4.endpoint;
            var4 = var4.token;
            var4 = var6.bind(var7)(var5, var4);
            var3 = undefined;
 115:
            var2 = var3;
 118:
            var1 = var2;
 121:
            return var1;
        }
    };
    var2['VOICE_SERVER_UPDATE'] = var11;
    var2['CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID'] = var10;
    var2['REMOTE_SESSION_CONNECT'] = var10;
    var10 = function handleClearLastSessionVoiceChannelId() {
        var1 = null;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLEAR_LAST_SESSION_VOICE_CHANNEL_ID'] = var10;
    var10 = function handleGuildDelete(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var4 = _closure1_slot15;
            var3 = null;
            if(!(var3 != var4)) { _fun0034_ip = 51; continue _fun0034 }
 21:
            var3 = _closure1_slot15;
            var3 = var3.guildId;
            var2 = var2.id;
            if(!(var3 === var2)) { _fun0034_ip = 51; continue _fun0034 }
 39:
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 51:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var2['CHANNEL_DELETE'] = var7;
    var2['THREAD_DELETE'] = var7;
    var7 = function handleCallDelete(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot15;
            var2 = null;
            if(!(var2 != var4)) { _fun0035_ip = 46; continue _fun0035 }
 21:
            var2 = _closure1_slot15;
            var2 = var2.channelId;
            if(!(var2 === var3)) { _fun0035_ip = 46; continue _fun0035 }
 34:
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 46:
            var1 = false;
            return var1;
        }
    };
    var2['CALL_DELETE'] = var7;
    var7 = function handleFocus(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var1 = arg1;
            var3 = var1.state;
            var2 = _closure1_slot12;
            var2 = var2.ACTIVE;
            var2 = var3 === var2;
            if(!var2) { _fun0036_ip = 38; continue _fun0036 }
 28:
            var4 = _closure1_slot15;
            var3 = null;
            var2 = var3 != var4;
 38:
            if(!var2) { _fun0036_ip = 62; continue _fun0036 }
 41:
            var3 = _closure1_slot15;
            var2 = var3.resetBackoff;
            var1 = 'App state is active';
            var1 = var2.bind(var3)(var1);
 62:
            var1 = false;
            return var1;
        }
    };
    var2['APP_STATE_UPDATE'] = var7;
    var7 = function handleSimulcastDebugOverrideChanged(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
            var1 = arg1;
            var5 = var1.userId;
            var4 = var1.context;
            var3 = var1.quality;
            var2 = _closure1_slot15;
            var1 = null;
            if(!(var1 != var2)) { _fun0037_ip = 45; continue _fun0037 }
 32:
            var1 = var2.setSimulcastDebugOverride;
            var1 = var1.bind(var2)(var5, var4, var3);
 45:
            var1 = undefined;
            return var1;
        }
    };
    var2['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var16 = var7;
    var14 = var2;
    var2 = new var16[var9](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot26 = var2;
    var7 = 17;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var7 = 16;
    var8 = var6[var7];
    var7 = var6.paths;
    var8 = var9.bind(var1)(var8, var7);
    var7 = var8.then;
    var4 = function(arg1) {
        var1 = arg1;
        var3 = var1.addExtraAnalyticsDecorator;
        var1 = undefined;
        var2 = function(arg1) {
            var2 = _closure1_slot26;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var1['client_rtc_state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/RTCConnectionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();