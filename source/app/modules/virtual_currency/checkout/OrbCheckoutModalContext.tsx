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
    var4 = var4.ORB_RENTAL_PRICE;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {'skuId': '123', 'loadId': null, 'analyticsLocations': null, 'isRedeeming': false, 'orbRedemptionError': null, 'orbProductContext': null, 'onRedeemVirtualCurrency': null, 'isRental': false};
    var8 = 4;
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
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.skuId;
            var _closure2_slot0 = var14;
            var13 = var1.loadId;
            var _closure2_slot1 = var13;
            var12 = var1.analyticsLocations;
            var10 = var1.onCheckoutSuccess;
            var _closure2_slot2 = var10;
            var7 = var1.isRental;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var _closure2_slot3 = var7;
            var5 = var1.children;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var15 = var6.bind(var4)(var3);
            var11 = var15.useStateFromStores;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
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
            var3 = var11.bind(var15)(var9, var3);
            _closure2_slot4 = var3;
            var9 = 7;
            var9 = var8[var9];
            var11 = var6.bind(var4)(var9);
            var9 = var11.useFetchCollectiblesProduct;
            var9 = var9.bind(var11)(var14);
            var15 = var9.product;
            _closure2_slot5 = var15;
            var11 = _closure1_slot5;
            var9 = new Array(3);
            var9[0] = var15;
            var9[1] = var3;
            var9[2] = var7;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot3;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getProductOrbPrice;
                    var4 = {};
                    var7 = _closure2_slot5;
                    var4['product'] = var7;
                    var7 = _closure2_slot4;
                    var4['isPremiumUser'] = var7;
                    var5 = var5.bind(var6)(var4);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var5 = _closure1_slot7;
case 8:
                    var2 = {};
                    var2['orbPrice'] = var5;
                    var4 = null;
                    if(!(var4 !== var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var4 = var5.amount;
case 9:
                    var2['orbPriceAmount'] = var4;
                    var3 = _closure2_slot5;
                    var2['product'] = var3;
                    return var2;
case 4:
                    return var1;
                }
            };
            var11 = var11.bind(var4)(var3, var9);
            var3 = 9;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useRedeemVirtualCurrency;
            var3 = var3.bind(var6)();
            var15 = var3.redeemVirtualCurrency;
            _closure2_slot6 = var15;
            var9 = var3.isSubmitting;
            var8 = var3.error;
            var6 = _closure1_slot4;
            var3 = new Array(5);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var15;
            var3[3] = var10;
            var3[4] = var7;
            var2 = function(arg1) {
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
            var10 = var6.bind(var4)(var2, var3);
            var3 = _closure1_slot8;
            var1 = _closure1_slot9;
            var2 = var1.Provider;
            var1 = {};
            var6 = {};
            var6['skuId'] = var14;
            var6['loadId'] = var13;
            var13 = null;
            if(!(var13 == var12)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = new Array(0);
case 11:
            var6['analyticsLocations'] = var12;
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
        var2 = _closure1_slot9;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useOrbCheckoutModalContext'] = var2;
    return var1;
})();