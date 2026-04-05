// app/modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx
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
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var7 = var4.Keyboard;
    var _closure1_slot7 = var7;
    var4 = var4.SectionList;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var4 = var4.Permissions;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.Fragment;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': 'transparent', 'paddingTop': 40};
    var4['emptyState'] = var9;
    var9 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['height'] = var13;
    var4['sectionSeparator'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var9['color'] = var11;
    var4['emptyStateText'] = var9;
    var9 = {};
    var9['includeFontPadding'] = var10;
    var4['subLabel'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditPermission(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guild;
            var _closure2_slot0 = var5;
            var15 = var1.role;
            var _closure2_slot1 = var15;
            var2 = var1.permissions;
            var _closure2_slot2 = var2;
            var2 = var1.onPermissionsChanged;
            var _closure2_slot3 = var2;
            var10 = var1.contentContainerStyle;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot17;
            var14 = var1.bind(var4)();
            var _closure2_slot4 = var14;
            var2 = _closure1_slot11;
            var1 = var2.getCurrentUser;
            var13 = var1.bind(var2)();
            var6 = null;
            var1 = var6 != var13;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getHighestRole;
            var1 = var13.id;
            var8 = var2.bind(var3)(var5, var1);
case 2:
            _closure2_slot5 = var8;
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var9 = 10;
            var1 = var1[var9];
            var3 = var2.bind(var4)(var1);
            var2 = var3.isRoleHigher;
            var12 = var6 == var13;
            var1 = undefined;
            if(var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var13.id;
case 4:
            var27 = var3;
            var26 = var5;
            var25 = var1;
            var24 = var8;
            var23 = var15;
            var1 = var27[var2](var26, var25, var24, var23, var22);
            var16 = !var1;
            _closure2_slot6 = var16;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = '';
            var1 = var2.bind(var3)(var1);
            var19 = _closure1_slot4;
            var17 = 2;
            var1 = var19.bind(var4)(var1, var17);
            var2 = 0;
            var18 = var1[var2];
            _closure2_slot7 = var18;
            var8 = 1;
            var1 = var1[var8];
            _closure2_slot8 = var1;
            var1 = var3.useState;
            var12 = false;
            var1 = var1.bind(var3)(var12);
            var1 = var19.bind(var4)(var1, var17);
            var17 = var1[var2];
            _closure2_slot9 = var17;
            var1 = var1[var8];
            _closure2_slot10 = var1;
            var17 = _closure1_slot1;
            var1 = _closure1_slot3;
            var8 = 11;
            var8 = var1[var8];
            var17 = var17.bind(var4)(var8);
            var8 = var6 != var5;
            var6 = 'Guild cannot be null';
            var6 = var17.bind(var4)(var8, var6);
            var6 = _closure1_slot9;
            var8 = var6.bind(var4)(var5, var13);
            var6 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var6.bind(var4)(var1);
            var6 = var9.can;
            var1 = {};
            var17 = _closure1_slot13;
            var17 = var17.ADMINISTRATOR;
            var1['permission'] = var17;
            var1['user'] = var13;
            var1['context'] = var5;
            var13 = var6.bind(var9)(var1);
            var1 = var3.useRef;
            var1 = var1.bind(var3)(var12);
            _closure2_slot11 = var1;
            var6 = _closure1_slot14;
            var3 = _closure1_slot6;
            var1 = {};
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = !var16;
            if(var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var13;
case 8:
            var8 = var9;
case 6:
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = _closure1_slot14;
            var19 = _closure1_slot0;
            var22 = _closure1_slot3;
            var9 = 12;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var13 = var9.TextWithIOSLinkWorkaround;
            var9 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var17 = 13;
            var20 = var22[var17];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.format;
            var17 = var22[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var19 = var17.ZhSOBy;
            var17 = {};
            var22 = function onTemplateOpen() {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 14;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 16;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 15;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var7 = _closure2_slot0;
                var11 = var7.id;
                var2 = _closure2_slot1;
                var10 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var3 = 'role-permission-templates-';
                var2 = '-';
                var3 = var9.bind(var3)(var11, var2, var10);
                var2 = {};
                var9 = _closure2_slot9;
                var2['permissionsEdited'] = var9;
                var8 = _closure2_slot3;
                var2['onPermissionsChanged'] = var8;
                var7 = var7.id;
                var2['guildId'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var17['onTemplateOpen'] = var22;
            var17 = var20.bind(var21)(var19, var17);
            var9['children'] = var17;
            var8 = var16.bind(var4)(var13, var9);
case 10:
            var1['children'] = var8;
            var8 = var6.bind(var4)(var3, var1);
            var9 = _closure1_slot1;
            var20 = _closure1_slot3;
            var1 = 17;
            var1 = var20[var1];
            var3 = var9.bind(var4)(var1);
            var1 = var3.generateGuildPermissionSpec;
            var5 = var1.bind(var3)(var5);
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.permissions;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.title;
                    var1 = var2.toLowerCase;
                    var3 = var1.bind(var2)();
                    var2 = var3.includes;
                    var4 = _closure2_slot7;
                    var1 = var4.trimStart;
                    var4 = var1.bind(var4)();
                    var1 = var4.toLowerCase;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = 'permissions';
                var1[1] = var3;
                return var1;
            };
            var5 = var3.bind(var5)(var1);
            var3 = var5.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.permissions;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var5 = var3.bind(var5)(var1);
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.title;
                var1['title'] = var3;
                var2 = var2.permissions;
                var1['data'] = var2;
                return var1;
            };
            var13 = var3.bind(var5)(var1);
            var1 = var13.length;
            var6 = var1 > var2;
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var16 = _closure1_slot14;
            var5 = 18;
            var5 = var20[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['role'] = var15;
            var9 = var16.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var15 = _closure1_slot6;
            var9 = {};
            var19 = _closure1_slot0;
            var17 = 19;
            var17 = var20[var17];
            var17 = var19.bind(var4)(var17);
            var19 = var17.SearchField;
            var17 = {};
            var20 = 'md';
            var17['size'] = var20;
            var20 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = var4.trimStart;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var3 = var3 === var4;
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure2_slot11;
                    var3 = var4.current;
case 12:
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot12;
                    var4 = var3.SEARCH_STARTED;
                    var3 = {};
                    var7 = 'Permissions';
                    var3['search_type'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure2_slot11;
                    var2 = true;
                    var3['current'] = var2;
case 14:
                    return var1;
                }
            };
            var17['onChange'] = var20;
            var17 = var16.bind(var4)(var19, var17);
            var9['children'] = var17;
            var9 = var16.bind(var4)(var15, var9);
            var5[1] = var9;
            var5[2] = var8;
            var9 = _closure1_slot14;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = _closure1_slot1;
            var19 = _closure1_slot3;
            var6 = 26;
            var6 = var19[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var15 = _closure1_slot0;
            var16 = 27;
            var16 = var19[var16];
            var16 = var15.bind(var4)(var16);
            var16 = var16.NoResultsAlt;
            var6['Illustration'] = var16;
            var16 = var14.emptyState;
            var6['style'] = var16;
            var14 = var14.emptyStateText;
            var6['bodyStyle'] = var14;
            var14 = 13;
            var16 = var19[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.Psh5OO;
            var14 = {};
            var14['query'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var6['body'] = var14;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var8 = _closure1_slot8;
            var7 = {};
            var7['sections'] = var13;
            var7['stickySectionHeadersEnabled'] = var12;
            var12 = function renderItem(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var14 = var2.index;
                    var11 = var2.section;
                    var17 = var1.description;
                    var6 = var1.title;
                    var12 = var1.flag;
                    var _closure3_slot0 = var12;
                    var8 = _closure2_slot6;
                    if(!var8) { _fun0003_ip = 19; continue _fun0003 }
case 15:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot5;
                    var8 = var2 === var1;
case 19:
                    if(var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var8 = _closure2_slot6;
case 20:
                    if(var8) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var3 = _closure1_slot10;
                    var2 = var3.can;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var12, var1);
                    var8 = !var1;
case 22:
                    if(var8) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var5 = _closure1_slot10;
                    var4 = var5.can;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var15 = _closure2_slot1;
                    var10 = var15.id;
                    var1 = {};
                    var21 = var1;
                    var20 = var15;
                    var15 = copyDataProperties(var21, var20);
                    var16 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var13 = 21;
                    var15 = var15[var13];
                    var13 = undefined;
                    var16 = var16.bind(var13)(var15);
                    var15 = var16.remove;
                    var13 = _closure2_slot2;
                    var15 = var15.bind(var16)(var13, var12);
                    var13 = 'permissions';
                    var1[12] = var15;
                    var2[9] = var1;
                    var19 = null;
                    var22 = var5;
                    var21 = var12;
                    var20 = var3;
                    var18 = var2;
                    var1 = var22[var4](var21, var20, var19, var18, var17);
                    var8 = !var1;
case 24:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var1 = 22;
                    var1 = var13[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var5 = var1.Text;
                    var1 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
                    var15 = _closure2_slot4;
                    var15 = var15.subLabel;
                    var1['style'] = var15;
                    var15 = 23;
                    var15 = var13[var15];
                    var16 = var2.bind(var3)(var15);
                    var15 = var16.renderDescription;
                    var15 = var15.bind(var16)(var17);
                    var1['children'] = var15;
                    var5 = var4.bind(var3)(var5, var1);
                    var1 = 24;
                    var1 = var13[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableSwitchRow;
                    var1 = {};
                    var15 = 0;
                    var15 = var15 === var14;
                    var1['start'] = var15;
                    var11 = var11.data;
                    var15 = var11.length;
                    var11 = 1;
                    var11 = var15 - var11;
                    var11 = var14 === var11;
                    var1['end'] = var11;
                    var11 = _closure1_slot2;
                    var10 = 21;
                    var10 = var13[var10];
                    var11 = var11.bind(var3)(var10);
                    var10 = var11.has;
                    var9 = _closure2_slot2;
                    var9 = var10.bind(var11)(var9, var12);
                    var1['value'] = var9;
                    var1['disabled'] = var8;
                    var7 = function onValueChange(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = _closure2_slot3;
                            var5 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 21;
                            var3 = var3[var1];
                            var1 = undefined;
                            var8 = var5.bind(var1)(var3);
                            var3 = arg1;
                            if(var3) { _fun0004_ip = 26; continue _fun0004 }
case 13:
                            var6 = var8.remove;
                            var5 = _closure2_slot2;
                            var3 = _closure3_slot0;
                            var3 = var6.bind(var8)(var5, var3);
                            _fun0004_ip = 27; continue _fun0004;
case 26:
                            var7 = var8.add;
                            var6 = _closure2_slot2;
                            var5 = _closure3_slot0;
                            var3 = var7.bind(var8)(var6, var5);
case 27:
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure2_slot10;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var1['onValueChange'] = var7;
                    var1['label'] = var6;
                    var1['subLabel'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var7['renderItem'] = var12;
            var12 = function renderSectionHeader(arg1) {
                var1 = arg1;
                var1 = var1.section;
                var5 = var1.title;
                var4 = _closure1_slot14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 25;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRowGroupTitle;
                var1 = {};
                var1['title'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7['renderSectionHeader'] = var12;
            var12 = function SectionSeparatorComponent(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.leadingItem;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var2 = _closure2_slot4;
                    var2 = var2.sectionSeparator;
                    var3['style'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 28:
                    return var1;
                }
            };
            var7['SectionSeparatorComponent'] = var12;
            var12 = function ItemSeparatorComponent() {
                var1 = null;
                return var1;
            };
            var7['ItemSeparatorComponent'] = var12;
            var11 = function keyExtractor(arg1) {
                var1 = arg1;
                var2 = var1.flag;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7['keyExtractor'] = var11;
            var11 = 'on-drag';
            var7['keyboardDismissMode'] = var11;
            var7['contentContainerStyle'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 18:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();