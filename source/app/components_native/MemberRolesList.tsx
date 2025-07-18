// app/components_native/MemberRolesList.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var8 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center'};
    var4['wrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/MemberRolesList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberRolesList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.userRoles;
            var _closure2_slot0 = var3;
            var4 = var1.guild;
            var _closure2_slot1 = var4;
            var8 = var1.style;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var5 = undefined;
            var9 = var4.bind(var5)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRoles;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var9)(var4, var1);
            var9 = _closure1_slot5;
            var4 = _closure1_slot3;
            var1 = {};
            var9 = var9.bind(var5)(var4, var1);
            var4 = null;
            var1 = var9;
            if(!(var4 != var3)) { _fun0001_ip = 242; continue _fun0001 }
 112:
            var4 = var3.length;
            var3 = 0;
            var1 = var9;
            if(!(var4 > var3)) { _fun0001_ip = 242; continue _fun0001 }
 126:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var6 = var3.bind(var4)(var6);
            var4 = var6.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var4.bind(var6)(var3);
            var4 = var6.sort;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.tags;
                    var2 = null;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 26; continue _fun0002 }
 20:
                    var3 = var4.guild_connections;
 26:
                    var5 = var2 !== var3;
                    var3 = arg2;
                    var3 = var3.tags;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 54; continue _fun0002 }
 48:
                    var1 = var3.guild_connections;
 54:
                    var3 = var2 !== var1;
                    if(!var5) { _fun0002_ip = 67; continue _fun0002 }
 61:
                    var1 = 1;
                    if(!var3) { _fun0002_ip = 86; continue _fun0002 }
 67:
                    var2 = 0;
                    if(var5) { _fun0002_ip = 83; continue _fun0002 }
 72:
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 83; continue _fun0002 }
 77:
                    var2 = -1;
 83:
                    var1 = var2;
 86:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 5;
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
            var6 = var3.bind(var4)(var2);
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = _closure1_slot6;
            var9 = var7.wrapper;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 242:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();