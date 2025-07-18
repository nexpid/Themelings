// app/modules/directory_channels/useAvailableAndAddedGuilds.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/useAvailableAndAddedGuilds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var6 = _closure1_slot6;
        var5 = var6.useState;
        var2 = false;
        var8 = var5.bind(var6)(var2);
        var7 = _closure1_slot5;
        var5 = undefined;
        var2 = 2;
        var8 = var7.bind(var5)(var8, var2);
        var2 = 0;
        var2 = var8[var2];
        var7 = 1;
        var7 = var8[var7];
        var _closure2_slot2 = var7;
        var10 = _closure1_slot0;
        var9 = _closure1_slot3;
        var8 = 8;
        var7 = var9[var8];
        var13 = var10.bind(var5)(var7);
        var12 = var13.useStateFromStores;
        var7 = _closure1_slot10;
        var11 = new Array(1);
        var11[0] = var7;
        var7 = function() {
            var3 = _closure1_slot10;
            var2 = var3.getAdminGuildEntryIds;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var12.bind(var13)(var11, var7);
        var _closure2_slot3 = var7;
        var8 = var9[var8];
        var12 = var10.bind(var5)(var8);
        var11 = var12.useStateFromStoresArray;
        var8 = _closure1_slot9;
        var10 = new Array(3);
        var10[0] = var8;
        var8 = _closure1_slot7;
        var10[1] = var8;
        var8 = _closure1_slot8;
        var10[2] = var8;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() {
            var3 = _closure1_slot9;
            var1 = var3.getFlattenedGuildIds;
            var4 = var1.bind(var3)();
            var1 = new Array(0);
            var _closure3_slot0 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var1 = arg1;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0001_ip = 55; continue _fun0001 }
 29:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var2 = _closure1_slot11;
                    var2 = var2.ADMINISTRATOR;
                    var1 = var4.bind(var5)(var2, var3);
 55:
                    if(!var1) { _fun0001_ip = 74; continue _fun0001 }
 58:
                    var4 = var3.id;
                    var2 = _closure2_slot0;
                    var1 = var4 !== var2;
 74:
                    if(!var1) { _fun0001_ip = 94; continue _fun0001 }
 77:
                    var2 = _closure3_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var8 = var11.bind(var12)(var10, var4, var8);
        var _closure2_slot4 = var8;
        var4 = _closure1_slot1;
        var1 = 9;
        var1 = var9[var1];
        var4 = var4.bind(var5)(var1);
        var1 = function() {
            var3 = _closure1_slot4;
            var1 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 110; continue _fun0002 }
 7:
                        var5 = _closure2_slot2;
                        var3 = undefined;
                        var2 = true;
                        var2 = var5.bind(var3)(var2);
                        var5 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var2 = 10;
                        var2 = var6[var2];
                        var7 = var5.bind(var3)(var2);
                        var6 = var7.fetchGuildEntriesForIds;
                        var5 = _closure2_slot1;
                        var9 = _closure2_slot4;
                        var8 = var9.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var2 = var8.bind(var9)(var2);
                        var2 = var6.bind(var7)(var5, var2);
                        SaveGenerator(address=87);
 85:
                        return var2;
 87:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 107; continue _fun0002 }
 93:
                        var5 = _closure2_slot2;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 107:
                        return var2;
 110:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            var2 = var2.bind(var1)();
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = {};
        var9 = var6.useMemo;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var4 = function() {
            var3 = _closure2_slot4;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 38; continue _fun0003 }
 16:
                    var4 = _closure2_slot3;
                    var3 = var4.has;
                    var2 = arg1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 38:
                    var1 = !var1;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var9.bind(var6)(var4, var5);
        var1['availableGuilds'] = var4;
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var3 = function() {
            var3 = _closure2_slot4;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 40; continue _fun0004 }
 18:
                    var4 = _closure2_slot3;
                    var3 = var4.has;
                    var2 = arg1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var5.bind(var6)(var3, var4);
        var1['addedGuilds'] = var3;
        var1['loading'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();