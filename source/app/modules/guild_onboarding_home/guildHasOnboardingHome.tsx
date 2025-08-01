// app/modules/guild_onboarding_home/guildHasOnboardingHome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot0 = var7;
    var7 = var4.FAVORITES;
    var _closure1_slot1 = var7;
    var4 = var4.ME;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/guildHasOnboardingHome.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function guildHasOnboardingHome(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
 12:
            var4 = var2.id;
            var3 = _closure1_slot2;
            var1 = var4 === var3;
 28:
            if(var1) { _fun0001_ip = 47; continue _fun0001 }
 31:
            var4 = var2.id;
            var3 = _closure1_slot1;
            var1 = var4 === var3;
 47:
            if(var1) { _fun0001_ip = 82; continue _fun0001 }
 50:
            var5 = var2.features;
            var4 = var5.has;
            var3 = _closure1_slot0;
            var3 = var3.COMMUNITY;
            var3 = var4.bind(var5)(var3);
            var1 = !var3;
 82:
            if(var1) { _fun0001_ip = 117; continue _fun0001 }
 85:
            var5 = var2.features;
            var4 = var5.has;
            var3 = _closure1_slot0;
            var3 = var3.GUILD_SERVER_GUIDE;
            var3 = var4.bind(var5)(var3);
            var1 = !var3;
 117:
            if(var1) { _fun0001_ip = 152; continue _fun0001 }
 120:
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot0;
            var2 = var2.GUILD_ONBOARDING;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 152:
            var1 = !var1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();