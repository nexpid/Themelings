// app/modules/soundboard/getVolumeForSound.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/getVolumeForSound.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getVolumeForSound(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var1 = var2.bind(var6)(var1);
            var2 = var1.SoundboardSettings;
            var1 = var2.getSetting;
            var3 = var1.bind(var2)();
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.volume;
case 4:
            var3 = var1 != var2;
            var1 = 100;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            var5 = var1;
case 2:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var4 = 1;
            var1 = var1[var4];
            var3 = var3.bind(var6)(var1);
            var1 = var3.amplitudeToPerceptual;
            var1 = var1.bind(var3)(var5);
            var7 = 100;
            var6 = var1 / var7;
            var1 = global;
            var5 = var1.Math;
            var3 = var5.min;
            var8 = _closure1_slot2;
            var2 = var8.getOutputVolume;
            var2 = var2.bind(var8)();
            var2 = var2 / var7;
            var5 = var3.bind(var5)(var2, var4);
            var3 = var1.Math;
            var2 = var3.min;
            var1 = arg1;
            var1 = var1 * var6;
            var1 = var1 * var5;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getPerceptualSoundboardVolume(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.amplitudeToPerceptual;
            var1 = null;
            var6 = var1 != var5;
            var2 = 100;
            var1 = var2;
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var5;
case 8:
            var1 = var3.bind(var4)(var1);
            var1 = var1 / var2;
            return var1;
        }
    };
    var3['getPerceptualSoundboardVolume'] = var2;
    return var1;
})();