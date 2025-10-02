// app/modules/guild_profile/hooks/useGuildProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/hooks/useGuildProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildProfile(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 3;
        var1 = var9[var2];
        var8 = undefined;
        var12 = var6.bind(var8)(var1);
        var11 = var12.useStateFromStores;
        var1 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var1;
        var5 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getProfile;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var11.bind(var12)(var10, var5);
        var2 = var9[var2];
        var9 = var6.bind(var8)(var2);
        var6 = var9.useStateFromStores;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getFetchStatus;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var6.bind(var9)(var2, var1);
        var1 = {};
        var1['guildProfile'] = var5;
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = undefined;
                    if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = false;
case 4:
                    SaveGenerator(address=22);
case 6:
                    return var5;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getGuildProfile;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3, var6);
                    SaveGenerator(address=74);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    return var3;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var8)(var3);
        var3 = new Array(1);
        var3[0] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['fetchGuildProfile'] = var3;
        var1['fetchStatus'] = var2;
        return var1;
    };
    var3['useGuildProfile'] = var2;
    return var1;
})();