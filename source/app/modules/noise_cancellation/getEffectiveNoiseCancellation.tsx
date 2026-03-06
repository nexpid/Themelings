// app/modules/noise_cancellation/getEffectiveNoiseCancellation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7['value'] = var6;
    var6 = '__esModule';
    var6 = var8.bind(var9)(var3, var6, var7);
    var7 = var1.Set;
    var1 = var7.prototype;
    var6 = Object.create(var1, {constructor: {value: var7}});
    var12 = ['voice_isolation', 'wide_spectrum'];
    var13 = var6;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot2 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/noise_cancellation/getEffectiveNoiseCancellation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getEffectiveNoiseCancellation(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var9 = 0;
            var1 = var1[var9];
            var8 = undefined;
            var4 = var4.bind(var8)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var4 = var4.bind(var8)(var1);
            var1 = var4.isMac;
            var1 = var1.bind(var4)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var3;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = null;
            var4 = var4 == var5;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = '';
            var4 = var6 === var5;
case 7:
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var9];
            var7 = var7.bind(var8)(var6);
            var6 = var7.isWindows;
            var6 = var6.bind(var7)();
            var4 = !var6;
case 9:
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = 'deep_noise_suppression';
            var4 = var5 !== var6;
case 11:
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 1;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.getWindowsAudioEffectsExperimentConfig;
            var6 = {};
            var9 = 'setNoiseCancellation';
            var6['location'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var6.preferSystemEffects;
            var4 = !var6;
case 13:
            if(!var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var3;
case 15:
            var1 = var4;
case 5:
            _fun0001_ip = 17; continue _fun0001;
case 2:
            var4 = _closure1_slot2;
            var2 = var4.has;
            var2 = var2.bind(var4)(var5);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var3;
case 18:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 'deep_noise_suppression';
    var3['WINDOWS_NOISE_SUPPRESSION_EFFECT'] = var2;
    return var1;
})();