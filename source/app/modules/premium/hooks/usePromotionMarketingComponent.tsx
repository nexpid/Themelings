// app/modules/premium/hooks/usePromotionMarketingComponent.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/usePromotionMarketingComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePromotionMarketingComponent(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot2;
        var4 = var6.useEffect;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.maybeFetchActivePromotions;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getMarketingComponentByType;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = var2.promotionId;
                var7 = _closure1_slot4;
                var6 = var7.getPromotionByTypeAndId;
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 5;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var9.bind(var5)(var3);
                var3 = var3.PromotionTypes;
                var3 = var3.MARKETING_MOMENT;
                var3 = var6.bind(var7)(var3, var8);
                var6 = var1 == var3;
                if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var3.trialId;
case 4:
                if(!(var1 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = _closure1_slot3;
                var4 = var5.getUserTrialOffer;
                var3 = var3.trialId;
                var4 = var4.bind(var5)(var3);
                if(!(var1 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = var4.expires_at;
                if(!(var1 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 10:
                var3 = global;
                var6 = var3.Date;
                var5 = var6.parse;
                var4 = var4.expires_at;
                var4 = var5.bind(var6)(var4);
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                if(!(!(var4 < var3))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
                return var2;
case 8:
                return var1;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['usePromotionMarketingComponent'] = var2;
    return var1;
})();