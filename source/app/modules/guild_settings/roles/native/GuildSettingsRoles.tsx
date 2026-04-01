// app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
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
    var1 = function hasSearchQuery(arg1) {
        var2 = arg1;
        var1 = var2.trim;
        var2 = var1.bind(var2)();
        var1 = '';
        var1 = var1 !== var2;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function useSearchQueryStateWithAnalytics(arg1, arg2) {
        var10 = arg1;
        var11 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var11;
        var5 = _closure1_slot5;
        var3 = var5.useState;
        var2 = '';
        var3 = var3.bind(var5)(var2);
        var2 = _closure1_slot4;
        var6 = undefined;
        var9 = 2;
        var2 = var2.bind(var6)(var3, var9);
        var3 = 0;
        var5 = var2[var3];
        var _closure2_slot2 = var5;
        var7 = 1;
        var2 = var2[var7];
        var _closure2_slot3 = var2;
        var12 = _closure1_slot5;
        var8 = var12.useState;
        var2 = function() {
            var1 = _closure2_slot0;
            return var1;
        };
        var8 = var8.bind(var12)(var2);
        var2 = _closure1_slot4;
        var2 = var2.bind(var6)(var8, var9);
        var3 = var2[var3];
        var2 = var2[var7];
        var _closure2_slot4 = var2;
        var8 = _closure1_slot5;
        var7 = var8.useRef;
        var2 = false;
        var2 = var7.bind(var8)(var2);
        var _closure2_slot5 = var2;
        var9 = _closure1_slot5;
        var8 = var9.useCallback;
        var7 = new Array(1);
        var7[0] = var10;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var1 = var3.toLowerCase;
                var3 = var1.bind(var3)();
                var1 = var3.trim;
                var6 = var1.bind(var3)();
                var _closure3_slot0 = var6;
                var1 = _closure2_slot5;
                var1 = var1.current;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = '';
                var1 = var3 === var6;
case 2:
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot5;
                var1 = true;
                var3['current'] = var1;
                var7 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 18;
                var5 = var5[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var5);
                var5 = var7.track;
                var1 = _closure1_slot18;
                var3 = var1.SEARCH_STARTED;
                var1 = {};
                var8 = 'Roles';
                var1['search_type'] = var8;
                var1 = var5.bind(var7)(var3, var1);
case 4:
                var3 = _closure2_slot3;
                var1 = undefined;
                var3 = var3.bind(var1)(var6);
                var3 = _closure2_slot4;
                var5 = '';
                if(!(var5 !== var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = _closure2_slot0;
                var5 = var6.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = var2.toLowerCase;
                    var3 = var1.bind(var2)();
                    var2 = var3.includes;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                _fun0001_ip = 8; continue _fun0001;
case 6:
                var2 = _closure2_slot0;
case 8:
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var2 = var8.bind(var9)(var2, var7);
        var _closure2_slot6 = var2;
        var9 = _closure1_slot5;
        var8 = var9.useEffect;
        var7 = new Array(4);
        var7[0] = var11;
        var7[1] = var5;
        var7[2] = var10;
        var7[3] = var2;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = _closure1_slot25;
                var2 = _closure2_slot2;
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = _closure2_slot4;
                var2 = _closure2_slot0;
                var2 = var4.bind(var3)(var2);
                _fun0002_ip = 9; continue _fun0002;
case 11:
                var2 = _closure2_slot6;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var7);
        var1 = {};
        var4 = _closure1_slot25;
        var4 = var4.bind(var6)(var5);
        var1['hasSearchQuery'] = var4;
        var1['filteredRoles'] = var3;
        var1['setSearchQuery'] = var2;
        return var1;
    };
    var _closure1_slot26 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var14 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isEveryoneRole;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var11 = 12;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildSettingsRoleEditSections;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildSettingsSections;
    var _closure1_slot17 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot18 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot19 = var7;
    var15 = var4.Fonts;
    var4 = var4.Permissions;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot21 = var7;
    var7 = var4.jsxs;
    var _closure1_slot22 = var7;
    var4 = var4.Fragment;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var11;
    var4['scrollContainer'] = var9;
    var9 = {};
    var11 = 16;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['paddingHorizontal'] = var13;
    var4['searchWrapper'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingVertical'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['gap'] = var13;
    var4['subheaderContainer'] = var9;
    var9 = {'paddingBottom': 16, 'alignItems': 'center'};
    var4['emptySubheaderContainer'] = var9;
    var9 = {'backgroundColor': null, 'width': '100%', 'flex': 1, 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var13 = '100%';
    var4['emptyIlloContainer'] = var9;
    var9 = {'marginTop': 28, 'width': '100%'};
    var4['emptyIllo'] = var9;
    var9 = {'marginTop': 0, 'aspectRatio': 2.75, 'width': '100%', 'height': 'auto'};
    var4['emptyIlloLarge'] = var9;
    var18 = 24;
    var9 = {'paddingHorizontal': 16, 'paddingTop': 8, 'paddingBottom': 24, 'alignItems': 'center'};
    var4['emptySubheaderBody'] = var9;
    var9 = {};
    var16 = 17;
    var16 = var6[var16];
    var17 = var12.bind(var1)(var16);
    var16 = var15.DISPLAY_EXTRABOLD;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_TEXT_HEADING_PRIMARY;
    var20 = var17.bind(var1)(var16, var15, var18);
    var21 = var9;
    var15 = copyDataProperties(var21, var20);
    var15 = 'marginTop';
    var9[14] = var11;
    var4['subheader'] = var9;
    var9 = {'marginTop': 8, 'textAlign': 'center'};
    var4['subheaderBody'] = var9;
    var9 = {'flexGrow': 0, 'marginTop': 16};
    var4['subheaderButton'] = var9;
    var9 = {'lineHeight': 18, 'textAlign': 'center'};
    var4['subheaderDescription'] = var9;
    var9 = {};
    var14 = var14.hairlineWidth;
    var9['height'] = var14;
    var9['width'] = var13;
    var4['divider'] = var9;
    var9 = {'marginTop': 2, 'marginBottom': 24};
    var4['everyoneWrapper'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginTop'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9['marginLeft'] = var11;
    var4['edittingRolesHeader'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var4['rolesHeader'] = var9;
    var9 = {'marginBottom': 8, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['reorderButton'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['reorderButtonText'] = var9;
    var9 = {'padding': 16, 'paddingTop': 8, 'lineHeight': 18};
    var4['rolesBody'] = var9;
    var9 = {};
    var10 = 0.4;
    var9['opacity'] = var10;
    var4['emptyRolesIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot24 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsModalRoles(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var7 = var2.guildId;
            var _closure2_slot0 = var7;
            var20 = var2.contentContainerStyle;
            var2 = _closure1_slot24;
            var4 = undefined;
            var19 = var2.bind(var4)();
            var _closure2_slot1 = var19;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var26 = null;
            var21 = var2.bind(var3)(var26);
            var14 = _closure1_slot0;
            var18 = _closure1_slot3;
            var2 = 23;
            var2 = var18[var2];
            var3 = var14.bind(var4)(var2);
            var2 = var3.useNavigation;
            var3 = var2.bind(var3)();
            var _closure2_slot2 = var3;
            var5 = _closure1_slot1;
            var2 = 24;
            var2 = var18[var2];
            var2 = var5.bind(var4)(var2);
            var11 = var2.bind(var4)();
            var _closure2_slot3 = var11;
            var12 = 20;
            var2 = var18[var12];
            var9 = var14.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.theme;
                return var1;
            };
            var33 = var8.bind(var9)(var5, var2);
            var _closure2_slot4 = var33;
            var2 = var18[var12];
            var10 = var14.bind(var4)(var2);
            var9 = var10.useStateFromStoresObject;
            var2 = _closure1_slot12;
            var5 = new Array(6);
            var5[0] = var2;
            var8 = _closure1_slot11;
            var5[1] = var8;
            var2 = _closure1_slot9;
            var5[2] = var2;
            var2 = _closure1_slot15;
            var5[3] = var2;
            var2 = _closure1_slot14;
            var5[4] = var2;
            var2 = _closure1_slot10;
            var5[5] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot12;
                    var2 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var6 = var2.bind(var5)(var1);
                    var2 = _closure1_slot9;
                    var1 = var2.getId;
                    var5 = var1.bind(var2)();
                    var1 = {};
                    var1['guild'] = var6;
                    var2 = null;
                    var8 = var2 != var6;
                    var7 = null;
                    if(!var8) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var9 = _closure1_slot11;
                    var8 = var9.getEveryoneRole;
                    var7 = var8.bind(var9)(var6);
case 13:
                    var1['guildEveryoneRole'] = var7;
                    var10 = _closure1_slot10;
                    var9 = var10.getMemberCount;
                    var11 = var2 == var6;
                    var7 = undefined;
                    var8 = undefined;
                    if(var11) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var8 = var6.id;
case 15:
                    var9 = var9.bind(var10)(var8);
                    var10 = var2 != var9;
                    var8 = 0;
                    if(!var10) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var8 = var9;
case 17:
                    var1['memberCount'] = var8;
                    var10 = _closure1_slot14;
                    var9 = var10.getRoleMemberCount;
                    var11 = var2 == var6;
                    var8 = undefined;
                    if(var11) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var8 = var6.id;
case 19:
                    var8 = var9.bind(var10)(var8);
                    var1['roleMemberCount'] = var8;
                    var9 = _closure1_slot11;
                    var8 = var9.getSortedRoles;
                    var4 = _closure2_slot0;
                    var4 = var8.bind(var9)(var4);
                    var1['sortedGuildRoles'] = var4;
                    var4 = _closure1_slot15;
                    var4 = var4.order;
                    var1['rolesOrder'] = var4;
                    var1['currentUserId'] = var5;
                    var4 = var2 != var6;
                    var2 = undefined;
                    if(!var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 25;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getHighestRole;
                    var2 = var3.bind(var4)(var6, var5);
case 21:
                    var1['highestRole'] = var2;
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var5, var2);
            var9 = var5.guild;
            var _closure2_slot5 = var9;
            var10 = var5.guildEveryoneRole;
            var _closure2_slot6 = var10;
            var2 = var5.memberCount;
            var _closure2_slot7 = var2;
            var16 = var5.roleMemberCount;
            var _closure2_slot8 = var16;
            var22 = var5.sortedGuildRoles;
            var _closure2_slot9 = var22;
            var17 = var5.rolesOrder;
            var _closure2_slot10 = var17;
            var32 = var5.currentUserId;
            var _closure2_slot11 = var32;
            var29 = var5.highestRole;
            var _closure2_slot12 = var29;
            var5 = function useRoleJustCreatedHelper(arg1) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 19;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.useGuildSettingsRolesManagerState;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.roleJustCreated;
                    return var1;
                };
                var6 = var5.bind(var6)(var4);
                var _closure3_slot1 = var6;
                var5 = _closure1_slot5;
                var4 = var5.useLayoutEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var5 = undefined;
                        if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        return var5;
case 23:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.current;
                                var4 = null;
                                var1 = var4 == var2;
                                var3 = var2;
                                if(var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                                var2 = var2._listRef;
                                var1 = var4 == var2;
                                var3 = var2;
case 25:
                                var2 = var3;
                                if(var1) { _fun0006_ip = 5; continue _fun0006 }
case 27:
                                var3 = var3.current;
                                var1 = var4 == var3;
                                var2 = var3;
case 5:
                                if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                                var1 = var2.scrollToEnd;
                                var1 = var1.bind(var2)();
case 28:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.setRoleJustCreated;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            }
                        };
                        var2 = 1000;
                        var2 = var4.bind(var5)(var3, var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 19;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.setRoleJustCreated;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5 = var5.bind(var4)(var21);
            var5 = function useGuildRoleAccessGuard(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 20;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.useStateFromStoresObject;
                var4 = _closure1_slot12;
                var5 = new Array(2);
                var5[0] = var4;
                var4 = _closure1_slot13;
                var5[1] = var4;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure1_slot12;
                        var3 = var4.getGuild;
                        var1 = _closure3_slot0;
                        var5 = var3.bind(var4)(var1);
                        var1 = {};
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                        var6 = _closure1_slot13;
                        var4 = var6.canAccessGuildSettings;
                        var3 = var4.bind(var6)(var5);
case 30:
                        var1['canAccessSettings'] = var3;
                        var4 = _closure1_slot13;
                        var3 = var4.can;
                        var2 = _closure1_slot20;
                        var2 = var2.MANAGE_ROLES;
                        var2 = var3.bind(var4)(var2, var5);
                        var1['canManageRoles'] = var2;
                        return var1;
                    }
                };
                var4 = var6.bind(var7)(var5, var4);
                var6 = var4.canAccessSettings;
                var _closure3_slot1 = var6;
                var7 = var4.canManageRoles;
                var _closure3_slot2 = var7;
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure3_slot2;
                        if(!var1) { _fun0008_ip = 24; continue _fun0008 }
case 10:
                        var1 = _closure3_slot1;
case 24:
                        if(var1) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 21;
                        var1 = var4[var1];
                        var2 = undefined;
                        var5 = var3.bind(var2)(var1);
                        var1 = var5.terminate;
                        var1 = var1.bind(var5)();
                        var1 = 22;
                        var1 = var4[var1];
                        var2 = var3.bind(var2)(var1);
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
case 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5 = var5.bind(var4)(var7);
            var13 = _closure1_slot5;
            var7 = var13.useState;
            var5 = false;
            var13 = var7.bind(var13)(var5);
            var7 = _closure1_slot4;
            var5 = 2;
            var7 = var7.bind(var4)(var13, var5);
            var13 = 0;
            var15 = var7[var13];
            var _closure2_slot13 = var15;
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot14 = var5;
            var5 = _closure1_slot26;
            var5 = var5.bind(var4)(var22, var15);
            var7 = var5.filteredRoles;
            var _closure2_slot15 = var7;
            var31 = var5.hasSearchQuery;
            var _closure2_slot16 = var31;
            var5 = var5.setSearchQuery;
            var _closure2_slot17 = var5;
            var12 = var18[var12];
            var18 = var14.bind(var4)(var12);
            var14 = var18.useStateFromStoresArray;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                    var1 = new Array(0);
                    _fun0009_ip = 11; continue _fun0009;
case 34:
                    var5 = _closure1_slot11;
                    var4 = var5.getManyRoles;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot10;
                    var1 = var4.bind(var5)(var3, var2);
case 11:
                    return var1;
                }
            };
            var18 = var14.bind(var18)(var12, var8);
            var _closure2_slot18 = var18;
            var14 = _closure1_slot5;
            var12 = var14.useMemo;
            var8 = new Array(8);
            var8[0] = var22;
            var8[1] = var18;
            var8[2] = var17;
            var8[3] = var16;
            var8[4] = var7;
            var8[5] = var9;
            var8[6] = var32;
            var8[7] = var29;
            var7 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var6 = _closure2_slot15;
                    _fun0010_ip = 38; continue _fun0010;
case 36:
                    var6 = _closure2_slot18;
case 38:
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.map;
                    var3 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var4 = arg1;
                            var1 = {};
                            var1['role'] = var4;
                            var3 = _closure2_slot8;
                            var2 = null;
                            var6 = var2 == var3;
                            var3 = undefined;
                            if(var6) { _fun0011_ip = 39; continue _fun0011 }
case 40:
                            var5 = _closure2_slot8;
                            var4 = var4.id;
                            var3 = var5[var4];
case 39:
                            var4 = var2 != var3;
                            var2 = 0;
                            if(!var4) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                            var2 = var3;
case 41:
                            var1['memberCount'] = var2;
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var3);
                    var3 = _closure2_slot5;
                    var6 = var4 != var3;
                    var3 = 0;
                    var4 = 0;
                    if(!var6) { _fun0010_ip = 43; continue _fun0010 }
case 32:
                    var6 = var5.findIndex;
                    var2 = function(arg1) {
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.isRoleHigher;
                        var10 = _closure2_slot5;
                        var9 = _closure2_slot11;
                        var8 = _closure2_slot12;
                        var1 = arg1;
                        var7 = var1.role;
                        var11 = var6;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        var1 = !var1;
                        var1 = !var1;
                        return var1;
                    };
                    var4 = var6.bind(var5)(var2);
case 43:
                    var1 = _closure2_slot9;
                    var2 = var1.length;
                    var1 = 1;
                    var2 = var2 - var1;
                    var1 = {};
                    var1['roleData'] = var5;
                    var1['firstEditableIndex'] = var4;
                    var1['numSortableRoles'] = var2;
                    var2 = var2 > var3;
                    var1['hasRoles'] = var2;
                    return var1;
                }
            };
            var7 = var12.bind(var14)(var7, var8);
            var18 = var7.roleData;
            var _closure2_slot19 = var18;
            var14 = var7.firstEditableIndex;
            var _closure2_slot20 = var14;
            var8 = var7.numSortableRoles;
            var28 = var7.hasRoles;
            var _closure2_slot21 = var28;
            var17 = _closure1_slot5;
            var16 = var17.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var7 = function(arg1) {
                var2 = arg1;
                var3 = _closure2_slot17;
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var16.bind(var17)(var7, var12);
            var17 = _closure1_slot5;
            var16 = var17.useCallback;
            var12 = new Array(1);
            var12[0] = var9;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 18;
                    var3 = var9[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot18;
                    var4 = var3.OPEN_MODAL;
                    var3 = {};
                    var7 = _closure1_slot19;
                    var7 = var7.GUILD_ROLE_CREATION_MODAL;
                    var3['type'] = var7;
                    var8 = _closure1_slot0;
                    var7 = 26;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.collectGuildAnalyticsMetadata;
                    var11 = _closure2_slot5;
                    var7 = null;
                    var11 = var7 == var11;
                    var7 = undefined;
                    if(var11) { _fun0012_ip = 44; continue _fun0012 }
case 45:
                    var10 = _closure2_slot5;
                    var7 = var10.id;
case 44:
                    var12 = var8.bind(var9)(var7);
                    var13 = var3;
                    var7 = copyDataProperties(var13, var12);
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 27;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.open;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var24 = var16.bind(var17)(var7, var12);
            var _closure2_slot22 = var24;
            var17 = _closure1_slot5;
            var16 = var17.useCallback;
            var12 = new Array(1);
            var12[0] = var3;
            var7 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var7 = arguments[1];
                    var1 = undefined;
                    if(!(var7 === var1)) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                    var7 = false;
case 46:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot17;
                    var3 = var2.ROLE_EDIT_REFRESH;
                    var2 = {};
                    var8 = arg1;
                    var2['role'] = var8;
                    var2['newRole'] = var7;
                    var6 = _closure1_slot16;
                    var6 = var6.DISPLAY;
                    var2['section'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var17 = var16.bind(var17)(var7, var12);
            var _closure2_slot23 = var17;
            var22 = _closure1_slot5;
            var16 = var22.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var7 = function() {
                var4 = _closure2_slot14;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot17;
                var2 = '';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var16.bind(var22)(var7, var12);
            var _closure2_slot24 = var7;
            var22 = _closure1_slot5;
            var16 = var22.useCallback;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                var4 = _closure2_slot17;
                var1 = undefined;
                var3 = '';
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot14;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var16.bind(var22)(var5, var12);
            var _closure2_slot25 = var5;
            var25 = _closure1_slot5;
            var22 = var25.useCallback;
            var16 = new Array(2);
            var16[0] = var9;
            var16[1] = var5;
            var12 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var2 = var3.getUpdates;
                    var4 = var2.bind(var3)();
                    var3 = var4.length;
                    var2 = 0;
                    var2 = var3 > var2;
                    if(!var2) { _fun0014_ip = 11; continue _fun0014 }
case 48:
                    var5 = _closure2_slot5;
                    var3 = null;
                    var2 = var3 != var5;
case 11:
                    if(!var2) { _fun0014_ip = 49; continue _fun0014 }
case 50:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.batchRoleUpdate;
                    var1 = _closure2_slot5;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1, var4);
case 49:
                    var2 = _closure2_slot25;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var22 = var22.bind(var25)(var12, var16);
            var _closure2_slot26 = var22;
            var27 = _closure1_slot5;
            var25 = var27.useCallback;
            var16 = new Array(1);
            var16[0] = var14;
            var12 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot20;
                    var3 = 0;
                    if(!(!(var4 >= var3))) { _fun0015_ip = 51; continue _fun0015 }
case 23:
                    var5 = var2.to;
                    _fun0015_ip = 30; continue _fun0015;
case 51:
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.max;
                    var3 = var2.to;
                    var1 = _closure2_slot20;
                    var5 = var4.bind(var6)(var3, var1);
case 30:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 29;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.updateRoleOrder;
                    var2 = var2.from;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                }
            };
            var16 = var25.bind(var27)(var12, var16);
            var30 = _closure1_slot5;
            var27 = var30.useCallback;
            var25 = new Array(5);
            var25[0] = var19;
            var25[1] = var18;
            var25[2] = var31;
            var25[3] = var15;
            var25[4] = var5;
            var12 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var5 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.rolesHeader;
                    var6 = new Array(2);
                    var6[0] = var1;
                    var9 = _closure2_slot13;
                    var1 = undefined;
                    var8 = undefined;
                    if(!var9) { _fun0016_ip = 52; continue _fun0016 }
case 53:
                    var9 = _closure2_slot1;
                    var8 = var9.edittingRolesHeader;
case 52:
                    var6[1] = var8;
                    var5['style'] = var6;
                    var9 = _closure1_slot21;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 30;
                    var6 = var10[var6];
                    var6 = var12.bind(var1)(var6);
                    var8 = var6.TableRowGroupTitle;
                    var6 = {};
                    var14 = 31;
                    var13 = var10[var14];
                    var13 = var12.bind(var1)(var13);
                    var15 = var13.intl;
                    var13 = var15.formatToPlainString;
                    var10 = var10[var14];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.t;
                    var12 = var10["38N3Vz"];
                    var10 = {};
                    var16 = _closure2_slot19;
                    var18 = var16.length;
                    var16 = global;
                    var16 = var16.HermesInternal;
                    var17 = var16.concat;
                    var16 = '';
                    var16 = var17.bind(var16)(var18);
                    var10['numRoles'] = var16;
                    var10 = var13.bind(var15)(var12, var10);
                    var6['title'] = var10;
                    var6 = var9.bind(var1)(var8, var6);
                    var8 = new Array(2);
                    var8[0] = var6;
                    var10 = _closure2_slot13;
                    var9 = null;
                    if(var10) { _fun0016_ip = 54; continue _fun0016 }
case 55:
                    var10 = _closure2_slot16;
                    var9 = null;
                    if(var10) { _fun0016_ip = 54; continue _fun0016 }
case 56:
                    var13 = _closure1_slot22;
                    var22 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var10 = 32;
                    var10 = var19[var10];
                    var10 = var22.bind(var1)(var10);
                    var12 = var10.PressableOpacity;
                    var10 = {};
                    var15 = 'button';
                    var10['accessibilityRole'] = var15;
                    var15 = var19[var14];
                    var15 = var22.bind(var1)(var15);
                    var17 = var15.intl;
                    var16 = var17.string;
                    var15 = var19[var14];
                    var15 = var22.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15["0dOFq+"];
                    var15 = var16.bind(var17)(var15);
                    var10['accessibilityLabel'] = var15;
                    var15 = _closure2_slot25;
                    var10['onPress'] = var15;
                    var20 = _closure2_slot1;
                    var15 = var20.reorderButton;
                    var10['style'] = var15;
                    var18 = _closure1_slot21;
                    var15 = 33;
                    var15 = var19[var15];
                    var15 = var22.bind(var1)(var15);
                    var16 = var15.ArrowsUpDownIcon;
                    var15 = {};
                    var21 = _closure1_slot1;
                    var17 = 16;
                    var17 = var19[var17];
                    var17 = var21.bind(var1)(var17);
                    var17 = var17.colors;
                    var17 = var17.TEXT_LINK;
                    var15['color'] = var17;
                    var17 = 'sm';
                    var15['size'] = var17;
                    var16 = var18.bind(var1)(var16, var15);
                    var15 = new Array(2);
                    var15[0] = var16;
                    var16 = 34;
                    var16 = var19[var16];
                    var16 = var22.bind(var1)(var16);
                    var17 = var16.Text;
                    var16 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
                    var20 = var20.reorderButtonText;
                    var16['style'] = var20;
                    var20 = var19[var14];
                    var20 = var22.bind(var1)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var19[var14];
                    var19 = var22.bind(var1)(var19);
                    var19 = var19.t;
                    var19 = var19["0dOFq+"];
                    var19 = var20.bind(var21)(var19);
                    var16['children'] = var19;
                    var16 = var18.bind(var1)(var17, var16);
                    var15[1] = var16;
                    var10['children'] = var15;
                    var9 = var13.bind(var1)(var12, var10);
case 54:
                    var8[1] = var9;
                    var5['children'] = var8;
                    var8 = var4.bind(var1)(var3, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var8 = _closure2_slot13;
                    var6 = null;
                    if(!var8) { _fun0016_ip = 57; continue _fun0016 }
case 58:
                    var9 = _closure1_slot21;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 34;
                    var7 = var10[var7];
                    var7 = var13.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                    var11 = _closure2_slot1;
                    var11 = var11.rolesBody;
                    var7['style'] = var11;
                    var11 = var10[var14];
                    var11 = var13.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var10[var14];
                    var10 = var13.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.nHcwVl;
                    var10 = var11.bind(var12)(var10);
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 57:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var27 = var27.bind(var30)(var12, var25);
            var30 = _closure1_slot5;
            var25 = var30.useCallback;
            var12 = new Array(5);
            var12[0] = var19;
            var12[1] = var24;
            var12[2] = var28;
            var12[3] = var33;
            var12[4] = var11;
            var11 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 35;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.isThemeDark;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    if(var2) { _fun0017_ip = 59; continue _fun0017 }
case 29:
                    if(var1) { _fun0017_ip = 60; continue _fun0017 }
case 61:
                    var2 = 39;
                    var2 = var4[var2];
                    var11 = var3.bind(var5)(var2);
                    _fun0017_ip = 62; continue _fun0017;
case 60:
                    var2 = 38;
                    var2 = var4[var2];
                    var11 = var3.bind(var5)(var2);
case 62:
                    _fun0017_ip = 63; continue _fun0017;
case 59:
                    if(var1) { _fun0017_ip = 64; continue _fun0017 }
case 43:
                    var1 = 37;
                    var1 = var4[var1];
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 65; continue _fun0017;
case 64:
                    var2 = 36;
                    var2 = var4[var2];
                    var1 = var3.bind(var5)(var2);
case 65:
                    var11 = var1;
case 63:
                    var1 = _closure2_slot21;
                    var4 = _closure1_slot22;
                    if(var1) { _fun0017_ip = 66; continue _fun0017 }
case 67:
                    var2 = _closure1_slot6;
                    var1 = {};
                    var12 = _closure2_slot1;
                    var3 = var12.emptySubheaderContainer;
                    var1['style'] = var3;
                    var6 = _closure1_slot21;
                    var3 = {};
                    var8 = var12.emptyIlloContainer;
                    var3['style'] = var8;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var8 = 40;
                    var8 = var13[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = {};
                    var13 = var12.emptyIllo;
                    var12 = new Array(2);
                    var12[0] = var13;
                    var14 = _closure2_slot3;
                    var13 = null;
                    if(!var14) { _fun0017_ip = 68; continue _fun0017 }
case 69:
                    var14 = _closure2_slot1;
                    var13 = var14.emptyIlloLarge;
case 68:
                    var12[1] = var13;
                    var8['style'] = var12;
                    var8['source'] = var11;
                    var8 = var6.bind(var5)(var9, var8);
                    var3['children'] = var8;
                    var6 = var6.bind(var5)(var2, var3);
                    var3 = new Array(3);
                    var3[0] = var6;
                    var12 = _closure1_slot22;
                    var9 = _closure1_slot6;
                    var6 = {};
                    var11 = _closure2_slot1;
                    var8 = var11.emptySubheaderBody;
                    var6['style'] = var8;
                    var8 = _closure1_slot21;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var14 = 34;
                    var13 = var21[var14];
                    var13 = var20.bind(var5)(var13);
                    var15 = var13.Heading;
                    var13 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
                    var16 = var11.subheader;
                    var13['style'] = var16;
                    var17 = 31;
                    var16 = var21[var17];
                    var16 = var20.bind(var5)(var16);
                    var19 = var16.intl;
                    var18 = var19.string;
                    var16 = var21[var17];
                    var16 = var20.bind(var5)(var16);
                    var16 = var16.t;
                    var16 = var16.ALlnbi;
                    var16 = var18.bind(var19)(var16);
                    var13['children'] = var16;
                    var15 = var8.bind(var5)(var15, var13);
                    var13 = new Array(3);
                    var13[0] = var15;
                    var14 = var21[var14];
                    var14 = var20.bind(var5)(var14);
                    var15 = var14.Text;
                    var14 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                    var16 = var11.subheaderBody;
                    var14['style'] = var16;
                    var16 = var21[var17];
                    var16 = var20.bind(var5)(var16);
                    var19 = var16.intl;
                    var18 = var19.string;
                    var16 = var21[var17];
                    var16 = var20.bind(var5)(var16);
                    var16 = var16.t;
                    var16 = var16["1ydhVp"];
                    var16 = var18.bind(var19)(var16);
                    var14['children'] = var16;
                    var14 = var8.bind(var5)(var15, var14);
                    var13[1] = var14;
                    var14 = {};
                    var15 = var11.subheaderButton;
                    var14['style'] = var15;
                    var15 = 41;
                    var15 = var21[var15];
                    var15 = var20.bind(var5)(var15);
                    var16 = var15.Button;
                    var15 = {};
                    var18 = var21[var17];
                    var18 = var20.bind(var5)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var17 = var21[var17];
                    var17 = var20.bind(var5)(var17);
                    var17 = var17.t;
                    var17 = var17.JZZjQK;
                    var17 = var18.bind(var19)(var17);
                    var15['text'] = var17;
                    var17 = _closure2_slot22;
                    var15['onPress'] = var17;
                    var15 = var8.bind(var5)(var16, var15);
                    var14['children'] = var15;
                    var14 = var8.bind(var5)(var9, var14);
                    var13[2] = var14;
                    var6['children'] = var13;
                    var6 = var12.bind(var5)(var9, var6);
                    var3[1] = var6;
                    var6 = {};
                    var11 = var11.divider;
                    var6['style'] = var11;
                    var6 = var8.bind(var5)(var9, var6);
                    var3[2] = var6;
                    var1['children'] = var3;
                    var1 = var4.bind(var5)(var2, var1);
                    _fun0017_ip = 70; continue _fun0017;
case 66:
                    var3 = _closure1_slot23;
                    var2 = {};
                    var9 = _closure1_slot21;
                    var8 = _closure1_slot6;
                    var6 = {};
                    var10 = _closure2_slot1;
                    var11 = var10.subheaderContainer;
                    var6['style'] = var11;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var7 = 34;
                    var7 = var16[var7];
                    var7 = var15.bind(var5)(var7);
                    var11 = var7.Text;
                    var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                    var12 = var10.subheaderDescription;
                    var7['style'] = var12;
                    var12 = 31;
                    var13 = var16[var12];
                    var13 = var15.bind(var5)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12["1ydhVp"];
                    var12 = var13.bind(var14)(var12);
                    var7['children'] = var12;
                    var7 = var9.bind(var5)(var11, var7);
                    var6['children'] = var7;
                    var7 = var9.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = {};
                    var10 = var10.divider;
                    var7['style'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 70:
                    return var1;
                }
            };
            var25 = var25.bind(var30)(var11, var12);
            var30 = _closure1_slot5;
            var12 = var30.useCallback;
            var11 = new Array(6);
            var11[0] = var19;
            var11[1] = var17;
            var11[2] = var9;
            var11[3] = var32;
            var11[4] = var29;
            var11[5] = var10;
            var10 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0018_ip = 71; continue _fun0018 }
case 23:
                    var2 = _closure2_slot6;
                    if(!(var1 != var2)) { _fun0018_ip = 71; continue _fun0018 }
case 72:
                    var3 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var2 = 25;
                    var2 = var11[var2];
                    var5 = undefined;
                    var9 = var3.bind(var5)(var2);
                    var4 = var9.isRoleHigher;
                    var8 = _closure2_slot5;
                    var14 = _closure2_slot11;
                    var13 = _closure2_slot12;
                    var10 = _closure2_slot6;
                    var16 = var9;
                    var15 = var8;
                    var12 = var10;
                    var2 = var16[var4](var15, var14, var13, var12, var11);
                    var9 = !var2;
                    var4 = _closure1_slot21;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.everyoneWrapper;
                    var2['style'] = var7;
                    var7 = _closure1_slot1;
                    var6 = 42;
                    var6 = var11[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = {};
                    var6['role'] = var10;
                    var6['locked'] = var9;
                    var9 = function onPress() {
                        var3 = _closure2_slot23;
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPress'] = var9;
                    var8 = var8.id;
                    var6['guildId'] = var8;
                    var8 = false;
                    var6['sorting'] = var8;
                    var8 = 0;
                    var6['numMembers'] = var8;
                    var8 = true;
                    var6['isEveryoneRole'] = var8;
                    var6['isLastRole'] = var8;
                    var6['isFirstRole'] = var8;
                    var6 = var4.bind(var5)(var7, var6);
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 71:
                    return var1;
                }
            };
            var30 = var12.bind(var30)(var10, var11);
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var10 = new Array(7);
            var10[0] = var9;
            var33 = var18.length;
            var10[1] = var33;
            var10[2] = var32;
            var10[3] = var29;
            var10[4] = var15;
            var10[5] = var17;
            var10[6] = var7;
            var7 = function(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = arg1;
                    var8 = arg2;
                    var1 = _closure2_slot5;
                    var11 = null;
                    if(!(var11 != var1)) { _fun0019_ip = 73; continue _fun0019 }
case 74:
                    var1 = var2.role;
                    var9 = var2.memberCount;
                    var3 = _closure1_slot2;
                    var14 = _closure1_slot3;
                    var2 = 25;
                    var2 = var14[var2];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var4 = var7.isRoleHigher;
                    var12 = _closure2_slot5;
                    var17 = _closure2_slot11;
                    var16 = _closure2_slot12;
                    var19 = var7;
                    var18 = var12;
                    var15 = var1;
                    var2 = var19[var4](var18, var17, var16, var15, var14);
                    var10 = !var2;
                    var2 = _closure2_slot19;
                    var3 = var2.length;
                    var2 = 1;
                    var7 = var3 - var2;
                    var4 = _closure1_slot21;
                    var3 = _closure1_slot1;
                    var2 = 42;
                    var2 = var14[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var14 = _closure2_slot13;
                    var2['sorting'] = var14;
                    var12 = var11 != var12;
                    if(!var12) { _fun0019_ip = 75; continue _fun0019 }
case 76:
                    var13 = _closure1_slot8;
                    var12 = var13.bind(var5)(var1);
case 75:
                    var2['isEveryoneRole'] = var12;
                    var2['role'] = var1;
                    var2['locked'] = var10;
                    var10 = _closure2_slot23;
                    var2['onPress'] = var10;
                    var10 = _closure2_slot5;
                    var11 = var11 == var10;
                    var10 = undefined;
                    if(var11) { _fun0019_ip = 77; continue _fun0019 }
case 78:
                    var11 = _closure2_slot5;
                    var10 = var11.id;
case 77:
                    var2['guildId'] = var10;
                    var2['numMembers'] = var9;
                    var9 = 0;
                    var9 = var9 === var8;
                    var2['isFirstRole'] = var9;
                    var7 = var8 === var7;
                    var2['isLastRole'] = var7;
                    var6 = _closure2_slot24;
                    var2['onLongPress'] = var6;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
case 73:
                    var4 = _closure1_slot21;
                    var3 = _closure1_slot23;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var7, var10);
            var17 = _closure1_slot5;
            var11 = var17.useCallback;
            var10 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = new Array(0);
            var17 = var11.bind(var17)(var10, var7);
            var11 = _closure1_slot5;
            var10 = var11.useEffect;
            var7 = new Array(6);
            var7[0] = var24;
            var7[1] = var22;
            var7[2] = var5;
            var7[3] = var28;
            var7[4] = var15;
            var7[5] = var3;
            var5 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var8 = _closure2_slot13;
                    var1 = undefined;
                    var7 = undefined;
                    if(!var8) { _fun0020_ip = 79; continue _fun0020 }
case 40:
                    var7 = function() {
                        var4 = _closure1_slot21;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 43;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot25;
                        var1['onPress'] = var5;
                        var5 = 31;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oC;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 79:
                    var2['headerLeft'] = var7;
                    var7 = _closure2_slot13;
                    if(var7) { _fun0020_ip = 80; continue _fun0020 }
case 53:
                    var7 = _closure2_slot21;
                    var5 = undefined;
                    if(!var7) { _fun0020_ip = 81; continue _fun0020 }
case 14:
                    var5 = function() {
                        var4 = _closure1_slot21;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 43;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var6 = _closure2_slot22;
                        var1['onPress'] = var6;
                        var6 = _closure1_slot1;
                        var5 = 44;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['source'] = var5;
                        var5 = 31;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.JZZjQK;
                        var5 = var6.bind(var7)(var5);
                        var1['accessibilityLabel'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 81:
                    _fun0020_ip = 82; continue _fun0020;
case 80:
                    var5 = function() {
                        var4 = _closure1_slot21;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 43;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot26;
                        var1['onPress'] = var5;
                        var5 = 31;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPH+;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 82:
                    var2['headerRight'] = var5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 31;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.UvdTMj;
                    var5 = var6.bind(var7)(var5);
                    var2['headerTitle'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var5 = var10.bind(var11)(var5, var7);
            var10 = _closure1_slot5;
            var7 = var10.useEffect;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var15;
            var5[2] = var3;
            var3 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0021_ip = 83; continue _fun0021 }
case 10:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0021_ip = 52; continue _fun0021 }
case 83:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.stopReordering;
                    var1 = var1.bind(var2)();
                    _fun0021_ip = 15; continue _fun0021;
case 52:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.startReordering;
                    var1 = _closure2_slot5;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 15:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 45;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0021_ip = 84; continue _fun0021 }
case 85:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure2_slot13;
                    var5 = !var5;
                    var2['gestureEnabled'] = var5;
                    var2 = var3.bind(var4)(var2);
case 84:
                    return var1;
                }
            };
            var3 = var7.bind(var10)(var3, var5);
            var7 = _closure1_slot5;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var2;
            var2 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0022_ip = 86; continue _fun0022 }
case 23:
                    var5 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 46;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.MAX_PREFETCH_MEMBER_COUNT;
                    if(!(var5 <= var3)) { _fun0022_ip = 44; continue _fun0022 }
case 5:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 47;
                    var3 = var6[var3];
                    var9 = var5.bind(var4)(var3);
                    var8 = var9.requestMembers;
                    var3 = _closure2_slot5;
                    var13 = var3.id;
                    var12 = '';
                    var11 = 0;
                    var10 = false;
                    var14 = var9;
                    var3 = var14[var8](var13, var12, var11, var10, var9);
case 44:
                    var3 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 48;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchMemberCounts;
                    var1 = _closure2_slot5;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var15;
            var1 = function() {
                var1 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = _closure2_slot13;
                        if(!var1) { _fun0023_ip = 87; continue _fun0023 }
case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.stopReordering;
                        var1 = var1.bind(var2)();
case 87:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot22;
            var2 = _closure1_slot23;
            var1 = {};
            var7 = null;
            if(var15) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var5 = 10;
            var5 = var8 < var5;
            var7 = null;
            if(var5) { _fun0003_ip = 88; continue _fun0003 }
case 90:
            var9 = _closure1_slot21;
            var8 = _closure1_slot6;
            var5 = {};
            var11 = var19.searchWrapper;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var22 = 0;
            if(!var31) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var29 = _closure1_slot1;
            var32 = _closure1_slot3;
            var24 = 16;
            var24 = var32[var24];
            var24 = var29.bind(var4)(var24);
            var24 = var24.spacing;
            var22 = var24.PX_16;
case 91:
            var11['paddingBottom'] = var22;
            var10[1] = var11;
            var5['style'] = var10;
            var22 = _closure1_slot21;
            var11 = _closure1_slot0;
            var24 = _closure1_slot3;
            var10 = 49;
            var10 = var24[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.SearchField;
            var10 = {};
            var24 = 'md';
            var10['size'] = var24;
            var10['onChange'] = var23;
            var10 = var22.bind(var4)(var11, var10);
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 88:
            var5 = new Array(4);
            var5[0] = var7;
            var9 = _closure1_slot21;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = null;
            if(!var15) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var23 = _closure1_slot22;
            var22 = _closure1_slot23;
            var11 = {};
            var29 = var27.bind(var4)();
            var24 = new Array(2);
            var24[0] = var29;
            var29 = null;
            if(var28) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var34 = _closure1_slot21;
            var40 = _closure1_slot0;
            var41 = _closure1_slot3;
            var32 = 50;
            var32 = var41[var32];
            var32 = var40.bind(var4)(var32);
            var33 = var32.FormRow;
            var32 = {};
            var38 = _closure1_slot1;
            var37 = 51;
            var35 = var41[var37];
            var36 = var38.bind(var4)(var35);
            var35 = {};
            var39 = var19.emptyRolesIcon;
            var35['style'] = var39;
            var37 = var41[var37];
            var37 = var38.bind(var4)(var37);
            var37 = var37.Sizes;
            var37 = var37.LARGE;
            var35['size'] = var37;
            var37 = 52;
            var37 = var41[var37];
            var37 = var38.bind(var4)(var37);
            var35['source'] = var37;
            var35 = var34.bind(var4)(var36, var35);
            var32['leading'] = var35;
            var35 = 34;
            var35 = var41[var35];
            var35 = var40.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'text-md/semibold', 'color': 'interactive-text-default'};
            var37 = 31;
            var38 = var41[var37];
            var38 = var40.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var41[var37];
            var37 = var40.bind(var4)(var37);
            var37 = var37.t;
            var37 = var37.nZfHsf;
            var37 = var38.bind(var39)(var37);
            var35['children'] = var37;
            var35 = var34.bind(var4)(var36, var35);
            var32['label'] = var35;
            var29 = var34.bind(var4)(var33, var32);
case 95:
            var24[1] = var29;
            var11['children'] = var24;
            var10 = var23.bind(var4)(var22, var11);
case 93:
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var9 = _closure1_slot21;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var19.container;
            var7['style'] = var10;
            var11 = _closure1_slot1;
            var22 = _closure1_slot3;
            var10 = 53;
            var10 = var22[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['ref'] = var21;
            var21 = null;
            if(var15) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var24 = _closure1_slot22;
            var23 = _closure1_slot23;
            var22 = {};
            var29 = null;
            if(var31) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var29 = var25.bind(var4)();
case 99:
            var25 = new Array(3);
            var25[0] = var29;
            var29 = null;
            if(var31) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var29 = var30.bind(var4)();
case 101:
            var25[1] = var29;
            var26 = null;
            if(!var28) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var26 = var27.bind(var4)();
case 103:
            var25[2] = var26;
            var22['children'] = var25;
            var21 = var24.bind(var4)(var23, var22);
case 97:
            var10['header'] = var21;
            var21 = var19.container;
            var10['wrapperStyles'] = var21;
            var21 = var19.scrollContainer;
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var20;
            var10['contentContainerStyle'] = var19;
            var10['data'] = var18;
            var10['rowHasChanged'] = var17;
            var10['onRowMoved'] = var16;
            var15 = !var15;
            var10['disableSorting'] = var15;
            var15 = var14 >= var13;
            var13 = undefined;
            if(!var15) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var13 = var14;
case 105:
            var10['minDraggableIndex'] = var13;
            var10['renderRow'] = var12;
            var12 = 'handled';
            var10['keyboardShouldPersistTaps'] = var12;
            var12 = 16;
            var10['scrollEventThrottle'] = var12;
            var12 = true;
            var10['scrollEnabled'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot21;
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 54;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();