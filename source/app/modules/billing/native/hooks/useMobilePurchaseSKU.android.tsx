// app/modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStoreOrNull;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CurrencyCodes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GPlayBillingResult;
    var _closure1_slot8 = var7;
    var4 = 6;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'useMobilePurchaseSKU.android';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var8 = var7.USER_CANCELED;
    var4 = new Array(4);
    var4[0] = var8;
    var8 = var7.SERVICE_TIMEOUT;
    var4[1] = var8;
    var8 = var7.ERROR;
    var4[2] = var8;
    var7 = var7.ITEM_UNAVAILABLE;
    var4[3] = var7;
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMobilePurchaseSKU(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var19 = var2.skuId;
            var _closure2_slot0 = var19;
            var18 = var2.platformSkuId;
            var _closure2_slot1 = var18;
            var10 = var2.analyticsLocations;
            var _closure2_slot2 = var10;
            var11 = var2.analyticsLoadId;
            var _closure2_slot3 = var11;
            var9 = var2.analyticsData;
            var _closure2_slot4 = var9;
            var14 = var2.onPurchaseComplete;
            var _closure2_slot5 = var14;
            var13 = var2.onPurchaseError;
            var _closure2_slot6 = var13;
            var12 = var2.freePurchaseCallback;
            var _closure2_slot7 = var12;
            var27 = var2.onPurchasePending;
            var _closure2_slot8 = var27;
            var8 = var2.giftParams;
            var _closure2_slot9 = var8;
            var7 = var2.isFreeForStaffSelfPurchase;
            var20 = undefined;
            if(!(var7 === var20)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var _closure2_slot10 = var7;
            var6 = var2.orderId;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var20;
            var _closure2_slot13 = var20;
            var _closure2_slot14 = var20;
            var _closure2_slot15 = var20;
            var _closure2_slot16 = var20;
            var _closure2_slot17 = var20;
            var _closure2_slot18 = var20;
            var _closure2_slot19 = var20;
            var _closure2_slot20 = var20;
            var _closure2_slot21 = var20;
            var _closure2_slot22 = var20;
            var4 = _closure1_slot6;
            var3 = var4.getCurrentUser;
            var16 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 7;
            var3 = var17[var3];
            var5 = var4.bind(var20)(var3);
            var3 = var5.useHandlePremiumPurchase;
            var15 = var3.bind(var5)();
            _closure2_slot12 = var15;
            var3 = 8;
            var3 = var17[var3];
            var21 = var4.bind(var20)(var3);
            var5 = var21.useAndroidShopOrdersEnabled;
            var3 = {};
            var22 = 'useMobilePurchaseSKU';
            var3['location'] = var22;
            var5 = var5.bind(var21)(var3);
            _closure2_slot13 = var5;
            var3 = 9;
            var3 = var17[var3];
            var4 = var4.bind(var20)(var3);
            var3 = var4.useNativeIAPPayments;
            var3 = var3.bind(var4)();
            var25 = var3.storeFront;
            _closure2_slot14 = var25;
            var4 = _closure1_slot5;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.recreateOrder;
                return var1;
            };
            var26 = var4.bind(var20)(var3);
            _closure2_slot15 = var26;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.setCheckoutSucceeded;
                return var1;
            };
            var3 = var4.bind(var20)(var3);
            _closure2_slot16 = var3;
            var21 = _closure1_slot4;
            var17 = var21.useRef;
            var4 = false;
            var4 = var17.bind(var21)(var4);
            _closure2_slot17 = var4;
            var17 = var20 !== var16;
            if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var16.isStaff;
            var17 = var4.bind(var16)();
case 4:
            _closure2_slot18 = var17;
            var16 = _closure1_slot1;
            var21 = _closure1_slot2;
            var4 = 10;
            var4 = var21[var4];
            var16 = var16.bind(var20)(var4);
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var16.bind(var20)(var4);
            var21 = null;
            var16 = var21 == var8;
            var22 = undefined;
            if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var22 = var8.isGift;
case 6:
            var16 = var21 != var22;
            if(!var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = var22;
case 8:
            _closure2_slot19 = var16;
            if(!(var21 == var11)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            _closure2_slot3 = var4;
            var11 = var4;
case 10:
            var4 = _closure1_slot4;
            var22 = var4.useCallback;
            var21 = new Array(2);
            var21[0] = var14;
            var21[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.unsubscribe;
                    var4 = _closure2_slot20;
                    var3 = 'GPLAY_PURCHASE_VERIFIED';
                    var3 = var5.bind(var6)(var3, var4);
                    var4 = _closure2_slot17;
                    var3 = false;
                    var4['current'] = var3;
                    var4 = _closure2_slot16;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure2_slot16;
                    var3 = var3.bind(var1)();
case 12:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var23 = var22.bind(var4)(var3, var21);
            _closure2_slot20 = var23;
            var22 = var4.useCallback;
            var21 = new Array(2);
            var21[0] = var13;
            var21[1] = var23;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = _closure2_slot20;
                var3 = 'GPLAY_PURCHASE_VERIFIED';
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure2_slot17;
                var3 = false;
                var4['current'] = var3;
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var22.bind(var4)(var3, var21);
            _closure2_slot21 = var3;
            var24 = var4.useCallback;
            var21 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var4 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 14:
                            var3 = var4.billingResult;
                            var2 = _closure1_slot8;
                            var2 = var2.OK;
                            if(!(var3 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var2 = var3[var2];
                            var3 = undefined;
                            var9 = var6.bind(var3)(var2);
                            var8 = var9.unsubscribe;
                            var7 = _closure2_slot20;
                            var6 = 'GPLAY_PURCHASE_VERIFIED';
                            var6 = var8.bind(var9)(var6, var7);
                            var6 = _closure2_slot11;
                            var8 = null;
                            if(!(var8 != var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                            var6 = _closure2_slot13;
                            if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                            var6 = var4.isActivePurchase;
                            if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 20:
                            var7 = _closure1_slot10;
                            var6 = var7.includes;
                            var4 = var4.billingResult;
                            var4 = var6.bind(var7)(var4);
                            if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 21:
                            var9 = _closure1_slot9;
                            var7 = var9.info;
                            var6 = {};
                            var4 = _closure2_slot11;
                            var6['orderId'] = var4;
                            var4 = _closure2_slot1;
                            var6['platformSkuId'] = var4;
                            var4 = _closure2_slot0;
                            var6['skuId'] = var4;
                            var4 = '[handleGPlayUpdatePurchaseAction] Something went wrong, discarding order';
                            var4 = var7.bind(var9)(var4, var6);
case 22: // try_start_0
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 13;
                            var4 = var7[var4];
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.discardOrder;
                            var4 = _closure2_slot11;
                            var4 = var6.bind(var7)(var4);
                            SaveGenerator(address=236);
case 23:
                            return var4;
case 24:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                            if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                            var7 = _closure2_slot15;
                            var7 = var8 != var7;
                            var6 = var7;
                            if(!var7) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                            var7 = _closure2_slot14;
                            var6 = var8 != var7;
case 27:
                            if(!var6) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                            var7 = _closure2_slot15;
                            var6 = _closure2_slot14;
                            var6 = var7.bind(var3)(var6);
                            SaveGenerator(address=284);
case 31:
                            return var6;
case 32:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(var7) { _fun0003_ip = 33; continue _fun0003 }
case 29: // try_end0
                            _fun0003_ip = 17; continue _fun0003;
case 33:
                            return var6;
case 25:
                            return var4;
case 34: // catch_target0
                            CatchBlockStart(arg_register=7);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var9 = var6.bind(var3)(var4);
                            var7 = var9.captureBillingException;
                            var6 = {};
                            var4 = {};
                            var10 = 'useMobilePurchaseSKU_discardOrder';
                            var4['source'] = var10;
                            var6['tags'] = var4;
                            var10 = {};
                            var4 = _closure2_slot11;
                            var10['orderId'] = var4;
                            var6['extra'] = var10;
                            var6 = var7.bind(var9)(var8, var6);
                            var7 = _closure1_slot9;
                            var6 = var7.error;
                            var5 = {};
                            var5['error'] = var8;
                            var5['orderId'] = var4;
                            var4 = _closure2_slot0;
                            var5['skuId'] = var4;
                            var4 = 'Failed to discard/recreate order';
                            var4 = var6.bind(var7)(var4, var5);
case 17:
                            var5 = _closure2_slot17;
                            var4 = false;
                            var5['current'] = var4;
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var3)();
case 15:
                            var3 = _closure2_slot8;
                            var2 = undefined;
                            var3 = var3.bind(var2)();
                            return var2;
case 11:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var22 = var21.bind(var20)();
            var21 = new Array(9);
            var21[0] = var23;
            var21[1] = var13;
            var21[2] = var27;
            var21[3] = var6;
            var21[4] = var5;
            var21[5] = var26;
            var21[6] = var25;
            var21[7] = var18;
            var21[8] = var19;
            var24 = var24.bind(var4)(var22, var21);
            _closure2_slot22 = var24;
            var22 = var4.useEffect;
            var21 = new Array(3);
            var21[0] = var24;
            var21[1] = var23;
            var21[2] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 12;
                var1 = var5[var2];
                var3 = undefined;
                var9 = var4.bind(var3)(var1);
                var8 = var9.subscribe;
                var7 = _closure2_slot22;
                var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var2];
                var9 = var4.bind(var3)(var6);
                var8 = var9.subscribe;
                var7 = _closure2_slot20;
                var6 = 'GPLAY_PURCHASE_VERIFIED';
                var6 = var8.bind(var9)(var6, var7);
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.subscribe;
                var2 = _closure2_slot21;
                var1 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                var1 = var3.bind(var4)(var1, var2);
                var1 = function() {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var2 = var5[var3];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.unsubscribe;
                    var7 = _closure2_slot22;
                    var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var1)(var6);
                    var8 = var9.unsubscribe;
                    var7 = _closure2_slot20;
                    var6 = 'GPLAY_PURCHASE_VERIFIED';
                    var6 = var8.bind(var9)(var6, var7);
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot21;
                    var2 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var3 = var22.bind(var4)(var3, var21);
            var3 = var4.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var7 = undefined;
                        var2 = undefined;
                        var4 = _closure2_slot17;
                        var4 = var4.current;
                        if(var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 15;
                        var4 = var8[var4];
                        var8 = var6.bind(var7)(var4);
                        var6 = var8.isNullOrEmpty;
                        var4 = _closure2_slot1;
                        var4 = var6.bind(var8)(var4);
                        if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40: // try_start_4 // try_start_7
                        var4 = _closure2_slot17;
                        var8 = true;
                        var4['current'] = var8;
                        var4 = _closure2_slot18;
                        if(!var4) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                        var4 = _closure2_slot10;
                        if(!var4) { _fun0004_ip = 41; continue _fun0004 }
case 43:
                        var4 = _closure2_slot19;
                        if(var4) { _fun0004_ip = 41; continue _fun0004 }
case 3:
                        var6 = _closure2_slot7;
                        var4 = null;
                        if(!(var4 == var6)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 16;
                        var4 = var9[var4];
                        var4 = var6.bind(var7)(var4);
                        var4 = var4.purchaseSKU;
                        _fun0004_ip = 46; continue _fun0004;
case 44:
                        var4 = _closure2_slot7;
case 46:
                        var2 = var4;
case 47: // try_start_0 // try_start_1
                        var9 = var2;
                        var6 = _closure2_slot0;
                        var4 = {};
                        var2 = 0;
                        var4['expectedAmount'] = var2;
                        var2 = _closure1_slot7;
                        var2 = var2.USD;
                        var4['expectedCurrency'] = var2;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 17;
                        var2 = var11[var2];
                        var10 = var10.bind(var7)(var2);
                        var2 = var10.v4;
                        var2 = var2.bind(var10)();
                        var4['loadId'] = var2;
                        var2 = 'collectibles';
                        var2 = var9.bind(var7)(var2, var6, var4);
                        SaveGenerator(address=244);
case 26:
                        return var2;
case 48:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                        var4 = _closure2_slot5;
                        var4 = var4.bind(var7)();
case 51: // try_end0 // try_end1
                        var6 = _closure2_slot17;
                        var4 = false;
                        var6['current'] = var4;
                        _fun0004_ip = 52; continue _fun0004;
case 49:
                        var4 = _closure2_slot17;
                        var6 = false;
                        var4['current'] = var6;
case 53: // try_end4 // try_end7
                        var4 = _closure2_slot17;
                        var4['current'] = var6;
                        return var2;
case 54: // try_start_2 // try_start_5 // try_start_8 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot6;
                        var4 = var4.bind(var7)();
                        throw var2;
case 55: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var6 = _closure2_slot17;
                        var4 = false;
                        var6['current'] = var4;
                        throw var2;
case 41:
                        var2 = _closure2_slot11;
                        var9 = null;
                        if(!(var9 != var2)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                        var2 = _closure2_slot13;
                        if(!var2) { _fun0004_ip = 56; continue _fun0004 }
case 58: // try_start_3
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 13;
                        var2 = var6[var2];
                        var6 = var4.bind(var7)(var2);
                        var4 = var6.markOrderAsSigningInProgress;
                        var2 = _closure2_slot11;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=384);
case 59:
                        return var2;
case 60:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 61; continue _fun0004 }
case 56: // try_end3
                        var6 = _closure2_slot12;
                        var4 = {};
                        var10 = _closure2_slot1;
                        var4['productId'] = var10;
                        var10 = _closure2_slot0;
                        var4['skuId'] = var10;
                        var4['isOneTimePurchase'] = var8;
                        var8 = _closure2_slot3;
                        var4['analyticsLoadId'] = var8;
                        var8 = _closure2_slot2;
                        var4['analyticsLocations'] = var8;
                        var8 = _closure2_slot4;
                        var4['analyticsData'] = var8;
                        var8 = _closure2_slot19;
                        var4['isGift'] = var8;
                        var8 = _closure2_slot9;
                        var9 = var9 == var8;
                        var8 = undefined;
                        if(var9) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                        var9 = _closure2_slot9;
                        var8 = var9.options;
case 62:
                        var4['giftInfoOptions'] = var8;
                        var8 = _closure2_slot6;
                        var4['onPurchaseError'] = var8;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address=502);
case 64:
                        return var4;
case 65:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0004_ip = 66; continue _fun0004 }
case 52: // try_end5 // try_end8
                        var8 = _closure2_slot17;
                        var6 = false;
                        var8['current'] = var6;
                        return var7;
case 66:
                        var8 = _closure2_slot17;
                        var6 = false;
                        var8['current'] = var6;
                        return var4;
case 61:
                        var6 = _closure2_slot17;
                        var4 = false;
                        var6['current'] = var4;
                        return var2;
case 67: // try_start_6 // try_start_9 // catch_target3
                        CatchBlockStart(arg_register=1);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 14;
                        var4 = var8[var4];
                        var8 = var6.bind(var7)(var4);
                        var7 = var8.captureBillingException;
                        var6 = {};
                        var4 = {};
                        var9 = 'useMobilePurchaseSKU_markSigning';
                        var4['source'] = var9;
                        var6['tags'] = var4;
                        var9 = {};
                        var4 = _closure2_slot11;
                        var9['orderId'] = var4;
                        var6['extra'] = var9;
                        var6 = var7.bind(var8)(var2, var6);
                        var7 = _closure1_slot9;
                        var6 = var7.error;
                        var5 = {};
                        var5['error'] = var2;
                        var8 = _closure2_slot0;
                        var5['skuId'] = var8;
                        var5['orderId'] = var4;
                        var4 = 'Failed to mark order signing-in-progress';
                        var4 = var6.bind(var7)(var4, var5);
                        throw var2;
case 68: // try_end6 // catch_target4 // catch_target5 // catch_target6
                        CatchBlockStart(arg_register=1);
                        throw var2;
case 69: // try_end9 // catch_target7 // catch_target8 // catch_target9
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot17;
                        var3 = false;
                        var4['current'] = var3;
                        throw var2;
case 39:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var14 = 'Missing google play sku ID';
                        var15 = var3;
                        var2 = new var15[var4](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 37:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var14 = 'Purchase already in progress';
                        var15 = var3;
                        var2 = new var15[var4](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 35:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var20)(var1);
            var1 = new Array(15);
            var1[0] = var19;
            var1[1] = var18;
            var1[2] = var17;
            var1[3] = var16;
            var1[4] = var15;
            var1[5] = var14;
            var1[6] = var13;
            var1[7] = var12;
            var1[8] = var11;
            var1[9] = var10;
            var1[10] = var9;
            var1[11] = var8;
            var1[12] = var7;
            var1[13] = var6;
            var1[14] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();