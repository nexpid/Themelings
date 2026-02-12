// app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var _closure1_slot29 = var1;
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
                var3 = 19;
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
                var4 = _closure1_slot29;
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
        var4 = _closure1_slot29;
        var4 = var4.bind(var6)(var5);
        var1['hasSearchQuery'] = var4;
        var1['filteredRoles'] = var3;
        var1['setSearchQuery'] = var2;
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function JointPermissionMigrationCallout(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = var2.guild;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot5;
            var4 = var6.useEffect;
            var3 = new Array(1);
            var3[0] = var5;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 25;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed;
                var2 = 26;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var4 = var2.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION;
                var7 = _closure2_slot0;
                var3 = var7.id;
                var2 = {};
                var8 = _closure1_slot21;
                var8 = var8.INDIRECT_ACTION;
                var2['dismissAction'] = var8;
                var7 = var7.id;
                var2['guildId'] = var7;
                var7 = true;
                var2['forceTrack'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 27;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 29;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 28;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var7 = _closure2_slot0;
                var8 = var7.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'permission-migration-';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var2['guild'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var6 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 30;
            var1 = var8[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useExperiment;
            var1 = {};
            var5 = var5.id;
            var1['guildId'] = var5;
            var5 = 'JointPermissionMigrationCallout';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            var3 = _closure1_slot22;
            var5 = _closure1_slot0;
            var2 = 31;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.RowButton;
            var5 = {};
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = _closure1_slot27;
            var5['icon'] = var1;
            var1 = 'primary';
            var5['variant'] = var1;
            var8 = _closure1_slot0;
            var11 = _closure1_slot3;
            var1 = 32;
            var9 = var11[var1];
            var9 = var8.bind(var4)(var9);
            var12 = var9.intl;
            var10 = var12.string;
            var9 = var11[var1];
            var9 = var8.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.PggHmu;
            var9 = var10.bind(var12)(var9);
            var5['label'] = var9;
            var9 = var11[var1];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var1 = var11[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var8 = var1.YUC2bm;
            var1 = {};
            var1 = var9.bind(var10)(var8, var1);
            var5['subLabel'] = var1;
            var5['onPress'] = var6;
            var1 = var5;
            _fun0003_ip = 15; continue _fun0003;
case 13:
            var8 = _closure1_slot26;
            var5['icon'] = var8;
            var8 = 'primary';
            var5['variant'] = var8;
            var8 = _closure1_slot0;
            var11 = _closure1_slot3;
            var7 = 32;
            var9 = var11[var7];
            var9 = var8.bind(var4)(var9);
            var12 = var9.intl;
            var10 = var12.string;
            var9 = var11[var7];
            var9 = var8.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.ExNRsW;
            var9 = var10.bind(var12)(var9);
            var5['label'] = var9;
            var9 = var11[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.qFXssF;
            var7 = {};
            var7 = var9.bind(var10)(var8, var7);
            var5['subLabel'] = var7;
            var5['onPress'] = var6;
            var1 = var5;
case 15:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
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
    var4 = var14.bind(var1)(var4);
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
    var16 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isEveryoneRole;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var12 = 8;
    var4 = var6[var12];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
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
    var17 = var4.Fonts;
    var4 = var4.Permissions;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot22 = var8;
    var7 = var4.jsxs;
    var _closure1_slot23 = var7;
    var4 = var4.Fragment;
    var _closure1_slot24 = var4;
    var18 = 16;
    var4 = var6[var18];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {};
    var4['flex'] = var13;
    var7['container'] = var4;
    var4 = {};
    var4['paddingHorizontal'] = var11;
    var7['scrollContainer'] = var4;
    var4 = {};
    var13 = 17;
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var4['paddingTop'] = var11;
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var4['paddingHorizontal'] = var11;
    var7['searchWrapper'] = var4;
    var4 = {};
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var4['paddingVertical'] = var11;
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var4['gap'] = var11;
    var7['subheaderContainer'] = var4;
    var4 = {'paddingBottom': 16, 'alignItems': 'center'};
    var7['emptySubheaderContainer'] = var4;
    var4 = {'backgroundColor': null, 'width': '100%', 'flex': 1, 'alignItems': 'center'};
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var4['backgroundColor'] = var11;
    var15 = '100%';
    var7['emptyIlloContainer'] = var4;
    var4 = {'marginTop': 28, 'width': '100%'};
    var7['emptyIllo'] = var4;
    var4 = {'marginTop': 0, 'aspectRatio': 2.75, 'width': '100%', 'height': 'auto'};
    var7['emptyIlloLarge'] = var4;
    var4 = 24;
    var11 = {'paddingHorizontal': 16, 'paddingTop': 8, 'paddingBottom': 24, 'alignItems': 'center'};
    var7['emptySubheaderBody'] = var11;
    var11 = {};
    var19 = 18;
    var19 = var6[var19];
    var20 = var14.bind(var1)(var19);
    var19 = var17.DISPLAY_EXTRABOLD;
    var17 = var6[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.MOBILE_TEXT_HEADING_PRIMARY;
    var22 = var20.bind(var1)(var19, var17, var4);
    var23 = var11;
    var17 = copyDataProperties(var23, var22);
    var17 = 'marginTop';
    var11[var17] = var18;
    var7['subheader'] = var11;
    var11 = {'marginTop': 8, 'textAlign': 'center'};
    var7['subheaderBody'] = var11;
    var11 = {'flexGrow': 0, 'marginTop': 16};
    var7['subheaderButton'] = var11;
    var11 = {'lineHeight': 18, 'textAlign': 'center'};
    var7['subheaderDescription'] = var11;
    var11 = {};
    var16 = var16.hairlineWidth;
    var11['height'] = var16;
    var11['width'] = var15;
    var7['divider'] = var11;
    var11 = {'marginTop': 2, 'marginBottom': 24};
    var7['everyoneWrapper'] = var11;
    var11 = {};
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11['marginTop'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var11['marginLeft'] = var13;
    var7['edittingRolesHeader'] = var11;
    var11 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var7['rolesHeader'] = var11;
    var11 = {'marginBottom': 8, 'flexDirection': 'row', 'alignItems': 'center'};
    var7['reorderButton'] = var11;
    var11 = {};
    var11['marginLeft'] = var12;
    var7['reorderButtonText'] = var11;
    var11 = {'padding': 16, 'paddingTop': 8, 'lineHeight': 18};
    var7['rolesBody'] = var11;
    var11 = {};
    var12 = 0.4;
    var11['opacity'] = var12;
    var7['emptyRolesIcon'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot25 = var7;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var10 = var7.ShieldLockIcon;
    var7 = {};
    var9 = 'text-feedback-warning';
    var7['color'] = var9;
    var7 = var8.bind(var1)(var10, var7);
    var _closure1_slot26 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ShieldLockIcon;
    var4 = {};
    var4['color'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot27 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NavScrim;
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot28 = var4;
    var4 = 64;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsModalRoles(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var7 = var2.guildId;
            var _closure2_slot0 = var7;
            var21 = var2.contentContainerStyle;
            var2 = _closure1_slot25;
            var4 = undefined;
            var20 = var2.bind(var4)();
            var _closure2_slot1 = var20;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var27 = null;
            var22 = var2.bind(var3)(var27);
            var13 = _closure1_slot0;
            var18 = _closure1_slot3;
            var2 = 34;
            var2 = var18[var2];
            var3 = var13.bind(var4)(var2);
            var2 = var3.useNavigation;
            var3 = var2.bind(var3)();
            var _closure2_slot2 = var3;
            var5 = _closure1_slot1;
            var2 = 35;
            var2 = var18[var2];
            var2 = var5.bind(var4)(var2);
            var11 = var2.bind(var4)();
            var _closure2_slot3 = var11;
            var12 = 21;
            var2 = var18[var12];
            var9 = var13.bind(var4)(var2);
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
            var10 = var13.bind(var4)(var2);
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(!var8) { _fun0005_ip = 16; continue _fun0005 }
case 5:
                    var9 = _closure1_slot11;
                    var8 = var9.getEveryoneRole;
                    var7 = var8.bind(var9)(var6);
case 16:
                    var1['guildEveryoneRole'] = var7;
                    var10 = _closure1_slot10;
                    var9 = var10.getMemberCount;
                    var11 = var2 == var6;
                    var7 = undefined;
                    var8 = undefined;
                    if(var11) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var8 = var6.id;
case 17:
                    var9 = var9.bind(var10)(var8);
                    var10 = var2 != var9;
                    var8 = 0;
                    if(!var10) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var8 = var9;
case 19:
                    var1['memberCount'] = var8;
                    var10 = _closure1_slot14;
                    var9 = var10.getRoleMemberCount;
                    var11 = var2 == var6;
                    var8 = undefined;
                    if(var11) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var8 = var6.id;
case 21:
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
                    if(!var4) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var4 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 36;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getHighestRole;
                    var2 = var3.bind(var4)(var6, var5);
case 23:
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
            var15 = var5.roleMemberCount;
            var _closure2_slot8 = var15;
            var19 = var5.sortedGuildRoles;
            var _closure2_slot9 = var19;
            var17 = var5.rolesOrder;
            var _closure2_slot10 = var17;
            var30 = var5.currentUserId;
            var _closure2_slot11 = var30;
            var25 = var5.highestRole;
            var _closure2_slot12 = var25;
            var5 = function useRoleJustCreatedHelper(arg1) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 20;
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
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var5 = undefined;
                        if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        return var5;
case 25:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.current;
                                var4 = null;
                                var1 = var4 == var2;
                                var3 = var2;
                                if(var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                                var2 = var2._listRef;
                                var1 = var4 == var2;
                                var3 = var2;
case 27:
                                var2 = var3;
                                if(var1) { _fun0007_ip = 5; continue _fun0007 }
case 29:
                                var3 = var3.current;
                                var1 = var4 == var3;
                                var2 = var3;
case 5:
                                if(var1) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                                var1 = var2.scrollToEnd;
                                var1 = var1.bind(var2)();
case 30:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 20;
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
                            var2 = 20;
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
            var5 = var5.bind(var4)(var22);
            var5 = function useGuildRoleAccessGuard(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 21;
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
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = _closure1_slot12;
                        var3 = var4.getGuild;
                        var1 = _closure3_slot0;
                        var5 = var3.bind(var4)(var1);
                        var1 = {};
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                        var6 = _closure1_slot13;
                        var4 = var6.canAccessGuildSettings;
                        var3 = var4.bind(var6)(var5);
case 32:
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure3_slot2;
                        if(!var1) { _fun0009_ip = 26; continue _fun0009 }
case 10:
                        var1 = _closure3_slot1;
case 26:
                        if(var1) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 22;
                        var1 = var4[var1];
                        var2 = undefined;
                        var5 = var3.bind(var2)(var1);
                        var1 = var5.terminate;
                        var1 = var1.bind(var5)();
                        var1 = 23;
                        var1 = var4[var1];
                        var2 = var3.bind(var2)(var1);
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5 = var5.bind(var4)(var7);
            var14 = _closure1_slot5;
            var7 = var14.useState;
            var5 = false;
            var14 = var7.bind(var14)(var5);
            var7 = _closure1_slot4;
            var5 = 2;
            var7 = var7.bind(var4)(var14, var5);
            var14 = 0;
            var16 = var7[var14];
            var _closure2_slot13 = var16;
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot14 = var5;
            var5 = _closure1_slot30;
            var5 = var5.bind(var4)(var19, var16);
            var7 = var5.filteredRoles;
            var _closure2_slot15 = var7;
            var32 = var5.hasSearchQuery;
            var _closure2_slot16 = var32;
            var5 = var5.setSearchQuery;
            var _closure2_slot17 = var5;
            var12 = var18[var12];
            var18 = var13.bind(var4)(var12);
            var13 = var18.useStateFromStoresArray;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var1 = new Array(0);
                    _fun0010_ip = 11; continue _fun0010;
case 36:
                    var5 = _closure1_slot11;
                    var4 = var5.getManyRoles;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot10;
                    var1 = var4.bind(var5)(var3, var2);
case 11:
                    return var1;
                }
            };
            var18 = var13.bind(var18)(var12, var8);
            var _closure2_slot18 = var18;
            var13 = _closure1_slot5;
            var12 = var13.useMemo;
            var8 = new Array(8);
            var8[0] = var19;
            var8[1] = var18;
            var8[2] = var17;
            var8[3] = var15;
            var8[4] = var7;
            var8[5] = var9;
            var8[6] = var30;
            var8[7] = var25;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                    var6 = _closure2_slot15;
                    _fun0011_ip = 40; continue _fun0011;
case 38:
                    var6 = _closure2_slot18;
case 40:
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
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var4 = arg1;
                            var1 = {};
                            var1['role'] = var4;
                            var3 = _closure2_slot8;
                            var2 = null;
                            var6 = var2 == var3;
                            var3 = undefined;
                            if(var6) { _fun0012_ip = 41; continue _fun0012 }
case 42:
                            var5 = _closure2_slot8;
                            var4 = var4.id;
                            var3 = var5[var4];
case 41:
                            var4 = var2 != var3;
                            var2 = 0;
                            if(!var4) { _fun0012_ip = 43; continue _fun0012 }
case 32:
                            var2 = var3;
case 43:
                            var1['memberCount'] = var2;
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var3);
                    var3 = _closure2_slot5;
                    var6 = var4 != var3;
                    var3 = 0;
                    var4 = 0;
                    if(!var6) { _fun0011_ip = 44; continue _fun0011 }
case 34:
                    var6 = var5.findIndex;
                    var2 = function(arg1) {
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 36;
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
case 44:
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
            var7 = var12.bind(var13)(var7, var8);
            var19 = var7.roleData;
            var _closure2_slot19 = var19;
            var15 = var7.firstEditableIndex;
            var _closure2_slot20 = var15;
            var8 = var7.numSortableRoles;
            var29 = var7.hasRoles;
            var _closure2_slot21 = var29;
            var17 = _closure1_slot5;
            var13 = var17.useCallback;
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
            var23 = var13.bind(var17)(var7, var12);
            var17 = _closure1_slot5;
            var13 = var17.useCallback;
            var12 = new Array(1);
            var12[0] = var9;
            var7 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 19;
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
                    var7 = 37;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.collectGuildAnalyticsMetadata;
                    var11 = _closure2_slot5;
                    var7 = null;
                    var11 = var7 == var11;
                    var7 = undefined;
                    if(var11) { _fun0013_ip = 45; continue _fun0013 }
case 18:
                    var10 = _closure2_slot5;
                    var7 = var10.id;
case 45:
                    var12 = var8.bind(var9)(var7);
                    var13 = var3;
                    var7 = copyDataProperties(var13, var12);
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 38;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.open;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var24 = var13.bind(var17)(var7, var12);
            var _closure2_slot22 = var24;
            var17 = _closure1_slot5;
            var13 = var17.useCallback;
            var12 = new Array(1);
            var12[0] = var3;
            var7 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var7 = arguments[1];
                    var1 = undefined;
                    if(!(var7 === var1)) { _fun0014_ip = 46; continue _fun0014 }
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
            var18 = var13.bind(var17)(var7, var12);
            var _closure2_slot23 = var18;
            var17 = _closure1_slot5;
            var13 = var17.useCallback;
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
            var7 = var13.bind(var17)(var7, var12);
            var _closure2_slot24 = var7;
            var17 = _closure1_slot5;
            var13 = var17.useCallback;
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
            var5 = var13.bind(var17)(var5, var12);
            var _closure2_slot25 = var5;
            var26 = _closure1_slot5;
            var17 = var26.useCallback;
            var13 = new Array(2);
            var13[0] = var9;
            var13[1] = var5;
            var12 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var2 = var3.getUpdates;
                    var4 = var2.bind(var3)();
                    var3 = var4.length;
                    var2 = 0;
                    var2 = var3 > var2;
                    if(!var2) { _fun0015_ip = 11; continue _fun0015 }
case 48:
                    var5 = _closure2_slot5;
                    var3 = null;
                    var2 = var3 != var5;
case 11:
                    if(!var2) { _fun0015_ip = 49; continue _fun0015 }
case 50:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 39;
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
            var12 = var17.bind(var26)(var12, var13);
            var _closure2_slot26 = var12;
            var28 = _closure1_slot5;
            var26 = var28.useCallback;
            var17 = new Array(1);
            var17[0] = var15;
            var13 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot20;
                    var3 = 0;
                    if(!(!(var4 >= var3))) { _fun0016_ip = 51; continue _fun0016 }
case 25:
                    var5 = var2.to;
                    _fun0016_ip = 52; continue _fun0016;
case 51:
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.max;
                    var3 = var2.to;
                    var1 = _closure2_slot20;
                    var5 = var4.bind(var6)(var3, var1);
case 52:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 40;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.updateRoleOrder;
                    var2 = var2.from;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                }
            };
            var17 = var26.bind(var28)(var13, var17);
            var31 = _closure1_slot5;
            var28 = var31.useCallback;
            var26 = new Array(5);
            var26[0] = var20;
            var26[1] = var19;
            var26[2] = var32;
            var26[3] = var16;
            var26[4] = var5;
            var13 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = _closure1_slot23;
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
                    if(!var9) { _fun0017_ip = 53; continue _fun0017 }
case 54:
                    var9 = _closure2_slot1;
                    var8 = var9.edittingRolesHeader;
case 53:
                    var6[1] = var8;
                    var5['style'] = var6;
                    var9 = _closure1_slot22;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 41;
                    var6 = var10[var6];
                    var6 = var12.bind(var1)(var6);
                    var8 = var6.TableRowGroupTitle;
                    var6 = {};
                    var14 = 32;
                    var13 = var10[var14];
                    var13 = var12.bind(var1)(var13);
                    var15 = var13.intl;
                    var13 = var15.formatToPlainString;
                    var10 = var10[var14];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.t;
                    var12 = var10.38N3Vz;
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
                    if(var10) { _fun0017_ip = 55; continue _fun0017 }
case 56:
                    var10 = _closure2_slot16;
                    var9 = null;
                    if(var10) { _fun0017_ip = 55; continue _fun0017 }
case 57:
                    var13 = _closure1_slot23;
                    var22 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var10 = 42;
                    var10 = var19[var10];
                    var10 = var22.bind(var1)(var10);
                    var12 = var10.PressableOpacity;
                    var10 = {};
                    var15 = 'text';
                    var10['accessibilityRole'] = var15;
                    var15 = var19[var14];
                    var15 = var22.bind(var1)(var15);
                    var17 = var15.intl;
                    var16 = var17.string;
                    var15 = var19[var14];
                    var15 = var22.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.0dOFq+;
                    var15 = var16.bind(var17)(var15);
                    var10['accessibilityLabel'] = var15;
                    var15 = _closure2_slot25;
                    var10['onPress'] = var15;
                    var20 = _closure2_slot1;
                    var15 = var20.reorderButton;
                    var10['style'] = var15;
                    var17 = _closure1_slot22;
                    var15 = 43;
                    var15 = var19[var15];
                    var15 = var22.bind(var1)(var15);
                    var16 = var15.ArrowsUpDownIcon;
                    var15 = {};
                    var21 = _closure1_slot1;
                    var18 = 17;
                    var18 = var19[var18];
                    var18 = var21.bind(var1)(var18);
                    var18 = var18.colors;
                    var18 = var18.TEXT_LINK;
                    var15['color'] = var18;
                    var18 = 'sm';
                    var15['size'] = var18;
                    var16 = var17.bind(var1)(var16, var15);
                    var15 = new Array(2);
                    var15[0] = var16;
                    var18 = _closure1_slot22;
                    var16 = 44;
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
                    var19 = var19.0dOFq+;
                    var19 = var20.bind(var21)(var19);
                    var16['children'] = var19;
                    var16 = var18.bind(var1)(var17, var16);
                    var15[1] = var16;
                    var10['children'] = var15;
                    var9 = var13.bind(var1)(var12, var10);
case 55:
                    var8[1] = var9;
                    var5['children'] = var8;
                    var8 = var4.bind(var1)(var3, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var8 = _closure2_slot13;
                    var6 = null;
                    if(!var8) { _fun0017_ip = 58; continue _fun0017 }
case 59:
                    var9 = _closure1_slot22;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 44;
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
case 58:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var28 = var28.bind(var31)(var13, var26);
            var31 = _closure1_slot5;
            var26 = var31.useCallback;
            var13 = new Array(6);
            var13[0] = var20;
            var13[1] = var24;
            var13[2] = var29;
            var13[3] = var33;
            var13[4] = var11;
            var13[5] = var9;
            var11 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 45;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.isThemeDark;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    if(var2) { _fun0018_ip = 60; continue _fun0018 }
case 31:
                    if(var1) { _fun0018_ip = 61; continue _fun0018 }
case 62:
                    var2 = 49;
                    var2 = var4[var2];
                    var12 = var3.bind(var5)(var2);
                    _fun0018_ip = 63; continue _fun0018;
case 61:
                    var2 = 48;
                    var2 = var4[var2];
                    var12 = var3.bind(var5)(var2);
case 63:
                    _fun0018_ip = 64; continue _fun0018;
case 60:
                    if(var1) { _fun0018_ip = 65; continue _fun0018 }
case 44:
                    var1 = 47;
                    var1 = var4[var1];
                    var1 = var3.bind(var5)(var1);
                    _fun0018_ip = 19; continue _fun0018;
case 65:
                    var2 = 46;
                    var2 = var4[var2];
                    var1 = var3.bind(var5)(var2);
case 19:
                    var12 = var1;
case 64:
                    var1 = _closure2_slot21;
                    var4 = _closure1_slot23;
                    if(var1) { _fun0018_ip = 66; continue _fun0018 }
case 67:
                    var2 = _closure1_slot6;
                    var1 = {};
                    var13 = _closure2_slot1;
                    var3 = var13.emptySubheaderContainer;
                    var1['style'] = var3;
                    var6 = _closure1_slot22;
                    var3 = {};
                    var8 = var13.emptyIlloContainer;
                    var3['style'] = var8;
                    var11 = _closure1_slot22;
                    var9 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var8 = 50;
                    var8 = var14[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = {};
                    var14 = var13.emptyIllo;
                    var13 = new Array(2);
                    var13[0] = var14;
                    var15 = _closure2_slot3;
                    var14 = null;
                    if(!var15) { _fun0018_ip = 68; continue _fun0018 }
case 69:
                    var15 = _closure2_slot1;
                    var14 = var15.emptyIlloLarge;
case 68:
                    var13[1] = var14;
                    var8['style'] = var13;
                    var8['source'] = var12;
                    var8 = var11.bind(var5)(var9, var8);
                    var3['children'] = var8;
                    var6 = var6.bind(var5)(var2, var3);
                    var3 = new Array(3);
                    var3[0] = var6;
                    var8 = _closure1_slot23;
                    var9 = _closure1_slot6;
                    var6 = {};
                    var11 = _closure2_slot1;
                    var12 = var11.emptySubheaderBody;
                    var6['style'] = var12;
                    var15 = _closure1_slot22;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var13 = 44;
                    var12 = var22[var13];
                    var12 = var21.bind(var5)(var12);
                    var14 = var12.Text;
                    var12 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
                    var16 = var11.subheader;
                    var12['style'] = var16;
                    var18 = 32;
                    var16 = var22[var18];
                    var16 = var21.bind(var5)(var16);
                    var19 = var16.intl;
                    var17 = var19.string;
                    var16 = var22[var18];
                    var16 = var21.bind(var5)(var16);
                    var16 = var16.t;
                    var16 = var16.ALlnbi;
                    var16 = var17.bind(var19)(var16);
                    var12['children'] = var16;
                    var14 = var15.bind(var5)(var14, var12);
                    var12 = new Array(3);
                    var12[0] = var14;
                    var15 = _closure1_slot22;
                    var13 = var22[var13];
                    var13 = var21.bind(var5)(var13);
                    var14 = var13.Text;
                    var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                    var16 = var11.subheaderBody;
                    var13['style'] = var16;
                    var16 = var22[var18];
                    var16 = var21.bind(var5)(var16);
                    var19 = var16.intl;
                    var17 = var19.string;
                    var16 = var22[var18];
                    var16 = var21.bind(var5)(var16);
                    var16 = var16.t;
                    var16 = var16.1ydhVp;
                    var16 = var17.bind(var19)(var16);
                    var13['children'] = var16;
                    var13 = var15.bind(var5)(var14, var13);
                    var12[1] = var13;
                    var14 = _closure1_slot22;
                    var13 = {};
                    var15 = var11.subheaderButton;
                    var13['style'] = var15;
                    var17 = _closure1_slot22;
                    var15 = 51;
                    var15 = var22[var15];
                    var15 = var21.bind(var5)(var15);
                    var16 = var15.Button;
                    var15 = {};
                    var19 = var22[var18];
                    var19 = var21.bind(var5)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var18 = var22[var18];
                    var18 = var21.bind(var5)(var18);
                    var18 = var18.t;
                    var18 = var18.JZZjQK;
                    var18 = var19.bind(var20)(var18);
                    var15['text'] = var18;
                    var18 = _closure2_slot22;
                    var15['onPress'] = var18;
                    var15 = var17.bind(var5)(var16, var15);
                    var13['children'] = var15;
                    var13 = var14.bind(var5)(var9, var13);
                    var12[2] = var13;
                    var6['children'] = var12;
                    var6 = var8.bind(var5)(var9, var6);
                    var3[1] = var6;
                    var8 = _closure1_slot22;
                    var6 = {};
                    var11 = var11.divider;
                    var6['style'] = var11;
                    var6 = var8.bind(var5)(var9, var6);
                    var3[2] = var6;
                    var1['children'] = var3;
                    var1 = var4.bind(var5)(var2, var1);
                    _fun0018_ip = 70; continue _fun0018;
case 66:
                    var3 = _closure1_slot24;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var6 = {};
                    var13 = _closure2_slot1;
                    var9 = var13.subheaderContainer;
                    var6['style'] = var9;
                    var12 = _closure1_slot22;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var9 = 44;
                    var9 = var17[var9];
                    var9 = var16.bind(var5)(var9);
                    var11 = var9.Text;
                    var9 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                    var13 = var13.subheaderDescription;
                    var9['style'] = var13;
                    var13 = 32;
                    var14 = var17[var13];
                    var14 = var16.bind(var5)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.1ydhVp;
                    var13 = var14.bind(var15)(var13);
                    var9['children'] = var13;
                    var11 = var12.bind(var5)(var11, var9);
                    var9 = new Array(2);
                    var9[0] = var11;
                    var12 = _closure2_slot5;
                    var11 = null;
                    var11 = var11 != var12;
                    if(!var11) { _fun0018_ip = 71; continue _fun0018 }
case 72:
                    var14 = _closure1_slot22;
                    var13 = _closure1_slot31;
                    var12 = {};
                    var15 = _closure2_slot5;
                    var12['guild'] = var15;
                    var11 = var14.bind(var5)(var13, var12);
case 71:
                    var9[1] = var11;
                    var6['children'] = var9;
                    var8 = var4.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot22;
                    var8 = _closure1_slot6;
                    var7 = {};
                    var10 = _closure2_slot1;
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
            var26 = var26.bind(var31)(var11, var13);
            var31 = _closure1_slot5;
            var13 = var31.useCallback;
            var11 = new Array(6);
            var11[0] = var20;
            var11[1] = var18;
            var11[2] = var9;
            var11[3] = var30;
            var11[4] = var25;
            var11[5] = var10;
            var10 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0019_ip = 56; continue _fun0019 }
case 25:
                    var2 = _closure2_slot6;
                    if(!(var1 != var2)) { _fun0019_ip = 56; continue _fun0019 }
case 73:
                    var3 = _closure1_slot2;
                    var12 = _closure1_slot3;
                    var2 = 36;
                    var2 = var12[var2];
                    var5 = undefined;
                    var8 = var3.bind(var5)(var2);
                    var4 = var8.isRoleHigher;
                    var9 = _closure2_slot5;
                    var15 = _closure2_slot11;
                    var14 = _closure2_slot12;
                    var11 = _closure2_slot6;
                    var17 = var8;
                    var16 = var9;
                    var13 = var11;
                    var2 = var17[var4](var16, var15, var14, var13, var12);
                    var10 = !var2;
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.everyoneWrapper;
                    var2['style'] = var7;
                    var8 = _closure1_slot22;
                    var7 = _closure1_slot1;
                    var6 = 52;
                    var6 = var12[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = {};
                    var6['role'] = var11;
                    var6['locked'] = var10;
                    var10 = function onPress() {
                        var3 = _closure2_slot23;
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPress'] = var10;
                    var9 = var9.id;
                    var6['guildId'] = var9;
                    var9 = false;
                    var6['sorting'] = var9;
                    var9 = 0;
                    var6['numMembers'] = var9;
                    var9 = true;
                    var6['isEveryoneRole'] = var9;
                    var6['isLastRole'] = var9;
                    var6['isFirstRole'] = var9;
                    var6 = var8.bind(var5)(var7, var6);
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 56:
                    return var1;
                }
            };
            var31 = var13.bind(var31)(var10, var11);
            var13 = _closure1_slot5;
            var11 = var13.useCallback;
            var10 = new Array(7);
            var10[0] = var9;
            var33 = var19.length;
            var10[1] = var33;
            var10[2] = var30;
            var10[3] = var25;
            var10[4] = var16;
            var10[5] = var18;
            var10[6] = var7;
            var7 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = arg1;
                    var8 = arg2;
                    var1 = _closure2_slot5;
                    var11 = null;
                    if(!(var11 != var1)) { _fun0020_ip = 74; continue _fun0020 }
case 75:
                    var1 = var2.role;
                    var9 = var2.memberCount;
                    var3 = _closure1_slot2;
                    var14 = _closure1_slot3;
                    var2 = 36;
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
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot1;
                    var2 = 52;
                    var2 = var14[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var14 = _closure2_slot13;
                    var2['sorting'] = var14;
                    var12 = var11 != var12;
                    if(!var12) { _fun0020_ip = 76; continue _fun0020 }
case 21:
                    var13 = _closure1_slot8;
                    var12 = var13.bind(var5)(var1);
case 76:
                    var2['isEveryoneRole'] = var12;
                    var2['role'] = var1;
                    var2['locked'] = var10;
                    var10 = _closure2_slot23;
                    var2['onPress'] = var10;
                    var10 = _closure2_slot5;
                    var11 = var11 == var10;
                    var10 = undefined;
                    if(var11) { _fun0020_ip = 77; continue _fun0020 }
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
case 74:
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot24;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                }
            };
            var13 = var11.bind(var13)(var7, var10);
            var18 = _closure1_slot5;
            var11 = var18.useCallback;
            var10 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = new Array(0);
            var18 = var11.bind(var18)(var10, var7);
            var11 = _closure1_slot5;
            var10 = var11.useEffect;
            var7 = new Array(6);
            var7[0] = var24;
            var7[1] = var12;
            var7[2] = var5;
            var7[3] = var29;
            var7[4] = var16;
            var7[5] = var3;
            var5 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var8 = _closure2_slot13;
                    var1 = undefined;
                    var7 = undefined;
                    if(!var8) { _fun0021_ip = 33; continue _fun0021 }
case 42:
                    var7 = function() {
                        var4 = _closure1_slot22;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 53;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot25;
                        var1['onPress'] = var5;
                        var5 = 32;
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
case 33:
                    var2['headerLeft'] = var7;
                    var7 = _closure2_slot13;
                    if(var7) { _fun0021_ip = 79; continue _fun0021 }
case 54:
                    var7 = _closure2_slot21;
                    var5 = undefined;
                    if(!var7) { _fun0021_ip = 80; continue _fun0021 }
case 81:
                    var5 = function() {
                        var4 = _closure1_slot22;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 53;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var6 = _closure2_slot22;
                        var1['onPress'] = var6;
                        var6 = _closure1_slot1;
                        var5 = 54;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['source'] = var5;
                        var5 = 32;
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
case 80:
                    _fun0021_ip = 82; continue _fun0021;
case 79:
                    var5 = function() {
                        var4 = _closure1_slot22;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 53;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot26;
                        var1['onPress'] = var5;
                        var5 = 32;
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
                    var5 = 32;
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
            var5[1] = var16;
            var5[2] = var3;
            var3 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0022_ip = 83; continue _fun0022 }
case 10:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0022_ip = 53; continue _fun0022 }
case 83:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.stopReordering;
                    var1 = var1.bind(var2)();
                    _fun0022_ip = 84; continue _fun0022;
case 53:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.startReordering;
                    var1 = _closure2_slot5;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 84:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 55;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0022_ip = 85; continue _fun0022 }
case 86:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure2_slot13;
                    var5 = !var5;
                    var2['gestureEnabled'] = var5;
                    var2 = var3.bind(var4)(var2);
case 85:
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
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0023_ip = 87; continue _fun0023 }
case 25:
                    var5 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 56;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.MAX_PREFETCH_MEMBER_COUNT;
                    if(!(var5 <= var3)) { _fun0023_ip = 45; continue _fun0023 }
case 5:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 57;
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
case 45:
                    var3 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 58;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchMemberCounts;
                    var1 = _closure2_slot5;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                var1 = function() {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var1 = _closure2_slot13;
                        if(!var1) { _fun0024_ip = 88; continue _fun0024 }
case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.stopReordering;
                        var1 = var1.bind(var2)();
case 88:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot24;
            var1 = {};
            var7 = null;
            if(var16) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var5 = 10;
            var5 = var8 < var5;
            var7 = null;
            if(var5) { _fun0004_ip = 89; continue _fun0004 }
case 91:
            var9 = _closure1_slot22;
            var8 = _closure1_slot6;
            var5 = {};
            var11 = var20.searchWrapper;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var12 = 0;
            if(!var32) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var25 = _closure1_slot1;
            var30 = _closure1_slot3;
            var24 = 17;
            var24 = var30[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.spacing;
            var12 = var24.PX_16;
case 92:
            var11['paddingBottom'] = var12;
            var10[1] = var11;
            var5['style'] = var10;
            var12 = _closure1_slot22;
            var11 = _closure1_slot0;
            var24 = _closure1_slot3;
            var10 = 59;
            var10 = var24[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.SearchField;
            var10 = {};
            var24 = 'md';
            var10['size'] = var24;
            var10['onChange'] = var23;
            var10 = var12.bind(var4)(var11, var10);
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 89:
            var5 = new Array(4);
            var5[0] = var7;
            var9 = _closure1_slot22;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = null;
            if(!var16) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var23 = _closure1_slot23;
            var12 = _closure1_slot24;
            var11 = {};
            var25 = var28.bind(var4)();
            var24 = new Array(2);
            var24[0] = var25;
            var25 = null;
            if(var29) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var34 = _closure1_slot22;
            var41 = _closure1_slot0;
            var42 = _closure1_slot3;
            var30 = 60;
            var30 = var42[var30];
            var30 = var41.bind(var4)(var30);
            var33 = var30.FormRow;
            var30 = {};
            var37 = _closure1_slot22;
            var39 = _closure1_slot1;
            var38 = 61;
            var35 = var42[var38];
            var36 = var39.bind(var4)(var35);
            var35 = {};
            var40 = var20.emptyRolesIcon;
            var35['style'] = var40;
            var38 = var42[var38];
            var38 = var39.bind(var4)(var38);
            var38 = var38.Sizes;
            var38 = var38.LARGE;
            var35['size'] = var38;
            var38 = 62;
            var38 = var42[var38];
            var38 = var39.bind(var4)(var38);
            var35['source'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var30['leading'] = var35;
            var37 = _closure1_slot22;
            var35 = 44;
            var35 = var42[var35];
            var35 = var41.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'text-md/semibold', 'color': 'interactive-text-default'};
            var38 = 32;
            var39 = var42[var38];
            var39 = var41.bind(var4)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var42[var38];
            var38 = var41.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38.nZfHsf;
            var38 = var39.bind(var40)(var38);
            var35['children'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var30['label'] = var35;
            var25 = var34.bind(var4)(var33, var30);
case 96:
            var24[1] = var25;
            var11['children'] = var24;
            var10 = var23.bind(var4)(var12, var11);
case 94:
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var9 = _closure1_slot22;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var20.container;
            var7['style'] = var10;
            var12 = _closure1_slot22;
            var11 = _closure1_slot1;
            var23 = _closure1_slot3;
            var10 = 63;
            var10 = var23[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['ref'] = var22;
            var22 = null;
            if(var16) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            var25 = _closure1_slot23;
            var24 = _closure1_slot24;
            var23 = {};
            var30 = null;
            if(var32) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            var30 = var26.bind(var4)();
case 100:
            var26 = new Array(3);
            var26[0] = var30;
            var30 = null;
            if(var32) { _fun0004_ip = 102; continue _fun0004 }
case 103:
            var30 = var31.bind(var4)();
case 102:
            var26[1] = var30;
            var27 = null;
            if(!var29) { _fun0004_ip = 104; continue _fun0004 }
case 105:
            var27 = var28.bind(var4)();
case 104:
            var26[2] = var27;
            var23['children'] = var26;
            var22 = var25.bind(var4)(var24, var23);
case 98:
            var10['header'] = var22;
            var22 = var20.container;
            var10['wrapperStyles'] = var22;
            var22 = var20.scrollContainer;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var10['contentContainerStyle'] = var20;
            var10['data'] = var19;
            var10['rowHasChanged'] = var18;
            var10['onRowMoved'] = var17;
            var16 = !var16;
            var10['disableSorting'] = var16;
            var16 = var15 >= var14;
            var14 = undefined;
            if(!var16) { _fun0004_ip = 106; continue _fun0004 }
case 107:
            var14 = var15;
case 106:
            var10['minDraggableIndex'] = var14;
            var10['renderRow'] = var13;
            var13 = 'handled';
            var10['keyboardShouldPersistTaps'] = var13;
            var13 = 16;
            var10['scrollEventThrottle'] = var13;
            var13 = true;
            var10['scrollEnabled'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[2] = var7;
            var6 = _closure1_slot28;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();