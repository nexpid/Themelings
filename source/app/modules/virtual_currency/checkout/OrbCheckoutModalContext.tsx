// app/modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.createContext;
    var9 = var4.useContext;
    var _closure1_slot3 = var9;
    var9 = var4.useCallback;
    var _closure1_slot4 = var9;
    var4 = var4.useMemo;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {'skuId': '123', 'loadId': null, 'analyticsLocations': null, 'analyticsSourceLocation': null, 'isRedeeming': false, 'orbRedemptionError': null, 'orbProductContext': null};
    var8 = 4;
    var8 = var7[var8];
    var9 = var6.bind(var1)(var8);
    var8 = var9.v4;
    var8 = var8.bind(var9)();
    var4['loadId'] = var8;
    var8 = new Array(0);
    var4['analyticsLocations'] = var8;
    var4['analyticsSourceLocation'] = var1;
    var8 = function onRedeemVirtualCurrency() {
        var1 = undefined;
        return var1;
    };
    var4['onRedeemVirtualCurrency'] = var8;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = function useOrbCheckoutModalContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.skuId;
            var _closure2_slot0 = var9;
            var8 = var2.loadId;
            var _closure2_slot1 = var8;
            var6 = var2.analyticsLocations;
            var12 = var2.onCheckoutSuccess;
            var _closure2_slot2 = var12;
            var11 = undefined;
            var _closure2_slot6 = var11;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var2 = var7[var3];
            var14 = var5.bind(var11)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.canUseShopDiscounts;
                var4 = _closure1_slot6;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var13.bind(var14)(var10, var2);
            var _closure2_slot3 = var2;
            var3 = var7[var3];
            var15 = var5.bind(var11)(var3);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var3;
            var10 = new Array(1);
            var10[0] = var9;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var14.bind(var15)(var13, var3, var10);
            var3 = 7;
            var3 = var7[var3];
            var13 = var5.bind(var11)(var3);
            var10 = var13.useSKUOrbPrice;
            var3 = {};
            var3['sku'] = var14;
            var10 = var10.bind(var13)(var3);
            var _closure2_slot4 = var10;
            var3 = 8;
            var3 = var7[var3];
            var5 = var5.bind(var11)(var3);
            var3 = var5.useFetchCollectiblesProduct;
            var3 = var3.bind(var5)(var9);
            var7 = var3.product;
            var _closure2_slot5 = var7;
            var5 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var7;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot5;
                    if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    return var3;
case 4:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getProductOrbPrice;
                    var1 = {};
                    var6 = _closure2_slot5;
                    var1['product'] = var6;
                    var6 = _closure2_slot3;
                    var1['hasShopDiscount'] = var6;
                    var4 = var4.bind(var5)(var1);
                    var1 = {};
                    var3 = null;
                    if(!(var3 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var4.amount;
case 6:
                    var1['orbPriceAmount'] = var3;
                    return var1;
case 2:
                    var1 = {};
                    var2 = _closure2_slot4;
                    var2 = var2.amount;
                    var1['orbPriceAmount'] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var11)(var2, var3);
            var7 = null;
            var3 = var7 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var5.orbPriceAmount;
case 8:
            if(!(var7 == var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var13 = var3.bind(var11)(var2);
            var10 = var13.captureBillingMessage;
            var3 = {};
            var2 = {};
            var2['sku_id'] = var9;
            var3['tags'] = var2;
            var2 = 'Orb price not found for product';
            var2 = var10.bind(var13)(var2, var3);
case 10:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 11;
            var2 = var10[var2];
            var10 = var3.bind(var11)(var2);
            var3 = var10.useRedeemVirtualCurrency;
            var2 = {};
            var2['skuId'] = var9;
            var2['loadId'] = var8;
            var2 = var3.bind(var10)(var2);
            var13 = var2.redeemVirtualCurrency;
            _closure2_slot6 = var13;
            var3 = var2.isSubmitting;
            var2 = var2.error;
            var10 = _closure1_slot4;
            var4 = new Array(4);
            var4[0] = var9;
            var4[1] = var8;
            var4[2] = var13;
            var4[3] = var12;
            var1 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure2_slot6;
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
            var4 = var10.bind(var11)(var1, var4);
            var1 = {};
            var1['skuId'] = var9;
            var1['loadId'] = var8;
            if(!(var7 == var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = new Array(0);
case 12:
            var1['analyticsLocations'] = var6;
            var1['orbProductContext'] = var5;
            var1['onRedeemVirtualCurrency'] = var4;
            var1['isRedeeming'] = var3;
            var1['orbRedemptionError'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useOrbCheckoutModalContextProvider'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var14 = var1.skuId;
            var13 = var1.loadId;
            var11 = var1.analyticsSourceLocation;
            var12 = var1.analyticsLocations;
            var4 = var1.onCheckoutSuccess;
            var5 = var1.children;
            var3 = _closure1_slot10;
            var2 = {};
            var2['skuId'] = var14;
            var2['loadId'] = var13;
            var2['analyticsLocations'] = var12;
            var2['onCheckoutSuccess'] = var4;
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var10 = var2.orbProductContext;
            var9 = var2.onRedeemVirtualCurrency;
            var8 = var2.isRedeeming;
            var7 = var2.orbRedemptionError;
            var3 = _closure1_slot8;
            var1 = _closure1_slot9;
            var2 = var1.Provider;
            var1 = {};
            var6 = {};
            var6['skuId'] = var14;
            var6['loadId'] = var13;
            var13 = null;
            if(!(var13 == var12)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var12 = new Array(0);
case 14:
            var6['analyticsLocations'] = var12;
            var6['analyticsSourceLocation'] = var11;
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
        var2 = _closure1_slot9;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useOrbCheckoutModalContext'] = var2;
    return var1;
})();