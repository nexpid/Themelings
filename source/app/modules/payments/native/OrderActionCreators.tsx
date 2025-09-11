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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 783; continue _fun0001 }
 13:
                    var14 = var2.skuId;
                    var15 = var2.recipientUserId;
                    var10 = var2.purchaseType;
                    var12 = var2.isGift;
                    var4 = var2.giftInfo;
                    var6 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=55);
 53:
                    return var6;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 780; continue _fun0001 }
 64:
                    var16 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 3;
                    var13 = var13[var7];
                    var17 = var16.bind(var6)(var13);
                    var16 = var17.dispatch;
                    var13 = {};
                    var18 = 'ORDER_CREATE_START';
                    var13['type'] = var18;
                    var13 = var16.bind(var17)(var13);
 109: // try_start_0
                    var13 = var12;
                    if(!var13) { _fun0001_ip = 385; continue _fun0001 }
 118:
                    var13 = {};
                    var13['recipient_id'] = var15;
                    var11 = var13;
                    var13 = var4;
                    var15 = null;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 151; continue _fun0001 }
 142:
                    var16 = var4;
                    var13 = var16.gift_style;
 151:
                    if(!(var15 != var13)) { _fun0001_ip = 173; continue _fun0001 }
 155:
                    var16 = var11;
                    var13 = var4;
                    var13 = var13.gift_style;
                    var16['gift_style'] = var13;
 173:
                    var13 = var4;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 194; continue _fun0001 }
 185:
                    var16 = var4;
                    var13 = var16.emoji_id;
 194:
                    if(!(var15 != var13)) { _fun0001_ip = 216; continue _fun0001 }
 198:
                    var16 = var11;
                    var13 = var4;
                    var13 = var13.emoji_id;
                    var16['emoji_id'] = var13;
 216:
                    var13 = var4;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 237; continue _fun0001 }
 228:
                    var16 = var4;
                    var13 = var16.emoji_name;
 237:
                    if(!(var15 != var13)) { _fun0001_ip = 259; continue _fun0001 }
 241:
                    var16 = var11;
                    var13 = var4;
                    var13 = var13.emoji_name;
                    var16['emoji_name'] = var13;
 259:
                    var13 = var4;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 280; continue _fun0001 }
 271:
                    var16 = var4;
                    var13 = var16.sound_id;
 280:
                    if(!(var15 != var13)) { _fun0001_ip = 302; continue _fun0001 }
 284:
                    var16 = var11;
                    var13 = var4;
                    var13 = var13.sound_id;
                    var16['sound_id'] = var13;
 302:
                    var13 = var4;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 323; continue _fun0001 }
 314:
                    var16 = var4;
                    var13 = var16.reward_sku_ids;
 323:
                    if(!(var15 != var13)) { _fun0001_ip = 345; continue _fun0001 }
 327:
                    var16 = var11;
                    var13 = var4;
                    var13 = var13.reward_sku_ids;
                    var16['reward_sku_ids'] = var13;
 345:
                    var13 = var4;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 366; continue _fun0001 }
 357:
                    var16 = var4;
                    var13 = var16.custom_message_contents;
 366:
                    if(!(var15 != var13)) { _fun0001_ip = 385; continue _fun0001 }
 370:
                    var13 = var11;
                    var4 = var4.custom_message_contents;
                    var13['custom_message_contents'] = var4;
 385:
                    var4 = {};
                    var13 = {};
                    var13['sku_id'] = var14;
                    var14 = 1;
                    var13['quantity'] = var14;
                    var13['purchase_type'] = var10;
                    var10 = new Array(1);
                    var10[0] = var13;
                    var4['order_line_items'] = var10;
                    var8 = var4;
                    var4 = var12;
                    if(!var4) { _fun0001_ip = 456; continue _fun0001 }
 431:
                    var10 = var8;
                    var4 = {};
                    var4['is_gift'] = var12;
                    var4['gift_customization'] = var11;
                    var10['gifting_facet'] = var4;
 456:
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
                    SaveGenerator(address=525);
 523:
                    return var4;
 525:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 637; continue _fun0001 }
 531:
                    var10 = var4.body;
                    var12 = var10.id;
                    var9 = var12;
                    var13 = _closure1_slot5;
                    var11 = var13.info;
                    var10 = {};
                    var10['orderId'] = var12;
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
                    SaveGenerator(address=625);
 623:
                    return var8;
 625:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 634; continue _fun0001 }
 631: // try_end0
                    return var9;
 634:
                    return var8;
 637:
                    return var4;
 640: // catch_target0
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
                    SaveGenerator(address=716);
 714:
                    return var3;
 716:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 777; continue _fun0001 }
 722:
                    var4 = global;
                    var6 = var4.Error;
                    var7 = var5;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'Failed to create order: ';
                    var20 = var5.bind(var4)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var21 = var5;
                    var4 = new var21[var6](var20, var19);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
 777:
                    return var3;
 780:
                    return var2;
 783:
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
 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 358; continue _fun0002 }
 13:
                    var4 = var10;
                    var3 = undefined;
                    var7 = undefined;
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 3;
                    var6 = var6[var5];
                    var9 = var8.bind(var3)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var11 = 'ORDER_MARK_SIGNING_START';
                    var6['type'] = var11;
                    var6['orderId'] = var10;
                    var6 = var8.bind(var9)(var6);
 70: // try_start_0
                    var10 = {};
                    var6 = 2;
                    var10['status'] = var6;
                    var7 = var10;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 4;
                    var6 = var9[var6];
                    var6 = var8.bind(var3)(var6);
                    var9 = var6.HTTP;
                    var8 = var9.patch;
                    var6 = {};
                    var13 = _closure1_slot4;
                    var12 = var13.ORDER_UPDATE;
                    var11 = var4;
                    var11 = var12.bind(var13)(var11);
                    var6['url'] = var11;
                    var6['body'] = var10;
                    var10 = true;
                    var6['rejectWithError'] = var10;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=156);
 154:
                    return var6;
 156:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 257; continue _fun0002 }
 162:
                    var11 = _closure1_slot5;
                    var9 = var11.info;
                    var8 = {};
                    var10 = var4;
                    var8['orderId'] = var10;
                    var8['body'] = var7;
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
                    SaveGenerator(address=246);
 244:
                    return var7;
 246:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 254; continue _fun0002 }
 252: // try_end0
                    _fun0002_ip = 352; continue _fun0002;
 254:
                    return var7;
 257:
                    return var6;
 260: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var9 = _closure1_slot5;
                    var8 = var9.error;
                    var7 = {};
                    var7['response'] = var6;
                    var6 = var4;
                    var7['orderId'] = var6;
                    var4 = 'failed to mark order as signing in progress';
                    var4 = var8.bind(var9)(var4, var7);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.dispatch;
                    var2 = {};
                    var7 = 'ORDER_MARK_SIGNING_FAIL';
                    var2['type'] = var7;
                    var2['orderId'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=346);
 344:
                    return var2;
 346:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 355; continue _fun0002 }
 352:
                    return var3;
 355:
                    return var2;
 358:
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
    var5 = 5;
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