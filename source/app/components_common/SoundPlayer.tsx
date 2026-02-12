// app/components_common/SoundPlayer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function useSound(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot2;
        var2 = var3.useEffect;
        var1 = function() {
            var3 = _closure2_slot1;
            var5 = undefined;
            var3 = var3.bind(var5)();
            var _closure3_slot0 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 19;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.BatchedStoreListener;
            var8 = _closure2_slot0;
            var2 = var5.prototype;
            var3 = Object.create(var2, {constructor: {value: var5}});
            var7 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var2.bind(var1)();
                    var5 = _closure2_slot2;
                    var4 = _closure3_slot0;
                    var7 = var5.bind(var1)(var4, var3);
                    var9 = null;
                    var4 = var9 == var7;
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = _closure1_slot14;
                    var5 = var6.isSoundDisabled;
                    var4 = var5.bind(var6)(var7);
case 2:
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.playSound;
                    var4 = _closure2_slot3;
                    var9 = var9 != var4;
                    var4 = 0.4;
                    if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure2_slot3;
case 6:
                    var4 = var5.bind(var6)(var7, var4);
case 4:
                    _closure3_slot0 = var3;
                    return var1;
                }
            };
            var9 = var3;
            var2 = new var9[var5](var8, var7, var6);
            var4 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot1 = var4;
            var3 = var4.attach;
            var2 = 'useSound';
            var2 = var3.bind(var4)(var2);
            var1 = function() {
                var2 = _closure3_slot1;
                var1 = var2.detach;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NO_ACTIVITIES;
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
    var4 = var4.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InputModes;
    var _closure1_slot20 = var7;
    var7 = var4.ApplicationStreamStates;
    var _closure1_slot21 = var7;
    var4 = var4.RTCConnectionStates;
    var _closure1_slot22 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Fragment;
    var _closure1_slot23 = var7;
    var7 = var4.jsxs;
    var _closure1_slot24 = var7;
    var8 = var4.jsx;
    var7 = function MuteDeafen() {
        var5 = _closure1_slot37;
        var3 = _closure1_slot13;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot16;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            var1 = {};
            var4 = _closure1_slot16;
            var3 = var4.getVoiceChannelId;
            var4 = var3.bind(var4)();
            var3 = null;
            var3 = var3 != var4;
            var1['inVoiceChannel'] = var3;
            var4 = _closure1_slot13;
            var3 = var4.isSelfMute;
            var3 = var3.bind(var4)();
            var1['selfMute'] = var3;
            var4 = _closure1_slot13;
            var3 = var4.isSelfDeaf;
            var3 = var3.bind(var4)();
            var1['selfDeaf'] = var3;
            var4 = _closure1_slot13;
            var3 = var4.isNativeAudioPermissionReady;
            var3 = var3.bind(var4)();
            var1['audioPermissionReady'] = var3;
            var3 = _closure1_slot13;
            var2 = var3.shouldSkipMuteUnmuteSound;
            var2 = var2.bind(var3)();
            var1['shouldSkipMuteUnmuteSound'] = var2;
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var3 = arg2;
                var5 = var3.inVoiceChannel;
                var4 = var3.selfMute;
                var2 = var3.selfDeaf;
                var6 = var3.audioPermissionReady;
                var3 = var3.shouldSkipMuteUnmuteSound;
                if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                var7 = var1.selfDeaf;
                if(!(var7 === var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 11:
                if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var5 = var1.audioPermissionReady;
                if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 8:
                var5 = undefined;
                return var5;
case 12:
                var5 = var1.selfMute;
                var1 = undefined;
                if(!(var5 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 14:
                if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var3 = 'unmute';
                if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var3 = 'mute';
case 17:
                _fun0002_ip = 19; continue _fun0002;
case 15:
                var5 = _closure1_slot13;
                var4 = var5.notifyMuteUnmuteSoundWasSkipped;
                var4 = var4.bind(var5)();
                var3 = undefined;
case 19:
                var1 = var3;
case 4:
                return var1;
case 9:
                var1 = 'undeafen';
                if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var1 = 'deafen';
case 20:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot25 = var4;
    var7 = function Camera() {
        var5 = _closure1_slot37;
        var3 = _closure1_slot13;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot16;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            var1 = {};
            var4 = _closure1_slot13;
            var3 = var4.isVideoEnabled;
            var3 = var3.bind(var4)();
            var1['videoEnabled'] = var3;
            var3 = _closure1_slot16;
            var2 = var3.getVoiceChannelId;
            var3 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var3;
            var1['inVoiceChannel'] = var2;
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = arg2;
                var3 = var2.videoEnabled;
                var2 = var2.inVoiceChannel;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 21;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isCameraToggleSoundEnabled;
                var5 = var5.bind(var6)();
                if(var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                return var4;
case 22:
                var6 = var1.videoEnabled;
                var5 = var1.inVoiceChannel;
                var1 = undefined;
                if(!(var6 !== var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var1 = undefined;
                if(!var5) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                var1 = undefined;
                if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 27:
                var2 = 'camera_off';
                if(!var3) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var2 = 'camera_on';
case 28:
                var1 = var2;
case 24:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot26 = var4;
    var7 = function RTCConnect() {
        var5 = _closure1_slot37;
        var3 = _closure1_slot11;
        var4 = new Array(4);
        var4[0] = var3;
        var3 = _closure1_slot15;
        var4[1] = var3;
        var3 = _closure1_slot16;
        var4[2] = var3;
        var2 = _closure1_slot6;
        var4[3] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot11;
                var3 = var4.getChannel;
                var5 = _closure1_slot16;
                var1 = var5.getVoiceChannelId;
                var1 = var1.bind(var5)();
                var4 = var3.bind(var4)(var1);
                var3 = null;
                var1 = var3 == var4;
                var7 = undefined;
                if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var7 = var4.type;
case 30:
                var1 = var3 == var4;
                var5 = undefined;
                if(var1) { _fun0004_ip = 32; continue _fun0004 }
case 23:
                var1 = var4.getGuildId;
                var5 = var1.bind(var4)();
case 32:
                var4 = _closure1_slot15;
                var1 = var4.getWasEverRtcConnected;
                var4 = var1.bind(var4)();
                var6 = _closure1_slot15;
                var1 = var6.getState;
                var6 = var1.bind(var6)();
                var1 = {};
                var1['channelType'] = var7;
                var1['guildId'] = var5;
                var5 = _closure1_slot22;
                var5 = var5.RTC_CONNECTED;
                var5 = var6 === var5;
                var1['connected'] = var5;
                var4 = !var4;
                if(!var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var5 = _closure1_slot22;
                var5 = var5.DISCONNECTED;
                var4 = var6 !== var5;
case 33:
                if(var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var5 = _closure1_slot22;
                var5 = var5.RTC_CONNECTED;
                var4 = var6 === var5;
case 35:
                var1['connectHasStarted'] = var4;
                var5 = _closure1_slot6;
                var4 = var5.getAwaitingRemoteSessionInfo;
                var4 = var4.bind(var5)();
                var4 = var3 != var4;
                var1['awaitingRemote'] = var4;
                var4 = _closure1_slot6;
                var2 = var4.getRemoteSessionId;
                var2 = var2.bind(var4)();
                var2 = var3 != var2;
                var1['connectedRemote'] = var2;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var9 = arg1;
                var1 = arg2;
                var8 = var1.channelType;
                var4 = var1.connected;
                var7 = var1.connectHasStarted;
                var2 = var1.awaitingRemote;
                var1 = var1.connectedRemote;
                var3 = var9.channelType;
                var6 = var9.connectedRemote;
                var5 = var9.connected;
                var9 = var9.connectHasStarted;
                if(var9) { _fun0005_ip = 32; continue _fun0005 }
case 37:
                if(var7) { _fun0005_ip = 38; continue _fun0005 }
case 32:
                if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 38:
                var6 = null;
                if(!(var6 != var8)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var7 = _closure1_slot8;
                var6 = var7.has;
                var6 = var6.bind(var7)(var8);
                if(var6) { _fun0005_ip = 43; continue _fun0005 }
case 41:
                var6 = 'user_join';
                return var6;
case 43:
                var6 = undefined;
                return var6;
case 39:
                if(!var5) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 6:
                if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 19:
                if(var1) { _fun0005_ip = 46; continue _fun0005 }
case 4:
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var2 = _closure1_slot8;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var1 = 'disconnect';
                return var1;
case 46:
                var1 = undefined;
                return var1;
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot27 = var4;
    var7 = function Speaking() {
        var5 = _closure1_slot37;
        var2 = _closure1_slot17;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot17;
                var1 = var3.isCurrentUserPTTActive;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var3 = _closure1_slot17;
                var2 = var3.isCurrentUserPTTLatched;
                var1 = var2.bind(var3)();
case 49:
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
                var3 = var3.PUSH_TO_TALK;
                if(!(var4 === var3)) { _fun0007_ip = 51; continue _fun0007 }
case 13:
                if(var1) { _fun0007_ip = 51; continue _fun0007 }
case 22:
                var1 = 'ptt_stop';
                if(!var2) { _fun0007_ip = 40; continue _fun0007 }
case 53:
                var1 = 'ptt_start';
case 40:
                return var1;
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot28 = var4;
    var7 = function SelfMutedTemporarily() {
        var5 = _closure1_slot37;
        var2 = _closure1_slot13;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot13;
            var1 = var2.isSelfMutedTemporarily;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0008_ip = 51; continue _fun0008 }
case 13:
                if(var1) { _fun0008_ip = 51; continue _fun0008 }
case 22:
                var1 = 'ptt_start';
                if(!var2) { _fun0008_ip = 40; continue _fun0008 }
case 53:
                var1 = 'ptt_stop';
case 40:
                return var1;
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot29 = var4;
    var7 = function UserHasBeenMoved() {
        var5 = _closure1_slot37;
        var2 = _closure1_slot18;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var1 = _closure1_slot18;
            var1 = var1.userHasBeenMovedVersion;
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 === var1)) { _fun0009_ip = 54; continue _fun0009 }
case 52:
                var1 = undefined;
                return var1;
case 54:
                var1 = 'user_moved';
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot30 = var4;
    var7 = function VoiceChannel() {
        var5 = _closure1_slot37;
        var3 = _closure1_slot16;
        var4 = new Array(5);
        var4[0] = var3;
        var3 = _closure1_slot9;
        var4[1] = var3;
        var3 = _closure1_slot10;
        var4[2] = var3;
        var3 = _closure1_slot18;
        var4[3] = var3;
        var2 = _closure1_slot11;
        var4[4] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot16;
                var2 = var3.getVoiceChannelId;
                var8 = var2.bind(var3)();
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var _closure3_slot0 = var3;
                var12 = new Array(0);
                var4 = _closure1_slot9;
                var2 = var4.getAllActiveStreams;
                var2 = var2.bind(var4)();
                var5 = null;
                var4 = var5 != var8;
                var14 = undefined;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var4) { _fun0010_ip = 55; continue _fun0010 }
case 25:
                var10 = _closure1_slot11;
                var4 = var10.getChannel;
                var4 = var4.bind(var10)(var8);
                var10 = var5 != var4;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var10) { _fun0010_ip = 55; continue _fun0010 }
case 43:
                var12 = var4.type;
                var15 = _closure1_slot19;
                var13 = var15.countVoiceStatesForChannel;
                var10 = var4.id;
                var13 = var13.bind(var15)(var10);
                var16 = _closure1_slot18;
                var15 = var16.isInChannel;
                var10 = var4.id;
                var15 = var15.bind(var16)(var10);
                var10 = 0;
                if(!var15) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                var10 = 1;
case 56:
                var7 = var13 - var10;
                var15 = _closure1_slot9;
                var13 = var15.getAllApplicationStreamsForChannel;
                var4 = var4.id;
                var15 = var13.bind(var15)(var4);
                var13 = var15.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.ownerId;
                    return var1;
                };
                var6 = var13.bind(var15)(var4);
                var9 = var12;
case 55:
                var10 = var2.length;
                var4 = 1;
                if(!(var4 !== var10)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                var10 = _closure1_slot9;
                var4 = var10.getCurrentUserActiveStream;
                var13 = var4.bind(var10)();
                _fun0010_ip = 60; continue _fun0010;
case 58:
                var4 = 0;
                var13 = var2[var4];
case 60:
                var4 = var5 == var13;
                var10 = undefined;
                if(var4) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                var10 = var13.state;
case 61:
                var4 = _closure1_slot21;
                var4 = var4.CONNECTING;
                if(!(var10 === var4)) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var13 = null;
case 63:
                var10 = var5 != var13;
                var5 = null;
                var4 = 0;
                if(!var10) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 23;
                var10 = var15[var10];
                var12 = var12.bind(var14)(var10);
                var10 = var12.encodeStreamKey;
                var10 = var10.bind(var12)(var13);
                var12 = _closure1_slot9;
                var11 = var12.getViewerIds;
                var12 = var11.bind(var12)(var10);
                var11 = var12.filter;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var1 = var11.bind(var12)(var1);
                var4 = var1.length;
                var5 = var10;
case 65:
                var1 = {};
                var1['channelType'] = var9;
                var1['voiceChannelId'] = var8;
                var1['voiceChannelUserCount'] = var7;
                var1['streamingUserIds'] = var6;
                var1['singleActiveStreamKey'] = var5;
                var1['singleActiveStreamViewerCount'] = var4;
                var1['currentUserId'] = var3;
                var1['allActiveStreams'] = var2;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var8 = arg1;
                var1 = arg2;
                var _closure3_slot0 = var8;
                var11 = var1.channelType;
                var13 = var1.voiceChannelId;
                var7 = var1.voiceChannelUserCount;
                var5 = var1.streamingUserIds;
                var _closure3_slot1 = var5;
                var4 = var1.singleActiveStreamKey;
                var9 = var1.singleActiveStreamViewerCount;
                var1 = var1.currentUserId;
                var _closure3_slot2 = var1;
                var1 = undefined;
                var _closure3_slot3 = var1;
                var3 = var8.voiceChannelId;
                if(!(var3 === var13)) { _fun0011_ip = 67; continue _fun0011 }
case 26:
                var6 = null;
                if(!(var6 != var13)) { _fun0011_ip = 67; continue _fun0011 }
case 18:
                var12 = _closure1_slot11;
                var10 = var12.getChannel;
                var13 = var10.bind(var12)(var13);
                var12 = var6 == var13;
                var10 = false;
                if(var12) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var12 = var13.getGuildId;
                var15 = var12.bind(var13)();
                var12 = var6 == var15;
                var10 = false;
                if(var12) { _fun0011_ip = 68; continue _fun0011 }
case 70:
                var14 = _closure1_slot12;
                var12 = var14.getGuild;
                var14 = var12.bind(var14)(var15);
                var12 = var6 != var14;
                if(!var12) { _fun0011_ip = 71; continue _fun0011 }
case 44:
                var14 = var14.afkChannelId;
                var13 = var13.id;
                var12 = var14 === var13;
case 71:
                var10 = var12;
case 68:
                if(var10) { _fun0011_ip = 67; continue _fun0011 }
case 72:
                if(!(var6 != var11)) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                var10 = _closure1_slot8;
                var3 = var10.has;
                var3 = var3.bind(var10)(var11);
                if(var3) { _fun0011_ip = 67; continue _fun0011 }
case 73:
                var10 = var6 != var4;
                if(!var10) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                var3 = var8.singleActiveStreamKey;
                var10 = var3 === var4;
case 75:
                var4 = var5.some;
                var3 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.streamingUserIds;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var11 = var8.allActiveStreams;
                var5 = var11.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.ownerId;
                    return var1;
                };
                var4 = var5.bind(var11)(var4);
                _closure3_slot3 = var4;
                var5 = var8.streamingUserIds;
                var4 = var5.some;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var1 = var1.bind(var2)(var5);
                        var1 = !var1;
                        if(!var1) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                        var2 = _closure3_slot2;
                        var2 = var5 === var2;
                        if(var2) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                        var4 = _closure3_slot3;
                        var3 = var4.includes;
                        var2 = var3.bind(var4)(var5);
case 79:
                        var1 = var2;
case 77:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = 'stream_started';
                if(var3) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                var3 = 'stream_ended';
                if(var4) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                var4 = var8.singleActiveStreamViewerCount;
                var11 = 25;
                if(!(var4 <= var11)) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                if(!var10) { _fun0011_ip = 85; continue _fun0011 }
case 87:
                var4 = var8.singleActiveStreamViewerCount;
                var5 = var9 > var4;
                var4 = 'stream_user_joined';
                if(var5) { _fun0011_ip = 88; continue _fun0011 }
case 85:
                var5 = var8.voiceChannelUserCount;
                if(!(var6 != var5)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                if(!(var6 != var7)) { _fun0011_ip = 89; continue _fun0011 }
case 91:
                var5 = var8.voiceChannelUserCount;
                if(!(var5 <= var11)) { _fun0011_ip = 89; continue _fun0011 }
case 92:
                var5 = var8.voiceChannelUserCount;
                var12 = var7 > var5;
                var5 = 'user_join';
                if(var12) { _fun0011_ip = 93; continue _fun0011 }
case 89:
                var12 = var8.voiceChannelUserCount;
                if(!(var6 != var12)) { _fun0011_ip = 94; continue _fun0011 }
case 95:
                if(!(var6 != var7)) { _fun0011_ip = 94; continue _fun0011 }
case 96:
                var6 = var8.voiceChannelUserCount;
                if(!(var6 <= var11)) { _fun0011_ip = 94; continue _fun0011 }
case 97:
                var6 = var8.voiceChannelUserCount;
                var7 = var7 < var6;
                var6 = 'user_leave';
                if(var7) { _fun0011_ip = 98; continue _fun0011 }
case 94:
                var7 = var8.singleActiveStreamViewerCount;
                var11 = var7 <= var11;
                var7 = undefined;
                if(!var11) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                var7 = undefined;
                if(!var10) { _fun0011_ip = 99; continue _fun0011 }
case 101:
                var8 = var8.singleActiveStreamViewerCount;
                var8 = var9 < var8;
                var7 = undefined;
                if(!var8) { _fun0011_ip = 99; continue _fun0011 }
case 102:
                var7 = 'stream_user_left';
case 99:
                var6 = var7;
case 98:
                var5 = var6;
case 93:
                var4 = var5;
case 88:
                var3 = var4;
case 83:
                var2 = var3;
case 81:
                return var2;
case 67:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot31 = var4;
    var7 = function UserInvitedToSpeak() {
        var5 = _closure1_slot37;
        var3 = _closure1_slot16;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot18;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot16;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                var3 = _closure1_slot18;
                var2 = var3.getVoiceStateForChannel;
                var4 = var2.bind(var3)(var4);
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 22;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getAudienceRequestToSpeakState;
                var2 = var2.bind(var3)(var4);
                return var2;
case 103:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.NONE;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0014_ip = 79; continue _fun0014 }
case 52:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 22;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if(!(var2 !== var1)) { _fun0014_ip = 13; continue _fun0014 }
case 79:
                var1 = undefined;
                return var1;
case 13:
                var1 = 'reconnect';
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot32 = var4;
    var7 = function ActivitySounds() {
        var5 = _closure1_slot37;
        var3 = _closure1_slot16;
        var4 = new Array(4);
        var4[0] = var3;
        var3 = _closure1_slot3;
        var4[1] = var3;
        var3 = _closure1_slot5;
        var4[2] = var3;
        var2 = _closure1_slot10;
        var4[3] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot16;
                var1 = var3.getVoiceChannelId;
                var9 = var1.bind(var3)();
                var3 = _closure1_slot16;
                var1 = var3.getChannelId;
                var11 = var1.bind(var3)();
                var3 = _closure1_slot3;
                var1 = var3.getConnectedActivityLocation;
                var7 = var1.bind(var3)();
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 24;
                var4 = var1[var4];
                var6 = undefined;
                var5 = var3.bind(var6)(var4);
                var4 = var5.getEmbeddedActivityLocationChannelId;
                var10 = var4.bind(var5)(var7);
                var5 = _closure1_slot10;
                var4 = var5.getId;
                var5 = var4.bind(var5)();
                var8 = 25;
                var1 = var1[var8];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isNotNullish;
                var1 = var1.bind(var3)(var11);
                if(var1) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                var4 = _closure1_slot4;
                _fun0015_ip = 107; continue _fun0015;
case 105:
                var3 = _closure1_slot3;
                var1 = var3.getEmbeddedActivitiesForChannel;
                var4 = var1.bind(var3)(var11);
case 107:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isNotNullish;
                var1 = var1.bind(var3)(var9);
                if(var1) { _fun0015_ip = 108; continue _fun0015 }
case 109:
                var3 = _closure1_slot4;
                _fun0015_ip = 110; continue _fun0015;
case 108:
                var11 = _closure1_slot3;
                var1 = var11.getEmbeddedActivitiesForChannel;
                var3 = var1.bind(var11)(var9);
case 110:
                var1 = {};
                var1['connectedActivityLocation'] = var7;
                var1['voiceChannelId'] = var9;
                var1['currentUserId'] = var5;
                var1['channelActivities'] = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isNotNullish;
                var4 = var4.bind(var5)(var10);
                if(var4) { _fun0015_ip = 111; continue _fun0015 }
case 62:
                var4 = _closure1_slot4;
                _fun0015_ip = 63; continue _fun0015;
case 111:
                var9 = _closure1_slot3;
                var5 = var9.getEmbeddedActivitiesForChannel;
                var4 = var5.bind(var9)(var10);
case 63:
                var1['connectedChannelActivities'] = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isNotNullish;
                var5 = var4.bind(var5)(var7);
                var4 = null;
                if(!var5) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                var6 = _closure1_slot3;
                var5 = var6.getSelfEmbeddedActivityForLocation;
                var4 = var5.bind(var6)(var7);
case 112:
                var1['userConnectedActivity'] = var4;
                var1['voiceChannelActivities'] = var3;
                var3 = _closure1_slot5;
                var2 = var3.getConnectedFrame;
                var2 = var2.bind(var3)();
                var1['connectedFrame'] = var2;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                var2 = var1.connectedActivityLocation;
                var15 = var1.voiceChannelId;
                var3 = var1.currentUserId;
                var _closure3_slot0 = var3;
                var5 = var1.channelActivities;
                var3 = var1.connectedChannelActivities;
                var10 = var1.userConnectedActivity;
                var _closure3_slot1 = var10;
                var9 = var1.voiceChannelActivities;
                var6 = var1.connectedFrame;
                var7 = var9.some;
                var1 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.applicationId;
                        var5 = _closure3_slot1;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0017_ip = 114; continue _fun0017 }
case 78:
                        var5 = _closure3_slot1;
                        var1 = var5.applicationId;
case 114:
                        var1 = var4 === var1;
                        if(!var1) { _fun0017_ip = 115; continue _fun0017 }
case 31:
                        var3 = var3.launchId;
                        var2 = _closure3_slot1;
                        var2 = var2.launchId;
                        var1 = var3 === var2;
case 115:
                        return var1;
                    }
                };
                var8 = var7.bind(var9)(var1);
                var13 = _closure1_slot0;
                var1 = _closure1_slot1;
                var12 = 25;
                var1 = var1[var12];
                var11 = undefined;
                var13 = var13.bind(var11)(var1);
                var1 = var13.isNotNullish;
                var13 = var1.bind(var13)(var15);
                var1 = undefined;
                if(!var13) { _fun0016_ip = 116; continue _fun0016 }
case 48:
                var16 = var4.voiceChannelActivities;
                var15 = var16.find;
                var13 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13 = var15.bind(var16)(var13);
                var15 = var9.find;
                var14 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var14 = var15.bind(var9)(var14);
                var15 = var4.voiceChannelActivities;
                var15 = var15.length;
                var9 = var9.length;
                var15 = var15 < var9;
                if(!var15) { _fun0016_ip = 117; continue _fun0016 }
case 118:
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var12];
                var17 = var16.bind(var11)(var9);
                var16 = var17.isNotNullish;
                var9 = var4.voiceChannelId;
                var15 = var16.bind(var17)(var9);
case 117:
                var9 = undefined;
                if(!var15) { _fun0016_ip = 119; continue _fun0016 }
case 120:
                var9 = 'activity_launch';
case 119:
                var15 = var11 === var14;
                if(!var15) { _fun0016_ip = 121; continue _fun0016 }
case 122:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var13);
case 121:
                if(!var15) { _fun0016_ip = 123; continue _fun0016 }
case 124:
                var9 = 'activity_end';
case 123:
                var15 = var11 === var13;
                if(!var15) { _fun0016_ip = 125; continue _fun0016 }
case 126:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var14);
case 125:
                if(!var15) { _fun0016_ip = 127; continue _fun0016 }
case 128:
                var16 = var14.userIds;
                var17 = var16.size;
                var16 = 1;
                var15 = var17 > var16;
case 127:
                if(!var15) { _fun0016_ip = 129; continue _fun0016 }
case 130:
                var9 = 'activity_user_join';
case 129:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var12];
                var16 = var16.bind(var11)(var15);
                var15 = var16.isNotNullish;
                var15 = var15.bind(var16)(var14);
                if(!var15) { _fun0016_ip = 131; continue _fun0016 }
case 132:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var13);
case 131:
                var1 = var9;
                if(!var15) { _fun0016_ip = 116; continue _fun0016 }
case 133:
                var15 = var14.userIds;
                var16 = var15.size;
                var15 = var13.userIds;
                var15 = var15.size;
                if(!(var16 > var15)) { _fun0016_ip = 134; continue _fun0016 }
case 135:
                var9 = 'activity_user_join';
case 134:
                var14 = var14.userIds;
                var14 = var14.size;
                var13 = var13.userIds;
                var13 = var13.size;
                if(!(var14 < var13)) { _fun0016_ip = 136; continue _fun0016 }
case 137:
                var9 = 'activity_user_left';
case 136:
                var1 = var9;
case 116:
                var9 = var1;
                if(var8) { _fun0016_ip = 138; continue _fun0016 }
case 67:
                var8 = var4.connectedChannelActivities;
                var8 = var8.length;
                var3 = var3.length;
                var3 = var8 < var3;
                if(!var3) { _fun0016_ip = 139; continue _fun0016 }
case 140:
                var8 = var4.channelActivities;
                var8 = var8.length;
                var5 = var5.length;
                var3 = var8 < var5;
case 139:
                if(!var3) { _fun0016_ip = 141; continue _fun0016 }
case 142:
                var1 = 'activity_launch';
case 141:
                var3 = var4.userConnectedActivity;
                var5 = null;
                var5 = var5 == var10;
                if(!var5) { _fun0016_ip = 143; continue _fun0016 }
case 144:
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var12];
                var13 = var13.bind(var11)(var8);
                var8 = var13.isNotNullish;
                var5 = var8.bind(var13)(var3);
case 143:
                if(!var5) { _fun0016_ip = 145; continue _fun0016 }
case 146:
                var1 = 'activity_end';
case 145:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var12];
                var8 = var8.bind(var11)(var5);
                var5 = var8.isNotNullish;
                var5 = var5.bind(var8)(var10);
                if(!var5) { _fun0016_ip = 147; continue _fun0016 }
case 148:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var12];
                var8 = var8.bind(var11)(var7);
                var7 = var8.isNotNullish;
                var5 = var7.bind(var8)(var3);
case 147:
                var9 = var1;
                if(!var5) { _fun0016_ip = 138; continue _fun0016 }
case 149:
                var5 = var10.userIds;
                var7 = var5.size;
                var5 = var3.userIds;
                var5 = var5.size;
                if(!(var7 > var5)) { _fun0016_ip = 150; continue _fun0016 }
case 151:
                var1 = 'activity_user_join';
case 150:
                var5 = var10.userIds;
                var5 = var5.size;
                var3 = var3.userIds;
                var3 = var3.size;
                if(!(var5 < var3)) { _fun0016_ip = 152; continue _fun0016 }
case 153:
                var1 = 'activity_user_left';
case 152:
                var9 = var1;
case 138:
                var5 = null;
                var1 = var5 != var9;
                if(var1) { _fun0016_ip = 154; continue _fun0016 }
case 155:
                var3 = var4.connectedActivityLocation;
                var3 = var5 == var3;
                if(!var3) { _fun0016_ip = 156; continue _fun0016 }
case 157:
                var3 = var5 == var2;
case 156:
                var1 = var3;
case 154:
                var3 = var9;
                if(var1) { _fun0016_ip = 158; continue _fun0016 }
case 159:
                var1 = var4.connectedActivityLocation;
                if(!(var5 == var1)) { _fun0016_ip = 160; continue _fun0016 }
case 161:
                var7 = var5 != var2;
                var1 = 'activity_launch';
                if(var7) { _fun0016_ip = 162; continue _fun0016 }
case 160:
                var7 = var4.connectedActivityLocation;
                if(!(var5 != var7)) { _fun0016_ip = 163; continue _fun0016 }
case 164:
                var7 = var5 == var2;
                var2 = 'activity_end';
                if(var7) { _fun0016_ip = 165; continue _fun0016 }
case 163:
                var8 = var5 != var10;
                if(!var8) { _fun0016_ip = 166; continue _fun0016 }
case 167:
                var7 = var4.userConnectedActivity;
                var8 = var5 != var7;
case 166:
                var7 = var9;
                if(!var8) { _fun0016_ip = 168; continue _fun0016 }
case 169:
                var8 = var4.userConnectedActivity;
                var8 = var8.userIds;
                var11 = var8.size;
                var8 = var10.userIds;
                var8 = var8.size;
                var11 = var11 < var8;
                var8 = 'activity_user_join';
                if(var11) { _fun0016_ip = 170; continue _fun0016 }
case 171:
                var11 = var4.userConnectedActivity;
                var11 = var11.userIds;
                var11 = var11.size;
                var10 = var10.userIds;
                var10 = var10.size;
                if(!(var11 > var10)) { _fun0016_ip = 172; continue _fun0016 }
case 173:
                var9 = 'activity_user_leave';
case 172:
                var8 = var9;
case 170:
                var7 = var8;
case 168:
                var2 = var7;
case 165:
                var1 = var2;
case 162:
                var3 = var1;
case 158:
                var2 = var5 != var3;
                if(var2) { _fun0016_ip = 174; continue _fun0016 }
case 175:
                var1 = var4.connectedFrame;
                var1 = var5 == var1;
                if(!var1) { _fun0016_ip = 176; continue _fun0016 }
case 177:
                var1 = var5 == var6;
case 176:
                var2 = var1;
case 174:
                var1 = var3;
                if(var2) { _fun0016_ip = 178; continue _fun0016 }
case 179:
                var2 = var4.connectedFrame;
                if(!(var5 == var2)) { _fun0016_ip = 180; continue _fun0016 }
case 181:
                var7 = var5 != var6;
                var2 = 'activity_launch';
                if(var7) { _fun0016_ip = 182; continue _fun0016 }
case 180:
                var4 = var4.connectedFrame;
                var4 = var5 != var4;
                if(!var4) { _fun0016_ip = 183; continue _fun0016 }
case 184:
                var4 = var5 == var6;
case 183:
                if(!var4) { _fun0016_ip = 185; continue _fun0016 }
case 186:
                var3 = 'activity_end';
case 185:
                var2 = var3;
case 182:
                var1 = var2;
case 178:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot33 = var4;
    var7 = function VoiceFilter() {
        var5 = _closure1_slot37;
        var2 = _closure1_slot13;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot13;
            var1 = var2.getActiveVoiceFilter;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                if(!(var3 === var1)) { _fun0018_ip = 54; continue _fun0018 }
case 52:
                var2 = undefined;
                return var2;
case 54:
                var2 = null;
                var4 = var2 != var1;
                var1 = 'voice_filter_off';
                if(!var4) { _fun0018_ip = 79; continue _fun0018 }
case 187:
                var3 = var2 != var3;
                var2 = 'voice_filter_on';
                if(!var3) { _fun0018_ip = 188; continue _fun0018 }
case 31:
                var2 = 'voice_filter_swap';
case 188:
                var1 = var2;
case 79:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot34 = var4;
    var7 = function PriorityVAD() {
        var5 = _closure1_slot37;
        var2 = _closure1_slot17;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot17;
            var1 = var2.isCurrentUserPrioritySpeaker;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0019_ip = 51; continue _fun0019 }
case 52:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0019_ip = 51; continue _fun0019 }
case 13:
                if(var1) { _fun0019_ip = 51; continue _fun0019 }
case 22:
                var1 = 'ptt_stop';
                if(!var2) { _fun0019_ip = 40; continue _fun0019 }
case 53:
                var1 = 'ptt_start';
case 40:
                return var1;
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot35 = var4;
    var7 = function HangStatusSounds() {
        var6 = _closure1_slot37;
        var3 = _closure1_slot7;
        var5 = new Array(2);
        var5[0] = var3;
        var2 = _closure1_slot16;
        var5[1] = var2;
        var11 = undefined;
        var9 = function() {
            var1 = {};
            var4 = _closure1_slot7;
            var3 = var4.getCurrentHangStatus;
            var3 = var3.bind(var4)();
            var1['hangStatus'] = var3;
            var4 = _closure1_slot7;
            var3 = var4.getCustomHangStatus;
            var3 = var3.bind(var4)();
            var1['customHangStatus'] = var3;
            var4 = _closure1_slot7;
            var3 = var4.getGameActivityHangStatus;
            var3 = var3.bind(var4)();
            var1['gameActivityHangStatus'] = var3;
            var3 = _closure1_slot16;
            var2 = var3.getVoiceChannelId;
            var3 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var3;
            var1['inVoice'] = var2;
            return var1;
        };
        var8 = function(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                var6 = var1.hangStatus;
                var8 = var1.customHangStatus;
                var5 = var1.gameActivityHangStatus;
                var1 = var4.inVoice;
                if(var1) { _fun0020_ip = 80; continue _fun0020 }
case 189:
                var1 = undefined;
                return var1;
case 80:
                var3 = null;
                if(!(var3 != var6)) { _fun0020_ip = 115; continue _fun0020 }
case 190:
                var2 = var4.hangStatus;
                var1 = 'hang_status_select';
                if(!(var6 === var2)) { _fun0020_ip = 191; continue _fun0020 }
case 115:
                if(!(var3 != var8)) { _fun0020_ip = 68; continue _fun0020 }
case 32:
                var10 = var8.status;
                var2 = var4.customHangStatus;
                var7 = var3 == var2;
                var6 = undefined;
                var9 = undefined;
                if(var7) { _fun0020_ip = 29; continue _fun0020 }
case 192:
                var9 = var2.status;
case 29:
                var7 = 'hang_status_select';
                var2 = var7;
                if(!(var10 === var9)) { _fun0020_ip = 73; continue _fun0020 }
case 193:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 26;
                var9 = var11[var9];
                var10 = var10.bind(var6)(var9);
                var9 = var10.isEqual;
                var8 = var8.emoji;
                var11 = var4.customHangStatus;
                var12 = var3 == var11;
                var6 = undefined;
                if(var12) { _fun0020_ip = 194; continue _fun0020 }
case 44:
                var6 = var11.emoji;
case 194:
                var6 = var9.bind(var10)(var8, var6);
                var2 = var7;
                if(!var6) { _fun0020_ip = 73; continue _fun0020 }
case 68:
                var7 = var3 != var5;
                var3 = undefined;
                if(!var7) { _fun0020_ip = 55; continue _fun0020 }
case 195:
                var4 = var4.gameActivityHangStatus;
                var3 = undefined;
                if(!(var4 !== var5)) { _fun0020_ip = 55; continue _fun0020 }
case 196:
                var3 = 'hang_status_select';
case 55:
                var2 = var3;
case 73:
                var1 = var2;
case 191:
                return var1;
            }
        };
        var7 = 0.15;
        var10 = var5;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        var1 = null;
        return var1;
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot36 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_common/SoundPlayer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SoundPlayer() {
        var4 = _closure1_slot24;
        var3 = _closure1_slot23;
        var2 = {};
        var6 = _closure1_slot25;
        var1 = new Array(12);
        var1[0] = var6;
        var6 = _closure1_slot26;
        var1[1] = var6;
        var6 = _closure1_slot27;
        var1[2] = var6;
        var6 = _closure1_slot28;
        var1[3] = var6;
        var6 = _closure1_slot29;
        var1[4] = var6;
        var6 = _closure1_slot30;
        var1[5] = var6;
        var6 = _closure1_slot31;
        var1[6] = var6;
        var6 = _closure1_slot32;
        var1[7] = var6;
        var6 = _closure1_slot33;
        var1[8] = var6;
        var6 = _closure1_slot34;
        var1[9] = var6;
        var6 = _closure1_slot35;
        var1[10] = var6;
        var5 = _closure1_slot36;
        var1[11] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();