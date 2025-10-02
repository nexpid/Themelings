// app/modules/media_engine/DeviceFrecencyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleSetDevice(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var5 = var1.oldId;
            var4 = _closure1_slot16;
            var2 = var4.isSampling;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = false;
            return var2;
case 6:
            var4 = _closure1_slot16;
            var2 = var4.stopSampling;
            var2 = var2.bind(var4)(var3, var5);
            var2 = _closure1_slot16;
            var1 = var2.startSampling;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.DeviceTypes;
    var _closure1_slot9 = var9;
    var8 = var2.MediaEngineContextTypes;
    var _closure1_slot10 = var8;
    var2 = var2.SpeakingFlags;
    var _closure1_slot11 = var2;
    var2 = {};
    var8 = var9.AUDIO_INPUT;
    var2['inputDeviceFrecency'] = var8;
    var8 = var9.AUDIO_OUTPUT;
    var2['outputDeviceFrecency'] = var8;
    var8 = var9.VIDEO_INPUT;
    var2['videoDeviceFrecency'] = var8;
    var _closure1_slot12 = var2;
    var11 = {};
    var2 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var11['afterCompute'] = var2;
    var2 = function computeBonus() {
        var1 = 100;
        return var1;
    };
    var11['computeBonus'] = var2;
    var2 = function lookupKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var11['lookupKey'] = var2;
    var2 = 256;
    var11['maxSamples'] = var2;
    var2 = inf;
    var11['numFrequentlyItems'] = var2;
    var2 = {};
    var12 = var9.AUDIO_INPUT;
    var8 = 8;
    var10 = var6[var8];
    var10 = var5.bind(var1)(var10);
    var10 = var10.StopWatch;
    var13 = var10.prototype;
    var13 = Object.create(var13, {constructor: {value: var10}});
    var17 = var13;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var13;
    var2[var12] = var10;
    var12 = var9.AUDIO_OUTPUT;
    var10 = var6[var8];
    var10 = var5.bind(var1)(var10);
    var10 = var10.StopWatch;
    var13 = var10.prototype;
    var13 = Object.create(var13, {constructor: {value: var10}});
    var17 = var13;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var13;
    var2[var12] = var10;
    var10 = var9.VIDEO_INPUT;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.StopWatch;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var2[var10] = var8;
    var _closure1_slot13 = var2;
    var2 = {};
    var10 = var9.AUDIO_INPUT;
    var8 = {};
    var2[var10] = var8;
    var10 = var9.AUDIO_OUTPUT;
    var8 = {};
    var2[var10] = var8;
    var10 = var9.VIDEO_INPUT;
    var8 = {};
    var2[var10] = var8;
    var _closure1_slot14 = var2;
    var2 = {};
    var12 = var9.AUDIO_INPUT;
    var8 = 9;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var13 = var10.prototype;
    var13 = Object.create(var13, {constructor: {value: var10}});
    var17 = var13;
    var16 = var11;
    var10 = new var17[var10](var16, var15);
    var10 = var10 instanceof Object ? var10 : var13;
    var2[var12] = var10;
    var12 = var9.AUDIO_OUTPUT;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var13 = var10.prototype;
    var13 = Object.create(var13, {constructor: {value: var10}});
    var17 = var13;
    var16 = var11;
    var10 = new var17[var10](var16, var15);
    var10 = var10 instanceof Object ? var10 : var13;
    var2[var12] = var10;
    var9 = var9.VIDEO_INPUT;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var17 = var10;
    var16 = var11;
    var8 = new var17[var8](var16, var15);
    var8 = var8 instanceof Object ? var8 : var10;
    var2[var9] = var8;
    var _closure1_slot15 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function DeviceFrecencyStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var6 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = var6.waitFor;
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure1_slot9;
            var4 = var2.AUDIO_INPUT;
            var3 = new Array(3);
            var3[0] = var4;
            var4 = var2.AUDIO_OUTPUT;
            var3[1] = var4;
            var2 = var2.VIDEO_INPUT;
            var3[2] = var2;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure3_slot0;
                    var5 = null;
                    var6 = var5 == var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var6 = _closure3_slot0;
                    var4 = var6[var3];
case 11:
                    if(!(var5 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure1_slot15;
                    var5 = var4[var3];
                    var4 = var5.overwriteHistory;
                    var2 = _closure3_slot0;
                    var2 = var2[var3];
                    var2 = var4.bind(var5)(var2);
case 13:
                    var2 = _closure1_slot13;
                    var3 = var2[var3];
                    var2 = var3.reset;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            var2 = var1.AUDIO_INPUT;
            var3 = new Array(3);
            var3[0] = var2;
            var2 = var1.AUDIO_OUTPUT;
            var3[1] = var2;
            var1 = var1.VIDEO_INPUT;
            var3[2] = var1;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = _closure1_slot13;
                var4 = var2[var3];
                var2 = var4.reset;
                var2 = var2.bind(var4)();
                var2 = _closure1_slot14;
                var1 = {};
                var2[var3] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'track';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var5 = arg3;
                var3 = _closure1_slot14;
                var3 = var3[var2];
                var6 = var3[var4];
                var3 = null;
                if(!(var3 == var6)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var3 = _closure1_slot14;
                var6 = var3[var2];
                var3 = 0;
                var6[var4] = var3;
case 15:
                var3 = _closure1_slot14;
                var6 = var3[var2];
                var3 = var6[var4];
                var3 = var3 + var5;
                var6[var4] = var3;
                var1 = _closure1_slot15;
                var3 = var1[var2];
                var2 = var3.track;
                var1 = {};
                var1['usesSinceLastTrack'] = var5;
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSampling';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var2 = var2[var1];
            var1 = var2.isRunning;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'startSampling';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var2 = var2[var1];
            var1 = var2.start;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'stopSampling';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var4 = this;
                var2 = _closure1_slot13;
                var2 = var2[var6];
                var3 = var2.stop;
                var3 = var3.bind(var2)();
                var3 = var2.elapsed;
                var7 = var3.bind(var2)();
                var3 = var7.asMilliseconds;
                var3 = var3.bind(var7)();
                var7 = 0;
                if(!(var3 > var7)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                var7 = null;
                if(!(var7 == var5)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var8 = function getConfigForDeviceType(arg1) {
                    var2 = {};
                    var1 = _closure1_slot9;
                    var5 = var1.AUDIO_INPUT;
                    var3 = {};
                    var6 = function getCurrentDeviceId(arg1) {
                        var2 = arg1;
                        var1 = var2.getInputDeviceId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var3['getCurrentDeviceId'] = var6;
                    var2[var5] = var3;
                    var5 = var1.AUDIO_OUTPUT;
                    var3 = {};
                    var6 = function getCurrentDeviceId(arg1) {
                        var2 = arg1;
                        var1 = var2.getOutputDeviceId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var3['getCurrentDeviceId'] = var6;
                    var2[var5] = var3;
                    var3 = var1.VIDEO_INPUT;
                    var1 = {};
                    var4 = function getCurrentDeviceId(arg1) {
                        var2 = arg1;
                        var1 = var2.getVideoDeviceId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1['getCurrentDeviceId'] = var4;
                    var2[var3] = var1;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var7 = undefined;
                var8 = var8.bind(var7)(var6);
                var7 = var8.getCurrentDeviceId;
                var1 = _closure1_slot7;
                var5 = var7.bind(var8)(var1);
case 19:
                var1 = var4.track;
                var1 = var1.bind(var4)(var6, var5, var3);
case 17:
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot9;
            var5 = var2.AUDIO_INPUT;
            var4 = _closure1_slot15;
            var3 = var2.AUDIO_INPUT;
            var3 = var4[var3];
            var3 = var3.usageHistory;
            var1[var5] = var3;
            var5 = var2.AUDIO_OUTPUT;
            var3 = var2.AUDIO_OUTPUT;
            var3 = var4[var3];
            var3 = var3.usageHistory;
            var1[var5] = var3;
            var3 = var2.VIDEO_INPUT;
            var2 = var2.VIDEO_INPUT;
            var2 = var4[var2];
            var2 = var2.usageHistory;
            var1[var3] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getDeviceIdsSortedByFrecency';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot15;
            var1 = arg1;
            var1 = var2[var1];
            var1 = var1.frequently;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getUsageStats';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = {};
            var3 = _closure1_slot9;
            var5 = var3.AUDIO_INPUT;
            var1 = new Array(0);
            var4[var5] = var1;
            var5 = var3.AUDIO_OUTPUT;
            var1 = new Array(0);
            var4[var5] = var1;
            var5 = var3.VIDEO_INPUT;
            var1 = new Array(0);
            var4[var5] = var1;
            var _closure3_slot1 = var4;
            var1 = var3.AUDIO_INPUT;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = var3.AUDIO_OUTPUT;
            var6[1] = var1;
            var5 = var6.forEach;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure3_slot0;
                    var2 = var4.isSampling;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var4 = _closure3_slot0;
                    var2 = var4.stopSampling;
                    var2 = var2.bind(var4)(var3);
                    var2 = var4.startSampling;
                    var2 = var2.bind(var4)(var3);
case 21:
                    var2 = _closure3_slot1;
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.entries;
                    var1 = _closure1_slot14;
                    var1 = var1[var3];
                    var1 = var4.bind(var5)(var1);
                    var2[var3] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1);
            var1 = {};
            var5 = var3.AUDIO_INPUT;
            var7 = var4[var5];
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var6 = var4().value;
                    var1 = var2;
                    var5 = undefined;
                    var3 = var1 === var5;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 23; continue _fun0008 }
case 22:
                    var1 = var6;
case 23:
                    if(var3) { _fun0008_ip = 24; continue _fun0008 }
case 16:
                    var4 = var4().value;
                    var4 = var2;
                    var3 = var4 === var5;
case 24:
                    if(var3) { _fun0008_ip = 25; continue _fun0008 }
case 15:
                    var2.return();
case 25:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['duration_input_device_used_ids'] = var5;
            var5 = var3.AUDIO_INPUT;
            var7 = var4[var5];
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 26; continue _fun0009 }
case 22:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var1 = var5;
                    var3 = var4;
case 26:
                    if(var3) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var2.return();
case 28:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['duration_input_device_used_ms'] = var5;
            var5 = var3.AUDIO_OUTPUT;
            var7 = var4[var5];
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var6 = var4().value;
                    var1 = var2;
                    var5 = undefined;
                    var3 = var1 === var5;
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 23; continue _fun0010 }
case 22:
                    var1 = var6;
case 23:
                    if(var3) { _fun0010_ip = 24; continue _fun0010 }
case 16:
                    var4 = var4().value;
                    var4 = var2;
                    var3 = var4 === var5;
case 24:
                    if(var3) { _fun0010_ip = 25; continue _fun0010 }
case 15:
                    var2.return();
case 25:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['duration_output_device_used_ids'] = var5;
            var3 = var3.AUDIO_OUTPUT;
            var4 = var4[var3];
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0011_ip = 26; continue _fun0011 }
case 22:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0011_ip = 26; continue _fun0011 }
case 27:
                    var1 = var5;
                    var3 = var4;
case 26:
                    if(var3) { _fun0011_ip = 28; continue _fun0011 }
case 29:
                    var2.return();
case 28:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1['duration_output_device_used_ms'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'DeviceFrecencyStore';
    var9['displayName'] = var2;
    var9['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.mapKeys;
        var2 = arg1;
        var1 = function(arg1, arg2) {
            var2 = _closure1_slot12;
            var1 = arg2;
            var1 = var2[var1];
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2[0] = var8;
    var9['migrations'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function AUDIO_SET_INPUT_DEVICE(arg1) {
        var4 = _closure1_slot18;
        var1 = _closure1_slot9;
        var3 = var1.AUDIO_INPUT;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['AUDIO_SET_INPUT_DEVICE'] = var7;
    var7 = function AUDIO_SET_OUTPUT_DEVICE(arg1) {
        var4 = _closure1_slot18;
        var1 = _closure1_slot9;
        var3 = var1.AUDIO_OUTPUT;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['AUDIO_SET_OUTPUT_DEVICE'] = var7;
    var7 = function MEDIA_ENGINE_SET_VIDEO_DEVICE(arg1) {
        var4 = _closure1_slot18;
        var1 = _closure1_slot9;
        var3 = var1.VIDEO_INPUT;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_VIDEO_DEVICE'] = var7;
    var7 = function handleSpeaking(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.context;
            var4 = var1.userId;
            var5 = var1.speakingFlags;
            var1 = _closure1_slot10;
            var1 = var1.DEFAULT;
            if(!(var3 === var1)) { _fun0012_ip = 30; continue _fun0012 }
case 31:
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var6 = null;
            var8 = var6 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var8) { _fun0012_ip = 3; continue _fun0012 }
case 13:
            var3 = var7.id;
case 3:
            if(!(var6 != var3)) { _fun0012_ip = 32; continue _fun0012 }
case 33:
            if(!(var4 !== var3)) { _fun0012_ip = 34; continue _fun0012 }
case 35:
            var3 = _closure1_slot9;
            var4 = var3.AUDIO_OUTPUT;
            _fun0012_ip = 17; continue _fun0012;
case 34:
            var3 = _closure1_slot9;
            var4 = var3.AUDIO_INPUT;
case 17:
            var3 = _closure1_slot11;
            var3 = var3.NONE;
            if(!(var5 === var3)) { _fun0012_ip = 36; continue _fun0012 }
case 37:
            var6 = _closure1_slot16;
            var3 = var6.isSampling;
            var3 = var3.bind(var6)(var4);
            if(var3) { _fun0012_ip = 38; continue _fun0012 }
case 36:
            var3 = _closure1_slot11;
            var3 = var3.NONE;
            if(!(var5 !== var3)) { _fun0012_ip = 39; continue _fun0012 }
case 40:
            var5 = _closure1_slot16;
            var3 = var5.isSampling;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0012_ip = 39; continue _fun0012 }
case 41:
            var5 = _closure1_slot16;
            var3 = var5.startSampling;
            var3 = var3.bind(var5)(var4);
            _fun0012_ip = 42; continue _fun0012;
case 39:
            var3 = false;
            return var3;
case 38:
            var3 = _closure1_slot16;
            var2 = var3.stopSampling;
            var2 = var2.bind(var3)(var4);
case 42:
            return var1;
case 32:
            var1 = false;
            return var1;
case 30:
            var1 = false;
            return var1;
        }
    };
    var2['SPEAKING'] = var7;
    var7 = function handleConnect() {
        var2 = _closure1_slot16;
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['RTC_CONNECTION_CLIENT_CONNECT'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var17 = var7;
    var15 = var2;
    var2 = new var17[var9](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot16 = var2;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/DeviceFrecencyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();