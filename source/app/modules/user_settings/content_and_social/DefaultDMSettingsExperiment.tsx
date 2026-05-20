// app/modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx
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
    var4 = 'modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var2 = var6.isFeatureAgeGated;
            var1 = 1;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.DM_PRIVACY_SETTINGS;
            var2 = var2.bind(var6)(var1);
            var1 = 2;
            var1 = var5[var1];
            var3 = var4.bind(var3)(var1);
            var1 = var3.shouldShowTiggerPawtect;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['shouldAgeVerifyForDMDefaultOff'] = var2;
    return var1;
})();