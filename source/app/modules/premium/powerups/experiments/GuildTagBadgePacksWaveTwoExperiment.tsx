// app/modules/premium/powerups/experiments/GuildTagBadgePacksWaveTwoExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function eligibleForGuildExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot1;
            var1 = var3 !== var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var1 = var3 !== var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
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
    var4 = var4.FAVORITES;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'guild', 'id': '2026-01_guild_tag_badge_packs_wave_2', 'label': 'Guild Tag Badge Packs Wave 2'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enable Guild Tag Badge Packs Wave 2'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/experiments/GuildTagBadgePacksWaveTwoExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildTagBadgePacksWaveTwoExperiment'] = var4;
    var4 = function useGuildTagBadgePacksWaveTwoExperimentEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 3:
            var5 = false;
case 6:
            var3 = _closure1_slot3;
            var6 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['guildId'] = var1;
            var1 = arg2;
            var2['location'] = var1;
            var1 = {};
            var6 = !var6;
            var1['disable'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useGuildTagBadgePacksWaveTwoExperimentEnabled'] = var4;
    var2 = function getGuildTagBadgePacksWaveTwoExperimentEnabled(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot3;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0003_ip = 7; continue _fun0003 }
case 5:
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
case 7:
            return var1;
        }
    };
    var3['getGuildTagBadgePacksWaveTwoExperimentEnabled'] = var2;
    return var1;
})();