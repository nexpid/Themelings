// app/modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['container'] = var9;
    var9 = {};
    var9['width'] = var10;
    var4['buttonStack'] = var9;
    var9 = {'position': 'absolute', 'width': 0, 'height': 0, 'overflow': 'hidden', 'opacity': 0};
    var4['hiddenFlow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BuyNitroPurchaseButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.planSelection;
            var13 = var3.onPaymentSuccess;
            var12 = var3.onPaymentDismiss;
            var15 = var3.location;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var15 = var5.PREMIUM_MARKETING_FOOTER;
case 2:
            var9 = var3.sourceAnalyticsLocations;
            var18 = var3.applicationId;
            var14 = var3.onHostSheetClose;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot10;
            var11 = var3.bind(var4)();
            var24 = var2.selection;
            _closure2_slot0 = var24;
            var8 = var2.priceStringByProductId;
            _closure2_slot1 = var8;
            var2 = var2.applyOrderPriceOverride;
            _closure2_slot2 = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isMobileWebRedirectCheckoutEnabled;
            var7 = var3.bind(var5)();
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var24.isTrial;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var24.priceString;
            var3 = null;
            if(!(var3 == var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 9;
            var5 = var17[var3];
            var5 = var16.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var17[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.uuzaAK;
            var25 = var5.bind(var6)(var3);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var5 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 9;
            var6 = var17[var3];
            var6 = var5.bind(var4)(var6);
            var16 = var6.intl;
            var6 = var16.formatToPlainString;
            var3 = var17[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.i4T8vz;
            var3 = {};
            var17 = var24.priceString;
            var3['rate'] = var17;
            var25 = var6.bind(var16)(var5, var3);
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 9;
            var3 = var17[var19];
            var3 = var16.bind(var4)(var3);
            var6 = var3.intl;
            var5 = var6.string;
            var3 = 10;
            var3 = var17[var3];
            var16 = var16.bind(var4)(var3);
            var3 = var16.isAndroid;
            var3 = var3.bind(var16)();
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var16.bboTul;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var3 = var16.rKD72m;
case 14:
            var25 = var5.bind(var6)(var3);
case 11:
            _fun0001_ip = 15; continue _fun0001;
case 4:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 9;
            var5 = var17[var3];
            var5 = var16.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var17[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.rylrdY;
            var25 = var5.bind(var6)(var3);
case 15:
            var3 = var24.item;
            var6 = null;
            var5 = var6 == var3;
            var16 = undefined;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var16 = var3.premiumTier;
case 16:
            var3 = _closure1_slot7;
            var3 = var3.TIER_0;
            var5 = 'experimental_premium-primary';
            if(!(var16 === var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = 'experimental_premium-basic';
case 18:
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var30 = 11;
            var3 = var21[var30];
            var17 = var16.bind(var4)(var3);
            var3 = var17.useBuyNitroButtonCrossfade;
            var3 = var3.bind(var17)(var5, var25);
            var23 = var3.outgoing;
            var29 = var3.onOutgoingDone;
            var17 = _closure1_slot1;
            var3 = 12;
            var3 = var21[var3];
            var17 = var17.bind(var4)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var17.bind(var4)(var3);
            var28 = _closure1_slot4;
            var17 = var28.useRef;
            var3 = false;
            var19 = var17.bind(var28)(var3);
            var3 = var28.useState;
            var3 = var3.bind(var28)(var6);
            var31 = _closure1_slot3;
            var27 = 2;
            var3 = var31.bind(var4)(var3, var27);
            var17 = 0;
            var22 = var3[var17];
            _closure2_slot3 = var22;
            var26 = 1;
            var3 = var3[var26];
            _closure2_slot4 = var3;
            var3 = var28.useState;
            var3 = var3.bind(var28)(var6);
            var3 = var31.bind(var4)(var3, var27);
            var17 = var3[var17];
            var3 = var3[var26];
            _closure2_slot5 = var3;
            var3 = var28.useRef;
            var3 = var3.bind(var28)(var22);
            _closure2_slot6 = var3;
            var27 = var28.useEffect;
            var26 = new Array(1);
            var26[0] = var22;
            var3 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var27.bind(var28)(var3, var26);
            var27 = var28.useEffect;
            var26 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot6;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var2 = var1.BuyNitroPurchaseLock;
                        var1 = var2.end;
                        var1 = var1.bind(var2)();
case 20:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var27.bind(var28)(var26, var3);
            var3 = 15;
            var3 = var21[var3];
            var26 = var16.bind(var4)(var3);
            var21 = var26.useStateFromStores;
            var3 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isBusy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var21.bind(var26)(var16, var3);
            var28 = var6 != var22;
            var32 = var5;
            if(var28) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var28 = var3;
case 22:
            var5 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 14;
            var3 = var16[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useIsBuyNitroPurchaseBlocked;
            var3 = var3.bind(var5)();
            var27 = var28;
            if(var27) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var27 = var3;
case 24:
            if(var27) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var3 = !var7;
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = var24.priceString;
            var3 = var6 == var5;
case 28:
            var27 = var3;
case 26:
            var5 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 16;
            var3 = var16[var3];
            var5 = var5.bind(var4)(var3);
            if(!(var6 == var9)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var9 = new Array(0);
case 30:
            var16 = _closure1_slot1;
            var33 = _closure1_slot2;
            var3 = 7;
            var3 = var33[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.PREMIUM_PAYMENT_ACTION_SHEET;
            var3 = var5.bind(var4)(var9, var15, var3);
            var21 = var3.analyticsLocations;
            var5 = _closure1_slot4;
            var15 = var5.useCallback;
            var9 = function() {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = null;
                var4 = var4.bind(var1)(var3);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var3 = var2.BuyNitroPurchaseLock;
                var2 = var3.end;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var16 = var15.bind(var5)(var9, var3);
            _closure2_slot7 = var16;
            var9 = var5.useCallback;
            var15 = var24.item;
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var2;
            var3[2] = var16;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.item;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var5 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var1 = var1.item;
                    var4 = var1.productId;
                    var3 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var3)(var4, var1);
case 32:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var3 = var10[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var6 = 9;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7["2DyOxw"];
                    var7 = var8.bind(var11)(var7);
                    var3['title'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.Xr94E+;
                    var6 = var7.bind(var8)(var6);
                    var3['body'] = var6;
                    var6 = false;
                    var3['hideActionSheet'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var15 = var9.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var9 = var24.item;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = var2.item;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 2; continue _fun0004 }
case 34:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var5 = var3.BuyNitroPurchaseLock;
                    var3 = var5.begin;
                    var2 = var3.bind(var5)();
case 2:
                    if(!var2) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var2 = _closure2_slot5;
                    var6 = _closure2_slot1;
                    var5 = var6.get;
                    var3 = _closure2_slot0;
                    var3 = var3.item;
                    var3 = var3.productId;
                    var3 = var5.bind(var6)(var3);
                    var5 = var4 != var3;
                    var4 = null;
                    if(!var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var4 = var3;
case 37:
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var1 = var1.item;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var5 = {};
            var8 = var11.buttonStack;
            var5['style'] = var8;
            var26 = _closure1_slot8;
            var9 = _closure1_slot0;
            var8 = 18;
            var8 = var33[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Button;
            var8 = {};
            var8['text'] = var25;
            var8['variant'] = var32;
            var32 = 'lg';
            var8['size'] = var32;
            var32 = true;
            var8['grow'] = var32;
            var8['onPress'] = var31;
            var8['loading'] = var28;
            var8['disabled'] = var27;
            var9 = var26.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var6 != var23;
            if(!var9) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var28 = _closure1_slot8;
            var27 = _closure1_slot1;
            var26 = _closure1_slot2;
            var26 = var26[var30];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var30 = var23.snapshot;
            var26['snapshot'] = var30;
            var26['onDone'] = var29;
            var23 = var23.key;
            var9 = var28.bind(var4)(var27, var26, var23);
case 39:
            var8[1] = var9;
            var5['children'] = var8;
            var8 = var3.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var23 = _closure1_slot8;
            var9 = _closure1_slot1;
            var26 = _closure1_slot2;
            var8 = 19;
            var8 = var26[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var26 = var24.item;
            var8['item'] = var26;
            var8['ctaText'] = var25;
            var25 = var24.isTrial;
            var8['isTrial'] = var25;
            var24 = var24.isDiscounted;
            var8['isDiscounted'] = var24;
            var7 = var23.bind(var4)(var9, var8);
case 41:
            var5[1] = var7;
            var6 = var6 != var22;
            if(!var6) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var9 = _closure1_slot8;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.hiddenFlow;
            var7['style'] = var11;
            var11 = 'none';
            var7['pointerEvents'] = var11;
            var11 = _closure1_slot1;
            var23 = _closure1_slot2;
            var10 = 20;
            var10 = var23[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['item'] = var22;
            var10['analyticsLocations'] = var21;
            var10['analyticsLoadId'] = var20;
            var10['hasEmittedPaymentFlowStartedRef'] = var19;
            var10['applicationId'] = var18;
            var10['expectedPriceString'] = var17;
            var10['onExit'] = var16;
            var10['onOrderPriceMismatch'] = var15;
            var10['onHostSheetClose'] = var14;
            var10['onPaymentSuccess'] = var13;
            var10['onPaymentDismiss'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 43:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();