// app/modules/media_engine/AudioNackExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-01_audio_nack', 'label': 'Audio NACK'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enable NACK for audio'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/AudioNackExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAudioNackExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = arguments[1];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var5 = true;
 14:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.AVHoldoutExperimentH12025;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var5;
            var3 = var6.bind(var7)(var4, var3);
            var6 = var3.isInHoldout;
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['disable'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getAudioNackExperimentConfig'] = var2;
    return var1;
})();