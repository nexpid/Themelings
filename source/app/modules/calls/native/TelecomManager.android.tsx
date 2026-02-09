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
    var4 = 20;
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
                var5 = _closure2_slot1;
                var4 = undefined;
                var8 = var8.bind(var4)(var6, var5);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var4)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var4)();
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
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var5.bind(var4)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = {};
                var6 = function CALL_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleCallDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['CALL_DELETE'] = var6;
                var6 = function CHANNEL_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleChannelDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['CHANNEL_DELETE'] = var6;
                var6 = function VOICE_CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleVoiceChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['VOICE_CHANNEL_SELECT'] = var6;
                var6 = function RTC_CONNECTION_STATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleRTCConnectionState;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['RTC_CONNECTION_STATE'] = var6;
                var1['actions'] = var5;
                var5 = global;
                var5 = var5.Map;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var15 = var6;
                var5 = new var15[var5](var14);
                var8 = var5 instanceof Object ? var5 : var6;
                var7 = var8.set;
                var6 = _closure1_slot13;
                var5 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleMuteStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var7.bind(var8)(var6, var5);
                var6 = var7.set;
                var5 = _closure1_slot10;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleScreenShareStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var6.bind(var7)(var5, var3);
                var1['stores'] = var3;
                var3 = null;
                var1['currentCall'] = var3;
                var1['rtcConnectedStartCallPromise'] = var3;
                var5 = false;
                var1['isInitialized'] = var5;
                var1['lastMuteState'] = var3;
                var1['lastScreenShareActive'] = var3;
                var1['pendingScreenShareOffSyncTimeout'] = var3;
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
                        var12 = var2.callId;
                        var10 = var2.isEnabled;
                        var13 = 'Received screen share request from Call Bar:';
                        var11 = 'isEnabled:';
                        var14 = var8;
                        var3 = var14[var7](var13, var12, var11, var10, var9);
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
                        var9 = var5.bind(var6)(var4);
                        if(!(var3 != var9)) { _fun0006_ip = 23; continue _fun0006 }
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
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 16;
                        var4 = var5[var4];
                        var6 = undefined;
                        var7 = var8.bind(var6)(var4);
                        var4 = var7.getVideoPermission;
                        var4 = var4.bind(var7)(var9);
                        var7 = 17;
                        var5 = var5[var7];
                        var8 = var8.bind(var6)(var5);
                        var5 = var8.getOSRequirement;
                        var5 = var5.bind(var8)();
                        var8 = _closure1_slot16;
                        if(var5) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        var9 = var8.warn;
                        var5 = 'Cannot start screen share from Call Bar: OS version does not meet requirements';
                        var5 = var9.bind(var8)(var5);
                        var5 = undefined;
                        return var5;
case 30:
                        if(var4) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                        var5 = var8.warn;
                        var4 = 'Cannot start screen share from Call Bar: user lacks streaming permission in this channel';
                        var4 = var5.bind(var8)(var4);
                        var4 = undefined;
                        return var4;
case 32:
                        var5 = var8.info;
                        var4 = 'Starting screen share from Call Bar';
                        var4 = var5.bind(var8)(var4);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.startStream;
                        var4 = var4.bind(var5)();
                        _fun0006_ip = 23; continue _fun0006;
case 27:
                        var2 = var2.isEnabled;
                        var2 = !var2;
                        if(!var2) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                        var2 = var3;
case 34:
                        if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 36:
                        var4 = _closure1_slot16;
                        var3 = var4.info;
                        var2 = 'Stopping screen share from Call Bar';
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
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
                var3 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                                var10 = var2.guildId;
                                var6 = var2.channelId;
                                var4 = undefined;
                                SaveGenerator(address=29);
case 39:
                                return var4;
case 40:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                                var7 = _closure3_slot0;
                                var3 = var7.isEnabled;
                                var3 = var3.bind(var7)();
                                if(!var3) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                                var9 = _closure1_slot16;
                                var8 = var9.info;
                                var7 = 'Voice channel select:';
                                var7 = var8.bind(var9)(var7, var10, var6);
                                var7 = null;
                                if(!(var7 == var6)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                                var9 = _closure3_slot0;
                                var8 = var9.reportCallEnded;
                                var8 = var8.bind(var9)();
                                _fun0007_ip = 43; continue _fun0007;
case 45:
                                var8 = _closure3_slot0;
                                var9 = var8.currentCall;
                                var11 = var7 == var9;
                                var8 = undefined;
                                if(var11) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                                var8 = var9.channelId;
case 47:
                                if(!(var8 !== var6)) { _fun0007_ip = 34; continue _fun0007 }
case 49:
                                var9 = _closure1_slot11;
                                var8 = var9.getChannel;
                                var11 = var8.bind(var9)(var6);
                                if(!(var7 != var11)) { _fun0007_ip = 35; continue _fun0007 }
case 50:
                                var8 = var7 != var10;
                                var12 = null;
                                if(!var8) { _fun0007_ip = 51; continue _fun0007 }
case 25:
                                var9 = _closure1_slot12;
                                var8 = var9.getGuild;
                                var12 = var8.bind(var9)(var10);
case 51:
                                var8 = _closure3_slot0;
                                var8 = var8.currentCall;
                                var9 = var7 != var8;
                                var8 = null;
                                if(!var9) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                                var9 = _closure3_slot0;
                                var9 = var9.currentCall;
                                var9 = var9.channelId;
                                var8 = null;
                                if(!(var9 !== var6)) { _fun0007_ip = 52; continue _fun0007 }
case 54:
                                var9 = _closure3_slot0;
                                var8 = var9.currentCall;
case 52:
                                var10 = _closure3_slot0;
                                var9 = {};
                                var9['channelId'] = var6;
                                var14 = var7 == var12;
                                var13 = undefined;
                                if(var14) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                                var13 = var12.id;
case 55:
                                var14 = var7 != var13;
                                var12 = null;
                                if(!var14) { _fun0007_ip = 30; continue _fun0007 }
case 57:
                                var12 = var13;
case 30:
                                var9['guildId'] = var12;
                                var12 = var11.name;
                                var13 = var7 != var12;
                                var11 = null;
                                if(!var13) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                                var11 = var12;
case 58:
                                var9['channelName'] = var11;
                                var11 = _closure1_slot17;
                                var11 = var11.Connecting;
                                var9['state'] = var11;
                                var10['currentCall'] = var9;
                                if(!(var7 != var8)) { _fun0007_ip = 43; continue _fun0007 }
case 60:
                                var7 = _closure3_slot0;
                                var5 = var7.endCall;
                                var5 = var5.bind(var7)(var8);
                                SaveGenerator(address=342);
case 61:
                                return var5;
case 27:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                                if(var7) { _fun0007_ip = 62; continue _fun0007 }
case 43:
                                return var4;
case 62:
                                return var5;
case 35:
                                return var4;
case 34:
                                var5 = _closure1_slot16;
                                var4 = var5.info;
                                var3 = 'Call already in progress for channel:';
                                var3 = var4.bind(var5)(var3, var6);
                                var3 = undefined;
                                return var3;
case 41:
                                return var2;
case 37:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = var3.bind(var4)();
                var1['handleVoiceChannelSelect'] = var3;
                var3 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0008_ip = 63; continue _fun0008 }
case 38:
                                var12 = var2.state;
                                var4 = var2.channelId;
                                var6 = undefined;
                                var7 = undefined;
                                var10 = undefined;
                                var8 = undefined;
                                SaveGenerator(address=35);
case 64:
                                return var6;
case 65:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                                var9 = _closure3_slot0;
                                var5 = var9.isEnabled;
                                var5 = var5.bind(var9)();
                                if(!var5) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                                var14 = _closure1_slot16;
                                var13 = var14.info;
                                var11 = var4;
                                var9 = 'RTC connection state:';
                                var9 = var13.bind(var14)(var9, var12, var11);
                                var9 = _closure1_slot15;
                                var9 = var9.RTC_CONNECTED;
                                if(!(var12 === var9)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                                var9 = _closure3_slot0;
                                var9 = var9.currentCall;
                                var11 = null;
                                if(!(var11 == var9)) { _fun0008_ip = 72; continue _fun0008 }
case 70:
                                var9 = _closure1_slot15;
                                var9 = var9.DISCONNECTED;
                                var9 = var12 === var9;
                                if(!var9) { _fun0008_ip = 73; continue _fun0008 }
case 49:
                                var12 = _closure3_slot0;
                                var12 = var12.currentCall;
                                var13 = null;
                                var14 = var13 == var12;
                                var13 = undefined;
                                if(var14) { _fun0008_ip = 74; continue _fun0008 }
case 50:
                                var13 = var12.channelId;
case 74:
                                var12 = var4;
                                var9 = var13 === var12;
case 73:
                                if(!var9) { _fun0008_ip = 68; continue _fun0008 }
case 75:
                                var12 = _closure3_slot0;
                                var9 = var12.reportCallEnded;
                                var9 = var9.bind(var12)();
                                _fun0008_ip = 68; continue _fun0008;
case 72:
                                var9 = _closure3_slot0;
                                var9 = var9.currentCall;
                                var12 = var9.channelId;
                                var9 = var4;
                                if(!(var12 === var9)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                                var9 = _closure3_slot0;
                                var9 = var9.currentCall;
                                var12 = var9.state;
                                var9 = _closure1_slot17;
                                var9 = var9.Connected;
                                if(!(var12 !== var9)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                                var9 = _closure3_slot0;
                                var9 = var9.rtcConnectedStartCallPromise;
                                var13 = var11 == var9;
                                var12 = undefined;
                                if(var13) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                                var12 = var9.channelId;
case 80:
                                var9 = var4;
                                if(!(var12 !== var9)) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                                var12 = _closure3_slot0;
                                var13 = var12.startCall;
                                var9 = {};
                                var14 = var12.currentCall;
                                var14 = var14.channelId;
                                var9['channelId'] = var14;
                                var14 = var12.currentCall;
                                var14 = var14.guildId;
                                var9['guildId'] = var14;
                                var13 = var13.bind(var12)(var9);
                                var7 = var13;
                                var9 = {};
                                var14 = var4;
                                var9['channelId'] = var14;
                                var9['promise'] = var13;
                                var12['rtcConnectedStartCallPromise'] = var9;
case 84: // try_start_0
                                SaveGenerator(address=366);
case 85:
                                return var7;
case 86:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                                if(var12) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                                var9 = var7;
                                if(!var7) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                                var12 = _closure3_slot0;
                                var12 = var12.currentCall;
                                var10 = var12;
                                var13 = var11 == var12;
                                var12 = undefined;
                                if(var13) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                                var12 = var10.channelId;
case 91:
                                var10 = var4;
                                var9 = var12 === var10;
case 89:
                                if(!var9) { _fun0008_ip = 93; continue _fun0008 }
case 94:
                                var12 = _closure3_slot0;
                                var10 = var12.currentCall;
                                var9 = _closure1_slot17;
                                var9 = var9.Connected;
                                var10['state'] = var9;
                                var10 = var12.setCallActive;
                                var9 = var4;
                                var9 = var10.bind(var12)(var9);
case 93: // try_end0
                                var9 = _closure3_slot0;
                                var9 = var9.rtcConnectedStartCallPromise;
                                var8 = var9;
                                var9 = var11 == var9;
                                var10 = undefined;
                                if(var9) { _fun0008_ip = 95; continue _fun0008 }
case 96:
                                var9 = var8;
                                var10 = var9.channelId;
case 95:
                                var9 = var4;
                                if(!(var10 === var9)) { _fun0008_ip = 68; continue _fun0008 }
case 97:
                                var9 = _closure3_slot0;
                                var9['rtcConnectedStartCallPromise'] = var11;
case 68:
                                return var6;
case 87:
                                var9 = _closure3_slot0;
                                var9 = var9.rtcConnectedStartCallPromise;
                                var8 = var9;
                                var9 = var11 == var9;
                                var10 = undefined;
                                if(var9) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                                var9 = var8;
                                var10 = var9.channelId;
case 98:
                                var9 = var4;
                                if(!(var10 === var9)) { _fun0008_ip = 100; continue _fun0008 }
case 101:
                                var9 = _closure3_slot0;
                                var9['rtcConnectedStartCallPromise'] = var11;
case 100:
                                return var7;
case 102: // catch_target0
                                CatchBlockStart(arg_register=6);
                                var9 = _closure3_slot0;
                                var9 = var9.rtcConnectedStartCallPromise;
                                var8 = var9;
                                var10 = var11 == var9;
                                var9 = undefined;
                                if(var10) { _fun0008_ip = 103; continue _fun0008 }
case 104:
                                var9 = var8.channelId;
case 103:
                                var8 = var4;
                                if(!(var9 === var8)) { _fun0008_ip = 105; continue _fun0008 }
case 106:
                                var8 = _closure3_slot0;
                                var8['rtcConnectedStartCallPromise'] = var11;
case 105:
                                throw var7;
case 82:
                                var7 = _closure3_slot0;
                                var7 = var7.rtcConnectedStartCallPromise;
                                var7 = var7.promise;
                                SaveGenerator(address=626);
case 107:
                                return var7;
case 108:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                if(var8) { _fun0008_ip = 109; continue _fun0008 }
case 110:
                                var8 = _closure3_slot0;
                                var8 = var8.currentCall;
                                var9 = var11 == var8;
                                var10 = undefined;
                                if(var9) { _fun0008_ip = 111; continue _fun0008 }
case 112:
                                var10 = var8.state;
case 111:
                                var8 = var7;
                                if(!var8) { _fun0008_ip = 113; continue _fun0008 }
case 114:
                                var9 = _closure3_slot0;
                                var9 = var9.currentCall;
                                var12 = var11 == var9;
                                var11 = undefined;
                                if(var12) { _fun0008_ip = 115; continue _fun0008 }
case 116:
                                var11 = var9.channelId;
case 115:
                                var9 = var4;
                                var8 = var11 === var9;
case 113:
                                if(!var8) { _fun0008_ip = 117; continue _fun0008 }
case 118:
                                var9 = _closure1_slot17;
                                var9 = var9.Connected;
                                var8 = var10 !== var9;
case 117:
                                if(!var8) { _fun0008_ip = 119; continue _fun0008 }
case 120:
                                var11 = _closure3_slot0;
                                var10 = var11.currentCall;
                                var9 = _closure1_slot17;
                                var9 = var9.Connected;
                                var10['state'] = var9;
                                var10 = var11.setCallActive;
                                var9 = var4;
                                var8 = var10.bind(var11)(var9);
case 119:
                                var8 = undefined;
                                return var8;
case 109:
                                return var7;
case 78:
                                return var6;
case 76:
                                var8 = _closure1_slot16;
                                var7 = var8.warn;
                                var17 = var4;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var15 = var3.channelId;
                                var18 = 'RTC connected for different channel:';
                                var16 = 'current:';
                                var19 = var8;
                                var3 = var19[var7](var18, var17, var16, var15, var14);
                                var3 = undefined;
                                return var3;
case 66:
                                return var2;
case 63:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = var3.bind(var4)();
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
case 121:
                        var5 = _closure1_slot16;
                        var4 = var5.info;
                        var2 = 'Call deleted:';
                        var2 = var4.bind(var5)(var2, var3);
                        var2 = _closure3_slot0;
                        var4 = var2.currentCall;
                        var2 = null;
                        var5 = var2 == var4;
                        var2 = undefined;
                        if(var5) { _fun0009_ip = 122; continue _fun0009 }
case 5:
                        var2 = var4.channelId;
case 122:
                        if(!(var2 === var3)) { _fun0009_ip = 20; continue _fun0009 }
case 123:
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
                        if(!var3) { _fun0010_ip = 124; continue _fun0010 }
case 121:
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
case 122:
                        var3 = var4.channelId;
case 12:
                        var2 = var2.id;
                        if(!(var3 === var2)) { _fun0010_ip = 124; continue _fun0010 }
case 46:
                        var2 = _closure3_slot0;
                        var1 = var2.reportCallEnded;
                        var1 = var1.bind(var2)();
case 124:
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
                if(!var1) { _fun0011_ip = 125; continue _fun0011 }
case 126:
                var3 = var2.isSupported;
                var1 = var3.bind(var2)();
case 125:
                if(!var1) { _fun0011_ip = 127; continue _fun0011 }
case 128:
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
case 127:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var8 = '_terminate';
        var5['key'] = var8;
        var8 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0012_ip = 129; continue _fun0012 }
case 130:
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
                var1 = var2.clearPendingScreenShareOffSync;
                var1 = var1.bind(var2)();
                var1 = var2.reportCallEnded;
                var1 = var1.bind(var2)();
                var1 = null;
                var2['rtcConnectedStartCallPromise'] = var1;
                var1 = false;
                var2['isInitialized'] = var1;
case 129:
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
                var1 = 18;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isMetaQuest;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0013_ip = 131; continue _fun0013 }
case 42:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 19;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var1 = var2 != var3;
case 131:
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
                if(!var1) { _fun0014_ip = 132; continue _fun0014 }
case 133:
                var1 = var2.isInitialized;
case 132:
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
                    var3 = arg1;
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 134; continue _fun0015 }
case 133:
                    var9 = undefined;
                    var2 = undefined;
                    var12 = undefined;
                    var7 = undefined;
                    var2 = var3.channelId;
                    var12 = var3.guildId;
                    var3 = var6.currentCall;
                    var10 = null;
                    var5 = var10 == var3;
                    var4 = undefined;
                    if(var5) { _fun0015_ip = 10; continue _fun0015 }
case 135:
                    var4 = var3.channelId;
case 10:
                    var3 = var2;
                    if(!(var4 === var3)) { _fun0015_ip = 17; continue _fun0015 }
case 136:
                    var3 = var6.currentCall;
                    var5 = var3.state;
                    var4 = _closure1_slot17;
                    var4 = var4.Connected;
                    if(!(var5 !== var4)) { _fun0015_ip = 33; continue _fun0015 }
case 17:
                    var13 = _closure1_slot16;
                    var11 = var13.info;
                    var8 = var2;
                    var5 = 'Starting Telecom call:';
                    var5 = var11.bind(var13)(var5, var8);
case 137: // try_start_0
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 19;
                    var5 = var11[var5];
                    var9 = var8.bind(var9)(var5);
                    var8 = var9.startCall;
                    var5 = var2;
                    var11 = var12;
                    var11 = var10 != var11;
                    var10 = null;
                    if(!var11) { _fun0015_ip = 138; continue _fun0015 }
case 127:
                    var11 = {};
                    var11['guildId'] = var12;
                    var10 = var11;
case 138:
                    var5 = var8.bind(var9)(var5, var10);
                    SaveGenerator(address=182);
case 139:
                    return var5;
case 75:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 140; continue _fun0015 }
case 141:
                    var7 = var5;
                    if(var5) { _fun0015_ip = 142; continue _fun0015 }
case 143:
                    var10 = _closure1_slot16;
                    var9 = var10.warn;
                    var8 = 'Native startCall returned false, clearing call state';
                    var8 = var9.bind(var10)(var8);
                    var9 = var6.clearCall;
                    var8 = var2;
                    var8 = var9.bind(var6)(var8);
case 142: // try_end0
                    return var7;
case 140:
                    return var5;
case 144: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot16;
                    var5 = var7.warn;
                    var4 = 'Failed to register call with Telecom:';
                    var4 = var5.bind(var7)(var4, var8);
                    var5 = var6.clearCall;
                    var4 = var2;
                    var4 = var5.bind(var6)(var4);
                    var4 = false;
                    return var4;
case 33:
                    var5 = _closure1_slot16;
                    var4 = var5.info;
                    var3 = var2;
                    var2 = 'Call already active for channel:';
                    var2 = var4.bind(var5)(var2, var3);
                    var2 = true;
                    return var2;
case 134:
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
            var3 = 19;
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
                if(!(var1 != var2)) { _fun0016_ip = 145; continue _fun0016 }
case 146:
                var2 = var3.endCall;
                var1 = var3.currentCall;
                var1 = var2.bind(var3)(var1);
                _fun0016_ip = 122; continue _fun0016;
case 145:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = true;
                var1 = var3.bind(var4)(var2);
case 122:
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
                if(var7) { _fun0017_ip = 147; continue _fun0017 }
case 125:
                var2 = var4.channelId;
case 147:
                if(!(var2 !== var6)) { _fun0017_ip = 136; continue _fun0017 }
case 148:
                var7 = _closure1_slot16;
                var4 = var7.warn;
                var2 = 'setCallActive called for unknown channel:';
                var2 = var4.bind(var7)(var2, var6);
                _fun0017_ip = 149; continue _fun0017;
case 136:
                var12 = _closure1_slot16;
                var7 = var12.info;
                var4 = 'Setting call active:';
                var4 = var7.bind(var12)(var4, var6);
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 19;
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
                if(!var5) { _fun0017_ip = 150; continue _fun0017 }
case 151:
                var8 = var7.state;
                var7 = _closure1_slot14;
                var7 = var7.ACTIVE;
                var5 = var8 === var7;
case 150:
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
case 149:
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
        var7 = 'clearPendingScreenShareOffSync';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var3 = var2.pendingScreenShareOffSyncTimeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0018_ip = 152; continue _fun0018 }
case 126:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.pendingScreenShareOffSyncTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['pendingScreenShareOffSyncTimeout'] = var1;
case 152:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'clearCall';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = this;
                var4 = var3.currentCall;
                var2 = null;
                var6 = var2 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0019_ip = 39; continue _fun0019 }
case 132:
                var5 = var4.channelId;
case 39:
                var4 = arg1;
                if(!(var5 === var4)) { _fun0019_ip = 5; continue _fun0019 }
case 148:
                var3['currentCall'] = var2;
                var3['rtcConnectedStartCallPromise'] = var2;
                var3['lastMuteState'] = var2;
                var2 = var3.clearScreenShareState;
                var2 = var2.bind(var3)();
                var2 = var3.clearPendingScreenShareOffSync;
                var2 = var2.bind(var3)();
case 5:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleMuteStoreChange';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = this;
                var2 = var1.isEnabled;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0020_ip = 153; continue _fun0020 }
case 154:
                var3 = var1.currentCall;
                var2 = null;
                if(!(var2 != var3)) { _fun0020_ip = 153; continue _fun0020 }
case 148:
                var2 = var1.currentCall;
                var4 = var2.state;
                var3 = _closure1_slot17;
                var3 = var3.Connected;
                if(!(var4 === var3)) { _fun0020_ip = 153; continue _fun0020 }
case 155:
                var4 = _closure1_slot13;
                var3 = var4.isSelfMute;
                var4 = var3.bind(var4)();
                var3 = var1.lastMuteState;
                if(!(var3 !== var4)) { _fun0020_ip = 153; continue _fun0020 }
case 6:
                var1['lastMuteState'] = var4;
                var6 = _closure1_slot16;
                var5 = var6.info;
                var3 = 'Syncing Discord -> Call Bar mute state:';
                var3 = var5.bind(var6)(var3, var4);
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.setMicMuted;
                var1 = var1.currentCall;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1, var4);
case 153:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'handleScreenShareStoreChange';
        var5['key'] = var7;
        var6 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1.isEnabled;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0021_ip = 156; continue _fun0021 }
case 125:
                var2 = var1.currentCall;
                var4 = null;
                if(!(var4 != var2)) { _fun0021_ip = 156; continue _fun0021 }
case 157:
                var2 = var1.currentCall;
                var6 = var2.state;
                var5 = _closure1_slot17;
                var5 = var5.Connected;
                if(!(var6 === var5)) { _fun0021_ip = 156; continue _fun0021 }
case 15:
                var6 = _closure1_slot10;
                var5 = var6.getCurrentUserActiveStream;
                var5 = var5.bind(var6)();
                var4 = var4 != var5;
                if(!var4) { _fun0021_ip = 158; continue _fun0021 }
case 159:
                var6 = var5.state;
                var5 = _closure1_slot14;
                var5 = var5.ACTIVE;
                var4 = var6 === var5;
case 158:
                var5 = var1.lastScreenShareActive;
                if(!(var5 !== var4)) { _fun0021_ip = 156; continue _fun0021 }
case 22:
                var1['lastScreenShareActive'] = var4;
                var5 = var1.clearPendingScreenShareOffSync;
                var5 = var5.bind(var1)();
                if(var4) { _fun0021_ip = 160; continue _fun0021 }
case 49:
                var4 = var1.currentCall;
                var4 = var4.channelId;
                var _closure3_slot1 = var4;
                var4 = global;
                var6 = var4.setTimeout;
                var5 = undefined;
                var4 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = null;
                        var3['pendingScreenShareOffSyncTimeout'] = var4;
                        var2 = var3.isEnabled;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0022_ip = 161; continue _fun0022 }
case 121:
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0022_ip = 162; continue _fun0022 }
case 163:
                        var4 = var3.channelId;
case 162:
                        var3 = _closure3_slot1;
                        var2 = var4 === var3;
case 161:
                        if(!var2) { _fun0022_ip = 164; continue _fun0022 }
case 136:
                        var5 = _closure1_slot16;
                        var4 = var5.info;
                        var3 = 'Syncing Discord -> Call Bar screen share state: false (delayed)';
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.setScreenShareState;
                        var3 = _closure3_slot1;
                        var2 = true;
                        var1 = false;
                        var1 = var4.bind(var5)(var3, var2, var1);
case 164:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = 400;
                var3 = var6.bind(var5)(var4, var3);
                var1['pendingScreenShareOffSyncTimeout'] = var3;
                _fun0021_ip = 156; continue _fun0021;
case 160:
                var5 = _closure1_slot16;
                var4 = var5.info;
                var3 = 'Syncing Discord -> Call Bar screen share state: true';
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.setScreenShareState;
                var1 = var1.currentCall;
                var2 = var1.channelId;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1, var1);
case 156:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var15 = var4;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/native/TelecomManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();