// app/components_native/channel_settings/ChannelSettingsPermissionsList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var13 = 1;
    var4 = var6[var13];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PermissionOverrideType;
    var _closure1_slot11 = var8;
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = new Array(0);
    var4['rows'] = var8;
    var8 = new Array(0);
    var4['sections'] = var8;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 10;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['paddingHorizontal'] = var14;
    var10['flex'] = var13;
    var4['container'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['paddingVertical'] = var11;
    var4['containerSearchBar'] = var10;
    var10 = {};
    var11 = 70;
    var10['marginLeft'] = var11;
    var4['userRowDivider'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function ChannelSettingsPermissionsList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var22 = var2.channelId;
            var _closure2_slot0 = var22;
            var18 = var2.type;
            var _closure2_slot1 = var18;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot16;
            var19 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 13;
            var2 = var8[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var7 = _closure1_slot5;
            var5 = var7.useState;
            var3 = '';
            var7 = var5.bind(var7)(var3);
            var5 = _closure1_slot4;
            var3 = 2;
            var9 = var5.bind(var4)(var7, var3);
            var7 = 0;
            var3 = var9[var7];
            var5 = 1;
            var12 = var9[var5];
            var9 = _closure1_slot1;
            var5 = 14;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var11 = var5.bottom;
            var5 = 11;
            var9 = var8[var5];
            var15 = var6.bind(var4)(var9);
            var14 = var15.useStateFromStores;
            var9 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var14.bind(var15)(var13, var9);
            var _closure2_slot3 = var13;
            var5 = var8[var5];
            var14 = var6.bind(var4)(var5);
            var9 = var14.useStateFromStoresObject;
            var5 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var5;
            var6 = new Array(1);
            var6[0] = var13;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 32; continue _fun0002 }
 18:
                    var5 = _closure2_slot3;
                    var2 = var5.getGuildId;
                    var1 = var2.bind(var5)();
 32:
                    var5 = var4 != var1;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 44; continue _fun0002 }
 41:
                    var2 = var1;
 44:
                    var1 = {};
                    var4 = var4 != var2;
                    var3 = undefined;
                    if(!var4) { _fun0002_ip = 73; continue _fun0002 }
 55:
                    var5 = _closure1_slot9;
                    var4 = var5.getSortedRoles;
                    var3 = var4.bind(var5)(var2);
 73:
                    var1['sortedGuildRoles'] = var3;
                    var1['guildId'] = var2;
                    return var1;
                }
            };
            var5 = var9.bind(var14)(var8, var5, var6);
            var20 = var5.guildId;
            var _closure2_slot4 = var20;
            var8 = var5.sortedGuildRoles;
            var6 = {};
            var5 = _closure1_slot11;
            var5 = var5.MEMBER;
            var5 = var18 === var5;
            var6['enabled'] = var5;
            var5 = null;
            var9 = var5 == var13;
            var5 = undefined;
            if(var9) { _fun0001_ip = 302; continue _fun0001 }
 296:
            var5 = var13.permissionOverwrites;
 302:
            var6['permissionOverwrites'] = var5;
            var6['guildId'] = var20;
            var6['searchQuery'] = var3;
            var5 = function useGuildMemberData(arg1) {
                var2 = arg1;
                var9 = var2.enabled;
                var _closure3_slot0 = var9;
                var6 = var2.permissionOverwrites;
                var _closure3_slot1 = var6;
                var8 = var2.guildId;
                var _closure3_slot2 = var8;
                var5 = var2.searchQuery;
                var _closure3_slot3 = var5;
                var7 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var10 = var7.bind(var3)(var4);
                var7 = var10.useStateFromStores;
                var3 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.getMemberVersion;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var7.bind(var10)(var4, var3);
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(5);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var2[4] = var5;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure3_slot0;
                        if(!var1) { _fun0003_ip = 277; continue _fun0003 }
 13:
                        var1 = _closure3_slot2;
                        var11 = null;
                        if(!(var11 != var1)) { _fun0003_ip = 277; continue _fun0003 }
 26:
                        var2 = new Array(0);
                        var3 = _closure1_slot8;
                        var1 = var3.getMutableAllGuildsAndMembers;
                        var3 = var1.bind(var3)();
                        var1 = _closure3_slot2;
                        var9 = var3[var1];
                        var4 = 12;
                        var3 = undefined;
                        var1 = 0;
                        for(var5 in var9)
 73:
                        {
 85:
                            var17 = var5;
                            var14 = _closure1_slot10;
                            var13 = var14.getUser;
                            var14 = var13.bind(var14)(var17);
                            var13 = var11 != var14;
                            if(!var13) { _fun0003_ip = 135; continue _fun0003 }
 110:
                            var15 = _closure3_slot1;
                            var16 = var11 == var15;
                            var15 = undefined;
                            if(var16) { _fun0003_ip = 131; continue _fun0003 }
 123:
                            var16 = _closure3_slot1;
                            var15 = var16[var17];
 131:
                            var13 = var11 == var15;
 135:
                            if(!var13) { _fun0003_ip = 209; continue _fun0003 }
 138:
                            var15 = _closure3_slot3;
                            var15 = var15.length;
                            var15 = var1 === var15;
                            if(var15) { _fun0003_ip = 206; continue _fun0003 }
 154:
                            var17 = _closure1_slot1;
                            var16 = _closure1_slot3;
                            var16 = var16[var4];
                            var18 = var17.bind(var3)(var16);
                            var17 = _closure3_slot3;
                            var16 = var17.toLowerCase;
                            var17 = var16.bind(var17)();
                            var19 = var14.username;
                            var16 = var19.toLowerCase;
                            var16 = var16.bind(var19)();
                            var15 = var18.bind(var3)(var17, var16);
 206:
                            var13 = var15;
 209:
                            if(!var13) { _fun0003_ip = 73; continue _fun0003 }
 215:
                            var13 = var2.push;
                            var13 = var13.bind(var2)(var14);
                            _fun0003_ip = 73; continue _fun0003;
                        }
 230:
                        var3 = var2.sort;
                        var1 = function(arg1, arg2) {
                            var1 = arg1;
                            var2 = var1.username;
                            var1 = var2.toLowerCase;
                            var3 = var1.bind(var2)();
                            var2 = var3.localeCompare;
                            var1 = arg2;
                            var4 = var1.username;
                            var1 = var4.toLowerCase;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
                        var1 = {};
                        var1['rows'] = var2;
                        var3 = var2.length;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1['sections'] = var2;
                        return var1;
 277:
                        var1 = _closure1_slot15;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5 = var5.bind(var4)(var6);
            var6 = var5.rows;
            _closure2_slot5 = var6;
            var15 = var5.sections;
            var5 = {};
            var9 = _closure1_slot11;
            var14 = var9.ROLE;
            var14 = var18 === var14;
            var5['enabled'] = var14;
            var5['channel'] = var13;
            var5['sortedGuildRoles'] = var8;
            var5['searchQuery'] = var3;
            var3 = function useGuildRoleData(arg1) {
                var2 = arg1;
                var8 = var2.enabled;
                var _closure3_slot0 = var8;
                var7 = var2.channel;
                var _closure3_slot1 = var7;
                var6 = var2.sortedGuildRoles;
                var _closure3_slot2 = var6;
                var5 = var2.searchQuery;
                var _closure3_slot3 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0004_ip = 78; continue _fun0004 }
 10:
                        var2 = _closure3_slot2;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 78; continue _fun0004 }
 20:
                        var2 = _closure3_slot1;
                        if(!(var3 != var2)) { _fun0004_ip = 78; continue _fun0004 }
 28:
                        var3 = _closure3_slot2;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var1 = _closure3_slot3;
                                var4 = var1.length;
                                var1 = 0;
                                var4 = var1 !== var4;
                                if(!var4) { _fun0005_ip = 87; continue _fun0005 }
 24:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var1 = 12;
                                var1 = var6[var1];
                                var7 = undefined;
                                var6 = var5.bind(var7)(var1);
                                var5 = _closure3_slot3;
                                var1 = var5.toLowerCase;
                                var5 = var1.bind(var5)();
                                var8 = var2.name;
                                var1 = var8.toLowerCase;
                                var1 = var1.bind(var8)();
                                var1 = var6.bind(var7)(var5, var1);
                                var4 = !var1;
 87:
                                var1 = !var4;
                                if(var4) { _fun0005_ip = 118; continue _fun0005 }
 93:
                                var3 = _closure3_slot1;
                                var3 = var3.permissionOverwrites;
                                var2 = var2.id;
                                var3 = var3[var2];
                                var2 = null;
                                var1 = var2 == var3;
 118:
                                return var1;
                            }
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1['rows'] = var2;
                        var3 = var2.length;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1['sections'] = var2;
                        return var1;
 78:
                        var1 = _closure1_slot15;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3 = var3.bind(var4)(var5);
            var8 = var3.rows;
            _closure2_slot6 = var8;
            var16 = var3.sections;
            var25 = _closure1_slot0;
            var21 = _closure1_slot3;
            var3 = 15;
            var3 = var21[var3];
            var5 = var25.bind(var4)(var3);
            var3 = var5.useScaledRowHeightData;
            var3 = var3.bind(var5)();
            var14 = var3.rowHeight;
            var13 = var3.rowContentHeight;
            _closure2_slot7 = var13;
            var5 = _closure1_slot5;
            var17 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var22;
            var3[1] = var2;
            var3[2] = var18;
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 140; continue _fun0006 }
 22:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 16;
                    var3 = var9[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.updatePermissionOverwrite;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var2['id'] = var7;
                    var7 = arg2;
                    var2['type'] = var7;
                    var7 = _closure1_slot2;
                    var6 = 17;
                    var10 = var9[var6];
                    var10 = var7.bind(var8)(var10);
                    var10 = var10.NONE;
                    var2['allow'] = var10;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NONE;
                    var2['deny'] = var6;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function() {
                        var4 = _closure2_slot2;
                        var3 = var4.push;
                        var1 = _closure1_slot12;
                        var2 = var1.PERMISSION_OVERRIDES;
                        var1 = {};
                        var5 = _closure2_slot1;
                        var1['type'] = var5;
                        var5 = _closure3_slot0;
                        var1['id'] = var5;
                        var5 = true;
                        var1['fromCreate'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 140:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var17.bind(var5)(var2, var3);
            _closure2_slot8 = var17;
            var3 = var5.useCallback;
            var2 = new Array(6);
            var2[0] = var20;
            var2[1] = var6;
            var2[2] = var8;
            var2[3] = var17;
            var2[4] = var18;
            var2[5] = var13;
            var1 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg2;
                    var1 = 0;
                    var6 = var1 === var4;
                    var5 = _closure2_slot1;
                    var1 = _closure1_slot11;
                    var1 = var1.ROLE;
                    if(!(var5 !== var1)) { _fun0007_ip = 46; continue _fun0007 }
 35:
                    var1 = _closure2_slot5;
                    var5 = var1.length;
                    _fun0007_ip = 55; continue _fun0007;
 46:
                    var1 = _closure2_slot6;
                    var5 = var1.length;
 55:
                    var1 = 1;
                    var1 = var5 - var1;
                    var8 = var4 === var1;
                    var5 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0007_ip = 352; continue _fun0007 }
 79:
                    var9 = _closure2_slot1;
                    var5 = _closure1_slot11;
                    var5 = var5.ROLE;
                    if(!(var5 !== var9)) { _fun0007_ip = 213; continue _fun0007 }
 97:
                    var5 = _closure1_slot11;
                    var5 = var5.MEMBER;
                    if(!(var5 !== var9)) { _fun0007_ip = 113; continue _fun0007 }
 111:
                    return var1;
 113:
                    var5 = _closure2_slot5;
                    var5 = var5[var4];
                    var12 = var5.id;
                    var _closure3_slot1 = var12;
                    var11 = _closure1_slot13;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 21;
                    var5 = var10[var5];
                    var10 = undefined;
                    var9 = var9.bind(var10)(var5);
                    var5 = {};
                    var13 = true;
                    var5['arrow'] = var13;
                    var13 = _closure2_slot7;
                    var5['contentHeight'] = var13;
                    var5['end'] = var8;
                    var13 = _closure2_slot4;
                    var5['guildId'] = var13;
                    var5['userId'] = var12;
                    var12 = function onPress() {
                        var4 = _closure2_slot8;
                        var3 = _closure3_slot1;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PermissionOverwriteType;
                        var2 = var2.MEMBER;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var5['onPress'] = var12;
                    var5['start'] = var6;
                    var5 = var11.bind(var10)(var9, var5);
                    return var5;
 213:
                    var3 = _closure2_slot6;
                    var10 = var3[var4];
                    var _closure3_slot0 = var10;
                    var5 = _closure1_slot13;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 18;
                    var2 = var11[var2];
                    var4 = undefined;
                    var2 = var9.bind(var4)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var12 = true;
                    var2['arrow'] = var12;
                    var2['end'] = var8;
                    var8 = 19;
                    var8 = var11[var8];
                    var8 = var9.bind(var4)(var8);
                    var9 = var8.RoleLabel;
                    var8 = {};
                    var11 = var10.name;
                    var8['name'] = var11;
                    var11 = var10.colorString;
                    var8['color'] = var11;
                    var10 = var10.colorStrings;
                    var8['colors'] = var10;
                    var8 = var5.bind(var4)(var9, var8);
                    var2['label'] = var8;
                    var7 = function onPress() {
                        var4 = _closure2_slot8;
                        var1 = _closure3_slot0;
                        var3 = var1.id;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PermissionOverwriteType;
                        var2 = var2.ROLE;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var7;
                    var2['start'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 352:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var19.container;
            var1['style'] = var5;
            var17 = _closure1_slot13;
            var5 = {};
            var19 = var19.containerSearchBar;
            var5['style'] = var19;
            var19 = 22;
            var19 = var21[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.SearchField;
            var19 = {};
            var22 = 'md';
            var19['size'] = var22;
            var22 = 23;
            var23 = var21[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var21[var22];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.5h0QOD;
            var21 = var23.bind(var24)(var21);
            var19['placeholder'] = var21;
            var19['onChange'] = var12;
            var12 = true;
            var19['isRound'] = var12;
            var19 = var17.bind(var4)(var20, var19);
            var5['children'] = var19;
            var17 = var17.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var17;
            var9 = var9.ROLE;
            if(!(var18 !== var9)) { _fun0001_ip = 708; continue _fun0001 }
 701:
            var6 = var6.length;
            _fun0001_ip = 713; continue _fun0001;
 708:
            var6 = var8.length;
 713:
            if(!(var7 === var6)) { _fun0001_ip = 1038; continue _fun0001 }
 720:
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var19 = _closure1_slot3;
            var6 = 25;
            var6 = var19[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var17 = _closure1_slot0;
            var9 = 26;
            var9 = var19[var9];
            var9 = var17.bind(var4)(var9);
            var9 = var9.NoResults;
            var6['Illustration'] = var9;
            var9 = _closure1_slot11;
            var9 = var9.ROLE;
            if(!(var18 !== var9)) { _fun0001_ip = 841; continue _fun0001 }
 787:
            var20 = _closure1_slot0;
            var9 = _closure1_slot3;
            var17 = var9[var22];
            var17 = var20.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var9 = var9[var22];
            var9 = var20.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.pYHobG;
            var9 = var17.bind(var19)(var9);
            _fun0001_ip = 895; continue _fun0001;
 841:
            var21 = _closure1_slot0;
            var17 = _closure1_slot3;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var17[var22];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.Sojqsr;
            var9 = var19.bind(var20)(var17);
 895:
            var6['title'] = var9;
            var9 = _closure1_slot11;
            var9 = var9.ROLE;
            if(!(var18 !== var9)) { _fun0001_ip = 969; continue _fun0001 }
 913:
            var20 = _closure1_slot0;
            var9 = _closure1_slot3;
            var17 = var9[var22];
            var17 = var20.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var9 = var9[var22];
            var9 = var20.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.tuL9TU;
            var9 = var17.bind(var19)(var9);
            _fun0001_ip = 1023; continue _fun0001;
 969:
            var21 = _closure1_slot0;
            var17 = _closure1_slot3;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var17[var22];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.7gBhmJ;
            var9 = var19.bind(var20)(var17);
 1023:
            var6['body'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            _fun0001_ip = 1190; continue _fun0001;
 1038:
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var17 = _closure1_slot3;
            var7 = 24;
            var7 = var17[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var17 = _closure1_slot11;
            var17 = var17.ROLE;
            if(!(var18 === var17)) { _fun0001_ip = 1081; continue _fun0001 }
 1078:
            var15 = var16;
 1081:
            var7['sections'] = var15;
            var7['itemSize'] = var14;
            var14 = 'windowSize';
            var7['estimatedListSize'] = var14;
            var7['renderItem'] = var13;
            var7['wrapChildren'] = var12;
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            var10 = 10;
            var14 = var13[var10];
            var14 = var12.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var7['insetStart'] = var14;
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var10 = var10 + var11;
            var7['insetEnd'] = var10;
            var10 = 'always';
            var7['keyboardShouldPersistTaps'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1190:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsPermissionsList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();