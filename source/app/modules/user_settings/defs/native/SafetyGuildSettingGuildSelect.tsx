// app/modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var11 = true;
    var2['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.getSelectedGuildId;
    var _closure1_slot6 = var4;
    var4 = var2.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot7 = var4;
    var4 = var2.setSelectedGuildId;
    var _closure1_slot8 = var4;
    var2 = var2.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var4 = var10.GUILD_SETTING_ACTIVITY_STATUS;
    var2 = new Array(2);
    var2[0] = var4;
    var4 = var10.GUILD_SETTING_ACTIVITY_JOINING;
    var2[1] = var4;
    var _closure1_slot10 = var2;
    var4 = 8;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createGuildSelector;
    var4 = {};
    var4['unsearchable'] = var11;
    var11 = function useSelectedGuildId() {
        var5 = _closure1_slot5;
        var4 = var5.useField;
        var3 = 'selected';
        var6 = var4.bind(var5)(var3);
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getFlattenedGuildIds;
                var3 = var2.bind(var3)();
                var2 = 0;
                var3 = var3[var2];
                var5 = _closure1_slot10;
                var4 = var5.includes;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = null;
                var2 = var4 != var3;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure1_slot6;
                var4 = undefined;
                var5 = var5.bind(var4)();
                var4 = _closure1_slot7;
                var2 = var5 === var4;
case 4:
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = _closure1_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var2 = _closure1_slot9;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.selectedGuildId;
        return var1;
    };
    var4['useSelectedGuildId'] = var11;
    var10 = var10.CONTENT_AND_SOCIAL_DISCORD;
    var4['parent'] = var10;
    var9 = function onGuildSelectPress() {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var4 = var2[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 7;
        var3 = var2[var3];
        var6 = var6.bind(var1)(var3);
        var3 = 6;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var1)(var3, var2);
        var2 = 'SettingsPrivacyAndSafetyGuildSelectActionSheet';
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var4['onPress'] = var9;
    var4 = var5.bind(var8)(var4);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GUILD_SPECIFIC_SETTINGS'] = var2;
    return var1;
})();