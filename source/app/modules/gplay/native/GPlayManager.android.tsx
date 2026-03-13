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
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.dispatch;
            var3 = {};
            var7 = 'GPLAY_UPDATE_CONNECTION_STATE';
            var3['type'] = var7;
            var3['connectionState'] = var4;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot11;
            var3 = var3.CONNECTED;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.loadUserCountry;
            var4 = var2.bind(var3)();
            var3 = var4.finally;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
    var _closure1_slot25 = var1;
    var1 = function handlePurchaseStateUpdated(arg1) {
        var1 = arg1;
        var6 = var1.billingResult;
        var5 = var1.isActivePurchase;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
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
    var _closure1_slot26 = var1;
    var1 = function handlePurchaseUpdated() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _handlePurchaseUpdated() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
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
                    var12 = undefined;
                    var10 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var20 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=43);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var11 = _closure1_slot9;
                    var9 = var11.isPurchasingProduct;
                    var7 = var8;
                    var7 = var7.productId;
                    var7 = var9.bind(var11)(var7);
                    if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = _closure1_slot10;
                    var7 = var9.getState;
                    var7 = var7.bind(var9)();
                    var11 = var7.analyticsByProductId;
                    var7 = var8;
                    var9 = var7.productId;
                    var12 = var11[var9];
                    var11 = _closure1_slot20;
                    var9 = var7.productId;
                    var9 = var11[var9];
                    var10 = var9;
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var11 = 16;
                    var11 = var18[var11];
                    var17 = var17.bind(var3)(var11);
                    var11 = var17.v3;
                    var7 = var7.purchaseToken;
                    var16 = var11.bind(var17)(var7);
                    var7 = null;
                    if(!(var7 == var9)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var17 = _closure1_slot4;
                    var11 = var17.getGiftOptionsForKey;
                    var9 = var16;
                    var10 = var11.bind(var17)(var9);
                    _fun0002_ip = 14; continue _fun0002;
case 12:
                    var11 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var9 = 14;
                    var9 = var17[var9];
                    var17 = var11.bind(var3)(var9);
                    var11 = var17.dispatch;
                    var9 = {};
                    var18 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var9['type'] = var18;
                    var18 = var16;
                    var9['key'] = var18;
                    var18 = {};
                    var26 = var10;
                    var27 = var18;
                    var19 = copyDataProperties(var27, var26);
                    var9['giftOptions'] = var18;
                    var9 = var11.bind(var17)(var9);
case 14: // try_start_1 // try_start_5
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var9 = 14;
                    var11 = var18[var9];
                    var21 = var17.bind(var3)(var11);
                    var19 = var21.dispatch;
                    var11 = {};
                    var17 = 'GPLAY_VERIFICATION_START';
                    var11['type'] = var17;
                    var17 = var8;
                    var22 = var17.productId;
                    var11['productId'] = var22;
                    var11 = var19.bind(var21)(var11);
                    var19 = _closure1_slot0;
                    var11 = 17;
                    var18 = var18[var11];
                    var18 = var19.bind(var3)(var18);
                    var19 = var18.SubscriptionProductIds;
                    var18 = var19.includes;
                    var17 = var17.productId;
                    var17 = var18.bind(var19)(var17);
                    if(var17) { _fun0002_ip = 15; continue _fun0002 }
case 16: // try_start_0
                    var19 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var17 = 18;
                    var17 = var18[var17];
                    var17 = var19.bind(var3)(var17);
                    var24 = var17.bind(var3)();
                    var23 = var24.subtract;
                    var19 = _closure1_slot0;
                    var17 = 19;
                    var21 = var18[var17];
                    var21 = var19.bind(var3)(var21);
                    var22 = var21.DRAFT_ORDER_LOOKBACK_DAYS;
                    var21 = 'days';
                    var22 = var23.bind(var24)(var22, var21);
                    var21 = var22.toISOString;
                    var20 = var21.bind(var22)();
                    var18 = var18[var11];
                    var21 = var19.bind(var3)(var18);
                    var19 = var21.getPlanIdForGift;
                    var18 = var8;
                    var18 = var18.productId;
                    var18 = var19.bind(var21)(var18);
                    var4 = var18;
                    var18 = var7 != var18;
                    var19 = undefined;
                    if(!var18) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var18 = _closure1_slot15;
                    var4 = var18[var4];
                    var15 = var4;
                    var18 = var7 == var4;
                    var4 = undefined;
                    if(var18) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var4 = var15.skuId;
case 19:
                    var19 = var4;
case 17:
                    var6 = var19;
                    var22 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var4 = var21[var17];
                    var18 = var22.bind(var3)(var4);
                    var15 = var18.getOrders;
                    var4 = {};
                    var21 = var21[var17];
                    var21 = var22.bind(var3)(var21);
                    var21 = var21.OrderStatus;
                    var21 = var21.DRAFT;
                    var4['status'] = var21;
                    var4['createdAfter'] = var20;
                    var4['skuId'] = var19;
                    var4 = var15.bind(var18)(var4);
                    SaveGenerator(address=576);
case 21:
                    return var4;
case 22:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(var15) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var14 = var4;
                    var18 = var4.length;
                    var15 = 0;
                    if(!(!(var18 > var15))) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var21 = _closure1_slot17;
                    var20 = var21.warn;
                    var19 = {};
                    var18 = var8;
                    var18 = var18.productId;
                    var19['productId'] = var18;
                    var18 = var6;
                    var19['skuId'] = var18;
                    var18 = '[handlePurchaseUpdated] No draft order found for signing';
                    var18 = var20.bind(var21)(var18, var19);
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var14 = var14[var15];
                    var15 = var14.id;
                    var19 = _closure1_slot17;
                    var18 = var19.info;
                    var14 = {};
                    var14['orderId'] = var15;
                    var20 = var8;
                    var20 = var20.productId;
                    var14['productId'] = var20;
                    var14['skuId'] = var6;
                    var6 = '[handlePurchaseUpdated] Signing order from backend query';
                    var6 = var18.bind(var19)(var6, var14);
                    var14 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var17];
                    var14 = var14.bind(var3)(var6);
                    var6 = var14.markOrderAsSigningInProgress;
                    var6 = var6.bind(var14)(var15);
                    SaveGenerator(address=733);
case 28:
                    return var6;
case 29:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 30; continue _fun0002 }
case 27: // try_end0
                    _fun0002_ip = 15; continue _fun0002;
case 30: // try_end1 // try_end5
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var9];
                    var17 = var15.bind(var3)(var14);
                    var15 = var17.dispatch;
                    var14 = {};
                    var18 = 'GPLAY_VERIFICATION_END';
                    var14['type'] = var18;
                    var18 = var8;
                    var18 = var18.productId;
                    var14['productId'] = var18;
                    var14 = var15.bind(var17)(var14);
                    return var6;
case 23:
                    var14 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var15 = var14.bind(var3)(var6);
                    var14 = var15.dispatch;
                    var6 = {};
                    var17 = 'GPLAY_VERIFICATION_END';
                    var6['type'] = var17;
                    var17 = var8;
                    var17 = var17.productId;
                    var6['productId'] = var17;
                    var6 = var14.bind(var15)(var6);
                    return var4;
case 31: // try_start_2 // try_start_6 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 20;
                    var6 = var15[var6];
                    var15 = var14.bind(var3)(var6);
                    var14 = var15.captureBillingException;
                    var6 = {};
                    var17 = {};
                    var18 = 'GPlayManager_handlePurchaseUpdated_sign';
                    var17['source'] = var18;
                    var6['tags'] = var17;
                    var17 = {};
                    var18 = var8;
                    var18 = var18.productId;
                    var17['productId'] = var18;
                    var6['extra'] = var17;
                    var6 = var14.bind(var15)(var4, var6);
                    var14 = _closure1_slot17;
                    var6 = var14.error;
                    var17 = var4.message;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var15 = var4.concat;
                    var4 = '[handlePurchaseUpdated] Failed to find or sign order: ';
                    var4 = var15.bind(var4)(var17);
                    var4 = var6.bind(var14)(var4);
case 15:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var14 = 15;
                    var4 = var4[var14];
                    var17 = var6.bind(var3)(var4);
                    var15 = var17.verifyPurchase;
                    var6 = var8;
                    var4 = var10;
                    var4 = var15.bind(var17)(var6, var4);
                    SaveGenerator(address=1015);
case 32:
                    return var4;
case 33:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var13 = var4;
                    var15 = var7 != var4;
                    var6 = var15;
                    if(!var15) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var6 = var7 != var10;
case 36:
                    if(!var6) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var10 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var15 = var10.bind(var3)(var6);
                    var10 = var15.dispatch;
                    var6 = {};
                    var17 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var6['type'] = var17;
                    var6['key'] = var16;
                    var6 = var10.bind(var15)(var6);
                    var10 = _closure1_slot20;
                    var6 = var8;
                    var6 = var6.productId;
                    var6 = delete var10[var6];
case 38:
                    var6 = var13;
                    if(!(var7 != var6)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var6 = var10.bind(var3)(var6);
                    var11 = var6.SubscriptionProductIds;
                    var10 = var11.includes;
                    var6 = var8;
                    var6 = var6.productId;
                    var6 = var10.bind(var11)(var6);
                    if(var6) { _fun0002_ip = 40; continue _fun0002 }
case 42:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = var10[var9];
                    var16 = var11.bind(var3)(var6);
                    var15 = var16.dispatch;
                    var11 = {};
                    var6 = 'GPLAY_PURCHASE_VERIFIED';
                    var11['type'] = var6;
                    var6 = var8;
                    var17 = var6.productId;
                    var11['productId'] = var17;
                    var11 = var15.bind(var16)(var11);
                    var11 = _closure1_slot0;
                    var10 = var10[var14];
                    var11 = var11.bind(var3)(var10);
                    var10 = var11.sendPaymentCompleteAnalytics;
                    var10 = var10.bind(var11)(var6);
                    var11 = _closure1_slot17;
                    var10 = var11.info;
                    var15 = var6.productId;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var14 = var6.concat;
                    var6 = '[handlePurchaseUpdated] One Time Purchase verified and consumed: ';
                    var6 = var14.bind(var6)(var15);
                    var6 = var10.bind(var11)(var6);
                    _fun0002_ip = 43; continue _fun0002;
case 40:
                    var6 = var13;
                    if(!(var7 != var6)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var6 = var13;
                    var6 = var6.pendingDowngrade;
                    if(!(var7 == var6)) { _fun0002_ip = 46; continue _fun0002 }
case 44:
                    var6 = var8;
                    var6 = var6.isActive;
                    if(var6) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 21;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.fetchSubscriptions;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=1358);
case 49:
                    return var6;
case 50:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!var7) { _fun0002_ip = 43; continue _fun0002 }
case 51: // try_end2 // try_end6
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var11 = var10.bind(var3)(var7);
                    var10 = var11.dispatch;
                    var7 = {};
                    var14 = 'GPLAY_VERIFICATION_END';
                    var7['type'] = var14;
                    var14 = var8;
                    var14 = var14.productId;
                    var7['productId'] = var14;
                    var7 = var10.bind(var11)(var7);
                    return var6;
case 47: // try_start_3 // try_start_7
                    var6 = _closure1_slot33;
                    var6 = var6.bind(var3)();
                    SaveGenerator(address=1435);
case 52:
                    return var6;
case 53:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!var7) { _fun0002_ip = 43; continue _fun0002 }
case 54: // try_end3 // try_end7
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var11 = var10.bind(var3)(var7);
                    var10 = var11.dispatch;
                    var7 = {};
                    var14 = 'GPLAY_VERIFICATION_END';
                    var7['type'] = var14;
                    var14 = var8;
                    var14 = var14.productId;
                    var7['productId'] = var14;
                    var7 = var10.bind(var11)(var7);
                    return var6;
case 46: // try_start_4 // try_start_8
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = var10[var9];
                    var11 = var7.bind(var3)(var6);
                    var7 = var11.dispatch;
                    var6 = {};
                    var14 = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
                    var6['type'] = var14;
                    var13 = var13.pendingDowngrade;
                    var6['pendingDowngrade'] = var13;
                    var6 = var7.bind(var11)(var6);
                    var7 = _closure1_slot0;
                    var6 = 21;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.fetchSubscriptions;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=1580);
case 55:
                    return var6;
case 56:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 57; continue _fun0002 }
case 43: // try_end4
                    _fun0002_ip = 58; continue _fun0002;
case 57: // try_end8
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var11 = var10.bind(var3)(var7);
                    var10 = var11.dispatch;
                    var7 = {};
                    var13 = 'GPLAY_VERIFICATION_END';
                    var7['type'] = var13;
                    var13 = var8;
                    var13 = var13.productId;
                    var7['productId'] = var13;
                    var7 = var10.bind(var11)(var7);
                    return var6;
case 34:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var9 = var7.bind(var3)(var6);
                    var7 = var9.dispatch;
                    var6 = {};
                    var10 = 'GPLAY_VERIFICATION_END';
                    var6['type'] = var10;
                    var10 = var8;
                    var10 = var10.productId;
                    var6['productId'] = var10;
                    var6 = var7.bind(var9)(var6);
                    return var4;
case 59: // try_start_9 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=9);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 20;
                    var4 = var7[var4];
                    var9 = var6.bind(var3)(var4);
                    var6 = var9.captureBillingException;
                    var4 = {};
                    var13 = {};
                    var11 = var8;
                    var14 = var11.productId;
                    var13['productId'] = var14;
                    var4['tags'] = var13;
                    var4 = var6.bind(var9)(var10, var4);
                    var9 = _closure1_slot17;
                    var6 = var9.error;
                    var16 = var11.productId;
                    var15 = var10.message;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var14 = var4.concat;
                    var13 = '[handlePurchaseUpdated] Error verifying purchase ';
                    var4 = ': ';
                    var4 = var14.bind(var13)(var16, var4, var15);
                    var4 = var6.bind(var9)(var4);
                    var6 = _closure1_slot1;
                    var4 = 14;
                    var4 = var7[var4];
                    var13 = var6.bind(var3)(var4);
                    var9 = var13.dispatch;
                    var4 = {};
                    var14 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    var4['type'] = var14;
                    var14 = var11.productId;
                    var4['productId'] = var14;
                    var4 = var9.bind(var13)(var4);
                    var4 = 22;
                    var4 = var7[var4];
                    var9 = var6.bind(var3)(var4);
                    var7 = var9.track;
                    var4 = _closure1_slot13;
                    var6 = var4.GPLAY_PURCHASE_FAILED;
                    var4 = {};
                    var26 = var12;
                    var27 = var4;
                    var12 = copyDataProperties(var27, var26);
                    var13 = 'handlePurchaseUpdated';
                    var12 = 'location';
                    var4[var12] = var13;
                    var13 = var11.productId;
                    var12 = 'product_id';
                    var4[var12] = var13;
                    var12 = var11.purchaseToken;
                    var11 = 'purchase_token';
                    var4[var11] = var12;
                    var11 = var10.message;
                    var10 = 'error';
                    var4[var10] = var11;
                    var4 = var7.bind(var9)(var6, var4);
case 58: // try_end9
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 14;
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
case 60: // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9
                    CatchBlockStart(arg_register=3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 14;
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
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function handleDowngradeCommand() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _handleDowngradeCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 61; continue _fun0003 }
case 5:
                    var2 = arg1;
                    var8 = var2.downgradeCommand;
                    var4 = undefined;
                    SaveGenerator(address=27);
case 62:
                    return var4;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var5 = _closure1_slot12;
                    var5 = var5.EXECUTE;
                    if(!(var5 !== var8)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                    var5 = _closure1_slot12;
                    var5 = var5.CLEAR;
                    if(!(var5 !== var8)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
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
case 68:
                    var3 = _closure1_slot32;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 70; continue _fun0003;
case 66:
                    var3 = function executePendingDowngrade() {
                        var1 = undefined;
                        var4 = _closure1_slot31;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=141);
case 71:
                    return var3;
case 72:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 73; continue _fun0003 }
case 70:
                    return var4;
case 73:
                    return var3;
case 64:
                    return var2;
case 61:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _executePendingDowngrade() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 74; continue _fun0004 }
case 5:
                    var5 = undefined;
                    var10 = undefined;
                    var4 = _closure1_slot9;
                    var2 = var4.getPendingDowngrade;
                    var2 = var2.bind(var4)();
                    var10 = var2;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0004_ip = 75; continue _fun0004 }
case 76: // try_start_0 // try_start_1
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 14;
                    var2 = var6[var7];
                    var9 = var4.bind(var5)(var2);
                    var4 = var9.dispatch;
                    var2 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': true};
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 15;
                    var2 = var6[var2];
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.downgradeSubscription;
                    var2 = var10;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=123);
case 77:
                    return var2;
case 2:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                    var4 = _closure1_slot32;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot33;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=149);
case 70:
                    return var4;
case 80:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 81; continue _fun0004 }
case 82: // try_end0
                    _fun0004_ip = 83; continue _fun0004;
case 81: // try_end1
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var7];
                    var12 = var9.bind(var5)(var6);
                    var9 = var12.dispatch;
                    var6 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var6 = var9.bind(var12)(var6);
                    return var4;
case 78:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatch;
                    var4 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var4 = var6.bind(var7)(var4);
                    return var2;
case 84: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var8 = var7;
                    var15 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var4 = var15.bind(var5)(var2);
                    var2 = var4.captureBillingException;
                    var2 = var2.bind(var4)(var7);
                    var4 = _closure1_slot1;
                    var2 = 23;
                    var2 = var6[var2];
                    var9 = var4.bind(var5)(var2);
                    var7 = var9.show;
                    var2 = {};
                    var12 = 24;
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
                    var2 = 22;
                    var2 = var6[var2];
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot13;
                    var4 = var2.GPLAY_PURCHASE_FAILED;
                    var2 = {};
                    var9 = 'executePendingDowngrade';
                    var2['location'] = var9;
                    var9 = var10;
                    var12 = var11 == var9;
                    var9 = undefined;
                    if(var12) { _fun0004_ip = 85; continue _fun0004 }
case 86:
                    var12 = var10;
                    var9 = var12.newSubscriptionSkuId;
case 85:
                    var2['product_id'] = var9;
                    var9 = var10;
                    var11 = var11 == var9;
                    var9 = undefined;
                    if(var11) { _fun0004_ip = 87; continue _fun0004 }
case 88:
                    var9 = var10.purchaseToken;
case 87:
                    var2['purchase_token'] = var9;
                    var8 = var8.message;
                    var2['error'] = var8;
                    var2 = var6.bind(var7)(var4, var2);
case 83: // try_end2
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.dispatch;
                    var2 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var2 = var4.bind(var6)(var2);
case 75:
                    return var5;
case 89: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 74:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function clearPendingDowngrade() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'GPLAY_UPDATE_PENDING_DOWNGRADE', 'pendingDowngrade': null};
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function fetchAndAlertActiveSubscription() {
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
    var1 = function _fetchAndAlertActiveSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 90; continue _fun0005 }
case 91:
                    var8 = undefined;
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var5 = var5.bind(var8)(var2);
                    var2 = var5.fetchSubscriptions;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=55);
case 92:
                    return var2;
case 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 12; continue _fun0005 }
case 69:
                    var6 = _closure1_slot8;
                    var5 = var6.getPremiumTypeSubscription;
                    var6 = var5.bind(var6)();
                    _closure4_slot0 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var8)();
                    var5 = _closure1_slot6;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 26;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 25;
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
                                    var4 = _closure1_slot16;
                                    var3 = _closure7_slot0;
                                    var2 = {};
                                    var8 = var2;
                                    var7 = var5;
                                    var5 = copyDataProperties(var8, var7);
                                    var6 = _closure4_slot0;
                                    var5 = 'subscription';
                                    var2[var5] = var6;
                                    var5 = function onClose() {
                                        var2 = _closure8_slot0;
                                        var1 = var2.onClose;
                                        var1 = var1.bind(var2)();
                                        var4 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var1 = 27;
                                        var3 = var6[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.popWithKey;
                                        var5 = _closure1_slot0;
                                        var2 = 28;
                                        var2 = var6[var2];
                                        var2 = var5.bind(var1)(var2);
                                        var2 = var2.PREMIUM_KEY;
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    };
                                    var1 = 'onClose';
                                    var2[var1] = var5;
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
case 94:
                    var4 = global;
                    var5 = var4.Error;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 24;
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
case 90:
                    return var1;
                }
            };
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
    var1 = function handleAppStateUpdated() {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function _handleAppStateUpdated() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 96; continue _fun0006 }
case 5:
                    var2 = arg1;
                    var6 = var2.state;
                    var3 = undefined;
                    SaveGenerator(address=24);
case 97:
                    return var3;
case 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 99; continue _fun0006 }
case 100:
                    var7 = _closure1_slot9;
                    var5 = var7.isReady;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0006_ip = 101; continue _fun0006 }
case 67:
                    var7 = _closure1_slot7;
                    var5 = var7.isAuthenticated;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0006_ip = 101; continue _fun0006 }
case 102:
                    var5 = _closure1_slot14;
                    var5 = var5.ACTIVE;
                    if(!(var6 === var5)) { _fun0006_ip = 101; continue _fun0006 }
case 103: // try_start_0
                    var6 = _closure1_slot18;
                    var5 = var6.loadPurchases;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=101);
case 104:
                    return var5;
case 105:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 106; continue _fun0006 }
case 107: // try_end0
                    _fun0006_ip = 101; continue _fun0006;
case 106:
                    return var5;
case 108: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot18;
                    var4 = var5.open;
                    var4 = var4.bind(var5)();
case 101:
                    return var3;
case 99:
                    return var2;
case 96:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot36 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var7 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var7);
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.NativeEventEmitter;
    var2 = var2.NativeModules;
    var7 = 3;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.setPaymentSuccess;
    var _closure1_slot5 = var10;
    var7 = var7.showOldPaymentFlowSuccess;
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useGPlayAnalyticsStore;
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.GPlayConnectionState;
    var _closure1_slot11 = var10;
    var7 = var7.GPlayDowngradeCommand;
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot13 = var10;
    var7 = var7.AppStates;
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.SubscriptionPlanInfo;
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot16 = var7;
    var7 = 13;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = var10.prototype;
    var9 = Object.create(var7, {constructor: {value: var10}});
    var13 = 'GPlayManager.android';
    var14 = var9;
    var7 = new var14[var10](var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot17 = var7;
    var2 = var2.BillingManager;
    var _closure1_slot18 = var2;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var14 = var7;
    var13 = var2;
    var2 = new var14[var8](var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot19 = var2;
    var7 = {};
    var _closure1_slot20 = var7;
    var2 = null;
    var _closure1_slot21 = var2;
    var _closure1_slot22 = var2;
    var _closure1_slot23 = var2;
    var _closure1_slot24 = var2;
    var2 = {};
    var2['giftInfoOptionsCache'] = var7;
    var7 = function initialize() {
        var3 = _closure1_slot18;
        var1 = var3.open;
        var1 = var1.bind(var3)();
        var5 = _closure1_slot19;
        var4 = var5.addListener;
        var3 = _closure1_slot25;
        var1 = 'billing-manager-connection-state-updated';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot21 = var1;
        var4 = var5.addListener;
        var3 = _closure1_slot26;
        var1 = 'billing-manager-purchase-state-updated';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot22 = var1;
        var4 = var5.addListener;
        var3 = _closure1_slot27;
        var1 = 'billing-manager-purchase-updated';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot23 = var1;
        var4 = var5.addListener;
        var3 = _closure1_slot29;
        var1 = 'billing-manager-downgrade-command';
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot24 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 14;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.subscribe;
        var3 = _closure1_slot35;
        var2 = 'APP_STATE_UPDATE';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var2['initialize'] = var7;
    var4 = function terminate() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot18;
            var1 = var3.close;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot21;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 109; continue _fun0007 }
case 63:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 109:
            var4 = _closure1_slot22;
            if(!(var1 != var4)) { _fun0007_ip = 93; continue _fun0007 }
case 76:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 93:
            var4 = _closure1_slot23;
            if(!(var1 != var4)) { _fun0007_ip = 110; continue _fun0007 }
case 111:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 110:
            var3 = _closure1_slot24;
            if(!(var1 != var3)) { _fun0007_ip = 112; continue _fun0007 }
case 103:
            var1 = var3.remove;
            var1 = var1.bind(var3)();
case 112:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = _closure1_slot35;
            var2 = 'APP_STATE_UPDATE';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var2['terminate'] = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gplay/native/GPlayManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();