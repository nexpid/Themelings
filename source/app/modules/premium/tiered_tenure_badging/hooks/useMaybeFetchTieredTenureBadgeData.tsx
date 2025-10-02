// app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeFetchTieredTenureBadgeData() {
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 2;
        var4 = var5[var1];
        var1 = undefined;
        var9 = var6.bind(var1)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var4;
        var4 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var8.bind(var9)(var7, var4);
        var _closure2_slot0 = var4;
        var4 = 3;
        var4 = var5[var4];
        var7 = var6.bind(var1)(var4);
        var6 = var7.useIsPremiumSubscriber;
        var4 = _closure1_slot4;
        var4 = var4.TIER_2;
        var4 = var6.bind(var7)(var4);
        var _closure2_slot1 = var4;
        var4 = _closure1_slot1;
        var3 = 4;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                var5 = var4 == var1;
                var1 = undefined;
                var3 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot0;
                var3 = var5.id;
case 2:
                var3 = var4 != var3;
                if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot1;
case 4:
                if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2);
case 6:
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useMaybeFetchTieredTenureBadgeData'] = var2;
    return var1;
})();