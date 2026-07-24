// app/modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-07-vibegrations-guild', 'kind': 'guild'};
    var9 = {};
    var12 = false;
    var9['enabled'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsVibegrationsGuildEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.location;
            var3 = _closure1_slot1;
            var2 = var3.useConfig;
            var1 = {};
            var7 = null;
            if(!(var7 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
case 2:
            var1['guildId'] = var5;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useIsVibegrationsGuildEnabled'] = var4;
    var2 = function isVibegrationsGuildEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.location;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var2 = {};
            var2['guildId'] = var6;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var3['isVibegrationsGuildEnabled'] = var2;
    return var1;
})();