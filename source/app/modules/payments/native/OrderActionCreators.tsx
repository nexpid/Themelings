// app/modules/payments/native/OrderActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var5 = function getOrders() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var5;
    var1 = function _getOrders() {
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
                    var4 = arg1;
                    var5 = undefined;
                    var8 = undefined;
case 4: // try_start_0
                    var8 = {};
                    var2 = var4;
                    var3 = null;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var6 = var4;
                    var2 = var6.status;
case 5:
                    if(!(var3 != var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var6 = var8;
                    var2 = var4;
                    var7 = var2.status;
                    var2 = new Array(1);
                    var2[0] = var7;
                    var6['statuses'] = var2;
case 7:
                    var2 = var4;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = var4;
                    var2 = var6.skuId;
case 9:
                    if(!(var3 != var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var6 = var8;
                    var2 = var4;
                    var2 = var2.skuId;
                    var6['sku_id'] = var2;
case 11:
                    var2 = var4;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var6 = var4;
                    var2 = var6.createdAfter;
case 13:
                    if(!(var3 != var2)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var6 = var8;
                    var2 = var4;
                    var2 = var2.createdAfter;
                    var6['created_after'] = var2;
case 15:
                    var2 = var4;
                    var6 = var3 == var2;
                    var2 = undefined;
                    if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var6 = var4;
                    var2 = var6.isGift;
case 17:
                    if(!(var3 != var2)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var3 = var8;
                    var2 = var4;
                    var2 = var2.isGift;
                    var3['is_gift'] = var2;
case 19:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.get;
                    var2 = {};
                    var9 = _closure1_slot5;
                    var9 = var9.ORDER_LIST;
                    var2['url'] = var9;
                    var2['query'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=268);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var6 = var2.body;
                    var3 = var6;
                    if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var3 = new Array(0);
case 25: // try_end0
                    return var3;
case 23:
                    return var2;
case 27: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var9 = _closure1_slot6;
                    var8 = var9.error;
                    var6 = {};
                    var6['error'] = var2;
                    var7 = var4;
                    var6['options'] = var7;
                    var4 = 'failed to fetch orders';
                    var4 = var8.bind(var9)(var4, var6);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 5;
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
    var4 = function createOrder() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _createOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var12 = var2.orderLineItems;
                    var14 = var2.paymentGateway;
                    var18 = var2.recipientUserId;
                    var15 = var2.isGift;
                    var10 = var2.giftInfo;
                    var11 = var2.subscriptionFacet;
                    var4 = var2.externalGatewayFacet;
                    var16 = var2.countryCode;
                    var6 = undefined;
                    var13 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=73);
case 30:
                    return var6;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
case 10:
                    var19 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var7 = 6;
                    var17 = var17[var7];
                    var20 = var19.bind(var6)(var17);
                    var19 = var20.dispatch;
                    var17 = {};
                    var21 = 'ORDER_CREATE_START';
                    var17['type'] = var21;
                    var17 = var19.bind(var20)(var17);
case 33: // try_start_0
                    var17 = var15;
                    if(!var17) { _fun0002_ip = 34; continue _fun0002 }
case 16:
                    var17 = {};
                    var17['recipient_id'] = var18;
                    var13 = var17;
                    var17 = var10;
                    var18 = null;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var19 = var10;
                    var17 = var19.gift_style;
case 35:
                    if(!(var18 != var17)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var19 = var13;
                    var17 = var10;
                    var17 = var17.gift_style;
                    var19['gift_style'] = var17;
case 37:
                    var17 = var10;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var19 = var10;
                    var17 = var19.emoji_id;
case 39:
                    if(!(var18 != var17)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var19 = var13;
                    var17 = var10;
                    var17 = var17.emoji_id;
                    var19['emoji_id'] = var17;
case 41:
                    var17 = var10;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var19 = var10;
                    var17 = var19.emoji_name;
case 43:
                    if(!(var18 != var17)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var19 = var13;
                    var17 = var10;
                    var17 = var17.emoji_name;
                    var19['emoji_name'] = var17;
case 45:
                    var17 = var10;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0002_ip = 47; continue _fun0002 }
case 25:
                    var19 = var10;
                    var17 = var19.sound_id;
case 47:
                    if(!(var18 != var17)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var19 = var13;
                    var17 = var10;
                    var17 = var17.sound_id;
                    var19['sound_id'] = var17;
case 48:
                    var17 = var10;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var19 = var10;
                    var17 = var19.reward_sku_ids;
case 50:
                    if(!(var18 != var17)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var19 = var13;
                    var17 = var10;
                    var17 = var17.reward_sku_ids;
                    var19['reward_sku_ids'] = var17;
case 52:
                    var17 = var10;
                    var19 = var18 == var17;
                    var17 = undefined;
                    if(var19) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var19 = var10;
                    var17 = var19.custom_message_contents;
case 54:
                    if(!(var18 != var17)) { _fun0002_ip = 34; continue _fun0002 }
case 56:
                    var17 = var13;
                    var10 = var10.custom_message_contents;
                    var17['custom_message_contents'] = var10;
case 34:
                    var10 = {};
                    var10['order_line_items'] = var12;
                    var12 = {};
                    var17 = var14;
                    var12['payment_gateway'] = var17;
                    var10['billing_facet'] = var12;
                    var10['subscription_facet'] = var11;
                    var8 = var10;
                    var10 = var16;
                    var11 = null;
                    if(!(var11 != var10)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                    var12 = var8;
                    var10 = {};
                    var10['request_gateway_country_code'] = var16;
                    var12['location_facet'] = var10;
case 57:
                    var10 = var15;
                    if(!var10) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                    var12 = var8;
                    var10 = {};
                    var10['is_gift'] = var15;
                    var10['gift_customization'] = var13;
                    var12['gifting_facet'] = var10;
case 59:
                    var10 = var4;
                    if(!(var11 != var10)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                    var10 = var8;
                    var10['external_gateway_facet'] = var4;
case 61:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 4;
                    var4 = var11[var4];
                    var4 = var10.bind(var6)(var4);
                    var11 = var4.HTTP;
                    var10 = var11.post;
                    var4 = {};
                    var12 = _closure1_slot5;
                    var12 = var12.ORDER_CREATE;
                    var4['url'] = var12;
                    var12 = var8;
                    var4['body'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var12 = 3;
                    var4['retries'] = var12;
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=578);
case 63:
                    return var4;
case 64:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 65; continue _fun0002 }
case 66:
                    var12 = var4.body;
                    var9 = var12;
                    var13 = _closure1_slot6;
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
                    SaveGenerator(address=693);
case 67:
                    return var8;
case 68:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 69; continue _fun0002 }
case 70: // try_end0
                    return var9;
case 69:
                    return var8;
case 65:
                    return var4;
case 71: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = var4;
                    var10 = _closure1_slot6;
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
                    SaveGenerator(address=784);
case 72:
                    return var3;
case 73:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 74; continue _fun0002 }
case 75:
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
case 74:
                    return var3;
case 32:
                    return var2;
case 28:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _getOrCreateOrder() {
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
                    if(var3) { _fun0003_ip = 45; continue _fun0003 }
case 29:
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
case 76:
                    return var10;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 78:
                    var4 = _closure1_slot8;
                    var3 = {};
                    var8 = _closure1_slot4;
                    var8 = var8.DRAFT;
                    var3['status'] = var8;
                    var3['skuId'] = var9;
                    var3['createdAfter'] = var7;
                    var3 = var4.bind(var10)(var3);
                    SaveGenerator(address=116);
case 79:
                    return var3;
case 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                    var7 = var3.length;
                    var4 = 0;
                    if(!(!(var7 > var4))) { _fun0003_ip = 83; continue _fun0003 }
case 16:
                    var8 = _closure1_slot10;
                    var7 = {};
                    var7['paymentGateway'] = var15;
                    var7['recipientUserId'] = var14;
                    var7['isGift'] = var5;
                    var7['giftInfo'] = var12;
                    var12 = {};
                    var12['sku_id'] = var9;
                    var14 = 1;
                    var12['quantity'] = var14;
                    var12['purchase_type'] = var13;
                    var12['subscription_plan_id'] = var11;
                    var11 = new Array(1);
                    var11[0] = var12;
                    var7['orderLineItems'] = var11;
                    var7 = var8.bind(var10)(var7);
                    SaveGenerator(address=209);
case 84:
                    return var7;
case 85:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 86; continue _fun0003 }
case 87:
                    return var7;
case 86:
                    return var7;
case 83:
                    var4 = var3[var4];
                    var8 = _closure1_slot6;
                    var7 = var8.info;
                    var6 = {};
                    var10 = var4.id;
                    var6['orderId'] = var10;
                    var6['skuId'] = var9;
                    var6['isGift'] = var5;
                    var5 = 'reusing existing draft order';
                    var5 = var7.bind(var8)(var5, var6);
                    return var4;
case 81:
                    return var3;
case 24:
                    return var2;
case 45:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _patchOrderLineItem() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 62; continue _fun0004 }
case 29:
                    var12 = var2.orderId;
                    var8 = var2.orderLineItemId;
                    var15 = var2.subscriptionPlanId;
                    var3 = var2.expectedRevision;
                    var6 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=47);
case 8:
                    return var6;
case 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 89; continue _fun0004 }
case 90:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var11 = var11[var7];
                    var14 = var13.bind(var6)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var16 = 'ORDER_UPDATE_START';
                    var11['type'] = var16;
                    var11 = var13.bind(var14)(var11);
case 91: // try_start_0
                    var14 = {};
                    var14['expected_revision'] = var3;
                    var3 = var15;
                    var14['subscription_plan_id'] = var3;
                    var9 = var14;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 4;
                    var3 = var13[var3];
                    var3 = var11.bind(var6)(var3);
                    var13 = var3.HTTP;
                    var11 = var13.patch;
                    var3 = {};
                    var19 = _closure1_slot5;
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
case 92:
                    return var3;
case 93:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0004_ip = 94; continue _fun0004 }
case 40:
                    var10 = var3;
                    var16 = _closure1_slot6;
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
case 95:
                    return var9;
case 47:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0004_ip = 96; continue _fun0004 }
case 97:
                    var10 = var10.body;
                    var10 = var10.revision;
case 98: // try_end0
                    return var10;
case 96:
                    return var9;
case 94:
                    return var3;
case 99: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var4 = var13;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 5;
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
                    var11 = _closure1_slot6;
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
case 100:
                    return var3;
case 101:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 102; continue _fun0004 }
case 103:
                    throw var4;
case 102:
                    return var3;
case 89:
                    return var2;
case 62:
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
    var1 = function _patchOrder() {
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
                    if(var5) { _fun0005_ip = 104; continue _fun0005 }
case 29:
                    var8 = var2.orderId;
                    var12 = var2.expectedRevision;
                    var14 = var2.orderLineItems;
                    var3 = var2.subscriptionFacet;
                    var6 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=47);
case 8:
                    return var6;
case 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 105; continue _fun0005 }
case 90:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var11 = var11[var7];
                    var15 = var13.bind(var6)(var11);
                    var13 = var15.dispatch;
                    var11 = {};
                    var16 = 'ORDER_UPDATE_START';
                    var11['type'] = var16;
                    var11 = var13.bind(var15)(var11);
case 91: // try_start_0
                    var11 = {};
                    var11['expected_revision'] = var12;
                    var9 = var11;
                    var11 = var14;
                    var12 = null;
                    if(!(var12 != var11)) { _fun0005_ip = 13; continue _fun0005 }
case 106:
                    var13 = var9;
                    var11 = var14;
                    var13['order_line_items'] = var11;
case 13:
                    var11 = var3;
                    if(!(var12 != var11)) { _fun0005_ip = 107; continue _fun0005 }
case 108:
                    var11 = var9;
                    var11['subscription_facet'] = var3;
case 107:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 4;
                    var3 = var12[var3];
                    var3 = var11.bind(var6)(var3);
                    var12 = var3.HTTP;
                    var11 = var12.patch;
                    var3 = {};
                    var16 = _closure1_slot5;
                    var15 = var16.ORDER_UPDATE;
                    var13 = var8;
                    var13 = var15.bind(var16)(var13);
                    var3['url'] = var13;
                    var13 = var9;
                    var3['body'] = var13;
                    var13 = true;
                    var3['rejectWithError'] = var13;
                    var3 = var11.bind(var12)(var3);
                    SaveGenerator(address=225);
case 109:
                    return var3;
case 110:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0005_ip = 51; continue _fun0005 }
case 111:
                    var10 = var3.body;
                    var15 = _closure1_slot6;
                    var12 = var15.info;
                    var11 = {};
                    var13 = var8;
                    var11['orderId'] = var13;
                    var11['body'] = var9;
                    var9 = 'patched order';
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
                    SaveGenerator(address=320);
case 96:
                    return var9;
case 48:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0005_ip = 112; continue _fun0005 }
case 113: // try_end0
                    return var10;
case 112:
                    return var9;
case 51:
                    return var3;
case 114: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var4 = var12;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 5;
                    var9 = var3[var9];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.captureBillingException;
                    var9 = {};
                    var13 = {};
                    var15 = 'OrderActionCreators_patchOrder';
                    var13['source'] = var15;
                    var9['tags'] = var13;
                    var13 = {};
                    var13['orderId'] = var8;
                    var13['orderLineItems'] = var14;
                    var9['extra'] = var13;
                    var9 = var10.bind(var11)(var12, var9);
                    var11 = _closure1_slot6;
                    var10 = var11.error;
                    var9 = {};
                    var9['error'] = var12;
                    var9['orderId'] = var8;
                    var8 = 'failed to patch order';
                    var8 = var10.bind(var11)(var8, var9);
                    var5 = _closure1_slot1;
                    var3 = var3[var7];
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var7 = 'ORDER_UPDATE_FAIL';
                    var3['type'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=479);
case 115:
                    return var3;
case 116:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 117; continue _fun0005 }
case 59:
                    throw var4;
case 117:
                    return var3;
case 105:
                    return var2;
case 104:
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
                    if(var3) { _fun0006_ip = 118; continue _fun0006 }
case 29:
                    var8 = var2.orderId;
                    var14 = var2.giftInfo;
                    var11 = var2.expectedRevision;
                    var6 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=43);
case 5:
                    return var6;
case 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 120; continue _fun0006 }
case 121:
                    var13 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 6;
                    var3 = var3[var7];
                    var15 = var13.bind(var6)(var3);
                    var13 = var15.dispatch;
                    var3 = {};
                    var16 = 'ORDER_UPDATE_START';
                    var3['type'] = var16;
                    var3 = var13.bind(var15)(var3);
case 122: // try_start_0
                    var3 = {};
                    var3['expected_revision'] = var11;
                    var9 = var3;
                    var3 = var14;
                    var11 = null;
                    if(!(var11 != var3)) { _fun0006_ip = 123; continue _fun0006 }
case 124:
                    var12 = {};
                    var3 = var14;
                    var3 = var3.recipient_id;
                    if(!(var11 != var3)) { _fun0006_ip = 125; continue _fun0006 }
case 126:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.recipient_id;
                    var13['recipient_id'] = var3;
case 125:
                    var3 = var14;
                    var3 = var3.gift_style;
                    if(!(var11 != var3)) { _fun0006_ip = 127; continue _fun0006 }
case 128:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.gift_style;
                    var13['gift_style'] = var3;
case 127:
                    var3 = var14;
                    var3 = var3.emoji_id;
                    if(!(var11 != var3)) { _fun0006_ip = 129; continue _fun0006 }
case 130:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.emoji_id;
                    var13['emoji_id'] = var3;
case 129:
                    var3 = var14;
                    var3 = var3.emoji_name;
                    if(!(var11 != var3)) { _fun0006_ip = 131; continue _fun0006 }
case 132:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.emoji_name;
                    var13['emoji_name'] = var3;
case 131:
                    var3 = var14;
                    var3 = var3.sound_id;
                    if(!(var11 != var3)) { _fun0006_ip = 133; continue _fun0006 }
case 134:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.sound_id;
                    var13['sound_id'] = var3;
case 133:
                    var3 = var14;
                    var3 = var3.reward_sku_ids;
                    if(!(var11 != var3)) { _fun0006_ip = 135; continue _fun0006 }
case 25:
                    var13 = var12;
                    var3 = var14;
                    var3 = var3.reward_sku_ids;
                    var13['reward_sku_ids'] = var3;
case 135:
                    var3 = var14;
                    var3 = var3.custom_message_contents;
                    if(!(var11 != var3)) { _fun0006_ip = 136; continue _fun0006 }
case 48:
                    var11 = var12;
                    var3 = var14;
                    var3 = var3.custom_message_contents;
                    var11['custom_message_contents'] = var3;
case 136:
                    var11 = var9;
                    var3 = {};
                    var13 = true;
                    var3['is_gift'] = var13;
                    var3['gift_customization'] = var12;
                    var11['gifting_facet'] = var3;
case 123:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 4;
                    var3 = var12[var3];
                    var3 = var11.bind(var6)(var3);
                    var12 = var3.HTTP;
                    var11 = var12.patch;
                    var3 = {};
                    var16 = _closure1_slot5;
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
case 137:
                    return var3;
case 138:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 139; continue _fun0006 }
case 140:
                    var10 = var3;
                    var15 = _closure1_slot6;
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
case 141:
                    return var9;
case 142:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 143; continue _fun0006 }
case 144:
                    var10 = var10.body;
                    var10 = var10.revision;
case 145: // try_end0
                    return var10;
case 143:
                    return var9;
case 139:
                    return var3;
case 146: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var4 = var12;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 5;
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
                    var11 = _closure1_slot6;
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
case 70:
                    return var3;
case 147:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 148; continue _fun0006 }
case 149:
                    throw var4;
case 148:
                    return var3;
case 120:
                    return var2;
case 118:
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
    var1 = function _discardOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 150; continue _fun0007 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var6 = var7.ORDER_DISCARD;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
case 151:
                    return var2;
case 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 153; continue _fun0007 }
case 154:
                    var4 = var2.body;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 155; continue _fun0007 }
case 156:
                    var3 = var2.body;
                    return var3;
case 155:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var8 = 'Invalid discard order response';
                    var9 = var4;
                    var3 = new var9[var5](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 153:
                    return var2;
case 150:
                    return var1;
                }
            };
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 106; continue _fun0008 }
case 157:
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot7;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0008_ip = 158; continue _fun0008 }
case 159:
                    var6 = _closure1_slot3;
                    var5 = undefined;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0009_ip = 160; continue _fun0009 }
case 3:
                                var6 = undefined;
                                var10 = undefined;
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var8 = 6;
                                var2 = var2[var8];
                                var9 = var5.bind(var6)(var2);
                                var5 = var9.dispatch;
                                var2 = {};
                                var7 = 'ORDER_MARK_SIGNING_START';
                                var2['type'] = var7;
                                var11 = _closure4_slot0;
                                var2['orderId'] = var11;
                                var2 = var5.bind(var9)(var2);
case 30: // try_start_0 // try_start_2
                                var5 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var2 = 7;
                                var2 = var9[var2];
                                var9 = var5.bind(var6)(var2);
                                var5 = var9.getOrder;
                                var2 = _closure4_slot0;
                                var2 = var5.bind(var9)(var2);
                                SaveGenerator(address=110);
case 161:
                                return var2;
case 155:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0009_ip = 162; continue _fun0009 }
case 124:
                                var10 = var2;
                                var9 = null;
                                if(!(var9 != var2)) { _fun0009_ip = 163; continue _fun0009 }
case 164:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var5 = 4;
                                var5 = var12[var5];
                                var5 = var11.bind(var6)(var5);
                                var12 = var5.HTTP;
                                var11 = var12.post;
                                var5 = {};
                                var15 = _closure1_slot5;
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
                                SaveGenerator(address=222);
case 165:
                                return var5;
case 166:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                                if(var11) { _fun0009_ip = 167; continue _fun0009 }
case 168:
                                var14 = _closure1_slot6;
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
                                SaveGenerator(address=320);
case 96:
                                return var10;
case 48:
                                ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                                if(var11) { _fun0009_ip = 169; continue _fun0009 }
case 113: // try_end0 // try_end2
                                _closure1_slot7 = var9;
                                return var6;
case 169:
                                _closure1_slot7 = var9;
                                return var10;
case 167:
                                _closure1_slot7 = var9;
                                return var5;
case 163: // try_start_1 // try_start_3
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
case 162: // try_end1 // try_end3
                                var5 = null;
                                _closure1_slot7 = var5;
                                return var2;
case 170: // try_start_4 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=11);
                                var3 = var12;
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var5 = 5;
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
                                var10 = _closure1_slot6;
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
                                SaveGenerator(address=604);
case 171:
                                return var2;
case 172:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0009_ip = 173; continue _fun0009 }
case 174:
                                throw var3;
case 173: // try_end4
                                var3 = null;
                                _closure1_slot7 = var3;
                                return var2;
case 175: // catch_target2 // catch_target3 // catch_target4
                                CatchBlockStart(arg_register=1);
                                var3 = null;
                                _closure1_slot7 = var3;
                                throw var2;
case 160:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.bind(var5)();
                    _closure1_slot7 = var4;
                    SaveGenerator(address=57);
case 176:
                    return var4;
case 177:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 77; continue _fun0008 }
case 178:
                    return var5;
case 77:
                    return var4;
case 158:
                    var6 = _closure1_slot6;
                    var5 = var6.info;
                    var4 = {};
                    var4['orderId'] = var3;
                    var3 = 'signing already in progress, awaiting existing promise';
                    var3 = var5.bind(var6)(var3, var4);
                    var2 = _closure1_slot7;
                    SaveGenerator(address=106);
case 179:
                    return var2;
case 180:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 181; continue _fun0008 }
case 182:
                    var3 = undefined;
                    return var3;
case 181:
                    return var2;
case 106:
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
    var11 = var1.Object;
    var7 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var10[var1];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.OrderStatus;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot5 = var6;
    var6 = 3;
    var7 = var10[var6];
    var11 = var8.bind(var1)(var7);
    var7 = var11.prototype;
    var8 = Object.create(var7, {constructor: {value: var11}});
    var14 = 'OrderActionCreators';
    var15 = var8;
    var7 = new var15[var11](var14, var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot6 = var7;
    var8 = null;
    var _closure1_slot7 = var8;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/payments/native/OrderActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['logger'] = var7;
    var3['DRAFT_ORDER_LOOKBACK_DAYS'] = var6;
    var3['getOrders'] = var5;
    var3['createOrder'] = var4;
    var4 = function getOrCreateOrder() {
        var1 = undefined;
        var4 = _closure1_slot12;
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
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['patchOrderLineItem'] = var4;
    var4 = function patchOrder() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['patchOrder'] = var4;
    var4 = function updateOrder() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateOrder'] = var4;
    var4 = function discardOrder() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['discardOrder'] = var4;
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