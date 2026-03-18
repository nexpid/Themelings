// app/modules/premium/powerups/experiments/VanityURLPerkExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function eligibleForGuildExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isFavoritesGuildId;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
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
    var4 = {'kind': 'guild', 'id': '2025-06_vanity_url_perk', 'label': 'Vanity URL Standalone Perk'};
    var5 = {'enabled': false, 'rollbackEnabled': false};
    var4['defaultConfig'] = var5;
    var5 = {'id': 1, 'label': 'Enable ability to purchase Vanity URL Standalone Perk'};
    var10 = {'enabled': true, 'rollbackEnabled': false};
    var5['config'] = var10;
    var10 = new Array(2);
    var10[0] = var5;
    var11 = {'id': 2, 'label': 'Rollback UI for Vanity URL Standalone Perk'};
    var5 = 2;
    var12 = {'enabled': true, 'rollbackEnabled': true};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/experiments/VanityURLPerkExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VanityURLPerkExperiment'] = var4;
    var4 = function useVanityURLPerkExperimentEnabled(arg1, arg2) {
        var1 = arg1;
        var4 = _closure1_slot3;
        var3 = undefined;
        var5 = var4.bind(var3)(var1);
        var4 = _closure1_slot2;
        var3 = var4.useExperiment;
        var2 = {};
        var2['guildId'] = var1;
        var1 = arg2;
        var2['location'] = var1;
        var1 = {};
        var5 = !var5;
        var1['disable'] = var5;
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useVanityURLPerkExperimentEnabled'] = var4;
    var4 = function useVanityURLPerkPurchaseEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot3;
            var3 = undefined;
            var5 = var4.bind(var3)(var1);
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['guildId'] = var1;
            var1 = arg2;
            var2['location'] = var1;
            var1 = {};
            var5 = !var5;
            var1['disable'] = var5;
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.enabled;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var2.rollbackEnabled;
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var3['useVanityURLPerkPurchaseEnabled'] = var4;
    var4 = function useVanityURLPerkRollbackEnabled(arg1, arg2) {
        var1 = arg1;
        var4 = _closure1_slot3;
        var3 = undefined;
        var5 = var4.bind(var3)(var1);
        var4 = _closure1_slot2;
        var3 = var4.useExperiment;
        var2 = {};
        var2['guildId'] = var1;
        var1 = arg2;
        var2['location'] = var1;
        var1 = {};
        var5 = !var5;
        var1['disable'] = var5;
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.rollbackEnabled;
        return var1;
    };
    var3['useVanityURLPerkRollbackEnabled'] = var4;
    var4 = function getVanityURLPerkRollbackEnabled(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot3;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var5 = _closure1_slot2;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['guildId'] = var2;
            var2 = arg2;
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.rollbackEnabled;
case 6:
            return var1;
        }
    };
    var3['getVanityURLPerkRollbackEnabled'] = var4;
    var2 = function getVanityURLPerkExperimentEnabled(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot3;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0004_ip = 8; continue _fun0004 }
case 7:
            var5 = _closure1_slot2;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['guildId'] = var2;
            var2 = arg2;
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
case 8:
            return var1;
        }
    };
    var3['getVanityURLPerkExperimentEnabled'] = var2;
    return var1;
})();