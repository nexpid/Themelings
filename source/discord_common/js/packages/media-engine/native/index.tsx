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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function toVolumePercent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 16; continue _fun0002 }
 9:
            var2 = _closure1_slot16;
 16:
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
 0:
                var6 = this;
                var1 = _closure1_slot5;
                var5 = _closure2_slot1;
                var3 = undefined;
                var1 = var1.bind(var3)(var6, var5);
                var1 = _closure1_slot8;
                var11 = var1.bind(var3)(var5);
                var5 = _closure1_slot7;
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 64; continue _fun0003 }
 51:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var3);
                _fun0003_ip = 102; continue _fun0003;
 64:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var3)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 102:
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
 0:
                        var13 = arguments[0];
                        var14 = arguments[1];
                        var10 = arguments[2];
                        var1 = undefined;
                        if(!(var13 === var1)) { _fun0004_ip = 19; continue _fun0004 }
 15:
                        var13 = new Array(0);
 19:
                        if(!(var14 === var1)) { _fun0004_ip = 27; continue _fun0004 }
 23:
                        var14 = new Array(0);
 27:
                        if(!(var10 === var1)) { _fun0004_ip = 35; continue _fun0004 }
 31:
                        var10 = new Array(0);
 35:
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
 0:
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
                        if(!var6) { _fun0005_ip = 143; continue _fun0005 }
 81:
                        var7 = _closure3_slot0;
                        var9 = var7.lastVoiceActivity;
                        var7 = -1;
                        var7 = var7 === var9;
                        if(var7) { _fun0005_ip = 140; continue _fun0005 }
 104:
                        var9 = var8.Date;
                        var8 = var9.now;
                        var9 = var8.bind(var9)();
                        var8 = _closure3_slot0;
                        var8 = var8.lastVoiceActivity;
                        var9 = var9 - var8;
                        var8 = 20;
                        var7 = var9 > var8;
 140:
                        var6 = var7;
 143:
                        if(!var6) { _fun0005_ip = 204; continue _fun0005 }
 146:
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
 204:
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
 0:
                        var5 = arg1;
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 13;
                        var4 = var1[var7];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.MediaEngineEvent;
                        var4 = var4.VoiceActivity;
                        if(!(var4 !== var5)) { _fun0006_ip = 187; continue _fun0006 }
 49:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.MediaEngineEvent;
                        var4 = var4.DeviceChange;
                        if(!(var4 === var5)) { _fun0006_ip = 317; continue _fun0006 }
 85:
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
 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var5 = var4().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var7 = undefined;
                                if(var3) { _fun0007_ip = 27; continue _fun0007 }
 24:
                                var7 = var5;
 27:
                                var6 = undefined;
                                if(var3) { _fun0007_ip = 57; continue _fun0007 }
 32:
                                var8 = var4().value;
                                var5 = var2;
                                var5 = var5 === var1;
                                var6 = undefined;
                                var3 = var5;
                                if(var5) { _fun0007_ip = 57; continue _fun0007 }
 51:
                                var6 = var8;
                                var3 = var5;
 57:
                                var5 = undefined;
                                if(var3) { _fun0007_ip = 87; continue _fun0007 }
 62:
                                var8 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var5 = undefined;
                                var3 = var4;
                                if(var4) { _fun0007_ip = 87; continue _fun0007 }
 81:
                                var5 = var8;
                                var3 = var4;
 87:
                                if(var3) { _fun0007_ip = 93; continue _fun0007 }
 90:
                                var2.return();
 93:
                                var4 = _closure4_slot0;
                                var3 = _closure3_slot0;
                                var3 = var3.deviceChangeGeneration;
                                if(!(var4 === var3)) { _fun0007_ip = 178; continue _fun0007 }
 117:
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
 178:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        _fun0006_ip = 317; continue _fun0006;
 187:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 15;
                        var3 = var3[var4];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.getVoiceEngine;
                        var3 = var3.bind(var5)();
                        var5 = var3.setEmitVADLevel2;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0006_ip = 277; continue _fun0006 }
 229:
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
                        _fun0006_ip = 317; continue _fun0006;
 277:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getVoiceEngine;
                        var4 = var2.bind(var3)();
                        var3 = var4.setEmitVADLevel2;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
 317:
                        return var1;
                    }
                };
                var1['handleNewListener'] = var9;
                var9 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 13;
                        var3 = var1[var8];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.MediaEngineEvent;
                        var4 = var3.VoiceActivity;
                        var3 = arg1;
                        if(!(var3 === var4)) { _fun0008_ip = 263; continue _fun0008 }
 47:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 15;
                        var4 = var4[var3];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.getVoiceEngine;
                        var4 = var4.bind(var5)();
                        var5 = var4.setEmitVADLevel2;
                        var4 = null;
                        if(!(var4 == var5)) { _fun0008_ip = 180; continue _fun0008 }
 89:
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
                        _fun0008_ip = 263; continue _fun0008;
 180:
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
 263:
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
 0:
                        var6 = arg1;
                        var1 = -100;
                        if(!(var1 !== var6)) { _fun0009_ip = 82; continue _fun0009 }
 13:
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
 82:
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
                var10 = 15;
                var5 = var5[var10];
                var7 = var7.bind(var3)(var5);
                var5 = var7.getVoiceEngine;
                var7 = var5.bind(var7)();
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
                if(!(var6 != var5)) { _fun0003_ip = 553; continue _fun0003 }
 536:
                var9 = var7.setVideoInputInitializationCallback;
                var5 = var1.handleVideoInputInitialization;
                var5 = var9.bind(var7)(var5);
 553:
                var5 = var7.setAudioInputInitializationCallback;
                if(!(var6 != var5)) { _fun0003_ip = 580; continue _fun0003 }
 563:
                var9 = var7.setAudioInputInitializationCallback;
                var5 = var1.handleAudioInputInitialization;
                var5 = var9.bind(var7)(var5);
 580:
                var9 = var7.setTransportOptions;
                var5 = {'idleJitterBufferFlush': true, 'ducking': false};
                var5 = var9.bind(var7)(var5);
                var5 = var7.setNativeScreenSharePickerCallbacks;
                if(!(var6 != var5)) { _fun0003_ip = 646; continue _fun0003 }
 615:
                var12 = var7.setNativeScreenSharePickerCallbacks;
                var11 = var1.handleNativeScreenSharePickerUpdate;
                var9 = var1.handleNativeScreenSharePickerCancel;
                var5 = var1.handleNativeScreenSharePickerError;
                var5 = var12.bind(var7)(var11, var9, var5);
 646:
                var5 = var7.setAudioDeviceModuleErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 673; continue _fun0003 }
 656:
                var9 = var7.setAudioDeviceModuleErrorCallback;
                var5 = var1.handleAudioDeviceModuleErrorCallback;
                var5 = var9.bind(var7)(var5);
 673:
                var5 = var7.setVideoCodecErrorCallback;
                if(!(var6 != var5)) { _fun0003_ip = 700; continue _fun0003 }
 683:
                var9 = var7.setVideoCodecErrorCallback;
                var5 = var1.handleVideoCodecErrorCallback;
                var5 = var9.bind(var7)(var5);
 700:
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
                if(!(var6 == var5)) { _fun0003_ip = 884; continue _fun0003 }
 781:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var9 = var9.bind(var3)(var5);
                var5 = var9.getVoiceEngine;
                var5 = var5.bind(var9)();
                var5 = var5.getUseLegacyAudioDevice;
                if(!(var6 != var5)) { _fun0003_ip = 927; continue _fun0003 }
 818:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var9 = var9.bind(var3)(var5);
                var5 = var9.getVoiceEngine;
                var9 = var5.bind(var9)();
                var5 = var9.getUseLegacyAudioDevice;
                var5 = var5.bind(var9)();
                var9 = _closure1_slot14;
                if(var5) { _fun0003_ip = 870; continue _fun0003 }
 862:
                var5 = var9.STANDARD;
                _fun0003_ip = 876; continue _fun0003;
 870:
                var5 = var9.LEGACY;
 876:
                var1['audioSubsystem'] = var5;
                _fun0003_ip = 927; continue _fun0003;
 884:
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
 927:
                var5 = var7.pingVoiceThread;
                var5 = var6 != var5;
                if(!var5) { _fun0003_ip = 956; continue _fun0003 }
 940:
                var9 = var8.window;
                var10 = 'undefined';
                var9 = typeof var9;
                var5 = var10 !== var9;
 956:
                if(!var5) { _fun0003_ip = 985; continue _fun0003 }
 959:
                var8 = var8.window;
                var8 = var8.GLOBAL_ENV;
                var9 = var8.RELEASE_CHANNEL;
                var8 = 'canary';
                var5 = var8 === var9;
 985:
                if(!var5) { _fun0003_ip = 998; continue _fun0003 }
 988:
                var5 = var1.watchdogTick;
                var5 = var5.bind(var1)();
 998:
                var5 = var7.setActiveSinksChangeCallback;
                if(!(var6 != var5)) { _fun0003_ip = 1025; continue _fun0003 }
 1008:
                var8 = var7.setActiveSinksChangeCallback;
                var5 = var1.handleActiveSinksChange;
                var5 = var8.bind(var7)(var5);
 1025:
                var5 = var7.setLoopbackPlaybackGainMultiplier;
                if(!(var6 != var5)) { _fun0003_ip = 1050; continue _fun0003 }
 1035:
                var8 = var7.setLoopbackPlaybackGainMultiplier;
                var5 = _closure1_slot20;
                var5 = var8.bind(var7)(var5);
 1050:
                var5 = var7.setVoiceFiltersFailedCallback;
                if(!(var6 != var5)) { _fun0003_ip = 1076; continue _fun0003 }
 1060:
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
 1076:
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
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 195; continue _fun0010 }
 12:
                                    var2 = undefined;
                                    var _closure7_slot0 = var2;
                                    var5 = _closure4_slot1;
                                    if(var5) { _fun0010_ip = 192; continue _fun0010 }
 31:
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
 0:
                                            var2 = arg1;
                                            var _closure8_slot0 = var2;
                                            var3 = _closure7_slot0;
                                            var4 = var3.pollQueueMetrics;
                                            var3 = null;
                                            if(!(var3 != var4)) { _fun0011_ip = 48; continue _fun0011 }
 28:
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
 48:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var14 = var6;
                                    var3 = new var14[var8](var13, var12);
                                    var3 = var3 instanceof Object ? var3 : var6;
                                    SaveGenerator(address=105);
 103:
                                    return var3;
 105:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0010_ip = 189; continue _fun0010 }
 111:
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
                                    _fun0010_ip = 192; continue _fun0010;
 189:
                                    return var3;
 192:
                                    return var2;
 195:
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
        var _closure2_slot1 = var5;
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
        var2 = new Array(72);
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
 0:
                var3 = arg1;
                var2 = _closure1_slot19;
                var2 = var2.LEGACY_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0012_ip = 2669; continue _fun0012 }
 23:
                var2 = _closure1_slot19;
                var2 = var2.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0012_ip = 2624; continue _fun0012 }
 40:
                var2 = _closure1_slot19;
                var2 = var2.AUTOMATIC_AUDIO_SUBSYSTEM;
                if(!(var2 !== var3)) { _fun0012_ip = 2579; continue _fun0012 }
 57:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
                if(!(var2 !== var3)) { _fun0012_ip = 2534; continue _fun0012 }
 74:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                if(!(var2 !== var3)) { _fun0012_ip = 2489; continue _fun0012 }
 91:
                var2 = _closure1_slot19;
                var2 = var2.DEBUG_LOGGING;
                if(!(var2 !== var3)) { _fun0012_ip = 2444; continue _fun0012 }
 108:
                var2 = _closure1_slot19;
                var2 = var2.SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0012_ip = 2399; continue _fun0012 }
 125:
                var2 = _closure1_slot19;
                var2 = var2.SCREEN_SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0012_ip = 2354; continue _fun0012 }
 142:
                var2 = _closure1_slot19;
                var2 = var2.ELEVATED_HOOK;
                if(!(var2 !== var3)) { _fun0012_ip = 2309; continue _fun0012 }
 159:
                var2 = _closure1_slot19;
                var2 = var2.LOOPBACK;
                if(!(var2 !== var3)) { _fun0012_ip = 2264; continue _fun0012 }
 176:
                var2 = _closure1_slot19;
                var2 = var2.WUMPUS_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 2219; continue _fun0012 }
 193:
                var2 = _closure1_slot19;
                var2 = var2.HYBRID_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 2174; continue _fun0012 }
 210:
                var2 = _closure1_slot19;
                var2 = var2.ATTENUATION;
                if(!(var2 !== var3)) { _fun0012_ip = 2041; continue _fun0012 }
 227:
                var2 = _closure1_slot19;
                var2 = var2.VIDEO_HOOK;
                if(!(var2 !== var3)) { _fun0012_ip = 2041; continue _fun0012 }
 244:
                var2 = _closure1_slot19;
                var2 = var2.EXPERIMENTAL_SOUNDSHARE;
                if(!(var2 !== var3)) { _fun0012_ip = 1996; continue _fun0012 }
 261:
                var2 = _closure1_slot19;
                var2 = var2.OPEN_H264;
                if(!(var2 !== var3)) { _fun0012_ip = 1863; continue _fun0012 }
 278:
                var2 = _closure1_slot19;
                var2 = var2.EXPERIMENTAL_ENCODERS;
                if(!(var2 !== var3)) { _fun0012_ip = 1818; continue _fun0012 }
 295:
                var2 = _closure1_slot19;
                var2 = var2.REMOTE_LOCUS_NETWORK_CONTROL;
                if(!(var2 !== var3)) { _fun0012_ip = 1773; continue _fun0012 }
 312:
                var2 = _closure1_slot19;
                var2 = var2.SCREEN_PREVIEWS;
                if(!(var2 !== var3)) { _fun0012_ip = 1728; continue _fun0012 }
 329:
                var2 = _closure1_slot19;
                var2 = var2.CLIPS;
                if(!(var2 !== var3)) { _fun0012_ip = 1683; continue _fun0012 }
 346:
                var2 = _closure1_slot19;
                var2 = var2.WINDOW_PREVIEWS;
                if(!(var2 !== var3)) { _fun0012_ip = 1638; continue _fun0012 }
 363:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_DEBUG_STATE;
                if(!(var2 !== var3)) { _fun0012_ip = 1593; continue _fun0012 }
 380:
                var2 = _closure1_slot19;
                var2 = var2.CONNECTION_REPLAY;
                if(!(var2 !== var3)) { _fun0012_ip = 1548; continue _fun0012 }
 397:
                var2 = _closure1_slot19;
                var2 = var2.SIMULCAST;
                if(!(var2 !== var3)) { _fun0012_ip = 1462; continue _fun0012 }
 414:
                var2 = _closure1_slot19;
                var2 = var2.RTC_REGION_RANKING;
                if(!(var2 !== var3)) { _fun0012_ip = 1417; continue _fun0012 }
 431:
                var2 = _closure1_slot19;
                var2 = var2.ELECTRON_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 1372; continue _fun0012 }
 448:
                var2 = _closure1_slot19;
                var2 = var2.MEDIAPIPE;
                if(!(var2 !== var3)) { _fun0012_ip = 1327; continue _fun0012 }
 465:
                var2 = _closure1_slot19;
                var2 = var2.FIXED_KEYFRAME_INTERVAL;
                if(!(var2 !== var3)) { _fun0012_ip = 1282; continue _fun0012 }
 482:
                var2 = _closure1_slot19;
                var2 = var2.FIRST_FRAME_CALLBACK;
                if(!(var2 !== var3)) { _fun0012_ip = 1237; continue _fun0012 }
 499:
                var2 = _closure1_slot19;
                var2 = var2.REMOTE_USER_MULTI_STREAM;
                if(!(var2 !== var3)) { _fun0012_ip = 1192; continue _fun0012 }
 516:
                var2 = _closure1_slot19;
                var2 = var2.IMAGE_QUALITY_MEASUREMENT;
                if(!(var2 !== var3)) { _fun0012_ip = 1147; continue _fun0012 }
 533:
                var2 = _closure1_slot19;
                var2 = var2.GO_LIVE_HARDWARE;
                if(!(var2 !== var3)) { _fun0012_ip = 1102; continue _fun0012 }
 550:
                var2 = _closure1_slot19;
                var2 = var2.SCREEN_CAPTURE_KIT;
                if(!(var2 !== var3)) { _fun0012_ip = 1057; continue _fun0012 }
 567:
                var2 = _closure1_slot19;
                var2 = var2.NATIVE_SCREENSHARE_PICKER;
                if(!(var2 !== var3)) { _fun0012_ip = 1012; continue _fun0012 }
 584:
                var2 = _closure1_slot19;
                var2 = var2.MLS_PAIRWISE_FINGERPRINTS;
                if(!(var2 !== var3)) { _fun0012_ip = 967; continue _fun0012 }
 601:
                var2 = _closure1_slot19;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                if(!(var2 !== var3)) { _fun0012_ip = 922; continue _fun0012 }
 618:
                var2 = _closure1_slot19;
                var2 = var2.DIAGNOSTICS;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 635:
                var2 = _closure1_slot19;
                var2 = var2.NATIVE_PING;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 652:
                var2 = _closure1_slot19;
                var2 = var2.AUTOMATIC_VAD;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 669:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_INPUT_DEVICE;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 686:
                var2 = _closure1_slot19;
                var2 = var2.AUDIO_OUTPUT_DEVICE;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 703:
                var2 = _closure1_slot19;
                var2 = var2.QOS;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 720:
                var2 = _closure1_slot19;
                var2 = var2.VOICE_PROCESSING;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 737:
                var2 = _closure1_slot19;
                var2 = var2.AUTO_ENABLE;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 754:
                var2 = _closure1_slot19;
                var2 = var2.VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 771:
                var2 = _closure1_slot19;
                var2 = var2.DESKTOP_CAPTURE;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 788:
                var2 = _closure1_slot19;
                var2 = var2.DESKTOP_CAPTURE_FORMAT;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 802:
                var2 = _closure1_slot19;
                var2 = var2.DESKTOP_CAPTURE_APPLICATIONS;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 816:
                var2 = _closure1_slot19;
                var2 = var2.VOICE_PANNING;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 830:
                var2 = _closure1_slot19;
                var2 = var2.AEC_DUMP;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 844:
                var2 = _closure1_slot19;
                var2 = var2.DISABLE_VIDEO;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 858:
                var2 = _closure1_slot19;
                var2 = var2.SAMPLE_PLAYBACK;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 872:
                var2 = _closure1_slot19;
                var2 = var2.NOISE_SUPPRESSION;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 886:
                var2 = _closure1_slot19;
                var2 = var2.AUTOMATIC_GAIN_CONTROL;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 900:
                var2 = _closure1_slot19;
                var2 = var2.SIDECHAIN_COMPRESSION;
                if(!(var2 !== var3)) { _fun0012_ip = 918; continue _fun0012 }
 914:
                var2 = false;
                return var2;
 918:
                var2 = true;
                return var2;
 922:
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
 967:
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
 1012:
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
 1057:
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
 1102:
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
 1147:
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
 1192:
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
 1237:
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
 1282:
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
 1327:
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
 1372:
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
 1417:
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
 1462:
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
                if(!var2) { _fun0012_ip = 1546; continue _fun0012 }
 1508:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var5 = var4.bind(var5)(var3);
                var4 = var5.supportsFeature;
                var3 = _closure1_slot22;
                var3 = var3.SIMULCAST_BUGFIX;
                var2 = var4.bind(var5)(var3);
 1546:
                return var2;
 1548:
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
 1593:
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
 1638:
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
 1683:
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
 1728:
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
 1773:
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
 1818:
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
 1863:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 17;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var3 = null;
                var4 = var3 == var2;
                var2 = undefined;
                if(var4) { _fun0012_ip = 1934; continue _fun0012 }
 1896:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var7)(var4);
                var4 = var4.os;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0012_ip = 1934; continue _fun0012 }
 1928:
                var2 = var4.family;
 1934:
                var2 = var3 != var2;
                if(!var2) { _fun0012_ip = 1994; continue _fun0012 }
 1941:
                var5 = /^win|linux|OS X/i;
                var4 = var5.test;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.os;
                var3 = var3.family;
                var2 = var4.bind(var5)(var3);
 1994:
                return var2;
 1996:
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
 2041:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 17;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var3 = null;
                var4 = var3 == var2;
                var2 = undefined;
                if(var4) { _fun0012_ip = 2112; continue _fun0012 }
 2074:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var7)(var4);
                var4 = var4.os;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0012_ip = 2112; continue _fun0012 }
 2106:
                var2 = var4.family;
 2112:
                var2 = var3 != var2;
                if(!var2) { _fun0012_ip = 2172; continue _fun0012 }
 2119:
                var5 = /^win/i;
                var4 = var5.test;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.os;
                var3 = var3.family;
                var2 = var4.bind(var5)(var3);
 2172:
                return var2;
 2174:
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
 2219:
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
 2264:
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
 2309:
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
 2354:
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
 2399:
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
 2444:
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
 2489:
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
 2534:
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
 2579:
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
 2624:
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
 2669:
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
 0:
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
                if(var1) { _fun0013_ip = 67; continue _fun0013 }
 61:
                var11['experiments'] = var6;
 67:
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
 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connections;
                        var3 = var4.delete;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.connectionsEmpty;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0014_ip = 85; continue _fun0014 }
 39:
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
 85:
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
 0:
                var3 = arg1;
                var4 = var3.context;
                var1 = _closure1_slot21;
                var1 = var1.DEFAULT;
                var1 = var4 === var1;
                if(!var1) { _fun0015_ip = 45; continue _fun0015 }
 28:
                var4 = this;
                var4 = var4.videoInputDeviceId;
                var2 = _closure1_slot18;
                var1 = var4 !== var2;
 45:
                if(var1) { _fun0015_ip = 58; continue _fun0015 }
 48:
                var2 = var3.hasDesktopSource;
                var1 = var2.bind(var3)();
 58:
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
 0:
                    var3 = arg1;
                    var4 = _closure3_slot1;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0016_ip = 32; continue _fun0016 }
 19:
                    var5 = var3.context;
                    var4 = _closure3_slot1;
                    var2 = var5 !== var4;
 32:
                    if(var2) { _fun0016_ip = 46; continue _fun0016 }
 35:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 46:
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
 0:
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
                    if(!(var3 == var6)) { _fun0017_ip = 63; continue _fun0017 }
 56:
                    var3 = var5.bind(var1)(var3);
                    _fun0017_ip = 79; continue _fun0017;
 63:
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
 79:
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
 0:
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
                if(!(var2 != var4)) { _fun0018_ip = 61; continue _fun0018 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 15;
                var3 = var1[var5];
                var1 = undefined;
                var8 = var7.bind(var1)(var3);
                var7 = var8.supportsFeature;
                var3 = _closure1_slot22;
                var3 = var3.SET_AUDIO_DEVICE_BY_ID;
                var7 = var7.bind(var8)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                if(var7) { _fun0019_ip = 105; continue _fun0019 }
 66:
                var7 = 14;
                var7 = var2[var7];
                var8 = var3.bind(var1)(var7);
                var7 = var8.getAudioInputDevices;
                var8 = var7.bind(var8)();
                var7 = var8.then;
                var6 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
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
                        if(!(var2 == var1)) { _fun0020_ip = 32; continue _fun0020 }
 26:
                        var3 = 0;
                        var1 = var4[var3];
 32:
                        if(!(var2 != var1)) { _fun0020_ip = 87; continue _fun0020 }
 36:
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
 87:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                _fun0019_ip = 135; continue _fun0019;
 105:
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var2 = var3.setInputDevice;
                var2 = var2.bind(var3)(var4);
 135:
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
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 15;
                var3 = var1[var5];
                var1 = undefined;
                var8 = var7.bind(var1)(var3);
                var7 = var8.supportsFeature;
                var3 = _closure1_slot22;
                var3 = var3.SET_AUDIO_DEVICE_BY_ID;
                var7 = var7.bind(var8)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                if(var7) { _fun0021_ip = 105; continue _fun0021 }
 66:
                var7 = 14;
                var7 = var2[var7];
                var8 = var3.bind(var1)(var7);
                var7 = var8.getAudioOutputDevices;
                var8 = var7.bind(var8)();
                var7 = var8.then;
                var6 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
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
                        if(!(var2 == var1)) { _fun0022_ip = 32; continue _fun0022 }
 26:
                        var3 = 0;
                        var1 = var4[var3];
 32:
                        if(!(var2 != var1)) { _fun0022_ip = 87; continue _fun0022 }
 36:
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
 87:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                _fun0021_ip = 135; continue _fun0021;
 105:
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var2 = var3.setOutputDevice;
                var2 = var2.bind(var3)(var4);
 135:
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
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 327; continue _fun0023 }
 15:
                    var _closure4_slot0 = var4;
                    var2 = arg1;
                    var _closure4_slot1 = var2;
                    var2 = var4.getVideoInputDevices;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=40);
 38:
                    return var2;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0023_ip = 324; continue _fun0023 }
 49:
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
                    if(!(var11 == var10)) { _fun0023_ip = 79; continue _fun0023 }
 70:
                    var5 = _closure1_slot18;
                    _fun0023_ip = 84; continue _fun0023;
 79:
                    var5 = var10.id;
 84:
                    var6 = var4.videoInputDeviceId;
                    if(!(var5 !== var6)) { _fun0023_ip = 319; continue _fun0023 }
 97:
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
                    if(var6) { _fun0023_ip = 210; continue _fun0023 }
 152:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getVoiceEngine;
                    var12 = var6.bind(var7)();
                    var7 = var12.setVideoInputDevice;
                    var13 = var11 != var10;
                    var6 = -1;
                    if(!var13) { _fun0023_ip = 203; continue _fun0023 }
 198:
                    var6 = var10.index;
 203:
                    var6 = var7.bind(var12)(var6);
                    _fun0023_ip = 298; continue _fun0023;
 210:
                    if(!(var11 == var10)) { _fun0023_ip = 220; continue _fun0023 }
 214:
                    var7 = _closure1_slot18;
                    _fun0023_ip = 260; continue _fun0023;
 220:
                    var6 = var10.originalId;
                    if(!(var11 != var6)) { _fun0023_ip = 244; continue _fun0023 }
 230:
                    var11 = var10.originalId;
                    var6 = '';
                    if(!(var6 === var11)) { _fun0023_ip = 251; continue _fun0023 }
 244:
                    var6 = var10.id;
                    _fun0023_ip = 257; continue _fun0023;
 251:
                    var6 = var10.originalId;
 257:
                    var7 = var6;
 260:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.getVoiceEngine;
                    var6 = var5.bind(var6)();
                    var5 = var6.setVideoInputDevice;
                    var5 = var5.bind(var6)(var7);
 298:
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
 319:
                    var3 = undefined;
                    return var3;
 324:
                    return var2;
 327:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot0 = var8;
        var8 = function setVideoInputDevice() {
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
 0:
                var5 = arg1;
                var4 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var2 = null;
                if(!(var2 == var5)) { _fun0024_ip = 48; continue _fun0024 }
 29:
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
                _fun0024_ip = 65; continue _fun0024;
 48:
                var2 = var3.eachConnection;
                var1 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure3_slot2;
                        var2 = _closure1_slot21;
                        var2 = var2.STREAM;
                        var2 = var4 === var2;
                        if(!var2) { _fun0025_ip = 45; continue _fun0025 }
 30:
                        var5 = var3.streamUserId;
                        var4 = var3.userId;
                        var2 = var5 !== var4;
 45:
                        if(var2) { _fun0025_ip = 89; continue _fun0025 }
 48:
                        var4 = var3.setGoLiveSource;
                        var2 = _closure3_slot1;
                        var2 = var4.bind(var3)(var2);
                        var2 = var3.setVideoBroadcast;
                        var4 = _closure3_slot0;
                        var1 = var4.shouldConnectionBroadcastVideo;
                        var1 = var1.bind(var4)(var3);
                        var1 = var2.bind(var3)(var1);
 89:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1, var4);
 65:
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
 0:
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
                if(!(var7 != var6)) { _fun0026_ip = 415; continue _fun0026 }
 66:
                var6 = var4.setOnClipsRecordingEvent;
                if(!(var7 != var6)) { _fun0026_ip = 415; continue _fun0026 }
 79:
                var6 = var4.applyClipsSettings;
                if(!(var7 != var6)) { _fun0026_ip = 415; continue _fun0026 }
 92:
                if(!(var7 == var5)) { _fun0026_ip = 126; continue _fun0026 }
 96:
                var8 = var4.setClipsSource;
                var6 = {'id': '', 'soundshareId': 0};
                var6 = var8.bind(var4)(var6);
                _fun0026_ip = 415; continue _fun0026;
 126:
                var6 = var5.quality;
                var11 = var6.frameRate;
                var8 = var6.resolution;
                var6 = 480;
                if(!(!(var8 <= var6))) { _fun0026_ip = 170; continue _fun0026 }
 154:
                var6 = 9;
                var9 = var8 / var6;
                var6 = 16;
                var10 = var9 * var6;
                _fun0026_ip = 184; continue _fun0026;
 170:
                var6 = 3;
                var9 = var8 / var6;
                var6 = 4;
                var10 = var9 * var6;
 184:
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
 0:
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
                        if(!(var5 !== var3)) { _fun0027_ip = 277; continue _fun0027 }
 97:
                        var3 = _closure1_slot15;
                        var3 = var3.Error;
                        if(!(var5 !== var3)) { _fun0027_ip = 208; continue _fun0027 }
 110:
                        var3 = _closure1_slot15;
                        var3 = var3.Ended;
                        var3 = var5 !== var3;
                        if(!var3) { _fun0027_ip = 141; continue _fun0027 }
 127:
                        var4 = _closure1_slot15;
                        var4 = var4.StoppedByGoLive;
                        var3 = var5 !== var4;
 141:
                        if(var3) { _fun0027_ip = 326; continue _fun0027 }
 147:
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
                        _fun0027_ip = 326; continue _fun0027;
 208:
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
                        _fun0027_ip = 326; continue _fun0027;
 277:
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
 326:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var4)(var3);
                var3 = var4.applyClipsSettings;
                if(!(var7 != var3)) { _fun0026_ip = 327; continue _fun0026 }
 271:
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
 327:
                if(!(var7 == var9)) { _fun0026_ip = 343; continue _fun0026 }
 331:
                var5 = ['', ''];
                _fun0026_ip = 357; continue _fun0026;
 343:
                var8 = var9.split;
                var3 = ':';
                var5 = var8.bind(var9)(var3);
 357:
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
                if(!var7) { _fun0026_ip = 405; continue _fun0026 }
 402:
                var5 = var6;
 405:
                var2['soundshareId'] = var5;
                var2 = var3.bind(var4)(var2);
 415:
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
 0:
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
                if(!var1) { _fun0028_ip = 74; continue _fun0028 }
 50:
                var5 = var6.applyClipsQualitySettings;
                var4 = arg1;
                var3 = arg2;
                var2 = arg3;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1 = true;
 74:
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
 0:
                    var4 = arg1;
                    var3 = _closure3_slot2;
                    var2 = _closure1_slot21;
                    var2 = var2.STREAM;
                    var2 = var3 === var2;
                    if(!var2) { _fun0029_ip = 45; continue _fun0029 }
 30:
                    var5 = var4.streamUserId;
                    var3 = var4.userId;
                    var2 = var5 !== var3;
 45:
                    if(var2) { _fun0029_ip = 68; continue _fun0029 }
 48:
                    var3 = var4.setSoundshareSource;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
 68:
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
 0:
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
                    if(!(var4 == var7)) { _fun0030_ip = 67; continue _fun0030 }
 56:
                    var4 = new Array(0);
                    var4 = var6.bind(var1)(var4);
                    _fun0030_ip = 123; continue _fun0030;
 67:
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
 123:
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
 0:
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
                if(!(var2 != var4)) { _fun0031_ip = 61; continue _fun0031 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
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
                if(!(var3 != var4)) { _fun0032_ip = 112; continue _fun0032 }
 67:
                var2 = var2.saveClip;
                if(!(var3 != var2)) { _fun0032_ip = 112; continue _fun0032 }
 77:
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
                _fun0032_ip = 135; continue _fun0032;
 112:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
 135:
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
 0:
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
                if(!(var2 != var3)) { _fun0033_ip = 109; continue _fun0033 }
 74:
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
                _fun0033_ip = 132; continue _fun0033;
 109:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
 132:
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
 0:
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
                if(!(var2 != var3)) { _fun0034_ip = 102; continue _fun0034 }
 67:
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
                _fun0034_ip = 125; continue _fun0034;
 102:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
 125:
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
 0:
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
                if(!(var2 != var3)) { _fun0035_ip = 102; continue _fun0035 }
 67:
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
                _fun0035_ip = 125; continue _fun0035;
 102:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = 'unsupported';
                var1 = var3.bind(var4)(var2);
 125:
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
 0:
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
                    if(!(var4 == var7)) { _fun0036_ip = 67; continue _fun0036 }
 56:
                    var4 = new Array(0);
                    var4 = var6.bind(var1)(var4);
                    _fun0036_ip = 123; continue _fun0036;
 67:
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
 123:
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
 0:
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
                if(!(var3 == var6)) { _fun0037_ip = 106; continue _fun0037 }
 50:
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
                _fun0037_ip = 144; continue _fun0037;
 106:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var3 = var2.bind(var3)();
                var2 = var3.setAudioSubsystem;
                var2 = var2.bind(var3)(var4);
 144:
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
 0:
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
                if(!(var2 != var3)) { _fun0038_ip = 61; continue _fun0038 }
 47:
                var3 = var4.setOffloadAdmControls;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
 61:
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
 0:
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
                if(!(var2 == var6)) { _fun0039_ip = 66; continue _fun0039 }
 53:
                var2 = var5.setAudioSubsystem;
                var2 = var2.bind(var5)(var4);
                _fun0039_ip = 77; continue _fun0039;
 66:
                var2 = var3.queueAudioSubsystem;
                var2 = var2.bind(var3)(var4);
 77:
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
 0:
                var4 = this;
                var3 = var4.supports;
                var1 = _closure1_slot19;
                var1 = var1.DEBUG_LOGGING;
                var1 = var3.bind(var4)(var1);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0040_ip = 78; continue _fun0040 }
 36:
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
 78:
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
 0:
                var4 = this;
                var3 = var4.supports;
                var2 = _closure1_slot19;
                var2 = var2.DEBUG_LOGGING;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0041_ip = 76; continue _fun0041 }
 30:
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
 76:
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
 0:
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
                if(!(var11 != var3)) { _fun0042_ip = 202; continue _fun0042 }
 59:
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
                if(var13) { _fun0042_ip = 136; continue _fun0042 }
 131:
                var9 = var12.enabled;
 136:
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
 202:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var3 = var3.bind(var4)();
                var3 = var3.setEmitVADLevel2;
                if(!(var11 == var3)) { _fun0042_ip = 410; continue _fun0042 }
 242:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var9 = var3.bind(var4)();
                var8 = var9.setEmitVADLevel;
                var4 = var2;
                if(var2) { _fun0042_ip = 330; continue _fun0042 }
 281:
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
 330:
                var3 = {};
                var12 = var10.echoCancellation;
                var3['echoCancellation'] = var12;
                var12 = var10.noiseSuppression;
                var3['noiseSuppression'] = var12;
                var12 = var10.automaticGainControlConfig;
                var13 = var11 == var12;
                var11 = undefined;
                if(var13) { _fun0042_ip = 374; continue _fun0042 }
 369:
                var11 = var12.enabled;
 374:
                var3['automaticGainControl'] = var11;
                var11 = var10.noiseCancellation;
                var3['noiseCancellation'] = var11;
                var10 = var10.noiseCancellationDuringProcessing;
                var3['noiseCancellationDuringProcessing'] = var10;
                var3 = var8.bind(var9)(var4, var2, var3);
                _fun0042_ip = 500; continue _fun0042;
 410:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getVoiceEngine;
                var4 = var3.bind(var4)();
                var3 = var4.setEmitVADLevel2;
                if(var2) { _fun0042_ip = 495; continue _fun0042 }
 446:
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
 495:
                var2 = var3.bind(var4)(var2);
 500:
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
 0:
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
                if(!(var2 != var4)) { _fun0043_ip = 61; continue _fun0043 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.codecSurvey;
                var3 = null;
                if(!(var3 == var4)) { _fun0044_ip = 56; continue _fun0044 }
 21:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
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
                        if(!(var3 == var5)) { _fun0045_ip = 100; continue _fun0045 }
 56:
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
                        _fun0045_ip = 116; continue _fun0045;
 100:
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
 116:
                        return var1;
                    }
                };
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _fun0044_ip = 81; continue _fun0044;
 56:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.resolve;
                var2 = var2.codecSurvey;
                var1 = var3.bind(var4)(var2);
 81:
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
 0:
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
                    if(!(var3 == var2)) { _fun0046_ip = 93; continue _fun0046 }
 49:
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
                    _fun0046_ip = 104; continue _fun0046;
 93:
                    var2 = var2.bind(var1)();
                    var2 = arg1;
                    var2 = var2.bind(var1)();
 104:
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
 0:
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
                if(!(var2 != var4)) { _fun0047_ip = 61; continue _fun0047 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
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
                if(!(var2 != var4)) { _fun0048_ip = 63; continue _fun0048 }
 49:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 63:
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
 0:
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
                if(!(var2 != var3)) { _fun0049_ip = 59; continue _fun0049 }
 49:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
 59:
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
 0:
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
                    if(!(var3 == var4)) { _fun0050_ip = 100; continue _fun0050 }
 56:
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
                    _fun0050_ip = 118; continue _fun0050;
 100:
                    var3 = _closure3_slot0;
                    var2 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var1)(var3, var2);
 118:
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
 0:
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
                if(var3) { _fun0051_ip = 200; continue _fun0051 }
 66:
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
 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connections;
                        var3 = var4.delete;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.connectionsEmpty;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0052_ip = 85; continue _fun0052 }
 39:
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
 85:
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
 200:
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
 0:
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
                if(!(var2 != var3)) { _fun0053_ip = 57; continue _fun0053 }
 49:
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
 57:
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
 0:
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
                if(!(var5 == var6)) { _fun0054_ip = 97; continue _fun0054 }
 68:
                if(!(var5 != var1)) { _fun0054_ip = 77; continue _fun0054 }
 72:
                var1 = var1.bind(var3)(var4);
 77:
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.resolve;
                var1 = var1.bind(var3)();
                _fun0054_ip = 130; continue _fun0054;
 97:
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
 130:
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
 0:
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
                    if(!(var3 == var4)) { _fun0055_ip = 104; continue _fun0055 }
 63:
                    var3 = global;
                    var7 = var3.Error;
                    var3 = var7.prototype;
                    var6 = Object.create(var3, {constructor: {value: var7}});
                    var9 = 'startLocalAudioRecording is not supported.';
                    var10 = var6;
                    var3 = new var10[var7](var9, var8);
                    var3 = var3 instanceof Object ? var3 : var6;
                    var3 = var5.bind(var1)(var3);
                    _fun0055_ip = 122; continue _fun0055;
 104:
                    var3 = _closure3_slot0;
                    var2 = function(arg1) {
                        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                            var2 = arg1;
                            if(var2) { _fun0056_ip = 56; continue _fun0056 }
 9:
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
                            _fun0056_ip = 66; continue _fun0056;
 56:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 66:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var1)(var3, var2);
 122:
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
 0:
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
                if(!(var6 != var8)) { _fun0057_ip = 75; continue _fun0057 }
 59:
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
 75:
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
                if(!var3) { _fun0057_ip = 164; continue _fun0057 }
 127:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var7 = var7.bind(var1)(var5);
                var5 = var7.getVoiceEngine;
                var5 = var5.bind(var7)();
                var5 = var5.setEmitVADLevel2;
                var3 = var6 != var5;
 164:
                if(!var3) { _fun0057_ip = 207; continue _fun0057 }
 167:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setEmitVADLevel2;
                var2 = true;
                var2 = var3.bind(var4)(var2);
 207:
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
 0:
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
                if(!(var2 != var4)) { _fun0058_ip = 61; continue _fun0058 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
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
                if(!var3) { _fun0059_ip = 57; continue _fun0059 }
 54:
                var1 = var2;
 57:
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
 0:
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
                if(!(var2 != var4)) { _fun0060_ip = 61; continue _fun0060 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
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
                    if(!(var3 == var4)) { _fun0061_ip = 100; continue _fun0061 }
 56:
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
                    _fun0061_ip = 129; continue _fun0061;
 100:
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
 129:
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
 0:
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
                if(!(var2 != var4)) { _fun0062_ip = 61; continue _fun0062 }
 47:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 61:
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
 0:
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
                if(!(var2 != var4)) { _fun0063_ip = 116; continue _fun0063 }
 93:
                var3 = var4.call;
                var2 = {};
                var2['threshold'] = var7;
                var2['ratio'] = var6;
                var2 = var3.bind(var4)(var5, var2);
 116:
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
 0:
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
                if(!(var2 != var4)) { _fun0064_ip = 63; continue _fun0064 }
 49:
                var3 = var4.call;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
 63:
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
 0:
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
                if(!(var2 != var4)) { _fun0065_ip = 77; continue _fun0065 }
 52:
                var3 = var4.call;
                var7 = var2 != var6;
                var2 = '';
                if(!var7) { _fun0065_ip = 71; continue _fun0065 }
 68:
                var2 = var6;
 71:
                var2 = var3.bind(var4)(var5, var2);
 77:
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
 0:
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
                if(!(var2 != var3)) { _fun0066_ip = 59; continue _fun0066 }
 49:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4);
 59:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[68] = var6;
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
        var2[69] = var6;
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
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                    var2 = _closure3_slot1;
                    if(var2) { _fun0067_ip = 90; continue _fun0067 }
 10:
                    var2 = _closure3_slot0;
                    var3 = var2.consecutiveWatchdogFailures;
                    var3 = var3 + 1;
                    var2['consecutiveWatchdogFailures'] = var3;
                    var2 = 1;
                    if(!(var3 > var2)) { _fun0067_ip = 90; continue _fun0067 }
 36:
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
                    _fun0067_ip = 104; continue _fun0067;
 90:
                    var2 = _closure3_slot0;
                    var1 = var2.watchdogTick;
                    var1 = var1.bind(var2)();
 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var6['value'] = var8;
        var2[70] = var6;
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
        var2[71] = var6;
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