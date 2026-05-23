// app/stores/MediaEngineStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var12;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
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
            _closure1_slot140 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot140 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot142;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot142;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot141 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot142 = var1;
    var1 = function getDefaultSettings() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = {'mode': null, 'modeOptions': null, 'vadUseKrispSettingVersion': 0, 'ncUseKrispSettingVersion': 0, 'ncUseKrispjsSettingVersion': 0, 'mute': false, 'deaf': false, 'echoCancellation': true, 'noiseSuppression': false, 'automaticGainControl': true, 'noiseCancellation': true, 'bypassSystemInputProcessing': true, 'hardwareEnabledVersion': 0, 'silenceWarning': true, 'attenuation': 0, 'attenuateWhileSpeakingSelf': false, 'attenuateWhileSpeakingOthers': true};
            var3 = _closure1_slot25;
            var3 = var3.VOICE_ACTIVITY;
            var1['mode'] = var3;
            var4 = {'threshold': 4294967236, 'autoThreshold': null, 'vadUseKrisp': true, 'vadKrispActivationThreshold': 0.5, 'vadLeading': 5, 'vadTrailing': 25, 'delay': 20};
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 28;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.isPlatformEmbedded;
            if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = false;
case 39:
            var4['autoThreshold'] = var3;
            var3 = true;
            var6 = new Array(0);
            var4['shortcut'] = var6;
            var4['updatedAt'] = var5;
            var1['modeOptions'] = var4;
            var5 = 0;
            var4 = false;
            var6 = {};
            var1['localMutes'] = var6;
            var6 = {};
            var1['disabledLocalVideos'] = var6;
            var6 = {};
            var1['videoToggleStateMap'] = var6;
            var6 = {};
            var1['localVolumes'] = var6;
            var6 = {};
            var8 = _closure1_slot62;
            var9 = var6;
            var7 = copyDataProperties(var9, var8);
            var1['audioMixerSettings'] = var6;
            var1['audioMixerSettingsVersion'] = var5;
            var5 = {};
            var1['localPans'] = var5;
            var5 = _closure1_slot44;
            var1['inputVolume'] = var5;
            var5 = _closure1_slot44;
            var1['outputVolume'] = var5;
            var5 = _closure1_slot46;
            var1['inputDeviceId'] = var5;
            var5 = _closure1_slot46;
            var1['outputDeviceId'] = var5;
            var5 = _closure1_slot46;
            var1['videoDeviceId'] = var5;
            var1['qos'] = var4;
            var1['qosMigrated'] = var4;
            var6 = _closure1_slot73;
            var5 = var6.supports;
            var2 = _closure1_slot49;
            var2 = var2.VIDEO_HOOK;
            var2 = var5.bind(var6)(var2);
            var1['videoHook'] = var2;
            var2 = null;
            var1['experimentalSoundshare2'] = var2;
            var1['useSystemScreensharePicker'] = var2;
            var1['h265Enabled'] = var3;
            var1['vadThrehsoldMigrated'] = var4;
            var1['aecDumpEnabled'] = var4;
            var1['openH264Enabled'] = var3;
            var1['sidechainCompression'] = var3;
            var4 = 1;
            var1['sidechainCompressionSettingVersion'] = var4;
            var4 = 50;
            var1['sidechainCompressionStrength'] = var4;
            var1['automaticAudioSubsystem'] = var3;
            var1['activeInputProfile'] = var2;
            return var1;
        }
    };
    var _closure1_slot143 = var1;
    var1 = function getHdrCaptureMode(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 32;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getGoLiveHdrConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.hdrCaptureMode;
        return var1;
    };
    var _closure1_slot144 = var1;
    var1 = function _detectH265HardwareDecode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 23; continue _fun0006 }
case 41:
                    var4 = undefined;
                    var2 = global;
                    var3 = var2.window;
                    var5 = 'undefined';
                    var3 = typeof var3;
                    if(!(var5 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 37:
                    var3 = var2.navigator;
                    var3 = typeof var3;
                    if(!(var5 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 9:
                    var5 = var2.navigator;
                    var3 = 'mediaCapabilities';
                    var3 = var3 in var5;
                    if(!var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = var2.navigator;
                    var5 = var3.mediaCapabilities;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0006_ip = 42; continue _fun0006 }
case 44: // try_start_0
                    var2 = var2.navigator;
                    var5 = var2.mediaCapabilities;
                    var3 = var5.decodingInfo;
                    var2 = {};
                    var6 = 'file';
                    var2['type'] = var6;
                    var6 = {'contentType': 'video/mp4; codecs="hev1.1.6.L153.B0"', 'width': 1920, 'height': 1080, 'bitrate': 2000000, 'framerate': 30};
                    var2['video'] = var6;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=140);
case 45:
                    return var2;
case 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var4 = var2;
                    var5 = var2.supported;
                    var3 = var5;
                    if(!var5) { _fun0006_ip = 21; continue _fun0006 }
case 49:
                    var3 = var4.powerEfficient;
case 21: // try_end0
                    return var3;
case 47:
                    return var2;
case 50: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 42:
                    var2 = false;
                    return var2;
case 23:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot145 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot145 = var1;
    var1 = function startH265HardwareDetection() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot122;
            var1 = null;
            if(!(var1 == var4)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var1 = global;
            var4 = var1.window;
            var5 = 'undefined';
            var4 = typeof var4;
            if(!(var5 === var4)) { _fun0007_ip = 53; continue _fun0007 }
case 37:
            var5 = var1.Promise;
            var4 = var5.resolve;
            var1 = false;
            var1 = var4.bind(var5)(var1);
            _fun0007_ip = 13; continue _fun0007;
case 53:
            var5 = function detectH265HardwareDecode() {
                var1 = undefined;
                var4 = _closure1_slot145;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = undefined;
            var5 = var5.bind(var4)();
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = arg1;
                _closure1_slot121 = var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot122 = var3;
            var1 = var3;
case 13:
            _fun0007_ip = 54; continue _fun0007;
case 51:
            var1 = _closure1_slot122;
case 54:
            return var1;
        }
    };
    var _closure1_slot146 = var1;
    var1 = function getStoredSettings() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arguments[0];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var1 = _closure1_slot50;
            var4 = var1.DEFAULT;
case 55:
            var1 = _closure1_slot78;
            var1 = var1[var4];
            var2 = null;
            if(!(var2 == var1)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var2 = _closure1_slot143;
            var2 = var2.bind(var5)();
            var3 = _closure1_slot78;
            var3[var4] = var2;
            var1 = var2;
case 57:
            return var1;
        }
    };
    var _closure1_slot147 = var1;
    var1 = function _getSettings10() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arguments[0];
            var8 = undefined;
            if(!(var3 === var8)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var1 = _closure1_slot50;
            var3 = var1.DEFAULT;
case 55:
            var2 = _closure1_slot147;
            var5 = var2.bind(var8)(var3);
            var3 = _closure1_slot71;
            var2 = var5.activeInputProfile;
            var7 = null;
            if(!(var7 == var2)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var4 = _closure1_slot41;
            var2 = var4.CUSTOM;
case 59:
            var4 = var3[var2];
            var2 = _closure1_slot182;
            var2 = var2.bind(var8)();
            if(var2) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var2 = _closure1_slot72;
            _fun0009_ip = 63; continue _fun0009;
case 61:
            var2 = _closure1_slot138;
case 63:
            var3 = {};
            var6 = var5.modeOptions;
            if(!(var7 == var6)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var6 = {};
case 64:
            var13 = var3;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = var4.modeOptions;
            if(!(var7 == var6)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var6 = {};
case 66:
            var13 = var3;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = var2.modeOptions;
            if(!(var7 == var6)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var6 = {};
case 68:
            var13 = var3;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = var3.vadDuringPreProcess;
            if(!(var7 == var6)) { _fun0009_ip = 70; continue _fun0009 }
case 18:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 33;
            var6 = var10[var6];
            var10 = var9.bind(var8)(var6);
            var9 = var10.getVADBeforeProcessingExperimentConfig;
            var6 = {};
            var11 = 'getSettings';
            var6['location'] = var11;
            var6 = var9.bind(var10)(var6);
            var6 = var6.enabled;
            var3['vadDuringPreProcess'] = var6;
case 70:
            var6 = var3.vadKrispActivationThreshold;
            if(!(var7 == var6)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var9 = var4.automaticGainControl;
            var6 = true;
            if(!(var6 !== var9)) { _fun0009_ip = 22; continue _fun0009 }
case 71:
            var9 = var5.automaticGainControl;
            var6 = true;
            if(!(var6 === var9)) { _fun0009_ip = 73; continue _fun0009 }
case 22:
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 34;
            var1 = var9[var1];
            var8 = var6.bind(var8)(var1);
            var6 = var8.getAGC2ExperimentConfig;
            var1 = {};
            var9 = 'getSettings';
            var1['location'] = var9;
            var1 = var6.bind(var8)(var1);
            var6 = var1.vadKrispActivationThreshold;
            if(!(var7 != var6)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var1 = var1.vadKrispActivationThreshold;
            var3['vadKrispActivationThreshold'] = var1;
case 73:
            var1 = {};
            var13 = var1;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var4;
            var4 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'modeOptions';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot148 = var1;
    var1 = function setInputMode(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot148;
            var2 = var5.context;
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var4 = var6.mode;
            var3 = var5.context;
            var2 = _closure1_slot50;
            var2 = var2.DEFAULT;
            if(!(var3 === var2)) { _fun0010_ip = 39; continue _fun0010 }
case 6:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 35;
            var2 = var7[var2];
            var7 = var3.bind(var1)(var2);
            var3 = var7.setPushToTalkState;
            var2 = false;
            var2 = var3.bind(var7)(var2, var2);
case 39:
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 36;
            var2 = var7[var2];
            var7 = var3.bind(var1)(var2);
            var3 = var7.getConfig;
            var2 = {};
            var9 = 'setInputMode';
            var2['location'] = var9;
            var2 = var3.bind(var7)(var2);
            var7 = var2.showPTTSpeakingIndicator;
            if(!var7) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var2 = _closure1_slot25;
            var2 = var2.PUSH_TO_TALK;
            var7 = var4 === var2;
case 75:
            var3 = var5.setInputMode;
            var2 = {};
            var9 = var6.modeOptions;
            var9 = var9.threshold;
            var2['vadThreshold'] = var9;
            var10 = !var7;
            var9 = !var10;
            if(!var10) { _fun0010_ip = 77; continue _fun0010 }
case 78:
            var10 = var6.modeOptions;
            var9 = var10.autoThreshold;
case 77:
            var2['vadAutoThreshold'] = var9;
            var9 = !var7;
            var7 = !var9;
            if(!var9) { _fun0010_ip = 79; continue _fun0010 }
case 80:
            var9 = var6.modeOptions;
            var7 = var9.vadUseKrisp;
case 79:
            if(!var7) { _fun0010_ip = 81; continue _fun0010 }
case 82:
            var8 = _closure1_slot182;
            var7 = var8.bind(var1)();
case 81:
            var2['vadUseKrisp'] = var7;
            var7 = var6.modeOptions;
            var9 = var7.vadKrispActivationThreshold;
            var7 = null;
            var10 = var7 != var9;
            var8 = 0.5;
            if(!var10) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var8 = var9;
case 83:
            var2['vadKrispActivationThreshold'] = var8;
            var8 = var6.modeOptions;
            var8 = var8.vadLeading;
            var2['vadLeading'] = var8;
            var8 = var6.modeOptions;
            var8 = var8.vadTrailing;
            var2['vadTrailing'] = var8;
            var8 = var6.modeOptions;
            var8 = var8.vadDuringPreProcess;
            var7 = var7 != var8;
            if(!var7) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var7 = var8;
case 85:
            var2['vadDuringPreProcess'] = var7;
            var7 = global;
            var8 = var7.Math;
            var7 = var8.round;
            var6 = var6.modeOptions;
            var6 = var6.delay;
            var6 = var7.bind(var8)(var6);
            var2['pttReleaseDelay'] = var6;
            var2 = var3.bind(var5)(var4, var2);
            return var1;
        }
    };
    var _closure1_slot149 = var1;
    var1 = function clampVolume(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = undefined;
            var5 = undefined;
            if(!(var5 === var5)) { _fun0011_ip = 52; continue _fun0011 }
case 87:
            var5 = _closure1_slot44;
case 52:
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 37;
            var1 = var4[var1];
            var4 = var2.bind(var3)(var1);
            var3 = var4.clamp;
            var2 = arg1;
            var1 = 0;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot150 = var1;
    var1 = function updateConnectionMuteDeaf(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot148;
            var4 = var3.context;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = _closure1_slot80;
            var7 = !var5;
            if(var7) { _fun0012_ip = 88; continue _fun0012 }
case 89:
            var7 = var4.mute;
case 88:
            if(var7) { _fun0012_ip = 90; continue _fun0012 }
case 91:
            var7 = var4.deaf;
case 90:
            var6 = var3.context;
            var5 = _closure1_slot50;
            var5 = var5.DEFAULT;
            if(!(var6 !== var5)) { _fun0012_ip = 54; continue _fun0012 }
case 43:
            var8 = var3.context;
            var5 = _closure1_slot50;
            var5 = var5.STREAM;
            var6 = var7;
            if(!(var8 === var5)) { _fun0012_ip = 92; continue _fun0012 }
case 51:
            var6 = true;
            _fun0012_ip = 92; continue _fun0012;
case 54:
            var5 = var7;
            if(var7) { _fun0012_ip = 93; continue _fun0012 }
case 94:
            var5 = _closure1_slot90;
case 93:
            if(var5) { _fun0012_ip = 95; continue _fun0012 }
case 96:
            var5 = _closure1_slot91;
case 95:
            if(var5) { _fun0012_ip = 97; continue _fun0012 }
case 98:
            var5 = _closure1_slot92;
case 97:
            if(var5) { _fun0012_ip = 18; continue _fun0012 }
case 67:
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 31;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.didHavePermission;
            var7 = _closure1_slot38;
            var7 = var7.AUDIO;
            var7 = var8.bind(var9)(var7);
            var5 = !var7;
case 18:
            var6 = var5;
case 92:
            var5 = var3.setSelfMute;
            var5 = var5.bind(var3)(var6);
            var5 = var3.setSelfDeaf;
            var4 = var4.deaf;
            var4 = var5.bind(var3)(var4);
            var4 = var3.context;
            var3 = _closure1_slot50;
            var3 = var3.DEFAULT;
            if(!(var4 === var3)) { _fun0012_ip = 99; continue _fun0012 }
case 70:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 38;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateNativeMute;
            var2 = var2.bind(var3)();
case 99:
            return var1;
        }
    };
    var _closure1_slot151 = var1;
    var1 = function updateVideo() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arguments[0];
            var9 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0013_ip = 100; continue _fun0013 }
case 101:
            var3 = _closure1_slot94;
case 100:
            if(!(var9 === var1)) { _fun0013_ip = 7; continue _fun0013 }
case 35:
            var9 = _closure1_slot75;
case 7:
            var7 = _closure1_slot75;
            var4 = null;
            var6 = var4 == var7;
            var5 = undefined;
            if(var6) { _fun0013_ip = 102; continue _fun0013 }
case 103:
            var5 = var7.desktopSource;
case 102:
            var5 = var4 != var5;
            if(!var5) { _fun0013_ip = 96; continue _fun0013 }
case 11:
            var6 = var7.desktopSource;
            var8 = var6.id;
            var10 = var4 == var9;
            var6 = undefined;
            if(var10) { _fun0013_ip = 104; continue _fun0013 }
case 61:
            var10 = var9.desktopSource;
            var11 = var4 == var10;
            var6 = undefined;
            if(var11) { _fun0013_ip = 104; continue _fun0013 }
case 15:
            var6 = var10.id;
case 104:
            var5 = var8 !== var6;
case 96:
            if(!var5) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var5 = var7.desktopSource;
            var5 = var5.soundshareId;
            if(!(var4 != var5)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var5 = 28;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isWindows;
            var5 = var5.bind(var6)();
            if(var5) { _fun0013_ip = 109; continue _fun0013 }
case 107:
            var5 = var7.desktopSource;
            var5 = var5.sourcePid;
            var5 = var4 != var5;
            if(!var5) { _fun0013_ip = 110; continue _fun0013 }
case 20:
            var6 = _closure1_slot148;
            var6 = var6.bind(var1)();
            var5 = var6.videoHook;
case 110:
            if(!var5) { _fun0013_ip = 111; continue _fun0013 }
case 112:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 39;
            var5 = var8[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.cancelAttachToProcess;
            var5 = var7.desktopSource;
            var5 = var5.sourcePid;
            var5 = var6.bind(var8)(var5);
            _fun0013_ip = 111; continue _fun0013;
case 109:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 39;
            var5 = var8[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.cancelAttachToProcess;
            var5 = var7.desktopSource;
            var5 = var5.soundshareId;
            var5 = var6.bind(var8)(var5);
case 111:
            var8 = _closure1_slot73;
            var6 = var8.setGoLiveSource;
            var5 = _closure1_slot82;
            var5 = var6.bind(var8)(var4, var5);
case 105:
            var6 = var4 == var7;
            var5 = undefined;
            if(var6) { _fun0013_ip = 113; continue _fun0013 }
case 114:
            var5 = var7.cameraSource;
case 113:
            var5 = var4 == var5;
            if(var5) { _fun0013_ip = 115; continue _fun0013 }
case 31:
            var6 = var7.cameraSource;
            var8 = var6.videoDeviceGuid;
            var10 = var4 == var9;
            var6 = undefined;
            if(var10) { _fun0013_ip = 116; continue _fun0013 }
case 117:
            var10 = var9.cameraSource;
            var11 = var4 == var10;
            var6 = undefined;
            if(var11) { _fun0013_ip = 116; continue _fun0013 }
case 118:
            var6 = var10.videoDeviceGuid;
case 116:
            var6 = var8 === var6;
            if(!var6) { _fun0013_ip = 119; continue _fun0013 }
case 120:
            var7 = var7.cameraSource;
            var8 = var7.audioDeviceGuid;
            var10 = var4 == var9;
            var7 = undefined;
            if(var10) { _fun0013_ip = 121; continue _fun0013 }
case 122:
            var10 = var9.cameraSource;
            var11 = var4 == var10;
            var7 = undefined;
            if(var11) { _fun0013_ip = 121; continue _fun0013 }
case 123:
            var7 = var10.audioDeviceGuid;
case 121:
            var6 = var8 === var7;
case 119:
            var5 = var6;
case 115:
            if(var5) { _fun0013_ip = 124; continue _fun0013 }
case 125:
            var7 = _closure1_slot73;
            var6 = var7.setGoLiveSource;
            var5 = _closure1_slot82;
            var5 = var6.bind(var7)(var4, var5);
case 124:
            var5 = _closure1_slot94;
            if(var5) { _fun0013_ip = 126; continue _fun0013 }
case 127:
            if(!var3) { _fun0013_ip = 128; continue _fun0013 }
case 126:
            var5 = _closure1_slot148;
            var5 = var5.bind(var1)();
            var7 = var5.videoDeviceId;
            var5 = _closure1_slot94;
            if(!var5) { _fun0013_ip = 129; continue _fun0013 }
case 130:
            var5 = _closure1_slot46;
            if(!(var7 === var5)) { _fun0013_ip = 129; continue _fun0013 }
case 131:
            var6 = _closure1_slot96;
            var5 = _closure1_slot46;
            if(!(var6 === var5)) { _fun0013_ip = 129; continue _fun0013 }
case 132:
            var6 = _closure1_slot95;
            var5 = _closure1_slot47;
            if(!(var6 === var5)) { _fun0013_ip = 133; continue _fun0013 }
case 129:
            _closure1_slot96 = var7;
            _fun0013_ip = 134; continue _fun0013;
case 133:
            var7 = _closure1_slot95;
case 134:
            _closure1_slot94 = var3;
            if(var3) { _fun0013_ip = 135; continue _fun0013 }
case 136:
            var3 = _closure1_slot47;
            _fun0013_ip = 137; continue _fun0013;
case 135:
            var6 = _closure1_slot169;
            var5 = _closure1_slot88;
            var3 = var6.bind(var1)(var5, var7);
case 137:
            _closure1_slot95 = var3;
            var6 = _closure1_slot73;
            var5 = var6.setVideoInputDevice;
            var3 = _closure1_slot95;
            var3 = var5.bind(var6)(var3);
case 128:
            var _closure1_slot75 = var9;
            if(!(var4 != var9)) { _fun0013_ip = 138; continue _fun0013 }
case 139:
            var6 = {};
            var3 = var9.quality;
            var3 = var3.resolution;
            var6['resolution'] = var3;
            var3 = var9.quality;
            var3 = var3.frameRate;
            var6['frameRate'] = var3;
            var3 = var9.desktopSource;
            if(!(var4 != var3)) { _fun0013_ip = 140; continue _fun0013 }
case 141:
            var5 = _closure1_slot144;
            var3 = 'MediaEngineStore go live';
            var12 = var5.bind(var1)(var3);
            var3 = _closure1_slot148;
            var3 = var3.bind(var1)();
            var17 = var3.videoHook;
            var3 = _closure1_slot160;
            var14 = var3.bind(var1)();
            var13 = 0;
            if(!var14) { _fun0013_ip = 142; continue _fun0013 }
case 143:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 28;
            var3 = var7[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isWindows;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0013_ip = 144; continue _fun0013 }
case 145:
            var7 = _closure1_slot1;
            var5 = _closure1_slot3;
            var8 = 52;
            var8 = var5[var8];
            var10 = var7.bind(var1)(var8);
            var8 = var10.satisfies;
            var15 = 62;
            var5 = var5[var15];
            var5 = var7.bind(var1)(var5);
            var5 = var4 == var5;
            var7 = undefined;
            if(var5) { _fun0013_ip = 146; continue _fun0013 }
case 147:
            var11 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var11.bind(var1)(var5);
            var5 = var5.os;
            var7 = var5.release;
case 146:
            var5 = _closure1_slot32;
            var3 = var8.bind(var10)(var7, var5);
case 144:
            if(var3) { _fun0013_ip = 148; continue _fun0013 }
case 149:
            var3 = _closure1_slot33;
            _fun0013_ip = 150; continue _fun0013;
case 148:
            var3 = _closure1_slot31;
case 150:
            var13 = var3;
case 142:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var15 = 28;
            var3 = var3[var15];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isWindows;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0013_ip = 151; continue _fun0013 }
case 152:
            var5 = _closure1_slot31;
            var3 = var13 >= var5;
case 151:
            var11 = false;
            if(!var3) { _fun0013_ip = 153; continue _fun0013 }
case 154:
            var5 = _closure1_slot130;
            var3 = true;
            if(!(var3 !== var5)) { _fun0013_ip = 155; continue _fun0013 }
case 156:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 41;
            var3 = var7[var3];
            var3 = var5.bind(var1)(var3);
            var7 = var3.WGCDirtyRegionsAllExperiment;
            var5 = var7.getConfig;
            var3 = {};
            var8 = 'updateVideo';
            var3['location'] = var8;
            var3 = var5.bind(var7)(var3);
            var3 = var3.enabled;
            _fun0013_ip = 157; continue _fun0013;
case 155:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var5 = 40;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var8 = var5.WGCDirtyRegionsExperiment;
            var7 = var8.getConfig;
            var5 = {};
            var10 = 'updateVideo';
            var5['location'] = var10;
            var5 = var7.bind(var8)(var5);
            var3 = var5.enabled;
case 157:
            var11 = var3;
case 153:
            var16 = !var17;
            if(var16) { _fun0013_ip = 158; continue _fun0013 }
case 159:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 42;
            var3 = var7[var3];
            var3 = var5.bind(var1)(var3);
            var7 = var3.DisableHookFramePacerExperiment;
            var5 = var7.getConfig;
            var3 = {};
            var8 = 'updateVideo';
            var3['location'] = var8;
            var3 = var5.bind(var7)(var3);
            var3 = var3.enabled;
            var16 = !var3;
case 158:
            var10 = var17;
            if(!var10) { _fun0013_ip = 160; continue _fun0013 }
case 161:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 43;
            var3 = var7[var3];
            var3 = var5.bind(var1)(var3);
            var7 = var3.VideoHookDX12Experiment;
            var5 = var7.getConfig;
            var3 = {};
            var8 = 'updateVideo';
            var3['location'] = var8;
            var3 = var5.bind(var7)(var3);
            var10 = var3.enabled;
case 160:
            var8 = _closure1_slot73;
            var7 = var8.setGoLiveSource;
            var5 = {};
            var3 = {};
            var18 = var9.desktopSource;
            var18 = var18.id;
            var3['id'] = var18;
            var18 = var9.desktopSource;
            var18 = var18.soundshareId;
            var3['soundshareId'] = var18;
            var3['useVideoHook'] = var17;
            var3['useHookFramePacer'] = var16;
            var3['useGraphicsCapture'] = var14;
            var3['useGraphicsCaptureApiLevel'] = var13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var15 = var14[var15];
            var16 = var13.bind(var1)(var15);
            var15 = var16.isWindows;
            var15 = var15.bind(var16)();
            var3['useCaptureDeviceForEncode'] = var15;
            var16 = _closure1_slot70;
            var15 = var16.getExperimentalSoundshare;
            var15 = var15.bind(var16)();
            var3['useLoopback'] = var15;
            var15 = true;
            var3['useQuartzCapturer'] = var15;
            var15 = _closure1_slot161;
            var15 = var15.bind(var1)();
            var3['allowScreenCaptureKit'] = var15;
            var15 = 500;
            var3['videoHookStaleFrameTimeoutMs'] = var15;
            var15 = _closure1_slot61;
            var3['graphicsCaptureStaleFrameTimeoutMs'] = var15;
            var3['hdrCaptureMode'] = var12;
            var12 = 44;
            var12 = var14[var12];
            var14 = var13.bind(var1)(var12);
            var13 = var14.getGlobalFramePoolLockExperimentConfig;
            var12 = {};
            var15 = 'updateVideo';
            var12['location'] = var15;
            var12 = var13.bind(var14)(var12);
            var12 = var12.enabled;
            var3['enableGlobalFramePoolLock'] = var12;
            var3['useGraphicsCaptureDirtyRegions'] = var11;
            var3['videoHookAllowDx12'] = var10;
            var5['desktopDescription'] = var3;
            var5['quality'] = var6;
            var3 = _closure1_slot82;
            var3 = var7.bind(var8)(var5, var3);
case 140:
            var3 = var9.cameraSource;
            if(!(var4 != var3)) { _fun0013_ip = 138; continue _fun0013 }
case 162:
            var5 = _closure1_slot73;
            var4 = var5.setGoLiveSource;
            var3 = {};
            var7 = {};
            var8 = var9.cameraSource;
            var8 = var8.videoDeviceGuid;
            var7['videoDeviceGuid'] = var8;
            var8 = var9.cameraSource;
            var11 = var8.sound;
            var8 = '';
            var10 = false;
            if(!(var10 !== var11)) { _fun0013_ip = 163; continue _fun0013 }
case 164:
            var9 = var9.cameraSource;
            var8 = var9.audioDeviceGuid;
case 163:
            var7['audioDeviceGuid'] = var8;
            var3['cameraDescription'] = var7;
            var3['quality'] = var6;
            var2 = _closure1_slot82;
            var2 = var4.bind(var5)(var3, var2);
case 138:
            return var1;
        }
    };
    var _closure1_slot152 = var1;
    var1 = function noiseCancellerErrorToAVUnderlyingError(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot51;
            var2 = var2.KRISP_CPU_OVERUSE;
            if(!(var2 !== var3)) { _fun0014_ip = 165; continue _fun0014 }
case 35:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_FAILED;
            if(!(var2 !== var3)) { _fun0014_ip = 166; continue _fun0014 }
case 167:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_VAD_CPU_OVERUSE;
            if(!(var2 !== var3)) { _fun0014_ip = 168; continue _fun0014 }
case 169:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR;
            if(!(var2 !== var3)) { _fun0014_ip = 170; continue _fun0014 }
case 4:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_NATIVE;
            if(!(var2 !== var3)) { _fun0014_ip = 129; continue _fun0014 }
case 171:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED;
            if(!(var2 !== var3)) { _fun0014_ip = 172; continue _fun0014 }
case 173:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED;
            if(!(var2 !== var3)) { _fun0014_ip = 174; continue _fun0014 }
case 175:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_UNSIGNED;
            if(!(var2 !== var3)) { _fun0014_ip = 176; continue _fun0014 }
case 177:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_GLOBAL_INIT;
            if(!(var2 !== var3)) { _fun0014_ip = 178; continue _fun0014 }
case 179:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_WEIGHT_8K;
            if(!(var2 !== var3)) { _fun0014_ip = 30; continue _fun0014 }
case 180:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_WEIGHT_16K;
            if(!(var2 !== var3)) { _fun0014_ip = 181; continue _fun0014 }
case 77:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_WEIGHT_32K;
            if(!(var2 !== var3)) { _fun0014_ip = 182; continue _fun0014 }
case 80:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_INIT_ERROR_WEIGHT_VAD;
            if(!(var2 !== var3)) { _fun0014_ip = 183; continue _fun0014 }
case 184:
            var2 = undefined;
            return var2;
case 183:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorWeightVad;
            return var2;
case 182:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorWeight32k;
            return var2;
case 181:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorWeight16k;
            return var2;
case 30:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorWeight8k;
            return var2;
case 178:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorGlobalInit;
            return var2;
case 176:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorUnsigned;
            return var2;
case 174:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorAvx2NotSupported;
            return var2;
case 172:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorSse4NotSupported;
            return var2;
case 129:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitErrorNative;
            return var2;
case 170:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispInitError;
            return var2;
case 168:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispVadCpuOveruse;
            return var2;
case 166:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AVUnderlyingError;
            var2 = var2.KrispFailed;
            return var2;
case 165:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 45;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AVUnderlyingError;
            var1 = var1.KrispCpuOveruse;
            return var1;
        }
    };
    var _closure1_slot153 = var1;
    var1 = function handleVoiceProcessingError(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot58;
            var2 = var4.warn;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Voice processing error: ';
            var1 = var5.bind(var1)(var6);
            var1 = var2.bind(var4)(var1);
            var9 = _closure1_slot0;
            var5 = _closure1_slot3;
            var8 = 45;
            var2 = var5[var8];
            var1 = undefined;
            var7 = var9.bind(var1)(var2);
            var4 = var7.reportAVError;
            var2 = {};
            var8 = var5[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.AVError;
            var8 = var8.NOISE_CANCELLER_ERROR;
            var2['type'] = var8;
            var8 = _closure1_slot153;
            var8 = var8.bind(var1)(var6);
            var2['underlyingError'] = var8;
            var2 = var4.bind(var7)(var2);
            var4 = _closure1_slot1;
            var2 = 46;
            var2 = var5[var2];
            var7 = var4.bind(var1)(var2);
            var5 = var7.track;
            var2 = _closure1_slot23;
            var4 = var2.VOICE_PROCESSING;
            var2 = {};
            var2['noise_canceller_error'] = var6;
            var2 = var5.bind(var7)(var4, var2);
            var4 = _closure1_slot139;
            var2 = var4.has;
            var2 = var2.bind(var4)(var6);
            if(var2) { _fun0015_ip = 185; continue _fun0015 }
case 20:
            var2 = _closure1_slot51;
            var2 = var2.KRISP_VAD_CPU_OVERUSE;
            if(!(var6 !== var2)) { _fun0015_ip = 99; continue _fun0015 }
case 110:
            var2 = true;
            _closure1_slot117 = var2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 47;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var7 = 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR';
            var2['type'] = var7;
            var2['code'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0015_ip = 186; continue _fun0015;
case 99:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 47;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var7 = 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR';
            var2['type'] = var7;
            var2['code'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0015_ip = 186; continue _fun0015;
case 185:
            var2 = true;
            _closure1_slot110 = var2;
case 186:
            return var1;
        }
    };
    var _closure1_slot154 = var1;
    var1 = function getAutomaticGainControlConfig(arg1) {
        var5 = arg1;
        var1 = {};
        var1['enabled'] = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 34;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.getAGC2ExperimentConfig;
        var2 = {};
        var6 = 'getAutomaticGainControlConfig';
        var2['location'] = var6;
        var5 = !var5;
        var2['disable'] = var5;
        var2 = var3.bind(var4)(var2);
        var7 = var2.noiseCancellationConfig;
        var8 = var1;
        var2 = copyDataProperties(var8, var7);
        return var1;
    };
    var _closure1_slot155 = var1;
    var1 = function setAutomaticGainControl(arg1, arg2) {
        var4 = arg1;
        var3 = var4.setAutomaticGainControl;
        var5 = _closure1_slot155;
        var1 = undefined;
        var2 = arg2;
        var2 = var5.bind(var1)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot156 = var1;
    var1 = function setNoiseCancellation(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 48;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var7 = _closure1_slot70;
            var5 = var7.getSystemMicrophoneMode;
            var5 = var5.bind(var7)();
            var6 = var6.bind(var1)(var3, var5);
            if(!(var6 !== var3)) { _fun0016_ip = 187; continue _fun0016 }
case 8:
            var7 = _closure1_slot58;
            var5 = var7.info;
            var3 = 'Falling back to system noise suppression.';
            var3 = var5.bind(var7)(var3);
case 187:
            var3 = var4.setNoiseCancellation;
            var3 = var3.bind(var4)(var6);
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 34;
            var2 = var5[var2];
            var5 = var3.bind(var1)(var2);
            var3 = var5.getAGC2ExperimentConfig;
            var2 = {};
            var7 = 'setNoiseCancellation';
            var2['location'] = var7;
            var6 = !var6;
            var2['disable'] = var6;
            var2 = var3.bind(var5)(var2);
            var3 = var2.noiseCancellationDuringProcessing;
            var2 = var4.setNoiseCancellationDuringProcessing;
            var2 = var2.bind(var4)(var3);
            return var1;
        }
    };
    var _closure1_slot157 = var1;
    var1 = function updateConnectionVoiceProcessing(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot148;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var8 = var2.inputDeviceId;
            var6 = var4.setEchoCancellation;
            var7 = _closure1_slot18;
            var5 = var7.hasEchoCancellation;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0017_ip = 188; continue _fun0017 }
case 6:
            var5 = var2.echoCancellation;
case 188:
            var5 = var6.bind(var4)(var5);
            var6 = var4.setNoiseSuppression;
            var7 = _closure1_slot18;
            var5 = var7.hasNoiseSuppression;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0017_ip = 189; continue _fun0017 }
case 61:
            var5 = var2.noiseSuppression;
case 189:
            var5 = var6.bind(var4)(var5);
            var6 = _closure1_slot156;
            var7 = _closure1_slot18;
            var5 = var7.hasAutomaticGainControl;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0017_ip = 190; continue _fun0017 }
case 191:
            var5 = var2.automaticGainControl;
case 190:
            var5 = var6.bind(var1)(var4, var5);
            var6 = _closure1_slot157;
            var5 = var2.noiseCancellation;
            var5 = var6.bind(var1)(var4, var5);
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 28;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isWeb;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0017_ip = 192; continue _fun0017 }
case 50:
            var2 = var2.noiseCancellation;
            var3 = -100;
            if(!var2) { _fun0017_ip = 112; continue _fun0017 }
case 77:
            var3 = -150;
case 112:
            var2 = var4.setSilenceThreshold;
            var2 = var2.bind(var4)(var3);
case 192:
            return var1;
        }
    };
    var _closure1_slot158 = var1;
    var1 = function setupMediaEngine() {
        var6 = _closure1_slot89;
        var5 = var6.start;
        var3 = _closure1_slot64;
        var1 = function() {
            var4 = _closure1_slot58;
            var3 = var4.error;
            var1 = 'Device enumeration timed out';
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 46;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot23;
            var3 = var2.DEVICE_ENUMERATION_TIMEOUT;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1 = var5.bind(var6)(var3, var1);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var3 = 29;
        var5 = var7[var3];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.Connection;
        var5 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var9 = arg1;
                var _closure3_slot0 = var9;
                var3 = _closure1_slot180;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot149;
                var3 = var3.bind(var1)(var9);
                var3 = _closure1_slot151;
                var3 = var3.bind(var1)(var9);
                var3 = _closure1_slot158;
                var3 = var3.bind(var1)(var9);
                var4 = var9.context;
                var3 = _closure1_slot50;
                var3 = var3.STREAM;
                if(!(var4 === var3)) { _fun0018_ip = 13; continue _fun0018 }
case 193:
                var4 = var9.setAv1CodecBitrateFunc;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 49;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.AV1StreamBitrateReductionExperiment;
                    var2 = var3.getConfig;
                    var1 = {};
                    var4 = 'MediaEngineStore';
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.bitrate;
                    return var1;
                };
                var3 = var4.bind(var9)(var3);
case 13:
                var3 = _closure1_slot148;
                var4 = var3.bind(var1)();
                var8 = var9.setAttenuation;
                var6 = var4.attenuation;
                var5 = var4.attenuateWhileSpeakingSelf;
                var3 = var4.attenuateWhileSpeakingOthers;
                var3 = var8.bind(var9)(var6, var5, var3);
                var5 = var9.setQoS;
                var3 = var4.qos;
                var3 = var5.bind(var9)(var3);
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var6 = 28;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                if(var3) { _fun0018_ip = 194; continue _fun0018 }
case 50:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isMac;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0018_ip = 195; continue _fun0018 }
case 26:
                var8 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var5 = var3.H265_HARDWARE_DECODE_AVAILABLE;
                var3 = true;
                var3 = var8.bind(var9)(var5, var3);
                _fun0018_ip = 195; continue _fun0018;
case 194:
                var8 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var5 = var3.H265_HARDWARE_ONLY;
                var3 = true;
                var3 = var8.bind(var9)(var5, var3);
                var3 = _closure1_slot146;
                var8 = var3.bind(var1)();
                var5 = var8.then;
                var3 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.setExperimentFlag;
                    var1 = _closure1_slot48;
                    var2 = var1.H265_HARDWARE_DECODE_AVAILABLE;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var5.bind(var8)(var3);
case 195:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isLinux;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0018_ip = 196; continue _fun0018 }
case 197:
                var3 = var4.openH264Enabled;
case 196:
                if(!var3) { _fun0018_ip = 198; continue _fun0018 }
case 199:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var4 = var3.USE_LIBOPENH264_DECODER;
                var3 = true;
                var3 = var5.bind(var9)(var4, var3);
case 198:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 50;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.getLowLatencyRateControlExperimentConfig;
                var3 = {};
                var8 = 'setupMediaEngine';
                var3['location'] = var8;
                var3 = var4.bind(var5)(var3);
                var3 = var3.enabled;
                if(!var3) { _fun0018_ip = 200; continue _fun0018 }
case 201:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var4 = var3.LOW_LATENCY_RATE_CONTROL;
                var3 = true;
                var3 = var5.bind(var9)(var4, var3);
case 200:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.RESET_DECODER_ON_ERRORS;
                var4 = true;
                var3 = var5.bind(var9)(var3, var4);
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                var3 = var5.bind(var9)(var3, var4);
                var5 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 51;
                var3 = var8[var3];
                var8 = var5.bind(var1)(var3);
                var5 = var8.getConfig;
                var3 = {};
                var10 = 'MediaEngineStore';
                var3['location'] = var10;
                var3 = var5.bind(var8)(var3);
                var3 = var3.swallowVolumeOnlySpeakingEvents;
                if(!var3) { _fun0018_ip = 202; continue _fun0018 }
case 203:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS;
                var3 = var5.bind(var9)(var3, var4);
case 202:
                var5 = var9.setMinimumJitterBufferLevel;
                var3 = 80;
                var3 = var5.bind(var9)(var3);
                var5 = var9.context;
                var3 = _closure1_slot50;
                var3 = var3.STREAM;
                if(!(var5 === var3)) { _fun0018_ip = 204; continue _fun0018 }
case 205:
                var5 = _closure1_slot173;
                var3 = _closure1_slot87;
                var5 = var5.bind(var1)(var3);
                var3 = var9.setSoundshareDiscardRearChannels;
                var3 = var3.bind(var9)(var5);
case 204:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                if(var3) { _fun0018_ip = 206; continue _fun0018 }
case 207:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isMac;
                var3 = var3.bind(var5)();
                if(var3) { _fun0018_ip = 208; continue _fun0018 }
case 209:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isLinux;
                var3 = var3.bind(var5)();
                if(var3) { _fun0018_ip = 210; continue _fun0018 }
case 211:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if(var3) { _fun0018_ip = 212; continue _fun0018 }
case 213:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isAndroid;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0018_ip = 214; continue _fun0018 }
case 215:
                var3 = _closure1_slot85;
                if(!(var4 === var3)) { _fun0018_ip = 214; continue _fun0018 }
case 216:
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = 53;
                var3 = var8[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.getAV1DecodeExperimentAndroidConfig;
                var3 = var3.bind(var5)(var10);
                var3 = var3.enabled;
                if(!var3) { _fun0018_ip = 214; continue _fun0018 }
case 217:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                _fun0018_ip = 214; continue _fun0018;
case 212:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                _fun0018_ip = 214; continue _fun0018;
case 210:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                _fun0018_ip = 214; continue _fun0018;
case 208:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                var8 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var5 = var3.H265_DISABLE_ENCODE;
                var11 = global;
                var3 = var11.window;
                var15 = null;
                var13 = var15 == var3;
                var12 = undefined;
                if(var13) { _fun0018_ip = 218; continue _fun0018 }
case 219:
                var3 = var3.DiscordNative;
                var13 = var15 == var3;
                var12 = undefined;
                if(var13) { _fun0018_ip = 218; continue _fun0018 }
case 220:
                var3 = var3.os;
                var12 = var3.arch;
case 218:
                var3 = 'arm64';
                var3 = var3 === var12;
                if(!var3) { _fun0018_ip = 221; continue _fun0018 }
case 222:
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var12 = 52;
                var12 = var14[var12];
                var14 = var13.bind(var1)(var12);
                var13 = var14.satisfies;
                var11 = var11.window;
                var16 = var15 == var11;
                var12 = undefined;
                if(var16) { _fun0018_ip = 223; continue _fun0018 }
case 224:
                var11 = var11.DiscordNative;
                var15 = var15 == var11;
                var12 = undefined;
                if(var15) { _fun0018_ip = 223; continue _fun0018 }
case 225:
                var11 = var11.os;
                var12 = var11.release;
case 223:
                var11 = _closure1_slot43;
                var3 = var13.bind(var14)(var12, var11);
case 221:
                var3 = !var3;
                var3 = var8.bind(var9)(var5, var3);
                _fun0018_ip = 214; continue _fun0018;
case 206:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_ENCODE;
                var3 = var5.bind(var9)(var3, var4);
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_DECODE;
                var3 = var5.bind(var9)(var3, var4);
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                var3 = var5.bind(var9)(var3, var4);
case 214:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWeb;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0018_ip = 226; continue _fun0018 }
case 227:
                var5 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 54;
                var3 = var8[var3];
                var8 = var5.bind(var1)(var3);
                var5 = var8.getConfig;
                var3 = {};
                var3['location'] = var10;
                var3 = var5.bind(var8)(var3);
                var8 = var3.enabled;
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.BROWSER_HEVC;
                var3 = var5.bind(var9)(var3, var8);
case 226:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                var11 = undefined;
                if(!var3) { _fun0018_ip = 228; continue _fun0018 }
case 229:
                var5 = _closure1_slot129;
                var8 = null;
                var3 = var8 != var5;
                var11 = var5;
case 228:
                if(!var3) { _fun0018_ip = 230; continue _fun0018 }
case 231:
                var8 = var11.startsWith;
                var5 = 'AMD';
                var3 = var8.bind(var11)(var5);
case 230:
                if(!var3) { _fun0018_ip = 232; continue _fun0018 }
case 233:
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 55;
                var5 = var11[var5];
                var8 = var8.bind(var1)(var5);
                var5 = var8.getWmfGpuEncode;
                var5 = var5.bind(var8)(var10);
                var3 = var5.enabled;
case 232:
                if(!var3) { _fun0018_ip = 234; continue _fun0018 }
case 235:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.WMF_GPU_ENCODE;
                var3 = var5.bind(var9)(var3, var4);
case 234:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                var11 = undefined;
                if(!var3) { _fun0018_ip = 236; continue _fun0018 }
case 237:
                var5 = _closure1_slot129;
                var8 = null;
                var3 = var8 != var5;
                var11 = var5;
case 236:
                if(!var3) { _fun0018_ip = 238; continue _fun0018 }
case 239:
                var8 = var11.startsWith;
                var5 = 'Intel';
                var3 = var8.bind(var11)(var5);
case 238:
                if(!var3) { _fun0018_ip = 240; continue _fun0018 }
case 241:
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 56;
                var5 = var11[var5];
                var8 = var8.bind(var1)(var5);
                var5 = var8.getWmfGpuEncodeIntel;
                var5 = var5.bind(var8)(var10);
                var3 = var5.enabled;
case 240:
                if(!var3) { _fun0018_ip = 242; continue _fun0018 }
case 243:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.WMF_GPU_ENCODE;
                var3 = var5.bind(var9)(var3, var4);
case 242:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                var11 = undefined;
                if(!var3) { _fun0018_ip = 244; continue _fun0018 }
case 245:
                var5 = _closure1_slot129;
                var8 = null;
                var3 = var8 != var5;
                var11 = var5;
case 244:
                if(!var3) { _fun0018_ip = 246; continue _fun0018 }
case 247:
                var8 = var11.startsWith;
                var5 = 'Qualcomm';
                var3 = var8.bind(var11)(var5);
case 246:
                if(!var3) { _fun0018_ip = 248; continue _fun0018 }
case 249:
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 55;
                var5 = var11[var5];
                var8 = var8.bind(var1)(var5);
                var5 = var8.getWmfGpuEncode;
                var5 = var5.bind(var8)(var10);
                var3 = var5.enabled;
case 248:
                if(!var3) { _fun0018_ip = 250; continue _fun0018 }
case 251:
                var5 = var9.setExperimentFlag;
                var3 = _closure1_slot48;
                var3 = var3.WMF_GPU_ENCODE;
                var3 = var5.bind(var9)(var3, var4);
case 250:
                var11 = _closure1_slot73;
                var10 = var11.setHasFullbandPerformance;
                var5 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 57;
                var3 = var8[var3];
                var3 = var5.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var3 = var10.bind(var11)(var3);
                var10 = var9.setRemoteAudioHistory;
                var3 = 1000;
                var3 = var10.bind(var9)(var3);
                var3 = 58;
                var3 = var8[var3];
                var5 = var5.bind(var1)(var3);
                var3 = _closure1_slot70;
                var3 = var5.bind(var1)(var3);
                if(!var3) { _fun0018_ip = 252; continue _fun0018 }
case 253:
                var5 = var9.setClipsKeyFrameInterval;
                var3 = _closure1_slot55;
                var3 = var5.bind(var9)(var3);
case 252:
                var5 = _closure1_slot148;
                var3 = var9.context;
                var10 = var5.bind(var1)(var3);
                var5 = var9.setPostponeDecodeLevel;
                var3 = 100;
                var3 = var5.bind(var9)(var3);
                var3 = global;
                var11 = var3.Object;
                var8 = var11.keys;
                var5 = var10.localMutes;
                var12 = var8.bind(var11)(var5);
                var5 = var12.length;
                var8 = 0;
                var5 = var8 < var5;
                var11 = 0;
                if(!var5) { _fun0018_ip = 254; continue _fun0018 }
case 255:
                var14 = var12[var11];
                var13 = _closure1_slot16;
                var5 = var13.getId;
                var5 = var5.bind(var13)();
                if(!(var14 !== var5)) { _fun0018_ip = 256; continue _fun0018 }
case 257:
                var13 = var9.setLocalMute;
                var5 = var10.localMutes;
                var5 = var5[var14];
                var5 = var13.bind(var9)(var14, var5);
case 256:
                var11 = var11 + 1;
                var5 = var12.length;
                if(var11 < var5) { _fun0018_ip = 255; continue _fun0018 }
case 254:
                var12 = var3.Object;
                var11 = var12.keys;
                var5 = var10.localVolumes;
                var12 = var11.bind(var12)(var5);
                var5 = var12.length;
                var5 = var8 < var5;
                var11 = 0;
                if(!var5) { _fun0018_ip = 258; continue _fun0018 }
case 259:
                var14 = var12[var11];
                var13 = _closure1_slot16;
                var5 = var13.getId;
                var5 = var5.bind(var13)();
                if(!(var14 !== var5)) { _fun0018_ip = 260; continue _fun0018 }
case 261:
                var13 = var9.setLocalVolume;
                var5 = var10.localVolumes;
                var5 = var5[var14];
                var5 = var13.bind(var9)(var14, var5);
case 260:
                var11 = var11 + 1;
                var5 = var12.length;
                if(var11 < var5) { _fun0018_ip = 259; continue _fun0018 }
case 258:
                var12 = var3.Object;
                var11 = var12.keys;
                var5 = var10.localPans;
                var12 = var11.bind(var12)(var5);
                var5 = var12.length;
                var5 = var8 < var5;
                var11 = 0;
                if(!var5) { _fun0018_ip = 262; continue _fun0018 }
case 263:
                var15 = var12[var11];
                var5 = var10.localPans;
                var5 = var5[var15];
                var14 = var9.setLocalPan;
                var13 = var5.left;
                var5 = var5.right;
                var5 = var14.bind(var9)(var15, var13, var5);
                var11 = var11 + 1;
                var5 = var12.length;
                if(var11 < var5) { _fun0018_ip = 263; continue _fun0018 }
case 262:
                var11 = var3.Object;
                var5 = var11.keys;
                var3 = var10.disabledLocalVideos;
                var5 = var5.bind(var11)(var3);
                var3 = var5.length;
                var3 = var8 < var3;
                var8 = 0;
                if(!var3) { _fun0018_ip = 264; continue _fun0018 }
case 265:
                var12 = var5[var8];
                var11 = var9.setLocalVideoDisabled;
                var3 = var10.disabledLocalVideos;
                var3 = var3[var12];
                var3 = var11.bind(var9)(var12, var3);
                var8 = var8 + 1;
                var3 = var5.length;
                if(var8 < var3) { _fun0018_ip = 265; continue _fun0018 }
case 264:
                var10 = var9.on;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var8 = 29;
                var3 = var3[var8];
                var3 = var5.bind(var1)(var3);
                var3 = var3.BaseConnectionEvent;
                var5 = var3.Speaking;
                var3 = function(arg1, arg2, arg3, arg4) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 47;
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
                    var5 = arg4;
                    var2['voiceDb'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3 = var10.bind(var9)(var5, var3);
                var5 = var9.context;
                var3 = _closure1_slot50;
                var3 = var3.DEFAULT;
                if(!(var5 === var3)) { _fun0018_ip = 266; continue _fun0018 }
case 267:
                var3 = false;
                _closure1_slot98 = var3;
                var10 = var9.on;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var8];
                var3 = var5.bind(var1)(var3);
                var3 = var3.BaseConnectionEvent;
                var5 = var3.SpeakingWhileMuted;
                var3 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var2 = _closure1_slot98;
                        var3 = true;
                        _closure1_slot98 = var3;
                        if(var2) { _fun0019_ip = 7; continue _fun0019 }
case 268:
                        var3 = _closure1_slot70;
                        var2 = var3.emitChange;
                        var2 = var2.bind(var3)();
case 7:
                        var4 = _closure1_slot99;
                        var3 = var4.start;
                        var2 = _closure1_slot63;
                        var1 = function() {
                            var2 = false;
                            _closure1_slot98 = var2;
                            var2 = _closure1_slot70;
                            var1 = var2.emitChange;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var10.bind(var9)(var5, var3);
case 266:
                var12 = var9.on;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var10 = var3[var8];
                var10 = var5.bind(var1)(var10);
                var10 = var10.BaseConnectionEvent;
                var11 = var10.DesktopSourceEnd;
                var10 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 47;
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
                    var5 = arg1;
                    var2['endReason'] = var5;
                    var5 = arg2;
                    var2['errorCode'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var10 = var12.bind(var9)(var11, var10);
                var12 = var9.on;
                var10 = var3[var8];
                var10 = var5.bind(var1)(var10);
                var10 = var10.BaseConnectionEvent;
                var11 = var10.InteractionRequired;
                var10 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 47;
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
                var10 = var12.bind(var9)(var11, var10);
                var12 = var9.on;
                var10 = var3[var8];
                var10 = var5.bind(var1)(var10);
                var10 = var10.BaseConnectionEvent;
                var11 = var10.VideoHookInitialize;
                var10 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var3 = _closure1_slot75;
                        var6 = null;
                        var4 = var6 == var3;
                        var1 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0020_ip = 269; continue _fun0020 }
case 33:
                        var2 = var3.desktopSource;
case 269:
                        if(!(var6 != var2)) { _fun0020_ip = 270; continue _fun0020 }
case 37:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var2 = 46;
                        var2 = var10[var2];
                        var5 = var9.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot23;
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
                        var7 = 59;
                        var7 = var10[var7];
                        var7 = var9.bind(var1)(var7);
                        var8 = _closure1_slot75;
                        var9 = var6 == var8;
                        var6 = undefined;
                        if(var9) { _fun0020_ip = 271; continue _fun0020 }
case 75:
                        var6 = var8.desktopSource;
case 271:
                        var11 = var7.bind(var1)(var6);
                        var12 = var2;
                        var6 = copyDataProperties(var12, var11);
                        var2 = var4.bind(var5)(var3, var2);
case 270:
                        return var1;
                    }
                };
                var10 = var12.bind(var9)(var11, var10);
                var11 = var9.on;
                var10 = var3[var8];
                var10 = var5.bind(var1)(var10);
                var10 = var10.BaseConnectionEvent;
                var10 = var10.NoiseCancellationError;
                var12 = _closure1_slot154;
                var10 = var11.bind(var9)(var10, var12);
                var11 = var9.on;
                var10 = var3[var8];
                var10 = var5.bind(var1)(var10);
                var10 = var10.BaseConnectionEvent;
                var10 = var10.VoiceActivityDetectorError;
                var10 = var11.bind(var9)(var10, var12);
                var12 = var9.on;
                var10 = var3[var8];
                var10 = var5.bind(var1)(var10);
                var10 = var10.BaseConnectionEvent;
                var11 = var10.SdpError;
                var10 = function(arg1, arg2, arg3, arg4) {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 46;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot23;
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
                var10 = var12.bind(var9)(var11, var10);
                var10 = var9.on;
                var8 = var3[var8];
                var8 = var5.bind(var1)(var8);
                var8 = var8.BaseConnectionEvent;
                var8 = var8.VideoState;
                var7 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 47;
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
                var7 = var10.bind(var9)(var8, var7);
                var8 = var9.setBitRate;
                var7 = _closure1_slot17;
                var7 = var7.bitrate;
                var7 = var8.bind(var9)(var7);
                var8 = var9.applyVideoQualityMode;
                var7 = _closure1_slot22;
                var7 = var7.mode;
                var7 = var8.bind(var9)(var7);
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0018_ip = 272; continue _fun0018 }
case 273:
                var7 = _closure1_slot73;
                var6 = var7.supports;
                var5 = _closure1_slot49;
                var5 = var5.ASYNC_VIDEO_INPUT_DEVICE_INIT;
                var3 = var6.bind(var7)(var5);
case 272:
                if(!var3) { _fun0018_ip = 274; continue _fun0018 }
case 275:
                var3 = _closure1_slot73;
                var2 = var3.setAsyncVideoInputDeviceInit;
                var2 = var2.bind(var3)(var4);
case 274:
                return var1;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.DeviceChange;
        var5 = function(arg1, arg2, arg3) {
            var3 = _closure1_slot89;
            var2 = var3.stop;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.VolumeChange;
        var5 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.DesktopSourceEnd;
        var5 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'settings': null};
            var5 = arg1;
            var2['endReason'] = var5;
            var5 = arg2;
            var2['errorCode'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.AudioPermission;
        var5 = function(arg1) {
            var2 = true;
            _closure1_slot123 = var2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.VideoPermission;
        var5 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.WatchdogTimeout;
        var11 = _closure1_slot10;
        var5 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 276; continue _fun0021 }
case 41:
                    var3 = undefined;
                    var4 = undefined;
                    var2 = undefined;
                    var7 = global;
                    var6 = var7.window;
                    var6 = var6.GLOBAL_ENV;
                    var8 = var6.RELEASE_CHANNEL;
                    var6 = 'canary';
                    if(!(var6 === var8)) { _fun0021_ip = 277; continue _fun0021 }
case 278: // try_start_0
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var6 = 60;
                    var6 = var9[var6];
                    var9 = var8.bind(var3)(var6);
                    var8 = var9.submitLiveCrashReport;
                    var6 = {};
                    var10 = {};
                    var11 = 'Voice Watchdog Timeout';
                    var10['message'] = var11;
                    var6['message'] = var10;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=100);
case 94:
                    return var6;
case 279:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0021_ip = 173; continue _fun0021 }
case 280: // try_end0
                    _fun0021_ip = 277; continue _fun0021;
case 173:
                    return var6;
case 106: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = var6;
                    var6 = var6.status;
                    var8 = 'number';
                    var6 = typeof var6;
                    if(!(var8 === var6)) { _fun0021_ip = 277; continue _fun0021 }
case 281:
                    var4 = var5.status;
case 277:
                    var10 = _closure1_slot58;
                    var8 = var10.warn;
                    var6 = var4;
                    var9 = null;
                    var6 = var9 != var6;
                    var12 = 200;
                    if(!var6) { _fun0021_ip = 282; continue _fun0021 }
case 283:
                    var12 = var4;
case 282:
                    var6 = var7.HermesInternal;
                    var11 = var6.concat;
                    var6 = 'Watchdog timeout, report submission status: ';
                    var6 = var11.bind(var6)(var12);
                    var6 = var8.bind(var10)(var6);
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = 61;
                    var8 = var11[var8];
                    var11 = var10.bind(var3)(var8);
                    var10 = var11.getConfig;
                    var8 = {};
                    var12 = 'watchdog_timeout';
                    var8['location'] = var12;
                    var8 = var10.bind(var11)(var8);
                    var8 = var8.enabled;
                    var6 = var8;
                    if(!var8) { _fun0021_ip = 111; continue _fun0021 }
case 284:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = 62;
                    var8 = var11[var8];
                    var8 = var10.bind(var3)(var8);
                    var8 = var8.processUtils;
                    var8 = var8.setCrashReason;
                    var6 = var9 != var8;
case 111:
                    var2 = var6;
case 285: // try_start_1
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var6 = 46;
                    var6 = var9[var6];
                    var10 = var8.bind(var3)(var6);
                    var9 = var10.track;
                    var6 = _closure1_slot23;
                    var8 = var6.VOICE_WATCHDOG_TIMEOUT;
                    var6 = {};
                    var6['minidump_submission_error'] = var4;
                    var4 = var2;
                    var6['will_restart'] = var4;
                    var4 = {};
                    var11 = true;
                    var4['flush'] = var11;
                    var4 = var9.bind(var10)(var8, var6, var4);
                    SaveGenerator(address=361);
case 286:
                    return var4;
case 287:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0021_ip = 288; continue _fun0021 }
case 289: // try_end1
                    _fun0021_ip = 290; continue _fun0021;
case 288:
                    return var4;
case 291: // catch_target1
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot58;
                    var6 = var8.error;
                    var4 = 'Failed to flush voice watchdog timeout analytics event';
                    var4 = var6.bind(var8)(var4, var9);
case 290:
                    if(!var2) { _fun0021_ip = 205; continue _fun0021 }
case 292:
                    var6 = _closure1_slot58;
                    var4 = var6.info;
                    var2 = 'Relaunching app due to voice watchdog timeout';
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var6 = 62;
                    var2 = var2[var6];
                    var2 = var4.bind(var3)(var2);
                    var8 = var2.processUtils;
                    var4 = var8.setCrashReason;
                    var2 = 'voice-watchdog-timeout';
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=469);
case 293:
                    return var2;
case 294:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 295; continue _fun0021 }
case 296:
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var8 = 63;
                    var8 = var4[var8];
                    var8 = var9.bind(var3)(var8);
                    var10 = var8.Storage;
                    var9 = var10.set;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var8 = var7.bind(var8)();
                    var7 = var8.toString;
                    var8 = var7.bind(var8)();
                    var7 = 'discord_watchdog_restart_timestamp';
                    var7 = var9.bind(var10)(var7, var8);
                    var5 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var3)(var4);
                    var5 = var4.app;
                    var4 = var5.relaunch;
                    var4 = var4.bind(var5)();
case 205:
                    return var3;
case 295:
                    return var2;
case 276:
                    return var1;
                }
            };
            return var1;
        };
        var5 = var11.bind(var1)(var5);
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.VideoInputInitialized;
        var5 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var7 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 46;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot23;
                var3 = var2.VIDEO_INPUT_INITIALIZED;
                var2 = {};
                var8 = var7.description;
                var8 = var8.name;
                var2['device_name'] = var8;
                var9 = var7.initializationTimerExpired;
                var8 = null;
                if(var9) { _fun0022_ip = 297; continue _fun0022 }
case 298:
                var9 = global;
                var11 = var9.Math;
                var10 = var11.round;
                var12 = var7.timeToFirstFrame;
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var9 = 27;
                var9 = var14[var9];
                var9 = var13.bind(var1)(var9);
                var9 = var9.Millis;
                var9 = var9.SECOND;
                var9 = var12 * var9;
                var8 = var10.bind(var11)(var9);
case 297:
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.AudioInputInitialized;
        var5 = function(arg1) {
            var7 = arg1;
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var1 = 46;
            var2 = var12[var1];
            var1 = undefined;
            var5 = var11.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot23;
            var3 = var2.AUDIO_INPUT_INITIALIZED;
            var2 = {};
            var8 = var7.description;
            var8 = var8.name;
            var2['device_name'] = var8;
            var8 = global;
            var9 = var8.Math;
            var8 = var9.round;
            var10 = var7.timeToInitialized;
            var7 = 27;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.ClipsRecordingRestartNeeded;
        var5 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.ClipsInitFailure;
        var5 = function(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 47;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.ClipsRecordingEnded;
        var5 = function(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var6 = arg2;
                var4 = _closure1_slot76;
                var2 = null;
                var7 = var2 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0023_ip = 299; continue _fun0023 }
case 35:
                var4 = var4.desktopSource;
                var7 = var2 == var4;
                var5 = undefined;
                if(var7) { _fun0023_ip = 299; continue _fun0023 }
case 88:
                var5 = var4.id;
case 299:
                var4 = arg1;
                if(!(var5 === var4)) { _fun0023_ip = 300; continue _fun0023 }
case 60:
                var4 = var2 != var6;
                if(!var4) { _fun0023_ip = 301; continue _fun0023 }
case 169:
                var7 = _closure1_slot75;
                var8 = var2 == var7;
                var5 = undefined;
                if(var8) { _fun0023_ip = 171; continue _fun0023 }
case 3:
                var7 = var7.desktopSource;
                var8 = var2 == var7;
                var5 = undefined;
                if(var8) { _fun0023_ip = 171; continue _fun0023 }
case 63:
                var5 = var7.soundshareId;
case 171:
                var4 = var5 !== var6;
case 301:
                if(!var4) { _fun0023_ip = 302; continue _fun0023 }
case 94:
                var5 = _closure1_slot2;
                var7 = _closure1_slot3;
                var4 = 39;
                var4 = var7[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.cancelAttachToProcess;
                var4 = var4.bind(var5)(var6);
case 302:
                var _closure1_slot76 = var2;
case 300:
                return var1;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.NativeScreenSharePickerUpdate;
        var5 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.NativeScreenSharePickerCancel;
        var5 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.NativeScreenSharePickerError;
        var5 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.AudioDeviceModuleError;
        var5 = function(arg1, arg2, arg3) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 46;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot23;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.VideoCodecError;
        var5 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var6 = arg1;
                var2 = var6.mode;
                var1 = 'encode';
                if(!(var1 !== var2)) { _fun0024_ip = 8; continue _fun0024 }
case 268:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVError;
                var8 = var1.VIDEO_DECODE_ERROR;
                _fun0024_ip = 54; continue _fun0024;
case 8:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVError;
                var8 = var1.VIDEO_ENCODE_ERROR;
case 54:
                var7 = {};
                var1 = var6.codecStandard;
                var7['videoCodec'] = var1;
                var1 = var6.message;
                var7['errorMessage'] = var1;
                var5 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 45;
                var3 = var9[var2];
                var1 = undefined;
                var4 = var5.bind(var1)(var3);
                var3 = var4.reportAVError;
                var2 = var9[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.AVError;
                var2 = var2.VIDEO_ENCODE_ERROR;
                if(!(var8 !== var2)) { _fun0024_ip = 303; continue _fun0024 }
case 304:
                var2 = {};
                var2['type'] = var8;
                var11 = var2;
                var10 = var7;
                var5 = copyDataProperties(var11, var10);
                var9 = var6.implName;
                var5 = 'videoDecoder';
                var2[4] = var9;
                _fun0024_ip = 305; continue _fun0024;
case 303:
                var5 = {};
                var5['type'] = var8;
                var11 = var5;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var7 = var6.implName;
                var6 = 'videoEncoder';
                var5[5] = var7;
                var2 = var5;
case 305:
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.ConnectionStats;
        var5 = function(arg1) {
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 47;
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
                var3 = _closure1_slot69;
                var3 = parseFloat(var3);
                var4 = var3 + 1;
                _closure1_slot69 = var4;
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
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.VoiceProcessingError;
        var5 = _closure1_slot154;
        var5 = var9.bind(var10)(var8, var5);
        var10 = _closure1_slot73;
        var9 = var10.on;
        var5 = var7[var3];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaEngineEvent;
        var8 = var5.VoiceQueueMetrics;
        var5 = function(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = _closure1_slot189;
                var1 = undefined;
                var3 = arg1;
                var5 = var4.bind(var1)(var3);
                var3 = null;
                if(!(var3 !== var5)) { _fun0025_ip = 306; continue _fun0025 }
case 35:
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 46;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.track;
                var2 = _closure1_slot23;
                var2 = var2.VOICE_QUEUE_METRICS;
                var2 = var3.bind(var4)(var2, var5);
case 306:
                return var1;
            }
        };
        var5 = var9.bind(var10)(var8, var5);
        var9 = _closure1_slot73;
        var8 = var9.setOnVideoContainerResized;
        var5 = function(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var1 = arg3;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 47;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 47;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'VIDEO_SIZE_UPDATE';
                var1['type'] = var4;
                var4 = _closure3_slot0;
                var1['streamId'] = var4;
                var4 = {};
                var6 = _closure3_slot1;
                var4['width'] = var6;
                var5 = _closure3_slot2;
                var4['height'] = var5;
                var1['dimensions'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var8.bind(var9)(var5);
        var5 = function setGamescopeVaapiEnabled() {
            var1 = undefined;
            var4 = _closure1_slot181;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5 = var5.bind(var1)();
        var8 = _closure1_slot77;
        var5 = var8.reset;
        var5 = var5.bind(var8)();
        var5 = _closure1_slot14;
        var9 = var5.bind(var1)();
        var8 = var9.then;
        var5 = function(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0026_ip = 307; continue _fun0026 }
case 56:
                var3 = var1.gpu_brand;
                _closure1_slot129 = var3;
                var1 = var1.has_intel_hybrid_igpu;
                _closure1_slot130 = var1;
case 307:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var8.bind(var9)(var5);
        var5 = _closure1_slot73;
        var4 = var5.on;
        var3 = var7[var3];
        var3 = var6.bind(var1)(var3);
        var3 = var3.MediaEngineEvent;
        var3 = var3.SystemMicrophoneModeChange;
        var2 = function(arg1) {
            var2 = arg1;
            _closure1_slot127 = var2;
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = _closure1_slot158;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot70;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot159 = var1;
    var1 = function supportsWindowsGraphicsCapture() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 28;
            var1 = var4[var1];
            var8 = undefined;
            var3 = var3.bind(var8)(var1);
            var1 = var3.isWindows;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0027_ip = 308; continue _fun0027 }
case 88:
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var4 = 52;
            var4 = var3[var4];
            var5 = var6.bind(var8)(var4);
            var4 = var5.satisfies;
            var9 = 62;
            var3 = var3[var9];
            var6 = var6.bind(var8)(var3);
            var3 = null;
            var6 = var3 == var6;
            var3 = undefined;
            if(var6) { _fun0027_ip = 97; continue _fun0027 }
case 189:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.os;
            var3 = var6.release;
case 97:
            var2 = _closure1_slot34;
            var1 = var4.bind(var5)(var3, var2);
case 308:
            return var1;
        }
    };
    var _closure1_slot160 = var1;
    var1 = function supportsScreenCaptureKit() {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 28;
            var1 = var4[var1];
            var8 = undefined;
            var3 = var3.bind(var8)(var1);
            var1 = var3.isMac;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0028_ip = 309; continue _fun0028 }
case 88:
            var5 = _closure1_slot73;
            var4 = var5.supports;
            var3 = _closure1_slot49;
            var3 = var3.SCREEN_CAPTURE_KIT;
            var1 = var4.bind(var5)(var3);
case 309:
            if(!var1) { _fun0028_ip = 310; continue _fun0028 }
case 43:
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var4 = 52;
            var4 = var3[var4];
            var5 = var6.bind(var8)(var4);
            var4 = var5.satisfies;
            var9 = 62;
            var3 = var3[var9];
            var6 = var6.bind(var8)(var3);
            var3 = null;
            var6 = var3 == var6;
            var3 = undefined;
            if(var6) { _fun0028_ip = 75; continue _fun0028 }
case 311:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.os;
            var3 = var6.release;
case 75:
            var2 = _closure1_slot29;
            var1 = var4.bind(var5)(var3, var2);
case 310:
            return var1;
        }
    };
    var _closure1_slot161 = var1;
    var1 = function supportsAutomaticAudioSubsystem() {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 28;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isWindows;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0029_ip = 309; continue _fun0029 }
case 88:
            var5 = _closure1_slot73;
            var4 = var5.supports;
            var3 = _closure1_slot49;
            var3 = var3.AUTOMATIC_AUDIO_SUBSYSTEM;
            var1 = var4.bind(var5)(var3);
case 309:
            if(!var1) { _fun0029_ip = 171; continue _fun0029 }
case 43:
            var4 = _closure1_slot73;
            var3 = var4.supports;
            var2 = _closure1_slot49;
            var2 = var2.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
            var1 = var3.bind(var4)(var2);
case 171:
            return var1;
        }
    };
    var _closure1_slot162 = var1;
    var1 = function isReadyToMigrateToSingleAdmOffering() {
        var3 = _closure1_slot73;
        var2 = var3.supports;
        var1 = _closure1_slot49;
        var1 = var1.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot163 = var1;
    var1 = function mergeSettings(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var4 = arguments[1];
            var3 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0030_ip = 312; continue _fun0030 }
case 101:
            var1 = _closure1_slot50;
            var4 = var1.DEFAULT;
case 312:
            if(!(var3 === var5)) { _fun0030_ip = 313; continue _fun0030 }
case 314:
            var3 = true;
case 313:
            var1 = _closure1_slot147;
            var1 = var1.bind(var5)(var4);
            var4 = global;
            var7 = var4.Object;
            var6 = var7.assign;
            var4 = arg1;
            var4 = var6.bind(var7)(var1, var4);
            if(!var3) { _fun0030_ip = 315; continue _fun0030 }
case 193:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 63;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.Storage;
            var4 = var5.set;
            var3 = _closure1_slot59;
            var2 = _closure1_slot78;
            var2 = var4.bind(var5)(var3, var2);
case 315:
            return var1;
        }
    };
    var _closure1_slot164 = var1;
    var1 = function applySettings() {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var2 = _closure1_slot148;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var5 = _closure1_slot171;
            var4 = var2.inputDeviceId;
            var4 = var5.bind(var1)(var4);
            var6 = _closure1_slot73;
            var5 = var6.setAudioOutputDevice;
            var4 = var2.outputDeviceId;
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot152;
            var4 = var4.bind(var1)();
            var6 = _closure1_slot73;
            var5 = var6.setInputVolume;
            var4 = var2.inputVolume;
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var4 = 65;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.getConfig;
            var4 = {};
            var7 = 'MediaEngineStore.applySettings';
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = var4.audioOutputPresent;
            var6 = _closure1_slot73;
            var5 = var6.setOutputVolume;
            if(var4) { _fun0031_ip = 316; continue _fun0031 }
case 46:
            var4 = _closure1_slot44;
            var4 = var5.bind(var6)(var4);
            _fun0031_ip = 317; continue _fun0031;
case 316:
            var4 = var2.outputVolume;
            var4 = var5.bind(var6)(var4);
case 317:
            var6 = _closure1_slot73;
            var5 = var6.setAecDump;
            var4 = var2.aecDumpEnabled;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot73;
            var5 = var6.setSidechainCompression;
            var4 = var2.sidechainCompression;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot73;
            var5 = var6.setSidechainCompressionStrength;
            var4 = var2.sidechainCompressionStrength;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot73;
            var5 = var6.setAudioInputBypassSystemProcessing;
            var4 = var2.bypassSystemInputProcessing;
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 28;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isLinux;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0031_ip = 291; continue _fun0031 }
case 318:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var6 = 66;
            var4 = var4[var6];
            var4 = var5.bind(var1)(var4);
            var7 = null;
            var4 = var7 == var4;
            if(var4) { _fun0031_ip = 319; continue _fun0031 }
case 197:
            var8 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var6];
            var5 = var8.bind(var1)(var5);
            var5 = var5.setOpenH264Enabled;
            var4 = var7 == var5;
case 319:
            if(var4) { _fun0031_ip = 291; continue _fun0031 }
case 320:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var4 = var4[var6];
            var6 = var5.bind(var1)(var4);
            var5 = var6.setOpenH264Enabled;
            var4 = var2.openH264Enabled;
            var4 = var5.bind(var6)(var4);
case 291:
            var4 = _closure1_slot73;
            var3 = var4.setAudioMixerOptions;
            var2 = var2.audioMixerSettings;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot165 = var1;
    var1 = function tryEnable() {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var2 = _closure1_slot80;
            if(var2) { _fun0032_ip = 91; continue _fun0032 }
case 41:
            var2 = _closure1_slot73;
            var1 = var2.enable;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 47;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {'type': 'MEDIA_ENGINE_SET_AUDIO_ENABLED', 'enabled': true, 'unmute': false};
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 91:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot166 = var1;
    var25 = function makeDisabledDevice(arg1) {
        var1 = {};
        var2 = _closure1_slot46;
        var1['id'] = var2;
        var2 = 0;
        var1['index'] = var2;
        var2 = arg1;
        var1['name'] = var2;
        var2 = true;
        var1['disabled'] = var2;
        var2 = undefined;
        var1['guid'] = var2;
        var1['hardwareId'] = var2;
        var1['containerId'] = var2;
        return var1;
    };
    var _closure1_slot167 = var25;
    var1 = function convertDevices(arg1, arg2) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var3 = arg1;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0033_ip = 189; continue _fun0033 }
case 36:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 37;
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
                var3 = var2.originalId;
                var1['guid'] = var3;
                var3 = var2.hardwareId;
                var1['hardwareId'] = var3;
                var3 = var2.containerId;
                var1['containerId'] = var3;
                var2 = var2.effects;
                var1['effects'] = var2;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.keyBy;
            var1 = 'id';
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
case 189:
            var3 = _closure1_slot167;
            var2 = undefined;
            var1 = arg2;
            var3 = var3.bind(var2)(var1);
            var1 = {};
            var2 = var3.id;
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot168 = var1;
    var1 = function getDeviceId(arg1, arg2) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var2 = var6[var1];
            var3 = null;
            if(!(var3 == var2)) { _fun0034_ip = 321; continue _fun0034 }
case 268:
            var4 = _closure1_slot46;
            var2 = var6[var4];
case 321:
            if(!(var3 == var2)) { _fun0034_ip = 39; continue _fun0034 }
case 313:
            var7 = _closure1_slot1;
            var5 = _closure1_slot3;
            var4 = 37;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var5 = var4.bind(var5)(var6);
            var4 = var5.values;
            var5 = var4.bind(var5)();
            var4 = var5.first;
            var2 = var4.bind(var5)();
case 39:
            if(!(var3 != var2)) { _fun0034_ip = 322; continue _fun0034 }
case 44:
            var1 = var2.id;
case 322:
            return var1;
        }
    };
    var _closure1_slot169 = var1;
    var1 = function maybeProbeAudioEffects(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 28;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWindows;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0035_ip = 179; continue _fun0035 }
case 91:
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 67;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = var6.getConfig;
            var3 = {};
            var7 = 'MediaEngineStore.setInputDevice';
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            var3 = var3.probeAudioEffects;
            if(!var3) { _fun0035_ip = 179; continue _fun0035 }
case 323:
            var3 = _closure1_slot86;
            var3 = var3[var5];
            var6 = null;
            var7 = var6 == var3;
            var4 = undefined;
            if(var7) { _fun0035_ip = 324; continue _fun0035 }
case 98:
            var4 = var3.guid;
case 324:
            if(!(var6 != var4)) { _fun0035_ip = 179; continue _fun0035 }
case 325:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 68;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var3 = var3.guid;
            var2 = _closure1_slot73;
            var2 = var4.bind(var1)(var3, var5, var2);
case 179:
            return var1;
        }
    };
    var _closure1_slot170 = var1;
    var1 = function setInputDevice(arg1) {
        var3 = arg1;
        var4 = _closure1_slot73;
        var2 = var4.setAudioInputDevice;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot170;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot171 = var1;
    var1 = function setInputDevices(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var6 = _closure1_slot86;
            var7 = _closure1_slot168;
            var9 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 69;
            var4 = var5[var3];
            var1 = undefined;
            var4 = var9.bind(var1)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var3 = var5[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3["/QIjDA"];
            var4 = var4.bind(var8)(var3);
            var3 = arg1;
            var3 = var7.bind(var1)(var3, var4);
            _closure1_slot86 = var3;
            var4 = _closure1_slot1;
            var3 = 37;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEqual;
            var3 = _closure1_slot86;
            var3 = var4.bind(var5)(var3, var6);
            if(var3) { _fun0036_ip = 326; continue _fun0036 }
case 324:
            var3 = _closure1_slot148;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot171;
            var6 = _closure1_slot169;
            var5 = _closure1_slot86;
            var3 = var3.inputDeviceId;
            var3 = var6.bind(var1)(var5, var3);
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = _closure1_slot158;
            var2 = var3.bind(var4)(var2);
case 326:
            return var1;
        }
    };
    var _closure1_slot172 = var1;
    var1 = function hasHapticsOverAudioOutputDevices(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.name;
            var1 = var2.toLowerCase;
            var3 = var1.bind(var2)();
            var2 = var3.includes;
            var1 = 'dualsense';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot173 = var1;
    var1 = function setOutputDevices(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var2 = _closure1_slot87;
            var7 = _closure1_slot168;
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 69;
            var5 = var6[var4];
            var1 = undefined;
            var5 = var9.bind(var1)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var4 = var6[var4];
            var4 = var9.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4.xlUg0v;
            var5 = var5.bind(var8)(var4);
            var4 = arg1;
            var4 = var7.bind(var1)(var4, var5);
            _closure1_slot87 = var4;
            var5 = _closure1_slot1;
            var4 = 37;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.isEqual;
            var4 = _closure1_slot87;
            var4 = var5.bind(var6)(var4, var2);
            if(var4) { _fun0037_ip = 24; continue _fun0037 }
case 324:
            var4 = _closure1_slot148;
            var4 = var4.bind(var1)();
            var6 = _closure1_slot169;
            var5 = _closure1_slot87;
            var4 = var4.outputDeviceId;
            var6 = var6.bind(var1)(var5, var4);
            var5 = _closure1_slot73;
            var4 = var5.setAudioOutputDevice;
            var4 = var4.bind(var5)(var6);
            var4 = _closure1_slot173;
            var2 = var4.bind(var1)(var2);
            var3 = _closure1_slot87;
            var3 = var4.bind(var1)(var3);
            if(!(var2 !== var3)) { _fun0037_ip = 24; continue _fun0037 }
case 327:
            var2 = function updateConnectionsDiscardRearChannels(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure1_slot73;
                var2 = var3.eachConnection;
                var1 = function(arg1) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        var3 = arg1;
                        var2 = var3.context;
                        var1 = _closure1_slot50;
                        var1 = var1.STREAM;
                        if(!(var2 === var1)) { _fun0038_ip = 299; continue _fun0038 }
case 312:
                        var2 = var3.setSoundshareDiscardRearChannels;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 299:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var1)(var3);
case 24:
            return var1;
        }
    };
    var _closure1_slot174 = var1;
    var1 = function setVideoDevices(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var5 = arg1;
            var2 = var5.length;
            var1 = 0;
            var1 = var2 > var1;
            _closure1_slot101 = var1;
            var7 = _closure1_slot88;
            var4 = _closure1_slot168;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 69;
            var6 = var10[var3];
            var1 = undefined;
            var6 = var9.bind(var1)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.WKWARY;
            var3 = var6.bind(var8)(var3);
            var3 = var4.bind(var1)(var5, var3);
            _closure1_slot88 = var3;
            var3 = _closure1_slot94;
            if(!var3) { _fun0039_ip = 328; continue _fun0039 }
case 173:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 37;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEqual;
            var3 = _closure1_slot88;
            var3 = var4.bind(var5)(var3, var7);
            if(var3) { _fun0039_ip = 328; continue _fun0039 }
case 271:
            var4 = _closure1_slot88;
            var3 = _closure1_slot95;
            var3 = var4[var3];
            var3 = var1 !== var3;
            var5 = _closure1_slot95;
            var4 = _closure1_slot46;
            var5 = var5 === var4;
            if(!var5) { _fun0039_ip = 303; continue _fun0039 }
case 329:
            var4 = _closure1_slot46;
            var6 = var7[var4];
            var4 = null;
            var8 = var4 == var6;
            var4 = undefined;
            if(var8) { _fun0039_ip = 26; continue _fun0039 }
case 330:
            var4 = var6.disabled;
case 26:
            var5 = var4;
case 303:
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 70;
            var4 = var8[var4];
            var4 = var6.bind(var1)(var4);
            var6 = var4.name;
            var4 = 'Firefox';
            var4 = var4 === var6;
            if(!var4) { _fun0039_ip = 182; continue _fun0039 }
case 331:
            var8 = _closure1_slot95;
            var6 = '';
            var4 = var6 === var8;
case 182:
            if(!var4) { _fun0039_ip = 332; continue _fun0039 }
case 333:
            var6 = _closure1_slot95;
            var6 = var7[var6];
            var8 = null;
            var9 = var8 == var6;
            var8 = undefined;
            if(var9) { _fun0039_ip = 334; continue _fun0039 }
case 335:
            var8 = var6.name;
case 334:
            var6 = 'Default';
            var4 = var6 === var8;
case 332:
            if(!var4) { _fun0039_ip = 336; continue _fun0039 }
case 337:
            var6 = _closure1_slot95;
            var7 = var7[var6];
            var6 = null;
            var6 = var6 != var7;
            if(!var6) { _fun0039_ip = 338; continue _fun0039 }
case 114:
            var6 = var7.disabled;
case 338:
            var4 = !var6;
case 336:
            var2 = _closure1_slot152;
            if(var3) { _fun0039_ip = 339; continue _fun0039 }
case 340:
            var3 = var5;
case 339:
            if(var3) { _fun0039_ip = 341; continue _fun0039 }
case 342:
            var3 = var4;
case 341:
            var2 = var2.bind(var1)(var3);
case 328:
            return var1;
        }
    };
    var _closure1_slot175 = var1;
    var1 = function applyRemoteSettings() {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0040_ip = 343; continue _fun0040 }
case 344:
            var2 = false;
case 343:
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot15;
            var2 = var2.settings;
            var4 = var2.audioContextSettings;
            var2 = null;
            if(!(var2 == var4)) { _fun0040_ip = 193; continue _fun0040 }
case 60:
            var2 = {};
            var3 = {};
            var2['user'] = var3;
            var3 = {};
            var2['stream'] = var3;
            var4 = var2;
case 193:
            _closure2_slot1 = var4;
            var5 = function _loop() {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var1 = _closure1_slot39;
                    var1 = var1.USER;
                    if(!(var4 !== var1)) { _fun0041_ip = 88; continue _fun0041 }
case 269:
                    var1 = _closure1_slot50;
                    var4 = var1.STREAM;
                    _fun0041_ip = 103; continue _fun0041;
case 88:
                    var1 = _closure1_slot50;
                    var4 = var1.DEFAULT;
case 103:
                    var _closure3_slot0 = var4;
                    var1 = _closure1_slot50;
                    var1 = var1.STREAM;
                    if(!(var4 !== var1)) { _fun0041_ip = 5; continue _fun0041 }
case 43:
                    var1 = _closure1_slot44;
                    _fun0041_ip = 187; continue _fun0041;
case 5:
                    var1 = _closure1_slot45;
case 187:
                    var _closure3_slot1 = var1;
                    var5 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var11 = var5[var1];
                    var1 = null;
                    if(!(var1 == var11)) { _fun0041_ip = 279; continue _fun0041 }
case 94:
                    var11 = {};
case 279:
                    var _closure3_slot2 = var11;
                    var5 = _closure1_slot148;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var6 = var5.localMutes;
                    var _closure3_slot3 = var6;
                    var5 = var5.localVolumes;
                    var _closure3_slot4 = var5;
                    var15 = function _loop2(arg1, arg2) {
                        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                            var7 = arg1;
                            var5 = arg2;
                            var _closure4_slot0 = var7;
                            var _closure4_slot1 = var5;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 71;
                            var3 = var3[var1];
                            var1 = undefined;
                            var9 = var6.bind(var1)(var3);
                            var8 = var9.getPendingAudioSettings;
                            var6 = _closure3_slot0;
                            var8 = var8.bind(var9)(var6, var7);
                            var6 = null;
                            if(!(var6 == var8)) { _fun0042_ip = 345; continue _fun0042 }
case 43:
                            var6 = var5.muted;
                            var8 = _closure3_slot3;
                            if(var6) { _fun0042_ip = 63; continue _fun0042 }
case 346:
                            var6 = delete var8[var7];
                            _fun0042_ip = 171; continue _fun0042;
case 63:
                            var6 = true;
                            var8[var7] = var6;
case 171:
                            var8 = var5.volume;
                            var6 = _closure3_slot1;
                            if(!(var8 === var6)) { _fun0042_ip = 311; continue _fun0042 }
case 96:
                            var6 = _closure3_slot4;
                            var6 = delete var6[var7];
                            _fun0042_ip = 302; continue _fun0042;
case 311:
                            var6 = _closure3_slot4;
                            var5 = var5.volume;
                            var6[var7] = var5;
case 302:
                            var5 = _closure1_slot73;
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
case 345:
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
                    if(!var9) { _fun0041_ip = 347; continue _fun0041 }
case 329:
                    var16 = var14[var10];
                    var9 = _closure1_slot9;
                    var9 = var9.bind(var1)(var16, var13);
                    var16 = var9[var12];
                    var9 = var9[var11];
                    var9 = var15.bind(var1)(var16, var9);
                    var10 = var10 + 1;
                    var9 = var14.length;
                    if(var10 < var9) { _fun0041_ip = 329; continue _fun0041 }
case 347:
                    var7 = _closure2_slot0;
                    if(!var7) { _fun0041_ip = 348; continue _fun0041 }
case 194:
                    var9 = function _loop3(arg1) {
                        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                            var4 = arg1;
                            var _closure4_slot0 = var4;
                            var3 = _closure3_slot2;
                            var5 = var3[var4];
                            var3 = null;
                            if(!(var3 == var5)) { _fun0043_ip = 4; continue _fun0043 }
case 269:
                            var3 = _closure3_slot3;
                            var3 = delete var3[var4];
                            var3 = _closure3_slot4;
                            var3 = delete var3[var4];
                            var4 = _closure1_slot73;
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
case 4:
                            var1 = 1;
                            return var1;
                        }
                    };
                    var7 = _closure1_slot141;
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
                    if(var3) { _fun0041_ip = 348; continue _fun0041 }
case 320:
                    var3 = var7.value;
                    var3 = var9.bind(var1)(var3);
                    var10 = var8.bind(var1)();
                    var3 = var10.done;
                    var7 = var10;
                    if(!var3) { _fun0041_ip = 320; continue _fun0041 }
case 348:
                    var3 = _closure1_slot164;
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
            if(!var2) { _fun0040_ip = 300; continue _fun0040 }
case 95:
            var2 = var4[var3];
            _closure2_slot2 = var2;
            var2 = var5.bind(var1)();
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0040_ip = 95; continue _fun0040 }
case 300:
            return var1;
        }
    };
    var _closure1_slot176 = var1;
    var1 = function maybeTryHookProcess(arg1, arg2) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            if(!var1) { _fun0044_ip = 77; continue _fun0044 }
case 101:
            var2 = _closure1_slot70;
            var1 = null;
            if(!(var1 == var2)) { _fun0044_ip = 349; continue _fun0044 }
case 312:
            var6 = _closure1_slot58;
            var4 = var6.info;
            var2 = 'Error: trying to get soundshare id before MediaEngineStore is instantiated.';
            var2 = var4.bind(var6)(var2);
            var2 = {'soundshareId': null, 'soundshareSession': ''};
            _fun0044_ip = 326; continue _fun0044;
case 349:
            var6 = _closure1_slot70;
            var4 = var6.getExperimentalSoundshare;
            var4 = var4.bind(var6)();
            var6 = var5;
            if(var4) { _fun0044_ip = 311; continue _fun0044 }
case 350:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 60;
            var7 = var7[var4];
            var4 = undefined;
            var7 = var8.bind(var4)(var7);
            var4 = var7.getAudioPid;
            var6 = var4.bind(var7)(var5);
case 311:
            var7 = var1 != var6;
            var4 = '';
            if(!var7) { _fun0044_ip = 179; continue _fun0044 }
case 308:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 60;
            var7 = var7[var3];
            var3 = undefined;
            var7 = var8.bind(var3)(var7);
            var3 = var7.generateSessionFromPid;
            var4 = var3.bind(var7)(var6);
case 179:
            var3 = {};
            var3['soundshareId'] = var6;
            var3['soundshareSession'] = var4;
            var2 = var3;
case 326:
            var3 = var2.soundshareId;
            var2 = var2.soundshareSession;
            if(!(var1 == var3)) { _fun0044_ip = 351; continue _fun0044 }
case 77:
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0044_ip = 184; continue _fun0044 }
case 352:
            var6 = _closure1_slot148;
            var4 = undefined;
            var4 = var6.bind(var4)();
            var1 = var4.videoHook;
case 184:
            if(!var1) { _fun0044_ip = 353; continue _fun0044 }
case 347:
            var6 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 39;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var1 = var4.attachToProcess;
            var1 = var1.bind(var4)(var5);
case 353:
            var1 = {'soundshareId': null, 'soundshareSession': null};
            return var1;
case 351:
            var4 = function tryHookSoundshare(arg1, arg2) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 28;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isWindows;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0045_ip = 102; continue _fun0045 }
case 90:
                    var5 = 1;
                    var4 = var6 > var5;
case 102:
                    if(!var4) { _fun0045_ip = 191; continue _fun0045 }
case 169:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 39;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.attachToProcess;
                    var3 = {};
                    var7 = arg2;
                    var3['soundshare_session'] = var7;
                    var4 = var4.bind(var5)(var6, var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                            var3 = arg1;
                            var _closure4_slot0 = var3;
                            var2 = null;
                            var2 = var2 == var3;
                            if(var2) { _fun0046_ip = 354; continue _fun0046 }
case 355:
                            var5 = _closure1_slot13;
                            var4 = var5.shouldContinueWithoutElevatedProcessForPID;
                            var3 = _closure3_slot0;
                            var2 = var4.bind(var5)(var3);
case 354:
                            if(var2) { _fun0046_ip = 322; continue _fun0046 }
case 103:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 47;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.wait;
                            var1 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 47;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var5 = 'MEDIA_ENGINE_SOUNDSHARE_FAILED';
                                var2['type'] = var5;
                                var5 = _closure4_slot0;
                                var2['errorMessage'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
case 322:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
case 191:
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            var1 = {};
            var1['soundshareId'] = var3;
            var1['soundshareSession'] = var2;
            return var1;
        }
    };
    var _closure1_slot177 = var1;
    var1 = function resetProbingState() {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = _closure1_slot50;
            var5 = var1.DEFAULT;
            var2 = _closure1_slot148;
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
            if(!var4) { _fun0047_ip = 356; continue _fun0047 }
case 298:
            var11 = var10[var6];
            var4 = _closure1_slot9;
            var11 = var4.bind(var1)(var11, var8);
            var4 = var11[var9];
            var12 = var11[var7];
            var11 = _closure1_slot28;
            var11 = var11.AUTO_PROBING;
            if(!(var12 === var11)) { _fun0047_ip = 106; continue _fun0047 }
case 357:
            var4 = delete var2[var4];
case 106:
            var6 = var6 + 1;
            var4 = var10.length;
            if(var6 < var4) { _fun0047_ip = 298; continue _fun0047 }
case 356:
            var4 = _closure1_slot164;
            var3 = {};
            var3['videoToggleStateMap'] = var2;
            var2 = false;
            var2 = var4.bind(var1)(var3, var5, var2);
            return var1;
        }
    };
    var _closure1_slot178 = var1;
    var1 = function trackVoiceProcessing(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var3 = _closure1_slot148;
            var1 = undefined;
            var10 = var3.bind(var1)();
            var4 = _closure1_slot73;
            var3 = var4.getAudioSubsystem;
            var9 = var3.bind(var4)();
            var4 = _closure1_slot73;
            var3 = var4.getAudioLayer;
            var8 = var3.bind(var4)();
            var5 = _closure1_slot169;
            var4 = _closure1_slot86;
            var3 = var10.inputDeviceId;
            var4 = var5.bind(var1)(var4, var3);
            var3 = _closure1_slot86;
            var3 = var3[var4];
            var4 = null;
            var4 = var4 == var3;
            var7 = undefined;
            if(var4) { _fun0048_ip = 63; continue _fun0048 }
case 39:
            var7 = var3.name;
case 63:
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 48;
            var3 = var5[var3];
            var11 = var4.bind(var1)(var3);
            var6 = var10.noiseCancellation;
            var12 = _closure1_slot70;
            var3 = var12.getSystemMicrophoneMode;
            var3 = var3.bind(var12)();
            var6 = var11.bind(var1)(var6, var3);
            var3 = 46;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot23;
            var3 = var2.VOICE_PROCESSING;
            var2 = {};
            var11 = var10.echoCancellation;
            var2['echo_cancellation'] = var11;
            var11 = var10.noiseCancellation;
            var2['noise_cancellation'] = var11;
            var11 = var10.noiseSuppression;
            var2['noise_suppression'] = var11;
            var11 = var10.automaticGainControl;
            var2['automatic_gain_control'] = var11;
            var11 = arg1;
            var2['location'] = var11;
            var10 = var10.bypassSystemInputProcessing;
            var2['bypass_system_input_processing'] = var10;
            var2['audio_subsystem'] = var9;
            var2['audio_layer'] = var8;
            var2['input_device'] = var7;
            var2['effective_noise_cancellation'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot179 = var1;
    var1 = function setLoopback() {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var3 = _closure1_slot148;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot126;
            var5 = var4.size;
            var4 = 0;
            var5 = var5 > var4;
            var10 = var3.inputDeviceId;
            var6 = _closure1_slot18;
            var4 = var6.hasEchoCancellation;
            var9 = var4.bind(var6)(var10);
            if(var9) { _fun0049_ip = 57; continue _fun0049 }
case 188:
            var9 = var3.echoCancellation;
case 57:
            var6 = _closure1_slot18;
            var4 = var6.hasNoiseSuppression;
            var8 = var4.bind(var6)(var10);
            if(var8) { _fun0049_ip = 350; continue _fun0049 }
case 187:
            var8 = var3.noiseSuppression;
case 350:
            var6 = _closure1_slot155;
            var7 = _closure1_slot18;
            var4 = var7.hasAutomaticGainControl;
            var4 = var4.bind(var7)(var10);
            if(var4) { _fun0049_ip = 17; continue _fun0049 }
case 358:
            var4 = var3.automaticGainControl;
case 17:
            var7 = var6.bind(var1)(var4);
            var6 = var3.noiseCancellation;
            var4 = _closure1_slot73;
            var3 = var4.setLoopback;
            var2 = {};
            var2['echoCancellation'] = var9;
            var9 = !var5;
            var2['echoCancellationPreEcho'] = var9;
            var2['noiseSuppression'] = var8;
            var2['automaticGainControlConfig'] = var7;
            var2['noiseCancellation'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var _closure1_slot180 = var1;
    var1 = function _setGamescopeVaapiEnabled() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0050_ip = 359; continue _fun0050 }
case 41:
                    var5 = _closure1_slot73;
                    var3 = var5.supports;
                    var2 = _closure1_slot49;
                    var2 = var2.VAAPI;
                    var2 = var3.bind(var5)(var2);
                    if(!var2) { _fun0050_ip = 360; continue _fun0050 }
case 278:
                    var2 = global;
                    var3 = var2.window;
                    var7 = var3.DiscordNative;
                    var3 = null;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if(var8) { _fun0050_ip = 361; continue _fun0050 }
case 362:
                    var7 = var7.processUtils;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if(var8) { _fun0050_ip = 361; continue _fun0050 }
case 44:
                    var5 = var7.getSystemInfo;
case 361:
                    if(!(var3 != var5)) { _fun0050_ip = 360; continue _fun0050 }
case 65:
                    var2 = var2.window;
                    var2 = var2.DiscordNative;
                    var5 = var2.processUtils;
                    var2 = var5.getSystemInfo;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=129);
case 108:
                    return var2;
case 302:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0050_ip = 363; continue _fun0050 }
case 364:
                    var5 = var2.electronGPUInfo;
                    var7 = var3 == var5;
                    var6 = undefined;
                    if(var7) { _fun0050_ip = 107; continue _fun0050 }
case 365:
                    var6 = var5.gpuDevice;
case 107:
                    if(!(var3 == var6)) { _fun0050_ip = 270; continue _fun0050 }
case 283:
                    var6 = new Array(0);
case 270:
                    var5 = var6.some;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.vendorId;
                        var1 = 4098;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    if(!var3) { _fun0050_ip = 360; continue _fun0050 }
case 366:
                    var3 = true;
                    _closure1_slot136 = var3;
                    var6 = _closure1_slot73;
                    var5 = var6.supports;
                    var3 = _closure1_slot49;
                    var3 = var3.GAMESCOPE_CAPTURE;
                    var3 = var5.bind(var6)(var3);
                    _closure1_slot135 = var3;
case 360:
                    var3 = undefined;
                    return var3;
case 363:
                    return var2;
case 359:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot181 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot181 = var1;
    var1 = function isKrispAvailable() {
        var1 = _closure1_slot110;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot182 = var1;
    var1 = function _setupKrispNativeModule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0051_ip = 367; continue _fun0051 }
case 41:
                    var2 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var4 = undefined;
case 55: // try_start_0 // try_start_1
                    var10 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var14 = 66;
                    var3 = var3[var14];
                    var10 = var10.bind(var2)(var3);
                    var3 = var10.ensureModule;
                    var13 = 'discord_krisp';
                    var3 = var3.bind(var10)(var13);
                    SaveGenerator(address=66);
case 306:
                    return var3;
case 43:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0051_ip = 178; continue _fun0051 }
case 62:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var10 = var10[var14];
                    var11 = var11.bind(var2)(var10);
                    var10 = var11.requireModule;
                    var10 = var10.bind(var11)(var13);
                    var5 = var10;
                    var11 = true;
                    _closure1_slot109 = var11;
                    var10 = var10.getSdkVersion;
                    var11 = null;
                    var13 = var11 == var10;
                    var10 = undefined;
                    if(var13) { _fun0051_ip = 177; continue _fun0051 }
case 302:
                    var15 = var5;
                    var13 = var15.getSdkVersion;
                    var10 = var13.bind(var15)();
case 177:
                    _closure1_slot111 = var10;
                    var10 = var5;
                    var10 = var10.getSuppressionLevel;
                    var13 = var11 == var10;
                    var10 = undefined;
                    if(var13) { _fun0051_ip = 368; continue _fun0051 }
case 283:
                    var15 = var5;
                    var13 = var15.getSuppressionLevel;
                    var10 = var13.bind(var15)();
case 368:
                    var12 = var10;
                    var13 = var11 != var10;
                    var10 = 100;
                    if(!var13) { _fun0051_ip = 110; continue _fun0051 }
case 77:
                    var10 = var12;
case 110:
                    _closure1_slot112 = var10;
                    var10 = var5;
                    var10 = var10.getNcModels;
                    if(!(var11 != var10)) { _fun0051_ip = 369; continue _fun0051 }
case 370:
                    var10 = var5;
                    var5 = var10.getNcModels;
                    var12 = var5.bind(var10)();
                    var10 = var12.then;
                    var5 = function(arg1) {
                        var2 = arg1;
                        _closure1_slot114 = var2;
                        var2 = _closure1_slot70;
                        var1 = var2.emitChange;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var5 = var10.bind(var12)(var5);
case 369:
                    var10 = _closure1_slot70;
                    var5 = var10.emitChange;
                    var5 = var5.bind(var10)();
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var14];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.ensureModule;
                    var13 = 'discord_voice';
                    var5 = var5.bind(var10)(var13);
                    SaveGenerator(address=292);
case 371:
                    return var5;
case 372:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0051_ip = 373; continue _fun0051 }
case 374:
                    var12 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var10 = var10[var14];
                    var12 = var12.bind(var2)(var10);
                    var10 = var12.requireModule;
                    var10 = var10.bind(var12)(var13);
                    var9 = var10;
                    var10 = var10.setupKrispPath;
                    if(!(var11 != var10)) { _fun0051_ip = 375; continue _fun0051 }
case 376:
                    var10 = var9;
                    var9 = var10.setupKrispPath;
                    var9 = var9.bind(var10)();
case 375: // try_end0
                    _fun0051_ip = 377; continue _fun0051;
case 373: // try_end1
                    var9 = false;
                    _closure1_slot108 = var9;
                    return var5;
case 178:
                    var5 = false;
                    _closure1_slot108 = var5;
                    return var3;
case 120: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var11 = _closure1_slot58;
                    var10 = var11.warn;
                    var13 = var8.message;
                    var5 = global;
                    var9 = var5.HermesInternal;
                    var12 = var9.concat;
                    var9 = 'Failed to load Krisp module: ';
                    var9 = var12.bind(var9)(var13);
                    var9 = var10.bind(var11)(var9);
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var9 = 77;
                    var9 = var11[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = var10.captureException;
                    var9 = var9.bind(var10)(var8);
                    var9 = _closure1_slot51;
                    var7 = var9.KRISP_INIT_ERROR;
                    var9 = var8.message;
                    var8 = var9.includes;
                    var12 = ': ';
                    var8 = var8.bind(var9)(var12);
                    if(!var8) { _fun0051_ip = 168; continue _fun0051 }
case 378:
                    var8 = var5.parseInt;
                    var10 = var6.message;
                    var9 = var10.substring;
                    var11 = var6.message;
                    var6 = var11.indexOf;
                    var11 = var6.bind(var11)(var12);
                    var6 = 1;
                    var6 = var11 + var6;
                    var6 = var9.bind(var10)(var6);
                    var6 = var8.bind(var2)(var6);
                    var4 = var6;
                    var5 = var5.isNaN;
                    var5 = var5.bind(var2)(var6);
                    if(var5) { _fun0051_ip = 379; continue _fun0051 }
case 380:
                    var6 = var4;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0051_ip = 379; continue _fun0051 }
case 381:
                    _fun0051_ip = 382; continue _fun0051;
case 379:
                    var5 = _closure1_slot51;
                    var4 = var5.KRISP_INIT_ERROR;
case 382:
                    var7 = var4;
case 168:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var9 = 45;
                    var4 = var6[var9];
                    var8 = var10.bind(var2)(var4);
                    var5 = var8.reportAVError;
                    var4 = {};
                    var9 = var6[var9];
                    var9 = var10.bind(var2)(var9);
                    var9 = var9.AVError;
                    var9 = var9.NOISE_CANCELLER_ERROR;
                    var4['type'] = var9;
                    var9 = _closure1_slot153;
                    var9 = var9.bind(var2)(var7);
                    var4['underlyingError'] = var9;
                    var4 = var5.bind(var8)(var4);
                    var5 = _closure1_slot1;
                    var4 = 46;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot23;
                    var4 = var3.VOICE_PROCESSING;
                    var3 = {};
                    var3['noise_canceller_error'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 377: // try_end2
                    var3 = false;
                    _closure1_slot108 = var3;
                    return var2;
case 383: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var3 = false;
                    _closure1_slot108 = var3;
                    throw var2;
case 367:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot183 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot183 = var1;
    var1 = function maybeSetupKrispModule() {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var5 = 28;
            var3 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWindows;
            var3 = var3.bind(var4)();
            if(var3) { _fun0052_ip = 384; continue _fun0052 }
case 88:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var5];
            var6 = var6.bind(var1)(var4);
            var4 = var6.isLinux;
            var3 = var4.bind(var6)();
case 384:
            if(var3) { _fun0052_ip = 301; continue _fun0052 }
case 193:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var5];
            var6 = var6.bind(var1)(var4);
            var4 = var6.isMac;
            var3 = var4.bind(var6)();
case 301:
            if(!var3) { _fun0052_ip = 385; continue _fun0052 }
case 94:
            var3 = _closure1_slot108;
            if(var3) { _fun0052_ip = 385; continue _fun0052 }
case 96:
            var3 = _closure1_slot109;
            if(var3) { _fun0052_ip = 385; continue _fun0052 }
case 98:
            var3 = true;
            _closure1_slot108 = var3;
            var3 = function setupKrispNativeModule() {
                var1 = undefined;
                var4 = _closure1_slot183;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3 = var3.bind(var1)();
            _fun0052_ip = 386; continue _fun0052;
case 385:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWeb;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0052_ip = 387; continue _fun0052 }
case 283:
            var6 = _closure1_slot73;
            var4 = var6.supports;
            var3 = _closure1_slot49;
            var3 = var3.NOISE_CANCELLATION;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0052_ip = 305; continue _fun0052 }
case 387:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isWeb;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0052_ip = 386; continue _fun0052 }
case 183:
            var4 = _closure1_slot164;
            var3 = {};
            var5 = false;
            var3['noiseCancellation'] = var5;
            var3 = var4.bind(var1)(var3);
            _fun0052_ip = 386; continue _fun0052;
case 305:
            var3 = true;
            _closure1_slot109 = var3;
            var3 = _closure1_slot70;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
case 386:
            return var1;
        }
    };
    var _closure1_slot184 = var1;
    var1 = function _downloadOpenH() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0053_ip = 388; continue _fun0053 }
case 41:
                    var2 = undefined;
                    var6 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var3 = undefined;
                    var5 = undefined;
case 55: // try_start_1
                    var13 = '';
                    var11 = var13;
                    var12 = false;
                    var4 = global;
                    var10 = var4.URL;
                    var9 = var10.parse;
                    var8 = _closure1_slot67;
                    var9 = var9.bind(var10)(var8);
                    var3 = var9;
                    var8 = null;
                    if(!(var8 !== var9)) { _fun0053_ip = 290; continue _fun0053 }
case 362:
                    var8 = var3;
                    var10 = var8.pathname;
                    var9 = var10.split;
                    var8 = '/';
                    var9 = var9.bind(var10)(var8);
                    var10 = var9.length;
                    var8 = 1;
                    var8 = var10 - var8;
                    var10 = var9[var8];
                    var9 = var10.replace;
                    var8 = '.bz2';
                    var5 = var9.bind(var10)(var8, var13);
case 175: // try_start_0
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var8 = 66;
                    var8 = var10[var8];
                    var15 = var9.bind(var2)(var8);
                    var14 = var15.downloadOpenH264;
                    var19 = _closure1_slot67;
                    var18 = var5;
                    var17 = _closure1_slot68;
                    var16 = function(arg1) {
                        var4 = _closure1_slot58;
                        var3 = var4.log;
                        var2 = 'OpenH264 download status';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var20 = var15;
                    var8 = var20[var14](var19, var18, var17, var16, var15);
                    SaveGenerator(address=180);
case 78:
                    return var8;
case 389:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0053_ip = 390; continue _fun0053 }
case 391:
                    var13 = _closure1_slot58;
                    var10 = var13.log;
                    var9 = 'OpenH264 is ready';
                    var9 = var10.bind(var13)(var9, var8);
                    var12 = var8.fetchedFromNetwork;
                    var6 = true;
case 184: // try_end0
                    _fun0053_ip = 392; continue _fun0053;
case 390: // try_end1
                    return var8;
case 393: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var13 = _closure1_slot58;
                    var10 = var13.error;
                    var9 = 'OpenH264 download failed';
                    var9 = var10.bind(var13)(var9, var8);
                    var11 = var8.message;
                    var6 = false;
case 392:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 46;
                    var7 = var9[var7];
                    var10 = var8.bind(var2)(var7);
                    var9 = var10.track;
                    var7 = _closure1_slot23;
                    var8 = var7.VIDEO_OPENH264_DOWNLOADED;
                    var7 = {};
                    var7['success'] = var6;
                    var7['fetched_from_network'] = var12;
                    var7['error_message'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    if(!var6) { _fun0053_ip = 394; continue _fun0053 }
case 395:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 66;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.cleanupUnusedOpenH264Files;
                    var8 = var5;
                    var5 = new Array(1);
                    var5[0] = var8;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=362);
case 396:
                    return var5;
case 118:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0053_ip = 201; continue _fun0053 }
case 116:
                    var8 = _closure1_slot58;
                    var7 = var8.log;
                    var6 = 'OpenH264 cleanup';
                    var6 = var7.bind(var8)(var6, var5);
case 394: // try_end2
                    _fun0053_ip = 397; continue _fun0053;
case 201:
                    return var5;
case 290: // try_start_3
                    var7 = _closure1_slot58;
                    var6 = var7.log;
                    var5 = var3;
                    var4 = 'OpenH264 URL ';
                    var3 = ' is invalid';
                    var3 = var6.bind(var7)(var4, var5, var3);
case 125: // try_end3
                    var3 = undefined;
                    return var3;
case 398: // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot58;
                    var4 = var5.error;
                    var3 = 'OpenH264 download failed';
                    var3 = var4.bind(var5)(var3, var6);
case 397:
                    return var2;
case 388:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot185 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot185 = var1;
    var1 = function maybeDownloadOpenH264() {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 28;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isLinux;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0054_ip = 9; continue _fun0054 }
case 88:
            var2 = function downloadOpenH264() {
                var1 = undefined;
                var4 = _closure1_slot185;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var1)();
case 9:
            return var1;
        }
    };
    var _closure1_slot186 = var1;
    var1 = function setAudioSubsystem(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot42;
            var2 = var2.AUTOMATIC;
            if(!(var4 !== var2)) { _fun0055_ip = 169; continue _fun0055 }
case 33:
            var5 = _closure1_slot164;
            var3 = {};
            var2 = false;
            var3['automaticAudioSubsystem'] = var2;
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var3 = _closure1_slot73;
            var2 = var3.setAudioSubsystem;
            var2 = var2.bind(var3)(var4);
            _fun0055_ip = 63; continue _fun0055;
case 169:
            var4 = _closure1_slot164;
            var3 = {};
            var2 = true;
            var3['automaticAudioSubsystem'] = var2;
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var1 = _closure1_slot188;
            var1 = var1.bind(var2)();
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot187 = var1;
    var1 = function interpretAutomaticAudioSubsystem() {
        var3 = _closure1_slot73;
        var2 = var3.queueAudioSubsystem;
        var1 = _closure1_slot42;
        var1 = var1.EXPERIMENTAL;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot188 = var1;
    var8 = function handleUserSettingsModal(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            var2 = _closure1_slot27;
            var2 = var2.VOICE;
            if(!(var3 === var2)) { _fun0056_ip = 399; continue _fun0056 }
case 269:
            var2 = _closure1_slot166;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 399:
            var1 = false;
            return var1;
        }
    };
    var1 = function processQueueMetricsForAnalytics(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var4 = arg1;
            var2 = var4.taskMetrics;
            var1 = null;
            if(!(var1 != var2)) { _fun0057_ip = 400; continue _fun0057 }
case 33:
            var2 = var4.taskMetrics;
            var2 = var2.length;
            var14 = 0;
            if(!(var14 !== var2)) { _fun0057_ip = 400; continue _fun0057 }
case 167:
            var2 = var4.taskMetrics;
            var5 = var2.length;
            var2 = 1;
            if(!(var2 !== var5)) { _fun0057_ip = 174; continue _fun0057 }
case 11:
            var2 = {'metrics_period_ms': null, 'total_tasks': 0, 'total_exec_time_ns': 0};
            var5 = var4.periodMs;
            var2['metrics_period_ms'] = var5;
            var5 = var4.queueName;
            var2['queue_name'] = var5;
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
case 84:
            var4 = var5.length;
            if(!(var11 < var4)) { _fun0057_ip = 401; continue _fun0057 }
case 402:
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
case 401:
            var11 = var11 + 1;
            var4 = 0;
            if(var11 < var9) { _fun0057_ip = 84; continue _fun0057 }
case 320:
            var11 = var10.length;
            if(!(var4 < var11)) { _fun0057_ip = 403; continue _fun0057 }
case 117:
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
case 403:
            var4 = var4 + 1;
            if(var4 < var9) { _fun0057_ip = 320; continue _fun0057 }
case 123:
            var4 = var3.JSON;
            var3 = var4.stringify;
            var3 = var3.bind(var4)(var5);
            var2['full_task_report'] = var3;
            return var2;
case 174:
            return var1;
case 400:
            return var1;
        }
    };
    var _closure1_slot189 = var1;
    var14 = global;
    var5 = var14.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var18 = true;
    var2['value'] = var18;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var13 = 0;
    var2 = var10[var13];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var4 = 1;
    var2 = var10[var4];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var17 = 2;
    var2 = var10[var17];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var6 = 5;
    var2 = var10[var6];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = 8;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.getSystemAnalyticsInfo;
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 15;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 17;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 18;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 19;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot22 = var2;
    var2 = 20;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot23 = var5;
    var5 = var2.AppStates;
    var _closure1_slot24 = var5;
    var28 = var2.InputModes;
    var _closure1_slot25 = var28;
    var5 = var2.RTCConnectionStates;
    var _closure1_slot26 = var5;
    var5 = var2.UserSettingsSections;
    var _closure1_slot27 = var5;
    var2 = var2.VideoToggleState;
    var _closure1_slot28 = var2;
    var2 = 21;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var5 = var2.DARWIN_SCKIT_VERSION;
    var _closure1_slot29 = var5;
    var5 = var2.DARWIN_SCKIT_AUDIO_VERSION;
    var _closure1_slot30 = var5;
    var5 = var2.WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD;
    var _closure1_slot31 = var5;
    var5 = var2.WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER;
    var _closure1_slot32 = var5;
    var5 = var2.WINDOWS_GRAPHICS_CAPTURE_BUILD;
    var _closure1_slot33 = var5;
    var5 = var2.WINDOWS_GRAPHICS_CAPTURE_SEMVER;
    var _closure1_slot34 = var5;
    var5 = var2.WINDOWS_SOUNDSHARE_HOOK_VERSION;
    var _closure1_slot35 = var5;
    var2 = var2.WINDOWS_SOUNDSHARE_NONHOOK_VERSION;
    var _closure1_slot36 = var2;
    var2 = 22;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var5 = var2.NativePermissionStates;
    var _closure1_slot37 = var5;
    var20 = var2.NativePermissionTypes;
    var _closure1_slot38 = var20;
    var2 = 23;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var5 = var2.ProtoAudioSettingsContextTypes;
    var _closure1_slot39 = var5;
    var2 = var2.UserSettingsTypes;
    var _closure1_slot40 = var2;
    var2 = 24;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var23 = var2.InputProfile;
    var _closure1_slot41 = var23;
    var2 = 25;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var5 = var2.AudioSubsystems;
    var _closure1_slot42 = var5;
    var5 = var2.DARWIN_H265_VERSION;
    var _closure1_slot43 = var5;
    var5 = var2.DEFAULT_VOLUME;
    var _closure1_slot44 = var5;
    var5 = var2.DEFAULT_STREAM_VOLUME;
    var _closure1_slot45 = var5;
    var24 = var2.DEFAULT_DEVICE_ID;
    var _closure1_slot46 = var24;
    var21 = var2.DISABLED_DEVICE_ID;
    var _closure1_slot47 = var21;
    var5 = var2.ExperimentFlags;
    var _closure1_slot48 = var5;
    var22 = var2.Features;
    var _closure1_slot49 = var22;
    var19 = var2.MediaEngineContextTypes;
    var _closure1_slot50 = var19;
    var15 = var2.NoiseCancellerError;
    var _closure1_slot51 = var15;
    var5 = var2.MediaTypes;
    var _closure1_slot52 = var5;
    var5 = var2.QUEUE_METRICS_INTERVAL_MS;
    var _closure1_slot53 = var5;
    var5 = var2.VideoToggleReason;
    var _closure1_slot54 = var5;
    var5 = var2.VIEWERSIDE_CLIP_KFI_MS;
    var _closure1_slot55 = var5;
    var5 = var2.SIMULCAST_HQ_QUALITY;
    var _closure1_slot56 = var5;
    var2 = var2.SIMULCAST_LQ_QUALITY;
    var _closure1_slot57 = var2;
    var2 = 26;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var5 = var2.prototype;
    var5 = Object.create(var5, {constructor: {value: var2}});
    var7 = 'MediaEngineStore';
    var34 = var5;
    var33 = var7;
    var2 = new var34[var2](var33, var32);
    var26 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot58 = var26;
    var _closure1_slot59 = var7;
    var2 = {'left': 1, 'right': 1};
    var _closure1_slot60 = var2;
    var2 = 27;
    var5 = var10[var2];
    var5 = var12.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.SECOND;
    var5 = var6 * var5;
    var _closure1_slot61 = var5;
    var6 = {'enabled': false, 'mode': 'arc', 'spatialBlend': 1, 'distance': 5, 'roomSize': 25, 'spread': 2, 'arcAngle': 20, 'gridColumns': 3, 'gridSpacing': 1, 'buckets': 10, 'listenerHeight': 0.15};
    var16 = false;
    var _closure1_slot62 = var6;
    var5 = var10[var2];
    var5 = var12.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.SECOND;
    var5 = var17 * var5;
    var _closure1_slot63 = var5;
    var5 = var10[var2];
    var5 = var12.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.SECOND;
    var17 = 30;
    var5 = var17 * var5;
    var _closure1_slot64 = var5;
    var2 = var10[var2];
    var2 = var12.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.MINUTE;
    var2 = var4 * var2;
    var _closure1_slot65 = var2;
    var5 = 'deep_noise_suppression';
    var _closure1_slot66 = var5;
    var4 = 'https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2';
    var _closure1_slot67 = var4;
    var2 = 'd828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f';
    var _closure1_slot68 = var2;
    var _closure1_slot69 = var13;
    var13 = {};
    var29 = var23.CUSTOM;
    var27 = {};
    var13[28] = var27;
    var29 = var23.VOICE_ISOLATION;
    var27 = {'modeOptions': null, 'echoCancellation': true, 'noiseSuppression': false, 'automaticGainControl': true, 'noiseCancellation': true, 'bypassSystemInputProcessing': true};
    var30 = {'autoThreshold': true, 'vadUseKrisp': true};
    var27['modeOptions'] = var30;
    var13[28] = var27;
    var27 = var23.STUDIO;
    var23 = {'mode': null, 'modeOptions': null, 'echoCancellation': false, 'noiseSuppression': false, 'automaticGainControl': false, 'noiseCancellation': false, 'bypassSystemInputProcessing': true};
    var28 = var28.VOICE_ACTIVITY;
    var23['mode'] = var28;
    var28 = {'threshold': 4294967212, 'autoThreshold': false, 'vadUseKrisp': false};
    var23['modeOptions'] = var28;
    var13[26] = var23;
    var _closure1_slot71 = var13;
    var13 = {'modeOptions': null, 'noiseCancellation': false, 'noiseSuppression': true};
    var23 = {};
    var23['vadUseKrisp'] = var16;
    var13['modeOptions'] = var23;
    var _closure1_slot72 = var13;
    var13 = 29;
    var23 = var10[var13];
    var27 = var9.bind(var1)(var23);
    var23 = var27.initializeMediaEngine;
    var13 = var10[var13];
    var28 = var9.bind(var1)(var13);
    var13 = var28.determineMediaEngine;
    var13 = var13.bind(var28)();
    var13 = var23.bind(var27)(var13);
    var _closure1_slot73 = var13;
    var23 = var26.enableNativeLogger;
    var23 = var23.bind(var26)(var18);
    var23 = {};
    var _closure1_slot78 = var23;
    var27 = var14.Set;
    var26 = var19.DEFAULT;
    var23 = new Array(1);
    var23[0] = var26;
    var26 = var27.prototype;
    var26 = Object.create(var26, {constructor: {value: var27}});
    var34 = var26;
    var33 = var23;
    var23 = new var34[var27](var33, var32);
    var23 = var23 instanceof Object ? var23 : var26;
    var _closure1_slot79 = var23;
    var23 = var13.supports;
    var22 = var22.AUTO_ENABLE;
    var22 = var23.bind(var13)(var22);
    var _closure1_slot80 = var22;
    var _closure1_slot81 = var16;
    var19 = var19.STREAM;
    var _closure1_slot82 = var19;
    var22 = var14.performance;
    var19 = var22.now;
    var19 = var19.bind(var22)();
    var _closure1_slot83 = var19;
    var19 = null;
    var _closure1_slot84 = var19;
    var _closure1_slot85 = var19;
    var22 = {};
    var23 = 'No Input Devices';
    var23 = var25.bind(var1)(var23);
    var22[23] = var23;
    var _closure1_slot86 = var22;
    var22 = {};
    var23 = 'No Output Devices';
    var23 = var25.bind(var1)(var23);
    var22[23] = var23;
    var _closure1_slot87 = var22;
    var22 = {};
    var23 = 'No Video Devices';
    var23 = var25.bind(var1)(var23);
    var22[23] = var23;
    var _closure1_slot88 = var22;
    var22 = var10[var17];
    var22 = var9.bind(var1)(var22);
    var22 = var22.Timeout;
    var23 = var22.prototype;
    var23 = Object.create(var23, {constructor: {value: var22}});
    var34 = var23;
    var22 = new var34[var22](var33);
    var22 = var22 instanceof Object ? var22 : var23;
    var _closure1_slot89 = var22;
    var _closure1_slot90 = var16;
    var _closure1_slot91 = var16;
    var _closure1_slot92 = var16;
    var _closure1_slot93 = var16;
    var _closure1_slot94 = var16;
    var _closure1_slot95 = var21;
    var _closure1_slot96 = var21;
    var _closure1_slot97 = var16;
    var _closure1_slot98 = var16;
    var21 = var10[var17];
    var21 = var9.bind(var1)(var21);
    var21 = var21.Timeout;
    var22 = var21.prototype;
    var22 = Object.create(var22, {constructor: {value: var21}});
    var34 = var22;
    var21 = new var34[var21](var33);
    var21 = var21 instanceof Object ? var21 : var22;
    var _closure1_slot99 = var21;
    var _closure1_slot100 = var16;
    var _closure1_slot101 = var16;
    var _closure1_slot102 = var16;
    var _closure1_slot103 = var16;
    var21 = var10[var17];
    var21 = var9.bind(var1)(var21);
    var21 = var21.Timeout;
    var22 = var21.prototype;
    var22 = Object.create(var22, {constructor: {value: var21}});
    var34 = var22;
    var21 = new var34[var21](var33);
    var21 = var21 instanceof Object ? var21 : var22;
    var _closure1_slot104 = var21;
    var _closure1_slot105 = var1;
    var _closure1_slot106 = var1;
    var _closure1_slot107 = var16;
    var _closure1_slot108 = var16;
    var _closure1_slot109 = var16;
    var _closure1_slot110 = var16;
    var _closure1_slot111 = var1;
    var _closure1_slot112 = var1;
    var _closure1_slot113 = var1;
    var21 = new Array(0);
    var _closure1_slot114 = var21;
    var _closure1_slot115 = var16;
    var _closure1_slot116 = var19;
    var _closure1_slot117 = var16;
    var _closure1_slot118 = var16;
    var _closure1_slot119 = var16;
    var21 = {};
    var _closure1_slot120 = var21;
    var _closure1_slot121 = var19;
    var _closure1_slot122 = var19;
    var _closure1_slot123 = var16;
    var21 = 31;
    var22 = var10[var21];
    var25 = var12.bind(var1)(var22);
    var24 = var25.hasPermission;
    var23 = var20.AUDIO;
    var22 = {};
    var22['showAuthorizationError'] = var16;
    var22 = var24.bind(var25)(var23, var22);
    var21 = var10[var21];
    var23 = var12.bind(var1)(var21);
    var22 = var23.hasPermission;
    var21 = var20.CAMERA;
    var20 = {};
    var20['showAuthorizationError'] = var16;
    var20 = var22.bind(var23)(var21, var20);
    var20 = var14.Set;
    var21 = var20.prototype;
    var21 = Object.create(var21, {constructor: {value: var20}});
    var34 = var21;
    var20 = new var34[var20](var33);
    var20 = var20 instanceof Object ? var20 : var21;
    var _closure1_slot124 = var20;
    var _closure1_slot125 = var18;
    var20 = var14.Set;
    var21 = var20.prototype;
    var21 = Object.create(var21, {constructor: {value: var20}});
    var34 = var21;
    var20 = new var34[var20](var33);
    var20 = var20 instanceof Object ? var20 : var21;
    var _closure1_slot126 = var20;
    var _closure1_slot127 = var1;
    var20 = {};
    var _closure1_slot128 = var20;
    var _closure1_slot129 = var19;
    var _closure1_slot130 = var19;
    var _closure1_slot131 = var18;
    var _closure1_slot132 = var16;
    var17 = var10[var17];
    var17 = var9.bind(var1)(var17);
    var17 = var17.Timeout;
    var18 = var17.prototype;
    var18 = Object.create(var18, {constructor: {value: var17}});
    var34 = var18;
    var17 = new var34[var17](var33);
    var17 = var17 instanceof Object ? var17 : var18;
    var _closure1_slot133 = var17;
    var _closure1_slot134 = var16;
    var _closure1_slot135 = var16;
    var _closure1_slot136 = var16;
    var _closure1_slot137 = var16;
    var16 = {};
    var _closure1_slot138 = var16;
    var16 = var14.Set;
    var17 = var15.KRISP_INIT_ERROR;
    var14 = new Array(10);
    var14[0] = var17;
    var17 = var15.KRISP_INIT_ERROR_NATIVE;
    var14[1] = var17;
    var17 = var15.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED;
    var14[2] = var17;
    var17 = var15.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED;
    var14[3] = var17;
    var17 = var15.KRISP_INIT_ERROR_UNSIGNED;
    var14[4] = var17;
    var17 = var15.KRISP_INIT_ERROR_GLOBAL_INIT;
    var14[5] = var17;
    var17 = var15.KRISP_INIT_ERROR_WEIGHT_8K;
    var14[6] = var17;
    var17 = var15.KRISP_INIT_ERROR_WEIGHT_16K;
    var14[7] = var17;
    var17 = var15.KRISP_INIT_ERROR_WEIGHT_32K;
    var14[8] = var17;
    var15 = var15.KRISP_INIT_ERROR_WEIGHT_VAD;
    var14[9] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {constructor: {value: var16}});
    var34 = var15;
    var33 = var14;
    var14 = new var34[var16](var33, var32);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot139 = var14;
    var14 = 84;
    var14 = var10[var14];
    var14 = var12.bind(var1)(var14);
    var15 = var14.Store;
    var14 = function(arg1) {
        var4 = function MediaEngineStore() {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot140;
                var1 = var1.bind(var3)();
                if(var1) { _fun0058_ip = 362; continue _fun0058 }
case 404:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0058_ip = 96; continue _fun0058;
case 362:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 96:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var14 = this;
                var4 = _closure1_slot159;
                var1 = undefined;
                var4 = var4.bind(var1)();
                var4 = function loadSettings() {
                    _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var6 = 63;
                        var3 = var1[var6];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.Storage;
                        var3 = var4.get;
                        var7 = 'audio';
                        var13 = var3.bind(var4)(var7);
                        var4 = null;
                        if(!(var4 != var13)) { _fun0060_ip = 281; continue _fun0060 }
case 404:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var8 = var3[var6];
                        var8 = var5.bind(var1)(var8);
                        var11 = var8.Storage;
                        var10 = var11.set;
                        var9 = _closure1_slot59;
                        var8 = {};
                        var12 = _closure1_slot50;
                        var12 = var12.DEFAULT;
                        var8[11] = var13;
                        var8 = var10.bind(var11)(var9, var8);
                        var3 = var3[var6];
                        var3 = var5.bind(var1)(var3);
                        var5 = var3.Storage;
                        var3 = var5.remove;
                        var3 = var3.bind(var5)(var7);
case 281:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.Storage;
                        var5 = var6.get;
                        var3 = _closure1_slot59;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 == var3)) { _fun0060_ip = 50; continue _fun0060 }
case 304:
                        var3 = {};
case 50:
                        _closure1_slot78 = var3;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 37;
                        var3 = var5[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.each;
                        var4 = _closure1_slot78;
                        var3 = function(arg1) {
                            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                                var3 = arg1;
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 37;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var5.bind(var1)(var2);
                                var5 = var6.defaultsDeep;
                                var2 = _closure1_slot143;
                                var2 = var2.bind(var1)();
                                var2 = var5.bind(var6)(var3, var2);
                                var2 = var3.modeOptions;
                                var5 = null;
                                var2 = var5 != var2;
                                if(!var2) { _fun0061_ip = 13; continue _fun0061 }
case 309:
                                var6 = var3.modeOptions;
                                var6 = var6.shortcut;
                                var7 = 'string';
                                var6 = typeof var6;
                                var2 = var7 === var6;
case 13:
                                if(!var2) { _fun0061_ip = 75; continue _fun0061 }
case 322:
                                var6 = var3.modeOptions;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var2 = 64;
                                var2 = var8[var2];
                                var8 = var7.bind(var1)(var2);
                                var7 = var8.toCombo;
                                var2 = var3.modeOptions;
                                var2 = var2.shortcut;
                                var2 = var7.bind(var8)(var2);
                                var6['shortcut'] = var2;
case 75:
                                var2 = var3.modeOptions;
                                var2 = var5 != var2;
                                if(!var2) { _fun0061_ip = 405; continue _fun0061 }
case 406:
                                var7 = var3.vadUseKrispSettingVersion;
                                var6 = 4;
                                var2 = var6 !== var7;
case 405:
                                if(!var2) { _fun0061_ip = 112; continue _fun0061 }
case 304:
                                var2 = 4;
                                var3['vadUseKrispSettingVersion'] = var2;
                                var6 = var3.modeOptions;
                                var2 = true;
                                var6['vadUseKrisp'] = var2;
case 112:
                                var2 = var3.qosMigrated;
                                if(var2) { _fun0061_ip = 347; continue _fun0061 }
case 26:
                                var2 = true;
                                var3['qosMigrated'] = var2;
                                var2 = false;
                                var3['qos'] = var2;
case 347:
                                var2 = var3.vadThrehsoldMigrated;
                                if(var2) { _fun0061_ip = 285; continue _fun0061 }
case 407:
                                var2 = true;
                                var3['vadThrehsoldMigrated'] = var2;
                                var2 = var3.modeOptions;
                                var6 = var5 == var2;
                                var5 = undefined;
                                if(var6) { _fun0061_ip = 408; continue _fun0061 }
case 392:
                                var5 = var2.threshold;
case 408:
                                var2 = -40;
                                if(!(var2 === var5)) { _fun0061_ip = 285; continue _fun0061 }
case 409:
                                var5 = var3.modeOptions;
                                var2 = -60;
                                var5['threshold'] = var2;
case 285:
                                var6 = _closure1_slot73;
                                var5 = var6.supports;
                                var2 = _closure1_slot49;
                                var2 = var2.SIDECHAIN_COMPRESSION;
                                var2 = var5.bind(var6)(var2);
                                if(!var2) { _fun0061_ip = 340; continue _fun0061 }
case 410:
                                var6 = var3.sidechainCompressionSettingVersion;
                                var5 = 1;
                                var2 = var6 < var5;
case 340:
                                if(!var2) { _fun0061_ip = 411; continue _fun0061 }
case 339:
                                var2 = 1;
                                var3['sidechainCompressionSettingVersion'] = var2;
                                var2 = true;
                                var3['sidechainCompression'] = var2;
case 411:
                                var5 = var3.audioMixerSettingsVersion;
                                var2 = 1;
                                if(!(var5 < var2)) { _fun0061_ip = 412; continue _fun0061 }
case 287:
                                var3['audioMixerSettingsVersion'] = var2;
                                var5 = {};
                                var9 = _closure1_slot62;
                                var10 = var5;
                                var6 = copyDataProperties(var10, var9);
                                var3['audioMixerSettings'] = var5;
case 412:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var4 = 28;
                                var4 = var6[var4];
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.isWeb;
                                var4 = var4.bind(var5)();
                                if(var4) { _fun0061_ip = 413; continue _fun0061 }
case 414:
                                var4 = var3.ncUseKrispSettingVersion;
                                if(!(var2 !== var4)) { _fun0061_ip = 415; continue _fun0061 }
case 416:
                                var3['ncUseKrispSettingVersion'] = var2;
                                var4 = false;
                                var3['noiseSuppression'] = var4;
                                var4 = true;
                                var3['noiseCancellation'] = var4;
                                _fun0061_ip = 415; continue _fun0061;
case 413:
                                var4 = var3.ncUseKrispjsSettingVersion;
                                if(!(var2 !== var4)) { _fun0061_ip = 415; continue _fun0061 }
case 417:
                                var3['ncUseKrispjsSettingVersion'] = var2;
                                var2 = false;
                                var3['noiseSuppression'] = var2;
                                var2 = true;
                                var3['noiseCancellation'] = var2;
case 415:
                                return var1;
                            }
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        var2 = _closure1_slot165;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var4 = var4.bind(var1)();
                var4 = _closure1_slot184;
                var4 = var4.bind(var1)();
                var4 = _closure1_slot186;
                var4 = var4.bind(var1)();
                var4 = _closure1_slot178;
                var4 = var4.bind(var1)();
                var4 = function maybeStartPollQueueMetrics() {
                    _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var6 = 28;
                        var4 = var1[var6];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isDesktop;
                        var4 = var4.bind(var5)();
                        if(!var4) { _fun0062_ip = 17; continue _fun0062 }
case 167:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.isPlatformEmbedded;
                        if(!var4) { _fun0062_ip = 17; continue _fun0062 }
case 43:
                        var4 = _closure1_slot137;
                        if(var4) { _fun0062_ip = 17; continue _fun0062 }
case 418:
                        var4 = true;
                        _closure1_slot137 = var4;
                        var4 = function() {
                            var4 = _closure1_slot10;
                            var3 = undefined;
                            var2 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0063_ip = 419; continue _fun0063 }
case 41:
                                        var5 = global;
                                        var4 = var5.Promise;
                                        var2 = var4.prototype;
                                        var3 = Object.create(var2, {constructor: {value: var4}});
                                        var11 = function(arg1) {
                                            var1 = arg1;
                                            var _closure8_slot0 = var1;
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot3;
                                            var1 = 66;
                                            var3 = var3[var1];
                                            var1 = undefined;
                                            var4 = var4.bind(var1)(var3);
                                            var3 = var4.pollQueueMetrics;
                                            var2 = function(arg1) {
                                                var3 = _closure8_slot0;
                                                var1 = undefined;
                                                var2 = arg1;
                                                var2 = var3.bind(var1)(var2);
                                                return var1;
                                            };
                                            var2 = var3.bind(var4)(var2);
                                            return var1;
                                        };
                                        var12 = var3;
                                        var2 = new var12[var4](var11, var10);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        SaveGenerator(address=49);
case 90:
                                        return var2;
case 9:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                        if(var3) { _fun0063_ip = 365; continue _fun0063 }
case 8:
                                        var3 = _closure1_slot53;
                                        var2['periodMs'] = var3;
                                        var6 = _closure1_slot189;
                                        var3 = undefined;
                                        var9 = var6.bind(var3)(var2);
                                        var6 = null;
                                        if(!(var6 !== var9)) { _fun0063_ip = 308; continue _fun0063 }
case 63:
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot3;
                                        var6 = 46;
                                        var6 = var8[var6];
                                        var8 = var7.bind(var3)(var6);
                                        var7 = var8.track;
                                        var6 = _closure1_slot23;
                                        var6 = var6.VOICE_QUEUE_METRICS;
                                        var6 = var7.bind(var8)(var6, var9);
case 308:
                                        var6 = var5.setTimeout;
                                        var5 = _closure4_slot0;
                                        var4 = _closure1_slot53;
                                        var4 = var6.bind(var3)(var5, var4);
                                        return var3;
case 365:
                                        return var2;
case 419:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var2 = var4.bind(var3)(var2);
                            var _closure5_slot0 = var2;
                            var1 = function pollMetrics() {
                                var1 = undefined;
                                var4 = _closure5_slot0;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var4 = var4.bind(var1)();
                        var _closure4_slot0 = var4;
                        var3 = global;
                        var3 = var3.setTimeout;
                        var2 = _closure1_slot53;
                        var2 = var3.bind(var1)(var4, var2);
case 17:
                        return var1;
                    }
                };
                var4 = var4.bind(var1)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var6 = 28;
                var4 = var4[var6];
                var5 = var5.bind(var1)(var4);
                var4 = var5.isWindows;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0059_ip = 97; continue _fun0059 }
case 323:
                var7 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var4 = var5.isPlatformEmbedded;
case 97:
                if(!var4) { _fun0059_ip = 420; continue _fun0059 }
case 67:
                var4 = function checkH264MfDecodeAvailability() {
                    _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                        var4 = _closure1_slot84;
                        var3 = null;
                        if(!(var3 === var4)) { _fun0064_ip = 187; continue _fun0064 }
case 52:
                        var3 = _closure1_slot73;
                        var2 = var3.getCodecSurvey;
                        var4 = var2.bind(var3)();
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                                var4 = arg1;
                                var1 = undefined;
                                var3 = undefined;
case 421: // try_start_0
                                var2 = global;
                                var6 = var2.JSON;
                                var5 = var6.parse;
                                var4 = var5.bind(var6)(var4);
                                var3 = var4;
                                var5 = null;
                                if(!(var5 != var4)) { _fun0065_ip = 61; continue _fun0065 }
case 422:
                                var4 = var3;
                                var4 = var4.available_video_decoders;
                                if(!(var5 != var4)) { _fun0065_ip = 61; continue _fun0065 }
case 103:
                                var5 = var3.available_video_decoders;
                                var4 = var5.some;
                                var3 = function(arg1) {
                                    var2 = 'MediaFoundation H.264';
                                    var1 = arg1;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var4 = var4.bind(var5)(var3);
                                _closure1_slot84 = var4;
case 346: // try_end0
                                _fun0065_ip = 423; continue _fun0065;
case 61: // try_start_1
                                var4 = var2.Error;
                                var2 = var4.prototype;
                                var3 = Object.create(var2, {constructor: {value: var4}});
                                var8 = 'decoder survey is not available';
                                var9 = var3;
                                var2 = new var9[var4](var8, var7);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
case 311: // try_end1 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=5);
                                var5 = _closure1_slot58;
                                var4 = var5.error;
                                var2 = 'Failed to parse codec survey';
                                var2 = var4.bind(var5)(var2, var6);
                                var2 = false;
                                _closure1_slot84 = var2;
case 423:
                                return var1;
                            }
                        };
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.catch;
                        var2 = function(arg1) {
                            var5 = _closure1_slot58;
                            var4 = var5.error;
                            var3 = 'Failed to get codec survey';
                            var1 = arg1;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = false;
                            _closure1_slot84 = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.finally;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 47;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'MEDIA_ENGINE_MF_AVAILABILITY_CHECKED';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 187:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var4.bind(var1)();
case 420:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var6];
                var5 = var5.bind(var1)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0059_ip = 77; continue _fun0059 }
case 19:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 80;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var6 = var5.getSystemVersion;
                var5 = null;
                var4 = var5 != var6;
case 77:
                if(!var4) { _fun0059_ip = 27; continue _fun0059 }
case 110:
                var5 = global;
                var7 = var5.parseInt;
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 80;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.getSystemVersion;
                var6 = var5.bind(var6)();
                var5 = 10;
                var6 = var7.bind(var1)(var6, var5);
                var5 = 30;
                var4 = var6 >= var5;
case 27:
                if(!var4) { _fun0059_ip = 408; continue _fun0059 }
case 424:
                var3 = function checkAndroidAV1HwDecodeAvailability() {
                    _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                        var4 = _closure1_slot85;
                        var3 = null;
                        if(!(var3 === var4)) { _fun0066_ip = 59; continue _fun0066 }
case 52:
                        var3 = _closure1_slot73;
                        var2 = var3.getCodecSurvey;
                        var4 = var2.bind(var3)();
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                                var4 = arg1;
                                var1 = undefined;
                                var3 = undefined;
case 421: // try_start_0
                                var2 = global;
                                var6 = var2.JSON;
                                var5 = var6.parse;
                                var4 = var5.bind(var6)(var4);
                                var3 = var4;
                                var5 = null;
                                if(!(var5 != var4)) { _fun0067_ip = 357; continue _fun0067 }
case 422:
                                var4 = var3;
                                var4 = var4.available_video_decoders;
                                if(!(var5 != var4)) { _fun0067_ip = 357; continue _fun0067 }
case 103:
                                var5 = var3.available_video_decoders;
                                var4 = var5.some;
                                var3 = function(arg1) {
                                    _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                                        var4 = arg1;
                                        var2 = var4.startsWith;
                                        var1 = 'video/av01';
                                        var1 = var2.bind(var4)(var1);
                                        if(!var1) { _fun0068_ip = 167; continue _fun0068 }
case 35:
                                        var3 = var4.endsWith;
                                        var2 = '(HW)';
                                        var1 = var3.bind(var4)(var2);
case 167:
                                        return var1;
                                    }
                                };
                                var4 = var4.bind(var5)(var3);
                                _closure1_slot85 = var4;
                                var6 = _closure1_slot58;
                                var5 = var6.info;
                                var4 = _closure1_slot85;
                                var3 = 'AV1 decode detection complete. presence = ';
                                var3 = var5.bind(var6)(var3, var4);
case 96: // try_end0
                                _fun0067_ip = 304; continue _fun0067;
case 357: // try_start_1
                                var4 = var2.Error;
                                var2 = var4.prototype;
                                var3 = Object.create(var2, {constructor: {value: var4}});
                                var8 = 'decoder survey is not available';
                                var9 = var3;
                                var2 = new var9[var4](var8, var7);
                                var2 = var2 instanceof Object ? var2 : var3;
                                throw var2;
case 69: // try_end1 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=5);
                                var5 = _closure1_slot58;
                                var4 = var5.error;
                                var2 = 'Failed to parse codec survey';
                                var2 = var4.bind(var5)(var2, var6);
                                var2 = false;
                                _closure1_slot85 = var2;
case 304:
                                return var1;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function(arg1) {
                            var5 = _closure1_slot58;
                            var4 = var5.error;
                            var3 = 'Failed to get codec survey';
                            var1 = arg1;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = false;
                            _closure1_slot85 = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var3.bind(var1)();
case 408:
                var3 = {};
                var4 = _closure1_slot49;
                var5 = var4.VIDEO;
                var7 = _closure1_slot73;
                var6 = var7.supports;
                var4 = _closure1_slot49;
                var4 = var4.VIDEO;
                var4 = var6.bind(var7)(var4);
                var3[4] = var4;
                var4 = _closure1_slot49;
                var5 = var4.DESKTOP_CAPTURE;
                var7 = _closure1_slot73;
                var6 = var7.supports;
                var4 = _closure1_slot49;
                var4 = var4.DESKTOP_CAPTURE;
                var4 = var6.bind(var7)(var4);
                var3[4] = var4;
                var4 = _closure1_slot49;
                var5 = var4.HYBRID_VIDEO;
                var7 = _closure1_slot73;
                var6 = var7.supports;
                var4 = _closure1_slot49;
                var4 = var4.HYBRID_VIDEO;
                var4 = var6.bind(var7)(var4);
                var3[4] = var4;
                _closure1_slot128 = var3;
                var13 = var14.waitFor;
                var25 = _closure1_slot16;
                var24 = _closure1_slot17;
                var23 = _closure1_slot18;
                var22 = _closure1_slot19;
                var21 = _closure1_slot11;
                var20 = _closure1_slot12;
                var19 = _closure1_slot20;
                var18 = _closure1_slot13;
                var17 = _closure1_slot15;
                var16 = _closure1_slot21;
                var15 = _closure1_slot22;
                var26 = var14;
                var2 = var26[var13](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(119);
        var1[0] = var5;
        var5 = {};
        var7 = 'supports';
        var5['key'] = var7;
        var7 = function supports(arg1) {
            var3 = _closure1_slot73;
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
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot128;
                var1 = var1[var4];
                if(var1) { _fun0069_ip = 89; continue _fun0069 }
case 425:
                var3 = _closure1_slot73;
                var2 = var3.supports;
                var1 = var2.bind(var3)(var4);
case 89:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSupported';
        var5['key'] = var7;
        var7 = function isSupported() {
            var2 = _closure1_slot73;
            var1 = var2.supported;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isNoiseSuppressionSupported';
        var5['key'] = var7;
        var7 = function isNoiseSuppressionSupported() {
            var3 = _closure1_slot73;
            var2 = var3.supports;
            var1 = _closure1_slot49;
            var1 = var1.NOISE_SUPPRESSION;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isNoiseCancellationSupported';
        var5['key'] = var7;
        var7 = function isNoiseCancellationSupported() {
            var2 = _closure1_slot182;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isNoiseCancellationError';
        var5['key'] = var7;
        var7 = function isNoiseCancellationError() {
            var1 = _closure1_slot117;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isAutomaticGainControlSupported';
        var5['key'] = var7;
        var7 = function isAutomaticGainControlSupported() {
            var3 = _closure1_slot73;
            var2 = var3.supports;
            var1 = _closure1_slot49;
            var1 = var1.AUTOMATIC_GAIN_CONTROL;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'shouldOfferManualSubsystemSelection';
        var5['key'] = var7;
        var7 = function shouldOfferManualSubsystemSelection() {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var2 = _closure1_slot163;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = !var1;
                if(!var1) { _fun0070_ip = 62; continue _fun0070 }
case 100:
                var5 = _closure1_slot73;
                var4 = var5.supports;
                var2 = _closure1_slot49;
                var2 = var2.LEGACY_AUDIO_SUBSYSTEM;
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0070_ip = 5; continue _fun0070 }
case 90:
                var5 = _closure1_slot73;
                var4 = var5.supports;
                var3 = _closure1_slot49;
                var3 = var3.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                var2 = var4.bind(var5)(var3);
case 5:
                var1 = var2;
case 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'showBypassSystemInputProcessing';
        var5['key'] = var7;
        var7 = function showBypassSystemInputProcessing() {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var1 = _closure1_slot49;
                var1 = var1.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0071_ip = 53; continue _fun0071 }
case 313:
                var3 = _closure1_slot73;
                var2 = var3.getAudioSubsystem;
                var3 = var2.bind(var3)();
                var2 = 'experimental';
                var1 = var2 === var3;
case 53:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isAdvancedVoiceActivitySupported';
        var5['key'] = var7;
        var7 = function isAdvancedVoiceActivitySupported() {
            var2 = _closure1_slot182;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isAecDumpSupported';
        var5['key'] = var7;
        var7 = function isAecDumpSupported() {
            var3 = _closure1_slot73;
            var2 = var3.supports;
            var1 = _closure1_slot49;
            var1 = var1.AEC_DUMP;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isSimulcastSupported';
        var5['key'] = var7;
        var7 = function isSimulcastSupported() {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var1 = _closure1_slot49;
                var1 = var1.VIDEO;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0072_ip = 32; continue _fun0072 }
case 313:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var2 = _closure1_slot49;
                var2 = var2.SIMULCAST;
                var1 = var3.bind(var4)(var2);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getAecDump';
        var5['key'] = var7;
        var7 = function getAecDump() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.aecDumpEnabled;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getMediaEngine';
        var5['key'] = var7;
        var7 = function getMediaEngine() {
            var1 = _closure1_slot73;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getVideoComponent';
        var5['key'] = var7;
        var7 = function getVideoComponent() {
            var1 = _closure1_slot73;
            var1 = var1.Video;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getCameraComponent';
        var5['key'] = var7;
        var7 = function getCameraComponent() {
            var1 = _closure1_slot73;
            var1 = var1.Camera;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getKrispSuppressionLevel';
        var5['key'] = var7;
        var7 = function getKrispSuppressionLevel() {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var3 = _closure1_slot112;
                var1 = null;
                var3 = var1 != var3;
                var1 = 100;
                if(!var3) { _fun0073_ip = 35; continue _fun0073 }
case 100:
                var1 = _closure1_slot112;
case 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getKrispEnableStats';
        var5['key'] = var7;
        var7 = function getKrispEnableStats() {
            var1 = _closure1_slot115;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isEnabled';
        var5['key'] = var7;
        var7 = function isEnabled() {
            var1 = _closure1_slot80;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isMute';
        var5['key'] = var7;
        var7 = function isMute() {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var2 = this;
                var1 = var2.isSelfMute;
                var1 = var1.bind(var2)();
                if(var1) { _fun0074_ip = 35; continue _fun0074 }
case 268:
                var1 = _closure1_slot90;
case 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isDeaf';
        var5['key'] = var7;
        var7 = function isDeaf() {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var2 = this;
                var1 = var2.isSelfDeaf;
                var1 = var1.bind(var2)();
                if(var1) { _fun0075_ip = 35; continue _fun0075 }
case 268:
                var1 = _closure1_slot93;
case 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getAudioMixerSettings';
        var5['key'] = var7;
        var7 = function getAudioMixerSettings() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.audioMixerSettings;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'hasContext';
        var5['key'] = var7;
        var7 = function hasContext(arg1) {
            var2 = _closure1_slot78;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'isSelfMutedTemporarily';
        var5['key'] = var7;
        var7 = function isSelfMutedTemporarily() {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0076_ip = 55; continue _fun0076 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot50;
                var1 = var1.DEFAULT;
                var1 = var3 === var1;
                if(!var1) { _fun0076_ip = 6; continue _fun0076 }
case 426:
                var1 = _closure1_slot91;
case 6:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'isSelfMute';
        var5['key'] = var7;
        var7 = function isSelfMute() {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var4 = arguments[0];
                var3 = this;
                var7 = undefined;
                if(!(var4 === var7)) { _fun0077_ip = 312; continue _fun0077 }
case 101:
                var1 = _closure1_slot50;
                var4 = var1.DEFAULT;
case 312:
                var1 = var3.isEnabled;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if(var1) { _fun0077_ip = 427; continue _fun0077 }
case 91:
                var2 = _closure1_slot148;
                var2 = var2.bind(var7)(var4);
                var1 = var2.mute;
case 427:
                if(var1) { _fun0077_ip = 95; continue _fun0077 }
case 349:
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var5 = 31;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.didHavePermission;
                var2 = _closure1_slot38;
                var2 = var2.AUDIO;
                var2 = var5.bind(var6)(var2);
                var1 = !var2;
case 95:
                if(var1) { _fun0077_ip = 356; continue _fun0077 }
case 98:
                var2 = var3.isSelfDeaf;
                var1 = var2.bind(var3)(var4);
case 356:
                if(var1) { _fun0077_ip = 428; continue _fun0077 }
case 308:
                var2 = _closure1_slot50;
                var2 = var2.DEFAULT;
                var2 = var4 === var2;
                if(!var2) { _fun0077_ip = 271; continue _fun0077 }
case 48:
                var2 = _closure1_slot92;
case 271:
                var1 = var2;
case 428:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'shouldSkipMuteUnmuteSound';
        var5['key'] = var7;
        var7 = function shouldSkipMuteUnmuteSound() {
            var1 = _closure1_slot97;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'notifyMuteUnmuteSoundWasSkipped';
        var5['key'] = var7;
        var7 = function notifyMuteUnmuteSoundWasSkipped() {
            var1 = false;
            _closure1_slot97 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'isHardwareMute';
        var5['key'] = var7;
        var7 = function isHardwareMute() {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var5 = arguments[0];
                var6 = this;
                var4 = undefined;
                if(!(var5 === var4)) { _fun0078_ip = 312; continue _fun0078 }
case 101:
                var1 = _closure1_slot50;
                var5 = var1.DEFAULT;
case 312:
                var3 = _closure1_slot132;
                if(!var3) { _fun0078_ip = 8; continue _fun0078 }
case 422:
                var1 = var6.getSystemMicrophoneMode;
                var7 = var1.bind(var6)();
                var1 = 'voice_isolation';
                var3 = var1 !== var7;
case 8:
                if(!var3) { _fun0078_ip = 13; continue _fun0078 }
case 57:
                var1 = _closure1_slot148;
                var1 = var1.bind(var4)(var5);
                var4 = var1.mode;
                var1 = _closure1_slot25;
                var1 = var1.VOICE_ACTIVITY;
                var3 = var4 === var1;
case 13:
                var1 = var6.isMute;
                var1 = var1.bind(var6)();
                var1 = !var1;
                if(!var1) { _fun0078_ip = 97; continue _fun0078 }
case 93:
                var4 = var6.isSelfMutedTemporarily;
                var4 = var4.bind(var6)(var5);
                var1 = !var4;
case 97:
                if(!var1) { _fun0078_ip = 419; continue _fun0078 }
case 67:
                var5 = _closure1_slot18;
                var4 = var5.isHardwareMute;
                var2 = var6.getInputDeviceId;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0078_ip = 365; continue _fun0078 }
case 429:
                var2 = var3;
case 365:
                var1 = var2;
case 419:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'isHardwareMuteNoticeEnabled';
        var5['key'] = var7;
        var7 = function isHardwareMuteNoticeEnabled() {
            var1 = _closure1_slot131;
            return var1;
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'isSelfDeaf';
        var5['key'] = var7;
        var7 = function isSelfDeaf() {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var4 = arguments[0];
                var2 = this;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0079_ip = 312; continue _fun0079 }
case 101:
                var1 = _closure1_slot50;
                var4 = var1.DEFAULT;
case 312:
                var1 = var2.isSupported;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(var1) { _fun0079_ip = 427; continue _fun0079 }
case 91:
                var2 = _closure1_slot148;
                var2 = var2.bind(var3)(var4);
                var1 = var2.deaf;
case 427:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'isVideoEnabled';
        var5['key'] = var7;
        var7 = function isVideoEnabled() {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var1 = _closure1_slot94;
                if(!var1) { _fun0080_ip = 36; continue _fun0080 }
case 41:
                var1 = _closure1_slot101;
case 36:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'isVideoAvailable';
        var5['key'] = var7;
        var7 = function isVideoAvailable() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot88;
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
        var1[32] = var5;
        var5 = {};
        var7 = 'hasVideoDevice';
        var5['key'] = var7;
        var7 = function hasVideoDevice() {
            var1 = _closure1_slot101;
            return var1;
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'isScreenSharing';
        var5['key'] = var7;
        var7 = function isScreenSharing() {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0081_ip = 55; continue _fun0081 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.STREAM;
case 55:
                var1 = _closure1_slot82;
                var1 = var1 === var3;
                if(!var1) { _fun0081_ip = 6; continue _fun0081 }
case 399:
                var3 = _closure1_slot75;
                var2 = null;
                var1 = var2 != var3;
case 6:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'isSoundSharing';
        var5['key'] = var7;
        var7 = function isSoundSharing() {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var4 = arguments[0];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0082_ip = 55; continue _fun0082 }
case 56:
                var1 = _closure1_slot50;
                var4 = var1.STREAM;
case 55:
                var1 = _closure1_slot82;
                var1 = var1 === var4;
                if(!var1) { _fun0082_ip = 6; continue _fun0082 }
case 399:
                var5 = _closure1_slot75;
                var4 = null;
                var1 = var4 != var5;
case 6:
                if(!var1) { _fun0082_ip = 39; continue _fun0082 }
case 9:
                var2 = _closure1_slot75;
                var4 = var2.desktopSource;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0082_ip = 187; continue _fun0082 }
case 3:
                var3 = var4.soundshareId;
case 187:
                var1 = var2 != var3;
case 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'isLocalMute';
        var5['key'] = var7;
        var7 = function isLocalMute(arg1) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var3 = arg1;
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0083_ip = 312; continue _fun0083 }
case 101:
                var1 = _closure1_slot50;
                var5 = var1.DEFAULT;
case 312:
                var6 = _closure1_slot16;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                var1 = var3 !== var1;
                if(!var1) { _fun0083_ip = 187; continue _fun0083 }
case 9:
                var2 = _closure1_slot148;
                var2 = var2.bind(var4)(var5);
                var2 = var2.localMutes;
                var2 = var2[var3];
                if(var2) { _fun0083_ip = 418; continue _fun0083 }
case 298:
                var2 = false;
case 418:
                var1 = var2;
case 187:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'supportsDisableLocalVideo';
        var5['key'] = var7;
        var7 = function supportsDisableLocalVideo() {
            var3 = _closure1_slot73;
            var2 = var3.supports;
            var1 = _closure1_slot49;
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
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var3 = arguments[1];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0084_ip = 55; continue _fun0084 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot148;
                var1 = var1.bind(var2)(var3);
                var2 = var1.disabledLocalVideos;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0084_ip = 427; continue _fun0084 }
case 32:
                var1 = var2;
case 427:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[38] = var5;
        var5 = {};
        var7 = 'getVideoToggleState';
        var5['key'] = var7;
        var7 = function getVideoToggleState(arg1) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0085_ip = 55; continue _fun0085 }
case 56:
                var1 = _closure1_slot50;
                var4 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot148;
                var1 = var1.bind(var3)(var4);
                var3 = var1.videoToggleStateMap;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0085_ip = 309; continue _fun0085 }
case 53:
                var2 = _closure1_slot28;
                var1 = var2.NONE;
case 309:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[39] = var5;
        var5 = {};
        var7 = 'isLocalVideoAutoDisabled';
        var5['key'] = var7;
        var7 = function isLocalVideoAutoDisabled(arg1) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var3 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0086_ip = 55; continue _fun0086 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot50;
                var1 = var1.DEFAULT;
                var1 = var3 === var1;
                if(!var1) { _fun0086_ip = 427; continue _fun0086 }
case 426:
                var4 = _closure1_slot124;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 427:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[40] = var5;
        var5 = {};
        var7 = 'isAnyLocalVideoAutoDisabled';
        var5['key'] = var7;
        var7 = function isAnyLocalVideoAutoDisabled() {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0087_ip = 55; continue _fun0087 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot50;
                var1 = var1.DEFAULT;
                var1 = var3 === var1;
                if(!var1) { _fun0087_ip = 169; continue _fun0087 }
case 426:
                var2 = _closure1_slot124;
                var3 = var2.size;
                var2 = 0;
                var1 = var3 > var2;
case 169:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[41] = var5;
        var5 = {};
        var7 = 'isMediaFilterSettingLoading';
        var5['key'] = var7;
        var7 = function isMediaFilterSettingLoading() {
            var1 = _closure1_slot118;
            return var1;
        };
        var5['value'] = var7;
        var1[42] = var5;
        var5 = {};
        var7 = 'isNativeAudioPermissionReady';
        var5['key'] = var7;
        var7 = function isNativeAudioPermissionReady() {
            var1 = _closure1_slot123;
            return var1;
        };
        var5['value'] = var7;
        var1[43] = var5;
        var5 = {};
        var7 = 'getGoLiveSource';
        var5['key'] = var7;
        var7 = function getGoLiveSource() {
            var1 = _closure1_slot75;
            return var1;
        };
        var5['value'] = var7;
        var1[44] = var5;
        var5 = {};
        var7 = 'getGoLiveContext';
        var5['key'] = var7;
        var7 = function getGoLiveContext() {
            var1 = _closure1_slot82;
            return var1;
        };
        var5['value'] = var7;
        var1[45] = var5;
        var5 = {};
        var7 = 'getLastAudioInputDeviceChangeTimestamp';
        var5['key'] = var7;
        var7 = function getLastAudioInputDeviceChangeTimestamp() {
            var1 = _closure1_slot83;
            return var1;
        };
        var5['value'] = var7;
        var1[46] = var5;
        var5 = {};
        var7 = 'isH264MfDecodeAvailable';
        var5['key'] = var7;
        var7 = function isH264MfDecodeAvailable() {
            var1 = _closure1_slot84;
            return var1;
        };
        var5['value'] = var7;
        var1[47] = var5;
        var5 = {};
        var7 = 'getLocalPan';
        var5['key'] = var7;
        var7 = function getLocalPan(arg1) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0088_ip = 55; continue _fun0088 }
case 56:
                var1 = _closure1_slot50;
                var4 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot148;
                var1 = var1.bind(var3)(var4);
                var3 = var1.localPans;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0088_ip = 169; continue _fun0088 }
case 53:
                var1 = _closure1_slot60;
case 169:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[48] = var5;
        var5 = {};
        var7 = 'getLocalVolume';
        var5['key'] = var7;
        var7 = function getLocalVolume(arg1) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0089_ip = 55; continue _fun0089 }
case 56:
                var1 = _closure1_slot50;
                var4 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot50;
                var1 = var1.STREAM;
                if(!(var4 !== var1)) { _fun0089_ip = 354; continue _fun0089 }
case 58:
                var1 = _closure1_slot44;
                _fun0089_ip = 9; continue _fun0089;
case 354:
                var1 = _closure1_slot45;
case 9:
                var2 = _closure1_slot148;
                var2 = var2.bind(var3)(var4);
                var3 = var2.localVolumes;
                var2 = arg1;
                var2 = var3[var2];
                var3 = null;
                if(!(var3 != var2)) { _fun0089_ip = 39; continue _fun0089 }
case 430:
                var1 = var2;
case 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[49] = var5;
        var5 = {};
        var7 = 'getInputVolume';
        var5['key'] = var7;
        var7 = function getInputVolume() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.inputVolume;
            return var1;
        };
        var5['value'] = var7;
        var1[50] = var5;
        var5 = {};
        var7 = 'getOutputVolume';
        var5['key'] = var7;
        var7 = function getOutputVolume() {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 65;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var4.bind(var3)(var1);
                var4 = var5.getConfig;
                var1 = {};
                var6 = 'MediaEngineStore.getOutputVolume';
                var1['location'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var1.audioOutputPresent;
                if(var1) { _fun0090_ip = 309; continue _fun0090 }
case 169:
                var1 = _closure1_slot44;
                _fun0090_ip = 430; continue _fun0090;
case 309:
                var2 = _closure1_slot148;
                var2 = var2.bind(var3)();
                var1 = var2.outputVolume;
case 430:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[51] = var5;
        var5 = {};
        var7 = 'getMode';
        var5['key'] = var7;
        var7 = function getMode() {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0091_ip = 55; continue _fun0091 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot148;
                var1 = var1.bind(var2)(var3);
                var1 = var1.mode;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[52] = var5;
        var5 = {};
        var7 = 'getModeOptions';
        var5['key'] = var7;
        var7 = function getModeOptions() {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0092_ip = 55; continue _fun0092 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot148;
                var1 = var1.bind(var2)(var3);
                var1 = var1.modeOptions;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[53] = var5;
        var5 = {};
        var7 = 'getShortcuts';
        var5['key'] = var7;
        var7 = function getShortcuts() {
            var1 = {};
            var _closure3_slot0 = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var4 = 37;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.each;
            var3 = _closure1_slot78;
            var2 = function(arg1, arg2) {
                _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var5 = var1.mode;
                    var1 = var1.modeOptions;
                    var2 = var1.shortcut;
                    var1 = _closure1_slot25;
                    var1 = var1.PUSH_TO_TALK;
                    var1 = var5 === var1;
                    if(!var1) { _fun0093_ip = 169; continue _fun0093 }
case 299:
                    var5 = _closure1_slot79;
                    var4 = var5.has;
                    var1 = var4.bind(var5)(var3);
case 169:
                    if(!var1) { _fun0093_ip = 298; continue _fun0093 }
case 59:
                    var1 = _closure3_slot0;
                    var1[var3] = var2;
case 298:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[54] = var5;
        var5 = {};
        var7 = 'getInputDeviceId';
        var5['key'] = var7;
        var7 = function getInputDeviceId() {
            var4 = _closure1_slot169;
            var3 = _closure1_slot86;
            var1 = _closure1_slot148;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var1.inputDeviceId;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[55] = var5;
        var5 = {};
        var7 = 'getOutputDeviceId';
        var5['key'] = var7;
        var7 = function getOutputDeviceId() {
            var4 = _closure1_slot169;
            var3 = _closure1_slot87;
            var1 = _closure1_slot148;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var1.outputDeviceId;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[56] = var5;
        var5 = {};
        var7 = 'getVideoDeviceId';
        var5['key'] = var7;
        var7 = function getVideoDeviceId() {
            var4 = _closure1_slot169;
            var3 = _closure1_slot88;
            var1 = _closure1_slot148;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var1.videoDeviceId;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[57] = var5;
        var5 = {};
        var7 = 'getInputDevices';
        var5['key'] = var7;
        var7 = function getInputDevices() {
            var1 = _closure1_slot86;
            return var1;
        };
        var5['value'] = var7;
        var1[58] = var5;
        var5 = {};
        var7 = 'getOutputDevices';
        var5['key'] = var7;
        var7 = function getOutputDevices() {
            var1 = _closure1_slot87;
            return var1;
        };
        var5['value'] = var7;
        var1[59] = var5;
        var5 = {};
        var7 = 'getVideoDevices';
        var5['key'] = var7;
        var7 = function getVideoDevices() {
            var1 = _closure1_slot88;
            return var1;
        };
        var5['value'] = var7;
        var1[60] = var5;
        var5 = {};
        var7 = 'getEchoCancellation';
        var5['key'] = var7;
        var7 = function getEchoCancellation() {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                var3 = _closure1_slot148;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var4 = _closure1_slot18;
                var3 = var4.hasEchoCancellation;
                var1 = var2.inputDeviceId;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0094_ip = 299; continue _fun0094 }
case 431:
                var1 = var2.echoCancellation;
case 299:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[61] = var5;
        var5 = {};
        var7 = 'getSidechainCompression';
        var5['key'] = var7;
        var7 = function getSidechainCompression() {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var1 = _closure1_slot49;
                var1 = var1.SIDECHAIN_COMPRESSION;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0095_ip = 90; continue _fun0095 }
case 313:
                var3 = _closure1_slot148;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var1 = var2.sidechainCompression;
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[62] = var5;
        var5 = {};
        var7 = 'getSidechainCompressionStrength';
        var5['key'] = var7;
        var7 = function getSidechainCompressionStrength() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.sidechainCompressionStrength;
            return var1;
        };
        var5['value'] = var7;
        var1[63] = var5;
        var5 = {};
        var7 = 'getH265Enabled';
        var5['key'] = var7;
        var7 = function getH265Enabled() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.h265Enabled;
            return var1;
        };
        var5['value'] = var7;
        var1[64] = var5;
        var5 = {};
        var7 = 'hasH265HardwareDecode';
        var5['key'] = var7;
        var7 = function hasH265HardwareDecode() {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                var3 = _closure1_slot121;
                var1 = null;
                var1 = var1 !== var3;
                if(!var1) { _fun0096_ip = 33; continue _fun0096 }
case 268:
                var1 = _closure1_slot121;
case 33:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[65] = var5;
        var5 = {};
        var7 = 'getOpenH264Enabled';
        var5['key'] = var7;
        var7 = function getOpenH264Enabled() {
            _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 28;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isLinux;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0097_ip = 188; continue _fun0097 }
case 88:
                var2 = _closure1_slot148;
                var2 = var2.bind(var3)();
                var1 = var2.openH264Enabled;
case 188:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[66] = var5;
        var5 = {};
        var7 = 'getLoopback';
        var5['key'] = var7;
        var7 = function getLoopback() {
            var1 = _closure1_slot126;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[67] = var5;
        var5 = {};
        var7 = 'getLoopbackReasons';
        var5['key'] = var7;
        var7 = function getLoopbackReasons() {
            var1 = _closure1_slot126;
            return var1;
        };
        var5['value'] = var7;
        var1[68] = var5;
        var5 = {};
        var7 = 'getNoiseSuppression';
        var5['key'] = var7;
        var7 = function getNoiseSuppression() {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                var3 = _closure1_slot148;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var4 = _closure1_slot18;
                var3 = var4.hasNoiseSuppression;
                var1 = var2.inputDeviceId;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0098_ip = 299; continue _fun0098 }
case 431:
                var1 = var2.noiseSuppression;
case 299:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[69] = var5;
        var5 = {};
        var7 = 'getAutomaticGainControl';
        var5['key'] = var7;
        var7 = function getAutomaticGainControl() {
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                var3 = _closure1_slot148;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var4 = _closure1_slot18;
                var3 = var4.hasAutomaticGainControl;
                var1 = var2.inputDeviceId;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0099_ip = 299; continue _fun0099 }
case 431:
                var1 = var2.automaticGainControl;
case 299:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[70] = var5;
        var5 = {};
        var7 = 'getBypassSystemInputProcessing';
        var5['key'] = var7;
        var7 = function getBypassSystemInputProcessing() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.bypassSystemInputProcessing;
            return var1;
        };
        var5['value'] = var7;
        var1[71] = var5;
        var5 = {};
        var7 = 'getNoiseCancellation';
        var5['key'] = var7;
        var7 = function getNoiseCancellation() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.noiseCancellation;
            return var1;
        };
        var5['value'] = var7;
        var1[72] = var5;
        var5 = {};
        var7 = 'getHardwareEncoding';
        var5['key'] = var7;
        var7 = function getHardwareEncoding() {
            var1 = true;
            return var1;
        };
        var5['value'] = var7;
        var1[73] = var5;
        var5 = {};
        var7 = 'getEnableSilenceWarning';
        var5['key'] = var7;
        var7 = function getEnableSilenceWarning() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.silenceWarning;
            return var1;
        };
        var5['value'] = var7;
        var1[74] = var5;
        var5 = {};
        var7 = 'getDebugLogging';
        var5['key'] = var7;
        var7 = function getDebugLogging() {
            var2 = _closure1_slot73;
            var1 = var2.getDebugLogging;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[75] = var5;
        var5 = {};
        var7 = 'getQoS';
        var5['key'] = var7;
        var7 = function getQoS() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.qos;
            return var1;
        };
        var5['value'] = var7;
        var1[76] = var5;
        var5 = {};
        var7 = 'getAttenuation';
        var5['key'] = var7;
        var7 = function getAttenuation() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.attenuation;
            return var1;
        };
        var5['value'] = var7;
        var1[77] = var5;
        var5 = {};
        var7 = 'getAttenuateWhileSpeakingSelf';
        var5['key'] = var7;
        var7 = function getAttenuateWhileSpeakingSelf() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.attenuateWhileSpeakingSelf;
            return var1;
        };
        var5['value'] = var7;
        var1[78] = var5;
        var5 = {};
        var7 = 'getAttenuateWhileSpeakingOthers';
        var5['key'] = var7;
        var7 = function getAttenuateWhileSpeakingOthers() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.attenuateWhileSpeakingOthers;
            return var1;
        };
        var5['value'] = var7;
        var1[79] = var5;
        var5 = {};
        var7 = 'getAudioSubsystem';
        var5['key'] = var7;
        var7 = function getAudioSubsystem() {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                var1 = _closure1_slot162;
                var3 = undefined;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0100_ip = 37; continue _fun0100 }
case 268:
                var1 = _closure1_slot148;
                var1 = var1.bind(var3)();
                var1 = var1.automaticAudioSubsystem;
                if(var1) { _fun0100_ip = 9; continue _fun0100 }
case 37:
                var3 = _closure1_slot73;
                var1 = var3.getAudioSubsystem;
                var1 = var1.bind(var3)();
                _fun0100_ip = 427; continue _fun0100;
case 9:
                var2 = _closure1_slot42;
                var1 = var2.AUTOMATIC;
case 427:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[80] = var5;
        var5 = {};
        var7 = 'getMLSSigningKey';
        var5['key'] = var7;
        var7 = function getMLSSigningKey(arg1, arg2) {
            var4 = _closure1_slot73;
            var3 = var4.getMLSSigningKey;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[81] = var5;
        var5 = {};
        var7 = 'getActiveInputProfile';
        var5['key'] = var7;
        var7 = function getActiveInputProfile() {
            var2 = _closure1_slot148;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = var1.activeInputProfile;
            return var1;
        };
        var5['value'] = var7;
        var1[82] = var5;
        var5 = {};
        var7 = 'isInputProfileCustom';
        var5['key'] = var7;
        var7 = function isInputProfileCustom() {
            _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                var2 = this;
                var1 = var2.getActiveInputProfile;
                var3 = var1.bind(var2)();
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0101_ip = 58; continue _fun0101 }
case 55:
                var2 = _closure1_slot41;
                var2 = var2.CUSTOM;
                var1 = var3 === var2;
case 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[83] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function getSettings() {
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0102_ip = 55; continue _fun0102 }
case 56:
                var1 = _closure1_slot50;
                var3 = var1.DEFAULT;
case 55:
                var1 = _closure1_slot148;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[84] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function getState() {
            var1 = {};
            var3 = _closure1_slot78;
            var1['settingsByContext'] = var3;
            var3 = _closure1_slot86;
            var1['inputDevices'] = var3;
            var3 = _closure1_slot87;
            var1['outputDevices'] = var3;
            var3 = _closure1_slot128;
            var1['appSupported'] = var3;
            var3 = _closure1_slot109;
            var1['krispModuleLoaded'] = var3;
            var3 = _closure1_slot110;
            var1['krispFatalError'] = var3;
            var3 = _closure1_slot111;
            var1['krispVersion'] = var3;
            var3 = _closure1_slot112;
            var1['krispSuppressionLevel'] = var3;
            var3 = _closure1_slot75;
            var1['goLiveSource'] = var3;
            var2 = _closure1_slot82;
            var1['goLiveContext'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[85] = var5;
        var5 = {};
        var7 = 'getInputDetectedThisConnection';
        var5['key'] = var7;
        var7 = function getInputDetectedThisConnection() {
            var1 = _closure1_slot102;
            return var1;
        };
        var5['value'] = var7;
        var1[86] = var5;
        var5 = {};
        var7 = 'getInputDetected';
        var5['key'] = var7;
        var7 = function getInputDetected() {
            var1 = _closure1_slot77;
            var1 = var1.inputDetected;
            return var1;
        };
        var5['value'] = var7;
        var1[87] = var5;
        var5 = {};
        var7 = 'getLastInputDetectedUpdateTime';
        var5['key'] = var7;
        var7 = function getLastInputDetectedUpdateTime() {
            var1 = _closure1_slot77;
            var1 = var1.lastUpdateTime;
            return var1;
        };
        var5['value'] = var7;
        var1[88] = var5;
        var5 = {};
        var7 = 'getNoInputDetectedNotice';
        var5['key'] = var7;
        var7 = function getNoInputDetectedNotice() {
            var1 = _closure1_slot103;
            return var1;
        };
        var5['value'] = var7;
        var1[89] = var5;
        var5 = {};
        var7 = 'getInputDeviceOSMuted';
        var5['key'] = var7;
        var7 = function getInputDeviceOSMuted() {
            var1 = _closure1_slot105;
            return var1;
        };
        var5['value'] = var7;
        var1[90] = var5;
        var5 = {};
        var7 = 'getInputDeviceOSVolume';
        var5['key'] = var7;
        var7 = function getInputDeviceOSVolume() {
            var1 = _closure1_slot106;
            return var1;
        };
        var5['value'] = var7;
        var1[91] = var5;
        var5 = {};
        var7 = 'getPacketDelay';
        var5['key'] = var7;
        var7 = function getPacketDelay() {
            _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 28;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var4 = var1.isPlatformEmbedded;
                var1 = 0;
                if(var4) { _fun0103_ip = 61; continue _fun0103 }
case 58:
                var4 = var3.getMode;
                var4 = var4.bind(var3)();
                var2 = _closure1_slot25;
                var2 = var2.VOICE_ACTIVITY;
                var1 = 0;
                if(!(var4 === var2)) { _fun0103_ip = 61; continue _fun0103 }
case 384:
                var2 = var3.getModeOptions;
                var2 = var2.bind(var3)();
                var1 = var2.vadLeading;
case 61:
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
            var3 = _closure1_slot73;
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
            var1 = _closure1_slot81;
            return var1;
        };
        var5['value'] = var7;
        var1[94] = var5;
        var5 = {};
        var7 = 'getVideoHook';
        var5['key'] = var7;
        var7 = function getVideoHook() {
            var2 = _closure1_slot148;
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
            var3 = _closure1_slot73;
            var2 = var3.supports;
            var1 = _closure1_slot49;
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
            _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                var4 = this;
                var2 = _closure1_slot148;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var3 = var1.experimentalSoundshare2;
                var1 = var4.supportsExperimentalSoundshare;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0104_ip = 3; continue _fun0104 }
case 431:
                var2 = null;
                var2 = var2 == var3;
                if(var2) { _fun0104_ip = 9; continue _fun0104 }
case 6:
                var2 = var3;
case 9:
                if(var2) { _fun0104_ip = 34; continue _fun0104 }
case 188:
                var3 = var4.supportsHookSoundshare;
                var3 = var3.bind(var4)();
                var2 = !var3;
case 34:
                var1 = var2;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[97] = var5;
        var5 = {};
        var7 = 'supportsExperimentalSoundshare';
        var5['key'] = var7;
        var7 = function supportsExperimentalSoundshare() {
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var1 = _closure1_slot49;
                var1 = var1.EXPERIMENTAL_SOUNDSHARE;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0105_ip = 66; continue _fun0105 }
case 313:
                var6 = _closure1_slot1;
                var3 = _closure1_slot3;
                var4 = 52;
                var4 = var3[var4];
                var8 = undefined;
                var5 = var6.bind(var8)(var4);
                var4 = var5.satisfies;
                var9 = 62;
                var3 = var3[var9];
                var6 = var6.bind(var8)(var3);
                var3 = null;
                var6 = var3 == var6;
                var3 = undefined;
                if(var6) { _fun0105_ip = 106; continue _fun0105 }
case 350:
                var7 = _closure1_slot1;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var6 = var6.os;
                var3 = var6.release;
case 106:
                var2 = _closure1_slot36;
                var1 = var4.bind(var5)(var3, var2);
case 66:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[98] = var5;
        var5 = {};
        var7 = 'supportsHookSoundshare';
        var5['key'] = var7;
        var7 = function supportsHookSoundshare() {
            _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 28;
                var1 = var4[var1];
                var8 = undefined;
                var3 = var3.bind(var8)(var1);
                var1 = var3.isWindows;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0106_ip = 309; continue _fun0106 }
case 88:
                var5 = _closure1_slot73;
                var4 = var5.supports;
                var3 = _closure1_slot49;
                var3 = var3.SOUNDSHARE;
                var1 = var4.bind(var5)(var3);
case 309:
                if(!var1) { _fun0106_ip = 310; continue _fun0106 }
case 43:
                var6 = _closure1_slot1;
                var3 = _closure1_slot3;
                var4 = 52;
                var4 = var3[var4];
                var5 = var6.bind(var8)(var4);
                var4 = var5.satisfies;
                var9 = 62;
                var3 = var3[var9];
                var6 = var6.bind(var8)(var3);
                var3 = null;
                var6 = var3 == var6;
                var3 = undefined;
                if(var6) { _fun0106_ip = 75; continue _fun0106 }
case 311:
                var7 = _closure1_slot1;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var6 = var6.os;
                var3 = var6.release;
case 75:
                var2 = _closure1_slot35;
                var1 = var4.bind(var5)(var3, var2);
case 310:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[99] = var5;
        var5 = {};
        var7 = 'getUseSystemScreensharePicker';
        var5['key'] = var7;
        var7 = function getUseSystemScreensharePicker() {
            _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                var2 = this;
                var1 = var2.supportsSystemScreensharePicker;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot148;
                var5 = undefined;
                var3 = var3.bind(var5)();
                var3 = var3.useSystemScreensharePicker;
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 28;
                var2 = var6[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isLinux;
                var2 = var2.bind(var4)();
                if(!var1) { _fun0107_ip = 346; continue _fun0107 }
case 34:
                var4 = null;
                if(!(var4 != var3)) { _fun0107_ip = 187; continue _fun0107 }
case 418:
                var2 = var3;
case 187:
                var1 = var2;
case 346:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[100] = var5;
        var5 = {};
        var7 = 'supportsSystemScreensharePicker';
        var5['key'] = var7;
        var7 = function supportsSystemScreensharePicker() {
            var3 = _closure1_slot73;
            var2 = var3.supports;
            var1 = _closure1_slot49;
            var1 = var1.NATIVE_SCREENSHARE_PICKER;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[101] = var5;
        var5 = {};
        var7 = 'getUseVaapiEncoder';
        var5['key'] = var7;
        var7 = function getUseVaapiEncoder() {
            var1 = _closure1_slot136;
            return var1;
        };
        var5['value'] = var7;
        var1[102] = var5;
        var5 = {};
        var7 = 'getVideoEncoderExperiments';
        var5['key'] = var7;
        var7 = function getVideoEncoderExperiments(arg1, arg2) {
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var1 = global;
                var3 = var1.Array;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = 'unk';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.push;
                var1 = 'nvNewPresets';
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot50;
                var2 = var2.STREAM;
                if(!(var4 !== var2)) { _fun0108_ip = 171; continue _fun0108 }
case 418:
                var6 = var3.push;
                var2 = 'nvRelaxRc=75';
                var2 = var6.bind(var3)(var2);
                _fun0108_ip = 357; continue _fun0108;
case 171:
                var6 = var3.push;
                var2 = 'nvRelaxRc=250';
                var2 = var6.bind(var3)(var2);
case 357:
                var2 = var5.getUseVaapiEncoder;
                var2 = var2.bind(var5)();
                if(!var2) { _fun0108_ip = 45; continue _fun0108 }
case 325:
                var5 = var3.push;
                var2 = 'vaapi';
                var2 = var5.bind(var3)(var2);
case 45:
                var2 = _closure1_slot50;
                var2 = var2.STREAM;
                var2 = var4 === var2;
                if(!var2) { _fun0108_ip = 270; continue _fun0108 }
case 419:
                var5 = 'streamer';
                var4 = arg2;
                var2 = var5 === var4;
case 270:
                if(!var2) { _fun0108_ip = 432; continue _fun0108 }
case 433:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var4 = 28;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.isWindows;
                var2 = var4.bind(var5)();
case 432:
                if(!var2) { _fun0108_ip = 337; continue _fun0108 }
case 434:
                var4 = var3.push;
                var2 = 'useCaptureDeviceForEncode';
                var2 = var4.bind(var3)(var2);
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 81;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var5 = var2.VideoCaptureDeviceNoReuseExperiment;
                var4 = var5.getConfig;
                var2 = {};
                var6 = 'handleReady';
                var2['location'] = var6;
                var2 = var4.bind(var5)(var2);
                var2 = var2.overrideDeviceReuse;
                if(!var2) { _fun0108_ip = 337; continue _fun0108 }
case 335:
                var4 = var3.push;
                var2 = 'videoCaptureDeviceOverrideReuse';
                var2 = var4.bind(var3)(var2);
case 337:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.getLinuxVulkanCaptureExperimentConfig;
                var1 = {};
                var5 = 'handleReady';
                var1['location'] = var5;
                var1 = var2.bind(var4)(var1);
                var1 = var1.enabled;
                if(!var1) { _fun0108_ip = 435; continue _fun0108 }
case 436:
                var2 = var3.push;
                var1 = 'linux-vulkan';
                var1 = var2.bind(var3)(var1);
case 435:
                var2 = var3.join;
                var1 = ',';
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[103] = var5;
        var5 = {};
        var7 = 'getUseGamescopeCapture';
        var5['key'] = var7;
        var7 = function getUseGamescopeCapture() {
            var1 = _closure1_slot135;
            return var1;
        };
        var5['value'] = var7;
        var1[104] = var5;
        var5 = {};
        var7 = 'getSpeakingWhileMuted';
        var5['key'] = var7;
        var7 = function getSpeakingWhileMuted() {
            var1 = _closure1_slot98;
            return var1;
        };
        var5['value'] = var7;
        var1[105] = var5;
        var5 = {};
        var7 = 'getKrispModelOverride';
        var5['key'] = var7;
        var7 = function getKrispModelOverride() {
            var1 = _closure1_slot113;
            return var1;
        };
        var5['value'] = var7;
        var1[106] = var5;
        var5 = {};
        var7 = 'getKrispModels';
        var5['key'] = var7;
        var7 = function getKrispModels() {
            var1 = _closure1_slot114;
            return var1;
        };
        var5['value'] = var7;
        var1[107] = var5;
        var5 = {};
        var7 = 'getKrispVadActivationThreshold';
        var5['key'] = var7;
        var7 = function getKrispVadActivationThreshold() {
            _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                var2 = _closure1_slot148;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = var1.modeOptions;
                var2 = var1.vadKrispActivationThreshold;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0.5;
                if(!var3) { _fun0109_ip = 90; continue _fun0109 }
case 278:
                var1 = var2;
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[108] = var5;
        var5 = {};
        var7 = 'hasActiveCallKitCall';
        var5['key'] = var7;
        var7 = function hasActiveCallKitCall() {
            var1 = _closure1_slot134;
            return var1;
        };
        var5['value'] = var7;
        var1[109] = var5;
        var5 = {};
        var7 = 'setHasActiveCallKitCall';
        var5['key'] = var7;
        var7 = function setHasActiveCallKitCall(arg1) {
            var1 = arg1;
            _closure1_slot134 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[110] = var5;
        var5 = {};
        var7 = 'supportsScreenSoundshare';
        var5['key'] = var7;
        var7 = function supportsScreenSoundshare() {
            _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                var6 = this;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 28;
                var1 = var1[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.isMac;
                var1 = var1.bind(var2)();
                if(var1) { _fun0110_ip = 327; continue _fun0110 }
case 278:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isWindows;
                var1 = var1.bind(var2)();
                if(var1) { _fun0110_ip = 277; continue _fun0110 }
case 4:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isLinux;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0110_ip = 364; continue _fun0110 }
case 17:
                var7 = _closure1_slot73;
                var5 = var7.supports;
                var2 = _closure1_slot49;
                var2 = var2.SCREEN_SOUNDSHARE;
                var1 = var5.bind(var7)(var2);
case 364:
                _fun0110_ip = 78; continue _fun0110;
case 277:
                var7 = _closure1_slot73;
                var5 = var7.supports;
                var2 = _closure1_slot49;
                var2 = var2.SCREEN_SOUNDSHARE;
                var2 = var5.bind(var7)(var2);
                if(!var2) { _fun0110_ip = 50; continue _fun0110 }
case 437:
                var5 = var6.getExperimentalSoundshare;
                var2 = var5.bind(var6)();
case 50:
                var1 = var2;
case 78:
                _fun0110_ip = 114; continue _fun0110;
case 327:
                var6 = _closure1_slot73;
                var5 = var6.supports;
                var2 = _closure1_slot49;
                var2 = var2.SOUNDSHARE;
                var2 = var5.bind(var6)(var2);
                if(!var2) { _fun0110_ip = 438; continue _fun0110 }
case 439:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var7 = 52;
                var7 = var5[var7];
                var8 = var6.bind(var4)(var7);
                var7 = var8.satisfies;
                var10 = 62;
                var5 = var5[var10];
                var6 = var6.bind(var4)(var5);
                var5 = null;
                var5 = var5 == var6;
                var6 = undefined;
                if(var5) { _fun0110_ip = 29; continue _fun0110 }
case 440:
                var9 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var5 = var9.bind(var4)(var5);
                var5 = var5.os;
                var6 = var5.release;
case 29:
                var5 = _closure1_slot30;
                var2 = var7.bind(var8)(var6, var5);
case 438:
                if(!var2) { _fun0110_ip = 441; continue _fun0110 }
case 442:
                var3 = _closure1_slot161;
                var2 = var3.bind(var4)();
case 441:
                var1 = var2;
case 114:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[111] = var5;
        var5 = {};
        var7 = 'getSystemMicrophoneMode';
        var5['key'] = var7;
        var7 = function getSystemMicrophoneMode() {
            _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var6 = 28;
                var3 = var1[var6];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.isWindows;
                var3 = var3.bind(var5)();
                if(var3) { _fun0111_ip = 95; continue _fun0111 }
case 91:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isMac;
                var3 = var3.bind(var5)();
                if(var3) { _fun0111_ip = 443; continue _fun0111 }
case 298:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if(var3) { _fun0111_ip = 443; continue _fun0111 }
case 104:
                return var1;
case 443:
                var3 = _closure1_slot127;
                return var3;
case 95:
                var3 = var4.getBypassSystemInputProcessing;
                var3 = var3.bind(var4)();
                if(var3) { _fun0111_ip = 23; continue _fun0111 }
case 444:
                var3 = _closure1_slot120;
                var2 = var4.getInputDeviceId;
                var2 = var2.bind(var4)();
                var4 = var3[var2];
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0111_ip = 445; continue _fun0111 }
case 428:
                var5 = var4.active;
                var3 = var3 == var5;
                var2 = undefined;
                if(var3) { _fun0111_ip = 445; continue _fun0111 }
case 270:
                var4 = var5.find;
                var3 = function(arg1) {
                    var2 = _closure1_slot66;
                    var1 = arg1;
                    var1 = var1 === var2;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 445:
                return var2;
case 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[112] = var5;
        var5 = {};
        var7 = 'getVideoStreamParameters';
        var5['key'] = var7;
        var7 = function getVideoStreamParameters() {
            _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                var5 = arguments[0];
                var3 = this;
                var6 = undefined;
                if(!(var5 === var6)) { _fun0112_ip = 312; continue _fun0112 }
case 101:
                var1 = _closure1_slot50;
                var5 = var1.DEFAULT;
case 312:
                var2 = var3.supports;
                var1 = _closure1_slot49;
                var1 = var1.VIDEO;
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0112_ip = 57; continue _fun0112 }
case 188:
                var1 = new Array(0);
                _fun0112_ip = 297; continue _fun0112;
case 57:
                var7 = {};
                var2 = '100';
                var7['rid'] = var2;
                var2 = _closure1_slot50;
                var2 = var2.DEFAULT;
                if(!(var5 !== var2)) { _fun0112_ip = 65; continue _fun0112 }
case 63:
                var2 = _closure1_slot52;
                var2 = var2.SCREEN;
                _fun0112_ip = 357; continue _fun0112;
case 65:
                var8 = _closure1_slot52;
                var2 = var8.VIDEO;
case 357:
                var7['type'] = var2;
                var2 = _closure1_slot56;
                var7['quality'] = var2;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = var2;
case 297:
                var2 = var3.isSimulcastSupported;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0112_ip = 107; continue _fun0112 }
case 48:
                var3 = _closure1_slot50;
                var3 = var3.DEFAULT;
                var2 = var5 === var3;
case 107:
                if(!var2) { _fun0112_ip = 184; continue _fun0112 }
case 18:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 83;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var6 = var3.DisableCameraSimulcastExperiment;
                var5 = var6.getConfig;
                var3 = {};
                var7 = 'MediaEngineStore.getVideoStreamParameters';
                var3['location'] = var7;
                var3 = var5.bind(var6)(var3);
                var2 = var3.enableSimulcast;
case 184:
                if(!var2) { _fun0112_ip = 446; continue _fun0112 }
case 347:
                var3 = var1.push;
                var2 = {};
                var5 = '50';
                var2['rid'] = var5;
                var5 = _closure1_slot52;
                var5 = var5.VIDEO;
                var2['type'] = var5;
                var4 = _closure1_slot57;
                var2['quality'] = var4;
                var2 = var3.bind(var1)(var2);
case 446:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[113] = var5;
        var5 = {};
        var7 = 'fetchAsyncResources';
        var5['key'] = var7;
        var7 = function fetchAsyncResources() {
            var3 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 28;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.isWeb;
            var2 = var2.bind(var4)();
            var3['fetchDave'] = var2;
            var2 = _closure1_slot73;
            var1 = var2.fetchAsyncResources;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[114] = var5;
        var5 = {};
        var7 = 'startDavePreload';
        var5['key'] = var7;
        var7 = function startDavePreload() {
            _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                var2 = _closure1_slot119;
                if(var2) { _fun0113_ip = 171; continue _fun0113 }
case 41:
                var4 = true;
                _closure1_slot119 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0113_ip = 171; continue _fun0113 }
case 404:
                var3 = _closure1_slot73;
                var2 = var3.fetchAsyncResources;
                var1 = {};
                var1['fetchDave'] = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.catch;
                var1 = function(arg1) {
                    var4 = arg1;
                    var5 = _closure1_slot58;
                    var3 = var5.warn;
                    var2 = 'DAVE preload failed:';
                    var2 = var3.bind(var5)(var2, var4);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 77;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.captureException;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 171:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[115] = var5;
        var5 = {};
        var7 = 'getSupportedSecureFramesProtocolVersion';
        var5['key'] = var7;
        var7 = function getSupportedSecureFramesProtocolVersion() {
            var2 = _closure1_slot73;
            var1 = var2.getSupportedSecureFramesProtocolVersion;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[116] = var5;
        var5 = {};
        var7 = 'hasClipsSource';
        var5['key'] = var7;
        var7 = function hasClipsSource() {
            var2 = _closure1_slot76;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[117] = var5;
        var5 = {};
        var7 = 'getGpuBrand';
        var5['key'] = var7;
        var6 = function getGpuBrand() {
            var1 = _closure1_slot129;
            return var1;
        };
        var5['value'] = var6;
        var1[118] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var15 = var14.bind(var1)(var15);
    var15['displayName'] = var7;
    var7 = 47;
    var7 = var10[var7];
    var33 = var12.bind(var1)(var7);
    var7 = {};
    var16 = function handleVoiceChannelSelect(arg1) {
        _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
            var4 = arg1;
            var3 = var4.guildId;
            var2 = var4.channelId;
            var1 = var4.currentVoiceChannelId;
            var6 = var4.video;
            if(!(var1 !== var2)) { _fun0114_ip = 6; continue _fun0114 }
case 314:
            var5 = _closure1_slot152;
            var4 = undefined;
            var1 = null;
            var1 = var5.bind(var4)(var6, var1);
case 6:
            var1 = null;
            if(!(var1 == var3)) { _fun0114_ip = 32; continue _fun0114 }
case 188:
            if(!(var1 == var2)) { _fun0114_ip = 34; continue _fun0114 }
case 32:
            var1 = false;
            _closure1_slot107 = var1;
            _fun0114_ip = 428; continue _fun0114;
case 34:
            var2 = _closure1_slot107;
            if(var2) { _fun0114_ip = 428; continue _fun0114 }
case 430:
            var2 = true;
            _closure1_slot107 = var2;
            var2 = _closure1_slot148;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var2 = var3.mute;
            if(var2) { _fun0114_ip = 173; continue _fun0114 }
case 93:
            var2 = var3.deaf;
case 173:
            if(!var2) { _fun0114_ip = 428; continue _fun0114 }
case 106:
            var3 = _closure1_slot164;
            var2 = {'deaf': false, 'mute': false};
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot73;
            var2 = var3.eachConnection;
            var1 = _closure1_slot151;
            var1 = var2.bind(var3)(var1);
case 428:
            var1 = undefined;
            return var1;
        }
    };
    var7['VOICE_CHANNEL_SELECT'] = var16;
    var16 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                var1 = arg2;
                var4 = _closure1_slot74;
                var3 = var1.sessionId;
                if(!(var4 !== var3)) { _fun0115_ip = 361; continue _fun0115 }
case 33:
                var4 = var1.userId;
                var5 = _closure1_slot16;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                var3 = var4 === var3;
                if(!var3) { _fun0115_ip = 43; continue _fun0115 }
case 6:
                var5 = _closure1_slot20;
                var4 = var5.getChannelId;
                var5 = var4.bind(var5)();
                var4 = null;
                var3 = var4 == var5;
case 43:
                if(!var3) { _fun0115_ip = 63; continue _fun0115 }
case 362:
                var6 = _closure1_slot152;
                var5 = undefined;
                var4 = false;
                var3 = null;
                var3 = var6.bind(var5)(var4, var3);
case 63:
                var3 = arg1;
                return var3;
case 361:
                var3 = var1.mute;
                if(var3) { _fun0115_ip = 96; continue _fun0115 }
case 64:
                var3 = var1.suppress;
case 96:
                _closure1_slot90 = var3;
                var3 = var1.deaf;
                _closure1_slot93 = var3;
                var5 = _closure1_slot73;
                var4 = var5.eachConnection;
                var3 = _closure1_slot151;
                var3 = var4.bind(var5)(var3);
                var3 = var1.guildId;
                var5 = null;
                var6 = var5 != var3;
                if(!var6) { _fun0115_ip = 49; continue _fun0115 }
case 365:
                var3 = var1.channelId;
                var6 = var5 != var3;
case 49:
                if(!var6) { _fun0115_ip = 47; continue _fun0115 }
case 283:
                var3 = _closure1_slot116;
                var6 = var5 != var3;
case 47:
                if(!var6) { _fun0115_ip = 447; continue _fun0115 }
case 50:
                var4 = _closure1_slot116;
                var3 = var1.channelId;
                var6 = var4 !== var3;
case 447:
                var4 = _closure1_slot107;
                var3 = !var4;
                if(var4) { _fun0115_ip = 448; continue _fun0115 }
case 449:
                var4 = var1.channelId;
                var3 = var5 == var4;
case 448:
                var5 = _closure1_slot152;
                var4 = !var6;
                if(var6) { _fun0115_ip = 390; continue _fun0115 }
case 450:
                var4 = !var3;
case 390:
                if(!var4) { _fun0115_ip = 81; continue _fun0115 }
case 393:
                var4 = _closure1_slot94;
case 81:
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1 = var1.channelId;
                _closure1_slot116 = var1;
                var1 = true;
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7['VOICE_STATE_UPDATES'] = var16;
    var16 = function handleConnectionOpen(arg1) {
        _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
            var1 = arg1;
            var1 = var1.sessionId;
            var _closure1_slot74 = var1;
            var1 = false;
            _closure1_slot90 = var1;
            _closure1_slot93 = var1;
            var3 = _closure1_slot148;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot162;
            var4 = var4.bind(var1)();
            if(!var4) { _fun0116_ip = 15; continue _fun0116 }
case 90:
            var4 = _closure1_slot163;
            var4 = var4.bind(var1)();
            if(var4) { _fun0116_ip = 430; continue _fun0116 }
case 57:
            var4 = var3.automaticAudioSubsystem;
            if(!var4) { _fun0116_ip = 15; continue _fun0116 }
case 34:
            var4 = _closure1_slot188;
            var4 = var4.bind(var1)();
            _fun0116_ip = 15; continue _fun0116;
case 430:
            var5 = _closure1_slot187;
            var4 = _closure1_slot42;
            var4 = var4.AUTOMATIC;
            var4 = var5.bind(var1)(var4);
case 15:
            var6 = _closure1_slot73;
            var5 = var6.supports;
            var4 = _closure1_slot49;
            var4 = var4.OFFLOAD_ADM_CONTROLS;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0116_ip = 69; continue _fun0116 }
case 444:
            var6 = _closure1_slot73;
            var5 = var6.setOffloadAdmControls;
            var4 = true;
            var4 = var5.bind(var6)(var4);
case 69:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 28;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0116_ip = 451; continue _fun0116 }
case 326:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var5 = 72;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.getIOSAudioInterruptExperimentConfig;
            var5 = 'handleConnectionOpen';
            var5 = var6.bind(var7)(var5);
            var4 = var5.enabled;
case 451:
            if(!var4) { _fun0116_ip = 452; continue _fun0116 }
case 450:
            var7 = _closure1_slot73;
            var6 = var7.updateFieldTrial;
            var5 = 'WebRTC-Audio-iOS-Holding';
            var4 = 'Enabled';
            var4 = var6.bind(var7)(var5, var4);
case 452:
            var4 = _closure1_slot170;
            var3 = var3.inputDeviceId;
            var3 = var4.bind(var1)(var3);
            var2 = _closure1_slot176;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var7['CONNECTION_OPEN'] = var16;
    var16 = function handleConnectionClosed() {
        var1 = null;
        _closure1_slot74 = var1;
        var1 = undefined;
        return var1;
    };
    var7['CONNECTION_CLOSED'] = var16;
    var16 = function handlePostConnectionOpen() {
        _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 28;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isWeb;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0117_ip = 102; continue _fun0117 }
case 88:
            var2 = _closure1_slot70;
            var1 = var2.startDavePreload;
            var1 = var1.bind(var2)();
case 102:
            var1 = false;
            return var1;
        }
    };
    var7['POST_CONNECTION_OPEN'] = var16;
    var16 = function handleRTCConnectionStateUpdate(arg1) {
        _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
            var1 = arg1;
            var3 = var1.state;
            var2 = _closure1_slot26;
            var2 = var2.CONNECTING;
            if(!(var2 !== var3)) { _fun0118_ip = 20; continue _fun0118 }
case 38:
            var2 = _closure1_slot26;
            var2 = var2.RTC_CONNECTING;
            if(!(var2 !== var3)) { _fun0118_ip = 106; continue _fun0118 }
case 426:
            var2 = _closure1_slot26;
            var2 = var2.RTC_CONNECTED;
            if(!(var2 !== var3)) { _fun0118_ip = 64; continue _fun0118 }
case 32:
            var2 = _closure1_slot26;
            var2 = var2.DISCONNECTED;
            if(!(var2 === var3)) { _fun0118_ip = 366; continue _fun0118 }
case 3:
            var2 = {};
            _closure1_slot138 = var2;
            var2 = function resetAutoDisabledVideoState() {
                _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
                    var1 = _closure1_slot124;
                    var2 = var1.size;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0119_ip = 17; continue _fun0119 }
case 33:
                    var1 = _closure1_slot50;
                    var5 = var1.DEFAULT;
                    var _closure3_slot0 = var5;
                    var2 = _closure1_slot148;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5);
                    var2 = var2.disabledLocalVideos;
                    var _closure3_slot1 = var2;
                    var7 = _closure1_slot124;
                    var6 = var7.forEach;
                    var4 = function(arg1) {
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 73;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var5.bind(var1)(var3);
                        var5 = _closure3_slot1;
                        var7 = var5[var6];
                        var5 = 'If you are auto-disabled, then you are also disabled.';
                        var5 = var8.bind(var1)(var7, var5);
                        var5 = _closure3_slot1;
                        var5 = delete var5[var6];
                        var5 = _closure1_slot73;
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
                    var6 = _closure1_slot124;
                    var4 = var6.clear;
                    var4 = var4.bind(var6)();
                    var4 = _closure1_slot164;
                    var3 = {};
                    var3['disabledLocalVideos'] = var2;
                    var2 = false;
                    var2 = var4.bind(var1)(var3, var5, var2);
                    return var1;
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = undefined;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot178;
            var2 = var2.bind(var3)();
            _fun0118_ip = 366; continue _fun0118;
case 64:
            var3 = _closure1_slot152;
            var2 = undefined;
            var2 = var3.bind(var2)();
            _fun0118_ip = 366; continue _fun0118;
case 106:
            var2 = false;
            _closure1_slot103 = var2;
            var3 = undefined;
            _closure1_slot105 = var3;
            _closure1_slot106 = var3;
            _closure1_slot102 = var2;
            _closure1_slot132 = var2;
            var3 = _closure1_slot133;
            var2 = var3.stop;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot104;
            var2 = var3.stop;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot77;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            _fun0118_ip = 366; continue _fun0118;
case 20:
            var2 = _closure1_slot166;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 366:
            var1 = undefined;
            return var1;
        }
    };
    var7['RTC_CONNECTION_STATE'] = var16;
    var16 = function handleSetTemporarySelfMute(arg1) {
        var1 = arg1;
        var2 = var1.mute;
        _closure1_slot91 = var2;
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = _closure1_slot151;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['AUDIO_SET_TEMPORARY_SELF_MUTE'] = var16;
    var16 = function handleToggleSelfMute(arg1) {
        _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
case 0:
            var1 = arg1;
            var5 = var1.context;
            var3 = var1.playSoundEffect;
            var4 = _closure1_slot148;
            var1 = undefined;
            var6 = var4.bind(var1)(var5);
            var4 = var6.mute;
            var6 = var6.deaf;
            var7 = _closure1_slot50;
            var7 = var7.DEFAULT;
            if(!(var5 === var7)) { _fun0120_ip = 93; continue _fun0120 }
case 102:
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 31;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.requestPermission;
            var7 = _closure1_slot38;
            var7 = var7.AUDIO;
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot92;
            if(var7) { _fun0120_ip = 270; continue _fun0120 }
case 93:
            var7 = !var6;
            if(!var7) { _fun0120_ip = 106; continue _fun0120 }
case 173:
            var7 = !var4;
case 106:
            if(var7) { _fun0120_ip = 97; continue _fun0120 }
case 191:
            var6 = false;
case 97:
            if(var3) { _fun0120_ip = 175; continue _fun0120 }
case 67:
            var3 = true;
            _closure1_slot97 = var3;
case 175:
            var4 = _closure1_slot164;
            var3 = {};
            var3['mute'] = var7;
            var3['deaf'] = var6;
            var3 = var4.bind(var1)(var3, var5);
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = _closure1_slot151;
            var2 = var3.bind(var4)(var2);
            return var1;
case 270:
            var1 = false;
            return var1;
        }
    };
    var7['AUDIO_TOGGLE_SELF_MUTE'] = var16;
    var16 = function handleSetSelfMute(arg1) {
        _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
            var2 = arg1;
            var6 = var2.context;
            var1 = var2.mute;
            var3 = var2.playSoundEffect;
            var5 = _closure1_slot164;
            var4 = {};
            var4['mute'] = var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var4, var6);
            if(var3) { _fun0121_ip = 404; continue _fun0121 }
case 354:
            var3 = true;
            _closure1_slot97 = var3;
case 404:
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = _closure1_slot151;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var7['AUDIO_SET_SELF_MUTE'] = var16;
    var16 = function handleToggleSelfDeafen(arg1) {
        var1 = arg1;
        var5 = var1.context;
        var4 = _closure1_slot164;
        var3 = {};
        var6 = _closure1_slot148;
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var6 = var6.deaf;
        var6 = !var6;
        var3['deaf'] = var6;
        var3 = var4.bind(var1)(var3, var5);
        var4 = _closure1_slot73;
        var3 = var4.eachConnection;
        var2 = _closure1_slot151;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['AUDIO_TOGGLE_SELF_DEAF'] = var16;
    var16 = function handleToggleLocalMute(arg1) {
        _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
            var1 = arg1;
            var5 = var1.context;
            var4 = var1.userId;
            var _closure2_slot0 = var4;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot16;
            var6 = var7.getId;
            var6 = var6.bind(var7)();
            if(!(var4 !== var6)) { _fun0122_ip = 325; continue _fun0122 }
case 6:
            var6 = _closure1_slot148;
            var6 = var6.bind(var1)(var5);
            var7 = var6.localMutes;
            _closure2_slot1 = var7;
            var6 = var7[var4];
            if(var6) { _fun0122_ip = 39; continue _fun0122 }
case 5:
            var6 = true;
            var7[var4] = var6;
            _fun0122_ip = 44; continue _fun0122;
case 39:
            var4 = delete var7[var4];
case 44:
            var6 = _closure1_slot164;
            var4 = {};
            var4['localMutes'] = var7;
            var4 = var6.bind(var1)(var4, var5);
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = function(arg1) {
                _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.setLocalMute;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var1[var2];
                    if(var1) { _fun0123_ip = 314; continue _fun0123 }
case 321:
                    var1 = false;
case 314:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var5);
case 325:
            return var1;
        }
    };
    var7['AUDIO_TOGGLE_LOCAL_MUTE'] = var16;
    var16 = function handleSetLocalVideoDisabled(arg1) {
        _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
case 0:
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
            var18 = 73;
            var4 = var4[var18];
            var9 = var8.bind(var1)(var4);
            var4 = var7;
            if(!var7) { _fun0124_ip = 62; continue _fun0124 }
case 5:
            var4 = var13;
case 62:
            var8 = !var4;
            var4 = 'These are not allowed to both be true.';
            var4 = var9.bind(var1)(var8, var4);
            var4 = _closure1_slot28;
            var4 = var4.DISABLED;
            var4 = var17 === var4;
            var8 = _closure1_slot148;
            var8 = var8.bind(var1)(var5);
            var8 = var8.disabledLocalVideos;
            _closure2_slot1 = var8;
            var10 = var8[var6];
            var15 = null;
            var9 = var15 != var10;
            if(!var9) { _fun0124_ip = 453; continue _fun0124 }
case 454:
            var9 = var10;
case 453:
            var11 = _closure1_slot124;
            var10 = var11.has;
            var10 = var10.bind(var11)(var6);
            var11 = _closure1_slot28;
            var11 = var11.AUTO_ENABLED;
            var11 = var17 === var11;
            if(var11) { _fun0124_ip = 455; continue _fun0124 }
case 405:
            var12 = _closure1_slot28;
            var12 = var12.MANUAL_ENABLED;
            var11 = var17 === var12;
case 455:
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
            if(!var11) { _fun0124_ip = 456; continue _fun0124 }
case 195:
            var11 = !var9;
case 456:
            var16 = !var11;
            var11 = 'If you are auto-disabled, then you are also disabled.';
            var11 = var18.bind(var1)(var16, var11);
            var24 = var4 !== var9;
            var9 = _closure1_slot50;
            var9 = var9.DEFAULT;
            var9 = var5 === var9;
            if(!var13) { _fun0124_ip = 457; continue _fun0124 }
case 199:
            var13 = var24;
case 457:
            if(!var13) { _fun0124_ip = 31; continue _fun0124 }
case 12:
            var13 = var9;
case 31:
            var11 = var7;
            if(!var11) { _fun0124_ip = 319; continue _fun0124 }
case 458:
            var11 = var24;
case 319:
            if(!var11) { _fun0124_ip = 198; continue _fun0124 }
case 320:
            var11 = var9;
case 198:
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
            var16 = _closure1_slot148;
            var16 = var16.bind(var1)(var5);
            var19 = var16.videoToggleStateMap;
            var18 = var19[var6];
            var16 = _closure1_slot28;
            var16 = var16.AUTO_PROBING;
            var16 = var18 === var16;
            if(!var16) { _fun0124_ip = 126; continue _fun0124 }
case 459:
            var18 = _closure1_slot28;
            var18 = var18.AUTO_ENABLED;
            var16 = var17 === var18;
case 126:
            if(!var16) { _fun0124_ip = 460; continue _fun0124 }
case 461:
            var18 = _closure1_slot1;
            var20 = _closure1_slot3;
            var16 = 74;
            var16 = var20[var16];
            var18 = var18.bind(var1)(var16);
            var20 = _closure1_slot54;
            if(var4) { _fun0124_ip = 462; continue _fun0124 }
case 463:
            var16 = var20.AUTO_ENABLE;
            _fun0124_ip = 464; continue _fun0124;
case 462:
            var16 = var20.AUTO_DISABLE;
case 464:
            var16 = var18.bind(var1)(var6, var16, var12);
case 460:
            var19[var6] = var17;
            var18 = _closure1_slot164;
            var16 = {};
            var16['videoToggleStateMap'] = var19;
            var16 = var18.bind(var1)(var16, var5, var7);
            var16 = _closure1_slot28;
            var16 = var16.AUTO_PROBING;
            if(!(var17 !== var16)) { _fun0124_ip = 465; continue _fun0124 }
case 466:
            var17 = _closure1_slot20;
            var16 = var17.getRTCConnection;
            var18 = var16.bind(var17)();
            if(!(var15 != var18)) { _fun0124_ip = 467; continue _fun0124 }
case 468:
            var17 = var18.pauseStatsCollectionForUser;
            var16 = false;
            var16 = var17.bind(var18)(var6, var16);
            _fun0124_ip = 467; continue _fun0124;
case 465:
            var17 = _closure1_slot20;
            var16 = var17.getRTCConnection;
            var18 = var16.bind(var17)();
            if(!(var15 != var18)) { _fun0124_ip = 467; continue _fun0124 }
case 469:
            var17 = var18.pauseStatsCollectionForUser;
            var16 = true;
            var16 = var17.bind(var18)(var6, var16);
case 467:
            var16 = _closure1_slot125;
            if(var16) { _fun0124_ip = 470; continue _fun0124 }
case 471:
            var17 = _closure1_slot58;
            var16 = var17.info;
            var20 = _closure1_slot125;
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
            if(var14) { _fun0124_ip = 472; continue _fun0124 }
case 473:
            var17 = var18.getVideoHealthManager;
            var17 = var17.bind(var18)();
            var14 = var15 == var17;
            var16 = var17;
case 472:
            if(var14) { _fun0124_ip = 470; continue _fun0124 }
case 474:
            var14 = var16.disable;
            var14 = var14.bind(var16)();
case 470:
            if(var13) { _fun0124_ip = 475; continue _fun0124 }
case 476:
            if(!var11) { _fun0124_ip = 477; continue _fun0124 }
case 478:
            if(!var10) { _fun0124_ip = 479; continue _fun0124 }
case 480:
            if(var4) { _fun0124_ip = 479; continue _fun0124 }
case 481:
            var14 = _closure1_slot58;
            var13 = var14.info;
            var11 = 'disallowing auto-disable for this session because of manual override by user';
            var11 = var13.bind(var14)(var11);
            var11 = false;
            _closure1_slot125 = var11;
            var13 = _closure1_slot20;
            var11 = var13.getRTCConnection;
            var16 = var11.bind(var13)();
            var11 = var15 == var16;
            var13 = var16;
            if(var11) { _fun0124_ip = 482; continue _fun0124 }
case 144:
            var14 = var16.getVideoHealthManager;
            var14 = var14.bind(var16)();
            var11 = var15 == var14;
            var13 = var14;
case 482:
            if(var11) { _fun0124_ip = 483; continue _fun0124 }
case 484:
            var11 = var13.disable;
            var11 = var11.bind(var13)();
case 483:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var11 = 74;
            var11 = var14[var11];
            var13 = var13.bind(var1)(var11);
            var11 = _closure1_slot54;
            var11 = var11.MANUAL_REENABLE;
            var11 = var13.bind(var1)(var6, var11, var12);
            _fun0124_ip = 477; continue _fun0124;
case 479:
            var13 = _closure1_slot1;
            var14 = _closure1_slot3;
            var11 = 74;
            var11 = var14[var11];
            var13 = var13.bind(var1)(var11);
            var14 = _closure1_slot54;
            if(var4) { _fun0124_ip = 485; continue _fun0124 }
case 486:
            var11 = var14.MANUAL_ENABLE;
            _fun0124_ip = 487; continue _fun0124;
case 485:
            var11 = var14.MANUAL_DISABLE;
case 487:
            var11 = var13.bind(var1)(var6, var11, var12);
            _fun0124_ip = 477; continue _fun0124;
case 475:
            if(var4) { _fun0124_ip = 488; continue _fun0124 }
case 489:
            if(var10) { _fun0124_ip = 488; continue _fun0124 }
case 490:
            return var1;
case 488:
            if(!var4) { _fun0124_ip = 491; continue _fun0124 }
case 492:
            var10 = _closure1_slot125;
            if(var10) { _fun0124_ip = 491; continue _fun0124 }
case 493:
            return var1;
case 491:
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var10 = 74;
            var10 = var13[var10];
            var11 = var11.bind(var1)(var10);
            var13 = _closure1_slot54;
            if(var4) { _fun0124_ip = 494; continue _fun0124 }
case 495:
            var10 = var13.AUTO_ENABLE;
            _fun0124_ip = 496; continue _fun0124;
case 494:
            var10 = var13.AUTO_DISABLE;
case 496:
            var10 = var11.bind(var1)(var6, var10, var12);
            var11 = _closure1_slot124;
            if(var4) { _fun0124_ip = 497; continue _fun0124 }
case 498:
            var10 = var11.delete;
            var10 = var10.bind(var11)(var6);
            _fun0124_ip = 477; continue _fun0124;
case 497:
            var10 = var11.add;
            var10 = var10.bind(var11)(var6);
case 477:
            if(!var9) { _fun0124_ip = 499; continue _fun0124 }
case 500:
            var9 = !var4;
case 499:
            if(!var9) { _fun0124_ip = 501; continue _fun0124 }
case 502:
            var10 = _closure1_slot124;
            var9 = var10.delete;
            var9 = var9.bind(var10)(var6);
case 501:
            if(var4) { _fun0124_ip = 158; continue _fun0124 }
case 503:
            var4 = delete var8[var6];
            _fun0124_ip = 161; continue _fun0124;
case 158:
            var4 = true;
            var8[var6] = var4;
case 161:
            var6 = _closure1_slot164;
            var4 = {};
            var4['disabledLocalVideos'] = var8;
            var4 = var6.bind(var1)(var4, var5, var7);
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = function(arg1) {
                _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.setLocalVideoDisabled;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var5 = var1[var2];
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0125_ip = 399; continue _fun0125 }
case 37:
                    var1 = var5;
case 399:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var7['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = var16;
    var16 = function handleSetLocalVolume(arg1) {
        _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
case 0:
            var2 = arg1;
            var4 = var2.context;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var5 = var2.volume;
            var _closure2_slot1 = var5;
            var7 = _closure1_slot16;
            var6 = var7.getId;
            var6 = var6.bind(var7)();
            if(!(var3 !== var6)) { _fun0126_ip = 68; continue _fun0126 }
case 60:
            var6 = _closure1_slot50;
            var6 = var6.STREAM;
            if(!(var4 !== var6)) { _fun0126_ip = 3; continue _fun0126 }
case 306:
            var8 = _closure1_slot44;
            _fun0126_ip = 4; continue _fun0126;
case 3:
            var8 = _closure1_slot45;
case 4:
            var7 = _closure1_slot148;
            var6 = undefined;
            var7 = var7.bind(var6)(var4);
            var7 = var7.localVolumes;
            if(!(var5 !== var8)) { _fun0126_ip = 104; continue _fun0126 }
case 301:
            var7[var3] = var5;
            _fun0126_ip = 96; continue _fun0126;
case 104:
            var3 = delete var7[var3];
case 96:
            var5 = _closure1_slot164;
            var3 = {};
            var3['localVolumes'] = var7;
            var3 = var5.bind(var6)(var3, var4);
            var3 = _closure1_slot73;
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
case 68:
            var1 = undefined;
            return var1;
        }
    };
    var7['AUDIO_SET_LOCAL_VOLUME'] = var16;
    var16 = function handleSetAudioMixerSettings(arg1) {
        var1 = arg1;
        var6 = var1.context;
        var4 = var1.settings;
        var5 = _closure1_slot164;
        var3 = {};
        var3['audioMixerSettings'] = var4;
        var1 = undefined;
        var3 = var5.bind(var1)(var3, var6);
        var3 = _closure1_slot73;
        var2 = var3.setAudioMixerOptions;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var7['AUDIO_SET_AUDIO_MIXER_SETTINGS'] = var16;
    var16 = function handleSetLocalPan(arg1) {
        var1 = arg1;
        var5 = var1.context;
        var6 = var1.userId;
        var _closure2_slot0 = var6;
        var9 = var1.left;
        var _closure2_slot1 = var9;
        var8 = var1.right;
        var _closure2_slot2 = var8;
        var4 = _closure1_slot148;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var7 = var4.localPans;
        var4 = {};
        var4['left'] = var9;
        var4['right'] = var8;
        var7[var6] = var4;
        var6 = _closure1_slot164;
        var4 = {};
        var4['localPans'] = var7;
        var4 = var6.bind(var1)(var4, var5);
        var4 = _closure1_slot73;
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
    var7['AUDIO_SET_LOCAL_PAN'] = var16;
    var16 = function handleAudioSetMode(arg1) {
        var2 = arg1;
        var5 = var2.context;
        var1 = var2.mode;
        var8 = var2.options;
        var4 = _closure1_slot164;
        var3 = {};
        var3['mode'] = var1;
        var1 = {};
        var9 = var1;
        var6 = copyDataProperties(var9, var8);
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'updatedAt';
        var1[5] = var7;
        var3['modeOptions'] = var1;
        var1 = undefined;
        var3 = var4.bind(var1)(var3, var5);
        var4 = _closure1_slot73;
        var3 = var4.eachConnection;
        var2 = _closure1_slot149;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['AUDIO_SET_MODE'] = var16;
    var16 = function handleAudioSetInputVolume(arg1) {
        var1 = arg1;
        var4 = var1.volume;
        var5 = _closure1_slot164;
        var3 = {};
        var6 = _closure1_slot150;
        var1 = undefined;
        var6 = var6.bind(var1)(var4);
        var3['inputVolume'] = var6;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot73;
        var2 = var3.setInputVolume;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var7['AUDIO_SET_INPUT_VOLUME'] = var16;
    var16 = function handleAudioSetOutputVolume(arg1) {
        var1 = arg1;
        var4 = var1.volume;
        var5 = _closure1_slot164;
        var3 = {};
        var3['outputVolume'] = var4;
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot73;
        var2 = var3.setOutputVolume;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var7['AUDIO_SET_OUTPUT_VOLUME'] = var16;
    var16 = function handleSetInputDevice(arg1) {
        _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
case 0:
            var1 = arg1;
            var5 = var1.id;
            var4 = _closure1_slot169;
            var3 = _closure1_slot86;
            var1 = undefined;
            var4 = var4.bind(var1)(var3, var5);
            var3 = global;
            var5 = var3.performance;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            _closure1_slot83 = var3;
            var5 = _closure1_slot164;
            var3 = {};
            var3['inputDeviceId'] = var4;
            var3 = var5.bind(var1)(var3);
            var3 = _closure1_slot171;
            var3 = var3.bind(var1)(var4);
            var5 = _closure1_slot73;
            var4 = var5.eachConnection;
            var3 = _closure1_slot158;
            var3 = var4.bind(var5)(var3);
            _closure1_slot105 = var1;
            _closure1_slot106 = var1;
            var4 = _closure1_slot133;
            var3 = var4.stop;
            var3 = var3.bind(var4)();
            var3 = false;
            _closure1_slot132 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var4 = 75;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.getConfig;
            var4 = {};
            var7 = 'MediaEngineStore.handleSetInputDevice';
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = var4.resetSilenceWarningOnDeviceChange;
            if(!var4) { _fun0127_ip = 77; continue _fun0127 }
case 47:
            _closure1_slot102 = var3;
            var3 = _closure1_slot77;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
case 77:
            return var1;
        }
    };
    var7['AUDIO_SET_INPUT_DEVICE'] = var16;
    var16 = function handleSetOutputDevice(arg1) {
        var1 = arg1;
        var7 = var1.id;
        var5 = _closure1_slot164;
        var3 = {};
        var6 = _closure1_slot169;
        var4 = _closure1_slot87;
        var1 = undefined;
        var4 = var6.bind(var1)(var4, var7);
        var3['outputDeviceId'] = var4;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot73;
        var2 = var3.setAudioOutputDevice;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var7['AUDIO_SET_OUTPUT_DEVICE'] = var16;
    var16 = function handleSetActiveInputProfile(arg1) {
        var1 = arg1;
        var1 = var1.inputProfile;
        var4 = _closure1_slot164;
        var3 = {};
        var3['activeInputProfile'] = var1;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = _closure1_slot148;
        var3 = var3.bind(var1)();
        var6 = _closure1_slot73;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot149;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var2 = _closure1_slot158;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var5 = _closure1_slot73;
        var4 = var5.setAudioInputBypassSystemProcessing;
        var3 = var3.bypassSystemInputProcessing;
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot180;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['AUDIO_SET_ACTIVE_INPUT_PROFILE'] = var16;
    var16 = function handleSetEchoCancellation(arg1) {
        var2 = arg1;
        var6 = _closure1_slot164;
        var5 = {};
        var1 = var2.enabled;
        var5['echoCancellation'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot73;
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
        var4 = _closure1_slot180;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot179;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_ECHO_CANCELLATION'] = var16;
    var16 = function handleSetSidechainCompression(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var4 = _closure1_slot164;
        var2 = {};
        var2['sidechainCompression'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = _closure1_slot73;
        var3 = var4.setSidechainCompression;
        var2 = var2.sidechainCompression;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['AUDIO_SET_SIDECHAIN_COMPRESSION'] = var16;
    var16 = function handleSetSidechainCompressionStrength(arg1) {
        var4 = _closure1_slot164;
        var2 = {};
        var1 = arg1;
        var1 = var1.strength;
        var2['sidechainCompressionStrength'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = _closure1_slot73;
        var3 = var4.setSidechainCompressionStrength;
        var2 = var2.sidechainCompressionStrength;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH'] = var16;
    var16 = function handleSetLoopback(arg1) {
        _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabled;
            var4 = var1.loopbackReason;
            var3 = _closure1_slot126;
            if(var2) { _fun0128_ip = 399; continue _fun0128 }
case 504:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            _fun0128_ip = 6; continue _fun0128;
case 399:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
case 6:
            var2 = _closure1_slot180;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var7['AUDIO_SET_LOOPBACK'] = var16;
    var16 = function handleSetNoiseSuppression(arg1) {
        var2 = arg1;
        var6 = _closure1_slot164;
        var5 = {};
        var1 = var2.enabled;
        var5['noiseSuppression'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot73;
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
        var4 = _closure1_slot180;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot179;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_NOISE_SUPPRESSION'] = var16;
    var16 = function handleSetAutomaticGainControl(arg1) {
        var2 = arg1;
        var6 = _closure1_slot164;
        var5 = {};
        var1 = var2.enabled;
        var5['automaticGainControl'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot73;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var4 = _closure1_slot156;
            var1 = _closure2_slot0;
            var3 = var1.automaticGainControl;
            var1 = undefined;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot180;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot179;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_AUTOMATIC_GAIN_CONTROL'] = var16;
    var16 = function handleSetNoiseCancellation(arg1) {
        var2 = arg1;
        var6 = _closure1_slot164;
        var5 = {};
        var1 = var2.enabled;
        var5['noiseCancellation'] = var1;
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot73;
        var5 = var6.eachConnection;
        var4 = function(arg1) {
            var4 = _closure1_slot157;
            var1 = _closure2_slot0;
            var3 = var1.noiseCancellation;
            var1 = undefined;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot180;
        var4 = var4.bind(var1)();
        var3 = _closure1_slot179;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_NOISE_CANCELLATION'] = var16;
    var16 = function handleSetKrispModelOverride(arg1) {
        var3 = arg1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 76;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.setKrispModelOverride;
        var4 = var3.model;
        var4 = var5.bind(var6)(var4);
        var3 = var3.model;
        _closure1_slot113 = var3;
        var2 = _closure1_slot180;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['AUDIO_SET_KRISP_MODEL_OVERRIDE'] = var16;
    var16 = function handleSetSilenceWarning(arg1) {
        var3 = _closure1_slot164;
        var2 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var2['silenceWarning'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_DISPLAY_SILENCE_WARNING'] = var16;
    var16 = function handleSetDebugLogging(arg1) {
        var3 = _closure1_slot73;
        var2 = var3.setDebugLogging;
        var1 = arg1;
        var1 = var1.enabled;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['AUDIO_SET_DEBUG_LOGGING'] = var16;
    var16 = function handleSetKrispSuppressionLevel(arg1) {
        var1 = arg1;
        var4 = var1.level;
        _closure1_slot112 = var4;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 76;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.setKrispSuppressionLevel;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var7['AUDIO_SET_KRISP_SUPPRESSION_LEVEL'] = var16;
    var16 = function handleSetNoiseCancellationEnableStats(arg1) {
        _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 28;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isWeb;
            var4 = var4.bind(var5)();
            if(var4) { _fun0129_ip = 13; continue _fun0129 }
case 91:
            var4 = var2.enabled;
            _closure1_slot115 = var4;
            var4 = _closure1_slot73;
            var5 = var4.setNoiseCancellationEnableStats;
            var4 = null;
            if(!(var4 != var5)) { _fun0129_ip = 13; continue _fun0129 }
case 43:
            var4 = _closure1_slot73;
            var3 = var4.setNoiseCancellationEnableStats;
            var2 = var2.enabled;
            var2 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var7['AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS'] = var16;
    var16 = function handleSetVideoHook(arg1) {
        var3 = _closure1_slot164;
        var2 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var2['videoHook'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['MEDIA_ENGINE_SET_VIDEO_HOOK'] = var16;
    var16 = function handleSetExperimentalSoundshare(arg1) {
        var3 = _closure1_slot164;
        var2 = {};
        var1 = arg1;
        var1 = var1.enabled;
        var2['experimentalSoundshare2'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE'] = var16;
    var16 = function handleSetUseSystemScreensharePicker(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var3 = _closure1_slot164;
        var2 = {};
        var2['useSystemScreensharePicker'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER'] = var16;
    var16 = function handleSetAttenuation(arg1) {
        var1 = arg1;
        var7 = var1.attenuation;
        var6 = var1.attenuateWhileSpeakingSelf;
        var1 = var1.attenuateWhileSpeakingOthers;
        var5 = _closure1_slot164;
        var4 = {};
        var4['attenuation'] = var7;
        var4['attenuateWhileSpeakingSelf'] = var6;
        var4['attenuateWhileSpeakingOthers'] = var1;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure2_slot0 = var4;
        var4 = _closure1_slot73;
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
    var7['AUDIO_SET_ATTENUATION'] = var16;
    var16 = function handleSetQoS(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot164;
        var4 = {};
        var4['qos'] = var1;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = _closure1_slot73;
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
    var7['AUDIO_SET_QOS'] = var16;
    var16 = function handleDevices(arg1) {
        var1 = arg1;
        var6 = var1.inputDevices;
        var5 = var1.outputDevices;
        var3 = var1.videoDevices;
        var4 = _closure1_slot172;
        var1 = undefined;
        var4 = var4.bind(var1)(var6);
        var4 = _closure1_slot174;
        var4 = var4.bind(var1)(var5);
        var2 = _closure1_slot175;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var7['MEDIA_ENGINE_DEVICES'] = var16;
    var16 = function handleVolumeChange(arg1) {
        var1 = arg1;
        var6 = var1.inputVolume;
        var4 = var1.outputVolume;
        var3 = _closure1_slot164;
        var2 = {};
        var5 = _closure1_slot150;
        var1 = undefined;
        var5 = var5.bind(var1)(var6);
        var2['inputVolume'] = var5;
        var2['outputVolume'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_VOLUME_CHANGE'] = var16;
    var16 = function handleReset() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 63;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var2 = _closure1_slot59;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['AUDIO_RESET'] = var16;
    var16 = function handleInputDetected(arg1) {
        _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
case 0:
            var1 = arg1;
            var5 = var1.inputDetected;
            var4 = null;
            if(!(var4 != var5)) { _fun0130_ip = 505; continue _fun0130 }
case 33:
            var6 = _closure1_slot102;
            var2 = true;
            var6 = var2 !== var6;
            if(!var6) { _fun0130_ip = 58; continue _fun0130 }
case 399:
            var6 = !var5;
case 58:
            _closure1_slot103 = var6;
            if(var5) { _fun0130_ip = 506; continue _fun0130 }
case 9:
            var5 = _closure1_slot148;
            var9 = undefined;
            var5 = var5.bind(var9)();
            var6 = var5.mode;
            var5 = _closure1_slot25;
            var5 = var5.VOICE_ACTIVITY;
            if(!(var6 === var5)) { _fun0130_ip = 351; continue _fun0130 }
case 61:
            var5 = _closure1_slot102;
            if(!var5) { _fun0130_ip = 351; continue _fun0130 }
case 171:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 75;
            var5 = var7[var5];
            var7 = var6.bind(var9)(var5);
            var6 = var7.getConfig;
            var5 = {};
            var8 = 'MediaEngineStore.handleInputDetected';
            var5['location'] = var8;
            var6 = var6.bind(var7)(var5);
            var5 = var6.enableHardwareSilenceWarning;
            var7 = var6.resetSilenceWarningAfterNMinutes;
            if(!var5) { _fun0130_ip = 304; continue _fun0130 }
case 429:
            var10 = _closure1_slot133;
            var8 = var10.start;
            var6 = _closure1_slot65;
            var5 = function() {
                _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 46;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot23;
                    var4 = var3.HARDWARE_MUTE_GUESSED;
                    var3 = {};
                    var8 = _closure1_slot86;
                    var9 = _closure1_slot169;
                    var7 = _closure1_slot148;
                    var7 = var7.bind(var1)();
                    var7 = var7.inputDeviceId;
                    var7 = var9.bind(var1)(var8, var7);
                    var8 = var8[var7];
                    var7 = null;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0131_ip = 361; continue _fun0131 }
case 63:
                    var7 = var8.name;
case 361:
                    var3['input_device_name'] = var7;
                    var8 = _closure1_slot20;
                    var7 = var8.getRTCConnectionId;
                    var7 = var7.bind(var8)();
                    var3['rtc_connection_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = true;
                    _closure1_slot132 = var3;
                    var3 = _closure1_slot70;
                    var2 = var3.emitChange;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var5 = var8.bind(var10)(var6, var5);
case 304:
            if(!(var4 != var7)) { _fun0130_ip = 351; continue _fun0130 }
case 368:
            var6 = _closure1_slot104;
            var5 = var6.start;
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var4 = 27;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.Millis;
            var4 = var4.MINUTE;
            var4 = var7 * var4;
            var3 = function() {
                var2 = false;
                _closure1_slot102 = var2;
                var2 = _closure1_slot77;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3 = var5.bind(var6)(var4, var3);
            _fun0130_ip = 351; continue _fun0130;
case 506:
            _closure1_slot102 = var2;
            var2 = false;
            _closure1_slot132 = var2;
            var3 = _closure1_slot133;
            var2 = var3.stop;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot104;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
case 351:
            var1 = undefined;
            return var1;
case 505:
            var1 = false;
            return var1;
        }
    };
    var7['AUDIO_INPUT_DETECTED'] = var16;
    var16 = function handleOSConfigFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.osVolume;
        var2 = var1.osMuted;
        _closure1_slot106 = var3;
        _closure1_slot105 = var2;
        var1 = undefined;
        return var1;
    };
    var7['AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED'] = var16;
    var16 = function handleSetAudioSubsystem(arg1) {
        var3 = _closure1_slot187;
        var1 = arg1;
        var2 = var1.subsystem;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_SUBSYSTEM'] = var16;
    var16 = function handleBypassSystemInputProcessing(arg1) {
        var2 = arg1;
        var6 = var2.bypassEnabled;
        var5 = _closure1_slot164;
        var4 = {};
        var4['bypassSystemInputProcessing'] = var6;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var5 = _closure1_slot73;
        var4 = var5.setAudioInputBypassSystemProcessing;
        var4 = var4.bind(var5)(var6);
        var3 = _closure1_slot179;
        var2 = var2.location;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING'] = var16;
    var16 = function handleSetAudioEnabled(arg1) {
        _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
case 0:
            var2 = arg1;
            var3 = var2.enabled;
            _closure1_slot80 = var3;
            var2 = var2.unmute;
            if(!var2) { _fun0132_ip = 9; continue _fun0132 }
case 504:
            var4 = _closure1_slot164;
            var3 = undefined;
            var2 = {'mute': false, 'deaf': false};
            var2 = var4.bind(var3)(var2);
case 9:
            var3 = _closure1_slot73;
            var2 = var3.eachConnection;
            var1 = _closure1_slot151;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var7['MEDIA_ENGINE_SET_AUDIO_ENABLED'] = var16;
    var16 = function handleSetVideoEnabled(arg1) {
        var1 = arg1;
        var3 = var1.enabled;
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 31;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.requestPermission;
        var4 = _closure1_slot38;
        var4 = var4.CAMERA;
        var4 = var5.bind(var6)(var4);
        var2 = _closure1_slot152;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var7['MEDIA_ENGINE_SET_VIDEO_ENABLED'] = var16;
    var16 = function handlePermission(arg1) {
        _fun0133: for(var _fun0133_ip = 0; ; ) switch(_fun0133_ip) {
case 0:
            var1 = arg1;
            var2 = var1.kind;
            var1 = var1.granted;
            if(var1) { _fun0133_ip = 346; continue _fun0133 }
case 425:
            var1 = 'audio';
            if(!(var1 !== var2)) { _fun0133_ip = 404; continue _fun0133 }
case 312:
            var1 = 'video';
            if(!(var1 === var2)) { _fun0133_ip = 346; continue _fun0133 }
case 37:
            var3 = _closure1_slot152;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1);
            _fun0133_ip = 346; continue _fun0133;
case 404:
            var2 = false;
            _closure1_slot80 = var2;
            var3 = _closure1_slot73;
            var2 = var3.eachConnection;
            var1 = _closure1_slot151;
            var1 = var2.bind(var3)(var1);
case 346:
            var1 = undefined;
            return var1;
        }
    };
    var7['MEDIA_ENGINE_PERMISSION'] = var16;
    var16 = function handleSetGoLiveSource(arg1) {
        _fun0134: for(var _fun0134_ip = 0; ; ) switch(_fun0134_ip) {
case 0:
            var1 = arg1;
            var2 = var1.settings;
            var12 = null;
            var4 = var12 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0134_ip = 38; continue _fun0134 }
case 55:
            var3 = var2.desktopSettings;
case 38:
            if(!(var12 == var3)) { _fun0134_ip = 507; continue _fun0134 }
case 422:
            var4 = var12 == var2;
            var3 = undefined;
            if(var4) { _fun0134_ip = 60; continue _fun0134 }
case 278:
            var3 = var2.cameraSettings;
case 60:
            if(!(var12 == var3)) { _fun0134_ip = 187; continue _fun0134 }
case 102:
            var4 = _closure1_slot152;
            var3 = _closure1_slot94;
            var3 = var4.bind(var1)(var3, var12);
            _fun0134_ip = 508; continue _fun0134;
case 187:
            var5 = var2.context;
            if(!(var12 == var5)) { _fun0134_ip = 94; continue _fun0134 }
case 63:
            var3 = _closure1_slot50;
            var5 = var3.DEFAULT;
case 94:
            var3 = var2.cameraSettings;
            var10 = var3.videoDeviceGuid;
            var9 = var3.audioDeviceGuid;
            var8 = var3.sound;
            var4 = _closure1_slot50;
            var4 = var4.STREAM;
            var5 = var5 === var4;
            if(!var5) { _fun0134_ip = 48; continue _fun0134 }
case 177:
            var5 = _closure1_slot94;
case 48:
            var7 = var2.qualityOptions;
            if(!(var12 == var7)) { _fun0134_ip = 405; continue _fun0134 }
case 345:
            var7 = {'resolution': 720, 'frameRate': 30};
case 405:
            var4 = _closure1_slot152;
            var3 = {};
            var6 = {};
            var6['videoDeviceGuid'] = var10;
            var6['audioDeviceGuid'] = var9;
            var6['sound'] = var8;
            var3['cameraSource'] = var6;
            var6 = {};
            var8 = var7.resolution;
            var6['resolution'] = var8;
            var7 = var7.frameRate;
            var6['frameRate'] = var7;
            var3['quality'] = var6;
            var3 = var4.bind(var1)(var5, var3);
            _fun0134_ip = 508; continue _fun0134;
case 507:
            var3 = var2.desktopSettings;
            var10 = var3.sourceId;
            var4 = var3.sound;
            var5 = var2.context;
            if(!(var12 == var5)) { _fun0134_ip = 195; continue _fun0134 }
case 28:
            var3 = _closure1_slot50;
            var5 = var3.DEFAULT;
case 195:
            var6 = var2.qualityOptions;
            if(!(var12 == var6)) { _fun0134_ip = 442; continue _fun0134 }
case 509:
            var6 = {'resolution': 720, 'frameRate': 30};
case 442:
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var3 = 60;
            var3 = var8[var3];
            var7 = var7.bind(var1)(var3);
            var3 = var7.getPidFromDesktopSource;
            var9 = var3.bind(var7)(var10);
            var7 = _closure1_slot0;
            var3 = 28;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.isPlatformEmbedded;
            var8 = null;
            var7 = null;
            if(!var3) { _fun0134_ip = 510; continue _fun0134 }
case 435:
            var3 = _closure1_slot177;
            var3 = var3.bind(var1)(var9, var4);
            var8 = var3.soundshareId;
            var7 = var3.soundshareSession;
case 510:
            var3 = _closure1_slot82;
            if(!(var5 !== var3)) { _fun0134_ip = 125; continue _fun0134 }
case 290:
            var3 = _closure1_slot75;
            if(!(var12 != var3)) { _fun0134_ip = 511; continue _fun0134 }
case 512:
            var11 = _closure1_slot73;
            var4 = var11.setGoLiveSource;
            var3 = _closure1_slot82;
            var3 = var4.bind(var11)(var12, var3);
case 511:
            _closure1_slot82 = var5;
case 125:
            var4 = _closure1_slot152;
            var3 = _closure1_slot50;
            var3 = var3.STREAM;
            var3 = var5 === var3;
            if(!var3) { _fun0134_ip = 513; continue _fun0134 }
case 514:
            var3 = _closure1_slot94;
case 513:
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
case 508:
            return var1;
        }
    };
    var7['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var16;
    var16 = function handleSetVideoDevice(arg1) {
        var1 = arg1;
        var7 = var1.id;
        var4 = _closure1_slot164;
        var3 = {};
        var6 = _closure1_slot169;
        var5 = _closure1_slot88;
        var1 = undefined;
        var5 = var6.bind(var1)(var5, var7);
        var3['videoDeviceId'] = var5;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot152;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['MEDIA_ENGINE_SET_VIDEO_DEVICE'] = var16;
    var16 = function handleInteractionRequired(arg1) {
        _fun0135: for(var _fun0135_ip = 0; ; ) switch(_fun0135_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot81;
            var1 = var2.required;
            var1 = var4 !== var1;
            if(!var1) { _fun0135_ip = 59; continue _fun0135 }
case 35:
            var4 = var2.required;
            _closure1_slot81 = var4;
            var4 = var2.required;
            var1 = true;
            if(var4) { _fun0135_ip = 59; continue _fun0135 }
case 278:
            var4 = _closure1_slot73;
            var3 = var4.interact;
            var3 = var3.bind(var4)();
            var1 = true;
case 59:
            return var1;
        }
    };
    var7['MEDIA_ENGINE_INTERACTION_REQUIRED'] = var16;
    var7['USER_SETTINGS_MODAL_INIT'] = var8;
    var7['USER_SETTINGS_MODAL_SET_SECTION'] = var8;
    var8 = function handleSetCertifiedDevices() {
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = _closure1_slot158;
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var7['CERTIFIED_DEVICES_SET'] = var8;
    var8 = function handleAppConnected(arg1) {
        var1 = arg1;
        var1 = var1.application;
        var3 = _closure1_slot79;
        var2 = var3.add;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['RPC_APP_CONNECTED'] = var8;
    var8 = function handleAppDisconnected(arg1) {
        var1 = arg1;
        var1 = var1.application;
        var3 = _closure1_slot79;
        var2 = var3.delete;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['RPC_APP_DISCONNECTED'] = var8;
    var8 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var1 = var1.mediaEngineState;
        var3 = var1.settingsByContext;
        _closure1_slot78 = var3;
        var3 = var1.inputDevices;
        _closure1_slot86 = var3;
        var3 = var1.outputDevices;
        _closure1_slot87 = var3;
        var3 = var1.appSupported;
        _closure1_slot128 = var3;
        var3 = var1.krispModuleLoaded;
        _closure1_slot109 = var3;
        var3 = var1.krispFatalError;
        _closure1_slot110 = var3;
        var3 = var1.krispVersion;
        _closure1_slot111 = var3;
        var1 = var1.goLiveContext;
        _closure1_slot82 = var1;
        var1 = undefined;
        return var1;
    };
    var7['OVERLAY_INITIALIZE'] = var8;
    var8 = function handleFocus(arg1) {
        _fun0136: for(var _fun0136_ip = 0; ; ) switch(_fun0136_ip) {
case 0:
            var1 = arg1;
            var4 = var1.state;
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 79;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.isEnabled;
            var2 = var2.bind(var5)();
            var5 = _closure1_slot24;
            var5 = var5.BACKGROUND;
            if(!(var4 === var5)) { _fun0136_ip = 13; continue _fun0136 }
case 169:
            var5 = _closure1_slot94;
            if(!var5) { _fun0136_ip = 13; continue _fun0136 }
case 306:
            if(var2) { _fun0136_ip = 13; continue _fun0136 }
case 34:
            var2 = true;
            _closure1_slot100 = var2;
            var5 = _closure1_slot152;
            var2 = false;
            var2 = var5.bind(var3)(var2);
            _fun0136_ip = 444; continue _fun0136;
case 13:
            var2 = _closure1_slot24;
            var2 = var2.ACTIVE;
            if(!(var4 === var2)) { _fun0136_ip = 420; continue _fun0136 }
case 279:
            var2 = _closure1_slot100;
            if(!var2) { _fun0136_ip = 420; continue _fun0136 }
case 357:
            var2 = false;
            _closure1_slot100 = var2;
            var2 = _closure1_slot152;
            var1 = true;
            var1 = var2.bind(var3)(var1);
case 444:
            var1 = true;
            return var1;
case 420:
            var1 = false;
            return var1;
        }
    };
    var7['APP_STATE_UPDATE'] = var8;
    var8 = function handleSetChannelBitrate(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot73;
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
    var7['SET_CHANNEL_BITRATE'] = var8;
    var8 = function handleVADPermissionChange(arg1) {
        _fun0137: for(var _fun0137_ip = 0; ; ) switch(_fun0137_ip) {
case 0:
            var1 = arg1;
            var1 = var1.hasPermission;
            var2 = !var1;
            var3 = _closure1_slot92;
            if(!(var2 !== var3)) { _fun0137_ip = 60; continue _fun0137 }
case 35:
            _closure1_slot92 = var2;
            var3 = _closure1_slot73;
            var2 = var3.eachConnection;
            var1 = _closure1_slot151;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 60:
            var1 = false;
            return var1;
        }
    };
    var7['SET_VAD_PERMISSION'] = var8;
    var8 = function handleNativePermissionChange(arg1) {
        _fun0138: for(var _fun0138_ip = 0; ; ) switch(_fun0138_ip) {
case 0:
            var1 = arg1;
            var3 = var1.state;
            var4 = var1.permissionType;
            var2 = _closure1_slot37;
            var2 = var2.ACCEPTED;
            var3 = var3 === var2;
            var2 = _closure1_slot38;
            var2 = var2.AUDIO;
            if(!(var2 !== var4)) { _fun0138_ip = 171; continue _fun0138 }
case 354:
            var2 = _closure1_slot38;
            var2 = var2.CAMERA;
            if(!(var2 !== var4)) { _fun0138_ip = 309; continue _fun0138 }
case 427:
            var2 = false;
            return var2;
case 309:
            var2 = !var3;
            if(var3) { _fun0138_ip = 418; continue _fun0138 }
case 362:
            var2 = _closure1_slot94;
case 418:
            if(!var2) { _fun0138_ip = 97; continue _fun0138 }
case 187:
            var4 = _closure1_slot152;
            var3 = undefined;
            var2 = false;
            var2 = var4.bind(var3)(var2);
            _fun0138_ip = 97; continue _fun0138;
case 171:
            var2 = true;
            _closure1_slot123 = var2;
            var3 = _closure1_slot73;
            var2 = var3.eachConnection;
            var1 = _closure1_slot151;
            var1 = var2.bind(var3)(var1);
case 97:
            var1 = undefined;
            return var1;
        }
    };
    var7['SET_NATIVE_PERMISSION'] = var8;
    var8 = function handleSetChannelVideoQualityMode(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot73;
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
    var7['SET_CHANNEL_VIDEO_QUALITY_MODE'] = var8;
    var8 = function handleSetAecDump(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        var4 = _closure1_slot164;
        var2 = {};
        var2['aecDumpEnabled'] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = _closure1_slot73;
        var3 = var4.setAecDump;
        var2 = var2.aecDumpEnabled;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['MEDIA_ENGINE_SET_AEC_DUMP'] = var8;
    var8 = function handleSetOpenH264Enabled(arg1) {
        _fun0139: for(var _fun0139_ip = 0; ; ) switch(_fun0139_ip) {
case 0:
            var1 = arg1;
            var4 = var1.enabled;
            var5 = _closure1_slot164;
            var3 = {};
            var3['openH264Enabled'] = var4;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var5 = 66;
            var3 = var3[var5];
            var3 = var6.bind(var1)(var3);
            var7 = null;
            var3 = var7 == var3;
            if(var3) { _fun0139_ip = 63; continue _fun0139 }
case 57:
            var8 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.setOpenH264Enabled;
            var3 = var7 == var6;
case 63:
            if(var3) { _fun0139_ip = 97; continue _fun0139 }
case 51:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setOpenH264Enabled;
            var2 = var2.bind(var3)(var4);
case 97:
            return var1;
        }
    };
    var7['MEDIA_ENGINE_SET_OPENH264_ENABLED'] = var8;
    var8 = function handleResetSettings(arg1) {
        var2 = arg1;
        var2 = var2.overrides;
        var _closure2_slot0 = var2;
        var2 = global;
        var5 = var2.Object;
        var4 = var5.values;
        var3 = _closure1_slot50;
        var5 = var4.bind(var5)(var3);
        var4 = var5.reduce;
        var3 = function(arg1, arg2) {
            var1 = arg1;
            var3 = arg2;
            var4 = _closure1_slot143;
            var5 = undefined;
            var6 = var4.bind(var5)();
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 37;
            var2 = var7[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.merge;
            var2 = _closure2_slot0;
            var2 = var2[var3];
            var2 = var4.bind(var5)(var6, var2);
            var1[var3] = var2;
            return var1;
        };
        var1 = {};
        var1 = var4.bind(var5)(var3, var1);
        _closure1_slot78 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 63;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var6 = var3.Storage;
        var5 = var6.set;
        var4 = _closure1_slot59;
        var3 = _closure1_slot78;
        var3 = var5.bind(var6)(var4, var3);
        var2 = _closure1_slot165;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['MEDIA_ENGINE_RESET_SETTINGS'] = var8;
    var8 = function handleChannelDelete() {
        _fun0140: for(var _fun0140_ip = 0; ; ) switch(_fun0140_ip) {
case 0:
            var2 = _closure1_slot94;
            if(var2) { _fun0140_ip = 33; continue _fun0140 }
case 41:
            var3 = _closure1_slot75;
            var2 = null;
            if(!(var2 != var3)) { _fun0140_ip = 32; continue _fun0140 }
case 33:
            var3 = _closure1_slot20;
            var2 = var3.getRTCConnectionId;
            var2 = var2.bind(var3)();
            var4 = null;
            if(!(var4 == var2)) { _fun0140_ip = 32; continue _fun0140 }
case 167:
            var3 = _closure1_slot152;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
case 32:
            var1 = false;
            return var1;
        }
    };
    var7['CHANNEL_DELETE'] = var8;
    var8 = function handleNoiseCancellationError(arg1) {
        _fun0141: for(var _fun0141_ip = 0; ; ) switch(_fun0141_ip) {
case 0:
            var1 = arg1;
            var3 = var1.code;
            var1 = _closure1_slot51;
            var1 = var1.KRISP_CPU_OVERUSE;
            if(!(var3 !== var1)) { _fun0141_ip = 313; continue _fun0141 }
case 321:
            var1 = false;
            return var1;
case 313:
            var3 = _closure1_slot138;
            var1 = false;
            var3['noiseCancellation'] = var1;
            var3 = _closure1_slot138;
            var1 = true;
            var3['noiseSuppression'] = var1;
            var5 = _closure1_slot148;
            var3 = undefined;
            var5 = var5.bind(var3)();
            var _closure2_slot0 = var5;
            var6 = _closure1_slot73;
            var5 = var6.eachConnection;
            var4 = function(arg1) {
                var4 = _closure1_slot157;
                var1 = _closure2_slot0;
                var3 = var1.noiseCancellation;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot180;
            var4 = var4.bind(var3)();
            var2 = _closure1_slot179;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var7['MEDIA_ENGINE_NOISE_CANCELLATION_ERROR'] = var8;
    var8 = function handleVoiceActivityDetectionError(arg1) {
        _fun0142: for(var _fun0142_ip = 0; ; ) switch(_fun0142_ip) {
case 0:
            var1 = arg1;
            var3 = var1.code;
            var1 = _closure1_slot51;
            var1 = var1.KRISP_VAD_CPU_OVERUSE;
            var1 = var3 === var1;
            if(!var1) { _fun0142_ip = 298; continue _fun0142 }
case 38:
            var4 = _closure1_slot138;
            var3 = {};
            var5 = false;
            var3['vadUseKrisp'] = var5;
            var4['modeOptions'] = var3;
            var4 = _closure1_slot73;
            var3 = var4.eachConnection;
            var2 = function(arg1) {
                var3 = _closure1_slot149;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 298:
            return var1;
        }
    };
    var7['MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR'] = var8;
    var8 = function handleNoiseCancellationErrorReset() {
        _fun0143: for(var _fun0143_ip = 0; ; ) switch(_fun0143_ip) {
case 0:
            var2 = _closure1_slot117;
            var1 = !var2;
            var1 = !var1;
            if(!var2) { _fun0143_ip = 504; continue _fun0143 }
case 268:
            var2 = false;
            _closure1_slot117 = var2;
            var1 = true;
case 504:
            return var1;
        }
    };
    var7['MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET'] = var8;
    var8 = function handleApplyMediaFilterSettings(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = _closure1_slot73;
        var1 = var2.applyMediaFilterSettings;
        var3 = var1.bind(var2)(var3);
        var2 = var3.finally;
        var1 = function() {
            var2 = false;
            _closure1_slot118 = var2;
            var2 = _closure1_slot70;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS'] = var8;
    var8 = function handleApplyMediaFilterSettingsStart() {
        var1 = true;
        _closure1_slot118 = var1;
        var1 = undefined;
        return var1;
    };
    var7['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START'] = var8;
    var8 = function handleApplyMediaFilterSettingsError() {
        var1 = false;
        _closure1_slot118 = var1;
        var1 = undefined;
        return var1;
    };
    var7['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR'] = var8;
    var8 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0144: for(var _fun0144_ip = 0; ; ) switch(_fun0144_ip) {
case 0:
            var1 = arg1;
            var2 = var1.settings;
            var5 = var2.type;
            var2 = var1.local;
            var3 = var1.wasSaved;
            var4 = _closure1_slot40;
            var4 = var4.PRELOADED_USER_SETTINGS;
            if(!(var5 === var4)) { _fun0144_ip = 34; continue _fun0144 }
case 299:
            if(var2) { _fun0144_ip = 34; continue _fun0144 }
case 6:
            var2 = null;
            if(!(var2 == var3)) { _fun0144_ip = 34; continue _fun0144 }
case 188:
            var3 = _closure1_slot176;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            return var1;
case 34:
            var1 = false;
            return var1;
        }
    };
    var7['USER_SETTINGS_PROTO_UPDATE'] = var8;
    var8 = function handleClipsInit(arg1) {
        _fun0145: for(var _fun0145_ip = 0; ; ) switch(_fun0145_ip) {
case 0:
            var1 = arg1;
            var10 = var1.sourceId;
            var6 = var1.applicationName;
            var7 = var1.quality;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 78;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isDecoupledClipsEnabled;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0145_ip = 515; continue _fun0145 }
case 349:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 62;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0145_ip = 515; continue _fun0145 }
case 171:
            var4 = _closure1_slot76;
            var8 = var3 == var4;
            var2 = undefined;
            if(var8) { _fun0145_ip = 311; continue _fun0145 }
case 358:
            var4 = var4.desktopSource;
            var2 = var4.id;
case 311:
            if(!(var2 === var10)) { _fun0145_ip = 454; continue _fun0145 }
case 67:
            var2 = _closure1_slot76;
            var2 = var2.quality;
            if(!(var2 !== var7)) { _fun0145_ip = 516; continue _fun0145 }
case 454:
            var2 = _closure1_slot76;
            if(!(var3 != var2)) { _fun0145_ip = 517; continue _fun0145 }
case 423:
            var4 = _closure1_slot73;
            var2 = var4.setClipsSource;
            var2 = var2.bind(var4)(var3);
            var4 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 28;
            var2 = var8[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.isWindows;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0145_ip = 517; continue _fun0145 }
case 449:
            var2 = _closure1_slot76;
            var2 = var2.desktopSource;
            var2 = var2.soundshareId;
            if(!(var3 == var2)) { _fun0145_ip = 518; continue _fun0145 }
case 184:
            var2 = _closure1_slot76;
            var2 = var2.desktopSource;
            var2 = var2.sourcePid;
            var2 = var3 != var2;
            if(!var2) { _fun0145_ip = 519; continue _fun0145 }
case 109:
            var3 = _closure1_slot148;
            var3 = var3.bind(var1)();
            var2 = var3.videoHook;
case 519:
            if(!var2) { _fun0145_ip = 517; continue _fun0145 }
case 182:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 39;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.cancelAttachToProcess;
            var2 = _closure1_slot76;
            var2 = var2.desktopSource;
            var2 = var2.sourcePid;
            var2 = var3.bind(var4)(var2);
            _fun0145_ip = 517; continue _fun0145;
case 518:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 39;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.cancelAttachToProcess;
            var2 = _closure1_slot76;
            var2 = var2.desktopSource;
            var2 = var2.soundshareId;
            var2 = var3.bind(var4)(var2);
case 517:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 60;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getPidFromDesktopSource;
            var9 = var2.bind(var3)(var10);
            var2 = _closure1_slot177;
            var11 = true;
            var2 = var2.bind(var1)(var9, var11);
            var8 = var2.soundshareId;
            var4 = var2.soundshareSession;
            var2 = {};
            var3 = {};
            var3['id'] = var10;
            var3['sourcePid'] = var9;
            var3['soundshareId'] = var8;
            var3['soundshareSession'] = var4;
            var2['desktopSource'] = var3;
            var2['quality'] = var7;
            _closure1_slot76 = var2;
            var3 = _closure1_slot144;
            var2 = 'MediaEngineStore clips';
            var10 = var3.bind(var1)(var2);
            var2 = _closure1_slot148;
            var2 = var2.bind(var1)();
            var13 = var2.videoHook;
            var12 = !var13;
            if(var12) { _fun0145_ip = 520; continue _fun0145 }
case 521:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 42;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.DisableHookFramePacerExperiment;
            var3 = var4.getConfig;
            var2 = {};
            var8 = 'handleClipsInit';
            var2['location'] = var8;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var12 = !var2;
case 520:
            var9 = var13;
            if(!var9) { _fun0145_ip = 522; continue _fun0145 }
case 466:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 43;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.VideoHookDX12Experiment;
            var3 = var4.getConfig;
            var2 = {};
            var8 = 'handleClipsInit';
            var2['location'] = var8;
            var2 = var3.bind(var4)(var2);
            var9 = var2.enabled;
case 522:
            var4 = _closure1_slot73;
            var3 = var4.setClipsSource;
            var2 = {};
            var8 = {};
            var14 = _closure1_slot76;
            var14 = var14.desktopSource;
            var14 = var14.id;
            var8['id'] = var14;
            var14 = _closure1_slot76;
            var14 = var14.desktopSource;
            var14 = var14.soundshareId;
            var8['soundshareId'] = var14;
            var8['useVideoHook'] = var13;
            var8['useHookFramePacer'] = var12;
            var12 = _closure1_slot160;
            var12 = var12.bind(var1)();
            var8['useGraphicsCapture'] = var12;
            var12 = false;
            var8['useCaptureDeviceForEncode'] = var12;
            var13 = _closure1_slot70;
            var12 = var13.getExperimentalSoundshare;
            var12 = var12.bind(var13)();
            var8['useLoopback'] = var12;
            var8['useQuartzCapturer'] = var11;
            var11 = _closure1_slot161;
            var11 = var11.bind(var1)();
            var8['allowScreenCaptureKit'] = var11;
            var11 = 500;
            var8['videoHookStaleFrameTimeoutMs'] = var11;
            var11 = _closure1_slot61;
            var8['graphicsCaptureStaleFrameTimeoutMs'] = var11;
            var8['hdrCaptureMode'] = var10;
            var8['videoHookAllowDx12'] = var9;
            var2['desktopDescription'] = var8;
            var2['quality'] = var7;
            var2['applicationName'] = var6;
            var8 = _closure1_slot70;
            var7 = var8.getVideoEncoderExperiments;
            var5 = _closure1_slot50;
            var6 = var5.STREAM;
            var5 = 'streamer';
            var5 = var7.bind(var8)(var6, var5);
            var2['videoEncoderExperiments'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
case 516:
            var1 = false;
            return var1;
case 515:
            var1 = false;
            return var1;
        }
    };
    var7['CLIPS_INIT'] = var8;
    var8 = function handleClipsSettingsUpdate(arg1) {
        _fun0146: for(var _fun0146_ip = 0; ; ) switch(_fun0146_ip) {
case 0:
            var1 = arg1;
            var1 = var1.settings;
            var2 = var1.decoupledClipsEnabled;
            var1 = false;
            if(!(var1 === var2)) { _fun0146_ip = 354; continue _fun0146 }
case 523:
            var3 = null;
            _closure1_slot76 = var3;
            var2 = _closure1_slot73;
            var1 = var2.setClipsSource;
            var1 = var1.bind(var2)(var3);
case 354:
            var1 = undefined;
            return var1;
        }
    };
    var7['CLIPS_SETTINGS_UPDATE'] = var8;
    var8 = function handleSetEnableHardwareMuteNotice(arg1) {
        var1 = arg1;
        var2 = var1.enabled;
        _closure1_slot131 = var2;
        var1 = undefined;
        return var1;
    };
    var7['MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE'] = var8;
    var8 = function handleSetDeviceAudioEffects(arg1) {
        var1 = arg1;
        var3 = var1.deviceId;
        var5 = var1.active;
        var4 = var1.available;
        var2 = _closure1_slot120;
        var1 = {};
        var1['active'] = var5;
        var1['available'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var7['MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS'] = var8;
    var8 = var15.prototype;
    var8 = Object.create(var8, {constructor: {value: var15}});
    var34 = var8;
    var32 = var7;
    var7 = new var34[var15](var33, var32, var31);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot70 = var7;
    var8 = 85;
    var8 = var10[var8];
    var8 = var12.bind(var1)(var8);
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var34 = var12;
    var33 = var13;
    var32 = var7;
    var8 = new var34[var8](var33, var32, var31);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot77 = var8;
    var8 = 86;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/MediaEngineStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['DEFAULT_AUDIO_MIXER_SETTINGS'] = var6;
    var3['WINDOWS_NOISE_SUPPRESSION_EFFECT'] = var5;
    var3['LINUX_OPENH264_URL'] = var4;
    var3['LINUX_OPENH264_SHA256'] = var2;
    return var1;
})();