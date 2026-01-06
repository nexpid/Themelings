// app/uikit-native/modals/InviteRolesList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center', 'gap': 4};
    var4['rolesRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/InviteRolesList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InviteRolesList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.invite;
            var6 = var1.style;
            var1 = _closure1_slot7;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var1 = var2.guild;
            var _closure2_slot0 = var1;
            var2 = var2.roles;
            var _closure2_slot1 = var2;
            var8 = _closure1_slot3;
            var4 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = _closure2_slot1;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.fromServer;
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.sort;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 5;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.sortRolesByVerification;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 6; continue _fun0002;
case 2:
                    var1 = new Array(0);
case 6:
                    return var1;
                }
            };
            var12 = var4.bind(var8)(var2, var3);
            var4 = null;
            var2 = var4 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var4 = _closure1_slot6;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 6;
            var2 = var17[var2];
            var2 = var16.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {};
            var8 = 4;
            var2['spacing'] = var8;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var6 = 7;
            var6 = var17[var6];
            var6 = var16.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': 'text-default'};
            var13 = 8;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.stcSfI;
            var13 = var14.bind(var15)(var13);
            var6['children'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.rolesRow;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['role'] = var1;
                var6 = _closure2_slot0;
                var6 = var6.id;
                var2['guildId'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();