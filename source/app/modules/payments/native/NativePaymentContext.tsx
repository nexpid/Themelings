// app/modules/payments/native/NativePaymentContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var9 = 0;
    var2 = var8[var9];
    var1 = undefined;
    var11 = var12.bind(var1)(var2);
    var4 = 1;
    var6 = var8[var4];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var6);
    var _closure1_slot3 = var2;
    var6 = 2;
    var2 = var8[var6];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var10 = 3;
    var2 = var8[var10];
    var2 = var7.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var2 = var2.bind(var1)();
    var2 = var11.bind(var1)(var2, var10);
    var9 = var2[var9];
    var _closure1_slot6 = var9;
    var4 = var2[var4];
    var2 = var2[var6];
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/payments/native/NativePaymentContext.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function NativePaymentContextProvider(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var13 = var1.skuIDs;
        var _closure2_slot0 = var13;
        var7 = var1.activeSubscription;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 5;
        var8 = var6[var4];
        var4 = undefined;
        var9 = var3.bind(var4)(var8);
        var8 = var9.useNativeIAPPayments;
        var8 = var8.bind(var9)();
        var11 = var8.nativePaymentsConnected;
        var8 = var8.storeFront;
        var _closure2_slot1 = var8;
        var12 = _closure1_slot3;
        var10 = var12.useEffect;
        var9 = new Array(2);
        var9[0] = var8;
        var9[1] = var13;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                var2 = var2 == var3;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot4;
                var4 = var5.isFetchingForSKUs;
                var3 = _closure2_slot0;
                var2 = var4.bind(var5)(var3);
case 2:
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.fetchSubscriptionPlansBySKUs;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var1.country;
                var1 = var3.bind(var4)(var2, var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var10.bind(var12)(var2, var9);
        var2 = 7;
        var2 = var6[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var9 = var2.selectedPlan;
        var10 = var2.setSelectedPlanId;
        var3 = _closure1_slot5;
        var1 = _closure1_slot6;
        var2 = var1.Provider;
        var1 = {};
        var6 = {};
        var6['isReadyToPurchase'] = var11;
        var6['setSelectedPlanId'] = var10;
        var6['selectedPlan'] = var9;
        var6['storeFront'] = var8;
        var6['activeSubscription'] = var7;
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['NativePaymentContextProvider'] = var5;
    var3['useNativeIAPPaymentContext'] = var4;
    var3['useForwardedNativePaymentContext'] = var2;
    return var1;
})();