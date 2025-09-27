// app/actions/native/BillingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var13 = metroImportDefault;
    var11 = metroImportAll;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var11;
    var _closure1_slot3 = var10;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var12 = function applyAppleReceipt(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var17 = var1.encodedReceipt;
            var16 = var1.entitlementSkuId;
            var15 = var1.presentmentCurrency;
            var14 = var1.presentmentAmount;
            var13 = var1.appStoreRegion;
            var12 = var1.giftInfoOptions;
            var11 = var1.isGift;
            var7 = var1.retries;
            var3 = var1.jwsRepresentation;
            var9 = var1.jwsRepresentations;
            var10 = var1.source;
            var4 = var1.skipDupCheck;
            var19 = null;
            if(!(var19 != var9)) { _fun0004_ip = 93; continue _fun0004 }
 86:
            if(!(var19 == var3)) { _fun0004_ip = 482; continue _fun0004 }
 93:
            if(!(var19 != var3)) { _fun0004_ip = 108; continue _fun0004 }
 97:
            var1 = new Array(1);
            var1[0] = var3;
            var9 = var1;
 108:
            var6 = var17;
            if(!(var19 != var9)) { _fun0004_ip = 121; continue _fun0004 }
 115:
            var1 = 0;
            var6 = var9[var1];
 121:
            var3 = _closure1_slot1;
            var18 = _closure1_slot3;
            var1 = 13;
            var1 = var18[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.v3;
            var3 = var1.bind(var3)(var6);
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var1 = 14;
            var1 = var18[var1];
            var1 = var6.bind(var5)(var1);
            var18 = var1.Storage;
            var6 = var18.get;
            var1 = _closure1_slot20;
            var1 = var6.bind(var18)(var1);
            if(var4) { _fun0004_ip = 228; continue _fun0004 }
 200:
            if(!(var1 === var3)) { _fun0004_ip = 228; continue _fun0004 }
 204:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)(var19);
            _fun0004_ip = 480; continue _fun0004;
 228:
            var6 = true;
            var3 = var6 !== var11;
            if(var3) { _fun0004_ip = 266; continue _fun0004 }
 237:
            var4 = var19 != var12;
            if(!var4) { _fun0004_ip = 263; continue _fun0004 }
 244:
            var20 = var19 == var12;
            var18 = undefined;
            if(var20) { _fun0004_ip = 259; continue _fun0004 }
 253:
            var18 = var12.gift_style;
 259:
            var4 = var19 != var18;
 263:
            var3 = var4;
 266:
            if(var3) { _fun0004_ip = 321; continue _fun0004 }
 269:
            var4 = _closure1_slot1;
            var18 = _closure1_slot3;
            var3 = 15;
            var3 = var18[var3];
            var19 = var4.bind(var5)(var3);
            var18 = var19.track;
            var3 = _closure1_slot15;
            var4 = var3.GIFT_INFO_OPTIONS_MISSING;
            var3 = {};
            var3['source'] = var10;
            var3['sku_id'] = var16;
            var3 = var18.bind(var19)(var4, var3);
 321:
            var4 = _closure1_slot0;
            var18 = _closure1_slot3;
            var3 = 16;
            var3 = var18[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {};
            var8 = _closure1_slot17;
            var8 = var8.BILLING_APPLY_APPLE_RECEIPT;
            var3['url'] = var8;
            var8 = {};
            var8['encoded_receipt'] = var17;
            var8['entitlement_sku_id'] = var16;
            var8['presentment_currency'] = var15;
            var8['presentment_amount'] = var14;
            var8['app_store_region'] = var13;
            var8['gift_info_options'] = var12;
            var8['is_gift'] = var11;
            var8['source'] = var10;
            var8['jws_representations'] = var9;
            var3['body'] = var8;
            var3['retries'] = var7;
            var3['oldFormErrors'] = var6;
            var3['rejectWithError'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot20;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                var1 = arg1;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.captureBillingException;
                var2 = {};
                var5 = {};
                var6 = _closure1_slot21;
                var5['source'] = var6;
                var2['tags'] = var5;
                var2 = var3.bind(var4)(var1, var2);
                throw var1;
            };
            var1 = var3.bind(var4)(var2);
 480:
            return var1;
 482:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var22 = "Can pass either 'jwsRepresentation' or 'jwsRepresentations'.  Not both";
            var23 = var2;
            var1 = new var23[var3](var22, var21);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot26 = var12;
    var1 = function _getTrialOfferSignature() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 169; continue _fun0005 }
 10:
                    var8 = arg1;
                    var7 = arg2;
                    var6 = arg3;
 19: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot17;
                    var5 = var5.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE;
                    var2['url'] = var5;
                    var5 = {};
                    var5['product_id'] = var8;
                    var5['product_offer_id'] = var7;
                    var5['app_account_token'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=111);
 109:
                    return var2;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 125; continue _fun0005 }
 117:
                    var3 = var2.body;
 122: // try_end0
                    return var3;
 125:
                    return var2;
 128: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureBillingException;
                    var3 = var3.bind(var4)(var5);
                    return var2;
 169:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var6 = function restoreFromLocalReceipt() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var6;
    var1 = function _restoreFromLocalReceipt() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 522; continue _fun0006 }
 10:
                    var8 = undefined;
                    var11 = undefined;
                    var14 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var3 = undefined;
                    var12 = undefined;
                    var4 = undefined;
 28: // try_start_0
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 18;
                    var2 = var7[var2];
                    var5 = var5.bind(var8)(var2);
                    var2 = var5.receiptData;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=65);
 63:
                    return var2;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 512; continue _fun0006 }
 74:
                    var14 = var2;
                    var7 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var5 = 13;
                    var5 = var16[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.v3;
                    var15 = var5.bind(var7)(var2);
                    var9 = var15;
                    var7 = _closure1_slot0;
                    var5 = 14;
                    var5 = var16[var5];
                    var5 = var7.bind(var8)(var5);
                    var16 = var5.Storage;
                    var7 = var16.get;
                    var5 = _closure1_slot20;
                    var10 = var7.bind(var16)(var5);
                    var7 = _closure1_slot9;
                    var5 = var7.getGiftOptionsForKey;
                    var13 = var5.bind(var7)(var15);
                    var7 = _closure1_slot14;
                    var5 = var7.getProducts;
                    var7 = var5.bind(var7)();
                    var11 = var7;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0006_ip = 191; continue _fun0006 }
 185:
                    var7 = new Array(0);
                    _fun0006_ip = 194; continue _fun0006;
 191:
                    var7 = var11;
 194:
                    var3 = var7;
                    var11 = var7.length;
                    var7 = 0;
                    var15 = var11 > var7;
                    var11 = null;
                    if(!var15) { _fun0006_ip = 217; continue _fun0006 }
 213:
                    var11 = var3[var7];
 217:
                    var12 = var11;
                    var7 = _closure1_slot26;
                    var3 = {};
                    var3['encodedReceipt'] = var14;
                    var14 = 3;
                    var3['retries'] = var14;
                    var14 = var5 == var11;
                    var11 = undefined;
                    if(var14) { _fun0006_ip = 254; continue _fun0006 }
 248:
                    var11 = var12.countryCode;
 254:
                    var3['appStoreRegion'] = var11;
                    var11 = {};
                    var12 = var13;
                    var14 = var5 == var12;
                    var12 = undefined;
                    if(var14) { _fun0006_ip = 282; continue _fun0006 }
 273:
                    var14 = var13;
                    var12 = var14.gift_style;
 282:
                    var11['gift_style'] = var12;
                    var12 = var13;
                    var14 = var5 == var12;
                    var12 = undefined;
                    if(var14) { _fun0006_ip = 308; continue _fun0006 }
 299:
                    var14 = var13;
                    var12 = var14.reward_sku_ids;
 308:
                    var11['reward_sku_ids'] = var12;
                    var3['giftInfoOptions'] = var11;
                    var14 = var13;
                    var15 = var5 == var14;
                    var14 = undefined;
                    if(var15) { _fun0006_ip = 339; continue _fun0006 }
 330:
                    var15 = var13;
                    var14 = var15.gift_style;
 339:
                    var14 = var5 != var14;
                    var12 = var14;
                    if(var14) { _fun0006_ip = 374; continue _fun0006 }
 349:
                    var14 = var13;
                    var15 = var5 == var14;
                    var14 = undefined;
                    if(var15) { _fun0006_ip = 370; continue _fun0006 }
 361:
                    var15 = var13;
                    var14 = var15.reward_sku_ids;
 370:
                    var12 = var5 != var14;
 374:
                    var11 = var12;
                    if(var12) { _fun0006_ip = 402; continue _fun0006 }
 380:
                    var12 = var13;
                    var14 = var5 == var12;
                    var12 = undefined;
                    if(var14) { _fun0006_ip = 398; continue _fun0006 }
 392:
                    var12 = var13.recipient_id;
 398:
                    var11 = var5 != var12;
 402:
                    var3['isGift'] = var11;
                    var11 = 'restoreFromLocalReceipt';
                    var3['source'] = var11;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=424);
 422:
                    return var3;
 424:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 509; continue _fun0006 }
 430:
                    var4 = var3;
                    var11 = var5 == var3;
                    var7 = var11;
                    if(!var11) { _fun0006_ip = 453; continue _fun0006 }
 443:
                    var11 = var10;
                    var10 = var9;
                    var7 = var11 !== var10;
 453:
                    if(var7) { _fun0006_ip = 502; continue _fun0006 }
 456:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 19;
                    var6 = var10[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var6['type'] = var10;
                    var6['key'] = var9;
                    var6 = var7.bind(var8)(var6);
 502:
                    var4 = var5 != var4;
 506: // try_end0
                    return var4;
 509:
                    return var3;
 512:
                    return var2;
 515: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
 522:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function handlePurchaseException(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot23;
            var3 = var4.has;
            var2 = var1.code;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0007_ip = 518; continue _fun0007 }
 31:
            var2 = var1.message;
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var3 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var3 = 32;
            var3 = var5[var3];
            var10 = undefined;
            var4 = var4.bind(var10)(var3);
            var3 = var4.getUnderlyingIOSError;
            var5 = var3.bind(var4)(var1);
            var7 = null;
            if(!(var7 == var5)) { _fun0007_ip = 424; continue _fun0007 }
 97:
            var9 = _closure1_slot0;
            var3 = _closure1_slot3;
            var11 = 27;
            var4 = var3[var11];
            var4 = var9.bind(var10)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var3 = var3[var11];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3.PjfUXV;
            var12 = var4.bind(var8)(var3);
            var4 = var1.name;
            var3 = 'HTTPResponseError';
            var8 = var12;
            if(!(var3 !== var4)) { _fun0007_ip = 207; continue _fun0007 }
 168:
            var3 = 'status';
            var3 = var3 in var1;
            if(!var3) { _fun0007_ip = 193; continue _fun0007 }
 179:
            var3 = 'method';
            var3 = var3 in var1;
            var8 = var12;
            if(var3) { _fun0007_ip = 207; continue _fun0007 }
 193:
            var3 = var1.message;
            if(var3) { _fun0007_ip = 204; continue _fun0007 }
 201:
            var3 = var12;
 204:
            var8 = var3;
 207:
            var3 = var1.body;
            var9 = var8;
            if(!(var7 != var3)) { _fun0007_ip = 275; continue _fun0007 }
 219:
            var3 = var1.body;
            var4 = var3.apple_error_code;
            var9 = var8;
            if(!(var7 != var4)) { _fun0007_ip = 275; continue _fun0007 }
 237:
            var15 = var3.apple_error_code;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var18 = '';
            var16 = ' (code: ';
            var14 = ')';
            var17 = var12;
            var9 = var18[var7](var17, var16, var15, var14, var13);
 275:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 29;
            var2 = var4[var2];
            var8 = var3.bind(var10)(var2);
            var7 = var8.show;
            var2 = {};
            var3 = _closure1_slot0;
            var12 = var4[var11];
            var12 = var3.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var4[var11];
            var11 = var3.bind(var10)(var11);
            var11 = var11.t;
            var11 = var11.zrhHHx;
            var11 = var12.bind(var13)(var11);
            var2['title'] = var11;
            var2['body'] = var9;
            var9 = true;
            var2['isDismissable'] = var9;
            var2 = var7.bind(var8)(var2);
            var2 = 17;
            var2 = var4[var2];
            var4 = var3.bind(var10)(var2);
            var3 = var4.captureBillingException;
            var2 = {};
            var7 = {};
            var8 = _closure1_slot21;
            var7['source'] = var8;
            var8 = arg2;
            var7['purchase_type'] = var8;
            var2['tags'] = var7;
            var2 = var3.bind(var4)(var1, var2);
            throw var1;
 424:
            var3 = _closure1_slot1;
            var11 = _closure1_slot3;
            var2 = 29;
            var2 = var11[var2];
            var4 = var3.bind(var10)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 27;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.POsVOj;
            var6 = var7.bind(var8)(var6);
            var2['title'] = var6;
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
            throw var1;
 518:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function canMakeIAPRequest() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = _closure1_slot14;
            var1 = var2.isBusy;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(!var1) { _fun0008_ip = 119; continue _fun0008 }
 23:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 25;
            var2 = var5[var2];
            var5 = undefined;
            var8 = var3.bind(var5)(var2);
            var7 = var8.getCurrentConfig;
            var6 = {};
            var2 = '1ee357_2';
            var6['location'] = var2;
            var2 = {};
            var3 = false;
            var2['autoTrackExposure'] = var3;
            var2 = var7.bind(var8)(var6, var2);
            var2 = var2.paymentsBlocked;
            var2 = !var2;
            if(var2) { _fun0008_ip = 116; continue _fun0008 }
 90:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 26;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var2 = false;
 116:
            var1 = var2;
 119:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function clearAndMakeIAPRequest() {
        var1 = undefined;
        var4 = _closure1_slot33;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function _clearAndMakeIAPRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 653; continue _fun0009 }
 10:
                    var9 = arg1;
                    var13 = arg2;
                    var11 = arg3;
                    var6 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var17 = undefined;
                    var12 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var5 = undefined;
                    var8 = false;
                    var10 = null;
                    var7 = null;
 41: // try_start_0 // try_start_1
                    var16 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var3 = 22;
                    var3 = var20[var3];
                    var16 = var16.bind(var6)(var3);
                    var3 = var16.clearTransactionIOS;
                    var3 = var3.bind(var16)();
                    SaveGenerator(address=78);
 76:
                    return var3;
 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=15);
                    if(var16) { _fun0009_ip = 426; continue _fun0009 }
 87:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var16 = 18;
                    var16 = var21[var16];
                    var20 = var20.bind(var6)(var16);
                    var16 = var20.makeIAPRequest;
                    var11 = var16.bind(var20)(var13, var11);
                    SaveGenerator(address=123);
 121:
                    return var11;
 123:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0009_ip = 354; continue _fun0009 }
 132:
                    var12 = var11;
                    var8 = true;
                    var13 = var11.purchaseResponse;
                    var16 = var13.transactionIdentifier;
                    var13 = var16.toString;
                    var15 = var13.bind(var16)();
                    var13 = var11.purchaseResponse;
                    var14 = var13.transactionDate;
                    var13 = {};
                    var16 = var11.purchaseResponse;
                    var16 = var16.originalTransactionIdentifier;
                    var19 = var16;
                    var20 = var10 == var16;
                    var16 = undefined;
                    if(var20) { _fun0009_ip = 208; continue _fun0009 }
 196:
                    var20 = var19;
                    var19 = var20.toString;
                    var16 = var19.bind(var20)();
 208:
                    var18 = var16;
                    if(!(var10 == var16)) { _fun0009_ip = 220; continue _fun0009 }
 215:
                    var16 = var15;
                    _fun0009_ip = 223; continue _fun0009;
 220:
                    var16 = var18;
 223:
                    var13['original_transaction_id'] = var16;
                    var16 = var12;
                    var16 = var16.purchaseResponse;
                    var16 = var16.originalTransactionDate;
                    var17 = var16;
                    if(!(var10 == var16)) { _fun0009_ip = 257; continue _fun0009 }
 252:
                    var16 = var14;
                    _fun0009_ip = 260; continue _fun0009;
 257:
                    var16 = var17;
 260:
                    var13['original_transaction_date'] = var16;
                    var13['transaction_id'] = var15;
                    var13['transaction_date'] = var14;
                    var7 = var13;
 282: // try_end0 // try_end1
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var13 = 15;
                    var13 = var15[var13];
                    var16 = var14.bind(var6)(var13);
                    var15 = var16.track;
                    var13 = _closure1_slot15;
                    var14 = var13.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var13 = {};
                    var17 = var9;
                    var13['request_identifier'] = var17;
                    var17 = var8;
                    var13['success'] = var17;
                    var22 = var7;
                    var23 = var13;
                    var17 = copyDataProperties(var23, var22);
                    var13 = var15.bind(var16)(var14, var13);
                    return var12;
 354:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var12 = 15;
                    var12 = var14[var12];
                    var15 = var13.bind(var6)(var12);
                    var14 = var15.track;
                    var12 = _closure1_slot15;
                    var13 = var12.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var12 = {};
                    var16 = var9;
                    var12['request_identifier'] = var16;
                    var16 = var8;
                    var12['success'] = var16;
                    var22 = var7;
                    var23 = var12;
                    var16 = copyDataProperties(var23, var22);
                    var12 = var14.bind(var15)(var13, var12);
                    return var11;
 426:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var11 = 15;
                    var11 = var13[var11];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.track;
                    var4 = _closure1_slot15;
                    var11 = var4.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var4 = {};
                    var14 = var9;
                    var4['request_identifier'] = var14;
                    var14 = var8;
                    var4['success'] = var14;
                    var22 = var7;
                    var23 = var4;
                    var14 = copyDataProperties(var23, var22);
                    var4 = var12.bind(var13)(var11, var4);
                    return var3;
 498: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var3 = {};
                    var4 = var4.code;
                    var5 = var4;
                    var10 = var10 == var4;
                    var4 = undefined;
                    if(var10) { _fun0009_ip = 534; continue _fun0009 }
 522:
                    var10 = var5;
                    var5 = var10.toString;
                    var4 = var5.bind(var10)();
 534:
                    var3['error_code'] = var4;
                    var5 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var4 = 32;
                    var4 = var10[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getUnderlyingIOSError;
                    var4 = var4.bind(var5)(var2);
                    var3['error_message'] = var4;
                    var7 = var3;
                    throw var2;
 583: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 15;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot15;
                    var4 = var3.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var3 = {};
                    var3['request_identifier'] = var9;
                    var3['success'] = var8;
                    var22 = var7;
                    var23 = var3;
                    var7 = copyDataProperties(var23, var22);
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
 653:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var5 = function getIAPJWTRequestData() {
        var1 = undefined;
        var4 = _closure1_slot35;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var5;
    var1 = function _getIAPJWTRequestData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 189; continue _fun0010 }
 15:
                    var _closure4_slot0 = var5;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 33;
                    var2 = var11[var2];
                    var10 = undefined;
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var6 = _closure1_slot17;
                    var6 = var6.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = 34;
                    var8 = var11[var8];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.APPLE_JWT_TOKEN_CREATE;
                    var6['event'] = var8;
                    var7 = function properties(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var7 = arg1;
                            var1 = _closure4_slot0;
                            var4 = var1.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = 35;
                            var3 = var3[var6];
                            var9 = undefined;
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0011_ip = 233; continue _fun0011 }
 60:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0011_ip = 124; continue _fun0011 }
 103:
                            var3 = {};
                            var12 = _closure4_slot0;
                            var13 = var3;
                            var4 = copyDataProperties(var13, var12);
                            var4 = var3;
                            _fun0011_ip = 306; continue _fun0011;
 124:
                            var11 = _closure4_slot0;
                            var8 = var11.sku_id;
                            var6 = var11.country_code;
                            var5 = var11.is_gift;
                            var10 = var11.gift_info_options;
                            var3 = {};
                            var3['sku_id'] = var8;
                            var3['request_country_code'] = var6;
                            var8 = _closure1_slot6;
                            var6 = _closure1_slot5;
                            var12 = var8.bind(var9)(var11, var6);
                            var13 = var3;
                            var6 = copyDataProperties(var13, var12);
                            var6 = null;
                            if(!(var6 != var10)) { _fun0011_ip = 216; continue _fun0011 }
 191:
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var3['gift_info_options'] = var6;
 216:
                            var4 = var3;
                            if(!var5) { _fun0011_ip = 306; continue _fun0011 }
 222:
                            var3['is_gift'] = var5;
                            var4 = var3;
                            _fun0011_ip = 306; continue _fun0011;
 233:
                            var6 = _closure4_slot0;
                            var10 = var6.items;
                            var5 = var6.country_code;
                            var3 = _closure1_slot6;
                            var2 = _closure1_slot4;
                            var12 = var3.bind(var9)(var6, var2);
                            var2 = {};
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var2['subscription_items_json_string'] = var6;
                            var2['request_country_code'] = var5;
                            var13 = var2;
                            var3 = copyDataProperties(var13, var12);
                            var4 = var2;
 306:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 36;
                            var1 = var3[var1];
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0011_ip = 365; continue _fun0011 }
 345:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0011_ip = 365; continue _fun0011 }
 359:
                            var6 = var7.request_data;
 365:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0011_ip = 379; continue _fun0011 }
 376:
                            var5 = var6;
 379:
                            var6 = var5.length;
                            var5 = 0;
                            var5 = var6 > var5;
                            var1['jwt_token_exists'] = var5;
                            var13 = var1;
                            var12 = var4;
                            var4 = copyDataProperties(var13, var12);
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=140);
 138:
                    return var2;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 186; continue _fun0010 }
 146:
                    var3 = {};
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.stringify;
                    var4 = var2.body;
                    var4 = var4.request_data;
                    var4 = var5.bind(var6)(var4);
                    var3['requestJSONString'] = var4;
                    return var3;
 186:
                    return var2;
 189:
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
    var4 = function updateAppleSubscription() {
        var1 = undefined;
        var4 = _closure1_slot37;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var4;
    var1 = function _updateAppleSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 165; continue _fun0012 }
 15:
                    var _closure4_slot0 = var6;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 33;
                    var2 = var10[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.patch;
                    var2 = {};
                    var12 = _closure1_slot17;
                    var11 = var12.BILLING_APPLE_SUBSCRIPTION;
                    var9 = var6.subscription_id;
                    var9 = var11.bind(var12)(var9);
                    var2['url'] = var9;
                    var2['body'] = var6;
                    var6 = true;
                    var2['oldFormErrors'] = var6;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = 34;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.APPLE_JWT_TOKEN_CREATE;
                    var6['event'] = var8;
                    var7 = function properties(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var7 = arg1;
                            var4 = {};
                            var10 = _closure4_slot0;
                            var11 = var4;
                            var1 = copyDataProperties(var11, var10);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 36;
                            var1 = var3[var1];
                            var9 = undefined;
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 83; continue _fun0013 }
 63:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 83; continue _fun0013 }
 77:
                            var6 = var7.request_data;
 83:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0013_ip = 97; continue _fun0013 }
 94:
                            var5 = var6;
 97:
                            var6 = var5.length;
                            var5 = 0;
                            var5 = var6 > var5;
                            var1['jwt_token_exists'] = var5;
                            var11 = var1;
                            var10 = var4;
                            var4 = copyDataProperties(var11, var10);
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=153);
 151:
                    return var2;
 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 162; continue _fun0012 }
 159:
                    return var3;
 162:
                    return var2;
 165:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot37 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function _cancelGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 316; continue _fun0014 }
 10:
                    var10 = arg1;
                    var7 = arg2;
                    var3 = undefined;
                    var9 = undefined;
                    var2 = _closure1_slot31;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0014_ip = 310; continue _fun0014 }
 37:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var5 = 23;
                    var5 = var2[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.ProductIds;
                    var11 = var5.GENERIC_SUBSCRIPTION;
                    var9 = var11;
                    var5 = _closure1_slot1;
                    var8 = 19;
                    var2 = var2[var8];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var12 = 'IAP_PURCHASE_PRODUCT_START';
                    var2['type'] = var12;
                    var2['productIdentifier'] = var11;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=119);
 117:
                    return var2;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 313; continue _fun0014 }
 128: // try_start_0
                    var6 = _closure1_slot36;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 35;
                    var11 = var13[var11];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.APBRequestOperations;
                    var11 = var11.CANCEL;
                    var5['operation'] = var11;
                    var5['request_identifier'] = var10;
                    var5['subscription_id'] = var7;
                    var5 = var6.bind(var3)(var5);
                    SaveGenerator(address=190);
 188:
                    return var5;
 190:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0014_ip = 245; continue _fun0014 }
 196:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var8];
                    var10 = var7.bind(var3)(var6);
                    var7 = var10.dispatch;
                    var6 = {};
                    var11 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var6['type'] = var11;
                    var11 = var9;
                    var6['productIdentifier'] = var11;
                    var6 = var7.bind(var10)(var6);
 243: // try_end0
                    _fun0014_ip = 310; continue _fun0014;
 245:
                    return var5;
 248: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var10 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var5['type'] = var10;
                    var5['productIdentifier'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = _closure1_slot30;
                    var4 = 'partner_subscription';
                    var4 = var5.bind(var3)(var6, var4);
 310:
                    return var3;
 313:
                    return var2;
 316:
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
    var1 = function isValidCurrency(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot16;
        var3 = var2.bind(var3)(var1);
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function _createGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 650; continue _fun0015 }
 13:
                    var7 = var2.requestIdentifier;
                    var11 = var2.items;
                    var15 = var2.currency;
                    var13 = var2.countryCode;
                    var4 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=47);
 45:
                    return var4;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 647; continue _fun0015 }
 56:
                    var3 = _closure1_slot31;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0015_ip = 641; continue _fun0015 }
 73:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var6 = 23;
                    var6 = var3[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.ProductIds;
                    var12 = var6.GENERIC_SUBSCRIPTION;
                    var10 = var12;
                    var6 = _closure1_slot1;
                    var9 = 19;
                    var3 = var3[var9];
                    var8 = var6.bind(var4)(var3);
                    var6 = var8.dispatch;
                    var3 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var16;
                    var3['productIdentifier'] = var12;
                    var3 = var6.bind(var8)(var3);
                    SaveGenerator(address=155);
 153:
                    return var3;
 155:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 644; continue _fun0015 }
 164: // try_start_0
                    var8 = _closure1_slot39;
                    var6 = var15;
                    var6 = var8.bind(var4)(var6);
                    if(var6) { _fun0015_ip = 241; continue _fun0015 }
 179:
                    var6 = global;
                    var12 = var6.Error;
                    var17 = var15;
                    var6 = var6.HermesInternal;
                    var16 = var6.concat;
                    var8 = "Unable to create subscription with invalid currency '";
                    var6 = "' ";
                    var20 = var16.bind(var8)(var17, var6);
                    var8 = var12.prototype;
                    var8 = Object.create(var8, {constructor: {value: var12}});
                    var21 = var8;
                    var6 = new var21[var12](var20, var19);
                    var6 = var6 instanceof Object ? var6 : var8;
                    throw var6;
 241:
                    var8 = _closure1_slot34;
                    var6 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var12 = 35;
                    var12 = var17[var12];
                    var12 = var16.bind(var4)(var12);
                    var12 = var12.APBRequestOperations;
                    var12 = var12.CREATE;
                    var6['operation'] = var12;
                    var12 = var7;
                    var6['request_identifier'] = var12;
                    var16 = var11;
                    var12 = var16.map;
                    var11 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.planId;
                        var1['plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var11 = var12.bind(var16)(var11);
                    var6['items'] = var11;
                    var11 = var15;
                    var6['currency'] = var11;
                    var11 = var13;
                    var6['country_code'] = var11;
                    var6 = var8.bind(var4)(var6);
                    SaveGenerator(address=342);
 340:
                    return var6;
 342:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 576; continue _fun0015 }
 351:
                    var12 = var6.requestJSONString;
                    var11 = _closure1_slot32;
                    var8 = var7;
                    var7 = var10;
                    var7 = var11.bind(var4)(var8, var12, var7);
                    SaveGenerator(address=378);
 376:
                    return var7;
 378:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 573; continue _fun0015 }
 387:
                    var12 = var7.purchaseResponse;
                    var14 = var7.originalPurchase;
                    var11 = _closure1_slot26;
                    var8 = {};
                    var16 = var12.transactionReceipt;
                    var8['encodedReceipt'] = var16;
                    var16 = 3;
                    var8['retries'] = var16;
                    var8['presentmentCurrency'] = var15;
                    var8['appStoreRegion'] = var13;
                    var12 = var12.jwsRepresentation;
                    var8['jwsRepresentation'] = var12;
                    var12 = 'createGenericSubscription';
                    var8['source'] = var12;
                    var8 = var11.bind(var4)(var8);
                    SaveGenerator(address=464);
 462:
                    return var8;
 464:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0015_ip = 570; continue _fun0015 }
 470:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 22;
                    var11 = var13[var11];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.finishTransaction;
                    var11 = {};
                    var11['purchase'] = var14;
                    var11 = var12.bind(var13)(var11);
                    SaveGenerator(address=512);
 510:
                    return var11;
 512:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 567; continue _fun0015 }
 518:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var12 = var12[var9];
                    var14 = var13.bind(var4)(var12);
                    var13 = var14.dispatch;
                    var12 = {};
                    var15 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var12['type'] = var15;
                    var15 = var10;
                    var12['productIdentifier'] = var15;
                    var12 = var13.bind(var14)(var12);
 565: // try_end0
                    _fun0015_ip = 641; continue _fun0015;
 567:
                    return var11;
 570:
                    return var8;
 573:
                    return var7;
 576:
                    return var6;
 579: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var9 = var8.bind(var4)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var6['type'] = var11;
                    var6['productIdentifier'] = var10;
                    var6 = var8.bind(var9)(var6);
                    var6 = _closure1_slot30;
                    var5 = 'partner_subscription';
                    var5 = var6.bind(var4)(var7, var5);
 641:
                    return var4;
 644:
                    return var3;
 647:
                    return var2;
 650:
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
    var1 = function _resubscribeGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 574; continue _fun0016 }
 13:
                    var7 = var2.requestIdentifier;
                    var11 = var2.subscriptionId;
                    var6 = arg2;
                    var4 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=40);
 38:
                    return var4;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 571; continue _fun0016 }
 49:
                    var3 = _closure1_slot31;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0016_ip = 565; continue _fun0016 }
 66:
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 23;
                    var8 = var3[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.ProductIds;
                    var15 = var8.GENERIC_SUBSCRIPTION;
                    var10 = var15;
                    var8 = _closure1_slot1;
                    var9 = 19;
                    var3 = var3[var9];
                    var13 = var8.bind(var4)(var3);
                    var8 = var13.dispatch;
                    var3 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var16;
                    var3['productIdentifier'] = var15;
                    var3 = var8.bind(var13)(var3);
                    SaveGenerator(address=148);
 146:
                    return var3;
 148:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 568; continue _fun0016 }
 157:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var8 = 35;
                    var8 = var15[var8];
                    var8 = var13.bind(var4)(var8);
                    var8 = var8.APBRequestOperations;
                    var12 = var8.REACTIVATE;
 189: // try_start_0
                    if(var6) { _fun0016_ip = 243; continue _fun0016 }
 192:
                    var8 = _closure1_slot36;
                    var6 = {};
                    var13 = var12;
                    var6['operation'] = var13;
                    var13 = var7;
                    var6['request_identifier'] = var13;
                    var13 = var11;
                    var6['subscription_id'] = var13;
                    var6 = var8.bind(var4)(var6);
                    SaveGenerator(address=231);
 229:
                    return var6;
 231:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(!var8) { _fun0016_ip = 442; continue _fun0016 }
 240: // try_end0
                    return var6;
 243: // try_start_1
                    var8 = _closure1_slot34;
                    var6 = {};
                    var6['operation'] = var12;
                    var12 = var7;
                    var6['request_identifier'] = var12;
                    var6['subscription_id'] = var11;
                    var6 = var8.bind(var4)(var6);
                    SaveGenerator(address=276);
 274:
                    return var6;
 276:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 500; continue _fun0016 }
 285:
                    var12 = var6.requestJSONString;
                    var11 = _closure1_slot32;
                    var8 = var7;
                    var7 = var10;
                    var7 = var11.bind(var4)(var8, var12, var7);
                    SaveGenerator(address=312);
 310:
                    return var7;
 312:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 497; continue _fun0016 }
 321:
                    var12 = var7.purchaseResponse;
                    var14 = var7.originalPurchase;
                    var11 = _closure1_slot26;
                    var8 = {};
                    var13 = var12.transactionReceipt;
                    var8['encodedReceipt'] = var13;
                    var13 = 3;
                    var8['retries'] = var13;
                    var12 = var12.jwsRepresentation;
                    var8['jwsRepresentation'] = var12;
                    var12 = 'resubscribeGenericSubscription';
                    var8['source'] = var12;
                    var8 = var11.bind(var4)(var8);
                    SaveGenerator(address=388);
 386:
                    return var8;
 388:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0016_ip = 494; continue _fun0016 }
 394:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 22;
                    var11 = var13[var11];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.finishTransaction;
                    var11 = {};
                    var11['purchase'] = var14;
                    var11 = var12.bind(var13)(var11);
                    SaveGenerator(address=436);
 434:
                    return var11;
 436:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0016_ip = 491; continue _fun0016 }
 442:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var12 = var12[var9];
                    var14 = var13.bind(var4)(var12);
                    var13 = var14.dispatch;
                    var12 = {};
                    var15 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var12['type'] = var15;
                    var15 = var10;
                    var12['productIdentifier'] = var15;
                    var12 = var13.bind(var14)(var12);
 489: // try_end1
                    _fun0016_ip = 565; continue _fun0016;
 491:
                    return var11;
 494:
                    return var8;
 497:
                    return var7;
 500:
                    return var6;
 503: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=6);
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var9 = var8.bind(var4)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var6['type'] = var11;
                    var6['productIdentifier'] = var10;
                    var6 = var8.bind(var9)(var6);
                    var6 = _closure1_slot30;
                    var5 = 'partner_subscription';
                    var5 = var6.bind(var4)(var7, var5);
 565:
                    return var4;
 568:
                    return var3;
 571:
                    return var2;
 574:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot41 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function _retryPendingPurchases() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 818; continue _fun0017 }
 10:
                    var14 = arg1;
                    var15 = arg2;
                    var6 = undefined;
                    var3 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var20 = undefined;
                    var21 = undefined;
                    var22 = undefined;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var13 = 22;
                    var2 = var2[var13];
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.getPendingPurchasesIOS;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=71);
 69:
                    return var2;
 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0017_ip = 815; continue _fun0017 }
 80:
                    var3 = new Array(0);
                    var5 = var2.length;
                    var7 = 0;
                    if(!(var7 !== var5)) { _fun0017_ip = 810; continue _fun0017 }
 98:
                    var5 = _closure1_slot24;
                    var5 = var5.bind(var6)(var2);
                    var17 = var5;
                    var5 = var5.bind(var6)();
                    var16 = var5;
                    var5 = var5.done;
                    var12 = null;
                    var11 = 15;
                    var10 = '';
                    var9 = 3;
                    var8 = 'retryPendingPurchases';
                    if(var5) { _fun0017_ip = 616; continue _fun0017 }
 146:
                    var5 = var16;
                    var18 = var5.value;
 154: // try_start_0
                    var24 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var11];
                    var26 = var24.bind(var6)(var5);
                    var25 = var26.track;
                    var5 = _closure1_slot15;
                    var24 = var5.APPLE_RETRY_PENDING_PURCHASE_STARTED;
                    var5 = {};
                    var27 = var18;
                    var28 = var27.productId;
                    var5['product_id'] = var28;
                    var27 = var27.transactionId;
                    var19 = var27;
                    var28 = var12 != var27;
                    var27 = var10;
                    if(!var28) { _fun0017_ip = 224; continue _fun0017 }
 221:
                    var27 = var19;
 224:
                    var5['transaction_id'] = var27;
                    var5 = var25.bind(var26)(var24, var5);
                    var24 = _closure1_slot26;
                    var5 = {};
                    var25 = var18;
                    var26 = var25.transactionReceipt;
                    var5['encodedReceipt'] = var26;
                    var5['retries'] = var9;
                    var26 = var14;
                    var5['presentmentCurrency'] = var26;
                    var26 = var15;
                    var5['appStoreRegion'] = var26;
                    var25 = var25.verificationResultIOS;
                    var5['jwsRepresentation'] = var25;
                    var5['source'] = var8;
                    var5 = var24.bind(var6)(var5);
                    SaveGenerator(address=300);
 298:
                    return var5;
 300:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=23);
                    if(var24) { _fun0017_ip = 446; continue _fun0017 }
 309:
                    var25 = _closure1_slot0;
                    var24 = _closure1_slot3;
                    var24 = var24[var13];
                    var26 = var25.bind(var6)(var24);
                    var25 = var26.finishTransaction;
                    var24 = {};
                    var27 = var18;
                    var24['purchase'] = var27;
                    var24 = var25.bind(var26)(var24);
                    SaveGenerator(address=351);
 349:
                    return var24;
 351:
                    ResumeGenerator(result_out_reg=23, return_bool_out_reg=24);
                    if(var25) { _fun0017_ip = 443; continue _fun0017 }
 357:
                    var26 = _closure1_slot1;
                    var25 = _closure1_slot3;
                    var25 = var25[var11];
                    var28 = var26.bind(var6)(var25);
                    var27 = var28.track;
                    var25 = _closure1_slot15;
                    var26 = var25.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED;
                    var25 = {};
                    var29 = var18;
                    var30 = var29.productId;
                    var25['product_id'] = var30;
                    var29 = var29.transactionId;
                    var20 = var29;
                    var30 = var12 != var29;
                    var29 = var10;
                    if(!var30) { _fun0017_ip = 427; continue _fun0017 }
 424:
                    var29 = var20;
 427:
                    var25['transaction_id'] = var29;
                    var25 = var27.bind(var28)(var26, var25);
 438: // try_end0
                    _fun0017_ip = 595; continue _fun0017;
 443:
                    return var24;
 446:
                    return var5;
 449: // catch_target0
                    CatchBlockStart(arg_register=22);
                    var24 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var11];
                    var27 = var24.bind(var6)(var5);
                    var26 = var27.track;
                    var5 = _closure1_slot15;
                    var24 = var5.APPLE_RETRY_PENDING_PURCHASE_FAILED;
                    var5 = {};
                    var25 = var18;
                    var28 = var25.productId;
                    var5['product_id'] = var28;
                    var25 = var25.transactionId;
                    var21 = var25;
                    var28 = var12 != var25;
                    var25 = var10;
                    if(!var28) { _fun0017_ip = 521; continue _fun0017 }
 518:
                    var25 = var21;
 521:
                    var5['transaction_id'] = var25;
                    var25 = var23;
                    var25 = var25.code;
                    var22 = var25;
                    var28 = var12 == var25;
                    var25 = undefined;
                    if(var28) { _fun0017_ip = 558; continue _fun0017 }
 546:
                    var29 = var22;
                    var28 = var29.toString;
                    var25 = var28.bind(var29)();
 558:
                    var5['error_code'] = var25;
                    var25 = var23;
                    var28 = var25.message;
                    var5['error_message'] = var28;
                    var5 = var26.bind(var27)(var24, var5);
                    var24 = var3;
                    var5 = var24.push;
                    var5 = var5.bind(var24)(var25);
 595:
                    var5 = var17;
                    var5 = var5.bind(var6)();
                    var16 = var5;
                    var5 = var5.done;
                    if(!var5) { _fun0017_ip = 146; continue _fun0017 }
 616:
                    var5 = var3;
                    var5 = var5.length;
                    if(!(!(var5 > var7))) { _fun0017_ip = 633; continue _fun0017 }
 628:
                    var5 = true;
                    return var5;
 633:
                    var8 = var3;
                    var5 = var8.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.message;
                        return var1;
                    };
                    var7 = var5.bind(var8)(var3);
                    var5 = var7.join;
                    var3 = ', ';
                    var9 = var5.bind(var7)(var3);
                    var3 = global;
                    var5 = var3.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'Failed to retry pending purchases: ';
                    var7 = var7.bind(var5)(var9);
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 17;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.captureBillingException;
                    var3 = var3.Error;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var33 = var4;
                    var32 = var7;
                    var3 = new var33[var3](var32, var31);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = {};
                    var7 = {};
                    var9 = var8.length;
                    var8 = var9.toString;
                    var8 = var8.bind(var9)();
                    var7['pendingPurchaseFailures'] = var8;
                    var9 = var2.length;
                    var8 = var9.toString;
                    var8 = var8.bind(var9)();
                    var7['totalPendingPurchases'] = var8;
                    var3['tags'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = false;
                    return var3;
 810:
                    var3 = true;
                    return var3;
 815:
                    return var2;
 818:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot42 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function _mobilePurchaseSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 1397; continue _fun0018 }
 13:
                    var17 = var2.requestIdentifier;
                    var9 = var2.skuId;
                    var22 = var2.currency;
                    var14 = var2.countryCode;
                    var25 = var2.analyticsLocations;
                    var26 = var2.analyticsLoadId;
                    var13 = var2.isGift;
                    var8 = var2.giftInfoOptions;
                    var15 = arg2;
                    var7 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var21 = undefined;
                    var23 = undefined;
                    var24 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=82);
 80:
                    return var7;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 1394; continue _fun0018 }
 91:
                    var3 = _closure1_slot31;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0018_ip = 110; continue _fun0018 }
 105:
                    var3 = false;
                    return var3;
 110:
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var11 = 23;
                    var11 = var3[var11];
                    var11 = var12.bind(var7)(var11);
                    var11 = var11.ProductIds;
                    var20 = var11.GENERIC_CONSUMABLE;
                    var19 = var20;
                    var12 = _closure1_slot1;
                    var11 = 19;
                    var3 = var3[var11];
                    var16 = var12.bind(var7)(var3);
                    var12 = var16.dispatch;
                    var3 = {};
                    var27 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var27;
                    var3['productIdentifier'] = var20;
                    var3 = var12.bind(var16)(var3);
                    SaveGenerator(address=192);
 190:
                    return var3;
 192:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(var12) { _fun0018_ip = 1391; continue _fun0018 }
 201:
                    var16 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var12 = 37;
                    var12 = var20[var12];
                    var20 = var16.bind(var7)(var12);
                    var16 = var20.trackPaymentFlowStartedAnalyticsAndCTP;
                    var12 = {};
                    var27 = var9;
                    var12['sku_id'] = var27;
                    var27 = var26;
                    var12['load_id'] = var27;
                    var27 = var25;
                    var12['location_stack'] = var27;
                    var27 = _closure1_slot18;
                    var27 = var27.APPLE_PARTNER;
                    var12['payment_gateway'] = var27;
                    var12 = var16.bind(var20)(var12);
 273: // try_start_0
                    var16 = _closure1_slot39;
                    var12 = var22;
                    var12 = var16.bind(var7)(var12);
                    if(var12) { _fun0018_ip = 350; continue _fun0018 }
 288:
                    var12 = global;
                    var20 = var12.Error;
                    var28 = var22;
                    var12 = var12.HermesInternal;
                    var27 = var12.concat;
                    var16 = "Unable to create subscription with invalid currency '";
                    var12 = "' ";
                    var32 = var27.bind(var16)(var28, var12);
                    var16 = var20.prototype;
                    var16 = Object.create(var16, {constructor: {value: var20}});
                    var33 = var16;
                    var12 = new var33[var20](var32, var31);
                    var12 = var12 instanceof Object ? var12 : var16;
                    throw var12;
 350:
                    var20 = var22;
                    var16 = var14;
                    var12 = function retryPendingPurchases() {
                        var1 = undefined;
                        var4 = _closure1_slot42;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var12 = var12.bind(var7)(var20, var16);
                    SaveGenerator(address=373);
 371:
                    return var12;
 373:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                    if(var16) { _fun0018_ip = 1004; continue _fun0018 }
 382:
                    var20 = _closure1_slot34;
                    var16 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot3;
                    var27 = 35;
                    var27 = var29[var27];
                    var27 = var28.bind(var7)(var27);
                    var27 = var27.APBRequestOperations;
                    var27 = var27.CHARGE;
                    var16['operation'] = var27;
                    var27 = var9;
                    var16['sku_id'] = var27;
                    var27 = var17;
                    var16['request_identifier'] = var27;
                    var27 = var22;
                    var16['currency'] = var27;
                    var27 = var14;
                    var16['country_code'] = var27;
                    var27 = var13;
                    var16['is_gift'] = var27;
                    var27 = var8;
                    var16['gift_info_options'] = var27;
                    var16 = var20.bind(var7)(var16);
                    SaveGenerator(address=482);
 480:
                    return var16;
 482:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=19);
                    if(var20) { _fun0018_ip = 1001; continue _fun0018 }
 491:
                    var28 = var16.requestJSONString;
                    var27 = _closure1_slot32;
                    var20 = var17;
                    var17 = var19;
                    var17 = var27.bind(var7)(var20, var28, var17);
                    SaveGenerator(address=518);
 516:
                    return var17;
 518:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=19);
                    if(var20) { _fun0018_ip = 998; continue _fun0018 }
 527:
                    var20 = var17.purchaseResponse;
                    var21 = var20;
                    var23 = var17.originalPurchase;
                    var27 = var20.jwsRepresentation;
                    var18 = var27;
                    var20 = null;
                    if(!(var20 == var27)) { _fun0018_ip = 568; continue _fun0018 }
 557:
                    var20 = var21;
                    var27 = var20.transactionReceipt;
                    _fun0018_ip = 571; continue _fun0018;
 568:
                    var27 = var18;
 571:
                    var20 = _closure1_slot1;
                    var28 = _closure1_slot3;
                    var18 = 13;
                    var18 = var28[var18];
                    var20 = var20.bind(var7)(var18);
                    var18 = var20.v3;
                    var24 = var18.bind(var20)(var27);
                    var18 = var13;
                    if(!var18) { _fun0018_ip = 671; continue _fun0018 }
 608:
                    var20 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var18 = var18[var11];
                    var27 = var20.bind(var7)(var18);
                    var20 = var27.dispatch;
                    var18 = {};
                    var28 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var18['type'] = var28;
                    var28 = var24;
                    var18['key'] = var28;
                    var28 = {};
                    var31 = var8;
                    var32 = var28;
                    var29 = copyDataProperties(var32, var31);
                    var18['giftOptions'] = var28;
                    var18 = var20.bind(var27)(var18);
 671:
                    var20 = _closure1_slot26;
                    var18 = {};
                    var27 = var21.transactionReceipt;
                    var18['encodedReceipt'] = var27;
                    var27 = 3;
                    var18['retries'] = var27;
                    var18['presentmentCurrency'] = var22;
                    var22 = var14;
                    var18['appStoreRegion'] = var22;
                    var22 = var8;
                    var18['giftInfoOptions'] = var22;
                    var22 = var13;
                    var18['isGift'] = var22;
                    var21 = var21.jwsRepresentation;
                    var18['jwsRepresentation'] = var21;
                    var21 = 'mobilePurchaseSKU';
                    var18['source'] = var21;
                    var18 = var20.bind(var7)(var18);
                    SaveGenerator(address=755);
 753:
                    return var18;
 755:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=19);
                    if(var20) { _fun0018_ip = 995; continue _fun0018 }
 764:
                    var20 = var13;
                    if(!var20) { _fun0018_ip = 813; continue _fun0018 }
 770:
                    var21 = _closure1_slot1;
                    var20 = _closure1_slot3;
                    var20 = var20[var11];
                    var22 = var21.bind(var7)(var20);
                    var21 = var22.dispatch;
                    var20 = {};
                    var27 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var20['type'] = var27;
                    var20['key'] = var24;
                    var20 = var21.bind(var22)(var20);
 813:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 22;
                    var20 = var22[var20];
                    var22 = var21.bind(var7)(var20);
                    var21 = var22.finishTransaction;
                    var20 = {};
                    var20['purchase'] = var23;
                    var20 = var21.bind(var22)(var20);
                    SaveGenerator(address=855);
 853:
                    return var20;
 855:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=20);
                    if(var21) { _fun0018_ip = 992; continue _fun0018 }
 864:
                    var22 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var21 = var23[var11];
                    var27 = var22.bind(var7)(var21);
                    var24 = var27.dispatch;
                    var21 = {};
                    var28 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var21['type'] = var28;
                    var28 = var19;
                    var21['productIdentifier'] = var28;
                    var21 = var24.bind(var27)(var21);
                    var21 = 15;
                    var21 = var23[var21];
                    var24 = var22.bind(var7)(var21);
                    var23 = var24.track;
                    var21 = _closure1_slot15;
                    var22 = var21.PAYMENT_FLOW_COMPLETED;
                    var21 = {};
                    var27 = var9;
                    var21['sku_id'] = var27;
                    var21['load_id'] = var26;
                    var21['location_stack'] = var25;
                    var25 = _closure1_slot18;
                    var25 = var25.APPLE_PARTNER;
                    var21['payment_gateway'] = var25;
                    var25 = var13;
                    var21['is_gift'] = var25;
                    var21 = var23.bind(var24)(var22, var21);
 987: // try_end0
                    var21 = true;
                    return var21;
 992:
                    return var20;
 995:
                    return var18;
 998:
                    return var17;
 1001:
                    return var16;
 1004:
                    return var12;
 1007: // catch_target0
                    CatchBlockStart(arg_register=17);
                    var4 = var18;
                    var16 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var11 = var12[var11];
                    var17 = var16.bind(var7)(var11);
                    var16 = var17.dispatch;
                    var11 = {};
                    var20 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var11['type'] = var20;
                    var11['productIdentifier'] = var19;
                    var11 = var16.bind(var17)(var11);
                    var17 = _closure1_slot0;
                    var11 = 38;
                    var11 = var12[var11];
                    var11 = var17.bind(var7)(var11);
                    var11 = var11.BillingError;
                    var16 = var11.prototype;
                    var16 = Object.create(var16, {constructor: {value: var11}});
                    var33 = var16;
                    var32 = var18;
                    var11 = new var33[var11](var32, var31);
                    var11 = var11 instanceof Object ? var11 : var16;
                    var16 = var11.code;
                    var11 = 39;
                    var12 = var12[var11];
                    var12 = var17.bind(var7)(var12);
                    var12 = var12.ErrorCodes;
                    var12 = var12.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(var16 === var12)) { _fun0018_ip = 1369; continue _fun0018 }
 1137:
                    var16 = var15;
                    var12 = null;
                    if(!(var12 == var16)) { _fun0018_ip = 1174; continue _fun0018 }
 1146:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var12 = 40;
                    var12 = var17[var12];
                    var12 = var16.bind(var7)(var12);
                    var12 = var12.purchaseSKU;
                    _fun0018_ip = 1177; continue _fun0018;
 1174:
                    var12 = var15;
 1177:
                    var10 = var12;
 1180: // try_start_1
                    var12 = var10;
                    var10 = var9;
                    var9 = {};
                    var9['countryCode'] = var14;
                    var14 = 0;
                    var9['expectedAmount'] = var14;
                    var14 = _closure1_slot16;
                    var14 = var14.USD;
                    var9['expectedCurrency'] = var14;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 41;
                    var14 = var16[var14];
                    var15 = var15.bind(var7)(var14);
                    var14 = var15.v4;
                    var14 = var14.bind(var15)();
                    var9['loadId'] = var14;
                    var9['isGift'] = var13;
                    var9['giftInfoOptions'] = var8;
                    var8 = 'collectibles';
                    var8 = var12.bind(var7)(var8, var10, var9);
                    SaveGenerator(address=1275);
 1273:
                    return var8;
 1275:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0018_ip = 1286; continue _fun0018 }
 1281: // try_end1
                    var9 = true;
                    return var9;
 1286:
                    return var8;
 1289: // catch_target1
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var9 = var8.code;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var11];
                    var8 = var10.bind(var7)(var8);
                    var8 = var8.ErrorCodes;
                    var8 = var8.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(var9 === var8)) { _fun0018_ip = 1369; continue _fun0018 }
 1332:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 17;
                    var8 = var10[var8];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.captureBillingException;
                    var8 = var6;
                    var6 = {};
                    var6 = var9.bind(var10)(var8, var6);
 1369:
                    var6 = _closure1_slot30;
                    var5 = var4;
                    var4 = 'collectibles';
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = false;
                    return var4;
 1391:
                    return var3;
 1394:
                    return var2;
 1397:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot43 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = ['items', 'country_code'];
    var _closure1_slot4 = var1;
    var1 = ['sku_id', 'country_code', 'is_gift', 'gift_info_options'];
    var _closure1_slot5 = var1;
    var8 = global;
    var15 = var8.Object;
    var14 = var15.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var13.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var7 = 3;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.setPaymentSuccess;
    var _closure1_slot10 = var11;
    var7 = var7.showOldPaymentFlowSuccess;
    var _closure1_slot11 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.AnalyticEvents;
    var _closure1_slot15 = var11;
    var11 = var7.CurrencyCodes;
    var _closure1_slot16 = var11;
    var11 = var7.Endpoints;
    var _closure1_slot17 = var11;
    var11 = var7.StoreKitErrors;
    var7 = 10;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.PaymentGateways;
    var _closure1_slot18 = var7;
    var7 = 11;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot19 = var7;
    var7 = 'localAppleReceiptHash';
    var _closure1_slot20 = var7;
    var7 = 'BILLING';
    var _closure1_slot21 = var7;
    var7 = 12;
    var7 = var10[var7];
    var14 = var13.bind(var1)(var7);
    var7 = var14.prototype;
    var13 = Object.create(var7, {constructor: {value: var14}});
    var18 = 'BillingActionCreators.tsx';
    var19 = var13;
    var7 = new var19[var14](var18, var17);
    var7 = var7 instanceof Object ? var7 : var13;
    var _closure1_slot22 = var7;
    var7 = {};
    var7['applyAppleReceipt'] = var12;
    var12 = 20;
    var13 = var10[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.fetchMostRecentSubscription;
    var7['fetchMostRecentSubscription'] = var13;
    var12 = var10[var12];
    var12 = var9.bind(var1)(var12);
    var12 = var12.fetchIpCountryCode;
    var7['fetchIpCountryCode'] = var12;
    var7['restoreFromLocalReceipt'] = var6;
    var12 = function init() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 162; continue _fun0019 }
 10: // try_start_0
                    var2 = global;
                    var6 = var2.Promise;
                    var5 = var6.all;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 21;
                    var2 = var9[var2];
                    var4 = undefined;
                    var7 = var8.bind(var4)(var2);
                    var2 = var7.fetchPremiumSubscriptionPlans;
                    var7 = var2.bind(var7)();
                    var2 = new Array(3);
                    var2[0] = var7;
                    var10 = _closure2_slot0;
                    var7 = var10.loadProducts;
                    var7 = var7.bind(var10)();
                    var2[1] = var7;
                    var7 = 20;
                    var7 = var9[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.fetchSubscriptions;
                    var7 = var7.bind(var8)();
                    var2[2] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=123);
 121:
                    return var2;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 152; continue _fun0019 }
 129:
                    var3 = _closure1_slot28;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=141);
 139:
                    return var3;
 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0019_ip = 149; continue _fun0019 }
 147: // try_end0
                    _fun0019_ip = 157; continue _fun0019;
 149:
                    return var3;
 152:
                    return var2;
 155: // catch_target0
                    CatchBlockStart(arg_register=1);
 157:
                    var2 = undefined;
                    return var2;
 162:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['init'] = var12;
    var12 = function connectGenericIap() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 202; continue _fun0020 }
 10:
                    var4 = _closure1_slot8;
                    var3 = var4.isGenericIapConnected;
                    var3 = var3.bind(var4)();
 29: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 22;
                    var3 = var5[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.initConnection;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=65);
 63:
                    return var3;
 65:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 121; continue _fun0020 }
 71:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 19;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GENERIC_IAP_INIT_CONNECTION';
                    var4['type'] = var7;
                    var4['connected'] = var3;
                    var4 = var5.bind(var6)(var4);
 118: // try_end0
                    return var3;
 121:
                    return var3;
 124: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 17;
                    var3 = var5[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.captureBillingException;
                    var3 = var3.bind(var6)(var7);
                    var3 = _closure1_slot1;
                    var2 = 19;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
 202:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['connectGenericIap'] = var12;
    var12 = function loadGenericProducts() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 647; continue _fun0021 }
 12:
                    var5 = undefined;
                    var3 = undefined;
                    var _closure4_slot0 = var5;
                    var4 = undefined;
                    var9 = undefined;
                    var11 = undefined;
                    var _closure4_slot1 = var5;
                    var10 = undefined;
                    var _closure4_slot2 = var5;
 36: // try_start_0
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var12 = 23;
                    var2 = var7[var12];
                    var2 = var13.bind(var5)(var2);
                    var2 = var2.ProductIds;
                    var14 = var2.GENERIC_SUBSCRIPTION;
                    var2 = new Array(2);
                    var2[0] = var14;
                    var12 = var7[var12];
                    var12 = var13.bind(var5)(var12);
                    var12 = var12.ProductIds;
                    var12 = var12.GENERIC_CONSUMABLE;
                    var2[1] = var12;
                    var3 = var2;
                    _closure4_slot0 = var2;
                    var12 = _closure1_slot1;
                    var13 = 24;
                    var7 = var7[var13];
                    var15 = var12.bind(var5)(var7);
                    var14 = var15.filter;
                    var12 = _closure1_slot14;
                    var7 = var12.getProducts;
                    var12 = var7.bind(var12)();
                    var7 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.identifier;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var14.bind(var15)(var12, var7);
                    var4 = var7;
                    var7 = var7.length;
                    var2 = var2.length;
                    if(!(var7 !== var2)) { _fun0021_ip = 270; continue _fun0021 }
 174:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var2 = 18;
                    var2 = var12[var2];
                    var7 = var7.bind(var5)(var2);
                    var2 = var7.loadProducts;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=208);
 206:
                    return var2;
 208:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0021_ip = 603; continue _fun0021 }
 217:
                    var12 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var13];
                    var13 = var12.bind(var5)(var7);
                    var12 = var13.filter;
                    var7 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.identifier;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var12.bind(var13)(var2, var7);
                    var4 = var7;
                    var7 = var7.length;
                    var3 = var3.length;
                    if(!(var7 === var3)) { _fun0021_ip = 567; continue _fun0021 }
 270:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var3 = 18;
                    var3 = var12[var3];
                    var7 = var7.bind(var5)(var3);
                    var3 = var7.fetchStoreFront;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=304);
 302:
                    return var3;
 304:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0021_ip = 564; continue _fun0021 }
 313:
                    var9 = var3;
                    var7 = null;
                    if(!(var7 == var3)) { _fun0021_ip = 509; continue _fun0021 }
 325:
                    var12 = global;
                    var7 = var12.Set;
                    var13 = var7.prototype;
                    var13 = Object.create(var13, {constructor: {value: var7}});
                    var19 = var13;
                    var7 = new var19[var7](var18);
                    var7 = var7 instanceof Object ? var7 : var13;
                    var11 = var7;
                    _closure4_slot1 = var7;
                    var12 = var12.Set;
                    var13 = var12.prototype;
                    var13 = Object.create(var13, {constructor: {value: var12}});
                    var19 = var13;
                    var12 = new var19[var12](var18);
                    var12 = var12 instanceof Object ? var12 : var13;
                    var10 = var12;
                    _closure4_slot2 = var12;
                    var13 = var4;
                    var12 = var13.forEach;
                    var8 = function(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.countryCode;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0022_ip = 28; continue _fun0022 }
 18:
                            var3 = var1.currencyCode;
                            var2 = var4 != var3;
 28:
                            if(!var2) { _fun0022_ip = 45; continue _fun0022 }
 31:
                            var4 = var1.countryCode;
                            var3 = '';
                            var2 = var3 !== var4;
 45:
                            if(!var2) { _fun0022_ip = 91; continue _fun0022 }
 48:
                            var5 = _closure4_slot2;
                            var4 = var5.add;
                            var3 = var1.countryCode;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure4_slot1;
                            var2 = var3.add;
                            var1 = var1.currencyCode;
                            var1 = var2.bind(var3)(var1);
 91:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var8 = var12.bind(var13)(var8);
                    var7 = var7.size;
                    var8 = 1;
                    if(!(var8 === var7)) { _fun0021_ip = 435; continue _fun0021 }
 423:
                    var7 = var10;
                    var7 = var7.size;
                    if(!(var8 !== var7)) { _fun0021_ip = 451; continue _fun0021 }
 435:
                    var7 = {'country': 'US', 'currency': 'usd'};
                    _fun0021_ip = 506; continue _fun0021;
 451:
                    var8 = {};
                    var17 = var11;
                    var12 = new Array(0);
                    var11 = 0;
                    var18 = var12;
                    var16 = 0;
                    var13 = arraySpread(var18, var17, var16);
                    var12 = var12[var11];
                    var8['currency'] = var12;
                    var17 = var10;
                    var10 = new Array(0);
                    var18 = var10;
                    var12 = arraySpread(var18, var17, var16);
                    var10 = var10[var11];
                    var8['country'] = var10;
                    var7 = var8;
 506:
                    var9 = var7;
 509:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 19;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'IAP_LOAD_GENERIC_PRODUCTS';
                    var6['type'] = var10;
                    var6['products'] = var4;
                    var6['storeFront'] = var9;
                    var6 = var7.bind(var8)(var6);
 561: // try_end0
                    return var4;
 564:
                    return var3;
 567: // try_start_1
                    var3 = global;
                    var6 = var3.Error;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var18 = "Unable to load generic product, check IAPUtils.loadProducts to make sure it's working correctly";
                    var19 = var4;
                    var3 = new var19[var6](var18, var17);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 603: // try_end1
                    return var2;
 606: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 17;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.captureBillingException;
                    var2 = var2.bind(var3)(var4);
                    var2 = null;
                    return var2;
 647:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['loadGenericProducts'] = var12;
    var12 = function disconnectGenericIap() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GENERIC_IAP_END_CONNECTION';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['disconnectGenericIap'] = var12;
    var12 = function loadProducts() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 150; continue _fun0023 }
 10: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 18;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.loadProducts;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=49);
 47:
                    return var2;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 104; continue _fun0023 }
 55:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 19;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'IAP_LOAD_PRODUCTS';
                    var3['type'] = var6;
                    var3['products'] = var2;
                    var3 = var4.bind(var5)(var3);
 102: // try_end0
                    _fun0023_ip = 145; continue _fun0023;
 104:
                    return var2;
 107: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.captureBillingException;
                    var2 = var2.bind(var3)(var4);
 145:
                    var2 = undefined;
                    return var2;
 150:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['loadProducts'] = var12;
    var12 = function createSubscription(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 1589; continue _fun0024 }
 12:
                    var2 = undefined;
                    var12 = undefined;
                    var16 = undefined;
                    var22 = undefined;
                    var18 = undefined;
                    var26 = undefined;
                    var31 = undefined;
                    var15 = undefined;
                    var8 = undefined;
                    var14 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var20 = undefined;
                    var29 = undefined;
                    var21 = undefined;
                    var24 = undefined;
                    var25 = undefined;
                    var27 = undefined;
                    var28 = undefined;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot0;
                    var12 = var3.productId;
                    var16 = var3.isGift;
                    var22 = var3.giftInfoOptions;
                    var18 = var3.baseAnalyticsData;
                    var26 = var3.applicationId;
                    var31 = var3.offerId;
                    var15 = var3.onPurchaseComplete;
                    var8 = var3.onPurchaseError;
                    var4 = _closure1_slot14;
                    var3 = var4.isBusy;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0024_ip = 1586; continue _fun0024 }
 133:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 25;
                    var3 = var5[var3];
                    var9 = var4.bind(var2)(var3);
                    var5 = var9.getCurrentConfig;
                    var4 = {};
                    var3 = '1ee357_1';
                    var4['location'] = var3;
                    var3 = {};
                    var11 = false;
                    var3['autoTrackExposure'] = var11;
                    var3 = var5.bind(var9)(var4, var3);
                    var3 = var3.paymentsBlocked;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    if(var3) { _fun0024_ip = 1570; continue _fun0024 }
 206:
                    var11 = 19;
                    var3 = var5[var11];
                    var19 = var4.bind(var2)(var3);
                    var9 = var19.dispatch;
                    var3 = {};
                    var23 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var23;
                    var23 = var12;
                    var3['productIdentifier'] = var23;
                    var3 = var9.bind(var19)(var3);
                    SaveGenerator(address=252);
 250:
                    return var3;
 252:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 1567; continue _fun0024 }
 261: // try_start_0
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var30 = 18;
                    var9 = var9[var30];
                    var19 = var19.bind(var2)(var9);
                    var9 = var19.canMakePayments;
                    var9 = var9.bind(var19)();
                    SaveGenerator(address=295);
 293:
                    return var9;
 295:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=18);
                    if(var19) { _fun0024_ip = 1486; continue _fun0024 }
 304:
                    var23 = _closure1_slot13;
                    var19 = var23.hasFetchedSubscriptions;
                    var19 = var19.bind(var23)();
                    if(var19) { _fun0024_ip = 452; continue _fun0024 }
 324:
                    var23 = _closure1_slot0;
                    var32 = _closure1_slot3;
                    var19 = 20;
                    var19 = var32[var19];
                    var23 = var23.bind(var2)(var19);
                    var19 = var23.fetchSubscriptions;
                    var19 = var19.bind(var23)();
                    SaveGenerator(address=358);
 356:
                    return var19;
 358:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=22);
                    if(var23) { _fun0024_ip = 449; continue _fun0024 }
 364:
                    var23 = global;
                    var33 = var23.Error;
                    var35 = _closure1_slot0;
                    var36 = _closure1_slot3;
                    var23 = 27;
                    var32 = var36[var23];
                    var32 = var35.bind(var2)(var32);
                    var34 = var32.intl;
                    var32 = var34.string;
                    var23 = var36[var23];
                    var23 = var35.bind(var2)(var23);
                    var23 = var23.t;
                    var23 = var23.PjfUXV;
                    var39 = var32.bind(var34)(var23);
                    var32 = var33.prototype;
                    var32 = Object.create(var32, {constructor: {value: var33}});
                    var40 = var32;
                    var23 = new var40[var33](var39, var38);
                    var23 = var23 instanceof Object ? var23 : var32;
                    throw var23;
 449: // try_end0
                    return var19;
 452: // try_start_1
                    var23 = _closure1_slot12;
                    var19 = var23.getCurrentUser;
                    var23 = var19.bind(var23)();
                    var10 = var23;
                    var19 = null;
                    if(!(var19 != var23)) { _fun0024_ip = 1401; continue _fun0024 }
 477:
                    var32 = _closure1_slot0;
                    var23 = _closure1_slot3;
                    var23 = var23[var30];
                    var32 = var32.bind(var2)(var23);
                    var23 = var32.convertToUUID;
                    var10 = var10.id;
                    var13 = var23.bind(var32)(var10);
                    var20 = undefined;
                    var10 = var31;
                    if(!(var19 != var10)) { _fun0024_ip = 629; continue _fun0024 }
 519:
                    var33 = var12;
                    var32 = var31;
                    var23 = var13;
                    var10 = function getTrialOfferSignature() {
                        var1 = undefined;
                        var4 = _closure1_slot27;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var10 = var10.bind(var2)(var33, var32, var23);
                    SaveGenerator(address=544);
 542:
                    return var10;
 544:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                    if(var23) { _fun0024_ip = 1398; continue _fun0024 }
 553:
                    var29 = var10;
                    if(!(var19 != var10)) { _fun0024_ip = 629; continue _fun0024 }
 560:
                    var23 = {};
                    var23['identifier'] = var31;
                    var31 = var29.key_id;
                    var23['keyIdentifier'] = var31;
                    var31 = var29.nonce;
                    var23['nonce'] = var31;
                    var31 = var29.signature;
                    var23['signature'] = var31;
                    var31 = global;
                    var31 = var31.Number;
                    var29 = var29.timestamp;
                    var29 = var31.bind(var2)(var29);
                    var23['timestamp'] = var29;
                    var20 = var23;
 629:
                    var29 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var23 = var23[var30];
                    var30 = var29.bind(var2)(var23);
                    var29 = var30.purchaseProduct;
                    var23 = var12;
                    var13 = var29.bind(var30)(var23, var20, var13);
                    SaveGenerator(address=666);
 664:
                    return var13;
 666:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=19);
                    if(var20) { _fun0024_ip = 1395; continue _fun0024 }
 675:
                    var21 = var13;
                    var20 = var13.jwsRepresentation;
                    var14 = var20;
                    if(!(var19 == var20)) { _fun0024_ip = 702; continue _fun0024 }
 691:
                    var20 = var21;
                    var30 = var20.transactionReceipt;
                    _fun0024_ip = 705; continue _fun0024;
 702:
                    var30 = var14;
 705:
                    var20 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var23 = 13;
                    var23 = var14[var23];
                    var29 = var20.bind(var2)(var23);
                    var23 = var29.v3;
                    var29 = var23.bind(var29)(var30);
                    var24 = var29;
                    var14 = var14[var11];
                    var23 = var20.bind(var2)(var14);
                    var20 = var23.dispatch;
                    var14 = {};
                    var30 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var14['type'] = var30;
                    var14['key'] = var29;
                    var29 = {};
                    var38 = var22;
                    var39 = var29;
                    var30 = copyDataProperties(var39, var38);
                    var14['giftOptions'] = var29;
                    var14 = var20.bind(var23)(var14);
                    var14 = var15;
                    var20 = var19 == var14;
                    var14 = undefined;
                    if(var20) { _fun0024_ip = 807; continue _fun0024 }
 803:
                    var14 = var15.bind(var2)();
 807:
                    SaveGenerator(address=811);
 809:
                    return var14;
 811:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0024_ip = 1392; continue _fun0024 }
 820:
                    var23 = _closure1_slot14;
                    var20 = var23.getProduct;
                    var15 = var12;
                    var15 = var20.bind(var23)(var15);
                    var25 = var15;
                    var20 = var19 == var15;
                    var15 = undefined;
                    if(var20) { _fun0024_ip = 859; continue _fun0024 }
 850:
                    var20 = var25;
                    var15 = var20.price;
 859:
                    var27 = var15;
                    var15 = var25;
                    var15 = var19 == var15;
                    var23 = undefined;
                    if(var15) { _fun0024_ip = 883; continue _fun0024 }
 874:
                    var15 = var25;
                    var23 = var15.currencyCode;
 883:
                    var28 = var23;
                    var20 = _closure1_slot26;
                    var15 = {};
                    var29 = var21;
                    var29 = var29.transactionReceipt;
                    var15['encodedReceipt'] = var29;
                    var29 = 3;
                    var15['retries'] = var29;
                    var15['presentmentCurrency'] = var23;
                    var23 = var27;
                    var15['presentmentAmount'] = var23;
                    var23 = var25;
                    var29 = var19 == var23;
                    var23 = undefined;
                    if(var29) { _fun0024_ip = 945; continue _fun0024 }
 939:
                    var23 = var25.countryCode;
 945:
                    var15['appStoreRegion'] = var23;
                    var15['giftInfoOptions'] = var22;
                    var21 = var21.jwsRepresentation;
                    var15['jwsRepresentation'] = var21;
                    var21 = 'createSubscription';
                    var15['source'] = var21;
                    var15 = var20.bind(var2)(var15);
                    SaveGenerator(address=983);
 981:
                    return var15;
 983:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0024_ip = 1389; continue _fun0024 }
 992:
                    var20 = _closure1_slot10;
                    var20 = var20.bind(var2)();
                    var21 = _closure1_slot1;
                    var25 = _closure1_slot3;
                    var20 = var25[var11];
                    var23 = var21.bind(var2)(var20);
                    var22 = var23.dispatch;
                    var20 = {};
                    var29 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var20['type'] = var29;
                    var20['key'] = var24;
                    var20 = var22.bind(var23)(var20);
                    var20 = 15;
                    var20 = var25[var20];
                    var22 = var21.bind(var2)(var20);
                    var21 = var22.track;
                    var20 = _closure1_slot15;
                    var20 = var20.PAYMENT_FLOW_COMPLETED;
                    var24 = _closure1_slot0;
                    var23 = 28;
                    var23 = var25[var23];
                    var25 = var24.bind(var2)(var23);
                    var24 = var25.getPaymentFlowCompletedAnalyticsFields;
                    var23 = var18;
                    var18 = {};
                    var29 = var12;
                    var18['subscription_plan_gateway_plan_id'] = var29;
                    var18['price'] = var27;
                    var18['regular_price'] = var27;
                    var27 = var28;
                    var29 = var19 == var27;
                    var27 = undefined;
                    if(var29) { _fun0024_ip = 1140; continue _fun0024 }
 1127:
                    var29 = var28;
                    var28 = var29.toLowerCase;
                    var27 = var28.bind(var29)();
 1140:
                    var18['currency'] = var27;
                    var18['application_id'] = var26;
                    var18 = var24.bind(var25)(var23, var18);
                    var18 = var21.bind(var22)(var20, var18);
                    var20 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var18 = var18[var11];
                    var21 = var20.bind(var2)(var18);
                    var20 = var21.dispatch;
                    var18 = {};
                    var22 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var18['type'] = var22;
                    var22 = var12;
                    var18['productIdentifier'] = var22;
                    var18 = var20.bind(var21)(var18);
                    if(var16) { _fun0024_ip = 1384; continue _fun0024 }
 1215:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var16 = 20;
                    var16 = var20[var16];
                    var18 = var18.bind(var2)(var16);
                    var16 = var18.fetchSubscriptions;
                    var16 = var16.bind(var18)();
                    SaveGenerator(address=1249);
 1247:
                    return var16;
 1249:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    if(var18) { _fun0024_ip = 1381; continue _fun0024 }
 1258:
                    var20 = _closure1_slot13;
                    var18 = var20.getPremiumSubscription;
                    var18 = var18.bind(var20)();
                    _closure4_slot0 = var18;
                    if(!(var19 != var18)) { _fun0024_ip = 1296; continue _fun0024 }
 1280:
                    var18 = _closure1_slot11;
                    var17 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var2 = 31;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 30;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure7_slot0 = var2;
                                var1 = function(arg1) {
                                    var4 = _closure1_slot19;
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
                    var17 = var18.bind(var2)(var17);
                    _fun0024_ip = 1384; continue _fun0024;
 1296:
                    var17 = global;
                    var19 = var17.Error;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var17 = 27;
                    var18 = var22[var17];
                    var18 = var21.bind(var2)(var18);
                    var20 = var18.intl;
                    var18 = var20.string;
                    var17 = var22[var17];
                    var17 = var21.bind(var2)(var17);
                    var17 = var17.t;
                    var17 = var17.PjfUXV;
                    var39 = var18.bind(var20)(var17);
                    var18 = var19.prototype;
                    var18 = Object.create(var18, {constructor: {value: var19}});
                    var40 = var18;
                    var17 = new var40[var19](var39, var38);
                    var17 = var17 instanceof Object ? var17 : var18;
                    throw var17;
 1381: // try_end1
                    return var16;
 1384:
                    _fun0024_ip = 1586; continue _fun0024;
 1389:
                    return var15;
 1392:
                    return var14;
 1395:
                    return var13;
 1398:
                    return var10;
 1401: // try_start_2
                    var10 = global;
                    var14 = var10.Error;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var10 = 27;
                    var13 = var17[var10];
                    var13 = var16.bind(var2)(var13);
                    var15 = var13.intl;
                    var13 = var15.string;
                    var10 = var17[var10];
                    var10 = var16.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.PjfUXV;
                    var39 = var13.bind(var15)(var10);
                    var13 = var14.prototype;
                    var13 = Object.create(var13, {constructor: {value: var14}});
                    var40 = var13;
                    var10 = new var40[var14](var39, var38);
                    var10 = var10 instanceof Object ? var10 : var13;
                    throw var10;
 1486: // try_end2
                    return var9;
 1489: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var9 = var9[var11];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var13 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var9['type'] = var13;
                    var9['productIdentifier'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var10 = var8;
                    var9 = null;
                    if(!(var9 != var10)) { _fun0024_ip = 1548; continue _fun0024 }
 1544:
                    var8 = var8.bind(var2)();
 1548:
                    var8 = _closure1_slot30;
                    var7 = var6;
                    var6 = 'subscription';
                    var6 = var8.bind(var2)(var7, var6);
                    _fun0024_ip = 1586; continue _fun0024;
 1567:
                    return var3;
 1570:
                    var3 = 26;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.bind(var2)();
 1586:
                    return var2;
 1589:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['createSubscription'] = var12;
    var12 = function backgroundRestoreReceipt() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 411; continue _fun0025 }
 10:
                    var4 = _closure1_slot14;
                    var2 = var4.isBusy;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0025_ip = 406; continue _fun0025 }
 33:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var6 = 19;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'IAP_RESTORE_PURCHASES_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
 77: // try_start_0 // try_start_1
                    var4 = _closure2_slot0;
                    var2 = var4.loadProducts;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=98);
 96:
                    return var2;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0025_ip = 257; continue _fun0025 }
 107:
                    var4 = _closure1_slot28;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=119);
 117:
                    return var4;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0025_ip = 215; continue _fun0025 }
 125:
                    if(!var4) { _fun0025_ip = 168; continue _fun0025 }
 128:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 20;
                    var7 = var9[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.fetchSubscriptions;
                    var7 = var7.bind(var8)();
                    SaveGenerator(address=162);
 160:
                    return var7;
 162:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0025_ip = 173; continue _fun0025 }
 168: // try_end0
                    _fun0025_ip = 322; continue _fun0025;
 173: // try_end1
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var6];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'IAP_RESTORE_PURCHASES_END';
                    var8['type'] = var11;
                    var8 = var9.bind(var10)(var8);
                    return var7;
 215:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var6];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'IAP_RESTORE_PURCHASES_END';
                    var7['type'] = var10;
                    var7 = var8.bind(var9)(var7);
                    return var4;
 257:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'IAP_RESTORE_PURCHASES_END';
                    var4['type'] = var9;
                    var4 = var7.bind(var8)(var4);
                    return var2;
 299: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    var7 = _closure1_slot22;
                    var4 = var7.verbose;
                    var2 = 'Unable to restore apple receipts';
                    var2 = var4.bind(var7)(var2);
 322: // try_end2
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'IAP_RESTORE_PURCHASES_END';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
                    _fun0025_ip = 406; continue _fun0025;
 363: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'IAP_RESTORE_PURCHASES_END';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 406:
                    var2 = undefined;
                    return var2;
 411:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['backgroundRestoreReceipt'] = var12;
    var12 = function restoreSubscription() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0026_ip = 13; continue _fun0026 }
 11:
            var3 = false;
 13:
            var _closure2_slot0 = var3;
            var3 = this;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot7;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0027_ip = 1006; continue _fun0027 }
 12:
                        var2 = undefined;
                        var9 = undefined;
                        var5 = _closure1_slot14;
                        var3 = var5.isBusy;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0027_ip = 1003; continue _fun0027 }
 39:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var6 = 19;
                        var3 = var3[var6];
                        var7 = var5.bind(var2)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var10 = 'IAP_RESTORE_PURCHASES_START';
                        var3['type'] = var10;
                        var3 = var5.bind(var7)(var3);
 81: // try_start_0 // try_start_2
                        var5 = _closure2_slot1;
                        var3 = var5.loadProducts;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address=102);
 100:
                        return var3;
 102:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0027_ip = 737; continue _fun0027 }
 111:
                        var5 = _closure1_slot28;
                        var5 = var5.bind(var2)();
                        SaveGenerator(address=123);
 121:
                        return var5;
 123:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(var7) { _fun0027_ip = 695; continue _fun0027 }
 132:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var7 = 18;
                        var7 = var11[var7];
                        var10 = var10.bind(var2)(var7);
                        var7 = var10.restorePurchases;
                        var7 = var7.bind(var10)();
                        SaveGenerator(address=166);
 164:
                        return var7;
 166:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                        if(var10) { _fun0027_ip = 653; continue _fun0027 }
 175:
                        var9 = var7;
                        var11 = var7.length;
                        var10 = 0;
                        if(!(var10 !== var11)) { _fun0027_ip = 508; continue _fun0027 }
 192:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var10 = 24;
                        var10 = var12[var10];
                        var10 = var11.bind(var2)(var10);
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.uniqBy;
                        var9 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.originalTransactionIdentifier;
                            return var1;
                        };
                        var10 = var10.bind(var11)(var9);
                        var9 = var10.value;
                        var10 = var9.bind(var10)();
                        var9 = var10.map;
                        var8 = function(arg1) {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                                var5 = arg1;
                                var6 = _closure1_slot14;
                                var4 = var6.getProduct;
                                var3 = var5.productIdentifier;
                                var8 = var4.bind(var6)(var3);
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var3 = 13;
                                var3 = var4[var3];
                                var4 = undefined;
                                var7 = var6.bind(var4)(var3);
                                var6 = var7.v3;
                                var3 = var5.transactionReceipt;
                                var7 = var6.bind(var7)(var3);
                                var _closure5_slot0 = var7;
                                var6 = _closure1_slot9;
                                var3 = var6.getGiftOptionsForKey;
                                var7 = var3.bind(var6)(var7);
                                var3 = _closure1_slot26;
                                var2 = {};
                                var5 = var5.transactionReceipt;
                                var2['encodedReceipt'] = var5;
                                var6 = null;
                                var9 = var6 == var8;
                                var5 = undefined;
                                if(var9) { _fun0028_ip = 121; continue _fun0028 }
 115:
                                var5 = var8.currencyCode;
 121:
                                var2['presentmentCurrency'] = var5;
                                var9 = var6 == var8;
                                var5 = undefined;
                                if(var9) { _fun0028_ip = 141; continue _fun0028 }
 135:
                                var5 = var8.price;
 141:
                                var2['presentmentAmount'] = var5;
                                var9 = var6 == var8;
                                var5 = undefined;
                                if(var9) { _fun0028_ip = 161; continue _fun0028 }
 155:
                                var5 = var8.countryCode;
 161:
                                var2['appStoreRegion'] = var5;
                                var5 = {};
                                var9 = var6 == var7;
                                var8 = undefined;
                                if(var9) { _fun0028_ip = 183; continue _fun0028 }
 177:
                                var8 = var7.gift_style;
 183:
                                var5['gift_style'] = var8;
                                var8 = var6 == var7;
                                var6 = undefined;
                                if(var8) { _fun0028_ip = 203; continue _fun0028 }
 197:
                                var6 = var7.reward_sku_ids;
 203:
                                var5['reward_sku_ids'] = var6;
                                var2['giftInfoOptions'] = var5;
                                var5 = 'restoreSubscription';
                                var2['source'] = var5;
                                var5 = _closure2_slot0;
                                var2['skipDupCheck'] = var5;
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.then;
                                var1 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot3;
                                    var1 = 19;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.dispatch;
                                    var2 = {};
                                    var5 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                    var2['type'] = var5;
                                    var5 = _closure5_slot0;
                                    var2['key'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            }
                        };
                        var10 = var9.bind(var10)(var8);
                        var8 = global;
                        var9 = var8.Promise;
                        var8 = var9.all;
                        var8 = var8.bind(var9)(var10);
                        SaveGenerator(address=280);
 278:
                        return var8;
 280:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                        if(var9) { _fun0027_ip = 466; continue _fun0027 }
 289:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var9 = 20;
                        var9 = var11[var9];
                        var10 = var10.bind(var2)(var9);
                        var9 = var10.fetchSubscriptions;
                        var9 = var9.bind(var10)();
                        SaveGenerator(address=323);
 321:
                        return var9;
 323:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                        if(var10) { _fun0027_ip = 424; continue _fun0027 }
 329:
                        var11 = _closure1_slot1;
                        var17 = _closure1_slot3;
                        var10 = 29;
                        var10 = var17[var10];
                        var12 = var11.bind(var2)(var10);
                        var11 = var12.show;
                        var10 = {};
                        var16 = _closure1_slot0;
                        var13 = 27;
                        var14 = var17[var13];
                        var14 = var16.bind(var2)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var13 = var17[var13];
                        var13 = var16.bind(var2)(var13);
                        var13 = var13.t;
                        var13 = var13.pnRpIS;
                        var13 = var14.bind(var15)(var13);
                        var10['body'] = var13;
                        var10 = var11.bind(var12)(var10);
                        _fun0027_ip = 648; continue _fun0027;
 424: // try_end0 // try_end2
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var10 = var10[var6];
                        var12 = var11.bind(var2)(var10);
                        var11 = var12.dispatch;
                        var10 = {};
                        var13 = 'IAP_RESTORE_PURCHASES_END';
                        var10['type'] = var13;
                        var10 = var11.bind(var12)(var10);
                        return var9;
 466:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var9 = var9[var6];
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var12 = 'IAP_RESTORE_PURCHASES_END';
                        var9['type'] = var12;
                        var9 = var10.bind(var11)(var9);
                        return var8;
 508: // try_start_1 // try_start_3
                        var9 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var8 = 29;
                        var8 = var15[var8];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.show;
                        var8 = {};
                        var14 = _closure1_slot0;
                        var11 = 27;
                        var12 = var15[var11];
                        var12 = var14.bind(var2)(var12);
                        var16 = var12.intl;
                        var13 = var16.string;
                        var12 = var15[var11];
                        var12 = var14.bind(var2)(var12);
                        var12 = var12.t;
                        var12 = var12.WXkaoK;
                        var12 = var13.bind(var16)(var12);
                        var8['title'] = var12;
                        var12 = var15[var11];
                        var12 = var14.bind(var2)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var2)(var11);
                        var11 = var11.t;
                        var11 = var11.YW7lqa;
                        var11 = var12.bind(var13)(var11);
                        var8['body'] = var11;
                        var8 = var9.bind(var10)(var8);
 648: // try_end1
                        _fun0027_ip = 919; continue _fun0027;
 653: // try_end3
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var8 = var8[var6];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'IAP_RESTORE_PURCHASES_END';
                        var8['type'] = var11;
                        var8 = var9.bind(var10)(var8);
                        return var7;
 695:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var6];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'IAP_RESTORE_PURCHASES_END';
                        var7['type'] = var10;
                        var7 = var8.bind(var9)(var7);
                        return var5;
 737:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var5 = var5[var6];
                        var8 = var7.bind(var2)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var9 = 'IAP_RESTORE_PURCHASES_END';
                        var5['type'] = var9;
                        var5 = var7.bind(var8)(var5);
                        return var3;
 779: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var3 = 29;
                        var3 = var12[var3];
                        var7 = var5.bind(var2)(var3);
                        var5 = var7.show;
                        var3 = {};
                        var11 = _closure1_slot0;
                        var8 = 27;
                        var9 = var12[var8];
                        var9 = var11.bind(var2)(var9);
                        var13 = var9.intl;
                        var10 = var13.string;
                        var9 = var12[var8];
                        var9 = var11.bind(var2)(var9);
                        var9 = var9.t;
                        var9 = var9.POsVOj;
                        var9 = var10.bind(var13)(var9);
                        var3['title'] = var9;
                        var9 = var12[var8];
                        var9 = var11.bind(var2)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var2)(var8);
                        var8 = var8.t;
                        var8 = var8.XbE/Ex;
                        var8 = var9.bind(var10)(var8);
                        var3['body'] = var8;
                        var3 = var5.bind(var7)(var3);
 919: // try_end4
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var7 = var5.bind(var2)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var8 = 'IAP_RESTORE_PURCHASES_END';
                        var3['type'] = var8;
                        var3 = var5.bind(var7)(var3);
                        _fun0027_ip = 1003; continue _fun0027;
 960: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'IAP_RESTORE_PURCHASES_END';
                        var4['type'] = var7;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
 1003:
                        return var2;
 1006:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var7['restoreSubscription'] = var12;
    var12 = var8.Set;
    var8 = 22;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.ErrorCode;
    var13 = var8.E_USER_CANCELLED;
    var8 = new Array(2);
    var8[0] = var13;
    var11 = var11.PAYMENT_CANCELED;
    var8[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {constructor: {value: var12}});
    var19 = var11;
    var18 = var8;
    var8 = new var19[var12](var18, var17);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot23 = var8;
    var8 = 42;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'actions/native/BillingActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['restoreFromLocalReceipt'] = var6;
    var3['getIAPJWTRequestData'] = var5;
    var3['updateAppleSubscription'] = var4;
    var4 = function cancelGenericSubscription() {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelGenericSubscription'] = var4;
    var4 = function createGenericSubscription() {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGenericSubscription'] = var4;
    var4 = function resubscribeGenericSubscription() {
        var1 = undefined;
        var4 = _closure1_slot41;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resubscribeGenericSubscription'] = var4;
    var2 = function mobilePurchaseSKU() {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['mobilePurchaseSKU'] = var2;
    return var1;
})();