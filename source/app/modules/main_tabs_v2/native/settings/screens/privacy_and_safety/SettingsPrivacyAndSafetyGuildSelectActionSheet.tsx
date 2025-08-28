// app/modules/main_tabs_v2/native/settings/screens/privacy_and_safety/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot5 = var7;
    var7 = var4.setSelectedGuildId;
    var _closure1_slot6 = var7;
    var4 = var4.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['marginRight'] = var10;
    var4['iconContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = function getAllServersSearchableSelectOption() {
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 8;
        var3 = var8[var3];
        var6 = undefined;
        var3 = var7.bind(var6)(var3);
        var3 = var3.SelectOptionType;
        var3 = var3.GUILD;
        var1['type'] = var3;
        var3 = 9;
        var3 = var8[var3];
        var9 = var7.bind(var6)(var3);
        var5 = var9.dangerouslyConstructGuildRecordFromUntypedObject;
        var4 = {};
        var2 = _closure1_slot5;
        var4['id'] = var2;
        var3 = 10;
        var10 = var8[var3];
        var10 = var7.bind(var6)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var8[var3];
        var10 = var7.bind(var6)(var10);
        var10 = var10.t;
        var10 = var10.32u1Dw;
        var10 = var11.bind(var12)(var10);
        var4['name'] = var10;
        var4 = var5.bind(var9)(var4);
        var1['guild'] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.32u1Dw;
        var3 = var4.bind(var5)(var3);
        var1['label'] = var3;
        var1['value'] = var2;
        return var1;
    };
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/privacy_and_safety/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot11;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var2 = '';
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var2 = var3.bind(var4)(var6, var2);
            var3 = 0;
            var14 = var2[var3];
            var _closure2_slot1 = var14;
            var8 = 1;
            var6 = var2[var8];
            var2 = _closure1_slot7;
            var2 = var2.bind(var4)();
            var7 = var2.selectedGuildId;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var3, var2);
            var3 = _closure1_slot5;
            if(!(var7 !== var3)) { _fun0001_ip = 207; continue _fun0001 }
 139:
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 207; continue _fun0001 }
 145:
            var9 = {};
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 8;
            var3 = var10[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.SelectOptionType;
            var3 = var3.GUILD;
            var9['type'] = var3;
            var9['guild'] = var2;
            var3 = var2.name;
            var9['label'] = var3;
            var2 = var2.id;
            var9['value'] = var2;
            _fun0001_ip = 215; continue _fun0001;
 207:
            var2 = _closure1_slot12;
            var9 = var2.bind(var4)();
 215:
            var _closure2_slot2 = var9;
            var11 = {'maxValues': 1, 'minValues': 1};
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var3 = var13[var2];
            var3 = var10.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var13[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.ZImm//;
            var2 = var3.bind(var7)(var2);
            var11['placeholder'] = var2;
            var10 = _closure1_slot4;
            var7 = var10.useCallback;
            var3 = function(arg1) {
                var3 = function queryGuilds(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var7 = arg1;
                        var2 = function guildRecordToGuildSearchableSelectOption(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 8;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = var3.SelectOptionType;
                            var3 = var3.GUILD;
                            var1['type'] = var3;
                            var3 = var2.id;
                            var1['value'] = var3;
                            var3 = var2.name;
                            var1['label'] = var3;
                            var1['guild'] = var2;
                            return var1;
                        };
                        var _closure4_slot0 = var2;
                        var3 = _closure1_slot12;
                        var6 = undefined;
                        var3 = var3.bind(var6)();
                        var4 = new Array(1);
                        var4[0] = var3;
                        var5 = var7.length;
                        var3 = 0;
                        if(!(var3 !== var5)) { _fun0002_ip = 105; continue _fun0002 }
 48:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 16;
                        var3 = var8[var3];
                        var6 = var5.bind(var6)(var3);
                        var5 = var6.queryGuilds;
                        var3 = {};
                        var3['query'] = var7;
                        var6 = var5.bind(var6)(var3);
                        var5 = var6.map;
                        var3 = function(arg1) {
                            var1 = arg1;
                            var3 = var1.record;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        };
                        var3 = var5.bind(var6)(var3);
                        return var3;
 105:
                        var3 = _closure1_slot9;
                        var2 = var3.getFlattenedGuildIds;
                        var3 = var2.bind(var3)();
                        var2 = var3.reduce;
                        var1 = function(arg1, arg2) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = arg1;
                                var4 = _closure1_slot8;
                                var3 = var4.getGuild;
                                var2 = arg2;
                                var5 = var3.bind(var4)(var2);
                                var2 = null;
                                if(!(var2 != var5)) { _fun0003_ip = 53; continue _fun0003 }
 29:
                                var3 = var1.push;
                                var4 = _closure4_slot0;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var5);
                                var2 = var3.bind(var1)(var2);
 53:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var10)(var3, var2);
            var _closure2_slot3 = var2;
            var7 = var10.useMemo;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot3;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = var7.bind(var10)(var2, var3);
            var7 = function submitSelection() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                return var1;
            };
            var _closure2_slot4 = var7;
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = function onPressOptionItem(arg1, arg2) {
                var3 = _closure1_slot6;
                var1 = arg2;
                var1 = var1.guild;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPressOptionItem'] = var13;
            var13 = function renderHeaderIcon(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var3 = var7.value;
                    var1 = _closure1_slot5;
                    if(!(var3 !== var1)) { _fun0004_ip = 93; continue _fun0004 }
 19:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 15;
                    var1 = var8[var6];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var7 = var7.guild;
                    var1['guild'] = var7;
                    var7 = _closure1_slot0;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.GuildIconSizes;
                    var6 = var6.XSMALL;
                    var1['size'] = var6;
                    var1 = var5.bind(var4)(var3, var1);
                    _fun0004_ip = 141; continue _fun0004;
 93:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.GuildSelectDefaultIcon;
                    var2 = {};
                    var6 = 'xs';
                    var2['size'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 141:
                    return var1;
                }
            };
            var1['renderHeaderIcon'] = var13;
            var13 = function renderIcon(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var7 = arg1;
                    var3 = var7.value;
                    var1 = _closure1_slot5;
                    if(!(var3 !== var1)) { _fun0005_ip = 93; continue _fun0005 }
 19:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 15;
                    var1 = var8[var6];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var7 = var7.guild;
                    var1['guild'] = var7;
                    var7 = _closure1_slot0;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.GuildIconSizes;
                    var6 = var6.SMALL_32;
                    var1['size'] = var6;
                    var1 = var5.bind(var4)(var3, var1);
                    _fun0005_ip = 133; continue _fun0005;
 93:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.GuildSelectDefaultIcon;
                    var2 = {};
                    var1 = var5.bind(var4)(var3, var2);
 133:
                    return var1;
                }
            };
            var1['renderIcon'] = var13;
            var12 = var12.iconContainer;
            var1['iconContainerStyle'] = var12;
            var1['selectionActionComponent'] = var11;
            var1['options'] = var10;
            var1['selectedCount'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var1['selectedOptions'] = var8;
            var8 = function isSelected(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot2;
                var1 = var1.value;
                var1 = var2 === var1;
                return var1;
            };
            var1['isSelected'] = var8;
            var1['submitSelection'] = var7;
            var1['onQueryChange'] = var6;
            var5 = function itemAccessibilityLabel(arg1) {
                var1 = arg1;
                var1 = var1.label;
                return var1;
            };
            var1['itemAccessibilityLabel'] = var5;
            var5 = true;
            var1['expanded'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();