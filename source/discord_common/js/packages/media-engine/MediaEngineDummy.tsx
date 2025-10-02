// discord_common/js/packages/media-engine/MediaEngineDummy.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function Video() {
        var1 = null;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function Camera() {
        var1 = null;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AudioSubsystems;
    var _closure1_slot7 = var8;
    var8 = var4.Features;
    var _closure1_slot8 = var8;
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MediaEngineDummy(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = _closure1_slot11;
                var1['Video'] = var3;
                var2 = _closure1_slot12;
                var1['Camera'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'destroy';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var4 = var3.emit;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.MediaEngineEvent;
            var2 = var2.Destroy;
            var2 = var4.bind(var3)(var2);
            var2 = var3.removeAllListeners;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(73);
        var1[0] = var5;
        var5 = {};
        var7 = 'interact';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'supported';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'supports';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure1_slot8;
            var1 = var1.AUTO_ENABLE;
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'connect';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'NOT_IMPLEMENTED';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'eachConnection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'enable';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'setInputVolume';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'setOutputVolume';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getAudioInputDevices';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'setAudioInputDevice';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getAudioOutputDevices';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'setAudioOutputDevice';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getVideoInputDevices';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'setVideoInputDevice';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getSupportedVideoCodecs';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var1 = undefined;
            var2 = new Array(0);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getCodecCapabilities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var1 = undefined;
            var2 = '';
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getCodecSurvey';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'getCodecSurvey is not implemented for MediaEngineDummy';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getAudioSubsystem';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            var1 = var1.STANDARD;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getAudioLayer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = '';
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'setGoLiveSource';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'setClipsSource';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'setClipsQualitySettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'setDesktopSource';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arguments[1];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot9;
                var2 = var2.DEFAULT;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'setSoundshareSource';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getDesktopSource';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'NO_STREAM';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getScreenPreviews';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'UNSUPPORTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getWindowPreviews';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'UNSUPPORTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'setClipBufferLength';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'saveClip';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'UNSUPPORTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'saveClipForUser';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'UNSUPPORTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'updateClipMetadata';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'UNSUPPORTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'exportClip';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'UNSUPPORTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'setAudioSubsystem';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'queueAudioSubsystem';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'setOffloadAdmControls';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'getDebugLogging';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'setDebugLogging';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[37] = var5;
        var5 = {};
        var7 = 'writeAudioDebugState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'Audio debug state is not supported.';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[38] = var5;
        var5 = {};
        var7 = 'setLoopback';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[39] = var5;
        var5 = {};
        var7 = 'getLoopback';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[40] = var5;
        var5 = {};
        var7 = 'setH264Enabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[41] = var5;
        var5 = {};
        var7 = 'setAv1Enabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[42] = var5;
        var5 = {};
        var7 = 'setH265Enabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[43] = var5;
        var5 = {};
        var7 = 'setExperimentFlag';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[44] = var5;
        var5 = {};
        var7 = 'startAecDump';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[45] = var5;
        var5 = {};
        var7 = 'stopAecDump';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[46] = var5;
        var5 = {};
        var7 = 'setAecDump';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[47] = var5;
        var5 = {};
        var7 = 'startRecordingRawSamples';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[48] = var5;
        var5 = {};
        var7 = 'stopRecordingRawSamples';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[49] = var5;
        var5 = {};
        var7 = 'createReplayConnection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Connection replay is not supported.';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var5['value'] = var7;
        var1[50] = var5;
        var5 = {};
        var7 = 'setOnVideoContainerResized';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[51] = var5;
        var5 = {};
        var7 = 'setMaxSyncDelayOverride';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[52] = var5;
        var5 = {};
        var7 = 'rankRtcRegions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'RTC region latency test is not supported.';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[53] = var5;
        var5 = {};
        var7 = 'applyMediaFilterSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[54] = var5;
        var5 = {};
        var7 = 'startLocalAudioRecording';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'startLocalAudioRecording is not supported.';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[55] = var5;
        var5 = {};
        var7 = 'stopLocalAudioRecording';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[56] = var5;
        var5 = {};
        var7 = 'setHasFullbandPerformance';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[57] = var5;
        var5 = {};
        var7 = 'getSupportedSecureFramesProtocolVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = 0;
            return var1;
        };
        var5['value'] = var7;
        var1[58] = var5;
        var5 = {};
        var7 = 'getSupportedBandwidthEstimationExperiments';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var1 = undefined;
            var2 = new Array(0);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[59] = var5;
        var5 = {};
        var7 = 'getMLSSigningKey';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'NOT_IMPLEMENTED';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[60] = var5;
        var5 = {};
        var7 = 'setSidechainCompression';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[61] = var5;
        var5 = {};
        var7 = 'setSidechainCompressionStrength';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[62] = var5;
        var5 = {};
        var7 = 'getSystemMicrophoneMode';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = '';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[63] = var5;
        var5 = {};
        var7 = 'showSystemCaptureConfigurationUI';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[64] = var5;
        var5 = {};
        var7 = 'setNativeDesktopVideoSourcePickerActive';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[65] = var5;
        var5 = {};
        var7 = 'presentNativeScreenSharePicker';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[66] = var5;
        var5 = {};
        var7 = 'releaseNativeDesktopVideoSourcePickerStream';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[67] = var5;
        var5 = {};
        var7 = 'setMaybePreprocessMute';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[68] = var5;
        var5 = {};
        var7 = 'setAudioInputBypassSystemProcessing';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[69] = var5;
        var5 = {};
        var7 = 'fetchAsyncResources';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[70] = var5;
        var5 = {};
        var7 = 'getNoiseCancellationStats';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'Dummy noise cancellation stats not supported';
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[71] = var5;
        var5 = {};
        var7 = 'setNoiseCancellationEnableStats';
        var5['key'] = var7;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[72] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/MediaEngineDummy.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();