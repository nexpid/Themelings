// app/modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function hasCrepeMonthlyOrbsPerk(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var6 = undefined;
            var4 = var4.bind(var6)(var1);
            var1 = var4.canUseMonthlyOrbs;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
            return var1;
case 2:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var8 = var4.bind(var6)(var1);
            var5 = var8.getPerkSource;
            var1 = null;
            var7 = var1 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.perks;
case 4:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 3;
            var3 = var3[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.Perk;
            var3 = var3.MONTHLY_ORBS;
            var4 = var5.bind(var8)(var4, var3);
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.includes;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.PerkSource;
            var2 = var2.SOURCE_THIRDPARTY_CROISSANT;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx';
    var5 = var6.bind(var7)(var5);
    var3['hasCrepeMonthlyOrbsPerk'] = var4;
    var2 = function useHasXboxMonthlyOrbsPerk() {
        var3 = _closure1_slot4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 4;
        var4 = var4[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var4);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var5.bind(var6)(var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useHasXboxMonthlyOrbsPerk'] = var2;
    return var1;
})();