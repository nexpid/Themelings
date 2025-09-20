// app/actions/AudioActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getInputDeviceName() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot6;
            var2 = var3.getInputDevices;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot6;
            var1 = var3.getInputDeviceId;
            var1 = var1.bind(var3)();
            var2 = var2[var1];
            var1 = null;
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 53; continue _fun0001 }
 48:
            var1 = var2.name;
 53:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function trackDeviceChanged(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var19 = arg2;
            var14 = arg3;
            var3 = arguments[4];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 18:
            var3 = {};
 20:
            var11 = var3.location;
            var10 = var3.analyticsLocations;
            if(!(var19 !== var14)) { _fun0002_ip = 328; continue _fun0002 }
 38:
            var4 = _closure1_slot7;
            var3 = var4.getVoiceChannelId;
            var5 = var3.bind(var4)();
            var8 = null;
            var3 = var8 != var5;
            var9 = null;
            if(!var3) { _fun0002_ip = 80; continue _fun0002 }
 66:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var9 = var3.bind(var4)(var5);
 80:
            var20 = var2[var19];
            var17 = var2[var14];
            var3 = _closure1_slot6;
            var2 = var3.getMediaEngine;
            var3 = var2.bind(var3)();
            var2 = var3.getAudioSubsystem;
            var7 = var2.bind(var3)();
            var3 = _closure1_slot6;
            var2 = var3.getMediaEngine;
            var3 = var2.bind(var3)();
            var2 = var3.getAudioLayer;
            var6 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot10;
            var3 = var2.MEDIA_DEVICE_CHANGED;
            var2 = {};
            var18 = _closure1_slot4;
            var15 = var18.getCertifiedDeviceName;
            var21 = var8 != var20;
            var16 = '';
            var13 = var16;
            if(!var21) { _fun0002_ip = 202; continue _fun0002 }
 197:
            var13 = var20.name;
 202:
            var13 = var15.bind(var18)(var19, var13);
            var2['device_from_name'] = var13;
            var15 = _closure1_slot4;
            var13 = var15.getCertifiedDeviceName;
            var18 = var8 != var17;
            if(!var18) { _fun0002_ip = 237; continue _fun0002 }
 232:
            var16 = var17.name;
 237:
            var13 = var13.bind(var15)(var14, var16);
            var2['device_to_name'] = var13;
            var13 = arg4;
            var2['device_type'] = var13;
            var13 = _closure1_slot4;
            var12 = var13.isCertified;
            var12 = var12.bind(var13)(var14);
            var2['device_is_certified'] = var12;
            var2['location'] = var11;
            var2['location_stack'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 307; continue _fun0002 }
 302:
            var8 = var9.type;
 307:
            var2['voice_channel_type'] = var8;
            var2['audio_subsystem'] = var7;
            var2['audio_layer'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 328:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.InputModes;
    var _closure1_slot9 = var8;
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SoundOutputChannel;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaEngineContextTypes;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var7 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'AudioActionCreators';
    var13 = var7;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot12 = var2;
    var7 = {};
    var2 = function isNotSupported() {
        var1 = false;
        return var1;
    };
    var7['isNotSupported'] = var2;
    var2 = function enable() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = true;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['enable'] = var2;
    var2 = function trackToggleSelfMute() {
        var1 = undefined;
        return var1;
    };
    var7['trackToggleSelfMute'] = var2;
    var2 = function trackToggleSelfDeaf() {
        var1 = undefined;
        return var1;
    };
    var7['trackToggleSelfDeaf'] = var2;
    var2 = var7.isNotSupported;
    var _closure1_slot13 = var2;
    var2 = var7.trackToggleSelfMute;
    var _closure1_slot14 = var2;
    var2 = var7.trackToggleSelfDeaf;
    var _closure1_slot15 = var2;
    var2 = {};
    var7 = var7.enable;
    var2['enable'] = var7;
    var7 = function toggleSelfMute() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arguments[0];
            var8 = this;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0003_ip = 14; continue _fun0003 }
 12:
            var1 = {};
 14:
            var7 = var1.context;
            if(!(var7 === var4)) { _fun0003_ip = 36; continue _fun0003 }
 23:
            var2 = _closure1_slot11;
            var7 = var2.DEFAULT;
 36:
            var6 = var1.syncRemote;
            if(!(var6 === var4)) { _fun0003_ip = 48; continue _fun0003 }
 46:
            var6 = true;
 48:
            var10 = var1.usedKeybind;
            if(!(var10 === var4)) { _fun0003_ip = 60; continue _fun0003 }
 58:
            var10 = false;
 60:
            var5 = var1.playSoundEffect;
            if(!(var5 === var4)) { _fun0003_ip = 72; continue _fun0003 }
 70:
            var5 = true;
 72:
            var9 = var1.location;
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            if(var1) { _fun0003_ip = 278; continue _fun0003 }
 94:
            var3 = _closure1_slot14;
            var1 = {};
            var1['usedKeybind'] = var10;
            var1['location'] = var9;
            var1 = var3.bind(var4)(var1);
            if(!var5) { _fun0003_ip = 134; continue _fun0003 }
 117:
            var3 = _closure1_slot6;
            var1 = var3.hasActiveCallKitCall;
            var1 = var1.bind(var3)();
            var5 = !var1;
 134:
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var9 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var9;
            if(!var1) { _fun0003_ip = 166; continue _fun0003 }
 156:
            var3 = var9.isStaff;
            var1 = var3.bind(var9)();
 166:
            if(!var1) { _fun0003_ip = 190; continue _fun0003 }
 169:
            var9 = _closure1_slot12;
            var3 = var9.info;
            var1 = 'Toggling self mute';
            var1 = var3.bind(var9)(var1);
 190:
            var3 = _closure1_slot6;
            var1 = var3.isEnabled;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 222; continue _fun0003 }
 207:
            var3 = var8.enable;
            var1 = true;
            var1 = var3.bind(var8)(var1);
            _fun0003_ip = 276; continue _fun0003;
 222:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'AUDIO_TOGGLE_SELF_MUTE';
            var2['type'] = var8;
            var2['context'] = var7;
            var2['syncRemote'] = var6;
            var2['playSoundEffect'] = var5;
            var1 = var3.bind(var4)(var2);
 276:
            _fun0003_ip = 296; continue _fun0003;
 278:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
 296:
            return var1;
        }
    };
    var2['toggleSelfMute'] = var7;
    var7 = function setSelfMute(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg2;
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var5 = true;
 14:
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0004_ip = 167; continue _fun0004 }
 31:
            if(!var5) { _fun0004_ip = 51; continue _fun0004 }
 34:
            var4 = _closure1_slot6;
            var3 = var4.hasActiveCallKitCall;
            var3 = var3.bind(var4)();
            var5 = !var3;
 51:
            var4 = _closure1_slot8;
            var3 = var4.getCurrentUser;
            var7 = var3.bind(var4)();
            var3 = null;
            var3 = var3 != var7;
            if(!var3) { _fun0004_ip = 83; continue _fun0004 }
 73:
            var4 = var7.isStaff;
            var3 = var4.bind(var7)();
 83:
            if(!var3) { _fun0004_ip = 108; continue _fun0004 }
 86:
            var7 = _closure1_slot12;
            var4 = var7.info;
            var3 = 'Setting self mute';
            var3 = var4.bind(var7)(var3, var6);
 108:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'AUDIO_SET_SELF_MUTE';
            var2['type'] = var7;
            var7 = arg1;
            var2['context'] = var7;
            var2['mute'] = var6;
            var2['playSoundEffect'] = var5;
            var2 = var3.bind(var4)(var2);
 167:
            return var1;
        }
    };
    var2['setSelfMute'] = var7;
    var7 = function setTemporarySelfMute(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0005_ip = 123; continue _fun0005 }
 19:
            var4 = _closure1_slot8;
            var3 = var4.getCurrentUser;
            var6 = var3.bind(var4)();
            var3 = null;
            var3 = var3 != var6;
            if(!var3) { _fun0005_ip = 51; continue _fun0005 }
 41:
            var4 = var6.isStaff;
            var3 = var4.bind(var6)();
 51:
            if(!var3) { _fun0005_ip = 76; continue _fun0005 }
 54:
            var6 = _closure1_slot12;
            var4 = var6.info;
            var3 = 'Setting temporary self mute';
            var3 = var4.bind(var6)(var3, var5);
 76:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_TEMPORARY_SELF_MUTE';
            var2['type'] = var6;
            var2['mute'] = var5;
            var2 = var3.bind(var4)(var2);
 123:
            return var1;
        }
    };
    var2['setTemporarySelfMute'] = var7;
    var7 = function toggleSelfDeaf() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0006_ip = 11; continue _fun0006 }
 9:
            var2 = {};
 11:
            var6 = var2.context;
            if(!(var6 === var1)) { _fun0006_ip = 33; continue _fun0006 }
 20:
            var3 = _closure1_slot11;
            var6 = var3.DEFAULT;
 33:
            var5 = var2.syncRemote;
            if(!(var5 === var1)) { _fun0006_ip = 45; continue _fun0006 }
 43:
            var5 = true;
 45:
            var8 = var2.usedKeybind;
            if(!(var8 === var1)) { _fun0006_ip = 57; continue _fun0006 }
 55:
            var8 = false;
 57:
            var7 = var2.location;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0006_ip = 145; continue _fun0006 }
 76:
            var4 = _closure1_slot15;
            var3 = {};
            var3['usedKeybind'] = var8;
            var3['location'] = var7;
            var3 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'AUDIO_TOGGLE_SELF_DEAF';
            var2['type'] = var7;
            var2['context'] = var6;
            var2['syncRemote'] = var5;
            var2 = var3.bind(var4)(var2);
 145:
            return var1;
        }
    };
    var2['toggleSelfDeaf'] = var7;
    var7 = function toggleLocalMute(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0007_ip = 22; continue _fun0007 }
 9:
            var2 = _closure1_slot11;
            var5 = var2.DEFAULT;
 22:
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0007_ip = 87; continue _fun0007 }
 36:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_TOGGLE_LOCAL_MUTE';
            var2['type'] = var6;
            var2['context'] = var5;
            var5 = arg1;
            var2['userId'] = var5;
            var2 = var3.bind(var4)(var2);
 87:
            return var1;
        }
    };
    var2['toggleLocalMute'] = var7;
    var7 = function toggleLocalSoundboardMute(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0008_ip = 22; continue _fun0008 }
 9:
            var2 = _closure1_slot11;
            var5 = var2.DEFAULT;
 22:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE';
            var2['type'] = var6;
            var2['context'] = var5;
            var5 = arg1;
            var2['userId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['toggleLocalSoundboardMute'] = var7;
    var7 = function setDisableLocalVideo(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var7 = arguments[2];
            var6 = arguments[3];
            var5 = arguments[4];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0009_ip = 28; continue _fun0009 }
 15:
            var2 = _closure1_slot11;
            var7 = var2.DEFAULT;
 28:
            if(!(var6 === var1)) { _fun0009_ip = 34; continue _fun0009 }
 32:
            var6 = true;
 34:
            if(!(var5 === var1)) { _fun0009_ip = 40; continue _fun0009 }
 38:
            var5 = false;
 40:
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0009_ip = 123; continue _fun0009 }
 54:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'AUDIO_SET_LOCAL_VIDEO_DISABLED';
            var2['type'] = var8;
            var2['context'] = var7;
            var7 = arg1;
            var2['userId'] = var7;
            var7 = arg2;
            var2['videoToggleState'] = var7;
            var2['persist'] = var6;
            var2['isAutomatic'] = var5;
            var2 = var3.bind(var4)(var2);
 123:
            return var1;
        }
    };
    var2['setDisableLocalVideo'] = var7;
    var7 = function setLocalVolume(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var8 = arguments[2];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0010_ip = 22; continue _fun0010 }
 9:
            var2 = _closure1_slot11;
            var8 = var2.DEFAULT;
 22:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_LOCAL_VOLUME';
            var2['type'] = var6;
            var2['context'] = var8;
            var6 = arg1;
            var2['userId'] = var6;
            var6 = _closure1_slot0;
            var5 = 12;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.snapVolumeToDefault;
            var5 = arg2;
            var5 = var6.bind(var7)(var5, var8);
            var2['volume'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setLocalVolume'] = var7;
    var7 = function setLocalPan(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arguments[3];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0011_ip = 22; continue _fun0011 }
 9:
            var2 = _closure1_slot11;
            var5 = var2.DEFAULT;
 22:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_LOCAL_PAN';
            var2['type'] = var6;
            var2['context'] = var5;
            var5 = arg1;
            var2['userId'] = var5;
            var5 = arg2;
            var2['left'] = var5;
            var5 = arg3;
            var2['right'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setLocalPan'] = var7;
    var7 = function setMode(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var12 = arg1;
            var7 = arguments[1];
            var9 = arguments[2];
            var2 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0012_ip = 20; continue _fun0012 }
 18:
            var7 = {};
 20:
            if(!(var9 === var1)) { _fun0012_ip = 37; continue _fun0012 }
 24:
            var3 = _closure1_slot11;
            var9 = var3.DEFAULT;
 37:
            if(!(var2 === var1)) { _fun0012_ip = 43; continue _fun0012 }
 41:
            var2 = {};
 43:
            var11 = var2.analyticsLocations;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0012_ip = 615; continue _fun0012 }
 66:
            var4 = _closure1_slot6;
            var3 = var4.getMode;
            var3 = var3.bind(var4)();
            var5 = _closure1_slot6;
            var4 = var5.getModeOptions;
            var8 = var4.bind(var5)(var9);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 11;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var10 = 'AUDIO_SET_MODE';
            var4['type'] = var10;
            var4['context'] = var9;
            var4['mode'] = var12;
            var9 = {};
            var18 = var9;
            var17 = var8;
            var10 = copyDataProperties(var18, var17);
            var18 = var9;
            var17 = var7;
            var10 = copyDataProperties(var18, var17);
            var4['options'] = var9;
            var4 = var5.bind(var6)(var4);
            if(!(var12 === var3)) { _fun0012_ip = 434; continue _fun0012 }
 176:
            var3 = _closure1_slot9;
            var3 = var3.VOICE_ACTIVITY;
            if(!(var12 === var3)) { _fun0012_ip = 615; continue _fun0012 }
 193:
            if(!(var8 !== var7)) { _fun0012_ip = 615; continue _fun0012 }
 200:
            var4 = _closure1_slot6;
            var3 = var4.getMediaEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getAudioSubsystem;
            var10 = var3.bind(var4)();
            var4 = _closure1_slot6;
            var3 = var4.getMediaEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getAudioLayer;
            var9 = var3.bind(var4)();
            var4 = _closure1_slot7;
            var3 = var4.getVoiceChannelId;
            var5 = var3.bind(var4)();
            var14 = null;
            var3 = var14 != var5;
            var15 = null;
            if(!var3) { _fun0012_ip = 287; continue _fun0012 }
 273:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var15 = var3.bind(var4)(var5);
 287:
            var3 = _closure1_slot16;
            var13 = var3.bind(var1)();
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.track;
            var3 = _closure1_slot10;
            var4 = var3.VOICE_ACTIVITY_THRESHOLD_CHANGED;
            var3 = {};
            var3['location_stack'] = var11;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0012_ip = 351; continue _fun0012 }
 346:
            var14 = var15.type;
 351:
            var3['voice_channel_type'] = var14;
            var3['input_device_name'] = var13;
            var3['audio_subsystem'] = var10;
            var3['audio_layer'] = var9;
            var9 = var8.threshold;
            var3['old_threshold'] = var9;
            var9 = var7.threshold;
            var3['new_threshold'] = var9;
            var8 = var8.autoThreshold;
            var3['old_auto_threshold'] = var8;
            var7 = var7.autoThreshold;
            var3['new_auto_threshold'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            _fun0012_ip = 615; continue _fun0012;
 434:
            var4 = _closure1_slot6;
            var3 = var4.getMediaEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getAudioSubsystem;
            var7 = var3.bind(var4)();
            var4 = _closure1_slot6;
            var3 = var4.getMediaEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getAudioLayer;
            var6 = var3.bind(var4)();
            var4 = _closure1_slot7;
            var3 = var4.getVoiceChannelId;
            var5 = var3.bind(var4)();
            var9 = null;
            var3 = var9 != var5;
            var10 = null;
            if(!var3) { _fun0012_ip = 521; continue _fun0012 }
 507:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var10 = var3.bind(var4)(var5);
 521:
            var3 = _closure1_slot16;
            var8 = var3.bind(var1)();
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot10;
            var3 = var2.VOICE_ACTIVATION_MODE_CHANGED;
            var2 = {};
            var2['mode'] = var12;
            var2['location_stack'] = var11;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0012_ip = 589; continue _fun0012 }
 584:
            var9 = var10.type;
 589:
            var2['voice_channel_type'] = var9;
            var2['input_device_name'] = var8;
            var2['audio_subsystem'] = var7;
            var2['audio_layer'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 615:
            return var1;
        }
    };
    var2['setMode'] = var7;
    var7 = function setBypassSystemInputProcessing(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0013_ip = 73; continue _fun0013 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING';
            var2['type'] = var5;
            var5 = arg1;
            var2['bypassEnabled'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
 73:
            return var1;
        }
    };
    var2['setBypassSystemInputProcessing'] = var7;
    var7 = function setInputVolume(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var9 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0014_ip = 14; continue _fun0014 }
 12:
            var2 = {};
 14:
            var8 = var2.analyticsLocations;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0014_ip = 195; continue _fun0014 }
 37:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var6 = 'AUDIO_SET_INPUT_VOLUME';
            var3['type'] = var6;
            var3['volume'] = var9;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot7;
            var3 = var4.getVoiceChannelId;
            var5 = var3.bind(var4)();
            var6 = null;
            var3 = var6 != var5;
            var7 = null;
            if(!var3) { _fun0014_ip = 123; continue _fun0014 }
 109:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var7 = var3.bind(var4)(var5);
 123:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot10;
            var3 = var2.MEDIA_INPUT_VOLUME_CHANGED;
            var2 = {};
            var2['volume'] = var9;
            var2['location_stack'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0014_ip = 184; continue _fun0014 }
 179:
            var6 = var7.type;
 184:
            var2['voice_channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 195:
            return var1;
        }
    };
    var2['setInputVolume'] = var7;
    var7 = function setOutputVolume(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var9 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0015_ip = 14; continue _fun0015 }
 12:
            var2 = {};
 14:
            var8 = var2.analyticsLocations;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0015_ip = 193; continue _fun0015 }
 37:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var6 = 'AUDIO_SET_OUTPUT_VOLUME';
            var3['type'] = var6;
            var3['volume'] = var9;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot7;
            var3 = var4.getVoiceChannelId;
            var5 = var3.bind(var4)();
            var6 = null;
            var3 = var6 != var5;
            var7 = null;
            if(!var3) { _fun0015_ip = 121; continue _fun0015 }
 107:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var7 = var3.bind(var4)(var5);
 121:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot10;
            var3 = var2.MEDIA_OUTPUT_VOLUME_CHANGED;
            var2 = {};
            var2['volume'] = var9;
            var2['location_stack'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0015_ip = 182; continue _fun0015 }
 177:
            var6 = var7.type;
 182:
            var2['voice_channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 193:
            return var1;
        }
    };
    var2['setOutputVolume'] = var7;
    var7 = function setInputDevice(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0016_ip = 14; continue _fun0016 }
 12:
            var2 = {};
 14:
            var9 = var2.location;
            var3 = var2.analyticsLocations;
            var4 = _closure1_slot13;
            var4 = var4.bind(var1)();
            if(var4) { _fun0016_ip = 154; continue _fun0016 }
 39:
            var4 = null;
            if(!(var4 == var9)) { _fun0016_ip = 49; continue _fun0016 }
 45:
            if(!(var4 != var3)) { _fun0016_ip = 110; continue _fun0016 }
 49:
            var8 = _closure1_slot17;
            var6 = _closure1_slot6;
            var4 = var6.getInputDevices;
            var14 = var4.bind(var6)();
            var6 = _closure1_slot6;
            var4 = var6.getInputDeviceId;
            var13 = var4.bind(var6)();
            var4 = {};
            var4['location'] = var9;
            var4['analyticsLocations'] = var3;
            var11 = 'Audio Input';
            var15 = undefined;
            var12 = var5;
            var10 = var4;
            var3 = var15[var8](var14, var13, var12, var11, var10, var9);
 110:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_INPUT_DEVICE';
            var2['type'] = var6;
            var2['id'] = var5;
            var2 = var3.bind(var4)(var2);
 154:
            return var1;
        }
    };
    var2['setInputDevice'] = var7;
    var7 = function setOutputDevice(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0017_ip = 14; continue _fun0017 }
 12:
            var2 = {};
 14:
            var9 = var2.location;
            var3 = var2.analyticsLocations;
            var4 = _closure1_slot13;
            var4 = var4.bind(var1)();
            if(var4) { _fun0017_ip = 154; continue _fun0017 }
 39:
            var4 = null;
            if(!(var4 == var9)) { _fun0017_ip = 49; continue _fun0017 }
 45:
            if(!(var4 != var3)) { _fun0017_ip = 110; continue _fun0017 }
 49:
            var8 = _closure1_slot17;
            var6 = _closure1_slot6;
            var4 = var6.getOutputDevices;
            var14 = var4.bind(var6)();
            var6 = _closure1_slot6;
            var4 = var6.getOutputDeviceId;
            var13 = var4.bind(var6)();
            var4 = {};
            var4['location'] = var9;
            var4['analyticsLocations'] = var3;
            var11 = 'Audio Output';
            var15 = undefined;
            var12 = var5;
            var10 = var4;
            var3 = var15[var8](var14, var13, var12, var11, var10, var9);
 110:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_OUTPUT_DEVICE';
            var2['type'] = var6;
            var2['id'] = var5;
            var2 = var3.bind(var4)(var2);
 154:
            return var1;
        }
    };
    var2['setOutputDevice'] = var7;
    var7 = function setVideoDevice(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0018_ip = 14; continue _fun0018 }
 12:
            var2 = {};
 14:
            var9 = var2.location;
            var3 = var2.analyticsLocations;
            var4 = _closure1_slot13;
            var4 = var4.bind(var1)();
            if(var4) { _fun0018_ip = 154; continue _fun0018 }
 39:
            var4 = null;
            if(!(var4 == var9)) { _fun0018_ip = 49; continue _fun0018 }
 45:
            if(!(var4 != var3)) { _fun0018_ip = 108; continue _fun0018 }
 49:
            var8 = _closure1_slot17;
            var6 = _closure1_slot6;
            var4 = var6.getVideoDevices;
            var14 = var4.bind(var6)();
            var6 = _closure1_slot6;
            var4 = var6.getVideoDeviceId;
            var13 = var4.bind(var6)();
            var4 = {};
            var4['location'] = var9;
            var4['analyticsLocations'] = var3;
            var11 = 'Video';
            var15 = undefined;
            var12 = var5;
            var10 = var4;
            var3 = var15[var8](var14, var13, var12, var11, var10, var9);
 108:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_VIDEO_DEVICE';
            var2['type'] = var6;
            var2['id'] = var5;
            var2 = var3.bind(var4)(var2);
 154:
            return var1;
        }
    };
    var2['setVideoDevice'] = var7;
    var7 = function setActiveInputProfile(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0019_ip = 14; continue _fun0019 }
 12:
            var2 = {};
 14:
            var7 = var2.analyticsLocations;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0019_ip = 150; continue _fun0019 }
 34:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = _closure1_slot6;
            var3 = var4.getActiveInputProfile;
            var3 = var3.bind(var4)();
            var4 = null;
            var8 = var4 != var3;
            var4 = undefined;
            if(!var8) { _fun0019_ip = 82; continue _fun0019 }
 79:
            var4 = var3;
 82:
            var12 = 'active_input_profile';
            var13 = undefined;
            var11 = var5;
            var10 = var4;
            var9 = var7;
            var3 = var13[var6](var12, var11, var10, var9, var8);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_ACTIVE_INPUT_PROFILE';
            var2['type'] = var6;
            var2['inputProfile'] = var5;
            var2 = var3.bind(var4)(var2);
 150:
            return var1;
        }
    };
    var2['setActiveInputProfile'] = var7;
    var7 = function setEchoCancellation(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0020_ip = 72; continue _fun0020 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_SET_ECHO_CANCELLATION';
            var2['type'] = var5;
            var5 = arg1;
            var2['enabled'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
 72:
            return var1;
        }
    };
    var2['setEchoCancellation'] = var7;
    var7 = function setSidechainCompression(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0021_ip = 14; continue _fun0021 }
 12:
            var2 = {};
 14:
            var8 = var2.analyticsLocations;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0021_ip = 124; continue _fun0021 }
 34:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getSidechainCompression;
            var10 = var2.bind(var6)();
            var12 = 'stream_attenuation_enabled';
            var13 = undefined;
            var11 = var5;
            var9 = var8;
            var2 = var13[var7](var12, var11, var10, var9, var8);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_SIDECHAIN_COMPRESSION';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 124:
            return var1;
        }
    };
    var2['setSidechainCompression'] = var7;
    var7 = function setSidechainCompressionStrength(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0022_ip = 14; continue _fun0022 }
 12:
            var2 = {};
 14:
            var8 = var2.analyticsLocations;
            var3 = _closure1_slot13;
            var3 = var3.bind(var1)();
            if(var3) { _fun0022_ip = 127; continue _fun0022 }
 34:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getSidechainCompressionStrength;
            var10 = var2.bind(var6)();
            var12 = 'stream_attenuation_strength';
            var13 = undefined;
            var11 = var5;
            var9 = var8;
            var2 = var13[var7](var12, var11, var10, var9, var8);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH';
            var2['type'] = var6;
            var2['strength'] = var5;
            var2 = var3.bind(var4)(var2);
 127:
            return var1;
        }
    };
    var2['setSidechainCompressionStrength'] = var7;
    var7 = function setLoopback(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0023_ip = 73; continue _fun0023 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_SET_LOOPBACK';
            var2['type'] = var5;
            var5 = arg1;
            var2['loopbackReason'] = var5;
            var5 = arg2;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 73:
            return var1;
        }
    };
    var2['setLoopback'] = var7;
    var7 = function setNoiseSuppression(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0024_ip = 72; continue _fun0024 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_SET_NOISE_SUPPRESSION';
            var2['type'] = var5;
            var5 = arg1;
            var2['enabled'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
 72:
            return var1;
        }
    };
    var2['setNoiseSuppression'] = var7;
    var7 = function setNoiseCancellation(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0025_ip = 112; continue _fun0025 }
 22:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var7 = var4[var2];
            var9 = var3.bind(var1)(var7);
            var8 = var9.dispatch;
            var7 = {};
            var10 = 'AUDIO_SET_NOISE_CANCELLATION';
            var7['type'] = var10;
            var7['enabled'] = var6;
            var7['location'] = var5;
            var7 = var8.bind(var9)(var7);
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'AUDIO_SET_NOISE_SUPPRESSION';
            var2['type'] = var7;
            var6 = !var6;
            var2['enabled'] = var6;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
 112:
            return var1;
        }
    };
    var2['setNoiseCancellation'] = var7;
    var7 = function setAutomaticGainControl(arg1, arg2) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0026_ip = 72; continue _fun0026 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL';
            var2['type'] = var5;
            var5 = arg1;
            var2['enabled'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
 72:
            return var1;
        }
    };
    var2['setAutomaticGainControl'] = var7;
    var7 = function setExperimentalEncoders(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0027_ip = 106; continue _fun0027 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getExperimentalEncoders;
            var6 = var2.bind(var6)();
            var2 = 'experimental_encoders_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 106:
            return var1;
        }
    };
    var2['setExperimentalEncoders'] = var7;
    var7 = function setHardwareEncoding(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0028_ip = 102; continue _fun0028 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getHardwareEncoding;
            var6 = var2.bind(var6)();
            var2 = 'hardware_acceleration_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_HARDWARE_ENCODING';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 102:
            return var1;
        }
    };
    var2['setHardwareEncoding'] = var7;
    var7 = function setAttenuation(arg1, arg2, arg3) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var5 = arg3;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0029_ip = 248; continue _fun0029 }
 28:
            var4 = _closure1_slot6;
            var3 = var4.getAttenuation;
            var8 = var3.bind(var4)();
            var4 = _closure1_slot6;
            var3 = var4.getAttenuateWhileSpeakingSelf;
            var9 = var3.bind(var4)();
            var4 = _closure1_slot6;
            var3 = var4.getAttenuateWhileSpeakingOthers;
            var10 = var3.bind(var4)();
            if(!(var8 === var7)) { _fun0029_ip = 158; continue _fun0029 }
 80:
            if(!(var9 === var6)) { _fun0029_ip = 123; continue _fun0029 }
 84:
            if(!(var10 !== var5)) { _fun0029_ip = 191; continue _fun0029 }
 88:
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 13;
            var3 = var11[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 'global_attenuation_for_other_speak_enabled';
            var3 = var4.bind(var1)(var3, var5, var10);
            _fun0029_ip = 191; continue _fun0029;
 123:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 13;
            var3 = var10[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 'global_attenuation_for_self_speak_enabled';
            var3 = var4.bind(var1)(var3, var6, var9);
            _fun0029_ip = 191; continue _fun0029;
 158:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 'global_attenuation_strength';
            var3 = var4.bind(var1)(var3, var7, var8);
 191:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'AUDIO_SET_ATTENUATION';
            var2['type'] = var8;
            var2['attenuation'] = var7;
            var2['attenuateWhileSpeakingSelf'] = var6;
            var2['attenuateWhileSpeakingOthers'] = var5;
            var2 = var3.bind(var4)(var2);
 248:
            return var1;
        }
    };
    var2['setAttenuation'] = var7;
    var7 = function setQoS(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0030_ip = 104; continue _fun0030 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getQoS;
            var6 = var2.bind(var6)();
            var2 = 'quality_of_service_packets_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_QOS';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 104:
            return var1;
        }
    };
    var2['setQoS'] = var7;
    var7 = function reset() {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0031_ip = 58; continue _fun0031 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_RESET';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
 58:
            return var1;
        }
    };
    var2['reset'] = var7;
    var7 = function setSilenceWarning(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0032_ip = 104; continue _fun0032 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getEnableSilenceWarning;
            var6 = var2.bind(var6)();
            var2 = 'silence_warning_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AUDIO_SET_DISPLAY_SILENCE_WARNING';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 104:
            return var1;
        }
    };
    var2['setSilenceWarning'] = var7;
    var7 = function setDebugLogging(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0033_ip = 148; continue _fun0033 }
 10:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    if(var3) { _fun0033_ip = 145; continue _fun0033 }
 26:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 13;
                    var3 = var6[var3];
                    var8 = var5.bind(var2)(var3);
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot6;
                    var3 = var5.getDebugLogging;
                    var5 = var3.bind(var5)();
                    var3 = 'debug_logging_enabled';
                    var3 = var8.bind(var2)(var3, var6, var5);
                    SaveGenerator(address=84);
 82:
                    return var3;
 84:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0033_ip = 142; continue _fun0033 }
 90:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'AUDIO_SET_DEBUG_LOGGING';
                    var4['type'] = var8;
                    var7 = _closure2_slot0;
                    var4['enabled'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0033_ip = 145; continue _fun0033;
 142:
                    return var3;
 145:
                    return var2;
 148:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setDebugLogging'] = var7;
    var7 = function setVideoHook(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0034_ip = 106; continue _fun0034 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getVideoHook;
            var6 = var2.bind(var6)();
            var2 = 'video_hook_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_VIDEO_HOOK';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 106:
            return var1;
        }
    };
    var2['setVideoHook'] = var7;
    var7 = function setExperimentalSoundshare(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0035_ip = 104; continue _fun0035 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getExperimentalSoundshare;
            var6 = var2.bind(var6)();
            var2 = 'experimental_soundshare_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 104:
            return var1;
        }
    };
    var2['setExperimentalSoundshare'] = var7;
    var7 = function setUseSystemScreensharePicker(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0036_ip = 106; continue _fun0036 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getUseSystemScreensharePicker;
            var6 = var2.bind(var6)();
            var2 = 'system_screenshare_picker_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 106:
            return var1;
        }
    };
    var2['setUseSystemScreensharePicker'] = var7;
    var7 = function setAudioSubsystem(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0037_ip = 147; continue _fun0037 }
 10:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    if(var3) { _fun0037_ip = 144; continue _fun0037 }
 26:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 13;
                    var3 = var6[var3];
                    var8 = var5.bind(var2)(var3);
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot6;
                    var3 = var5.getAudioSubsystem;
                    var5 = var3.bind(var5)();
                    var3 = 'audio_subsystem';
                    var3 = var8.bind(var2)(var3, var6, var5);
                    SaveGenerator(address=82);
 80:
                    return var3;
 82:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0037_ip = 141; continue _fun0037 }
 88:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'AUDIO_SET_SUBSYSTEM';
                    var4['type'] = var8;
                    var7 = _closure2_slot0;
                    var4['subsystem'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0037_ip = 144; continue _fun0037;
 141:
                    return var3;
 144:
                    return var2;
 147:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setAudioSubsystem'] = var7;
    var7 = function setVideoEnabled(arg1) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 14;
        var3 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.applyInitialVideoBackgroundOption;
        var3 = var3.bind(var5)();
        var3 = _closure1_slot1;
        var2 = 11;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MEDIA_ENGINE_SET_VIDEO_ENABLED';
        var2['type'] = var5;
        var5 = arg1;
        var2['enabled'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setVideoEnabled'] = var7;
    var7 = function setGoLiveSource(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var5 = arg1;
            var3 = null;
            var4 = var3 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var4) { _fun0038_ip = 22; continue _fun0038 }
 16:
            var2 = var5.qualityOptions;
 22:
            if(!(var3 != var2)) { _fun0038_ip = 98; continue _fun0038 }
 26:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var7 = var3.bind(var1)(var2);
            var6 = var7.trackStreamSettingsUpdate;
            var2 = var5.qualityOptions;
            var4 = var2.preset;
            var2 = var5.qualityOptions;
            var3 = var2.resolution;
            var2 = var5.qualityOptions;
            var2 = var2.frameRate;
            var2 = var6.bind(var7)(var4, var3, var2);
 98:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE';
            var2['type'] = var6;
            var2['settings'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setGoLiveSource'] = var7;
    var7 = function setOpenH264(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0039_ip = 106; continue _fun0039 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getOpenH264;
            var6 = var2.bind(var6)();
            var2 = 'open_h264_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_OPEN_H264';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 106:
            return var1;
        }
    };
    var2['setOpenH264'] = var7;
    var7 = function setAecDump(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0040_ip = 106; continue _fun0040 }
 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 13;
            var6 = var4[var6];
            var7 = var3.bind(var1)(var6);
            var6 = _closure1_slot6;
            var2 = var6.getAecDump;
            var6 = var2.bind(var6)();
            var2 = 'diagnostic_audio_recording_enabled';
            var2 = var7.bind(var1)(var2, var5, var6);
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'MEDIA_ENGINE_SET_AEC_DUMP';
            var2['type'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 106:
            return var1;
        }
    };
    var2['setAecDump'] = var7;
    var7 = function interact() {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0041_ip = 60; continue _fun0041 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'MEDIA_ENGINE_INTERACTION_REQUIRED', 'required': false};
            var2 = var3.bind(var4)(var2);
 60:
            return var1;
        }
    };
    var2['interact'] = var7;
    var7 = function setEnableHardwareMuteNotice(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0042_ip = 65; continue _fun0042 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE';
            var2['type'] = var5;
            var5 = arg1;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
 65:
            return var1;
        }
    };
    var2['setEnableHardwareMuteNotice'] = var7;
    var7 = function setKrispSuppressionLevel(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0043_ip = 66; continue _fun0043 }
 16:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_SET_KRISP_SUPPRESSION_LEVEL';
            var2['type'] = var5;
            var5 = arg1;
            var2['level'] = var5;
            var2 = var3.bind(var4)(var2);
 66:
            return var1;
        }
    };
    var2['setKrispSuppressionLevel'] = var7;
    var7 = function setKrispModelOverride(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
            var4 = this;
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(var3) { _fun0044_ip = 112; continue _fun0044 }
 19:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.dispatch;
            var3 = {};
            var7 = 'AUDIO_SET_KRISP_MODEL_OVERRIDE';
            var3['type'] = var7;
            var7 = arg1;
            var3['model'] = var7;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot6;
            var2 = var3.getNoiseCancellation;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0044_ip = 112; continue _fun0044 }
 86:
            var3 = var4.setNoiseCancellation;
            var2 = false;
            var2 = var3.bind(var4)(var2);
            var3 = var4.setNoiseCancellation;
            var2 = true;
            var2 = var3.bind(var4)(var2);
 112:
            return var1;
        }
    };
    var2['setKrispModelOverride'] = var7;
    var4 = function setNoiseCancellationEnableStats(arg1) {
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['setNoiseCancellationEnableStats'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/AudioActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();