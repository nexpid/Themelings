// app/modules/soundpacks/CameraToggleSoundExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-07_camera_toggle_sound', 'label': 'Camera Toggle Sound'};
    var5 = {'enabled': false, 'inExperiment': false};
    var4['defaultConfig'] = var5;
    var5 = {'id': 0, 'label': 'Sound does not play when camera is toggled'};
    var10 = {'enabled': false, 'inExperiment': true};
    var5['config'] = var10;
    var10 = new Array(2);
    var10[0] = var5;
    var11 = {'id': 1, 'label': 'Sound plays when camera is toggled'};
    var5 = 1;
    var12 = {'enabled': true, 'inExperiment': true};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createApexExperiment;
    var5 = {'name': '2025-07-camera-toggle-sound', 'kind': 'user'};
    var10 = {'enabled': false, 'inExperiment': false};
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {'enabled': false, 'inExperiment': true};
    var10[0] = var11;
    var11 = {'enabled': true, 'inExperiment': true};
    var10[1] = var11;
    var5['variations'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundpacks/CameraToggleSoundExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function isCameraToggleSoundEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var5 = 'soundpacks';
            var3['location'] = var5;
            var1 = {};
            var7 = true;
            var1['autoTrackExposure'] = var7;
            var3 = var4.bind(var6)(var3, var1);
            var1 = var3.enabled;
            var3 = var3.inExperiment;
            if(var3) { _fun0001_ip = 80; continue _fun0001 }
 54:
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
 80:
            return var1;
        }
    };
    var3['isCameraToggleSoundEnabled'] = var2;
    return var1;
})();