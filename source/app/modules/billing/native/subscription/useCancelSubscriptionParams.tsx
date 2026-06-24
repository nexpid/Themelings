// app/modules/billing/native/subscription/useCancelSubscriptionParams.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/subscription/useCancelSubscriptionParams.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCancelSubscriptionParams(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 1;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                var2 = var4 == var1;
                var1 = null;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                var2 = var4 == var2;
                var1 = null;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.v4;
                var4 = var4.bind(var5)();
                var2['requestIdentifier'] = var4;
                var3 = _closure2_slot0;
                var2['subscriptionId'] = var3;
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();