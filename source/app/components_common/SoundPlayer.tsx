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
                    var6 = _closure1_slot14;
                    var5 = var6.isSoundDisabled;
                    var4 = var5.bind(var6)(var7);
 57:
                    if(var4) { _fun0001_ip = 120; continue _fun0001 }
 60:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 20;
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
                var5 = _closure1_slot13;
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
 0:
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
 0:
                var4 = _closure1_slot11;
                var3 = var4.getChannel;
                var5 = _closure1_slot16;
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
                if(!var4) { _fun0004_ip = 144; continue _fun0004 }
 130:
                var5 = _closure1_slot22;
                var5 = var5.DISCONNECTED;
                var4 = var6 !== var5;
 144:
                if(var4) { _fun0004_ip = 161; continue _fun0004 }
 147:
                var5 = _closure1_slot22;
                var5 = var5.RTC_CONNECTED;
                var4 = var6 === var5;
 161:
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
                var7 = _closure1_slot8;
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
                var2 = _closure1_slot8;
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
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0006_ip = 71; continue _fun0006 }
 10:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
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
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0008_ip = 71; continue _fun0008 }
 10:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
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
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0009_ip = 71; continue _fun0009 }
 10:
                var4 = _closure1_slot13;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot13;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot20;
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
 0:
                var3 = _closure1_slot16;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0011_ip = 73; continue _fun0011 }
 23:
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
 73:
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
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0012_ip = 51; continue _fun0012 }
 10:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 22;
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
 0:
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
                if(!var4) { _fun0013_ip = 201; continue _fun0013 }
 76:
                var10 = _closure1_slot11;
                var4 = var10.getChannel;
                var4 = var4.bind(var10)(var8);
                var10 = var5 != var4;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var10) { _fun0013_ip = 201; continue _fun0013 }
 104:
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
                if(!var15) { _fun0013_ip = 157; continue _fun0013 }
 154:
                var10 = 1;
 157:
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
 201:
                var10 = var2.length;
                var4 = 1;
                if(!(var4 !== var10)) { _fun0013_ip = 229; continue _fun0013 }
 213:
                var10 = _closure1_slot9;
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
                var4 = _closure1_slot21;
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
                var12 = _closure1_slot11;
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
                var14 = _closure1_slot12;
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
                var10 = _closure1_slot8;
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
 0:
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
                if(var1) { _fun0016_ip = 124; continue _fun0016 }
 118:
                var4 = _closure1_slot4;
                _fun0016_ip = 139; continue _fun0016;
 124:
                var3 = _closure1_slot3;
                var1 = var3.getEmbeddedActivitiesForChannel;
                var4 = var1.bind(var3)(var11);
 139:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isNotNullish;
                var1 = var1.bind(var3)(var9);
                if(var1) { _fun0016_ip = 176; continue _fun0016 }
 170:
                var3 = _closure1_slot4;
                _fun0016_ip = 191; continue _fun0016;
 176:
                var11 = _closure1_slot3;
                var1 = var11.getEmbeddedActivitiesForChannel;
                var3 = var1.bind(var11)(var9);
 191:
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
                if(var4) { _fun0016_ip = 250; continue _fun0016 }
 244:
                var4 = _closure1_slot4;
                _fun0016_ip = 265; continue _fun0016;
 250:
                var9 = _closure1_slot3;
                var5 = var9.getEmbeddedActivitiesForChannel;
                var4 = var5.bind(var9)(var10);
 265:
                var1['connectedChannelActivities'] = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isNotNullish;
                var5 = var4.bind(var5)(var7);
                var4 = null;
                if(!var5) { _fun0016_ip = 318; continue _fun0016 }
 303:
                var6 = _closure1_slot3;
                var5 = var6.getSelfEmbeddedActivityForLocation;
                var4 = var5.bind(var6)(var7);
 318:
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
 0:
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
                if(!var13) { _fun0017_ip = 475; continue _fun0017 }
 126:
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
                if(!var15) { _fun0017_ip = 223; continue _fun0017 }
 189:
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var12];
                var17 = var16.bind(var11)(var9);
                var16 = var17.isNotNullish;
                var9 = var4.voiceChannelId;
                var15 = var16.bind(var17)(var9);
 223:
                var9 = undefined;
                if(!var15) { _fun0017_ip = 234; continue _fun0017 }
 228:
                var9 = 'activity_launch';
 234:
                var15 = var11 === var14;
                if(!var15) { _fun0017_ip = 269; continue _fun0017 }
 241:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var13);
 269:
                if(!var15) { _fun0017_ip = 278; continue _fun0017 }
 272:
                var9 = 'activity_end';
 278:
                var15 = var11 === var13;
                if(!var15) { _fun0017_ip = 313; continue _fun0017 }
 285:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var14);
 313:
                if(!var15) { _fun0017_ip = 334; continue _fun0017 }
 316:
                var16 = var14.userIds;
                var17 = var16.size;
                var16 = 1;
                var15 = var17 > var16;
 334:
                if(!var15) { _fun0017_ip = 343; continue _fun0017 }
 337:
                var9 = 'activity_user_join';
 343:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var12];
                var16 = var16.bind(var11)(var15);
                var15 = var16.isNotNullish;
                var15 = var15.bind(var16)(var14);
                if(!var15) { _fun0017_ip = 402; continue _fun0017 }
 374:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var12];
                var17 = var17.bind(var11)(var16);
                var16 = var17.isNotNullish;
                var15 = var16.bind(var17)(var13);
 402:
                var1 = var9;
                if(!var15) { _fun0017_ip = 475; continue _fun0017 }
 408:
                var15 = var14.userIds;
                var16 = var15.size;
                var15 = var13.userIds;
                var15 = var15.size;
                if(!(var16 > var15)) { _fun0017_ip = 440; continue _fun0017 }
 434:
                var9 = 'activity_user_join';
 440:
                var14 = var14.userIds;
                var14 = var14.size;
                var13 = var13.userIds;
                var13 = var13.size;
                if(!(var14 < var13)) { _fun0017_ip = 472; continue _fun0017 }
 466:
                var9 = 'activity_user_left';
 472:
                var1 = var9;
 475:
                var9 = var1;
                if(var8) { _fun0017_ip = 720; continue _fun0017 }
 484:
                var8 = var4.connectedChannelActivities;
                var8 = var8.length;
                var3 = var3.length;
                var3 = var8 < var3;
                if(!var3) { _fun0017_ip = 527; continue _fun0017 }
 507:
                var8 = var4.channelActivities;
                var8 = var8.length;
                var5 = var5.length;
                var3 = var8 < var5;
 527:
                if(!var3) { _fun0017_ip = 536; continue _fun0017 }
 530:
                var1 = 'activity_launch';
 536:
                var3 = var4.userConnectedActivity;
                var5 = null;
                var5 = var5 == var10;
                if(!var5) { _fun0017_ip = 579; continue _fun0017 }
 551:
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var12];
                var13 = var13.bind(var11)(var8);
                var8 = var13.isNotNullish;
                var5 = var8.bind(var13)(var3);
 579:
                if(!var5) { _fun0017_ip = 588; continue _fun0017 }
 582:
                var1 = 'activity_end';
 588:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var12];
                var8 = var8.bind(var11)(var5);
                var5 = var8.isNotNullish;
                var5 = var5.bind(var8)(var10);
                if(!var5) { _fun0017_ip = 647; continue _fun0017 }
 619:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var12];
                var8 = var8.bind(var11)(var7);
                var7 = var8.isNotNullish;
                var5 = var7.bind(var8)(var3);
 647:
                var9 = var1;
                if(!var5) { _fun0017_ip = 720; continue _fun0017 }
 653:
                var5 = var10.userIds;
                var7 = var5.size;
                var5 = var3.userIds;
                var5 = var5.size;
                if(!(var7 > var5)) { _fun0017_ip = 685; continue _fun0017 }
 679:
                var1 = 'activity_user_join';
 685:
                var5 = var10.userIds;
                var5 = var5.size;
                var3 = var3.userIds;
                var3 = var3.size;
                if(!(var5 < var3)) { _fun0017_ip = 717; continue _fun0017 }
 711:
                var1 = 'activity_user_left';
 717:
                var9 = var1;
 720:
                var5 = null;
                var1 = var5 != var9;
                if(var1) { _fun0017_ip = 749; continue _fun0017 }
 729:
                var3 = var4.connectedActivityLocation;
                var3 = var5 == var3;
                if(!var3) { _fun0017_ip = 746; continue _fun0017 }
 742:
                var3 = var5 == var2;
 746:
                var1 = var3;
 749:
                var3 = var9;
                if(var1) { _fun0017_ip = 924; continue _fun0017 }
 758:
                var1 = var4.connectedActivityLocation;
                if(!(var5 == var1)) { _fun0017_ip = 784; continue _fun0017 }
 768:
                var7 = var5 != var2;
                var1 = 'activity_launch';
                if(var7) { _fun0017_ip = 921; continue _fun0017 }
 784:
                var7 = var4.connectedActivityLocation;
                if(!(var5 != var7)) { _fun0017_ip = 807; continue _fun0017 }
 794:
                var7 = var5 == var2;
                var2 = 'activity_end';
                if(var7) { _fun0017_ip = 918; continue _fun0017 }
 807:
                var8 = var5 != var10;
                if(!var8) { _fun0017_ip = 824; continue _fun0017 }
 814:
                var7 = var4.userConnectedActivity;
                var8 = var5 != var7;
 824:
                var7 = var9;
                if(!var8) { _fun0017_ip = 915; continue _fun0017 }
 830:
                var8 = var4.userConnectedActivity;
                var8 = var8.userIds;
                var11 = var8.size;
                var8 = var10.userIds;
                var8 = var8.size;
                var11 = var11 < var8;
                var8 = 'activity_user_join';
                if(var11) { _fun0017_ip = 912; continue _fun0017 }
 871:
                var11 = var4.userConnectedActivity;
                var11 = var11.userIds;
                var11 = var11.size;
                var10 = var10.userIds;
                var10 = var10.size;
                if(!(var11 > var10)) { _fun0017_ip = 909; continue _fun0017 }
 903:
                var9 = 'activity_user_leave';
 909:
                var8 = var9;
 912:
                var7 = var8;
 915:
                var2 = var7;
 918:
                var1 = var2;
 921:
                var3 = var1;
 924:
                var2 = var5 != var3;
                if(var2) { _fun0017_ip = 951; continue _fun0017 }
 931:
                var1 = var4.connectedFrame;
                var1 = var5 == var1;
                if(!var1) { _fun0017_ip = 948; continue _fun0017 }
 944:
                var1 = var5 == var6;
 948:
                var2 = var1;
 951:
                var1 = var3;
                if(var2) { _fun0017_ip = 1012; continue _fun0017 }
 957:
                var2 = var4.connectedFrame;
                if(!(var5 == var2)) { _fun0017_ip = 980; continue _fun0017 }
 967:
                var7 = var5 != var6;
                var2 = 'activity_launch';
                if(var7) { _fun0017_ip = 1009; continue _fun0017 }
 980:
                var4 = var4.connectedFrame;
                var4 = var5 != var4;
                if(!var4) { _fun0017_ip = 997; continue _fun0017 }
 993:
                var4 = var5 == var6;
 997:
                if(!var4) { _fun0017_ip = 1006; continue _fun0017 }
 1000:
                var3 = 'activity_end';
 1006:
                var2 = var3;
 1009:
                var1 = var2;
 1012:
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
 0:
                var4 = arg1;
                var1 = arg2;
                var6 = var1.hangStatus;
                var8 = var1.customHangStatus;
                var5 = var1.gameActivityHangStatus;
                var1 = var4.inVoice;
                if(var1) { _fun0019_ip = 37; continue _fun0019 }
 33:
                var1 = undefined;
                return var1;
 37:
                var3 = null;
                if(!(var3 != var6)) { _fun0019_ip = 62; continue _fun0019 }
 43:
                var2 = var4.hangStatus;
                var1 = 'hang_status_select';
                if(!(var6 === var2)) { _fun0019_ip = 205; continue _fun0019 }
 62:
                if(!(var3 != var8)) { _fun0019_ip = 172; continue _fun0019 }
 66:
                var10 = var8.status;
                var2 = var4.customHangStatus;
                var7 = var3 == var2;
                var6 = undefined;
                var9 = undefined;
                if(var7) { _fun0019_ip = 93; continue _fun0019 }
 88:
                var9 = var2.status;
 93:
                var7 = 'hang_status_select';
                var2 = var7;
                if(!(var10 === var9)) { _fun0019_ip = 202; continue _fun0019 }
 106:
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
                if(var12) { _fun0019_ip = 160; continue _fun0019 }
 155:
                var6 = var11.emoji;
 160:
                var6 = var9.bind(var10)(var8, var6);
                var2 = var7;
                if(!var6) { _fun0019_ip = 202; continue _fun0019 }
 172:
                var7 = var3 != var5;
                var3 = undefined;
                if(!var7) { _fun0019_ip = 199; continue _fun0019 }
 181:
                var4 = var4.gameActivityHangStatus;
                var3 = undefined;
                if(!(var4 !== var5)) { _fun0019_ip = 199; continue _fun0019 }
 193:
                var3 = 'hang_status_select';
 199:
                var2 = var3;
 202:
                var1 = var2;
 205:
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