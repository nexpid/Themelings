// app/modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot3 = var5;
    var4 = var4.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = function useUserSafetySettingsSelectedGuildId() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.selectedGuildId;
        return var1;
    };
    var _closure1_slot6 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useUserSafetySettingsSelectedGuildId'] = var4;
    var4 = function() {
        var3 = _closure1_slot4;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var2 = var2.selectedGuildId;
        var1 = _closure1_slot3;
        var1 = var2 === var1;
        return var1;
    };
    var3['useAllServersOptionSelected'] = var4;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot6;
            var2 = undefined;
            var4 = var4.bind(var2)();
            var _closure2_slot0 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 3;
            var4 = var6[var4];
            var6 = var5.bind(var2)(var4);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4, var1);
            var1 = null;
            var5 = var1 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var4.features;
            var4 = var5.has;
            var3 = _closure1_slot5;
            var3 = var3.HUB;
            var2 = var4.bind(var5)(var3);
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useIsSelectedGuildAHub'] = var2;
    return var1;
})();