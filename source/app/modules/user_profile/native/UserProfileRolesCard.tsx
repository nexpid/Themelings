// app/modules/user_profile/native/UserProfileRolesCard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function RoleDot(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(var9 == var7)) { _fun0001_ip = 88; continue _fun0001 }
 53:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 8;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.int2hex;
            var8 = _closure1_slot7;
            var7 = var9.bind(var10)(var8);
 88:
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
 0:
            var1 = arg1;
            var3 = var1.role;
            var _closure2_slot0 = var3;
            var11 = var1.guildId;
            var _closure2_slot1 = var11;
            var4 = var1.color;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot12;
            var7 = var1.bind(var5)();
            var1 = var3.name;
            var6 = var1.length;
            var1 = _closure1_slot8;
            if(!(!(var6 <= var1))) { _fun0002_ip = 129; continue _fun0002 }
 76:
            var10 = var3.name;
            var8 = var10.slice;
            var6 = _closure1_slot8;
            var1 = 0;
            var10 = var8.bind(var10)(var1, var6);
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var6 = '';
            var1 = '...';
            var8 = var8.bind(var6)(var10, var1);
            _fun0002_ip = 134; continue _fun0002;
 129:
            var8 = var3.name;
 134:
            _closure2_slot2 = var8;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 150; continue _fun0002 }
 144:
            var4 = var3.colorString;
 150:
            _closure2_slot3 = var4;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var10 = var6.bind(var5)(var4);
            var6 = var10.useRoleIcon;
            var4 = {};
            var4['guildId'] = var11;
            var11 = var3.id;
            var4['roleId'] = var11;
            var11 = 12;
            var4['size'] = var11;
            var4 = var6.bind(var10)(var4);
            _closure2_slot4 = var4;
            var3 = var3.tags;
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 233; continue _fun0002 }
 227:
            var1 = var3.guild_connections;
 233:
            var1 = var5 !== var1;
            _closure2_slot5 = var1;
            var6 = function renderContent() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var5 = _closure2_slot5;
                    var10 = _closure1_slot9;
                    if(var5) { _fun0003_ip = 66; continue _fun0003 }
 27:
                    var7 = _closure1_slot13;
                    var6 = {};
                    var8 = _closure2_slot3;
                    var5 = null;
                    var11 = var5 != var8;
                    var5 = undefined;
                    var8 = undefined;
                    if(!var11) { _fun0003_ip = 54; continue _fun0003 }
 50:
                    var8 = _closure2_slot3;
 54:
                    var6['color'] = var8;
                    var6 = var10.bind(var5)(var7, var6);
                    _fun0003_ip = 170; continue _fun0003;
 66:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 11;
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
                    if(var13) { _fun0003_ip = 133; continue _fun0003 }
 123:
                    var13 = _closure2_slot0;
                    var12 = var13.colorString;
 133:
                    var13 = var11 != var12;
                    var11 = undefined;
                    if(!var13) { _fun0003_ip = 145; continue _fun0003 }
 142:
                    var11 = var12;
 145:
                    var5['roleColor'] = var11;
                    var11 = 12;
                    var5['size'] = var11;
                    var11 = false;
                    var5['displayRoleIcon'] = var11;
                    var6 = var10.bind(var8)(var7, var5);
 170:
                    var5 = new Array(3);
                    var5[0] = var6;
                    var6 = _closure2_slot4;
                    var5[1] = var6;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 12;
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
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.DeveloperMode;
            var1 = var3.useSetting;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot9;
            if(var1) { _fun0002_ip = 324; continue _fun0002 }
 289:
            var3 = _closure1_slot4;
            var1 = {};
            var10 = var7.role;
            var1['style'] = var10;
            var10 = var6.bind(var5)();
            var1['children'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 451; continue _fun0002;
 324:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 13;
            var2 = var12[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var9 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.copy;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var6.bind(var7)(var3);
                var3 = 15;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.roleIdCopied;
                var2 = _closure2_slot2;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var9;
            var9 = 'button';
            var2['accessibilityRole'] = var9;
            var2['accessibilityLabel'] = var8;
            var8 = 16;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.sMsaLi;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityHint'] = var8;
            var7 = var7.role;
            var2['style'] = var7;
            var6 = var6.bind(var5)();
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 451:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = function RolesList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.userRoles;
            var _closure2_slot0 = var1;
            var2 = var2.guildId;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot12;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 17;
            var3 = var8[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getRoles;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var8.bind(var9)(var4, var3);
            var _closure2_slot2 = var9;
            var8 = _closure1_slot3;
            var4 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var1;
            var1 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure2_slot2;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.sortRolesByVerification;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var4.bind(var8)(var1, var3);
            var9 = null;
            var3 = var9 == var8;
            var1 = null;
            if(var3) { _fun0004_ip = 190; continue _fun0004 }
 132:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0004_ip = 190; continue _fun0004 }
 145:
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
 190:
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
    var5 = native4;
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
    var8 = var5.DEFAULT_ROLE_COLOR;
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
    var13 = var13.BG_MOD_FAINT;
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
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileRolesCard.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserProfileRolesCard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var9 = var2.userId;
            var _closure2_slot0 = var9;
            var10 = var2.guildId;
            var _closure2_slot1 = var10;
            var7 = var2.style;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
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
            if(var3) { _fun0005_ip = 111; continue _fun0005 }
 105:
            var9 = var2.roles;
 111:
            if(!(var1 == var9)) { _fun0005_ip = 119; continue _fun0005 }
 115:
            var9 = new Array(0);
 119:
            var3 = var9.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0005_ip = 252; continue _fun0005 }
 132:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 19;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var13 = _closure1_slot0;
            var8 = 16;
            var11 = var14[var8];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.LPJmLy;
            var8 = var11.bind(var12)(var8);
            var2['title'] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot15;
            var6 = {};
            var6['guildId'] = var10;
            var6['userRoles'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 252:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['RoleItem'] = var2;
    return var1;
})();