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
        var11 = _closure1_slot3;
        var1 = var11.useState;
        var8 = undefined;
        var1 = var1.bind(var11)(var8);
        var10 = _closure1_slot2;
        var9 = 2;
        var1 = var10.bind(var8)(var1, var9);
        var7 = 0;
        var6 = var1[var7];
        var2 = 1;
        var3 = var1[var2];
        var1 = var11.useState;
        var1 = var1.bind(var11)(var8);
        var1 = var10.bind(var8)(var1, var9);
        var7 = var1[var7];
        var _closure2_slot0 = var7;
        var2 = var1[var2];
        var1 = {};
        var1['selectedSkuId'] = var6;
        var7 = _closure1_slot0;
        var9 = _closure1_slot1;
        var6 = 3;
        var6 = var9[var6];
        var7 = var7.bind(var8)(var6);
        var6 = var7.useStateFromStores;
        var8 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var8;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot4;
                var3 = var4.get;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var4 = var6.bind(var7)(var5, var4);
        var1['selectedPlan'] = var4;
        var1['setSelectedSkuId'] = var3;
        var1['setSelectedPlanId'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();