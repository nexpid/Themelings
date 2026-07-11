// app/modules/gplay/native/GPlayManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function handleConnectionStateUpdated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.connectionState;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.dispatch;
            var3 = {};
            var7 = 'GPLAY_UPDATE_CONNECTION_STATE';
            var3['type'] = var7;
            var3['connectionState'] = var4;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot13;
            var3 = var3.CONNECTED;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.loadUserCountry;
            var4 = var2.bind(var3)();
            var3 = var4.finally;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.loadSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function handlePurchaseStateUpdated(arg1) {
        var1 = arg1;
        var6 = var1.billingResult;
        var5 = var1.isActivePurchase;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var7 = 'GPLAY_UPDATE_PURCHASE_STATE';
        var2['type'] = var7;
        var2['billingResult'] = var6;
        var2['isActivePurchase'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function handlePurchaseUpdated() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _handlePurchaseUpdated() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = arg1;
                    var8 = var2.purchase;
                    var3 = undefined;
                    var4 = undefined;
                    var11 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var21 = undefined;
                    var6 = undefined;
                    var9 = undefined;
                    var13 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=43);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var14 = _closure1_slot11;
                    var12 = var14.isPurchasingProduct;
                    var7 = var8;
                    var7 = var7.productId;
                    var7 = var12.bind(var14)(var7);
                    if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var12 = _closure1_slot12;
                    var7 = var12.getState;
                    var7 = var7.bind(var12)();
                    var14 = var7.analyticsByProductId;
                    var7 = var8;
                    var12 = var7.productId;
                    var4 = var14[var12];
                    var14 = _closure1_slot24;
                    var12 = var7.productId;
                    var12 = var14[var12];
                    var11 = var12;
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var14 = 18;
                    var14 = var19[var14];
                    var18 = var18.bind(var3)(var14);
                    var14 = var18.v3;
                    var7 = var7.purchaseToken;
                    var17 = var14.bind(var18)(var7);
                    var7 = null;
                    if(!(var7 == var12)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var18 = _closure1_slot6;
                    var14 = var18.getGiftOptionsForKey;
                    var12 = var17;
                    var11 = var14.bind(var18)(var12);
                    _fun0002_ip = 14; continue _fun0002;
case 12:
                    var14 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var12 = 16;
                    var12 = var18[var12];
                    var18 = var14.bind(var3)(var12);
                    var14 = var18.dispatch;
                    var12 = {};
                    var19 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var12['type'] = var19;
                    var19 = var17;
                    var12['key'] = var19;
                    var19 = {};
                    var27 = var11;
                    var28 = var19;
                    var20 = copyDataProperties(var28, var27);
                    var12['giftOptions'] = var19;
                    var12 = var14.bind(var18)(var12);
case 14: // try_start_1 // try_start_5
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var12 = 16;
                    var14 = var19[var12];
                    var22 = var18.bind(var3)(var14);
                    var20 = var22.dispatch;
                    var14 = {};
                    var18 = 'GPLAY_VERIFICATION_START';
                    var14['type'] = var18;
                    var18 = var8;
                    var23 = var18.productId;
                    var14['productId'] = var23;
                    var14 = var20.bind(var22)(var14);
                    var20 = _closure1_slot0;
                    var14 = 19;
                    var19 = var19[var14];
                    var19 = var20.bind(var3)(var19);
                    var20 = var19.SubscriptionProductIds;
                    var19 = var20.includes;
                    var18 = var18.productId;
                    var18 = var19.bind(var20)(var18);
                    if(var18) { _fun0002_ip = 15; continue _fun0002 }
case 16: // try_start_0
                    var20 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var18 = 20;
                    var18 = var19[var18];
                    var18 = var20.bind(var3)(var18);
                    var25 = var18.bind(var3)();
                    var24 = var25.subtract;
                    var20 = _closure1_slot0;
                    var18 = 21;
                    var22 = var19[var18];
                    var22 = var20.bind(var3)(var22);
                    var23 = var22.DRAFT_ORDER_LOOKBACK_DAYS;
                    var22 = 'days';
                    var23 = var24.bind(var25)(var23, var22);
                    var22 = var23.toISOString;
                    var21 = var22.bind(var23)();
                    var19 = var19[var14];
                    var22 = var20.bind(var3)(var19);
                    var20 = var22.getPlanIdForGift;
                    var19 = var8;
                    var19 = var19.productId;
                    var19 = var20.bind(var22)(var19);
                    var6 = var19;
                    var19 = var7 != var19;
                    var20 = undefined;
                    if(!var19) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var19 = _closure1_slot19;
                    var6 = var19[var6];
                    var16 = var6;
                    var19 = var7 == var6;
                    var6 = undefined;
                    if(var19) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = var16.skuId;
case 19:
                    var20 = var6;
case 17:
                    var9 = var20;
                    var16 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var18];
                    var19 = var16.bind(var3)(var6);
                    var16 = var19.getOrders;
                    var6 = {};
                    var22 = _closure1_slot18;
                    var22 = var22.DRAFT;
                    var6['status'] = var22;
                    var6['createdAfter'] = var21;
                    var6['skuId'] = var20;
                    var20 = _closure1_slot17;
                    var20 = var20.GOOGLE;
                    var6['paymentGateway'] = var20;
                    var20 = true;
                    var6['isGift'] = var20;
                    var6 = var16.bind(var19)(var6);
                    SaveGenerator(address=587);
case 21:
                    return var6;
case 22:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=15);
                    if(var16) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var13 = var6;
                    var19 = var6.length;
                    var16 = 0;
                    if(!(!(var19 > var16))) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var22 = _closure1_slot21;
                    var21 = var22.warn;
                    var20 = {};
                    var19 = var8;
                    var19 = var19.productId;
                    var20['productId'] = var19;
                    var19 = var9;
                    var20['skuId'] = var19;
                    var19 = '[handlePurchaseUpdated] No draft order found for signing';
                    var19 = var21.bind(var22)(var19, var20);
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var13 = var13[var16];
                    var16 = var13.id;
                    var20 = _closure1_slot21;
                    var19 = var20.info;
                    var13 = {};
                    var13['orderId'] = var16;
                    var21 = var8;
                    var21 = var21.productId;
                    var13['productId'] = var21;
                    var13['skuId'] = var9;
                    var9 = '[handlePurchaseUpdated] Signing order from backend query';
                    var9 = var19.bind(var20)(var9, var13);
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var18];
                    var13 = var13.bind(var3)(var9);
                    var9 = var13.markOrderAsSigningInProgress;
                    var9 = var9.bind(var13)(var16);
                    SaveGenerator(address=744);
case 28:
                    return var9;
case 29:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=12);
                    if(var13) { _fun0002_ip = 30; continue _fun0002 }
case 27: // try_end0
                    _fun0002_ip = 15; continue _fun0002;
case 30: // try_end1 // try_end5
                    var16 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var12];
                    var18 = var16.bind(var3)(var13);
                    var16 = var18.dispatch;
                    var13 = {};
                    var19 = 'GPLAY_VERIFICATION_END';
                    var13['type'] = var19;
                    var19 = var8;
                    var19 = var19.productId;
                    var13['productId'] = var19;
                    var13 = var16.bind(var18)(var13);
                    return var9;
case 23:
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var16 = var13.bind(var3)(var9);
                    var13 = var16.dispatch;
                    var9 = {};
                    var18 = 'GPLAY_VERIFICATION_END';
                    var9['type'] = var18;
                    var18 = var8;
                    var18 = var18.productId;
                    var9['productId'] = var18;
                    var9 = var13.bind(var16)(var9);
                    return var6;
case 31: // try_start_2 // try_start_6 // catch_target0
                    CatchBlockStart(arg_register=5);
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var9 = 22;
                    var9 = var16[var9];
                    var16 = var13.bind(var3)(var9);
                    var13 = var16.captureBillingException;
                    var9 = {};
                    var18 = {};
                    var19 = 'GPlayManager_handlePurchaseUpdated_sign';
                    var18['source'] = var19;
                    var9['tags'] = var18;
                    var18 = {};
                    var19 = var8;
                    var19 = var19.productId;
                    var18['productId'] = var19;
                    var9['extra'] = var18;
                    var9 = var13.bind(var16)(var6, var9);
                    var13 = _closure1_slot21;
                    var9 = var13.error;
                    var18 = var6.message;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var16 = var6.concat;
                    var6 = '[handlePurchaseUpdated] Failed to find or sign order: ';
                    var6 = var16.bind(var6)(var18);
                    var6 = var9.bind(var13)(var6);
case 15:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var13 = 17;
                    var6 = var6[var13];
                    var18 = var9.bind(var3)(var6);
                    var16 = var18.verifyPurchase;
                    var9 = var8;
                    var6 = var11;
                    var6 = var16.bind(var18)(var9, var6);
                    SaveGenerator(address=1026);
case 32:
                    return var6;
case 33:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var15 = var6;
                    var16 = var7 != var6;
                    var9 = var16;
                    if(!var16) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var9 = var7 != var11;
case 36:
                    if(!var9) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var16 = var11.bind(var3)(var9);
                    var11 = var16.dispatch;
                    var9 = {};
                    var18 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var9['type'] = var18;
                    var9['key'] = var17;
                    var9 = var11.bind(var16)(var9);
                    var11 = _closure1_slot24;
                    var9 = var8;
                    var9 = var9.productId;
                    var9 = delete var11[var9];
case 38:
                    var9 = var15;
                    if(!(var7 != var9)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var16 = var11.bind(var3)(var9);
                    var11 = var16.dispatch;
                    var9 = {};
                    var17 = 'GPLAY_PURCHASE_VERIFIED';
                    var9['type'] = var17;
                    var17 = var8;
                    var17 = var17.productId;
                    var9['productId'] = var17;
                    var9 = var11.bind(var16)(var9);
case 40:
                    var9 = var15;
                    if(!(var7 != var9)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var9 = var11.bind(var3)(var9);
                    var14 = var9.SubscriptionProductIds;
                    var11 = var14.includes;
                    var9 = var8;
                    var9 = var9.productId;
                    var9 = var11.bind(var14)(var9);
                    if(var9) { _fun0002_ip = 42; continue _fun0002 }
case 44:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var13 = var11.bind(var3)(var9);
                    var11 = var13.sendPaymentCompleteAnalytics;
                    var9 = var8;
                    var11 = var11.bind(var13)(var9);
                    var13 = _closure1_slot21;
                    var11 = var13.info;
                    var16 = var9.productId;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var14 = var9.concat;
                    var9 = '[handlePurchaseUpdated] One Time Purchase verified and consumed: ';
                    var9 = var14.bind(var9)(var16);
                    var9 = var11.bind(var13)(var9);
                    _fun0002_ip = 45; continue _fun0002;
case 42:
                    var9 = var15;
                    if(!(var7 != var9)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var9 = var15;
                    var9 = var9.pendingDowngrade;
                    if(!(var7 == var9)) { _fun0002_ip = 48; continue _fun0002 }
case 46:
                    var9 = var8;
                    var9 = var9.isActive;
                    if(var9) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 23;
                    var9 = var13[var9];
                    var11 = var11.bind(var3)(var9);
                    var9 = var11.fetchSubscriptions;
                    var9 = var9.bind(var11)();
                    SaveGenerator(address=1380);
case 51:
                    return var9;
case 52:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(!var11) { _fun0002_ip = 45; continue _fun0002 }
case 53: // try_end2 // try_end6
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var12];
                    var14 = var13.bind(var3)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var16 = 'GPLAY_VERIFICATION_END';
                    var11['type'] = var16;
                    var16 = var8;
                    var16 = var16.productId;
                    var11['productId'] = var16;
                    var11 = var13.bind(var14)(var11);
                    return var9;
case 49: // try_start_3 // try_start_7
                    var9 = _closure1_slot37;
                    var9 = var9.bind(var3)();
                    SaveGenerator(address=1457);
case 54:
                    return var9;
case 55:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(!var11) { _fun0002_ip = 45; continue _fun0002 }
case 56: // try_end3 // try_end7
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var12];
                    var14 = var13.bind(var3)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var16 = 'GPLAY_VERIFICATION_END';
                    var11['type'] = var16;
                    var16 = var8;
                    var16 = var16.productId;
                    var11['productId'] = var16;
                    var11 = var13.bind(var14)(var11);
                    return var9;
case 48: // try_start_4 // try_start_8
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = var13[var12];
                    var14 = var11.bind(var3)(var9);
                    var11 = var14.dispatch;
                    var9 = {};
                    var16 = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
                    var9['type'] = var16;
                    var15 = var15.pendingDowngrade;
                    var9['pendingDowngrade'] = var15;
                    var9 = var11.bind(var14)(var9);
                    var11 = _closure1_slot0;
                    var9 = 23;
                    var9 = var13[var9];
                    var11 = var11.bind(var3)(var9);
                    var9 = var11.fetchSubscriptions;
                    var9 = var9.bind(var11)();
                    SaveGenerator(address=1602);
case 57:
                    return var9;
case 58:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 59; continue _fun0002 }
case 45: // try_end4
                    _fun0002_ip = 60; continue _fun0002;
case 59: // try_end8
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var12];
                    var14 = var13.bind(var3)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var15 = 'GPLAY_VERIFICATION_END';
                    var11['type'] = var15;
                    var15 = var8;
                    var15 = var15.productId;
                    var11['productId'] = var15;
                    var11 = var13.bind(var14)(var11);
                    return var9;
case 34:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var12 = var11.bind(var3)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var13 = 'GPLAY_VERIFICATION_END';
                    var9['type'] = var13;
                    var13 = var8;
                    var13 = var13.productId;
                    var9['productId'] = var13;
                    var9 = var11.bind(var12)(var9);
                    return var6;
case 61: // try_start_9 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=5);
                    var10 = var6;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 22;
                    var9 = var11[var9];
                    var14 = var12.bind(var3)(var9);
                    var13 = var14.captureBillingException;
                    var9 = {};
                    var15 = {};
                    var12 = var8;
                    var16 = var12.productId;
                    var15['productId'] = var16;
                    var9['tags'] = var15;
                    var9 = var13.bind(var14)(var6, var9);
                    var13 = _closure1_slot21;
                    var9 = var13.error;
                    var17 = var12.productId;
                    var16 = var6.message;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var15 = var6.concat;
                    var14 = '[handlePurchaseUpdated] Error verifying purchase ';
                    var6 = ': ';
                    var6 = var15.bind(var14)(var17, var6, var16);
                    var6 = var9.bind(var13)(var6);
                    var9 = _closure1_slot1;
                    var6 = 16;
                    var6 = var11[var6];
                    var11 = var9.bind(var3)(var6);
                    var9 = var11.dispatch;
                    var6 = {};
                    var13 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    var6['type'] = var13;
                    var12 = var12.productId;
                    var6['productId'] = var12;
                    var6 = var9.bind(var11)(var6);
                    var6 = var4;
                    if(!(var7 == var6)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
                    var7 = {};
                    _fun0002_ip = 64; continue _fun0002;
case 62:
                    var7 = var4;
case 64:
                    var4 = var7.succeededOnlyFields;
                    var6 = _closure1_slot4;
                    var4 = _closure1_slot3;
                    var27 = var6.bind(var3)(var7, var4);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 24;
                    var4 = var7[var4];
                    var9 = var6.bind(var3)(var4);
                    var7 = var9.track;
                    var4 = _closure1_slot15;
                    var6 = var4.GPLAY_PURCHASE_FAILED;
                    var4 = {};
                    var28 = var4;
                    var11 = copyDataProperties(var28, var27);
                    var12 = 'handlePurchaseUpdated';
                    var11 = 'location';
                    var4[10] = var12;
                    var11 = var8;
                    var13 = var11.productId;
                    var12 = 'product_id';
                    var4[11] = var13;
                    var12 = var11.purchaseToken;
                    var11 = 'purchase_token';
                    var4[10] = var12;
                    var11 = var10.message;
                    var10 = 'error';
                    var4[9] = var11;
                    var4 = var7.bind(var9)(var6, var4);
case 60: // try_end9
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 16;
                    var4 = var7[var4];
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var9 = 'GPLAY_VERIFICATION_END';
                    var4['type'] = var9;
                    var9 = var8;
                    var9 = var9.productId;
                    var4['productId'] = var9;
                    var4 = var6.bind(var7)(var4);
                    _fun0002_ip = 10; continue _fun0002;
case 65: // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9
                    CatchBlockStart(arg_register=3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 16;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'GPLAY_VERIFICATION_END';
                    var5['type'] = var9;
                    var8 = var8.productId;
                    var5['productId'] = var8;
                    var5 = var6.bind(var7)(var5);
                    throw var4;
case 10:
                    return var3;
case 8:
                    return var2;
case 4:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function handleDowngradeCommand() {
        var1 = undefined;
        var4 = _closure1_slot34;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function _handleDowngradeCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 66; continue _fun0003 }
case 5:
                    var2 = arg1;
                    var8 = var2.downgradeCommand;
                    var4 = undefined;
                    SaveGenerator(address=27);
case 67:
                    return var4;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var5 = _closure1_slot14;
                    var5 = var5.EXECUTE;
                    if(!(var5 !== var8)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                    var5 = _closure1_slot14;
                    var5 = var5.CLEAR;
                    if(!(var5 !== var8)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                    var5 = global;
                    var7 = var5.Error;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'Invalid downgrade state ';
                    var9 = var6.bind(var5)(var8);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var10 = var6;
                    var5 = new var10[var7](var9, var8);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 73:
                    var3 = _closure1_slot36;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 75; continue _fun0003;
case 71:
                    var3 = function executePendingDowngrade() {
                        var1 = undefined;
                        var4 = _closure1_slot35;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=141);
case 76:
                    return var3;
case 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 78; continue _fun0003 }
case 75:
                    return var4;
case 78:
                    return var3;
case 69:
                    return var2;
case 66:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot34 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function _executePendingDowngrade() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 5:
                    var5 = undefined;
                    var10 = undefined;
                    var4 = _closure1_slot11;
                    var2 = var4.getPendingDowngrade;
                    var2 = var2.bind(var4)();
                    var10 = var2;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0004_ip = 79; continue _fun0004 }
case 80: // try_start_0 // try_start_1
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 16;
                    var2 = var6[var7];
                    var9 = var4.bind(var5)(var2);
                    var4 = var9.dispatch;
                    var2 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': true};
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 17;
                    var2 = var6[var2];
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.downgradeSubscription;
                    var2 = var10;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=123);
case 81:
                    return var2;
case 2:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 82; continue _fun0004 }
case 83:
                    var4 = _closure1_slot36;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot37;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=149);
case 75:
                    return var4;
case 84:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 85; continue _fun0004 }
case 86: // try_end0
                    _fun0004_ip = 87; continue _fun0004;
case 85: // try_end1
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var7];
                    var12 = var9.bind(var5)(var6);
                    var9 = var12.dispatch;
                    var6 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var6 = var9.bind(var12)(var6);
                    return var4;
case 82:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatch;
                    var4 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var4 = var6.bind(var7)(var4);
                    return var2;
case 88: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var8 = var7;
                    var15 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var2 = var6[var2];
                    var4 = var15.bind(var5)(var2);
                    var2 = var4.captureBillingException;
                    var2 = var2.bind(var4)(var7);
                    var4 = _closure1_slot1;
                    var2 = 25;
                    var2 = var6[var2];
                    var9 = var4.bind(var5)(var2);
                    var7 = var9.show;
                    var2 = {};
                    var12 = 26;
                    var13 = var6[var12];
                    var13 = var15.bind(var5)(var13);
                    var16 = var13.intl;
                    var14 = var16.string;
                    var13 = var6[var12];
                    var13 = var15.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.U+H+kd;
                    var13 = var14.bind(var16)(var13);
                    var2['title'] = var13;
                    var13 = var6[var12];
                    var13 = var15.bind(var5)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var6[var12];
                    var12 = var15.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.LFFx5G;
                    var12 = var13.bind(var14)(var12);
                    var2['body'] = var12;
                    var2 = var7.bind(var9)(var2);
                    var2 = 24;
                    var2 = var6[var2];
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot15;
                    var4 = var2.GPLAY_PURCHASE_FAILED;
                    var2 = {};
                    var9 = 'executePendingDowngrade';
                    var2['location'] = var9;
                    var9 = var10;
                    var12 = var11 == var9;
                    var9 = undefined;
                    if(var12) { _fun0004_ip = 89; continue _fun0004 }
case 90:
                    var12 = var10;
                    var9 = var12.newSubscriptionSkuId;
case 89:
                    var2['product_id'] = var9;
                    var9 = var10;
                    var11 = var11 == var9;
                    var9 = undefined;
                    if(var11) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                    var9 = var10.purchaseToken;
case 91:
                    var2['purchase_token'] = var9;
                    var8 = var8.message;
                    var2['error'] = var8;
                    var2 = var6.bind(var7)(var4, var2);
case 87: // try_end2
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var2 = var6[var2];
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.dispatch;
                    var2 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var2 = var4.bind(var6)(var2);
case 79:
                    return var5;
case 93: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function clearPendingDowngrade() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'GPLAY_UPDATE_PENDING_DOWNGRADE', 'pendingDowngrade': null};
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function fetchAndAlertActiveSubscription() {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function _fetchAndAlertActiveSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                    var8 = undefined;
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 23;
                    var2 = var6[var2];
                    var5 = var5.bind(var8)(var2);
                    var2 = var5.fetchSubscriptions;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=55);
case 96:
                    return var2;
case 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 12; continue _fun0005 }
case 74:
                    var6 = _closure1_slot10;
                    var5 = var6.getPremiumTypeSubscription;
                    var6 = var5.bind(var6)();
                    _closure4_slot0 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var8)();
                    var5 = _closure1_slot8;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 28;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 27;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure7_slot0 = var2;
                                var1 = function(arg1) {
                                    var5 = arg1;
                                    var _closure8_slot0 = var5;
                                    var4 = _closure1_slot20;
                                    var3 = _closure7_slot0;
                                    var2 = {};
                                    var8 = var2;
                                    var7 = var5;
                                    var5 = copyDataProperties(var8, var7);
                                    var6 = _closure4_slot0;
                                    var5 = 'subscription';
                                    var2[4] = var6;
                                    var5 = function onClose() {
                                        var2 = _closure8_slot0;
                                        var1 = var2.onClose;
                                        var1 = var1.bind(var2)();
                                        var4 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var1 = 29;
                                        var3 = var6[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.popWithKey;
                                        var5 = _closure1_slot0;
                                        var2 = 30;
                                        var2 = var6[var2];
                                        var2 = var5.bind(var1)(var2);
                                        var2 = var2.PREMIUM_KEY;
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    };
                                    var1 = 'onClose';
                                    var2[0] = var5;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['importer'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var8)(var4);
                    return var8;
case 98:
                    var4 = global;
                    var5 = var4.Error;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 26;
                    var4 = var9[var3];
                    var4 = var7.bind(var8)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.PjfUXe;
                    var10 = var4.bind(var6)(var3);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var11 = var4;
                    var3 = new var11[var5](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 12:
                    return var2;
case 94:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot38 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function handleAppStateUpdated() {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function _handleAppStateUpdated() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 100; continue _fun0006 }
case 5:
                    var2 = arg1;
                    var6 = var2.state;
                    var3 = undefined;
                    SaveGenerator(address=24);
case 101:
                    return var3;
case 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 103; continue _fun0006 }
case 104:
                    var7 = _closure1_slot11;
                    var5 = var7.isReady;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0006_ip = 105; continue _fun0006 }
case 72:
                    var7 = _closure1_slot9;
                    var5 = var7.isAuthenticated;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0006_ip = 105; continue _fun0006 }
case 106:
                    var5 = _closure1_slot16;
                    var5 = var5.ACTIVE;
                    if(!(var6 === var5)) { _fun0006_ip = 105; continue _fun0006 }
case 107: // try_start_0
                    var6 = _closure1_slot22;
                    var5 = var6.loadPurchases;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=101);
case 108:
                    return var5;
case 109:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 110; continue _fun0006 }
case 111: // try_end0
                    _fun0006_ip = 105; continue _fun0006;
case 110:
                    return var5;
case 112: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot22;
                    var4 = var5.open;
                    var4 = var4.bind(var5)();
case 105:
                    return var3;
case 103:
                    return var2;
case 100:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = ['succeededOnlyFields'];
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var7 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var7);
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.NativeEventEmitter;
    var2 = var2.NativeModules;
    var7 = 4;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.setPaymentSuccess;
    var _closure1_slot7 = var10;
    var7 = var7.showOldPaymentFlowSuccess;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useGPlayAnalyticsStore;
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.GPlayConnectionState;
    var _closure1_slot13 = var10;
    var7 = var7.GPlayDowngradeCommand;
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot15 = var10;
    var10 = var7.AppStates;
    var _closure1_slot16 = var10;
    var7 = var7.PaymentGateways;
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.OrderStatus;
    var _closure1_slot18 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.SubscriptionPlanInfo;
    var _closure1_slot19 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot20 = var7;
    var7 = 15;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = var10.prototype;
    var9 = Object.create(var7, {constructor: {value: var10}});
    var13 = 'GPlayManager.android';
    var14 = var9;
    var7 = new var14[var10](var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot21 = var7;
    var2 = var2.BillingManager;
    var _closure1_slot22 = var2;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var14 = var7;
    var13 = var2;
    var2 = new var14[var8](var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot23 = var2;
    var7 = {};
    var _closure1_slot24 = var7;
    var2 = null;
    var _closure1_slot25 = var2;
    var _closure1_slot26 = var2;
    var _closure1_slot27 = var2;
    var _closure1_slot28 = var2;
    var2 = {};
    var2['giftInfoOptionsCache'] = var7;
    var7 = function initialize() {
        var3 = _closure1_slot22;
        var1 = var3.open;
        var1 = var1.bind(var3)();
        var5 = _closure1_slot23;
        var4 = var5.addListener;
        var3 = _closure1_slot29;
        var1 = 'billing-manager-connection-state-updated';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot25 = var1;
        var4 = var5.addListener;
        var3 = _closure1_slot30;
        var1 = 'billing-manager-purchase-state-updated';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot26 = var1;
        var4 = var5.addListener;
        var3 = _closure1_slot31;
        var1 = 'billing-manager-purchase-updated';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot27 = var1;
        var4 = var5.addListener;
        var3 = _closure1_slot33;
        var1 = 'billing-manager-downgrade-command';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot28 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 16;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.subscribe;
        var3 = _closure1_slot39;
        var2 = 'APP_STATE_UPDATE';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var2['initialize'] = var7;
    var4 = function terminate() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot22;
            var1 = var3.close;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot25;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 113; continue _fun0007 }
case 68:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 113:
            var4 = _closure1_slot26;
            if(!(var1 != var4)) { _fun0007_ip = 97; continue _fun0007 }
case 80:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 97:
            var4 = _closure1_slot27;
            if(!(var1 != var4)) { _fun0007_ip = 114; continue _fun0007 }
case 115:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 114:
            var3 = _closure1_slot28;
            if(!(var1 != var3)) { _fun0007_ip = 116; continue _fun0007 }
case 107:
            var1 = var3.remove;
            var1 = var1.bind(var3)();
case 116:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = _closure1_slot39;
            var2 = 'APP_STATE_UPDATE';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var2['terminate'] = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gplay/native/GPlayManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();