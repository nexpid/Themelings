// app/modules/media_engine/DeviceFrecencyStore.tsx
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleSetDevice(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            var5 = var1.oldId;
            var4 = _closure1_slot15;
            var2 = var4.isSampling;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0002_ip = 37; continue _fun0002 }
 33:
            var2 = false;
            return var2;
 37:
            var4 = _closure1_slot15;
            var2 = var4.stopSampling;
            var2 = var2.bind(var4)(var3, var5);
            var2 = _closure1_slot15;
            var1 = var2.startSampling;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.DeviceTypes;
    var _closure1_slot10 = var8;
    var9 = var2.MediaEngineContextTypes;
    var _closure1_slot11 = var9;
    var2 = var2.SpeakingFlags;
    var _closure1_slot12 = var2;
    var2 = {};
    var9 = var8.AUDIO_INPUT;
    var2['inputDeviceFrecency'] = var9;
    var9 = var8.AUDIO_OUTPUT;
    var2['outputDeviceFrecency'] = var9;
    var8 = var8.VIDEO_INPUT;
    var2['videoDeviceFrecency'] = var8;
    var _closure1_slot13 = var2;
    var2 = {};
    var8 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var2['afterCompute'] = var8;
    var8 = function computeBonus() {
        var1 = 100;
        return var1;
    };
    var2['computeBonus'] = var8;
    var8 = function lookupKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var2['lookupKey'] = var8;
    var8 = 256;
    var2['maxSamples'] = var8;
    var8 = inf;
    var2['numFrequentlyItems'] = var8;
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function DeviceFrecencyStore(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var5 = _closure1_slot3;
                var2 = _closure2_slot0;
                var7 = undefined;
                var5 = var5.bind(var7)(var3, var2);
                var10 = new Array(0);
                var14 = var10;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var9 = var1.bind(var7)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot16;
                var1 = var1.bind(var7)();
                if(var1) { _fun0003_ip = 84; continue _fun0003 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var3, var10);
                _fun0003_ip = 118; continue _fun0003;
 84:
                var4 = global;
                var8 = var4.Reflect;
                var5 = var8.construct;
                var4 = _closure1_slot6;
                var4 = var4.bind(var7)(var3);
                var4 = var4.constructor;
                var1 = var5.bind(var8)(var9, var10, var4);
 118:
                var1 = var2.bind(var7)(var3, var1);
                var2 = {};
                var4 = _closure1_slot10;
                var10 = var4.AUDIO_INPUT;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 8;
                var5 = var8[var3];
                var5 = var9.bind(var7)(var5);
                var5 = var5.StopWatch;
                var11 = var5.prototype;
                var11 = Object.create(var11, {constructor: {value: var5}});
                var15 = var11;
                var5 = new var15[var5](var14);
                var5 = var5 instanceof Object ? var5 : var11;
                var2[var10] = var5;
                var10 = var4.AUDIO_OUTPUT;
                var5 = var8[var3];
                var5 = var9.bind(var7)(var5);
                var5 = var5.StopWatch;
                var11 = var5.prototype;
                var11 = Object.create(var11, {constructor: {value: var5}});
                var15 = var11;
                var5 = new var15[var5](var14);
                var5 = var5 instanceof Object ? var5 : var11;
                var2[var10] = var5;
                var5 = var4.VIDEO_INPUT;
                var3 = var8[var3];
                var3 = var9.bind(var7)(var3);
                var3 = var3.StopWatch;
                var9 = var3.prototype;
                var9 = Object.create(var9, {constructor: {value: var3}});
                var15 = var9;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var9;
                var2[var5] = var3;
                var1['timersByDeviceType'] = var2;
                var2 = {};
                var5 = var4.AUDIO_INPUT;
                var3 = {};
                var2[var5] = var3;
                var5 = var4.AUDIO_OUTPUT;
                var3 = {};
                var2[var5] = var3;
                var5 = var4.VIDEO_INPUT;
                var3 = {};
                var2[var5] = var3;
                var1['currentCallUsage'] = var2;
                var2 = {};
                var10 = var4.AUDIO_INPUT;
                var5 = _closure1_slot1;
                var3 = 9;
                var9 = var8[var3];
                var9 = var5.bind(var7)(var9);
                var6 = _closure1_slot14;
                var11 = var9.prototype;
                var11 = Object.create(var11, {constructor: {value: var9}});
                var15 = var11;
                var14 = var6;
                var9 = new var15[var9](var14, var13);
                var9 = var9 instanceof Object ? var9 : var11;
                var2[var10] = var9;
                var10 = var4.AUDIO_OUTPUT;
                var9 = var8[var3];
                var9 = var5.bind(var7)(var9);
                var11 = var9.prototype;
                var11 = Object.create(var11, {constructor: {value: var9}});
                var15 = var11;
                var14 = var6;
                var9 = new var15[var9](var14, var13);
                var9 = var9 instanceof Object ? var9 : var11;
                var2[var10] = var9;
                var4 = var4.VIDEO_INPUT;
                var3 = var8[var3];
                var3 = var5.bind(var7)(var3);
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var15 = var5;
                var14 = var6;
                var3 = new var15[var3](var14, var13);
                var3 = var3 instanceof Object ? var3 : var5;
                var2[var4] = var3;
                var1['frecenciesByDeviceType'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var6 = var2.waitFor;
            var5 = _closure1_slot8;
            var4 = _closure1_slot9;
            var4 = var6.bind(var2)(var5, var4);
            var3 = _closure1_slot10;
            var4 = var3.AUDIO_INPUT;
            var5 = new Array(3);
            var5[0] = var4;
            var4 = var3.AUDIO_OUTPUT;
            var5[1] = var4;
            var3 = var3.VIDEO_INPUT;
            var5[2] = var3;
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var1 = _closure3_slot1;
                    var4 = null;
                    var6 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 31; continue _fun0004 }
 23:
                    var6 = _closure3_slot1;
                    var3 = var6[var5];
 31:
                    if(!(var4 != var3)) { _fun0004_ip = 68; continue _fun0004 }
 35:
                    var3 = _closure3_slot0;
                    var3 = var3.frecenciesByDeviceType;
                    var4 = var3[var5];
                    var3 = var4.overwriteHistory;
                    var2 = _closure3_slot1;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
 68:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var2 = var2.timersByDeviceType;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                return var1;
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
            var2 = this;
            var1 = global;
            var4 = var1.Object;
            var3 = var4.values;
            var1 = var2.timersByDeviceType;
            var4 = var3.bind(var4)(var1);
            var3 = var4.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = {};
            var3 = _closure1_slot10;
            var5 = var3.AUDIO_INPUT;
            var4 = {};
            var1[var5] = var4;
            var5 = var3.AUDIO_OUTPUT;
            var4 = {};
            var1[var5] = var4;
            var4 = var3.VIDEO_INPUT;
            var3 = {};
            var1[var4] = var3;
            var2['currentCallUsage'] = var1;
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
 0:
                var2 = arg1;
                var4 = arg2;
                var5 = arg3;
                var1 = this;
                var3 = var1.currentCallUsage;
                var3 = var3[var2];
                var6 = var3[var4];
                var3 = null;
                if(!(var3 == var6)) { _fun0005_ip = 48; continue _fun0005 }
 32:
                var3 = var1.currentCallUsage;
                var6 = var3[var2];
                var3 = 0;
                var6[var4] = var3;
 48:
                var3 = var1.currentCallUsage;
                var6 = var3[var2];
                var3 = var6[var4];
                var3 = var3 + var5;
                var6[var4] = var3;
                var1 = var1.frecenciesByDeviceType;
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
            var1 = this;
            var2 = var1.timersByDeviceType;
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
            var1 = this;
            var2 = var1.timersByDeviceType;
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
 0:
                var6 = arg1;
                var5 = arg2;
                var4 = this;
                var1 = var4.timersByDeviceType;
                var2 = var1[var6];
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                var1 = var2.elapsed;
                var3 = var1.bind(var2)();
                var1 = var3.asMilliseconds;
                var3 = var1.bind(var3)();
                var1 = 0;
                if(!(var3 > var1)) { _fun0006_ip = 105; continue _fun0006 }
 55:
                var1 = null;
                if(!(var1 == var5)) { _fun0006_ip = 93; continue _fun0006 }
 61:
                var7 = function getConfigForDeviceType(arg1) {
                    var2 = {};
                    var1 = _closure1_slot10;
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
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var7 = var8.getCurrentDeviceId;
                var1 = _closure1_slot8;
                var5 = var7.bind(var8)(var1);
 93:
                var1 = var4.track;
                var1 = var1.bind(var4)(var6, var5, var3);
 105:
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
            var4 = this;
            var1 = {};
            var2 = _closure1_slot10;
            var5 = var2.AUDIO_INPUT;
            var6 = var4.frecenciesByDeviceType;
            var3 = var2.AUDIO_INPUT;
            var3 = var6[var3];
            var3 = var3.usageHistory;
            var1[var5] = var3;
            var5 = var2.AUDIO_OUTPUT;
            var6 = var4.frecenciesByDeviceType;
            var3 = var2.AUDIO_OUTPUT;
            var3 = var6[var3];
            var3 = var3.usageHistory;
            var1[var5] = var3;
            var3 = var2.VIDEO_INPUT;
            var4 = var4.frecenciesByDeviceType;
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
            var1 = this;
            var2 = var1.frecenciesByDeviceType;
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
            var3 = _closure1_slot10;
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
 0:
                    var3 = arg1;
                    var4 = _closure3_slot0;
                    var2 = var4.isSampling;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0007_ip = 50; continue _fun0007 }
 24:
                    var4 = _closure3_slot0;
                    var2 = var4.stopSampling;
                    var2 = var2.bind(var4)(var3);
                    var2 = var4.startSampling;
                    var2 = var2.bind(var4)(var3);
 50:
                    var2 = _closure3_slot1;
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var1 = _closure3_slot0;
                    var1 = var1.currentCallUsage;
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
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var6 = var4().value;
                    var1 = var2;
                    var5 = undefined;
                    var3 = var1 === var5;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 27; continue _fun0008 }
 24:
                    var1 = var6;
 27:
                    if(var3) { _fun0008_ip = 41; continue _fun0008 }
 30:
                    var4 = var4().value;
                    var4 = var2;
                    var3 = var4 === var5;
 41:
                    if(var3) { _fun0008_ip = 47; continue _fun0008 }
 44:
                    var2.return();
 47:
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
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 49; continue _fun0009 }
 24:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0009_ip = 49; continue _fun0009 }
 43:
                    var1 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0009_ip = 55; continue _fun0009 }
 52:
                    var2.return();
 55:
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
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var6 = var4().value;
                    var1 = var2;
                    var5 = undefined;
                    var3 = var1 === var5;
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 27; continue _fun0010 }
 24:
                    var1 = var6;
 27:
                    if(var3) { _fun0010_ip = 41; continue _fun0010 }
 30:
                    var4 = var4().value;
                    var4 = var2;
                    var3 = var4 === var5;
 41:
                    if(var3) { _fun0010_ip = 47; continue _fun0010 }
 44:
                    var2.return();
 47:
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
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0011_ip = 49; continue _fun0011 }
 24:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0011_ip = 49; continue _fun0011 }
 43:
                    var1 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0011_ip = 55; continue _fun0011 }
 52:
                    var2.return();
 55:
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
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.mapKeys;
        var2 = arg1;
        var1 = function(arg1, arg2) {
            var2 = _closure1_slot13;
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
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function AUDIO_SET_INPUT_DEVICE(arg1) {
        var4 = _closure1_slot17;
        var1 = _closure1_slot10;
        var3 = var1.AUDIO_INPUT;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['AUDIO_SET_INPUT_DEVICE'] = var7;
    var7 = function AUDIO_SET_OUTPUT_DEVICE(arg1) {
        var4 = _closure1_slot17;
        var1 = _closure1_slot10;
        var3 = var1.AUDIO_OUTPUT;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['AUDIO_SET_OUTPUT_DEVICE'] = var7;
    var7 = function MEDIA_ENGINE_SET_VIDEO_DEVICE(arg1) {
        var4 = _closure1_slot17;
        var1 = _closure1_slot10;
        var3 = var1.VIDEO_INPUT;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['MEDIA_ENGINE_SET_VIDEO_DEVICE'] = var7;
    var7 = function handleSpeaking(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.context;
            var4 = var1.userId;
            var5 = var1.speakingFlags;
            var1 = _closure1_slot11;
            var1 = var1.DEFAULT;
            if(!(var3 === var1)) { _fun0012_ip = 209; continue _fun0012 }
 39:
            var3 = _closure1_slot9;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var6 = null;
            var8 = var6 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var8) { _fun0012_ip = 70; continue _fun0012 }
 65:
            var3 = var7.id;
 70:
            if(!(var6 != var3)) { _fun0012_ip = 205; continue _fun0012 }
 77:
            if(!(var4 !== var3)) { _fun0012_ip = 93; continue _fun0012 }
 81:
            var3 = _closure1_slot10;
            var4 = var3.AUDIO_OUTPUT;
            _fun0012_ip = 103; continue _fun0012;
 93:
            var3 = _closure1_slot10;
            var4 = var3.AUDIO_INPUT;
 103:
            var3 = _closure1_slot12;
            var3 = var3.NONE;
            if(!(var5 === var3)) { _fun0012_ip = 135; continue _fun0012 }
 117:
            var6 = _closure1_slot15;
            var3 = var6.isSampling;
            var3 = var3.bind(var6)(var4);
            if(var3) { _fun0012_ip = 188; continue _fun0012 }
 135:
            var3 = _closure1_slot12;
            var3 = var3.NONE;
            if(!(var5 !== var3)) { _fun0012_ip = 184; continue _fun0012 }
 149:
            var5 = _closure1_slot15;
            var3 = var5.isSampling;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0012_ip = 184; continue _fun0012 }
 167:
            var5 = _closure1_slot15;
            var3 = var5.startSampling;
            var3 = var3.bind(var5)(var4);
            _fun0012_ip = 203; continue _fun0012;
 184:
            var3 = false;
            return var3;
 188:
            var3 = _closure1_slot15;
            var2 = var3.stopSampling;
            var2 = var2.bind(var3)(var4);
 203:
            return var1;
 205:
            var1 = false;
            return var1;
 209:
            var1 = false;
            return var1;
        }
    };
    var2['SPEAKING'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var13 = var7;
    var11 = var2;
    var2 = new var13[var9](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot15 = var2;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/DeviceFrecencyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();