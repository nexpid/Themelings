// app/modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['guildIdentity'] = var4;
    var10 = {};
    var4 = 16;
    var10['marginRight'] = var4;
    var7['iconContainer'] = var10;
    var10 = {};
    var10['marginRight'] = var11;
    var7['avatar'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.selectedGuild;
            var3 = var1.onSelectGuild;
            var _closure2_slot0 = var3;
            var1 = var1.user;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot10;
            var11 = var3.bind(var4)();
            var _closure2_slot2 = var11;
            var12 = _closure1_slot4;
            var6 = var12.useState;
            var3 = '';
            var3 = var6.bind(var12)(var3);
            var9 = _closure1_slot3;
            var8 = 2;
            var6 = var9.bind(var4)(var3, var8);
            var3 = 0;
            var13 = var6[var3];
            var _closure2_slot3 = var13;
            var7 = 1;
            var6 = var6[var7];
            var10 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 7;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.SelectOptionType;
            var14 = var14.GUILD;
            var10['type'] = var14;
            var14 = var2.id;
            var10['value'] = var14;
            var14 = var2.name;
            var10['label'] = var14;
            var10['guild'] = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var10);
            var2 = var9.bind(var4)(var2, var8);
            var3 = var2[var3];
            var _closure2_slot4 = var3;
            var2 = var2[var7];
            var _closure2_slot5 = var2;
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = new Array(1);
            var2[0] = var3;
            var8 = var2;
case 4:
            var10 = {'maxValues': 1, 'minValues': 1};
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 8;
            var3 = var12[var2];
            var3 = var9.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var12[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.ZImm//;
            var2 = var3.bind(var7)(var2);
            var10['placeholder'] = var2;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var3 = function(arg1) {
                var3 = function queryGuilds(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var2 = function guildRecordToGuildSearchableSelectOption(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 7;
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
                        var3 = var5.length;
                        var2 = 0;
                        if(!(var2 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.queryGuilds;
                        var2 = {};
                        var2['query'] = var5;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var3 = var1.record;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var2;
case 5:
                        var3 = _closure1_slot7;
                        var2 = var3.getFlattenedGuildIds;
                        var4 = var2.bind(var3)();
                        var3 = var4.reduce;
                        var2 = global;
                        var2 = var2.Array;
                        var5 = var2.prototype;
                        var5 = Object.create(var5, {constructor: {value: var2}});
                        var8 = var5;
                        var2 = new var8[var2](var7);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var1 = function(arg1, arg2) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var1 = arg1;
                                var4 = _closure1_slot6;
                                var3 = var4.getGuild;
                                var2 = arg2;
                                var5 = var3.bind(var4)(var2);
                                var2 = null;
                                if(!(var2 != var5)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                                var3 = var1.push;
                                var4 = _closure4_slot0;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var5);
                                var2 = var3.bind(var1)(var2);
case 7:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var9)(var3, var2);
            _closure2_slot6 = var2;
            var7 = var9.useMemo;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = _closure2_slot3;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var7.bind(var9)(var2, var3);
            var7 = function submitSelection() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                return var1;
            };
            _closure2_slot7 = var7;
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = function onPressOptionItem(arg1, arg2) {
                var4 = arg2;
                var5 = _closure2_slot0;
                var3 = var4.guild;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = _closure2_slot5;
                var3 = var3.bind(var1)(var4);
                var2 = _closure2_slot7;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPressOptionItem'] = var12;
            var12 = function onRemoveOptionItem() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onRemoveOptionItem'] = var12;
            var12 = function renderIcon(arg1) {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = arg1;
                var5 = var5.guild;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['renderIcon'] = var12;
            var12 = function renderHeaderIcon(arg1) {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 11;
                var1 = var7[var5];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure1_slot0;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.GuildIconSizes;
                var5 = var5.XSMALL;
                var1['size'] = var5;
                var5 = arg1;
                var5 = var5.guild;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['renderHeaderIcon'] = var12;
            var11 = var11.iconContainer;
            var1['iconContainerStyle'] = var11;
            var11 = function renderDescription(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var12 = arg1;
                    var7 = _closure2_slot1;
                    var2 = var7.hasAvatarForGuild;
                    var1 = var12.guild;
                    var1 = var1.id;
                    var5 = var2.bind(var7)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.getNickname;
                    var1 = var12.guild;
                    var1 = var1.id;
                    var9 = var2.bind(var3)(var1, var4, var7);
                    if(var5) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var1 = null;
                    if(!(var1 == var9)) { _fun0004_ip = 9; continue _fun0004 }
case 11:
                    return var4;
case 9:
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var7 = _closure2_slot2;
                    var7 = var7.guildIdentity;
                    var1['style'] = var7;
                    var7 = var5;
                    if(!var7) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var11 = _closure1_slot8;
                    var8 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 13;
                    var5 = var15[var13];
                    var8 = var8.bind(var4)(var5);
                    var5 = {};
                    var14 = _closure1_slot0;
                    var13 = var15[var13];
                    var13 = var14.bind(var4)(var13);
                    var13 = var13.AvatarSizes;
                    var13 = var13.SIZE_16;
                    var5['size'] = var13;
                    var13 = _closure2_slot2;
                    var13 = var13.avatar;
                    var5['style'] = var13;
                    var13 = _closure2_slot1;
                    var5['user'] = var13;
                    var12 = var12.guild;
                    var12 = var12.id;
                    var5['guildId'] = var12;
                    var12 = true;
                    var5['animate'] = var12;
                    var7 = var11.bind(var4)(var8, var5);
case 12:
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 14;
                    var6 = var11[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var11 = null;
                    if(!(var11 == var9)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var10 = _closure2_slot1;
                    var9 = var10.username;
case 14:
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1['renderDescription'] = var11;
            var1['selectionActionComponent'] = var10;
            var1['options'] = var9;
            var9 = var8.length;
            var1['selectedCount'] = var9;
            var1['selectedOptions'] = var8;
            var8 = function isSelected(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.value;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure2_slot4;
                    var1 = var3.value;
case 16:
                    var1 = var2 === var1;
                    return var1;
                }
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