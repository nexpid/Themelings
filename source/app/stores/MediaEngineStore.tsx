// app/stores/MediaEngineStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot118 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot118 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot120;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot120;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot119 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot120 = var1;
    var1 = function getDefaultSettings() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = {'mode': null, 'modeOptions': null, 'vadUseKrispSettingVersion': 0, 'ncUseKrispSettingVersion': 0, 'ncUseKrispjsSettingVersion': 0, 'mute': false, 'deaf': false, 'echoCancellation': true, 'noiseSuppression': false, 'automaticGainControl': true, 'noiseCancellation': true, 'bypassSystemInputProcessing': true, 'mostRecentlyRequestedVoiceFilter': null, 'voiceFilterPlaybackEnabled': true, 'experimentalEncoders': false, 'hardwareH264': true, 'hardwareEnabledVersion': 0, 'hardwareEncoding': null, 'silenceWarning': true, 'attenuation': 0, 'attenuateWhileSpeakingSelf': false, 'attenuateWhileSpeakingOthers': true};
            var2 = _closure1_slot26;
            var2 = var2.VOICE_ACTIVITY;
            var1['mode'] = var2;
            var2 = {'threshold': 4294967236, 'autoThreshold': null, 'vadUseKrisp': true, 'vadKrispActivationThreshold': 0.5, 'vadLeading': 5, 'vadTrailing': 25, 'delay': 20};
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 29;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.isPlatformEmbedded;
            if(var3) { _fun0005_ip = 80; continue _fun0005 }
 78:
            var3 = false;
 80:
            var2['autoThreshold'] = var3;
            var3 = true;
            var4 = new Array(0);
            var2['shortcut'] = var4;
            var1['modeOptions'] = var2;
            var4 = 0;
            var5 = false;
            var2 = null;
            var7 = {};
            var1['localMutes'] = var7;
            var7 = {};
            var1['disabledLocalVideos'] = var7;
            var7 = {};
            var1['videoToggleStateMap'] = var7;
            var7 = {};
            var1['localVolumes'] = var7;
            var7 = {};
            var1['localPans'] = var7;
            var7 = _closure1_slot46;
            var1['inputVolume'] = var7;
            var7 = _closure1_slot46;
            var1['outputVolume'] = var7;
            var7 = _closure1_slot48;
            var1['inputDeviceId'] = var7;
            var7 = _closure1_slot48;
            var1['outputDeviceId'] = var7;
            var7 = _closure1_slot48;
            var1['videoDeviceId'] = var7;
            var1['qos'] = var5;
            var1['qosMigrated'] = var5;
            var8 = _closure1_slot66;
            var7 = var8.supports;
            var6 = _closure1_slot45;
            var6 = var6.VIDEO_HOOK;
            var6 = var7.bind(var8)(var6);
            var1['videoHook'] = var6;
            var1['experimentalSoundshare2'] = var2;
            var1['useSystemScreensharePicker'] = var2;
            var1['openH264'] = var3;
            var1['h265Enabled'] = var3;
            var1['vadThrehsoldMigrated'] = var5;
            var1['aecDumpEnabled'] = var5;
            var1['sidechainCompression'] = var5;
            var1['sidechainCompressionSettingVersion'] = var4;
            var4 = 50;
            var1['sidechainCompressionStrength'] = var4;
            var1['automaticAudioSubsystem'] = var3;
            var1['activeInputProfile'] = var2;
            return var1;
        }
    };
    var _closure1_slot121 = var1;
    var1 = function getHdrCaptureMode() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot22;
            var1 = var3.getCurrentUser;
            var6 = var1.bind(var3)();
            var1 = null;
            var4 = var1 == var6;
            var5 = undefined;
            var3 = undefined;
            if(var4) { _fun0006_ip = 39; continue _fun0006 }
 29:
            var4 = var6.isStaff;
            var3 = var4.bind(var6)();
 39:
            if(!(var1 != var3)) { _fun0006_ip = 50; continue _fun0006 }
 43:
            var1 = 'always';
            if(var3) { _fun0006_ip = 119; continue _fun0006 }
 50:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 33;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.CurrentReleaseChannel;
            var2 = 34;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ReleaseChannels;
            var3 = var2.CANARY;
            var2 = 'never';
            if(!(var4 === var3)) { _fun0006_ip = 116; continue _fun0006 }
 110:
            var2 = 'permittedDevicesOnly';
 116:
            var1 = var2;
 119:
            return var1;
        }
    };
    var _closure1_slot122 = var1;
    var1 = function getStoredSettings() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arguments[0];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0007_ip = 22; continue _fun0007 }
 9:
            var1 = _closure1_slot51;
            var4 = var1.DEFAULT;
 22:
            var1 = _closure1_slot70;
            var1 = var1[var4];
            var2 = null;
            if(!(var2 == var1)) { _fun0007_ip = 58; continue _fun0007 }
 39:
            var2 = _closure1_slot121;
            var2 = var2.bind(var5)();
            var3 = _closure1_slot70;
            var3[var4] = var2;
            var1 = var2;
 58:
            return var1;
        }
    };
    var _closure1_slot123 = var1;
    var1 = function _getSettings10() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arguments[0];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0008_ip = 22; continue _fun0008 }
 9:
            var1 = _closure1_slot51;
            var4 = var1.DEFAULT;
 22:
            var1 = _closure1_slot123;
            var5 = var1.bind(var2)(var4);
            var2 = _closure1_slot65;
            var1 = var5.activeInputProfile;
            var4 = null;
            if(!(var4 == var1)) { _fun0008_ip = 60; continue _fun0008 }
 50:
            var3 = _closure1_slot43;
            var1 = var3.CUSTOM;
 60:
            var2 = var2[var1];
            var1 = {};
            var8 = var1;
            var7 = var5;
            var3 = copyDataProperties(var8, var7);
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var3 = {};
            var5 = var5.modeOptions;
            if(!(var4 == var5)) { _fun0008_ip = 100; continue _fun0008 }
 98:
            var5 = {};
 100:
            var8 = var3;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var2 = var2.modeOptions;
            if(!(var4 == var2)) { _fun0008_ip = 122; continue _fun0008 }
 120:
            var2 = {};
 122:
            var8 = var3;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = 'modeOptions';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot124 = var1;
    var1 = function setInputMode(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot124;
            var2 = var5.context;
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var4 = var5.setInputMode;
            var3 = var6.mode;
            var2 = {};
            var7 = var6.modeOptions;
            var7 = var7.threshold;
            var2['vadThreshold'] = var7;
            var7 = var6.modeOptions;
            var7 = var7.autoThreshold;
            var2['vadAutoThreshold'] = var7;
            var7 = var6.modeOptions;
            var7 = var7.vadUseKrisp;
            if(!var7) { _fun0009_ip = 92; continue _fun0009 }
 84:
            var9 = _closure1_slot155;
            var7 = var9.bind(var1)();
 92:
            if(!var7) { _fun0009_ip = 151; continue _fun0009 }
 95:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 35;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var10 = var8.KrispVADNegativeExperiment;
            var9 = var10.getCurrentConfig;
            var8 = {};
            var11 = 'setInputMode';
            var8['location'] = var11;
            var8 = var9.bind(var10)(var8);
            var8 = var8.disableKrispVAD;
            var7 = !var8;
 151:
            var2['vadUseKrisp'] = var7;
            var7 = var6.modeOptions;
            var8 = var7.vadKrispActivationThreshold;
            var7 = null;
            var9 = var7 != var8;
            var7 = 0.5;
            if(!var9) { _fun0009_ip = 190; continue _fun0009 }
 187:
            var7 = var8;
 190:
            var2['vadKrispActivationThreshold'] = var7;
            var7 = var6.modeOptions;
            var7 = var7.vadLeading;
            var2['vadLeading'] = var7;
            var7 = var6.modeOptions;
            var7 = var7.vadTrailing;
            var2['vadTrailing'] = var7;
            var6 = var6.modeOptions;
            var6 = var6.delay;
            var2['pttReleaseDelay'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot125 = var1;
    var1 = function clampVolume(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = undefined;
            var5 = undefined;
            if(!(var5 === var5)) { _fun0010_ip = 15; continue _fun0010 }
 8:
            var5 = _closure1_slot46;
 15:
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 36;
            var1 = var4[var1];
            var4 = var2.bind(var3)(var1);
            var3 = var4.clamp;
            var2 = arg1;
            var1 = 0;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot126 = var1;
    var1 = function updateConnectionMuteDeaf(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot124;
            var4 = var3.context;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = _closure1_slot72;
            var7 = !var5;
            if(var7) { _fun0011_ip = 38; continue _fun0011 }
 32:
            var7 = var4.mute;
 38:
            if(var7) { _fun0011_ip = 47; continue _fun0011 }
 41:
            var7 = var4.deaf;
 47:
            var6 = var3.context;
            var5 = _closure1_slot51;
            var5 = var5.DEFAULT;
            if(!(var6 !== var5)) { _fun0011_ip = 92; continue _fun0011 }
 66:
            var8 = var3.context;
            var5 = _closure1_slot51;
            var5 = var5.STREAM;
            var6 = var7;
            if(!(var8 === var5)) { _fun0011_ip = 166; continue _fun0011 }
 88:
            var6 = true;
            _fun0011_ip = 166; continue _fun0011;
 92:
            var5 = var7;
            if(var7) { _fun0011_ip = 102; continue _fun0011 }
 98:
            var5 = _closure1_slot79;
 102:
            if(var5) { _fun0011_ip = 109; continue _fun0011 }
 105:
            var5 = _closure1_slot80;
 109:
            if(var5) { _fun0011_ip = 116; continue _fun0011 }
 112:
            var5 = _closure1_slot81;
 116:
            if(var5) { _fun0011_ip = 163; continue _fun0011 }
 119:
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 32;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.didHavePermission;
            var7 = _closure1_slot40;
            var7 = var7.AUDIO;
            var7 = var8.bind(var9)(var7);
            var5 = !var7;
 163:
            var6 = var5;
 166:
            var5 = var3.setSelfMute;
            var5 = var5.bind(var3)(var6);
            var5 = var3.setSelfDeaf;
            var4 = var4.deaf;
            var4 = var5.bind(var3)(var4);
            var4 = var3.context;
            var3 = _closure1_slot51;
            var3 = var3.DEFAULT;
            if(!(var4 === var3)) { _fun0011_ip = 245; continue _fun0011 }
 215:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 37;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateNativeMute;
            var2 = var2.bind(var3)();
 245:
            return var1;
        }
    };
    var _closure1_slot127 = var1;
    var1 = function updateVideo() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var3 = arguments[0];
            var8 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0012_ip = 19; continue _fun0012 }
 12:
            var3 = _closure1_slot83;
 19:
            if(!(var8 === var1)) { _fun0012_ip = 30; continue _fun0012 }
 23:
            var8 = _closure1_slot68;
 30:
            var7 = _closure1_slot68;
            var4 = null;
            var6 = var4 == var7;
            var5 = undefined;
            if(var6) { _fun0012_ip = 54; continue _fun0012 }
 48:
            var5 = var7.desktopSource;
 54:
            var5 = var4 != var5;
            if(!var5) { _fun0012_ip = 105; continue _fun0012 }
 61:
            var6 = var7.desktopSource;
            var9 = var6.id;
            var10 = var4 == var8;
            var6 = undefined;
            if(var10) { _fun0012_ip = 101; continue _fun0012 }
 81:
            var10 = var8.desktopSource;
            var11 = var4 == var10;
            var6 = undefined;
            if(var11) { _fun0012_ip = 101; continue _fun0012 }
 96:
            var6 = var10.id;
 101:
            var5 = var9 !== var6;
 105:
            if(!var5) { _fun0012_ip = 223; continue _fun0012 }
 108:
            var5 = var7.desktopSource;
            var5 = var5.soundshareId;
            var5 = var4 != var5;
            if(!var5) { _fun0012_ip = 157; continue _fun0012 }
 127:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 29;
            var6 = var10[var6];
            var9 = var9.bind(var1)(var6);
            var6 = var9.isWindows;
            var5 = var6.bind(var9)();
 157:
            if(!var5) { _fun0012_ip = 203; continue _fun0012 }
 160:
            var6 = _closure1_slot2;
            var9 = _closure1_slot3;
            var5 = 38;
            var5 = var9[var5];
            var9 = var6.bind(var1)(var5);
            var6 = var9.cancelAttachToProcess;
            var5 = var7.desktopSource;
            var5 = var5.soundshareId;
            var5 = var6.bind(var9)(var5);
 203:
            var9 = _closure1_slot66;
            var6 = var9.setGoLiveSource;
            var5 = _closure1_slot74;
            var5 = var6.bind(var9)(var4, var5);
 223:
            var6 = var4 == var7;
            var5 = undefined;
            if(var6) { _fun0012_ip = 238; continue _fun0012 }
 232:
            var5 = var7.cameraSource;
 238:
            var5 = var4 == var5;
            if(var5) { _fun0012_ip = 343; continue _fun0012 }
 245:
            var6 = var7.cameraSource;
            var9 = var6.videoDeviceGuid;
            var10 = var4 == var8;
            var6 = undefined;
            if(var10) { _fun0012_ip = 287; continue _fun0012 }
 266:
            var10 = var8.cameraSource;
            var11 = var4 == var10;
            var6 = undefined;
            if(var11) { _fun0012_ip = 287; continue _fun0012 }
 281:
            var6 = var10.videoDeviceGuid;
 287:
            var6 = var9 === var6;
            if(!var6) { _fun0012_ip = 340; continue _fun0012 }
 294:
            var7 = var7.cameraSource;
            var9 = var7.audioDeviceGuid;
            var10 = var4 == var8;
            var7 = undefined;
            if(var10) { _fun0012_ip = 336; continue _fun0012 }
 315:
            var10 = var8.cameraSource;
            var11 = var4 == var10;
            var7 = undefined;
            if(var11) { _fun0012_ip = 336; continue _fun0012 }
 330:
            var7 = var10.audioDeviceGuid;
 336:
            var6 = var9 === var7;
 340:
            var5 = var6;
 343:
            if(var5) { _fun0012_ip = 366; continue _fun0012 }
 346:
            var7 = _closure1_slot66;
            var6 = var7.setGoLiveSource;
            var5 = _closure1_slot74;
            var5 = var6.bind(var7)(var4, var5);
 366:
            var5 = _closure1_slot83;
            if(var5) { _fun0012_ip = 376; continue _fun0012 }
 373:
            var5 = var3;
 376:
            if(!var5) { _fun0012_ip = 443; continue _fun0012 }
 379:
            _closure1_slot83 = var3;
            if(var3) { _fun0012_ip = 392; continue _fun0012 }
 386:
            var3 = _closure1_slot49;
            _fun0012_ip = 420; continue _fun0012;
 392:
            var7 = _closure1_slot143;
            var6 = _closure1_slot78;
            var5 = _closure1_slot124;
            var5 = var5.bind(var1)();
            var5 = var5.videoDeviceId;
            var3 = var7.bind(var1)(var6, var5);
 420:
            _closure1_slot84 = var3;
            var6 = _closure1_slot66;
            var5 = var6.setVideoInputDevice;
            var3 = _closure1_slot84;
            var3 = var5.bind(var6)(var3);
 443:
            var _closure1_slot68 = var8;
            if(!(var4 != var8)) { _fun0012_ip = 944; continue _fun0012 }
 454:
            var6 = {};
            var3 = var8.quality;
            var3 = var3.resolution;
            var6['resolution'] = var3;
            var3 = var8.quality;
            var3 = var3.frameRate;
            var6['frameRate'] = var3;
            var3 = var8.desktopSource;
            if(!(var4 != var3)) { _fun0012_ip = 866; continue _fun0012 }
 503:
            var3 = _closure1_slot122;
            var10 = var3.bind(var1)();
            var3 = _closure1_slot124;
            var3 = var3.bind(var1)();
            var13 = var3.videoHook;
            var3 = _closure1_slot134;
            var12 = var3.bind(var1)();
            var11 = 0;
            if(!var12) { _fun0012_ip = 721; continue _fun0012 }
 541:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 29;
            var3 = var7[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isWindows;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0012_ip = 660; continue _fun0012 }
 574:
            var7 = _closure1_slot1;
            var5 = _closure1_slot3;
            var9 = 55;
            var9 = var5[var9];
            var14 = var7.bind(var1)(var9);
            var9 = var14.satisfies;
            var16 = 56;
            var5 = var5[var16];
            var5 = var7.bind(var1)(var5);
            var5 = var4 == var5;
            var7 = undefined;
            if(var5) { _fun0012_ip = 650; continue _fun0012 }
 621:
            var15 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var16];
            var5 = var15.bind(var1)(var5);
            var5 = var5.os;
            var7 = var5.release;
 650:
            var5 = _closure1_slot35;
            var3 = var9.bind(var14)(var7, var5);
 660:
            if(!var3) { _fun0012_ip = 708; continue _fun0012 }
 663:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 39;
            var3 = var7[var3];
            var7 = var5.bind(var1)(var3);
            var5 = var7.getWindowsGraphicsCaptureUpdateExperimentConfig;
            var3 = 'MediaEngineStore_updateVideo';
            var3 = var5.bind(var7)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0012_ip = 714; continue _fun0012 }
 708:
            var3 = _closure1_slot36;
            _fun0012_ip = 718; continue _fun0012;
 714:
            var3 = _closure1_slot34;
 718:
            var11 = var3;
 721:
            var9 = _closure1_slot66;
            var7 = var9.setGoLiveSource;
            var5 = {};
            var3 = {};
            var14 = var8.desktopSource;
            var14 = var14.id;
            var3['id'] = var14;
            var14 = var8.desktopSource;
            var14 = var14.soundshareId;
            var3['soundshareId'] = var14;
            var3['useVideoHook'] = var13;
            var3['useGraphicsCapture'] = var12;
            var3['useGraphicsCaptureApiLevel'] = var11;
            var12 = _closure1_slot64;
            var11 = var12.getExperimentalSoundshare;
            var11 = var11.bind(var12)();
            var3['useLoopback'] = var11;
            var11 = true;
            var3['useQuartzCapturer'] = var11;
            var11 = _closure1_slot135;
            var11 = var11.bind(var1)();
            var3['allowScreenCaptureKit'] = var11;
            var11 = 500;
            var3['videoHookStaleFrameTimeoutMs'] = var11;
            var11 = _closure1_slot61;
            var3['graphicsCaptureStaleFrameTimeoutMs'] = var11;
            var3['hdrCaptureMode'] = var10;
            var5['desktopDescription'] = var3;
            var5['quality'] = var6;
            var3 = _closure1_slot74;
            var3 = var7.bind(var9)(var5, var3);
 866:
            var3 = var8.cameraSource;
            if(!(var4 != var3)) { _fun0012_ip = 944; continue _fun0012 }
 876:
            var5 = _closure1_slot66;
            var4 = var5.setGoLiveSource;
            var3 = {};
            var7 = {};
            var9 = var8.cameraSource;
            var9 = var9.videoDeviceGuid;
            var7['videoDeviceGuid'] = var9;
            var8 = var8.cameraSource;
            var8 = var8.audioDeviceGuid;
            var7['audioDeviceGuid'] = var8;
            var3['cameraDescription'] = var7;
            var3['quality'] = var6;
            var2 = _closure1_slot74;
            var2 = var4.bind(var5)(var3, var2);
 944:
            return var1;
        }
    };
    var _closure1_slot128 = var1;
    var1 = function noiseCancellerErrorToAVUnderlyingError(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot52;
            var2 = var2.CPU_OVERUSE;
            if(!(var2 !== var3)) { _fun0013_ip = 124; continue _fun0013 }
 20:
            var2 = _closure1_slot52;
            var2 = var2.FAILED;
            if(!(var2 !== var3)) { _fun0013_ip = 88; continue _fun0013 }
 34:
            var2 = _closure1_slot52;
            var2 = var2.VAD_CPU_OVERUSE;
            if(!(var2 !== var3)) { _fun0013_ip = 52; continue _fun0013 }
 48:
            var2 = undefined;
            return var2;
 52:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 40;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.NoiseCancellerVadCpuOveruse;
            return var2;
 88:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 40;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.NoiseCancellerFailed;
            return var2;
 124:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 40;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AVUnderlyingError;
            var1 = var1.NoiseCancellerCpuOveruse;
            return var1;
        }
    };
    var _closure1_slot129 = var1;
    var1 = function getAutomaticGainControlConfig(arg1) {
        var6 = arg1;
        var1 = {};
        var1['enabled'] = var6;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var2 = 41;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.getCurrentConfig;
        var3 = {};
        var2 = 'getAutomaticGainControlConfig';
        var3['location'] = var2;
        var2 = {};
        var7 = true;
        var2['autoTrackExposure'] = var7;
        var6 = !var6;
        var2['disable'] = var6;
        var8 = var4.bind(var5)(var3, var2);
        var9 = var1;
        var2 = copyDataProperties(var9, var8);
        return var1;
    };
    var _closure1_slot130 = var1;
    var1 = function setAutomaticGainControl(arg1, arg2) {
        var4 = arg1;
        var3 = var4.setAutomaticGainControl;
        var5 = _closure1_slot130;
        var1 = undefined;
        var2 = arg2;
        var2 = var5.bind(var1)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot131 = var1;
    var1 = function updateConnectionVoiceProcessing(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot124;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var8 = var2.inputDeviceId;
            var6 = var4.setEchoCancellation;
            var7 = _closure1_slot18;
            var5 = var7.hasEchoCancellation;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0014_ip = 52; continue _fun0014 }
 46:
            var5 = var2.echoCancellation;
 52:
            var5 = var6.bind(var4)(var5);
            var6 = var4.setNoiseSuppression;
            var7 = _closure1_slot18;
            var5 = var7.hasNoiseSuppression;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0014_ip = 87; continue _fun0014 }
 81:
            var5 = var2.noiseSuppression;
 87:
            var5 = var6.bind(var4)(var5);
            var6 = _closure1_slot131;
            var7 = _closure1_slot18;
            var5 = var7.hasAutomaticGainControl;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0014_ip = 120; continue _fun0014 }
 114:
            var5 = var2.automaticGainControl;
 120:
            var5 = var6.bind(var1)(var4, var5);
            var6 = var4.setNoiseCancellation;
            var5 = var2.noiseCancellation;
            var5 = var6.bind(var4)(var5);
            var6 = var4.setVoiceFilterId;
            var5 = _closure1_slot102;
            var5 = var6.bind(var4)(var5);
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 29;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isWeb;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0014_ip = 225; continue _fun0014 }
 191:
            var2 = var2.noiseCancellation;
            var3 = -100;
            if(!var2) { _fun0014_ip = 212; continue _fun0014 }
 206:
            var3 = -150;
 212:
            var2 = var4.setSilenceThreshold;
            var2 = var2.bind(var4)(var3);
 225:
            return var1;
        }
    };
    var _closure1_slot132 = var1;
    var1 = function setupMediaEngine() {
        var10 = _closure1_slot66;
        var9 = var10.on;
        var5 = _closure1_slot0;
        var8 = _closure1_slot3;
        var4 = 30;
        var6 = var8[var4];
        var1 = undefined;
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.Connection;
        var6 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot125;
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var5 = _closure1_slot127;
                var5 = var5.bind(var1)(var4);
                var5 = _closure1_slot132;
                var5 = var5.bind(var1)(var4);
                var5 = _closure1_slot124;
                var6 = var5.bind(var1)();
                var9 = var4.setAttenuation;
                var8 = var6.attenuation;
                var7 = var6.attenuateWhileSpeakingSelf;
                var5 = var6.attenuateWhileSpeakingOthers;
                var5 = var9.bind(var4)(var8, var7, var5);
                var7 = var4.setQoS;
                var5 = var6.qos;
                var5 = var7.bind(var4)(var5);
                var7 = var4.setExperimentalEncoders;
                var5 = var6.experimentalEncoders;
                var5 = var7.bind(var4)(var5);
                var8 = var4.setHardwareH264;
                var9 = var6.hardwareEncoding;
                var5 = null;
                var7 = var5 == var9;
                if(var7) { _fun0015_ip = 138; continue _fun0015 }
 135:
                var7 = var9;
 138:
                var7 = var8.bind(var4)(var7);
                var7 = var4.setSoftwareH264;
                var8 = var6.openH264;
                var6 = var5 == var8;
                if(var6) { _fun0015_ip = 165; continue _fun0015 }
 162:
                var6 = var8;
 165:
                var6 = var7.bind(var4)(var6);
                var7 = _closure1_slot20;
                var6 = var7.getGuildId;
                var6 = var6.bind(var7)();
                var8 = _closure1_slot1;
                if(!(var5 == var6)) { _fun0015_ip = 205; continue _fun0015 }
 192:
                var9 = _closure1_slot3;
                var7 = 43;
                var7 = var9[var7];
                _fun0015_ip = 216; continue _fun0015;
 205:
                var10 = _closure1_slot3;
                var9 = 42;
                var7 = var10[var9];
 216:
                var12 = var8.bind(var1)(var7);
                var11 = var12.getCurrentConfig;
                var10 = {};
                var7 = 'setupMediaEngine';
                var10['location'] = var7;
                var8 = var5 != var6;
                if(!var8) { _fun0015_ip = 255; continue _fun0015 }
 246:
                var9 = {};
                var9['guildId'] = var6;
                var8 = var9;
 255:
                var16 = var10;
                var15 = var8;
                var8 = copyDataProperties(var16, var15);
                var9 = {};
                var8 = true;
                var9['autoTrackExposure'] = var8;
                var9 = var11.bind(var12)(var10, var9);
                var11 = var9.muteBeforeProcessing;
                var10 = var9.pttBeforeProcessing;
                var9 = var9.skipEncode;
                if(!var11) { _fun0015_ip = 323; continue _fun0015 }
 301:
                var12 = var4.setExperimentFlag;
                var11 = _closure1_slot50;
                var11 = var11.MUTE_BEFORE_PROCESSING;
                var11 = var12.bind(var4)(var11, var8);
 323:
                if(!var10) { _fun0015_ip = 348; continue _fun0015 }
 326:
                var11 = var4.setExperimentFlag;
                var10 = _closure1_slot50;
                var10 = var10.PTT_BEFORE_PROCESSING;
                var10 = var11.bind(var4)(var10, var8);
 348:
                if(!var9) { _fun0015_ip = 373; continue _fun0015 }
 351:
                var10 = var4.setExperimentFlag;
                var9 = _closure1_slot50;
                var9 = var9.SKIP_ENCODE;
                var9 = var10.bind(var4)(var9, var8);
 373:
                if(!(var5 != var6)) { _fun0015_ip = 456; continue _fun0015 }
 377:
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var9 = 44;
                var9 = var11[var9];
                var11 = var10.bind(var1)(var9);
                var10 = var11.getCurrentConfig;
                var9 = {};
                var9['location'] = var7;
                var9['guildId'] = var6;
                var6 = {};
                var6['autoTrackExposure'] = var8;
                var6 = var10.bind(var11)(var9, var6);
                var6 = var6.enabled;
                if(!var6) { _fun0015_ip = 456; continue _fun0015 }
 434:
                var9 = var4.setExperimentFlag;
                var6 = _closure1_slot50;
                var6 = var6.SIGNAL_RED;
                var6 = var9.bind(var4)(var6, var8);
 456:
                var9 = var4.setExperimentFlag;
                var6 = _closure1_slot50;
                var6 = var6.RESET_DECODER_ON_ERRORS;
                var6 = var9.bind(var4)(var6, var8);
                var9 = var4.setExperimentFlag;
                var6 = _closure1_slot50;
                var6 = var6.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                var6 = var9.bind(var4)(var6, var8);
                var9 = var4.setMinimumJitterBufferLevel;
                var6 = 80;
                var6 = var9.bind(var4)(var6);
                var9 = var4.context;
                var6 = _closure1_slot51;
                var6 = var6.STREAM;
                if(!(var9 === var6)) { _fun0015_ip = 648; continue _fun0015 }
 535:
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var6 = 45;
                var6 = var10[var6];
                var9 = var9.bind(var1)(var6);
                var6 = var9.getConfig;
                var6 = var6.bind(var9)();
                var11 = var6.simulcastEnabled;
                var9 = var6.lqStreamBitrate;
                var6 = var4.configureGoLiveSimulcast;
                var6 = var6.bind(var4)(var11, var9);
                var9 = _closure1_slot0;
                var6 = 46;
                var6 = var10[var6];
                var10 = var9.bind(var1)(var6);
                var9 = var10.getGoLiveTileResolutionExperimentConfig;
                var6 = {'location': 'setupMediaEngine', 'autoTrackExposure': true};
                var6 = var9.bind(var10)(var6);
                var9 = var6.enabled;
                var6 = var4.setGoLiveUsePixelCounts;
                var6 = var6.bind(var4)(var9);
 648:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var9 = 29;
                var6 = var6[var9];
                var10 = var10.bind(var1)(var6);
                var6 = var10.isWindows;
                var6 = var6.bind(var10)();
                if(var6) { _fun0015_ip = 768; continue _fun0015 }
 681:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var10 = var10.bind(var1)(var6);
                var6 = var10.isMac;
                var6 = var6.bind(var10)();
                if(var6) { _fun0015_ip = 738; continue _fun0015 }
 711:
                var11 = _closure1_slot0;
                var10 = _closure1_slot3;
                var10 = var10[var9];
                var11 = var11.bind(var1)(var10);
                var10 = var11.isLinux;
                var6 = var10.bind(var11)();
 738:
                if(!var6) { _fun0015_ip = 868; continue _fun0015 }
 744:
                var10 = var4.setExperimentFlag;
                var6 = _closure1_slot50;
                var6 = var6.SIGNAL_AV1_DECODE;
                var6 = var10.bind(var4)(var6, var8);
                _fun0015_ip = 868; continue _fun0015;
 768:
                var11 = _closure1_slot114;
                if(!(var5 != var11)) { _fun0015_ip = 796; continue _fun0015 }
 776:
                var10 = var11.startsWith;
                var6 = 'NVIDIA';
                var6 = var10.bind(var11)(var6);
                if(var6) { _fun0015_ip = 846; continue _fun0015 }
 796:
                var10 = _closure1_slot114;
                if(!(var5 != var10)) { _fun0015_ip = 822; continue _fun0015 }
 804:
                var6 = var10.startsWith;
                var5 = 'AMD';
                var5 = var6.bind(var10)(var5);
                if(var5) { _fun0015_ip = 846; continue _fun0015 }
 822:
                var6 = var4.setExperimentFlag;
                var5 = _closure1_slot50;
                var5 = var5.SIGNAL_AV1_DECODE;
                var5 = var6.bind(var4)(var5, var8);
                _fun0015_ip = 868; continue _fun0015;
 846:
                var6 = var4.setExperimentFlag;
                var5 = _closure1_slot50;
                var5 = var5.SIGNAL_AV1;
                var5 = var6.bind(var4)(var5, var8);
 868:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var6 = var6.bind(var1)(var5);
                var5 = var6.isWindows;
                var5 = var5.bind(var6)();
                if(!var5) { _fun0015_ip = 920; continue _fun0015 }
 898:
                var6 = var4.setExperimentFlag;
                var5 = _closure1_slot50;
                var5 = var5.SIGNAL_AV1_HARDWARE_DECODE;
                var5 = var6.bind(var4)(var5, var8);
 920:
                var9 = _closure1_slot66;
                var6 = var9.setHasFullbandPerformance;
                var10 = _closure1_slot1;
                var8 = _closure1_slot3;
                var5 = 47;
                var5 = var8[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.bind(var1)();
                var5 = var6.bind(var9)(var5);
                var6 = _closure1_slot0;
                var5 = 48;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.getAudioNackExperimentConfig;
                var5 = var5.bind(var6)(var7);
                var7 = var5.enabled;
                var6 = var4.setRemoteAudioHistory;
                var8 = 0;
                var5 = 0;
                if(!var7) { _fun0015_ip = 1012; continue _fun0015 }
 1006:
                var5 = 1000;
 1012:
                var5 = var6.bind(var4)(var5);
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 49;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = _closure1_slot64;
                var5 = var6.bind(var1)(var5);
                if(!var5) { _fun0015_ip = 1183; continue _fun0015 }
 1052:
                var6 = _closure1_slot11;
                var5 = var6.getSettings;
                var5 = var5.bind(var6)();
                var7 = var4.setExperimentFlag;
                var6 = _closure1_slot50;
                var6 = var6.STREAMER_CLIP;
                var5 = var5.clipsEnabled;
                var5 = var7.bind(var4)(var6, var5);
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 50;
                var5 = var7[var5];
                var9 = var6.bind(var1)(var5);
                var7 = var9.getCurrentConfig;
                var6 = {};
                var5 = 'f627ab_15';
                var6['location'] = var5;
                var5 = {};
                var10 = false;
                var5['autoTrackExposure'] = var10;
                var5 = var7.bind(var9)(var6, var5);
                var6 = var5.enableViewerClipping;
                var5 = var4.setViewerSideClip;
                var5 = var5.bind(var4)(var6);
                var6 = var4.setClipsKeyFrameInterval;
                var5 = _closure1_slot55;
                var5 = var6.bind(var4)(var5);
 1183:
                var6 = _closure1_slot124;
                var5 = var4.context;
                var7 = var6.bind(var1)(var5);
                var6 = var4.setPostponeDecodeLevel;
                var5 = 100;
                var5 = var6.bind(var4)(var5);
                var5 = global;
                var10 = var5.Object;
                var9 = var10.keys;
                var6 = var7.localMutes;
                var10 = var9.bind(var10)(var6);
                var6 = var10.length;
                var6 = var8 < var6;
                var9 = 0;
                if(!var6) { _fun0015_ip = 1307; continue _fun0015 }
 1251:
                var12 = var10[var9];
                var11 = _closure1_slot16;
                var6 = var11.getId;
                var6 = var6.bind(var11)();
                if(!(var12 !== var6)) { _fun0015_ip = 1295; continue _fun0015 }
 1273:
                var11 = var4.setLocalMute;
                var6 = var7.localMutes;
                var6 = var6[var12];
                var6 = var11.bind(var4)(var12, var6);
 1295:
                var9 = var9 + 1;
                var6 = var10.length;
                if(var9 < var6) { _fun0015_ip = 1251; continue _fun0015 }
 1307:
                var10 = var5.Object;
                var9 = var10.keys;
                var6 = var7.localVolumes;
                var10 = var9.bind(var10)(var6);
                var6 = var10.length;
                var6 = var8 < var6;
                var9 = 0;
                if(!var6) { _fun0015_ip = 1399; continue _fun0015 }
 1343:
                var12 = var10[var9];
                var11 = _closure1_slot16;
                var6 = var11.getId;
                var6 = var6.bind(var11)();
                if(!(var12 !== var6)) { _fun0015_ip = 1387; continue _fun0015 }
 1365:
                var11 = var4.setLocalVolume;
                var6 = var7.localVolumes;
                var6 = var6[var12];
                var6 = var11.bind(var4)(var12, var6);
 1387:
                var9 = var9 + 1;
                var6 = var10.length;
                if(var9 < var6) { _fun0015_ip = 1343; continue _fun0015 }
 1399:
                var10 = var5.Object;
                var9 = var10.keys;
                var6 = var7.localPans;
                var10 = var9.bind(var10)(var6);
                var6 = var10.length;
                var6 = var8 < var6;
                var9 = 0;
                if(!var6) { _fun0015_ip = 1484; continue _fun0015 }
 1435:
                var13 = var10[var9];
                var6 = var7.localPans;
                var6 = var6[var13];
                var12 = var4.setLocalPan;
                var11 = var6.left;
                var6 = var6.right;
                var6 = var12.bind(var4)(var13, var11, var6);
                var9 = var9 + 1;
                var6 = var10.length;
                if(var9 < var6) { _fun0015_ip = 1435; continue _fun0015 }
 1484:
                var9 = var5.Object;
                var6 = var9.keys;
                var5 = var7.disabledLocalVideos;
                var6 = var6.bind(var9)(var5);
                var5 = var6.length;
                var5 = var8 < var5;
                var8 = 0;
                if(!var5) { _fun0015_ip = 1558; continue _fun0015 }
 1520:
                var10 = var6[var8];
                var9 = var4.setLocalVideoDisabled;
                var5 = var7.disabledLocalVideos;
                var5 = var5[var10];
                var5 = var9.bind(var4)(var10, var5);
                var8 = var8 + 1;
                var5 = var6.length;
                if(var8 < var5) { _fun0015_ip = 1520; continue _fun0015 }
 1558:
                var7 = var4.on;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var8 = 30;
                var5 = var5[var8];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.Speaking;
                var5 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'SPEAKING';
                    var2['type'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.context;
                    var2['context'] = var5;
                    var5 = arg1;
                    var2['userId'] = var5;
                    var5 = arg2;
                    var2['speakingFlags'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var5 = var7.bind(var4)(var6, var5);
                var6 = var4.context;
                var5 = _closure1_slot51;
                var5 = var5.DEFAULT;
                if(!(var6 === var5)) { _fun0015_ip = 1682; continue _fun0015 }
 1626:
                var5 = false;
                _closure1_slot86 = var5;
                _closure1_slot87 = var5;
                var7 = var4.on;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.SpeakingWhileMuted;
                var5 = function() {
                    var2 = true;
                    _closure1_slot86 = var2;
                    _closure1_slot87 = var2;
                    var3 = _closure1_slot64;
                    var2 = var3.emitChange;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot88;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    var4 = _closure1_slot88;
                    var3 = var4.start;
                    var2 = _closure1_slot62;
                    var1 = function() {
                        var2 = false;
                        _closure1_slot87 = var2;
                        var2 = _closure1_slot64;
                        var1 = var2.emitChange;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = var7.bind(var4)(var6, var5);
 1682:
                var10 = var4.on;
                var7 = _closure1_slot0;
                var5 = _closure1_slot3;
                var6 = var5[var8];
                var6 = var7.bind(var1)(var6);
                var6 = var6.BaseConnectionEvent;
                var9 = var6.DesktopSourceEnd;
                var6 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE';
                    var2['type'] = var5;
                    var5 = {};
                    var6 = _closure3_slot0;
                    var6 = var6.context;
                    var5['context'] = var6;
                    var2['settings'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var10.bind(var4)(var9, var6);
                var10 = var4.on;
                var6 = var5[var8];
                var6 = var7.bind(var1)(var6);
                var6 = var6.BaseConnectionEvent;
                var9 = var6.InteractionRequired;
                var6 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'MEDIA_ENGINE_INTERACTION_REQUIRED';
                    var2['type'] = var5;
                    var5 = arg1;
                    var2['required'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var10.bind(var4)(var9, var6);
                var10 = var4.on;
                var6 = var5[var8];
                var6 = var7.bind(var1)(var6);
                var6 = var6.BaseConnectionEvent;
                var9 = var6.VideoHookInitialize;
                var6 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var3 = _closure1_slot68;
                        var6 = null;
                        var4 = var6 == var3;
                        var1 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0016_ip = 26; continue _fun0016 }
 20:
                        var2 = var3.desktopSource;
 26:
                        if(!(var6 != var2)) { _fun0016_ip = 168; continue _fun0016 }
 33:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var2 = 52;
                        var2 = var10[var2];
                        var5 = var9.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot24;
                        var3 = var2.VIDEOHOOK_INITIALIZED;
                        var2 = {};
                        var7 = arg1;
                        var2['backend'] = var7;
                        var7 = arg2;
                        var2['format'] = var7;
                        var7 = arg3;
                        var2['framebuffer_format'] = var7;
                        var7 = arg4;
                        var2['sample_count'] = var7;
                        var7 = arg5;
                        var2['success'] = var7;
                        var7 = arg6;
                        var2['reinitialization'] = var7;
                        var7 = 53;
                        var7 = var10[var7];
                        var7 = var9.bind(var1)(var7);
                        var8 = _closure1_slot68;
                        var9 = var6 == var8;
                        var6 = undefined;
                        if(var9) { _fun0016_ip = 150; continue _fun0016 }
 144:
                        var6 = var8.desktopSource;
 150:
                        var11 = var7.bind(var1)(var6);
                        var12 = var2;
                        var6 = copyDataProperties(var12, var11);
                        var2 = var4.bind(var5)(var3, var2);
 168:
                        return var1;
                    }
                };
                var6 = var10.bind(var4)(var9, var6);
                var10 = var4.on;
                var6 = var5[var8];
                var6 = var7.bind(var1)(var6);
                var6 = var6.BaseConnectionEvent;
                var9 = var6.NoiseCancellationError;
                var6 = function(arg1) {
                    var5 = arg1;
                    var4 = _closure1_slot58;
                    var3 = var4.warn;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'noisecancellererror event: ';
                    var1 = var6.bind(var1)(var5);
                    var1 = var3.bind(var4)(var1);
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var8 = 40;
                    var3 = var4[var8];
                    var1 = undefined;
                    var7 = var9.bind(var1)(var3);
                    var6 = var7.reportAVError;
                    var3 = {};
                    var8 = var4[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.AVError;
                    var8 = var8.NOISE_CANCELLER_ERROR;
                    var3['type'] = var8;
                    var8 = _closure1_slot129;
                    var8 = var8.bind(var1)(var5);
                    var3['underlyingError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = true;
                    _closure1_slot107 = var3;
                    var3 = _closure1_slot1;
                    var6 = 52;
                    var6 = var4[var6];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.track;
                    var2 = _closure1_slot24;
                    var6 = var2.VOICE_PROCESSING;
                    var2 = {};
                    var2['noise_canceller_error'] = var5;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 51;
                    var6 = var4[var2];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.dispatch;
                    var6 = {'type': 'AUDIO_SET_NOISE_SUPPRESSION', 'enabled': true};
                    var6 = var7.bind(var8)(var6);
                    var6 = var4[var2];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.dispatch;
                    var6 = {'type': 'AUDIO_SET_NOISE_CANCELLATION', 'enabled': false};
                    var6 = var7.bind(var8)(var6);
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR';
                    var2['type'] = var6;
                    var2['code'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var10.bind(var4)(var9, var6);
                var10 = var4.on;
                var6 = var5[var8];
                var6 = var7.bind(var1)(var6);
                var6 = var6.BaseConnectionEvent;
                var9 = var6.VoiceActivityDetectorError;
                var6 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure1_slot58;
                    var2 = var3.warn;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'voiceactivitydetectorerror event: ';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var7 = 40;
                    var2 = var4[var7];
                    var1 = undefined;
                    var6 = var8.bind(var1)(var2);
                    var3 = var6.reportAVError;
                    var2 = {};
                    var7 = var4[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.AVError;
                    var7 = var7.NOISE_CANCELLER_ERROR;
                    var2['type'] = var7;
                    var7 = _closure1_slot129;
                    var7 = var7.bind(var1)(var5);
                    var2['underlyingError'] = var7;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure1_slot1;
                    var2 = 52;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot24;
                    var6 = var2.VOICE_PROCESSING;
                    var2 = {};
                    var2['noise_canceller_error'] = var5;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 51;
                    var6 = var4[var2];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'AUDIO_SET_MODE';
                    var6['type'] = var9;
                    var9 = _closure1_slot51;
                    var9 = var9.DEFAULT;
                    var6['context'] = var9;
                    var9 = _closure1_slot26;
                    var9 = var9.VOICE_ACTIVITY;
                    var6['mode'] = var9;
                    var9 = {};
                    var11 = _closure1_slot124;
                    var10 = _closure1_slot51;
                    var10 = var10.DEFAULT;
                    var10 = var11.bind(var1)(var10);
                    var12 = var10.modeOptions;
                    var13 = var9;
                    var10 = copyDataProperties(var13, var12);
                    var11 = false;
                    var10 = 'vadUseKrisp';
                    var9[var10] = var11;
                    var6['options'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR';
                    var2['type'] = var6;
                    var2['code'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var10.bind(var4)(var9, var6);
                var10 = var4.on;
                var6 = var5[var8];
                var6 = var7.bind(var1)(var6);
                var6 = var6.BaseConnectionEvent;
                var9 = var6.SdpError;
                var6 = function(arg1, arg2, arg3, arg4) {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 52;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot24;
                    var3 = var2.SDP_ERROR;
                    var2 = {};
                    var6 = arg1;
                    var2['operation'] = var6;
                    var6 = arg2;
                    var2['error'] = var6;
                    var6 = arg3;
                    var2['type'] = var6;
                    var6 = arg4;
                    var2['sdp'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var6 = var10.bind(var4)(var9, var6);
                var6 = var4.on;
                var5 = var5[var8];
                var5 = var7.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var5 = var5.VideoState;
                var3 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'MEDIA_ENGINE_VIDEO_STATE_CHANGED';
                    var2['type'] = var5;
                    var5 = arg1;
                    var2['videoState'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.context;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3 = var6.bind(var4)(var5, var3);
                var5 = var4.setBitRate;
                var3 = _closure1_slot17;
                var3 = var3.bitrate;
                var3 = var5.bind(var4)(var3);
                var3 = var4.applyVideoQualityMode;
                var2 = _closure1_slot23;
                var2 = var2.mode;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.DeviceChange;
        var6 = function(arg1, arg2, arg3) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'MEDIA_ENGINE_DEVICES';
            var2['type'] = var5;
            var5 = arg1;
            var2['inputDevices'] = var5;
            var5 = arg2;
            var2['outputDevices'] = var5;
            var5 = arg3;
            var2['videoDevices'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.VolumeChange;
        var6 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUDIO_VOLUME_CHANGE';
            var2['type'] = var5;
            var5 = arg1;
            var2['inputVolume'] = var5;
            var5 = arg2;
            var2['outputVolume'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.DesktopSourceEnd;
        var6 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'settings': null};
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.AudioPermission;
        var6 = function(arg1) {
            var2 = true;
            _closure1_slot109 = var2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'MEDIA_ENGINE_PERMISSION', 'kind': 'audio'};
            var5 = arg1;
            var2['granted'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.VideoPermission;
        var6 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'MEDIA_ENGINE_PERMISSION', 'kind': 'video'};
            var5 = arg1;
            var2['granted'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.WatchdogTimeout;
        var11 = _closure1_slot10;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 219; continue _fun0017 }
 10:
                    var2 = undefined;
                    var7 = undefined;
 14: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 54;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.submitLiveCrashReport;
                    var4 = {};
                    var8 = {};
                    var9 = 'Voice Watchdog Timeout';
                    var8['message'] = var9;
                    var4['message'] = var8;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=70);
 68:
                    return var4;
 70:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0017_ip = 78; continue _fun0017 }
 76: // try_end0
                    _fun0017_ip = 107; continue _fun0017;
 78:
                    return var4;
 81: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = var4;
                    var4 = var4.status;
                    var5 = 'number';
                    var4 = typeof var4;
                    if(!(var5 === var4)) { _fun0017_ip = 107; continue _fun0017 }
 102:
                    var7 = var3.status;
 107:
                    var6 = _closure1_slot58;
                    var5 = var6.warn;
                    var8 = var7;
                    var4 = null;
                    var4 = var4 != var8;
                    var9 = 200;
                    if(!var4) { _fun0017_ip = 137; continue _fun0017 }
 134:
                    var9 = var7;
 137:
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'Watchdog timeout, report submission status: ';
                    var4 = var8.bind(var4)(var9);
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 52;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot24;
                    var4 = var3.VOICE_WATCHDOG_TIMEOUT;
                    var3 = {};
                    var3['minidump_submission_error'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    return var2;
 219:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var11.bind(var1)(var6);
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.VideoInputInitialized;
        var6 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var7 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 52;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot24;
                var3 = var2.VIDEO_INPUT_INITIALIZED;
                var2 = {};
                var8 = var7.description;
                var8 = var8.name;
                var2['device_name'] = var8;
                var9 = var7.initializationTimerExpired;
                var8 = null;
                if(var9) { _fun0018_ip = 131; continue _fun0018 }
 71:
                var9 = global;
                var11 = var9.Math;
                var10 = var11.round;
                var12 = var7.timeToFirstFrame;
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var9 = 28;
                var9 = var14[var9];
                var9 = var13.bind(var1)(var9);
                var9 = var9.Millis;
                var9 = var9.SECOND;
                var9 = var12 * var9;
                var8 = var10.bind(var11)(var9);
 131:
                var2['time_to_first_frame_ms'] = var8;
                var8 = var7.initializationTimerExpired;
                var2['timed_out'] = var8;
                var7 = var7.entropy;
                var2['activity'] = var7;
                var8 = _closure1_slot20;
                var7 = var8.getMediaSessionId;
                var7 = var7.bind(var8)();
                var2['media_session_id'] = var7;
                var7 = _closure1_slot20;
                var6 = var7.getRTCConnectionId;
                var6 = var6.bind(var7)();
                var2['rtc_connection_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.AudioInputInitialized;
        var6 = function(arg1) {
            var7 = arg1;
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var1 = 52;
            var2 = var12[var1];
            var1 = undefined;
            var5 = var11.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot24;
            var3 = var2.AUDIO_INPUT_INITIALIZED;
            var2 = {};
            var8 = var7.description;
            var8 = var8.name;
            var2['device_name'] = var8;
            var8 = global;
            var9 = var8.Math;
            var8 = var9.round;
            var10 = var7.timeToInitialized;
            var7 = 28;
            var7 = var12[var7];
            var7 = var11.bind(var1)(var7);
            var7 = var7.Millis;
            var7 = var7.SECOND;
            var7 = var10 * var7;
            var7 = var8.bind(var9)(var7);
            var2['time_to_initialized_ms'] = var7;
            var7 = _closure1_slot20;
            var6 = var7.getRTCConnectionId;
            var6 = var6.bind(var7)();
            var2['rtc_connection_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.ClipsRecordingRestartNeeded;
        var6 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'CLIPS_RESTART';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.ClipsInitFailure;
        var6 = function(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 51;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 51;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CLIPS_INIT_FAILURE';
                var2['type'] = var5;
                var6 = _closure3_slot0;
                var2['errMsg'] = var6;
                var5 = _closure3_slot1;
                var2['applicationName'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.ClipsRecordingEnded;
        var6 = function(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var6 = arg2;
                var4 = _closure1_slot69;
                var2 = null;
                var7 = var2 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0019_ip = 43; continue _fun0019 }
 23:
                var4 = var4.desktopSource;
                var7 = var2 == var4;
                var5 = undefined;
                if(var7) { _fun0019_ip = 43; continue _fun0019 }
 38:
                var5 = var4.id;
 43:
                var4 = arg1;
                if(!(var5 === var4)) { _fun0019_ip = 133; continue _fun0019 }
 50:
                var4 = var2 != var6;
                if(!var4) { _fun0019_ip = 95; continue _fun0019 }
 57:
                var7 = _closure1_slot68;
                var8 = var2 == var7;
                var5 = undefined;
                if(var8) { _fun0019_ip = 91; continue _fun0019 }
 70:
                var7 = var7.desktopSource;
                var8 = var2 == var7;
                var5 = undefined;
                if(var8) { _fun0019_ip = 91; continue _fun0019 }
 85:
                var5 = var7.soundshareId;
 91:
                var4 = var5 !== var6;
 95:
                if(!var4) { _fun0019_ip = 129; continue _fun0019 }
 98:
                var5 = _closure1_slot2;
                var7 = _closure1_slot3;
                var4 = 38;
                var4 = var7[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.cancelAttachToProcess;
                var4 = var4.bind(var5)(var6);
 129:
                var _closure1_slot69 = var2;
 133:
                return var1;
            }
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.NativeScreenSharePickerUpdate;
        var6 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'NATIVE_SCREEN_SHARE_PICKER_UPDATE';
            var2['type'] = var5;
            var5 = arg1;
            var2['existing'] = var5;
            var5 = arg2;
            var2['content'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.NativeScreenSharePickerCancel;
        var6 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'NATIVE_SCREEN_SHARE_PICKER_CANCEL';
            var2['type'] = var5;
            var5 = arg1;
            var2['existing'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.NativeScreenSharePickerError;
        var6 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'NATIVE_SCREEN_SHARE_PICKER_ERROR';
            var2['type'] = var5;
            var5 = arg1;
            var2['error'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.AudioDeviceModuleError;
        var6 = function(arg1, arg2, arg3) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 52;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot24;
            var3 = var2.AUDIO_DEVICE_MODULE_ERROR;
            var2 = {};
            var6 = arg1;
            var2['audio_device_module'] = var6;
            var6 = arg2;
            var2['code'] = var6;
            var6 = arg3;
            var2['device_name'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.VideoCodecError;
        var6 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var6 = arg1;
                var2 = var6.mode;
                var1 = 'encode';
                if(!(var1 !== var2)) { _fun0020_ip = 55; continue _fun0020 }
 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 40;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVError;
                var8 = var1.VIDEO_DECODE_ERROR;
                _fun0020_ip = 92; continue _fun0020;
 55:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 40;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVError;
                var8 = var1.VIDEO_ENCODE_ERROR;
 92:
                var7 = {};
                var1 = var6.codecStandard;
                var7['videoCodec'] = var1;
                var1 = var6.message;
                var7['errorMessage'] = var1;
                var5 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 40;
                var3 = var9[var2];
                var1 = undefined;
                var4 = var5.bind(var1)(var3);
                var3 = var4.reportAVError;
                var2 = var9[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.AVError;
                var2 = var2.VIDEO_ENCODE_ERROR;
                if(!(var8 !== var2)) { _fun0020_ip = 208; continue _fun0020 }
 173:
                var2 = {};
                var2['type'] = var8;
                var11 = var2;
                var10 = var7;
                var5 = copyDataProperties(var11, var10);
                var9 = var6.implName;
                var5 = 'videoDecoder';
                var2[var5] = var9;
                _fun0020_ip = 242; continue _fun0020;
 208:
                var5 = {};
                var5['type'] = var8;
                var11 = var5;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var7 = var6.implName;
                var6 = 'videoEncoder';
                var5[var6] = var7;
                var2 = var5;
 242:
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var6 = var9.bind(var10)(var7, var6);
        var10 = _closure1_slot66;
        var9 = var10.on;
        var6 = var8[var4];
        var6 = var5.bind(var1)(var6);
        var6 = var6.MediaEngineEvent;
        var7 = var6.ConnectionStats;
        var6 = function(arg1) {
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'MEDIA_ENGINE_CONNECTION_STATS';
            var2['type'] = var5;
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var3 = var1.stats;
                var2 = var1.connection;
                var1 = {};
                var1['stats'] = var3;
                var3 = var2.mediaEngineConnectionId;
                var1['mediaEngineConnectionId'] = var3;
                var3 = _closure1_slot63;
                var3 = parseFloat(var3);
                var4 = var3 + 1;
                _closure1_slot63 = var4;
                var1['version'] = var3;
                var2 = var2.context;
                var1['context'] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2['connectionStats'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var9.bind(var10)(var7, var6);
        var7 = _closure1_slot66;
        var6 = var7.on;
        var4 = var8[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.MediaEngineEvent;
        var5 = var4.VoiceQueueMetrics;
        var4 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = function processQueueMetricsForAnalytics(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var4 = arg1;
                        var2 = var4.taskMetrics;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0022_ip = 425; continue _fun0022 }
 20:
                        var2 = var4.taskMetrics;
                        var2 = var2.length;
                        var14 = 0;
                        if(!(var14 !== var2)) { _fun0022_ip = 425; continue _fun0022 }
 40:
                        var2 = var4.taskMetrics;
                        var5 = var2.length;
                        var2 = 1;
                        if(!(var2 !== var5)) { _fun0022_ip = 423; continue _fun0022 }
 61:
                        var2 = {'metrics_period_ms': null, 'total_tasks': 0, 'total_exec_time_ns': 0};
                        var5 = var4.periodMs;
                        var2['metrics_period_ms'] = var5;
                        var7 = var4.taskMetrics;
                        var6 = var7.reduce;
                        var5 = function(arg1, arg2) {
                            var1 = arg2;
                            var2 = var1.count;
                            var1 = arg1;
                            var1 = var1 + var2;
                            return var1;
                        };
                        var5 = var6.bind(var7)(var5, var14);
                        var2['total_tasks'] = var5;
                        var7 = var4.taskMetrics;
                        var6 = var7.reduce;
                        var5 = function(arg1, arg2) {
                            var1 = arg2;
                            var2 = var1.totalExecTimeNs;
                            var1 = arg1;
                            var1 = var1 + var2;
                            return var1;
                        };
                        var5 = var6.bind(var7)(var5, var14);
                        var2['total_exec_time_ns'] = var5;
                        var18 = var4.taskMetrics;
                        var7 = new Array(0);
                        var19 = var7;
                        var17 = 0;
                        var5 = arraySpread(var19, var18, var17);
                        var6 = var7.sort;
                        var5 = function(arg1, arg2) {
                            var1 = arg2;
                            var2 = var1.longestExecTimeNs;
                            var1 = arg1;
                            var1 = var1.longestExecTimeNs;
                            var1 = var2 - var1;
                            return var1;
                        };
                        var5 = var6.bind(var7)(var5);
                        var18 = var4.taskMetrics;
                        var6 = new Array(0);
                        var19 = var6;
                        var4 = arraySpread(var19, var18, var17);
                        var4 = var6.sort;
                        var3 = function(arg1, arg2) {
                            var1 = arg2;
                            var2 = var1.longestQueueTimeNs;
                            var1 = arg1;
                            var1 = var1.longestQueueTimeNs;
                            var1 = var2 - var1;
                            return var1;
                        };
                        var10 = var4.bind(var6)(var3);
                        var9 = 3;
                        var3 = global;
                        var8 = 'delayed_task_';
                        var7 = '_name';
                        var6 = '_longest_queue_time_ns';
                        var13 = 'slow_task_';
                        var12 = '_longest_exec_time_ns';
                        var11 = 0;
 248:
                        var4 = var5.length;
                        if(!(var11 < var4)) { _fun0022_ip = 314; continue _fun0022 }
 257:
                        var4 = var5[var11];
                        var15 = var3.HermesInternal;
                        var15 = var15.concat;
                        var16 = var15.bind(var13)(var11, var7);
                        var15 = var4.name;
                        var2[var16] = var15;
                        var15 = var3.HermesInternal;
                        var15 = var15.concat;
                        var15 = var15.bind(var13)(var11, var12);
                        var4 = var4.longestExecTimeNs;
                        var2[var15] = var4;
 314:
                        var11 = var11 + 1;
                        var4 = 0;
                        if(var11 < var9) { _fun0022_ip = 248; continue _fun0022 }
 323:
                        var11 = var10.length;
                        if(!(var4 < var11)) { _fun0022_ip = 389; continue _fun0022 }
 332:
                        var11 = var10[var4];
                        var12 = var3.HermesInternal;
                        var12 = var12.concat;
                        var13 = var12.bind(var8)(var4, var7);
                        var12 = var11.name;
                        var2[var13] = var12;
                        var12 = var3.HermesInternal;
                        var12 = var12.concat;
                        var12 = var12.bind(var8)(var4, var6);
                        var11 = var11.longestQueueTimeNs;
                        var2[var12] = var11;
 389:
                        var4 = var4 + 1;
                        if(var4 < var9) { _fun0022_ip = 323; continue _fun0022 }
 396:
                        var4 = var3.JSON;
                        var3 = var4.stringify;
                        var3 = var3.bind(var4)(var5);
                        var2['full_task_report'] = var3;
                        return var2;
 423:
                        return var1;
 425:
                        return var1;
                    }
                };
                var1 = undefined;
                var2 = arg1;
                var5 = var3.bind(var1)(var2);
                var2 = null;
                if(!(var2 !== var5)) { _fun0021_ip = 67; continue _fun0021 }
 23:
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 52;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.track;
                var2 = _closure1_slot24;
                var2 = var2.VOICE_QUEUE_METRICS;
                var2 = var3.bind(var4)(var2, var5);
 67:
                return var1;
            }
        };
        var4 = var6.bind(var7)(var5, var4);
        var6 = _closure1_slot66;
        var5 = var6.setOnVideoContainerResized;
        var4 = function(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var1 = arg3;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 51;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 51;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'VIDEO_SIZE_UPDATE';
                var1['type'] = var4;
                var5 = _closure3_slot0;
                var1['streamId'] = var5;
                var5 = _closure3_slot1;
                var1['width'] = var5;
                var4 = _closure3_slot2;
                var1['height'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var5 = _closure1_slot117;
        var4 = var5.reset;
        var4 = var4.bind(var5)();
        var3 = _closure1_slot21;
        var4 = var3.bind(var1)();
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0023_ip = 22; continue _fun0023 }
 9:
                var2 = var1.gpu_brand;
                _closure1_slot114 = var2;
 22:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot133 = var1;
    var1 = function supportsWindowsGraphicsCapture() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 29;
            var1 = var4[var1];
            var8 = undefined;
            var3 = var3.bind(var8)(var1);
            var1 = var3.isWindows;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0024_ip = 126; continue _fun0024 }
 38:
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var4 = 55;
            var4 = var3[var4];
            var5 = var6.bind(var8)(var4);
            var4 = var5.satisfies;
            var9 = 56;
            var3 = var3[var9];
            var6 = var6.bind(var8)(var3);
            var3 = null;
            var6 = var3 == var6;
            var3 = undefined;
            if(var6) { _fun0024_ip = 116; continue _fun0024 }
 87:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.os;
            var3 = var6.release;
 116:
            var2 = _closure1_slot37;
            var1 = var4.bind(var5)(var3, var2);
 126:
            return var1;
        }
    };
    var _closure1_slot134 = var1;
    var1 = function supportsScreenCaptureKit() {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 29;
            var1 = var4[var1];
            var8 = undefined;
            var3 = var3.bind(var8)(var1);
            var1 = var3.isMac;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0025_ip = 63; continue _fun0025 }
 38:
            var5 = _closure1_slot66;
            var4 = var5.supports;
            var3 = _closure1_slot45;
            var3 = var3.SCREEN_CAPTURE_KIT;
            var1 = var4.bind(var5)(var3);
 63:
            if(!var1) { _fun0025_ip = 154; continue _fun0025 }
 66:
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var4 = 55;
            var4 = var3[var4];
            var5 = var6.bind(var8)(var4);
            var4 = var5.satisfies;
            var9 = 56;
            var3 = var3[var9];
            var6 = var6.bind(var8)(var3);
            var3 = null;
            var6 = var3 == var6;
            var3 = undefined;
            if(var6) { _fun0025_ip = 144; continue _fun0025 }
 115:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.os;
            var3 = var6.release;
 144:
            var2 = _closure1_slot31;
            var1 = var4.bind(var5)(var3, var2);
 154:
            return var1;
        }
    };
    var _closure1_slot135 = var1;
    var1 = function supportsAutomaticAudioSubsystem() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 29;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isWindows;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0026_ip = 63; continue _fun0026 }
 38:
            var5 = _closure1_slot66;
            var4 = var5.supports;
            var3 = _closure1_slot45;
            var3 = var3.AUTOMATIC_AUDIO_SUBSYSTEM;
            var1 = var4.bind(var5)(var3);
 63:
            if(!var1) { _fun0026_ip = 91; continue _fun0026 }
 66:
            var4 = _closure1_slot66;
            var3 = var4.supports;
            var2 = _closure1_slot45;
            var2 = var2.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
            var1 = var3.bind(var4)(var2);
 91:
            return var1;
        }
    };
    var _closure1_slot136 = var1;
    var1 = function isReadyToMigrateToSingleAdmOffering() {
        var3 = _closure1_slot66;
        var2 = var3.supports;
        var1 = _closure1_slot45;
        var1 = var1.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot137 = var1;
    var1 = function loadSettings() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 57;
            var2 = var1[var6];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var4 = var2.Storage;
            var2 = var4.get;
            var7 = 'audio';
            var13 = var2.bind(var4)(var7);
            var4 = null;
            if(!(var4 != var13)) { _fun0027_ip = 132; continue _fun0027 }
 51:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var8 = var2[var6];
            var8 = var5.bind(var1)(var8);
            var11 = var8.Storage;
            var10 = var11.set;
            var9 = _closure1_slot59;
            var8 = {};
            var12 = _closure1_slot51;
            var12 = var12.DEFAULT;
            var8[var12] = var13;
            var8 = var10.bind(var11)(var9, var8);
            var2 = var2[var6];
            var2 = var5.bind(var1)(var2);
            var5 = var2.Storage;
            var2 = var5.remove;
            var2 = var2.bind(var5)(var7);
 132:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var1)(var2);
            var6 = var2.Storage;
            var5 = var6.get;
            var2 = _closure1_slot59;
            var2 = var5.bind(var6)(var2);
            if(!(var4 == var2)) { _fun0027_ip = 175; continue _fun0027 }
 173:
            var2 = {};
 175:
            _closure1_slot70 = var2;
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 36;
            var2 = var6[var2];
            var7 = var5.bind(var1)(var2);
            var6 = var7.each;
            var5 = _closure1_slot70;
            var2 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var3 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 36;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.defaultsDeep;
                    var4 = _closure1_slot121;
                    var4 = var4.bind(var1)();
                    var4 = var5.bind(var6)(var3, var4);
                    var5 = var3.modeOptions;
                    var4 = null;
                    var5 = var4 != var5;
                    if(!var5) { _fun0028_ip = 86; continue _fun0028 }
 63:
                    var6 = var3.modeOptions;
                    var6 = var6.shortcut;
                    var7 = 'string';
                    var6 = typeof var6;
                    var5 = var7 === var6;
 86:
                    if(!var5) { _fun0028_ip = 144; continue _fun0028 }
 89:
                    var6 = var3.modeOptions;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 58;
                    var5 = var8[var5];
                    var8 = var7.bind(var1)(var5);
                    var7 = var8.toCombo;
                    var5 = var3.modeOptions;
                    var5 = var5.shortcut;
                    var5 = var7.bind(var8)(var5);
                    var6['shortcut'] = var5;
 144:
                    var5 = var3.modeOptions;
                    var5 = var4 != var5;
                    if(!var5) { _fun0028_ip = 170; continue _fun0028 }
 157:
                    var7 = var3.vadUseKrispSettingVersion;
                    var6 = 4;
                    var5 = var6 !== var7;
 170:
                    if(!var5) { _fun0028_ip = 196; continue _fun0028 }
 173:
                    var5 = 4;
                    var3['vadUseKrispSettingVersion'] = var5;
                    var6 = var3.modeOptions;
                    var5 = true;
                    var6['vadUseKrisp'] = var5;
 196:
                    var5 = var3.qosMigrated;
                    if(var5) { _fun0028_ip = 221; continue _fun0028 }
 205:
                    var5 = true;
                    var3['qosMigrated'] = var5;
                    var5 = false;
                    var3['qos'] = var5;
 221:
                    var5 = var3.vadThrehsoldMigrated;
                    if(var5) { _fun0028_ip = 287; continue _fun0028 }
 230:
                    var5 = true;
                    var3['vadThrehsoldMigrated'] = var5;
                    var5 = var3.modeOptions;
                    var7 = var4 == var5;
                    var6 = undefined;
                    if(var7) { _fun0028_ip = 259; continue _fun0028 }
 253:
                    var6 = var5.threshold;
 259:
                    var5 = -40;
                    if(!(var5 === var6)) { _fun0028_ip = 287; continue _fun0028 }
 269:
                    var6 = var3.modeOptions;
                    var5 = -60;
                    var6['threshold'] = var5;
 287:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 29;
                    var2 = var6[var2];
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.isWeb;
                    var2 = var2.bind(var5)();
                    if(var2) { _fun0028_ip = 357; continue _fun0028 }
 320:
                    var5 = var3.ncUseKrispSettingVersion;
                    var2 = 1;
                    if(!(var2 !== var5)) { _fun0028_ip = 392; continue _fun0028 }
 333:
                    var3['ncUseKrispSettingVersion'] = var2;
                    var2 = false;
                    var3['noiseSuppression'] = var2;
                    var2 = true;
                    var3['noiseCancellation'] = var2;
                    _fun0028_ip = 392; continue _fun0028;
 357:
                    var5 = var3.ncUseKrispjsSettingVersion;
                    var2 = 1;
                    if(!(var2 !== var5)) { _fun0028_ip = 392; continue _fun0028 }
 370:
                    var3['ncUseKrispjsSettingVersion'] = var2;
                    var2 = false;
                    var3['noiseSuppression'] = var2;
                    var2 = true;
                    var3['noiseCancellation'] = var2;
 392:
                    var5 = var3.hardwareEnabledVersion;
                    var2 = 1;
                    if(!(var2 !== var5)) { _fun0028_ip = 419; continue _fun0028 }
 405:
                    var5 = true;
                    var3['hardwareH264'] = var5;
                    var3['hardwareEnabledVersion'] = var2;
 419:
                    var2 = var3.hardwareEncoding;
                    if(!(var4 == var2)) { _fun0028_ip = 441; continue _fun0028 }
 429:
                    var2 = var3.hardwareH264;
                    var3['hardwareEncoding'] = var2;
 441:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var5, var2);
            var2 = _closure1_slot124;
            var2 = var2.bind(var1)();
            var7 = _closure1_slot66;
            var6 = var7.setAudioInputDevice;
            var5 = var2.inputDeviceId;
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot66;
            var6 = var7.setAudioOutputDevice;
            var5 = var2.outputDeviceId;
            var5 = var6.bind(var7)(var5);
            var5 = _closure1_slot128;
            var5 = var5.bind(var1)();
            var7 = _closure1_slot66;
            var6 = var7.setInputVolume;
            var5 = var2.inputVolume;
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot66;
            var6 = var7.setOutputVolume;
            var5 = var2.outputVolume;
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot66;
            var6 = var7.setH264Enabled;
            var8 = var2.hardwareEncoding;
            var5 = var4 == var8;
            if(var5) { _fun0027_ip = 348; continue _fun0027 }
 345:
            var5 = var8;
 348:
            if(var5) { _fun0027_ip = 357; continue _fun0027 }
 351:
            var5 = var2.openH264;
 357:
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot66;
            var6 = var7.setAv1Enabled;
            var8 = var2.hardwareEncoding;
            var5 = var4 == var8;
            if(var5) { _fun0027_ip = 388; continue _fun0027 }
 385:
            var5 = var8;
 388:
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot66;
            var5 = var6.setH265Enabled;
            var7 = var2.hardwareEncoding;
            var4 = var4 == var7;
            if(var4) { _fun0027_ip = 419; continue _fun0027 }
 416:
            var4 = var7;
 419:
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot66;
            var5 = var6.setAecDump;
            var4 = var2.aecDumpEnabled;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot66;
            var5 = var6.setSidechainCompression;
            var4 = var2.sidechainCompression;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot66;
            var5 = var6.setSidechainCompressionStrength;
            var4 = var2.sidechainCompressionStrength;
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot66;
            var3 = var4.setAudioInputBypassSystemProcessing;
            var2 = var2.bypassSystemInputProcessing;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot138 = var1;
    var1 = function mergeSettings(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var4 = arguments[1];
            var3 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0029_ip = 25; continue _fun0029 }
 12:
            var1 = _closure1_slot51;
            var4 = var1.DEFAULT;
 25:
            if(!(var3 === var5)) { _fun0029_ip = 31; continue _fun0029 }
 29:
            var3 = true;
 31:
            var1 = _closure1_slot123;
            var1 = var1.bind(var5)(var4);
            var4 = global;
            var7 = var4.Object;
            var6 = var7.assign;
            var4 = arg1;
            var4 = var6.bind(var7)(var1, var4);
            if(!var3) { _fun0029_ip = 113; continue _fun0029 }
 68:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 57;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.Storage;
            var4 = var5.set;
            var3 = _closure1_slot59;
            var2 = _closure1_slot70;
            var2 = var4.bind(var5)(var3, var2);
 113:
            return var1;
        }
    };
    var _closure1_slot139 = var1;
    var1 = function tryEnable() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var2 = _closure1_slot72;
            if(var2) { _fun0030_ip = 41; continue _fun0030 }
 10:
            var2 = _closure1_slot66;
            var1 = var2.enable;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 51;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {'type': 'MEDIA_ENGINE_SET_AUDIO_ENABLED', 'enabled': true, 'unmute': false};
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 41:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot140 = var1;
    var18 = function makeDisabledDevice(arg1) {
        var1 = {};
        var2 = _closure1_slot48;
        var1['id'] = var2;
        var2 = 0;
        var1['index'] = var2;
        var2 = arg1;
        var1['name'] = var2;
        var2 = true;
        var1['disabled'] = var2;
        var2 = undefined;
        var1['hardwareId'] = var2;
        var1['containerId'] = var2;
        return var1;
    };
    var _closure1_slot141 = var18;
    var1 = function convertDevices(arg1, arg2) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var3 = arg1;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0031_ip = 87; continue _fun0031 }
 14:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 36;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var3 = var1.bind(var2)(var3);
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.index;
                var1['index'] = var3;
                var3 = var2.name;
                var1['name'] = var3;
                var3 = false;
                var1['disabled'] = var3;
                var3 = var2.facing;
                var1['facing'] = var3;
                var3 = var2.hardwareId;
                var1['hardwareId'] = var3;
                var2 = var2.containerId;
                var1['containerId'] = var2;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.keyBy;
            var1 = 'id';
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
 87:
            var3 = _closure1_slot141;
            var2 = undefined;
            var1 = arg2;
            var3 = var3.bind(var2)(var1);
            var1 = {};
            var2 = var3.id;
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot142 = var1;
    var1 = function getDeviceId(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var6 = arg1;
            var1 = arg2;
            var2 = var6[var1];
            var3 = null;
            if(!(var3 == var2)) { _fun0032_ip = 65; continue _fun0032 }
 16:
            var7 = _closure1_slot1;
            var5 = _closure1_slot3;
            var4 = 36;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var5 = var4.bind(var5)(var6);
            var4 = var5.values;
            var5 = var4.bind(var5)();
            var4 = var5.first;
            var2 = var4.bind(var5)();
 65:
            if(!(var3 != var2)) { _fun0032_ip = 74; continue _fun0032 }
 69:
            var1 = var2.id;
 74:
            return var1;
        }
    };
    var _closure1_slot143 = var1;
    var1 = function setInputDevices(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var6 = _closure1_slot76;
            var7 = _closure1_slot142;
            var9 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 59;
            var4 = var5[var3];
            var1 = undefined;
            var4 = var9.bind(var1)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var3 = var5[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3./QIjDA;
            var4 = var4.bind(var8)(var3);
            var3 = arg1;
            var3 = var7.bind(var1)(var3, var4);
            _closure1_slot76 = var3;
            var4 = _closure1_slot1;
            var3 = 36;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEqual;
            var3 = _closure1_slot76;
            var3 = var4.bind(var5)(var3, var6);
            if(var3) { _fun0033_ip = 161; continue _fun0033 }
 118:
            var3 = _closure1_slot124;
            var3 = var3.bind(var1)();
            var5 = _closure1_slot143;
            var4 = _closure1_slot76;
            var3 = var3.inputDeviceId;
            var4 = var5.bind(var1)(var4, var3);
            var3 = _closure1_slot66;
            var2 = var3.setAudioInputDevice;
            var2 = var2.bind(var3)(var4);
 161:
            return var1;
        }
    };
    var _closure1_slot144 = var1;
    var1 = function setOutputDevices(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var6 = _closure1_slot77;
            var7 = _closure1_slot142;
            var9 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 59;
            var4 = var5[var3];
            var1 = undefined;
            var4 = var9.bind(var1)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var3 = var5[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.xlUg0t;
            var4 = var4.bind(var8)(var3);
            var3 = arg1;
            var3 = var7.bind(var1)(var3, var4);
            _closure1_slot77 = var3;
            var4 = _closure1_slot1;
            var3 = 36;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEqual;
            var3 = _closure1_slot77;
            var3 = var4.bind(var5)(var3, var6);
            if(var3) { _fun0034_ip = 161; continue _fun0034 }
 118:
            var3 = _closure1_slot124;
            var3 = var3.bind(var1)();
            var5 = _closure1_slot143;
            var4 = _closure1_slot77;
            var3 = var3.outputDeviceId;
            var4 = var5.bind(var1)(var4, var3);
            var3 = _closure1_slot66;
            var2 = var3.setAudioOutputDevice;
            var2 = var2.bind(var3)(var4);
 161:
            return var1;
        }
    };
    var _closure1_slot145 = var1;
    var1 = function setVideoDevices(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
            var5 = arg1;
            var2 = var5.length;
            var1 = 0;
            var1 = var2 > var1;
            _closure1_slot90 = var1;
            var6 = _closure1_slot78;
            var4 = _closure1_slot142;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 59;
            var7 = var10[var3];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.WKWARU;
            var3 = var7.bind(var8)(var3);
            var3 = var4.bind(var1)(var5, var3);
            _closure1_slot78 = var3;
            var3 = _closure1_slot83;
            if(!var3) { _fun0035_ip = 217; continue _fun0035 }
 105:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 36;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEqual;
            var3 = _closure1_slot78;
            var3 = var4.bind(var5)(var3, var6);
            if(var3) { _fun0035_ip = 217; continue _fun0035 }
 144:
            var4 = _closure1_slot78;
            var3 = _closure1_slot84;
            var3 = var4[var3];
            var3 = var1 !== var3;
            var5 = _closure1_slot84;
            var4 = _closure1_slot48;
            var4 = var5 === var4;
            if(!var4) { _fun0035_ip = 202; continue _fun0035 }
 175:
            var5 = _closure1_slot48;
            var6 = var6[var5];
            var5 = null;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0035_ip = 199; continue _fun0035 }
 194:
            var5 = var6.disabled;
 199:
            var4 = var5;
 202:
            var2 = _closure1_slot128;
            if(var3) { _fun0035_ip = 212; continue _fun0035 }
 209:
            var3 = var4;
 212:
            var2 = var2.bind(var1)(var3);
 217:
            return var1;
        }
    };
    var _closure1_slot146 = var1;
    var1 = function applyRemoteSettings() {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0036_ip = 13; continue _fun0036 }
 11:
            var2 = false;
 13:
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot14;
            var2 = var2.settings;
            var4 = var2.audioContextSettings;
            var2 = null;
            if(!(var2 == var4)) { _fun0036_ip = 68; continue _fun0036 }
 50:
            var2 = {};
            var3 = {};
            var2['user'] = var3;
            var3 = {};
            var2['stream'] = var3;
            var4 = var2;
 68:
            _closure2_slot1 = var4;
            var5 = function _loop() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                    var4 = _closure2_slot2;
                    var1 = _closure1_slot41;
                    var1 = var1.USER;
                    if(!(var4 !== var1)) { _fun0037_ip = 38; continue _fun0037 }
 26:
                    var1 = _closure1_slot51;
                    var4 = var1.STREAM;
                    _fun0037_ip = 48; continue _fun0037;
 38:
                    var1 = _closure1_slot51;
                    var4 = var1.DEFAULT;
 48:
                    var _closure3_slot0 = var4;
                    var1 = _closure1_slot51;
                    var1 = var1.STREAM;
                    if(!(var4 !== var1)) { _fun0037_ip = 72; continue _fun0037 }
 66:
                    var1 = _closure1_slot46;
                    _fun0037_ip = 76; continue _fun0037;
 72:
                    var1 = _closure1_slot47;
 76:
                    var _closure3_slot1 = var1;
                    var5 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var11 = var5[var1];
                    var1 = null;
                    if(!(var1 == var11)) { _fun0037_ip = 100; continue _fun0037 }
 98:
                    var11 = {};
 100:
                    var _closure3_slot2 = var11;
                    var5 = _closure1_slot124;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var6 = var5.localMutes;
                    var _closure3_slot3 = var6;
                    var5 = var5.localVolumes;
                    var _closure3_slot4 = var5;
                    var15 = function _loop2(arg1, arg2) {
                        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                            var7 = arg1;
                            var5 = arg2;
                            var _closure4_slot0 = var7;
                            var _closure4_slot1 = var5;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 60;
                            var3 = var3[var1];
                            var1 = undefined;
                            var9 = var6.bind(var1)(var3);
                            var8 = var9.getPendingAudioSettings;
                            var6 = _closure3_slot0;
                            var8 = var8.bind(var9)(var6, var7);
                            var6 = null;
                            if(!(var6 == var8)) { _fun0038_ip = 156; continue _fun0038 }
 66:
                            var6 = var5.muted;
                            var8 = _closure3_slot3;
                            if(var6) { _fun0038_ip = 85; continue _fun0038 }
 79:
                            var6 = delete var8[var7];
                            _fun0038_ip = 91; continue _fun0038;
 85:
                            var6 = true;
                            var8[var7] = var6;
 91:
                            var8 = var5.volume;
                            var6 = _closure3_slot1;
                            if(!(var8 === var6)) { _fun0038_ip = 115; continue _fun0038 }
 105:
                            var6 = _closure3_slot4;
                            var6 = delete var6[var7];
                            _fun0038_ip = 129; continue _fun0038;
 115:
                            var6 = _closure3_slot4;
                            var5 = var5.volume;
                            var6[var7] = var5;
 129:
                            var5 = _closure1_slot66;
                            var4 = var5.eachConnection;
                            var3 = _closure3_slot0;
                            var2 = function(arg1) {
                                var4 = arg1;
                                var5 = var4.setLocalVolume;
                                var3 = _closure4_slot0;
                                var1 = _closure4_slot1;
                                var2 = var1.volume;
                                var2 = var5.bind(var4)(var3, var2);
                                var2 = var4.setLocalMute;
                                var1 = var1.muted;
                                var1 = var2.bind(var4)(var3, var1);
                                var1 = undefined;
                                return var1;
                            };
                            var2 = var4.bind(var5)(var2, var3);
                            return var1;
 156:
                            var1 = 1;
                            return var1;
                        }
                    };
                    var8 = global;
                    var10 = var8.Object;
                    var9 = var10.entries;
                    var14 = var9.bind(var10)(var11);
                    var9 = var14.length;
                    var12 = 0;
                    var9 = var12 < var9;
                    var13 = 2;
                    var11 = 1;
                    var10 = 0;
                    if(!var9) { _fun0037_ip = 221; continue _fun0037 }
 181:
                    var16 = var14[var10];
                    var9 = _closure1_slot7;
                    var9 = var9.bind(var1)(var16, var13);
                    var16 = var9[var12];
                    var9 = var9[var11];
                    var9 = var15.bind(var1)(var16, var9);
                    var10 = var10 + 1;
                    var9 = var14.length;
                    if(var10 < var9) { _fun0037_ip = 181; continue _fun0037 }
 221:
                    var7 = _closure2_slot0;
                    if(!var7) { _fun0037_ip = 363; continue _fun0037 }
 231:
                    var9 = function _loop3(arg1) {
                        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                            var4 = arg1;
                            var _closure4_slot0 = var4;
                            var3 = _closure3_slot2;
                            var5 = var3[var4];
                            var3 = null;
                            if(!(var3 == var5)) { _fun0039_ip = 74; continue _fun0039 }
 26:
                            var3 = _closure3_slot3;
                            var3 = delete var3[var4];
                            var3 = _closure3_slot4;
                            var3 = delete var3[var4];
                            var4 = _closure1_slot66;
                            var3 = var4.eachConnection;
                            var2 = _closure3_slot0;
                            var1 = function(arg1) {
                                var4 = arg1;
                                var2 = var4.setLocalVolume;
                                var3 = _closure4_slot0;
                                var1 = _closure3_slot1;
                                var1 = var2.bind(var4)(var3, var1);
                                var2 = var4.setLocalMute;
                                var1 = false;
                                var1 = var2.bind(var4)(var3, var1);
                                var1 = undefined;
                                return var1;
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            var1 = undefined;
                            return var1;
 74:
                            var1 = 1;
                            return var1;
                        }
                    };
                    var7 = _closure1_slot119;
                    var10 = var8.Set;
                    var11 = var8.Object;
                    var3 = var11.keys;
                    var18 = var3.bind(var11)(var6);
                    var3 = new Array(0);
                    var19 = var3;
                    var17 = 0;
                    var17 = arraySpread(var19, var18, var17);
                    var12 = var8.Object;
                    var8 = var12.keys;
                    var18 = var8.bind(var12)(var5);
                    var19 = var3;
                    var8 = arraySpread(var19, var18, var17);
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {constructor: {value: var10}});
                    var20 = var8;
                    var19 = var3;
                    var3 = new var20[var10](var19, var18);
                    var3 = var3 instanceof Object ? var3 : var8;
                    var8 = var7.bind(var1)(var3);
                    var7 = var8.bind(var1)();
                    var3 = var7.done;
                    if(var3) { _fun0037_ip = 363; continue _fun0037 }
 338:
                    var3 = var7.value;
                    var3 = var9.bind(var1)(var3);
                    var10 = var8.bind(var1)();
                    var3 = var10.done;
                    var7 = var10;
                    if(!var3) { _fun0037_ip = 338; continue _fun0037 }
 363:
                    var3 = _closure1_slot139;
                    var2 = {};
                    var2['localMutes'] = var6;
                    var2['localVolumes'] = var5;
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                }
            };
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var4 = var2.bind(var3)(var4);
            var2 = var4.length;
            var3 = 0;
            var2 = var3 < var2;
            if(!var2) { _fun0036_ip = 133; continue _fun0036 }
 109:
            var2 = var4[var3];
            _closure2_slot2 = var2;
            var2 = var5.bind(var1)();
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0036_ip = 109; continue _fun0036 }
 133:
            return var1;
        }
    };
    var _closure1_slot147 = var1;
    var1 = function getSoundshareId(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot64;
            var2 = null;
            if(!(var2 == var3)) { _fun0040_ip = 53; continue _fun0040 }
 16:
            var5 = _closure1_slot58;
            var4 = var5.info;
            var3 = 'Error: trying to get soundshare id before MediaEngineStore is instantiated.';
            var3 = var4.bind(var5)(var3);
            var3 = {'soundshareId': null, 'soundshareSession': ''};
            return var3;
 53:
            var4 = _closure1_slot64;
            var3 = var4.getExperimentalSoundshare;
            var4 = var3.bind(var4)();
            var3 = var6;
            if(var4) { _fun0040_ip = 106; continue _fun0040 }
 73:
            var7 = _closure1_slot1;
            var5 = _closure1_slot3;
            var4 = 54;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var4 = var5.getAudioPid;
            var3 = var4.bind(var5)(var6);
 106:
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0040_ip = 150; continue _fun0040 }
 117:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 54;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.generateSessionFromPid;
            var2 = var1.bind(var4)(var3);
 150:
            var1 = {};
            var1['soundshareId'] = var3;
            var1['soundshareSession'] = var2;
            return var1;
        }
    };
    var _closure1_slot148 = var1;
    var1 = function tryHookSoundshare(arg1, arg2) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 29;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isWindows;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0041_ip = 104; continue _fun0041 }
 47:
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var3 = 38;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.attachToProcess;
            var3 = {};
            var7 = arg2;
            var3['soundshare_session'] = var7;
            var4 = var4.bind(var5)(var6, var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0042_ip = 45; continue _fun0042 }
 18:
                    var5 = _closure1_slot13;
                    var4 = var5.shouldContinueWithoutElevatedProcessForPID;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
 45:
                    if(var2) { _fun0042_ip = 89; continue _fun0042 }
 48:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 51;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 51;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'MEDIA_ENGINE_SOUNDSHARE_FAILED';
                        var2['type'] = var5;
                        var5 = _closure3_slot0;
                        var2['errorMessage'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 104:
            return var1;
        }
    };
    var _closure1_slot149 = var1;
    var1 = function resetProbingState() {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var1 = _closure1_slot51;
            var5 = var1.DEFAULT;
            var2 = _closure1_slot124;
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            var2 = var2.videoToggleStateMap;
            var4 = global;
            var6 = var4.Object;
            var4 = var6.entries;
            var10 = var4.bind(var6)(var2);
            var4 = var10.length;
            var9 = 0;
            var4 = var9 < var4;
            var8 = 2;
            var7 = 1;
            var6 = 0;
            if(!var4) { _fun0043_ip = 123; continue _fun0043 }
 71:
            var11 = var10[var6];
            var4 = _closure1_slot7;
            var11 = var4.bind(var1)(var11, var8);
            var4 = var11[var9];
            var12 = var11[var7];
            var11 = _closure1_slot29;
            var11 = var11.AUTO_PROBING;
            if(!(var12 === var11)) { _fun0043_ip = 111; continue _fun0043 }
 107:
            var4 = delete var2[var4];
 111:
            var6 = var6 + 1;
            var4 = var10.length;
            if(var6 < var4) { _fun0043_ip = 71; continue _fun0043 }
 123:
            var4 = _closure1_slot139;
            var3 = {};
            var3['videoToggleStateMap'] = var2;
            var2 = false;
            var2 = var4.bind(var1)(var3, var5, var2);
            return var1;
        }
    };
    var _closure1_slot150 = var1;
    var1 = function trackVoiceProcessing(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
            var3 = _closure1_slot124;
            var1 = undefined;
            var9 = var3.bind(var1)();
            var4 = _closure1_slot66;
            var3 = var4.getAudioSubsystem;
            var8 = var3.bind(var4)();
            var4 = _closure1_slot66;
            var3 = var4.getAudioLayer;
            var7 = var3.bind(var4)();
            var5 = _closure1_slot143;
            var4 = _closure1_slot76;
            var3 = var9.inputDeviceId;
            var4 = var5.bind(var1)(var4, var3);
            var3 = _closure1_slot76;
            var3 = var3[var4];
            var4 = null;
            var4 = var4 == var3;
            var6 = undefined;
            if(var4) { _fun0044_ip = 85; continue _fun0044 }
 80:
            var6 = var3.name;
 85:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 52;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot24;
            var3 = var2.VOICE_PROCESSING;
            var2 = {};
            var10 = var9.echoCancellation;
            var2['echo_cancellation'] = var10;
            var10 = var9.noiseCancellation;
            var2['noise_cancellation'] = var10;
            var10 = var9.noiseSuppression;
            var2['noise_suppression'] = var10;
            var10 = var9.automaticGainControl;
            var2['automatic_gain_control'] = var10;
            var10 = arg1;
            var2['location'] = var10;
            var9 = var9.bypassSystemInputProcessing;
            var2['bypass_system_input_processing'] = var9;
            var2['audio_subsystem'] = var8;
            var2['audio_layer'] = var7;
            var2['input_device'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot151 = var1;
    var1 = function setSidechainCompression(arg1) {
        var4 = _closure1_slot139;
        var2 = {};
        var1 = arg1;
        var2['sidechainCompression'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = _closure1_slot66;
        var3 = var4.setSidechainCompression;
        var2 = var2.sidechainCompression;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot152 = var1;
    var1 = function setMaybePreprocessMute() {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 68;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.getCurrentConfig;
            var4 = {};
            var3 = 'setMaybePreprocessMute';
            var4['location'] = var3;
            var3 = {};
            var7 = true;
            var3['autoTrackExposure'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var4 = var3.voiceFiltersPreProcessMute;
            if(!var4) { _fun0045_ip = 88; continue _fun0045 }
 65:
            var6 = _closure1_slot112;
            var5 = var6.has;
            var3 = 'voice_filter_preview';
            var3 = var5.bind(var6)(var3);
            var4 = !var3;
 88:
            if(!var4) { _fun0045_ip = 114; continue _fun0045 }
 91:
            var6 = _closure1_slot112;
            var5 = var6.has;
            var3 = 'mic_test';
            var3 = var5.bind(var6)(var3);
            var4 = !var3;
 114:
            var3 = _closure1_slot66;
            var2 = var3.setMaybePreprocessMute;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot153 = var1;
    var1 = function setLoopback() {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
            var3 = _closure1_slot124;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot112;
            var5 = var4.size;
            var4 = 0;
            var5 = var5 > var4;
            var8 = var3.inputDeviceId;
            var6 = _closure1_slot18;
            var4 = var6.hasEchoCancellation;
            var11 = var4.bind(var6)(var8);
            if(var11) { _fun0046_ip = 58; continue _fun0046 }
 52:
            var11 = var3.echoCancellation;
 58:
            var6 = _closure1_slot18;
            var4 = var6.hasNoiseSuppression;
            var10 = var4.bind(var6)(var8);
            if(var10) { _fun0046_ip = 82; continue _fun0046 }
 76:
            var10 = var3.noiseSuppression;
 82:
            var6 = _closure1_slot130;
            var7 = _closure1_slot18;
            var4 = var7.hasAutomaticGainControl;
            var4 = var4.bind(var7)(var8);
            if(var4) { _fun0046_ip = 110; continue _fun0046 }
 104:
            var4 = var3.automaticGainControl;
 110:
            var9 = var6.bind(var1)(var4);
            var7 = var3.noiseCancellation;
            var8 = _closure1_slot102;
            var6 = _closure1_slot112;
            var4 = var6.has;
            var3 = 'voice_filter';
            var6 = var4.bind(var6)(var3);
            if(!var6) { _fun0046_ip = 164; continue _fun0046 }
 148:
            var3 = _closure1_slot112;
            var4 = var3.size;
            var3 = 1;
            var6 = var3 === var4;
 164:
            var4 = _closure1_slot66;
            var3 = var4.setLoopback;
            var2 = {};
            var2['echoCancellation'] = var11;
            var11 = !var5;
            var2['echoCancellationPreEcho'] = var11;
            var2['noiseSuppression'] = var10;
            var2['automaticGainControlConfig'] = var9;
            var2['noiseCancellation'] = var7;
            var7 = null;
            var7 = var7 !== var8;
            var2['voiceFilters'] = var7;
            var2['loopbackUseAudioMode'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var _closure1_slot154 = var1;
    var1 = function hasAdvancedVoiceActivity() {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var1 = _closure1_slot96;
            if(var1) { _fun0047_ip = 12; continue _fun0047 }
 10:
            var1 = true;
 12:
            return var1;
        }
    };
    var _closure1_slot155 = var1;
    var1 = function _setupKrispNativeModule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0048_ip = 564; continue _fun0048 }
 10:
                    var2 = undefined;
                    var11 = undefined;
                    var5 = undefined;
                    var8 = undefined;
                    var4 = undefined;
 20: // try_start_0 // try_start_1
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var13 = 70;
                    var3 = var3[var13];
                    var9 = var9.bind(var2)(var3);
                    var3 = var9.ensureModule;
                    var12 = 'discord_krisp';
                    var3 = var3.bind(var9)(var12);
                    SaveGenerator(address=64);
 62:
                    return var3;
 64:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0048_ip = 257; continue _fun0048 }
 73:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var9 = var9[var13];
                    var10 = var10.bind(var2)(var9);
                    var9 = var10.requireModule;
                    var9 = var9.bind(var10)(var12);
                    var5 = var9;
                    var10 = true;
                    _closure1_slot96 = var10;
                    var9 = var9.getSdkVersion;
                    var10 = null;
                    var12 = var10 == var9;
                    var9 = undefined;
                    if(var12) { _fun0048_ip = 140; continue _fun0048 }
 127:
                    var13 = var5;
                    var12 = var13.getSdkVersion;
                    var9 = var12.bind(var13)();
 140:
                    _closure1_slot97 = var9;
                    var9 = var5;
                    var9 = var9.getSuppressionLevel;
                    var12 = var10 == var9;
                    var9 = undefined;
                    if(var12) { _fun0048_ip = 175; continue _fun0048 }
 162:
                    var13 = var5;
                    var12 = var13.getSuppressionLevel;
                    var9 = var12.bind(var13)();
 175:
                    var11 = var9;
                    var12 = var10 != var9;
                    var9 = 100;
                    if(!var12) { _fun0048_ip = 191; continue _fun0048 }
 188:
                    var9 = var11;
 191:
                    _closure1_slot98 = var9;
                    var9 = var5;
                    var9 = var9.getNcModels;
                    if(!(var10 != var9)) { _fun0048_ip = 238; continue _fun0048 }
 208:
                    var9 = var5;
                    var5 = var9.getNcModels;
                    var10 = var5.bind(var9)();
                    var9 = var10.then;
                    var5 = function(arg1) {
                        var2 = arg1;
                        _closure1_slot100 = var2;
                        var2 = _closure1_slot64;
                        var1 = var2.emitChange;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var5 = var9.bind(var10)(var5);
 238:
                    var9 = _closure1_slot64;
                    var5 = var9.emitChange;
                    var5 = var5.bind(var9)();
 252: // try_end0
                    _fun0048_ip = 539; continue _fun0048;
 257: // try_end1
                    var5 = false;
                    _closure1_slot95 = var5;
                    return var3;
 266: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = var7;
                    var11 = _closure1_slot58;
                    var10 = var11.warn;
                    var13 = var7.message;
                    var5 = global;
                    var9 = var5.HermesInternal;
                    var12 = var9.concat;
                    var9 = 'Failed to load Krisp module: ';
                    var9 = var12.bind(var9)(var13);
                    var9 = var10.bind(var11)(var9);
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var9 = 71;
                    var9 = var11[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = var10.captureException;
                    var9 = var9.bind(var10)(var7);
                    var9 = _closure1_slot52;
                    var8 = var9.INITIALIZED;
                    var9 = var7.message;
                    var7 = var9.includes;
                    var12 = ': ';
                    var7 = var7.bind(var9)(var12);
                    if(!var7) { _fun0048_ip = 473; continue _fun0048 }
 382:
                    var7 = var5.parseInt;
                    var10 = var6.message;
                    var9 = var10.substring;
                    var11 = var6.message;
                    var6 = var11.indexOf;
                    var11 = var6.bind(var11)(var12);
                    var6 = 1;
                    var6 = var11 + var6;
                    var6 = var9.bind(var10)(var6);
                    var6 = var7.bind(var2)(var6);
                    var4 = var6;
                    var5 = var5.isNaN;
                    var5 = var5.bind(var2)(var6);
                    if(var5) { _fun0048_ip = 460; continue _fun0048 }
 449:
                    var6 = var4;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0048_ip = 460; continue _fun0048 }
 458:
                    _fun0048_ip = 470; continue _fun0048;
 460:
                    var5 = _closure1_slot52;
                    var4 = var5.INITIALIZED;
 470:
                    var8 = var4;
 473:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 52;
                    var4 = var6[var4];
                    var7 = var5.bind(var2)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot24;
                    var5 = var4.VOICE_PROCESSING;
                    var4 = {};
                    var4['noise_canceller_error'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure1_slot139;
                    var3 = {};
                    var5 = false;
                    var3['noiseCancellation'] = var5;
                    var3 = var4.bind(var2)(var3);
 539: // try_end2
                    var3 = false;
                    _closure1_slot95 = var3;
                    return var2;
 551: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var3 = false;
                    _closure1_slot95 = var3;
                    throw var2;
 564:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot156 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot156 = var1;
    var1 = function maybeSetupKrispModule() {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var5 = 29;
            var3 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWindows;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0049_ip = 74; continue _fun0049 }
 38:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 70;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var6 = var4.architecture;
            var4 = 'arm64';
            var3 = var4 !== var6;
 74:
            if(var3) { _fun0049_ip = 104; continue _fun0049 }
 77:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var5];
            var6 = var6.bind(var1)(var4);
            var4 = var6.isLinux;
            var3 = var4.bind(var6)();
 104:
            if(var3) { _fun0049_ip = 134; continue _fun0049 }
 107:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var5];
            var6 = var6.bind(var1)(var4);
            var4 = var6.isMac;
            var3 = var4.bind(var6)();
 134:
            if(!var3) { _fun0049_ip = 173; continue _fun0049 }
 137:
            var3 = _closure1_slot95;
            if(var3) { _fun0049_ip = 173; continue _fun0049 }
 144:
            var3 = _closure1_slot96;
            if(var3) { _fun0049_ip = 173; continue _fun0049 }
 151:
            var3 = true;
            _closure1_slot95 = var3;
            var3 = function setupKrispNativeModule() {
                var1 = undefined;
                var4 = _closure1_slot156;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3 = var3.bind(var1)();
            _fun0049_ip = 301; continue _fun0049;
 173:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWeb;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0049_ip = 231; continue _fun0049 }
 203:
            var6 = _closure1_slot66;
            var4 = var6.supports;
            var3 = _closure1_slot45;
            var3 = var3.NOISE_CANCELLATION;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0049_ip = 281; continue _fun0049 }
 231:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWeb;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0049_ip = 301; continue _fun0049 }
 261:
            var4 = _closure1_slot139;
            var3 = {};
            var5 = false;
            var3['noiseCancellation'] = var5;
            var3 = var4.bind(var1)(var3);
            _fun0049_ip = 301; continue _fun0049;
 281:
            var3 = true;
            _closure1_slot96 = var3;
            var3 = _closure1_slot64;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
 301:
            return var1;
        }
    };
    var _closure1_slot157 = var1;
    var7 = function handleVoiceFilterFailed() {
        var3 = _closure1_slot139;
        var2 = {};
        var1 = null;
        var2['mostRecentlyRequestedVoiceFilter'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = function setAudioSubsystem(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot44;
            var2 = var2.AUTOMATIC;
            if(!(var4 !== var2)) { _fun0050_ip = 57; continue _fun0050 }
 20:
            var5 = _closure1_slot139;
            var3 = {};
            var2 = false;
            var3['automaticAudioSubsystem'] = var2;
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var3 = _closure1_slot66;
            var2 = var3.setAudioSubsystem;
            var2 = var2.bind(var3)(var4);
            _fun0050_ip = 85; continue _fun0050;
 57:
            var4 = _closure1_slot139;
            var3 = {};
            var2 = true;
            var3['automaticAudioSubsystem'] = var2;
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var1 = _closure1_slot159;
            var1 = var1.bind(var2)();
 85:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot158 = var1;
    var1 = function interpretAutomaticAudioSubsystem() {
        var3 = _closure1_slot66;
        var2 = var3.queueAudioSubsystem;
        var1 = _closure1_slot44;
        var1 = var1.EXPERIMENTAL;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot159 = var1;
    var10 = function handleUserSettingsModal(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
            var1 = arg1;
            var3 = var1.section;
            var2 = _closure1_slot28;
            var2 = var2.VOICE;
            if(!(var3 === var2)) { _fun0051_ip = 35; continue _fun0051 }
 25:
            var2 = _closure1_slot140;
            var1 = undefined;
            var1 = var2.bind(var1)();
 35:
            var1 = false;
            return var1;
        }
    };
    var13 = global;
    var12 = var13.Object;
    var9 = var12.defineProperty;
    var2 = {};
    var11 = true;
    var2['value'] = var11;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var2);
    var9 = 0;
    var2 = var6[var9];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var22 = 2;
    var2 = var6[var22];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var25 = 5;
    var2 = var6[var25];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = 8;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.getSystemAnalyticsInfo;
    var _closure1_slot21 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot22 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot23 = var2;
    var2 = 21;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.AnalyticEvents;
    var _closure1_slot24 = var12;
    var12 = var2.AppStates;
    var _closure1_slot25 = var12;
    var23 = var2.InputModes;
    var _closure1_slot26 = var23;
    var12 = var2.RTCConnectionStates;
    var _closure1_slot27 = var12;
    var12 = var2.UserSettingsSections;
    var _closure1_slot28 = var12;
    var12 = var2.VideoToggleState;
    var _closure1_slot29 = var12;
    var2 = var2.ChannelTypes;
    var _closure1_slot30 = var2;
    var2 = 22;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.DARWIN_SCKIT_VERSION;
    var _closure1_slot31 = var12;
    var12 = var2.DARWIN_SCKIT_AUDIO_VERSION;
    var _closure1_slot32 = var12;
    var12 = var2.DARWIN_SCKIT_SINGLE_TYPE_VERSION;
    var _closure1_slot33 = var12;
    var12 = var2.WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD;
    var _closure1_slot34 = var12;
    var12 = var2.WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER;
    var _closure1_slot35 = var12;
    var12 = var2.WINDOWS_GRAPHICS_CAPTURE_BUILD;
    var _closure1_slot36 = var12;
    var12 = var2.WINDOWS_GRAPHICS_CAPTURE_SEMVER;
    var _closure1_slot37 = var12;
    var2 = var2.WINDOWS_SOUNDSHARE_VERSION;
    var _closure1_slot38 = var2;
    var2 = 23;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.NativePermissionStates;
    var _closure1_slot39 = var12;
    var14 = var2.NativePermissionTypes;
    var _closure1_slot40 = var14;
    var2 = 24;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.ProtoAudioSettingsContextTypes;
    var _closure1_slot41 = var12;
    var2 = var2.UserSettingsTypes;
    var _closure1_slot42 = var2;
    var2 = 25;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var20 = var2.InputProfile;
    var _closure1_slot43 = var20;
    var2 = 26;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.AudioSubsystems;
    var _closure1_slot44 = var12;
    var16 = var2.Features;
    var _closure1_slot45 = var16;
    var12 = var2.DEFAULT_VOLUME;
    var _closure1_slot46 = var12;
    var12 = var2.DEFAULT_STREAM_VOLUME;
    var _closure1_slot47 = var12;
    var17 = var2.DEFAULT_DEVICE_ID;
    var _closure1_slot48 = var17;
    var12 = var2.DISABLED_DEVICE_ID;
    var _closure1_slot49 = var12;
    var15 = var2.ExperimentFlags;
    var _closure1_slot50 = var15;
    var15 = var2.MediaEngineContextTypes;
    var _closure1_slot51 = var15;
    var19 = var2.NoiseCancellerError;
    var _closure1_slot52 = var19;
    var19 = var2.MediaTypes;
    var _closure1_slot53 = var19;
    var19 = var2.VideoToggleReason;
    var _closure1_slot54 = var19;
    var19 = var2.VIEWERSIDE_CLIP_KFI_MS;
    var _closure1_slot55 = var19;
    var19 = var2.SIMULCAST_HQ_QUALITY;
    var _closure1_slot56 = var19;
    var2 = var2.SIMULCAST_LQ_QUALITY;
    var _closure1_slot57 = var2;
    var2 = 27;
    var2 = var6[var2];
    var19 = var8.bind(var1)(var2);
    var2 = var19.prototype;
    var21 = Object.create(var2, {constructor: {value: var19}});
    var2 = 'MediaEngineStore';
    var29 = var21;
    var28 = var2;
    var19 = new var29[var19](var28, var27);
    var21 = var19 instanceof Object ? var19 : var21;
    var _closure1_slot58 = var21;
    var _closure1_slot59 = var2;
    var19 = {'left': 1, 'right': 1};
    var _closure1_slot60 = var19;
    var19 = 28;
    var24 = var6[var19];
    var24 = var8.bind(var1)(var24);
    var24 = var24.Millis;
    var24 = var24.SECOND;
    var24 = var25 * var24;
    var _closure1_slot61 = var24;
    var19 = var6[var19];
    var19 = var8.bind(var1)(var19);
    var19 = var19.Millis;
    var19 = var19.SECOND;
    var19 = var22 * var19;
    var _closure1_slot62 = var19;
    var _closure1_slot63 = var9;
    var19 = {};
    var22 = var20.CUSTOM;
    var9 = {};
    var19[var22] = var9;
    var24 = var20.VOICE_ISOLATION;
    var22 = {'modeOptions': null, 'echoCancellation': true, 'noiseSuppression': false, 'automaticGainControl': true, 'noiseCancellation': true, 'bypassSystemInputProcessing': false};
    var9 = {'autoThreshold': true, 'vadUseKrisp': true};
    var22['modeOptions'] = var9;
    var9 = false;
    var19[var24] = var22;
    var22 = var20.STUDIO;
    var20 = {'mode': null, 'modeOptions': null, 'echoCancellation': false, 'noiseSuppression': false, 'automaticGainControl': false, 'noiseCancellation': false, 'bypassSystemInputProcessing': true};
    var23 = var23.VOICE_ACTIVITY;
    var20['mode'] = var23;
    var23 = {'threshold': 4294967212, 'autoThreshold': false, 'vadUseKrisp': false};
    var20['modeOptions'] = var23;
    var19[var22] = var20;
    var _closure1_slot65 = var19;
    var19 = 30;
    var20 = var6[var19];
    var22 = var5.bind(var1)(var20);
    var20 = var22.initializeMediaEngine;
    var19 = var6[var19];
    var23 = var5.bind(var1)(var19);
    var19 = var23.determineMediaEngine;
    var19 = var19.bind(var23)();
    var20 = var20.bind(var22)(var19);
    var _closure1_slot66 = var20;
    var19 = var21.enableNativeLogger;
    var19 = var19.bind(var21)(var11);
    var19 = {};
    var _closure1_slot70 = var19;
    var22 = var13.Set;
    var21 = var15.DEFAULT;
    var19 = new Array(1);
    var19[0] = var21;
    var21 = var22.prototype;
    var21 = Object.create(var21, {constructor: {value: var22}});
    var29 = var21;
    var28 = var19;
    var19 = new var29[var22](var28, var27);
    var19 = var19 instanceof Object ? var19 : var21;
    var _closure1_slot71 = var19;
    var19 = var20.supports;
    var16 = var16.AUTO_ENABLE;
    var16 = var19.bind(var20)(var16);
    var _closure1_slot72 = var16;
    var _closure1_slot73 = var9;
    var15 = var15.STREAM;
    var _closure1_slot74 = var15;
    var16 = var13.performance;
    var15 = var16.now;
    var15 = var15.bind(var16)();
    var _closure1_slot75 = var15;
    var15 = {};
    var16 = 'No Input Devices';
    var16 = var18.bind(var1)(var16);
    var15[var17] = var16;
    var _closure1_slot76 = var15;
    var15 = {};
    var16 = 'No Output Devices';
    var16 = var18.bind(var1)(var16);
    var15[var17] = var16;
    var _closure1_slot77 = var15;
    var15 = {};
    var16 = 'No Video Devices';
    var16 = var18.bind(var1)(var16);
    var15[var17] = var16;
    var _closure1_slot78 = var15;
    var _closure1_slot79 = var9;
    var _closure1_slot80 = var9;
    var _closure1_slot81 = var9;
    var _closure1_slot82 = var9;
    var _closure1_slot83 = var9;
    var _closure1_slot84 = var12;
    var _closure1_slot85 = var9;
    var _closure1_slot86 = var9;
    var _closure1_slot87 = var9;
    var12 = 31;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.Timeout;
    var15 = var12.prototype;
    var15 = Object.create(var15, {constructor: {value: var12}});
    var29 = var15;
    var12 = new var29[var12](var28);
    var12 = var12 instanceof Object ? var12 : var15;
    var _closure1_slot88 = var12;
    var _closure1_slot89 = var9;
    var _closure1_slot90 = var9;
    var12 = null;
    var _closure1_slot91 = var12;
    var _closure1_slot92 = var9;
    var _closure1_slot93 = var9;
    var _closure1_slot94 = var9;
    var _closure1_slot95 = var9;
    var _closure1_slot96 = var9;
    var _closure1_slot97 = var1;
    var _closure1_slot98 = var1;
    var _closure1_slot99 = var1;
    var15 = new Array(0);
    var _closure1_slot100 = var15;
    var _closure1_slot101 = var9;
    var _closure1_slot102 = var12;
    var _closure1_slot103 = var12;
    var _closure1_slot104 = var12;
    var _closure1_slot105 = var12;
    var _closure1_slot106 = var12;
    var _closure1_slot107 = var9;
    var _closure1_slot108 = var9;
    var _closure1_slot109 = var9;
    var15 = 32;
    var16 = var6[var15];
    var19 = var8.bind(var1)(var16);
    var18 = var19.hasPermission;
    var17 = var14.AUDIO;
    var16 = {};
    var16['showAuthorizationError'] = var9;
    var16 = var18.bind(var19)(var17, var16);
    var15 = var6[var15];
    var17 = var8.bind(var1)(var15);
    var16 = var17.hasPermission;
    var15 = var14.CAMERA;
    var14 = {};
    var14['showAuthorizationError'] = var9;
    var14 = var16.bind(var17)(var15, var14);
    var14 = var13.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var29 = var15;
    var14 = new var29[var14](var28);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot110 = var14;
    var _closure1_slot111 = var11;
    var13 = var13.Set;
    var14 = var13.prototype;
    var14 = Object.create(var14, {constructor: {value: var13}});
    var29 = var14;
    var13 = new var29[var13](var28);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot112 = var13;
    var13 = {};
    var _closure1_slot113 = var13;
    var _closure1_slot114 = var12;
    var _closure1_slot115 = var11;
    var _closure1_slot116 = var9;
    var9 = function() {
        var4 = _closure1_slot9;
        var3 = function _class() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot8;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = 5000;
            var3['noVoiceTimeout'] = var4;
            var4 = 1500;
            var3['voiceTimeout'] = var4;
            var4 = false;
            var3['started'] = var4;
            var2 = function(arg1) {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var4 = !var1;
                    var _closure4_slot1 = var4;
                    var3 = _closure3_slot0;
                    var5 = var3.stateChangeTimeout;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0052_ip = 60; continue _fun0052 }
 35:
                    var3 = global;
                    var6 = var3.clearTimeout;
                    var3 = _closure3_slot0;
                    var5 = var3.stateChangeTimeout;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
 60:
                    var3 = _closure3_slot0;
                    var5 = global;
                    var5 = var5.setTimeout;
                    var1 = _closure3_slot0;
                    if(var4) { _fun0052_ip = 87; continue _fun0052 }
 79:
                    var4 = var1.noVoiceTimeout;
                    _fun0052_ip = 93; continue _fun0052;
 87:
                    var4 = var1.voiceTimeout;
 93:
                    var1 = undefined;
                    var2 = function() {
                        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                            var1 = _closure3_slot0;
                            var2 = null;
                            var1['stateChangeTimeout'] = var2;
                            var1 = var1.started;
                            if(!var1) { _fun0053_ip = 94; continue _fun0053 }
 24:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 51;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.dispatch;
                            var3 = {};
                            var1 = 'AUDIO_INPUT_DETECTED';
                            var3['type'] = var1;
                            var6 = _closure4_slot1;
                            var3['inputDetected'] = var6;
                            var3 = var4.bind(var5)(var3);
                            var1 = _closure4_slot0;
                            if(!var1) { _fun0053_ip = 94; continue _fun0053 }
 88:
                            var1 = true;
                            _closure1_slot93 = var1;
 94:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var5.bind(var1)(var2, var4);
                    var3['stateChangeTimeout'] = var2;
                    return var1;
                }
            };
            var3['handleSilence'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value() {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                var1 = this;
                var2 = var1.started;
                if(var2) { _fun0054_ip = 79; continue _fun0054 }
 12:
                var2 = true;
                var1['started'] = var2;
                var4 = _closure1_slot66;
                var3 = var4.on;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 30;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.MediaEngineEvent;
                var2 = var2.Silence;
                var1 = var1.handleSilence;
                var1 = var3.bind(var4)(var2, var1);
 79:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                var2 = this;
                var1 = var2.started;
                if(!var1) { _fun0055_ip = 161; continue _fun0055 }
 15:
                var1 = false;
                var2['started'] = var1;
                var3 = var2.stateChangeTimeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0055_ip = 62; continue _fun0055 }
 35:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.stateChangeTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['stateChangeTimeout'] = var1;
 62:
                var7 = _closure1_slot66;
                var6 = var7.removeListener;
                var8 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 30;
                var5 = var4[var3];
                var3 = undefined;
                var5 = var8.bind(var3)(var5);
                var5 = var5.MediaEngineEvent;
                var5 = var5.Silence;
                var2 = var2.handleSilence;
                var2 = var6.bind(var7)(var5, var2);
                var2 = _closure1_slot1;
                var1 = 51;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {'type': 'AUDIO_INPUT_DETECTED', 'inputDetected': null};
                var1 = var2.bind(var3)(var1);
 161:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'update';
        var1['key'] = var6;
        var6 = function value() {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                var3 = this;
                var2 = _closure1_slot124;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot92;
                if(var5) { _fun0056_ip = 90; continue _fun0056 }
 23:
                var6 = _closure1_slot20;
                var5 = var6.getState;
                var6 = var5.bind(var6)();
                var5 = _closure1_slot27;
                var5 = var5.RTC_CONNECTED;
                if(!(var6 === var5)) { _fun0056_ip = 90; continue _fun0056 }
 51:
                var5 = var2.mode;
                var4 = _closure1_slot26;
                var4 = var4.VOICE_ACTIVITY;
                if(!(var5 === var4)) { _fun0056_ip = 90; continue _fun0056 }
 70:
                var2 = var2.silenceWarning;
                if(!var2) { _fun0056_ip = 90; continue _fun0056 }
 79:
                var2 = var3.start;
                var2 = var2.bind(var3)();
                _fun0056_ip = 100; continue _fun0056;
 90:
                var2 = var3.stop;
                var2 = var2.bind(var3)();
 100:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var1 = var2.update;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var9 = var9.bind(var1)();
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var29 = var11;
    var9 = new var29[var9](var28);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot117 = var9;
    var9 = 74;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var11 = var9.Store;
    var9 = function(arg1) {
        var4 = function MediaEngineStore() {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot118;
                var1 = var1.bind(var3)();
                if(var1) { _fun0057_ip = 69; continue _fun0057 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0057_ip = 105; continue _fun0057;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot9;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize() {
            var12 = this;
            var3 = _closure1_slot133;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot138;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot157;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot150;
            var3 = var3.bind(var1)();
            var3 = {};
            var4 = _closure1_slot45;
            var5 = var4.VIDEO;
            var7 = _closure1_slot66;
            var6 = var7.supports;
            var4 = _closure1_slot45;
            var4 = var4.VIDEO;
            var4 = var6.bind(var7)(var4);
            var3[var5] = var4;
            var4 = _closure1_slot45;
            var5 = var4.DESKTOP_CAPTURE;
            var7 = _closure1_slot66;
            var6 = var7.supports;
            var4 = _closure1_slot45;
            var4 = var4.DESKTOP_CAPTURE;
            var4 = var6.bind(var7)(var4);
            var3[var5] = var4;
            var4 = _closure1_slot45;
            var5 = var4.HYBRID_VIDEO;
            var7 = _closure1_slot66;
            var6 = var7.supports;
            var4 = _closure1_slot45;
            var4 = var4.HYBRID_VIDEO;
            var4 = var6.bind(var7)(var4);
            var3[var5] = var4;
            _closure1_slot113 = var3;
            var11 = var12.waitFor;
            var10 = _closure1_slot16;
            var20 = _closure1_slot18;
            var19 = _closure1_slot19;
            var18 = _closure1_slot20;
            var17 = _closure1_slot13;
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 32;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var16 = var3.storage;
            var15 = _closure1_slot14;
            var14 = _closure1_slot12;
            var13 = _closure1_slot11;
            var22 = var12;
            var21 = var10;
            var2 = var22[var11](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(115);
        var1[0] = var5;
        var5 = {};
        var7 = 'supports';
        var5['key'] = var7;
        var7 = function supports(arg1) {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'supportsInApp';
        var5['key'] = var7;
        var7 = function supportsInApp(arg1) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                var4 = arg1;
                var1 = _closure1_slot113;
                var1 = var1[var4];
                if(var1) { _fun0058_ip = 32; continue _fun0058 }
 17:
                var3 = _closure1_slot66;
                var2 = var3.supports;
                var1 = var2.bind(var3)(var4);
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSupported';
        var5['key'] = var7;
        var7 = function isSupported() {
            var2 = _closure1_slot66;
            var1 = var2.supported;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isExperimentalEncodersSupported';
        var5['key'] = var7;
        var7 = function isExperimentalEncodersSupported() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.EXPERIMENTAL_ENCODERS;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isNoiseSuppressionSupported';
        var5['key'] = var7;
        var7 = function isNoiseSuppressionSupported() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.NOISE_SUPPRESSION;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isNoiseCancellationSupported';
        var5['key'] = var7;
        var7 = function isNoiseCancellationSupported() {
            var2 = _closure1_slot155;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isNoiseCancellationError';
        var5['key'] = var7;
        var7 = function isNoiseCancellationError() {
            var1 = _closure1_slot107;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isAutomaticGainControlSupported';
        var5['key'] = var7;
        var7 = function isAutomaticGainControlSupported() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.AUTOMATIC_GAIN_CONTROL;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'shouldOfferManualSubsystemSelection';
        var5['key'] = var7;
        var7 = function shouldOfferManualSubsystemSelection() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                var2 = _closure1_slot137;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = !var1;
                if(!var1) { _fun0059_ip = 75; continue _fun0059 }
 19:
                var5 = _closure1_slot66;
                var4 = var5.supports;
                var2 = _closure1_slot45;
                var2 = var2.LEGACY_AUDIO_SUBSYSTEM;
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0059_ip = 72; continue _fun0059 }
 47:
                var5 = _closure1_slot66;
                var4 = var5.supports;
                var3 = _closure1_slot45;
                var3 = var3.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                var2 = var4.bind(var5)(var3);
 72:
                var1 = var2;
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'showBypassSystemInputProcessing';
        var5['key'] = var7;
        var7 = function showBypassSystemInputProcessing() {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                var4 = _closure1_slot66;
                var3 = var4.supports;
                var1 = _closure1_slot45;
                var1 = var1.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0060_ip = 55; continue _fun0060 }
 31:
                var3 = _closure1_slot66;
                var2 = var3.getAudioSubsystem;
                var3 = var2.bind(var3)();
                var2 = 'experimental';
                var1 = var2 === var3;
 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isAdvancedVoiceActivitySupported';
        var5['key'] = var7;
        var7 = function isAdvancedVoiceActivitySupported() {
            var2 = _closure1_slot155;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isAecDumpSupported';
        var5['key'] = var7;
        var7 = function isAecDumpSupported() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.AEC_DUMP;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isSimulcastSupported';
        var5['key'] = var7;
        var7 = function isSimulcastSupported() {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                var4 = _closure1_slot66;
                var3 = var4.supports;
                var1 = _closure1_slot45;
                var1 = var1.VIDEO;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0061_ip = 56; continue _fun0061 }
 31:
                var4 = _closure1_slot66;
                var3 = var4.supports;
                var2 = _closure1_slot45;
                var2 = var2.SIMULCAST;
                var1 = var3.bind(var4)(var2);
 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'goLiveSimulcastEnabled';
        var5['key'] = var7;
        var7 = function goLiveSimulcastEnabled() {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                var4 = _closure1_slot19;
                var3 = var4.getChannel;
                var1 = _closure1_slot106;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                var5 = var3 == var1;
                var4 = undefined;
                var3 = undefined;
                if(var5) { _fun0062_ip = 39; continue _fun0062 }
 34:
                var3 = var1.type;
 39:
                var1 = _closure1_slot30;
                var1 = var1.GUILD_STAGE_VOICE;
                var5 = var3 === var1;
                var3 = _closure1_slot64;
                var1 = var3.getHardwareEncoding;
                var3 = var1.bind(var3)();
                var1 = !var5;
                if(var5) { _fun0062_ip = 76; continue _fun0062 }
 73:
                var1 = var3;
 76:
                if(!var1) { _fun0062_ip = 109; continue _fun0062 }
 79:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 45;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.simulcastEnabled;
                var1 = var2.bind(var3)();
 109:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getAecDump';
        var5['key'] = var7;
        var7 = function getAecDump() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.aecDumpEnabled;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getMediaEngine';
        var5['key'] = var7;
        var7 = function getMediaEngine() {
            var1 = _closure1_slot66;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getVideoComponent';
        var5['key'] = var7;
        var7 = function getVideoComponent() {
            var1 = _closure1_slot66;
            var1 = var1.Video;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getCameraComponent';
        var5['key'] = var7;
        var7 = function getCameraComponent() {
            var1 = _closure1_slot66;
            var1 = var1.Camera;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getKrispSuppressionLevel';
        var5['key'] = var7;
        var7 = function getKrispSuppressionLevel() {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
                var3 = _closure1_slot98;
                var1 = null;
                var3 = var1 != var3;
                var1 = 100;
                if(!var3) { _fun0063_ip = 23; continue _fun0063 }
 19:
                var1 = _closure1_slot98;
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getKrispEnableStats';
        var5['key'] = var7;
        var7 = function getKrispEnableStats() {
            var1 = _closure1_slot101;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isEnabled';
        var5['key'] = var7;
        var7 = function isEnabled() {
            var1 = _closure1_slot72;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'isMute';
        var5['key'] = var7;
        var7 = function isMute() {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
                var2 = this;
                var1 = var2.isSelfMute;
                var1 = var1.bind(var2)();
                if(var1) { _fun0064_ip = 23; continue _fun0064 }
 16:
                var1 = _closure1_slot79;
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isDeaf';
        var5['key'] = var7;
        var7 = function isDeaf() {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
 0:
                var2 = this;
                var1 = var2.isSelfDeaf;
                var1 = var1.bind(var2)();
                if(var1) { _fun0065_ip = 23; continue _fun0065 }
 16:
                var1 = _closure1_slot82;
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'hasContext';
        var5['key'] = var7;
        var7 = function hasContext(arg1) {
            var2 = _closure1_slot70;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'isSelfMutedTemporarily';
        var5['key'] = var7;
        var7 = function isSelfMutedTemporarily() {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0066_ip = 22; continue _fun0066 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot51;
                var1 = var1.DEFAULT;
                var1 = var3 === var1;
                if(!var1) { _fun0066_ip = 46; continue _fun0066 }
 42:
                var1 = _closure1_slot80;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'isSelfMute';
        var5['key'] = var7;
        var7 = function isSelfMute() {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                var4 = arguments[0];
                var3 = this;
                var7 = undefined;
                if(!(var4 === var7)) { _fun0067_ip = 25; continue _fun0067 }
 12:
                var1 = _closure1_slot51;
                var4 = var1.DEFAULT;
 25:
                var1 = var3.isEnabled;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if(var1) { _fun0067_ip = 59; continue _fun0067 }
 41:
                var2 = _closure1_slot124;
                var2 = var2.bind(var7)(var4);
                var1 = var2.mute;
 59:
                if(var1) { _fun0067_ip = 109; continue _fun0067 }
 62:
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var5 = 32;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.didHavePermission;
                var2 = _closure1_slot40;
                var2 = var2.AUDIO;
                var2 = var5.bind(var6)(var2);
                var1 = !var2;
 109:
                if(var1) { _fun0067_ip = 123; continue _fun0067 }
 112:
                var2 = var3.isSelfDeaf;
                var1 = var2.bind(var3)(var4);
 123:
                if(var1) { _fun0067_ip = 153; continue _fun0067 }
 126:
                var2 = _closure1_slot51;
                var2 = var2.DEFAULT;
                var2 = var4 === var2;
                if(!var2) { _fun0067_ip = 150; continue _fun0067 }
 146:
                var2 = _closure1_slot81;
 150:
                var1 = var2;
 153:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'shouldSkipMuteUnmuteSound';
        var5['key'] = var7;
        var7 = function shouldSkipMuteUnmuteSound() {
            var1 = _closure1_slot85;
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'notifyMuteUnmuteSoundWasSkipped';
        var5['key'] = var7;
        var7 = function notifyMuteUnmuteSoundWasSkipped() {
            var1 = false;
            _closure1_slot85 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'isHardwareMute';
        var5['key'] = var7;
        var7 = function isHardwareMute() {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
 0:
                var3 = arguments[0];
                var5 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0068_ip = 25; continue _fun0068 }
 12:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 25:
                var1 = var5.isMute;
                var1 = var1.bind(var5)();
                var1 = !var1;
                if(!var1) { _fun0068_ip = 55; continue _fun0068 }
 41:
                var2 = var5.isSelfMutedTemporarily;
                var2 = var2.bind(var5)(var3);
                var1 = !var2;
 55:
                if(!var1) { _fun0068_ip = 88; continue _fun0068 }
 58:
                var4 = _closure1_slot18;
                var3 = var4.isHardwareMute;
                var2 = var5.getInputDeviceId;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
 88:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'isEnableHardwareMuteNotice';
        var5['key'] = var7;
        var7 = function isEnableHardwareMuteNotice() {
            var1 = _closure1_slot115;
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'isSelfDeaf';
        var5['key'] = var7;
        var7 = function isSelfDeaf() {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
 0:
                var4 = arguments[0];
                var2 = this;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0069_ip = 25; continue _fun0069 }
 12:
                var1 = _closure1_slot51;
                var4 = var1.DEFAULT;
 25:
                var1 = var2.isSupported;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(var1) { _fun0069_ip = 59; continue _fun0069 }
 41:
                var2 = _closure1_slot124;
                var2 = var2.bind(var3)(var4);
                var1 = var2.deaf;
 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'isVideoEnabled';
        var5['key'] = var7;
        var7 = function isVideoEnabled() {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
 0:
                var1 = _closure1_slot83;
                if(!var1) { _fun0070_ip = 14; continue _fun0070 }
 10:
                var1 = _closure1_slot90;
 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'isVideoAvailable';
        var5['key'] = var7;
        var7 = function isVideoAvailable() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot78;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.disabled;
                var1 = !var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'isScreenSharing';
        var5['key'] = var7;
        var7 = function isScreenSharing() {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0071_ip = 22; continue _fun0071 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.STREAM;
 22:
                var1 = _closure1_slot74;
                var1 = var1 === var3;
                if(!var1) { _fun0071_ip = 46; continue _fun0071 }
 36:
                var3 = _closure1_slot68;
                var2 = null;
                var1 = var2 != var3;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'isSoundSharing';
        var5['key'] = var7;
        var7 = function isSoundSharing() {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
 0:
                var4 = arguments[0];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0072_ip = 22; continue _fun0072 }
 9:
                var1 = _closure1_slot51;
                var4 = var1.STREAM;
 22:
                var1 = _closure1_slot74;
                var1 = var1 === var4;
                if(!var1) { _fun0072_ip = 46; continue _fun0072 }
 36:
                var5 = _closure1_slot68;
                var4 = null;
                var1 = var4 != var5;
 46:
                if(!var1) { _fun0072_ip = 80; continue _fun0072 }
 49:
                var2 = _closure1_slot68;
                var4 = var2.desktopSource;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0072_ip = 76; continue _fun0072 }
 70:
                var3 = var4.soundshareId;
 76:
                var1 = var2 != var3;
 80:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'isLocalMute';
        var5['key'] = var7;
        var7 = function isLocalMute(arg1) {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
 0:
                var3 = arg1;
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0073_ip = 25; continue _fun0073 }
 12:
                var1 = _closure1_slot51;
                var5 = var1.DEFAULT;
 25:
                var6 = _closure1_slot16;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                var1 = var3 !== var1;
                if(!var1) { _fun0073_ip = 76; continue _fun0073 }
 49:
                var2 = _closure1_slot124;
                var2 = var2.bind(var4)(var5);
                var2 = var2.localMutes;
                var2 = var2[var3];
                if(var2) { _fun0073_ip = 73; continue _fun0073 }
 71:
                var2 = false;
 73:
                var1 = var2;
 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'supportsDisableLocalVideo';
        var5['key'] = var7;
        var7 = function supportsDisableLocalVideo() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.DISABLE_VIDEO;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[37] = var5;
        var5 = {};
        var7 = 'isLocalVideoDisabled';
        var5['key'] = var7;
        var7 = function isLocalVideoDisabled(arg1) {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
 0:
                var3 = arguments[1];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0074_ip = 22; continue _fun0074 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot124;
                var1 = var1.bind(var2)(var3);
                var2 = var1.disabledLocalVideos;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0074_ip = 59; continue _fun0074 }
 56:
                var1 = var2;
 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[38] = var5;
        var5 = {};
        var7 = 'getVideoToggleState';
        var5['key'] = var7;
        var7 = function getVideoToggleState(arg1) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0075_ip = 22; continue _fun0075 }
 9:
                var1 = _closure1_slot51;
                var4 = var1.DEFAULT;
 22:
                var1 = _closure1_slot124;
                var1 = var1.bind(var3)(var4);
                var3 = var1.videoToggleStateMap;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0075_ip = 63; continue _fun0075 }
 53:
                var2 = _closure1_slot29;
                var1 = var2.NONE;
 63:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[39] = var5;
        var5 = {};
        var7 = 'isLocalVideoAutoDisabled';
        var5['key'] = var7;
        var7 = function isLocalVideoAutoDisabled(arg1) {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
 0:
                var3 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0076_ip = 22; continue _fun0076 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot51;
                var1 = var1.DEFAULT;
                var1 = var3 === var1;
                if(!var1) { _fun0076_ip = 59; continue _fun0076 }
 42:
                var4 = _closure1_slot110;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[40] = var5;
        var5 = {};
        var7 = 'isAnyLocalVideoAutoDisabled';
        var5['key'] = var7;
        var7 = function isAnyLocalVideoAutoDisabled() {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0077_ip = 22; continue _fun0077 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot51;
                var1 = var1.DEFAULT;
                var1 = var3 === var1;
                if(!var1) { _fun0077_ip = 57; continue _fun0077 }
 42:
                var2 = _closure1_slot110;
                var3 = var2.size;
                var2 = 0;
                var1 = var3 > var2;
 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[41] = var5;
        var5 = {};
        var7 = 'isMediaFilterSettingLoading';
        var5['key'] = var7;
        var7 = function isMediaFilterSettingLoading() {
            var1 = _closure1_slot108;
            return var1;
        };
        var5['value'] = var7;
        var1[42] = var5;
        var5 = {};
        var7 = 'isNativeAudioPermissionReady';
        var5['key'] = var7;
        var7 = function isNativeAudioPermissionReady() {
            var1 = _closure1_slot109;
            return var1;
        };
        var5['value'] = var7;
        var1[43] = var5;
        var5 = {};
        var7 = 'getGoLiveSource';
        var5['key'] = var7;
        var7 = function getGoLiveSource() {
            var1 = _closure1_slot68;
            return var1;
        };
        var5['value'] = var7;
        var1[44] = var5;
        var5 = {};
        var7 = 'getGoLiveContext';
        var5['key'] = var7;
        var7 = function getGoLiveContext() {
            var1 = _closure1_slot74;
            return var1;
        };
        var5['value'] = var7;
        var1[45] = var5;
        var5 = {};
        var7 = 'getLastAudioInputDeviceChangeTimestamp';
        var5['key'] = var7;
        var7 = function getLastAudioInputDeviceChangeTimestamp() {
            var1 = _closure1_slot75;
            return var1;
        };
        var5['value'] = var7;
        var1[46] = var5;
        var5 = {};
        var7 = 'getLocalPan';
        var5['key'] = var7;
        var7 = function getLocalPan(arg1) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0078_ip = 22; continue _fun0078 }
 9:
                var1 = _closure1_slot51;
                var4 = var1.DEFAULT;
 22:
                var1 = _closure1_slot124;
                var1 = var1.bind(var3)(var4);
                var3 = var1.localPans;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0078_ip = 57; continue _fun0078 }
 53:
                var1 = _closure1_slot60;
 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[47] = var5;
        var5 = {};
        var7 = 'getLocalVolume';
        var5['key'] = var7;
        var7 = function getLocalVolume(arg1) {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0079_ip = 22; continue _fun0079 }
 9:
                var1 = _closure1_slot51;
                var4 = var1.DEFAULT;
 22:
                var1 = _closure1_slot51;
                var1 = var1.STREAM;
                if(!(var4 !== var1)) { _fun0079_ip = 45; continue _fun0079 }
 39:
                var1 = _closure1_slot46;
                _fun0079_ip = 49; continue _fun0079;
 45:
                var1 = _closure1_slot47;
 49:
                var2 = _closure1_slot124;
                var2 = var2.bind(var3)(var4);
                var3 = var2.localVolumes;
                var2 = arg1;
                var2 = var3[var2];
                var3 = null;
                if(!(var3 != var2)) { _fun0079_ip = 80; continue _fun0079 }
 77:
                var1 = var2;
 80:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[48] = var5;
        var5 = {};
        var7 = 'getInputVolume';
        var5['key'] = var7;
        var7 = function getInputVolume() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.inputVolume;
            return var1;
        };
        var5['value'] = var7;
        var1[49] = var5;
        var5 = {};
        var7 = 'getOutputVolume';
        var5['key'] = var7;
        var7 = function getOutputVolume() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.outputVolume;
            return var1;
        };
        var5['value'] = var7;
        var1[50] = var5;
        var5 = {};
        var7 = 'getMode';
        var5['key'] = var7;
        var7 = function getMode() {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0080_ip = 22; continue _fun0080 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot124;
                var1 = var1.bind(var2)(var3);
                var1 = var1.mode;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[51] = var5;
        var5 = {};
        var7 = 'getModeOptions';
        var5['key'] = var7;
        var7 = function getModeOptions() {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0081_ip = 22; continue _fun0081 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot124;
                var1 = var1.bind(var2)(var3);
                var1 = var1.modeOptions;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[52] = var5;
        var5 = {};
        var7 = 'getActiveVoiceFilter';
        var5['key'] = var7;
        var7 = function getActiveVoiceFilter() {
            var1 = _closure1_slot102;
            return var1;
        };
        var5['value'] = var7;
        var1[53] = var5;
        var5 = {};
        var7 = 'getActiveVoiceFilterAppliedAt';
        var5['key'] = var7;
        var7 = function getActiveVoiceFilterAppliedAt() {
            var1 = _closure1_slot103;
            return var1;
        };
        var5['value'] = var7;
        var1[54] = var5;
        var5 = {};
        var7 = 'getPreviousVoiceFilter';
        var5['key'] = var7;
        var7 = function getPreviousVoiceFilter() {
            var1 = _closure1_slot104;
            return var1;
        };
        var5['value'] = var7;
        var1[55] = var5;
        var5 = {};
        var7 = 'getPreviousVoiceFilterAppliedAt';
        var5['key'] = var7;
        var7 = function getPreviousVoiceFilterAppliedAt() {
            var1 = _closure1_slot105;
            return var1;
        };
        var5['value'] = var7;
        var1[56] = var5;
        var5 = {};
        var7 = 'getMostRecentlyRequestedVoiceFilter';
        var5['key'] = var7;
        var7 = function getMostRecentlyRequestedVoiceFilter() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.mostRecentlyRequestedVoiceFilter;
            return var1;
        };
        var5['value'] = var7;
        var1[57] = var5;
        var5 = {};
        var7 = 'getVoiceFilterPlaybackEnabled';
        var5['key'] = var7;
        var7 = function getVoiceFilterPlaybackEnabled() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.voiceFilterPlaybackEnabled;
            return var1;
        };
        var5['value'] = var7;
        var1[58] = var5;
        var5 = {};
        var7 = 'getShortcuts';
        var5['key'] = var7;
        var7 = function getShortcuts() {
            var1 = {};
            var _closure3_slot0 = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var4 = 36;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.each;
            var3 = _closure1_slot70;
            var2 = function(arg1, arg2) {
                _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
 0:
                    var1 = arg1;
                    var3 = arg2;
                    var5 = var1.mode;
                    var1 = var1.modeOptions;
                    var2 = var1.shortcut;
                    var1 = _closure1_slot26;
                    var1 = var1.PUSH_TO_TALK;
                    var1 = var5 === var1;
                    if(!var1) { _fun0082_ip = 57; continue _fun0082 }
 43:
                    var5 = _closure1_slot71;
                    var4 = var5.has;
                    var1 = var4.bind(var5)(var3);
 57:
                    if(!var1) { _fun0082_ip = 71; continue _fun0082 }
 60:
                    var1 = _closure3_slot0;
                    var1[var3] = var2;
 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[59] = var5;
        var5 = {};
        var7 = 'getInputDeviceId';
        var5['key'] = var7;
        var7 = function getInputDeviceId() {
            var4 = _closure1_slot143;
            var3 = _closure1_slot76;
            var1 = _closure1_slot124;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var1.inputDeviceId;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[60] = var5;
        var5 = {};
        var7 = 'getOutputDeviceId';
        var5['key'] = var7;
        var7 = function getOutputDeviceId() {
            var4 = _closure1_slot143;
            var3 = _closure1_slot77;
            var1 = _closure1_slot124;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var1.outputDeviceId;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[61] = var5;
        var5 = {};
        var7 = 'getVideoDeviceId';
        var5['key'] = var7;
        var7 = function getVideoDeviceId() {
            var4 = _closure1_slot143;
            var3 = _closure1_slot78;
            var1 = _closure1_slot124;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var1.videoDeviceId;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[62] = var5;
        var5 = {};
        var7 = 'getInputDevices';
        var5['key'] = var7;
        var7 = function getInputDevices() {
            var1 = _closure1_slot76;
            return var1;
        };
        var5['value'] = var7;
        var1[63] = var5;
        var5 = {};
        var7 = 'getOutputDevices';
        var5['key'] = var7;
        var7 = function getOutputDevices() {
            var1 = _closure1_slot77;
            return var1;
        };
        var5['value'] = var7;
        var1[64] = var5;
        var5 = {};
        var7 = 'getVideoDevices';
        var5['key'] = var7;
        var7 = function getVideoDevices() {
            var1 = _closure1_slot78;
            return var1;
        };
        var5['value'] = var7;
        var1[65] = var5;
        var5 = {};
        var7 = 'getEchoCancellation';
        var5['key'] = var7;
        var7 = function getEchoCancellation() {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
 0:
                var3 = _closure1_slot124;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var4 = _closure1_slot18;
                var3 = var4.hasEchoCancellation;
                var1 = var2.inputDeviceId;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0083_ip = 43; continue _fun0083 }
 37:
                var1 = var2.echoCancellation;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[66] = var5;
        var5 = {};
        var7 = 'getSidechainCompression';
        var5['key'] = var7;
        var7 = function getSidechainCompression() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.sidechainCompression;
            return var1;
        };
        var5['value'] = var7;
        var1[67] = var5;
        var5 = {};
        var7 = 'getSidechainCompressionStrength';
        var5['key'] = var7;
        var7 = function getSidechainCompressionStrength() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.sidechainCompressionStrength;
            return var1;
        };
        var5['value'] = var7;
        var1[68] = var5;
        var5 = {};
        var7 = 'getH265Enabled';
        var5['key'] = var7;
        var7 = function getH265Enabled() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.h265Enabled;
            return var1;
        };
        var5['value'] = var7;
        var1[69] = var5;
        var5 = {};
        var7 = 'getLoopback';
        var5['key'] = var7;
        var7 = function getLoopback() {
            var1 = _closure1_slot112;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[70] = var5;
        var5 = {};
        var7 = 'getLoopbackReasons';
        var5['key'] = var7;
        var7 = function getLoopbackReasons() {
            var1 = _closure1_slot112;
            return var1;
        };
        var5['value'] = var7;
        var1[71] = var5;
        var5 = {};
        var7 = 'getNoiseSuppression';
        var5['key'] = var7;
        var7 = function getNoiseSuppression() {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
 0:
                var3 = _closure1_slot124;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var4 = _closure1_slot18;
                var3 = var4.hasNoiseSuppression;
                var1 = var2.inputDeviceId;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0084_ip = 43; continue _fun0084 }
 37:
                var1 = var2.noiseSuppression;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[72] = var5;
        var5 = {};
        var7 = 'getAutomaticGainControl';
        var5['key'] = var7;
        var7 = function getAutomaticGainControl() {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
 0:
                var3 = _closure1_slot124;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var4 = _closure1_slot18;
                var3 = var4.hasAutomaticGainControl;
                var1 = var2.inputDeviceId;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0085_ip = 43; continue _fun0085 }
 37:
                var1 = var2.automaticGainControl;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[73] = var5;
        var5 = {};
        var7 = 'getBypassSystemInputProcessing';
        var5['key'] = var7;
        var7 = function getBypassSystemInputProcessing() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.bypassSystemInputProcessing;
            return var1;
        };
        var5['value'] = var7;
        var1[74] = var5;
        var5 = {};
        var7 = 'getNoiseCancellation';
        var5['key'] = var7;
        var7 = function getNoiseCancellation() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.noiseCancellation;
            return var1;
        };
        var5['value'] = var7;
        var1[75] = var5;
        var5 = {};
        var7 = 'getExperimentalEncoders';
        var5['key'] = var7;
        var7 = function getExperimentalEncoders() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.experimentalEncoders;
            return var1;
        };
        var5['value'] = var7;
        var1[76] = var5;
        var5 = {};
        var7 = 'getHardwareEncoding';
        var5['key'] = var7;
        var7 = function getHardwareEncoding() {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
 0:
                var2 = _closure1_slot124;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = var1.hardwareEncoding;
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0086_ip = 31; continue _fun0086 }
 28:
                var1 = var2;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[77] = var5;
        var5 = {};
        var7 = 'getEnableSilenceWarning';
        var5['key'] = var7;
        var7 = function getEnableSilenceWarning() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.silenceWarning;
            return var1;
        };
        var5['value'] = var7;
        var1[78] = var5;
        var5 = {};
        var7 = 'getDebugLogging';
        var5['key'] = var7;
        var7 = function getDebugLogging() {
            var2 = _closure1_slot66;
            var1 = var2.getDebugLogging;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[79] = var5;
        var5 = {};
        var7 = 'getQoS';
        var5['key'] = var7;
        var7 = function getQoS() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.qos;
            return var1;
        };
        var5['value'] = var7;
        var1[80] = var5;
        var5 = {};
        var7 = 'getAttenuation';
        var5['key'] = var7;
        var7 = function getAttenuation() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.attenuation;
            return var1;
        };
        var5['value'] = var7;
        var1[81] = var5;
        var5 = {};
        var7 = 'getAttenuateWhileSpeakingSelf';
        var5['key'] = var7;
        var7 = function getAttenuateWhileSpeakingSelf() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.attenuateWhileSpeakingSelf;
            return var1;
        };
        var5['value'] = var7;
        var1[82] = var5;
        var5 = {};
        var7 = 'getAttenuateWhileSpeakingOthers';
        var5['key'] = var7;
        var7 = function getAttenuateWhileSpeakingOthers() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.attenuateWhileSpeakingOthers;
            return var1;
        };
        var5['value'] = var7;
        var1[83] = var5;
        var5 = {};
        var7 = 'getAudioSubsystem';
        var5['key'] = var7;
        var7 = function getAudioSubsystem() {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
 0:
                var1 = _closure1_slot136;
                var3 = undefined;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0087_ip = 33; continue _fun0087 }
 16:
                var1 = _closure1_slot124;
                var1 = var1.bind(var3)();
                var1 = var1.automaticAudioSubsystem;
                if(var1) { _fun0087_ip = 49; continue _fun0087 }
 33:
                var3 = _closure1_slot66;
                var1 = var3.getAudioSubsystem;
                var1 = var1.bind(var3)();
                _fun0087_ip = 59; continue _fun0087;
 49:
                var2 = _closure1_slot44;
                var1 = var2.AUTOMATIC;
 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[84] = var5;
        var5 = {};
        var7 = 'getMLSSigningKey';
        var5['key'] = var7;
        var7 = function getMLSSigningKey(arg1, arg2) {
            var4 = _closure1_slot66;
            var3 = var4.getMLSSigningKey;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[85] = var5;
        var5 = {};
        var7 = 'getActiveInputProfile';
        var5['key'] = var7;
        var7 = function getActiveInputProfile() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.activeInputProfile;
            return var1;
        };
        var5['value'] = var7;
        var1[86] = var5;
        var5 = {};
        var7 = 'isInputProfileCustom';
        var5['key'] = var7;
        var7 = function isInputProfileCustom() {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
 0:
                var2 = this;
                var1 = var2.getActiveInputProfile;
                var3 = var1.bind(var2)();
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0088_ip = 39; continue _fun0088 }
 22:
                var2 = _closure1_slot43;
                var2 = var2.CUSTOM;
                var1 = var3 === var2;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[87] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function getSettings() {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0089_ip = 22; continue _fun0089 }
 9:
                var1 = _closure1_slot51;
                var3 = var1.DEFAULT;
 22:
                var1 = _closure1_slot124;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[88] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function getState() {
            var1 = {};
            var3 = _closure1_slot70;
            var1['settingsByContext'] = var3;
            var3 = _closure1_slot76;
            var1['inputDevices'] = var3;
            var3 = _closure1_slot77;
            var1['outputDevices'] = var3;
            var3 = _closure1_slot113;
            var1['appSupported'] = var3;
            var3 = _closure1_slot96;
            var1['krispModuleLoaded'] = var3;
            var3 = _closure1_slot97;
            var1['krispVersion'] = var3;
            var3 = _closure1_slot98;
            var1['krispSuppressionLevel'] = var3;
            var3 = _closure1_slot68;
            var1['goLiveSource'] = var3;
            var2 = _closure1_slot74;
            var1['goLiveContext'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[89] = var5;
        var5 = {};
        var7 = 'getInputDetected';
        var5['key'] = var7;
        var7 = function getInputDetected() {
            var1 = _closure1_slot91;
            return var1;
        };
        var5['value'] = var7;
        var1[90] = var5;
        var5 = {};
        var7 = 'getNoInputDetectedNotice';
        var5['key'] = var7;
        var7 = function getNoInputDetectedNotice() {
            var1 = _closure1_slot93;
            return var1;
        };
        var5['value'] = var7;
        var1[91] = var5;
        var5 = {};
        var7 = 'getPacketDelay';
        var5['key'] = var7;
        var7 = function getPacketDelay() {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
 0:
                var3 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 29;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var4 = var1.isPlatformEmbedded;
                var1 = 0;
                if(var4) { _fun0090_ip = 81; continue _fun0090 }
 39:
                var4 = var3.getMode;
                var4 = var4.bind(var3)();
                var2 = _closure1_slot26;
                var2 = var2.VOICE_ACTIVITY;
                var1 = 0;
                if(!(var4 === var2)) { _fun0090_ip = 81; continue _fun0090 }
 65:
                var2 = var3.getModeOptions;
                var2 = var2.bind(var3)();
                var1 = var2.vadLeading;
 81:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[92] = var5;
        var5 = {};
        var7 = 'setCanHavePriority';
        var5['key'] = var7;
        var7 = function setCanHavePriority(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = var4.setCanHavePriority;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[93] = var5;
        var5 = {};
        var7 = 'isInteractionRequired';
        var5['key'] = var7;
        var7 = function isInteractionRequired() {
            var1 = _closure1_slot73;
            return var1;
        };
        var5['value'] = var7;
        var1[94] = var5;
        var5 = {};
        var7 = 'getVideoHook';
        var5['key'] = var7;
        var7 = function getVideoHook() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.videoHook;
            return var1;
        };
        var5['value'] = var7;
        var1[95] = var5;
        var5 = {};
        var7 = 'supportsVideoHook';
        var5['key'] = var7;
        var7 = function supportsVideoHook() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.VIDEO_HOOK;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[96] = var5;
        var5 = {};
        var7 = 'getExperimentalSoundshare';
        var5['key'] = var7;
        var7 = function getExperimentalSoundshare() {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
 0:
                var2 = this;
                var3 = _closure1_slot124;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var3 = var1.experimentalSoundshare2;
                var1 = var2.supportsExperimentalSoundshare;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0091_ip = 52; continue _fun0091 }
 37:
                var2 = null;
                var2 = var2 == var3;
                if(var2) { _fun0091_ip = 49; continue _fun0091 }
 46:
                var2 = var3;
 49:
                var1 = var2;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[97] = var5;
        var5 = {};
        var7 = 'supportsExperimentalSoundshare';
        var5['key'] = var7;
        var7 = function supportsExperimentalSoundshare() {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
 0:
                var4 = _closure1_slot66;
                var3 = var4.supports;
                var1 = _closure1_slot45;
                var1 = var1.EXPERIMENTAL_SOUNDSHARE;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0092_ip = 121; continue _fun0092 }
 31:
                var6 = _closure1_slot1;
                var3 = _closure1_slot3;
                var4 = 55;
                var4 = var3[var4];
                var8 = undefined;
                var5 = var6.bind(var8)(var4);
                var4 = var5.satisfies;
                var9 = 56;
                var3 = var3[var9];
                var6 = var6.bind(var8)(var3);
                var3 = null;
                var6 = var3 == var6;
                var3 = undefined;
                if(var6) { _fun0092_ip = 111; continue _fun0092 }
 82:
                var7 = _closure1_slot1;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var6 = var6.os;
                var3 = var6.release;
 111:
                var2 = _closure1_slot38;
                var1 = var4.bind(var5)(var3, var2);
 121:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[98] = var5;
        var5 = {};
        var7 = 'getUseSystemScreensharePicker';
        var5['key'] = var7;
        var7 = function getUseSystemScreensharePicker() {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
 0:
                var2 = this;
                var1 = var2.supportsSystemScreensharePicker;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot124;
                var11 = undefined;
                var2 = var2.bind(var11)();
                var3 = var2.useSystemScreensharePicker;
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var7 = 29;
                var2 = var2[var7];
                var4 = var4.bind(var11)(var2);
                var2 = var4.isLinux;
                var2 = var2.bind(var4)();
                if(var2) { _fun0093_ip = 188; continue _fun0093 }
 67:
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var7];
                var6 = var6.bind(var11)(var4);
                var4 = var6.isMac;
                var4 = var4.bind(var6)();
                if(!var4) { _fun0093_ip = 185; continue _fun0093 }
 97:
                var9 = _closure1_slot1;
                var6 = _closure1_slot3;
                var7 = 55;
                var7 = var6[var7];
                var8 = var9.bind(var11)(var7);
                var7 = var8.satisfies;
                var12 = 56;
                var6 = var6[var12];
                var9 = var9.bind(var11)(var6);
                var6 = null;
                var9 = var6 == var9;
                var6 = undefined;
                if(var9) { _fun0093_ip = 175; continue _fun0093 }
 146:
                var10 = _closure1_slot1;
                var9 = _closure1_slot3;
                var9 = var9[var12];
                var9 = var10.bind(var11)(var9);
                var9 = var9.os;
                var6 = var9.release;
 175:
                var5 = _closure1_slot33;
                var4 = var7.bind(var8)(var6, var5);
 185:
                var2 = var4;
 188:
                if(!var1) { _fun0093_ip = 203; continue _fun0093 }
 191:
                var4 = null;
                if(!(var4 != var3)) { _fun0093_ip = 200; continue _fun0093 }
 197:
                var2 = var3;
 200:
                var1 = var2;
 203:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[99] = var5;
        var5 = {};
        var7 = 'supportsSystemScreensharePicker';
        var5['key'] = var7;
        var7 = function supportsSystemScreensharePicker() {
            var3 = _closure1_slot66;
            var2 = var3.supports;
            var1 = _closure1_slot45;
            var1 = var1.NATIVE_SCREENSHARE_PICKER;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[100] = var5;
        var5 = {};
        var7 = 'getOpenH264';
        var5['key'] = var7;
        var7 = function getOpenH264() {
            var2 = _closure1_slot124;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.openH264;
            return var1;
        };
        var5['value'] = var7;
        var1[101] = var5;
        var5 = {};
        var7 = 'getEverSpeakingWhileMuted';
        var5['key'] = var7;
        var7 = function getEverSpeakingWhileMuted() {
            var1 = _closure1_slot86;
            return var1;
        };
        var5['value'] = var7;
        var1[102] = var5;
        var5 = {};
        var7 = 'getSpeakingWhileMuted';
        var5['key'] = var7;
        var7 = function getSpeakingWhileMuted() {
            var1 = _closure1_slot87;
            return var1;
        };
        var5['value'] = var7;
        var1[103] = var5;
        var5 = {};
        var7 = 'getKrispModelOverride';
        var5['key'] = var7;
        var7 = function getKrispModelOverride() {
            var1 = _closure1_slot99;
            return var1;
        };
        var5['value'] = var7;
        var1[104] = var5;
        var5 = {};
        var7 = 'getKrispModels';
        var5['key'] = var7;
        var7 = function getKrispModels() {
            var1 = _closure1_slot100;
            return var1;
        };
        var5['value'] = var7;
        var1[105] = var5;
        var5 = {};
        var7 = 'getKrispVadActivationThreshold';
        var5['key'] = var7;
        var7 = function getKrispVadActivationThreshold() {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
 0:
                var2 = _closure1_slot124;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = var1.modeOptions;
                var2 = var1.vadKrispActivationThreshold;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0.5;
                if(!var3) { _fun0094_ip = 47; continue _fun0094 }
 44:
                var1 = var2;
 47:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[106] = var5;
        var5 = {};
        var7 = 'hasActiveCallKitCall';
        var5['key'] = var7;
        var7 = function hasActiveCallKitCall() {
            var1 = _closure1_slot116;
            return var1;
        };
        var5['value'] = var7;
        var1[107] = var5;
        var5 = {};
        var7 = 'setHasActiveCallKitCall';
        var5['key'] = var7;
        var7 = function setHasActiveCallKitCall(arg1) {
            var1 = arg1;
            _closure1_slot116 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[108] = var5;
        var5 = {};
        var7 = 'supportsScreenSoundshare';
        var5['key'] = var7;
        var7 = function supportsScreenSoundshare() {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
 0:
                var6 = this;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 29;
                var1 = var1[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.isMac;
                var1 = var1.bind(var2)();
                if(var1) { _fun0095_ip = 183; continue _fun0095 }
 44:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isWindows;
                var1 = var1.bind(var2)();
                if(var1) { _fun0095_ip = 137; continue _fun0095 }
 74:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isLinux;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0095_ip = 135; continue _fun0095 }
 110:
                var7 = _closure1_slot66;
                var5 = var7.supports;
                var2 = _closure1_slot45;
                var2 = var2.SCREEN_SOUNDSHARE;
                var1 = var5.bind(var7)(var2);
 135:
                _fun0095_ip = 178; continue _fun0095;
 137:
                var7 = _closure1_slot66;
                var5 = var7.supports;
                var2 = _closure1_slot45;
                var2 = var2.SCREEN_SOUNDSHARE;
                var2 = var5.bind(var7)(var2);
                if(!var2) { _fun0095_ip = 175; continue _fun0095 }
 165:
                var5 = var6.getExperimentalSoundshare;
                var2 = var5.bind(var6)();
 175:
                var1 = var2;
 178:
                _fun0095_ip = 313; continue _fun0095;
 183:
                var6 = _closure1_slot66;
                var5 = var6.supports;
                var2 = _closure1_slot45;
                var2 = var2.SOUNDSHARE;
                var2 = var5.bind(var6)(var2);
                if(!var2) { _fun0095_ip = 299; continue _fun0095 }
 211:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var7 = 55;
                var7 = var5[var7];
                var8 = var6.bind(var4)(var7);
                var7 = var8.satisfies;
                var10 = 56;
                var5 = var5[var10];
                var6 = var6.bind(var4)(var5);
                var5 = null;
                var5 = var5 == var6;
                var6 = undefined;
                if(var5) { _fun0095_ip = 289; continue _fun0095 }
 260:
                var9 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var5 = var9.bind(var4)(var5);
                var5 = var5.os;
                var6 = var5.release;
 289:
                var5 = _closure1_slot32;
                var2 = var7.bind(var8)(var6, var5);
 299:
                if(!var2) { _fun0095_ip = 310; continue _fun0095 }
 302:
                var3 = _closure1_slot135;
                var2 = var3.bind(var4)();
 310:
                var1 = var2;
 313:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[109] = var5;
        var5 = {};
        var7 = 'getVideoStreamParameters';
        var5['key'] = var7;
        var7 = function getVideoStreamParameters() {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
 0:
                var6 = arguments[0];
                var7 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0096_ip = 25; continue _fun0096 }
 12:
                var1 = _closure1_slot51;
                var6 = var1.DEFAULT;
 25:
                var2 = var7.supports;
                var1 = _closure1_slot45;
                var1 = var1.VIDEO;
                var1 = var2.bind(var7)(var1);
                if(var1) { _fun0096_ip = 58; continue _fun0096 }
 52:
                var1 = new Array(0);
                _fun0096_ip = 131; continue _fun0096;
 58:
                var3 = {};
                var2 = '100';
                var3['rid'] = var2;
                var2 = _closure1_slot51;
                var2 = var2.DEFAULT;
                if(!(var6 !== var2)) { _fun0096_ip = 97; continue _fun0096 }
 85:
                var2 = _closure1_slot53;
                var2 = var2.SCREEN;
                _fun0096_ip = 107; continue _fun0096;
 97:
                var5 = _closure1_slot53;
                var2 = var5.VIDEO;
 107:
                var3['type'] = var2;
                var2 = _closure1_slot56;
                var3['quality'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 131:
                var2 = var7.isSimulcastSupported;
                var2 = var2.bind(var7)();
                if(!var2) { _fun0096_ip = 178; continue _fun0096 }
 146:
                var3 = _closure1_slot51;
                var3 = var3.DEFAULT;
                var3 = var6 === var3;
                if(var3) { _fun0096_ip = 175; continue _fun0096 }
 163:
                var5 = var7.goLiveSimulcastEnabled;
                var3 = var5.bind(var7)();
 175:
                var2 = var3;
 178:
                if(!var2) { _fun0096_ip = 253; continue _fun0096 }
 181:
                var3 = var1.push;
                var2 = {};
                var5 = '50';
                var2['rid'] = var5;
                var5 = _closure1_slot51;
                var5 = var5.DEFAULT;
                if(!(var6 !== var5)) { _fun0096_ip = 225; continue _fun0096 }
 213:
                var5 = _closure1_slot53;
                var5 = var5.SCREEN;
                _fun0096_ip = 235; continue _fun0096;
 225:
                var6 = _closure1_slot53;
                var5 = var6.VIDEO;
 235:
                var2['type'] = var5;
                var4 = _closure1_slot57;
                var2['quality'] = var4;
                var2 = var3.bind(var1)(var2);
 253:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[110] = var5;
        var5 = {};
        var7 = 'fetchAsyncResources';
        var5['key'] = var7;
        var7 = function fetchAsyncResources() {
            _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
 0:
                var3 = {};
                var1 = false;
                var3['fetchDave'] = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 29;
                var2 = var5[var2];
                var5 = undefined;
                var4 = var4.bind(var5)(var2);
                var2 = var4.isWeb;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0097_ip = 108; continue _fun0097 }
 47:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 73;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var5 = var2.DaveForBrowserExperiment;
                var4 = var5.getCurrentConfig;
                var2 = {};
                var6 = 'MediaEngineStore fetchAsyncResources';
                var2['location'] = var6;
                var2 = var4.bind(var5)(var2);
                var2 = var2.loadWasmModule;
                var3['fetchDave'] = var2;
 108:
                var2 = _closure1_slot66;
                var1 = var2.fetchAsyncResources;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[111] = var5;
        var5 = {};
        var7 = 'getSupportedSecureFramesProtocolVersion';
        var5['key'] = var7;
        var7 = function getSupportedSecureFramesProtocolVersion() {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 29;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0098_ip = 100; continue _fun0098 }
 38:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 73;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var5 = var2.DaveForBrowserExperiment;
                var3 = var5.getCurrentConfig;
                var2 = {};
                var6 = 'MediaEngineStore getSupportedSecureFramesProtocolVersion';
                var2['location'] = var6;
                var2 = var3.bind(var5)(var2);
                var2 = var2.useWasmModule;
                if(var2) { _fun0098_ip = 100; continue _fun0098 }
 96:
                var2 = 0;
                return var2;
 100:
                var3 = _closure1_slot66;
                var2 = var3.getSupportedSecureFramesProtocolVersion;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 73;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var4 = var1.SecureFramesUserExperiment;
                var3 = var4.getCurrentConfig;
                var1 = {};
                var5 = 'MediaEngineStore';
                var1['location'] = var5;
                var3 = var3.bind(var4)(var1);
                var1 = 114;
                if(!(var1 === var2)) { _fun0098_ip = 173; continue _fun0098 }
 170:
                var2 = 1;
 173:
                var5 = var3.canSupportDaveProtocol;
                var1 = 0;
                if(!var5) { _fun0098_ip = 202; continue _fun0098 }
 184:
                var3 = var3.protocolVersionFloor;
                var3 = var2 >= var3;
                var1 = 0;
                if(!var3) { _fun0098_ip = 202; continue _fun0098 }
 199:
                var1 = var2;
 202:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[112] = var5;
        var5 = {};
        var7 = 'hasClipsSource';
        var5['key'] = var7;
        var7 = function hasClipsSource() {
            var2 = _closure1_slot69;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[113] = var5;
        var5 = {};
        var7 = 'getGpuBrand';
        var5['key'] = var7;
        var6 = function getGpuBrand() {
            var1 = _closure1_slot114;
            return var1;
        };
        var5['value'] = var6;
        var1[114] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var11);
    var9['displayName'] = var2;
    var2 = 51;
    var2 = var6[var2];
    var28 = var8.bind(var1)(var2);
    var2 = {};
    var11 = function handleVoiceChannelSelect(arg1) {
        _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
 0:
            var4 = arg1;
            var3 = var4.guildId;
            var2 = var4.channelId;
            var1 = var4.currentVoiceChannelId;
            var6 = var4.video;
            if(!(var1 !== var2)) { _fun0099_ip = 46; continue _fun0099 }
 29:
            var5 = _closure1_slot128;
            var4 = undefined;
            var1 = null;
            var1 = var5.bind(var4)(var6, var1);
 46:
            var1 = null;
            if(!(var1 == var3)) { _fun0099_ip = 56; continue _fun0099 }
 52:
            if(!(var1 == var2)) { _fun0099_ip = 67; continue _fun0099 }
 56:
            var1 = false;
            _closure1_slot94 = var1;
            _fun0099_ip = 153; continue _fun0099;
 67:
            var2 = _closure1_slot94;
            if(var2) { _fun0099_ip = 153; continue _fun0099 }
 77:
            var2 = true;
            _closure1_slot94 = var2;
            var2 = _closure1_slot124;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var2 = var3.mute;
            if(var2) { _fun0099_ip = 108; continue _fun0099 }
 102:
            var2 = var3.deaf;
 108:
            if(!var2) { _fun0099_ip = 153; continue _fun0099 }
 111:
            var3 = _closure1_slot139;
            var2 = {'deaf': false, 'mute': false};
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = _closure1_slot127;
            var1 = var2.bind(var3)(var1);
 153:
            var1 = undefined;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var11;
    var11 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
 0:
                var4 = arg1;
                var2 = arg2;
                var5 = _closure1_slot67;
                var1 = var2.sessionId;
                if(!(var5 !== var1)) { _fun0100_ip = 102; continue _fun0100 }
 23:
                var5 = var2.userId;
                var6 = _closure1_slot16;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                var5 = var5 === var1;
                if(!var5) { _fun0100_ip = 69; continue _fun0100 }
 49:
                var6 = _closure1_slot20;
                var1 = var6.getChannelId;
                var6 = var1.bind(var6)();
                var1 = null;
                var5 = var1 == var6;
 69:
                var1 = var4;
                if(!var5) { _fun0100_ip = 232; continue _fun0100 }
 78:
                var8 = _closure1_slot128;
                var7 = undefined;
                var6 = false;
                var5 = null;
                var5 = var8.bind(var7)(var6, var5);
                var1 = var4;
                _fun0100_ip = 232; continue _fun0100;
 102:
                var4 = var2.mute;
                if(var4) { _fun0100_ip = 117; continue _fun0100 }
 111:
                var4 = var2.suppress;
 117:
                _closure1_slot79 = var4;
                var4 = var2.deaf;
                _closure1_slot82 = var4;
                var6 = _closure1_slot66;
                var5 = var6.eachConnection;
                var4 = _closure1_slot127;
                var4 = var5.bind(var6)(var4);
                var6 = _closure1_slot128;
                var4 = var2.guildId;
                var7 = null;
                var4 = var7 != var4;
                if(!var4) { _fun0100_ip = 177; continue _fun0100 }
 168:
                var5 = var2.channelId;
                var4 = var7 != var5;
 177:
                if(!var4) { _fun0100_ip = 188; continue _fun0100 }
 180:
                var5 = _closure1_slot106;
                var4 = var7 != var5;
 188:
                if(!var4) { _fun0100_ip = 204; continue _fun0100 }
 191:
                var7 = _closure1_slot106;
                var5 = var2.channelId;
                var4 = var7 !== var5;
 204:
                var5 = !var4;
                if(var4) { _fun0100_ip = 214; continue _fun0100 }
 210:
                var5 = _closure1_slot83;
 214:
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var2 = var2.channelId;
                _closure1_slot106 = var2;
                var1 = true;
 232:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var11;
    var11 = function handleConnectionOpen(arg1) {
        _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
 0:
            var1 = arg1;
            var1 = var1.sessionId;
            var _closure1_slot67 = var1;
            var7 = false;
            _closure1_slot79 = var7;
            _closure1_slot82 = var7;
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 29;
            var3 = var1[var6];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWeb;
            var3 = var3.bind(var4)();
            if(var3) { _fun0101_ip = 118; continue _fun0101 }
 61:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 61;
            var3 = var5[var3];
            var8 = var4.bind(var1)(var3);
            var5 = var8.subscribe;
            var4 = {};
            var3 = 'handleConnectionOpen';
            var4['location'] = var3;
            var3 = function(arg1) {
                _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot124;
                    var1 = undefined;
                    var5 = var4.bind(var1)();
                    var4 = var2.sidechainAvailable;
                    if(var4) { _fun0102_ip = 65; continue _fun0102 }
 25:
                    var4 = var5.sidechainCompression;
                    if(!var4) { _fun0102_ip = 65; continue _fun0102 }
 34:
                    var6 = _closure1_slot139;
                    var4 = {};
                    var7 = 0;
                    var4['sidechainCompressionSettingVersion'] = var7;
                    var4 = var6.bind(var1)(var4);
                    var6 = _closure1_slot152;
                    var4 = false;
                    var4 = var6.bind(var1)(var4);
                    _fun0102_ip = 124; continue _fun0102;
 65:
                    var4 = var2.sidechainAvailable;
                    if(!var4) { _fun0102_ip = 87; continue _fun0102 }
 74:
                    var6 = var5.sidechainCompressionSettingVersion;
                    var5 = 1;
                    var4 = var6 < var5;
 87:
                    if(!var4) { _fun0102_ip = 124; continue _fun0102 }
 90:
                    var5 = _closure1_slot139;
                    var4 = {};
                    var6 = 1;
                    var4['sidechainCompressionSettingVersion'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var3 = _closure1_slot152;
                    var2 = var2.sidechainEnabled;
                    var2 = var3.bind(var1)(var2);
 124:
                    return var1;
                }
            };
            var3 = var5.bind(var8)(var4, var3);
            var3 = _closure1_slot153;
            var3 = var3.bind(var1)();
 118:
            var3 = _closure1_slot124;
            var4 = var3.bind(var1)();
            var3 = _closure1_slot136;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0101_ip = 186; continue _fun0101 }
 137:
            var3 = _closure1_slot137;
            var3 = var3.bind(var1)();
            if(var3) { _fun0101_ip = 167; continue _fun0101 }
 148:
            var3 = var4.automaticAudioSubsystem;
            if(!var3) { _fun0101_ip = 186; continue _fun0101 }
 157:
            var3 = _closure1_slot159;
            var3 = var3.bind(var1)();
            _fun0101_ip = 186; continue _fun0101;
 167:
            var5 = _closure1_slot158;
            var3 = _closure1_slot44;
            var3 = var3.AUTOMATIC;
            var3 = var5.bind(var1)(var3);
 186:
            var8 = _closure1_slot66;
            var5 = var8.supports;
            var3 = _closure1_slot45;
            var3 = var3.OFFLOAD_ADM_CONTROLS;
            var3 = var5.bind(var8)(var3);
            if(!var3) { _fun0101_ip = 409; continue _fun0101 }
 217:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isDesktop;
            var3 = var3.bind(var5)();
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            if(var3) { _fun0101_ip = 356; continue _fun0101 }
 255:
            var3 = var8[var6];
            var9 = var5.bind(var1)(var3);
            var3 = var9.isIOS;
            var3 = var3.bind(var9)();
            if(var3) { _fun0101_ip = 303; continue _fun0101 }
 277:
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var6];
            var10 = var10.bind(var1)(var9);
            var9 = var10.isAndroid;
            var3 = var9.bind(var10)();
 303:
            var7 = false;
            if(!var3) { _fun0101_ip = 394; continue _fun0101 }
 308:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 63;
            var3 = var10[var3];
            var10 = var9.bind(var1)(var3);
            var9 = var10.getAsyncAudioDeviceMobileExperimentConfig;
            var3 = {};
            var11 = 'handleConnectionOpen';
            var3['location'] = var11;
            var3 = var9.bind(var10)(var3);
            var7 = var3.enabled;
            _fun0101_ip = 394; continue _fun0101;
 356:
            var3 = 62;
            var3 = var8[var3];
            var8 = var5.bind(var1)(var3);
            var5 = var8.getAsyncAudioDeviceExperimentConfig;
            var3 = {};
            var9 = 'handleConnectionOpen';
            var3['location'] = var9;
            var3 = var5.bind(var8)(var3);
            var7 = var3.enabled;
 394:
            var5 = _closure1_slot66;
            var3 = var5.setOffloadAdmControls;
            var3 = var3.bind(var5)(var7);
 409:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 64;
            var3 = var7[var3];
            var7 = var5.bind(var1)(var3);
            var5 = var7.isVoiceFiltersEnabled;
            var3 = {'location': 'MediaEngineStore', 'autoTrackExposure': false};
            var3 = var5.bind(var7)(var3);
            if(!var3) { _fun0101_ip = 469; continue _fun0101 }
 457:
            var5 = var4.mostRecentlyRequestedVoiceFilter;
            var4 = null;
            var3 = var4 !== var5;
 469:
            if(!var3) { _fun0101_ip = 499; continue _fun0101 }
 472:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var6];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isDesktop;
            var3 = var4.bind(var5)();
 499:
            if(!var3) { _fun0101_ip = 634; continue _fun0101 }
 505:
            var4 = _closure1_slot15;
            var3 = var4.getLastInitAttemptMayHaveCrashed;
            var3 = var3.bind(var4)();
            if(var3) { _fun0101_ip = 556; continue _fun0101 }
 524:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 65;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.maybeSetupVoiceFiltersNativeModule;
            var3 = var3.bind(var4)();
            _fun0101_ip = 634; continue _fun0101;
 556:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 51;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {'type': 'AUDIO_SET_SELF_MUTE', 'mute': true, 'context': null, 'playSoundEffect': true};
            var6 = _closure1_slot51;
            var6 = var6.DEFAULT;
            var3['context'] = var6;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot139;
            var3 = {};
            var5 = null;
            var3['mostRecentlyRequestedVoiceFilter'] = var5;
            var3 = var4.bind(var1)(var3);
 634:
            var2 = _closure1_slot147;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function handleConnectionClosed() {
        var1 = null;
        _closure1_slot67 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var11;
    var11 = function handleRTCConnectionStateUpdate(arg1) {
        _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
 0:
            var1 = arg1;
            var3 = var1.state;
            var2 = _closure1_slot27;
            var2 = var2.CONNECTING;
            if(!(var2 !== var3)) { _fun0103_ip = 114; continue _fun0103 }
 25:
            var2 = _closure1_slot27;
            var2 = var2.RTC_CONNECTING;
            if(!(var2 !== var3)) { _fun0103_ip = 102; continue _fun0103 }
 39:
            var2 = _closure1_slot27;
            var2 = var2.RTC_CONNECTED;
            if(!(var2 !== var3)) { _fun0103_ip = 90; continue _fun0103 }
 53:
            var2 = _closure1_slot27;
            var2 = var2.DISCONNECTED;
            if(!(var2 === var3)) { _fun0103_ip = 124; continue _fun0103 }
 67:
            var2 = function resetAutoDisabledVideoState() {
                _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
 0:
                    var1 = _closure1_slot110;
                    var2 = var1.size;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0104_ip = 110; continue _fun0104 }
 20:
                    var1 = _closure1_slot51;
                    var5 = var1.DEFAULT;
                    var _closure3_slot0 = var5;
                    var2 = _closure1_slot124;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5);
                    var2 = var2.disabledLocalVideos;
                    var _closure3_slot1 = var2;
                    var7 = _closure1_slot110;
                    var6 = var7.forEach;
                    var4 = function(arg1) {
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 66;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var5.bind(var1)(var3);
                        var5 = _closure3_slot1;
                        var7 = var5[var6];
                        var5 = 'If you are auto-disabled, then you are also disabled.';
                        var5 = var8.bind(var1)(var7, var5);
                        var5 = _closure3_slot1;
                        var5 = delete var5[var6];
                        var5 = _closure1_slot66;
                        var4 = var5.eachConnection;
                        var3 = _closure3_slot0;
                        var2 = function(arg1) {
                            var4 = arg1;
                            var3 = var4.setLocalVideoDisabled;
                            var2 = _closure4_slot0;
                            var1 = false;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
                    var6 = _closure1_slot110;
                    var4 = var6.clear;
                    var4 = var4.bind(var6)();
                    var4 = _closure1_slot139;
                    var3 = {};
                    var3['disabledLocalVideos'] = var2;
                    var2 = false;
                    var2 = var4.bind(var1)(var3, var5, var2);
                    return var1;
 110:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = undefined;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot150;
            var2 = var2.bind(var3)();
            _fun0103_ip = 124; continue _fun0103;
 90:
            var3 = _closure1_slot128;
            var2 = undefined;
            var2 = var3.bind(var2)();
            _fun0103_ip = 124; continue _fun0103;
 102:
            var2 = false;
            _closure1_slot92 = var2;
            _closure1_slot93 = var2;
            _fun0103_ip = 124; continue _fun0103;
 114:
            var3 = _closure1_slot140;
            var2 = undefined;
            var2 = var3.bind(var2)();
 124:
            var2 = _closure1_slot117;
            var1 = var2.update;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var11;
    var11 = function handleSetTemporarySelfMute(arg1) {
        var1 = arg1;
        var2 = var1.mute;
        _closure1_slot80 = var2;
        var3 = _closure1_slot66;
        var2 = var3.eachConnection;
        var1 = _closure1_slot127;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['AUDIO_SET_TEMPORARY_SELF_MUTE'] = var11;
    var11 = function handleToggleSelfMute(arg1) {
        _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
 0:
            var1 = arg1;
            var5 = var1.context;
            var3 = var1.playSoundEffect;
            var4 = _closure1_slot124;
            var1 = undefined;
            var6 = var4.bind(var1)(var5);
            var4 = var6.mute;
            var6 = var6.deaf;
            var7 = _closure1_slot51;
            var7 = var7.DEFAULT;
            if(!(var5 === var7)) { _fun0105_ip = 102; continue _fun0105 }
 54:
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 32;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.requestPermission;
            var7 = _closure1_slot40;
            var7 = var7.AUDIO;
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot81;
            if(var7) { _fun0105_ip = 168; continue _fun0105 }
 102:
            var7 = !var6;
            if(!var7) { _fun0105_ip = 111; continue _fun0105 }
 108:
            var7 = !var4;
 111:
            if(var7) { _fun0105_ip = 116; continue _fun0105 }
 114:
            var6 = false;
 116:
            if(var3) { _fun0105_ip = 125; continue _fun0105 }
 119:
            var3 = true;
            _closure1_slot85 = var3;
 125:
            var4 = _closure1_slot139;
            var3 = {};
            var3['mute'] = var7;
            var3['deaf'] = var6;
            var3 = var4.bind(var1)(var3, var5);
            var4 = _closure1_slot66;
            var3 = var4.eachConnection;
            var2 = _closure1_slot127;
            var2 = var3.bind(var4)(var2);
            return var1;
 168:
            var1 = false;
            return var1;
        }
    };
    var2['AUDIO_TOGGLE_SELF_MUTE'] = var11;
    var11 = function handleSetSelfMute(arg1) {
        _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
 0:
            var2 = arg1;
            var6 = var2.context;
            var1 = var2.mute;
            var3 = var2.playSoundEffect;
            var5 = _closure1_slot139;
            var4 = {};
            var4['mute'] = var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var4, var6);
            if(var3) { _fun0106_ip = 51; continue _fun0106 }
 45:
            var3 = true;
            _closure1_slot85 = var3;
 51:
            var4 = _closure1_slot66;
            var3 = var4.eachConnection;
            var2 = _closure1_slot127;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['AUDIO_SET_SELF_MUTE'] = var11;
    var11 = function handleToggleSelfDeafen(arg1) {
        var1 = arg1;
        var5 = var1.context;
        var4 = _closure1_slot139;
        var3 = {};
        var6 = _closure1_slot124;
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var6 = var6.deaf;
        var6 = !var6;
        var3['deaf'] = var6;
        var3 = var4.bind(var1)(var3, var5);
        var4 = _closure1_slot66;
        var3 = var4.eachConnection;
        var2 = _closure1_slot127;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['AUDIO_TOGGLE_SELF_DEAF'] = var11;
    var11 = function handleToggleLocalMute(arg1) {
        _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
 0:
            var1 = arg1;
            var5 = var1.context;
            var4 = var1.userId;
            var _closure2_slot0 = var4;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot16;
            var6 = var7.getId;
            var6 = var6.bind(var7)();
            if(!(var4 !== var6)) { _fun0107_ip = 122; continue _fun0107 }
 46:
            var6 = _closure1_slot124;
            var6 = var6.bind(var1)(var5);
            var7 = var6.localMutes;
            _closure2_slot1 = var7;
            var6 = var7[var4];
            if(var6) { _fun0107_ip = 80; continue _fun0107 }
 72:
            var6 = true;
            var7[var4] = var6;
            _fun0107_ip = 84; continue _fun0107;
 80:
            var4 = delete var7[var4];
 84:
            var6 = _closure1_slot139;
            var4 = {};
            var4['localMutes'] = var7;
            var4 = var6.bind(var1)(var4, var5);
            var4 = _closure1_slot66;
            var3 = var4.eachConnection;
            var2 = function(arg1) {
                _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.setLocalMute;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var1[var2];
                    if(var1) { _fun0108_ip = 29; continue _fun0108 }
 27:
                    var1 = false;
 29:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var5);
 122:
            return var1;
        }
    };
    var2['AUDIO_TOGGLE_LOCAL_MUTE'] = var11;
    var11 = function handleSetLocalVideoDisabled(arg1) {
        _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
 0:
            var1 = arg1;
            var5 = var1.context;
            var6 = var1.userId;
            var _closure2_slot0 = var6;
            var17 = var1.videoToggleState;
            var7 = var1.persist;
            var13 = var1.isAutomatic;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var8 = _closure1_slot1;
            var4 = _closure1_slot3;
            var18 = 66;
            var4 = var4[var18];
            var9 = var8.bind(var1)(var4);
            var4 = var7;
            if(!var7) { _fun0109_ip = 75; continue _fun0109 }
 72:
            var4 = var13;
 75:
            var8 = !var4;
            var4 = 'These are not allowed to both be true.';
            var4 = var9.bind(var1)(var8, var4);
            var4 = _closure1_slot29;
            var4 = var4.DISABLED;
            var4 = var17 === var4;
            var8 = _closure1_slot124;
            var8 = var8.bind(var1)(var5);
            var8 = var8.disabledLocalVideos;
            _closure2_slot1 = var8;
            var10 = var8[var6];
            var15 = null;
            var9 = var15 != var10;
            if(!var9) { _fun0109_ip = 139; continue _fun0109 }
 136:
            var9 = var10;
 139:
            var11 = _closure1_slot110;
            var10 = var11.has;
            var10 = var10.bind(var11)(var6);
            var11 = _closure1_slot29;
            var11 = var11.AUTO_ENABLED;
            var11 = var17 === var11;
            if(var11) { _fun0109_ip = 184; continue _fun0109 }
 170:
            var12 = _closure1_slot29;
            var12 = var12.MANUAL_ENABLED;
            var11 = var17 === var12;
 184:
            var19 = _closure1_slot58;
            var16 = var19.info;
            var14 = global;
            var12 = var14.HermesInternal;
            var23 = var12.concat;
            var32 = 'disableVideo=';
            var30 = ' currentlyDisabled=';
            var28 = ' currentlyAutoDisabled=';
            var26 = ', isVideoShown=';
            var31 = var4;
            var29 = var9;
            var27 = var10;
            var25 = var11;
            var12 = var32[var23](var31, var30, var29, var28, var27, var26, var25, var24);
            var12 = var16.bind(var19)(var12);
            var16 = _closure1_slot1;
            var12 = _closure1_slot3;
            var12 = var12[var18];
            var18 = var16.bind(var1)(var12);
            var12 = var11;
            var11 = var10;
            if(!var11) { _fun0109_ip = 281; continue _fun0109 }
 278:
            var11 = !var9;
 281:
            var16 = !var11;
            var11 = 'If you are auto-disabled, then you are also disabled.';
            var11 = var18.bind(var1)(var16, var11);
            var24 = var4 !== var9;
            var9 = _closure1_slot51;
            var9 = var9.DEFAULT;
            var9 = var5 === var9;
            if(!var13) { _fun0109_ip = 320; continue _fun0109 }
 317:
            var13 = var24;
 320:
            if(!var13) { _fun0109_ip = 326; continue _fun0109 }
 323:
            var13 = var9;
 326:
            var11 = var7;
            if(!var11) { _fun0109_ip = 335; continue _fun0109 }
 332:
            var11 = var24;
 335:
            if(!var11) { _fun0109_ip = 341; continue _fun0109 }
 338:
            var11 = var9;
 341:
            var19 = _closure1_slot58;
            var18 = var19.info;
            var16 = var14.HermesInternal;
            var23 = var16.concat;
            var32 = 'changed=';
            var30 = ' isDefaultContext=';
            var28 = ' isUpdateCausedByVideoHealthManager=';
            var26 = ' isManualToggleByUser=';
            var31 = var24;
            var29 = var9;
            var27 = var13;
            var25 = var11;
            var16 = var32[var23](var31, var30, var29, var28, var27, var26, var25, var24);
            var16 = var18.bind(var19)(var16);
            var16 = _closure1_slot124;
            var16 = var16.bind(var1)(var5);
            var19 = var16.videoToggleStateMap;
            var18 = var19[var6];
            var16 = _closure1_slot29;
            var16 = var16.AUTO_PROBING;
            var16 = var18 === var16;
            if(!var16) { _fun0109_ip = 457; continue _fun0109 }
 443:
            var18 = _closure1_slot29;
            var18 = var18.AUTO_ENABLED;
            var16 = var17 === var18;
 457:
            if(!var16) { _fun0109_ip = 508; continue _fun0109 }
 460:
            var18 = _closure1_slot1;
            var20 = _closure1_slot3;
            var16 = 67;
            var16 = var20[var16];
            var18 = var18.bind(var1)(var16);
            var20 = _closure1_slot54;
            if(var4) { _fun0109_ip = 495; continue _fun0109 }
 487:
            var16 = var20.AUTO_ENABLE;
            _fun0109_ip = 501; continue _fun0109;
 495:
            var16 = var20.AUTO_DISABLE;
 501:
            var16 = var18.bind(var1)(var6, var16, var12);
 508:
            var19[var6] = var17;
            var18 = _closure1_slot139;
            var16 = {};
            var16['videoToggleStateMap'] = var19;
            var16 = var18.bind(var1)(var16, var5, var7);
            var16 = _closure1_slot29;
            var16 = var16.AUTO_PROBING;
            if(!(var17 !== var16)) { _fun0109_ip = 578; continue _fun0109 }
 544:
            var17 = _closure1_slot20;
            var16 = var17.getRTCConnection;
            var18 = var16.bind(var17)();
            if(!(var15 != var18)) { _fun0109_ip = 610; continue _fun0109 }
 562:
            var17 = var18.pauseStatsCollectionForUser;
            var16 = false;
            var16 = var17.bind(var18)(var6, var16);
            _fun0109_ip = 610; continue _fun0109;
 578:
            var17 = _closure1_slot20;
            var16 = var17.getRTCConnection;
            var18 = var16.bind(var17)();
            if(!(var15 != var18)) { _fun0109_ip = 610; continue _fun0109 }
 596:
            var17 = var18.pauseStatsCollectionForUser;
            var16 = true;
            var16 = var17.bind(var18)(var6, var16);
 610:
            var16 = _closure1_slot111;
            if(var16) { _fun0109_ip = 719; continue _fun0109 }
 617:
            var17 = _closure1_slot58;
            var16 = var17.info;
            var20 = _closure1_slot111;
            var14 = var14.HermesInternal;
            var19 = var14.concat;
            var18 = 'isAutoDisableAllowed=';
            var14 = ' - disabling VideoHealthManager';
            var14 = var19.bind(var18)(var20, var14);
            var14 = var16.bind(var17)(var14);
            var16 = _closure1_slot20;
            var14 = var16.getRTCConnection;
            var18 = var14.bind(var16)();
            var14 = var15 == var18;
            var16 = var18;
            if(var14) { _fun0109_ip = 706; continue _fun0109 }
 689:
            var17 = var18.getVideoHealthManager;
            var17 = var17.bind(var18)();
            var14 = var15 == var17;
            var16 = var17;
 706:
            if(var14) { _fun0109_ip = 719; continue _fun0109 }
 709:
            var14 = var16.disable;
            var14 = var14.bind(var16)();
 719:
            if(var13) { _fun0109_ip = 916; continue _fun0109 }
 725:
            if(!var11) { _fun0109_ip = 1013; continue _fun0109 }
 731:
            if(!var10) { _fun0109_ip = 866; continue _fun0109 }
 737:
            if(var4) { _fun0109_ip = 866; continue _fun0109 }
 743:
            var14 = _closure1_slot58;
            var13 = var14.info;
            var11 = 'disallowing auto-disable for this session because of manual override by user';
            var11 = var13.bind(var14)(var11);
            var11 = false;
            _closure1_slot111 = var11;
            var13 = _closure1_slot20;
            var11 = var13.getRTCConnection;
            var16 = var11.bind(var13)();
            var11 = var15 == var16;
            var13 = var16;
            if(var11) { _fun0109_ip = 811; continue _fun0109 }
 794:
            var14 = var16.getVideoHealthManager;
            var14 = var14.bind(var16)();
            var11 = var15 == var14;
            var13 = var14;
 811:
            if(var11) { _fun0109_ip = 824; continue _fun0109 }
 814:
            var11 = var13.disable;
            var11 = var11.bind(var13)();
 824:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var11 = 67;
            var11 = var14[var11];
            var13 = var13.bind(var1)(var11);
            var11 = _closure1_slot54;
            var11 = var11.MANUAL_REENABLE;
            var11 = var13.bind(var1)(var6, var11, var12);
            _fun0109_ip = 1013; continue _fun0109;
 866:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var11 = 67;
            var11 = var14[var11];
            var13 = var13.bind(var1)(var11);
            var14 = _closure1_slot54;
            if(var4) { _fun0109_ip = 901; continue _fun0109 }
 893:
            var11 = var14.MANUAL_ENABLE;
            _fun0109_ip = 907; continue _fun0109;
 901:
            var11 = var14.MANUAL_DISABLE;
 907:
            var11 = var13.bind(var1)(var6, var11, var12);
            _fun0109_ip = 1013; continue _fun0109;
 916:
            if(var4) { _fun0109_ip = 924; continue _fun0109 }
 919:
            if(var10) { _fun0109_ip = 924; continue _fun0109 }
 922:
            return var1;
 924:
            if(!var4) { _fun0109_ip = 936; continue _fun0109 }
 927:
            var10 = _closure1_slot111;
            if(var10) { _fun0109_ip = 936; continue _fun0109 }
 934:
            return var1;
 936:
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var10 = 67;
            var10 = var13[var10];
            var11 = var11.bind(var1)(var10);
            var13 = _closure1_slot54;
            if(var4) { _fun0109_ip = 971; continue _fun0109 }
 963:
            var10 = var13.AUTO_ENABLE;
            _fun0109_ip = 977; continue _fun0109;
 971:
            var10 = var13.AUTO_DISABLE;
 977:
            var10 = var11.bind(var1)(var6, var10, var12);
            var11 = _closure1_slot110;
            if(var4) { _fun0109_ip = 1003; continue _fun0109 }
 991:
            var10 = var11.delete;
            var10 = var10.bind(var11)(var6);
            _fun0109_ip = 1013; continue _fun0109;
 1003:
            var10 = var11.add;
            var10 = var10.bind(var11)(var6);
 1013:
            if(!var9) { _fun0109_ip = 1019; continue _fun0109 }
 1016:
            var9 = !var4;
 1019:
            if(!var9) { _fun0109_ip = 1036; continue _fun0109 }
 1022:
            var10 = _closure1_slot110;
            var9 = var10.delete;
            var9 = var9.bind(var10)(var6);
 1036:
            if(var4) { _fun0109_ip = 1045; continue _fun0109 }
 1039:
            var4 = delete var8[var6];
            _fun0109_ip = 1051; continue _fun0109;
 1045:
            var4 = true;
            var8[var6] = var4;
 1051:
            var6 = _closure1_slot139;
            var4 = {};
            var4['disabledLocalVideos'] = var8;
            var4 = var6.bind(var1)(var4, var5, var7);
            var4 = _closure1_slot66;
            var3 = var4.eachConnection;
            var2 = function(arg1) {
                _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.setLocalVideoDisabled;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var5 = var1[var2];
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0110_ip = 36; continue _fun0110 }
 33:
                    var1 = var5;
 36:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var2['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = var11;
    var11 = function handleSetLocalVolume(arg1) {
        _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
 0:
            var2 = arg1;
            var4 = var2.context;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var5 = var2.volume;
            var _closure2_slot1 = var5;
            var7 = _closure1_slot16;
            var6 = var7.getId;
            var6 = var6.bind(var7)();
            if(!(var3 !== var6)) { _fun0111_ip = 143; continue _fun0111 }
 50:
            var6 = _closure1_slot51;
            var6 = var6.STREAM;
            if(!(var4 !== var6)) { _fun0111_ip = 70; continue _fun0111 }
 64:
            var8 = _closure1_slot46;
            _fun0111_ip = 74; continue _fun0111;
 70:
            var8 = _closure1_slot47;
 74:
            var7 = _closure1_slot124;
            var6 = undefined;
            var7 = var7.bind(var6)(var4);
            var7 = var7.localVolumes;
            if(!(var5 !== var8)) { _fun0111_ip = 101; continue _fun0111 }
 95:
            var7[var3] = var5;
            _fun0111_ip = 105; continue _fun0111;
 101:
            var3 = delete var7[var3];
 105:
            var5 = _closure1_slot139;
            var3 = {};
            var3['localVolumes'] = var7;
            var3 = var5.bind(var6)(var3, var4);
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = var4.setLocalVolume;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1, var4);
 143:
            var1 = undefined;
            return var1;
        }
    };
    var2['AUDIO_SET_LOCAL_VOLUME'] = var11;
    var11 = function handleSetLocalPan(arg1) {
        var1 = arg1;
        var5 = var1.context;
        var6 = var1.userId;
        var _closure2_slot0 = var6;
        var9 = var1.left;
        var _closure2_slot1 = var9;
        var8 = var1.right;
        var _closure2_slot2 = var8;
        var4 = _closure1_slot124;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var7 = var4.localPans;
        var4 = {};
        var4['left'] = var9;
        var4['right'] = var8;
        var7[var6] = var4;
        var6 = _closure1_slot139;
        var4 = {};
        var4['localPans'] = var7;
        var4 = var6.bind(var1)(var4, var5);
        var4 = _closure1_slot66;
        var3 = var4.eachConnection;
        var2 = function(arg1) {
            var5 = arg1;
            var4 = var5.setLocalPan;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var2['AUDIO_SET_LOCAL_PAN'] = var11;
    var11 = function handleAudioSetMode(arg1) {
        var1 = arg1;
        var5 = var1.context;
        var6 = var1.mode;
        var1 = var1.options;
        var4 = _closure1_slot139;
        var3 = {};
        var3['mode'] = var6;
        var3['modeOptions'] = var1;
        var1 = undefined;
        var3 = var4.bind(var1)(var3, var5);
        var5 = _closure1_slot66;
        var4 = var5.eachConnection;
        var3 = _closure1_slot125;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot117;
        var2 = var3.update;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['AUDIO_SET_MODE'] = var11;
    var11 = function handleAudioSetInputVolume(arg1) {
        var1 = arg1;
        var4 = var1.volume;
        var5 = _closure1_slot139;
        var3 = {};
        var6 = _closure1_slot126;
        var1 = undefined;
        var6 = var6.bind(var1)(var4);
        var3['inputVolume'] = var6;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot66;
        var2 = var3.setInputVolume;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['AUDIO_SET_INPUT_VOLUME'] = var11;
    var11 = function handleAudioSetOutputVolume(arg1) {
        var1 = arg1;
        var4 = var1.volume;
        var5 = _closure1_slot139;
        var3 = {};
        var3['outputVolume'] = var4;
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot66;
        var2 = var3.setOutputVolume;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['AUDIO_SET_OUTPUT_VOLUME'] = var11;
    var11 = function handleSetInputDevice(arg1) {
        var1 = arg1;
        var5 = var1.id;
        var4 = _closure1_slot143;
        var3 = _closure1_slot76;
        var1 = undefined;
        var4 = var4.bind(var1)(var3, var5);
        var3 = global;
        var5 = var3.performance;
        var3 = var5.now;
        var3 = var3.bind(var5)();
        _closure1_slot75 = var3;
        var5 = _closure1_slot139;
        var3 = {};
        var3['inputDeviceId'] = var4;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot66;
        var2 = var3.setAudioInputDevice;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['AUDIO_SET_INPUT_DEVICE'] = var11;
    var11 = function handleSetOutputDevice(arg1) {
        var1 = arg1;
        var7 = var1.id;
        var5 = _closure1_slot139;
        var3 = {};
        var6 = _closure1_slot143;
        var4 = _closure1_slot77;
        var1 = undefined;
        var4 = var6.bind(var1)(var4, var7);
        var3['outputDeviceId'] = var4;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot66;
        var2 = var3.setAudioOutputDevice;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['AUDIO_SET_OUTPUT_DEVICE'] = var11;
    var11 = function handleSetActiveInputProfile(arg1) {
        var1 = arg1;
        var1 = var1.inputProfile;
        var5 = _closure1_slot139;
        var3 = {};
        var3['activeInputProfile'] = var1;
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var _closure2_slot0 = var3;
        var6 = _closure1_slot66;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var4 = arg1;
            var3 = _closure1_slot125;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var5 = _closure1_slot131;
            var2 = _closure2_slot0;
            var3 = var2.automaticGainControl;
            var3 = var5.bind(var1)(var4, var3);
            var5 = var4.setEchoCancellation;
            var3 = var2.echoCancellation;
            var3 = var5.bind(var4)(var3);
            var5 = var4.setExperimentalEncoders;
            var3 = var2.experimentalEncoders;
            var3 = var5.bind(var4)(var3);
            var5 = var4.setNoiseCancellation;
            var3 = var2.noiseCancellation;
            var3 = var5.bind(var4)(var3);
            var3 = var4.setNoiseSuppression;
            var2 = var2.noiseSuppression;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var5 = _closure1_slot66;
        var4 = var5.setAudioInputBypassSystemProcessing;
        var3 = var3.bypassSystemInputProcessing;
        var3 = var4.bind(var5)(var3);
        var4 = _closure1_slot117;
        var3 = var4.update;
        var3 = var3.bind(var4)();
        var2 = _closure1_slot154;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['AUDIO_SET_ACTIVE_INPUT_PROFILE'] = var11;
    var11 = function handleSetEchoCancellation(arg1) {
        var2 = arg1;
        var6 = _closure1_slot139;
        var5 = {};
        var1 = var2.enabled;
        var5['echoCancellation'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot66;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var3 = arg1;
            var2 = var3.setEchoCancellation;
            var1 = _closure2_slot0;
            var1 = var1.echoCancellation;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot154;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot151;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_ECHO_CANCELLATION'] = var11;
    var11 = function handleSetSidechainCompression(arg1) {
        var3 = _closure1_slot152;
        var1 = arg1;
        var2 = var1.enabled;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_SIDECHAIN_COMPRESSION'] = var11;
    var11 = function handleSetSidechainCompressionStrength(arg1) {
        var4 = _closure1_slot139;
        var2 = {};
        var1 = arg1;
        var1 = var1.strength;
        var2['sidechainCompressionStrength'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = _closure1_slot66;
        var3 = var4.setSidechainCompressionStrength;
        var2 = var2.sidechainCompressionStrength;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH'] = var11;
    var11 = function handleSetLoopback(arg1) {
        _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
 0:
            var2 = arg1;
            var1 = var2.enabled;
            var4 = var2.loopbackReason;
            var3 = _closure1_slot112;
            if(var1) { _fun0112_ip = 36; continue _fun0112 }
 24:
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
            _fun0112_ip = 46; continue _fun0112;
 36:
            var1 = var3.add;
            var1 = var1.bind(var3)(var4);
 46:
            var3 = _closure1_slot153;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var2 = _closure1_slot154;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['AUDIO_SET_LOOPBACK'] = var11;
    var11 = function handleSetNoiseSuppression(arg1) {
        var2 = arg1;
        var6 = _closure1_slot139;
        var5 = {};
        var1 = var2.enabled;
        var5['noiseSuppression'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot66;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var3 = arg1;
            var2 = var3.setNoiseSuppression;
            var1 = _closure2_slot0;
            var1 = var1.noiseSuppression;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot154;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot151;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_NOISE_SUPPRESSION'] = var11;
    var11 = function handleSetAutomaticGainControl(arg1) {
        var2 = arg1;
        var6 = _closure1_slot139;
        var5 = {};
        var1 = var2.enabled;
        var5['automaticGainControl'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot66;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var4 = _closure1_slot131;
            var1 = _closure2_slot0;
            var3 = var1.automaticGainControl;
            var1 = undefined;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot154;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot151;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_AUTOMATIC_GAIN_CONTROL'] = var11;
    var11 = function handleSetNoiseCancellation(arg1) {
        var2 = arg1;
        var6 = _closure1_slot139;
        var5 = {};
        var1 = var2.enabled;
        var5['noiseCancellation'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot66;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var3 = arg1;
            var2 = var3.setNoiseCancellation;
            var1 = _closure2_slot0;
            var1 = var1.noiseCancellation;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot154;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot151;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_NOISE_CANCELLATION'] = var11;
    var11 = function handleSetKrispModelOverride(arg1) {
        var3 = arg1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 69;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.setKrispModelOverride;
        var4 = var3.model;
        var4 = var5.bind(var6)(var4);
        var3 = var3.model;
        _closure1_slot99 = var3;
        var2 = _closure1_slot154;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['AUDIO_SET_KRISP_MODEL_OVERRIDE'] = var11;
    var11 = function handleSetSilenceWarning(arg1) {
        var4 = _closure1_slot139;
        var3 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var3['silenceWarning'] = var1;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = _closure1_slot117;
        var2 = var3.update;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['AUDIO_SET_DISPLAY_SILENCE_WARNING'] = var11;
    var11 = function handleSetDebugLogging(arg1) {
        var3 = _closure1_slot66;
        var2 = var3.setDebugLogging;
        var1 = arg1;
        var1 = var1.enabled;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['AUDIO_SET_DEBUG_LOGGING'] = var11;
    var11 = function handleSetKrispSuppressionLevel(arg1) {
        var1 = arg1;
        var4 = var1.level;
        _closure1_slot98 = var4;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 69;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.setKrispSuppressionLevel;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['AUDIO_SET_KRISP_SUPPRESSION_LEVEL'] = var11;
    var11 = function handleSetNoiseCancellationEnableStats(arg1) {
        _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 29;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isWeb;
            var4 = var4.bind(var5)();
            if(var4) { _fun0113_ip = 86; continue _fun0113 }
 41:
            var4 = var2.enabled;
            _closure1_slot101 = var4;
            var4 = _closure1_slot66;
            var5 = var4.setNoiseCancellationEnableStats;
            var4 = null;
            if(!(var4 != var5)) { _fun0113_ip = 86; continue _fun0113 }
 66:
            var4 = _closure1_slot66;
            var3 = var4.setNoiseCancellationEnableStats;
            var2 = var2.enabled;
            var2 = var3.bind(var4)(var2);
 86:
            return var1;
        }
    };
    var2['AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS'] = var11;
    var11 = function handleSetVideoHook(arg1) {
        var3 = _closure1_slot139;
        var2 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var2['videoHook'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_VIDEO_HOOK'] = var11;
    var11 = function handleSetExperimentalSoundshare(arg1) {
        var3 = _closure1_slot139;
        var2 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var2['experimentalSoundshare2'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE'] = var11;
    var11 = function handleSetUseSystemScreensharePicker(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var3 = _closure1_slot139;
        var2 = {};
        var2['useSystemScreensharePicker'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER'] = var11;
    var11 = function handleSetAttenuation(arg1) {
        var1 = arg1;
        var7 = var1.attenuation;
        var6 = var1.attenuateWhileSpeakingSelf;
        var1 = var1.attenuateWhileSpeakingOthers;
        var5 = _closure1_slot139;
        var4 = {};
        var4['attenuation'] = var7;
        var4['attenuateWhileSpeakingSelf'] = var6;
        var4['attenuateWhileSpeakingOthers'] = var1;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure2_slot0 = var4;
        var4 = _closure1_slot66;
        var3 = var4.eachConnection;
        var2 = function(arg1) {
            var5 = arg1;
            var4 = var5.setAttenuation;
            var1 = _closure2_slot0;
            var3 = var1.attenuation;
            var2 = var1.attenuateWhileSpeakingSelf;
            var1 = var1.attenuateWhileSpeakingOthers;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['AUDIO_SET_ATTENUATION'] = var11;
    var11 = function handleSetQoS(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot139;
        var4 = {};
        var4['qos'] = var1;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = _closure1_slot66;
        var3 = var4.eachConnection;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.setQoS;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['AUDIO_SET_QOS'] = var11;
    var11 = function handleDevices(arg1) {
        var1 = arg1;
        var6 = var1.inputDevices;
        var5 = var1.outputDevices;
        var3 = var1.videoDevices;
        var4 = _closure1_slot144;
        var1 = undefined;
        var4 = var4.bind(var1)(var6);
        var4 = _closure1_slot145;
        var4 = var4.bind(var1)(var5);
        var2 = _closure1_slot146;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['MEDIA_ENGINE_DEVICES'] = var11;
    var11 = function handleVolumeChange(arg1) {
        var1 = arg1;
        var6 = var1.inputVolume;
        var4 = var1.outputVolume;
        var3 = _closure1_slot139;
        var2 = {};
        var5 = _closure1_slot126;
        var1 = undefined;
        var5 = var5.bind(var1)(var6);
        var2['inputVolume'] = var5;
        var2['outputVolume'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_VOLUME_CHANGE'] = var11;
    var11 = function handleReset() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 57;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var2 = _closure1_slot59;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['AUDIO_RESET'] = var11;
    var11 = function handleInputDetected(arg1) {
        _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
 0:
            var1 = arg1;
            var2 = var1.inputDetected;
            _closure1_slot91 = var2;
            var3 = _closure1_slot92;
            var2 = !var3;
            if(var3) { _fun0114_ip = 30; continue _fun0114 }
 26:
            var2 = _closure1_slot91;
 30:
            if(!var2) { _fun0114_ip = 53; continue _fun0114 }
 33:
            var2 = true;
            _closure1_slot92 = var2;
            var2 = _closure1_slot117;
            var1 = var2.update;
            var1 = var1.bind(var2)();
 53:
            var1 = undefined;
            return var1;
        }
    };
    var2['AUDIO_INPUT_DETECTED'] = var11;
    var11 = function handleSetAudioSubsystem(arg1) {
        var3 = _closure1_slot158;
        var1 = arg1;
        var2 = var1.subsystem;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_SUBSYSTEM'] = var11;
    var11 = function handleBypassSystemInputProcessing(arg1) {
        var2 = arg1;
        var6 = var2.bypassEnabled;
        var5 = _closure1_slot139;
        var4 = {};
        var4['bypassSystemInputProcessing'] = var6;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var5 = _closure1_slot66;
        var4 = var5.setAudioInputBypassSystemProcessing;
        var4 = var4.bind(var5)(var6);
        var3 = _closure1_slot151;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING'] = var11;
    var11 = function handleSetAudioEnabled(arg1) {
        _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
 0:
            var2 = arg1;
            var3 = var2.enabled;
            _closure1_slot72 = var3;
            var2 = var2.unmute;
            if(!var2) { _fun0115_ip = 49; continue _fun0115 }
 24:
            var4 = _closure1_slot139;
            var3 = undefined;
            var2 = {'mute': false, 'deaf': false};
            var2 = var4.bind(var3)(var2);
 49:
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = _closure1_slot127;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_AUDIO_ENABLED'] = var11;
    var11 = function handleSetVideoEnabled(arg1) {
        var1 = arg1;
        var3 = var1.enabled;
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 32;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.requestPermission;
        var4 = _closure1_slot40;
        var4 = var4.CAMERA;
        var4 = var5.bind(var6)(var4);
        var2 = _closure1_slot128;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_VIDEO_ENABLED'] = var11;
    var11 = function handlePermission(arg1) {
        _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
 0:
            var1 = arg1;
            var2 = var1.kind;
            var1 = var1.granted;
            if(var1) { _fun0116_ip = 79; continue _fun0116 }
 17:
            var1 = 'audio';
            if(!(var1 !== var2)) { _fun0116_ip = 51; continue _fun0116 }
 25:
            var1 = 'video';
            if(!(var1 === var2)) { _fun0116_ip = 79; continue _fun0116 }
 33:
            var3 = _closure1_slot128;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1);
            _fun0116_ip = 79; continue _fun0116;
 51:
            var2 = false;
            _closure1_slot72 = var2;
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = _closure1_slot127;
            var1 = var2.bind(var3)(var1);
 79:
            var1 = undefined;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_PERMISSION'] = var11;
    var11 = function handleSetGoLiveSource(arg1) {
        _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var12 = null;
            var4 = var12 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0117_ip = 28; continue _fun0117 }
 22:
            var3 = var2.desktopSettings;
 28:
            if(!(var12 == var3)) { _fun0117_ip = 227; continue _fun0117 }
 35:
            var4 = var12 == var2;
            var3 = undefined;
            if(var4) { _fun0117_ip = 50; continue _fun0117 }
 44:
            var3 = var2.cameraSettings;
 50:
            if(!(var12 == var3)) { _fun0117_ip = 76; continue _fun0117 }
 54:
            var4 = _closure1_slot128;
            var3 = _closure1_slot83;
            var3 = var4.bind(var1)(var3, var12);
            _fun0117_ip = 554; continue _fun0117;
 76:
            var5 = var2.context;
            if(!(var12 == var5)) { _fun0117_ip = 98; continue _fun0117 }
 85:
            var3 = _closure1_slot51;
            var5 = var3.DEFAULT;
 98:
            var3 = var2.cameraSettings;
            var9 = var3.videoDeviceGuid;
            var8 = var3.audioDeviceGuid;
            var4 = _closure1_slot51;
            var4 = var4.STREAM;
            var5 = var5 === var4;
            if(!var5) { _fun0117_ip = 140; continue _fun0117 }
 136:
            var5 = _closure1_slot83;
 140:
            var7 = var2.qualityOptions;
            if(!(var12 == var7)) { _fun0117_ip = 164; continue _fun0117 }
 150:
            var7 = {'resolution': 720, 'frameRate': 30};
 164:
            var4 = _closure1_slot128;
            var3 = {};
            var6 = {};
            var6['videoDeviceGuid'] = var9;
            var6['audioDeviceGuid'] = var8;
            var3['cameraSource'] = var6;
            var6 = {};
            var8 = var7.resolution;
            var6['resolution'] = var8;
            var7 = var7.frameRate;
            var6['frameRate'] = var7;
            var3['quality'] = var6;
            var3 = var4.bind(var1)(var5, var3);
            _fun0117_ip = 554; continue _fun0117;
 227:
            var3 = var2.desktopSettings;
            var10 = var3.sourceId;
            var4 = var3.sound;
            var5 = var2.context;
            if(!(var12 == var5)) { _fun0117_ip = 267; continue _fun0117 }
 254:
            var3 = _closure1_slot51;
            var5 = var3.DEFAULT;
 267:
            var6 = var2.qualityOptions;
            if(!(var12 == var6)) { _fun0117_ip = 291; continue _fun0117 }
 277:
            var6 = {'resolution': 720, 'frameRate': 30};
 291:
            var2 = false;
            var9 = null;
            if(!(var2 !== var4)) { _fun0117_ip = 333; continue _fun0117 }
 299:
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 54;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getPidFromDesktopSource;
            var9 = var2.bind(var3)(var10);
 333:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 29;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.isPlatformEmbedded;
            var8 = null;
            var7 = null;
            if(!var3) { _fun0117_ip = 426; continue _fun0117 }
 369:
            var3 = true;
            var8 = null;
            var7 = null;
            if(!(var3 === var4)) { _fun0117_ip = 426; continue _fun0117 }
 379:
            var3 = _closure1_slot148;
            var3 = var3.bind(var1)(var9);
            var4 = var3.soundshareId;
            var3 = var3.soundshareSession;
            var7 = var3;
            var8 = var4;
            if(!(var12 != var8)) { _fun0117_ip = 426; continue _fun0117 }
 410:
            var11 = _closure1_slot149;
            var11 = var11.bind(var1)(var4, var3);
            var8 = var4;
            var7 = var3;
 426:
            var3 = _closure1_slot74;
            if(!(var5 !== var3)) { _fun0117_ip = 466; continue _fun0117 }
 434:
            var3 = _closure1_slot68;
            if(!(var12 != var3)) { _fun0117_ip = 462; continue _fun0117 }
 442:
            var11 = _closure1_slot66;
            var4 = var11.setGoLiveSource;
            var3 = _closure1_slot74;
            var3 = var4.bind(var11)(var12, var3);
 462:
            _closure1_slot74 = var5;
 466:
            var4 = _closure1_slot128;
            var3 = _closure1_slot51;
            var3 = var3.STREAM;
            var3 = var5 === var3;
            if(!var3) { _fun0117_ip = 491; continue _fun0117 }
 487:
            var3 = _closure1_slot83;
 491:
            var2 = {};
            var5 = {};
            var5['id'] = var10;
            var5['sourcePid'] = var9;
            var5['soundshareId'] = var8;
            var5['soundshareSession'] = var7;
            var2['desktopSource'] = var5;
            var5 = {};
            var7 = var6.resolution;
            var5['resolution'] = var7;
            var6 = var6.frameRate;
            var5['frameRate'] = var6;
            var2['quality'] = var5;
            var2 = var4.bind(var1)(var3, var2);
 554:
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var11;
    var11 = function handleSetVideoDevice(arg1) {
        var1 = arg1;
        var7 = var1.id;
        var4 = _closure1_slot139;
        var3 = {};
        var6 = _closure1_slot143;
        var5 = _closure1_slot78;
        var1 = undefined;
        var5 = var6.bind(var1)(var5, var7);
        var3['videoDeviceId'] = var5;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot128;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['MEDIA_ENGINE_SET_VIDEO_DEVICE'] = var11;
    var11 = function handleSetExperimentalEncoders(arg1) {
        var5 = _closure1_slot139;
        var4 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var4['experimentalEncoders'] = var1;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure2_slot0 = var4;
        var4 = _closure1_slot66;
        var3 = var4.eachConnection;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.setExperimentalEncoders;
            var1 = _closure2_slot0;
            var1 = var1.experimentalEncoders;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS'] = var11;
    var11 = function handleInteractionRequired(arg1) {
        _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot73;
            var1 = var2.required;
            var1 = var4 !== var1;
            if(!var1) { _fun0118_ip = 60; continue _fun0118 }
 23:
            var4 = var2.required;
            _closure1_slot73 = var4;
            var4 = var2.required;
            var1 = true;
            if(var4) { _fun0118_ip = 60; continue _fun0118 }
 44:
            var4 = _closure1_slot66;
            var3 = var4.interact;
            var3 = var3.bind(var4)();
            var1 = true;
 60:
            return var1;
        }
    };
    var2['MEDIA_ENGINE_INTERACTION_REQUIRED'] = var11;
    var2['USER_SETTINGS_MODAL_INIT'] = var10;
    var2['USER_SETTINGS_MODAL_SET_SECTION'] = var10;
    var10 = function handleSetCertifiedDevices() {
        var3 = _closure1_slot66;
        var2 = var3.eachConnection;
        var1 = _closure1_slot132;
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var2['CERTIFIED_DEVICES_SET'] = var10;
    var10 = function handleAppConnected(arg1) {
        var1 = arg1;
        var1 = var1.application;
        var3 = _closure1_slot71;
        var2 = var3.add;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['RPC_APP_CONNECTED'] = var10;
    var10 = function handleAppDisconnected(arg1) {
        var1 = arg1;
        var1 = var1.application;
        var3 = _closure1_slot71;
        var2 = var3.delete;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['RPC_APP_DISCONNECTED'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var1 = var1.mediaEngineState;
        var3 = var1.settingsByContext;
        _closure1_slot70 = var3;
        var3 = var1.inputDevices;
        _closure1_slot76 = var3;
        var3 = var1.outputDevices;
        _closure1_slot77 = var3;
        var3 = var1.appSupported;
        _closure1_slot113 = var3;
        var3 = var1.krispModuleLoaded;
        _closure1_slot96 = var3;
        var3 = var1.krispVersion;
        _closure1_slot97 = var3;
        var1 = var1.goLiveContext;
        _closure1_slot74 = var1;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleSetOpenH264(arg1) {
        _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
 0:
            var1 = arg1;
            var1 = var1.enabled;
            var5 = _closure1_slot139;
            var4 = {};
            var4['openH264'] = var1;
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var _closure2_slot0 = var7;
            var6 = _closure1_slot66;
            var5 = var6.setH264Enabled;
            var4 = var7.hardwareEncoding;
            if(var4) { _fun0119_ip = 60; continue _fun0119 }
 54:
            var4 = var7.openH264;
 60:
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot66;
            var3 = var4.eachConnection;
            var2 = function(arg1) {
                _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.setSoftwareH264;
                    var1 = _closure2_slot0;
                    var4 = var1.openH264;
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0120_ip = 34; continue _fun0120 }
 31:
                    var1 = var4;
 34:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_OPEN_H264'] = var10;
    var10 = function handleSetHardwareEncoding(arg1) {
        _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
 0:
            var1 = arg1;
            var1 = var1.enabled;
            var5 = _closure1_slot139;
            var4 = {};
            var4['hardwareEncoding'] = var1;
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var _closure2_slot0 = var5;
            var6 = _closure1_slot66;
            var4 = var6.eachConnection;
            var2 = function(arg1) {
                _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.setHardwareH264;
                    var1 = _closure2_slot0;
                    var4 = var1.hardwareEncoding;
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0122_ip = 34; continue _fun0122 }
 31:
                    var1 = var4;
 34:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2);
            var6 = _closure1_slot66;
            var4 = var6.setH264Enabled;
            var2 = var5.hardwareEncoding;
            if(var2) { _fun0121_ip = 80; continue _fun0121 }
 74:
            var2 = var5.openH264;
 80:
            var2 = var4.bind(var6)(var2);
            var7 = _closure1_slot66;
            var6 = var7.setAv1Enabled;
            var8 = var5.hardwareEncoding;
            var2 = null;
            var4 = var2 == var8;
            if(var4) { _fun0121_ip = 113; continue _fun0121 }
 110:
            var4 = var8;
 113:
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot66;
            var3 = var4.setH265Enabled;
            var5 = var5.hardwareEncoding;
            var2 = var2 == var5;
            if(var2) { _fun0121_ip = 144; continue _fun0121 }
 141:
            var2 = var5;
 144:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_HARDWARE_ENCODING'] = var10;
    var10 = function handleFocus(arg1) {
        _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
 0:
            var1 = arg1;
            var4 = var1.state;
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 72;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.isEnabled;
            var2 = var2.bind(var5)();
            var5 = _closure1_slot25;
            var5 = var5.BACKGROUND;
            if(!(var4 === var5)) { _fun0123_ip = 86; continue _fun0123 }
 57:
            var5 = _closure1_slot83;
            if(!var5) { _fun0123_ip = 86; continue _fun0123 }
 64:
            if(var2) { _fun0123_ip = 86; continue _fun0123 }
 67:
            var2 = true;
            _closure1_slot89 = var2;
            var5 = _closure1_slot128;
            var2 = false;
            var2 = var5.bind(var3)(var2);
            _fun0123_ip = 124; continue _fun0123;
 86:
            var2 = _closure1_slot25;
            var2 = var2.ACTIVE;
            if(!(var4 === var2)) { _fun0123_ip = 128; continue _fun0123 }
 100:
            var2 = _closure1_slot89;
            if(!var2) { _fun0123_ip = 128; continue _fun0123 }
 107:
            var2 = false;
            _closure1_slot89 = var2;
            var2 = _closure1_slot128;
            var1 = true;
            var1 = var2.bind(var3)(var1);
 124:
            var1 = true;
            return var1;
 128:
            var1 = false;
            return var1;
        }
    };
    var2['APP_STATE_UPDATE'] = var10;
    var10 = function handleSetChannelBitrate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot66;
        var2 = var3.eachConnection;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.setBitRate;
            var1 = _closure2_slot0;
            var1 = var1.bitrate;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['SET_CHANNEL_BITRATE'] = var10;
    var10 = function handleVADPermissionChange(arg1) {
        _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
 0:
            var1 = arg1;
            var1 = var1.hasPermission;
            var2 = !var1;
            var3 = _closure1_slot81;
            if(!(var2 !== var3)) { _fun0124_ip = 50; continue _fun0124 }
 23:
            _closure1_slot81 = var2;
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = _closure1_slot127;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
 50:
            var1 = false;
            return var1;
        }
    };
    var2['SET_VAD_PERMISSION'] = var10;
    var10 = function handleNativePermissionChange(arg1) {
        _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
 0:
            var1 = arg1;
            var3 = var1.state;
            var4 = var1.permissionType;
            var2 = _closure1_slot39;
            var2 = var2.ACCEPTED;
            var3 = var3 === var2;
            var2 = _closure1_slot40;
            var2 = var2.AUDIO;
            if(!(var2 !== var4)) { _fun0125_ip = 91; continue _fun0125 }
 45:
            var2 = _closure1_slot40;
            var2 = var2.CAMERA;
            if(!(var2 !== var4)) { _fun0125_ip = 63; continue _fun0125 }
 59:
            var2 = false;
            return var2;
 63:
            var2 = !var3;
            if(var3) { _fun0125_ip = 73; continue _fun0125 }
 69:
            var2 = _closure1_slot83;
 73:
            if(!var2) { _fun0125_ip = 116; continue _fun0125 }
 76:
            var4 = _closure1_slot128;
            var3 = undefined;
            var2 = false;
            var2 = var4.bind(var3)(var2);
            _fun0125_ip = 116; continue _fun0125;
 91:
            var2 = true;
            _closure1_slot109 = var2;
            var3 = _closure1_slot66;
            var2 = var3.eachConnection;
            var1 = _closure1_slot127;
            var1 = var2.bind(var3)(var1);
 116:
            var1 = undefined;
            return var1;
        }
    };
    var2['SET_NATIVE_PERMISSION'] = var10;
    var10 = function handleSetChannelVideoQualityMode(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot66;
        var2 = var3.eachConnection;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.applyVideoQualityMode;
            var1 = _closure2_slot0;
            var1 = var1.mode;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['SET_CHANNEL_VIDEO_QUALITY_MODE'] = var10;
    var10 = function handleSetAecDump(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var4 = _closure1_slot139;
        var2 = {};
        var2['aecDumpEnabled'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = _closure1_slot66;
        var3 = var4.setAecDump;
        var2 = var2.aecDumpEnabled;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_AEC_DUMP'] = var10;
    var10 = function handleChannelDelete() {
        _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
 0:
            var2 = _closure1_slot83;
            if(var2) { _fun0126_ip = 20; continue _fun0126 }
 10:
            var3 = _closure1_slot68;
            var2 = null;
            if(!(var2 != var3)) { _fun0126_ip = 56; continue _fun0126 }
 20:
            var3 = _closure1_slot20;
            var2 = var3.getRTCConnectionId;
            var2 = var2.bind(var3)();
            var4 = null;
            if(!(var4 == var2)) { _fun0126_ip = 56; continue _fun0126 }
 40:
            var3 = _closure1_slot128;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
 56:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleNoiseCancellationErrorReset() {
        _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
 0:
            var2 = _closure1_slot107;
            var1 = !var2;
            var1 = !var1;
            if(!var2) { _fun0127_ip = 24; continue _fun0127 }
 16:
            var2 = false;
            _closure1_slot107 = var2;
            var1 = true;
 24:
            return var1;
        }
    };
    var2['MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET'] = var10;
    var10 = function handleApplyMediaFilterSettings(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = _closure1_slot66;
        var1 = var2.applyMediaFilterSettings;
        var3 = var1.bind(var2)(var3);
        var2 = var3.finally;
        var1 = function() {
            var2 = false;
            _closure1_slot108 = var2;
            var2 = _closure1_slot64;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS'] = var10;
    var10 = function handleApplyMediaFilterSettingsStart() {
        var1 = true;
        _closure1_slot108 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START'] = var10;
    var10 = function handleApplyMediaFilterSettingsError() {
        var1 = false;
        _closure1_slot108 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR'] = var10;
    var10 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var5 = var2.type;
            var2 = var1.local;
            var3 = var1.wasSaved;
            var4 = _closure1_slot42;
            var4 = var4.PRELOADED_USER_SETTINGS;
            if(!(var5 === var4)) { _fun0128_ip = 67; continue _fun0128 }
 43:
            if(var2) { _fun0128_ip = 67; continue _fun0128 }
 46:
            var2 = null;
            if(!(var2 == var3)) { _fun0128_ip = 67; continue _fun0128 }
 52:
            var3 = _closure1_slot147;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            return var1;
 67:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var10;
    var10 = function handleClipsInit(arg1) {
        _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
 0:
            var1 = arg1;
            var9 = var1.sourceId;
            var4 = var1.applicationName;
            var5 = var1.quality;
            var2 = _closure1_slot11;
            var1 = var2.isDecoupledGameClippingEnabled;
            var2 = var1.bind(var2)();
            var3 = _closure1_slot11;
            var1 = var3.getSettings;
            var1 = var1.bind(var3)();
            var1 = var1.decoupledClipsEnabled;
            if(!var2) { _fun0129_ip = 544; continue _fun0129 }
 64:
            if(!var1) { _fun0129_ip = 544; continue _fun0129 }
 70:
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 56;
            var1 = var3[var1];
            var10 = undefined;
            var1 = var2.bind(var10)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0129_ip = 544; continue _fun0129 }
 101:
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 54;
            var1 = var6[var1];
            var3 = var3.bind(var10)(var1);
            var1 = var3.getPidFromDesktopSource;
            var6 = var1.bind(var3)(var9);
            var1 = _closure1_slot148;
            var3 = var1.bind(var10)(var6);
            var1 = {};
            var7 = {};
            var7['id'] = var9;
            var7['sourcePid'] = var6;
            var6 = var3.soundshareId;
            var7['soundshareId'] = var6;
            var3 = var3.soundshareSession;
            var7['soundshareSession'] = var3;
            var1['desktopSource'] = var7;
            var1['quality'] = var5;
            var7 = _closure1_slot69;
            var7 = var2 != var7;
            if(!var7) { _fun0129_ip = 227; continue _fun0129 }
 197:
            var9 = _closure1_slot69;
            var9 = var9.desktopSource;
            var11 = var9.id;
            var9 = var1.desktopSource;
            var9 = var9.id;
            var7 = var11 !== var9;
 227:
            if(!var7) { _fun0129_ip = 348; continue _fun0129 }
 230:
            var9 = _closure1_slot66;
            var7 = var9.setClipsSource;
            var7 = var7.bind(var9)(var2);
            var9 = _closure1_slot0;
            var11 = _closure1_slot3;
            var7 = 29;
            var7 = var11[var7];
            var9 = var9.bind(var10)(var7);
            var7 = var9.isWindows;
            var7 = var7.bind(var9)();
            if(!var7) { _fun0129_ip = 298; continue _fun0129 }
 278:
            var9 = _closure1_slot69;
            var9 = var9.desktopSource;
            var9 = var9.soundshareId;
            var7 = var2 != var9;
 298:
            if(!var7) { _fun0129_ip = 348; continue _fun0129 }
 301:
            var9 = _closure1_slot2;
            var11 = _closure1_slot3;
            var7 = 38;
            var7 = var11[var7];
            var11 = var9.bind(var10)(var7);
            var9 = var11.cancelAttachToProcess;
            var7 = _closure1_slot69;
            var7 = var7.desktopSource;
            var7 = var7.soundshareId;
            var7 = var9.bind(var11)(var7);
 348:
            if(!(var2 != var6)) { _fun0129_ip = 362; continue _fun0129 }
 352:
            var2 = _closure1_slot149;
            var2 = var2.bind(var10)(var6, var3);
 362:
            _closure1_slot69 = var1;
            var1 = _closure1_slot122;
            var7 = var1.bind(var10)();
            var1 = _closure1_slot124;
            var1 = var1.bind(var10)();
            var9 = var1.videoHook;
            var3 = _closure1_slot66;
            var2 = var3.setClipsSource;
            var1 = {};
            var6 = {};
            var11 = _closure1_slot69;
            var11 = var11.desktopSource;
            var11 = var11.id;
            var6['id'] = var11;
            var11 = _closure1_slot69;
            var11 = var11.desktopSource;
            var11 = var11.soundshareId;
            var6['soundshareId'] = var11;
            var6['useVideoHook'] = var9;
            var9 = _closure1_slot134;
            var9 = var9.bind(var10)();
            var6['useGraphicsCapture'] = var9;
            var11 = _closure1_slot64;
            var9 = var11.getExperimentalSoundshare;
            var9 = var9.bind(var11)();
            var6['useLoopback'] = var9;
            var9 = true;
            var6['useQuartzCapturer'] = var9;
            var9 = _closure1_slot135;
            var9 = var9.bind(var10)();
            var6['allowScreenCaptureKit'] = var9;
            var9 = 500;
            var6['videoHookStaleFrameTimeoutMs'] = var9;
            var8 = _closure1_slot61;
            var6['graphicsCaptureStaleFrameTimeoutMs'] = var8;
            var6['hdrCaptureMode'] = var7;
            var1['desktopDescription'] = var6;
            var1['quality'] = var5;
            var1['applicationName'] = var4;
            var1 = var2.bind(var3)(var1);
 544:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_INIT'] = var10;
    var10 = function handleClipsSettingsUpdate(arg1) {
        _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
 0:
            var1 = arg1;
            var1 = var1.settings;
            var2 = var1.decoupledClipsEnabled;
            var1 = false;
            if(!(var1 === var2)) { _fun0130_ip = 45; continue _fun0130 }
 21:
            var3 = null;
            _closure1_slot69 = var3;
            var2 = _closure1_slot66;
            var1 = var2.setClipsSource;
            var1 = var1.bind(var2)(var3);
 45:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_SETTINGS_UPDATE'] = var10;
    var10 = function handleSetEnableHardwareMuteNotice(arg1) {
        var1 = arg1;
        var2 = var1.enabled;
        _closure1_slot115 = var2;
        var1 = undefined;
        return var1;
    };
    var2['MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE'] = var10;
    var10 = function handleVoiceFilterRequestSwitch(arg1) {
        var1 = arg1;
        var1 = var1.newVoiceFilterId;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot139;
        var4 = {};
        var4['mostRecentlyRequestedVoiceFilter'] = var1;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = _closure1_slot66;
        var3 = var4.eachConnection;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.setVoiceFilterId;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['VOICE_FILTER_REQUEST_SWITCH'] = var10;
    var10 = function handleVoiceFilterLoopbackToggle(arg1) {
        _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
 0:
            var1 = arg1;
            var4 = var1.enabled;
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 52;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var3);
            var6 = var7.track;
            var3 = _closure1_slot24;
            var5 = var3.VOICE_FILTER_PLAYBACK_TOGGLED;
            var3 = {};
            var9 = _closure1_slot102;
            var8 = null;
            var9 = var8 != var9;
            if(!var9) { _fun0131_ip = 67; continue _fun0131 }
 63:
            var8 = _closure1_slot102;
 67:
            var3['active_voice_filter_id'] = var8;
            var3['enabled'] = var4;
            var3 = var6.bind(var7)(var5, var3);
            var3 = _closure1_slot139;
            var2 = {};
            var2['voiceFilterPlaybackEnabled'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var2['VOICE_FILTER_LOOPBACK_TOGGLE'] = var10;
    var10 = function handleVoiceFilterApplied(arg1) {
        _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
 0:
            var1 = arg1;
            var3 = var1.voiceFilterId;
            var1 = _closure1_slot102;
            _closure1_slot104 = var1;
            var1 = _closure1_slot103;
            _closure1_slot105 = var1;
            _closure1_slot102 = var3;
            var1 = null;
            if(!(var1 !== var3)) { _fun0132_ip = 55; continue _fun0132 }
 38:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var1 = var3.bind(var4)();
 55:
            _closure1_slot103 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['VOICE_FILTER_APPLIED'] = var10;
    var2['VOICE_FILTER_DOWNLOAD_FAILED'] = var7;
    var2['VOICE_FILTER_APPLY_FAILED'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var29 = var7;
    var27 = var2;
    var2 = new var29[var9](var28, var27, var26);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot64 = var2;
    var4 = 75;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MediaEngineStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();