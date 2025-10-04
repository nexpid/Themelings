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
            var3 = _closure1_slot12;
            var3 = var3.CONNECTED;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.loadSkus;
            var2 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function handlePurchaseStateUpdated(arg1) {
        var1 = arg1;
        var5 = var1.billingResult;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
        var2['type'] = var6;
        var2['billingResult'] = var5;
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
                    var15 = undefined;
                    var4 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=37);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var9 = _closure1_slot10;
                    var7 = var9.isPurchasingProduct;
                    var6 = var8;
                    var6 = var6.productId;
                    var6 = var7.bind(var9)(var6);
                    if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = _closure1_slot11;
                    var6 = var7.getState;
                    var6 = var6.bind(var7)();
                    var9 = var6.analyticsByProductId;
                    var7 = var8;
                    var6 = var7.productId;
                    var12 = var9[var6];
                    var9 = _closure1_slot20;
                    var6 = var7.productId;
                    var6 = var9[var6];
                    var10 = var6;
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 16;
                    var9 = var14[var9];
                    var11 = var11.bind(var3)(var9);
                    var9 = var11.v3;
                    var7 = var7.purchaseToken;
                    var15 = var9.bind(var11)(var7);
                    var7 = null;
                    if(!(var7 == var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var11 = _closure1_slot4;
                    var9 = var11.getGiftOptionsForKey;
                    var6 = var15;
                    var10 = var9.bind(var11)(var6);
                    _fun0002_ip = 14; continue _fun0002;
case 12:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 14;
                    var6 = var11[var6];
                    var11 = var9.bind(var3)(var6);
                    var9 = var11.dispatch;
                    var6 = {};
                    var14 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var6['type'] = var14;
                    var14 = var15;
                    var6['key'] = var14;
                    var14 = {};
                    var20 = var10;
                    var21 = var14;
                    var17 = copyDataProperties(var21, var20);
                    var6['giftOptions'] = var14;
                    var6 = var9.bind(var11)(var6);
case 14:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 17;
                    var6 = var11[var6];
                    var11 = var9.bind(var3)(var6);
                    var9 = var11.getConfig;
                    var6 = {};
                    var14 = 'GPlayManager.handlePurchaseUpdated';
                    var6['location'] = var14;
                    var6 = var9.bind(var11)(var6);
                    var4 = var6.enabled;
case 15: // try_start_1 // try_start_4
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var9 = 14;
                    var6 = var6[var9];
                    var14 = var11.bind(var3)(var6);
                    var11 = var14.dispatch;
                    var6 = {};
                    var17 = 'GPLAY_VERIFICATION_START';
                    var6['type'] = var17;
                    var17 = var8;
                    var17 = var17.productId;
                    var6['productId'] = var17;
                    var6 = var11.bind(var14)(var6);
                    if(!var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var6 = _closure1_slot5;
                    var4 = var6.shouldSignOrder;
                    var4 = var4.bind(var6)();
                    var16 = var4;
                    if(!(var7 != var4)) { _fun0002_ip = 16; continue _fun0002 }
case 18: // try_start_0
                    var11 = _closure1_slot5;
                    var6 = var11.startOrderSigningSafely;
                    var4 = var16;
                    var4 = var6.bind(var11)(var4);
                    SaveGenerator(address=414);
case 19:
                    return var4;
case 20:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 21; continue _fun0002 }
case 22: // try_end0
                    _fun0002_ip = 16; continue _fun0002;
case 21: // try_end1 // try_end4
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var14 = var11.bind(var3)(var6);
                    var11 = var14.dispatch;
                    var6 = {};
                    var17 = 'GPLAY_VERIFICATION_END';
                    var6['type'] = var17;
                    var17 = var8;
                    var17 = var17.productId;
                    var6['productId'] = var17;
                    var6 = var11.bind(var14)(var6);
                    return var4;
case 23: // try_start_2 // try_start_5 // catch_target0
                    CatchBlockStart(arg_register=13);
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 18;
                    var4 = var11[var4];
                    var11 = var6.bind(var3)(var4);
                    var6 = var11.captureBillingException;
                    var4 = {};
                    var17 = {};
                    var18 = 'GPlayManager_handlePurchaseUpdated_sign';
                    var17['source'] = var18;
                    var4['tags'] = var17;
                    var17 = {};
                    var17['orderId'] = var16;
                    var18 = var8;
                    var18 = var18.productId;
                    var17['productId'] = var18;
                    var4['extra'] = var17;
                    var4 = var6.bind(var11)(var14, var4);
                    var11 = _closure1_slot17;
                    var6 = var11.error;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var14 = var4.concat;
                    var4 = '[handlePurchaseUpdated] Failed to start order signing: ';
                    var4 = var14.bind(var4)(var16);
                    var4 = var6.bind(var11)(var4);
case 16:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var14 = 15;
                    var4 = var4[var14];
                    var16 = var6.bind(var3)(var4);
                    var11 = var16.verifyPurchase;
                    var6 = var8;
                    var4 = var10;
                    var4 = var11.bind(var16)(var6, var4);
                    SaveGenerator(address=640);
case 24:
                    return var4;
case 25:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var13 = var4;
                    var11 = var7 != var4;
                    var6 = var11;
                    if(!var11) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var6 = var7 != var10;
case 28:
                    if(!var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var10 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var11 = var10.bind(var3)(var6);
                    var10 = var11.dispatch;
                    var6 = {};
                    var16 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var6['type'] = var16;
                    var6['key'] = var15;
                    var6 = var10.bind(var11)(var6);
                    var10 = _closure1_slot20;
                    var6 = var8;
                    var6 = var6.productId;
                    var6 = delete var10[var6];
case 30:
                    var6 = var13;
                    if(!(var7 != var6)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 19;
                    var6 = var11[var6];
                    var6 = var10.bind(var3)(var6);
                    var11 = var6.SubscriptionProductIds;
                    var10 = var11.includes;
                    var6 = var8;
                    var6 = var6.productId;
                    var6 = var10.bind(var11)(var6);
                    if(var6) { _fun0002_ip = 32; continue _fun0002 }
case 34:
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
                    _fun0002_ip = 35; continue _fun0002;
case 32:
                    var6 = var13;
                    if(!(var7 != var6)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var6 = var13;
                    var6 = var6.pendingDowngrade;
                    if(!(var7 == var6)) { _fun0002_ip = 38; continue _fun0002 }
case 36:
                    var6 = _closure1_slot33;
                    var6 = var6.bind(var3)();
                    SaveGenerator(address=949);
case 39:
                    return var6;
case 40:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!var7) { _fun0002_ip = 35; continue _fun0002 }
case 41: // try_end2 // try_end5
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
case 38: // try_start_3 // try_start_6
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
                    var6 = 20;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.fetchSubscriptions;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=1094);
case 42:
                    return var6;
case 43:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 44; continue _fun0002 }
case 35: // try_end3
                    _fun0002_ip = 45; continue _fun0002;
case 44: // try_end6
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
case 26:
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
case 46: // try_start_7 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=9);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 18;
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
                    var4 = 21;
                    var4 = var7[var4];
                    var9 = var6.bind(var3)(var4);
                    var7 = var9.track;
                    var4 = _closure1_slot14;
                    var6 = var4.GPLAY_PURCHASE_FAILED;
                    var4 = {};
                    var20 = var12;
                    var21 = var4;
                    var12 = copyDataProperties(var21, var20);
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
case 45: // try_end7
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
case 47: // catch_target4 // catch_target5 // catch_target6 // catch_target7
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
                    if(var2) { _fun0003_ip = 48; continue _fun0003 }
case 5:
                    var2 = arg1;
                    var8 = var2.downgradeCommand;
                    var4 = undefined;
                    SaveGenerator(address=27);
case 49:
                    return var4;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var5 = _closure1_slot13;
                    var5 = var5.EXECUTE;
                    if(!(var5 !== var8)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var5 = _closure1_slot13;
                    var5 = var5.CLEAR;
                    if(!(var5 !== var8)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
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
case 55:
                    var3 = _closure1_slot32;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 57; continue _fun0003;
case 53:
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
case 58:
                    return var3;
case 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 60; continue _fun0003 }
case 57:
                    return var4;
case 60:
                    return var3;
case 51:
                    return var2;
case 48:
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
                    if(var2) { _fun0004_ip = 61; continue _fun0004 }
case 5:
                    var5 = undefined;
                    var10 = undefined;
                    var4 = _closure1_slot10;
                    var2 = var4.getPendingDowngrade;
                    var2 = var2.bind(var4)();
                    var10 = var2;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0004_ip = 62; continue _fun0004 }
case 63: // try_start_0 // try_start_1
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
case 64:
                    return var2;
case 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                    var4 = _closure1_slot32;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot33;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=149);
case 57:
                    return var4;
case 68:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 69; continue _fun0004 }
case 70: // try_end0
                    _fun0004_ip = 71; continue _fun0004;
case 69: // try_end1
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var7];
                    var12 = var9.bind(var5)(var6);
                    var9 = var12.dispatch;
                    var6 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var6 = var9.bind(var12)(var6);
                    return var4;
case 66:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatch;
                    var4 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var4 = var6.bind(var7)(var4);
                    return var2;
case 72: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var8 = var7;
                    var15 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 18;
                    var2 = var6[var2];
                    var4 = var15.bind(var5)(var2);
                    var2 = var4.captureBillingException;
                    var2 = var2.bind(var4)(var7);
                    var4 = _closure1_slot1;
                    var2 = 22;
                    var2 = var6[var2];
                    var9 = var4.bind(var5)(var2);
                    var7 = var9.show;
                    var2 = {};
                    var12 = 23;
                    var13 = var6[var12];
                    var13 = var15.bind(var5)(var13);
                    var16 = var13.intl;
                    var14 = var16.string;
                    var13 = var6[var12];
                    var13 = var15.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.U+H+kZ;
                    var13 = var14.bind(var16)(var13);
                    var2['title'] = var13;
                    var13 = var6[var12];
                    var13 = var15.bind(var5)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var6[var12];
                    var12 = var15.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.LFFx5O;
                    var12 = var13.bind(var14)(var12);
                    var2['body'] = var12;
                    var2 = var7.bind(var9)(var2);
                    var2 = 21;
                    var2 = var6[var2];
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot14;
                    var4 = var2.GPLAY_PURCHASE_FAILED;
                    var2 = {};
                    var9 = 'executePendingDowngrade';
                    var2['location'] = var9;
                    var9 = var10;
                    var12 = var11 == var9;
                    var9 = undefined;
                    if(var12) { _fun0004_ip = 73; continue _fun0004 }
case 74:
                    var12 = var10;
                    var9 = var12.newSubscriptionSkuId;
case 73:
                    var2['product_id'] = var9;
                    var9 = var10;
                    var11 = var11 == var9;
                    var9 = undefined;
                    if(var11) { _fun0004_ip = 75; continue _fun0004 }
case 76:
                    var9 = var10.purchaseToken;
case 75:
                    var2['purchase_token'] = var9;
                    var8 = var8.message;
                    var2['error'] = var8;
                    var2 = var6.bind(var7)(var4, var2);
case 71: // try_end2
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.dispatch;
                    var2 = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    var2 = var4.bind(var6)(var2);
case 62:
                    return var5;
case 77: // catch_target1 // catch_target2
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
case 61:
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
                    if(var2) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                    var8 = undefined;
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var5 = var5.bind(var8)(var2);
                    var2 = var5.fetchSubscriptions;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=55);
case 80:
                    return var2;
case 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 82; continue _fun0005 }
case 56:
                    var6 = _closure1_slot9;
                    var5 = var6.getPremiumTypeSubscription;
                    var6 = var5.bind(var6)();
                    _closure4_slot0 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var8)();
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 25;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 24;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure7_slot0 = var2;
                                var1 = function(arg1) {
                                    var4 = _closure1_slot16;
                                    var3 = _closure7_slot0;
                                    var2 = {};
                                    var6 = arg1;
                                    var7 = var2;
                                    var1 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot0;
                                    var1 = 'subscription';
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
case 83:
                    var4 = global;
                    var5 = var4.Error;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 23;
                    var4 = var9[var3];
                    var4 = var7.bind(var8)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.PjfUXV;
                    var10 = var4.bind(var6)(var3);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var11 = var4;
                    var3 = new var11[var5](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 82:
                    return var2;
case 78:
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
                    if(var2) { _fun0006_ip = 85; continue _fun0006 }
case 5:
                    var2 = arg1;
                    var6 = var2.state;
                    var3 = undefined;
                    SaveGenerator(address=24);
case 86:
                    return var3;
case 87:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 88; continue _fun0006 }
case 89:
                    var7 = _closure1_slot10;
                    var5 = var7.isReady;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0006_ip = 90; continue _fun0006 }
case 54:
                    var7 = _closure1_slot8;
                    var5 = var7.isAuthenticated;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0006_ip = 90; continue _fun0006 }
case 91:
                    var5 = _closure1_slot15;
                    var5 = var5.ACTIVE;
                    if(!(var6 === var5)) { _fun0006_ip = 90; continue _fun0006 }
case 92: // try_start_0
                    var6 = _closure1_slot18;
                    var5 = var6.loadPurchases;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=101);
case 93:
                    return var5;
case 94:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 95; continue _fun0006 }
case 96: // try_end0
                    _fun0006_ip = 90; continue _fun0006;
case 95:
                    return var5;
case 97: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot18;
                    var4 = var5.open;
                    var4 = var4.bind(var5)();
case 90:
                    return var3;
case 88:
                    return var2;
case 85:
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
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.setPaymentSuccess;
    var _closure1_slot6 = var10;
    var7 = var7.showOldPaymentFlowSuccess;
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
    var7 = var9.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useGPlayAnalyticsStore;
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.GPlayConnectionState;
    var _closure1_slot12 = var10;
    var7 = var7.GPlayDowngradeCommand;
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot14 = var10;
    var7 = var7.AppStates;
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
            if(!(var1 != var4)) { _fun0007_ip = 7; continue _fun0007 }
case 50:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 7:
            var4 = _closure1_slot22;
            if(!(var1 != var4)) { _fun0007_ip = 81; continue _fun0007 }
case 63:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 81:
            var4 = _closure1_slot23;
            if(!(var1 != var4)) { _fun0007_ip = 98; continue _fun0007 }
case 99:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 98:
            var3 = _closure1_slot24;
            if(!(var1 != var3)) { _fun0007_ip = 100; continue _fun0007 }
case 92:
            var1 = var3.remove;
            var1 = var1.bind(var3)();
case 100:
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gplay/native/GPlayManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();