// app/modules/guild_settings_picker/useFilteredGuilds.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings_picker/useFilteredGuilds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFilteredGuilds(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.isGuildIncluded;
            var _closure2_slot0 = var9;
            var4 = var1.selectedGuildId;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var3 = var8[var1];
            var2 = undefined;
            var12 = var7.bind(var2)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getFlattenedGuildIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var11.bind(var12)(var10, var3);
            var _closure2_slot1 = var11;
            var3 = var8[var1];
            var13 = var7.bind(var2)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var12.bind(var13)(var10, var3);
            var _closure2_slot2 = var3;
            var1 = var8[var1];
            var10 = var7.bind(var2)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var10)(var7, var1);
            var _closure2_slot3 = var10;
            var1 = {};
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = new Array(4);
            var6[0] = var11;
            var6[1] = var3;
            var6[2] = var10;
            var6[3] = var9;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0002_ip = 69; continue _fun0002 }
 15:
                    var3 = _closure2_slot0;
                    if(!(var4 != var3)) { _fun0002_ip = 46; continue _fun0002 }
 23:
                    var5 = _closure2_slot1;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var3 = _closure2_slot2;
                        var2 = arg1;
                        var4 = var3[var2];
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var2 = var3[var2];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var2);
                        var2 = null;
                        var5 = var2 != var4;
                        var2 = 'guild should not be null';
                        var2 = var6.bind(var3)(var5, var2);
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot3;
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    _fun0002_ip = 50; continue _fun0002;
 46:
                    var3 = _closure2_slot1;
 50:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = _closure2_slot2;
                        var1 = arg1;
                        var2 = var2[var1];
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var3.bind(var5)(var1);
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = 'guild should not be null';
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = {};
                        var3 = var2.name;
                        var1['label'] = var3;
                        var2 = var2.id;
                        var1['value'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 73; continue _fun0002;
 69:
                    var1 = new Array(0);
 73:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var6);
            var1['options'] = var5;
            var5 = null;
            var5 = var5 == var4;
            if(var5) { _fun0001_ip = 227; continue _fun0001 }
 223:
            var2 = var3[var4];
 227:
            var1['selectedGuild'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();