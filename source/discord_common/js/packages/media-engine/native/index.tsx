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
            var2 = _closure1_slot16;
case 6:
            var1 = _closure1_slot16;
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
    var8 = var4.SIDECHAIN_COMPRESSION_MAX_RATIO;
    var _closure1_slot10 = var8;
    var8 = var4.SIDECHAIN_COMPRESSION_MAX_THRESHOLD;
    var _closure1_slot11 = var8;
    var8 = var4.SIDECHAIN_COMPRESSION_MIN_RATIO;
    var _closure1_slot12 = var8;
    var4 = var4.SIDECHAIN_COMPRESSION_MIN_THRESHOLD;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AudioSubsystems;
    var _closure1_slot14 = var8;
    var8 = var4.ClipsRecordingEvent;
    var _closure1_slot15 = var8;
    var8 = var4.DEFAULT_VOLUME;
    var _closure1_slot16 = var8;
    var8 = var4.DeviceTypes;
    var _closure1_slot17 = var8;
    var8 = var4.DISABLED_DEVICE_ID;
    var _closure1_slot18 = var8;
    var8 = var4.Features;
    var _closure1_slot19 = var8;
    var8 = var4.LOOPBACK_PLAYBACK_GAIN_MULTIPLIER;
    var _closure1_slot20 = var8;
    var8 = var4.MediaEngineContextTypes;
    var _closure1_slot21 = var8;
    var8 = var4.NativeFeatures;
    var _closure1_slot22 = var8;
    var8 = var4.ProcessPriority;
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
                var5 = _closure2_slot2;
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
                var6 = _closure1_slot18;
                var1['audioInputDeviceId'] = var6;
                var1['audioOutputDeviceId'] = var6;
                var1['videoInputDeviceId'] = var6;
                var8 = global;
                var6 = var8.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var16 = var7;
                var6 = new var16[var6](var15);
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
                var9 = 12;
                var9 = var5[var9];
                var9 = var7.bind(var3)(var9);
                var11 = var9.Logger;
                var9 = var11.prototype;
                var10 = Object.create(var9, {constructor: {value: var11}});
                var15 = 'MediaEngineNative';
                var16 = var10;
                var9 = new var16[var11](var15, var14);
                var9 = var9 instanceof Object ? var9 : var10;
                var1['logger'] = var9;
                var9 = function() {
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
                        var2 = _closure1_slot17;
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
                var1['handleDeviceChange'] = var9;
                var9 = function(arg1, arg2) {
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
                    var7 = _closure1_slot16;
                    var3 = arg1;
                    var3 = var3 * var7;
                    var7 = _closure1_slot16;
                    var2 = arg2;
                    var2 = var2 * var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['handleVolumeChange'] = var9;
                var9 = function(arg1, arg2) {
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
                var1['handleVoiceActivity'] = var9;
                var9 = function(arg1, arg2) {
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
                var1['handleActiveSinksChange'] = var9;
                var9 = function(arg1) {
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
                var1['handleNewListener'] = var9;
                var9 = function(arg1) {
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
                var1['handleRemoveListener'] = var9;
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
                    var3 = var2.VideoInputInitialized;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleVideoInputInitialization'] = var9;
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
                    var3 = var2.AudioInputInitialized;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleAudioInputInitialization'] = var9;
                var9 = function(arg1, arg2) {
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
                var1['handleNativeScreenSharePickerUpdate'] = var9;
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
                    var3 = var2.NativeScreenSharePickerCancel;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleNativeScreenSharePickerCancel'] = var9;
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
                    var3 = var2.NativeScreenSharePickerError;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleNativeScreenSharePickerError'] = var9;
                var9 = function(arg1, arg2) {
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
                var1['handleAudioDeviceModuleErrorCallback'] = var9;
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
                    var3 = var2.VideoCodecError;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleVideoCodecErrorCallback'] = var9;
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
                    var3 = var2.SystemMicrophoneModeChange;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleSystemMicrophoneModeChangeCallback'] = var9;
                var10 = 15;
                var5 = var5[var10];
                var7 = var7.bind(var3)(var5);
                var5 = var7.getVoiceEngine;
                var7 = var5.bind(var7)();
                var5 = var7.updateFieldTrial;
                if(!(var6 != var5)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var11 = var7.updateFieldTrial;
                var9 = 'WebRTC-CheckReceiveTime';
                var5 = 'Enabled';
                var5 = var11.bind(var7)(var9, var5);
case 44:
                var9 = var7.setDeviceChangeCallback;
                var5 = var1.handleDeviceChange;
                var5 = var9.bind(var7)(var5);
                var9 = var7.setVolumeChangeCallback;
                var5 = var1.handleVolumeChange;
                var5 = var9.bind(var7)(var5);
                var9 = var7.setOnVoiceCallback;
                var5 = var1.handleVoiceActivity;
                var5 = var9.bind(var7)(var5);
                var5 = var7.setVideoInputInitializationCallback;
                if(!(var6 != var5)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var9 = var7.setVideoInputInitializationCallback;
                var5 = var1.handleVideoInputInitialization;
                var5 = var9.bind(var7)(var5);
case 46:
                var5 = var7.setAudioInputInitializationCallback;
                if(!(var6 != var5)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var9 = var7.setAudioInputInitializationCallback;
                var5 = var1.handleAudioInputInitialization;
                var5 = var9.bind(var7)(var5);
case 48:
                var5 = var7.setAudioDeviceModuleErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var9 = var7.setAudioDeviceModuleErrorCallback;
                var5 = var1.handleAudioDeviceModuleErrorCallback;
                var5 = var9.bind(var7)(var5);
case 50:
                var9 = var7.setTransportOptions;
                var5 = {'idleJitterBufferFlush': true, 'ducking': false};
                var5 = var9.bind(var7)(var5);
                var5 = var7.setNativeScreenSharePickerCallbacks;
                if(!(var6 != var5)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var12 = var7.setNativeScreenSharePickerCallbacks;
                var11 = var1.handleNativeScreenSharePickerUpdate;
                var9 = var1.handleNativeScreenSharePickerCancel;
                var5 = var1.handleNativeScreenSharePickerError;
                var5 = var12.bind(var7)(var11, var9, var5);
case 52:
                var5 = var7.setVideoCodecErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var9 = var7.setVideoCodecErrorCallback;
                var5 = var1.handleVideoCodecErrorCallback;
                var5 = var9.bind(var7)(var5);
case 54:
                var5 = var7.setSystemMicrophoneModeChangeCallback;
                if(!(var6 != var5)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var9 = var7.setSystemMicrophoneModeChangeCallback;
                var5 = var1.handleSystemMicrophoneModeChangeCallback;
                var5 = var9.bind(var7)(var5);
case 56:
                var11 = var1.on;
                var9 = var1.handleRemoveListener;
                var5 = 'removeListener';
                var5 = var11.bind(var1)(var5, var9);
                var11 = var1.on;
                var9 = var1.handleNewListener;
                var5 = 'newListener';
                var5 = var11.bind(var1)(var5, var9);
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var9 = var9.bind(var3)(var5);
                var5 = var9.getVoiceEngine;
                var5 = var5.bind(var9)();
                var5 = var5.getAudioSubsystem;
                if(!(var6 == var5)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var9 = var9.bind(var3)(var5);
                var5 = var9.getVoiceEngine;
                var5 = var5.bind(var9)();
                var5 = var5.getUseLegacyAudioDevice;
                if(!(var6 != var5)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var9 = var9.bind(var3)(var5);
                var5 = var9.getVoiceEngine;
                var9 = var5.bind(var9)();
                var5 = var9.getUseLegacyAudioDevice;
                var5 = var5.bind(var9)();
                var9 = _closure1_slot14;
                if(var5) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var5 = var9.STANDARD;
                _fun0003_ip = 64; continue _fun0003;
case 62:
                var5 = var9.LEGACY;
case 64:
                var1['audioSubsystem'] = var5;
                _fun0003_ip = 60; continue _fun0003;
case 58:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var9 = var9.bind(var3)(var5);
                var5 = var9.getVoiceEngine;
                var10 = var5.bind(var9)();
                var9 = var10.getAudioSubsystem;
                var5 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['audioSubsystem'] = var1;
                    var1 = arg2;
                    var2['audioLayer'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var5 = var9.bind(var10)(var5);
case 60:
                var5 = var7.pingVoiceThread;
                var5 = var6 != var5;
                if(!var5) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var9 = var8.window;
                var10 = 'undefined';
                var9 = typeof var9;
                var5 = var10 !== var9;
case 65:
                if(!var5) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var8 = var8.window;
                var8 = var8.GLOBAL_ENV;
                var9 = var8.RELEASE_CHANNEL;
                var8 = 'canary';
                var5 = var8 === var9;
case 67:
                if(!var5) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                var5 = var1.watchdogTick;
                var5 = var5.bind(var1)();
case 69:
                var5 = var7.setActiveSinksChangeCallback;
                if(!(var6 != var5)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                var8 = var7.setActiveSinksChangeCallback;
                var5 = var1.handleActiveSinksChange;
                var5 = var8.bind(var7)(var5);
case 71:
                var5 = var7.setLoopbackPlaybackGainMultiplier;
                if(!(var6 != var5)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                var8 = var7.setLoopbackPlaybackGainMultiplier;
                var5 = _closure1_slot20;
                var5 = var8.bind(var7)(var5);
case 73:
                var5 = var7.setVoiceFiltersFailedCallback;
                if(!(var6 != var5)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                var6 = var7.setVoiceFiltersFailedCallback;
                var5 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.emit;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.MediaEngineEvent;
                    var2 = var1.VoiceFiltersFailed;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
case 75:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 16;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var1);
                var2 = function pollQueueMetrics(arg1) {
                    var6 = arg1;
                    var _closure4_slot0 = var6;
                    var1 = false;
                    var _closure4_slot1 = var1;
                    var5 = var6.on;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.MediaEngineEvent;
                    var4 = var3.Destroy;
                    var3 = function() {
                        var1 = true;
                        _closure4_slot1 = var1;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                                    var2 = undefined;
                                    var _closure7_slot0 = var2;
                                    var5 = _closure4_slot1;
                                    if(var5) { _fun0010_ip = 79; continue _fun0010 }
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
                                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                            var2 = arg1;
                                            var _closure8_slot0 = var2;
                                            var3 = _closure7_slot0;
                                            var4 = var3.pollQueueMetrics;
                                            var3 = null;
                                            if(!(var3 != var4)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
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
case 80:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var14 = var6;
                                    var3 = new var14[var8](var13, var12);
                                    var3 = var3 instanceof Object ? var3 : var6;
                                    SaveGenerator(address=105);
case 82:
                                    return var3;
case 83:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                                    var6 = 900000;
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
                                    _fun0010_ip = 79; continue _fun0010;
case 84:
                                    return var3;
case 79:
                                    return var2;
case 77:
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
                    var4 = var3.bind(var1)();
                    var _closure4_slot2 = var4;
                    var2 = global;
                    var3 = var2.setTimeout;
                    var2 = 900000;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure2_slot2 = var5;
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
        var2 = new Array(74);
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot19;
                var2 = var2.LEGACY_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0012_ip = 86; continue _fun0012 }
case 14:
                var2 = _closure1_slot19;
                var2 = var2.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                var2 = _closure1_slot19;
                var2 = var2.AUTOMATIC_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0012_ip = 89; continue _fun0012 }
case 28:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
                if(!(var2 !== var3)) { _fun0012_ip = 90; continue _fun0012 }
case 4:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                if(!(var2 !== var3)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                var2 = _closure1_slot19;
                var2 = var2.DEBUG_LOGGING;
                if(!(var2 !== var3)) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                var2 = _closure1_slot19;
                var2 = var2.SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                var2 = _closure1_slot19;
                var2 = var2.SCREEN_SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                var2 = _closure1_slot19;
                var2 = var2.ELEVATED_HOOK;
                if(!(var2 !== var3)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                var2 = _closure1_slot19;
                var2 = var2.LOOPBACK;
                if(!(var2 !== var3)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                var2 = _closure1_slot19;
                var2 = var2.WUMPUS_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                var2 = _closure1_slot19;
                var2 = var2.HYBRID_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                var2 = _closure1_slot19;
                var2 = var2.ATTENUATION;
                if(!(var2 !== var3)) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                var2 = _closure1_slot19;
                var2 = var2.VIDEO_HOOK;
                if(!(var2 !== var3)) { _fun0012_ip = 107; continue _fun0012 }
case 109:
                var2 = _closure1_slot19;
                var2 = var2.EXPERIMENTAL_SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                var2 = _closure1_slot19;
                var2 = var2.OPEN_H264;
                if(!(var2 !== var3)) { _fun0012_ip = 112; continue _fun0012 }
case 113:
                var2 = _closure1_slot19;
                var2 = var2.EXPERIMENTAL_ENCODERS;
                if(!(var2 !== var3)) { _fun0012_ip = 114; continue _fun0012 }
case 115:
                var2 = _closure1_slot19;
                var2 = var2.REMOTE_LOCUS_NETWORK_CONTROL;
                if(!(var2 !== var3)) { _fun0012_ip = 116; continue _fun0012 }
case 117:
                var2 = _closure1_slot19;
                var2 = var2.SCREEN_PREVIEWS;
                if(!(var2 !== var3)) { _fun0012_ip = 118; continue _fun0012 }
case 119:
                var2 = _closure1_slot19;
                var2 = var2.CLIPS;
                if(!(var2 !== var3)) { _fun0012_ip = 120; continue _fun0012 }
case 121:
                var2 = _closure1_slot19;
                var2 = var2.WINDOW_PREVIEWS;
                if(!(var2 !== var3)) { _fun0012_ip = 122; continue _fun0012 }
case 123:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_DEBUG_STATE;
                if(!(var2 !== var3)) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                var2 = _closure1_slot19;
                var2 = var2.CONNECTION_REPLAY;
                if(!(var2 !== var3)) { _fun0012_ip = 126; continue _fun0012 }
case 127:
                var2 = _closure1_slot19;
                var2 = var2.SIMULCAST;
                if(!(var2 !== var3)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
                var2 = _closure1_slot19;
                var2 = var2.RTC_REGION_RANKING;
                if(!(var2 !== var3)) { _fun0012_ip = 130; continue _fun0012 }
case 131:
                var2 = _closure1_slot19;
                var2 = var2.ELECTRON_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 132; continue _fun0012 }
case 133:
                var2 = _closure1_slot19;
                var2 = var2.MEDIAPIPE;
                if(!(var2 !== var3)) { _fun0012_ip = 134; continue _fun0012 }
case 135:
                var2 = _closure1_slot19;
                var2 = var2.FIXED_KEYFRAME_INTERVAL;
                if(!(var2 !== var3)) { _fun0012_ip = 136; continue _fun0012 }
case 137:
                var2 = _closure1_slot19;
                var2 = var2.FIRST_FRAME_CALLBACK;
                if(!(var2 !== var3)) { _fun0012_ip = 138; continue _fun0012 }
case 139:
                var2 = _closure1_slot19;
                var2 = var2.REMOTE_USER_MULTI_STREAM;
                if(!(var2 !== var3)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
                var2 = _closure1_slot19;
                var2 = var2.IMAGE_QUALITY_MEASUREMENT;
                if(!(var2 !== var3)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
                var2 = _closure1_slot19;
                var2 = var2.GO_LIVE_HARDWARE;
                if(!(var2 !== var3)) { _fun0012_ip = 144; continue _fun0012 }
case 145:
                var2 = _closure1_slot19;
                var2 = var2.SCREEN_CAPTURE_KIT;
                if(!(var2 !== var3)) { _fun0012_ip = 146; continue _fun0012 }
case 147:
                var2 = _closure1_slot19;
                var2 = var2.NATIVE_SCREENSHARE_PICKER;
                if(!(var2 !== var3)) { _fun0012_ip = 148; continue _fun0012 }
case 149:
                var2 = _closure1_slot19;
                var2 = var2.MLS_PAIRWISE_FINGERPRINTS;
                if(!(var2 !== var3)) { _fun0012_ip = 150; continue _fun0012 }
case 151:
                var2 = _closure1_slot19;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                if(!(var2 !== var3)) { _fun0012_ip = 152; continue _fun0012 }
case 49:
                var2 = _closure1_slot19;
                var2 = var2.VAAPI;
                if(!(var2 !== var3)) { _fun0012_ip = 153; continue _fun0012 }
case 48:
                var2 = _closure1_slot19;
                var2 = var2.GAMESCOPE_CAPTURE;
                if(!(var2 !== var3)) { _fun0012_ip = 154; continue _fun0012 }
case 155:
                var2 = _closure1_slot19;
                var2 = var2.DIAGNOSTICS;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 156:
                var2 = _closure1_slot19;
                var2 = var2.NATIVE_PING;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 157:
                var2 = _closure1_slot19;
                var2 = var2.AUTOMATIC_VAD;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 158:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_INPUT_DEVICE;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 159:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_OUTPUT_DEVICE;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 160:
                var2 = _closure1_slot19;
                var2 = var2.QOS;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 161:
                var2 = _closure1_slot19;
                var2 = var2.VOICE_PROCESSING;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 162:
                var2 = _closure1_slot19;
                var2 = var2.AUTO_ENABLE;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 163:
                var2 = _closure1_slot19;
                var2 = var2.VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 164:
                var2 = _closure1_slot19;
                var2 = var2.DESKTOP_CAPTURE;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 165:
                var2 = _closure1_slot19;
                var2 = var2.DESKTOP_CAPTURE_FORMAT;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 166:
                var2 = _closure1_slot19;
                var2 = var2.DESKTOP_CAPTURE_APPLICATIONS;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 167:
                var2 = _closure1_slot19;
                var2 = var2.VOICE_PANNING;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 168:
                var2 = _closure1_slot19;
                var2 = var2.AEC_DUMP;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 169:
                var2 = _closure1_slot19;
                var2 = var2.DISABLE_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 170:
                var2 = _closure1_slot19;
                var2 = var2.SAMPLE_PLAYBACK;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 171:
                var2 = _closure1_slot19;
                var2 = var2.NOISE_SUPPRESSION;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 172:
                var2 = _closure1_slot19;
                var2 = var2.AUTOMATIC_GAIN_CONTROL;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 173:
                var2 = _closure1_slot19;
                var2 = var2.SIDECHAIN_COMPRESSION;
                if(!(var2 !== var3)) { _fun0012_ip = 62; continue _fun0012 }
case 174:
                var2 = false;
                return var2;
case 62:
                var2 = true;
                return var2;
case 154:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.GAMESCOPE_CAPTURE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 153:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.VAAPI;
                var2 = var3.bind(var4)(var2);
                return var2;
case 152:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 150:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.MLS_PAIRWISE_FINGERPRINTS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 148:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.NATIVE_SCREENSHARE_PICKER;
                var2 = var3.bind(var4)(var2);
                return var2;
case 146:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.SCREEN_CAPTURE_KIT;
                var2 = var3.bind(var4)(var2);
                return var2;
case 144:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.GO_LIVE_HARDWARE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 142:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.IMAGE_QUALITY_MEASUREMENT;
                var2 = var3.bind(var4)(var2);
                return var2;
case 140:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.REMOTE_USER_MULTI_STREAM;
                var2 = var3.bind(var4)(var2);
                return var2;
case 138:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.FIRST_FRAME_CALLBACK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 136:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.FIXED_KEYFRAME_INTERVAL;
                var2 = var3.bind(var4)(var2);
                return var2;
case 134:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.MEDIAPIPE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 132:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.ELECTRON_VIDEO;
                var2 = var3.bind(var4)(var2);
                return var2;
case 130:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.RTC_REGION_RANKING;
                var2 = var3.bind(var4)(var2);
                return var2;
case 128:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 15;
                var2 = var2[var6];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.SIMULCAST;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0012_ip = 175; continue _fun0012 }
case 176:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var5 = var4.bind(var5)(var3);
                var4 = var5.supportsFeature;
                var3 = _closure1_slot22;
                var3 = var3.SIMULCAST_BUGFIX;
                var2 = var4.bind(var5)(var3);
case 175:
                return var2;
case 126:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.CONNECTION_REPLAY;
                var2 = var3.bind(var4)(var2);
                return var2;
case 124:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.AUDIO_DEBUG_STATE;
                var2 = var3.bind(var4)(var2);
                return var2;
case 122:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.WINDOW_PREVIEWS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 120:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.CLIPS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 118:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.SCREEN_PREVIEWS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 116:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.REMOTE_LOCUS_NETWORK_CONTROL;
                var2 = var3.bind(var4)(var2);
                return var2;
case 114:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.EXPERIMENTAL_ENCODERS;
                var2 = var3.bind(var4)(var2);
                return var2;
case 112:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 17;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var3 = null;
                var4 = var3 == var2;
                var2 = undefined;
                if(var4) { _fun0012_ip = 177; continue _fun0012 }
case 178:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var7)(var4);
                var4 = var4.os;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0012_ip = 177; continue _fun0012 }
case 179:
                var2 = var4.family;
case 177:
                var2 = var3 != var2;
                if(!var2) { _fun0012_ip = 180; continue _fun0012 }
case 181:
                var5 = /^win|linux|OS X/i;
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
case 110:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.SOUNDSHARE_LOOPBACK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 107:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 17;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var3 = null;
                var4 = var3 == var2;
                var2 = undefined;
                if(var4) { _fun0012_ip = 182; continue _fun0012 }
case 183:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var7)(var4);
                var4 = var4.os;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0012_ip = 182; continue _fun0012 }
case 184:
                var2 = var4.family;
case 182:
                var2 = var3 != var2;
                if(!var2) { _fun0012_ip = 185; continue _fun0012 }
case 186:
                var5 = /^win/i;
                var4 = var5.test;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.os;
                var3 = var3.family;
                var2 = var4.bind(var5)(var3);
case 185:
                return var2;
case 105:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.HYBRID_VIDEO;
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
                var2 = _closure1_slot22;
                var2 = var2.WUMPUS_VIDEO;
                var2 = var3.bind(var4)(var2);
                return var2;
case 101:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.LOOPBACK;
                var2 = var3.bind(var4)(var2);
                return var2;
case 99:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.ELEVATED_HOOK;
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
                var2 = _closure1_slot22;
                var2 = var2.SCREEN_SOUNDSHARE;
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
                var2 = _closure1_slot22;
                var2 = var2.SOUNDSHARE;
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
                var2 = _closure1_slot22;
                var2 = var2.DEBUG_LOGGING;
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
                var2 = _closure1_slot22;
                var2 = var2.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING;
                var2 = var3.bind(var4)(var2);
                return var2;
case 90:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.supportsFeature;
                var2 = _closure1_slot22;
                var2 = var2.VOICE_SUBSYSTEM_DEFERRED_SWITCH;
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
                var2 = _closure1_slot22;
                var2 = var2.VOICE_AUTOMATIC_SUBSYSTEM;
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
                var2 = _closure1_slot22;
                var2 = var2.VOICE_EXPERIMENTAL_SUBSYSTEM;
                var2 = var3.bind(var4)(var2);
                return var2;
case 86:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.supportsFeature;
                var1 = _closure1_slot22;
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var11 = arg3;
                var4 = this;
                var _closure3_slot0 = var4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 15;
                var1 = var1[var8];
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var2 = var5.supportsFeature;
                var1 = _closure1_slot22;
                var1 = var1.EXPERIMENT_CONFIG;
                var1 = var2.bind(var5)(var1);
                if(var1) { _fun0013_ip = 187; continue _fun0013 }
case 188:
                var11['experiments'] = var6;
case 187:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 18;
                var1 = var7[var1];
                var10 = var2.bind(var6)(var1);
                var5 = var10.create;
                var2 = arg1;
                var1 = arg2;
                var1 = var5.bind(var10)(var2, var1, var11);
                var _closure3_slot1 = var1;
                var12 = var1.on;
                var5 = _closure1_slot0;
                var2 = 13;
                var10 = var7[var2];
                var10 = var5.bind(var6)(var10);
                var10 = var10.BaseConnectionEvent;
                var11 = var10.Destroy;
                var10 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connections;
                        var3 = var4.delete;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.connectionsEmpty;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0014_ip = 26; continue _fun0014 }
case 189:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.setProcessPriority;
                        var1 = _closure1_slot23;
                        var1 = var1.NORMAL;
                        var1 = var2.bind(var3)(var1);
case 26:
                        var1 = undefined;
                        return var1;
                    }
                };
                var10 = var12.bind(var1)(var11, var10);
                var12 = var1.on;
                var10 = var7[var2];
                var10 = var5.bind(var6)(var10);
                var10 = var10.BaseConnectionEvent;
                var11 = var10.Connected;
                var10 = function() {
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
                var10 = var12.bind(var1)(var11, var10);
                var11 = var1.on;
                var10 = var7[var2];
                var10 = var5.bind(var6)(var10);
                var10 = var10.BaseConnectionEvent;
                var10 = var10.Silence;
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
                var9 = var11.bind(var1)(var10, var9);
                var10 = var4.connections;
                var9 = var10.add;
                var9 = var9.bind(var10)(var1);
                var8 = var7[var8];
                var9 = var5.bind(var6)(var8);
                var8 = var9.setProcessPriority;
                var3 = _closure1_slot23;
                var3 = var3.HIGH;
                var3 = var8.bind(var9)(var3);
                var3 = var4.emit;
                var2 = var7[var2];
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arg1;
                var4 = var3.context;
                var1 = _closure1_slot21;
                var1 = var1.DEFAULT;
                var1 = var4 === var1;
                if(!var1) { _fun0015_ip = 190; continue _fun0015 }
case 81:
                var4 = this;
                var4 = var4.videoInputDeviceId;
                var2 = _closure1_slot18;
                var1 = var4 !== var2;
case 190:
                if(var1) { _fun0015_ip = 191; continue _fun0015 }
case 80:
                var2 = var3.hasDesktopSource;
                var1 = var2.bind(var3)();
case 191:
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
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure3_slot1;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0016_ip = 29; continue _fun0016 }
case 11:
                    var5 = var3.context;
                    var4 = _closure3_slot1;
                    var2 = var5 !== var4;
case 29:
                    if(var2) { _fun0016_ip = 192; continue _fun0016 }
case 15:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 192:
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
        var2[8] = var6;
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
        var2[9] = var6;
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
        var2[10] = var6;
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
        var2[11] = var6;
        var6 = {};
        var9 = 'getNoiseCancellationStats';
        var6['key'] = var9;
        var9 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                    if(!(var3 == var6)) { _fun0017_ip = 193; continue _fun0017 }
case 194:
                    var3 = var5.bind(var1)(var3);
                    _fun0017_ip = 195; continue _fun0017;
case 193:
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
case 195:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var9;
        var2[12] = var6;
        var6 = {};
        var9 = 'setNoiseCancellationEnableStats';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                if(!(var2 != var4)) { _fun0018_ip = 188; continue _fun0018 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var9;
        var2[13] = var6;
        var6 = {};
        var9 = 'setAudioInputDevice';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
                var3 = _closure1_slot22;
                var3 = var3.SET_AUDIO_DEVICE_BY_ID;
                var10 = var4.bind(var10)(var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                if(var10) { _fun0019_ip = 196; continue _fun0019 }
case 18:
                var10 = 14;
                var10 = var3[var10];
                var11 = var4.bind(var1)(var10);
                var10 = var11.getAudioInputDevices;
                var11 = var10.bind(var11)();
                var10 = var11.then;
                var9 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                        if(!(var2 == var1)) { _fun0020_ip = 197; continue _fun0020 }
case 13:
                        var3 = 0;
                        var1 = var4[var3];
case 197:
                        if(!(var2 != var1)) { _fun0020_ip = 198; continue _fun0020 }
case 199:
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
case 198:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var11)(var9);
                _fun0019_ip = 200; continue _fun0019;
case 196:
                var3 = var3[var8];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setInputDevice;
                var3 = var3.bind(var4)(var7);
case 200:
                var4 = var6.emit;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 13;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.MediaEngineEvent;
                var15 = var3.SelectedDeviceChange;
                var2 = _closure1_slot17;
                var14 = var2.AUDIO_INPUT;
                var16 = var6;
                var13 = var5;
                var12 = var7;
                var2 = var16[var4](var15, var14, var13, var12, var11);
                return var1;
            }
        };
        var6['value'] = var9;
        var2[14] = var6;
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
        var2[15] = var6;
        var6 = {};
        var9 = 'setAudioOutputDevice';
        var6['key'] = var9;
        var9 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
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
                var3 = _closure1_slot22;
                var3 = var3.SET_AUDIO_DEVICE_BY_ID;
                var10 = var4.bind(var10)(var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                if(var10) { _fun0021_ip = 196; continue _fun0021 }
case 18:
                var10 = 14;
                var10 = var3[var10];
                var11 = var4.bind(var1)(var10);
                var10 = var11.getAudioOutputDevices;
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
                        if(!(var2 == var1)) { _fun0022_ip = 197; continue _fun0022 }
case 13:
                        var3 = 0;
                        var1 = var4[var3];
case 197:
                        if(!(var2 != var1)) { _fun0022_ip = 198; continue _fun0022 }
case 199:
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
case 198:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var11)(var9);
                _fun0021_ip = 200; continue _fun0021;
case 196:
                var3 = var3[var8];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setOutputDevice;
                var3 = var3.bind(var4)(var7);
case 200:
                var4 = var6.emit;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 13;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.MediaEngineEvent;
                var15 = var3.SelectedDeviceChange;
                var2 = _closure1_slot17;
                var14 = var2.AUDIO_OUTPUT;
                var16 = var6;
                var13 = var5;
                var12 = var7;
                var2 = var16[var4](var15, var14, var13, var12, var11);
                return var1;
            }
        };
        var6['value'] = var9;
        var2[16] = var6;
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
        var2[17] = var6;
        var6 = {};
        var9 = 'setVideoInputDevice';
        var6['key'] = var9;
        var9 = _closure1_slot4;
        var8 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 201; continue _fun0023 }
case 12:
                    var _closure4_slot0 = var4;
                    var2 = arg1;
                    var _closure4_slot1 = var2;
                    var2 = var4.getVideoInputDevices;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=40);
case 202:
                    return var2;
case 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0023_ip = 203; continue _fun0023 }
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
                    if(!(var11 == var10)) { _fun0023_ip = 204; continue _fun0023 }
case 205:
                    var5 = _closure1_slot18;
                    _fun0023_ip = 26; continue _fun0023;
case 204:
                    var5 = var10.id;
case 26:
                    var6 = var4.videoInputDeviceId;
                    if(!(var5 !== var6)) { _fun0023_ip = 206; continue _fun0023 }
case 207:
                    var4['videoInputDeviceId'] = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var9 = 15;
                    var6 = var6[var9];
                    var8 = undefined;
                    var12 = var7.bind(var8)(var6);
                    var7 = var12.supportsFeature;
                    var6 = _closure1_slot22;
                    var6 = var6.SET_VIDEO_DEVICE_BY_ID;
                    var6 = var7.bind(var12)(var6);
                    if(var6) { _fun0023_ip = 208; continue _fun0023 }
case 209:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getVoiceEngine;
                    var12 = var6.bind(var7)();
                    var7 = var12.setVideoInputDevice;
                    var13 = var11 != var10;
                    var6 = -1;
                    if(!var13) { _fun0023_ip = 21; continue _fun0023 }
case 210:
                    var6 = var10.index;
case 21:
                    var6 = var7.bind(var12)(var6);
                    _fun0023_ip = 211; continue _fun0023;
case 208:
                    if(!(var11 == var10)) { _fun0023_ip = 212; continue _fun0023 }
case 213:
                    var7 = _closure1_slot18;
                    _fun0023_ip = 111; continue _fun0023;
case 212:
                    var6 = var10.originalId;
                    if(!(var11 != var6)) { _fun0023_ip = 214; continue _fun0023 }
case 215:
                    var11 = var10.originalId;
                    var6 = '';
                    if(!(var6 === var11)) { _fun0023_ip = 216; continue _fun0023 }
case 214:
                    var6 = var10.id;
                    _fun0023_ip = 217; continue _fun0023;
case 216:
                    var6 = var10.originalId;
case 217:
                    var7 = var6;
case 111:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.getVoiceEngine;
                    var6 = var5.bind(var6)();
                    var5 = var6.setVideoInputDevice;
                    var5 = var5.bind(var6)(var7);
case 211:
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
case 206:
                    var3 = undefined;
                    return var3;
case 203:
                    return var2;
case 201:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot1 = var8;
        var8 = function setVideoInputDevice() {
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
        var2[18] = var6;
        var6 = {};
        var8 = 'getSupportedVideoCodecs';
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
            var3 = var4.getSupportedVideoCodecs;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var8;
        var2[19] = var6;
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
        var2[20] = var6;
        var6 = {};
        var8 = 'setGoLiveSource';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var2 = null;
                if(!(var2 == var5)) { _fun0024_ip = 80; continue _fun0024 }
case 218:
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
                _fun0024_ip = 219; continue _fun0024;
case 80:
                var2 = var3.eachConnection;
                var1 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure3_slot2;
                        var2 = _closure1_slot21;
                        var2 = var2.STREAM;
                        var2 = var4 === var2;
                        if(!var2) { _fun0025_ip = 190; continue _fun0025 }
case 220:
                        var5 = var3.streamUserId;
                        var4 = var3.userId;
                        var2 = var5 !== var4;
case 190:
                        if(var2) { _fun0025_ip = 41; continue _fun0025 }
case 80:
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
case 219:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var8;
        var2[21] = var6;
        var6 = {};
        var8 = 'setClipsSource';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var4);
                var4 = var6.getVoiceEngine;
                var4 = var4.bind(var6)();
                var6 = var4.setClipsSource;
                var7 = null;
                if(!(var7 != var6)) { _fun0026_ip = 221; continue _fun0026 }
case 222:
                var6 = var4.setOnClipsRecordingEvent;
                if(!(var7 != var6)) { _fun0026_ip = 221; continue _fun0026 }
case 195:
                var6 = var4.applyClipsSettings;
                if(!(var7 != var6)) { _fun0026_ip = 221; continue _fun0026 }
case 223:
                if(!(var7 == var5)) { _fun0026_ip = 224; continue _fun0026 }
case 225:
                var8 = var4.setClipsSource;
                var6 = {'id': '', 'soundshareId': 0};
                var6 = var8.bind(var4)(var6);
                _fun0026_ip = 221; continue _fun0026;
case 224:
                var6 = var5.quality;
                var11 = var6.frameRate;
                var8 = var6.resolution;
                var6 = 480;
                if(!(!(var8 <= var6))) { _fun0026_ip = 226; continue _fun0026 }
case 227:
                var6 = 9;
                var9 = var8 / var6;
                var6 = 16;
                var10 = var9 * var6;
                _fun0026_ip = 228; continue _fun0026;
case 226:
                var6 = 3;
                var9 = var8 / var6;
                var6 = 4;
                var10 = var9 * var6;
case 228:
                var5 = var5.desktopDescription;
                var9 = var5.id;
                var _closure3_slot2 = var9;
                var6 = var5.soundshareId;
                var _closure3_slot3 = var6;
                var12 = var5.useLoopback;
                var17 = var5.useVideoHook;
                var16 = var5.useGraphicsCapture;
                var15 = var5.useQuartzCapturer;
                var14 = var5.allowScreenCaptureKit;
                var13 = var5.hdrCaptureMode;
                var5 = var4.setOnClipsRecordingEvent;
                var3 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var5 = arg1;
                        var1 = _closure3_slot0;
                        var7 = var1.logger;
                        var6 = var7.info;
                        var3 = _closure1_slot15;
                        var20 = var3[var5];
                        var18 = _closure3_slot2;
                        var16 = _closure3_slot3;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var11 = var4.concat;
                        var21 = 'Clips recording event: ';
                        var19 = ' received for stream ';
                        var17 = ' and sound ';
                        var15 = '.';
                        var4 = var21[var11](var20, var19, var18, var17, var16, var15, var14);
                        var4 = var6.bind(var7)(var4);
                        var3 = var3.GoLiveEnded;
                        if(!(var5 !== var3)) { _fun0027_ip = 36; continue _fun0027 }
case 229:
                        var3 = _closure1_slot15;
                        var3 = var3.Error;
                        if(!(var5 !== var3)) { _fun0027_ip = 230; continue _fun0027 }
case 231:
                        var3 = _closure1_slot15;
                        var3 = var3.Ended;
                        var3 = var5 !== var3;
                        if(!var3) { _fun0027_ip = 232; continue _fun0027 }
case 233:
                        var4 = _closure1_slot15;
                        var4 = var4.StoppedByGoLive;
                        var3 = var5 !== var4;
case 232:
                        if(var3) { _fun0027_ip = 234; continue _fun0027 }
case 235:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 13;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var3 = var3.MediaEngineEvent;
                        var5 = var3.ClipsRecordingEnded;
                        var4 = _closure3_slot2;
                        var3 = _closure3_slot3;
                        var3 = var6.bind(var7)(var5, var4, var3);
                        _fun0027_ip = 234; continue _fun0027;
case 230:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 13;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var3 = var3.MediaEngineEvent;
                        var5 = var3.ClipsInitFailure;
                        var3 = _closure3_slot1;
                        var4 = var3.applicationName;
                        var3 = 'Failed to set clips source in media engine';
                        var3 = var6.bind(var7)(var5, var3, var4);
                        _fun0027_ip = 234; continue _fun0027;
case 36:
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
case 234:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var4)(var3);
                var3 = var4.applyClipsSettings;
                if(!(var7 != var3)) { _fun0026_ip = 236; continue _fun0026 }
case 237:
                var5 = var4.applyClipsSettings;
                var3 = {};
                var3['useVideoHook'] = var17;
                var3['useGraphicsCapture'] = var16;
                var3['useQuartzCapturer'] = var15;
                var3['allowScreenCaptureKit'] = var14;
                var3['hdrCaptureMode'] = var13;
                var3['soundshareLoopback'] = var12;
                var3['frameRate'] = var11;
                var3['width'] = var10;
                var3['height'] = var8;
                var3 = var5.bind(var4)(var3);
case 236:
                if(!(var7 == var9)) { _fun0026_ip = 238; continue _fun0026 }
case 239:
                var5 = ['', ''];
                _fun0026_ip = 240; continue _fun0026;
case 238:
                var8 = var9.split;
                var3 = ':';
                var5 = var8.bind(var9)(var3);
case 240:
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
                if(!var7) { _fun0026_ip = 241; continue _fun0026 }
case 242:
                var5 = var6;
case 241:
                var2['soundshareId'] = var5;
                var2 = var3.bind(var4)(var2);
case 221:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[22] = var6;
        var6 = {};
        var8 = 'setClipsQualitySettings';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
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
                if(!var1) { _fun0028_ip = 4; continue _fun0028 }
case 243:
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
        var2[23] = var6;
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
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure3_slot2;
                    var2 = _closure1_slot21;
                    var2 = var2.STREAM;
                    var2 = var3 === var2;
                    if(!var2) { _fun0029_ip = 190; continue _fun0029 }
case 220:
                    var5 = var4.streamUserId;
                    var3 = var4.userId;
                    var2 = var5 !== var3;
case 190:
                    if(var2) { _fun0029_ip = 244; continue _fun0029 }
case 80:
                    var3 = var4.setSoundshareSource;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 244:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1, var4);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var2[24] = var6;
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
        var2[25] = var6;
        var6 = {};
        var8 = 'getScreenPreviews';
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
            var4 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
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
                    if(!(var4 == var7)) { _fun0030_ip = 187; continue _fun0030 }
case 194:
                    var4 = new Array(0);
                    var4 = var6.bind(var1)(var4);
                    _fun0030_ip = 245; continue _fun0030;
case 187:
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
                            var1[var2] = var3;
                            return var1;
                        };
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
case 245:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[26] = var6;
        var6 = {};
        var8 = 'setClipBufferLength';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
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
                if(!(var2 != var4)) { _fun0031_ip = 188; continue _fun0031 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[27] = var6;
        var6 = {};
        var8 = 'saveClip';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                var4 = var2.setClipBufferLength;
                var3 = null;
                if(!(var3 != var4)) { _fun0032_ip = 246; continue _fun0032 }
case 187:
                var2 = var2.saveClip;
                if(!(var3 != var2)) { _fun0032_ip = 246; continue _fun0032 }
case 247:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var6 = _closure3_slot2;
                    var5 = var6.saveClip;
                    var10 = _closure3_slot0;
                    var9 = _closure3_slot1;
                    var8 = function(arg1, arg2, arg3) {
                        var1 = global;
                        var3 = var1.JSON;
                        var2 = var3.parse;
                        var1 = arg3;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure4_slot0;
                        var2 = {};
                        var4 = arg1;
                        var2['duration'] = var4;
                        var2['clipStats'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var7 = function(arg1) {
                        var1 = global;
                        var3 = var1.JSON;
                        var2 = var3.parse;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var2 = _closure4_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var1 = undefined;
                    return var1;
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0032_ip = 248; continue _fun0032;
case 246:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 248:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[28] = var6;
        var6 = {};
        var8 = 'saveClipForUser';
        var6['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
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
                var _closure3_slot3 = var2;
                var3 = var2.saveClipForUser;
                var2 = null;
                if(!(var2 != var3)) { _fun0033_ip = 249; continue _fun0033 }
case 4:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = function(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var7 = _closure3_slot3;
                    var6 = var7.saveClipForUser;
                    var12 = _closure3_slot0;
                    var11 = _closure3_slot1;
                    var10 = _closure3_slot2;
                    var9 = function(arg1, arg2, arg3) {
                        var1 = global;
                        var3 = var1.JSON;
                        var2 = var3.parse;
                        var1 = arg3;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure4_slot0;
                        var2 = {};
                        var4 = arg1;
                        var2['duration'] = var4;
                        var2['clipStats'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = function(arg1) {
                        var1 = global;
                        var3 = var1.JSON;
                        var2 = var3.parse;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var2 = _closure4_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    var1 = undefined;
                    return var1;
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0033_ip = 250; continue _fun0033;
case 249:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 250:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[29] = var6;
        var6 = {};
        var8 = 'updateClipMetadata';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                if(!(var2 != var3)) { _fun0034_ip = 10; continue _fun0034 }
case 187:
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
                _fun0034_ip = 96; continue _fun0034;
case 10:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 96:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[30] = var6;
        var6 = {};
        var8 = 'exportClip';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
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
                if(!(var2 != var3)) { _fun0035_ip = 10; continue _fun0035 }
case 187:
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
                _fun0035_ip = 96; continue _fun0035;
case 10:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
case 96:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[31] = var6;
        var6 = {};
        var8 = 'getWindowPreviews';
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
            var4 = function(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
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
                    if(!(var4 == var7)) { _fun0036_ip = 187; continue _fun0036 }
case 194:
                    var4 = new Array(0);
                    var4 = var6.bind(var1)(var4);
                    _fun0036_ip = 245; continue _fun0036;
case 187:
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
case 245:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[32] = var6;
        var6 = {};
        var8 = 'setAudioSubsystem';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
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
                if(!(var3 == var6)) { _fun0037_ip = 251; continue _fun0037 }
case 243:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var6 = var6.bind(var1)(var3);
                var3 = var6.getVoiceEngine;
                var7 = var3.bind(var6)();
                var6 = var7.setUseLegacyAudioDevice;
                var3 = _closure1_slot14;
                var3 = var3.LEGACY;
                var3 = var4 === var3;
                var3 = var6.bind(var7)(var3);
                _fun0037_ip = 252; continue _fun0037;
case 251:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var2 = var3.setAudioSubsystem;
                var2 = var2.bind(var3)(var4);
case 252:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[33] = var6;
        var6 = {};
        var8 = 'setOffloadAdmControls';
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
                var4 = var2.bind(var3)();
                var3 = var4.setOffloadAdmControls;
                var2 = null;
                if(!(var2 != var3)) { _fun0038_ip = 188; continue _fun0038 }
case 39:
                var3 = var4.setOffloadAdmControls;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[34] = var6;
        var6 = {};
        var8 = 'queueAudioSubsystem';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
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
                if(!(var2 == var6)) { _fun0039_ip = 222; continue _fun0039 }
case 253:
                var2 = var5.setAudioSubsystem;
                var2 = var2.bind(var5)(var4);
                _fun0039_ip = 247; continue _fun0039;
case 222:
                var2 = var3.queueAudioSubsystem;
                var2 = var2.bind(var3)(var4);
case 247:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[35] = var6;
        var6 = {};
        var8 = 'getAudioSubsystem';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.audioSubsystem;
            return var1;
        };
        var6['value'] = var8;
        var2[36] = var6;
        var6 = {};
        var8 = 'getAudioLayer';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.audioLayer;
            return var1;
        };
        var6['value'] = var8;
        var2[37] = var6;
        var6 = {};
        var8 = 'getDebugLogging';
        var6['key'] = var8;
        var8 = function value() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var4 = this;
                var3 = var4.supports;
                var1 = _closure1_slot19;
                var1 = var1.DEBUG_LOGGING;
                var1 = var3.bind(var4)(var1);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0040_ip = 254; continue _fun0040 }
case 255:
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
case 254:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[38] = var6;
        var6 = {};
        var8 = 'setDebugLogging';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var4 = this;
                var3 = var4.supports;
                var2 = _closure1_slot19;
                var2 = var2.DEBUG_LOGGING;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0041_ip = 256; continue _fun0041 }
case 220:
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
case 256:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var8;
        var2[39] = var6;
        var6 = {};
        var8 = 'setLoopback';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
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
                if(!(var11 != var3)) { _fun0042_ip = 257; continue _fun0042 }
case 258:
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
                if(var13) { _fun0042_ip = 259; continue _fun0042 }
case 260:
                var9 = var12.enabled;
case 259:
                var3['automaticGainControl'] = var9;
                var9 = var10.automaticGainControlConfig;
                var3['automaticGainControlConfig'] = var9;
                var9 = var10.noiseCancellation;
                var3['noiseCancellation'] = var9;
                var9 = var10.noiseCancellationDuringProcessing;
                var3['noiseCancellationDuringProcessing'] = var9;
                var9 = var10.voiceFilters;
                var3['voiceFilters'] = var9;
                var9 = var10.loopbackUseAudioMode;
                var3['loopbackUseAudioMode'] = var9;
                var3 = var4.bind(var8)(var2, var3);
case 257:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var3 = var3.bind(var4)();
                var3 = var3.setEmitVADLevel2;
                if(!(var11 == var3)) { _fun0042_ip = 261; continue _fun0042 }
case 262:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var9 = var3.bind(var4)();
                var8 = var9.setEmitVADLevel;
                var4 = var2;
                if(var2) { _fun0042_ip = 263; continue _fun0042 }
case 264:
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
case 263:
                var3 = {};
                var12 = var10.echoCancellation;
                var3['echoCancellation'] = var12;
                var12 = var10.noiseSuppression;
                var3['noiseSuppression'] = var12;
                var12 = var10.automaticGainControlConfig;
                var13 = var11 == var12;
                var11 = undefined;
                if(var13) { _fun0042_ip = 265; continue _fun0042 }
case 266:
                var11 = var12.enabled;
case 265:
                var3['automaticGainControl'] = var11;
                var11 = var10.noiseCancellation;
                var3['noiseCancellation'] = var11;
                var10 = var10.noiseCancellationDuringProcessing;
                var3['noiseCancellationDuringProcessing'] = var10;
                var3 = var8.bind(var9)(var4, var2, var3);
                _fun0042_ip = 267; continue _fun0042;
case 261:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setEmitVADLevel2;
                if(var2) { _fun0042_ip = 268; continue _fun0042 }
case 269:
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
case 268:
                var2 = var3.bind(var4)(var2);
case 267:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[40] = var6;
        var6 = {};
        var8 = 'setMaybePreprocessMute';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var5 = var2.bind(var3)();
                var4 = var5.setMaybePreprocessMute;
                var2 = null;
                if(!(var2 != var4)) { _fun0043_ip = 188; continue _fun0043 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[41] = var6;
        var6 = {};
        var8 = 'getLoopback';
        var6['key'] = var8;
        var8 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var8;
        var2[42] = var6;
        var6 = {};
        var8 = 'setH264Enabled';
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
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = arg1;
            var2['h264Enabled'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var8;
        var2[43] = var6;
        var6 = {};
        var8 = 'setAv1Enabled';
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
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = arg1;
            var2['av1Enabled'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var8;
        var2[44] = var6;
        var6 = {};
        var8 = 'setH265Enabled';
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
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = arg1;
            var2['h265Enabled'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var8;
        var2[45] = var6;
        var6 = {};
        var8 = 'getCodecSurvey';
        var6['key'] = var8;
        var8 = function value() {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.codecSurvey;
                var3 = null;
                if(!(var3 == var4)) { _fun0044_ip = 194; continue _fun0044 }
case 270:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
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
                        if(!(var3 == var5)) { _fun0045_ip = 271; continue _fun0045 }
case 194:
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
                        _fun0045_ip = 272; continue _fun0045;
case 271:
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
case 272:
                        return var1;
                    }
                };
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _fun0044_ip = 18; continue _fun0044;
case 194:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.resolve;
                var2 = var2.codecSurvey;
                var1 = var3.bind(var4)(var2);
case 18:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[46] = var6;
        var6 = {};
        var8 = 'writeAudioDebugState';
        var6['key'] = var8;
        var8 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
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
                    if(!(var3 == var2)) { _fun0046_ip = 32; continue _fun0046 }
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
                    _fun0046_ip = 20; continue _fun0046;
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
        var2[47] = var6;
        var6 = {};
        var8 = 'startAecDump';
        var6['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var2[48] = var6;
        var6 = {};
        var8 = 'stopAecDump';
        var6['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var2[49] = var6;
        var6 = {};
        var8 = 'setAecDump';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
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
                if(!(var2 != var4)) { _fun0047_ip = 188; continue _fun0047 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[50] = var6;
        var6 = {};
        var8 = 'startRecordingRawSamples';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
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
                if(!(var2 != var4)) { _fun0048_ip = 193; continue _fun0048 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 193:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[51] = var6;
        var6 = {};
        var8 = 'stopRecordingRawSamples';
        var6['key'] = var8;
        var8 = function value() {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
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
                if(!(var2 != var3)) { _fun0049_ip = 258; continue _fun0049 }
case 24:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
case 258:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[52] = var6;
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
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
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
                    if(!(var3 == var4)) { _fun0050_ip = 271; continue _fun0050 }
case 194:
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
                    _fun0050_ip = 273; continue _fun0050;
case 271:
                    var3 = _closure3_slot0;
                    var2 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var1)(var3, var2);
case 273:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[53] = var6;
        var6 = {};
        var8 = 'createReplayConnection';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
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
                if(var3) { _fun0051_ip = 274; continue _fun0051 }
case 222:
                var11 = var2.on;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 13;
                var10 = var8[var3];
                var10 = var6.bind(var7)(var10);
                var10 = var10.BaseConnectionEvent;
                var10 = var10.Destroy;
                var9 = function(arg1) {
                    _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connections;
                        var3 = var4.delete;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.connectionsEmpty;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0052_ip = 26; continue _fun0052 }
case 189:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.setProcessPriority;
                        var1 = _closure1_slot23;
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
                var4 = _closure1_slot23;
                var4 = var4.HIGH;
                var4 = var9.bind(var10)(var4);
                var4 = var5.emit;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.MediaEngineEvent;
                var3 = var3.Connection;
                var3 = var4.bind(var5)(var3, var2);
                var1 = var2;
case 274:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[54] = var6;
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
        var2[55] = var6;
        var6 = {};
        var8 = 'setMaxSyncDelayOverride';
        var6['key'] = var8;
        var8 = function setMaxSyncDelayOverride(arg1) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
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
                if(!(var2 != var3)) { _fun0053_ip = 28; continue _fun0053 }
case 24:
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
case 28:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[56] = var6;
        var6 = {};
        var8 = 'applyMediaFilterSettings';
        var6['key'] = var8;
        var8 = function applyMediaFilterSettings(arg1) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
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
                if(!(var5 == var6)) { _fun0054_ip = 229; continue _fun0054 }
case 244:
                if(!(var5 != var1)) { _fun0054_ip = 247; continue _fun0054 }
case 5:
                var1 = var1.bind(var3)(var4);
case 247:
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.resolve;
                var1 = var1.bind(var3)();
                _fun0054_ip = 275; continue _fun0054;
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
case 275:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[57] = var6;
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
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
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
                    if(!(var3 == var4)) { _fun0055_ip = 20; continue _fun0055 }
case 193:
                    var3 = global;
                    var7 = var3.Error;
                    var3 = var7.prototype;
                    var6 = Object.create(var3, {constructor: {value: var7}});
                    var9 = 'startLocalAudioRecording is not supported.';
                    var10 = var6;
                    var3 = new var10[var7](var9, var8);
                    var3 = var3 instanceof Object ? var3 : var6;
                    var3 = var5.bind(var1)(var3);
                    _fun0055_ip = 276; continue _fun0055;
case 20:
                    var3 = _closure3_slot0;
                    var2 = function(arg1) {
                        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                            var2 = arg1;
                            if(var2) { _fun0056_ip = 194; continue _fun0056 }
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
                            _fun0056_ip = 222; continue _fun0056;
case 194:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 222:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var1)(var3, var2);
case 276:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[58] = var6;
        var6 = {};
        var8 = 'stopLocalAudioRecording';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
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
                if(!(var6 != var8)) { _fun0057_ip = 277; continue _fun0057 }
case 258:
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
case 277:
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
                if(!var3) { _fun0057_ip = 278; continue _fun0057 }
case 233:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var7 = var7.bind(var1)(var5);
                var5 = var7.getVoiceEngine;
                var5 = var5.bind(var7)();
                var5 = var5.setEmitVADLevel2;
                var3 = var6 != var5;
case 278:
                if(!var3) { _fun0057_ip = 279; continue _fun0057 }
case 280:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setEmitVADLevel2;
                var2 = true;
                var2 = var3.bind(var4)(var2);
case 279:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[59] = var6;
        var6 = {};
        var8 = 'setHasFullbandPerformance';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
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
                if(!(var2 != var4)) { _fun0058_ip = 188; continue _fun0058 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[60] = var6;
        var6 = {};
        var8 = 'getSupportedSecureFramesProtocolVersion';
        var6['key'] = var8;
        var8 = function value() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
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
                if(!var3) { _fun0059_ip = 28; continue _fun0059 }
case 281:
                var1 = var2;
case 28:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[61] = var6;
        var6 = {};
        var8 = 'getSupportedBandwidthEstimationExperiments';
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
                var5 = var2.bind(var3)();
                var4 = var5.getSupportedBandwidthEstimationExperiments;
                var2 = null;
                if(!(var2 != var4)) { _fun0060_ip = 188; continue _fun0060 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[62] = var6;
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
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
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
                    if(!(var3 == var4)) { _fun0061_ip = 271; continue _fun0061 }
case 194:
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
                    _fun0061_ip = 282; continue _fun0061;
case 271:
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
case 282:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var2[63] = var6;
        var6 = {};
        var8 = 'setSidechainCompression';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
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
                if(!(var2 != var4)) { _fun0062_ip = 188; continue _fun0062 }
case 39:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 188:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[64] = var6;
        var6 = {};
        var8 = 'setSidechainCompressionStrength';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var2 = 100;
                var1 = arg1;
                var6 = var2 - var1;
                var5 = _closure1_slot27;
                var4 = _closure1_slot13;
                var3 = _closure1_slot11;
                var1 = undefined;
                var7 = var5.bind(var1)(var6, var4, var3);
                var4 = _closure1_slot12;
                var3 = _closure1_slot10;
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
                if(!(var2 != var4)) { _fun0063_ip = 272; continue _fun0063 }
case 32:
                var3 = var4.call;
                var2 = {};
                var2['threshold'] = var7;
                var2['ratio'] = var6;
                var2 = var3.bind(var4)(var5, var2);
case 272:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[65] = var6;
        var6 = {};
        var8 = 'setNativeDesktopVideoSourcePickerActive';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
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
                if(!(var2 != var4)) { _fun0064_ip = 193; continue _fun0064 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 193:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[66] = var6;
        var6 = {};
        var8 = 'presentNativeScreenSharePicker';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
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
                if(!(var2 != var4)) { _fun0065_ip = 247; continue _fun0065 }
case 283:
                var3 = var4.call;
                var7 = var2 != var6;
                var2 = '';
                if(!var7) { _fun0065_ip = 205; continue _fun0065 }
case 244:
                var2 = var6;
case 205:
                var2 = var3.bind(var4)(var5, var2);
case 247:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[67] = var6;
        var6 = {};
        var8 = 'releaseNativeDesktopVideoSourcePickerStream';
        var6['key'] = var8;
        var8 = function value() {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
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
                if(!(var2 != var3)) { _fun0066_ip = 258; continue _fun0066 }
case 24:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
case 258:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[68] = var6;
        var6 = {};
        var8 = 'getSystemMicrophoneMode';
        var6['key'] = var8;
        var8 = function* () {
            var1 = function* anon_0_() {
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0067_ip = 229; continue _fun0067 }
case 284:
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
                    if(var4) { _fun0067_ip = 187; continue _fun0067 }
case 28:
                    var4 = var5.call;
                    var2 = var4.bind(var5)(var6);
case 187:
                    SaveGenerator(address=71);
case 285:
                    return var2;
case 205:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0067_ip = 286; continue _fun0067 }
case 247:
                    var4 = var3 != var2;
                    var3 = '';
                    if(!var4) { _fun0067_ip = 92; continue _fun0067 }
case 198:
                    var3 = var2;
case 92:
                    return var3;
case 286:
                    return var2;
case 229:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot0 = var8;
        var8 = function getSystemMicrophoneMode() {
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
        var2[69] = var6;
        var6 = {};
        var8 = 'showSystemCaptureConfigurationUI';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
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
                if(!(var2 != var4)) { _fun0068_ip = 193; continue _fun0068 }
case 24:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
case 193:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[70] = var6;
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
        var2[71] = var6;
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
                _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                    var2 = _closure3_slot1;
                    if(var2) { _fun0069_ip = 33; continue _fun0069 }
case 287:
                    var2 = _closure3_slot0;
                    var3 = var2.consecutiveWatchdogFailures;
                    var3 = var3 + 1;
                    var2['consecutiveWatchdogFailures'] = var3;
                    var2 = 1;
                    if(!(var3 > var2)) { _fun0069_ip = 33; continue _fun0069 }
case 255:
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
                    _fun0069_ip = 20; continue _fun0069;
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
        var2[72] = var6;
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
        var2[73] = var6;
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