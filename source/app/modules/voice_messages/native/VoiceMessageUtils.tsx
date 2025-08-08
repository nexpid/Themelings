// app/modules/voice_messages/native/VoiceMessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function generateBase64EncodedWaveform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = _closure1_slot16;
            var2 = var6.length;
            var4 = var6;
            if(!(!(var2 <= var5))) { _fun0001_ip = 50; continue _fun0001 }
 22:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var7.bind(var3)(var2);
            var4 = var2.bind(var3)(var6, var5);
 50:
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var2 = _closure1_slot13;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fromByteArray;
            var1 = global;
            var1 = var1.Uint8Array;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var10 = var4;
            var9 = var5;
            var1 = new var10[var1](var9, var8);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot22 = var5;
    var1 = function _startAudioRecording() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 339; continue _fun0002 }
 13:
                    var6 = var5;
                    var4 = undefined;
                    var7 = undefined;
                    var2 = null;
                    _closure1_slot19 = var2;
                    var8 = _closure1_slot9;
                    var2 = _closure1_slot12;
                    var2 = var2.REQUESTED;
                    var2 = var8.bind(var4)(var2);
                    var2 = _closure1_slot8;
                    var2 = var2.bind(var4)(var5);
                    var5 = _closure1_slot4;
                    var2 = var5.getMediaEngine;
                    var9 = var2.bind(var5)();
                    var8 = var9.on;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 9;
                    var2 = var10[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.MediaEngineEvent;
                    var5 = var2.VoiceActivity;
                    var2 = _closure1_slot21;
                    var2 = var8.bind(var9)(var5, var2);
 119: // try_start_0
                    var5 = global;
                    var8 = var5.performance;
                    var2 = var8.now;
                    var7 = var2.bind(var8)();
                    var8 = _closure1_slot4;
                    var2 = var8.getMediaEngine;
                    var9 = var2.bind(var8)();
                    var8 = var9.startLocalAudioRecording;
                    var2 = {'echoCancellation': false, 'echoCancellationPreEcho': false, 'noiseSuppression': false, 'automaticGainControlConfig': null, 'noiseCancellation': true};
                    var10 = {};
                    var11 = true;
                    var10['enabled'] = var11;
                    var2['automaticGainControlConfig'] = var10;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=193);
 191:
                    return var2;
 193:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 324; continue _fun0002 }
 202:
                    var9 = var5.performance;
                    var8 = var9.now;
                    var8 = var8.bind(var9)();
                    var7 = var8 - var7;
                    _closure1_slot19 = var7;
                    var10 = _closure1_slot20;
                    var9 = var10.log;
                    var8 = _closure1_slot19;
                    var7 = 'Voice message audio startup latency:';
                    var7 = var9.bind(var10)(var7, var8);
                    var8 = _closure1_slot11;
                    var7 = var8.getState;
                    var7 = var7.bind(var8)();
                    var7 = var7.recordingId;
                    if(!(var7 === var6)) { _fun0002_ip = 321; continue _fun0002 }
 275:
                    var7 = _closure1_slot9;
                    var6 = _closure1_slot12;
                    var6 = var6.STARTED;
                    var6 = var7.bind(var4)(var6);
                    var6 = _closure1_slot10;
                    var7 = var5.Date;
                    var5 = var7.now;
                    var5 = var5.bind(var7)();
                    var5 = var6.bind(var4)(var5);
 318: // try_end0
                    return var4;
 321:
                    return var4;
 324:
                    return var2;
 327: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure1_slot24;
                    var3 = var3.bind(var4)();
                    throw var2;
 339:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function resetAudioRecording() {
        var3 = _closure1_slot4;
        var1 = var3.getMediaEngine;
        var6 = var1.bind(var3)();
        var5 = var6.removeListener;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = var3.MediaEngineEvent;
        var4 = var3.VoiceActivity;
        var3 = _closure1_slot21;
        var3 = var5.bind(var6)(var4, var3);
        var2 = _closure1_slot6;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function stopAndGetAudioRecording() {
        var3 = _closure1_slot8;
        var4 = undefined;
        var5 = null;
        var3 = var3.bind(var4)(var5);
        var3 = _closure1_slot9;
        var3 = var3.bind(var4)(var5);
        var3 = _closure1_slot22;
        var5 = _closure1_slot11;
        var2 = var5.getState;
        var2 = var2.bind(var5)();
        var6 = var2.waveform;
        var5 = var6.map;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
                var4 = var1().value;
                var3 = var2;
                var1 = undefined;
                var3 = var3 === var1;
                if(var3) { _fun0003_ip = 25; continue _fun0003 }
 22:
                var1 = var4;
 25:
                if(var3) { _fun0003_ip = 31; continue _fun0003 }
 28:
                var2.return();
 31:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2);
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var7 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = var3.getMediaEngine;
            var3 = var2.bind(var3)();
            var2 = var3.stopLocalAudioRecording;
            var1 = function(arg1, arg2) {
                var3 = _closure3_slot0;
                var2 = {};
                var1 = arg1;
                var2['filename'] = var1;
                var4 = arg2;
                var1 = 1000;
                var1 = var4 / var1;
                var2['durationSecs'] = var1;
                var1 = _closure2_slot0;
                var2['waveform'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _endAudioRecording() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 163; continue _fun0004 }
 10:
                    var4 = _closure1_slot11;
                    var2 = var4.getState;
                    var6 = var2.bind(var4)();
                    var5 = var6.savedVoiceMessageUploadData;
                    var2 = null;
                    var4 = var2 == var5;
                    if(!var4) { _fun0004_ip = 62; continue _fun0004 }
 42:
                    var7 = var6.recordingStatus;
                    var6 = _closure1_slot12;
                    var6 = var6.REQUESTED;
                    var4 = var7 === var6;
 62:
                    if(!var4) { _fun0004_ip = 89; continue _fun0004 }
 65:
                    var6 = _closure1_slot25;
                    var4 = undefined;
                    var4 = var6.bind(var4)();
                    var5 = {'filename': '', 'durationSecs': 0, 'waveform': ''};
 89:
                    if(!(var2 == var5)) { _fun0004_ip = 116; continue _fun0004 }
 93:
                    var4 = _closure1_slot25;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                    SaveGenerator(address=107);
 105:
                    return var2;
 107:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    var5 = var2;
                    if(var4) { _fun0004_ip = 160; continue _fun0004 }
 116:
                    var6 = _closure1_slot11;
                    var4 = var6.getState;
                    var4 = var4.bind(var6)();
                    var4 = var4.startTimeMillis;
                    var6 = _closure1_slot24;
                    var3 = undefined;
                    var3 = var6.bind(var3)();
                    var3 = {};
                    var3['data'] = var5;
                    var3['startTimeMillis'] = var4;
                    return var3;
 160:
                    return var2;
 163:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var4 = function stopAndCacheAudioRecording() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var4;
    var1 = function _stopAndCacheAudioRecording() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 107; continue _fun0005 }
 7:
                    var2 = _closure1_slot25;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
 22:
                    return var2;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 104; continue _fun0005 }
 30:
                    var6 = _closure1_slot4;
                    var5 = var6.getMediaEngine;
                    var8 = var5.bind(var6)();
                    var7 = var8.removeListener;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 9;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.MediaEngineEvent;
                    var6 = var5.VoiceActivity;
                    var5 = _closure1_slot21;
                    var5 = var7.bind(var8)(var6, var5);
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var3)(var2);
                    return var3;
 104:
                    return var2;
 107:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.addVoiceMessageWave;
    var _closure1_slot5 = var10;
    var10 = var6.resetVoiceMessageState;
    var _closure1_slot6 = var10;
    var10 = var6.setSavedVoiceMessageUploadData;
    var _closure1_slot7 = var10;
    var10 = var6.setVoiceMessageRecordingId;
    var _closure1_slot8 = var10;
    var10 = var6.setVoiceMessageRecordingState;
    var _closure1_slot9 = var10;
    var10 = var6.setVoiceMessageStartTimeMillis;
    var _closure1_slot10 = var10;
    var10 = var6.useVoiceMessagesUIStore;
    var _closure1_slot11 = var10;
    var6 = var6.VoiceMessageRecordingStatus;
    var _closure1_slot12 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.WAVEFORM_WAVE_MAX_VALUE;
    var _closure1_slot13 = var10;
    var10 = var6.VOICE_RECORDING_MIN_DB;
    var _closure1_slot14 = var10;
    var10 = var6.VOICE_RECORDING_MAX_DB;
    var _closure1_slot15 = var10;
    var10 = var6.WAVEFORM_MAX_SAMPLES;
    var _closure1_slot16 = var10;
    var6 = var6.VOICE_RECORDING_MAX_DURATION_MILLIS;
    var _closure1_slot17 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot18 = var6;
    var6 = null;
    var _closure1_slot19 = var6;
    var6 = 5;
    var6 = var8[var6];
    var11 = var9.bind(var1)(var6);
    var6 = var11.prototype;
    var10 = Object.create(var6, {constructor: {value: var11}});
    var14 = 'VoiceMessages';
    var15 = var10;
    var6 = new var15[var11](var14, var13);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot20 = var6;
    var6 = 8;
    var6 = var8[var6];
    var11 = var9.bind(var1)(var6);
    var10 = var11.throttle;
    var9 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot11;
            var2 = var3.getState;
            var4 = var2.bind(var3)();
            var2 = var4.startTimeMillis;
            var5 = null;
            if(!(var5 != var2)) { _fun0006_ip = 130; continue _fun0006 }
 29:
            var6 = _closure1_slot5;
            var3 = _closure1_slot13;
            var8 = _closure1_slot14;
            var2 = arg1;
            var7 = var2 - var8;
            var2 = _closure1_slot15;
            var2 = var2 - var8;
            var2 = var7 / var2;
            var3 = var3 * var2;
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var3 = var4.savedVoiceMessageUploadData;
            var3 = var5 == var3;
            if(!var3) { _fun0006_ip = 119; continue _fun0006 }
 84:
            var5 = global;
            var6 = var5.performance;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var4 = var4.startTimeMillis;
            var5 = var5 - var4;
            var4 = _closure1_slot17;
            var3 = var5 >= var4;
 119:
            if(!var3) { _fun0006_ip = 130; continue _fun0006 }
 122:
            var1 = _closure1_slot27;
            var1 = var1.bind(var2)();
 130:
            var1 = undefined;
            return var1;
        }
    };
    var6 = 100;
    var6 = var10.bind(var11)(var9, var6);
    var _closure1_slot21 = var6;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_messages/native/VoiceMessageUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['generateBase64EncodedWaveform'] = var5;
    var5 = function startAudioRecording() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startAudioRecording'] = var5;
    var5 = function endAudioRecording() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['endAudioRecording'] = var5;
    var3['stopAndCacheAudioRecording'] = var4;
    var4 = function emitVoiceMessageRecorded(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg3;
            var2 = null;
            if(!(var2 != var7)) { _fun0007_ip = 119; continue _fun0007 }
 9:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.track;
            var3 = _closure1_slot18;
            var4 = var3.VOICE_MESSAGE_RECORDED;
            var3 = {};
            var3['recording_start_timestamp'] = var7;
            var7 = global;
            var8 = var7.Date;
            var7 = var8.now;
            var7 = var7.bind(var8)();
            var3['recording_stop_timestamp'] = var7;
            var7 = arg2;
            var3['duration_secs'] = var7;
            var7 = arg1;
            var3['result'] = var7;
            var7 = _closure1_slot19;
            var3['initialize_secs'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            _closure1_slot19 = var2;
 119:
            var1 = undefined;
            return var1;
        }
    };
    var3['emitVoiceMessageRecorded'] = var4;
    var2 = function triggerHaptic() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 11;
            var2 = var8[var7];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.triggerHapticFeedback;
            var2 = 12;
            var2 = var8[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var2 = var2.bind(var6)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var1)(var5);
            var5 = var5.HapticFeedbackTypes;
            if(var2) { _fun0008_ip = 86; continue _fun0008 }
 78:
            var2 = var5.IMPACT_MEDIUM;
            _fun0008_ip = 92; continue _fun0008;
 86:
            var2 = var5.IMPACT_LIGHT;
 92:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['triggerHaptic'] = var2;
    return var1;
})();