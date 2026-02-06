// app/modules/premium/powerups/hooks/useIsEligibleForPowerupUpsells.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getIsEligibleForPowerupUpsells(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var3);
            var5 = var6.isPremium;
            var1 = _closure1_slot4;
            var3 = var1.TIER_2;
            var1 = arg1;
            var1 = var5.bind(var6)(var1, var3);
            var3 = null;
            var5 = var3 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.premiumSince;
case 2:
            var2 = var3 != var2;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/hooks/useIsEligibleForPowerupUpsells.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsEligibleForPowerupUpsells(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 4;
            var2 = var2[var8];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var7)(var3, var2);
            var2 = null;
            var2 = var2 == var3;
            var10 = undefined;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 5:
            var10 = var3.id;
case 6:
            var _closure2_slot1 = var10;
            var2 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var8 = var7.bind(var4)(var6);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot2;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var9;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var5 = _closure1_slot2;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 7:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var6, var1, var5);
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getIsEligibleForPowerupUpsells'] = var2;
    return var1;
})();