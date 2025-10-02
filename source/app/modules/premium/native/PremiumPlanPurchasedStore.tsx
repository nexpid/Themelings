// app/modules/premium/native/PremiumPlanPurchasedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false, 'applePaymentLinkStatus': null};
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = 6;
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
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot5;
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
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.initiatedPurchaseFromNewFlow;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot5;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.productId;
            var2 = var2.onPaymentSuccess;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.batchUpdates;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isPaymentSuccess'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2.bind(var1)(var3);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['setPaymentSuccess'] = var4;
    var4 = function setApplePaymentLinkStatus(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['applePaymentLinkStatus'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setApplePaymentLinkStatus'] = var4;
    var4 = function handleApplePaymentLinkStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var1 = 'succeeded';
            if(!(var1 === var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot5;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var3 = var1.productId;
            var2 = var1.onPaymentSuccess;
            var6 = var1.applePaymentLinkStatus;
            var1 = 'dismissed';
            if(!(var1 !== var6)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = _closure1_slot3;
            var1 = var6.getKey;
            var8 = var1.bind(var6)();
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var7 = var1[var6];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var7 = var7.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
            if(!(var8 !== var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = var10[var6];
            var7 = var9.bind(var1)(var6);
            var6 = {};
            var8 = _closure1_slot4;
            var8 = var8.TIER_2;
            var6['premiumType'] = var8;
            var8 = 5;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var9 = var8.DEEPLINK;
            var8 = new Array(1);
            var8[0] = var9;
            var6['analyticsLocations'] = var8;
            var8 = {};
            var6['analyticsLocation'] = var8;
            var6 = var7.bind(var1)(var6);
case 9:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.batchUpdates;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isPaymentSuccess'] = var4;
                var4 = _closure2_slot0;
                var1['applePaymentLinkStatus'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 11:
            var1 = var2.bind(var1)(var3);
case 5:
            var1 = undefined;
            return var1;
case 7:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleApplePaymentLinkStatus'] = var4;
    var4 = function showOldPaymentFlowSuccess(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.initiatedPurchaseFromNewFlow;
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 3:
            var3 = arg1;
            var2 = undefined;
            var2 = var3.bind(var2)();
            _fun0003_ip = 13; continue _fun0003;
case 12:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isPaymentSuccess'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 13:
            var1 = undefined;
            return var1;
        }
    };
    var3['showOldPaymentFlowSuccess'] = var4;
    var2 = function reset() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot5;
            var3 = var4.getState;
            var4 = var3.bind(var4)();
            var6 = var4.productId;
            var3 = var4.isPaymentSuccess;
            var5 = var4.onPaymentDismiss;
            var4 = var4.applePaymentLinkStatus;
            var _closure2_slot0 = var4;
            var4 = null;
            if(!(var4 != var5)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = {};
            var4['productId'] = var6;
            var4['isSuccess'] = var3;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
case 14:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.setState;
                    var2 = {'productId': '', 'initiatedPurchaseFromNewFlow': false, 'isPaymentSuccess': false};
                    var1 = _closure2_slot0;
                    var7 = null;
                    var6 = var7 != var1;
                    var1 = null;
                    if(!var6) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var6 = _closure2_slot0;
                    var5 = 'in_mobile_web';
                    var1 = null;
                    if(!(var5 !== var6)) { _fun0005_ip = 16; continue _fun0005 }
case 18:
                    var1 = 'dismissed';
case 16:
                    var2['applePaymentLinkStatus'] = var1;
                    var1 = undefined;
                    var2['onPaymentSuccess'] = var1;
                    var2['onPaymentDismiss'] = var1;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['reset'] = var2;
    return var1;
})();