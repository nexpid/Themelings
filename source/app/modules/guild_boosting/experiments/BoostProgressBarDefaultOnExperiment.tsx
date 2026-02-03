// app/modules/guild_boosting/experiments/BoostProgressBarDefaultOnExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function calculateIsBoostProgressBarEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.premiumProgressBarEnabledUserUpdatedAt;
            var3 = null;
            var1 = var3 == var4;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.premiumProgressBarEnabled;
case 4:
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'guild', 'id': '2026-01_boost_progress_bar_default_on', 'label': 'Boost Progress Bar Default On'};
    var5 = {};
    var10 = false;
    var5['enabled'] = var10;
    var4['defaultConfig'] = var5;
    var11 = {'id': 1, 'label': 'Progress bar default-on'};
    var5 = 1;
    var10 = {};
    var10['enabled'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_boosting/experiments/BoostProgressBarDefaultOnExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function getIsBoostProgressBarEnabled(arg1, arg2) {
        var4 = arg1;
        var3 = _closure1_slot1;
        var6 = _closure1_slot0;
        var5 = var6.getCurrentConfig;
        var2 = {};
        var1 = var4.id;
        var2['guildId'] = var1;
        var8 = arg2;
        var9 = var2;
        var1 = copyDataProperties(var9, var8);
        var1 = {};
        var7 = false;
        var1['autoTrackExposure'] = var7;
        var1 = var5.bind(var6)(var2, var1);
        var2 = var1.enabled;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['getIsBoostProgressBarEnabled'] = var4;
    var2 = function useIsBoostProgressBarEnabled(arg1, arg2) {
        var4 = arg1;
        var3 = _closure1_slot1;
        var5 = _closure1_slot0;
        var2 = var5.useExperiment;
        var1 = {};
        var8 = arg2;
        var9 = var1;
        var6 = copyDataProperties(var9, var8);
        var7 = var4.id;
        var6 = 'guildId';
        var1[var6] = var7;
        var1 = var2.bind(var5)(var1);
        var2 = var1.enabled;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['useIsBoostProgressBarEnabled'] = var2;
    return var1;
})();