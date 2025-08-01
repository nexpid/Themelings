// app/modules/user_settings/AudioSettingsUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProtoAudioSettingsContextTypes;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/AudioSettingsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function snapVolumeToDefault(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 1;
            var2 = var2[var4];
            var9 = undefined;
            var2 = var5.bind(var9)(var2);
            var2 = var2.MediaEngineContextTypes;
            var5 = var2.STREAM;
            var2 = arg2;
            if(!(var2 !== var5)) { _fun0001_ip = 81; continue _fun0001 }
 47:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var9)(var2);
            var2 = var2.AudioSettingsDefaultVolumes;
            var2 = var2.USER;
            _fun0001_ip = 113; continue _fun0001;
 81:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var9)(var5);
            var5 = var5.AudioSettingsDefaultVolumes;
            var2 = var5.STREAM;
 113:
            var5 = global;
            var6 = var5.Math;
            var5 = var6.abs;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 3;
            var7 = var10[var3];
            var11 = var8.bind(var9)(var7);
            var7 = var11.amplitudeToPerceptual;
            var7 = var7.bind(var11)(var2);
            var3 = var10[var3];
            var8 = var8.bind(var9)(var3);
            var3 = var8.amplitudeToPerceptual;
            var3 = var3.bind(var8)(var1);
            var3 = var7 - var3;
            var3 = var5.bind(var6)(var3);
            if(!(var3 < var4)) { _fun0001_ip = 194; continue _fun0001 }
 191:
            var1 = var2;
 194:
            return var1;
        }
    };
    var3['snapVolumeToDefault'] = var4;
    var2 = function coerceAudioContextForProto(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var3 = var2[var6];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var3 = var3.MediaEngineContextTypes;
            var3 = var3.DEFAULT;
            if(!(var3 !== var4)) { _fun0002_ip = 91; continue _fun0002 }
 44:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.MediaEngineContextTypes;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0002_ip = 79; continue _fun0002 }
 77:
            return var2;
 79:
            var2 = _closure1_slot2;
            var2 = var2.STREAM;
            return var2;
 91:
            var1 = _closure1_slot2;
            var1 = var1.USER;
            return var1;
        }
    };
    var3['coerceAudioContextForProto'] = var2;
    return var1;
})();