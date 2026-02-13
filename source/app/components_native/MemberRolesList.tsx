// app/components_native/MemberRolesList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center'};
    var4['wrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/MemberRolesList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberRolesList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userRoles;
            var _closure2_slot0 = var4;
            var2 = var1.guild;
            var _closure2_slot1 = var2;
            var8 = var1.style;
            var1 = _closure1_slot6;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var6, var1);
            var10 = _closure1_slot5;
            var6 = _closure1_slot3;
            var1 = {};
            var10 = var10.bind(var5)(var6, var1);
            var6 = null;
            var1 = var10;
            if(!(var6 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.length;
            var4 = 0;
            var1 = var10;
            if(!(var6 > var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var9.filter;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var9)(var4);
            var6 = var9.sort;
            var4 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.tags;
                    var2 = null;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = var4.guild_connections;
case 5:
                    var5 = var2 !== var3;
                    var3 = arg2;
                    var3 = var3.tags;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = var3.guild_connections;
case 7:
                    var3 = var2 !== var1;
                    if(!var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var1 = 1;
                    if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 9:
                    var2 = 0;
                    if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                    var2 = -1;
case 12:
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var4);
            var4 = var6.map;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['role'] = var1;
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['guildId'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var4.bind(var6)(var3);
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var9 = var7.wrapper;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();