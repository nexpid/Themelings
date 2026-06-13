// app/modules/guild_themes/GuildThemeAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/GuildThemeAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function collectGuildThemeAnalyticsMetadata(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = var3.getGuild;
            var2 = var2.bind(var3)(var4);
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.guildTheme;
            if(!(var1 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4.enabled;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = {};
            var3 = true;
            var2['guild_theme_enabled'] = var3;
            var6 = var4.themeSettings;
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var6.customUserThemeSettings;
case 9:
            var5 = var1 != var5;
            var2['guild_theme_is_custom'] = var5;
            var4 = var4.themeSettings;
            var5 = var1 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var4.presetId;
case 11:
            if(!(var1 != var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2['guild_theme_preset_id'] = var3;
case 13:
            return var2;
case 6:
            var2 = {'guild_theme_enabled': false, 'guild_theme_is_custom': false};
            return var2;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['collectGuildThemeAnalyticsMetadata'] = var2;
    return var1;
})();