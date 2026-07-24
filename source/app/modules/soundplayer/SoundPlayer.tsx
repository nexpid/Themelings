// app/modules/soundplayer/SoundPlayer.tsx
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
                    var6 = _closure1_slot13;
                    var5 = var6.isSoundDisabled;
                    var4 = var5.bind(var6)(var7);
case 2:
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 19;
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
                var5 = _closure1_slot12;
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
case 0:
                var3 = arg1;
                var1 = arg2;
                var2 = var1.videoEnabled;
                var1 = var1.inVoiceChannel;
                var4 = var3.videoEnabled;
                var3 = var3.inVoiceChannel;
                if(!(var4 !== var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                if(!var3) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                if(var1) { _fun0003_ip = 25; continue _fun0003 }
case 22:
                var1 = undefined;
                return var1;
case 25:
                var1 = 'camera_off';
                if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 26:
                var1 = 'camera_on';
case 13:
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
        var2 = _closure1_slot6;
        var4[3] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot10;
                var3 = var4.getChannel;
                var5 = _closure1_slot15;
                var1 = var5.getVoiceChannelId;
                var1 = var1.bind(var5)();
                var4 = var3.bind(var4)(var1);
                var3 = null;
                var1 = var3 == var4;
                var7 = undefined;
                if(var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var7 = var4.type;
case 27:
                var1 = var3 == var4;
                var5 = undefined;
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var1 = var4.getGuildId;
                var5 = var1.bind(var4)();
case 29:
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
                if(!var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var5 = _closure1_slot21;
                var5 = var5.DISCONNECTED;
                var4 = var6 !== var5;
case 31:
                if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var5 = _closure1_slot21;
                var5 = var5.RTC_CONNECTED;
                var4 = var6 === var5;
case 33:
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
                if(var9) { _fun0005_ip = 29; continue _fun0005 }
case 35:
                if(var7) { _fun0005_ip = 36; continue _fun0005 }
case 29:
                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                if(var6) { _fun0005_ip = 37; continue _fun0005 }
case 36:
                var6 = null;
                if(!(var6 != var8)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var7 = _closure1_slot7;
                var6 = var7.has;
                var6 = var6.bind(var7)(var8);
                if(var6) { _fun0005_ip = 41; continue _fun0005 }
case 39:
                var6 = 'user_join';
                return var6;
case 41:
                var6 = undefined;
                return var6;
case 37:
                if(!var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                if(var4) { _fun0005_ip = 42; continue _fun0005 }
case 6:
                if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 19:
                if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 4:
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var2 = _closure1_slot7;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var1 = 'disconnect';
                return var1;
case 44:
                var1 = undefined;
                return var1;
case 42:
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
            var1 = var2.isCurrentUserPTTActive;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var4 = _closure1_slot12;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot12;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot19;
                var3 = var3.PUSH_TO_TALK;
                if(!(var4 === var3)) { _fun0006_ip = 47; continue _fun0006 }
case 13:
                if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 49:
                var1 = 'ptt_stop';
                if(!var2) { _fun0006_ip = 38; continue _fun0006 }
case 50:
                var1 = 'ptt_start';
case 38:
                return var1;
case 47:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot29 = var1;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var4 = _closure1_slot12;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot12;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot19;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0007_ip = 47; continue _fun0007 }
case 13:
                if(var1) { _fun0007_ip = 47; continue _fun0007 }
case 49:
                var1 = 'ptt_start';
                if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 50:
                var1 = 'ptt_stop';
case 38:
                return var1;
case 47:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot30 = var1;
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                var4 = _closure1_slot12;
                var1 = var4.isSelfMute;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot12;
                var4 = var5.getMode;
                var4 = var4.bind(var5)();
                var3 = _closure1_slot19;
                var3 = var3.VOICE_ACTIVITY;
                if(!(var4 === var3)) { _fun0008_ip = 47; continue _fun0008 }
case 13:
                if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 49:
                var1 = 'ptt_stop';
                if(!var2) { _fun0008_ip = 38; continue _fun0008 }
case 50:
                var1 = 'ptt_start';
case 38:
                return var1;
case 47:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot31 = var1;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 === var1)) { _fun0009_ip = 51; continue _fun0009 }
case 48:
                var1 = undefined;
                return var1;
case 51:
                var1 = 'user_moved';
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function UserInvitedToSpeak() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot15;
        var4 = new Array(2);
        var4[0] = var3;
        var2 = _closure1_slot17;
        var4[1] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot15;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var3 = _closure1_slot17;
                var2 = var3.getVoiceStateForChannel;
                var4 = var2.bind(var3)(var4);
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 20;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getAudienceRequestToSpeakState;
                var2 = var2.bind(var3)(var4);
                return var2;
case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.NONE;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var1 !== var2)) { _fun0011_ip = 26; continue _fun0011 }
case 48:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if(!(var2 !== var1)) { _fun0011_ip = 13; continue _fun0011 }
case 26:
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
    var _closure1_slot33 = var1;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
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
                if(!var4) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                var10 = _closure1_slot10;
                var4 = var10.getChannel;
                var4 = var4.bind(var10)(var8);
                var10 = var5 != var4;
                var9 = undefined;
                var7 = undefined;
                var6 = var12;
                if(!var10) { _fun0012_ip = 54; continue _fun0012 }
case 41:
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
                if(!var15) { _fun0012_ip = 56; continue _fun0012 }
case 57:
                var10 = 1;
case 56:
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
case 54:
                var10 = var2.length;
                var4 = 1;
                if(!(var4 !== var10)) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                var10 = _closure1_slot8;
                var4 = var10.getCurrentUserActiveStream;
                var13 = var4.bind(var10)();
                _fun0012_ip = 60; continue _fun0012;
case 58:
                var4 = 0;
                var13 = var2[var4];
case 60:
                var4 = var5 == var13;
                var10 = undefined;
                if(var4) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                var10 = var13.state;
case 61:
                var4 = _closure1_slot20;
                var4 = var4.CONNECTING;
                if(!(var10 === var4)) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                var13 = null;
case 63:
                var10 = var5 != var13;
                var5 = null;
                var4 = 0;
                if(!var10) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 21;
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                if(!(var3 === var13)) { _fun0013_ip = 67; continue _fun0013 }
case 68:
                var6 = null;
                if(!(var6 != var13)) { _fun0013_ip = 67; continue _fun0013 }
case 18:
                var12 = _closure1_slot10;
                var10 = var12.getChannel;
                var13 = var10.bind(var12)(var13);
                var12 = var6 == var13;
                var10 = false;
                if(var12) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                var12 = var13.getGuildId;
                var15 = var12.bind(var13)();
                var12 = var6 == var15;
                var10 = false;
                if(var12) { _fun0013_ip = 69; continue _fun0013 }
case 71:
                var14 = _closure1_slot11;
                var12 = var14.getGuild;
                var14 = var12.bind(var14)(var15);
                var12 = var6 != var14;
                if(!var12) { _fun0013_ip = 72; continue _fun0013 }
case 56:
                var14 = var14.afkChannelId;
                var13 = var13.id;
                var12 = var14 === var13;
case 72:
                var10 = var12;
case 69:
                if(var10) { _fun0013_ip = 67; continue _fun0013 }
case 73:
                if(!(var6 != var11)) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                var10 = _closure1_slot7;
                var3 = var10.has;
                var3 = var3.bind(var10)(var11);
                if(var3) { _fun0013_ip = 67; continue _fun0013 }
case 74:
                var10 = var6 != var4;
                if(!var10) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var3 = var8.singleActiveStreamKey;
                var10 = var3 === var4;
case 76:
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
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var1 = var1.bind(var2)(var5);
                        var1 = !var1;
                        if(!var1) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                        var2 = _closure3_slot2;
                        var2 = var5 === var2;
                        if(var2) { _fun0014_ip = 26; continue _fun0014 }
case 24:
                        var4 = _closure3_slot3;
                        var3 = var4.includes;
                        var2 = var3.bind(var4)(var5);
case 26:
                        var1 = var2;
case 78:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = 'stream_started';
                if(var3) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                var3 = 'stream_ended';
                if(var4) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                var4 = var8.singleActiveStreamViewerCount;
                var11 = 25;
                if(!(var4 <= var11)) { _fun0013_ip = 65; continue _fun0013 }
case 84:
                if(!var10) { _fun0013_ip = 65; continue _fun0013 }
case 85:
                var4 = var8.singleActiveStreamViewerCount;
                var5 = var9 > var4;
                var4 = 'stream_user_joined';
                if(var5) { _fun0013_ip = 86; continue _fun0013 }
case 65:
                var5 = var8.voiceChannelUserCount;
                if(!(var6 != var5)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                if(!(var6 != var7)) { _fun0013_ip = 87; continue _fun0013 }
case 89:
                var5 = var8.voiceChannelUserCount;
                if(!(var5 <= var11)) { _fun0013_ip = 87; continue _fun0013 }
case 90:
                var5 = var8.voiceChannelUserCount;
                var12 = var7 > var5;
                var5 = 'user_join';
                if(var12) { _fun0013_ip = 91; continue _fun0013 }
case 87:
                var12 = var8.voiceChannelUserCount;
                if(!(var6 != var12)) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                if(!(var6 != var7)) { _fun0013_ip = 92; continue _fun0013 }
case 94:
                var6 = var8.voiceChannelUserCount;
                if(!(var6 <= var11)) { _fun0013_ip = 92; continue _fun0013 }
case 95:
                var6 = var8.voiceChannelUserCount;
                var7 = var7 < var6;
                var6 = 'user_leave';
                if(var7) { _fun0013_ip = 96; continue _fun0013 }
case 92:
                var7 = var8.singleActiveStreamViewerCount;
                var11 = var7 <= var11;
                var7 = undefined;
                if(!var11) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                var7 = undefined;
                if(!var10) { _fun0013_ip = 97; continue _fun0013 }
case 99:
                var8 = var8.singleActiveStreamViewerCount;
                var8 = var9 < var8;
                var7 = undefined;
                if(!var8) { _fun0013_ip = 97; continue _fun0013 }
case 100:
                var7 = 'stream_user_left';
case 97:
                var6 = var7;
case 96:
                var5 = var6;
case 91:
                var4 = var5;
case 86:
                var3 = var4;
case 82:
                var2 = var3;
case 80:
                return var2;
case 67:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function ActivitySounds() {
        var5 = _closure1_slot25;
        var3 = _closure1_slot15;
        var4 = new Array(5);
        var4[0] = var3;
        var3 = _closure1_slot3;
        var4[1] = var3;
        var3 = _closure1_slot5;
        var4[2] = var3;
        var3 = _closure1_slot9;
        var4[3] = var3;
        var2 = _closure1_slot10;
        var4[4] = var2;
        var3 = undefined;
        var2 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = _closure1_slot15;
                var1 = var2.getVoiceChannelId;
                var11 = var1.bind(var2)();
                var2 = _closure1_slot15;
                var1 = var2.getChannelId;
                var5 = var1.bind(var2)();
                var2 = _closure1_slot3;
                var1 = var2.getConnectedActivityLocation;
                var12 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 22;
                var6 = var1[var3];
                var3 = undefined;
                var7 = var2.bind(var3)(var6);
                var6 = var7.getEmbeddedActivityLocationChannelId;
                var9 = var6.bind(var7)(var12);
                var7 = _closure1_slot9;
                var6 = var7.getId;
                var10 = var6.bind(var7)();
                var8 = 23;
                var1 = var1[var8];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isNotNullish;
                var1 = var1.bind(var2)(var5);
                if(var1) { _fun0015_ip = 101; continue _fun0015 }
case 102:
                var7 = _closure1_slot4;
                _fun0015_ip = 103; continue _fun0015;
case 101:
                var2 = _closure1_slot3;
                var1 = var2.getEmbeddedActivitiesForChannel;
                var7 = var1.bind(var2)(var5);
case 103:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isNotNullish;
                var1 = var1.bind(var2)(var11);
                if(var1) { _fun0015_ip = 104; continue _fun0015 }
case 105:
                var2 = _closure1_slot4;
                _fun0015_ip = 106; continue _fun0015;
case 104:
                var5 = _closure1_slot3;
                var1 = var5.getEmbeddedActivitiesForChannel;
                var2 = var1.bind(var5)(var11);
case 106:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var5 = var5.bind(var3)(var1);
                var1 = var5.isNotNullish;
                var1 = var1.bind(var5)(var9);
                if(var1) { _fun0015_ip = 107; continue _fun0015 }
case 76:
                var6 = _closure1_slot4;
                _fun0015_ip = 108; continue _fun0015;
case 107:
                var5 = _closure1_slot3;
                var1 = var5.getEmbeddedActivitiesForChannel;
                var6 = var1.bind(var5)(var9);
case 108:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var5 = var5.bind(var3)(var1);
                var1 = var5.isNotNullish;
                var1 = var1.bind(var5)(var12);
                var9 = null;
                var5 = null;
                if(!var1) { _fun0015_ip = 109; continue _fun0015 }
case 110:
                var8 = _closure1_slot3;
                var1 = var8.getSelfEmbeddedActivityForLocation;
                var5 = var1.bind(var8)(var12);
case 109:
                var8 = _closure1_slot5;
                var1 = var8.getConnectedFrame;
                var8 = var1.bind(var8)();
                var1 = {};
                var1['connectedActivityLocation'] = var12;
                var1['voiceChannelId'] = var11;
                var1['currentUserId'] = var10;
                var1['channelActivities'] = var7;
                var1['connectedChannelActivities'] = var6;
                var1['userConnectedActivity'] = var5;
                var1['voiceChannelActivities'] = var2;
                var1['connectedFrame'] = var8;
                var5 = var9 == var8;
                var2 = undefined;
                if(var5) { _fun0015_ip = 111; continue _fun0015 }
case 112:
                var2 = var8.channelId;
case 111:
                var2 = var9 != var2;
                if(!var2) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 24;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.isVibegrationsChannelCandidate;
                var7 = _closure1_slot10;
                var4 = var7.getChannel;
                var9 = var9 == var8;
                var3 = undefined;
                if(var9) { _fun0015_ip = 115; continue _fun0015 }
case 116:
                var3 = var8.channelId;
case 115:
                var4 = var4.bind(var7)(var3);
                var3 = 'ActivitySounds';
                var2 = var5.bind(var6)(var4, var3);
case 113:
                var1['inVibegrationsChannel'] = var2;
                return var1;
            }
        };
        var1 = function(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var1.connectedActivityLocation;
                var16 = var1.voiceChannelId;
                var3 = var1.currentUserId;
                var _closure3_slot0 = var3;
                var6 = var1.channelActivities;
                var3 = var1.connectedChannelActivities;
                var11 = var1.userConnectedActivity;
                var _closure3_slot1 = var11;
                var10 = var1.voiceChannelActivities;
                var7 = var1.connectedFrame;
                var4 = var1.inVibegrationsChannel;
                var8 = var10.some;
                var1 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.applicationId;
                        var5 = _closure3_slot1;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0017_ip = 117; continue _fun0017 }
case 79:
                        var5 = _closure3_slot1;
                        var1 = var5.applicationId;
case 117:
                        var1 = var4 === var1;
                        if(!var1) { _fun0017_ip = 118; continue _fun0017 }
case 28:
                        var3 = var3.launchId;
                        var2 = _closure3_slot1;
                        var2 = var2.launchId;
                        var1 = var3 === var2;
case 118:
                        return var1;
                    }
                };
                var9 = var8.bind(var10)(var1);
                var14 = _closure1_slot0;
                var1 = _closure1_slot1;
                var13 = 23;
                var1 = var1[var13];
                var12 = undefined;
                var14 = var14.bind(var12)(var1);
                var1 = var14.isNotNullish;
                var14 = var1.bind(var14)(var16);
                var1 = undefined;
                if(!var14) { _fun0016_ip = 80; continue _fun0016 }
case 119:
                var17 = var5.voiceChannelActivities;
                var16 = var17.find;
                var14 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var14 = var16.bind(var17)(var14);
                var16 = var10.find;
                var15 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userIds;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var15 = var16.bind(var10)(var15);
                var16 = var5.voiceChannelActivities;
                var16 = var16.length;
                var10 = var10.length;
                var16 = var16 < var10;
                if(!var16) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                var17 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var13];
                var18 = var17.bind(var12)(var10);
                var17 = var18.isNotNullish;
                var10 = var5.voiceChannelId;
                var16 = var17.bind(var18)(var10);
case 120:
                var10 = undefined;
                if(!var16) { _fun0016_ip = 122; continue _fun0016 }
case 123:
                var10 = 'activity_launch';
case 122:
                var16 = var12 === var15;
                if(!var16) { _fun0016_ip = 124; continue _fun0016 }
case 61:
                var18 = _closure1_slot0;
                var17 = _closure1_slot1;
                var17 = var17[var13];
                var18 = var18.bind(var12)(var17);
                var17 = var18.isNotNullish;
                var16 = var17.bind(var18)(var14);
case 124:
                if(!var16) { _fun0016_ip = 125; continue _fun0016 }
case 126:
                var10 = 'activity_end';
case 125:
                var16 = var12 === var14;
                if(!var16) { _fun0016_ip = 127; continue _fun0016 }
case 109:
                var18 = _closure1_slot0;
                var17 = _closure1_slot1;
                var17 = var17[var13];
                var18 = var18.bind(var12)(var17);
                var17 = var18.isNotNullish;
                var16 = var17.bind(var18)(var15);
case 127:
                if(!var16) { _fun0016_ip = 128; continue _fun0016 }
case 84:
                var17 = var15.userIds;
                var18 = var17.size;
                var17 = 1;
                var16 = var18 > var17;
case 128:
                if(!var16) { _fun0016_ip = 129; continue _fun0016 }
case 130:
                var10 = 'activity_user_join';
case 129:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var13];
                var17 = var17.bind(var12)(var16);
                var16 = var17.isNotNullish;
                var16 = var16.bind(var17)(var15);
                if(!var16) { _fun0016_ip = 131; continue _fun0016 }
case 132:
                var18 = _closure1_slot0;
                var17 = _closure1_slot1;
                var17 = var17[var13];
                var18 = var18.bind(var12)(var17);
                var17 = var18.isNotNullish;
                var16 = var17.bind(var18)(var14);
case 131:
                var1 = var10;
                if(!var16) { _fun0016_ip = 80; continue _fun0016 }
case 133:
                var16 = var15.userIds;
                var17 = var16.size;
                var16 = var14.userIds;
                var16 = var16.size;
                if(!(var17 > var16)) { _fun0016_ip = 134; continue _fun0016 }
case 135:
                var10 = 'activity_user_join';
case 134:
                var15 = var15.userIds;
                var15 = var15.size;
                var14 = var14.userIds;
                var14 = var14.size;
                if(!(var15 < var14)) { _fun0016_ip = 82; continue _fun0016 }
case 91:
                var10 = 'activity_user_left';
case 82:
                var1 = var10;
case 80:
                var10 = var1;
                if(var9) { _fun0016_ip = 136; continue _fun0016 }
case 137:
                var9 = var5.connectedChannelActivities;
                var9 = var9.length;
                var3 = var3.length;
                var3 = var9 < var3;
                if(!var3) { _fun0016_ip = 138; continue _fun0016 }
case 139:
                var9 = var5.channelActivities;
                var9 = var9.length;
                var6 = var6.length;
                var3 = var9 < var6;
case 138:
                if(!var3) { _fun0016_ip = 140; continue _fun0016 }
case 141:
                var1 = 'activity_launch';
case 140:
                var3 = var5.userConnectedActivity;
                var6 = null;
                var6 = var6 == var11;
                if(!var6) { _fun0016_ip = 142; continue _fun0016 }
case 143:
                var14 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var13];
                var14 = var14.bind(var12)(var9);
                var9 = var14.isNotNullish;
                var6 = var9.bind(var14)(var3);
case 142:
                if(!var6) { _fun0016_ip = 144; continue _fun0016 }
case 145:
                var1 = 'activity_end';
case 144:
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var13];
                var9 = var9.bind(var12)(var6);
                var6 = var9.isNotNullish;
                var6 = var6.bind(var9)(var11);
                if(!var6) { _fun0016_ip = 146; continue _fun0016 }
case 147:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var13];
                var9 = var9.bind(var12)(var8);
                var8 = var9.isNotNullish;
                var6 = var8.bind(var9)(var3);
case 146:
                var10 = var1;
                if(!var6) { _fun0016_ip = 136; continue _fun0016 }
case 148:
                var6 = var11.userIds;
                var8 = var6.size;
                var6 = var3.userIds;
                var6 = var6.size;
                if(!(var8 > var6)) { _fun0016_ip = 149; continue _fun0016 }
case 150:
                var1 = 'activity_user_join';
case 149:
                var6 = var11.userIds;
                var6 = var6.size;
                var3 = var3.userIds;
                var3 = var3.size;
                if(!(var6 < var3)) { _fun0016_ip = 151; continue _fun0016 }
case 152:
                var1 = 'activity_user_left';
case 151:
                var10 = var1;
case 136:
                var6 = null;
                var1 = var6 != var10;
                if(var1) { _fun0016_ip = 153; continue _fun0016 }
case 154:
                var3 = var5.connectedActivityLocation;
                var3 = var6 == var3;
                if(!var3) { _fun0016_ip = 155; continue _fun0016 }
case 156:
                var3 = var6 == var2;
case 155:
                var1 = var3;
case 153:
                var3 = var10;
                if(var1) { _fun0016_ip = 157; continue _fun0016 }
case 158:
                var1 = var5.connectedActivityLocation;
                if(!(var6 == var1)) { _fun0016_ip = 159; continue _fun0016 }
case 160:
                var8 = var6 != var2;
                var1 = 'activity_launch';
                if(var8) { _fun0016_ip = 161; continue _fun0016 }
case 159:
                var8 = var5.connectedActivityLocation;
                if(!(var6 != var8)) { _fun0016_ip = 162; continue _fun0016 }
case 163:
                var8 = var6 == var2;
                var2 = 'activity_end';
                if(var8) { _fun0016_ip = 164; continue _fun0016 }
case 162:
                var9 = var6 != var11;
                if(!var9) { _fun0016_ip = 165; continue _fun0016 }
case 166:
                var8 = var5.userConnectedActivity;
                var9 = var6 != var8;
case 165:
                var8 = var10;
                if(!var9) { _fun0016_ip = 167; continue _fun0016 }
case 168:
                var9 = var5.userConnectedActivity;
                var9 = var9.userIds;
                var12 = var9.size;
                var9 = var11.userIds;
                var9 = var9.size;
                var12 = var12 < var9;
                var9 = 'activity_user_join';
                if(var12) { _fun0016_ip = 169; continue _fun0016 }
case 170:
                var12 = var5.userConnectedActivity;
                var12 = var12.userIds;
                var12 = var12.size;
                var11 = var11.userIds;
                var11 = var11.size;
                if(!(var12 > var11)) { _fun0016_ip = 171; continue _fun0016 }
case 172:
                var10 = 'activity_user_leave';
case 171:
                var9 = var10;
case 169:
                var8 = var9;
case 167:
                var2 = var8;
case 164:
                var1 = var2;
case 161:
                var3 = var1;
case 157:
                var2 = var6 != var3;
                if(var2) { _fun0016_ip = 173; continue _fun0016 }
case 174:
                var1 = var5.connectedFrame;
                var1 = var6 == var1;
                if(!var1) { _fun0016_ip = 175; continue _fun0016 }
case 176:
                var1 = var6 == var7;
case 175:
                var2 = var1;
case 173:
                var1 = var3;
                if(var2) { _fun0016_ip = 177; continue _fun0016 }
case 178:
                var2 = var5.connectedFrame;
                if(!(var6 == var2)) { _fun0016_ip = 179; continue _fun0016 }
case 180:
                if(!(var6 != var7)) { _fun0016_ip = 179; continue _fun0016 }
case 181:
                var2 = 'activity_launch';
                if(!var4) { _fun0016_ip = 182; continue _fun0016 }
case 179:
                var4 = var5.connectedFrame;
                var4 = var6 == var4;
                if(var4) { _fun0016_ip = 183; continue _fun0016 }
case 184:
                var4 = var6 != var7;
case 183:
                if(var4) { _fun0016_ip = 185; continue _fun0016 }
case 186:
                var4 = var5.inVibegrationsChannel;
case 185:
                if(var4) { _fun0016_ip = 187; continue _fun0016 }
case 188:
                var3 = 'activity_end';
case 187:
                var2 = var3;
case 182:
                var1 = var2;
case 177:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var4, var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot35 = var1;
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
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundplayer/SoundPlayer.tsx';
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
        var5 = new Array(10);
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
        var9 = _closure1_slot30;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[4] = var7;
        var9 = _closure1_slot32;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[5] = var7;
        var9 = _closure1_slot34;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[6] = var7;
        var9 = _closure1_slot33;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[7] = var7;
        var9 = _closure1_slot35;
        var7 = {};
        var7 = var8.bind(var1)(var9, var7);
        var5[8] = var7;
        var7 = _closure1_slot31;
        var6 = {};
        var6 = var8.bind(var1)(var7, var6);
        var5[9] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();