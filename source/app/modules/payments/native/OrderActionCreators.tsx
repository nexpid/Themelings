// app/modules/payments/native/OrderActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var12;
    var6 = function getOrder() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var6;
    var1 = function _getOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg1;
case 4: // try_start_0
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot4;
                    var8 = var9.ORDER_GET;
                    var7 = var3;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=87);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var5 = var2.body;
                    var4 = var5;
                    if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var4 = null;
case 9: // try_end0
                    return var4;
case 7:
                    return var2;
case 11: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var8 = _closure1_slot5;
                    var6 = var8.error;
                    var4 = {};
                    var4['error'] = var5;
                    var7 = var3;
                    var4['orderId'] = var7;
                    var3 = 'failed to fetch order';
                    var3 = var6.bind(var8)(var3, var4);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureBillingException;
                    var2 = {};
                    var6 = {};
                    var8 = 'OrderActionCreators_getOrder';
                    var6['source'] = var8;
                    var2['tags'] = var6;
                    var6 = {};
                    var6['orderId'] = var7;
                    var2['extra'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
                    var2 = null;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var5 = function getOrders() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var5;
    var1 = function _getOrders() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 3:
                    var4 = arg1;
                    var5 = undefined;
                    var8 = undefined;
case 13: // try_start_0
                    var8 = {};
                    var2 = var4;
                    var3 = null;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var6 = var4;
                    var2 = var6.status;
case 14:
                    if(!(var3 != var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var6 = var8;
                    var2 = var4;
                    var7 = var2.status;
                    var2 = new Array(1);
                    var2[0] = var7;
                    var6['statuses'] = var2;
case 16:
                    var2 = var4;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = var4;
                    var2 = var6.skuId;
case 18:
                    if(!(var3 != var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var6 = var8;
                    var2 = var4;
                    var2 = var2.skuId;
                    var6['sku_id'] = var2;
case 20:
                    var2 = var4;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var6 = var4;
                    var2 = var6.createdAfter;
case 22:
                    if(!(var3 != var2)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var3 = var8;
                    var2 = var4;
                    var2 = var2.createdAfter;
                    var3['created_after'] = var2;
case 24:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.get;
                    var2 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.ORDER_LIST;
                    var2['url'] = var9;
                    var2['query'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=225);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var6 = var2.body;
                    var3 = var6;
                    if(var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var3 = new Array(0);
case 30: // try_end0
                    return var3;
case 28:
                    return var2;
case 32: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var9 = _closure1_slot5;
                    var8 = var9.error;
                    var6 = {};
                    var6['error'] = var2;
                    var7 = var4;
                    var6['options'] = var7;
                    var4 = 'failed to fetch orders';
                    var4 = var8.bind(var9)(var4, var6);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.captureBillingException;
                    var3 = {};
                    var6 = {};
                    var8 = 'OrderActionCreators_getOrders';
                    var6['source'] = var8;
                    var3['tags'] = var6;
                    var6 = {};
                    var6['options'] = var7;
                    var3['extra'] = var6;
                    var3 = var4.bind(var5)(var2, var3);
                    throw var2;
case 12:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function createOrder() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = function _createOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 33; continue _fun0003 }
case 4:
                    var16 = var2.skuId;
                    var14 = var2.paymentGateway;
                    var18 = var2.recipientUserId;
                    var15 = var2.purchaseType;
                    var12 = var2.isGift;
                    var13 = var2.giftInfo;
                    var4 = var2.subscriptionPlanId;
                    var6 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=68);
case 34:
                    return var6;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var19 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var7 = 5;
                    var17 = var17[var7];
                    var20 = var19.bind(var6)(var17);
                    var19 = var20.dispatch;
                    var17 = {};
                    var21 = 'ORDER_CREATE_START';
                    var17['type'] = var21;
                    var17 = var19.bind(var20)(var17);
case 38: // try_start_0
                    var17 = var12;
                    if(!var17) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var17 = {};
                    var17['recipient_id'] = var18;
                    var11 = var17;
                    var17 = var13;
                    var18 = null;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var19 = var13;
                    var17 = var19.gift_style;
case 41:
                    if(!(var18 != var17)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var19 = var11;
                    var17 = var13;
                    var17 = var17.gift_style;
                    var19['gift_style'] = var17;
case 43:
                    var17 = var13;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    var19 = var13;
                    var17 = var19.emoji_id;
case 45:
                    if(!(var18 != var17)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var19 = var11;
                    var17 = var13;
                    var17 = var17.emoji_id;
                    var19['emoji_id'] = var17;
case 47:
                    var17 = var13;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var19 = var13;
                    var17 = var19.emoji_name;
case 49:
                    if(!(var18 != var17)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var19 = var11;
                    var17 = var13;
                    var17 = var17.emoji_name;
                    var19['emoji_name'] = var17;
case 51:
                    var17 = var13;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var19 = var13;
                    var17 = var19.sound_id;
case 53:
                    if(!(var18 != var17)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    var19 = var11;
                    var17 = var13;
                    var17 = var17.sound_id;
                    var19['sound_id'] = var17;
case 55:
                    var17 = var13;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var19 = var13;
                    var17 = var19.reward_sku_ids;
case 57:
                    if(!(var18 != var17)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var19 = var11;
                    var17 = var13;
                    var17 = var17.reward_sku_ids;
                    var19['reward_sku_ids'] = var17;
case 59:
                    var17 = var13;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                    var19 = var13;
                    var17 = var19.custom_message_contents;
case 61:
                    if(!(var18 != var17)) { _fun0003_ip = 39; continue _fun0003 }
case 63:
                    var17 = var11;
                    var13 = var13.custom_message_contents;
                    var17['custom_message_contents'] = var13;
case 39:
                    var13 = {};
                    var13['sku_id'] = var16;
                    var16 = 1;
                    var13['quantity'] = var16;
                    var13['purchase_type'] = var15;
                    var10 = var13;
                    var15 = var4;
                    var13 = null;
                    if(!(var13 != var15)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var13 = var10;
                    var13['subscription_plan_id'] = var4;
case 64:
                    var4 = {};
                    var13 = var10;
                    var10 = new Array(1);
                    var10[0] = var13;
                    var4['order_line_items'] = var10;
                    var10 = {};
                    var13 = var14;
                    var10['payment_gateway'] = var13;
                    var4['billing_facet'] = var10;
                    var8 = var4;
                    var4 = var12;
                    if(!var4) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                    var10 = var8;
                    var4 = {};
                    var4['is_gift'] = var12;
                    var4['gift_customization'] = var11;
                    var10['gifting_facet'] = var4;
case 66:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 3;
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
                    SaveGenerator(address=571);
case 68:
                    return var4;
case 69:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                    var12 = var4.body;
                    var9 = var12;
                    var13 = _closure1_slot5;
                    var11 = var13.info;
                    var10 = {};
                    var15 = var12.id;
                    var10['orderId'] = var15;
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
                    var13 = var12.id;
                    var8['orderId'] = var13;
                    var8['order'] = var12;
                    var8 = var10.bind(var11)(var8);
                    SaveGenerator(address=686);
case 72:
                    return var8;
case 73:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0003_ip = 74; continue _fun0003 }
case 75: // try_end0
                    return var9;
case 74:
                    return var8;
case 70:
                    return var4;
case 76: // catch_target0
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
                    SaveGenerator(address=777);
case 77:
                    return var3;
case 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                    var4 = global;
                    var6 = var4.Error;
                    var7 = var5;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'Failed to create order: ';
                    var23 = var5.bind(var4)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var24 = var5;
                    var4 = new var24[var6](var23, var22);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 79:
                    return var3;
case 36:
                    return var2;
case 33:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _getOrCreateOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 81; continue _fun0004 }
case 4:
                    var9 = var2.skuId;
                    var15 = var2.paymentGateway;
                    var14 = var2.recipientUserId;
                    var13 = var2.purchaseType;
                    var5 = var2.isGift;
                    var12 = var2.giftInfo;
                    var7 = var2.createdAfter;
                    var11 = var2.subscriptionPlanId;
                    var10 = undefined;
                    SaveGenerator(address=66);
case 82:
                    return var10;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 49; continue _fun0004 }
case 83:
                    var4 = _closure1_slot10;
                    var3 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.DRAFT;
                    var3['status'] = var8;
                    var3['skuId'] = var9;
                    var3['createdAfter'] = var7;
                    var3 = var4.bind(var10)(var3);
                    SaveGenerator(address=116);
case 84:
                    return var3;
case 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 86; continue _fun0004 }
case 87:
                    var7 = var3.length;
                    var4 = 0;
                    if(!(!(var7 > var4))) { _fun0004_ip = 88; continue _fun0004 }
case 25:
                    var8 = _closure1_slot12;
                    var7 = {};
                    var7['skuId'] = var9;
                    var7['paymentGateway'] = var15;
                    var7['recipientUserId'] = var14;
                    var7['purchaseType'] = var13;
                    var7['isGift'] = var5;
                    var7['giftInfo'] = var12;
                    var7['subscriptionPlanId'] = var11;
                    var7 = var8.bind(var10)(var7);
                    SaveGenerator(address=185);
case 89:
                    return var7;
case 90:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                    return var7;
case 91:
                    return var7;
case 88:
                    var4 = var3[var4];
                    var8 = _closure1_slot5;
                    var7 = var8.info;
                    var6 = {};
                    var10 = var4.id;
                    var6['orderId'] = var10;
                    var6['skuId'] = var9;
                    var6['isGift'] = var5;
                    var5 = 'reusing existing draft order';
                    var5 = var7.bind(var8)(var5, var6);
                    return var4;
case 86:
                    return var3;
case 49:
                    return var2;
case 81:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _patchOrderLineItem() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 93; continue _fun0005 }
case 4:
                    var12 = var2.orderId;
                    var8 = var2.orderLineItemId;
                    var15 = var2.subscriptionPlanId;
                    var3 = var2.expectedRevision;
                    var6 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=47);
case 17:
                    return var6;
case 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 5;
                    var11 = var11[var7];
                    var14 = var13.bind(var6)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var16 = 'ORDER_UPDATE_START';
                    var11['type'] = var16;
                    var11 = var13.bind(var14)(var11);
case 97: // try_start_0
                    var14 = {};
                    var14['expected_revision'] = var3;
                    var3 = var15;
                    var14['subscription_plan_id'] = var3;
                    var9 = var14;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 3;
                    var3 = var13[var3];
                    var3 = var11.bind(var6)(var3);
                    var13 = var3.HTTP;
                    var11 = var13.patch;
                    var3 = {};
                    var19 = _closure1_slot4;
                    var18 = var19.ORDER_PATCH_LINE_ITEM;
                    var17 = var12;
                    var16 = var8;
                    var16 = var18.bind(var19)(var17, var16);
                    var3['url'] = var16;
                    var3['body'] = var14;
                    var14 = true;
                    var3['rejectWithError'] = var14;
                    var3 = var11.bind(var13)(var3);
                    SaveGenerator(address=197);
case 98:
                    return var3;
case 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                    var10 = var3;
                    var16 = _closure1_slot5;
                    var13 = var16.info;
                    var11 = {};
                    var14 = var12;
                    var11['orderId'] = var14;
                    var17 = var8;
                    var11['orderLineItemId'] = var17;
                    var11['body'] = var9;
                    var9 = 'updated order line item';
                    var9 = var13.bind(var16)(var9, var11);
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var7];
                    var13 = var11.bind(var6)(var9);
                    var11 = var13.dispatch;
                    var9 = {};
                    var16 = 'ORDER_UPDATE_SUCCESS';
                    var9['type'] = var16;
                    var9['orderId'] = var14;
                    var9 = var11.bind(var13)(var9);
                    SaveGenerator(address=298);
case 101:
                    return var9;
case 102:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0005_ip = 103; continue _fun0005 }
case 104:
                    var10 = var10.body;
                    var10 = var10.revision;
case 55: // try_end0
                    return var10;
case 103:
                    return var9;
case 99:
                    return var3;
case 105: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var4 = var13;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 4;
                    var9 = var3[var9];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.captureBillingException;
                    var9 = {};
                    var14 = {};
                    var16 = 'OrderActionCreators_patchOrderLineItem';
                    var14['source'] = var16;
                    var9['tags'] = var14;
                    var14 = {};
                    var14['orderId'] = var12;
                    var14['orderLineItemId'] = var8;
                    var14['subscriptionPlanId'] = var15;
                    var9['extra'] = var14;
                    var9 = var10.bind(var11)(var13, var9);
                    var11 = _closure1_slot5;
                    var10 = var11.error;
                    var9 = {};
                    var9['error'] = var13;
                    var9['orderId'] = var12;
                    var9['orderLineItemId'] = var8;
                    var8 = 'failed to update order line item id';
                    var8 = var10.bind(var11)(var8, var9);
                    var5 = _closure1_slot1;
                    var3 = var3[var7];
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var7 = 'ORDER_UPDATE_FAIL';
                    var3['type'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=478);
case 106:
                    return var3;
case 107:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 108; continue _fun0005 }
case 109:
                    throw var4;
case 108:
                    return var3;
case 95:
                    return var2;
case 93:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _updateOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 110; continue _fun0006 }
case 4:
                    var8 = var2.orderId;
                    var14 = var2.giftInfo;
                    var11 = var2.expectedRevision;
                    var6 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=43);
case 14:
                    return var6;
case 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 112; continue _fun0006 }
case 113:
                    var13 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 5;
                    var3 = var3[var7];
                    var15 = var13.bind(var6)(var3);
                    var13 = var15.dispatch;
                    var3 = {};
                    var16 = 'ORDER_UPDATE_START';
                    var3['type'] = var16;
                    var3 = var13.bind(var15)(var3);
case 114: // try_start_0
                    var3 = {};
                    var3['expected_revision'] = var11;
                    var9 = var3;
                    var3 = var14;
                    var11 = null;
                    if(!(var11 != var3)) { _fun0006_ip = 115; continue _fun0006 }
case 116:
                    var12 = {};
                    var3 = var14;
                    var3 = var3.recipient_id;
                    if(!(var11 != var3)) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.recipient_id;
                    var13['recipient_id'] = var3;
case 117:
                    var3 = var14;
                    var3 = var3.gift_style;
                    if(!(var11 != var3)) { _fun0006_ip = 89; continue _fun0006 }
case 119:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.gift_style;
                    var13['gift_style'] = var3;
case 89:
                    var3 = var14;
                    var3 = var3.emoji_id;
                    if(!(var11 != var3)) { _fun0006_ip = 120; continue _fun0006 }
case 121:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.emoji_id;
                    var13['emoji_id'] = var3;
case 120:
                    var3 = var14;
                    var3 = var3.emoji_name;
                    if(!(var11 != var3)) { _fun0006_ip = 122; continue _fun0006 }
case 123:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.emoji_name;
                    var13['emoji_name'] = var3;
case 122:
                    var3 = var14;
                    var3 = var3.sound_id;
                    if(!(var11 != var3)) { _fun0006_ip = 124; continue _fun0006 }
case 125:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.sound_id;
                    var13['sound_id'] = var3;
case 124:
                    var3 = var14;
                    var3 = var3.reward_sku_ids;
                    if(!(var11 != var3)) { _fun0006_ip = 126; continue _fun0006 }
case 127:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.reward_sku_ids;
                    var13['reward_sku_ids'] = var3;
case 126:
                    var3 = var14;
                    var3 = var3.custom_message_contents;
                    if(!(var11 != var3)) { _fun0006_ip = 128; continue _fun0006 }
case 129:
                    var11 = var12;
                    var3 = var14;
                    var3 = var3.custom_message_contents;
                    var11['custom_message_contents'] = var3;
case 128:
                    var11 = var9;
                    var3 = {};
                    var13 = true;
                    var3['is_gift'] = var13;
                    var3['gift_customization'] = var12;
                    var11['gifting_facet'] = var3;
case 115:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 3;
                    var3 = var12[var3];
                    var3 = var11.bind(var6)(var3);
                    var12 = var3.HTTP;
                    var11 = var12.patch;
                    var3 = {};
                    var16 = _closure1_slot4;
                    var15 = var16.ORDER_UPDATE;
                    var13 = var8;
                    var13 = var15.bind(var16)(var13);
                    var3['url'] = var13;
                    var13 = var9;
                    var3['body'] = var13;
                    var13 = true;
                    var3['rejectWithError'] = var13;
                    var3 = var11.bind(var12)(var3);
                    SaveGenerator(address=438);
case 130:
                    return var3;
case 131:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 132; continue _fun0006 }
case 133:
                    var10 = var3;
                    var15 = _closure1_slot5;
                    var12 = var15.info;
                    var11 = {};
                    var13 = var8;
                    var11['orderId'] = var13;
                    var11['body'] = var9;
                    var9 = 'updated order with gift customization';
                    var9 = var12.bind(var15)(var9, var11);
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var7];
                    var12 = var11.bind(var6)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var15 = 'ORDER_UPDATE_SUCCESS';
                    var9['type'] = var15;
                    var9['orderId'] = var13;
                    var9 = var11.bind(var12)(var9);
                    SaveGenerator(address=531);
case 134:
                    return var9;
case 135:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 136; continue _fun0006 }
case 137:
                    var10 = var10.body;
                    var10 = var10.revision;
case 138: // try_end0
                    return var10;
case 136:
                    return var9;
case 132:
                    return var3;
case 139: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var4 = var12;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 4;
                    var9 = var3[var9];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.captureBillingException;
                    var9 = {};
                    var13 = {};
                    var15 = 'OrderActionCreators_updateOrder';
                    var13['source'] = var15;
                    var9['tags'] = var13;
                    var13 = {};
                    var13['orderId'] = var8;
                    var13['giftInfo'] = var14;
                    var9['extra'] = var13;
                    var9 = var10.bind(var11)(var12, var9);
                    var11 = _closure1_slot5;
                    var10 = var11.error;
                    var9 = {};
                    var9['error'] = var12;
                    var9['orderId'] = var8;
                    var8 = 'failed to update order';
                    var8 = var10.bind(var11)(var8, var9);
                    var5 = _closure1_slot1;
                    var3 = var3[var7];
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var7 = 'ORDER_UPDATE_FAIL';
                    var3['type'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=701);
case 140:
                    return var3;
case 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 141; continue _fun0006 }
case 142:
                    throw var4;
case 141:
                    return var3;
case 112:
                    return var2;
case 110:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _markOrderAsSigningInProgress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 143; continue _fun0007 }
case 144:
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot7;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0007_ip = 145; continue _fun0007 }
case 146:
                    var6 = _closure1_slot3;
                    var5 = undefined;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 147; continue _fun0008 }
case 3:
                                var6 = undefined;
                                var10 = undefined;
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var8 = 5;
                                var2 = var2[var8];
                                var9 = var5.bind(var6)(var2);
                                var5 = var9.dispatch;
                                var2 = {};
                                var7 = 'ORDER_MARK_SIGNING_START';
                                var2['type'] = var7;
                                var11 = _closure4_slot0;
                                var2['orderId'] = var11;
                                var2 = var5.bind(var9)(var2);
case 148: // try_start_0 // try_start_2
                                var5 = _closure1_slot8;
                                var2 = _closure4_slot0;
                                var2 = var5.bind(var6)(var2);
                                SaveGenerator(address=88);
case 149:
                                return var2;
case 150:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0008_ip = 151; continue _fun0008 }
case 114:
                                var10 = var2;
                                var9 = null;
                                if(!(var9 != var2)) { _fun0008_ip = 152; continue _fun0008 }
case 7:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var5 = 3;
                                var5 = var12[var5];
                                var5 = var11.bind(var6)(var5);
                                var12 = var5.HTTP;
                                var11 = var12.post;
                                var5 = {};
                                var15 = _closure1_slot4;
                                var14 = var15.ORDER_SIGN;
                                var13 = _closure4_slot0;
                                var13 = var14.bind(var15)(var13);
                                var5['url'] = var13;
                                var13 = {};
                                var14 = var10;
                                var14 = var14.revision;
                                var13['expected_revision'] = var14;
                                var5['body'] = var13;
                                var13 = true;
                                var5['rejectWithError'] = var13;
                                var5 = var11.bind(var12)(var5);
                                SaveGenerator(address=200);
case 46:
                                return var5;
case 153:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                                if(var11) { _fun0008_ip = 103; continue _fun0008 }
case 154:
                                var14 = _closure1_slot5;
                                var12 = var14.info;
                                var11 = {};
                                var13 = _closure4_slot0;
                                var11['orderId'] = var13;
                                var10 = var10.revision;
                                var11['revision'] = var10;
                                var10 = 'marked order as signing in progress';
                                var10 = var12.bind(var14)(var10, var11);
                                var11 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var10 = var10[var8];
                                var12 = var11.bind(var6)(var10);
                                var11 = var12.dispatch;
                                var10 = {};
                                var14 = 'ORDER_MARK_SIGNING_SUCCESS';
                                var10['type'] = var14;
                                var10['orderId'] = var13;
                                var10 = var11.bind(var12)(var10);
                                SaveGenerator(address=298);
case 101:
                                return var10;
case 102:
                                ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                                if(var11) { _fun0008_ip = 155; continue _fun0008 }
case 104: // try_end0 // try_end2
                                _closure1_slot7 = var9;
                                return var6;
case 155:
                                _closure1_slot7 = var9;
                                return var10;
case 103:
                                _closure1_slot7 = var9;
                                return var5;
case 152: // try_start_1 // try_start_3
                                var5 = global;
                                var10 = var5.Error;
                                var12 = _closure4_slot0;
                                var5 = var5.HermesInternal;
                                var11 = var5.concat;
                                var9 = 'Order ';
                                var5 = ' not found';
                                var17 = var11.bind(var9)(var12, var5);
                                var9 = var10.prototype;
                                var9 = Object.create(var9, {constructor: {value: var10}});
                                var18 = var9;
                                var5 = new var18[var10](var17, var16);
                                var5 = var5 instanceof Object ? var5 : var9;
                                throw var5;
case 151: // try_end1 // try_end3
                                var5 = null;
                                _closure1_slot7 = var5;
                                return var2;
case 156: // try_start_4 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=11);
                                var3 = var12;
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var5 = 4;
                                var5 = var2[var5];
                                var13 = var9.bind(var6)(var5);
                                var10 = var13.captureBillingException;
                                var5 = global;
                                var5 = var5.Error;
                                var9 = var5.prototype;
                                var9 = Object.create(var9, {constructor: {value: var5}});
                                var11 = 'failed to mark order as signing in progress';
                                var18 = var9;
                                var17 = var11;
                                var5 = new var18[var5](var17, var16);
                                var9 = var5 instanceof Object ? var5 : var9;
                                var5 = {};
                                var14 = {};
                                var15 = 'OrderActionCreators_markOrderAsSigningInProgress';
                                var14['source'] = var15;
                                var5['tags'] = var14;
                                var14 = {};
                                var7 = _closure4_slot0;
                                var14['orderId'] = var7;
                                var14['response'] = var12;
                                var5['extra'] = var14;
                                var5 = var10.bind(var13)(var9, var5);
                                var10 = _closure1_slot5;
                                var9 = var10.error;
                                var5 = {};
                                var5['response'] = var12;
                                var5['orderId'] = var7;
                                var5 = var9.bind(var10)(var11, var5);
                                var5 = _closure1_slot1;
                                var2 = var2[var8];
                                var6 = var5.bind(var6)(var2);
                                var5 = var6.dispatch;
                                var2 = {};
                                var8 = 'ORDER_MARK_SIGNING_FAIL';
                                var2['type'] = var8;
                                var2['orderId'] = var7;
                                var2 = var5.bind(var6)(var2);
                                SaveGenerator(address=582);
case 157:
                                return var2;
case 158:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0008_ip = 159; continue _fun0008 }
case 160:
                                throw var3;
case 159: // try_end4
                                var3 = null;
                                _closure1_slot7 = var3;
                                return var2;
case 161: // catch_target2 // catch_target3 // catch_target4
                                CatchBlockStart(arg_register=1);
                                var3 = null;
                                _closure1_slot7 = var3;
                                throw var2;
case 147:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.bind(var5)();
                    _closure1_slot7 = var4;
                    SaveGenerator(address=57);
case 162:
                    return var4;
case 163:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 34; continue _fun0007 }
case 164:
                    return var5;
case 34:
                    return var4;
case 145:
                    var6 = _closure1_slot5;
                    var5 = var6.info;
                    var4 = {};
                    var4['orderId'] = var3;
                    var3 = 'signing already in progress, awaiting existing promise';
                    var3 = var5.bind(var6)(var3, var4);
                    var2 = _closure1_slot7;
                    SaveGenerator(address=106);
case 10:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 165; continue _fun0007 }
case 11:
                    var3 = undefined;
                    return var3;
case 165:
                    return var2;
case 143:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var15 = 0;
    var7 = var12[var15];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var14 = 1;
    var7 = var12[var14];
    var7 = var11.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot4 = var7;
    var13 = 2;
    var7 = var12[var13];
    var9 = var8.bind(var1)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var19 = 'OrderActionCreators';
    var20 = var8;
    var7 = new var20[var9](var19, var18);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot5 = var7;
    var8 = {};
    var8['UNSPECIFIED'] = var15;
    var10 = 'UNSPECIFIED';
    var8[var15] = var10;
    var8['DRAFT'] = var14;
    var7 = 'DRAFT';
    var8[var14] = var7;
    var8['SIGNED'] = var13;
    var7 = 'SIGNED';
    var8[var13] = var7;
    var9 = 3;
    var8['DISCARDED'] = var9;
    var7 = 'DISCARDED';
    var8[var9] = var7;
    var16 = 4;
    var8['SIGNING_IN_PROGRESS'] = var16;
    var7 = 'SIGNING_IN_PROGRESS';
    var8[var16] = var7;
    var _closure1_slot6 = var8;
    var7 = {};
    var7['UNSPECIFIED'] = var15;
    var7[var15] = var10;
    var7['ONE_TIME'] = var14;
    var10 = 'ONE_TIME';
    var7[var14] = var10;
    var7['SUBSCRIPTION'] = var13;
    var10 = 'SUBSCRIPTION';
    var7[var13] = var10;
    var10 = null;
    var _closure1_slot7 = var10;
    var10 = 6;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/payments/native/OrderActionCreators.tsx';
    var10 = var11.bind(var12)(var10);
    var3['DRAFT_ORDER_LOOKBACK_DAYS'] = var9;
    var3['OrderStatus'] = var8;
    var3['ItemPurchaseType'] = var7;
    var3['getOrder'] = var6;
    var3['getOrders'] = var5;
    var3['createOrder'] = var4;
    var4 = function getOrCreateOrder() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getOrCreateOrder'] = var4;
    var4 = function patchOrderLineItem() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['patchOrderLineItem'] = var4;
    var4 = function updateOrder() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateOrder'] = var4;
    var2 = function markOrderAsSigningInProgress() {
        var1 = undefined;
        var4 = _closure1_slot17;
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