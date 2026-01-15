// app/modules/noise_cancellation/getEffectiveNoiseCancellation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/noise_cancellation/getEffectiveNoiseCancellation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getEffectiveNoiseCancellation(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var2 = arg3;
            var6 = var2.location;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var10 = 0;
            var3 = var3[var10];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var10];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isMac;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var1;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = null;
            var4 = var4 == var7;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = '';
            var4 = var8 === var7;
case 7:
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var10];
            var9 = var9.bind(var5)(var8);
            var8 = var9.isWindows;
            var8 = var8.bind(var9)();
            var4 = !var8;
case 9:
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = 'deep_noise_suppression';
            var4 = var7 !== var8;
case 11:
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var8 = 2;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.getWindowsAudioEffectsExperimentConfig;
            var8 = {};
            var11 = 'setNoiseCancellation';
            var8['location'] = var11;
            var8 = var9.bind(var10)(var8);
            var8 = var8.preferSystemEffects;
            var4 = !var8;
case 13:
            if(!var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var1;
case 15:
            var3 = var4;
case 5:
            return var3;
case 2:
            var3 = null;
            var8 = var3 != var7;
            var3 = '';
            var4 = var3;
            if(!var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var7;
case 17:
            if(!(var3 !== var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = 'standard';
            if(!(var3 !== var4)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var5 = var2.DisableKrispWithAppleMicrophoneModesExperiment;
            var3 = var5.getConfig;
            var2 = {};
            var2['location'] = var6;
            var2 = var3.bind(var5)(var2);
            var3 = var2.disabledModes;
            var2 = var3.includes;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0001_ip = 22; continue _fun0001 }
case 19:
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 'deep_noise_suppression';
    var3['WINDOWS_NOISE_SUPPRESSION_EFFECT'] = var2;
    return var1;
})();