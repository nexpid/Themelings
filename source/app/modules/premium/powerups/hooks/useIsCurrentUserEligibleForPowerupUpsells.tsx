// app/modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function checkPowerupUpsellEligibility(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var7 = arg3;
            var _closure2_slot0 = var9;
            var1 = null;
            var1 = var1 != var9;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var9.isPremiumGroupMember;
            var2 = var2.bind(var9)();
            var2 = !var2;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 5;
            var6 = var6[var4];
            var4 = undefined;
            var6 = var10.bind(var4)(var6);
            var4 = var6.isPremium;
            var3 = _closure1_slot6;
            var3 = var3.TIER_2;
            var3 = var4.bind(var6)(var9, var3);
            var4 = !var3;
            var3 = !var4;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var8.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.premiumGuildSubscription;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var4 = var6.bind(var8)(var4);
            var6 = !var4;
            var4 = !var6;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.some;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.getMember;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = arg1;
                    var3 = var3.bind(var4)(var1, var2);
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = var3.premiumSince;
case 10:
                    var1 = var2 != var1;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5);
case 8:
            var3 = var4;
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsCurrentUserEligibleForPowerupUpsells() {
        var5 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var7 = 6;
        var2 = var9[var7];
        var4 = undefined;
        var11 = var8.bind(var4)(var2);
        var10 = var11.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var10.bind(var11)(var3, var2);
        var2 = var9[var7];
        var12 = var8.bind(var4)(var2);
        var11 = var12.useStateFromStoresArray;
        var2 = _closure1_slot5;
        var10 = new Array(1);
        var10[0] = var2;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot5;
                var1 = var1.hasFetched;
                if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var1 = new Array(0);
                _fun0003_ip = 14; continue _fun0003;
case 12:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var2 = _closure1_slot5;
                var2 = var2.boostSlots;
                var1 = var3.bind(var4)(var2);
case 14:
                return var1;
            }
        };
        var2 = var11.bind(var12)(var10, var2);
        var7 = var9[var7];
        var8 = var8.bind(var4)(var7);
        var7 = var8.useStateFromStores;
        var9 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var9;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getFlattenedGuildIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var7.bind(var8)(var6, var1);
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getIsCurrentUserEligibleForPowerupUpsells() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = var3.getCurrentUser;
            var4 = var2.bind(var3)();
            var2 = _closure1_slot5;
            var2 = var2.hasFetched;
            if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var3 = new Array(0);
            _fun0004_ip = 17; continue _fun0004;
case 15:
            var2 = global;
            var7 = var2.Object;
            var6 = var7.values;
            var2 = _closure1_slot5;
            var2 = var2.boostSlots;
            var3 = var6.bind(var7)(var2);
case 17:
            var2 = _closure1_slot3;
            var1 = var2.getFlattenedGuildIds;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        }
    };
    var3['getIsCurrentUserEligibleForPowerupUpsells'] = var2;
    return var1;
})();