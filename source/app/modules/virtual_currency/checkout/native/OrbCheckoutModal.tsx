// app/modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function OrbCheckoutModalContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.orbBalance;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useOrbCheckoutModalContext;
            var1 = var1.bind(var3)();
            var3 = var1.skuId;
            var14 = var1.orbProductContext;
            var11 = var1.orbRedemptionError;
            var3 = _closure1_slot7;
            var1 = 3;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var12 = null;
            var7 = var12 != var11;
            if(!var7) { _fun0001_ip = 142; continue _fun0001 }
 95:
            var10 = _closure1_slot6;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 4;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.OrbCheckoutErrorCard;
            var5 = {};
            var11 = var11.message;
            var5['error'] = var11;
            var7 = var10.bind(var4)(var8, var5);
 142:
            var5 = new Array(4);
            var5[0] = var7;
            var10 = _closure1_slot6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 5;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.OrbCheckoutProductPreview;
            var7 = {};
            var13 = var12 == var14;
            var11 = undefined;
            if(var13) { _fun0001_ip = 197; continue _fun0001 }
 191:
            var11 = var14.product;
 197:
            var7['product'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var5[1] = var7;
            var11 = _closure1_slot6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 4;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.OrbPaymentPurchaseDetails;
            var7 = {};
            var13 = var12 == var14;
            var15 = undefined;
            if(var13) { _fun0001_ip = 259; continue _fun0001 }
 253:
            var15 = var14.product;
 259:
            var16 = var12 != var15;
            var13 = null;
            if(!var16) { _fun0001_ip = 271; continue _fun0001 }
 268:
            var13 = var15;
 271:
            var7['product'] = var13;
            var15 = var12 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 306; continue _fun0001 }
 285:
            var14 = var14.orbPrice;
            var15 = var12 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 306; continue _fun0001 }
 300:
            var13 = var14.amount;
 306:
            var14 = var12 != var13;
            var12 = null;
            if(!var14) { _fun0001_ip = 318; continue _fun0001 }
 315:
            var12 = var13;
 318:
            var7['orbPriceAmount'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.OrbPaymentSourceDetails;
            var6 = {};
            var6['orbBalance'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useRef;
    var _closure1_slot4 = var7;
    var4 = var4.useEffect;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'MAIN';
    var4['MAIN'] = var7;
    var _closure1_slot8 = var4;
    var4 = function OrbCheckoutModalFooter(arg1) {
        var1 = arg1;
        var10 = var1.onPress;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 2;
        var1 = var11[var1];
        var4 = undefined;
        var2 = var7.bind(var4)(var1);
        var1 = var2.useOrbCheckoutModalContext;
        var1 = var1.bind(var2)();
        var2 = var1.skuId;
        var9 = var1.isRedeeming;
        var3 = _closure1_slot7;
        var1 = 3;
        var1 = var11[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.Stack;
        var1 = {};
        var13 = _closure1_slot6;
        var6 = 4;
        var5 = var11[var6];
        var5 = var7.bind(var4)(var5);
        var12 = var5.LegalFinePrint;
        var5 = {};
        var12 = var13.bind(var4)(var12, var5);
        var5 = new Array(2);
        var5[0] = var12;
        var8 = _closure1_slot6;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.OrbCheckoutButton;
        var6 = {};
        var6['onPress'] = var10;
        var6['disabled'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = function OrbCheckoutModalScreen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var4 = undefined;
            var2 = var3.bind(var4)(var1);
            var1 = var2.useOrbCheckoutModalContext;
            var1 = var1.bind(var2)();
            var2 = var1.skuId;
            var2 = var1.onRedeemVirtualCurrency;
            var _closure2_slot0 = var2;
            var2 = var1.orbRedemptionError;
            var _closure2_slot1 = var2;
            var1 = 6;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useVirtualCurrencyBalance;
            var3 = var1.bind(var3)();
            var _closure2_slot2 = var3;
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3);
            var _closure2_slot3 = var1;
            var6 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 != var3;
                    if(!var3) { _fun0003_ip = 29; continue _fun0003 }
 16:
                    var4 = _closure2_slot3;
                    var4 = var4.current;
                    var3 = var2 !== var4;
 29:
                    if(!var3) { _fun0003_ip = 42; continue _fun0003 }
 32:
                    var1 = _closure2_slot3;
                    var1['current'] = var2;
 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var4)(var2, var5);
            var1 = var1.current;
            var2 = null;
            var15 = var3;
            if(!(var2 != var1)) { _fun0002_ip = 144; continue _fun0002 }
 141:
            var15 = var1;
 144:
            var3 = _closure1_slot7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ModalScreen;
            var1 = {};
            var8 = _closure1_slot6;
            var5 = 8;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.ModalContent;
            var5 = {};
            var14 = _closure1_slot6;
            var13 = _closure1_slot11;
            var11 = {};
            var11['orbBalance'] = var15;
            var11 = var14.bind(var4)(var13, var11);
            var5['children'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var6 = 9;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ModalFooter;
            var6 = {};
            var11 = _closure1_slot6;
            var10 = _closure1_slot9;
            var9 = {};
            var12 = function onPress() {
                var3 = _closure2_slot3;
                var2 = _closure2_slot2;
                var3['current'] = var2;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var5 = var1.skuId;
        var _closure2_slot0 = var5;
        var1 = var1.onCheckoutSuccess;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 11;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 'SKU ID is required';
        var2 = var3.bind(var4)(var5, var2);
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.pop;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2 = new Array(0);
        var13 = var5.bind(var6)(var3, var2);
        var6 = {};
        var5 = _closure1_slot8;
        var8 = var5.MAIN;
        var3 = {'title': 'Checkout', 'headerShown': true};
        var2 = _closure1_slot0;
        var10 = 12;
        var10 = var7[var10];
        var12 = var2.bind(var4)(var10);
        var11 = var12.getHeaderTextButton;
        var10 = 13;
        var14 = var7[var10];
        var14 = var2.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var10 = var7[var10];
        var10 = var2.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.ETE/oK;
        var10 = var14.bind(var15)(var10);
        var10 = var11.bind(var12)(var10, var13);
        var3['headerLeft'] = var10;
        var9 = function render() {
            var4 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var2 = var1.OrbCheckoutModalContextProvider;
            var1 = {};
            var7 = _closure2_slot0;
            var1['skuId'] = var7;
            var7 = 14;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.v4;
            var7 = var7.bind(var8)();
            var1['loadId'] = var7;
            var6 = _closure2_slot1;
            var1['onCheckoutSuccess'] = var6;
            var6 = new Array(0);
            var1['analyticsLocations'] = var6;
            var1['analyticsSourceLocation'] = var3;
            var7 = _closure1_slot6;
            var6 = _closure1_slot10;
            var5 = {};
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var9;
        var6[var8] = var3;
        var3 = _closure1_slot6;
        var1 = 15;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Modal;
        var1 = {};
        var1['screens'] = var6;
        var5 = var5.MAIN;
        var1['initialRouteName'] = var5;
        var5 = 'center';
        var1['headerTitleAlign'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();