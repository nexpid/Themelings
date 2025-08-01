// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingGuildSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var9 = true;
    var2['value'] = var9;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.useSelectedSearchResult;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.getSelectedGuildId;
    var _closure1_slot5 = var8;
    var8 = var2.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = var8;
    var8 = var2.setSelectedGuildId;
    var _closure1_slot7 = var8;
    var2 = var2.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot8 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.RendererType;
    var4 = var8.GUILD_SETTING_ACTIVITY_STATUS;
    var2 = new Array(2);
    var2[0] = var4;
    var4 = var8.GUILD_SETTING_ACTIVITY_JOINING;
    var2[1] = var4;
    var _closure1_slot10 = var2;
    var4 = {};
    var10 = var10.GUILD_SELECTOR;
    var4['type'] = var10;
    var4['unsearchable'] = var9;
    var9 = function useSelectedGuildId() {
        var4 = _closure1_slot4;
        var2 = undefined;
        var7 = var4.bind(var2)();
        var _closure2_slot0 = var7;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot9;
                var2 = var3.getFlattenedGuildIds;
                var3 = var2.bind(var3)();
                var2 = 0;
                var3 = var3[var2];
                var5 = _closure1_slot10;
                var4 = var5.includes;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0001_ip = 53; continue _fun0001 }
 47:
                var4 = null;
                var2 = var4 != var3;
 53:
                if(!var2) { _fun0001_ip = 74; continue _fun0001 }
 56:
                var5 = _closure1_slot5;
                var4 = undefined;
                var5 = var5.bind(var4)();
                var4 = _closure1_slot6;
                var2 = var5 === var4;
 74:
                if(!var2) { _fun0001_ip = 88; continue _fun0001 }
 77:
                var2 = _closure1_slot7;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 88:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var1 = _closure1_slot8;
        var1 = var1.bind(var2)();
        var1 = var1.selectedGuildId;
        return var1;
    };
    var4['useSelectedGuildId'] = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var4['parent'] = var8;
    var5 = function onGuildSelectPress() {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var4 = var2[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 8;
        var3 = var2[var3];
        var6 = var6.bind(var1)(var3);
        var3 = 7;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var1)(var3, var2);
        var2 = 'SettingsPrivacyAndSafetyGuildSelectActionSheet';
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var4['onPress'] = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingGuildSelect.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GUILD_SPECIFIC_SETTINGS'] = var2;
    return var1;
})();