// app/modules/payments/hooks/useSubscriptionSelection.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/hooks/useSubscriptionSelection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSubscriptionSelection() {
        var12 = _closure1_slot3;
        var1 = var12.useState;
        var10 = undefined;
        var1 = var1.bind(var12)(var10);
        var11 = _closure1_slot2;
        var9 = 2;
        var1 = var11.bind(var10)(var1, var9);
        var3 = 0;
        var8 = var1[var3];
        var2 = 1;
        var5 = var1[var2];
        var1 = var12.useState;
        var1 = var1.bind(var12)(var10);
        var1 = var11.bind(var10)(var1, var9);
        var4 = var1[var3];
        var _closure2_slot0 = var4;
        var4 = var1[var2];
        var1 = var12.useState;
        var1 = var1.bind(var12)(var10);
        var1 = var11.bind(var10)(var1, var9);
        var3 = var1[var3];
        var2 = var1[var2];
        var1 = {};
        var1['selectedSkuId'] = var8;
        var9 = _closure1_slot0;
        var11 = _closure1_slot1;
        var8 = 3;
        var8 = var11[var8];
        var9 = var9.bind(var10)(var8);
        var8 = var9.useStateFromStores;
        var10 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var10;
        var6 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0001_ip = 37; continue _fun0001 }
 16:
                var4 = _closure1_slot4;
                var3 = var4.get;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 37:
                return var1;
            }
        };
        var6 = var8.bind(var9)(var7, var6);
        var1['selectedPlan'] = var6;
        var1['setSelectedSkuId'] = var5;
        var1['setSelectedPlanId'] = var4;
        var1['selectedPlanNotification'] = var3;
        var1['setSelectedPlanNotification'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();