// app/modules/connections/native/GuildRoleConnectionsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.Pressable;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var4 = var4.HelpdeskArticles;
    var _closure1_slot13 = var4;
    var8 = 8;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {};
    var11 = 10;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOBILE_PRIMARY;
    var4['backgroundColor'] = var14;
    var4['flex'] = var12;
    var7['container'] = var4;
    var4 = {'flexDirection': 'column', 'alignItems': 'center', 'padding': 16};
    var7['content'] = var4;
    var4 = {};
    var12 = 24;
    var4['marginTop'] = var12;
    var7['infoText'] = var4;
    var4 = {'marginTop': 24, 'flexDirection': 'column', 'width': '100%'};
    var7['verifiedRoles'] = var4;
    var4 = {'flexDirection': 'row', 'borderColor': null, 'borderWidth': 2, 'borderRadius': null, 'paddingHorizontal': 16, 'paddingVertical': 20, 'marginBottom': 16, 'width': '100%', 'alignItems': 'center', 'position': 'relative'};
    var12 = 'row';
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var4['borderColor'] = var14;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var4['borderRadius'] = var14;
    var7['verifiedRole'] = var4;
    var4 = {};
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var4['borderColor'] = var14;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var4['backgroundColor'] = var14;
    var7['verifiedRoleHasRole'] = var4;
    var4 = {};
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_MUTED;
    var4['borderColor'] = var14;
    var7['verifiedRolePressed'] = var4;
    var4 = {};
    var14 = 12;
    var4['marginRight'] = var14;
    var7['verifiedRoleIcon'] = var4;
    var4 = {'width': 20, 'height': 20, 'borderRadius': 10, 'backgroundColor': null, 'position': 'absolute', 'right': 4294967288, 'top': 4294967288};
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BRAND;
    var4['backgroundColor'] = var11;
    var7['roleCheckmark'] = var4;
    var4 = 32;
    var11 = {'flex': 1, 'overflow': 'hidden', 'marginRight': 32};
    var7['verifiedRoleName'] = var11;
    var11 = {};
    var11['flexDirection'] = var12;
    var7['platformIconContainer'] = var11;
    var11 = {};
    var12 = -6;
    var11['marginRight'] = var12;
    var7['cutout'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot16 = var7;
    var7 = {};
    var9 = 11;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.CutoutDirection;
    var9 = var9.RIGHT;
    var7['direction'] = var9;
    var7['radius'] = var8;
    var _closure1_slot17 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/native/GuildRoleConnectionsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildRoleConnectionsScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var2 = var2.onCloseModal;
            var _closure2_slot1 = var2;
            var2 = _closure1_slot16;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var _closure2_slot2 = var12;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var _closure2_slot3 = var2;
            var3 = _closure1_slot0;
            var2 = 13;
            var4 = var6[var2];
            var9 = var3.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var9)(var7, var4);
            var7 = var6[var2];
            var10 = var3.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var8, var7);
            var _closure2_slot4 = var7;
            var2 = var6[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot10;
                var3 = var4.getMember;
                var2 = _closure2_slot0;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var6.bind(var7)(var3, var2);
            var _closure2_slot5 = var2;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var3 = new Array(0);
            var8 = var6.bind(var7)(var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var8 = var6.bind(var5)(var8, var3);
            var3 = 0;
            var3 = var8[var3];
            var _closure2_slot6 = var3;
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot7 = var6;
            var8 = var7.useEffect;
            var6 = new Array(2);
            var6[0] = var1;
            var6[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 14;
                    var1 = var9[var1];
                    var8 = undefined;
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot12;
                    var2 = var1.PASSPORT_ENTRY_VIEWED;
                    var1 = {};
                    var11 = _closure2_slot6;
                    var10 = var11.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.role_id;
                        return var1;
                    };
                    var7 = var10.bind(var11)(var7);
                    var1['role_ids'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 15;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var12 = var6.bind(var7)(var5);
                    var13 = var1;
                    var5 = copyDataProperties(var13, var12);
                    var1 = var3.bind(var4)(var2, var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var7)(var3, var6);
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getGuildRoleConnectionsConfigurations;
                var2 = _closure2_slot0;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var6.bind(var7)(var1, var3);
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.tags;
                var2 = var1.guild_connections;
                var1 = null;
                var1 = var1 === var2;
                return var1;
            };
            var13 = var3.bind(var4)(var2);
            var4 = _closure1_slot14;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var12.content;
            var6['contentContainerStyle'] = var9;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 24;
            var9 = var21[var9];
            var9 = var15.bind(var5)(var9);
            var10 = var9.TextWithIOSLinkWorkaround;
            var9 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var14 = var12.infoText;
            var9['style'] = var14;
            var14 = 25;
            var16 = var21[var14];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var21[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.t;
            var15 = var14.Y+TsER;
            var14 = {};
            var20 = _closure1_slot1;
            var19 = 26;
            var19 = var21[var19];
            var20 = var20.bind(var5)(var19);
            var19 = var20.getArticleURL;
            var18 = _closure1_slot13;
            var18 = var18.CONNECTION_DETAILS;
            var18 = var19.bind(var20)(var18);
            var14['helpdeskArticleUrl'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var9['children'] = var14;
            var10 = var4.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var12 = var12.verifiedRoles;
            var10['style'] = var12;
            var12 = var13.map;
            var11 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot5;
                    var4 = var2.roles;
                    var3 = var4.includes;
                    var2 = var1.id;
                    var6 = var3.bind(var4)(var2);
                    var _closure3_slot1 = var6;
                    var3 = var1.id;
                    var2 = function getIconsForConnectionRole(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var _closure4_slot0 = var1;
                            var1 = new Array(0);
                            var _closure4_slot1 = var1;
                            var5 = _closure2_slot6;
                            var4 = var5.find;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.role_id;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var4 = var4.bind(var5)(var3);
                            var _closure4_slot2 = var4;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                            var3 = global;
                            var5 = var3.Set;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var9 = var6;
                            var5 = new var9[var5](var8);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var _closure4_slot3 = var5;
                            var6 = var4.rules;
                            var4 = var6.flat;
                            var7 = var4.bind(var6)();
                            var6 = var7.forEach;
                            var4 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var2 = arg1;
                                    var3 = var2.application_id;
                                    var1 = undefined;
                                    if(!(var1 !== var3)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                                    var5 = _closure4_slot3;
                                    var4 = var5.add;
                                    var3 = var2.application_id;
                                    var3 = var4.bind(var5)(var3);
                                    _fun0005_ip = 10; continue _fun0005;
case 8:
                                    var4 = _closure4_slot3;
                                    var3 = var4.add;
                                    var2 = var2.connection_type;
                                    var2 = var3.bind(var4)(var2);
case 10:
                                    return var1;
                                }
                            };
                            var4 = var6.bind(var7)(var4);
                            var4 = var3.Array;
                            var3 = var4.from;
                            var4 = var3.bind(var4)(var5);
                            var3 = var4.forEach;
                            var2 = function(arg1, arg2) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var7 = arg1;
                                    var1 = _closure4_slot3;
                                    var3 = var1.size;
                                    var1 = 1;
                                    var3 = var3 - var1;
                                    var6 = null;
                                    var1 = arg2;
                                    var8 = null;
                                    if(!(var1 !== var3)) { _fun0006_ip = 8; continue _fun0006 }
case 11:
                                    var8 = _closure1_slot17;
case 8:
                                    var1 = global;
                                    var4 = var1.isNaN;
                                    var3 = var1.parseInt;
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var7);
                                    var3 = var4.bind(var1)(var3);
                                    if(var3) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                                    var3 = _closure4_slot2;
                                    var3 = var3.applications;
                                    var3 = var3[var7];
                                    var4 = var6 == var3;
                                    var13 = undefined;
                                    if(var4) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                                    var13 = var3.bot;
case 14:
                                    if(!(var1 !== var13)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                                    var5 = _closure4_slot1;
                                    var4 = var5.push;
                                    var10 = _closure1_slot14;
                                    var9 = _closure1_slot1;
                                    var15 = _closure1_slot2;
                                    var12 = 11;
                                    var3 = var15[var12];
                                    var9 = var9.bind(var1)(var3);
                                    var3 = {};
                                    var14 = _closure1_slot0;
                                    var12 = var15[var12];
                                    var12 = var14.bind(var1)(var12);
                                    var12 = var12.AvatarSizes;
                                    var12 = var12.XSMALL;
                                    var3['size'] = var12;
                                    var11 = _closure1_slot8;
                                    var12 = var11.prototype;
                                    var12 = Object.create(var12, {constructor: {value: var11}});
                                    var19 = var12;
                                    var18 = var13;
                                    var11 = new var19[var11](var18, var17);
                                    var11 = var11 instanceof Object ? var11 : var12;
                                    var3['user'] = var11;
                                    var12 = _closure2_slot0;
                                    var3['guildId'] = var12;
                                    var11 = _closure2_slot2;
                                    var11 = var11.cutout;
                                    var3['style'] = var11;
                                    var3['cutout'] = var8;
                                    var3 = var10.bind(var1)(var9, var3, var7);
                                    var3 = var4.bind(var5)(var3);
                                    _fun0006_ip = 16; continue _fun0006;
case 12:
                                    var4 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var3 = 21;
                                    var3 = var11[var3];
                                    var5 = var4.bind(var1)(var3);
                                    var3 = var5.get;
                                    var10 = var3.bind(var5)(var7);
                                    var3 = 22;
                                    var3 = var11[var3];
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.makeSource;
                                    var9 = _closure1_slot0;
                                    var3 = 23;
                                    var3 = var11[var3];
                                    var13 = var9.bind(var1)(var3);
                                    var11 = var13.isThemeDark;
                                    var3 = _closure2_slot3;
                                    var3 = var11.bind(var13)(var3);
                                    var11 = var6 == var10;
                                    if(var3) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                                    var3 = undefined;
                                    if(var11) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                                    var6 = var10.icon;
                                    var3 = var6.lightPNG;
case 20:
                                    _fun0006_ip = 22; continue _fun0006;
case 18:
                                    var6 = undefined;
                                    if(var11) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                                    var10 = var10.icon;
                                    var6 = var10.darkPNG;
case 23:
                                    var3 = var6;
case 22:
                                    var10 = var4.bind(var5)(var3);
                                    var4 = _closure4_slot1;
                                    var3 = var4.push;
                                    var6 = _closure1_slot14;
                                    var5 = _closure1_slot1;
                                    var13 = _closure1_slot2;
                                    var11 = 11;
                                    var2 = var13[var11];
                                    var5 = var5.bind(var1)(var2);
                                    var2 = {};
                                    var12 = _closure1_slot0;
                                    var11 = var13[var11];
                                    var11 = var12.bind(var1)(var11);
                                    var11 = var11.AvatarSizes;
                                    var11 = var11.XSMALL;
                                    var2['size'] = var11;
                                    var2['source'] = var10;
                                    var9 = _closure2_slot2;
                                    var9 = var9.cutout;
                                    var2['style'] = var9;
                                    var2['cutout'] = var8;
                                    var2 = var6.bind(var1)(var5, var2, var7);
                                    var2 = var3.bind(var4)(var2);
case 16:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
case 6:
                            return var1;
                        }
                    };
                    var5 = undefined;
                    var10 = var2.bind(var5)(var3);
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var9 = 'button';
                    var2['accessibilityRole'] = var9;
                    var9 = function style(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.pressed;
                            var1 = _closure2_slot2;
                            var2 = var1.verifiedRole;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var6 = _closure3_slot1;
                            var5 = null;
                            if(!var6) { _fun0007_ip = 7; continue _fun0007 }
case 25:
                            var6 = _closure2_slot2;
                            var5 = var6.verifiedRoleHasRole;
case 7:
                            var1[1] = var5;
                            var2 = null;
                            if(!var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                            var3 = _closure2_slot2;
                            var2 = var3.verifiedRolePressed;
case 26:
                            var1[2] = var2;
                            return var1;
                        }
                    };
                    var2['style'] = var9;
                    var8 = function onPress() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = _closure3_slot0;
                            var3 = _closure2_slot0;
                            if(var1) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                            var6 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var5 = 17;
                            var5 = var1[var5];
                            var9 = undefined;
                            var7 = var6.bind(var9)(var5);
                            var6 = var7.openLazy;
                            var5 = _closure1_slot0;
                            var2 = 19;
                            var2 = var1[var2];
                            var5 = var5.bind(var9)(var2);
                            var2 = 20;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var5 = var5.bind(var9)(var2, var1);
                            var9 = var4.id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'GuildRoleConnectionsConnectAccountsActionSheet-';
                            var2 = var2.bind(var1)(var9);
                            var1 = {};
                            var1['role'] = var4;
                            var1['guildId'] = var3;
                            var8 = _closure2_slot1;
                            var1['onCloseModal'] = var8;
                            var1 = var6.bind(var7)(var5, var2, var1);
                            _fun0008_ip = 30; continue _fun0008;
case 28:
                            var2 = function renderLeaveRoleActionSheet(arg1, arg2) {
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var1 = arg2;
                                var _closure5_slot1 = var1;
                                var6 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 17;
                                var5 = var3[var1];
                                var1 = undefined;
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.openLazy;
                                var8 = _closure1_slot0;
                                var4 = 19;
                                var4 = var3[var4];
                                var8 = var8.bind(var1)(var4);
                                var4 = 18;
                                var4 = var3[var4];
                                var3 = var3.paths;
                                var4 = var8.bind(var1)(var4, var3);
                                var8 = var2.id;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var3 = var2.concat;
                                var2 = 'LeaveConnectionRoleActionSheet-';
                                var3 = var3.bind(var2)(var8);
                                var2 = {};
                                var7 = function onLeaveRolePressed() {
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 17;
                                    var2 = var4[var1];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var2 = var5.hideActionSheet;
                                    var2 = var2.bind(var5)();
                                    var2 = 16;
                                    var2 = var4[var2];
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.unassignGuildRoleConnection;
                                    var3 = _closure5_slot1;
                                    var2 = _closure5_slot0;
                                    var2 = var2.id;
                                    var2 = var4.bind(var5)(var3, var2);
                                    return var1;
                                };
                                var2['onLeaveRolePressed'] = var7;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                return var1;
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)(var4, var3);
case 30:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var8;
                    var8 = null;
                    if(!var6) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var11 = _closure1_slot14;
                    var9 = _closure1_slot5;
                    var6 = {};
                    var12 = _closure2_slot2;
                    var12 = var12.roleCheckmark;
                    var6['style'] = var12;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 27;
                    var12 = var17[var14];
                    var13 = var16.bind(var5)(var12);
                    var12 = {};
                    var14 = var17[var14];
                    var14 = var16.bind(var5)(var14);
                    var14 = var14.Sizes;
                    var14 = var14.SMALL_20;
                    var12['size'] = var14;
                    var14 = 28;
                    var14 = var17[var14];
                    var14 = var16.bind(var5)(var14);
                    var12['source'] = var14;
                    var14 = 10;
                    var14 = var17[var14];
                    var14 = var16.bind(var5)(var14);
                    var14 = var14.unsafe_rawColors;
                    var14 = var14.WHITE_500;
                    var12['color'] = var14;
                    var12 = var11.bind(var5)(var13, var12);
                    var6['children'] = var12;
                    var8 = var11.bind(var5)(var9, var6);
case 31:
                    var6 = new Array(4);
                    var6[0] = var8;
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var11 = 29;
                    var11 = var12[var11];
                    var14 = var8.bind(var5)(var11);
                    var11 = {};
                    var13 = _closure2_slot2;
                    var16 = var13.verifiedRoleIcon;
                    var11['style'] = var16;
                    var15 = _closure2_slot0;
                    var11['guildId'] = var15;
                    var11['role'] = var1;
                    var15 = 24;
                    var11['size'] = var15;
                    var11 = var9.bind(var5)(var14, var11);
                    var6[1] = var11;
                    var11 = _closure1_slot0;
                    var7 = 30;
                    var7 = var12[var7];
                    var7 = var11.bind(var5)(var7);
                    var14 = var7.Text;
                    var7 = {'variant': 'text-md/medium', 'color': 'header-primary', 'lineClamp': 1};
                    var15 = var13.verifiedRoleName;
                    var7['style'] = var15;
                    var15 = var1.name;
                    var7['children'] = var15;
                    var7 = var9.bind(var5)(var14, var7);
                    var6[2] = var7;
                    var7 = 31;
                    var7 = var12[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = {};
                    var13 = var13.platformIconContainer;
                    var7['style'] = var13;
                    var13 = new Array(0);
                    var7['users'] = var13;
                    var7['renderedUsers'] = var10;
                    var10 = 3;
                    var7['max'] = var10;
                    var10 = false;
                    var7['withNames'] = var10;
                    var10 = 11;
                    var10 = var12[var10];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.AvatarSizes;
                    var10 = var10.XSMALL;
                    var7['avatarSize'] = var10;
                    var10 = true;
                    var7['withPlusCount'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[3] = var7;
                    var2['children'] = var6;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var11);
            var10['children'] = var11;
            var10 = var4.bind(var5)(var3, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();