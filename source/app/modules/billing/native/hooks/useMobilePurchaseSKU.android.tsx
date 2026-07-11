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
    var4 = var4.CurrencyCodes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GPlayBillingResult;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMobilePurchaseSKU(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.skuId;
            var _closure2_slot0 = var17;
            var16 = var2.platformSkuId;
            var _closure2_slot1 = var16;
            var8 = var2.analyticsLocations;
            var _closure2_slot2 = var8;
            var9 = var2.analyticsLoadId;
            var _closure2_slot3 = var9;
            var7 = var2.analyticsData;
            var _closure2_slot4 = var7;
            var12 = var2.onPurchaseComplete;
            var _closure2_slot5 = var12;
            var11 = var2.onPurchaseError;
            var _closure2_slot6 = var11;
            var10 = var2.freePurchaseCallback;
            var _closure2_slot7 = var10;
            var19 = var2.onPurchasePending;
            var _closure2_slot8 = var19;
            var6 = var2.giftParams;
            var _closure2_slot9 = var6;
            var5 = var2.isFreeForStaffSelfPurchase;
            var18 = undefined;
            if(!(var5 === var18)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var18;
            var _closure2_slot12 = var18;
            var _closure2_slot13 = var18;
            var _closure2_slot14 = var18;
            var _closure2_slot15 = var18;
            var _closure2_slot16 = var18;
            var _closure2_slot17 = var18;
            var4 = _closure1_slot5;
            var3 = var4.getCurrentUser;
            var4 = var3.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 5;
            var3 = var14[var3];
            var13 = var13.bind(var18)(var3);
            var3 = var13.useHandlePremiumPurchase;
            var13 = var3.bind(var13)();
            _closure2_slot11 = var13;
            var15 = _closure1_slot4;
            var14 = var15.useRef;
            var3 = false;
            var3 = var14.bind(var15)(var3);
            _closure2_slot12 = var3;
            var15 = var18 !== var4;
            if(!var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.isStaff;
            var15 = var3.bind(var4)();
case 4:
            _closure2_slot13 = var15;
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 6;
            var3 = var14[var3];
            var4 = var4.bind(var18)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var18)(var3);
            var4 = null;
            var14 = var4 == var6;
            var20 = undefined;
            if(var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var20 = var6.isGift;
case 6:
            var14 = var4 != var20;
            if(!var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var20;
case 8:
            _closure2_slot14 = var14;
            if(!(var4 == var9)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            _closure2_slot3 = var3;
            var9 = var3;
case 10:
            var4 = _closure1_slot4;
            var21 = var4.useCallback;
            var20 = new Array(1);
            var20[0] = var12;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = _closure2_slot15;
                var3 = 'GPLAY_PURCHASE_VERIFIED';
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure2_slot12;
                var3 = false;
                var4['current'] = var3;
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)();
                return var1;
            };
            var21 = var21.bind(var4)(var3, var20);
            _closure2_slot15 = var21;
            var22 = var4.useCallback;
            var20 = new Array(2);
            var20[0] = var11;
            var20[1] = var21;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = _closure2_slot15;
                var3 = 'GPLAY_PURCHASE_VERIFIED';
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure2_slot12;
                var3 = false;
                var4['current'] = var3;
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var22.bind(var4)(var3, var20);
            _closure2_slot16 = var3;
            var22 = var4.useCallback;
            var20 = new Array(3);
            var20[0] = var21;
            var20[1] = var11;
            var20[2] = var19;
            var19 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.billingResult;
                    var2 = _closure1_slot7;
                    var2 = var2.OK;
                    if(!(var3 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.unsubscribe;
                    var4 = _closure2_slot15;
                    var3 = 'GPLAY_PURCHASE_VERIFIED';
                    var3 = var5.bind(var6)(var3, var4);
                    var4 = _closure2_slot12;
                    var3 = false;
                    var4['current'] = var3;
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var2)();
case 12:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var22 = var22.bind(var4)(var19, var20);
            _closure2_slot17 = var22;
            var20 = var4.useEffect;
            var19 = new Array(3);
            var19[0] = var22;
            var19[1] = var21;
            var19[2] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var1 = var5[var2];
                var3 = undefined;
                var9 = var4.bind(var3)(var1);
                var8 = var9.subscribe;
                var7 = _closure2_slot17;
                var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var2];
                var9 = var4.bind(var3)(var6);
                var8 = var9.subscribe;
                var7 = _closure2_slot15;
                var6 = 'GPLAY_PURCHASE_VERIFIED';
                var6 = var8.bind(var9)(var6, var7);
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.subscribe;
                var2 = _closure2_slot16;
                var1 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var2 = var5[var3];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.unsubscribe;
                    var7 = _closure2_slot17;
                    var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var1)(var6);
                    var8 = var9.unsubscribe;
                    var7 = _closure2_slot15;
                    var6 = 'GPLAY_PURCHASE_VERIFIED';
                    var6 = var8.bind(var9)(var6, var7);
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot16;
                    var2 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var3 = var20.bind(var4)(var3, var19);
            var3 = var4.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var4 = undefined;
                        var5 = undefined;
                        var2 = _closure2_slot12;
                        var2 = var2.current;
                        if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 9;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.isNullOrEmpty;
                        var6 = _closure2_slot1;
                        var6 = var7.bind(var8)(var6);
                        if(var6) { _fun0003_ip = 18; continue _fun0003 }
case 19: // try_start_3 // try_start_5
                        var7 = _closure2_slot12;
                        var6 = true;
                        var7['current'] = var6;
                        var7 = _closure2_slot13;
                        if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var7 = _closure2_slot10;
                        if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 22:
                        var7 = _closure2_slot14;
                        if(var7) { _fun0003_ip = 20; continue _fun0003 }
case 23:
                        var8 = _closure2_slot7;
                        var7 = null;
                        if(!(var7 == var8)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 10;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var7 = var7.purchaseSKU;
                        _fun0003_ip = 26; continue _fun0003;
case 24:
                        var7 = _closure2_slot7;
case 26:
                        var5 = var7;
case 27: // try_start_0 // try_start_1
                        var8 = var5;
                        var7 = _closure2_slot0;
                        var5 = {};
                        var9 = 0;
                        var5['expectedAmount'] = var9;
                        var9 = _closure1_slot6;
                        var9 = var9.USD;
                        var5['expectedCurrency'] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 11;
                        var2 = var10[var2];
                        var9 = var9.bind(var4)(var2);
                        var2 = var9.v4;
                        var2 = var2.bind(var9)();
                        var5['loadId'] = var2;
                        var2 = 'collectibles';
                        var2 = var8.bind(var4)(var2, var7, var5);
                        SaveGenerator(address=244);
case 28:
                        return var2;
case 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                        var5 = _closure2_slot5;
                        var5 = var5.bind(var4)();
case 32: // try_end0 // try_end1
                        var7 = _closure2_slot12;
                        var5 = false;
                        var7['current'] = var5;
                        _fun0003_ip = 33; continue _fun0003;
case 30:
                        var5 = _closure2_slot12;
                        var7 = false;
                        var5['current'] = var7;
case 34: // try_end3 // try_end5
                        var5 = _closure2_slot12;
                        var5['current'] = var7;
                        return var2;
case 35: // try_start_2 // try_start_4 // try_start_6 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot6;
                        var5 = var5.bind(var4)();
                        throw var2;
case 11: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var7 = _closure2_slot12;
                        var5 = false;
                        var7['current'] = var5;
                        throw var2;
case 20:
                        var5 = _closure2_slot11;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['productId'] = var7;
                        var7 = _closure2_slot0;
                        var2['skuId'] = var7;
                        var2['isOneTimePurchase'] = var6;
                        var6 = _closure2_slot3;
                        var2['analyticsLoadId'] = var6;
                        var6 = _closure2_slot2;
                        var2['analyticsLocations'] = var6;
                        var6 = _closure2_slot4;
                        var2['analyticsData'] = var6;
                        var6 = _closure2_slot14;
                        var2['isGift'] = var6;
                        var7 = _closure2_slot9;
                        var6 = null;
                        var7 = var6 == var7;
                        var6 = undefined;
                        if(var7) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                        var7 = _closure2_slot9;
                        var6 = var7.options;
case 36:
                        var2['giftInfoOptions'] = var6;
                        var6 = _closure2_slot6;
                        var2['onPurchaseError'] = var6;
                        var2 = var5.bind(var4)(var2);
                        SaveGenerator(address=439);
case 38:
                        return var2;
case 39:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 40; continue _fun0003 }
case 33: // try_end4 // try_end6
                        var6 = _closure2_slot12;
                        var5 = false;
                        var6['current'] = var5;
                        return var4;
case 40:
                        var5 = _closure2_slot12;
                        var4 = false;
                        var5['current'] = var4;
                        return var2;
case 41: // try_start_7 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=1);
                        throw var2;
case 42: // try_end7 // catch_target5 // catch_target6 // catch_target7
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot12;
                        var3 = false;
                        var4['current'] = var3;
                        throw var2;
case 18:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var13 = 'Missing google play sku ID';
                        var14 = var3;
                        var2 = new var14[var4](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 16:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var13 = 'Purchase already in progress';
                        var14 = var3;
                        var2 = new var14[var4](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 14:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var18)(var1);
            var1 = new Array(13);
            var1[0] = var17;
            var1[1] = var16;
            var1[2] = var15;
            var1[3] = var14;
            var1[4] = var13;
            var1[5] = var12;
            var1[6] = var11;
            var1[7] = var10;
            var1[8] = var9;
            var1[9] = var8;
            var1[10] = var7;
            var1[11] = var6;
            var1[12] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();