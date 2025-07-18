// app/modules/premium/native/PremiumPlanPurchasedStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/native/PremiumPlanPurchasedStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['usePremiumPlanPurchasedStore'] = var4;
    var4 = function setInitiatedPurchaseFromNewFlow(arg1) {
        var1 = arg1;
        var3 = var1.productId;
        var _closure2_slot0 = var3;
        var3 = var1.onPaymentSuccess;
        var _closure2_slot1 = var3;
        var1 = var1.onPaymentDismiss;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = {};
            var5 = _closure2_slot0;
            var1['productId'] = var5;
            var5 = true;
            var1['initiatedPurchaseFromNewFlow'] = var5;
            var5 = _closure2_slot1;
            var1['onPaymentSuccess'] = var5;
            var4 = _closure2_slot2;
            var1['onPaymentDismiss'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setInitiatedPurchaseFromNewFlow'] = var4;
    var4 = function setPaymentSuccess() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.initiatedPurchaseFromNewFlow;
            if(!var2) { _fun0001_ip = 103; continue _fun0001 }
 26:
            var3 = _closure1_slot2;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.productId;
            var2 = var2.onPaymentSuccess;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.batchUpdates;
            var4 = function() {
                var3 = _closure1_slot2;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isPaymentSuccess'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0001_ip = 103; continue _fun0001 }
 98:
            var1 = var2.bind(var1)(var3);
 103:
            var1 = undefined;
            return var1;
        }
    };
    var3['setPaymentSuccess'] = var4;
    var4 = function showOldPaymentFlowSuccess(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.initiatedPurchaseFromNewFlow;
            if(var2) { _fun0002_ip = 37; continue _fun0002 }
 26:
            var3 = arg1;
            var2 = undefined;
            var2 = var3.bind(var2)();
            _fun0002_ip = 77; continue _fun0002;
 37:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isPaymentSuccess'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 77:
            var1 = undefined;
            return var1;
        }
    };
    var3['showOldPaymentFlowSuccess'] = var4;
    var2 = function reset() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getState;
            var3 = var2.bind(var3)();
            var5 = var3.productId;
            var2 = var3.isPaymentSuccess;
            var4 = var3.onPaymentDismiss;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 60; continue _fun0003 }
 41:
            var3 = {};
            var3['productId'] = var5;
            var3['isSuccess'] = var2;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
 60:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = var4.setState;
                var2 = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
                var1 = undefined;
                var2['onPaymentSuccess'] = var1;
                var2['onPaymentDismiss'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['reset'] = var2;
    return var1;
})();