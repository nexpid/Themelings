// app/modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherRoleOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.style;
            var10 = var2.option;
            var _closure2_slot0 = var10;
            var1 = var2.initialValue;
            var _closure2_slot1 = var1;
            var14 = var2.onRolePress;
            var _closure2_slot2 = var14;
            var1 = var2.onActionSheetDismiss;
            var _closure2_slot3 = var1;
            var1 = var2.channel;
            var _closure2_slot4 = var1;
            var5 = var2.autoFocus;
            var8 = var2.hasError;
            var2 = var2.onPress;
            var _closure2_slot5 = var2;
            var1 = var1.guild_id;
            var _closure2_slot6 = var1;
            var13 = _closure1_slot4;
            var2 = var13.useState;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 47; continue _fun0002 }
 18:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'roleMention';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0002_ip = 47; continue _fun0002 }
 37:
                    var2 = _closure2_slot1;
                    var1 = var2.roleId;
 47:
                    return var1;
                }
            };
            var3 = var2.bind(var13)(var1);
            var2 = _closure1_slot3;
            var4 = undefined;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var3[var1];
            var _closure2_slot7 = var1;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot8 = var2;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var2 = var12[var2];
            var15 = var3.bind(var4)(var2);
            var9 = var15.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot7;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0003_ip = 17; continue _fun0003 }
 13:
                    var1 = undefined;
                    return var1;
 17:
                    var1 = _closure2_slot6;
                    var3 = var3 != var1;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 57; continue _fun0003 }
 30:
                    var5 = _closure1_slot5;
                    var4 = var5.getRole;
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot7;
                    var1 = var4.bind(var5)(var3, var2);
 57:
                    return var1;
                }
            };
            var9 = var9.bind(var15)(var3, var2);
            var _closure2_slot9 = var9;
            var3 = var13.useEffect;
            var2 = new Array(4);
            var2[0] = var14;
            var14 = var10.name;
            var2[1] = var14;
            var2[2] = var9;
            var2[3] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 24; continue _fun0004 }
 16:
                    var4 = _closure2_slot9;
                    var3 = var1 == var4;
 24:
                    if(!var3) { _fun0004_ip = 45; continue _fun0004 }
 27:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var2['role'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var13)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var11;
            var1['option'] = var10;
            var1['hasError'] = var8;
            var8 = null;
            var10 = var8 != var9;
            var1['selected'] = var10;
            var10 = var8 != var9;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 307; continue _fun0001 }
 302:
            var8 = var9.name;
 307:
            var1['selectedItemName'] = var8;
            var7 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 6;
                    var3 = var8[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var8[var2];
                    var9 = var3.bind(var1)(var2);
                    var2 = 7;
                    var4 = var8[var2];
                    var2 = var8.paths;
                    var4 = var9.bind(var1)(var4, var2);
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['option'] = var8;
                    var8 = _closure2_slot4;
                    var2['channel'] = var8;
                    var8 = function onRolePress(arg1) {
                        var1 = arg1;
                        var4 = var1.role;
                        var5 = _closure2_slot8;
                        var3 = var4.id;
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = _closure2_slot2;
                        var2 = {};
                        var2['role'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onRolePress'] = var8;
                    var7 = _closure2_slot3;
                    var2['onActionSheetDismiss'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onPress'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.RoleIcon;
            var6 = {};
            var6['role'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['leading'] = var6;
            var1['autoFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();