// app/modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.createContext;
    var9 = var4.useContext;
    var _closure1_slot3 = var9;
    var9 = var4.useCallback;
    var _closure1_slot4 = var9;
    var4 = var4.useMemo;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {'skuId': '123', 'loadId': null, 'analyticsLocations': null, 'isRedeeming': false, 'orbRedemptionError': null, 'orbProductContext': null};
    var8 = 3;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.v4;
    var8 = var8.bind(var9)();
    var4['loadId'] = var8;
    var8 = new Array(0);
    var4['analyticsLocations'] = var8;
    var8 = function onRedeemVirtualCurrency() {
        var1 = undefined;
        return var1;
    };
    var4['onRedeemVirtualCurrency'] = var8;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.skuId;
            var _closure2_slot0 = var13;
            var12 = var1.loadId;
            var _closure2_slot1 = var12;
            var11 = var1.analyticsLocations;
            var9 = var1.onCheckoutSuccess;
            var _closure2_slot2 = var9;
            var5 = var1.children;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var4 = undefined;
            var14 = var6.bind(var4)(var3);
            var10 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.canUseCollectibles;
                var4 = _closure1_slot6;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var14)(var8, var3);
            var _closure2_slot3 = var3;
            var8 = 6;
            var8 = var7[var8];
            var10 = var6.bind(var4)(var8);
            var8 = var10.useFetchCollectiblesProduct;
            var8 = var8.bind(var10)(var13);
            var14 = var8.product;
            var _closure2_slot4 = var14;
            var10 = _closure1_slot5;
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getProductOrbPrice;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var2['product'] = var6;
                    var6 = _closure2_slot3;
                    var2['isPremiumUser'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var2 = {};
                    var2['orbPrice'] = var5;
                    var4 = null;
                    if(!(var4 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var5.amount;
case 4:
                    var2['orbPriceAmount'] = var4;
                    var3 = _closure2_slot4;
                    var2['product'] = var3;
                    return var2;
case 2:
                    return var1;
                }
            };
            var10 = var10.bind(var4)(var3, var8);
            var3 = 8;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useRedeemVirtualCurrency;
            var3 = var3.bind(var6)();
            var14 = var3.redeemVirtualCurrency;
            var _closure2_slot5 = var14;
            var8 = var3.isSubmitting;
            var7 = var3.error;
            var6 = _closure1_slot4;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var14;
            var3[3] = var9;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure2_slot5;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = function(arg1) {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var4 = arg1;
                    var2['entitlements'] = var4;
                    var1 = _closure2_slot0;
                    var2['skuId'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var9 = var6.bind(var4)(var2, var3);
            var3 = _closure1_slot7;
            var1 = _closure1_slot8;
            var2 = var1.Provider;
            var1 = {};
            var6 = {};
            var6['skuId'] = var13;
            var6['loadId'] = var12;
            var12 = null;
            if(!(var12 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = new Array(0);
case 6:
            var6['analyticsLocations'] = var11;
            var6['orbProductContext'] = var10;
            var6['onRedeemVirtualCurrency'] = var9;
            var6['isRedeeming'] = var8;
            var6['orbRedemptionError'] = var7;
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['OrbCheckoutModalContextProvider'] = var4;
    var2 = function() {
        var3 = _closure1_slot3;
        var2 = _closure1_slot8;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useOrbCheckoutModalContext'] = var2;
    return var1;
})();