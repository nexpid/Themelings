// app/modules/collectibles/native/CollectiblesShopCardCtaButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var11 = 5;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var13.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var17 = 'CollectiblesShopCardPurchaseButton';
    var18 = var8;
    var4 = new var18[var9](var17, var16);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 8;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var14 = 32;
    var10['height'] = var14;
    var4['button'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10['backgroundColor'] = var12;
    var4['buttonSecondaryAlt'] = var10;
    var10 = {};
    var10['marginRight'] = var11;
    var4['buttonIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = function ClaimCollectibleButton(arg1) {
        var1 = arg1;
        var6 = var1.product;
        var _closure2_slot0 = var6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 9;
        var2 = var10[var2];
        var4 = undefined;
        var8 = var9.bind(var4)(var2);
        var7 = var8.useStateFromStoresArray;
        var2 = _closure1_slot7;
        var5 = new Array(2);
        var5[0] = var2;
        var2 = _closure1_slot6;
        var5[1] = var2;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot7;
                var5 = var2.isClaiming;
                var1 = _closure2_slot0;
                var4 = var1.skuId;
                var1 = new Array(2);
                var4 = var5 === var4;
                var1[0] = var4;
                var4 = var2.isClaiming;
                var2 = null;
                var2 = var2 != var4;
                if(var2) { _fun0001_ip = 102; continue _fun0001 }
 53:
                var5 = _closure1_slot6;
                var4 = var5.isPurchasingProduct;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ProductIds;
                var3 = var3.GENERIC_CONSUMABLE;
                var2 = var4.bind(var5)(var3);
 102:
                var1[1] = var2;
                return var1;
            }
        };
        var5 = var7.bind(var8)(var5, var2, var3);
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var12 = var3[var2];
        var _closure2_slot1 = var12;
        var2 = 1;
        var11 = var3[var2];
        var2 = _closure1_slot10;
        var7 = var2.bind(var4)();
        var _closure2_slot2 = var7;
        var2 = 11;
        var2 = var10[var2];
        var5 = var9.bind(var4)(var2);
        var3 = var5.useHandleClaim;
        var2 = {};
        var2['product'] = var6;
        var2 = var3.bind(var5)(var2);
        var5 = var2.handleClaim;
        var8 = _closure1_slot5;
        var6 = var8.useCallback;
        var3 = new Array(2);
        var3[0] = var12;
        var3[1] = var7;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(var2) { _fun0002_ip = 81; continue _fun0002 }
 12:
                var5 = _closure1_slot8;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.NitroWheelIcon;
                var2 = {'size': 'sm', 'color': 'redesign-button-tertiary-text'};
                var6 = _closure2_slot2;
                var6 = var6.buttonIcon;
                var2['style'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 81:
                return var1;
            }
        };
        var6 = var6.bind(var8)(var2, var3);
        var3 = _closure1_slot8;
        var2 = _closure1_slot1;
        var8 = 13;
        var1 = var10[var8];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var13 = function text() {
            var4 = _closure1_slot8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 14;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-sm/semibold', 'color': 'redesign-button-tertiary-text', 'allowFontScaling': false};
            var5 = 15;
            var6 = var9[var5];
            var6 = var8.bind(var3)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.sB3lwM;
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1['text'] = var13;
        var1['loading'] = var12;
        var1['disabled'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.ButtonSizes;
        var8 = var8.SMALL;
        var1['size'] = var8;
        var1['renderIcon'] = var6;
        var8 = var7.button;
        var6 = new Array(2);
        var6[0] = var8;
        var7 = var7.buttonSecondaryAlt;
        var6[1] = var7;
        var1['style'] = var6;
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = function PurchaseCollectibleButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var16 = var1.product;
            var _closure2_slot0 = var16;
            var11 = var1.onMainScreen;
            var1 = var1.isFetchingGoogleSkus;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 16;
            var3 = var12[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var3 = var6.useCurrentUser;
            var17 = var3.bind(var6)();
            var3 = 9;
            var3 = var12[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(2);
            var6[0] = var3;
            var3 = _closure1_slot6;
            var6[1] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure1_slot7;
                    var3 = var1.isClaiming;
                    var1 = null;
                    var1 = var1 != var3;
                    if(var1) { _fun0004_ip = 71; continue _fun0004 }
 22:
                    var4 = _closure1_slot6;
                    var3 = var4.isPurchasingProduct;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.ProductIds;
                    var2 = var2.GENERIC_CONSUMABLE;
                    var1 = var3.bind(var4)(var2);
 71:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var6, var3);
            var3 = 17;
            var3 = var12[var3];
            var6 = var4.bind(var5)(var3);
            var3 = var6.useNativeIAPPaymentContext;
            var3 = var3.bind(var6)();
            var18 = var3.isReadyToPurchase;
            var _closure2_slot1 = var18;
            var7 = var3.storeFront;
            var13 = _closure1_slot1;
            var3 = 18;
            var3 = var12[var3];
            var6 = var13.bind(var5)(var3);
            var3 = var16.skuId;
            var19 = var6.bind(var5)(var3, var7);
            var _closure2_slot2 = var19;
            var15 = _closure1_slot5;
            var6 = var15.useState;
            var3 = false;
            var7 = var6.bind(var15)(var3);
            var6 = _closure1_slot4;
            var3 = 2;
            var6 = var6.bind(var5)(var7, var3);
            var3 = 0;
            var7 = var6[var3];
            var _closure2_slot3 = var7;
            var3 = 1;
            var3 = var6[var3];
            var _closure2_slot4 = var3;
            var3 = _closure1_slot10;
            var6 = var3.bind(var5)();
            var _closure2_slot5 = var6;
            var10 = var15.useCallback;
            var9 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 273; continue _fun0005 }
 10:
                        var3 = _closure2_slot1;
                        if(!var3) { _fun0005_ip = 268; continue _fun0005 }
 23:
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0005_ip = 268; continue _fun0005 }
 36: // try_start_0
                        var4 = _closure2_slot4;
                        var6 = undefined;
                        var3 = true;
                        var3 = var4.bind(var6)(var3);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 19;
                        var3 = var7[var3];
                        var7 = var5.bind(var6)(var3);
                        var5 = var7.mobilePurchaseSKU;
                        var3 = _closure2_slot2;
                        var3 = var5.bind(var7)(var3);
                        SaveGenerator(address=91);
 89:
                        return var3;
 91:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0005_ip = 209; continue _fun0005 }
 97:
                        if(!var3) { _fun0005_ip = 207; continue _fun0005 }
 100:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 20;
                        var4 = var7[var4];
                        var9 = var5.bind(var6)(var4);
                        var8 = var9.show;
                        var4 = {};
                        var10 = 'Purchase Success!';
                        var4['title'] = var10;
                        var10 = _closure2_slot0;
                        var13 = var10.name;
                        var10 = global;
                        var10 = var10.HermesInternal;
                        var12 = var10.concat;
                        var11 = 'You purchased and receieved ';
                        var10 = '!';
                        var10 = var12.bind(var11)(var13, var10);
                        var4['body'] = var10;
                        var4 = var8.bind(var9)(var4);
                        var4 = 21;
                        var4 = var7[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.hideActionSheet;
                        var4 = var4.bind(var5)();
 207: // try_end0
                        _fun0005_ip = 255; continue _fun0005;
 209:
                        return var3;
 212: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = _closure1_slot9;
                        var4 = var5.warn;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = 'Error creating subscription: ';
                        var3 = var6.bind(var3)(var7);
                        var3 = var4.bind(var5)(var3);
 255:
                        var4 = _closure2_slot4;
                        var3 = undefined;
                        var2 = false;
                        var2 = var4.bind(var3)(var2);
 268:
                        var2 = undefined;
                        return var2;
 273:
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var9.bind(var5)(var3);
            var3 = new Array(3);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var16;
            var9 = var10.bind(var15)(var9, var3);
            var18 = var15.useCallback;
            var10 = new Array(1);
            var10[0] = var16;
            var3 = function() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 21;
                var3 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot0;
                var2 = 22;
                var2 = var7[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openProductDetailActionSheet;
                var2 = {};
                var5 = _closure2_slot0;
                var2['product'] = var5;
                var5 = 23;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var6 = var5.COLLECTIBLES_SHOP;
                var5 = new Array(1);
                var5[0] = var6;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10 = var18.bind(var15)(var3, var10);
            var3 = 24;
            var3 = var12[var3];
            var13 = var13.bind(var5)(var3);
            var3 = var13.canUseCollectibles;
            var13 = var3.bind(var13)(var17);
            var3 = 25;
            var3 = var12[var3];
            var12 = var4.bind(var5)(var3);
            var4 = var12.getFormattedPriceForCollectiblesProduct;
            var3 = true;
            var3 = var4.bind(var12)(var16, var13, var3);
            var _closure2_slot6 = var3;
            var13 = var15.useCallback;
            var12 = new Array(2);
            var12[0] = var7;
            var12[1] = var6;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(var2) { _fun0006_ip = 81; continue _fun0006 }
 12:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.NitroWheelIcon;
                    var2 = {'size': 'sm', 'color': 'redesign-button-tertiary-text'};
                    var6 = _closure2_slot5;
                    var6 = var6.buttonIcon;
                    var2['style'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 81:
                    return var1;
                }
            };
            var12 = var13.bind(var15)(var4, var12);
            if(!var1) { _fun0003_ip = 409; continue _fun0003 }
 400:
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 535; continue _fun0003 }
 409:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 13;
            var1 = var15[var13];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var14 = function text() {
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/semibold', 'color': 'redesign-button-tertiary-text', 'allowFontScaling': false};
                var5 = _closure2_slot6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['text'] = var14;
            var14 = _closure1_slot0;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.ButtonSizes;
            var13 = var13.SMALL;
            var1['size'] = var13;
            var1['renderIcon'] = var12;
            var13 = var6.button;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var6.buttonSecondaryAlt;
            var12[1] = var13;
            var1['style'] = var12;
            if(!var11) { _fun0003_ip = 514; continue _fun0003 }
 511:
            var9 = var10;
 514:
            var1['onPress'] = var9;
            var1['disabled'] = var8;
            var1['loading'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 583; continue _fun0003;
 535:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 26;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.CollectiblesShopPricePlaceholder;
            var2 = {};
            var6 = var6.button;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 583:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var8 = var1.product;
            var9 = var1.onMainScreen;
            var7 = var1.isFetchingGoogleSkus;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 16;
            var1 = var12[var1];
            var5 = undefined;
            var3 = var11.bind(var5)(var1);
            var1 = var3.useCurrentUser;
            var6 = var1.bind(var3)();
            var1 = 27;
            var1 = var12[var1];
            var3 = var11.bind(var5)(var1);
            var1 = var3.useProductPurchaseState;
            var3 = var1.bind(var3)(var8);
            var1 = var3.isPurchased;
            var10 = var3.isPartiallyOwnedBundle;
            var4 = _closure1_slot1;
            var3 = 24;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.canUseCollectibles;
            var3 = var3.bind(var4)(var6);
            var6 = 28;
            var4 = var12[var6];
            var13 = var11.bind(var5)(var4);
            var4 = var13.isPremiumCollectiblesProduct;
            var4 = var4.bind(var13)(var8);
            var6 = var12[var6];
            var11 = var11.bind(var5)(var6);
            var6 = var11.isFreeCollectiblesProduct;
            var6 = var6.bind(var11)(var8);
            if(var10) { _fun0007_ip = 399; continue _fun0007 }
 167:
            if(var1) { _fun0007_ip = 297; continue _fun0007 }
 173:
            if(!var4) { _fun0007_ip = 229; continue _fun0007 }
 176:
            if(var3) { _fun0007_ip = 229; continue _fun0007 }
 179:
            if(var6) { _fun0007_ip = 229; continue _fun0007 }
 182:
            var11 = _closure1_slot8;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 29;
            var1 = var12[var1];
            var1 = var10.bind(var5)(var1);
            var10 = var1.UnlockWithNitroButton;
            var1 = {};
            var12 = true;
            var1['shouldShrink'] = var12;
            var1 = var11.bind(var5)(var10, var1);
            _fun0007_ip = 295; continue _fun0007;
 229:
            if(var6) { _fun0007_ip = 271; continue _fun0007 }
 232:
            if(!var4) { _fun0007_ip = 238; continue _fun0007 }
 235:
            if(var3) { _fun0007_ip = 271; continue _fun0007 }
 238:
            var6 = _closure1_slot8;
            var4 = _closure1_slot12;
            var3 = {};
            var3['product'] = var8;
            var3['onMainScreen'] = var9;
            var3['isFetchingGoogleSkus'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            _fun0007_ip = 292; continue _fun0007;
 271:
            var7 = _closure1_slot8;
            var6 = _closure1_slot11;
            var4 = {};
            var4['product'] = var8;
            var3 = var7.bind(var5)(var6, var4);
 292:
            var1 = var3;
 295:
            _fun0007_ip = 397; continue _fun0007;
 297:
            var6 = _closure1_slot8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var10.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-sm/semibold', 'color': 'interactive-active', 'allowFontScaling': false};
            var7 = 15;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.6cfuDg;
            var7 = var8.bind(var9)(var7);
            var3['children'] = var7;
            var1 = var6.bind(var5)(var4, var3);
 397:
            _fun0007_ip = 499; continue _fun0007;
 399:
            var4 = _closure1_slot8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/semibold', 'color': 'interactive-active', 'allowFontScaling': false};
            var6 = 15;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.BEjTio;
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 499:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardCtaButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();