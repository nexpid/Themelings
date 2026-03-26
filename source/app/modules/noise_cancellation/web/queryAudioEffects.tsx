// app/modules/noise_cancellation/web/queryAudioEffects.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _queryAudioEffects() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = arg1;
                    var10 = arg2;
                    var5 = arg3;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
                    var6 = var6[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.isWindows;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = global;
                    var8 = var6.Promise;
                    var7 = var8.reject;
                    var11 = var6.Error;
                    var6 = var11.prototype;
                    var9 = Object.create(var6, {constructor: {value: var11}});
                    var13 = 'Audio effects querying not supported on non-Windows platforms';
                    var14 = var9;
                    var6 = new var14[var11](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var9;
                    var6 = var7.bind(var8)(var6);
                    return var6;
case 4: // try_start_0
                    var6 = var5;
                    var5 = var6.getDeviceAudioEffects;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=129);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var9 = var6.bind(var2)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var11 = 'MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS';
                    var5['type'] = var11;
                    var5['deviceId'] = var10;
                    var13 = var5;
                    var12 = var4;
                    var10 = copyDataProperties(var13, var12);
                    var5 = var8.bind(var9)(var5);
                    var5 = 5;
                    var5 = var7[var5];
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot4;
                    var6 = var5.AUDIO_EFFECTS_PROBE_COMPLETED;
                    var5 = {};
                    var9 = true;
                    var5['succeeded'] = var9;
                    var9 = var4.active;
                    var5['active_effects'] = var9;
                    var9 = var4.available;
                    var5['available_effects'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
case 10: // try_end0
                    return var4;
case 8:
                    return var4;
case 11: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot5;
                    var5 = var6.error;
                    var4 = 'Failed to probe audio effects for device';
                    var4 = var5.bind(var6)(var4, var7);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot4;
                    var4 = var3.AUDIO_EFFECTS_PROBE_COMPLETED;
                    var3 = {};
                    var7 = false;
                    var3['succeeded'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'AudioEffects';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/noise_cancellation/web/queryAudioEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function queryAudioEffects() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();