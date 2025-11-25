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
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {'skuId': '123', 'loadId': null, 'analyticsLocations': null, 'analyticsSourceLocation': null, 'isRedeeming': false, 'orbRedemptionError': null, 'orbProductContext': null};
    var8 = 3;
    var8 = var7[var8];
    var9 = var6.bind(var1)(var8);
    var8 = var9.v4;
    var8 = var8.bind(var9)();
    var4['loadId'] = var8;
    var8 = new Array(0);
    var4['analyticsLocations'] = var8;
    var4['analyticsSourceLocation'] = var1;
    var8 = false;
    var9 = function onRedeemVirtualCurrency() {
        var1 = undefined;
        return var1;
    };
    var4['onRedeemVirtualCurrency'] = var9;
    var4['isRental'] = var8;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = function useOrbCheckoutModalContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.skuId;
            var _closure2_slot0 = var10;
            var9 = var2.loadId;
            var _closure2_slot1 = var9;
            var8 = var2.analyticsLocations;
            var13 = var2.onCheckoutSuccess;
            var _closure2_slot2 = var13;
            var2 = var2.isRental;
            var12 = undefined;
            if(!(var2 === var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var _closure2_slot3 = var2;
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var12;
            var _closure2_slot6 = var12;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 4;
            var3 = var11[var3];
            var14 = var4.bind(var12)(var3);
            var7 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
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
            var3 = var7.bind(var14)(var6, var3);
            _closure2_slot4 = var3;
            var6 = 6;
            var6 = var11[var6];
            var7 = var4.bind(var12)(var6);
            var6 = var7.useFetchCollectiblesProduct;
            var6 = var6.bind(var7)(var10);
            var7 = var6.product;
            _closure2_slot5 = var7;
            var14 = _closure1_slot5;
            var6 = new Array(3);
            var6[0] = var7;
            var6[1] = var3;
            var6[2] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getProductOrbPrice;
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2['product'] = var6;
                    var6 = _closure2_slot4;
                    var2['isPremiumUser'] = var6;
                    var6 = _closure2_slot3;
                    var2['isRental'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var2 = {};
                    var2['orbPrice'] = var5;
                    var4 = null;
                    if(!(var4 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var5.amount;
case 6:
                    var2['orbPriceAmount'] = var4;
                    var3 = _closure2_slot5;
                    var2['product'] = var3;
                    return var2;
case 4:
                    return var1;
                }
            };
            var6 = var14.bind(var12)(var3, var6);
            var3 = 8;
            var3 = var11[var3];
            var4 = var4.bind(var12)(var3);
            var3 = var4.useRedeemVirtualCurrency;
            var3 = var3.bind(var4)();
            var14 = var3.redeemVirtualCurrency;
            _closure2_slot6 = var14;
            var4 = var3.isSubmitting;
            var3 = var3.error;
            var11 = _closure1_slot4;
            var5 = new Array(5);
            var5[0] = var10;
            var5[1] = var9;
            var5[2] = var14;
            var5[3] = var13;
            var5[4] = var2;
            var1 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var6 = _closure2_slot6;
                var10 = _closure2_slot0;
                var9 = _closure2_slot1;
                var7 = _closure2_slot3;
                var1 = undefined;
                var8 = function(arg1) {
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
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var5 = var11.bind(var12)(var1, var5);
            var1 = {};
            var1['skuId'] = var10;
            var1['loadId'] = var9;
            var9 = null;
            if(!(var9 == var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = new Array(0);
case 8:
            var1['analyticsLocations'] = var8;
            var1['product'] = var7;
            var1['orbProductContext'] = var6;
            var1['onRedeemVirtualCurrency'] = var5;
            var1['isRedeeming'] = var4;
            var1['orbRedemptionError'] = var3;
            var1['isRental'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var5 = 9;
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
            var15 = var1.skuId;
            var14 = var1.loadId;
            var12 = var1.analyticsSourceLocation;
            var13 = var1.analyticsLocations;
            var6 = var1.onCheckoutSuccess;
            var7 = var1.isRental;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = false;
case 10:
            var5 = var1.children;
            var3 = _closure1_slot9;
            var2 = {};
            var2['skuId'] = var15;
            var2['loadId'] = var14;
            var2['analyticsLocations'] = var13;
            var2['analyticsSourceLocation'] = var12;
            var2['onCheckoutSuccess'] = var6;
            var2['isRental'] = var7;
            var2 = var3.bind(var4)(var2);
            var11 = var2.orbProductContext;
            var10 = var2.onRedeemVirtualCurrency;
            var9 = var2.isRedeeming;
            var8 = var2.orbRedemptionError;
            var3 = _closure1_slot7;
            var1 = _closure1_slot8;
            var2 = var1.Provider;
            var1 = {};
            var6 = {};
            var6['skuId'] = var15;
            var6['loadId'] = var14;
            var14 = null;
            if(!(var14 == var13)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var13 = new Array(0);
case 12:
            var6['analyticsLocations'] = var13;
            var6['analyticsSourceLocation'] = var12;
            var6['orbProductContext'] = var11;
            var6['onRedeemVirtualCurrency'] = var10;
            var6['isRedeeming'] = var9;
            var6['orbRedemptionError'] = var8;
            var6['isRental'] = var7;
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