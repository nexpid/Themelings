// app/modules/guild_settings/GuildSettingsServerTagUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsServerTagUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canUseMobileServerTagSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.getGuild;
            var1 = arg1;
            var6 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
            var4 = var5.can;
            var3 = _closure1_slot4;
            var3 = var3.MANAGE_GUILD;
            var1 = var4.bind(var5)(var3, var6);
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getConfig;
            var2 = {};
            var5 = 'GuildSettingsServerTag';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var3['canUseMobileServerTagSettings'] = var4;
    var2 = function isServerTagDraftDirty(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2 != var3;
case 6:
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var4.tag;
            var2 = var3.tag;
            var2 = var5 !== var2;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var4.badge;
            var5 = var3.badge;
            var2 = var6 !== var5;
case 10:
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var4.badgeColorPrimary;
            var5 = var3.badgeColorPrimary;
            var2 = var6 !== var5;
case 12:
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = var4.badgeColorSecondary;
            var3 = var3.badgeColorSecondary;
            var2 = var4 !== var3;
case 14:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['isServerTagDraftDirty'] = var2;
    return var1;
})();