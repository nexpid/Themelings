// app/modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var8;
    var1 = function getRoleColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.colorString;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 24; continue _fun0001 }
 15:
            var1 = _closure1_slot9;
            _fun0001_ip = 30; continue _fun0001;
 24:
            var1 = var2.colorString;
 30:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var4 = function RoleIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.role;
            var5 = {};
            var9 = null;
            if(!(var9 != var10)) { _fun0002_ip = 40; continue _fun0002 }
 17:
            var1 = {};
            var3 = _closure1_slot13;
            var2 = undefined;
            var2 = var3.bind(var2)(var10);
            var1['backgroundColor'] = var2;
            var5 = var1;
 40:
            var4 = _closure1_slot10;
            var2 = _closure1_slot1;
            var11 = _closure1_slot3;
            var1 = 7;
            var1 = var11[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var6 = 8;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.ShieldUserIcon;
            var6 = {};
            var11 = 'sm';
            var6['size'] = var11;
            var10 = var9 != var10;
            var9 = 'interactive-normal';
            if(!var10) { _fun0002_ip = 124; continue _fun0002 }
 120:
            var9 = 'white';
 124:
            var6['color'] = var9;
            var6 = var8.bind(var3)(var7, var6);
            var1['icon'] = var6;
            var1['wrapperStyle'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.isEveryoneRole;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var6 = var2.jsx;
    var _closure1_slot10 = var6;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = function RoleRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = var5.guildRole;
            var _closure2_slot0 = var1;
            var14 = var5.guildId;
            var _closure2_slot1 = var14;
            var10 = null;
            var4 = Object.create(var10);
            var3 = 0;
            var4['guildRole'] = var3;
            var4['guildId'] = var3;
            var18 = {};
            var17 = var5;
            var16 = var4;
            var6 = copyDataProperties(var18, var17, var16);
            var13 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 9;
            var3 = var7[var3];
            var5 = undefined;
            var9 = var13.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getRoleMemberCount;
                    var1 = _closure2_slot1;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 49; continue _fun0004 }
 36:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3[var2];
 49:
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var4, var3);
            var3 = _closure1_slot7;
            var9 = var3.bind(var5)(var1);
            var8 = _closure1_slot5;
            var4 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var14;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchMemberCounts;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var8)(var2, var3);
            var4 = _closure1_slot10;
            var2 = 11;
            var2 = var7[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var14 = _closure1_slot10;
            var8 = 12;
            var7 = var7[var8];
            var7 = var13.bind(var5)(var7);
            var13 = var7.Text;
            var7 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var15 = var1.name;
            var7['children'] = var15;
            var7 = var14.bind(var5)(var13, var7);
            var2['label'] = var7;
            var14 = _closure1_slot10;
            var13 = _closure1_slot14;
            var7 = {};
            var7['role'] = var1;
            var7 = var14.bind(var5)(var13, var7);
            var2['icon'] = var7;
            var7 = null;
            if(var9) { _fun0003_ip = 375; continue _fun0003 }
 254:
            var9 = var10 == var12;
            var7 = null;
            if(var9) { _fun0003_ip = 375; continue _fun0003 }
 263:
            var10 = _closure1_slot11;
            var13 = _closure1_slot0;
            var15 = _closure1_slot3;
            var8 = var15[var8];
            var8 = var13.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var14 = _closure1_slot10;
            var11 = 13;
            var11 = var15[var11];
            var11 = var13.bind(var5)(var11);
            var13 = var11.GroupIcon;
            var11 = {'size': 'xxs', 'color': 'text-muted'};
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(3);
            var11[0] = var13;
            var13 = ' ';
            var11[1] = var13;
            var11[2] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 375:
            var2['trailing'] = var7;
            var18 = var2;
            var17 = var6;
            var6 = copyDataProperties(var18, var17);
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function AppLauncherRoleListActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = var2.onRolePress;
            var _closure2_slot0 = var1;
            var10 = var2.onActionSheetDismiss;
            var _closure2_slot1 = var10;
            var1 = var2.channel;
            var14 = var2.option;
            var1 = var1.guild_id;
            var _closure2_slot2 = var1;
            var6 = _closure1_slot5;
            var2 = var6.useState;
            var1 = '';
            var3 = var2.bind(var6)(var1);
            var2 = _closure1_slot4;
            var4 = undefined;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var8 = 0;
            var1 = var3[var8];
            var _closure2_slot3 = var1;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot4 = var2;
            var3 = var6.useRef;
            var2 = null;
            var13 = var3.bind(var6)(var2);
            var _closure2_slot5 = var13;
            var9 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 9;
            var2 = var5[var2];
            var15 = var9.bind(var4)(var2);
            var12 = var15.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var15)(var3, var2);
            var _closure2_slot6 = var12;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure2_slot6;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure2_slot3;
                        var1 = var2.id;
                        var1 = var4 === var1;
                        if(var1) { _fun0006_ip = 82; continue _fun0006 }
 22:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var4 = 14;
                        var4 = var5[var4];
                        var5 = undefined;
                        var4 = var6.bind(var5)(var4);
                        var6 = _closure2_slot3;
                        var3 = var6.trim;
                        var3 = var3.bind(var6)();
                        var6 = var2.name;
                        var2 = var6.toLowerCase;
                        var2 = var2.bind(var6)();
                        var1 = var4.bind(var5)(var3, var2);
 82:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var3.bind(var6)(var1, var2);
            var _closure2_slot7 = var12;
            var6 = var12.length;
            var1 = function handleRolePress(arg1) {
                var1 = arg1;
                var1 = var1.role;
                var4 = _closure2_slot0;
                var3 = {};
                var3['role'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 15;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.hideActionSheet;
                var3 = 'AppLauncherRoleListActionSheet';
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var _closure2_slot8 = var1;
            var3 = _closure1_slot11;
            var1 = 16;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.AppLauncherCommandOptionActionSheet;
            var1 = {};
            var1['option'] = var14;
            var1['onDismiss'] = var10;
            var14 = _closure1_slot10;
            var10 = 17;
            var5 = var5[var10];
            var5 = var9.bind(var4)(var5);
            var9 = var5.AppLauncherListSearchBar;
            var5 = {};
            var15 = function onChange(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot4;
                    var1 = var3.toLowerCase;
                    var3 = var1.bind(var3)();
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot5;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0007_ip = 67; continue _fun0007 }
 42:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
 67:
                    return var1;
                }
            };
            var5['onChange'] = var15;
            var9 = var14.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            if(!(var8 !== var6)) { _fun0005_ip = 367; continue _fun0005 }
 310:
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.AppLauncherList;
            var6 = {};
            var6['ref'] = var13;
            var6['data'] = var12;
            var11 = function renderItem(arg1) {
                var1 = arg1;
                var7 = var1.item;
                var _closure3_slot0 = var7;
                var5 = var1.index;
                var4 = _closure1_slot10;
                var3 = _closure1_slot12;
                var2 = {};
                var8 = _closure2_slot2;
                var2['guildId'] = var8;
                var2['guildRole'] = var7;
                var6 = function onPress() {
                    var3 = _closure2_slot8;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['role'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var6;
                var6 = 0;
                var6 = var6 === var5;
                var2['start'] = var6;
                var1 = _closure2_slot7;
                var6 = var1.length;
                var1 = 1;
                var1 = var6 - var1;
                var1 = var5 === var1;
                var2['end'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['renderItem'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            _fun0005_ip = 402; continue _fun0005;
 367:
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.AppLauncherListEmptyState;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
 402:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var5 = 'AppLauncherRoleListActionSheet';
    var3['APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY'] = var5;
    var3['RoleIcon'] = var4;
    var3['RoleRow'] = var2;
    return var1;
})();