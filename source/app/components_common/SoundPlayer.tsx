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
            var3 = 18;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.BatchedStoreListener;
            var8 = _closure2_slot0;
            var2 = var5.prototype;
            var3 = Object.create(var2, {constructor: {value: var5}});
            var7 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var2.bind(var1)();
                    var5 = _closure2_slot2;
                    var4 = _closure3_slot0;
                    var7 = var5.bind(var1)(var4, var3);
                    var9 = null;
                    var4 = var9 == var7;
                    if(var4) { _fun0001_ip = 57; continue _fun0001 }
 39:
                    var6 = _closure1_slot13;
                    var5 = var6.isSoundDisabled;
                    var4 = var5.bind(var6)(var7);
 57:
                    if(var4) { _fun0001_ip = 120; continue _fun0001 }
 60:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 19;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.playSound;
                    var4 = _closure2_slot3;
                    var9 = var9 != var4;
                    var4 = 0.4;
                    if(!var9) { _fun0001_ip = 114; continue _fun0001 }
 110:
                    var4 = _closure2_slot3;
 114:
                    var4 = var5.bind(var6)(var7, var4);
 120:
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
    var _closure1_slot25 = var1;
    var1 = function MuteDeafen() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot12;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot15;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            var1 = {};
            var4 = _closure1_slot15;
            var3 = var4.getVoiceChannelId;
            var4 = var3.bind(var4)();
            var3 = null;
            var3 = var3 != var4;
            var1['inVoiceChannel'] = var3;
            var4 = _closure1_slot12;
            var3 = var4.isSelfMute;
            var3 = var3.bind(var4)();
            var1['selfMute'] = var3;
            var4 = _closure1_slot12;
            var3 = var4.isSelfDeaf;
            var3 = var3.bind(var4)();
            var1['selfDeaf'] = var3;
            var4 = _closure1_slot12;
            var3 = var4.isNativeAudioPermissionReady;
            var3 = var3.bind(var4)();
            var1['audioPermissionReady'] = var3;
            var3 = _closure1_slot12;
            var2 = var3.shouldSkipMuteUnmuteSound;
            var2 = var2.bind(var3)();
            var1['shouldSkipMuteUnmuteSound'] = var2;
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var3 = arg2;
                var5 = var3.inVoiceChannel;
                var4 = var3.selfMute;
                var2 = var3.selfDeaf;
                var6 = var3.audioPermissionReady;
                var3 = var3.shouldSkipMuteUnmuteSound;
                if(!var5) { _fun0002_ip = 64; continue _fun0002 }
 39:
                var7 = var1.selfDeaf;
                if(!(var7 === var2)) { _fun0002_ip = 122; continue _fun0002 }
 49:
                if(!var6) { _fun0002_ip = 64; continue _fun0002 }
 52:
                if(var5) { _fun0002_ip = 68; continue _fun0002 }
 55:
                var5 = var1.audioPermissionReady;
                if(var5) { _fun0002_ip = 68; continue _fun0002 }
 64:
                var5 = undefined;
                return var5;
 68:
                var5 = var1.selfMute;
                var1 = undefined;
                if(!(var5 !== var4)) { _fun0002_ip = 120; continue _fun0002 }
 80:
                if(var3) { _fun0002_ip = 96; continue _fun0002 }
 83:
                var3 = 'unmute';
                if(!var4) { _fun0002_ip = 94; continue _fun0002 }
 90:
                var3 = 'mute';
 94:
                _fun0002_ip = 117; continue _fun0002;
 96:
                var5 = _closure1_slot12;
                var4 = var5.notifyMuteUnmuteSoundWasSkipped;
                var4 = var4.bind(var5)();
                var3 = undefined;
 117:
                var1 = var3;
 120:
                return var1;
 122:
                var1 = 'undeafen';
                if(!var2) { _fun0002_ip = 133; continue _fun0002 }
 129:
                var1 = 'deafen';
 133:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function Camera() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot12;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot15;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            var1 = {};
            var4 = _closure1_slot12;
            var3 = var4.isVideoEnabled;
            var3 = var3.bind(var4)();
            var1['videoEnabled'] = var3;
            var3 = _closure1_slot15;
            var2 = var3.getVoiceChannelId;
            var3 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var3;
            var1['inVoiceChannel'] = var2;
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var2 = arg2;
                var3 = var2.videoEnabled;
                var2 = var2.inVoiceChannel;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 20;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isCameraToggleSoundEnabled;
                var5 = var5.bind(var6)();
                if(var5) { _fun0003_ip = 58; continue _fun0003 }
 56:
                return var4;
 58:
                var6 = var1.videoEnabled;
                var5 = var1.inVoiceChannel;
                var1 = undefined;
                if(!(var6 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
 76:
                var1 = undefined;
                if(!var5) { _fun0003_ip = 100; continue _fun0003 }
 81:
                var1 = undefined;
                if(!var2) { _fun0003_ip = 100; continue _fun0003 }
 86:
                var2 = 'camera_off';
                if(!var3) { _fun0003_ip = 97; continue _fun0003 }
 93:
                var2 = 'camera_on';
 97:
                var1 = var2;
 100:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function RTCConnect() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot10;
        var4 = new Array(4);
        var4[0] = var3;
        var3 = _closure1_slot14;
        var4[1] = var3;
        var3 = _closure1_slot15;
        var4[2] = var3;
        var2 = _closure1_slot5;
        var4[3] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot10;
                var3 = var4.getChannel;
                var5 = _closure1_slot15;
                var1 = var5.getVoiceChannelId;
                var1 = var1.bind(var5)();
                var4 = var3.bind(var4)(var1);
                var3 = null;
                var1 = var3 == var4;
                var7 = undefined;
                if(var1) { _fun0004_ip = 47; continue _fun0004 }
 42:
                var7 = var4.type;
 47:
                var1 = var3 == var4;
                var5 = undefined;
                if(var1) { _fun0004_ip = 66; continue _fun0004 }
 56:
                var1 = var4.getGuildId;
                var5 = var1.bind(var4)();
 66:
                var4 = _closure1_slot14;
                var1 = var4.getWasEverRtcConnected;
                var4 = var1.bind(var4)();
                var6 = _closure1_slot14;
                var1 = var6.getState;
                var6 = var1.bind(var6)();
                var1 = {};
                var1['channelType'] = var7;
                var1['guildId'] = var5;
                var5 = _closure1_slot21;
                var5 = var5.RTC_CONNECTED;
                var5 = var6 === var5;
                var1['connected'] = var5;
                var4 = !var4;
                if(!var4) { _fun0004_ip = 144; continue _fun0004 }
 130:
                var5 = _closure1_slot21;
                var5 = var5.DISCONNECTED;
                var4 = var6 !== var5;
 144:
                if(var4) { _fun0004_ip = 161; continue _fun0004 }
 147:
                var5 = _closure1_slot21;
                var5 = var5.RTC_CONNECTED;
                var4 = var6 === var5;
 161:
                var1['connectHasStarted'] = var4;
                var5 = _closure1_slot5;
                var4 = var5.getAwaitingRemoteSessionInfo;
                var4 = var4.bind(var5)();
                var4 = var3 != var4;
                var1['awaitingRemote'] = var4;
                var4 = _closure1_slot5;
                var2 = var4.getRemoteSessionId;
                var2 = var2.bind(var4)();
                var2 = var3 != var2;
                var1['connectedRemote'] = var2;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                if(var9) { _fun0005_ip = 66; continue _fun0005 }
 63:
                if(var7) { _fun0005_ip = 72; continue _fun0005 }
 66:
                if(!var1) { _fun0005_ip = 108; continue _fun0005 }
 69:
                if(var6) { _fun0005_ip = 108; continue _fun0005 }
 72:
                var6 = null;
                if(!(var6 != var8)) { _fun0005_ip = 98; continue _fun0005 }
 78:
                var7 = _closure1_slot7;
                var6 = var7.has;
                var6 = var6.bind(var7)(var8);
                if(var6) { _fun0005_ip = 104; continue _fun0005 }
 98:
                var6 = 'user_join';
                return var6;
 104:
                var6 = undefined;
                return var6;
 108:
                if(!var5) { _fun0005_ip = 156; continue _fun0005 }
 111:
                if(var4) { _fun0005_ip = 156; continue _fun0005 }
 114:
                if(var2) { _fun0005_ip = 152; continue _fun0005 }
 117:
                if(var1) { _fun0005_ip = 152; continue _fun0005 }
 120:
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 146; continue _fun0005 }
 126:
                var2 = _closure1_slot7;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0005_ip = 152; continue _fun0005 }
 146:
                var1 = 'disconnect';
                return var1;
 152:
                var1 = undefined;
                return var1;
 156:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function Speaking() {
        var5 = _closure1_slot25;
        var2 = _closure1_slot16;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot16;
            var1 = var2.isCurrentUserSpeaking;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0006_ip = 71; continue _fun0006 }
 10:
                var4 = _closure1_slot12;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot12;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot19;
                var3 = var3.PUSH_TO_TALK;
                if(!(var4 === var3)) { _fun0006_ip = 71; continue _fun0006 }
 55:
                if(var1) { _fun0006_ip = 71; continue _fun0006 }
 58:
                var1 = 'ptt_stop';
                if(!var2) { _fun0006_ip = 69; continue _fun0006 }
 65:
                var1 = 'ptt_start';
 69:
                return var1;
 71:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function VoiceFilter() {
        var5 = _closure1_slot25;
        var2 = _closure1_slot12;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot12;
            var1 = var2.getActiveVoiceFilter;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = arg2;
                if(!(var3 === var1)) { _fun0007_ip = 14; continue _fun0007 }
 10:
                var2 = undefined;
                return var2;
 14:
                var2 = null;
                var4 = var2 != var1;
                var1 = 'voice_filter_off';
                if(!var4) { _fun0007_ip = 51; continue _fun0007 }
 29:
                var3 = var2 != var3;
                var2 = 'voice_filter_on';
                if(!var3) { _fun0007_ip = 48; continue _fun0007 }
 42:
                var2 = 'voice_filter_swap';
 48:
                var1 = var2;
 51:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function SelfMutedTemporarily() {
        var5 = _closure1_slot25;
        var2 = _closure1_slot12;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot12;
            var1 = var2.isSelfMutedTemporarily;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0008_ip = 71; continue _fun0008 }
 10:
                var4 = _closure1_slot12;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot12;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot19;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0008_ip = 71; continue _fun0008 }
 55:
                if(var1) { _fun0008_ip = 71; continue _fun0008 }
 58:
                var1 = 'ptt_start';
                if(!var2) { _fun0008_ip = 69; continue _fun0008 }
 65:
                var1 = 'ptt_stop';
 69:
                return var1;
 71:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function PriorityVAD() {
        var5 = _closure1_slot25;
        var2 = _closure1_slot16;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var2 = _closure1_slot16;
            var1 = var2.isCurrentUserPrioritySpeaker;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0009_ip = 71; continue _fun0009 }
 10:
                var4 = _closure1_slot12;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot12;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot19;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0009_ip = 71; continue _fun0009 }
 55:
                if(var1) { _fun0009_ip = 71; continue _fun0009 }
 58:
                var1 = 'ptt_stop';
                if(!var2) { _fun0009_ip = 69; continue _fun0009 }
 65:
                var1 = 'ptt_start';
 69:
                return var1;
 71:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function UserHasBeenMoved() {
        var5 = _closure1_slot25;
        var2 = _closure1_slot17;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = undefined;
        var2 = function() {
            var1 = _closure1_slot17;
            var1 = var1.userHasBeenMovedVersion;
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 === var1)) { _fun0010_ip = 14; continue _fun0010 }
 10:
                var1 = undefined;
                return var1;
 14:
                var1 = 'user_moved';
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function UserInvitedToSpeak() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot15;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot17;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot15;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0011_ip = 73; continue _fun0011 }
 23:
                var3 = _closure1_slot17;
                var2 = var3.getVoiceStateForChannel;
                var4 = var2.bind(var3)(var4);
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getAudienceRequestToSpeakState;
                var2 = var2.bind(var3)(var4);
                return var2;
 73:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 21;
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
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0012_ip = 51; continue _fun0012 }
 10:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if(!(var2 !== var1)) { _fun0012_ip = 55; continue _fun0012 }
 51:
                var1 = undefined;
                return var1;
 55:
                var1 = 'reconnect';
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function VoiceChannel() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot15;
        var4 = new Array(5);
        var4[0] = var3;
        var3 = _closure1_slot8;
        var4[1] = var3;
        var3 = _closure1_slot9;
        var4[2] = var3;
        var3 = _closure1_slot17;
        var4[3] = var3;
        var2 = _closure1_slot10;
        var4[4] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = _closure1_slot15;
                var2 = var3.getVoiceChannelId;
                var8 = var2.bind(var3)();
                var3 = _closure1_slot9;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var _closure3_slot0 = var3;
                var12 = new Array(0);
                var4 = _closure1_slot8;
                var2 = var4.getAllActiveStreams;
                var2 = var2.bind(var4)();
                var5 = null;
                var4 = var5 != var8;
                var14 = undefined;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var4) { _fun0013_ip = 201; continue _fun0013 }
 76:
                var10 = _closure1_slot10;
                var4 = var10.getChannel;
                var4 = var4.bind(var10)(var8);
                var10 = var5 != var4;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var10) { _fun0013_ip = 201; continue _fun0013 }
 104:
                var12 = var4.type;
                var15 = _closure1_slot18;
                var13 = var15.countVoiceStatesForChannel;
                var10 = var4.id;
                var13 = var13.bind(var15)(var10);
                var16 = _closure1_slot17;
                var15 = var16.isInChannel;
                var10 = var4.id;
                var15 = var15.bind(var16)(var10);
                var10 = 0;
                if(!var15) { _fun0013_ip = 157; continue _fun0013 }
 154:
                var10 = 1;
 157:
                var7 = var13 - var10;
                var15 = _closure1_slot8;
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
 201:
                var10 = var2.length;
                var4 = 1;
                if(!(var4 !== var10)) { _fun0013_ip = 229; continue _fun0013 }
 213:
                var10 = _closure1_slot8;
                var4 = var10.getCurrentUserActiveStream;
                var13 = var4.bind(var10)();
                _fun0013_ip = 235; continue _fun0013;
 229:
                var4 = 0;
                var13 = var2[var4];
 235:
                var4 = var5 == var13;
                var10 = undefined;
                if(var4) { _fun0013_ip = 249; continue _fun0013 }
 244:
                var10 = var13.state;
 249:
                var4 = _closure1_slot20;
                var4 = var4.CONNECTING;
                if(!(var10 === var4)) { _fun0013_ip = 265; continue _fun0013 }
 263:
                var13 = null;
 265:
                var10 = var5 != var13;
                var5 = null;
                var4 = 0;
                if(!var10) { _fun0013_ip = 347; continue _fun0013 }
 276:
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 22;
                var10 = var15[var10];
                var12 = var12.bind(var14)(var10);
                var10 = var12.encodeStreamKey;
                var10 = var10.bind(var12)(var13);
                var12 = _closure1_slot8;
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
 347:
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
 0:
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
                if(!(var3 === var13)) { _fun0014_ip = 484; continue _fun0014 }
 81:
                var6 = null;
                if(!(var6 != var13)) { _fun0014_ip = 484; continue _fun0014 }
 90:
                var12 = _closure1_slot10;
                var10 = var12.getChannel;
                var13 = var10.bind(var12)(var13);
                var12 = var6 == var13;
                var10 = false;
                if(var12) { _fun0014_ip = 174; continue _fun0014 }
 116:
                var12 = var13.getGuildId;
                var15 = var12.bind(var13)();
                var12 = var6 == var15;
                var10 = false;
                if(var12) { _fun0014_ip = 174; continue _fun0014 }
 135:
                var14 = _closure1_slot11;
                var12 = var14.getGuild;
                var14 = var12.bind(var14)(var15);
                var12 = var6 != var14;
                if(!var12) { _fun0014_ip = 171; continue _fun0014 }
 156:
                var14 = var14.afkChannelId;
                var13 = var13.id;
                var12 = var14 === var13;
 171:
                var10 = var12;
 174:
                if(var10) { _fun0014_ip = 484; continue _fun0014 }
 180:
                if(!(var6 != var11)) { _fun0014_ip = 204; continue _fun0014 }
 184:
                var10 = _closure1_slot7;
                var3 = var10.has;
                var3 = var3.bind(var10)(var11);
                if(var3) { _fun0014_ip = 484; continue _fun0014 }
 204:
                var10 = var6 != var4;
                if(!var10) { _fun0014_ip = 221; continue _fun0014 }
 211:
                var3 = var8.singleActiveStreamKey;
                var10 = var3 === var4;
 221:
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
 0:
                        var5 = arg1;
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var1 = var1.bind(var2)(var5);
                        var1 = !var1;
                        if(!var1) { _fun0015_ip = 54; continue _fun0015 }
 26:
                        var2 = _closure3_slot2;
                        var2 = var5 === var2;
                        if(var2) { _fun0015_ip = 51; continue _fun0015 }
 37:
                        var4 = _closure3_slot3;
                        var3 = var4.includes;
                        var2 = var3.bind(var4)(var5);
 51:
                        var1 = var2;
 54:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = 'stream_started';
                if(var3) { _fun0014_ip = 482; continue _fun0014 }
 300:
                var3 = 'stream_ended';
                if(var4) { _fun0014_ip = 479; continue _fun0014 }
 310:
                var4 = var8.singleActiveStreamViewerCount;
                var11 = 25;
                if(!(var4 <= var11)) { _fun0014_ip = 346; continue _fun0014 }
 323:
                if(!var10) { _fun0014_ip = 346; continue _fun0014 }
 326:
                var4 = var8.singleActiveStreamViewerCount;
                var5 = var9 > var4;
                var4 = 'stream_user_joined';
                if(var5) { _fun0014_ip = 476; continue _fun0014 }
 346:
                var5 = var8.voiceChannelUserCount;
                if(!(var6 != var5)) { _fun0014_ip = 387; continue _fun0014 }
 356:
                if(!(var6 != var7)) { _fun0014_ip = 387; continue _fun0014 }
 360:
                var5 = var8.voiceChannelUserCount;
                if(!(var5 <= var11)) { _fun0014_ip = 387; continue _fun0014 }
 370:
                var5 = var8.voiceChannelUserCount;
                var12 = var7 > var5;
                var5 = 'user_join';
                if(var12) { _fun0014_ip = 473; continue _fun0014 }
 387:
                var12 = var8.voiceChannelUserCount;
                if(!(var6 != var12)) { _fun0014_ip = 428; continue _fun0014 }
 397:
                if(!(var6 != var7)) { _fun0014_ip = 428; continue _fun0014 }
 401:
                var6 = var8.voiceChannelUserCount;
                if(!(var6 <= var11)) { _fun0014_ip = 428; continue _fun0014 }
 411:
                var6 = var8.voiceChannelUserCount;
                var7 = var7 < var6;
                var6 = 'user_leave';
                if(var7) { _fun0014_ip = 470; continue _fun0014 }
 428:
                var7 = var8.singleActiveStreamViewerCount;
                var11 = var7 <= var11;
                var7 = undefined;
                if(!var11) { _fun0014_ip = 467; continue _fun0014 }
 443:
                var7 = undefined;
                if(!var10) { _fun0014_ip = 467; continue _fun0014 }
 448:
                var8 = var8.singleActiveStreamViewerCount;
                var8 = var9 < var8;
                var7 = undefined;
                if(!var8) { _fun0014_ip = 467; continue _fun0014 }
 463:
                var7 = 'stream_user_left';
 467:
                var6 = var7;
 470:
                var5 = var6;
 473:
                var4 = var5;
 476:
                var3 = var4;
 479:
                var2 = var3;
 482:
                return var2;
 484:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function ActivitySounds() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot15;
        var4 = new Array(3);
        var4[0] = var3;
        var3 = _closure1_slot3;
        var4[1] = var3;
        var2 = _closure1_slot9;
        var4[2] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = _closure1_slot15;
                var1 = var2.getVoiceChannelId;
                var9 = var1.bind(var2)();
                var2 = _closure1_slot15;
                var1 = var2.getChannelId;
                var11 = var1.bind(var2)();
                var2 = _closure1_slot3;
                var1 = var2.getConnectedActivityLocation;
                var6 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 23;
                var3 = var1[var3];
                var7 = undefined;
                var5 = var2.bind(var7)(var3);
                var3 = var5.getEmbeddedActivityLocationChannelId;
                var10 = var3.bind(var5)(var6);
                var5 = _closure1_slot9;
                var3 = var5.getId;
                var5 = var3.bind(var5)();
                var8 = 24;
                var1 = var1[var8];
                var2 = var2.bind(var7)(var1);
                var1 = var2.isNotNullish;
                var1 = var1.bind(var2)(var11);
                if(var1) { _fun0016_ip = 124; continue _fun0016 }
 118:
                var3 = _closure1_slot4;
                _fun0016_ip = 139; continue _fun0016;
 124:
                var2 = _closure1_slot3;
                var1 = var2.getEmbeddedActivitiesForChannel;
                var3 = var1.bind(var2)(var11);
 139:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var2 = var2.bind(var7)(var1);
                var1 = var2.isNotNullish;
                var1 = var1.bind(var2)(var9);
                if(var1) { _fun0016_ip = 176; continue _fun0016 }
 170:
                var2 = _closure1_slot4;
                _fun0016_ip = 191; continue _fun0016;
 176:
                var11 = _closure1_slot3;
                var1 = var11.getEmbeddedActivitiesForChannel;
                var2 = var1.bind(var11)(var9);
 191:
                var1 = {};
                var1['connectedActivityLocation'] = var6;
                var1['voiceChannelId'] = var9;
                var1['currentUserId'] = var5;
                var1['channelActivities'] = var3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var5 = var5.bind(var7)(var3);
                var3 = var5.isNotNullish;
                var3 = var3.bind(var5)(var10);
                if(var3) { _fun0016_ip = 250; continue _fun0016 }
 244:
                var3 = _closure1_slot4;
                _fun0016_ip = 265; continue _fun0016;
 250:
                var9 = _closure1_slot3;
                var5 = var9.getEmbeddedActivitiesForChannel;
                var3 = var5.bind(var9)(var10);
 265:
                var1['connectedChannelActivities'] = var3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var5 = var5.bind(var7)(var3);
                var3 = var5.isNotNullish;
                var5 = var3.bind(var5)(var6);
                var3 = null;
                if(!var5) { _fun0016_ip = 318; continue _fun0016 }
 303:
                var5 = _closure1_slot3;
                var4 = var5.getSelfEmbeddedActivityForLocation;
                var3 = var4.bind(var5)(var6);
 318:
                var1['userConnectedActivity'] = var3;
                var1['voiceChannelActivities'] = var2;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var8 = arg1;
                var1 = arg2;
                var3 = var1.connectedActivityLocation;
                var14 = var1.voiceChannelId;
                var2 = var1.currentUserId;
                var _closure3_slot0 = var2;
                var4 = var1.channelActivities;
                var2 = var1.connectedChannelActivities;
                var7 = var1.userConnectedActivity;
                var _closure3_slot1 = var7;
                var6 = var1.voiceChannelActivities;
                var5 = var6.some;
                var1 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.applicationId;
                        var5 = _closure3_slot1;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0018_ip = 35; continue _fun0018 }
 26:
                        var5 = _closure3_slot1;
                        var1 = var5.applicationId;
 35:
                        var1 = var4 === var1;
                        if(!var1) { _fun0018_ip = 62; continue _fun0018 }
 42:
                        var3 = var3.launchId;
                        var2 = _closure3_slot1;
                        var2 = var2.launchId;
                        var1 = var3 === var2;
 62:
                        return var1;
                    }
                };
                var9 = var5.bind(var6)(var1);
                var12 = _closure1_slot0;
                var1 = _closure1_slot1;
                var11 = 24;
                var1 = var1[var11];
                var10 = undefined;
                var12 = var12.bind(var10)(var1);
                var1 = var12.isNotNullish;
                var12 = var1.bind(var12)(var14);
                var1 = undefined;
                if(!var12) { _fun0017_ip = 469; continue _fun0017 }
 120:
                var15 = var8.voiceChannelActivities;
                var14 = var15.find;
                var12 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var12 = var14.bind(var15)(var12);
                var14 = var6.find;
                var13 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13 = var14.bind(var6)(var13);
                var14 = var8.voiceChannelActivities;
                var14 = var14.length;
                var6 = var6.length;
                var14 = var14 < var6;
                if(!var14) { _fun0017_ip = 217; continue _fun0017 }
 183:
                var15 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var11];
                var16 = var15.bind(var10)(var6);
                var15 = var16.isNotNullish;
                var6 = var8.voiceChannelId;
                var14 = var15.bind(var16)(var6);
 217:
                var6 = undefined;
                if(!var14) { _fun0017_ip = 228; continue _fun0017 }
 222:
                var6 = 'activity_launch';
 228:
                var14 = var10 === var13;
                if(!var14) { _fun0017_ip = 263; continue _fun0017 }
 235:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var11];
                var16 = var16.bind(var10)(var15);
                var15 = var16.isNotNullish;
                var14 = var15.bind(var16)(var12);
 263:
                if(!var14) { _fun0017_ip = 272; continue _fun0017 }
 266:
                var6 = 'activity_end';
 272:
                var14 = var10 === var12;
                if(!var14) { _fun0017_ip = 307; continue _fun0017 }
 279:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var11];
                var16 = var16.bind(var10)(var15);
                var15 = var16.isNotNullish;
                var14 = var15.bind(var16)(var13);
 307:
                if(!var14) { _fun0017_ip = 328; continue _fun0017 }
 310:
                var15 = var13.userIds;
                var16 = var15.size;
                var15 = 1;
                var14 = var16 > var15;
 328:
                if(!var14) { _fun0017_ip = 337; continue _fun0017 }
 331:
                var6 = 'activity_user_join';
 337:
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var11];
                var15 = var15.bind(var10)(var14);
                var14 = var15.isNotNullish;
                var14 = var14.bind(var15)(var13);
                if(!var14) { _fun0017_ip = 396; continue _fun0017 }
 368:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var11];
                var16 = var16.bind(var10)(var15);
                var15 = var16.isNotNullish;
                var14 = var15.bind(var16)(var12);
 396:
                var1 = var6;
                if(!var14) { _fun0017_ip = 469; continue _fun0017 }
 402:
                var14 = var13.userIds;
                var15 = var14.size;
                var14 = var12.userIds;
                var14 = var14.size;
                if(!(var15 > var14)) { _fun0017_ip = 434; continue _fun0017 }
 428:
                var6 = 'activity_user_join';
 434:
                var13 = var13.userIds;
                var13 = var13.size;
                var12 = var12.userIds;
                var12 = var12.size;
                if(!(var13 < var12)) { _fun0017_ip = 466; continue _fun0017 }
 460:
                var6 = 'activity_user_left';
 466:
                var1 = var6;
 469:
                var6 = var1;
                if(var9) { _fun0017_ip = 714; continue _fun0017 }
 478:
                var9 = var8.connectedChannelActivities;
                var9 = var9.length;
                var2 = var2.length;
                var2 = var9 < var2;
                if(!var2) { _fun0017_ip = 521; continue _fun0017 }
 501:
                var9 = var8.channelActivities;
                var9 = var9.length;
                var4 = var4.length;
                var2 = var9 < var4;
 521:
                if(!var2) { _fun0017_ip = 530; continue _fun0017 }
 524:
                var1 = 'activity_launch';
 530:
                var2 = var8.userConnectedActivity;
                var4 = null;
                var4 = var4 == var7;
                if(!var4) { _fun0017_ip = 573; continue _fun0017 }
 545:
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var12 = var12.bind(var10)(var9);
                var9 = var12.isNotNullish;
                var4 = var9.bind(var12)(var2);
 573:
                if(!var4) { _fun0017_ip = 582; continue _fun0017 }
 576:
                var1 = 'activity_end';
 582:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var11];
                var9 = var9.bind(var10)(var4);
                var4 = var9.isNotNullish;
                var4 = var4.bind(var9)(var7);
                if(!var4) { _fun0017_ip = 641; continue _fun0017 }
 613:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var11];
                var9 = var9.bind(var10)(var5);
                var5 = var9.isNotNullish;
                var4 = var5.bind(var9)(var2);
 641:
                var6 = var1;
                if(!var4) { _fun0017_ip = 714; continue _fun0017 }
 647:
                var4 = var7.userIds;
                var5 = var4.size;
                var4 = var2.userIds;
                var4 = var4.size;
                if(!(var5 > var4)) { _fun0017_ip = 679; continue _fun0017 }
 673:
                var1 = 'activity_user_join';
 679:
                var4 = var7.userIds;
                var4 = var4.size;
                var2 = var2.userIds;
                var2 = var2.size;
                if(!(var4 < var2)) { _fun0017_ip = 711; continue _fun0017 }
 705:
                var1 = 'activity_user_left';
 711:
                var6 = var1;
 714:
                var9 = null;
                var2 = var9 != var6;
                if(var2) { _fun0017_ip = 743; continue _fun0017 }
 723:
                var1 = var8.connectedActivityLocation;
                var1 = var9 == var1;
                if(!var1) { _fun0017_ip = 740; continue _fun0017 }
 736:
                var1 = var9 == var3;
 740:
                var2 = var1;
 743:
                var1 = var6;
                if(var2) { _fun0017_ip = 918; continue _fun0017 }
 752:
                var2 = var8.connectedActivityLocation;
                if(!(var9 == var2)) { _fun0017_ip = 778; continue _fun0017 }
 762:
                var4 = var9 != var3;
                var2 = 'activity_launch';
                if(var4) { _fun0017_ip = 915; continue _fun0017 }
 778:
                var4 = var8.connectedActivityLocation;
                if(!(var9 != var4)) { _fun0017_ip = 801; continue _fun0017 }
 788:
                var4 = var9 == var3;
                var3 = 'activity_end';
                if(var4) { _fun0017_ip = 912; continue _fun0017 }
 801:
                var5 = var9 != var7;
                if(!var5) { _fun0017_ip = 818; continue _fun0017 }
 808:
                var4 = var8.userConnectedActivity;
                var5 = var9 != var4;
 818:
                var4 = var6;
                if(!var5) { _fun0017_ip = 909; continue _fun0017 }
 824:
                var5 = var8.userConnectedActivity;
                var5 = var5.userIds;
                var9 = var5.size;
                var5 = var7.userIds;
                var5 = var5.size;
                var9 = var9 < var5;
                var5 = 'activity_user_join';
                if(var9) { _fun0017_ip = 906; continue _fun0017 }
 865:
                var8 = var8.userConnectedActivity;
                var8 = var8.userIds;
                var8 = var8.size;
                var7 = var7.userIds;
                var7 = var7.size;
                if(!(var8 > var7)) { _fun0017_ip = 903; continue _fun0017 }
 897:
                var6 = 'activity_user_leave';
 903:
                var5 = var6;
 906:
                var4 = var5;
 909:
                var3 = var4;
 912:
                var2 = var3;
 915:
                var1 = var2;
 918:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function HangStatusSounds() {
        var6 = _closure1_slot25;
        var3 = _closure1_slot6;
        var5 = new Array(2);
        var5[0] = var3;
        var2 = _closure1_slot15;
        var5[1] = var2;
        var11 = undefined;
        var9 = function() {
            var1 = {};
            var4 = _closure1_slot6;
            var3 = var4.getCurrentHangStatus;
            var3 = var3.bind(var4)();
            var1['hangStatus'] = var3;
            var4 = _closure1_slot6;
            var3 = var4.getCustomHangStatus;
            var3 = var3.bind(var4)();
            var1['customHangStatus'] = var3;
            var3 = _closure1_slot15;
            var2 = var3.getVoiceChannelId;
            var3 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var3;
            var1['inVoice'] = var2;
            return var1;
        };
        var8 = function(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var8 = arg1;
                var1 = arg2;
                var3 = var1.hangStatus;
                var5 = var1.customHangStatus;
                var1 = var8.inVoice;
                if(var1) { _fun0019_ip = 31; continue _fun0019 }
 27:
                var1 = undefined;
                return var1;
 31:
                var9 = null;
                if(!(var9 != var3)) { _fun0019_ip = 53; continue _fun0019 }
 37:
                var2 = var8.hangStatus;
                var1 = 'hang_status_select';
                if(!(var3 === var2)) { _fun0019_ip = 170; continue _fun0019 }
 53:
                if(!(var9 != var5)) { _fun0019_ip = 165; continue _fun0019 }
 57:
                var7 = var5.status;
                var2 = var8.customHangStatus;
                var4 = var9 == var2;
                var3 = undefined;
                var6 = undefined;
                if(var4) { _fun0019_ip = 84; continue _fun0019 }
 79:
                var6 = var2.status;
 84:
                var4 = 'hang_status_select';
                var2 = var4;
                if(!(var7 === var6)) { _fun0019_ip = 167; continue _fun0019 }
 97:
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 25;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.isEqual;
                var5 = var5.emoji;
                var8 = var8.customHangStatus;
                var9 = var9 == var8;
                var3 = undefined;
                if(var9) { _fun0019_ip = 153; continue _fun0019 }
 147:
                var3 = var8.emoji;
 153:
                var3 = var6.bind(var7)(var5, var3);
                var2 = var4;
                if(!var3) { _fun0019_ip = 167; continue _fun0019 }
 165:
                var2 = undefined;
 167:
                var1 = var2;
 170:
                return var1;
            }
        };
        var7 = 0.15;
        var10 = var5;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        var1 = null;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.InputModes;
    var _closure1_slot19 = var7;
    var7 = var4.ApplicationStreamStates;
    var _closure1_slot20 = var7;
    var4 = var4.RTCConnectionStates;
    var _closure1_slot21 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot22 = var7;
    var7 = var4.Fragment;
    var _closure1_slot23 = var7;
    var4 = var4.jsxs;
    var _closure1_slot24 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_common/SoundPlayer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SoundPlayer() {
        var4 = _closure1_slot24;
        var3 = _closure1_slot23;
        var2 = {};
        var8 = _closure1_slot22;
        var7 = _closure1_slot26;
        var1 = undefined;
        var5 = {};
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(12);
        var5[0] = var7;
        var9 = _closure1_slot27;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[1] = var7;
        var9 = _closure1_slot28;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[2] = var7;
        var9 = _closure1_slot29;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[3] = var7;
        var9 = _closure1_slot31;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[4] = var7;
        var9 = _closure1_slot33;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[5] = var7;
        var9 = _closure1_slot35;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[6] = var7;
        var9 = _closure1_slot34;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[7] = var7;
        var9 = _closure1_slot36;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[8] = var7;
        var9 = _closure1_slot30;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[9] = var7;
        var9 = _closure1_slot32;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[10] = var7;
        var7 = _closure1_slot37;
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