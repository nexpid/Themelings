// discord_common/js/packages/media-engine/native/index.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function toVolumePercent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot18;
case 6:
            var1 = _closure1_slot18;
            var1 = var2 / var1;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function toScaledValue(arg1, arg2, arg3) {
        var2 = arg2;
        var1 = arg3;
        var3 = var1 - var2;
        var1 = arg1;
        var3 = var3 * var1;
        var1 = 100;
        var1 = var3 / var1;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot27 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.QUEUE_METRICS_INTERVAL_MS;
    var _closure1_slot10 = var8;
    var8 = var4.SIDECHAIN_COMPRESSION_MAX_RATIO;
    var _closure1_slot11 = var8;
    var8 = var4.SIDECHAIN_COMPRESSION_MAX_THRESHOLD;
    var _closure1_slot12 = var8;
    var8 = var4.SIDECHAIN_COMPRESSION_MIN_RATIO;
    var _closure1_slot13 = var8;
    var8 = var4.SIDECHAIN_COMPRESSION_MIN_THRESHOLD;
    var _closure1_slot14 = var8;
    var4 = var4.ProcessPriority;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AudioSubsystems;
    var _closure1_slot16 = var8;
    var8 = var4.ClipsRecordingEvent;
    var _closure1_slot17 = var8;
    var8 = var4.DEFAULT_VOLUME;
    var _closure1_slot18 = var8;
    var8 = var4.DeviceTypes;
    var _closure1_slot19 = var8;
    var8 = var4.DISABLED_DEVICE_ID;
    var _closure1_slot20 = var8;
    var8 = var4.Features;
    var _closure1_slot21 = var8;
    var8 = var4.MediaEngineContextTypes;
    var _closure1_slot22 = var8;
    var8 = var4.NativeFeatures;
    var _closure1_slot23 = var8;
    var4 = var4.WATCHDOG_TIMEOUT_MS;
    var _closure1_slot24 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function MediaEngineNative() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot5;
                var5 = _closure2_slot5;
                var3 = undefined;
                var1 = var1.bind(var3)(var6, var5);
                var1 = _closure1_slot8;
                var11 = var1.bind(var3)(var5);
                var5 = _closure1_slot7;
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var3);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var3)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 10:
                var1 = var5.bind(var3)(var6, var1);
                var _closure3_slot0 = var1;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 10;
                var6 = var5[var6];
                var6 = var7.bind(var3)(var6);
                var1['Video'] = var6;
                var6 = 11;
                var6 = var5[var6];
                var6 = var7.bind(var3)(var6);
                var1['Camera'] = var6;
                var6 = _closure1_slot20;
                var1['audioInputDeviceId'] = var6;
                var1['audioOutputDeviceId'] = var6;
                var1['videoInputDeviceId'] = var6;
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var15 = var7;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['connections'] = var6;
                var6 = -1;
                var1['lastVoiceActivity'] = var6;
                var6 = 'standard';
                var1['audioSubsystem'] = var6;
                var6 = '';
                var1['audioLayer'] = var6;
                var6 = 0;
                var1['deviceChangeGeneration'] = var6;
                var1['consecutiveWatchdogFailures'] = var6;
                var6 = null;
                var1['codecSurvey'] = var6;
                var7 = _closure1_slot0;
                var8 = 12;
                var8 = var5[var8];
                var8 = var7.bind(var3)(var8);
                var10 = var8.Logger;
                var8 = var10.prototype;
                var9 = Object.create(var8, {constructor: {value: var10}});
                var14 = 'MediaEngineNative';
                var15 = var9;
                var8 = new var15[var10](var14, var13);
                var8 = var8 instanceof Object ? var8 : var9;
                var1['logger'] = var8;
                var8 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var13 = arguments[0];
                        var14 = arguments[1];
                        var10 = arguments[2];
                        var1 = undefined;
                        if(!(var13 === var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var13 = new Array(0);
case 11:
                        if(!(var14 === var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var14 = new Array(0);
case 13:
                        if(!(var10 === var1)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var10 = new Array(0);
case 15:
                        var7 = _closure3_slot0;
                        var2 = var7.deviceChangeGeneration;
                        var2 = var2 + 1;
                        var7['deviceChangeGeneration'] = var2;
                        var6 = var7.emit;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 13;
                        var3 = var11[var3];
                        var3 = var9.bind(var1)(var3);
                        var3 = var3.MediaEngineEvent;
                        var5 = var3.DeviceChange;
                        var8 = 14;
                        var3 = var11[var8];
                        var12 = var9.bind(var1)(var3);
                        var4 = var12.sanitizeDevices;
                        var2 = _closure1_slot19;
                        var3 = var2.AUDIO_INPUT;
                        var4 = var4.bind(var12)(var3, var13);
                        var3 = var11[var8];
                        var13 = var9.bind(var1)(var3);
                        var12 = var13.sanitizeDevices;
                        var3 = var2.AUDIO_OUTPUT;
                        var16 = var12.bind(var13)(var3, var14);
                        var8 = var11[var8];
                        var9 = var9.bind(var1)(var8);
                        var8 = var9.sanitizeDevices;
                        var2 = var2.VIDEO_INPUT;
                        var15 = var8.bind(var9)(var2, var10);
                        var19 = var7;
                        var18 = var5;
                        var17 = var4;
                        var2 = var19[var6](var18, var17, var16, var15, var14);
                        return var1;
                    }
                };
                var1['handleDeviceChange'] = var8;
                var8 = function(arg1, arg2) {
                    var6 = _closure3_slot0;
                    var5 = var6.emit;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.MediaEngineEvent;
                    var4 = var3.VolumeChange;
                    var7 = _closure1_slot18;
                    var3 = arg1;
                    var3 = var3 * var7;
                    var7 = _closure1_slot18;
                    var2 = arg2;
                    var2 = var2 * var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['handleVolumeChange'] = var8;
                var8 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var8 = global;
                        var2 = var8.Date;
                        var1 = var2.now;
                        var3 = var1.bind(var2)();
                        var9 = _closure3_slot0;
                        var7 = var9.listenerCount;
                        var10 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 13;
                        var6 = var1[var4];
                        var1 = undefined;
                        var6 = var10.bind(var1)(var6);
                        var6 = var6.MediaEngineEvent;
                        var6 = var6.VoiceActivity;
                        var7 = var7.bind(var9)(var6);
                        var6 = 0;
                        var6 = var7 > var6;
                        if(!var6) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var7 = _closure3_slot0;
                        var9 = var7.lastVoiceActivity;
                        var7 = -1;
                        var7 = var7 === var9;
                        if(var7) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var9 = var8.Date;
                        var8 = var9.now;
                        var9 = var8.bind(var9)();
                        var8 = _closure3_slot0;
                        var8 = var8.lastVoiceActivity;
                        var9 = var9 - var8;
                        var8 = 20;
                        var7 = var9 > var8;
case 19:
                        var6 = var7;
case 17:
                        if(!var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var6 = _closure3_slot0;
                        var6['lastVoiceActivity'] = var3;
                        var5 = var6.emit;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.MediaEngineEvent;
                        var4 = var2.VoiceActivity;
                        var3 = arg1;
                        var2 = arg2;
                        var2 = var5.bind(var6)(var4, var3, var2);
case 21:
                        return var1;
                    }
                };
                var1['handleVoiceActivity'] = var8;
                var8 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var2 = _closure3_slot0;
                    var3 = var2.connections;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var5 = arg1;
                        var4 = var5.setHasActiveVideoOutputSink;
                        var3 = _closure4_slot0;
                        var2 = _closure4_slot1;
                        var1 = 'MediaEngineNative.handleActiveSinksChange';
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleActiveSinksChange'] = var8;
                var8 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var5 = arg1;
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 13;
                        var4 = var1[var7];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.MediaEngineEvent;
                        var4 = var4.VoiceActivity;
                        if(!(var4 !== var5)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.MediaEngineEvent;
                        var4 = var4.DeviceChange;
                        if(!(var4 === var5)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var8 = _closure3_slot0;
                        var4 = var8.deviceChangeGeneration;
                        var _closure4_slot0 = var4;
                        var4 = global;
                        var6 = var4.Promise;
                        var5 = var6.all;
                        var4 = var8.getAudioInputDevices;
                        var7 = var4.bind(var8)();
                        var4 = new Array(3);
                        var4[0] = var7;
                        var7 = var8.getAudioOutputDevices;
                        var7 = var7.bind(var8)();
                        var4[1] = var7;
                        var7 = var8.getVideoInputDevices;
                        var7 = var7.bind(var8)();
                        var4[2] = var7;
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.then;
                        var3 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var5 = var4().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var7 = undefined;
                                if(var3) { _fun0007_ip = 13; continue _fun0007 }
case 27:
                                var7 = var5;
case 13:
                                var6 = undefined;
                                if(var3) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                                var8 = var4().value;
                                var5 = var2;
                                var5 = var5 === var1;
                                var6 = undefined;
                                var3 = var5;
                                if(var5) { _fun0007_ip = 28; continue _fun0007 }
case 9:
                                var6 = var8;
                                var3 = var5;
case 28:
                                var5 = undefined;
                                if(var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                                var8 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var5 = undefined;
                                var3 = var4;
                                if(var4) { _fun0007_ip = 30; continue _fun0007 }
case 18:
                                var5 = var8;
                                var3 = var4;
case 30:
                                if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                                var2.return();
case 32:
                                var4 = _closure4_slot0;
                                var3 = _closure3_slot0;
                                var3 = var3.deviceChangeGeneration;
                                if(!(var4 === var3)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                                var4 = _closure3_slot0;
                                var3 = var4.emit;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var2 = 13;
                                var2 = var9[var2];
                                var2 = var8.bind(var1)(var2);
                                var2 = var2.MediaEngineEvent;
                                var13 = var2.DeviceChange;
                                var14 = var4;
                                var12 = var7;
                                var11 = var6;
                                var10 = var5;
                                var2 = var14[var3](var13, var12, var11, var10, var9);
case 34:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        _fun0006_ip = 25; continue _fun0006;
case 23:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 15;
                        var3 = var3[var4];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.getVoiceEngine;
                        var3 = var3.bind(var5)();
                        var5 = var3.setEmitVADLevel2;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var4];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.getVoiceEngine;
                        var8 = var3.bind(var5)();
                        var7 = var8.setEmitVADLevel;
                        var6 = true;
                        var5 = false;
                        var3 = {};
                        var3 = var7.bind(var8)(var6, var5, var3);
                        _fun0006_ip = 25; continue _fun0006;
case 36:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getVoiceEngine;
                        var4 = var2.bind(var3)();
                        var3 = var4.setEmitVADLevel2;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
case 25:
                        return var1;
                    }
                };
                var1['handleNewListener'] = var8;
                var8 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 13;
                        var3 = var1[var8];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.MediaEngineEvent;
                        var4 = var3.VoiceActivity;
                        var3 = arg1;
                        if(!(var3 === var4)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 15;
                        var4 = var4[var3];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.getVoiceEngine;
                        var4 = var4.bind(var5)();
                        var5 = var4.setEmitVADLevel2;
                        var4 = null;
                        if(!(var4 == var5)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                        var10 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var5 = var4[var3];
                        var6 = var10.bind(var1)(var5);
                        var5 = var6.getVoiceEngine;
                        var9 = var5.bind(var6)();
                        var7 = var9.setEmitVADLevel;
                        var6 = _closure3_slot0;
                        var5 = var6.listenerCount;
                        var4 = var4[var8];
                        var4 = var10.bind(var1)(var4);
                        var4 = var4.MediaEngineEvent;
                        var4 = var4.VoiceActivity;
                        var5 = var5.bind(var6)(var4);
                        var4 = 0;
                        var6 = var5 > var4;
                        var5 = false;
                        var4 = {};
                        var4 = var7.bind(var9)(var6, var5, var4);
                        _fun0008_ip = 38; continue _fun0008;
case 40:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = var2[var3];
                        var4 = var7.bind(var1)(var3);
                        var3 = var4.getVoiceEngine;
                        var4 = var3.bind(var4)();
                        var3 = var4.setEmitVADLevel2;
                        var6 = _closure3_slot0;
                        var5 = var6.listenerCount;
                        var2 = var2[var8];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.MediaEngineEvent;
                        var2 = var2.VoiceActivity;
                        var5 = var5.bind(var6)(var2);
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 38:
                        return var1;
                    }
                };
                var1['handleRemoveListener'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.VideoInputInitialized;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleVideoInputInitialization'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.AudioInputInitialized;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleAudioInputInitialization'] = var8;
                var8 = function(arg1, arg2) {
                    var6 = _closure3_slot0;
                    var5 = var6.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var4 = var2.NativeScreenSharePickerUpdate;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['handleNativeScreenSharePickerUpdate'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.NativeScreenSharePickerCancel;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleNativeScreenSharePickerCancel'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.NativeScreenSharePickerError;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleNativeScreenSharePickerError'] = var8;
                var8 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var6 = arg1;
                        var1 = -100;
                        if(!(var1 !== var6)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.MediaEngineEvent;
                        var10 = var1.AudioDeviceModuleError;
                        var9 = 'RustAudioDeviceModule';
                        var7 = arg2;
                        var11 = var5;
                        var8 = var6;
                        var1 = var11[var4](var10, var9, var8, var7, var6);
case 42:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleAudioDeviceModuleErrorCallback'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.VideoCodecError;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleVideoCodecErrorCallback'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.VoiceProcessingError;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleVoiceProcessingErrorCallback'] = var8;
                var8 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.SystemMicrophoneModeChange;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleSystemMicrophoneModeChangeCallback'] = var8;
                var10 = var1.logger;
                var9 = var10.enableNativeLogger;
                var8 = true;
                var8 = var9.bind(var10)(var8);
                var9 = 15;
                var5 = var5[var9];
                var7 = var7.bind(var3)(var5);
                var5 = var7.getVoiceEngine;
                var7 = var5.bind(var7)();
                var8 = var7.setDeviceChangeCallback;
                var5 = var1.handleDeviceChange;
                var5 = var8.bind(var7)(var5);
                var8 = var7.setVolumeChangeCallback;
                var5 = var1.handleVolumeChange;
                var5 = var8.bind(var7)(var5);
                var8 = var7.setOnVoiceCallback;
                var5 = var1.handleVoiceActivity;
                var5 = var8.bind(var7)(var5);
                var5 = var7.setVideoInputInitializationCallback;
                if(!(var6 != var5)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var8 = var7.setVideoInputInitializationCallback;
                var5 = var1.handleVideoInputInitialization;
                var5 = var8.bind(var7)(var5);
case 44:
                var5 = var7.setAudioInputInitializationCallback;
                if(!(var6 != var5)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var8 = var7.setAudioInputInitializationCallback;
                var5 = var1.handleAudioInputInitialization;
                var5 = var8.bind(var7)(var5);
case 46:
                var5 = var7.setAudioDeviceModuleErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var8 = var7.setAudioDeviceModuleErrorCallback;
                var5 = var1.handleAudioDeviceModuleErrorCallback;
                var5 = var8.bind(var7)(var5);
case 48:
                var8 = var7.setTransportOptions;
                var5 = {'idleJitterBufferFlush': true, 'ducking': false};
                var5 = var8.bind(var7)(var5);
                var5 = var7.setNativeScreenSharePickerCallbacks;
                if(!(var6 != var5)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var11 = var7.setNativeScreenSharePickerCallbacks;
                var10 = var1.handleNativeScreenSharePickerUpdate;
                var8 = var1.handleNativeScreenSharePickerCancel;
                var5 = var1.handleNativeScreenSharePickerError;
                var5 = var11.bind(var7)(var10, var8, var5);
case 50:
                var5 = var7.setVideoCodecErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var8 = var7.setVideoCodecErrorCallback;
                var5 = var1.handleVideoCodecErrorCallback;
                var5 = var8.bind(var7)(var5);
case 52:
                var5 = var7.setVoiceProcessingErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var8 = var7.setVoiceProcessingErrorCallback;
                var5 = var1.handleVoiceProcessingErrorCallback;
                var5 = var8.bind(var7)(var5);
case 54:
                var5 = var7.setSystemMicrophoneModeChangeCallback;
                if(!(var6 != var5)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var8 = var7.setSystemMicrophoneModeChangeCallback;
                var5 = var1.handleSystemMicrophoneModeChangeCallback;
                var5 = var8.bind(var7)(var5);
case 56:
                var10 = var1.on;
                var8 = var1.handleRemoveListener;
                var5 = 'removeListener';
                var5 = var10.bind(var1)(var5, var8);
                var10 = var1.on;
                var8 = var1.handleNewListener;
                var5 = 'newListener';
                var5 = var10.bind(var1)(var5, var8);
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var8 = var8.bind(var3)(var5);
                var5 = var8.getVoiceEngine;
                var5 = var5.bind(var8)();
                var5 = var5.getAudioSubsystem;
                if(!(var6 == var5)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var8 = var8.bind(var3)(var5);
                var5 = var8.getVoiceEngine;
                var5 = var5.bind(var8)();
                var5 = var5.getUseLegacyAudioDevice;
                if(!(var6 != var5)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var8 = var8.bind(var3)(var5);
                var5 = var8.getVoiceEngine;
                var8 = var5.bind(var8)();
                var5 = var8.getUseLegacyAudioDevice;
                var5 = var5.bind(var8)();
                var8 = _closure1_slot16;
                if(var5) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var5 = var8.STANDARD;
                _fun0003_ip = 64; continue _fun0003;
case 62:
                var5 = var8.LEGACY;
case 64:
                var1['audioSubsystem'] = var5;
                _fun0003_ip = 60; continue _fun0003;
case 58:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var8 = var8.bind(var3)(var5);
                var5 = var8.getVoiceEngine;
                var9 = var5.bind(var8)();
                var8 = var9.getAudioSubsystem;
                var5 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['audioSubsystem'] = var1;
                    var1 = arg2;
                    var2['audioLayer'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var5 = var8.bind(var9)(var5);
case 60:
                var5 = var7.pingVoiceThread;
                if(!(var6 != var5)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var5 = var1.watchdogTick;
                var5 = var5.bind(var1)();
case 65:
                var5 = var7.setActiveSinksChangeCallback;
                if(!(var6 != var5)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var8 = var7.setActiveSinksChangeCallback;
                var5 = var1.handleActiveSinksChange;
                var5 = var8.bind(var7)(var5);
case 67:
                var5 = var7.setOnClipsMlDetection;
                if(!(var6 != var5)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                var6 = var7.setOnClipsMlDetection;
                var5 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.length;
                        var1 = 0;
                        if(!(var2 > var1)) { _fun0010_ip = 3; continue _fun0010 }
case 71:
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 13;
                        var5 = var5[var1];
                        var1 = undefined;
                        var1 = var6.bind(var1)(var5);
                        var1 = var1.MediaEngineEvent;
                        var1 = var1.ClipsMlDetection;
                        var1 = var2.bind(var3)(var1, var4);
case 3:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
case 69:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 16;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var1);
                var2 = function pollQueueMetrics(arg1) {
                    var7 = arg1;
                    var _closure4_slot0 = var7;
                    var1 = false;
                    var _closure4_slot1 = var1;
                    var6 = var7.on;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.MediaEngineEvent;
                    var5 = var4.Destroy;
                    var4 = function() {
                        var1 = true;
                        _closure4_slot1 = var1;
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                                    var2 = undefined;
                                    var _closure7_slot0 = var2;
                                    var5 = _closure4_slot1;
                                    if(var5) { _fun0011_ip = 74; continue _fun0011 }
case 16:
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var5 = 15;
                                    var5 = var8[var5];
                                    var6 = var6.bind(var2)(var5);
                                    var5 = var6.getVoiceEngine;
                                    var5 = var5.bind(var6)();
                                    _closure7_slot0 = var5;
                                    var5 = global;
                                    var8 = var5.Promise;
                                    var6 = var8.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var8}});
                                    var13 = function(arg1) {
                                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                            var2 = arg1;
                                            var _closure8_slot0 = var2;
                                            var3 = _closure7_slot0;
                                            var4 = var3.pollQueueMetrics;
                                            var3 = null;
                                            if(!(var3 != var4)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                                            var3 = _closure7_slot0;
                                            var2 = var3.pollQueueMetrics;
                                            var1 = function(arg1) {
                                                var3 = _closure8_slot0;
                                                var1 = undefined;
                                                var2 = arg1;
                                                var2 = var3.bind(var1)(var2);
                                                return var1;
                                            };
                                            var1 = var2.bind(var3)(var1);
case 75:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var14 = var6;
                                    var3 = new var14[var8](var13, var12);
                                    var3 = var3 instanceof Object ? var3 : var6;
                                    SaveGenerator(address=105);
case 77:
                                    return var3;
case 78:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0011_ip = 23; continue _fun0011 }
case 79:
                                    var6 = _closure1_slot10;
                                    var3['periodMs'] = var6;
                                    var9 = _closure4_slot0;
                                    var8 = var9.emit;
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var7 = 13;
                                    var7 = var11[var7];
                                    var7 = var10.bind(var2)(var7);
                                    var7 = var7.MediaEngineEvent;
                                    var7 = var7.VoiceQueueMetrics;
                                    var7 = var8.bind(var9)(var7, var3);
                                    var5 = var5.setTimeout;
                                    var4 = _closure4_slot2;
                                    var4 = var5.bind(var2)(var4, var6);
                                    _fun0011_ip = 74; continue _fun0011;
case 23:
                                    return var3;
case 74:
                                    return var2;
case 72:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
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
                    var _closure4_slot2 = var4;
                    var3 = global;
                    var3 = var3.setTimeout;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure2_slot5 = var5;
        var3 = _closure1_slot9;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot6;
        var6 = {};
        var2 = 'destroy';
        var6['key'] = var2;
        var2 = function value() {
            var3 = this;
            var2 = var3.eachConnection;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.destroy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var4 = var3.emit;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
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
        var6['value'] = var2;
        var2 = new Array(88);
        var2[0] = var6;
        var6 = {};
        var7 = 'interact';
        var6['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'supported';
        var6['key'] = var7;
        var9 = function value() {
            var1 = true;
            return var1;
        };
        var6['value'] = var9;
        var2[2] = var6;
        var6 = {};
        var9 = 'supports';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot21;
                var2 = var2.LEGACY_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0013_ip = 80; continue _fun0013 }
case 14:
                var2 = _closure1_slot21;
                var2 = var2.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                var2 = _closure1_slot21;
                var2 = var2.AUTOMATIC_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0013_ip = 83; continue _fun0013 }
case 28:
                var2 = _closure1_slot21;
                var2 = var2.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
                if(!(var2 !== var3)) { _fun0013_ip = 84; continue _fun0013 }
case 4:
                var2 = _closure1_slot21;
                var2 = var2.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                if(!(var2 !== var3)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                var2 = _closure1_slot21;
                var2 = var2.DEBUG_LOGGING;
                if(!(var2 !== var3)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                var2 = _closure1_slot21;
                var2 = var2.SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                var2 = _closure1_slot21;
                var2 = var2.SCREEN_SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                var2 = _closure1_slot21;
                var2 = var2.ELEVATED_HOOK;
                if(!(var2 !== var3)) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                var2 = _closure1_slot21;
                var2 = var2.LOOPBACK;
                if(!(var2 !== var3)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                var2 = _closure1_slot21;
                var2 = var2.WUMPUS_VIDEO;
                if(!(var2 !== var3)) { _fun0013_ip = 97; continue _fun0013 }
case 72:
                var2 = _closure1_slot21;
                var2 = var2.HYBRID_VIDEO;
                if(!(var2 !== var3)) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                var2 = _closure1_slot21;
                var2 = var2.ATTENUATION;
                if(!(var2 !== var3)) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                var2 = _closure1_slot21;
                var2 = var2.VIDEO_HOOK;
                if(!(var2 !== var3)) { _fun0013_ip = 100; continue _fun0013 }
case 102:
                var2 = _closure1_slot21;
                var2 = var2.EXPERIMENTAL_SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                var2 = _closure1_slot21;
                var2 = var2.REMOTE_LOCUS_NETWORK_CONTROL;
                if(!(var2 !== var3)) { _fun0013_ip = 105; continue _fun0013 }
case 106:
                var2 = _closure1_slot21;
                var2 = var2.SCREEN_PREVIEWS;
                if(!(var2 !== var3)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                var2 = _closure1_slot21;
                var2 = var2.CLIPS;
                if(!(var2 !== var3)) { _fun0013_ip = 109; continue _fun0013 }
case 110:
                var2 = _closure1_slot21;
                var2 = var2.WINDOW_PREVIEWS;
                if(!(var2 !== var3)) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                var2 = _closure1_slot21;
                var2 = var2.AUDIO_DEBUG_STATE;
                if(!(var2 !== var3)) { _fun0013_ip = 113; continue _fun0013 }
case 114:
                var2 = _closure1_slot21;
                var2 = var2.CONNECTION_REPLAY;
                if(!(var2 !== var3)) { _fun0013_ip = 115; continue _fun0013 }
case 116:
                var2 = _closure1_slot21;
                var2 = var2.SIMULCAST;
                if(!(var2 !== var3)) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                var2 = _closure1_slot21;
                var2 = var2.RTC_REGION_RANKING;
                if(!(var2 !== var3)) { _fun0013_ip = 119; continue _fun0013 }
case 120:
                var2 = _closure1_slot21;
                var2 = var2.ELECTRON_VIDEO;
                if(!(var2 !== var3)) { _fun0013_ip = 121; continue _fun0013 }
case 122:
                var2 = _closure1_slot21;
                var2 = var2.MEDIAPIPE;
                if(!(var2 !== var3)) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                var2 = _closure1_slot21;
                var2 = var2.FIXED_KEYFRAME_INTERVAL;
                if(!(var2 !== var3)) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                var2 = _closure1_slot21;
                var2 = var2.FIRST_FRAME_CALLBACK;
                if(!(var2 !== var3)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                var2 = _closure1_slot21;
                var2 = var2.REMOTE_USER_MULTI_STREAM;
                if(!(var2 !== var3)) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                var2 = _closure1_slot21;
                var2 = var2.IMAGE_QUALITY_MEASUREMENT;
                if(!(var2 !== var3)) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                var2 = _closure1_slot21;
                var2 = var2.GO_LIVE_HARDWARE;
                if(!(var2 !== var3)) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                var2 = _closure1_slot21;
                var2 = var2.SCREEN_CAPTURE_KIT;
                if(!(var2 !== var3)) { _fun0013_ip = 135; continue _fun0013 }
case 136:
                var2 = _closure1_slot21;
                var2 = var2.NATIVE_SCREENSHARE_PICKER;
                if(!(var2 !== var3)) { _fun0013_ip = 137; continue _fun0013 }
case 138:
                var2 = _closure1_slot21;
                var2 = var2.MLS_PAIRWISE_FINGERPRINTS;
                if(!(var2 !== var3)) { _fun0013_ip = 139; continue _fun0013 }
case 140:
                var2 = _closure1_slot21;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                if(!(var2 !== var3)) { _fun0013_ip = 141; continue _fun0013 }
case 142:
                var2 = _closure1_slot21;
                var2 = var2.VAAPI;
                if(!(var2 !== var3)) { _fun0013_ip = 143; continue _fun0013 }
case 144:
                var2 = _closure1_slot21;
                var2 = var2.GAMESCOPE_CAPTURE;
                if(!(var2 !== var3)) { _fun0013_ip = 145; continue _fun0013 }
case 146:
                var2 = _closure1_slot21;
                var2 = var2.ASYNC_VIDEO_INPUT_DEVICE_INIT;
                if(!(var2 !== var3)) { _fun0013_ip = 147; continue _fun0013 }
case 148:
                var2 = _closure1_slot21;
                var2 = var2.PORT_AWARE_LATENCY_TESTING;
                if(!(var2 !== var3)) { _fun0013_ip = 149; continue _fun0013 }
case 150:
                var2 = _closure1_slot21;
                var2 = var2.SPATIAL_AUDIO;
                if(!(var2 !== var3)) { _fun0013_ip = 151; continue _fun0013 }
case 152:
                var2 = _closure1_slot21;
                var2 = var2.KRISP_NATIVE_ERROR;
                if(!(var2 !== var3)) { _fun0013_ip = 153; continue _fun0013 }
case 154:
                var2 = _closure1_slot21;
                var2 = var2.DIAGNOSTICS;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 156:
                var2 = _closure1_slot21;
                var2 = var2.NATIVE_PING;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 157:
                var2 = _closure1_slot21;
                var2 = var2.AUTOMATIC_VAD;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 158:
                var2 = _closure1_slot21;
                var2 = var2.AUDIO_INPUT_DEVICE;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 159:
                var2 = _closure1_slot21;
                var2 = var2.AUDIO_OUTPUT_DEVICE;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 160:
                var2 = _closure1_slot21;
                var2 = var2.QOS;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 161:
                var2 = _closure1_slot21;
                var2 = var2.VOICE_PROCESSING;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 162:
                var2 = _closure1_slot21;
                var2 = var2.AUTO_ENABLE;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 163:
                var2 = _closure1_slot21;
                var2 = var2.VIDEO;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 164:
                var2 = _closure1_slot21;
                var2 = var2.DESKTOP_CAPTURE;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 165:
                var2 = _closure1_slot21;
                var2 = var2.DESKTOP_CAPTURE_FORMAT;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 166:
                var2 = _closure1_slot21;
                var2 = var2.DESKTOP_CAPTURE_APPLICATIONS;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 167:
                var2 = _closure1_slot21;
                var2 = var2.VOICE_PANNING;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 168:
                var2 = _closure1_slot21;
                var2 = var2.AEC_DUMP;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 169:
                var2 = _closure1_slot21;
                var2 = var2.DISABLE_VIDEO;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 170:
                var2 = _closure1_slot21;
                var2 = var2.SAMPLE_PLAYBACK;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 171:
                var2 = _closure1_slot21;
                var2 = var2.NOISE_SUPPRESSION;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 172:
                var2 = _closure1_slot21;
                var2 = var2.AUTOMATIC_GAIN_CONTROL;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 173:
                var2 = _closure1_slot21;
                var2 = var2.SIDECHAIN_COMPRESSION;
                if(!(var2 !== var3)) { _fun0013_ip = 155; continue _fun0013 }
case 174:
                var2 = false;
                return var2;
case 155:
                var2 = true;
                return var2;
case 153:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.KRISP_NATIVE_ERROR;
                var2 = var3.bind(var4)(var2);
                return var2;
case 151:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SPATIAL_AUDIO;
                var2 = var3.bind(var4)(var2);
                return var2;
case 149:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.PORT_AWARE_LATENCY_TESTING;
                var2 = var3.bind(var4)(var2);
                return var2;
case 147:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.ASYNC_VIDEO_INPUT_DEVICE_INIT;
                var2 = var3.bind(var4)(var2);
                return var2;
case 145:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.GAMESCOPE_CAPTURE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 143:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.VAAPI;
                var2 = var3.bind(var4)(var2);
                return var2;
case 141:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 139:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.MLS_PAIRWISE_FINGERPRINTS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 137:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.NATIVE_SCREENSHARE_PICKER;
                var2 = var3.bind(var4)(var2);
                return var2;
case 135:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SCREEN_CAPTURE_KIT;
                var2 = var3.bind(var4)(var2);
                return var2;
case 133:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.GO_LIVE_HARDWARE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 131:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.IMAGE_QUALITY_MEASUREMENT;
                var2 = var3.bind(var4)(var2);
                return var2;
case 129:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.REMOTE_USER_MULTI_STREAM;
                var2 = var3.bind(var4)(var2);
                return var2;
case 127:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.FIRST_FRAME_CALLBACK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 125:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.FIXED_KEYFRAME_INTERVAL;
                var2 = var3.bind(var4)(var2);
                return var2;
case 123:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.MEDIAPIPE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 121:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.ELECTRON_VIDEO;
                var2 = var3.bind(var4)(var2);
                return var2;
case 119:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.RTC_REGION_RANKING;
                var2 = var3.bind(var4)(var2);
                return var2;
case 117:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 15;
                var2 = var2[var6];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SIMULCAST;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0013_ip = 175; continue _fun0013 }
case 176:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var5 = var4.bind(var5)(var3);
                var4 = var5.supportsFeature;
                var3 = _closure1_slot23;
                var3 = var3.SIMULCAST_BUGFIX;
                var2 = var4.bind(var5)(var3);
case 175:
                return var2;
case 115:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.CONNECTION_REPLAY;
                var2 = var3.bind(var4)(var2);
                return var2;
case 113:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.AUDIO_DEBUG_STATE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 111:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.WINDOW_PREVIEWS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 109:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.CLIPS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 107:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SCREEN_PREVIEWS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 105:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.REMOTE_LOCUS_NETWORK_CONTROL;
                var2 = var3.bind(var4)(var2);
                return var2;
case 103:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SOUNDSHARE_LOOPBACK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 100:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 17;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var3 = null;
                var4 = var3 == var2;
                var2 = undefined;
                if(var4) { _fun0013_ip = 177; continue _fun0013 }
case 178:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var7)(var4);
                var4 = var4.os;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0013_ip = 177; continue _fun0013 }
case 179:
                var2 = var4.family;
case 177:
                var2 = var3 != var2;
                if(!var2) { _fun0013_ip = 180; continue _fun0013 }
case 181:
                var5 = /^win/i;
                var4 = var5.test;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.os;
                var3 = var3.family;
                var2 = var4.bind(var5)(var3);
case 180:
                return var2;
case 98:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.HYBRID_VIDEO;
                var2 = var3.bind(var4)(var2);
                return var2;
case 97:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.WUMPUS_VIDEO;
                var2 = var3.bind(var4)(var2);
                return var2;
case 95:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.LOOPBACK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 93:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.ELEVATED_HOOK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 91:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SCREEN_SOUNDSHARE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 89:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.SOUNDSHARE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 87:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.DEBUG_LOGGING;
                var2 = var3.bind(var4)(var2);
                return var2;
case 85:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING;
                var2 = var3.bind(var4)(var2);
                return var2;
case 84:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.VOICE_SUBSYSTEM_DEFERRED_SWITCH;
                var2 = var3.bind(var4)(var2);
                return var2;
case 83:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.VOICE_AUTOMATIC_SUBSYSTEM;
                var2 = var3.bind(var4)(var2);
                return var2;
case 81:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot23;
                var2 = var2.VOICE_EXPERIMENTAL_SUBSYSTEM;
                var2 = var3.bind(var4)(var2);
                return var2;
case 80:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.supportsFeature;
                var1 = _closure1_slot23;
                var1 = var1.VOICE_LEGACY_SUBSYSTEM;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var6['value'] = var9;
        var2[3] = var6;
        var6 = {};
        var9 = 'connect';
        var6['key'] = var9;
        var9 = function value(arg1, arg2, arg3) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg3;
                var4 = this;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 15;
                var1 = var1[var10];
                var6 = undefined;
                var7 = var5.bind(var6)(var1);
                var5 = var7.supportsFeature;
                var1 = _closure1_slot23;
                var1 = var1.EXPERIMENT_CONFIG;
                var1 = var5.bind(var7)(var1);
                if(var1) { _fun0014_ip = 182; continue _fun0014 }
case 183:
                var3['experiments'] = var6;
case 182:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 18;
                var1 = var5[var1];
                var11 = var7.bind(var6)(var1);
                var8 = var11.create;
                var7 = arg1;
                var1 = arg2;
                var1 = var8.bind(var11)(var7, var1, var3);
                var _closure3_slot1 = var1;
                var13 = var1.on;
                var8 = _closure1_slot0;
                var7 = 13;
                var11 = var5[var7];
                var11 = var8.bind(var6)(var11);
                var11 = var11.BaseConnectionEvent;
                var12 = var11.Destroy;
                var11 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connections;
                        var3 = var4.delete;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.connectionsEmpty;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0015_ip = 184; continue _fun0015 }
case 185:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var6 = var4[var1];
                        var2 = undefined;
                        var7 = var3.bind(var2)(var6);
                        var6 = var7.setProcessPriority;
                        var5 = _closure1_slot15;
                        var5 = var5.NORMAL;
                        var5 = var6.bind(var7)(var5);
                        var1 = var4[var1];
                        var2 = var3.bind(var2)(var1);
                        var1 = var2.getVoiceEngine;
                        var4 = var1.bind(var2)();
                        var3 = var4.setNativeThreadsPriority;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0015_ip = 184; continue _fun0015 }
case 186:
                        var2 = var3.call;
                        var1 = 0;
                        var1 = var2.bind(var3)(var4, var1);
case 184:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var13.bind(var1)(var12, var11);
                var13 = var1.on;
                var11 = var5[var7];
                var11 = var8.bind(var6)(var11);
                var11 = var11.BaseConnectionEvent;
                var12 = var11.Connected;
                var11 = function() {
                    var3 = _closure3_slot1;
                    var2 = var3.setVideoBroadcast;
                    var5 = _closure3_slot0;
                    var4 = var5.shouldConnectionBroadcastVideo;
                    var1 = _closure3_slot1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var11 = var13.bind(var1)(var12, var11);
                var12 = var1.on;
                var11 = var5[var7];
                var11 = var8.bind(var6)(var11);
                var11 = var11.BaseConnectionEvent;
                var11 = var11.Silence;
                var9 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.MediaEngineEvent;
                    var3 = var2.Silence;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var9 = var12.bind(var1)(var11, var9);
                var11 = var4.connections;
                var9 = var11.add;
                var9 = var9.bind(var11)(var1);
                var5 = var5[var10];
                var11 = var8.bind(var6)(var5);
                var9 = var11.setProcessPriority;
                var8 = var3.processPriority;
                var5 = null;
                if(!(var5 == var8)) { _fun0014_ip = 187; continue _fun0014 }
case 188:
                var12 = _closure1_slot15;
                var8 = var12.HIGH;
case 187:
                var8 = var9.bind(var11)(var8);
                var8 = var3.threadPriorityConfiguration;
                if(!(var5 != var8)) { _fun0014_ip = 189; continue _fun0014 }
case 190:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var9 = var9.bind(var6)(var8);
                var8 = var9.getVoiceEngine;
                var9 = var8.bind(var9)();
                var8 = var9.setNativeThreadsPriority;
                if(!(var5 != var8)) { _fun0014_ip = 189; continue _fun0014 }
case 191:
                var5 = var8.call;
                var3 = var3.threadPriorityConfiguration;
                var3 = var5.bind(var8)(var9, var3);
case 189:
                var3 = var4.emit;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.MediaEngineEvent;
                var2 = var2.Connection;
                var2 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6['value'] = var9;
        var2[4] = var6;
        var6 = {};
        var9 = 'shouldConnectionBroadcastVideo';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = arg1;
                var4 = var3.context;
                var1 = _closure1_slot22;
                var1 = var1.DEFAULT;
                var1 = var4 === var1;
                if(!var1) { _fun0016_ip = 192; continue _fun0016 }
case 76:
                var4 = this;
                var4 = var4.videoInputDeviceId;
                var2 = _closure1_slot20;
                var1 = var4 !== var2;
case 192:
                if(var1) { _fun0016_ip = 193; continue _fun0016 }
case 75:
                var2 = var3.hasDesktopSource;
                var1 = var2.bind(var3)();
case 193:
                return var1;
            }
        };
        var6['value'] = var9;
        var2[5] = var6;
        var6 = {};
        var9 = 'eachConnection';
        var6['key'] = var9;
        var9 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = this;
            var3 = var2.connections;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure3_slot1;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0017_ip = 29; continue _fun0017 }
case 11:
                    var5 = var3.context;
                    var4 = _closure3_slot1;
                    var2 = var5 !== var4;
case 29:
                    if(var2) { _fun0017_ip = 194; continue _fun0017 }
case 15:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 194:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var9;
        var2[6] = var6;
        var6 = {};
        var9 = 'enable';
        var6['key'] = var9;
        var9 = function value() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6['value'] = var9;
        var2[7] = var6;
        var6 = {};
        var9 = 'setAudioMixerOptions';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 15;
                var3 = var1[var4];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.supportsFeature;
                var3 = _closure1_slot23;
                var3 = var3.SPATIAL_AUDIO;
                var3 = var5.bind(var6)(var3);
                if(!var3) { _fun0018_ip = 195; continue _fun0018 }
case 24:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setTransportOptions;
                var2 = {};
                var5 = arg1;
                var2['audioMixerOptions'] = var5;
                var2 = var3.bind(var4)(var2);
case 195:
                return var1;
            }
        };
        var6['value'] = var9;
        var2[8] = var6;
        var6 = {};
        var9 = 'setAudioInputBypassSystemProcessing';
        var6['key'] = var9;
        var9 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = arg1;
            var2['bypassSystemProcessing'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var9;
        var2[9] = var6;
        var6 = {};
        var9 = 'setInputVolume';
        var6['key'] = var9;
        var9 = function value(arg1) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var4 = var3.bind(var4)();
            var3 = var4.setInputVolume;
            var5 = _closure1_slot26;
            var2 = arg1;
            var2 = var5.bind(var1)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var9;
        var2[10] = var6;
        var6 = {};
        var9 = 'setOutputVolume';
        var6['key'] = var9;
        var9 = function value(arg1) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var4 = var3.bind(var4)();
            var3 = var4.setOutputVolume;
            var5 = _closure1_slot26;
            var2 = arg1;
            var2 = var5.bind(var1)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var9;
        var2[11] = var6;
        var6 = {};
        var9 = 'getAudioInputDevices';
        var6['key'] = var9;
        var9 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getAudioInputDevices;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6['value'] = var9;
        var2[12] = var6;
        var6 = {};
        var9 = 'getNoiseCancellationStats';
        var6['key'] = var9;
        var9 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getVoiceEngine;
                    var4 = var3.bind(var4)();
                    var6 = var4.getNoiseCancellationStats;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0019_ip = 196; continue _fun0019 }
case 197:
                    var3 = var5.bind(var1)(var3);
                    _fun0019_ip = 198; continue _fun0019;
case 196:
                    var3 = var4.getNoiseCancellationStats;
                    var2 = function(arg1) {
                        var3 = _closure4_slot0;
                        var1 = global;
                        var4 = var1.JSON;
                        var2 = var4.parse;
                        var1 = arg1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 198:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var9;
        var2[13] = var6;
        var6 = {};
        var9 = 'setNoiseCancellationEnableStats';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setNoiseCancellationEnableStats;
                var2 = null;
                if(!(var2 != var4)) { _fun0020_ip = 183; continue _fun0020 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var9;
        var2[14] = var6;
        var6 = {};
        var9 = 'setAudioInputDevice';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var7 = arg1;
                var6 = this;
                var _closure3_slot0 = var7;
                var5 = var6.audioInputDeviceId;
                var6['audioInputDeviceId'] = var7;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 15;
                var3 = var1[var8];
                var1 = undefined;
                var10 = var4.bind(var1)(var3);
                var4 = var10.supportsFeature;
                var3 = _closure1_slot23;
                var3 = var3.SET_AUDIO_DEVICE_BY_ID;
                var10 = var4.bind(var10)(var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                if(var10) { _fun0021_ip = 199; continue _fun0021 }
case 18:
                var10 = 14;
                var10 = var3[var10];
                var11 = var4.bind(var1)(var10);
                var10 = var11.getAudioInputDevices;
                var11 = var10.bind(var11)();
                var10 = var11.then;
                var9 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure3_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var4)(var1);
                        var2 = null;
                        if(!(var2 == var1)) { _fun0022_ip = 200; continue _fun0022 }
case 13:
                        var3 = 0;
                        var1 = var4[var3];
case 200:
                        if(!(var2 != var1)) { _fun0022_ip = 201; continue _fun0022 }
case 202:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.getVoiceEngine;
                        var3 = var2.bind(var3)();
                        var2 = var3.setInputDevice;
                        var1 = var1.index;
                        var1 = var2.bind(var3)(var1);
case 201:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var11)(var9);
                _fun0021_ip = 203; continue _fun0021;
case 199:
                var3 = var3[var8];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setInputDevice;
                var3 = var3.bind(var4)(var7);
case 203:
                var4 = var6.emit;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 13;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.MediaEngineEvent;
                var15 = var3.SelectedDeviceChange;
                var2 = _closure1_slot19;
                var14 = var2.AUDIO_INPUT;
                var16 = var6;
                var13 = var5;
                var12 = var7;
                var2 = var16[var4](var15, var14, var13, var12, var11);
                return var1;
            }
        };
        var6['value'] = var9;
        var2[15] = var6;
        var6 = {};
        var9 = 'getAudioOutputDevices';
        var6['key'] = var9;
        var9 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getAudioOutputDevices;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6['value'] = var9;
        var2[16] = var6;
        var6 = {};
        var9 = 'setAudioOutputDevice';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var7 = arg1;
                var6 = this;
                var _closure3_slot0 = var7;
                var5 = var6.audioOutputDeviceId;
                var6['audioOutputDeviceId'] = var7;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 15;
                var3 = var1[var8];
                var1 = undefined;
                var10 = var4.bind(var1)(var3);
                var4 = var10.supportsFeature;
                var3 = _closure1_slot23;
                var3 = var3.SET_AUDIO_DEVICE_BY_ID;
                var10 = var4.bind(var10)(var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                if(var10) { _fun0023_ip = 199; continue _fun0023 }
case 18:
                var10 = 14;
                var10 = var3[var10];
                var11 = var4.bind(var1)(var10);
                var10 = var11.getAudioOutputDevices;
                var11 = var10.bind(var11)();
                var10 = var11.then;
                var9 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure3_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var4)(var1);
                        var2 = null;
                        if(!(var2 == var1)) { _fun0024_ip = 200; continue _fun0024 }
case 13:
                        var3 = 0;
                        var1 = var4[var3];
case 200:
                        if(!(var2 != var1)) { _fun0024_ip = 201; continue _fun0024 }
case 202:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.getVoiceEngine;
                        var3 = var2.bind(var3)();
                        var2 = var3.setOutputDevice;
                        var1 = var1.index;
                        var1 = var2.bind(var3)(var1);
case 201:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var11)(var9);
                _fun0023_ip = 203; continue _fun0023;
case 199:
                var3 = var3[var8];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setOutputDevice;
                var3 = var3.bind(var4)(var7);
case 203:
                var4 = var6.emit;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 13;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.MediaEngineEvent;
                var15 = var3.SelectedDeviceChange;
                var2 = _closure1_slot19;
                var14 = var2.AUDIO_OUTPUT;
                var16 = var6;
                var13 = var5;
                var12 = var7;
                var2 = var16[var4](var15, var14, var13, var12, var11);
                return var1;
            }
        };
        var6['value'] = var9;
        var2[17] = var6;
        var6 = {};
        var9 = 'getVideoInputDevices';
        var6['key'] = var9;
        var9 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getVideoInputDevices;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6['value'] = var9;
        var2[18] = var6;
        var6 = {};
        var9 = 'setVideoInputDevice';
        var6['key'] = var9;
        var9 = _closure1_slot4;
        var8 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 204; continue _fun0025 }
case 12:
                    var _closure4_slot0 = var4;
                    var2 = arg1;
                    var _closure4_slot1 = var2;
                    var2 = var4.getVideoInputDevices;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=40);
case 205:
                    return var2;
case 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0025_ip = 206; continue _fun0025 }
case 24:
                    var6 = var2.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var10 = var6.bind(var2)(var5);
                    var11 = null;
                    if(!(var11 == var10)) { _fun0025_ip = 207; continue _fun0025 }
case 208:
                    var5 = _closure1_slot20;
                    _fun0025_ip = 26; continue _fun0025;
case 207:
                    var5 = var10.id;
case 26:
                    var6 = var4.videoInputDeviceId;
                    if(!(var5 !== var6)) { _fun0025_ip = 209; continue _fun0025 }
case 210:
                    var4['videoInputDeviceId'] = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var9 = 15;
                    var6 = var6[var9];
                    var8 = undefined;
                    var12 = var7.bind(var8)(var6);
                    var7 = var12.supportsFeature;
                    var6 = _closure1_slot23;
                    var6 = var6.SET_VIDEO_DEVICE_BY_ID;
                    var6 = var7.bind(var12)(var6);
                    if(var6) { _fun0025_ip = 211; continue _fun0025 }
case 212:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getVoiceEngine;
                    var12 = var6.bind(var7)();
                    var7 = var12.setVideoInputDevice;
                    var13 = var11 != var10;
                    var6 = -1;
                    if(!var13) { _fun0025_ip = 21; continue _fun0025 }
case 213:
                    var6 = var10.index;
case 21:
                    var6 = var7.bind(var12)(var6);
                    _fun0025_ip = 214; continue _fun0025;
case 211:
                    if(!(var11 == var10)) { _fun0025_ip = 215; continue _fun0025 }
case 216:
                    var7 = _closure1_slot20;
                    _fun0025_ip = 104; continue _fun0025;
case 215:
                    var6 = var10.originalId;
                    if(!(var11 != var6)) { _fun0025_ip = 217; continue _fun0025 }
case 218:
                    var11 = var10.originalId;
                    var6 = '';
                    if(!(var6 === var11)) { _fun0025_ip = 219; continue _fun0025 }
case 217:
                    var6 = var10.id;
                    _fun0025_ip = 220; continue _fun0025;
case 219:
                    var6 = var10.originalId;
case 220:
                    var7 = var6;
case 104:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.getVoiceEngine;
                    var6 = var5.bind(var6)();
                    var5 = var6.setVideoInputDevice;
                    var5 = var5.bind(var6)(var7);
case 214:
                    var5 = var4.connections;
                    var4 = var5.forEach;
                    var3 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.setVideoBroadcast;
                        var4 = _closure4_slot0;
                        var1 = var4.shouldConnectionBroadcastVideo;
                        var1 = var1.bind(var4)(var3);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
case 209:
                    var3 = undefined;
                    return var3;
case 206:
                    return var2;
case 204:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot4 = var8;
        var8 = function setVideoInputDevice() {
            var1 = undefined;
            var4 = _closure2_slot4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var8;
        var2[19] = var6;
        var6 = {};
        var8 = 'getVideoInputDeviceId';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.videoInputDeviceId;
            return var1;
        };
        var6['value'] = var8;
        var2[20] = var6;
        var6 = {};
        var8 = 'setAsyncVideoInputDeviceInit';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 15;
                var2 = var1[var6];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.getVoiceEngine;
                var8 = var2.bind(var4)();
                var7 = var8.setAsyncVideoInputDeviceInitSetting;
                var2 = null;
                if(!(var2 != var7)) { _fun0026_ip = 196; continue _fun0026 }
case 221:
                var4 = var7.call;
                var4 = var4.bind(var7)(var8, var5);
case 196:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setAsyncVideoInputDeviceInit;
                if(!(var2 != var3)) { _fun0026_ip = 79; continue _fun0026 }
case 222:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4, var5);
case 79:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[21] = var6;
        var6 = {};
        var8 = 'getCodecCapabilities';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.getCodecCapabilities;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var8;
        var2[22] = var6;
        var6 = {};
        var8 = 'setGoLiveSource';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var2 = null;
                if(!(var2 == var5)) { _fun0027_ip = 75; continue _fun0027 }
case 223:
                var5 = var3.eachConnection;
                var2 = function(arg1) {
                    var3 = arg1;
                    var1 = var3.clearDesktopSource;
                    var1 = var1.bind(var3)();
                    var1 = var3.clearGoLiveDevices;
                    var1 = var1.bind(var3)();
                    var4 = var3.setSoundshareSource;
                    var2 = 0;
                    var1 = false;
                    var1 = var4.bind(var3)(var2, var1);
                    var2 = var3.setVideoBroadcast;
                    var4 = _closure3_slot0;
                    var1 = var4.shouldConnectionBroadcastVideo;
                    var1 = var1.bind(var4)(var3);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var5.bind(var3)(var2, var4);
                _fun0027_ip = 224; continue _fun0027;
case 75:
                var2 = var3.eachConnection;
                var1 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure3_slot2;
                        var2 = _closure1_slot22;
                        var2 = var2.STREAM;
                        var2 = var4 === var2;
                        if(!var2) { _fun0028_ip = 192; continue _fun0028 }
case 225:
                        var5 = var3.streamUserId;
                        var4 = var3.userId;
                        var2 = var5 !== var4;
case 192:
                        if(var2) { _fun0028_ip = 41; continue _fun0028 }
case 75:
                        var4 = var3.setGoLiveSource;
                        var2 = _closure3_slot1;
                        var2 = var4.bind(var3)(var2);
                        var2 = var3.setVideoBroadcast;
                        var4 = _closure3_slot0;
                        var1 = var4.shouldConnectionBroadcastVideo;
                        var1 = var1.bind(var4)(var3);
                        var1 = var2.bind(var3)(var1);
case 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1, var4);
case 224:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var8;
        var2[23] = var6;
        var6 = {};
        var8 = 'setClipsSource';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var8 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var8;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getVoiceEngine;
                var4 = var4.bind(var5)();
                var5 = var4.setClipsSource;
                var7 = null;
                if(!(var7 != var5)) { _fun0029_ip = 126; continue _fun0029 }
case 226:
                var5 = var4.setOnClipsRecordingEvent;
                if(!(var7 != var5)) { _fun0029_ip = 126; continue _fun0029 }
case 198:
                var5 = var4.applyClipsSettings;
                if(!(var7 != var5)) { _fun0029_ip = 126; continue _fun0029 }
case 227:
                if(!(var7 == var8)) { _fun0029_ip = 228; continue _fun0029 }
case 229:
                var6 = var4.setClipsSource;
                var5 = {'id': '', 'soundshareId': 0};
                var5 = var6.bind(var4)(var5);
                _fun0029_ip = 126; continue _fun0029;
case 228:
                var5 = var8.quality;
                var12 = var5.frameRate;
                var10 = var5.resolution;
                var5 = 480;
                if(!(!(var10 <= var5))) { _fun0029_ip = 230; continue _fun0029 }
case 231:
                var5 = 9;
                var6 = var10 / var5;
                var5 = 16;
                var11 = var6 * var5;
                _fun0029_ip = 232; continue _fun0029;
case 230:
                var5 = 3;
                var6 = var10 / var5;
                var5 = 4;
                var11 = var6 * var5;
case 232:
                var5 = var8.desktopDescription;
                var9 = var5.id;
                var _closure3_slot2 = var9;
                var6 = var5.soundshareId;
                var _closure3_slot3 = var6;
                var13 = var5.useLoopback;
                var20 = var5.useVideoHook;
                var19 = var5.useHookFramePacer;
                var18 = var5.useGraphicsCapture;
                var17 = var5.useQuartzCapturer;
                var16 = var5.allowScreenCaptureKit;
                var15 = var5.hdrCaptureMode;
                var14 = var5.videoHookAllowDx12;
                var5 = var4.setOnClipsRecordingEvent;
                var3 = function(arg1, arg2) {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var6 = arg1;
                        var3 = arg2;
                        var1 = _closure3_slot0;
                        var8 = var1.logger;
                        var7 = var8.info;
                        var4 = _closure1_slot17;
                        var21 = var4[var6];
                        var19 = _closure3_slot2;
                        var17 = _closure3_slot3;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var12 = var5.concat;
                        var22 = 'Clips recording event: ';
                        var20 = ' received for stream ';
                        var18 = ' and sound ';
                        var16 = '.';
                        var5 = var22[var12](var21, var20, var19, var18, var17, var16, var15);
                        var5 = var7.bind(var8)(var5);
                        var4 = var4.GoLiveEnded;
                        if(!(var6 !== var4)) { _fun0030_ip = 233; continue _fun0030 }
case 234:
                        var4 = _closure1_slot17;
                        var4 = var4.Error;
                        if(!(var6 !== var4)) { _fun0030_ip = 216; continue _fun0030 }
case 235:
                        var4 = _closure1_slot17;
                        var4 = var4.Ended;
                        var4 = var6 !== var4;
                        if(!var4) { _fun0030_ip = 236; continue _fun0030 }
case 237:
                        var5 = _closure1_slot17;
                        var5 = var5.StoppedByGoLive;
                        var4 = var6 !== var5;
case 236:
                        if(var4) { _fun0030_ip = 238; continue _fun0030 }
case 239:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 13;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.MediaEngineEvent;
                        var6 = var4.ClipsRecordingEnded;
                        var5 = _closure3_slot2;
                        var4 = _closure3_slot3;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0030_ip = 238; continue _fun0030;
case 216:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 13;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var8.bind(var4)(var5);
                        var4 = var4.MediaEngineEvent;
                        var5 = var4.ClipsInitFailure;
                        var4 = null;
                        var8 = var4 != var3;
                        var9 = 'Failed to set clips source in media engine';
                        var4 = var9;
                        if(!var8) { _fun0030_ip = 240; continue _fun0030 }
case 36:
                        var8 = '';
                        var4 = var9;
                        if(!(var8 !== var3)) { _fun0030_ip = 240; continue _fun0030 }
case 241:
                        var4 = var3;
case 240:
                        var3 = _closure3_slot1;
                        var3 = var3.applicationName;
                        var3 = var6.bind(var7)(var5, var4, var3);
                        _fun0030_ip = 238; continue _fun0030;
case 233:
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 13;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.MediaEngineEvent;
                        var1 = var1.ClipsRecordingRestartNeeded;
                        var1 = var2.bind(var3)(var1);
case 238:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var4)(var3);
                var3 = var4.applyClipsSettings;
                if(!(var7 != var3)) { _fun0029_ip = 242; continue _fun0029 }
case 187:
                var5 = var4.applyClipsSettings;
                var3 = {};
                var3['useVideoHook'] = var20;
                var3['useHookFramePacer'] = var19;
                var3['useGraphicsCapture'] = var18;
                var3['useQuartzCapturer'] = var17;
                var3['allowScreenCaptureKit'] = var16;
                var3['hdrCaptureMode'] = var15;
                var3['videoHookAllowDx12'] = var14;
                var3['soundshareLoopback'] = var13;
                var3['frameRate'] = var12;
                var3['width'] = var11;
                var3['height'] = var10;
                var8 = var8.videoEncoderExperiments;
                var3['videoEncoderExperiments'] = var8;
                var3 = var5.bind(var4)(var3);
case 242:
                if(!(var7 == var9)) { _fun0029_ip = 243; continue _fun0029 }
case 244:
                var5 = ['', ''];
                _fun0029_ip = 245; continue _fun0029;
case 243:
                var8 = var9.split;
                var3 = ':';
                var5 = var8.bind(var9)(var3);
case 245:
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var1)(var5, var2);
                var5 = 0;
                var2 = var3[var5];
                var2 = 1;
                var8 = var3[var2];
                var3 = var4.setClipsSource;
                var2 = {};
                var2['id'] = var8;
                var7 = var7 != var6;
                if(!var7) { _fun0029_ip = 246; continue _fun0029 }
case 247:
                var5 = var6;
case 246:
                var2['soundshareId'] = var5;
                var2 = var3.bind(var4)(var2);
case 126:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[24] = var6;
        var6 = {};
        var8 = 'setClipsQualitySettings';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var6 = var1.bind(var2)();
                var2 = var6.applyClipsQualitySettings;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0031_ip = 4; continue _fun0031 }
case 248:
                var5 = var6.applyClipsQualitySettings;
                var4 = arg1;
                var3 = arg2;
                var2 = arg3;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1 = true;
case 4:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[25] = var6;
        var6 = {};
        var8 = 'setSoundshareSource';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            var4 = arg3;
            var3 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var _closure3_slot2 = var4;
            var2 = var3.eachConnection;
            var1 = function(arg1) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure3_slot2;
                    var2 = _closure1_slot22;
                    var2 = var2.STREAM;
                    var2 = var3 === var2;
                    if(!var2) { _fun0032_ip = 192; continue _fun0032 }
case 225:
                    var5 = var4.streamUserId;
                    var3 = var4.userId;
                    var2 = var5 !== var3;
case 192:
                    if(var2) { _fun0032_ip = 249; continue _fun0032 }
case 75:
                    var3 = var4.setSoundshareSource;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 249:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1, var4);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var2[26] = var6;
        var6 = {};
        var8 = 'getDesktopSource';
        var6['key'] = var8;
        var8 = function value() {
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
        var6['value'] = var8;
        var2[27] = var6;
        var6 = {};
        var8 = 'getScreenPreviews';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setPreviewsUseWgc;
                var2 = null;
                if(!(var2 != var3)) { _fun0033_ip = 250; continue _fun0033 }
case 196:
                var3 = var4.setPreviewsUseWgc;
                var2 = arg3;
                var2 = var3.bind(var4)(var2);
case 250:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1) {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 15;
                        var4 = var1[var5];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var4);
                        var4 = var7.getVoiceEngine;
                        var4 = var4.bind(var7)();
                        var7 = var4.getScreenPreviews;
                        var4 = null;
                        if(!(var4 == var7)) { _fun0034_ip = 182; continue _fun0034 }
case 197:
                        var4 = new Array(0);
                        var4 = var6.bind(var1)(var4);
                        _fun0034_ip = 251; continue _fun0034;
case 182:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getVoiceEngine;
                        var6 = var3.bind(var4)();
                        var5 = var6.getScreenPreviews;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = function(arg1) {
                            var4 = arg1;
                            var3 = _closure4_slot0;
                            var2 = var4.map;
                            var1 = function(arg1, arg2) {
                                var1 = {};
                                var4 = arg1;
                                var5 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = arg2;
                                var2 = 1;
                                var3 = var3 + var2;
                                var2 = 'Screen ';
                                var3 = var2 + var3;
                                var2 = 'name';
                                var1[1] = var3;
                                return var1;
                            };
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var6)(var4, var3, var2);
case 251:
                        return var1;
                    }
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var8;
        var2[28] = var6;
        var6 = {};
        var8 = 'setClipsModulePath';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setClipsModulePath;
                var2 = null;
                if(!(var2 != var4)) { _fun0035_ip = 196; continue _fun0035 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[29] = var6;
        var6 = {};
        var8 = 'setClipsDataPath';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setClipsDataPath;
                var2 = null;
                if(!(var2 != var4)) { _fun0036_ip = 196; continue _fun0036 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[30] = var6;
        var6 = {};
        var8 = 'setClipsV3Enabled';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setClipsV3Enabled;
                var2 = null;
                if(!(var2 != var4)) { _fun0037_ip = 196; continue _fun0037 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[31] = var6;
        var6 = {};
        var8 = 'setClipsUIActive';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setClipsUIActive;
                var2 = null;
                if(!(var2 != var4)) { _fun0038_ip = 196; continue _fun0038 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[32] = var6;
        var6 = {};
        var8 = 'setClipsV3MLEnabled';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setClipsV3MLEnabled;
                var2 = null;
                if(!(var2 != var4)) { _fun0039_ip = 196; continue _fun0039 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[33] = var6;
        var6 = {};
        var8 = 'setClipBufferLength';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setClipBufferLength;
                var2 = null;
                if(!(var2 != var4)) { _fun0040_ip = 183; continue _fun0040 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[34] = var6;
        var6 = {};
        var8 = 'saveClip';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var2 = arg1;
                var3 = var2.filepath;
                var _closure3_slot0 = var3;
                var3 = var2.metadata;
                var _closure3_slot1 = var3;
                var3 = var2.thumbnailMs;
                var _closure3_slot2 = var3;
                var3 = var2.startMs;
                var _closure3_slot3 = var3;
                var3 = var2.endMs;
                var _closure3_slot4 = var3;
                var3 = var2.trimStartMs;
                var _closure3_slot5 = var3;
                var2 = var2.trimEndMs;
                var _closure3_slot6 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var _closure3_slot7 = var2;
                var4 = var2.setClipBufferLength;
                var3 = null;
                if(!(var3 != var4)) { _fun0041_ip = 252; continue _fun0041 }
case 228:
                var4 = var2.saveClip;
                if(!(var3 == var4)) { _fun0041_ip = 22; continue _fun0041 }
case 253:
                var2 = var2.saveClipWithTime;
                if(!(var3 != var2)) { _fun0041_ip = 252; continue _fun0041 }
case 22:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = arg2;
                        var _closure4_slot1 = var2;
                        var2 = function onSuccess(arg1, arg2, arg3, arg4) {
                            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                                var7 = arg1;
                                var10 = arg2;
                                var4 = arg3;
                                var2 = arg4;
                                var3 = undefined;
                                var6 = undefined;
                                var1 = undefined;
case 254: // try_start_0
                                var5 = global;
                                var9 = var5.JSON;
                                var8 = var9.parse;
                                var12 = var10;
                                var5 = '{}';
                                var11 = '';
                                if(!(var11 !== var12)) { _fun0043_ip = 221; continue _fun0043 }
case 24:
                                var5 = var10;
case 221:
                                var6 = var8.bind(var9)(var5);
case 28: // try_end0
                                _fun0043_ip = 196; continue _fun0043;
case 255: // catch_target0
                                CatchBlockStart(arg_register=4);
                                var6 = {};
case 196:
                                var5 = {};
                                var5['duration'] = var7;
                                var5['clipStats'] = var6;
                                var1 = var5;
                                var6 = var4;
                                var6 = var3 !== var6;
                                var5 = var6;
                                if(!var6) { _fun0043_ip = 20; continue _fun0043 }
case 33:
                                var6 = var4;
                                var7 = var6.length;
                                var6 = 0;
                                var5 = var7 > var6;
case 20:
                                if(!var5) { _fun0043_ip = 186; continue _fun0043 }
case 256:
                                var5 = var1;
                                var5['thumbnail'] = var4;
case 186:
                                var5 = var2;
                                var5 = var3 !== var5;
                                var4 = var5;
                                if(!var5) { _fun0043_ip = 17; continue _fun0043 }
case 184:
                                var5 = var2;
                                var6 = var5.length;
                                var5 = 0;
                                var4 = var6 > var5;
case 17:
                                if(!var4) { _fun0043_ip = 257; continue _fun0043 }
case 22:
                                var4 = var1;
                                var4['metadata'] = var2;
case 257:
                                var2 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            }
                        };
                        var _closure4_slot2 = var2;
                        var11 = function onFailure(arg1) {
                            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                                var4 = arg1;
case 258: // try_start_0
                                var1 = global;
                                var3 = var1.JSON;
                                var2 = var3.parse;
                                var6 = var4;
                                var1 = '{}';
                                var5 = '';
                                if(!(var5 !== var6)) { _fun0044_ip = 202; continue _fun0044 }
case 259:
                                var1 = var4;
case 202:
                                var3 = var2.bind(var3)(var1);
                                var2 = _closure4_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
case 197: // try_end0
                                return var1;
case 193: // catch_target0
                                CatchBlockStart(arg_register=0);
                                var3 = _closure4_slot1;
                                var2 = undefined;
                                var1 = {'errorMessage': 'clip save failed', 'errorAt': 'unknown'};
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            }
                        };
                        var3 = _closure3_slot7;
                        var3 = var3.saveClipWithTime;
                        var10 = null;
                        if(!(var10 == var3)) { _fun0042_ip = 260; continue _fun0042 }
case 24:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 15;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.supportsFeature;
                        var3 = _closure1_slot23;
                        var3 = var3.CLIPS_THUMBNAIL;
                        var3 = var4.bind(var5)(var3);
                        var8 = _closure3_slot7;
                        var7 = var8.saveClip;
                        var6 = _closure3_slot0;
                        var5 = _closure3_slot1;
                        if(var3) { _fun0042_ip = 92; continue _fun0042 }
case 186:
                        var20 = function(arg1, arg2, arg3) {
                            var5 = _closure4_slot2;
                            var9 = arg1;
                            var8 = arg3;
                            var7 = arg2;
                            var10 = undefined;
                            var6 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var1;
                        };
                        var23 = var8;
                        var22 = var6;
                        var21 = var5;
                        var19 = var11;
                        var3 = var23[var7](var22, var21, var20, var19, var18);
                        _fun0042_ip = 261; continue _fun0042;
case 92:
                        var18 = _closure3_slot2;
                        var20 = function(arg1, arg2, arg3) {
                            var5 = _closure4_slot2;
                            var9 = arg1;
                            var8 = arg3;
                            var7 = arg2;
                            var10 = undefined;
                            var6 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var1;
                        };
                        var23 = var8;
                        var22 = var6;
                        var21 = var5;
                        var19 = var11;
                        var3 = var23[var7](var22, var21, var20, var19, var18, var17);
                        _fun0042_ip = 261; continue _fun0042;
case 260:
                        var9 = _closure3_slot7;
                        var8 = var9.saveClipWithTime;
                        var7 = _closure3_slot0;
                        var6 = _closure3_slot1;
                        var3 = _closure3_slot3;
                        var13 = undefined;
                        var5 = null;
                        if(!(var13 !== var3)) { _fun0042_ip = 262; continue _fun0042 }
case 213:
                        var5 = _closure3_slot3;
case 262:
                        var3 = _closure3_slot4;
                        var4 = null;
                        if(!(var13 !== var3)) { _fun0042_ip = 263; continue _fun0042 }
case 264:
                        var4 = _closure3_slot4;
case 263:
                        var12 = _closure3_slot5;
                        var3 = null;
                        if(!(var13 !== var12)) { _fun0042_ip = 218; continue _fun0042 }
case 101:
                        var3 = _closure3_slot5;
case 218:
                        var12 = _closure3_slot6;
                        var10 = null;
                        if(!(var13 !== var12)) { _fun0042_ip = 217; continue _fun0042 }
case 265:
                        var10 = _closure3_slot6;
case 217:
                        var14 = _closure3_slot2;
                        var16 = function(arg1, arg2, arg3) {
                            var5 = _closure4_slot2;
                            var9 = arg1;
                            var8 = arg2;
                            var6 = arg3;
                            var10 = undefined;
                            var7 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var1;
                        };
                        var23 = var9;
                        var22 = var7;
                        var21 = var6;
                        var20 = var5;
                        var19 = var4;
                        var18 = var3;
                        var17 = var10;
                        var15 = var11;
                        var1 = var23[var8](var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
case 261:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0041_ip = 21; continue _fun0041;
case 252:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 21:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[35] = var6;
        var6 = {};
        var8 = 'saveClipForUser';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var2 = arg1;
                var3 = var2.userID;
                var _closure3_slot0 = var3;
                var3 = var2.filepath;
                var _closure3_slot1 = var3;
                var3 = var2.metadata;
                var _closure3_slot2 = var3;
                var3 = var2.thumbnailMs;
                var _closure3_slot3 = var3;
                var3 = var2.startMs;
                var _closure3_slot4 = var3;
                var3 = var2.endMs;
                var _closure3_slot5 = var3;
                var3 = var2.trimStartMs;
                var _closure3_slot6 = var3;
                var2 = var2.trimEndMs;
                var _closure3_slot7 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var _closure3_slot8 = var2;
                var4 = var2.saveClipForUser;
                var3 = null;
                if(!(var3 == var4)) { _fun0045_ip = 266; continue _fun0045 }
case 267:
                var2 = var2.saveClipForUserWithTime;
                if(!(var3 != var2)) { _fun0045_ip = 268; continue _fun0045 }
case 266:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = arg2;
                        var _closure4_slot1 = var2;
                        var2 = function onSuccess(arg1, arg2, arg3, arg4) {
                            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                                var7 = arg1;
                                var10 = arg2;
                                var4 = arg3;
                                var2 = arg4;
                                var3 = undefined;
                                var6 = undefined;
                                var1 = undefined;
case 254: // try_start_0
                                var5 = global;
                                var9 = var5.JSON;
                                var8 = var9.parse;
                                var12 = var10;
                                var5 = '{}';
                                var11 = '';
                                if(!(var11 !== var12)) { _fun0047_ip = 221; continue _fun0047 }
case 24:
                                var5 = var10;
case 221:
                                var6 = var8.bind(var9)(var5);
case 28: // try_end0
                                _fun0047_ip = 196; continue _fun0047;
case 255: // catch_target0
                                CatchBlockStart(arg_register=4);
                                var6 = {};
case 196:
                                var5 = {};
                                var5['duration'] = var7;
                                var5['clipStats'] = var6;
                                var1 = var5;
                                var6 = var4;
                                var6 = var3 !== var6;
                                var5 = var6;
                                if(!var6) { _fun0047_ip = 20; continue _fun0047 }
case 33:
                                var6 = var4;
                                var7 = var6.length;
                                var6 = 0;
                                var5 = var7 > var6;
case 20:
                                if(!var5) { _fun0047_ip = 186; continue _fun0047 }
case 256:
                                var5 = var1;
                                var5['thumbnail'] = var4;
case 186:
                                var5 = var2;
                                var5 = var3 !== var5;
                                var4 = var5;
                                if(!var5) { _fun0047_ip = 17; continue _fun0047 }
case 184:
                                var5 = var2;
                                var6 = var5.length;
                                var5 = 0;
                                var4 = var6 > var5;
case 17:
                                if(!var4) { _fun0047_ip = 257; continue _fun0047 }
case 22:
                                var4 = var1;
                                var4['metadata'] = var2;
case 257:
                                var2 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            }
                        };
                        var _closure4_slot2 = var2;
                        var12 = function onFailure(arg1) {
                            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                                var4 = arg1;
case 258: // try_start_0
                                var1 = global;
                                var3 = var1.JSON;
                                var2 = var3.parse;
                                var6 = var4;
                                var1 = '{}';
                                var5 = '';
                                if(!(var5 !== var6)) { _fun0048_ip = 202; continue _fun0048 }
case 259:
                                var1 = var4;
case 202:
                                var3 = var2.bind(var3)(var1);
                                var2 = _closure4_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
case 197: // try_end0
                                return var1;
case 193: // catch_target0
                                CatchBlockStart(arg_register=0);
                                var3 = _closure4_slot1;
                                var2 = undefined;
                                var1 = {'errorMessage': 'clip save failed', 'errorAt': 'unknown'};
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            }
                        };
                        var3 = _closure3_slot8;
                        var3 = var3.saveClipForUserWithTime;
                        var11 = null;
                        if(!(var11 == var3)) { _fun0046_ip = 269; continue _fun0046 }
case 221:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 15;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.supportsFeature;
                        var3 = _closure1_slot23;
                        var3 = var3.CLIPS_THUMBNAIL;
                        var3 = var4.bind(var5)(var3);
                        var9 = _closure3_slot8;
                        var8 = var9.saveClipForUser;
                        var7 = _closure3_slot0;
                        var6 = _closure3_slot1;
                        var5 = _closure3_slot2;
                        if(var3) { _fun0046_ip = 270; continue _fun0046 }
case 251:
                        var21 = function(arg1, arg2, arg3) {
                            var5 = _closure4_slot2;
                            var9 = arg1;
                            var8 = arg3;
                            var7 = arg2;
                            var10 = undefined;
                            var6 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var1;
                        };
                        var25 = var9;
                        var24 = var7;
                        var23 = var6;
                        var22 = var5;
                        var20 = var12;
                        var3 = var25[var8](var24, var23, var22, var21, var20, var19);
                        _fun0046_ip = 271; continue _fun0046;
case 270:
                        var19 = _closure3_slot3;
                        var21 = function(arg1, arg2, arg3) {
                            var5 = _closure4_slot2;
                            var9 = arg1;
                            var8 = arg3;
                            var7 = arg2;
                            var10 = undefined;
                            var6 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var1;
                        };
                        var25 = var9;
                        var24 = var7;
                        var23 = var6;
                        var22 = var5;
                        var20 = var12;
                        var3 = var25[var8](var24, var23, var22, var21, var20, var19, var18);
                        _fun0046_ip = 271; continue _fun0046;
case 269:
                        var10 = _closure3_slot8;
                        var9 = var10.saveClipForUserWithTime;
                        var8 = _closure3_slot0;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot2;
                        var3 = _closure3_slot4;
                        var14 = undefined;
                        var5 = null;
                        if(!(var14 !== var3)) { _fun0046_ip = 272; continue _fun0046 }
case 273:
                        var5 = _closure3_slot4;
case 272:
                        var3 = _closure3_slot5;
                        var4 = null;
                        if(!(var14 !== var3)) { _fun0046_ip = 274; continue _fun0046 }
case 275:
                        var4 = _closure3_slot5;
case 274:
                        var13 = _closure3_slot6;
                        var3 = null;
                        if(!(var14 !== var13)) { _fun0046_ip = 276; continue _fun0046 }
case 102:
                        var3 = _closure3_slot6;
case 276:
                        var13 = _closure3_slot7;
                        var11 = null;
                        if(!(var14 !== var13)) { _fun0046_ip = 277; continue _fun0046 }
case 220:
                        var11 = _closure3_slot7;
case 277:
                        var15 = _closure3_slot3;
                        var17 = function(arg1, arg2, arg3) {
                            var5 = _closure4_slot2;
                            var9 = arg1;
                            var8 = arg2;
                            var6 = arg3;
                            var10 = undefined;
                            var7 = undefined;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var1;
                        };
                        var25 = var10;
                        var24 = var8;
                        var23 = var7;
                        var22 = var6;
                        var21 = var5;
                        var20 = var4;
                        var19 = var3;
                        var18 = var11;
                        var16 = var12;
                        var1 = var25[var9](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
case 271:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0045_ip = 278; continue _fun0045;
case 268:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 278:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[36] = var6;
        var6 = {};
        var8 = 'updateClipMetadata';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var _closure3_slot2 = var2;
                var3 = var2.updateClipMetadata;
                var2 = null;
                if(!(var2 != var3)) { _fun0049_ip = 10; continue _fun0049 }
case 182:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    var6 = _closure3_slot2;
                    var5 = var6.updateClipMetadata;
                    var10 = _closure3_slot0;
                    var9 = _closure3_slot1;
                    var8 = arg1;
                    var7 = arg2;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var1 = undefined;
                    return var1;
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0049_ip = 90; continue _fun0049;
case 10:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 90:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[37] = var6;
        var6 = {};
        var8 = 'saveScreenshot';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var2 = arg4;
                var _closure3_slot3 = var2;
                var2 = arg5;
                var _closure3_slot4 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var _closure3_slot5 = var2;
                var3 = var2.saveScreenshot;
                var2 = null;
                if(!(var2 != var3)) { _fun0050_ip = 251; continue _fun0050 }
case 201:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var9 = _closure3_slot5;
                        var8 = var9.saveScreenshot;
                        var7 = _closure3_slot0;
                        var6 = _closure3_slot1;
                        var3 = _closure3_slot3;
                        var10 = null;
                        var3 = var10 != var3;
                        var5 = '';
                        if(!var3) { _fun0051_ip = 9; continue _fun0051 }
case 39:
                        var5 = _closure3_slot3;
case 9:
                        var4 = _closure3_slot2;
                        var3 = _closure3_slot4;
                        var10 = var10 != var3;
                        var3 = 0;
                        if(!var10) { _fun0051_ip = 5; continue _fun0051 }
case 249:
                        var3 = _closure3_slot4;
case 5:
                        var12 = function(arg1) {
                            var3 = _closure4_slot0;
                            var1 = global;
                            var4 = var1.Buffer;
                            var2 = var4.from;
                            var1 = arg1;
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var11 = arg2;
                        var18 = var9;
                        var17 = var7;
                        var16 = var6;
                        var15 = var5;
                        var14 = var4;
                        var13 = var3;
                        var1 = var18[var8](var17, var16, var15, var14, var13, var12, var11, var10);
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0050_ip = 22; continue _fun0050;
case 251:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 22:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[38] = var6;
        var6 = {};
        var8 = 'exportClip';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var _closure3_slot2 = var2;
                var3 = var2.exportClip;
                var2 = null;
                if(!(var2 != var3)) { _fun0052_ip = 10; continue _fun0052 }
case 182:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var6 = _closure3_slot2;
                    var5 = var6.exportClip;
                    var10 = _closure3_slot0;
                    var9 = _closure3_slot1;
                    var8 = function(arg1) {
                        var3 = _closure4_slot0;
                        var1 = global;
                        var4 = var1.Blob;
                        var1 = new Array(1);
                        var2 = arg1;
                        var1[0] = var2;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {constructor: {value: var4}});
                        var6 = var2;
                        var5 = var1;
                        var1 = new var6[var4](var5, var4);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var7 = arg2;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var1 = undefined;
                    return var1;
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0052_ip = 90; continue _fun0052;
case 10:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 90:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[39] = var6;
        var6 = {};
        var8 = 'hasExportClipToFile';
        var6['key'] = var8;
        var8 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getVoiceEngine;
            var1 = var1.bind(var2)();
            var2 = var1.exportClipToFile;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['value'] = var8;
        var2[40] = var6;
        var6 = {};
        var8 = 'setClipsPerfMonitoring';
        var6['key'] = var8;
        var8 = function setClipsPerfMonitoring(arg1, arg2, arg3) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.getVoiceEngine;
                var1 = var1.bind(var2)();
                var4 = var1.setClipsPerfMonitoring;
                var1 = null;
                if(!(var1 != var4)) { _fun0053_ip = 182; continue _fun0053 }
case 24:
                var3 = arg1;
                var2 = arg2;
                var1 = arg3;
                var1 = var4.bind(var5)(var3, var2, var1);
                _fun0053_ip = 33; continue _fun0053;
case 182:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 33:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[41] = var6;
        var6 = {};
        var8 = 'exportClipToFile';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var3 = var2.exportClipToFile;
                var _closure3_slot3 = var3;
                var2 = null;
                if(!(var2 != var3)) { _fun0054_ip = 279; continue _fun0054 }
case 4:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    var7 = arg2;
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var _closure4_slot1 = var7;
                    var6 = _closure3_slot3;
                    var12 = _closure3_slot0;
                    var11 = _closure3_slot1;
                    var10 = _closure3_slot2;
                    var1 = undefined;
                    var9 = function(arg1) {
                        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                            var3 = arg1;
                            var2 = 'string';
                            var1 = typeof var3;
                            if(!(var2 !== var1)) { _fun0055_ip = 280; continue _fun0055 }
case 71:
                            var4 = _closure4_slot1;
                            var2 = undefined;
                            var1 = 'unsupported: native exportClipToFile returned non-string';
                            var1 = var4.bind(var2)(var1);
                            _fun0055_ip = 248; continue _fun0055;
case 280:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 248:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var13 = undefined;
                    var8 = var7;
                    var2 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var1;
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0054_ip = 281; continue _fun0054;
case 279:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 281:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[42] = var6;
        var6 = {};
        var8 = 'getWindowPreviews';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setPreviewsUseWgc;
                var2 = null;
                if(!(var2 != var3)) { _fun0056_ip = 250; continue _fun0056 }
case 196:
                var3 = var4.setPreviewsUseWgc;
                var2 = arg3;
                var2 = var3.bind(var4)(var2);
case 250:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1) {
                    _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 15;
                        var4 = var1[var5];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var4);
                        var4 = var7.getVoiceEngine;
                        var4 = var4.bind(var7)();
                        var7 = var4.getWindowPreviews;
                        var4 = null;
                        if(!(var4 == var7)) { _fun0057_ip = 182; continue _fun0057 }
case 197:
                        var4 = new Array(0);
                        var4 = var6.bind(var1)(var4);
                        _fun0057_ip = 251; continue _fun0057;
case 182:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getVoiceEngine;
                        var6 = var3.bind(var4)();
                        var5 = var6.getWindowPreviews;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = function(arg1) {
                            var3 = _closure4_slot0;
                            var1 = undefined;
                            var2 = arg1;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var6)(var4, var3, var2);
case 251:
                        return var1;
                    }
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var8;
        var2[43] = var6;
        var6 = {};
        var8 = 'getSingleWindowPreview';
        var6['key'] = var8;
        var8 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0058_ip = 282; continue _fun0058 }
case 283:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 15;
                    var3 = var3[var6];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getVoiceEngine;
                    var8 = var3.bind(var4)();
                    var4 = var8.setPreviewsUseWgc;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0058_ip = 208; continue _fun0058 }
case 28:
                    var7 = var8.setPreviewsUseWgc;
                    var4 = arg4;
                    var4 = var7.bind(var8)(var4);
case 208:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var7 = var7.bind(var5)(var4);
                    var4 = var7.getVoiceEngine;
                    var4 = var4.bind(var7)();
                    var4 = var4.getSingleWindowPreview;
                    if(!(var3 == var4)) { _fun0058_ip = 79; continue _fun0058 }
case 88:
                    return var3;
case 79:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getVoiceEngine;
                    var7 = var2.bind(var4)();
                    var6 = var7.getSingleWindowPreview;
                    var5 = arg1;
                    var4 = arg2;
                    var2 = arg3;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    SaveGenerator(address=164);
case 284:
                    return var2;
case 285:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0058_ip = 72; continue _fun0058 }
case 230:
                    var5 = var2.length;
                    var4 = 0;
                    var5 = var5 > var4;
                    var3 = null;
                    if(!var5) { _fun0058_ip = 74; continue _fun0058 }
case 286:
                    var3 = var2[var4];
case 74:
                    return var3;
case 72:
                    return var2;
case 282:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot3 = var8;
        var8 = function getSingleWindowPreview() {
            var1 = undefined;
            var4 = _closure2_slot3;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var8;
        var2[44] = var6;
        var6 = {};
        var8 = 'setAudioSubsystem';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var4 = arg1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 15;
                var3 = var1[var5];
                var1 = undefined;
                var6 = var6.bind(var1)(var3);
                var3 = var6.getVoiceEngine;
                var3 = var3.bind(var6)();
                var6 = var3.setAudioSubsystem;
                var3 = null;
                if(!(var3 == var6)) { _fun0059_ip = 287; continue _fun0059 }
case 248:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var6 = var6.bind(var1)(var3);
                var3 = var6.getVoiceEngine;
                var7 = var3.bind(var6)();
                var6 = var7.setUseLegacyAudioDevice;
                var3 = _closure1_slot16;
                var3 = var3.LEGACY;
                var3 = var4 === var3;
                var3 = var6.bind(var7)(var3);
                _fun0059_ip = 288; continue _fun0059;
case 287:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var2 = var3.setAudioSubsystem;
                var2 = var2.bind(var3)(var4);
case 288:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[45] = var6;
        var6 = {};
        var8 = 'setOffloadAdmControls';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setOffloadAdmControls;
                var2 = null;
                if(!(var2 != var3)) { _fun0060_ip = 183; continue _fun0060 }
case 39:
                var3 = var4.setOffloadAdmControls;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[46] = var6;
        var6 = {};
        var8 = 'updateFieldTrial';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var6 = var2.bind(var3)();
                var5 = var6.updateFieldTrial;
                var2 = null;
                if(!(var2 != var5)) { _fun0061_ip = 224; continue _fun0061 }
case 39:
                var4 = var5.call;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var6, var3, var2);
case 224:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[47] = var6;
        var6 = {};
        var8 = 'queueAudioSubsystem';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var6 = var3.queueAudioSubsystem;
                var2 = null;
                if(!(var2 == var6)) { _fun0062_ip = 226; continue _fun0062 }
case 289:
                var2 = var5.setAudioSubsystem;
                var2 = var2.bind(var5)(var4);
                _fun0062_ip = 250; continue _fun0062;
case 226:
                var2 = var3.queueAudioSubsystem;
                var2 = var2.bind(var3)(var4);
case 250:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[48] = var6;
        var6 = {};
        var8 = 'getAudioSubsystem';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.audioSubsystem;
            return var1;
        };
        var6['value'] = var8;
        var2[49] = var6;
        var6 = {};
        var8 = 'getAudioLayer';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.audioLayer;
            return var1;
        };
        var6['value'] = var8;
        var2[50] = var6;
        var6 = {};
        var8 = 'getDebugLogging';
        var6['key'] = var8;
        var8 = function value() {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var4 = this;
                var3 = var4.supports;
                var1 = _closure1_slot21;
                var1 = var1.DEBUG_LOGGING;
                var1 = var3.bind(var4)(var1);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0063_ip = 290; continue _fun0063 }
case 280:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var2 = var3.getDebugLogging;
                var1 = var2.bind(var3)();
case 290:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[51] = var6;
        var6 = {};
        var8 = 'setDebugLogging';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var4 = this;
                var3 = var4.supports;
                var2 = _closure1_slot21;
                var2 = var2.DEBUG_LOGGING;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0064_ip = 291; continue _fun0064 }
case 225:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var3 = var1.bind(var2)();
                var2 = var3.setDebugLogging;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 291:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var8;
        var2[52] = var6;
        var6 = {};
        var8 = 'setLoopback';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var2 = arg1;
                var10 = arg2;
                var7 = this;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 15;
                var3 = var1[var6];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var3 = var3.bind(var4)();
                var3 = var3.setLoopback;
                var11 = null;
                if(!(var11 != var3)) { _fun0065_ip = 40; continue _fun0065 }
case 255:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var8 = var3.bind(var4)();
                var4 = var8.setLoopback;
                var3 = {};
                var9 = var10.echoCancellation;
                var3['echoCancellation'] = var9;
                var9 = var10.noiseSuppression;
                var3['noiseSuppression'] = var9;
                var12 = var10.automaticGainControlConfig;
                var13 = var11 == var12;
                var9 = undefined;
                if(var13) { _fun0065_ip = 253; continue _fun0065 }
case 237:
                var9 = var12.enabled;
case 253:
                var3['automaticGainControl'] = var9;
                var9 = var10.automaticGainControlConfig;
                var3['automaticGainControlConfig'] = var9;
                var9 = var10.noiseCancellation;
                var3['noiseCancellation'] = var9;
                var9 = var10.noiseCancellationDuringProcessing;
                var3['noiseCancellationDuringProcessing'] = var9;
                var3 = var4.bind(var8)(var2, var3);
case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var3 = var3.bind(var4)();
                var3 = var3.setEmitVADLevel2;
                if(!(var11 == var3)) { _fun0065_ip = 292; continue _fun0065 }
case 272:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var9 = var3.bind(var4)();
                var8 = var9.setEmitVADLevel;
                var4 = var2;
                if(var2) { _fun0065_ip = 293; continue _fun0065 }
case 294:
                var12 = var7.listenerCount;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 13;
                var3 = var14[var3];
                var3 = var13.bind(var1)(var3);
                var3 = var3.MediaEngineEvent;
                var3 = var3.VoiceActivity;
                var12 = var12.bind(var7)(var3);
                var3 = 0;
                var4 = var12 > var3;
case 293:
                var3 = {};
                var12 = var10.echoCancellation;
                var3['echoCancellation'] = var12;
                var12 = var10.noiseSuppression;
                var3['noiseSuppression'] = var12;
                var12 = var10.automaticGainControlConfig;
                var13 = var11 == var12;
                var11 = undefined;
                if(var13) { _fun0065_ip = 189; continue _fun0065 }
case 295:
                var11 = var12.enabled;
case 189:
                var3['automaticGainControl'] = var11;
                var11 = var10.noiseCancellation;
                var3['noiseCancellation'] = var11;
                var10 = var10.noiseCancellationDuringProcessing;
                var3['noiseCancellationDuringProcessing'] = var10;
                var3 = var8.bind(var9)(var4, var2, var3);
                _fun0065_ip = 296; continue _fun0065;
case 292:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setEmitVADLevel2;
                if(var2) { _fun0065_ip = 297; continue _fun0065 }
case 298:
                var6 = var7.listenerCount;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.MediaEngineEvent;
                var5 = var5.VoiceActivity;
                var6 = var6.bind(var7)(var5);
                var5 = 0;
                var2 = var6 > var5;
case 297:
                var2 = var3.bind(var4)(var2);
case 296:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[53] = var6;
        var6 = {};
        var8 = 'getLoopback';
        var6['key'] = var8;
        var8 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var8;
        var2[54] = var6;
        var6 = {};
        var8 = 'getCodecSurvey';
        var6['key'] = var8;
        var8 = function value() {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.codecSurvey;
                var3 = null;
                if(!(var3 == var4)) { _fun0066_ip = 197; continue _fun0066 }
case 299:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getVoiceEngine;
                        var4 = var3.bind(var4)();
                        var5 = var4.getCodecSurvey;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0067_ip = 222; continue _fun0067 }
case 197:
                        var3 = global;
                        var6 = var3.Error;
                        var3 = var6.prototype;
                        var5 = Object.create(var3, {constructor: {value: var6}});
                        var7 = 'getCodecSurvey is not implemented.';
                        var8 = var5;
                        var3 = new var8[var6](var7, var6);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = arg2;
                        var3 = var3.bind(var1)(var5);
                        _fun0067_ip = 186; continue _fun0067;
case 222:
                        var3 = var4.getCodecSurvey;
                        var2 = function(arg1) {
                            var3 = arg1;
                            var1 = _closure3_slot0;
                            var1['codecSurvey'] = var3;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var3);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
case 186:
                        return var1;
                    }
                };
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _fun0066_ip = 207; continue _fun0066;
case 197:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.resolve;
                var2 = var2.codecSurvey;
                var1 = var3.bind(var4)(var2);
case 207:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[55] = var6;
        var6 = {};
        var8 = 'writeAudioDebugState';
        var6['key'] = var8;
        var8 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getVoiceEngine;
                    var2 = var2.bind(var3)();
                    var2 = var2.writeAudioDebugState;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0068_ip = 32; continue _fun0068 }
case 24:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var6 = 'Audio debug state is not supported.';
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = arg2;
                    var3 = var3.bind(var1)(var4);
                    _fun0068_ip = 20; continue _fun0068;
case 32:
                    var2 = var2.bind(var1)();
                    var2 = arg1;
                    var2 = var2.bind(var1)();
case 20:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[56] = var6;
        var6 = {};
        var8 = 'startAecDump';
        var6['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var2[57] = var6;
        var6 = {};
        var8 = 'stopAecDump';
        var6['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var2[58] = var6;
        var6 = {};
        var8 = 'setAecDump';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setAecDump;
                var2 = null;
                if(!(var2 != var4)) { _fun0069_ip = 183; continue _fun0069 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[59] = var6;
        var6 = {};
        var8 = 'startRecordingRawSamples';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.startRecordingRawSamples;
                var2 = null;
                if(!(var2 != var4)) { _fun0070_ip = 196; continue _fun0070 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[60] = var6;
        var6 = {};
        var8 = 'stopRecordingRawSamples';
        var6['key'] = var8;
        var8 = function value() {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.stopRecordingRawSamples;
                var2 = null;
                if(!(var2 != var3)) { _fun0071_ip = 255; continue _fun0071 }
case 24:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
case 255:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[61] = var6;
        var6 = {};
        var8 = 'processBatchAudioFiles';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3, arg4) {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var8 = var2.bind(var3)();
                var7 = var8.processBatchAudioFiles;
                var2 = null;
                if(!(var2 != var7)) { _fun0072_ip = 291; continue _fun0072 }
case 24:
                var6 = var7.call;
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = arg4;
                var14 = var7;
                var13 = var8;
                var2 = var14[var6](var13, var12, var11, var10, var9, var8);
case 291:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[62] = var6;
        var6 = {};
        var8 = 'cancelBatchAudioProcessing';
        var6['key'] = var8;
        var8 = function value() {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.cancelBatchAudioProcessing;
                var2 = null;
                if(!(var2 != var3)) { _fun0073_ip = 255; continue _fun0073 }
case 24:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
case 255:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[63] = var6;
        var6 = {};
        var8 = 'rankRtcRegions';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getVoiceEngine;
                    var3 = var3.bind(var4)();
                    var4 = var3.rankRtcRegions;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0074_ip = 222; continue _fun0074 }
case 197:
                    var3 = global;
                    var6 = var3.Error;
                    var3 = var6.prototype;
                    var5 = Object.create(var3, {constructor: {value: var6}});
                    var8 = 'RTC region latency test is not supported.';
                    var9 = var5;
                    var3 = new var9[var6](var8, var7);
                    var5 = var3 instanceof Object ? var3 : var5;
                    var3 = arg2;
                    var3 = var3.bind(var1)(var5);
                    _fun0074_ip = 300; continue _fun0074;
case 222:
                    var3 = _closure3_slot0;
                    var2 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var1)(var3, var2);
case 300:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[64] = var6;
        var6 = {};
        var8 = 'createReplayConnection';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var7 = undefined;
                var6 = var2.bind(var7)(var1);
                var3 = var6.createReplay;
                var2 = arg1;
                var1 = arg2;
                var2 = var3.bind(var6)(var2, var1);
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0075_ip = 301; continue _fun0075 }
case 226:
                var11 = var2.on;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 13;
                var10 = var8[var3];
                var10 = var6.bind(var7)(var10);
                var10 = var10.BaseConnectionEvent;
                var10 = var10.Destroy;
                var9 = function(arg1) {
                    _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connections;
                        var3 = var4.delete;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.connectionsEmpty;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0076_ip = 26; continue _fun0076 }
case 185:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.setProcessPriority;
                        var1 = _closure1_slot15;
                        var1 = var1.NORMAL;
                        var1 = var2.bind(var3)(var1);
case 26:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var11.bind(var2)(var10, var9);
                var10 = var5.connections;
                var9 = var10.add;
                var9 = var9.bind(var10)(var2);
                var9 = 15;
                var9 = var8[var9];
                var10 = var6.bind(var7)(var9);
                var9 = var10.setProcessPriority;
                var4 = _closure1_slot15;
                var4 = var4.HIGH;
                var4 = var9.bind(var10)(var4);
                var4 = var5.emit;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.MediaEngineEvent;
                var3 = var3.Connection;
                var3 = var4.bind(var5)(var3, var2);
                var1 = var2;
case 301:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[65] = var6;
        var6 = {};
        var8 = 'setOnVideoContainerResized';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = arg1;
            var3['onContainerResized'] = var2;
            return var1;
        };
        var6['value'] = var8;
        var2[66] = var6;
        var6 = {};
        var8 = 'setMaxSyncDelayOverride';
        var6['key'] = var8;
        var8 = function setMaxSyncDelayOverride(arg1) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var3 = var2.setMaxSyncDelayOverride;
                var2 = null;
                if(!(var2 != var3)) { _fun0077_ip = 28; continue _fun0077 }
case 24:
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
case 28:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[67] = var6;
        var6 = {};
        var8 = 'applyMediaFilterSettings';
        var6['key'] = var8;
        var8 = function applyMediaFilterSettings(arg1) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var5.bind(var3)(var1);
                var1 = var5.getVoiceEngine;
                var5 = var1.bind(var5)();
                var1 = var5.applyMediaFilterSettings;
                var6 = var5.applyMediaFilterSettingsWithCallback;
                var _closure3_slot1 = var6;
                var5 = null;
                if(!(var5 == var6)) { _fun0078_ip = 229; continue _fun0078 }
case 249:
                if(!(var5 != var1)) { _fun0078_ip = 250; continue _fun0078 }
case 5:
                var1 = var1.bind(var3)(var4);
case 250:
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.resolve;
                var1 = var1.bind(var3)();
                _fun0078_ip = 184; continue _fun0078;
case 229:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var7 = function(arg1) {
                    var4 = _closure3_slot1;
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var8 = var3;
                var2 = new var8[var4](var7, var6);
                var1 = var2 instanceof Object ? var2 : var3;
case 184:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[68] = var6;
        var6 = {};
        var8 = 'startLocalAudioRecording';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                    var5 = arg2;
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var _closure4_slot1 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getVoiceEngine;
                    var3 = var3.bind(var4)();
                    var4 = var3.startLocalAudioRecording;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0079_ip = 20; continue _fun0079 }
case 196:
                    var3 = global;
                    var7 = var3.Error;
                    var3 = var7.prototype;
                    var6 = Object.create(var3, {constructor: {value: var7}});
                    var9 = 'startLocalAudioRecording is not supported.';
                    var10 = var6;
                    var3 = new var10[var7](var9, var8);
                    var3 = var3 instanceof Object ? var3 : var6;
                    var3 = var5.bind(var1)(var3);
                    _fun0079_ip = 302; continue _fun0079;
case 20:
                    var3 = _closure3_slot0;
                    var2 = function(arg1) {
                        _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                            var2 = arg1;
                            if(var2) { _fun0080_ip = 197; continue _fun0080 }
case 7:
                            var4 = _closure4_slot1;
                            var2 = global;
                            var5 = var2.Error;
                            var2 = var5.prototype;
                            var3 = Object.create(var2, {constructor: {value: var5}});
                            var6 = 'Failed to start local audio recording.';
                            var7 = var3;
                            var2 = new var7[var5](var6, var5);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun0080_ip = 226; continue _fun0080;
case 197:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 226:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var1)(var3, var2);
case 302:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[69] = var6;
        var6 = {};
        var8 = 'stopLocalAudioRecording';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var7 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 15;
                var5 = var1[var4];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.getVoiceEngine;
                var9 = var5.bind(var6)();
                var8 = var9.stopLocalAudioRecording;
                var6 = null;
                if(!(var6 != var8)) { _fun0081_ip = 303; continue _fun0081 }
case 255:
                var5 = var8.call;
                var3 = function(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var1 = undefined;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var3 = var5.bind(var8)(var9, var3);
case 303:
                var5 = var7.listenerCount;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 13;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.MediaEngineEvent;
                var3 = var3.VoiceActivity;
                var5 = var5.bind(var7)(var3);
                var3 = 0;
                var3 = var5 > var3;
                if(!var3) { _fun0081_ip = 285; continue _fun0081 }
case 304:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var7 = var7.bind(var1)(var5);
                var5 = var7.getVoiceEngine;
                var5 = var5.bind(var7)();
                var5 = var5.setEmitVADLevel2;
                var3 = var6 != var5;
case 285:
                if(!var3) { _fun0081_ip = 305; continue _fun0081 }
case 306:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setEmitVADLevel2;
                var2 = true;
                var2 = var3.bind(var4)(var2);
case 305:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[70] = var6;
        var6 = {};
        var8 = 'setHasFullbandPerformance';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setHasFullbandPerformance;
                var2 = null;
                if(!(var2 != var4)) { _fun0082_ip = 183; continue _fun0082 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[71] = var6;
        var6 = {};
        var8 = 'getSupportedSecureFramesProtocolVersion';
        var6['key'] = var8;
        var8 = function value() {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var1 = var1.bind(var2)();
                var2 = var1.SupportedSecureFramesProtocolVersion;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0083_ip = 28; continue _fun0083 }
case 307:
                var1 = var2;
case 28:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[72] = var6;
        var6 = {};
        var8 = 'getSupportedBandwidthEstimationExperiments';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.getSupportedBandwidthEstimationExperiments;
                var2 = null;
                if(!(var2 != var4)) { _fun0084_ip = 183; continue _fun0084 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[73] = var6;
        var6 = {};
        var8 = 'getMLSSigningKey';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getVoiceEngine;
                    var6 = var3.bind(var4)();
                    var4 = var6.getMLSSigningKey;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0085_ip = 222; continue _fun0085 }
case 197:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var9 = 'NOT_IMPLEMENTED';
                    var10 = var4;
                    var3 = new var10[var5](var9, var8);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = arg2;
                    var3 = var3.bind(var1)(var4);
                    _fun0085_ip = 184; continue _fun0085;
case 222:
                    var5 = var6.getMLSSigningKey;
                    var4 = _closure3_slot0;
                    var3 = _closure3_slot1;
                    var2 = function(arg1, arg2) {
                        var3 = _closure4_slot0;
                        var2 = {};
                        var1 = arg1;
                        var2['key'] = var1;
                        var1 = arg2;
                        var2['signature'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
case 184:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[74] = var6;
        var6 = {};
        var8 = 'setSidechainCompression';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setSidechainCompression;
                var2 = null;
                if(!(var2 != var4)) { _fun0086_ip = 183; continue _fun0086 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[75] = var6;
        var6 = {};
        var8 = 'setSidechainCompressionStrength';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var2 = 100;
                var1 = arg1;
                var6 = var2 - var1;
                var5 = _closure1_slot27;
                var4 = _closure1_slot14;
                var3 = _closure1_slot12;
                var1 = undefined;
                var7 = var5.bind(var1)(var6, var4, var3);
                var4 = _closure1_slot13;
                var3 = _closure1_slot11;
                var6 = var5.bind(var1)(var6, var4, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.applySidechainCompressionSettings;
                var2 = null;
                if(!(var2 != var4)) { _fun0087_ip = 186; continue _fun0087 }
case 32:
                var3 = var4.call;
                var2 = {};
                var2['threshold'] = var7;
                var2['ratio'] = var6;
                var2 = var3.bind(var4)(var5, var2);
case 186:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[76] = var6;
        var6 = {};
        var8 = 'setNativeDesktopVideoSourcePickerActive';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setNativeDesktopVideoSourcePickerActive;
                var2 = null;
                if(!(var2 != var4)) { _fun0088_ip = 196; continue _fun0088 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 196:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[77] = var6;
        var6 = {};
        var8 = 'presentNativeScreenSharePicker';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var6 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.presentNativeScreenSharePicker;
                var2 = null;
                if(!(var2 != var4)) { _fun0089_ip = 250; continue _fun0089 }
case 221:
                var3 = var4.call;
                var7 = var2 != var6;
                var2 = '';
                if(!var7) { _fun0089_ip = 208; continue _fun0089 }
case 249:
                var2 = var6;
case 208:
                var2 = var3.bind(var4)(var5, var2);
case 250:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[78] = var6;
        var6 = {};
        var8 = 'releaseNativeDesktopVideoSourcePickerStream';
        var6['key'] = var8;
        var8 = function value() {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.releaseNativeDesktopVideoSourcePickerStream;
                var2 = null;
                if(!(var2 != var3)) { _fun0090_ip = 255; continue _fun0090 }
case 24:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
case 255:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[79] = var6;
        var6 = {};
        var8 = 'getSystemMicrophoneMode';
        var6['key'] = var8;
        var8 = function* () {
            var1 = function* anon_0_() {
                _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0091_ip = 308; continue _fun0091 }
case 309:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getVoiceEngine;
                    var6 = var3.bind(var4)();
                    var5 = var6.getSystemMicrophoneMode;
                    var3 = null;
                    var4 = var3 == var5;
                    if(var4) { _fun0091_ip = 182; continue _fun0091 }
case 28:
                    var4 = var5.call;
                    var2 = var4.bind(var5)(var6);
case 182:
                    SaveGenerator(address=71);
case 310:
                    return var2;
case 208:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0091_ip = 311; continue _fun0091 }
case 250:
                    var4 = var3 != var2;
                    var3 = '';
                    if(!var4) { _fun0091_ip = 86; continue _fun0091 }
case 201:
                    var3 = var2;
case 86:
                    return var3;
case 311:
                    return var2;
case 308:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot2 = var8;
        var8 = function getSystemMicrophoneMode() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var8;
        var2[80] = var6;
        var6 = {};
        var8 = 'showSystemCaptureConfigurationUI';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.showSystemCaptureConfigurationUI;
                var2 = null;
                if(!(var2 != var4)) { _fun0092_ip = 183; continue _fun0092 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 183:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[81] = var6;
        var6 = {};
        var8 = 'fetchAsyncResources';
        var6['key'] = var8;
        var8 = function value() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6['value'] = var8;
        var2[82] = var6;
        var6 = {};
        var8 = 'getDeviceOSVolume';
        var6['key'] = var8;
        var8 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0093_ip = 30; continue _fun0093 }
case 309:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getVoiceEngine;
                    var6 = var3.bind(var4)();
                    var5 = var6.getDeviceOSVolume;
                    var3 = null;
                    var3 = var3 == var5;
                    if(var3) { _fun0093_ip = 208; continue _fun0093 }
case 28:
                    var4 = var5.call;
                    var3 = arg1;
                    var2 = var4.bind(var5)(var6, var3);
case 208:
                    SaveGenerator(address=75);
case 312:
                    return var2;
case 303:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0093_ip = 313; continue _fun0093 }
case 18:
                    return var2;
case 313:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot1 = var8;
        var8 = function getDeviceOSVolume() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var8;
        var2[83] = var6;
        var6 = {};
        var8 = 'getDeviceOSMuted';
        var6['key'] = var8;
        var8 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0094_ip = 30; continue _fun0094 }
case 309:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getVoiceEngine;
                    var6 = var3.bind(var4)();
                    var5 = var6.getDeviceOSMuted;
                    var3 = null;
                    var3 = var3 == var5;
                    if(var3) { _fun0094_ip = 208; continue _fun0094 }
case 28:
                    var4 = var5.call;
                    var3 = arg1;
                    var2 = var4.bind(var5)(var6, var3);
case 208:
                    SaveGenerator(address=75);
case 312:
                    return var2;
case 303:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0094_ip = 313; continue _fun0094 }
case 18:
                    return var2;
case 313:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot0 = var8;
        var8 = function getDeviceOSMuted() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var8;
        var2[84] = var6;
        var6 = {};
        var8 = 'getDeviceAudioEffects';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var4 = var1.bind(var2)();
                var2 = var4.getDeviceAudioEffects;
                var1 = null;
                if(!(var1 == var2)) { _fun0095_ip = 222; continue _fun0095 }
case 39:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'Device audio effect querying not supported';
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var3)(var1);
                _fun0095_ip = 235; continue _fun0095;
case 222:
                var3 = var4.getDeviceAudioEffects;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 235:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[85] = var6;
        var6 = {};
        var8 = 'watchdogTick';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = false;
            var _closure3_slot1 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getVoiceEngine;
            var6 = var4.bind(var5)();
            var5 = var6.pingVoiceThread;
            var4 = function() {
                var2 = true;
                _closure3_slot1 = var2;
                var2 = _closure3_slot0;
                var1 = 0;
                var2['consecutiveWatchdogFailures'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = global;
            var4 = var4.setTimeout;
            var3 = _closure1_slot24;
            var2 = function() {
                _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                    var2 = _closure3_slot1;
                    if(var2) { _fun0096_ip = 33; continue _fun0096 }
case 283:
                    var2 = _closure3_slot0;
                    var3 = var2.consecutiveWatchdogFailures;
                    var3 = var3 + 1;
                    var2['consecutiveWatchdogFailures'] = var3;
                    var2 = 1;
                    if(!(var3 > var2)) { _fun0096_ip = 33; continue _fun0096 }
case 280:
                    var4 = _closure3_slot0;
                    var3 = var4.emit;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.MediaEngineEvent;
                    var2 = var2.WatchdogTimeout;
                    var2 = var3.bind(var4)(var2);
                    _fun0096_ip = 20; continue _fun0096;
case 33:
                    var2 = _closure3_slot0;
                    var1 = var2.watchdogTick;
                    var1 = var1.bind(var2)();
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var6['value'] = var8;
        var2[86] = var6;
        var6 = {};
        var8 = 'connectionsEmpty';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.connections;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var6['value'] = var8;
        var2[87] = var6;
        var6 = {};
        var6['key'] = var7;
        var1 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.supported;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/index.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();