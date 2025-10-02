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
    var _closure1_slot26 = var1;
    var1 = function MuteDeafen() {
        var5 = _closure1_slot26;
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
    var _closure1_slot27 = var1;
    var1 = function Camera() {
        var5 = _closure1_slot26;
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
    var _closure1_slot28 = var1;
    var1 = function RTCConnect() {
        var5 = _closure1_slot26;
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
    var _closure1_slot29 = var1;
    var1 = function Speaking() {
        var5 = _closure1_slot26;
        var2 = _closure1_slot17;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot17;
            var1 = var2.isCurrentUserSpeaking;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
                var3 = var3.PUSH_TO_TALK;
                if(!(var4 === var3)) { _fun0006_ip = 49; continue _fun0006 }
case 13:
                if(var1) { _fun0006_ip = 49; continue _fun0006 }
case 22:
                var1 = 'ptt_stop';
                if(!var2) { _fun0006_ip = 40; continue _fun0006 }
case 51:
                var1 = 'ptt_start';
case 40:
                return var1;
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function VoiceFilter() {
        var5 = _closure1_slot26;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                if(!(var3 === var1)) { _fun0007_ip = 52; continue _fun0007 }
case 50:
                var2 = undefined;
                return var2;
case 52:
                var2 = null;
                var4 = var2 != var1;
                var1 = 'voice_filter_off';
                if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var3 = var2 != var3;
                var2 = 'voice_filter_on';
                if(!var3) { _fun0007_ip = 55; continue _fun0007 }
case 31:
                var2 = 'voice_filter_swap';
case 55:
                var1 = var2;
case 53:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function SelfMutedTemporarily() {
        var5 = _closure1_slot26;
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
                if(!(var1 !== var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0008_ip = 49; continue _fun0008 }
case 13:
                if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 22:
                var1 = 'ptt_start';
                if(!var2) { _fun0008_ip = 40; continue _fun0008 }
case 51:
                var1 = 'ptt_stop';
case 40:
                return var1;
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function PriorityVAD() {
        var5 = _closure1_slot26;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0009_ip = 49; continue _fun0009 }
case 13:
                if(var1) { _fun0009_ip = 49; continue _fun0009 }
case 22:
                var1 = 'ptt_stop';
                if(!var2) { _fun0009_ip = 40; continue _fun0009 }
case 51:
                var1 = 'ptt_start';
case 40:
                return var1;
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function UserHasBeenMoved() {
        var5 = _closure1_slot26;
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 === var1)) { _fun0010_ip = 52; continue _fun0010 }
case 50:
                var1 = undefined;
                return var1;
case 52:
                var1 = 'user_moved';
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function UserInvitedToSpeak() {
        var5 = _closure1_slot26;
        var3 = _closure1_slot16;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot18;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot16;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0011_ip = 56; continue _fun0011 }
case 57:
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
case 56:
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0012_ip = 53; continue _fun0012 }
case 50:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 22;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if(!(var2 !== var1)) { _fun0012_ip = 13; continue _fun0012 }
case 53:
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
    var _closure1_slot35 = var1;
    var1 = function VoiceChannel() {
        var5 = _closure1_slot26;
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                if(!var4) { _fun0013_ip = 58; continue _fun0013 }
case 25:
                var10 = _closure1_slot11;
                var4 = var10.getChannel;
                var4 = var4.bind(var10)(var8);
                var10 = var5 != var4;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var10) { _fun0013_ip = 58; continue _fun0013 }
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
                if(!var15) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                var10 = 1;
case 59:
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
case 58:
                var10 = var2.length;
                var4 = 1;
                if(!(var4 !== var10)) { _fun0013_ip = 61; continue _fun0013 }
case 62:
                var10 = _closure1_slot9;
                var4 = var10.getCurrentUserActiveStream;
                var13 = var4.bind(var10)();
                _fun0013_ip = 63; continue _fun0013;
case 61:
                var4 = 0;
                var13 = var2[var4];
case 63:
                var4 = var5 == var13;
                var10 = undefined;
                if(var4) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                var10 = var13.state;
case 64:
                var4 = _closure1_slot21;
                var4 = var4.CONNECTING;
                if(!(var10 === var4)) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                var13 = null;
case 66:
                var10 = var5 != var13;
                var5 = null;
                var4 = 0;
                if(!var10) { _fun0013_ip = 68; continue _fun0013 }
case 69:
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
case 68:
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                if(!(var3 === var13)) { _fun0014_ip = 70; continue _fun0014 }
case 26:
                var6 = null;
                if(!(var6 != var13)) { _fun0014_ip = 70; continue _fun0014 }
case 18:
                var12 = _closure1_slot11;
                var10 = var12.getChannel;
                var13 = var10.bind(var12)(var13);
                var12 = var6 == var13;
                var10 = false;
                if(var12) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                var12 = var13.getGuildId;
                var15 = var12.bind(var13)();
                var12 = var6 == var15;
                var10 = false;
                if(var12) { _fun0014_ip = 71; continue _fun0014 }
case 73:
                var14 = _closure1_slot12;
                var12 = var14.getGuild;
                var14 = var12.bind(var14)(var15);
                var12 = var6 != var14;
                if(!var12) { _fun0014_ip = 74; continue _fun0014 }
case 44:
                var14 = var14.afkChannelId;
                var13 = var13.id;
                var12 = var14 === var13;
case 74:
                var10 = var12;
case 71:
                if(var10) { _fun0014_ip = 70; continue _fun0014 }
case 75:
                if(!(var6 != var11)) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                var10 = _closure1_slot8;
                var3 = var10.has;
                var3 = var3.bind(var10)(var11);
                if(var3) { _fun0014_ip = 70; continue _fun0014 }
case 76:
                var10 = var6 != var4;
                if(!var10) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                var3 = var8.singleActiveStreamKey;
                var10 = var3 === var4;
case 78:
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
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var1 = var1.bind(var2)(var5);
                        var1 = !var1;
                        if(!var1) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                        var2 = _closure3_slot2;
                        var2 = var5 === var2;
                        if(var2) { _fun0015_ip = 53; continue _fun0015 }
case 82:
                        var4 = _closure3_slot3;
                        var3 = var4.includes;
                        var2 = var3.bind(var4)(var5);
case 53:
                        var1 = var2;
case 80:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = 'stream_started';
                if(var3) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                var3 = 'stream_ended';
                if(var4) { _fun0014_ip = 85; continue _fun0014 }
case 86:
                var4 = var8.singleActiveStreamViewerCount;
                var11 = 25;
                if(!(var4 <= var11)) { _fun0014_ip = 87; continue _fun0014 }
case 88:
                if(!var10) { _fun0014_ip = 87; continue _fun0014 }
case 89:
                var4 = var8.singleActiveStreamViewerCount;
                var5 = var9 > var4;
                var4 = 'stream_user_joined';
                if(var5) { _fun0014_ip = 90; continue _fun0014 }
case 87:
                var5 = var8.voiceChannelUserCount;
                if(!(var6 != var5)) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                if(!(var6 != var7)) { _fun0014_ip = 91; continue _fun0014 }
case 93:
                var5 = var8.voiceChannelUserCount;
                if(!(var5 <= var11)) { _fun0014_ip = 91; continue _fun0014 }
case 94:
                var5 = var8.voiceChannelUserCount;
                var12 = var7 > var5;
                var5 = 'user_join';
                if(var12) { _fun0014_ip = 95; continue _fun0014 }
case 91:
                var12 = var8.voiceChannelUserCount;
                if(!(var6 != var12)) { _fun0014_ip = 96; continue _fun0014 }
case 97:
                if(!(var6 != var7)) { _fun0014_ip = 96; continue _fun0014 }
case 98:
                var6 = var8.voiceChannelUserCount;
                if(!(var6 <= var11)) { _fun0014_ip = 96; continue _fun0014 }
case 99:
                var6 = var8.voiceChannelUserCount;
                var7 = var7 < var6;
                var6 = 'user_leave';
                if(var7) { _fun0014_ip = 100; continue _fun0014 }
case 96:
                var7 = var8.singleActiveStreamViewerCount;
                var11 = var7 <= var11;
                var7 = undefined;
                if(!var11) { _fun0014_ip = 101; continue _fun0014 }
case 102:
                var7 = undefined;
                if(!var10) { _fun0014_ip = 101; continue _fun0014 }
case 103:
                var8 = var8.singleActiveStreamViewerCount;
                var8 = var9 < var8;
                var7 = undefined;
                if(!var8) { _fun0014_ip = 101; continue _fun0014 }
case 104:
                var7 = 'stream_user_left';
case 101:
                var6 = var7;
case 100:
                var5 = var6;
case 95:
                var4 = var5;
case 90:
                var3 = var4;
case 85:
                var2 = var3;
case 83:
                return var2;
case 70:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function ActivitySounds() {
        var5 = _closure1_slot26;
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                if(var1) { _fun0016_ip = 105; continue _fun0016 }
case 106:
                var4 = _closure1_slot4;
                _fun0016_ip = 107; continue _fun0016;
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
                if(var1) { _fun0016_ip = 108; continue _fun0016 }
case 109:
                var3 = _closure1_slot4;
                _fun0016_ip = 110; continue _fun0016;
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
                if(var4) { _fun0016_ip = 111; continue _fun0016 }
case 65:
                var4 = _closure1_slot4;
                _fun0016_ip = 66; continue _fun0016;
case 111:
                var9 = _closure1_slot3;
                var5 = var9.getEmbeddedActivitiesForChannel;
                var4 = var5.bind(var9)(var10);
case 66:
                var1['connectedChannelActivities'] = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isNotNullish;
                var5 = var4.bind(var5)(var7);
                var4 = null;
                if(!var5) { _fun0016_ip = 112; continue _fun0016 }
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.applicationId;
                        var5 = _closure3_slot1;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0018_ip = 114; continue _fun0018 }
case 81:
                        var5 = _closure3_slot1;
                        var1 = var5.applicationId;
case 114:
                        var1 = var4 === var1;
                        if(!var1) { _fun0018_ip = 115; continue _fun0018 }
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
                if(!var13) { _fun0017_ip = 116; continue _fun0017 }
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
                if(!var15) { _fun0017_ip = 117; continue _fun0017 }
case 110:
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var12];
                var17 = var16.bind(var11)(var9);
                var16 = var17.isNotNullish;
                var9 = var4.voiceChannelId;
                var15 = var16.bind(var17)(var9);
case 117:
                var9 = undefined;
                if(!var15) { _fun0017_ip = 118; continue _fun0017 }
case 119:
                var9 = 'activity_launch';
case 118:
                var15 = var11 === var14;
                if(!var15) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var13);
case 120:
                if(!var15) { _fun0017_ip = 122; continue _fun0017 }
case 123:
                var9 = 'activity_end';
case 122:
                var15 = var11 === var13;
                if(!var15) { _fun0017_ip = 124; continue _fun0017 }
case 125:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var14);
case 124:
                if(!var15) { _fun0017_ip = 126; continue _fun0017 }
case 112:
                var16 = var14.userIds;
                var17 = var16.size;
                var16 = 1;
                var15 = var17 > var16;
case 126:
                if(!var15) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                var9 = 'activity_user_join';
case 127:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var12];
                var16 = var16.bind(var11)(var15);
                var15 = var16.isNotNullish;
                var15 = var15.bind(var16)(var14);
                if(!var15) { _fun0017_ip = 129; continue _fun0017 }
case 130:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var13);
case 129:
                var1 = var9;
                if(!var15) { _fun0017_ip = 116; continue _fun0017 }
case 131:
                var15 = var14.userIds;
                var16 = var15.size;
                var15 = var13.userIds;
                var15 = var15.size;
                if(!(var16 > var15)) { _fun0017_ip = 132; continue _fun0017 }
case 133:
                var9 = 'activity_user_join';
case 132:
                var14 = var14.userIds;
                var14 = var14.size;
                var13 = var13.userIds;
                var13 = var13.size;
                if(!(var14 < var13)) { _fun0017_ip = 134; continue _fun0017 }
case 135:
                var9 = 'activity_user_left';
case 134:
                var1 = var9;
case 116:
                var9 = var1;
                if(var8) { _fun0017_ip = 136; continue _fun0017 }
case 137:
                var8 = var4.connectedChannelActivities;
                var8 = var8.length;
                var3 = var3.length;
                var3 = var8 < var3;
                if(!var3) { _fun0017_ip = 138; continue _fun0017 }
case 139:
                var8 = var4.channelActivities;
                var8 = var8.length;
                var5 = var5.length;
                var3 = var8 < var5;
case 138:
                if(!var3) { _fun0017_ip = 140; continue _fun0017 }
case 141:
                var1 = 'activity_launch';
case 140:
                var3 = var4.userConnectedActivity;
                var5 = null;
                var5 = var5 == var10;
                if(!var5) { _fun0017_ip = 142; continue _fun0017 }
case 143:
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var12];
                var13 = var13.bind(var11)(var8);
                var8 = var13.isNotNullish;
                var5 = var8.bind(var13)(var3);
case 142:
                if(!var5) { _fun0017_ip = 144; continue _fun0017 }
case 145:
                var1 = 'activity_end';
case 144:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var12];
                var8 = var8.bind(var11)(var5);
                var5 = var8.isNotNullish;
                var5 = var5.bind(var8)(var10);
                if(!var5) { _fun0017_ip = 146; continue _fun0017 }
case 147:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var12];
                var8 = var8.bind(var11)(var7);
                var7 = var8.isNotNullish;
                var5 = var7.bind(var8)(var3);
case 146:
                var9 = var1;
                if(!var5) { _fun0017_ip = 136; continue _fun0017 }
case 148:
                var5 = var10.userIds;
                var7 = var5.size;
                var5 = var3.userIds;
                var5 = var5.size;
                if(!(var7 > var5)) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                var1 = 'activity_user_join';
case 149:
                var5 = var10.userIds;
                var5 = var5.size;
                var3 = var3.userIds;
                var3 = var3.size;
                if(!(var5 < var3)) { _fun0017_ip = 151; continue _fun0017 }
case 152:
                var1 = 'activity_user_left';
case 151:
                var9 = var1;
case 136:
                var5 = null;
                var1 = var5 != var9;
                if(var1) { _fun0017_ip = 153; continue _fun0017 }
case 154:
                var3 = var4.connectedActivityLocation;
                var3 = var5 == var3;
                if(!var3) { _fun0017_ip = 155; continue _fun0017 }
case 156:
                var3 = var5 == var2;
case 155:
                var1 = var3;
case 153:
                var3 = var9;
                if(var1) { _fun0017_ip = 157; continue _fun0017 }
case 158:
                var1 = var4.connectedActivityLocation;
                if(!(var5 == var1)) { _fun0017_ip = 159; continue _fun0017 }
case 160:
                var7 = var5 != var2;
                var1 = 'activity_launch';
                if(var7) { _fun0017_ip = 161; continue _fun0017 }
case 159:
                var7 = var4.connectedActivityLocation;
                if(!(var5 != var7)) { _fun0017_ip = 162; continue _fun0017 }
case 163:
                var7 = var5 == var2;
                var2 = 'activity_end';
                if(var7) { _fun0017_ip = 164; continue _fun0017 }
case 162:
                var8 = var5 != var10;
                if(!var8) { _fun0017_ip = 165; continue _fun0017 }
case 166:
                var7 = var4.userConnectedActivity;
                var8 = var5 != var7;
case 165:
                var7 = var9;
                if(!var8) { _fun0017_ip = 167; continue _fun0017 }
case 168:
                var8 = var4.userConnectedActivity;
                var8 = var8.userIds;
                var11 = var8.size;
                var8 = var10.userIds;
                var8 = var8.size;
                var11 = var11 < var8;
                var8 = 'activity_user_join';
                if(var11) { _fun0017_ip = 169; continue _fun0017 }
case 170:
                var11 = var4.userConnectedActivity;
                var11 = var11.userIds;
                var11 = var11.size;
                var10 = var10.userIds;
                var10 = var10.size;
                if(!(var11 > var10)) { _fun0017_ip = 171; continue _fun0017 }
case 172:
                var9 = 'activity_user_leave';
case 171:
                var8 = var9;
case 169:
                var7 = var8;
case 167:
                var2 = var7;
case 164:
                var1 = var2;
case 161:
                var3 = var1;
case 157:
                var2 = var5 != var3;
                if(var2) { _fun0017_ip = 173; continue _fun0017 }
case 174:
                var1 = var4.connectedFrame;
                var1 = var5 == var1;
                if(!var1) { _fun0017_ip = 175; continue _fun0017 }
case 176:
                var1 = var5 == var6;
case 175:
                var2 = var1;
case 173:
                var1 = var3;
                if(var2) { _fun0017_ip = 177; continue _fun0017 }
case 178:
                var2 = var4.connectedFrame;
                if(!(var5 == var2)) { _fun0017_ip = 179; continue _fun0017 }
case 180:
                var7 = var5 != var6;
                var2 = 'activity_launch';
                if(var7) { _fun0017_ip = 181; continue _fun0017 }
case 179:
                var4 = var4.connectedFrame;
                var4 = var5 != var4;
                if(!var4) { _fun0017_ip = 182; continue _fun0017 }
case 183:
                var4 = var5 == var6;
case 182:
                if(!var4) { _fun0017_ip = 184; continue _fun0017 }
case 185:
                var3 = 'activity_end';
case 184:
                var2 = var3;
case 181:
                var1 = var2;
case 177:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function HangStatusSounds() {
        var6 = _closure1_slot26;
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                var6 = var1.hangStatus;
                var8 = var1.customHangStatus;
                var5 = var1.gameActivityHangStatus;
                var1 = var4.inVoice;
                if(var1) { _fun0019_ip = 82; continue _fun0019 }
case 186:
                var1 = undefined;
                return var1;
case 82:
                var3 = null;
                if(!(var3 != var6)) { _fun0019_ip = 115; continue _fun0019 }
case 187:
                var2 = var4.hangStatus;
                var1 = 'hang_status_select';
                if(!(var6 === var2)) { _fun0019_ip = 188; continue _fun0019 }
case 115:
                if(!(var3 != var8)) { _fun0019_ip = 189; continue _fun0019 }
case 32:
                var10 = var8.status;
                var2 = var4.customHangStatus;
                var7 = var3 == var2;
                var6 = undefined;
                var9 = undefined;
                if(var7) { _fun0019_ip = 29; continue _fun0019 }
case 190:
                var9 = var2.status;
case 29:
                var7 = 'hang_status_select';
                var2 = var7;
                if(!(var10 === var9)) { _fun0019_ip = 191; continue _fun0019 }
case 192:
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
                if(var12) { _fun0019_ip = 193; continue _fun0019 }
case 194:
                var6 = var11.emoji;
case 193:
                var6 = var9.bind(var10)(var8, var6);
                var2 = var7;
                if(!var6) { _fun0019_ip = 191; continue _fun0019 }
case 189:
                var7 = var3 != var5;
                var3 = undefined;
                if(!var7) { _fun0019_ip = 195; continue _fun0019 }
case 196:
                var4 = var4.gameActivityHangStatus;
                var3 = undefined;
                if(!(var4 !== var5)) { _fun0019_ip = 195; continue _fun0019 }
case 197:
                var3 = 'hang_status_select';
case 195:
                var2 = var3;
case 191:
                var1 = var2;
case 188:
                return var1;
            }
        };
        var7 = 0.15;
        var10 = var5;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        var1 = null;
        return var1;
    };
    var _closure1_slot38 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot23 = var7;
    var7 = var4.Fragment;
    var _closure1_slot24 = var7;
    var4 = var4.jsxs;
    var _closure1_slot25 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_common/SoundPlayer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SoundPlayer() {
        var4 = _closure1_slot25;
        var3 = _closure1_slot24;
        var2 = {};
        var8 = _closure1_slot23;
        var7 = _closure1_slot27;
        var1 = undefined;
        var5 = {};
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(12);
        var5[0] = var7;
        var9 = _closure1_slot28;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[1] = var7;
        var9 = _closure1_slot29;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[2] = var7;
        var9 = _closure1_slot30;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[3] = var7;
        var9 = _closure1_slot32;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[4] = var7;
        var9 = _closure1_slot34;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[5] = var7;
        var9 = _closure1_slot36;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[6] = var7;
        var9 = _closure1_slot35;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[7] = var7;
        var9 = _closure1_slot37;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[8] = var7;
        var9 = _closure1_slot31;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[9] = var7;
        var9 = _closure1_slot33;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[10] = var7;
        var7 = _closure1_slot38;
        var6 = {};
        var6 = var8.bind(var1)(var7, var6);
        var5[11] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();