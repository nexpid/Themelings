// app/modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
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
    var12 = 4;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isEveryoneRole;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var4 = var4.Permissions;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var7 = var4.jsxs;
    var _closure1_slot16 = var7;
    var4 = var4.Fragment;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingVertical'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['search'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingBottom'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['searchAtTop'] = var9;
    var9 = {};
    var13 = 16;
    var9['paddingHorizontal'] = var13;
    var4['permissionHint'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var13;
    var4['formRow'] = var9;
    var9 = {'lineHeight': 20, 'flexShrink': 1};
    var4['formLabel'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': 8, 'alignItems': 'center'};
    var4['labelWithTagContainer'] = var9;
    var9 = {};
    var9['marginLeft'] = var12;
    var4['formSwitch'] = var9;
    var9 = {'backgroundColor': 'transparent', 'paddingTop': 40};
    var4['emptyState'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_NORMAL;
    var9['color'] = var10;
    var4['emptyStateText'] = var9;
    var9 = {};
    var10 = 'uppercase';
    var9['textTransform'] = var10;
    var4['subHead'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditPermission(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.guild;
            var _closure2_slot0 = var3;
            var14 = var1.role;
            var _closure2_slot1 = var14;
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
            var _closure2_slot12 = var4;
            var1 = _closure1_slot18;
            var13 = var1.bind(var4)();
            var _closure2_slot4 = var13;
            var2 = _closure1_slot12;
            var1 = var2.getCurrentUser;
            var16 = var1.bind(var2)();
            var6 = null;
            var1 = var6 != var16;
            var9 = undefined;
            if(!var1) { _fun0001_ip = 160; continue _fun0001 }
 123:
            var2 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 11;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.getHighestRole;
            var1 = var16.id;
            var9 = var2.bind(var5)(var3, var1);
 160:
            _closure2_slot5 = var9;
            var5 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var8 = var5.bind(var4)(var2);
            var5 = var8.isRoleHigher;
            var12 = var6 == var16;
            var2 = undefined;
            if(var12) { _fun0001_ip = 204; continue _fun0001 }
 199:
            var2 = var16.id;
 204:
            var27 = var8;
            var26 = var3;
            var25 = var2;
            var24 = var9;
            var23 = var14;
            var2 = var27[var5](var26, var25, var24, var23, var22);
            var12 = !var2;
            _closure2_slot6 = var12;
            var2 = _closure1_slot10;
            var19 = var2.bind(var4)(var14);
            var5 = _closure1_slot5;
            var8 = var5.useState;
            var2 = '';
            var2 = var8.bind(var5)(var2);
            var18 = _closure1_slot4;
            var15 = 2;
            var2 = var18.bind(var4)(var2, var15);
            var20 = 0;
            var17 = var2[var20];
            _closure2_slot7 = var17;
            var9 = 1;
            var2 = var2[var9];
            _closure2_slot8 = var2;
            var8 = var5.useState;
            var2 = false;
            var8 = var8.bind(var5)(var2);
            var8 = var18.bind(var4)(var8, var15);
            var15 = var8[var20];
            _closure2_slot9 = var15;
            var8 = var8[var9];
            _closure2_slot10 = var8;
            var9 = _closure1_slot1;
            var15 = _closure1_slot3;
            var8 = 12;
            var8 = var15[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var6 != var3;
            var6 = 'Guild cannot be null';
            var6 = var9.bind(var4)(var8, var6);
            var6 = _closure1_slot9;
            var6 = var6.bind(var4)(var3, var16);
            var8 = _closure1_slot2;
            var1 = var15[var1];
            var9 = var8.bind(var4)(var1);
            var8 = var9.can;
            var1 = {};
            var18 = _closure1_slot14;
            var18 = var18.ADMINISTRATOR;
            var1['permission'] = var18;
            var1['user'] = var16;
            var1['context'] = var3;
            var9 = var8.bind(var9)(var1);
            var8 = _closure1_slot0;
            var1 = 13;
            var1 = var15[var1];
            var1 = var8.bind(var4)(var1);
            var15 = var1.GuildPinPermissionExperiment;
            var8 = var15.useExperiment;
            var1 = {};
            var16 = var3.id;
            var1['guildId'] = var16;
            var16 = 'GuildSettingsRoleEditPermissions';
            var1['location'] = var16;
            var1 = var8.bind(var15)(var1);
            var1 = var1.enabled;
            _closure2_slot11 = var1;
            var1 = var5.useRef;
            var1 = var1.bind(var5)(var2);
            _closure2_slot12 = var1;
            var5 = _closure1_slot15;
            var2 = _closure1_slot6;
            var1 = {};
            if(var6) { _fun0001_ip = 522; continue _fun0001 }
 510:
            var8 = !var12;
            if(var12) { _fun0001_ip = 519; continue _fun0001 }
 516:
            var8 = var9;
 519:
            var6 = var8;
 522:
            if(!var6) { _fun0001_ip = 660; continue _fun0001 }
 528:
            var12 = _closure1_slot15;
            var16 = _closure1_slot0;
            var22 = _closure1_slot3;
            var8 = 14;
            var8 = var22[var8];
            var8 = var16.bind(var4)(var8);
            var9 = var8.TextWithIOSLinkWorkaround;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            var15 = var13.permissionHint;
            var8['style'] = var15;
            var15 = 15;
            var18 = var22[var15];
            var18 = var16.bind(var4)(var18);
            var21 = var18.intl;
            var18 = var21.format;
            var15 = var22[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.ZhSOBw;
            var15 = {};
            var22 = function onTemplateOpen() {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 16;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 18;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 17;
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
            var15['onTemplateOpen'] = var22;
            var15 = var18.bind(var21)(var16, var15);
            var8['children'] = var15;
            var6 = var12.bind(var4)(var9, var8);
 660:
            var1['children'] = var6;
            var8 = var5.bind(var4)(var2, var1);
            var9 = _closure1_slot1;
            var16 = _closure1_slot3;
            var1 = 19;
            var1 = var16[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.generateGuildPermissionSpec;
            var3 = var1.bind(var2)(var3);
            var2 = var3.map;
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
                var1[var2] = var3;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.permissions;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.title;
                var1['title'] = var3;
                var2 = var2.permissions;
                var1['data'] = var2;
                return var1;
            };
            var12 = var2.bind(var3)(var1);
            var1 = var12.length;
            var6 = var1 > var20;
            var3 = _closure1_slot16;
            var2 = _closure1_slot17;
            var1 = {};
            var15 = _closure1_slot15;
            var5 = 20;
            var5 = var16[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['role'] = var14;
            var9 = var15.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var14 = _closure1_slot6;
            var9 = {};
            var18 = var13.search;
            var16 = new Array(2);
            var16[0] = var18;
            var18 = undefined;
            if(var19) { _fun0001_ip = 843; continue _fun0001 }
 833:
            var19 = {};
            var19['paddingTop'] = var20;
            var18 = var19;
 843:
            var16[1] = var18;
            var9['style'] = var16;
            var19 = _closure1_slot15;
            var18 = _closure1_slot0;
            var20 = _closure1_slot3;
            var16 = 21;
            var16 = var20[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.SearchField;
            var16 = {};
            var20 = 'md';
            var16['size'] = var20;
            var20 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = var4.trimStart;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var3 = var3 === var4;
                    if(var3) { _fun0002_ip = 47; continue _fun0002 }
 38:
                    var4 = _closure2_slot12;
                    var3 = var4.current;
 47:
                    if(var3) { _fun0002_ip = 117; continue _fun0002 }
 50:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 22;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot13;
                    var4 = var3.SEARCH_STARTED;
                    var3 = {};
                    var7 = 'Permissions';
                    var3['search_type'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure2_slot12;
                    var2 = true;
                    var3['current'] = var2;
 117:
                    return var1;
                }
            };
            var16['onChange'] = var20;
            var16 = var19.bind(var4)(var18, var16);
            var9['children'] = var16;
            var9 = var15.bind(var4)(var14, var9);
            var5[1] = var9;
            var5[2] = var8;
            var9 = _closure1_slot15;
            if(var6) { _fun0001_ip = 1076; continue _fun0001 }
 937:
            var8 = _closure1_slot1;
            var18 = _closure1_slot3;
            var6 = 28;
            var6 = var18[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var14 = _closure1_slot0;
            var15 = 29;
            var15 = var18[var15];
            var15 = var14.bind(var4)(var15);
            var15 = var15.NoResultsAlt;
            var6['Illustration'] = var15;
            var15 = var13.emptyState;
            var6['style'] = var15;
            var13 = var13.emptyStateText;
            var6['bodyStyle'] = var13;
            var13 = 15;
            var15 = var18[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.Psh5OD;
            var13 = {};
            var13['query'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var6['body'] = var13;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 1157; continue _fun0001;
 1076:
            var8 = _closure1_slot8;
            var7 = {};
            var7['sections'] = var12;
            var12 = function renderItem(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var14 = var2.index;
                    var11 = var2.section;
                    var20 = var1.description;
                    var18 = var1.title;
                    var12 = var1.flag;
                    var _closure3_slot0 = var12;
                    var8 = _closure2_slot6;
                    if(!var8) { _fun0003_ip = 62; continue _fun0003 }
 50:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot5;
                    var8 = var3 === var2;
 62:
                    if(var8) { _fun0003_ip = 69; continue _fun0003 }
 65:
                    var8 = _closure2_slot6;
 69:
                    if(var8) { _fun0003_ip = 98; continue _fun0003 }
 72:
                    var4 = _closure1_slot11;
                    var3 = var4.can;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var12, var2);
                    var8 = !var2;
 98:
                    if(var8) { _fun0003_ip = 214; continue _fun0003 }
 101:
                    var6 = _closure1_slot11;
                    var5 = var6.can;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var15 = _closure2_slot1;
                    var10 = var15.id;
                    var2 = {};
                    var26 = var2;
                    var25 = var15;
                    var15 = copyDataProperties(var26, var25);
                    var16 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var13 = 23;
                    var15 = var15[var13];
                    var13 = undefined;
                    var16 = var16.bind(var13)(var15);
                    var15 = var16.remove;
                    var13 = _closure2_slot2;
                    var15 = var15.bind(var16)(var13, var12);
                    var13 = 'permissions';
                    var2[var13] = var15;
                    var3[var10] = var2;
                    var24 = null;
                    var27 = var6;
                    var26 = var12;
                    var25 = var4;
                    var23 = var3;
                    var2 = var27[var5](var26, var25, var24, var23, var22);
                    var8 = !var2;
 214:
                    var3 = var1.flag;
                    var2 = _closure1_slot14;
                    var2 = var2.MANAGE_MESSAGES;
                    var6 = var18;
                    if(!(var3 === var2)) { _fun0003_ip = 414; continue _fun0003 }
 243:
                    var2 = _closure2_slot11;
                    var6 = var18;
                    if(!var2) { _fun0003_ip = 414; continue _fun0003 }
 256:
                    var5 = _closure1_slot16;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var2 = _closure2_slot4;
                    var2 = var2.labelWithTagContainer;
                    var3['style'] = var2;
                    var17 = _closure1_slot15;
                    var16 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var2 = 24;
                    var13 = var21[var2];
                    var2 = undefined;
                    var13 = var16.bind(var2)(var13);
                    var15 = var13.Text;
                    var13 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
                    var13['children'] = var18;
                    var15 = var17.bind(var2)(var15, var13);
                    var13 = new Array(2);
                    var13[0] = var15;
                    var15 = 25;
                    var15 = var21[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.WarningIcon;
                    var15 = {};
                    var19 = _closure1_slot1;
                    var18 = 10;
                    var18 = var21[var18];
                    var18 = var19.bind(var2)(var18);
                    var18 = var18.colors;
                    var18 = var18.STATUS_WARNING;
                    var15['color'] = var18;
                    var15 = var17.bind(var2)(var16, var15);
                    var13[1] = var15;
                    var3['children'] = var13;
                    var6 = var5.bind(var2)(var4, var3);
 414:
                    var2 = var1.flag;
                    var1 = _closure1_slot14;
                    var1 = var1.MANAGE_MESSAGES;
                    if(!(var2 === var1)) { _fun0003_ip = 441; continue _fun0003 }
 434:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0003_ip = 479; continue _fun0003 }
 441:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.renderDescription;
                    var5 = var1.bind(var2)(var20);
                    _fun0003_ip = 674; continue _fun0003;
 479:
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var17 = _closure1_slot15;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var15 = 24;
                    var13 = var22[var15];
                    var1 = undefined;
                    var13 = var21.bind(var1)(var13);
                    var16 = var13.Text;
                    var13 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
                    var18 = 26;
                    var18 = var22[var18];
                    var19 = var21.bind(var1)(var18);
                    var18 = var19.renderDescription;
                    var18 = var18.bind(var19)(var20);
                    var13['children'] = var18;
                    var16 = var17.bind(var1)(var16, var13);
                    var13 = new Array(2);
                    var13[0] = var16;
                    var15 = var22[var15];
                    var15 = var21.bind(var1)(var15);
                    var16 = var15.Text;
                    var15 = {'variant': 'text-xs/medium', 'color': 'text-warning'};
                    var18 = 15;
                    var19 = var22[var18];
                    var19 = var21.bind(var1)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var18 = var22[var18];
                    var18 = var21.bind(var1)(var18);
                    var18 = var18.t;
                    var18 = var18.2XIdPj;
                    var18 = var19.bind(var20)(var18);
                    var15['children'] = var18;
                    var15 = var17.bind(var1)(var16, var15);
                    var13[1] = var15;
                    var2['children'] = var13;
                    var5 = var4.bind(var1)(var3, var2);
 674:
                    var4 = _closure1_slot15;
                    var2 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var1 = 27;
                    var1 = var13[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.FormSwitchRow;
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
                    var11 = _closure2_slot4;
                    var11 = var11.formRow;
                    var1['DEPRECATED_style'] = var11;
                    var11 = _closure1_slot2;
                    var10 = 23;
                    var10 = var13[var10];
                    var11 = var11.bind(var3)(var10);
                    var10 = var11.has;
                    var9 = _closure2_slot2;
                    var9 = var10.bind(var11)(var9, var12);
                    var1['value'] = var9;
                    var1['disabled'] = var8;
                    var7 = function onValueChange(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = _closure2_slot3;
                            var5 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var8 = var5.bind(var1)(var3);
                            var3 = arg1;
                            if(var3) { _fun0004_ip = 63; continue _fun0004 }
 38:
                            var6 = var8.remove;
                            var5 = _closure2_slot2;
                            var3 = _closure3_slot0;
                            var3 = var6.bind(var8)(var5, var3);
                            _fun0004_ip = 85; continue _fun0004;
 63:
                            var7 = var8.add;
                            var6 = _closure2_slot2;
                            var5 = _closure3_slot0;
                            var3 = var7.bind(var8)(var6, var5);
 85:
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
                var4 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 27;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormTitle;
                var1 = {};
                var1['title'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7['renderSectionHeader'] = var12;
            var12 = function ItemSeparatorComponent() {
                var4 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 27;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormDivider;
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
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
 1157:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();