// app/modules/premium/powerups/experiments/GuildTagBadgePacksExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
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
    var4 = {'kind': 'guild', 'id': '2025-07_guild_tag_badge_packs_wave_1', 'label': 'Guild Tag Badge Packs Wave 1'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enable Guild Tag Badge Packs Wave 1'};
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
    var5 = 'modules/premium/powerups/experiments/GuildTagBadgePacksExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildTagBadgePacksExperiment'] = var4;
    var2 = function useGuildTagBadgePacksExperimentEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = arguments[2];
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var5 = false;
 14:
            var2 = null;
            var6 = var2 != var1;
            if(!var6) { _fun0001_ip = 34; continue _fun0001 }
 23:
            var2 = _closure1_slot1;
            var6 = var1 !== var2;
 34:
            if(!var6) { _fun0001_ip = 48; continue _fun0001 }
 37:
            var2 = _closure1_slot0;
            var6 = var1 !== var2;
 48:
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
    var3['useGuildTagBadgePacksExperimentEnabled'] = var2;
    return var1;
})();