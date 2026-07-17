// app/modules/user_profile/native/UserProfileRolesCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function RoleDot(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.color;
            var1 = _closure1_slot12;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var5.roleDot;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var9 = null;
            if(!(var9 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot7;
case 2:
            var6['backgroundColor'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var2 = function RoleItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var14 = var2.role;
            var _closure2_slot0 = var14;
            var11 = var2.guildId;
            var _closure2_slot1 = var11;
            var3 = var2.color;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var6 = function renderContent() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var5 = _closure2_slot5;
                    var10 = _closure1_slot9;
                    if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var7 = _closure1_slot13;
                    var6 = {};
                    var8 = _closure2_slot3;
                    var5 = null;
                    var11 = var5 != var8;
                    var5 = undefined;
                    var8 = undefined;
                    if(!var11) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var8 = _closure2_slot3;
case 6:
                    var6['color'] = var8;
                    var6 = var10.bind(var5)(var7, var6);
                    _fun0003_ip = 8; continue _fun0003;
case 4:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 16;
                    var5 = var8[var5];
                    var8 = undefined;
                    var7 = var7.bind(var8)(var5);
                    var5 = {};
                    var12 = _closure2_slot0;
                    var11 = var12.id;
                    var5['roleId'] = var11;
                    var11 = _closure2_slot1;
                    var5['guildId'] = var11;
                    var11 = null;
                    var13 = var11 == var12;
                    var12 = undefined;
                    if(var13) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var13 = _closure2_slot0;
                    var12 = var13.colorString;
case 9:
                    var13 = var11 != var12;
                    var11 = undefined;
                    if(!var13) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var11 = var12;
case 11:
                    var5['roleColor'] = var11;
                    var11 = 12;
                    var5['size'] = var11;
                    var11 = false;
                    var5['displayRoleIcon'] = var11;
                    var6 = var10.bind(var8)(var7, var5);
case 8:
                    var5 = new Array(3);
                    var5[0] = var6;
                    var6 = _closure2_slot4;
                    var5[1] = var6;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var10 = 'text-xs/medium';
                    var6['variant'] = var10;
                    var9 = _closure2_slot2;
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var2 = _closure1_slot12;
            var7 = var2.bind(var5)();
            var2 = var14.name;
            var4 = var2.length;
            var2 = _closure1_slot8;
            if(!(!(var4 <= var2))) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var10 = var14.name;
            var9 = var10.slice;
            var4 = _closure1_slot8;
            var2 = 0;
            var10 = var9.bind(var10)(var2, var4);
            var2 = global;
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var4 = '';
            var2 = '...';
            var9 = var9.bind(var4)(var10, var2);
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var9 = var14.name;
case 15:
            _closure2_slot2 = var9;
            var2 = null;
            if(!(var2 == var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var14.colorString;
case 16:
            _closure2_slot3 = var3;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 8;
            var3 = var10[var3];
            var10 = var4.bind(var5)(var3);
            var4 = var10.useRoleIcon;
            var3 = {};
            var3['guildId'] = var11;
            var11 = var14.id;
            var3['roleId'] = var11;
            var11 = 12;
            var3['size'] = var11;
            var11 = var4.bind(var10)(var3);
            _closure2_slot4 = var11;
            var3 = var14.tags;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var3.guild_connections;
case 18:
            var2 = var5 !== var2;
            _closure2_slot5 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.DeveloperMode;
            var2 = var3.useSetting;
            var13 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var4[var2];
            var10 = var3.bind(var5)(var2);
            var4 = var10.useExperiment;
            var3 = {};
            var2 = 'RoleItem';
            var3['location'] = var2;
            var2 = {};
            var12 = false;
            var2['autoTrackExposure'] = var12;
            var2 = var4.bind(var10)(var3, var2);
            var12 = var2.tidaWebformEnabled;
            var10 = _closure1_slot3;
            var4 = var10.useCallback;
            var2 = var14.id;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var9;
            var2 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.copy;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var6.bind(var7)(var3);
                var3 = 12;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.roleIdCopied;
                var2 = _closure2_slot2;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10 = var4.bind(var10)(var2, var3);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var9;
            var2[2] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = {};
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var11 = 13;
                    var5 = var4[var11];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var4 = var4[var11];
                    var4 = var8.bind(var1)(var4);
                    var4 = var4.t;
                    var4 = var4.sMsaLg;
                    var4 = var5.bind(var7)(var4);
                    var3['label'] = var4;
                    var4 = function onPress() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 11;
                        var2 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.copy;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var3 = var6.bind(var7)(var3);
                        var3 = 12;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.roleIdCopied;
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3['onPress'] = var4;
                    var5 = new Array(1);
                    var5[0] = var3;
                    var7 = _closure2_slot4;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 14;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getRoleIconData;
                    var3 = _closure2_slot0;
                    var3 = var7.bind(var8)(var3);
                    if(!(var4 == var3)) { _fun0004_ip = 12; continue _fun0004 }
case 22:
                    var3 = {};
case 12:
                    var3 = var3.customIconSrc;
                    var _closure3_slot0 = var3;
                    if(!(var4 != var3)) { _fun0004_ip = 20; continue _fun0004 }
case 23:
                    var4 = var5.push;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = var7[var11];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var7[var11];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7["8xHmxo"];
                    var7 = var8.bind(var9)(var7);
                    var3['label'] = var7;
                    var6 = function onPress() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 11;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var5.bind(var6)(var2);
                        var2 = 12;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentCopiedToClipboard;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onPress'] = var6;
                    var3 = var4.bind(var5)(var3);
case 20:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showSimpleActionSheet;
                    var2 = {'key': 'RoleItem', 'options': null, 'hasIcons': false};
                    var2['options'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var11 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot9;
            if(var13) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = _closure1_slot4;
            var1 = {};
            var3 = var7.role;
            var1['style'] = var3;
            var3 = var6.bind(var5)();
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 18;
            var2 = var14[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var2['onPress'] = var10;
            var10 = undefined;
            if(!var13) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var10 = undefined;
            if(!var12) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var10 = var11;
case 27:
            var2['onLongPress'] = var10;
            var10 = 'button';
            var2['accessibilityRole'] = var10;
            var2['accessibilityLabel'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.sMsaLg;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityHint'] = var8;
            var7 = var7.role;
            var2['style'] = var7;
            var6 = var6.bind(var5)();
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 26:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = function RolesList(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guildMemberRoleIds;
            var _closure2_slot0 = var10;
            var1 = var1.guildId;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot12;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var1;
            var1 = function() {
                var5 = _closure1_slot6;
                var4 = var5.getManyRoles;
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.sort;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.sortRolesByVerification;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var4, var1, var3);
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.roleContainer;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot14;
                var3 = {};
                var3['role'] = var1;
                var2 = _closure2_slot1;
                var3['guildId'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot7 = var8;
    var5 = var5.MAX_VISUAL_ROLE_LENGTH;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var8 = var5.Fragment;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'gap': 8, 'flexWrap': 'wrap'};
    var5['roleContainer'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4, 'padding': 6};
    var11 = 7;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var10['backgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var5['role'] = var10;
    var10 = {'borderRadius': null, 'height': 12, 'width': 12};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var5['roleDot'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 22;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileRolesCard.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserProfileRolesCard(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var9 = var2.userId;
            var _closure2_slot0 = var9;
            var10 = var2.guildId;
            var _closure2_slot1 = var10;
            var7 = var2.style;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var5 = undefined;
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var10;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getMember;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var8)(var3, var1, var2);
            var1 = null;
            var3 = var1 == var2;
            var9 = undefined;
            if(var3) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var9 = var2.roles;
case 32:
            if(!(var1 == var9)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var9 = new Array(0);
case 34:
            var3 = var9.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 21;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var13 = _closure1_slot0;
            var8 = 13;
            var11 = var14[var8];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.LPJmL/;
            var8 = var11.bind(var12)(var8);
            var2['title'] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot15;
            var6 = {};
            var6['guildId'] = var10;
            var6['guildMemberRoleIds'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['RoleItem'] = var2;
    return var1;
})();