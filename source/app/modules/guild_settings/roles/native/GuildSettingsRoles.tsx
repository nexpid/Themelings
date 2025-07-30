// app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
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
    var _closure1_slot28 = var1;
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
 0:
                var3 = arg1;
                var1 = var3.toLowerCase;
                var3 = var1.bind(var3)();
                var1 = var3.trim;
                var6 = var1.bind(var3)();
                var _closure3_slot0 = var6;
                var1 = _closure2_slot5;
                var1 = var1.current;
                if(var1) { _fun0001_ip = 52; continue _fun0001 }
 44:
                var3 = '';
                var1 = var3 === var6;
 52:
                if(var1) { _fun0001_ip = 126; continue _fun0001 }
 55:
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
 126:
                var3 = _closure2_slot3;
                var1 = undefined;
                var3 = var3.bind(var1)(var6);
                var3 = _closure2_slot4;
                var5 = '';
                if(!(var5 !== var6)) { _fun0001_ip = 172; continue _fun0001 }
 149:
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
                _fun0001_ip = 176; continue _fun0001;
 172:
                var2 = _closure2_slot0;
 176:
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
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 59; continue _fun0002 }
 10:
                var4 = _closure1_slot28;
                var2 = _closure2_slot2;
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                if(var2) { _fun0002_ip = 46; continue _fun0002 }
 31:
                var4 = _closure2_slot4;
                var2 = _closure2_slot0;
                var2 = var4.bind(var3)(var2);
                _fun0002_ip = 59; continue _fun0002;
 46:
                var2 = _closure2_slot6;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
 59:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var7);
        var1 = {};
        var4 = _closure1_slot28;
        var4 = var4.bind(var6)(var5);
        var1['hasSearchQuery'] = var4;
        var1['filteredRoles'] = var3;
        var1['setSearchQuery'] = var2;
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function PinPermissionMigrationInfoBox(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.guild;
            var _closure2_slot0 = var5;
            var1 = _closure1_slot27;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 24;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed;
                var2 = 25;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var4 = var2.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION;
                var7 = _closure2_slot0;
                var3 = var7.id;
                var2 = {};
                var8 = _closure1_slot23;
                var8 = var8.INDIRECT_ACTION;
                var2['dismissAction'] = var8;
                var7 = var7.id;
                var2['guildId'] = var7;
                var7 = true;
                var2['forceTrack'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1 = var3.bind(var7)(var1, var2);
            var2 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 29;
            var1 = var9[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.dateFormat;
            var2 = _closure1_slot1;
            var1 = 30;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = _closure1_slot22;
            var2 = var2.bind(var4)(var1);
            var1 = 'LL';
            var12 = var3.bind(var7)(var2, var1);
            var3 = var5.features;
            var2 = var3.has;
            var1 = _closure1_slot21;
            var1 = var1.PIN_PERMISSION_MIGRATION_COMPLETE;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0003_ip = 336; continue _fun0003 }
 150:
            var3 = _closure1_slot13;
            var2 = var3.can;
            var1 = _closure1_slot20;
            var1 = var1.ADMINISTRATOR;
            var5 = var2.bind(var3)(var1, var5);
            var3 = _closure1_slot24;
            var9 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 31;
            var1 = var14[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 'text-sm/normal';
            var1['variant'] = var7;
            var7 = 27;
            var10 = var14[var7];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var7 = var14[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            if(var5) { _fun0003_ip = 289; continue _fun0003 }
 256:
            var9 = var7.cAuU1d;
            var5 = {};
            var5['breakingChangeDate'] = var12;
            var5 = var10.bind(var11)(var9, var5);
            var1['children'] = var5;
            var5 = var3.bind(var4)(var2, var1);
            _fun0003_ip = 334; continue _fun0003;
 289:
            var9 = var7.DXvUMD;
            var7 = {};
            var13 = function onClickMigrate() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 26;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 27;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.nFE8dH;
                var8 = var9.bind(var10)(var8);
                var2['title'] = var8;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var11 = var8.intl;
                var10 = var11.format;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var8 = var8.t;
                var9 = var8.1PAzQ0;
                var8 = {};
                var12 = _closure2_slot0;
                var12 = var12.name;
                var8['guildName'] = var12;
                var8 = var10.bind(var11)(var9, var8);
                var2['body'] = var8;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.ETE/oK;
                var8 = var9.bind(var10)(var8);
                var2['cancelText'] = var8;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.cY+Ooa;
                var5 = var8.bind(var9)(var5);
                var2['confirmText'] = var5;
                var5 = function onConfirm() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.migratePinPermission;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onConfirm'] = var5;
                var5 = false;
                var2['hideActionSheet'] = var5;
                var5 = 28;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.ButtonColors;
                var5 = var5.BRAND;
                var2['confirmColor'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onClickMigrate'] = var13;
            var7['breakingChangeDate'] = var12;
            var7 = var10.bind(var11)(var9, var7);
            var1['children'] = var7;
            var5 = var3.bind(var4)(var2, var1);
 334:
            _fun0003_ip = 444; continue _fun0003;
 336:
            var3 = _closure1_slot24;
            var9 = _closure1_slot0;
            var13 = _closure1_slot3;
            var1 = 31;
            var1 = var13[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 'text-sm/normal';
            var1['variant'] = var7;
            var7 = 27;
            var10 = var13[var7];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var7 = var13[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var9 = var7.Vg2oTE;
            var7 = {};
            var7['breakingChangeDate'] = var12;
            var7 = var10.bind(var11)(var9, var7);
            var1['children'] = var7;
            var5 = var3.bind(var4)(var2, var1);
 444:
            var3 = _closure1_slot24;
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 32;
            var1 = var9[var7];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = _closure1_slot0;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.InfoBoxLooks;
            var7 = var7.WARNING;
            var1['look'] = var7;
            var6 = var6.migrationInfoBox;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
    var7 = var4.Permissions;
    var _closure1_slot20 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot21 = var7;
    var4 = var4.PIN_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot24 = var7;
    var7 = var4.jsxs;
    var _closure1_slot25 = var7;
    var4 = var4.Fragment;
    var _closure1_slot26 = var4;
    var16 = 16;
    var4 = var6[var16];
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
    var11 = 17;
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
    var9['padding'] = var13;
    var4['subheaderContainer'] = var9;
    var9 = {'paddingBottom': 16, 'alignItems': 'center'};
    var4['emptySubheaderContainer'] = var9;
    var9 = {'backgroundColor': null, 'width': '100%', 'flex': 1, 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOBILE_SECONDARY;
    var9['backgroundColor'] = var13;
    var13 = '100%';
    var4['emptyIlloContainer'] = var9;
    var9 = {'marginTop': 28, 'width': '100%'};
    var4['emptyIllo'] = var9;
    var9 = {'marginTop': 0, 'aspectRatio': 2.75, 'width': '100%', 'height': 'auto'};
    var4['emptyIlloLarge'] = var9;
    var19 = 24;
    var9 = {'paddingHorizontal': 16, 'paddingTop': 8, 'paddingBottom': 24, 'alignItems': 'center'};
    var4['emptySubheaderBody'] = var9;
    var9 = {};
    var17 = 18;
    var17 = var6[var17];
    var18 = var12.bind(var1)(var17);
    var17 = var15.DISPLAY_EXTRABOLD;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.HEADER_PRIMARY;
    var21 = var18.bind(var1)(var17, var15, var19);
    var22 = var9;
    var15 = copyDataProperties(var22, var21);
    var15 = 'marginTop';
    var9[var15] = var16;
    var4['subheader'] = var9;
    var9 = {'marginTop': 8, 'textAlign': 'center'};
    var4['subheaderBody'] = var9;
    var9 = {'flexGrow': 0, 'marginTop': 16};
    var4['subheaderButton'] = var9;
    var9 = {'lineHeight': 18, 'textAlign': 'center'};
    var4['subheaderDescription'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['migrationInfoBox'] = var9;
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
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginLeft'] = var13;
    var4['edittingRolesHeader'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var4['rolesHeader'] = var9;
    var9 = {'marginBottom': 8, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['reorderButton'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_LINK;
    var9['tintColor'] = var11;
    var4['reorderIcon'] = var9;
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
    var _closure1_slot27 = var4;
    var4 = 63;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsModalRoles(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var7 = var2.guildId;
            var _closure2_slot0 = var7;
            var19 = var2.contentContainerStyle;
            var4 = undefined;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var2 = _closure1_slot27;
            var18 = var2.bind(var4)();
            var _closure2_slot1 = var18;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var25 = null;
            var20 = var2.bind(var3)(var25);
            var8 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 33;
            var2 = var11[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useNavigation;
            var3 = var2.bind(var3)();
            var _closure2_slot2 = var3;
            var5 = _closure1_slot1;
            var2 = 34;
            var2 = var11[var2];
            var2 = var5.bind(var4)(var2);
            var33 = var2.bind(var4)();
            var _closure2_slot3 = var33;
            var15 = 21;
            var2 = var11[var15];
            var10 = var8.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.theme;
                return var1;
            };
            var34 = var9.bind(var10)(var5, var2);
            var _closure2_slot4 = var34;
            var2 = var11[var15];
            var10 = var8.bind(var4)(var2);
            var9 = var10.useStateFromStoresObject;
            var2 = _closure1_slot12;
            var5 = new Array(6);
            var5[0] = var2;
            var2 = _closure1_slot11;
            var5[1] = var2;
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
 0:
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
                    if(!var8) { _fun0005_ip = 70; continue _fun0005 }
 55:
                    var9 = _closure1_slot11;
                    var8 = var9.getEveryoneRole;
                    var7 = var8.bind(var9)(var6);
 70:
                    var1['guildEveryoneRole'] = var7;
                    var10 = _closure1_slot10;
                    var9 = var10.getMemberCount;
                    var11 = var2 == var6;
                    var7 = undefined;
                    var8 = undefined;
                    if(var11) { _fun0005_ip = 101; continue _fun0005 }
 96:
                    var8 = var6.id;
 101:
                    var9 = var9.bind(var10)(var8);
                    var10 = var2 != var9;
                    var8 = 0;
                    if(!var10) { _fun0005_ip = 118; continue _fun0005 }
 115:
                    var8 = var9;
 118:
                    var1['memberCount'] = var8;
                    var10 = _closure1_slot14;
                    var9 = var10.getRoleMemberCount;
                    var11 = var2 == var6;
                    var8 = undefined;
                    if(var11) { _fun0005_ip = 147; continue _fun0005 }
 142:
                    var8 = var6.id;
 147:
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
                    if(!var4) { _fun0005_ip = 242; continue _fun0005 }
 210:
                    var4 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 35;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getHighestRole;
                    var2 = var3.bind(var4)(var6, var5);
 242:
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
            var31 = var5.highestRole;
            var _closure2_slot12 = var31;
            var5 = 36;
            var5 = var11[var5];
            var5 = var8.bind(var4)(var5);
            var11 = var5.GuildPinPermissionExperiment;
            var8 = var11.useExperiment;
            var5 = {};
            var13 = var25 == var9;
            var12 = undefined;
            if(var13) { _fun0004_ip = 416; continue _fun0004 }
 411:
            var12 = var9.id;
 416:
            var5['guildId'] = var12;
            var12 = 'GuildSettingsRoles';
            var5['location'] = var12;
            var5 = var8.bind(var11)(var5);
            var11 = var5.enabled;
            _closure2_slot13 = var11;
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
 0:
                        var2 = _closure3_slot1;
                        var5 = undefined;
                        if(var2) { _fun0006_ip = 16; continue _fun0006 }
 14:
                        return var5;
 16:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                var1 = _closure3_slot0;
                                var2 = var1.current;
                                var4 = null;
                                var1 = var4 == var2;
                                var3 = var2;
                                if(var1) { _fun0007_ip = 37; continue _fun0007 }
 24:
                                var2 = var2._listRef;
                                var1 = var4 == var2;
                                var3 = var2;
 37:
                                var2 = var3;
                                if(var1) { _fun0007_ip = 55; continue _fun0007 }
 43:
                                var3 = var3.current;
                                var1 = var4 == var3;
                                var2 = var3;
 55:
                                if(var1) { _fun0007_ip = 68; continue _fun0007 }
 58:
                                var1 = var2.scrollToEnd;
                                var1 = var1.bind(var2)();
 68:
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
            var5 = var5.bind(var4)(var20);
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
 0:
                        var4 = _closure1_slot12;
                        var3 = var4.getGuild;
                        var1 = _closure3_slot0;
                        var5 = var3.bind(var4)(var1);
                        var1 = {};
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0008_ip = 50; continue _fun0008 }
 35:
                        var6 = _closure1_slot13;
                        var4 = var6.canAccessGuildSettings;
                        var3 = var4.bind(var6)(var5);
 50:
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
 0:
                        var1 = _closure3_slot2;
                        if(!var1) { _fun0009_ip = 14; continue _fun0009 }
 10:
                        var1 = _closure3_slot1;
 14:
                        if(var1) { _fun0009_ip = 74; continue _fun0009 }
 17:
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
 74:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5 = var5.bind(var4)(var7);
            var8 = _closure1_slot5;
            var7 = var8.useState;
            var5 = false;
            var8 = var7.bind(var8)(var5);
            var7 = _closure1_slot4;
            var5 = 2;
            var7 = var7.bind(var4)(var8, var5);
            var12 = 0;
            var14 = var7[var12];
            _closure2_slot14 = var14;
            var5 = 1;
            var5 = var7[var5];
            _closure2_slot15 = var5;
            var5 = _closure1_slot29;
            var5 = var5.bind(var4)(var22, var14);
            var7 = var5.filteredRoles;
            _closure2_slot16 = var7;
            var30 = var5.hasSearchQuery;
            _closure2_slot17 = var30;
            var5 = var5.setSearchQuery;
            _closure2_slot18 = var5;
            var13 = _closure1_slot0;
            var8 = _closure1_slot3;
            var8 = var8[var15];
            var21 = var13.bind(var4)(var8);
            var15 = var21.useStateFromStoresArray;
            var8 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0010_ip = 19; continue _fun0010 }
 13:
                    var1 = new Array(0);
                    _fun0010_ip = 46; continue _fun0010;
 19:
                    var5 = _closure1_slot11;
                    var4 = var5.getManyRoles;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot10;
                    var1 = var4.bind(var5)(var3, var2);
 46:
                    return var1;
                }
            };
            var21 = var15.bind(var21)(var13, var8);
            _closure2_slot19 = var21;
            var15 = _closure1_slot5;
            var13 = var15.useMemo;
            var8 = new Array(8);
            var8[0] = var9;
            var8[1] = var22;
            var8[2] = var21;
            var8[3] = var17;
            var8[4] = var16;
            var8[5] = var32;
            var8[6] = var31;
            var8[7] = var7;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot10;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0011_ip = 21; continue _fun0011 }
 15:
                    var6 = _closure2_slot16;
                    _fun0011_ip = 25; continue _fun0011;
 21:
                    var6 = _closure2_slot19;
 25:
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
 0:
                            var4 = arg1;
                            var1 = {};
                            var1['role'] = var4;
                            var3 = _closure2_slot8;
                            var2 = null;
                            var6 = var2 == var3;
                            var3 = undefined;
                            if(var6) { _fun0012_ip = 41; continue _fun0012 }
 28:
                            var5 = _closure2_slot8;
                            var4 = var4.id;
                            var3 = var5[var4];
 41:
                            var4 = var2 != var3;
                            var2 = 0;
                            if(!var4) { _fun0012_ip = 53; continue _fun0012 }
 50:
                            var2 = var3;
 53:
                            var1['memberCount'] = var2;
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var3);
                    var3 = _closure2_slot5;
                    var6 = var4 != var3;
                    var3 = 0;
                    var4 = 0;
                    if(!var6) { _fun0011_ip = 92; continue _fun0011 }
 74:
                    var6 = var5.findIndex;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = arg1;
                            var5 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var1 = 35;
                            var1 = var4[var1];
                            var4 = undefined;
                            var9 = var5.bind(var4)(var1);
                            var8 = var9.isRoleHigher;
                            var13 = _closure2_slot5;
                            var12 = _closure2_slot11;
                            var11 = _closure2_slot12;
                            var10 = var2.role;
                            var14 = var9;
                            var1 = var14[var8](var13, var12, var11, var10, var9);
                            var5 = !var1;
                            var1 = !var5;
                            if(var5) { _fun0013_ip = 89; continue _fun0013 }
 71:
                            var3 = _closure1_slot8;
                            var2 = var2.role;
                            var2 = var3.bind(var4)(var2);
                            var1 = !var2;
 89:
                            return var1;
                        }
                    };
                    var4 = var6.bind(var5)(var2);
 92:
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
            var7 = var13.bind(var15)(var7, var8);
            var17 = var7.roleData;
            _closure2_slot20 = var17;
            var28 = var7.firstEditableIndex;
            _closure2_slot21 = var28;
            var8 = var7.numSortableRoles;
            var27 = var7.hasRoles;
            _closure2_slot22 = var27;
            var16 = _closure1_slot5;
            var15 = var16.useCallback;
            var13 = new Array(1);
            var13[0] = var5;
            var7 = function(arg1) {
                var2 = arg1;
                var3 = _closure2_slot18;
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var21 = var15.bind(var16)(var7, var13);
            var16 = _closure1_slot5;
            var15 = var16.useCallback;
            var13 = new Array(1);
            var13[0] = var9;
            var7 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
                    if(var11) { _fun0014_ip = 105; continue _fun0014 }
 96:
                    var10 = _closure2_slot5;
                    var7 = var10.id;
 105:
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
            var23 = var15.bind(var16)(var7, var13);
            _closure2_slot23 = var23;
            var16 = _closure1_slot5;
            var15 = var16.useCallback;
            var13 = new Array(1);
            var13[0] = var3;
            var7 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var7 = arguments[1];
                    var1 = undefined;
                    if(!(var7 === var1)) { _fun0015_ip = 11; continue _fun0015 }
 9:
                    var7 = false;
 11:
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
            var16 = var15.bind(var16)(var7, var13);
            _closure2_slot24 = var16;
            var22 = _closure1_slot5;
            var15 = var22.useCallback;
            var13 = new Array(1);
            var13[0] = var5;
            var7 = function() {
                var4 = _closure2_slot15;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot18;
                var2 = '';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var15.bind(var22)(var7, var13);
            _closure2_slot25 = var7;
            var22 = _closure1_slot5;
            var15 = var22.useCallback;
            var13 = new Array(1);
            var13[0] = var5;
            var5 = function() {
                var4 = _closure2_slot18;
                var1 = undefined;
                var3 = '';
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot15;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var15.bind(var22)(var5, var13);
            _closure2_slot26 = var5;
            var24 = _closure1_slot5;
            var22 = var24.useCallback;
            var15 = new Array(2);
            var15[0] = var9;
            var15[1] = var5;
            var13 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = _closure1_slot15;
                    var2 = var3.getUpdates;
                    var4 = var2.bind(var3)();
                    var3 = var4.length;
                    var2 = 0;
                    var2 = var3 > var2;
                    if(!var2) { _fun0016_ip = 46; continue _fun0016 }
 33:
                    var5 = _closure2_slot5;
                    var3 = null;
                    var2 = var3 != var5;
 46:
                    if(!var2) { _fun0016_ip = 95; continue _fun0016 }
 49:
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
 95:
                    var2 = _closure2_slot26;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var22 = var22.bind(var24)(var13, var15);
            _closure2_slot27 = var22;
            var26 = _closure1_slot5;
            var24 = var26.useCallback;
            var15 = function(arg1) {
                var2 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 40;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.updateRoleOrder;
                var3 = var2.from;
                var2 = var2.to;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = new Array(0);
            var15 = var24.bind(var26)(var15, var13);
            var29 = _closure1_slot5;
            var26 = var29.useCallback;
            var24 = new Array(5);
            var24[0] = var18;
            var24[1] = var17;
            var24[2] = var30;
            var24[3] = var14;
            var24[4] = var5;
            var13 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var4 = _closure1_slot25;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var5 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.rolesHeader;
                    var6 = new Array(2);
                    var6[0] = var1;
                    var9 = _closure2_slot14;
                    var1 = undefined;
                    var8 = undefined;
                    if(!var9) { _fun0017_ip = 57; continue _fun0017 }
 47:
                    var9 = _closure2_slot1;
                    var8 = var9.edittingRolesHeader;
 57:
                    var6[1] = var8;
                    var5['style'] = var6;
                    var9 = _closure1_slot24;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 41;
                    var6 = var10[var6];
                    var6 = var12.bind(var1)(var6);
                    var8 = var6.TableRowGroupTitle;
                    var6 = {};
                    var14 = 27;
                    var13 = var10[var14];
                    var13 = var12.bind(var1)(var13);
                    var15 = var13.intl;
                    var13 = var15.formatToPlainString;
                    var10 = var10[var14];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.t;
                    var12 = var10.38N3V1;
                    var10 = {};
                    var16 = _closure2_slot20;
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
                    var10 = _closure2_slot14;
                    var9 = null;
                    if(var10) { _fun0017_ip = 531; continue _fun0017 }
 217:
                    var10 = _closure2_slot17;
                    var9 = null;
                    if(var10) { _fun0017_ip = 531; continue _fun0017 }
 229:
                    var13 = _closure1_slot25;
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
                    var15 = var15.0dOFq6;
                    var15 = var16.bind(var17)(var15);
                    var10['accessibilityLabel'] = var15;
                    var15 = _closure2_slot26;
                    var10['onPress'] = var15;
                    var20 = _closure2_slot1;
                    var15 = var20.reorderButton;
                    var10['style'] = var15;
                    var17 = _closure1_slot24;
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
                    var18 = _closure1_slot24;
                    var16 = 31;
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
                    var19 = var19.0dOFq6;
                    var19 = var20.bind(var21)(var19);
                    var16['children'] = var19;
                    var16 = var18.bind(var1)(var17, var16);
                    var15[1] = var16;
                    var10['children'] = var15;
                    var9 = var13.bind(var1)(var12, var10);
 531:
                    var8[1] = var9;
                    var5['children'] = var8;
                    var8 = var4.bind(var1)(var3, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var8 = _closure2_slot14;
                    var6 = null;
                    if(!var8) { _fun0017_ip = 677; continue _fun0017 }
 562:
                    var9 = _closure1_slot24;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 31;
                    var7 = var10[var7];
                    var7 = var13.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
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
 677:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var26 = var26.bind(var29)(var13, var24);
            var29 = _closure1_slot5;
            var24 = var29.useCallback;
            var13 = new Array(7);
            var13[0] = var18;
            var13[1] = var23;
            var13[2] = var27;
            var13[3] = var34;
            var13[4] = var33;
            var13[5] = var9;
            var13[6] = var11;
            var11 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.isThemeDark;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    if(var2) { _fun0018_ip = 89; continue _fun0018 }
 58:
                    if(var1) { _fun0018_ip = 75; continue _fun0018 }
 61:
                    var2 = 48;
                    var2 = var4[var2];
                    var12 = var3.bind(var5)(var2);
                    _fun0018_ip = 87; continue _fun0018;
 75:
                    var2 = 47;
                    var2 = var4[var2];
                    var12 = var3.bind(var5)(var2);
 87:
                    _fun0018_ip = 121; continue _fun0018;
 89:
                    if(var1) { _fun0018_ip = 106; continue _fun0018 }
 92:
                    var1 = 46;
                    var1 = var4[var1];
                    var1 = var3.bind(var5)(var1);
                    _fun0018_ip = 118; continue _fun0018;
 106:
                    var2 = 45;
                    var2 = var4[var2];
                    var1 = var3.bind(var5)(var2);
 118:
                    var12 = var1;
 121:
                    var1 = _closure2_slot22;
                    var4 = _closure1_slot25;
                    if(var1) { _fun0018_ip = 667; continue _fun0018 }
 135:
                    var2 = _closure1_slot6;
                    var1 = {};
                    var13 = _closure2_slot1;
                    var3 = var13.emptySubheaderContainer;
                    var1['style'] = var3;
                    var6 = _closure1_slot24;
                    var3 = {};
                    var8 = var13.emptyIlloContainer;
                    var3['style'] = var8;
                    var11 = _closure1_slot24;
                    var9 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var8 = 49;
                    var8 = var14[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = {};
                    var14 = var13.emptyIllo;
                    var13 = new Array(2);
                    var13[0] = var14;
                    var15 = _closure2_slot3;
                    var14 = null;
                    if(!var15) { _fun0018_ip = 230; continue _fun0018 }
 220:
                    var15 = _closure2_slot1;
                    var14 = var15.emptyIlloLarge;
 230:
                    var13[1] = var14;
                    var8['style'] = var13;
                    var8['source'] = var12;
                    var8 = var11.bind(var5)(var9, var8);
                    var3['children'] = var8;
                    var6 = var6.bind(var5)(var2, var3);
                    var3 = new Array(3);
                    var3[0] = var6;
                    var8 = _closure1_slot25;
                    var9 = _closure1_slot6;
                    var6 = {};
                    var11 = _closure2_slot1;
                    var12 = var11.emptySubheaderBody;
                    var6['style'] = var12;
                    var15 = _closure1_slot24;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var13 = 31;
                    var12 = var20[var13];
                    var12 = var19.bind(var5)(var12);
                    var14 = var12.Text;
                    var12 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
                    var16 = var11.subheader;
                    var12['style'] = var16;
                    var16 = 27;
                    var17 = var20[var16];
                    var17 = var19.bind(var5)(var17);
                    var21 = var17.intl;
                    var18 = var21.string;
                    var17 = var20[var16];
                    var17 = var19.bind(var5)(var17);
                    var17 = var17.t;
                    var17 = var17.ALlnbm;
                    var17 = var18.bind(var21)(var17);
                    var12['children'] = var17;
                    var14 = var15.bind(var5)(var14, var12);
                    var12 = new Array(3);
                    var12[0] = var14;
                    var15 = _closure1_slot24;
                    var13 = var20[var13];
                    var13 = var19.bind(var5)(var13);
                    var14 = var13.Text;
                    var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var17 = var11.subheaderBody;
                    var13['style'] = var17;
                    var17 = var20[var16];
                    var17 = var19.bind(var5)(var17);
                    var21 = var17.intl;
                    var18 = var21.string;
                    var17 = var20[var16];
                    var17 = var19.bind(var5)(var17);
                    var17 = var17.t;
                    var17 = var17.1ydhVl;
                    var17 = var18.bind(var21)(var17);
                    var13['children'] = var17;
                    var13 = var15.bind(var5)(var14, var13);
                    var12[1] = var13;
                    var15 = _closure1_slot24;
                    var14 = _closure1_slot1;
                    var13 = 28;
                    var13 = var20[var13];
                    var14 = var14.bind(var5)(var13);
                    var13 = {};
                    var17 = var11.subheaderButton;
                    var13['style'] = var17;
                    var17 = var20[var16];
                    var17 = var19.bind(var5)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var16 = var20[var16];
                    var16 = var19.bind(var5)(var16);
                    var16 = var16.t;
                    var16 = var16.JZZjQE;
                    var16 = var17.bind(var18)(var16);
                    var13['text'] = var16;
                    var16 = _closure2_slot23;
                    var13['onPress'] = var16;
                    var13 = var15.bind(var5)(var14, var13);
                    var12[2] = var13;
                    var6['children'] = var12;
                    var6 = var8.bind(var5)(var9, var6);
                    var3[1] = var6;
                    var8 = _closure1_slot24;
                    var6 = {};
                    var11 = var11.divider;
                    var6['style'] = var11;
                    var6 = var8.bind(var5)(var9, var6);
                    var3[2] = var6;
                    var1['children'] = var3;
                    var1 = var4.bind(var5)(var2, var1);
                    _fun0018_ip = 927; continue _fun0018;
 667:
                    var3 = _closure1_slot26;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var6 = {};
                    var13 = _closure2_slot1;
                    var9 = var13.subheaderContainer;
                    var6['style'] = var9;
                    var12 = _closure1_slot24;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var9 = 31;
                    var9 = var17[var9];
                    var9 = var16.bind(var5)(var9);
                    var11 = var9.Text;
                    var9 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                    var13 = var13.subheaderDescription;
                    var9['style'] = var13;
                    var13 = 27;
                    var14 = var17[var13];
                    var14 = var16.bind(var5)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.1ydhVl;
                    var13 = var14.bind(var15)(var13);
                    var9['children'] = var13;
                    var11 = var12.bind(var5)(var11, var9);
                    var9 = new Array(2);
                    var9[0] = var11;
                    var12 = _closure2_slot13;
                    var13 = null;
                    var11 = null;
                    if(!var12) { _fun0018_ip = 861; continue _fun0018 }
 824:
                    var12 = _closure2_slot5;
                    var12 = var13 != var12;
                    var11 = null;
                    if(!var12) { _fun0018_ip = 861; continue _fun0018 }
 837:
                    var14 = _closure1_slot24;
                    var13 = _closure1_slot30;
                    var12 = {};
                    var15 = _closure2_slot5;
                    var12['guild'] = var15;
                    var11 = var14.bind(var5)(var13, var12);
 861:
                    var9[1] = var11;
                    var6['children'] = var9;
                    var8 = var4.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot24;
                    var8 = _closure1_slot6;
                    var7 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.divider;
                    var7['style'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 927:
                    return var1;
                }
            };
            var24 = var24.bind(var29)(var11, var13);
            var29 = _closure1_slot5;
            var13 = var29.useCallback;
            var11 = new Array(6);
            var11[0] = var18;
            var11[1] = var16;
            var11[2] = var9;
            var11[3] = var32;
            var11[4] = var31;
            var11[5] = var10;
            var10 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0019_ip = 217; continue _fun0019 }
 16:
                    var2 = _closure2_slot6;
                    if(!(var1 != var2)) { _fun0019_ip = 217; continue _fun0019 }
 27:
                    var3 = _closure1_slot2;
                    var12 = _closure1_slot3;
                    var2 = 35;
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
                    var4 = _closure1_slot24;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.everyoneWrapper;
                    var2['style'] = var7;
                    var8 = _closure1_slot24;
                    var7 = _closure1_slot1;
                    var6 = 50;
                    var6 = var12[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = {};
                    var6['role'] = var11;
                    var6['locked'] = var10;
                    var10 = function onPress() {
                        var3 = _closure2_slot24;
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
 217:
                    return var1;
                }
            };
            var29 = var13.bind(var29)(var10, var11);
            var13 = _closure1_slot5;
            var11 = var13.useCallback;
            var10 = new Array(8);
            var10[0] = var9;
            var10[1] = var17;
            var10[2] = var32;
            var10[3] = var31;
            var10[4] = var14;
            var10[5] = var28;
            var10[6] = var16;
            var10[7] = var7;
            var7 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var8 = arg2;
                    var1 = _closure2_slot5;
                    var12 = null;
                    if(!(var12 != var1)) { _fun0020_ip = 280; continue _fun0020 }
 19:
                    var1 = _closure2_slot20;
                    var2 = var1[var8];
                    var1 = var2.role;
                    var10 = var2.memberCount;
                    var2 = _closure2_slot20;
                    var9 = var2.length;
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 35;
                    var2 = var4[var2];
                    var5 = undefined;
                    var11 = var3.bind(var5)(var2);
                    var7 = var11.isRoleHigher;
                    var19 = _closure2_slot5;
                    var18 = _closure2_slot11;
                    var17 = _closure2_slot12;
                    var20 = var11;
                    var16 = var1;
                    var2 = var20[var7](var19, var18, var17, var16, var15);
                    var11 = !var2;
                    var2 = _closure2_slot14;
                    if(var2) { _fun0020_ip = 119; continue _fun0020 }
 111:
                    var2 = 0;
                    var7 = var2 === var8;
                    _fun0020_ip = 127; continue _fun0020;
 119:
                    var2 = _closure2_slot21;
                    var7 = var8 === var2;
 127:
                    var4 = _closure1_slot24;
                    var3 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var2 = 50;
                    var2 = var13[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var13 = _closure2_slot14;
                    var2['sorting'] = var13;
                    var13 = _closure2_slot5;
                    var13 = var12 != var13;
                    if(!var13) { _fun0020_ip = 182; continue _fun0020 }
 173:
                    var14 = _closure1_slot8;
                    var13 = var14.bind(var5)(var1);
 182:
                    var2['isEveryoneRole'] = var13;
                    var2['role'] = var1;
                    var2['locked'] = var11;
                    var11 = _closure2_slot24;
                    var2['onPress'] = var11;
                    var11 = _closure2_slot5;
                    var12 = var12 == var11;
                    var11 = undefined;
                    if(var12) { _fun0020_ip = 227; continue _fun0020 }
 218:
                    var12 = _closure2_slot5;
                    var11 = var12.id;
 227:
                    var2['guildId'] = var11;
                    var2['numMembers'] = var10;
                    var2['isFirstRole'] = var7;
                    var7 = 1;
                    var7 = var9 - var7;
                    var7 = var8 === var7;
                    var2['isLastRole'] = var7;
                    var6 = _closure2_slot25;
                    var2['onLongPress'] = var6;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
 280:
                    var4 = _closure1_slot24;
                    var3 = _closure1_slot26;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                }
            };
            var13 = var11.bind(var13)(var7, var10);
            var16 = _closure1_slot5;
            var11 = var16.useCallback;
            var10 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = new Array(0);
            var16 = var11.bind(var16)(var10, var7);
            var11 = _closure1_slot5;
            var10 = var11.useEffect;
            var7 = new Array(6);
            var7[0] = var23;
            var7[1] = var22;
            var7[2] = var5;
            var7[3] = var27;
            var7[4] = var14;
            var7[5] = var3;
            var5 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var8 = _closure2_slot14;
                    var1 = undefined;
                    var7 = undefined;
                    if(!var8) { _fun0021_ip = 35; continue _fun0021 }
 28:
                    var7 = function() {
                        var4 = _closure1_slot24;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 51;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot26;
                        var1['onPress'] = var5;
                        var5 = 27;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oK;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 35:
                    var2['headerLeft'] = var7;
                    var7 = _closure2_slot14;
                    if(var7) { _fun0021_ip = 65; continue _fun0021 }
 47:
                    var7 = _closure2_slot22;
                    var5 = undefined;
                    if(!var7) { _fun0021_ip = 63; continue _fun0021 }
 56:
                    var5 = function() {
                        var4 = _closure1_slot24;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 51;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var6 = _closure2_slot23;
                        var1['onPress'] = var6;
                        var6 = _closure1_slot1;
                        var5 = 52;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['source'] = var5;
                        var5 = 27;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.JZZjQE;
                        var5 = var6.bind(var7)(var5);
                        var1['accessibilityLabel'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 63:
                    _fun0021_ip = 72; continue _fun0021;
 65:
                    var5 = function() {
                        var4 = _closure1_slot24;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 51;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot27;
                        var1['onPress'] = var5;
                        var5 = 27;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 72:
                    var2['headerRight'] = var5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 27;
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
            var5[1] = var14;
            var5[2] = var3;
            var3 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var1 = _closure2_slot14;
                    if(!var1) { _fun0022_ip = 20; continue _fun0022 }
 10:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0022_ip = 57; continue _fun0022 }
 20:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.stopReordering;
                    var1 = var1.bind(var2)();
                    _fun0022_ip = 102; continue _fun0022;
 57:
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
 102:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 53;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0022_ip = 169; continue _fun0022 }
 140:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure2_slot14;
                    var5 = !var5;
                    var2['gestureEnabled'] = var5;
                    var2 = var3.bind(var4)(var2);
 169:
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
 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0023_ip = 145; continue _fun0023 }
 16:
                    var5 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 54;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.MAX_PREFETCH_MEMBER_COUNT;
                    if(!(var5 <= var3)) { _fun0023_ip = 105; continue _fun0023 }
 55:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 55;
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
 105:
                    var3 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 56;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchMemberCounts;
                    var1 = _closure2_slot5;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 145:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                var1 = function() {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var1 = _closure2_slot14;
                        if(!var1) { _fun0024_ip = 45; continue _fun0024 }
 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.stopReordering;
                        var1 = var1.bind(var2)();
 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot26;
            var1 = {};
            var7 = null;
            if(var14) { _fun0004_ip = 1488; continue _fun0004 }
 1338:
            var5 = 10;
            var5 = var8 < var5;
            var7 = null;
            if(var5) { _fun0004_ip = 1488; continue _fun0004 }
 1353:
            var9 = _closure1_slot24;
            var8 = _closure1_slot6;
            var5 = {};
            var11 = var18.searchWrapper;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var12 = 0;
            if(!var30) { _fun0004_ip = 1414; continue _fun0004 }
 1384:
            var23 = _closure1_slot1;
            var28 = _closure1_slot3;
            var22 = 17;
            var22 = var28[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.spacing;
            var12 = var22.PX_16;
 1414:
            var11['paddingBottom'] = var12;
            var10[1] = var11;
            var5['style'] = var10;
            var12 = _closure1_slot24;
            var11 = _closure1_slot0;
            var22 = _closure1_slot3;
            var10 = 57;
            var10 = var22[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.SearchField;
            var10 = {};
            var22 = 'md';
            var10['size'] = var22;
            var10['onChange'] = var21;
            var10 = var12.bind(var4)(var11, var10);
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
 1488:
            var5 = new Array(4);
            var5[0] = var7;
            var9 = _closure1_slot24;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = null;
            if(!var14) { _fun0004_ip = 1776; continue _fun0004 }
 1514:
            var21 = _closure1_slot25;
            var12 = _closure1_slot26;
            var11 = {};
            var23 = var26.bind(var4)();
            var22 = new Array(2);
            var22[0] = var23;
            var23 = null;
            if(var27) { _fun0004_ip = 1762; continue _fun0004 }
 1544:
            var32 = _closure1_slot24;
            var39 = _closure1_slot0;
            var40 = _closure1_slot3;
            var28 = 58;
            var28 = var40[var28];
            var28 = var39.bind(var4)(var28);
            var31 = var28.FormRow;
            var28 = {};
            var35 = _closure1_slot24;
            var37 = _closure1_slot1;
            var36 = 59;
            var33 = var40[var36];
            var34 = var37.bind(var4)(var33);
            var33 = {};
            var38 = var18.emptyRolesIcon;
            var33['style'] = var38;
            var36 = var40[var36];
            var36 = var37.bind(var4)(var36);
            var36 = var36.Sizes;
            var36 = var36.LARGE;
            var33['size'] = var36;
            var36 = 60;
            var36 = var40[var36];
            var36 = var37.bind(var4)(var36);
            var33['source'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var28['leading'] = var33;
            var35 = _closure1_slot24;
            var33 = 31;
            var33 = var40[var33];
            var33 = var39.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {'variant': 'text-md/semibold', 'color': 'interactive-normal'};
            var36 = 27;
            var37 = var40[var36];
            var37 = var39.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var40[var36];
            var36 = var39.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.nZfHsb;
            var36 = var37.bind(var38)(var36);
            var33['children'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var28['label'] = var33;
            var23 = var32.bind(var4)(var31, var28);
 1762:
            var22[1] = var23;
            var11['children'] = var22;
            var10 = var21.bind(var4)(var12, var11);
 1776:
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var9 = _closure1_slot24;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var18.container;
            var7['style'] = var10;
            var12 = _closure1_slot24;
            var11 = _closure1_slot1;
            var21 = _closure1_slot3;
            var10 = 61;
            var10 = var21[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['ref'] = var20;
            var20 = null;
            if(var14) { _fun0004_ip = 1907; continue _fun0004 }
 1844:
            var23 = _closure1_slot25;
            var22 = _closure1_slot26;
            var21 = {};
            var28 = null;
            if(var30) { _fun0004_ip = 1863; continue _fun0004 }
 1859:
            var28 = var24.bind(var4)();
 1863:
            var24 = new Array(3);
            var24[0] = var28;
            var28 = null;
            if(var30) { _fun0004_ip = 1880; continue _fun0004 }
 1876:
            var28 = var29.bind(var4)();
 1880:
            var24[1] = var28;
            var25 = null;
            if(!var27) { _fun0004_ip = 1893; continue _fun0004 }
 1889:
            var25 = var26.bind(var4)();
 1893:
            var24[2] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
 1907:
            var10['header'] = var20;
            var20 = var18.container;
            var10['wrapperStyles'] = var20;
            var20 = var18.scrollContainer;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var10['contentContainerStyle'] = var18;
            var10['data'] = var17;
            var10['rowHasChanged'] = var16;
            var10['onRowMoved'] = var15;
            var14 = !var14;
            var10['disableSorting'] = var14;
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
            var8 = _closure1_slot24;
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 62;
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