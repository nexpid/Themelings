// app/modules/media_engine/InputWatcher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'InputWatcher';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function InputWatcher(arg1, arg2) {
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var2;
            var6 = _closure1_slot5;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var2, var5);
            var5 = arg1;
            var2['mediaEngine'] = var5;
            var5 = arg2;
            var2['mediaEngineStore'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.Timeout;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var11 = var8;
            var5 = new var11[var5](var10);
            var5 = var5 instanceof Object ? var5 : var8;
            var2['stateChangeTimeout'] = var5;
            var2['inputDetected'] = var1;
            var5 = global;
            var8 = var5.performance;
            var5 = var8.now;
            var5 = var5.bind(var8)();
            var2['lastUpdateTime'] = var5;
            var5 = _closure1_slot4;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var2 = undefined;
                        var7 = undefined;
                        var10 = undefined;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 7;
                        var4 = var8[var4];
                        var9 = var6.bind(var2)(var4);
                        var5 = var9.getWindowsMuteDetectionExperimentConfig;
                        var4 = {};
                        var11 = 'MediaEngineStore.fetchInputDeviceOSConfig';
                        var4['location'] = var11;
                        var4 = var5.bind(var9)(var4);
                        var4 = var4.windowsMuteAndZeroVolumeDetectionEnabled;
                        var5 = 8;
                        var5 = var8[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.isWindows;
                        var5 = var5.bind(var6)();
                        if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var8 = 9;
                        var8 = var5[var8];
                        var11 = var6.bind(var2)(var8);
                        var9 = var11.satisfies;
                        var13 = 10;
                        var5 = var5[var13];
                        var5 = var6.bind(var2)(var5);
                        var6 = null;
                        var5 = var6 == var5;
                        var8 = undefined;
                        if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var12 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var13];
                        var5 = var12.bind(var2)(var5);
                        var5 = var5.os;
                        var8 = var5.release;
case 6:
                        var5 = _closure1_slot7;
                        var5 = var9.bind(var11)(var8, var5);
                        if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 8:
                        if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 9: // try_start_0
                        var4 = _closure3_slot1;
                        var9 = var4.mediaEngineStore;
                        var8 = var9.getInputDeviceId;
                        var8 = var8.bind(var9)();
                        var9 = var4.mediaEngineStore;
                        var4 = var9.getInputDevices;
                        var4 = var4.bind(var9)();
                        var4 = var4[var8];
                        var7 = var4;
                        var8 = var6 == var4;
                        var4 = undefined;
                        if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                        var4 = var7.guid;
case 10:
                        var10 = var4;
                        if(!(var6 != var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                        var6 = var10;
                        var4 = '';
                        if(!(var4 !== var6)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 11;
                        var4 = var7[var4];
                        var7 = var6.bind(var2)(var4);
                        var6 = var7.ensureModule;
                        var4 = 'discord_voice';
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address=322);
case 15:
                        return var4;
case 16:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                        var6 = global;
                        var7 = var6.Promise;
                        var6 = var7.all;
                        var8 = _closure3_slot1;
                        var9 = var8.mediaEngine;
                        var5 = var9.getDeviceOSVolume;
                        var9 = var5.bind(var9)(var10);
                        var5 = new Array(2);
                        var5[0] = var9;
                        var9 = var8.mediaEngine;
                        var8 = var9.getDeviceOSMuted;
                        var8 = var8.bind(var9)(var10);
                        var5[1] = var8;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address=404);
case 19:
                        return var5;
case 20:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                        var7 = _closure1_slot3;
                        var6 = 2;
                        var7 = var7.bind(var2)(var5, var6);
                        var6 = 0;
                        var10 = var7[var6];
                        var6 = 1;
                        var9 = var7[var6];
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 12;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var11 = 'AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED';
                        var6['type'] = var11;
                        var6['osVolume'] = var10;
                        var6['osMuted'] = var9;
                        var6 = var7.bind(var8)(var6);
case 12: // try_end0
                        _fun0001_ip = 4; continue _fun0001;
case 21:
                        return var5;
case 17:
                        return var4;
case 23: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = _closure1_slot8;
                        var4 = var5.warn;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = 'Failed to get device OS volume and/or mute state: ';
                        var3 = var6.bind(var3)(var7);
                        var3 = var4.bind(var5)(var3);
case 4:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var5.bind(var1)(var4);
            var2['fetchInputDeviceOSConfig'] = var4;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = !var1;
                    var _closure4_slot1 = var1;
                    var3 = _closure3_slot0;
                    var5 = var3.stateChangeTimeout;
                    var4 = var5.start;
                    var3 = 5000;
                    if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var3 = 1500;
case 24:
                    var6 = _closure1_slot4;
                    var1 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 3:
                                var7 = _closure1_slot8;
                                var6 = var7.info;
                                var2 = _closure4_slot0;
                                var5 = 'Silence:';
                                var5 = var6.bind(var7)(var5, var2);
                                var5 = _closure3_slot1;
                                var4 = _closure4_slot1;
                                var5['inputDetected'] = var4;
                                var4 = global;
                                var6 = var4.performance;
                                var4 = var6.now;
                                var4 = var4.bind(var6)();
                                var5['lastUpdateTime'] = var4;
                                if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                                var4 = _closure3_slot1;
                                var2 = var4.fetchInputDeviceOSConfig;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address=103);
case 29:
                                return var2;
case 30:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0003_ip = 31; continue _fun0003 }
case 27:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 12;
                                var4 = var4[var3];
                                var3 = undefined;
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.dispatch;
                                var4 = {};
                                var8 = 'AUDIO_INPUT_DETECTED';
                                var4['type'] = var8;
                                var7 = _closure3_slot1;
                                var8 = var7.inputDetected;
                                var4['inputDetected'] = var8;
                                var7 = var7.lastUpdateTime;
                                var4['lastUpdateTime'] = var7;
                                var4 = var5.bind(var6)(var4);
                                return var3;
case 31:
                                return var2;
case 26:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var6.bind(var1)(var2);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2['handleSilence'] = var3;
            var5 = var2.mediaEngine;
            var4 = var5.on;
            var3 = 13;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.MediaEngineEvent;
            var3 = var3.Silence;
            var2 = var2.handleSilence;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'reset';
        var1['key'] = var5;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.stateChangeTimeout;
                var1 = var3.stop;
                var1 = var1.bind(var3)();
                var3 = var2.inputDetected;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var3 = var2.handleSilence;
                var1 = var2.inputDetected;
                var1 = !var1;
                var1 = var3.bind(var2)(var1);
case 32:
                var1 = undefined;
                var2['inputDetected'] = var1;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/InputWatcher.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();