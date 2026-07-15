// app/modules/payments/native/utils/createOrReuseGiftOrder.tsx
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
    var4 = var4.ItemPurchaseType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionPlanInfo;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'createOrReuseGiftOrder';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/native/utils/createOrReuseGiftOrder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreateOrReuseGiftOrder(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var4 = var4[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var4);
        var5 = var7.useAndroidShopOrdersEnabled;
        var4 = {};
        var4['location'] = var6;
        var5 = var5.bind(var7)(var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var4 = var2.planId;
                        var12 = var2.recipientUserId;
                        var10 = var2.productId;
                        var7 = undefined;
                        var9 = undefined;
                        var11 = undefined;
                        SaveGenerator(address=41);
case 4:
                        return var7;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var6 = _closure1_slot6;
                        var3 = var4;
                        var3 = var6[var3];
                        var6 = null;
                        if(!(var6 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var9 = var3.skuId;
                        var8 = _closure2_slot1;
                        var3 = undefined;
                        if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                        var8 = {};
                        var13 = {};
                        var13['external_product_id'] = var10;
                        var10 = new Array(1);
                        var10[0] = var13;
                        var8['line_items'] = var10;
                        var3 = var8;
case 10:
                        var11 = var3;
case 12: // try_start_0
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var16 = 7;
                        var3 = var15[var16];
                        var10 = var14.bind(var7)(var3);
                        var8 = var10.getOrCreateOrder;
                        var3 = {};
                        var13 = var9;
                        var3['skuId'] = var13;
                        var13 = 8;
                        var13 = var15[var13];
                        var14 = var14.bind(var7)(var13);
                        var13 = var14.isAndroid;
                        var13 = var13.bind(var14)();
                        var14 = _closure1_slot7;
                        if(var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                        var13 = var14.APPLE;
                        _fun0001_ip = 15; continue _fun0001;
case 13:
                        var13 = var14.GOOGLE;
case 15:
                        var3['paymentGateway'] = var13;
                        var3['recipientUserId'] = var12;
                        var12 = _closure1_slot5;
                        var12 = var12.ONE_TIME;
                        var3['purchaseType'] = var12;
                        var12 = true;
                        var3['isGift'] = var12;
                        var14 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var13 = 9;
                        var13 = var12[var13];
                        var13 = var14.bind(var7)(var13);
                        var14 = var13.bind(var7)();
                        var13 = var14.utc;
                        var15 = var13.bind(var14)();
                        var14 = var15.subtract;
                        var13 = _closure1_slot0;
                        var12 = var12[var16];
                        var12 = var13.bind(var7)(var12);
                        var13 = var12.DRAFT_ORDER_LOOKBACK_DAYS;
                        var12 = 'days';
                        var13 = var14.bind(var15)(var13, var12);
                        var12 = var13.toISOString;
                        var12 = var12.bind(var13)();
                        var3['createdAfter'] = var12;
                        var12 = var4;
                        var3['subscriptionPlanId'] = var12;
                        var3['externalGatewayFacet'] = var11;
                        var3 = var8.bind(var10)(var3);
                        SaveGenerator(address=334);
case 16:
                        return var3;
case 17:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0001_ip = 18; continue _fun0001 }
case 19: // try_end0
                        return var3;
case 18:
                        return var3;
case 20: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var11 = _closure1_slot8;
                        var10 = var11.error;
                        var8 = {};
                        var8['error'] = var3;
                        var8['skuId'] = var9;
                        var12 = _closure2_slot0;
                        var8['location'] = var12;
                        var6 = 'Failed to create order for gift purchase';
                        var6 = var10.bind(var11)(var6, var8);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 10;
                        var5 = var8[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.captureBillingException;
                        var5 = {};
                        var8 = {};
                        var8['skuId'] = var9;
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var11 = var9.concat;
                        var10 = '';
                        var9 = '_createOrder';
                        var9 = var11.bind(var10)(var12, var9);
                        var8['source'] = var9;
                        var5['tags'] = var8;
                        var5 = var6.bind(var7)(var3, var5);
                        throw var3;
case 8:
                        var3 = global;
                        var5 = var3.Error;
                        var6 = var4;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'Invalid plan id: ';
                        var18 = var4.bind(var3)(var6);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var19 = var4;
                        var3 = new var19[var5](var18, var17);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
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
        var2 = var1.bind(var2)();
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCreateOrReuseGiftOrder'] = var2;
    return var1;
})();