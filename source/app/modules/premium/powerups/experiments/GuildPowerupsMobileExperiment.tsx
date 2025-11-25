// app/modules/premium/powerups/experiments/GuildPowerupsMobileExperiment.tsx
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
    var9 = var4.CommonTriggerPoints;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'guild', 'id': '2025-11_guild_powerups_mobile', 'commonTriggerPoint': null, 'label': 'Guild Powerups Mobile'};
    var9 = var9.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var9;
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enable Guild Powerups Mobile'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/experiments/GuildPowerupsMobileExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useGuildPowerupsMobileEnabledExperiment(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var1 = arg1;
            var2['guildId'] = var1;
            var1 = arg2;
            var2['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useGuildPowerupsMobileEnabledExperiment'] = var2;
    return var1;
})();