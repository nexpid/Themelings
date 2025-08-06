// app/modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CurrencyCodes;
    var _closure1_slot6 = var7;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GPlayBillingResult;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot9 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.product;
            var _closure2_slot0 = var8;
            var6 = var2.analyticsLocations;
            var _closure2_slot1 = var6;
            var7 = var2.analyticsLoadId;
            var _closure2_slot2 = var7;
            var11 = var2.onPurchaseComplete;
            var _closure2_slot3 = var11;
            var10 = var2.onPurchaseError;
            var _closure2_slot4 = var10;
            var9 = var2.freePurchaseCallback;
            var _closure2_slot5 = var9;
            var18 = var2.onPurchasePending;
            var _closure2_slot6 = var18;
            var5 = var2.giftParams;
            var _closure2_slot7 = var5;
            var17 = undefined;
            var _closure2_slot10 = var17;
            var _closure2_slot11 = var17;
            var _closure2_slot12 = var17;
            var _closure2_slot13 = var17;
            var _closure2_slot14 = var17;
            var _closure2_slot15 = var17;
            var _closure2_slot16 = var17;
            var4 = _closure1_slot5;
            var3 = var4.getCurrentUser;
            var19 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var4 = var4.bind(var17)(var3);
            var3 = var4.useHandlePremiumPurchase;
            var12 = var3.bind(var4)();
            var _closure2_slot8 = var12;
            var13 = _closure1_slot4;
            var4 = var13.useRef;
            var3 = false;
            var3 = var4.bind(var13)(var3);
            var _closure2_slot9 = var3;
            var14 = var17 !== var19;
            if(!var14) { _fun0001_ip = 204; continue _fun0001 }
 194:
            var3 = var19.isStaff;
            var14 = var3.bind(var19)();
 204:
            _closure2_slot10 = var14;
            var4 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 7;
            var3 = var13[var3];
            var4 = var4.bind(var17)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var17)(var3);
            var4 = null;
            var13 = var4 == var5;
            var15 = undefined;
            if(var13) { _fun0001_ip = 257; continue _fun0001 }
 251:
            var15 = var5.isGift;
 257:
            var13 = var4 != var15;
            if(!var13) { _fun0001_ip = 267; continue _fun0001 }
 264:
            var13 = var15;
 267:
            _closure2_slot11 = var13;
            if(!(var4 == var7)) { _fun0001_ip = 282; continue _fun0001 }
 275:
            _closure2_slot2 = var3;
            var7 = var3;
 282:
            var15 = var8.skuId;
            _closure2_slot12 = var15;
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 9;
            var3 = var16[var3];
            var16 = var4.bind(var17)(var3);
            var4 = var16.isPremium;
            var3 = _closure1_slot9;
            var3 = var3.TIER_2;
            var16 = var4.bind(var16)(var19, var3);
            var4 = var8.googleSkuIds;
            var3 = _closure1_slot7;
            if(var16) { _fun0001_ip = 359; continue _fun0001 }
 347:
            var16 = var3.MOBILE;
            var16 = var4[var16];
            _fun0001_ip = 369; continue _fun0001;
 359:
            var3 = var3.MOBILE_PREMIUM_TIER_2;
            var16 = var4[var3];
 369:
            _closure2_slot13 = var16;
            var4 = _closure1_slot4;
            var20 = var4.useCallback;
            var19 = new Array(1);
            var19[0] = var11;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = _closure2_slot14;
                var3 = 'GPLAY_PURCHASE_VERIFIED';
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure2_slot9;
                var3 = false;
                var4['current'] = var3;
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var20 = var20.bind(var4)(var3, var19);
            _closure2_slot14 = var20;
            var21 = var4.useCallback;
            var19 = new Array(2);
            var19[0] = var10;
            var19[1] = var20;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = _closure2_slot14;
                var3 = 'GPLAY_PURCHASE_VERIFIED';
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure2_slot9;
                var3 = false;
                var4['current'] = var3;
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var21.bind(var4)(var3, var19);
            _closure2_slot15 = var3;
            var21 = var4.useCallback;
            var19 = new Array(3);
            var19[0] = var20;
            var19[1] = var10;
            var19[2] = var18;
            var18 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.billingResult;
                    var2 = _closure1_slot8;
                    var2 = var2.OK;
                    if(!(var3 !== var2)) { _fun0002_ip = 93; continue _fun0002 }
 26:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.unsubscribe;
                    var4 = _closure2_slot14;
                    var3 = 'GPLAY_PURCHASE_VERIFIED';
                    var3 = var5.bind(var6)(var3, var4);
                    var4 = _closure2_slot9;
                    var3 = false;
                    var4['current'] = var3;
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var2)();
 93:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var21 = var21.bind(var4)(var18, var19);
            _closure2_slot16 = var21;
            var19 = var4.useEffect;
            var18 = new Array(3);
            var18[0] = var21;
            var18[1] = var20;
            var18[2] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var1 = var5[var2];
                var3 = undefined;
                var9 = var4.bind(var3)(var1);
                var8 = var9.subscribe;
                var7 = _closure2_slot16;
                var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var2];
                var9 = var4.bind(var3)(var6);
                var8 = var9.subscribe;
                var7 = _closure2_slot14;
                var6 = 'GPLAY_PURCHASE_VERIFIED';
                var6 = var8.bind(var9)(var6, var7);
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.subscribe;
                var2 = _closure2_slot15;
                var1 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var2 = var5[var3];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.unsubscribe;
                    var7 = _closure2_slot16;
                    var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var1)(var6);
                    var8 = var9.unsubscribe;
                    var7 = _closure2_slot14;
                    var6 = 'GPLAY_PURCHASE_VERIFIED';
                    var6 = var8.bind(var9)(var6, var7);
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot15;
                    var2 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var3 = var19.bind(var4)(var3, var18);
            var3 = var4.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 481; continue _fun0003 }
 10:
                        var4 = undefined;
                        var2 = undefined;
                        var5 = _closure2_slot9;
                        var5 = var5.current;
                        if(var5) { _fun0003_ip = 445; continue _fun0003 }
 32: // try_start_3 // try_start_5
                        var5 = _closure2_slot9;
                        var6 = true;
                        var5['current'] = var6;
                        var5 = _closure2_slot10;
                        if(!var5) { _fun0003_ip = 286; continue _fun0003 }
 54:
                        var5 = _closure2_slot11;
                        if(var5) { _fun0003_ip = 286; continue _fun0003 }
 64:
                        var7 = _closure2_slot5;
                        var5 = null;
                        if(!(var5 == var7)) { _fun0003_ip = 105; continue _fun0003 }
 74:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 11;
                        var5 = var8[var5];
                        var5 = var7.bind(var4)(var5);
                        var5 = var5.purchaseSKU;
                        _fun0003_ip = 109; continue _fun0003;
 105:
                        var5 = _closure2_slot5;
 109:
                        var2 = var5;
 112: // try_start_0 // try_start_1
                        var8 = var2;
                        var2 = _closure2_slot0;
                        var7 = var2.skuId;
                        var5 = {};
                        var2 = 0;
                        var5['expectedAmount'] = var2;
                        var9 = _closure1_slot6;
                        var9 = var9.USD;
                        var5['expectedCurrency'] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 12;
                        var2 = var10[var2];
                        var9 = var9.bind(var4)(var2);
                        var2 = var9.v4;
                        var2 = var2.bind(var9)();
                        var5['loadId'] = var2;
                        var2 = 'collectibles';
                        var2 = var8.bind(var4)(var2, var7, var5);
                        SaveGenerator(address=202);
 200:
                        return var2;
 202:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 233; continue _fun0003 }
 208:
                        var5 = _closure2_slot3;
                        var5 = var5.bind(var4)();
 216: // try_end0 // try_end1
                        var7 = _closure2_slot9;
                        var5 = false;
                        var7['current'] = var5;
                        _fun0003_ip = 395; continue _fun0003;
 233:
                        var5 = _closure2_slot9;
                        var7 = false;
                        var5['current'] = var7;
 245: // try_end3 // try_end5
                        var5 = _closure2_slot9;
                        var5['current'] = var7;
                        return var2;
 258: // try_start_2 // try_start_4 // try_start_6 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot4;
                        var5 = var5.bind(var4)();
                        throw var2;
 270: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var7 = _closure2_slot9;
                        var5 = false;
                        var7['current'] = var5;
                        throw var2;
 286:
                        var5 = _closure2_slot8;
                        var2 = {};
                        var7 = _closure2_slot13;
                        var2['productId'] = var7;
                        var7 = _closure2_slot12;
                        var2['skuId'] = var7;
                        var2['isOneTimePurchase'] = var6;
                        var6 = _closure2_slot2;
                        var2['analyticsLoadId'] = var6;
                        var6 = _closure2_slot1;
                        var2['analyticsLocations'] = var6;
                        var6 = _closure2_slot11;
                        var2['isGift'] = var6;
                        var7 = _closure2_slot7;
                        var6 = null;
                        var7 = var6 == var7;
                        var6 = undefined;
                        if(var7) { _fun0003_ip = 366; continue _fun0003 }
 357:
                        var7 = _closure2_slot7;
                        var6 = var7.options;
 366:
                        var2['giftInfoOptions'] = var6;
                        var6 = _closure2_slot4;
                        var2['onPurchaseError'] = var6;
                        var2 = var5.bind(var4)(var2);
                        SaveGenerator(address=389);
 387:
                        return var2;
 389:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 410; continue _fun0003 }
 395: // try_end4 // try_end6
                        var6 = _closure2_slot9;
                        var5 = false;
                        var6['current'] = var5;
                        return var4;
 410:
                        var5 = _closure2_slot9;
                        var4 = false;
                        var5['current'] = var4;
                        return var2;
 425: // try_start_7 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=1);
                        throw var2;
 429: // try_end7 // catch_target5 // catch_target6 // catch_target7
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot9;
                        var3 = false;
                        var4['current'] = var3;
                        throw var2;
 445:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var13 = 'Purchase already in progress';
                        var14 = var3;
                        var2 = new var14[var4](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
 481:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var17)(var1);
            var1 = new Array(12);
            var1[0] = var16;
            var1[1] = var15;
            var1[2] = var14;
            var1[3] = var13;
            var1[4] = var12;
            var1[5] = var11;
            var1[6] = var10;
            var1[7] = var9;
            var8 = var8.skuId;
            var1[8] = var8;
            var1[9] = var7;
            var1[10] = var6;
            var1[11] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();