// app/modules/calls/native/TelecomManager.android.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var4 = var6[var9];
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
    var4 = var4.DeviceEventEmitter;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.ApplicationStreamStates;
    var _closure1_slot14 = var8;
    var4 = var4.RTCConnectionStates;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var11 = var7.bind(var1)(var4);
    var4 = var11.prototype;
    var8 = Object.create(var4, {constructor: {value: var11}});
    var14 = 'TelecomManager';
    var15 = var8;
    var4 = new var15[var11](var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var4['Connecting'] = var10;
    var8 = 'Connecting';
    var4[var10] = var8;
    var4['Connected'] = var9;
    var8 = 'Connected';
    var4[var9] = var8;
    var _closure1_slot17 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function TelecomManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot1;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = function CALL_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleCallDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['CALL_DELETE'] = var5;
                var5 = function CHANNEL_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleChannelDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['CHANNEL_DELETE'] = var5;
                var5 = function VOICE_CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['VOICE_CHANNEL_SELECT'] = var5;
                var5 = function RTC_CONNECTION_STATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleRTCConnectionState;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['RTC_CONNECTION_STATE'] = var5;
                var1['actions'] = var4;
                var4 = global;
                var4 = var4.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var15 = var5;
                var4 = new var15[var4](var14);
                var7 = var4 instanceof Object ? var4 : var5;
                var6 = var7.set;
                var5 = _closure1_slot13;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleMuteStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6 = var6.bind(var7)(var5, var4);
                var5 = var6.set;
                var4 = _closure1_slot10;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleScreenShareStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var1['stores'] = var3;
                var3 = null;
                var1['currentCall'] = var3;
                var4 = false;
                var1['isInitialized'] = var4;
                var1['lastMuteState'] = var3;
                var1['lastScreenShareActive'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var6 = _closure1_slot16;
                        var5 = var6.info;
                        var3 = var4.callId;
                        var2 = 'Received end call request from Call Bar:';
                        var2 = var5.bind(var6)(var2, var3);
                        var2 = _closure3_slot0;
                        var5 = var2.currentCall;
                        var2 = null;
                        var2 = var2 != var5;
                        if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var4 = var4.callId;
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var3 = var3.channelId;
                        var2 = var4 === var3;
case 9:
                        if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.disconnect;
                        var1 = var1.bind(var2)();
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleEndCallRequested'] = var3;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure1_slot16;
                        var3 = var4.info;
                        var2 = 'Received set foreground request from Call Bar';
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var4 = var2.currentCall;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var4 = arg1;
                        var5 = var4.callId;
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var4 = var4.channelId;
                        if(!(var5 === var4)) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                        var5 = _closure1_slot11;
                        var4 = var5.getChannel;
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var3 = var3.channelId;
                        var4 = var4.bind(var5)(var3);
                        if(!(var2 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 16:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.navigateToVoiceChannel;
                        var1 = 'Call Bar';
                        var1 = var2.bind(var3)(var4, var1);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSetForegroundRequested'] = var3;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var8 = _closure1_slot16;
                        var7 = var8.info;
                        var11 = var2.callId;
                        var9 = var2.isMuted;
                        var12 = 'Received mic mute request from Call Bar:';
                        var10 = 'isMuted:';
                        var13 = var8;
                        var3 = var13[var7](var12, var11, var10, var9, var8);
                        var3 = _closure3_slot0;
                        var5 = var3.currentCall;
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var5 = var2.callId;
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var4 = var4.channelId;
                        var3 = var5 === var4;
case 17:
                        if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var5 = _closure1_slot13;
                        var4 = var5.isSelfMute;
                        var5 = var4.bind(var5)();
                        var4 = var2.isMuted;
                        var3 = var5 !== var4;
case 19:
                        if(!var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var5 = _closure1_slot16;
                        var4 = var5.info;
                        var3 = var2.isMuted;
                        var2 = 'Updating Call Bar -> Discord mute state:';
                        var2 = var4.bind(var5)(var2, var3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.toggleSelfMute;
                        var1 = var1.bind(var2)();
case 21:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMicMuteRequested'] = var3;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var8 = _closure1_slot16;
                        var7 = var8.info;
                        var11 = var2.callId;
                        var9 = var2.isEnabled;
                        var12 = 'Received screen share request from Call Bar:';
                        var10 = 'isEnabled:';
                        var13 = var8;
                        var3 = var13[var7](var12, var11, var10, var9, var8);
                        var3 = _closure3_slot0;
                        var5 = var3.currentCall;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0006_ip = 23; continue _fun0006 }
case 18:
                        var6 = var2.callId;
                        var5 = _closure3_slot0;
                        var5 = var5.currentCall;
                        var5 = var5.channelId;
                        if(!(var6 === var5)) { _fun0006_ip = 23; continue _fun0006 }
case 20:
                        var6 = _closure1_slot11;
                        var5 = var6.getChannel;
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var4 = var4.channelId;
                        var4 = var5.bind(var6)(var4);
                        if(!(var3 != var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var5 = _closure1_slot10;
                        var4 = var5.getCurrentUserActiveStream;
                        var4 = var4.bind(var5)();
                        var3 = var3 != var4;
                        if(!var3) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var5 = var4.state;
                        var4 = _closure1_slot14;
                        var4 = var4.ACTIVE;
                        var3 = var5 === var4;
case 25:
                        var4 = var2.isEnabled;
                        if(!var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        if(var3) { _fun0006_ip = 27; continue _fun0006 }
case 29:
                        var6 = _closure1_slot16;
                        var5 = var6.info;
                        var4 = 'Starting screen share from Call Bar';
                        var4 = var5.bind(var6)(var4);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 16;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.startStream;
                        var4 = var4.bind(var5)();
                        _fun0006_ip = 23; continue _fun0006;
case 27:
                        var2 = var2.isEnabled;
                        var2 = !var2;
                        if(!var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        var2 = var3;
case 30:
                        if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 32:
                        var4 = _closure1_slot16;
                        var3 = var4.info;
                        var2 = 'Stopping screen share from Call Bar';
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.stopScreenshare;
                        var1 = var1.bind(var2)();
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScreenShareRequested'] = var3;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var10 = var1.guildId;
                        var4 = var1.channelId;
                        var2 = _closure3_slot0;
                        var1 = var2.isEnabled;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                        var6 = _closure1_slot16;
                        var5 = var6.info;
                        var2 = 'Voice channel select:';
                        var2 = var5.bind(var6)(var2, var10, var4);
                        var7 = null;
                        if(!(var7 == var4)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                        var5 = _closure3_slot0;
                        var2 = var5.reportCallEnded;
                        var2 = var2.bind(var5)();
                        _fun0007_ip = 33; continue _fun0007;
case 35:
                        var2 = _closure3_slot0;
                        var6 = var2.currentCall;
                        var8 = var7 == var6;
                        var2 = undefined;
                        var5 = undefined;
                        if(var8) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                        var5 = var6.channelId;
case 37:
                        if(!(var5 !== var4)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                        var6 = _closure1_slot11;
                        var5 = var6.getChannel;
                        var8 = var5.bind(var6)(var4);
                        if(!(var7 != var8)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                        var5 = var7 != var10;
                        var9 = null;
                        if(!var5) { _fun0007_ip = 43; continue _fun0007 }
case 13:
                        var6 = _closure1_slot12;
                        var5 = var6.getGuild;
                        var9 = var5.bind(var6)(var10);
case 43:
                        var6 = _closure3_slot0;
                        var5 = var6.startCall;
                        var3 = {};
                        var3['channelId'] = var4;
                        var11 = var7 == var9;
                        var10 = undefined;
                        if(var11) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                        var10 = var9.id;
case 44:
                        var11 = var7 != var10;
                        var9 = null;
                        if(!var11) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                        var9 = var10;
case 46:
                        var3['guildId'] = var9;
                        var8 = var8.name;
                        var9 = var7 != var8;
                        var7 = null;
                        if(!var9) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                        var7 = var8;
case 48:
                        var3['channelName'] = var7;
                        var3 = var5.bind(var6)(var3);
case 33:
                        var3 = undefined;
                        return var3;
case 41:
                        return var2;
case 39:
                        var3 = _closure1_slot16;
                        var2 = var3.info;
                        var1 = 'Call already in progress for channel:';
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVoiceChannelSelect'] = var3;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.state;
                        var6 = var1.channelId;
                        var3 = _closure3_slot0;
                        var2 = var3.isEnabled;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0008_ip = 50; continue _fun0008 }
case 34:
                        var7 = _closure1_slot16;
                        var5 = var7.info;
                        var3 = 'RTC connection state:';
                        var3 = var5.bind(var7)(var3, var4, var6);
                        var3 = _closure1_slot15;
                        var3 = var3.RTC_CONNECTED;
                        if(!(var4 === var3)) { _fun0008_ip = 51; continue _fun0008 }
case 4:
                        var3 = _closure3_slot0;
                        var5 = var3.currentCall;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0008_ip = 43; continue _fun0008 }
case 51:
                        var3 = _closure1_slot15;
                        var3 = var3.DISCONNECTED;
                        var3 = var4 === var3;
                        if(!var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                        var4 = _closure3_slot0;
                        var5 = var4.currentCall;
                        var4 = null;
                        var7 = var4 == var5;
                        var4 = undefined;
                        if(var7) { _fun0008_ip = 42; continue _fun0008 }
case 54:
                        var4 = var5.channelId;
case 42:
                        var3 = var4 === var6;
case 52:
                        if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 55:
                        var4 = _closure3_slot0;
                        var3 = var4.reportCallEnded;
                        var3 = var3.bind(var4)();
                        _fun0008_ip = 50; continue _fun0008;
case 43:
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var3 = var3.channelId;
                        if(!(var3 === var6)) { _fun0008_ip = 49; continue _fun0008 }
case 56:
                        var4 = _closure3_slot0;
                        var5 = var4.currentCall;
                        var3 = _closure1_slot17;
                        var3 = var3.Connected;
                        var5['state'] = var3;
                        var3 = var4.setCallActive;
                        var3 = var3.bind(var4)(var6);
case 50:
                        var3 = undefined;
                        return var3;
case 49:
                        var5 = _closure1_slot16;
                        var4 = var5.warn;
                        var1 = _closure3_slot0;
                        var1 = var1.currentCall;
                        var8 = var1.channelId;
                        var11 = 'RTC connected for different channel:';
                        var9 = 'current:';
                        var12 = var5;
                        var10 = var6;
                        var1 = var12[var4](var11, var10, var9, var8, var7);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleRTCConnectionState'] = var3;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.channelId;
                        var4 = _closure3_slot0;
                        var2 = var4.isEnabled;
                        var2 = var2.bind(var4)();
                        if(!var2) { _fun0009_ip = 20; continue _fun0009 }
case 57:
                        var5 = _closure1_slot16;
                        var4 = var5.info;
                        var2 = 'Call deleted:';
                        var2 = var4.bind(var5)(var2, var3);
                        var2 = _closure3_slot0;
                        var4 = var2.currentCall;
                        var2 = null;
                        var5 = var2 == var4;
                        var2 = undefined;
                        if(var5) { _fun0009_ip = 58; continue _fun0009 }
case 5:
                        var2 = var4.channelId;
case 58:
                        if(!(var2 === var3)) { _fun0009_ip = 20; continue _fun0009 }
case 59:
                        var2 = _closure3_slot0;
                        var1 = var2.reportCallEnded;
                        var1 = var1.bind(var2)();
case 20:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallDelete'] = var3;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.channel;
                        var4 = _closure3_slot0;
                        var3 = var4.isEnabled;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0010_ip = 60; continue _fun0010 }
case 57:
                        var6 = _closure1_slot16;
                        var5 = var6.info;
                        var4 = var2.id;
                        var3 = 'Channel deleted:';
                        var3 = var5.bind(var6)(var3, var4);
                        var3 = _closure3_slot0;
                        var4 = var3.currentCall;
                        var3 = null;
                        var5 = var3 == var4;
                        var3 = undefined;
                        if(var5) { _fun0010_ip = 12; continue _fun0010 }
case 58:
                        var3 = var4.channelId;
case 12:
                        var2 = var2.id;
                        if(!(var3 === var2)) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                        var2 = _closure3_slot0;
                        var1 = var2.reportCallEnded;
                        var1 = var1.bind(var2)();
case 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleChannelDelete'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                var1 = !var1;
                if(!var1) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                var3 = var2.isSupported;
                var1 = var3.bind(var2)();
case 62:
                if(!var1) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var5 = _closure1_slot16;
                var4 = var5.info;
                var3 = 'Initializing CallKitManager using Telecom framework';
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot9;
                var4 = var5.addListener;
                var3 = var2.handleEndCallRequested;
                var1 = 'telecom-end-call-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleSetForegroundRequested;
                var1 = 'telecom-set-foreground-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleMicMuteRequested;
                var1 = 'telecom-mic-mute-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleScreenShareRequested;
                var1 = 'telecom-screen-share-requested';
                var1 = var4.bind(var5)(var1, var3);
                var1 = true;
                var2['isInitialized'] = var1;
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var8 = '_terminate';
        var5['key'] = var8;
        var8 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                var4 = _closure1_slot9;
                var3 = var4.removeAllListeners;
                var1 = 'telecom-end-call-requested';
                var1 = var3.bind(var4)(var1);
                var3 = var4.removeAllListeners;
                var1 = 'telecom-set-foreground-requested';
                var1 = var3.bind(var4)(var1);
                var3 = var4.removeAllListeners;
                var1 = 'telecom-mic-mute-requested';
                var1 = var3.bind(var4)(var1);
                var3 = var4.removeAllListeners;
                var1 = 'telecom-screen-share-requested';
                var1 = var3.bind(var4)(var1);
                var1 = var2.reportCallEnded;
                var1 = var1.bind(var2)();
                var1 = false;
                var2['isInitialized'] = var1;
case 66:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'isSupported';
        var5['key'] = var8;
        var8 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isMetaQuest;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0013_ip = 68; continue _fun0013 }
case 69:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var1 = var2 != var3;
case 68:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'isEnabled';
        var5['key'] = var8;
        var8 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = this;
                var1 = var2.isSupported;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0014_ip = 70; continue _fun0014 }
case 71:
                var1 = var2.isInitialized;
case 70:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'startCall';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 72; continue _fun0015 }
case 71:
                    var9 = undefined;
                    var3 = undefined;
                    var12 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var3 = var4.channelId;
                    var12 = var4.guildId;
                    var8 = var4.channelName;
                    var4 = var2.currentCall;
                    var10 = null;
                    var6 = var10 == var4;
                    var5 = undefined;
                    if(var6) { _fun0015_ip = 68; continue _fun0015 }
case 73:
                    var5 = var4.channelId;
case 68:
                    var4 = var3;
                    if(!(var5 !== var4)) { _fun0015_ip = 74; continue _fun0015 }
case 5:
                    var13 = _closure1_slot16;
                    var11 = var13.info;
                    var6 = var3;
                    var4 = 'Starting call:';
                    var4 = var11.bind(var13)(var4, var6);
                    var4 = var2.currentCall;
                    if(!(var10 != var4)) { _fun0015_ip = 55; continue _fun0015 }
case 75:
                    var6 = var2.endCall;
                    var4 = var2.currentCall;
                    var4 = var6.bind(var2)(var4);
                    SaveGenerator(address=133);
case 76:
                    return var4;
case 24:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 77; continue _fun0015 }
case 55:
                    var6 = {};
                    var11 = var3;
                    var6['channelId'] = var11;
                    var11 = var12;
                    var6['guildId'] = var11;
                    var6['channelName'] = var8;
                    var8 = _closure1_slot17;
                    var8 = var8.Connecting;
                    var6['state'] = var8;
                    var2['currentCall'] = var6;
case 45: // try_start_0
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 18;
                    var6 = var11[var6];
                    var9 = var8.bind(var9)(var6);
                    var8 = var9.startCall;
                    var6 = var3;
                    var11 = var12;
                    var11 = var10 != var11;
                    var10 = null;
                    if(!var11) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    var11 = {};
                    var11['guildId'] = var12;
                    var10 = var11;
case 78:
                    var6 = var8.bind(var9)(var6, var10);
                    SaveGenerator(address=243);
case 80:
                    return var6;
case 81:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                    var7 = var6;
                    if(var6) { _fun0015_ip = 84; continue _fun0015 }
case 30:
                    var10 = _closure1_slot16;
                    var9 = var10.warn;
                    var8 = 'Native startCall returned false, clearing call state';
                    var8 = var9.bind(var10)(var8);
                    var9 = var2.clearCall;
                    var8 = var3;
                    var8 = var9.bind(var2)(var8);
case 84: // try_end0
                    return var7;
case 82:
                    return var6;
case 85: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot16;
                    var6 = var7.warn;
                    var5 = 'Failed to register call with Telecom:';
                    var5 = var6.bind(var7)(var5, var8);
                    var6 = var2.clearCall;
                    var5 = var3;
                    var5 = var6.bind(var2)(var5);
                    var5 = false;
                    return var5;
case 77:
                    return var4;
case 74:
                    var7 = _closure1_slot16;
                    var6 = var7.info;
                    var16 = var3;
                    var2 = var2.currentCall;
                    var14 = var2.state;
                    var17 = 'Already handling call:';
                    var15 = 'state:';
                    var18 = var7;
                    var2 = var18[var6](var17, var16, var15, var14, var13);
                    var2 = true;
                    return var2;
case 72:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function startCall() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'endCall';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var2;
            var7 = _closure1_slot16;
            var6 = var7.info;
            var5 = var2.channelId;
            var4 = 'Ending call:';
            var4 = var6.bind(var7)(var4, var5);
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 18;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.endCall;
            var2 = var2.channelId;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.clearCall;
                var1 = _closure3_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                var1 = arg1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var4 = _closure1_slot16;
                var3 = var4.warn;
                var2 = 'Failed to end call:';
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var3 = _closure3_slot0;
                var2 = var3.clearCall;
                var1 = _closure3_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'reportCallEnded';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot16;
                var2 = var4.info;
                var1 = 'Reporting call ended';
                var1 = var2.bind(var4)(var1);
                var2 = var3.currentCall;
                var1 = null;
                if(!(var1 != var2)) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                var2 = var3.endCall;
                var1 = var3.currentCall;
                var1 = var2.bind(var3)(var1);
                _fun0016_ip = 58; continue _fun0016;
case 86:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = true;
                var1 = var3.bind(var4)(var2);
case 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'setCallActive';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var4 = var3.currentCall;
                var5 = null;
                var7 = var5 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var7) { _fun0017_ip = 88; continue _fun0017 }
case 62:
                var2 = var4.channelId;
case 88:
                if(!(var2 !== var6)) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                var7 = _closure1_slot16;
                var4 = var7.warn;
                var2 = 'setCallActive called for unknown channel:';
                var2 = var4.bind(var7)(var2, var6);
                _fun0017_ip = 91; continue _fun0017;
case 89:
                var12 = _closure1_slot16;
                var7 = var12.info;
                var4 = 'Setting call active:';
                var4 = var7.bind(var12)(var4, var6);
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 18;
                var9 = var7[var4];
                var10 = var8.bind(var1)(var9);
                var9 = var10.setCallActive;
                var9 = var9.bind(var10)(var6);
                var10 = _closure1_slot13;
                var9 = var10.isSelfMute;
                var9 = var9.bind(var10)();
                var3['lastMuteState'] = var9;
                var11 = var12.info;
                var10 = 'Syncing initial mute state to Call Bar:';
                var10 = var11.bind(var12)(var10, var9);
                var7 = var7[var4];
                var8 = var8.bind(var1)(var7);
                var7 = var8.setMicMuted;
                var7 = var7.bind(var8)(var6, var9);
                var8 = _closure1_slot10;
                var7 = var8.getCurrentUserActiveStream;
                var7 = var7.bind(var8)();
                var5 = var5 != var7;
                if(!var5) { _fun0017_ip = 49; continue _fun0017 }
case 92:
                var8 = var7.state;
                var7 = _closure1_slot14;
                var7 = var7.ACTIVE;
                var5 = var8 === var7;
case 49:
                var3['lastScreenShareActive'] = var5;
                var8 = _closure1_slot16;
                var7 = var8.info;
                var3 = 'Syncing initial screen share state to Call Bar:';
                var3 = var7.bind(var8)(var3, var5);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setScreenShareState;
                var2 = true;
                var2 = var3.bind(var4)(var6, var2, var5);
case 91:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'clearScreenShareState';
        var5['key'] = var7;
        var7 = function value() {
            var2 = null;
            var1 = this;
            var1['lastScreenShareActive'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'clearCall';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var4 = var3.currentCall;
                var2 = null;
                var6 = var2 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0018_ip = 93; continue _fun0018 }
case 70:
                var5 = var4.channelId;
case 93:
                var4 = arg1;
                if(!(var5 === var4)) { _fun0018_ip = 86; continue _fun0018 }
case 90:
                var3['currentCall'] = var2;
                var3['lastMuteState'] = var2;
                var2 = var3.clearScreenShareState;
                var2 = var2.bind(var3)();
case 86:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleMuteStoreChange';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = this;
                var2 = var1.isEnabled;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                var3 = var1.currentCall;
                var2 = null;
                if(!(var2 != var3)) { _fun0019_ip = 94; continue _fun0019 }
case 90:
                var2 = var1.currentCall;
                var4 = var2.state;
                var3 = _closure1_slot17;
                var3 = var3.Connected;
                if(!(var4 === var3)) { _fun0019_ip = 94; continue _fun0019 }
case 96:
                var4 = _closure1_slot13;
                var3 = var4.isSelfMute;
                var4 = var3.bind(var4)();
                var3 = var1.lastMuteState;
                if(!(var3 !== var4)) { _fun0019_ip = 94; continue _fun0019 }
case 6:
                var1['lastMuteState'] = var4;
                var6 = _closure1_slot16;
                var5 = var6.info;
                var3 = 'Syncing Discord -> Call Bar mute state:';
                var3 = var5.bind(var6)(var3, var4);
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.setMicMuted;
                var1 = var1.currentCall;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1, var4);
case 94:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleScreenShareStoreChange';
        var5['key'] = var7;
        var6 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = this;
                var2 = var1.isEnabled;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0020_ip = 97; continue _fun0020 }
case 95:
                var2 = var1.currentCall;
                var4 = null;
                if(!(var4 != var2)) { _fun0020_ip = 97; continue _fun0020 }
case 90:
                var2 = var1.currentCall;
                var5 = var2.state;
                var3 = _closure1_slot17;
                var3 = var3.Connected;
                if(!(var5 === var3)) { _fun0020_ip = 97; continue _fun0020 }
case 98:
                var5 = _closure1_slot10;
                var3 = var5.getCurrentUserActiveStream;
                var3 = var3.bind(var5)();
                var5 = var4 != var3;
                if(!var5) { _fun0020_ip = 66; continue _fun0020 }
case 6:
                var4 = var3.state;
                var3 = _closure1_slot14;
                var3 = var3.ACTIVE;
                var5 = var4 === var3;
case 66:
                var3 = var1.lastScreenShareActive;
                if(!(var3 !== var5)) { _fun0020_ip = 97; continue _fun0020 }
case 99:
                var1['lastScreenShareActive'] = var5;
                var6 = _closure1_slot16;
                var4 = var6.info;
                var3 = 'Syncing Discord -> Call Bar screen share state:';
                var3 = var4.bind(var6)(var3, var5);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.setScreenShareState;
                var1 = var1.currentCall;
                var2 = var1.channelId;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1, var5);
case 97:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var15 = var4;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/native/TelecomManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();