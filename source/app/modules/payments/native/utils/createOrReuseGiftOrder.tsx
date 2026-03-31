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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/native/utils/createOrReuseGiftOrder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreateOrReuseGiftOrder(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var4 = var2.planId;
                        var10 = var2.recipientUserId;
                        var7 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        SaveGenerator(address=35);
case 4:
                        return var7;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var9 = _closure1_slot6;
                        var8 = var4;
                        var9 = var9[var8];
                        var3 = var9;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var6 = var3.skuId;
case 10: // try_start_0
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var14 = 6;
                        var3 = var13[var14];
                        var9 = var12.bind(var7)(var3);
                        var8 = var9.getOrCreateOrder;
                        var3 = {};
                        var11 = var6;
                        var3['skuId'] = var11;
                        var11 = 7;
                        var11 = var13[var11];
                        var12 = var12.bind(var7)(var11);
                        var11 = var12.isAndroid;
                        var11 = var11.bind(var12)();
                        var12 = _closure1_slot7;
                        if(var11) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                        var11 = var12.APPLE;
                        _fun0001_ip = 13; continue _fun0001;
case 11:
                        var11 = var12.GOOGLE;
case 13:
                        var3['paymentGateway'] = var11;
                        var3['recipientUserId'] = var10;
                        var10 = _closure1_slot5;
                        var10 = var10.ONE_TIME;
                        var3['purchaseType'] = var10;
                        var10 = true;
                        var3['isGift'] = var10;
                        var12 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var11 = 8;
                        var11 = var10[var11];
                        var11 = var12.bind(var7)(var11);
                        var12 = var11.bind(var7)();
                        var11 = var12.utc;
                        var13 = var11.bind(var12)();
                        var12 = var13.subtract;
                        var11 = _closure1_slot0;
                        var10 = var10[var14];
                        var10 = var11.bind(var7)(var10);
                        var11 = var10.DRAFT_ORDER_LOOKBACK_DAYS;
                        var10 = 'days';
                        var11 = var12.bind(var13)(var11, var10);
                        var10 = var11.toISOString;
                        var10 = var10.bind(var11)();
                        var3['createdAfter'] = var10;
                        var10 = var4;
                        var3['subscriptionPlanId'] = var10;
                        var3 = var8.bind(var9)(var3);
                        SaveGenerator(address=288);
case 14:
                        return var3;
case 15:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17: // try_end0
                        return var3;
case 16:
                        return var3;
case 18: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var11 = _closure1_slot8;
                        var10 = var11.error;
                        var8 = {};
                        var8['error'] = var3;
                        var9 = var6;
                        var8['skuId'] = var9;
                        var12 = _closure2_slot0;
                        var8['location'] = var12;
                        var6 = 'Failed to create order for gift purchase';
                        var6 = var10.bind(var11)(var6, var8);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 9;
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
                        var16 = var4.bind(var3)(var6);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var17 = var4;
                        var3 = new var17[var5](var16, var15);
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
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCreateOrReuseGiftOrder'] = var2;
    return var1;
})();