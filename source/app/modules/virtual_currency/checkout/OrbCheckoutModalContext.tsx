// app/modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function useOrbCheckoutModalContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.skuId;
            var _closure2_slot0 = var9;
            var6 = var2.loadId;
            var _closure2_slot1 = var6;
            var12 = var2.onCheckoutSuccess;
            var _closure2_slot2 = var12;
            var13 = var2.onSignFailure;
            var14 = var2.order;
            var11 = undefined;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var2 = var7[var3];
            var15 = var5.bind(var11)(var2);
            var10 = var15.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var2;
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
            var2 = var10.bind(var15)(var8, var2);
            var _closure2_slot3 = var2;
            var3 = var7[var3];
            var10 = var5.bind(var11)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = new Array(1);
            var5[0] = var9;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var8.bind(var10)(var7, var3, var5);
            var3 = null;
            var5 = var3 != var18;
            var8 = null;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var18.productLine;
case 2:
            var5 = var3 == var18;
            var7 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var18.applicationId;
case 4:
            if(!(var3 == var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 7;
            var5 = var15[var5];
            var10 = var10.bind(var11)(var5);
            var5 = var10.get1PShopApplicationIdForSKU;
            var7 = var5.bind(var10)(var9);
case 6:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 8;
            var5 = var15[var5];
            var17 = var10.bind(var11)(var5);
            var16 = var17.useSKUOrbPrice;
            var5 = {};
            var5['sku'] = var18;
            var16 = var16.bind(var17)(var5);
            _closure2_slot4 = var16;
            var5 = 9;
            var5 = var15[var5];
            var10 = var10.bind(var11)(var5);
            var5 = var10.useFetchCollectiblesProduct;
            var5 = var5.bind(var10)(var9);
            var15 = var5.product;
            _closure2_slot5 = var15;
            var10 = _closure1_slot5;
            var5 = new Array(3);
            var5[0] = var16;
            var5[1] = var15;
            var5[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot5;
                    if(!(var3 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    return var3;
case 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
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
                    if(!(var3 !== var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = var4.amount;
case 12:
                    var1['orbPriceAmount'] = var3;
                    return var1;
case 8:
                    var1 = {};
                    var2 = _closure2_slot4;
                    var2 = var2.amount;
                    var1['orbPriceAmount'] = var2;
                    return var1;
                }
            };
            var5 = var10.bind(var11)(var2, var5);
            var10 = var3 == var5;
            var2 = undefined;
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var5.orbPriceAmount;
case 14:
            if(!(var3 == var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 11;
            var2 = var10[var2];
            var15 = var3.bind(var11)(var2);
            var10 = var15.captureBillingMessage;
            var3 = {};
            var2 = {};
            var2['sku_id'] = var9;
            var3['tags'] = var2;
            var2 = 'Orb price not found for product';
            var2 = var10.bind(var15)(var2, var3);
case 16:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 12;
            var2 = var10[var2];
            var10 = var3.bind(var11)(var2);
            var3 = var10.useRedeemVirtualCurrency;
            var2 = {};
            var2['skuId'] = var9;
            var2['loadId'] = var6;
            var2['order'] = var14;
            var2['onSignFailure'] = var13;
            var2 = var3.bind(var10)(var2);
            var13 = var2.redeemVirtualCurrency;
            _closure2_slot6 = var13;
            var3 = var2.isSubmitting;
            var2 = var2.error;
            var10 = _closure1_slot4;
            var4 = new Array(4);
            var4[0] = var9;
            var4[1] = var6;
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                        var4 = _closure2_slot2;
                        var2 = {};
                        var2['entitlements'] = var3;
                        var1 = _closure2_slot0;
                        var2['skuId'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
case 18:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var4 = var10.bind(var11)(var1, var4);
            var1 = {};
            var1['skuId'] = var9;
            var1['skuProductLine'] = var8;
            var1['skuApplicationId'] = var7;
            var1['loadId'] = var6;
            var1['orbProductContext'] = var5;
            var1['onRedeemVirtualCurrency'] = var4;
            var1['isRedeeming'] = var3;
            var1['orbRedemptionError'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.createContext;
    var10 = var5.useContext;
    var _closure1_slot3 = var10;
    var10 = var5.useCallback;
    var _closure1_slot4 = var10;
    var5 = var5.useMemo;
    var _closure1_slot5 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot8 = var5;
    var5 = {'skuId': '123', 'skuProductLine': null};
    var9 = null;
    var5['skuApplicationId'] = var1;
    var10 = 4;
    var10 = var7[var10];
    var11 = var6.bind(var1)(var10);
    var10 = var11.v4;
    var10 = var10.bind(var11)();
    var5['loadId'] = var10;
    var10 = new Array(0);
    var5['analyticsLocations'] = var10;
    var5['analyticsSourceLocation'] = var1;
    var10 = false;
    var5['isRedeeming'] = var10;
    var5['orbRedemptionError'] = var9;
    var5['orbProductContext'] = var9;
    var9 = function onRedeemVirtualCurrency() {
        var1 = undefined;
        return var1;
    };
    var5['onRedeemVirtualCurrency'] = var9;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useOrbCheckoutModalContextProvider'] = var4;
    var4 = function OrbCheckoutModalContextProvider(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var16 = var1.skuId;
            var13 = var1.loadId;
            var11 = var1.analyticsSourceLocation;
            var12 = var1.analyticsLocations;
            var4 = var1.onCheckoutSuccess;
            var5 = var1.children;
            var3 = _closure1_slot10;
            var2 = {};
            var2['skuId'] = var16;
            var2['loadId'] = var13;
            var2['onCheckoutSuccess'] = var4;
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var10 = var2.orbProductContext;
            var9 = var2.onRedeemVirtualCurrency;
            var8 = var2.isRedeeming;
            var7 = var2.orbRedemptionError;
            var15 = var2.skuProductLine;
            var14 = var2.skuApplicationId;
            var3 = _closure1_slot8;
            var1 = _closure1_slot9;
            var2 = var1.Provider;
            var1 = {};
            var6 = {};
            var6['skuId'] = var16;
            var6['skuProductLine'] = var15;
            var6['skuApplicationId'] = var14;
            var6['loadId'] = var13;
            var13 = null;
            if(!(var13 == var12)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var12 = new Array(0);
case 20:
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
    var2 = function useOrbCheckoutModalContext() {
        var3 = _closure1_slot3;
        var2 = _closure1_slot9;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useOrbCheckoutModalContext'] = var2;
    return var1;
})();