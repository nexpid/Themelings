// app/modules/payments/native/OrderActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _createOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var15 = var2.skuId;
                    var14 = var2.paymentGateway;
                    var16 = var2.recipientUserId;
                    var10 = var2.purchaseType;
                    var12 = var2.isGift;
                    var4 = var2.giftInfo;
                    var6 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=61);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var17 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 3;
                    var13 = var13[var7];
                    var18 = var17.bind(var6)(var13);
                    var17 = var18.dispatch;
                    var13 = {};
                    var19 = 'ORDER_CREATE_START';
                    var13['type'] = var19;
                    var13 = var17.bind(var18)(var13);
case 8: // try_start_0
                    var13 = var12;
                    if(!var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var13 = {};
                    var13['recipient_id'] = var16;
                    var11 = var13;
                    var13 = var4;
                    var16 = null;
                    var17 = var16 == var13;
                    var13 = undefined;
                    if(var17) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var17 = var4;
                    var13 = var17.gift_style;
case 11:
                    if(!(var16 != var13)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var17 = var11;
                    var13 = var4;
                    var13 = var13.gift_style;
                    var17['gift_style'] = var13;
case 13:
                    var13 = var4;
                    var17 = var16 == var13;
                    var13 = undefined;
                    if(var17) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var17 = var4;
                    var13 = var17.emoji_id;
case 15:
                    if(!(var16 != var13)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var17 = var11;
                    var13 = var4;
                    var13 = var13.emoji_id;
                    var17['emoji_id'] = var13;
case 17:
                    var13 = var4;
                    var17 = var16 == var13;
                    var13 = undefined;
                    if(var17) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var17 = var4;
                    var13 = var17.emoji_name;
case 19:
                    if(!(var16 != var13)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var17 = var11;
                    var13 = var4;
                    var13 = var13.emoji_name;
                    var17['emoji_name'] = var13;
case 21:
                    var13 = var4;
                    var17 = var16 == var13;
                    var13 = undefined;
                    if(var17) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var17 = var4;
                    var13 = var17.sound_id;
case 23:
                    if(!(var16 != var13)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var17 = var11;
                    var13 = var4;
                    var13 = var13.sound_id;
                    var17['sound_id'] = var13;
case 25:
                    var13 = var4;
                    var17 = var16 == var13;
                    var13 = undefined;
                    if(var17) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var17 = var4;
                    var13 = var17.reward_sku_ids;
case 27:
                    if(!(var16 != var13)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var17 = var11;
                    var13 = var4;
                    var13 = var13.reward_sku_ids;
                    var17['reward_sku_ids'] = var13;
case 29:
                    var13 = var4;
                    var17 = var16 == var13;
                    var13 = undefined;
                    if(var17) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var17 = var4;
                    var13 = var17.custom_message_contents;
case 31:
                    if(!(var16 != var13)) { _fun0001_ip = 9; continue _fun0001 }
case 33:
                    var13 = var11;
                    var4 = var4.custom_message_contents;
                    var13['custom_message_contents'] = var4;
case 9:
                    var4 = {};
                    var13 = {};
                    var13['sku_id'] = var15;
                    var15 = 1;
                    var13['quantity'] = var15;
                    var13['purchase_type'] = var10;
                    var10 = new Array(1);
                    var10[0] = var13;
                    var4['order_line_items'] = var10;
                    var10 = {};
                    var13 = var14;
                    var10['payment_gateway'] = var13;
                    var4['billing_facet'] = var10;
                    var8 = var4;
                    var4 = var12;
                    if(!var4) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var10 = var8;
                    var4 = {};
                    var4['is_gift'] = var12;
                    var4['gift_customization'] = var11;
                    var10['gifting_facet'] = var4;
case 34:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 4;
                    var4 = var11[var4];
                    var4 = var10.bind(var6)(var4);
                    var11 = var4.HTTP;
                    var10 = var11.post;
                    var4 = {};
                    var12 = _closure1_slot4;
                    var12 = var12.ORDER_CREATE;
                    var4['url'] = var12;
                    var12 = var8;
                    var4['body'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=548);
case 36:
                    return var4;
case 37:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var10 = var4.body;
                    var12 = var10.id;
                    var9 = var12;
                    var13 = _closure1_slot5;
                    var11 = var13.info;
                    var10 = {};
                    var10['orderId'] = var12;
                    var10['paymentGateway'] = var14;
                    var10['body'] = var8;
                    var8 = 'created order';
                    var8 = var11.bind(var13)(var8, var10);
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var11 = var10.bind(var6)(var8);
                    var10 = var11.dispatch;
                    var8 = {};
                    var13 = 'ORDER_CREATE_SUCCESS';
                    var8['type'] = var13;
                    var8['orderId'] = var12;
                    var8 = var10.bind(var11)(var8);
                    SaveGenerator(address=653);
case 40:
                    return var8;
case 41:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 42; continue _fun0001 }
case 43: // try_end0
                    return var9;
case 42:
                    return var8;
case 38:
                    return var4;
case 44: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = var4;
                    var10 = _closure1_slot5;
                    var9 = var10.error;
                    var8 = {};
                    var8['response'] = var4;
                    var4 = 'failed to create order';
                    var4 = var9.bind(var10)(var4, var8);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var7 = 'ORDER_CREATE_FAIL';
                    var3['type'] = var7;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=744);
case 45:
                    return var3;
case 46:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var4 = global;
                    var6 = var4.Error;
                    var7 = var5;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'Failed to create order: ';
                    var21 = var5.bind(var4)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var22 = var5;
                    var4 = new var22[var6](var21, var20);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 47:
                    return var3;
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
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _markOrderAsSigningInProgress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 49; continue _fun0002 }
case 3:
                    var6 = var9;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 3;
                    var2 = var2[var5];
                    var3 = undefined;
                    var8 = var7.bind(var3)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var10 = 'ORDER_MARK_SIGNING_START';
                    var2['type'] = var10;
                    var2['orderId'] = var9;
                    var2 = var7.bind(var8)(var2);
case 50: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 4;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var8 = var2.HTTP;
                    var7 = var8.post;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.ORDER_SIGN;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=138);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                    var11 = _closure1_slot5;
                    var9 = var11.info;
                    var8 = {};
                    var10 = var6;
                    var8['orderId'] = var10;
                    var7 = 'marked order as signing in progress';
                    var7 = var9.bind(var11)(var7, var8);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'ORDER_MARK_SIGNING_SUCCESS';
                    var7['type'] = var11;
                    var7['orderId'] = var10;
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=224);
case 17:
                    return var7;
case 55:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 56; continue _fun0002 }
case 57: // try_end0
                    _fun0002_ip = 58; continue _fun0002;
case 56:
                    return var7;
case 53:
                    return var2;
case 59: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 5;
                    var7 = var2[var7];
                    var12 = var8.bind(var3)(var7);
                    var9 = var12.captureBillingException;
                    var7 = global;
                    var7 = var7.Error;
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var10 = 'failed to mark order as signing in progress';
                    var17 = var8;
                    var16 = var10;
                    var7 = new var17[var7](var16, var15);
                    var8 = var7 instanceof Object ? var7 : var8;
                    var7 = {};
                    var13 = {};
                    var14 = 'OrderActionCreators_markOrderAsSigningInProgress';
                    var13['source'] = var14;
                    var7['tags'] = var13;
                    var13 = {};
                    var13['orderId'] = var6;
                    var13['response'] = var11;
                    var7['extra'] = var13;
                    var7 = var9.bind(var12)(var8, var7);
                    var9 = _closure1_slot5;
                    var8 = var9.error;
                    var7 = {};
                    var7['response'] = var11;
                    var7['orderId'] = var6;
                    var7 = var8.bind(var9)(var10, var7);
                    var4 = _closure1_slot1;
                    var2 = var2[var5];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.dispatch;
                    var2 = {};
                    var7 = 'ORDER_MARK_SIGNING_FAIL';
                    var2['type'] = var7;
                    var2['orderId'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=419);
case 60:
                    return var2;
case 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 62; continue _fun0002 }
case 58:
                    return var3;
case 62:
                    return var2;
case 49:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var7[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var4 = var7[var9];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var8 = 2;
    var4 = var7[var8];
    var11 = var5.bind(var1)(var4);
    var4 = var11.prototype;
    var5 = Object.create(var4, {constructor: {value: var11}});
    var14 = 'OrderActionCreators';
    var15 = var5;
    var4 = new var15[var11](var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot5 = var4;
    var4 = {};
    var4['UNSPECIFIED'] = var10;
    var5 = 'UNSPECIFIED';
    var4[var10] = var5;
    var4['ONE_TIME'] = var9;
    var5 = 'ONE_TIME';
    var4[var9] = var5;
    var4['SUBSCRIPTION'] = var8;
    var5 = 'SUBSCRIPTION';
    var4[var8] = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/payments/native/OrderActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ItemPurchaseType'] = var4;
    var4 = function createOrder() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createOrder'] = var4;
    var2 = function markOrderAsSigningInProgress() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markOrderAsSigningInProgress'] = var2;
    return var1;
})();