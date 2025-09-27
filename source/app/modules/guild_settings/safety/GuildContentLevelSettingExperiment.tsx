// app/modules/guild_settings/safety/GuildContentLevelSettingExperiment.tsx
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
    var4 = {'kind': 'guild', 'id': '2025-06_server_content_level_setting', 'label': 'Guild content level setting'};
    var10 = {};
    var12 = false;
    var10['enabled'] = var12;
    var4['defaultConfig'] = var10;
    var9 = var9.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var9;
    var10 = {'id': 1, 'label': 'Guild content level setting'};
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
    var5 = 'modules/guild_settings/safety/GuildContentLevelSettingExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildContentLevelSettingExperiment'] = var4;
    var4 = function isEligibleForGuildContentLevelSetting(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = var1.location;
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['guildId'] = var5;
            var2['location'] = var1;
            var1 = {};
            var5 = true;
            var1['autoTrackExposure'] = var5;
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 67; continue _fun0001 }
 62:
            var1 = var2.enabled;
 67:
            return var1;
        }
    };
    var3['isEligibleForGuildContentLevelSetting'] = var4;
    var2 = function useIsGuildContentLevelSettingEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = var1.location;
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['guildId'] = var5;
            var2['location'] = var1;
            var1 = {};
            var5 = true;
            var1['autoTrackExposure'] = var5;
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 67; continue _fun0002 }
 62:
            var1 = var2.enabled;
 67:
            return var1;
        }
    };
    var3['useIsGuildContentLevelSettingEnabled'] = var2;
    return var1;
})();