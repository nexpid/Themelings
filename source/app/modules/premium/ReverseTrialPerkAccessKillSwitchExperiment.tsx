// app/modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.PurchasedFlags;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-02_reverse_trial_perk_access_kill_switch', 'label': 'Reverse Trial Perk Access Kill Switch'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Prevent perk access for users with reverse trials'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0001_ip = 68; continue _fun0001 }
 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.hasFlag;
            var3 = var3.purchasedFlags;
            var1 = _closure1_slot2;
            var1 = var1.ON_REVERSE_TRIAL;
            var1 = var4.bind(var5)(var3, var1);
            var2 = !var1;
 68:
            var1 = !var2;
            if(var2) { _fun0001_ip = 116; continue _fun0001 }
 74:
            var5 = _closure1_slot3;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var2 = arg1;
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
 116:
            return var1;
        }
    };
    var3['preventReverseTrialPerkAccess'] = var2;
    return var1;
})();