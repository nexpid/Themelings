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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var12 = function applyAppleReceipt(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
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
            if(!(var19 != var9)) { _fun0004_ip = 36; continue _fun0004 }
case 9:
            if(!(var19 == var3)) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            if(!(var19 != var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = new Array(1);
            var1[0] = var3;
            var9 = var1;
case 38:
            var6 = var17;
            if(!(var19 != var9)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = 0;
            var6 = var9[var1];
case 40:
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
            if(var4) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            if(!(var1 === var3)) { _fun0004_ip = 42; continue _fun0004 }
case 44:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)(var19);
            _fun0004_ip = 45; continue _fun0004;
case 42:
            var6 = true;
            var3 = var6 !== var11;
            if(var3) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var4 = var19 != var12;
            if(!var4) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var20 = var19 == var12;
            var18 = undefined;
            if(var20) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var18 = var12.gift_style;
case 50:
            var4 = var19 != var18;
case 48:
            var3 = var4;
case 46:
            if(var3) { _fun0004_ip = 52; continue _fun0004 }
case 53:
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
case 52:
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
case 45:
            return var1;
case 37:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 54:
                    var8 = arg1;
                    var7 = arg2;
                    var6 = arg3;
case 55: // try_start_0
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
case 56:
                    return var2;
case 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var3 = var2.body;
case 60: // try_end0
                    return var3;
case 58:
                    return var2;
case 61: // catch_target0
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
case 17:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 62; continue _fun0006 }
case 54:
                    var8 = undefined;
                    var12 = undefined;
                    var15 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    var3 = undefined;
                    var13 = undefined;
                    var4 = undefined;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 18;
                    var2 = var7[var2];
                    var2 = var5.bind(var8)(var2);
                    var7 = var2.StoreKitV2Experiment;
                    var5 = var7.getCurrentConfig;
                    var2 = {};
                    var11 = 'restoreFromLocalReceipt';
                    var2['location'] = var11;
                    var2 = var5.bind(var7)(var2);
                    var2 = var2.enabled;
                    if(!var2) { _fun0006_ip = 60; continue _fun0006 }
case 9:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 19;
                    var2 = var7[var2];
                    var5 = var5.bind(var8)(var2);
                    var2 = var5.isStorekit2Available;
                    var2 = var2.bind(var5)();
                    if(var2) { _fun0006_ip = 63; continue _fun0006 }
case 60: // try_start_0
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 19;
                    var2 = var7[var2];
                    var5 = var5.bind(var8)(var2);
                    var2 = var5.receiptData;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=156);
case 64:
                    return var2;
case 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                    var15 = var2;
                    var7 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var5 = 13;
                    var5 = var17[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.v3;
                    var16 = var5.bind(var7)(var2);
                    var9 = var16;
                    var7 = _closure1_slot0;
                    var5 = 14;
                    var5 = var17[var5];
                    var5 = var7.bind(var8)(var5);
                    var17 = var5.Storage;
                    var7 = var17.get;
                    var5 = _closure1_slot20;
                    var10 = var7.bind(var17)(var5);
                    var7 = _closure1_slot9;
                    var5 = var7.getGiftOptionsForKey;
                    var14 = var5.bind(var7)(var16);
                    var7 = _closure1_slot14;
                    var5 = var7.getProducts;
                    var7 = var5.bind(var7)();
                    var12 = var7;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var7 = new Array(0);
                    _fun0006_ip = 70; continue _fun0006;
case 68:
                    var7 = var12;
case 70:
                    var3 = var7;
                    var12 = var7.length;
                    var7 = 0;
                    var16 = var12 > var7;
                    var12 = null;
                    if(!var16) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                    var12 = var3[var7];
case 71:
                    var13 = var12;
                    var7 = _closure1_slot26;
                    var3 = {};
                    var3['encodedReceipt'] = var15;
                    var3['jwsRepresentation'] = var8;
                    var15 = 3;
                    var3['retries'] = var15;
                    var15 = var5 == var12;
                    var12 = undefined;
                    if(var15) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var12 = var13.countryCode;
case 73:
                    var3['appStoreRegion'] = var12;
                    var12 = {};
                    var13 = var14;
                    var15 = var5 == var13;
                    var13 = undefined;
                    if(var15) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                    var15 = var14;
                    var13 = var15.gift_style;
case 75:
                    var12['gift_style'] = var13;
                    var13 = var14;
                    var15 = var5 == var13;
                    var13 = undefined;
                    if(var15) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var15 = var14;
                    var13 = var15.reward_sku_ids;
case 77:
                    var12['reward_sku_ids'] = var13;
                    var3['giftInfoOptions'] = var12;
                    var15 = var14;
                    var16 = var5 == var15;
                    var15 = undefined;
                    if(var16) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                    var16 = var14;
                    var15 = var16.gift_style;
case 79:
                    var15 = var5 != var15;
                    var13 = var15;
                    if(var15) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var15 = var14;
                    var16 = var5 == var15;
                    var15 = undefined;
                    if(var16) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                    var16 = var14;
                    var15 = var16.reward_sku_ids;
case 83:
                    var13 = var5 != var15;
case 81:
                    var12 = var13;
                    if(var13) { _fun0006_ip = 85; continue _fun0006 }
case 86:
                    var13 = var14;
                    var15 = var5 == var13;
                    var13 = undefined;
                    if(var15) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                    var13 = var14.recipient_id;
case 87:
                    var12 = var5 != var13;
case 85:
                    var3['isGift'] = var12;
                    var3['source'] = var11;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=516);
case 89:
                    return var3;
case 90:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                    var4 = var3;
                    var11 = var5 == var3;
                    var7 = var11;
                    if(!var11) { _fun0006_ip = 93; continue _fun0006 }
case 94:
                    var11 = var10;
                    var10 = var9;
                    var7 = var11 !== var10;
case 93:
                    if(var7) { _fun0006_ip = 95; continue _fun0006 }
case 96:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 20;
                    var6 = var10[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var6['type'] = var10;
                    var6['key'] = var9;
                    var6 = var7.bind(var8)(var6);
case 95:
                    var4 = var5 != var4;
case 97: // try_end0
                    return var4;
case 91:
                    return var3;
case 66:
                    return var2;
case 98: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 63:
                    var2 = false;
                    return var2;
case 62:
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
case 0:
            var1 = arg1;
            var4 = _closure1_slot23;
            var3 = var4.has;
            var2 = var1.code;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var2 = var1.message;
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var3 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var3 = 33;
            var3 = var5[var3];
            var10 = undefined;
            var4 = var4.bind(var10)(var3);
            var3 = var4.getUnderlyingIOSError;
            var5 = var3.bind(var4)(var1);
            var7 = null;
            if(!(var7 == var5)) { _fun0007_ip = 101; continue _fun0007 }
case 39:
            var9 = _closure1_slot0;
            var3 = _closure1_slot3;
            var11 = 28;
            var4 = var3[var11];
            var4 = var9.bind(var10)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var3 = var3[var11];
            var3 = var9.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3.PjfUXe;
            var12 = var4.bind(var8)(var3);
            var4 = var1.name;
            var3 = 'HTTPResponseError';
            var8 = var12;
            if(!(var3 !== var4)) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var3 = 'status';
            var3 = var3 in var1;
            if(!var3) { _fun0007_ip = 104; continue _fun0007 }
case 16:
            var3 = 'method';
            var3 = var3 in var1;
            var8 = var12;
            if(var3) { _fun0007_ip = 102; continue _fun0007 }
case 104:
            var3 = var1.message;
            if(var3) { _fun0007_ip = 44; continue _fun0007 }
case 105:
            var3 = var12;
case 44:
            var8 = var3;
case 102:
            var3 = var1.body;
            var9 = var8;
            if(!(var7 != var3)) { _fun0007_ip = 106; continue _fun0007 }
case 107:
            var3 = var1.body;
            var4 = var3.apple_error_code;
            var9 = var8;
            if(!(var7 != var4)) { _fun0007_ip = 106; continue _fun0007 }
case 47:
            var15 = var3.apple_error_code;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var18 = '';
            var16 = ' (code: ';
            var14 = ')';
            var17 = var12;
            var9 = var18[var7](var17, var16, var15, var14, var13);
case 106:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 30;
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
            var11 = var11.zrhHH3;
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
case 101:
            var3 = _closure1_slot1;
            var11 = _closure1_slot3;
            var2 = 30;
            var2 = var11[var2];
            var4 = var3.bind(var10)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 28;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.POsVOt;
            var6 = var7.bind(var8)(var6);
            var2['title'] = var6;
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
            throw var1;
case 99:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function canMakeIAPRequest() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot14;
            var1 = var2.isBusy;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(!var1) { _fun0008_ip = 108; continue _fun0008 }
case 31:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 26;
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
            if(var2) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 27;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var2 = false;
case 109:
            var1 = var2;
case 108:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function clearAndMakeIAPRequest(arg1, arg2, arg3) {
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 111; continue _fun0009 }
case 54:
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
case 112: // try_start_0 // try_start_1
                    var16 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var3 = 23;
                    var3 = var20[var3];
                    var16 = var16.bind(var6)(var3);
                    var3 = var16.clearTransactionIOS;
                    var3 = var3.bind(var16)();
                    SaveGenerator(address=78);
case 113:
                    return var3;
case 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=15);
                    if(var16) { _fun0009_ip = 80; continue _fun0009 }
case 115:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var16 = 19;
                    var16 = var21[var16];
                    var20 = var20.bind(var6)(var16);
                    var16 = var20.makeIAPRequest;
                    var11 = var16.bind(var20)(var13, var11);
                    SaveGenerator(address=123);
case 40:
                    return var11;
case 116:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0009_ip = 117; continue _fun0009 }
case 118:
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
                    if(var20) { _fun0009_ip = 119; continue _fun0009 }
case 120:
                    var20 = var19;
                    var19 = var20.toString;
                    var16 = var19.bind(var20)();
case 119:
                    var18 = var16;
                    if(!(var10 == var16)) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                    var16 = var15;
                    _fun0009_ip = 123; continue _fun0009;
case 121:
                    var16 = var18;
case 123:
                    var13['original_transaction_id'] = var16;
                    var16 = var12;
                    var16 = var16.purchaseResponse;
                    var16 = var16.originalTransactionDate;
                    var17 = var16;
                    if(!(var10 == var16)) { _fun0009_ip = 124; continue _fun0009 }
case 125:
                    var16 = var14;
                    _fun0009_ip = 126; continue _fun0009;
case 124:
                    var16 = var17;
case 126:
                    var13['original_transaction_date'] = var16;
                    var13['transaction_id'] = var15;
                    var13['transaction_date'] = var14;
                    var7 = var13;
case 68: // try_end0 // try_end1
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
case 117:
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
case 80:
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
case 85: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var3 = {};
                    var4 = var4.code;
                    var5 = var4;
                    var10 = var10 == var4;
                    var4 = undefined;
                    if(var10) { _fun0009_ip = 127; continue _fun0009 }
case 92:
                    var10 = var5;
                    var5 = var10.toString;
                    var4 = var5.bind(var10)();
case 127:
                    var3['error_code'] = var4;
                    var5 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var4 = 33;
                    var4 = var10[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getUnderlyingIOSError;
                    var4 = var4.bind(var5)(var2);
                    var3['error_message'] = var4;
                    var7 = var3;
                    throw var2;
case 128: // try_end2 // catch_target1 // catch_target2
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
case 111:
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
    var5 = function getIAPJWTRequestData(arg1) {
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
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 129; continue _fun0010 }
case 130:
                    var _closure4_slot0 = var5;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 34;
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
                    var8 = 35;
                    var8 = var11[var8];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.APPLE_JWT_TOKEN_CREATE;
                    var6['event'] = var8;
                    var7 = function properties(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var7 = arg1;
                            var1 = _closure4_slot0;
                            var4 = var1.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = 36;
                            var3 = var3[var6];
                            var9 = undefined;
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0011_ip = 131; continue _fun0011 }
case 132:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0011_ip = 133; continue _fun0011 }
case 134:
                            var3 = {};
                            var12 = _closure4_slot0;
                            var13 = var3;
                            var4 = copyDataProperties(var13, var12);
                            var4 = var3;
                            _fun0011_ip = 135; continue _fun0011;
case 133:
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
                            if(!(var6 != var10)) { _fun0011_ip = 136; continue _fun0011 }
case 137:
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var3['gift_info_options'] = var6;
case 136:
                            var4 = var3;
                            if(!var5) { _fun0011_ip = 135; continue _fun0011 }
case 138:
                            var3['is_gift'] = var5;
                            var4 = var3;
                            _fun0011_ip = 135; continue _fun0011;
case 131:
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
case 135:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 37;
                            var1 = var3[var1];
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0011_ip = 139; continue _fun0011 }
case 140:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0011_ip = 139; continue _fun0011 }
case 141:
                            var6 = var7.request_data;
case 139:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0011_ip = 142; continue _fun0011 }
case 143:
                            var5 = var6;
case 142:
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
case 144:
                    return var2;
case 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 146; continue _fun0010 }
case 147:
                    var3 = {};
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.stringify;
                    var4 = var2.body;
                    var4 = var4.request_data;
                    var4 = var5.bind(var6)(var4);
                    var3['requestJSONString'] = var4;
                    return var3;
case 146:
                    return var2;
case 129:
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
    var4 = function updateAppleSubscription(arg1) {
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
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 67; continue _fun0012 }
case 130:
                    var _closure4_slot0 = var6;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 34;
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
                    var8 = 35;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.APPLE_JWT_TOKEN_CREATE;
                    var6['event'] = var8;
                    var7 = function properties(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var7 = arg1;
                            var4 = {};
                            var10 = _closure4_slot0;
                            var11 = var4;
                            var1 = copyDataProperties(var11, var10);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 37;
                            var1 = var3[var1];
                            var9 = undefined;
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 148; continue _fun0013 }
case 149:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 148; continue _fun0013 }
case 150:
                            var6 = var7.request_data;
case 148:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0013_ip = 39; continue _fun0013 }
case 151:
                            var5 = var6;
case 39:
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
case 152:
                    return var2;
case 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 154; continue _fun0012 }
case 155:
                    return var3;
case 154:
                    return var2;
case 67:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 156; continue _fun0014 }
case 54:
                    var10 = arg1;
                    var7 = arg2;
                    var3 = undefined;
                    var9 = undefined;
                    var2 = _closure1_slot31;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0014_ip = 157; continue _fun0014 }
case 158:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var5 = 24;
                    var5 = var2[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.ProductIds;
                    var11 = var5.GENERIC_SUBSCRIPTION;
                    var9 = var11;
                    var5 = _closure1_slot1;
                    var8 = 20;
                    var2 = var2[var8];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var12 = 'IAP_PURCHASE_PRODUCT_START';
                    var2['type'] = var12;
                    var2['productIdentifier'] = var11;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=119);
case 59:
                    return var2;
case 108:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 159; continue _fun0014 }
case 61: // try_start_0
                    var6 = _closure1_slot36;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 36;
                    var11 = var13[var11];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.APBRequestOperations;
                    var11 = var11.CANCEL;
                    var5['operation'] = var11;
                    var5['request_identifier'] = var10;
                    var5['subscription_id'] = var7;
                    var5 = var6.bind(var3)(var5);
                    SaveGenerator(address=190);
case 160:
                    return var5;
case 161:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0014_ip = 162; continue _fun0014 }
case 120:
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
case 163: // try_end0
                    _fun0014_ip = 157; continue _fun0014;
case 162:
                    return var5;
case 164: // catch_target0
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
case 157:
                    return var3;
case 159:
                    return var2;
case 156:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 165; continue _fun0015 }
case 166:
                    var7 = var2.requestIdentifier;
                    var11 = var2.items;
                    var15 = var2.currency;
                    var13 = var2.countryCode;
                    var4 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=47);
case 167:
                    return var4;
case 168:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 169; continue _fun0015 }
case 28:
                    var3 = _closure1_slot31;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0015_ip = 170; continue _fun0015 }
case 171:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var6 = 24;
                    var6 = var3[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.ProductIds;
                    var12 = var6.GENERIC_SUBSCRIPTION;
                    var10 = var12;
                    var6 = _closure1_slot1;
                    var9 = 20;
                    var3 = var3[var9];
                    var8 = var6.bind(var4)(var3);
                    var6 = var8.dispatch;
                    var3 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var16;
                    var3['productIdentifier'] = var12;
                    var3 = var6.bind(var8)(var3);
                    SaveGenerator(address=155);
case 153:
                    return var3;
case 172:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 173; continue _fun0015 }
case 174: // try_start_0
                    var8 = _closure1_slot39;
                    var6 = var15;
                    var6 = var8.bind(var4)(var6);
                    if(var6) { _fun0015_ip = 175; continue _fun0015 }
case 16:
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
case 175:
                    var8 = _closure1_slot34;
                    var6 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var12 = 36;
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
case 176:
                    return var6;
case 177:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 178; continue _fun0015 }
case 179:
                    var12 = var6.requestJSONString;
                    var11 = _closure1_slot32;
                    var8 = var7;
                    var7 = var10;
                    var7 = var11.bind(var4)(var8, var12, var7);
                    SaveGenerator(address=378);
case 143:
                    return var7;
case 75:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 180; continue _fun0015 }
case 181:
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
case 182:
                    return var8;
case 183:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0015_ip = 184; continue _fun0015 }
case 81:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 23;
                    var11 = var13[var11];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.finishTransaction;
                    var11 = {};
                    var11['purchase'] = var14;
                    var11 = var12.bind(var13)(var11);
                    SaveGenerator(address=512);
case 185:
                    return var11;
case 186:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 187; continue _fun0015 }
case 99:
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
case 188: // try_end0
                    _fun0015_ip = 170; continue _fun0015;
case 187:
                    return var11;
case 184:
                    return var8;
case 180:
                    return var7;
case 178:
                    return var6;
case 189: // catch_target0
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
case 170:
                    return var4;
case 173:
                    return var3;
case 169:
                    return var2;
case 165:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 190; continue _fun0016 }
case 166:
                    var7 = var2.requestIdentifier;
                    var11 = var2.subscriptionId;
                    var6 = arg2;
                    var4 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=40);
case 191:
                    return var4;
case 192:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 193; continue _fun0016 }
case 5:
                    var3 = _closure1_slot31;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0016_ip = 188; continue _fun0016 }
case 194:
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 24;
                    var8 = var3[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.ProductIds;
                    var15 = var8.GENERIC_SUBSCRIPTION;
                    var10 = var15;
                    var8 = _closure1_slot1;
                    var9 = 20;
                    var3 = var3[var9];
                    var13 = var8.bind(var4)(var3);
                    var8 = var13.dispatch;
                    var3 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var16;
                    var3['productIdentifier'] = var15;
                    var3 = var8.bind(var13)(var3);
                    SaveGenerator(address=148);
case 147:
                    return var3;
case 195:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 196; continue _fun0016 }
case 197:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var8 = 36;
                    var8 = var15[var8];
                    var8 = var13.bind(var4)(var8);
                    var8 = var8.APBRequestOperations;
                    var12 = var8.REACTIVATE;
case 129: // try_start_0
                    if(var6) { _fun0016_ip = 163; continue _fun0016 }
case 198:
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
case 199:
                    return var6;
case 200:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(!var8) { _fun0016_ip = 201; continue _fun0016 }
case 202: // try_end0
                    return var6;
case 163: // try_start_1
                    var8 = _closure1_slot34;
                    var6 = {};
                    var6['operation'] = var12;
                    var12 = var7;
                    var6['request_identifier'] = var12;
                    var6['subscription_id'] = var11;
                    var6 = var8.bind(var4)(var6);
                    SaveGenerator(address=276);
case 203:
                    return var6;
case 69:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 204; continue _fun0016 }
case 70:
                    var12 = var6.requestJSONString;
                    var11 = _closure1_slot32;
                    var8 = var7;
                    var7 = var10;
                    var7 = var11.bind(var4)(var8, var12, var7);
                    SaveGenerator(address=312);
case 157:
                    return var7;
case 205:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 206; continue _fun0016 }
case 52:
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
case 207:
                    return var8;
case 208:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0016_ip = 87; continue _fun0016 }
case 209:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 23;
                    var11 = var13[var11];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.finishTransaction;
                    var11 = {};
                    var11['purchase'] = var14;
                    var11 = var12.bind(var13)(var11);
                    SaveGenerator(address=436);
case 210:
                    return var11;
case 211:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0016_ip = 212; continue _fun0016 }
case 201:
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
case 213: // try_end1
                    _fun0016_ip = 188; continue _fun0016;
case 212:
                    return var11;
case 87:
                    return var8;
case 206:
                    return var7;
case 204:
                    return var6;
case 214: // catch_target0 // catch_target1
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
case 188:
                    return var4;
case 196:
                    return var3;
case 193:
                    return var2;
case 190:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 215; continue _fun0017 }
case 54:
                    var14 = arg1;
                    var15 = arg2;
                    var7 = undefined;
                    var4 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var20 = undefined;
                    var21 = undefined;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 19;
                    var2 = var6[var2];
                    var8 = var3.bind(var7)(var2);
                    var6 = var8.restorePurchases;
                    var2 = {};
                    var3 = false;
                    var2['fullRestore'] = var3;
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=79);
case 150:
                    return var2;
case 216:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0017_ip = 217; continue _fun0017 }
case 218:
                    var4 = new Array(0);
                    var6 = var2.length;
                    var8 = 0;
                    if(!(var8 !== var6)) { _fun0017_ip = 219; continue _fun0017 }
case 220:
                    var6 = _closure1_slot24;
                    var6 = var6.bind(var7)(var2);
                    var17 = var6;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    var13 = 15;
                    var12 = null;
                    var11 = 23;
                    var10 = 3;
                    var9 = 'retryPendingPurchases';
                    if(var6) { _fun0017_ip = 221; continue _fun0017 }
case 153:
                    var6 = var16;
                    var6 = var6.value;
                    var18 = var6;
                    var19 = var6.productIdentifier;
                    var23 = var6.transactionIdentifier;
                    var6 = var23.toString;
                    var20 = var6.bind(var23)();
case 222: // try_start_0
                    var23 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var13];
                    var25 = var23.bind(var7)(var6);
                    var24 = var25.track;
                    var6 = _closure1_slot15;
                    var23 = var6.APPLE_RETRY_PENDING_PURCHASE_STARTED;
                    var6 = {};
                    var26 = var19;
                    var6['product_id'] = var26;
                    var26 = var20;
                    var6['transaction_id'] = var26;
                    var6 = var24.bind(var25)(var23, var6);
                    var23 = _closure1_slot26;
                    var6 = {};
                    var24 = var18;
                    var25 = var24.transactionReceipt;
                    var6['encodedReceipt'] = var25;
                    var6['retries'] = var10;
                    var25 = var14;
                    var6['presentmentCurrency'] = var25;
                    var25 = var15;
                    var6['appStoreRegion'] = var25;
                    var24 = var24.jwsRepresentation;
                    var6['jwsRepresentation'] = var24;
                    var6['source'] = var9;
                    var6 = var23.bind(var7)(var6);
                    SaveGenerator(address=306);
case 72:
                    return var6;
case 135:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=22);
                    if(var23) { _fun0017_ip = 223; continue _fun0017 }
case 224:
                    var24 = _closure1_slot0;
                    var23 = _closure1_slot3;
                    var23 = var23[var11];
                    var25 = var24.bind(var7)(var23);
                    var24 = var25.finishTransaction;
                    var23 = {};
                    var26 = {};
                    var27 = var19;
                    var26['productId'] = var27;
                    var27 = var20;
                    var26['transactionId'] = var27;
                    var27 = var18;
                    var28 = var27.transactionDate;
                    var26['transactionDate'] = var28;
                    var27 = var27.transactionReceipt;
                    var26['transactionReceipt'] = var27;
                    var23['purchase'] = var26;
                    var23 = var24.bind(var25)(var23);
                    SaveGenerator(address=397);
case 78:
                    return var23;
case 225:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(var24) { _fun0017_ip = 183; continue _fun0017 }
case 226:
                    var25 = _closure1_slot1;
                    var24 = _closure1_slot3;
                    var24 = var24[var13];
                    var27 = var25.bind(var7)(var24);
                    var26 = var27.track;
                    var24 = _closure1_slot15;
                    var25 = var24.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED;
                    var24 = {};
                    var28 = var19;
                    var24['product_id'] = var28;
                    var28 = var20;
                    var24['transaction_id'] = var28;
                    var24 = var26.bind(var27)(var25, var24);
case 227: // try_end0
                    _fun0017_ip = 228; continue _fun0017;
case 183:
                    return var23;
case 223:
                    return var6;
case 81: // catch_target0
                    CatchBlockStart(arg_register=23);
                    var22 = var24;
                    var23 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var13];
                    var26 = var23.bind(var7)(var6);
                    var25 = var26.track;
                    var6 = _closure1_slot15;
                    var23 = var6.APPLE_RETRY_PENDING_PURCHASE_FAILED;
                    var6 = {};
                    var27 = var19;
                    var6['product_id'] = var27;
                    var27 = var20;
                    var6['transaction_id'] = var27;
                    var24 = var24.code;
                    var21 = var24;
                    var27 = var12 == var24;
                    var24 = undefined;
                    if(var27) { _fun0017_ip = 229; continue _fun0017 }
case 230:
                    var28 = var21;
                    var27 = var28.toString;
                    var24 = var27.bind(var28)();
case 229:
                    var6['error_code'] = var24;
                    var24 = var22;
                    var27 = var24.message;
                    var6['error_message'] = var27;
                    var6 = var25.bind(var26)(var23, var6);
                    var23 = var4;
                    var6 = var23.push;
                    var6 = var6.bind(var23)(var24);
case 228:
                    var6 = var17;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    if(!var6) { _fun0017_ip = 153; continue _fun0017 }
case 221:
                    var6 = var4;
                    var6 = var6.length;
                    if(!(!(var6 > var8))) { _fun0017_ip = 231; continue _fun0017 }
case 232:
                    var6 = true;
                    return var6;
case 231:
                    var9 = var4;
                    var6 = var9.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.message;
                        return var1;
                    };
                    var8 = var6.bind(var9)(var4);
                    var6 = var8.join;
                    var4 = ', ';
                    var10 = var6.bind(var8)(var4);
                    var4 = global;
                    var6 = var4.HermesInternal;
                    var8 = var6.concat;
                    var6 = 'Failed to retry pending purchases: ';
                    var8 = var8.bind(var6)(var10);
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 17;
                    var5 = var10[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.captureBillingException;
                    var4 = var4.Error;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var31 = var5;
                    var30 = var8;
                    var4 = new var31[var4](var30, var29);
                    var5 = var4 instanceof Object ? var4 : var5;
                    var4 = {};
                    var8 = {};
                    var10 = var9.length;
                    var9 = var10.toString;
                    var9 = var9.bind(var10)();
                    var8['pendingPurchaseFailures'] = var9;
                    var10 = var2.length;
                    var9 = var10.toString;
                    var9 = var9.bind(var10)();
                    var8['totalPendingPurchases'] = var9;
                    var4['tags'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
case 219:
                    var3 = true;
                    return var3;
case 217:
                    return var2;
case 215:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 233; continue _fun0018 }
case 166:
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
case 234:
                    return var7;
case 235:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 236; continue _fun0018 }
case 237:
                    var3 = _closure1_slot31;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0018_ip = 13; continue _fun0018 }
case 238:
                    var3 = false;
                    return var3;
case 13:
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var11 = 24;
                    var11 = var3[var11];
                    var11 = var12.bind(var7)(var11);
                    var11 = var11.ProductIds;
                    var20 = var11.GENERIC_CONSUMABLE;
                    var19 = var20;
                    var12 = _closure1_slot1;
                    var11 = 20;
                    var3 = var3[var11];
                    var16 = var12.bind(var7)(var3);
                    var12 = var16.dispatch;
                    var3 = {};
                    var27 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var27;
                    var3['productIdentifier'] = var20;
                    var3 = var12.bind(var16)(var3);
                    SaveGenerator(address=192);
case 161:
                    return var3;
case 198:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(var12) { _fun0018_ip = 239; continue _fun0018 }
case 105:
                    var16 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var12 = 38;
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
case 240: // try_start_0
                    var16 = _closure1_slot39;
                    var12 = var22;
                    var12 = var16.bind(var7)(var12);
                    if(var12) { _fun0018_ip = 73; continue _fun0018 }
case 241:
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
case 73:
                    var20 = var22;
                    var16 = var14;
                    var12 = function retryPendingPurchases(arg1, arg2) {
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
case 242:
                    return var12;
case 243:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                    if(var16) { _fun0018_ip = 244; continue _fun0018 }
case 245:
                    var20 = _closure1_slot34;
                    var16 = {};
                    var28 = _closure1_slot0;
                    var29 = _closure1_slot3;
                    var27 = 36;
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
case 45:
                    return var16;
case 37:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=19);
                    if(var20) { _fun0018_ip = 246; continue _fun0018 }
case 212:
                    var28 = var16.requestJSONString;
                    var27 = _closure1_slot32;
                    var20 = var17;
                    var17 = var19;
                    var17 = var27.bind(var7)(var20, var28, var17);
                    SaveGenerator(address=518);
case 90:
                    return var17;
case 99:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=19);
                    if(var20) { _fun0018_ip = 247; continue _fun0018 }
case 248:
                    var20 = var17.purchaseResponse;
                    var21 = var20;
                    var23 = var17.originalPurchase;
                    var27 = var20.jwsRepresentation;
                    var18 = var27;
                    var20 = null;
                    if(!(var20 == var27)) { _fun0018_ip = 196; continue _fun0018 }
case 249:
                    var20 = var21;
                    var27 = var20.transactionReceipt;
                    _fun0018_ip = 193; continue _fun0018;
case 196:
                    var27 = var18;
case 193:
                    var20 = _closure1_slot1;
                    var28 = _closure1_slot3;
                    var18 = 13;
                    var18 = var28[var18];
                    var20 = var20.bind(var7)(var18);
                    var18 = var20.v3;
                    var24 = var18.bind(var20)(var27);
                    var18 = var13;
                    if(!var18) { _fun0018_ip = 250; continue _fun0018 }
case 251:
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
case 250:
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
case 252:
                    return var18;
case 253:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=19);
                    if(var20) { _fun0018_ip = 254; continue _fun0018 }
case 255:
                    var20 = var13;
                    if(!var20) { _fun0018_ip = 256; continue _fun0018 }
case 257:
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
case 256:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 23;
                    var20 = var22[var20];
                    var22 = var21.bind(var7)(var20);
                    var21 = var22.finishTransaction;
                    var20 = {};
                    var20['purchase'] = var23;
                    var20 = var21.bind(var22)(var20);
                    SaveGenerator(address=855);
case 258:
                    return var20;
case 259:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=20);
                    if(var21) { _fun0018_ip = 260; continue _fun0018 }
case 261:
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
case 262: // try_end0
                    var21 = true;
                    return var21;
case 260:
                    return var20;
case 254:
                    return var18;
case 247:
                    return var17;
case 246:
                    return var16;
case 244:
                    return var12;
case 263: // catch_target0
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
                    var11 = 39;
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
                    var11 = 40;
                    var12 = var12[var11];
                    var12 = var17.bind(var7)(var12);
                    var12 = var12.ErrorCodes;
                    var12 = var12.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(var16 === var12)) { _fun0018_ip = 264; continue _fun0018 }
case 265:
                    var16 = var15;
                    var12 = null;
                    if(!(var12 == var16)) { _fun0018_ip = 266; continue _fun0018 }
case 267:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var12 = 41;
                    var12 = var17[var12];
                    var12 = var16.bind(var7)(var12);
                    var12 = var12.purchaseSKU;
                    _fun0018_ip = 268; continue _fun0018;
case 266:
                    var12 = var15;
case 268:
                    var10 = var12;
case 269: // try_start_1
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
                    var14 = 42;
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
case 270:
                    return var8;
case 271:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0018_ip = 272; continue _fun0018 }
case 273: // try_end1
                    var9 = true;
                    return var9;
case 272:
                    return var8;
case 274: // catch_target1
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var9 = var8.code;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var11];
                    var8 = var10.bind(var7)(var8);
                    var8 = var8.ErrorCodes;
                    var8 = var8.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(var9 === var8)) { _fun0018_ip = 264; continue _fun0018 }
case 275:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 17;
                    var8 = var10[var8];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.captureBillingException;
                    var8 = var6;
                    var6 = {};
                    var6 = var9.bind(var10)(var8, var6);
case 264:
                    var6 = _closure1_slot30;
                    var5 = var4;
                    var4 = 'collectibles';
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = false;
                    return var4;
case 239:
                    return var3;
case 236:
                    return var2;
case 233:
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
    var12 = 21;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 154; continue _fun0019 }
case 54: // try_start_0
                    var2 = global;
                    var6 = var2.Promise;
                    var5 = var6.all;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 22;
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
                    var7 = 21;
                    var7 = var9[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.fetchSubscriptions;
                    var7 = var7.bind(var8)();
                    var2[2] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=123);
case 40:
                    return var2;
case 116:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 276; continue _fun0019 }
case 277:
                    var3 = _closure1_slot28;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=141);
case 278:
                    return var3;
case 279:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0019_ip = 280; continue _fun0019 }
case 281: // try_end0
                    _fun0019_ip = 197; continue _fun0019;
case 280:
                    return var3;
case 276:
                    return var2;
case 172: // catch_target0
                    CatchBlockStart(arg_register=1);
case 197:
                    var2 = undefined;
                    return var2;
case 154:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 282; continue _fun0020 }
case 54:
                    var4 = _closure1_slot8;
                    var3 = var4.isGenericIapConnected;
                    var3 = var3.bind(var4)();
case 283: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 23;
                    var3 = var5[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.initConnection;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=65);
case 149:
                    return var3;
case 284:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 40; continue _fun0020 }
case 285:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 20;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GENERIC_IAP_INIT_CONNECTION';
                    var4['type'] = var7;
                    var4['connected'] = var3;
                    var4 = var5.bind(var6)(var4);
case 286: // try_end0
                    return var3;
case 40:
                    return var3;
case 133: // catch_target0
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
                    var2 = 20;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
case 282:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 169; continue _fun0021 }
case 287:
                    var5 = undefined;
                    var3 = undefined;
                    var _closure4_slot0 = var5;
                    var4 = undefined;
                    var9 = undefined;
                    var11 = undefined;
                    var _closure4_slot1 = var5;
                    var10 = undefined;
                    var _closure4_slot2 = var5;
case 288: // try_start_0
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var12 = 24;
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
                    var13 = 25;
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
                    if(!(var7 !== var2)) { _fun0021_ip = 12; continue _fun0021 }
case 289:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var2 = 19;
                    var2 = var12[var2];
                    var7 = var7.bind(var5)(var2);
                    var2 = var7.loadProducts;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=208);
case 290:
                    return var2;
case 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0021_ip = 291; continue _fun0021 }
case 292:
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
                    if(!(var7 === var3)) { _fun0021_ip = 187; continue _fun0021 }
case 12:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var3 = 19;
                    var3 = var12[var3];
                    var7 = var7.bind(var5)(var3);
                    var3 = var7.fetchStoreFront;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=304);
case 293:
                    return var3;
case 72:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0021_ip = 294; continue _fun0021 }
case 159:
                    var9 = var3;
                    var7 = null;
                    if(!(var7 == var3)) { _fun0021_ip = 295; continue _fun0021 }
case 296:
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
case 0:
                            var1 = arg1;
                            var2 = var1.countryCode;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0022_ip = 34; continue _fun0022 }
case 297:
                            var3 = var1.currencyCode;
                            var2 = var4 != var3;
case 34:
                            if(!var2) { _fun0022_ip = 167; continue _fun0022 }
case 100:
                            var4 = var1.countryCode;
                            var3 = '';
                            var2 = var3 !== var4;
case 167:
                            if(!var2) { _fun0022_ip = 237; continue _fun0022 }
case 298:
                            var5 = _closure4_slot2;
                            var4 = var5.add;
                            var3 = var1.countryCode;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure4_slot1;
                            var2 = var3.add;
                            var1 = var1.currencyCode;
                            var1 = var2.bind(var3)(var1);
case 237:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var8 = var12.bind(var13)(var8);
                    var7 = var7.size;
                    var8 = 1;
                    if(!(var8 === var7)) { _fun0021_ip = 79; continue _fun0021 }
case 299:
                    var7 = var10;
                    var7 = var7.size;
                    if(!(var8 !== var7)) { _fun0021_ip = 300; continue _fun0021 }
case 79:
                    var7 = {'country': 'US', 'currency': 'usd'};
                    _fun0021_ip = 301; continue _fun0021;
case 300:
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
case 301:
                    var9 = var7;
case 295:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 20;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'IAP_LOAD_GENERIC_PRODUCTS';
                    var6['type'] = var10;
                    var6['products'] = var4;
                    var6['storeFront'] = var9;
                    var6 = var7.bind(var8)(var6);
case 302: // try_end0
                    return var4;
case 294:
                    return var3;
case 187: // try_start_1
                    var3 = global;
                    var6 = var3.Error;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var18 = "Unable to load generic product, check IAPUtils.loadProducts to make sure it's working correctly";
                    var19 = var4;
                    var3 = new var19[var6](var18, var17);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 291: // try_end1
                    return var2;
case 303: // catch_target0 // catch_target1
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
case 169:
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
        var1 = 20;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 107; continue _fun0023 }
case 54: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var6 = 20;
                    var2 = var7[var6];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var10 = 'IAP_LOAD_PRODUCTS_START';
                    var2['type'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = 19;
                    var2 = var7[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.loadProducts;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=83);
case 304:
                    return var2;
case 148:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 305; continue _fun0023 }
case 306:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'IAP_LOAD_PRODUCTS';
                    var3['type'] = var6;
                    var3['products'] = var2;
                    var3 = var4.bind(var5)(var3);
case 307: // try_end0
                    _fun0023_ip = 308; continue _fun0023;
case 305:
                    return var2;
case 144: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 20;
                    var3 = var6[var3];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'IAP_LOAD_PRODUCTS_FAILED';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.captureBillingException;
                    var2 = var2.bind(var3)(var4);
case 308:
                    var2 = undefined;
                    return var2;
case 107:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 309; continue _fun0024 }
case 287:
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
                    if(var3) { _fun0024_ip = 310; continue _fun0024 }
case 307:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 26;
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
                    if(var3) { _fun0024_ip = 311; continue _fun0024 }
case 290:
                    var11 = 20;
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
case 312:
                    return var3;
case 125:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 313; continue _fun0024 }
case 314: // try_start_0
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var30 = 19;
                    var9 = var9[var30];
                    var19 = var19.bind(var2)(var9);
                    var9 = var19.canMakePayments;
                    var9 = var9.bind(var19)();
                    SaveGenerator(address=295);
case 315:
                    return var9;
case 316:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=18);
                    if(var19) { _fun0024_ip = 317; continue _fun0024 }
case 72:
                    var23 = _closure1_slot13;
                    var19 = var23.hasFetchedSubscriptions;
                    var19 = var19.bind(var23)();
                    if(var19) { _fun0024_ip = 318; continue _fun0024 }
case 319:
                    var23 = _closure1_slot0;
                    var32 = _closure1_slot3;
                    var19 = 21;
                    var19 = var32[var19];
                    var23 = var23.bind(var2)(var19);
                    var19 = var23.fetchSubscriptions;
                    var19 = var19.bind(var23)();
                    SaveGenerator(address=358);
case 320:
                    return var19;
case 321:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=22);
                    if(var23) { _fun0024_ip = 322; continue _fun0024 }
case 323:
                    var23 = global;
                    var33 = var23.Error;
                    var35 = _closure1_slot0;
                    var36 = _closure1_slot3;
                    var23 = 28;
                    var32 = var36[var23];
                    var32 = var35.bind(var2)(var32);
                    var34 = var32.intl;
                    var32 = var34.string;
                    var23 = var36[var23];
                    var23 = var35.bind(var2)(var23);
                    var23 = var23.t;
                    var23 = var23.PjfUXe;
                    var39 = var32.bind(var34)(var23);
                    var32 = var33.prototype;
                    var32 = Object.create(var32, {constructor: {value: var33}});
                    var40 = var32;
                    var23 = new var40[var33](var39, var38);
                    var23 = var23 instanceof Object ? var23 : var32;
                    throw var23;
case 322: // try_end0
                    return var19;
case 318: // try_start_1
                    var23 = _closure1_slot12;
                    var19 = var23.getCurrentUser;
                    var23 = var19.bind(var23)();
                    var10 = var23;
                    var19 = null;
                    if(!(var19 != var23)) { _fun0024_ip = 324; continue _fun0024 }
case 325:
                    var32 = _closure1_slot0;
                    var23 = _closure1_slot3;
                    var23 = var23[var30];
                    var32 = var32.bind(var2)(var23);
                    var23 = var32.convertToUUID;
                    var10 = var10.id;
                    var13 = var23.bind(var32)(var10);
                    var20 = undefined;
                    var10 = var31;
                    if(!(var19 != var10)) { _fun0024_ip = 231; continue _fun0024 }
case 326:
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
case 230:
                    return var10;
case 327:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                    if(var23) { _fun0024_ip = 328; continue _fun0024 }
case 329:
                    var29 = var10;
                    if(!(var19 != var10)) { _fun0024_ip = 231; continue _fun0024 }
case 330:
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
case 231:
                    var29 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var23 = var23[var30];
                    var30 = var29.bind(var2)(var23);
                    var29 = var30.purchaseProduct;
                    var23 = var12;
                    var13 = var29.bind(var30)(var23, var20, var13);
                    SaveGenerator(address=666);
case 331:
                    return var13;
case 332:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=19);
                    if(var20) { _fun0024_ip = 333; continue _fun0024 }
case 334:
                    var21 = var13;
                    var20 = var13.jwsRepresentation;
                    var14 = var20;
                    if(!(var19 == var20)) { _fun0024_ip = 335; continue _fun0024 }
case 336:
                    var20 = var21;
                    var30 = var20.transactionReceipt;
                    _fun0024_ip = 337; continue _fun0024;
case 335:
                    var30 = var14;
case 337:
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
                    if(var20) { _fun0024_ip = 338; continue _fun0024 }
case 339:
                    var14 = var15.bind(var2)();
case 338:
                    SaveGenerator(address=811);
case 217:
                    return var14;
case 340:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0024_ip = 341; continue _fun0024 }
case 342:
                    var23 = _closure1_slot14;
                    var20 = var23.getProduct;
                    var15 = var12;
                    var15 = var20.bind(var23)(var15);
                    var25 = var15;
                    var20 = var19 == var15;
                    var15 = undefined;
                    if(var20) { _fun0024_ip = 343; continue _fun0024 }
case 344:
                    var20 = var25;
                    var15 = var20.price;
case 343:
                    var27 = var15;
                    var15 = var25;
                    var15 = var19 == var15;
                    var23 = undefined;
                    if(var15) { _fun0024_ip = 345; continue _fun0024 }
case 346:
                    var15 = var25;
                    var23 = var15.currencyCode;
case 345:
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
                    if(var29) { _fun0024_ip = 347; continue _fun0024 }
case 348:
                    var23 = var25.countryCode;
case 347:
                    var15['appStoreRegion'] = var23;
                    var15['giftInfoOptions'] = var22;
                    var21 = var21.jwsRepresentation;
                    var15['jwsRepresentation'] = var21;
                    var21 = 'createSubscription';
                    var15['source'] = var21;
                    var15 = var20.bind(var2)(var15);
                    SaveGenerator(address=983);
case 349:
                    return var15;
case 350:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0024_ip = 351; continue _fun0024 }
case 260:
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
                    var23 = 29;
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
                    if(var29) { _fun0024_ip = 352; continue _fun0024 }
case 353:
                    var29 = var28;
                    var28 = var29.toLowerCase;
                    var27 = var28.bind(var29)();
case 352:
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
                    if(var16) { _fun0024_ip = 354; continue _fun0024 }
case 355:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var16 = 21;
                    var16 = var20[var16];
                    var18 = var18.bind(var2)(var16);
                    var16 = var18.fetchSubscriptions;
                    var16 = var16.bind(var18)();
                    SaveGenerator(address=1249);
case 356:
                    return var16;
case 357:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    if(var18) { _fun0024_ip = 358; continue _fun0024 }
case 359:
                    var20 = _closure1_slot13;
                    var18 = var20.getPremiumSubscription;
                    var18 = var18.bind(var20)();
                    _closure4_slot0 = var18;
                    if(!(var19 != var18)) { _fun0024_ip = 360; continue _fun0024 }
case 361:
                    var18 = _closure1_slot11;
                    var17 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 30;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var2 = 32;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 31;
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
                    _fun0024_ip = 354; continue _fun0024;
case 360:
                    var17 = global;
                    var19 = var17.Error;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var17 = 28;
                    var18 = var22[var17];
                    var18 = var21.bind(var2)(var18);
                    var20 = var18.intl;
                    var18 = var20.string;
                    var17 = var22[var17];
                    var17 = var21.bind(var2)(var17);
                    var17 = var17.t;
                    var17 = var17.PjfUXe;
                    var39 = var18.bind(var20)(var17);
                    var18 = var19.prototype;
                    var18 = Object.create(var18, {constructor: {value: var19}});
                    var40 = var18;
                    var17 = new var40[var19](var39, var38);
                    var17 = var17 instanceof Object ? var17 : var18;
                    throw var17;
case 358: // try_end1
                    return var16;
case 354:
                    _fun0024_ip = 310; continue _fun0024;
case 351:
                    return var15;
case 341:
                    return var14;
case 333:
                    return var13;
case 328:
                    return var10;
case 324: // try_start_2
                    var10 = global;
                    var14 = var10.Error;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var10 = 28;
                    var13 = var17[var10];
                    var13 = var16.bind(var2)(var13);
                    var15 = var13.intl;
                    var13 = var15.string;
                    var10 = var17[var10];
                    var10 = var16.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.PjfUXe;
                    var39 = var13.bind(var15)(var10);
                    var13 = var14.prototype;
                    var13 = Object.create(var13, {constructor: {value: var14}});
                    var40 = var13;
                    var10 = new var40[var14](var39, var38);
                    var10 = var10 instanceof Object ? var10 : var13;
                    throw var10;
case 317: // try_end2
                    return var9;
case 362: // catch_target0 // catch_target1 // catch_target2
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
                    if(!(var9 != var10)) { _fun0024_ip = 363; continue _fun0024 }
case 364:
                    var9 = var8;
                    var8 = var6;
                    var8 = var9.bind(var2)(var8);
case 363:
                    var8 = _closure1_slot30;
                    var7 = var6;
                    var6 = 'subscription';
                    var6 = var8.bind(var2)(var7, var6);
                    _fun0024_ip = 310; continue _fun0024;
case 313:
                    return var3;
case 311:
                    var3 = 27;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.bind(var2)();
case 310:
                    return var2;
case 309:
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
    var12 = function backgroundRestore() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 365; continue _fun0025 }
case 54:
                    var4 = _closure1_slot14;
                    var2 = var4.isBusy;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0025_ip = 366; continue _fun0025 }
case 33: // try_start_0 // try_start_2
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 18;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var5 = var2.StoreKitV2Experiment;
                    var4 = var5.getCurrentConfig;
                    var2 = {};
                    var7 = 'backgroundRestore';
                    var2['location'] = var7;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.enabled;
                    if(!var2) { _fun0025_ip = 61; continue _fun0025 }
case 367:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 19;
                    var2 = var5[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.isStorekit2Available;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0025_ip = 368; continue _fun0025 }
case 61:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var7 = 20;
                    var2 = var2[var7];
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.dispatch;
                    var2 = {};
                    var8 = 'IAP_RESTORE_PURCHASES_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot0;
                    var2 = var4.loadProducts;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=191);
case 129:
                    return var2;
case 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0025_ip = 179; continue _fun0025 }
case 43:
                    var4 = _closure1_slot28;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=212);
case 369:
                    return var4;
case 370:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0025_ip = 371; continue _fun0025 }
case 372:
                    if(!var4) { _fun0025_ip = 299; continue _fun0025 }
case 373:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 21;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.fetchSubscriptions;
                    var5 = var5.bind(var8)();
                    SaveGenerator(address=258);
case 374:
                    return var5;
case 375:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(!var8) { _fun0025_ip = 299; continue _fun0025 }
case 376: // try_end0 // try_end2
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var7];
                    var10 = var9.bind(var6)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'IAP_RESTORE_PURCHASES_END';
                    var8['type'] = var11;
                    var8 = var9.bind(var10)(var8);
                    return var5;
case 371:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'IAP_RESTORE_PURCHASES_END';
                    var5['type'] = var10;
                    var5 = var8.bind(var9)(var5);
                    return var4;
case 179:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var8 = 'IAP_RESTORE_PURCHASES_END';
                    var4['type'] = var8;
                    var4 = var5.bind(var7)(var4);
                    return var2;
case 368: // try_start_1 // try_start_3
                    var5 = _closure2_slot0;
                    var4 = var5.restoreSubscription;
                    var2 = false;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=417);
case 377:
                    return var2;
case 378:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0025_ip = 379; continue _fun0025 }
case 299: // try_end1
                    _fun0025_ip = 380; continue _fun0025;
case 379: // try_end3
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 20;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'IAP_RESTORE_PURCHASES_END';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var2;
case 81: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot22;
                    var4 = var5.verbose;
                    var2 = 'Unable to restore apple receipts';
                    var2 = var4.bind(var5)(var2);
case 380: // try_end4
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 20;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.dispatch;
                    var2 = {};
                    var6 = 'IAP_RESTORE_PURCHASES_END';
                    var2['type'] = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun0025_ip = 366; continue _fun0025;
case 381: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 20;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'IAP_RESTORE_PURCHASES_END';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 366:
                    var2 = undefined;
                    return var2;
case 365:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['backgroundRestore'] = var12;
    var12 = function restoreSubscription() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0026_ip = 166; continue _fun0026 }
case 382:
            var3 = false;
case 166:
            var _closure2_slot0 = var3;
            var3 = this;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot7;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0027_ip = 383; continue _fun0027 }
case 287:
                        var5 = undefined;
                        var8 = undefined;
                        var18 = undefined;
                        var12 = undefined;
                        var _closure4_slot0 = var5;
                        var11 = undefined;
                        var _closure4_slot1 = var5;
                        var19 = undefined;
                        var20 = undefined;
                        var4 = _closure1_slot14;
                        var2 = var4.isBusy;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0027_ip = 268; continue _fun0027 }
case 384:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var6 = 20;
                        var2 = var2[var6];
                        var7 = var4.bind(var5)(var2);
                        var4 = var7.dispatch;
                        var2 = {};
                        var9 = 'IAP_RESTORE_PURCHASES_START';
                        var2['type'] = var9;
                        var2 = var4.bind(var7)(var2);
case 385: // try_start_2 // try_start_5
                        var4 = _closure2_slot1;
                        var2 = var4.loadProducts;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=120);
case 286:
                        return var2;
case 386:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0027_ip = 387; continue _fun0027 }
case 277:
                        var4 = _closure1_slot28;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address=141);
case 278:
                        return var4;
case 279:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0027_ip = 388; continue _fun0027 }
case 389:
                        var9 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var7 = 19;
                        var7 = var13[var7];
                        var13 = var9.bind(var5)(var7);
                        var9 = var13.restorePurchases;
                        var7 = {};
                        var14 = _closure2_slot0;
                        var7['fullRestore'] = var14;
                        var7 = var9.bind(var13)(var7);
                        SaveGenerator(address=196);
case 390:
                        return var7;
case 120:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                        if(var9) { _fun0027_ip = 391; continue _fun0027 }
case 22:
                        var8 = var7;
                        var9 = var7.length;
                        var14 = 0;
                        if(!(var14 !== var9)) { _fun0027_ip = 392; continue _fun0027 }
case 138:
                        var13 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var9 = 25;
                        var9 = var15[var9];
                        var9 = var13.bind(var5)(var9);
                        var13 = var9.bind(var5)(var8);
                        var9 = var13.uniqBy;
                        var8 = function(arg1) {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.jwsRepresentation;
                                var3 = null;
                                if(!(var3 == var1)) { _fun0028_ip = 393; continue _fun0028 }
case 130:
                                var1 = var2.originalTransactionIdentifier;
case 393:
                                return var1;
                            }
                        };
                        var9 = var9.bind(var13)(var8);
                        var8 = var9.value;
                        var9 = var8.bind(var9)();
                        var8 = new Array(0);
                        var12 = var8;
                        _closure4_slot0 = var8;
                        var8 = new Array(0);
                        var11 = var8;
                        _closure4_slot1 = var8;
                        var19 = function* _loop(arg1) {
                            var1 = function* anon_0__loop(arg1) {
                                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                    StartGenerator();
                                    var5 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0029_ip = 394; continue _fun0029 }
case 130:
                                    var8 = var5;
                                    var _closure6_slot0 = var5;
                                    var2 = undefined;
                                    var9 = undefined;
                                    var _closure6_slot1 = var2;
                                    var10 = undefined;
                                    var4 = undefined;
                                    var12 = _closure1_slot14;
                                    var11 = var12.getProduct;
                                    var7 = var5.productIdentifier;
                                    var9 = var11.bind(var12)(var7);
                                    var12 = var5.jwsRepresentation;
                                    var5 = null;
                                    if(!(var5 == var12)) { _fun0029_ip = 216; continue _fun0029 }
case 35:
                                    var7 = var8;
                                    var12 = var7.transactionReceipt;
case 216:
                                    var11 = _closure1_slot1;
                                    var13 = _closure1_slot3;
                                    var7 = 13;
                                    var7 = var13[var7];
                                    var11 = var11.bind(var2)(var7);
                                    var7 = var11.v3;
                                    var12 = var7.bind(var11)(var12);
                                    _closure6_slot1 = var12;
                                    var11 = _closure1_slot9;
                                    var7 = var11.getGiftOptionsForKey;
                                    var10 = var7.bind(var11)(var12);
                                    var4 = null;
case 395: // try_start_0
                                    var7 = _closure1_slot26;
                                    var6 = {};
                                    var11 = var8.jwsRepresentation;
                                    var6['jwsRepresentation'] = var11;
                                    var8 = var8.transactionReceipt;
                                    var6['encodedReceipt'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0029_ip = 396; continue _fun0029 }
case 397:
                                    var11 = var9;
                                    var8 = var11.currencyCode;
case 396:
                                    var6['presentmentCurrency'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0029_ip = 290; continue _fun0029 }
case 398:
                                    var11 = var9;
                                    var8 = var11.price;
case 290:
                                    var6['presentmentAmount'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0029_ip = 199; continue _fun0029 }
case 123:
                                    var8 = var9.countryCode;
case 199:
                                    var6['appStoreRegion'] = var8;
                                    var8 = {};
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0029_ip = 124; continue _fun0029 }
case 164:
                                    var11 = var10;
                                    var9 = var11.gift_style;
case 124:
                                    var8['gift_style'] = var9;
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0029_ip = 399; continue _fun0029 }
case 203:
                                    var9 = var10.reward_sku_ids;
case 399:
                                    var8['reward_sku_ids'] = var9;
                                    var6['giftInfoOptions'] = var8;
                                    var8 = 'restoreSubscription';
                                    var6['source'] = var8;
                                    var8 = _closure2_slot0;
                                    var6['skipDupCheck'] = var8;
                                    var7 = var7.bind(var2)(var6);
                                    var6 = var7.then;
                                    var3 = function(arg1) {
                                        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                                            var3 = arg1;
                                            var2 = _closure1_slot0;
                                            var5 = _closure1_slot3;
                                            var1 = 23;
                                            var1 = var5[var1];
                                            var6 = undefined;
                                            var7 = var2.bind(var6)(var1);
                                            var5 = var7.finishTransaction;
                                            var1 = {};
                                            var8 = {};
                                            var9 = _closure6_slot0;
                                            var10 = var9.productIdentifier;
                                            var8['productId'] = var10;
                                            var10 = var9.transactionDate;
                                            var8['transactionDate'] = var10;
                                            var10 = var9.transactionReceipt;
                                            var8['transactionReceipt'] = var10;
                                            var10 = var9.transactionIdentifier;
                                            var9 = var10.toString;
                                            var9 = var9.bind(var10)();
                                            var8['transactionId'] = var9;
                                            var1['purchase'] = var8;
                                            var1 = var5.bind(var7)(var1);
                                            var1 = null;
                                            if(!(var1 != var3)) { _fun0030_ip = 174; continue _fun0030 }
case 400:
                                            var5 = _closure1_slot1;
                                            var7 = _closure1_slot3;
                                            var4 = 20;
                                            var4 = var7[var4];
                                            var6 = var5.bind(var6)(var4);
                                            var5 = var6.dispatch;
                                            var4 = {};
                                            var7 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                            var4['type'] = var7;
                                            var7 = _closure6_slot1;
                                            var4['key'] = var7;
                                            var4 = var5.bind(var6)(var4);
case 174:
                                            var3 = var1 != var3;
                                            var1 = null;
                                            if(!var3) { _fun0030_ip = 401; continue _fun0030 }
case 402:
                                            var1 = _closure6_slot0;
case 401:
                                            return var1;
                                        }
                                    };
                                    var3 = var6.bind(var7)(var3);
                                    SaveGenerator(address=334);
case 403:
                                    return var3;
case 404:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0029_ip = 405; continue _fun0029 }
case 176:
                                    var4 = var3;
                                    if(!(var5 != var3)) { _fun0029_ip = 323; continue _fun0029 }
case 406:
                                    var6 = _closure4_slot0;
                                    var5 = var6.push;
                                    var4 = var5.bind(var6)(var4);
case 323: // try_end0
                                    _fun0029_ip = 208; continue _fun0029;
case 405:
                                    return var3;
case 76: // catch_target0
                                    CatchBlockStart(arg_register=4);
                                    var4 = _closure4_slot1;
                                    var3 = var4.push;
                                    var3 = var3.bind(var4)(var5);
case 208:
                                    return var2;
case 394:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var8 = _closure1_slot24;
                        var8 = var8.bind(var5)(var9);
                        var20 = var8;
                        var8 = var8.bind(var5)();
                        var18 = var8;
                        var8 = var8.done;
                        var9 = global;
                        var17 = 'iterator is not an object';
                        var16 = 'iterator.throw() did not return an object';
                        var15 = 'throw';
                        var13 = 'iterator.next() did not return an object';
                        if(var8) { _fun0027_ip = 407; continue _fun0027 }
case 408:
                        var8 = var18;
                        var21 = var8.value;
                        var8 = var19;
                        var21 = var8.bind(var5)(var21);
                        var8 = var9.Symbol;
                        var8 = var8.iterator;
                        var8 = var21[var8];
                        var22 = var8.bind(var21)();
                        var30 = var22;
                        var29 = var17;
                        var8 = ensureObject(var30, var29);
                        var27 = var22.next;
                        var26 = undefined;
case 409:
                        var21 = var26;
                        var21 = var27.bind(var22)(var21);
                        var30 = var21;
                        var29 = var13;
                        var23 = ensureObject(var30, var29);
                        var8 = var21;
                        var23 = var21.done;
                        if(var23) { _fun0027_ip = 410; continue _fun0027 }
case 411: // try_start_0
                        var23 = generatorSetDelegated();
                        SaveGenerator(address=499);
case 412:
                        return var21;
case 413: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=22);
                        var30 = var22;
                        var29 = var15;
                        var21 = getMethod(var30, var29);
                        if(!(var21 !== var5)) { _fun0027_ip = 414; continue _fun0027 }
case 415:
                        var21 = var21.bind(var22)(var23);
                        var30 = var21;
                        var29 = var16;
                        var23 = ensureObject(var30, var29);
                        var23 = var21.done;
                        if(var23) { _fun0027_ip = 416; continue _fun0027 }
case 212:
                        var23 = generatorSetDelegated();
                        SaveGenerator(address=499);
case 206:
                        return var21;
case 417: // try_start_1
                        ResumeGenerator(result_out_reg=22, return_bool_out_reg=24);
                        var26 = var23;
                        var24 = var25;
                        if(!var24) { _fun0027_ip = 409; continue _fun0027 }
case 418:
                        var26 = var23;
case 89: // try_end1
                        var29 = 'return';
                        var30 = var22;
                        var28 = getMethod(var30, var29);
                        if(!(var28 !== var5)) { _fun0027_ip = 419; continue _fun0027 }
case 420:
                        var24 = var26;
                        var24 = var28.bind(var22)(var24);
                        var29 = 'iterator.return() did not return an object';
                        var30 = var24;
                        var28 = ensureObject(var30, var29);
                        var28 = var24.done;
                        if(var28) { _fun0027_ip = 421; continue _fun0027 }
case 422:
                        var28 = generatorSetDelegated();
                        SaveGenerator(address=499);
case 294:
                        return var24;
case 421:
                        var24 = var24.value;
case 193: // try_end2 // try_end5
                        var26 = _closure1_slot1;
                        var25 = _closure1_slot3;
                        var25 = var25[var6];
                        var27 = var26.bind(var5)(var25);
                        var26 = var27.dispatch;
                        var25 = {};
                        var28 = 'IAP_RESTORE_PURCHASES_END';
                        var25['type'] = var28;
                        var25 = var26.bind(var27)(var25);
                        return var24;
case 419:
                        var25 = _closure1_slot1;
                        var24 = _closure1_slot3;
                        var24 = var24[var6];
                        var26 = var25.bind(var5)(var24);
                        var25 = var26.dispatch;
                        var24 = {};
                        var27 = 'IAP_RESTORE_PURCHASES_END';
                        var24['type'] = var27;
                        var24 = var25.bind(var26)(var24);
                        return var23;
case 416: // try_start_3 // try_start_6
                        var8 = var21;
                        _fun0027_ip = 410; continue _fun0027;
case 414:
                        var29 = 'return';
                        var30 = var22;
                        var21 = getMethod(var30, var29);
                        if(!(var21 !== var5)) { _fun0027_ip = 423; continue _fun0027 }
case 334:
                        var30 = var21.bind(var22)();
                        var29 = 'iterator.return() did not return an object';
                        var21 = ensureObject(var30, var29);
case 423:
                        var30 = 'yield* delegate must have a .throw() method';
                        var21 = throwTypeError(var30);
                        throw var5;
case 410:
                        var8 = var8.value;
                        var8 = var20;
                        var8 = var8.bind(var5)();
                        var18 = var8;
                        var8 = var8.done;
                        if(!var8) { _fun0027_ip = 408; continue _fun0027 }
case 407:
                        var8 = var12;
                        var8 = var8.length;
                        if(!(var8 > var14)) { _fun0027_ip = 424; continue _fun0027 }
case 425:
                        var13 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var8 = 21;
                        var8 = var15[var8];
                        var13 = var13.bind(var5)(var8);
                        var8 = var13.fetchSubscriptions;
                        var8 = var8.bind(var13)();
                        SaveGenerator(address=773);
case 426:
                        return var8;
case 427:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=12);
                        if(var13) { _fun0027_ip = 428; continue _fun0027 }
case 424:
                        var13 = var11;
                        var13 = var13.length;
                        if(!(!(var13 > var14))) { _fun0027_ip = 429; continue _fun0027 }
case 430: // try_end3 // try_end6
                        var14 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var13 = var13[var6];
                        var15 = var14.bind(var5)(var13);
                        var14 = var15.dispatch;
                        var13 = {};
                        var16 = 'IAP_RESTORE_PURCHASES_END';
                        var13['type'] = var16;
                        var13 = var14.bind(var15)(var13);
                        return var12;
case 429: // try_start_4 // try_start_7
                        var12 = var11;
                        var11 = var12.forEach;
                        var10 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.captureBillingException;
                            var2 = arg1;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var10 = var11.bind(var12)(var10);
                        var11 = var9.Error;
                        var9 = var11.prototype;
                        var10 = Object.create(var9, {constructor: {value: var11}});
                        var30 = 'There were some errors while trying to restore';
                        var31 = var10;
                        var9 = new var31[var11](var30, var29);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
case 428: // try_end4 // try_end7
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var9 = var9[var6];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var12 = 'IAP_RESTORE_PURCHASES_END';
                        var9['type'] = var12;
                        var9 = var10.bind(var11)(var9);
                        return var8;
case 392:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var8 = var8[var6];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'IAP_RESTORE_PURCHASES_END';
                        var8['type'] = var11;
                        var8 = var9.bind(var10)(var8);
                        var8 = new Array(0);
                        return var8;
case 391:
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
case 388:
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
case 387:
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
case 431: // try_start_8 // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=1);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.captureBillingException;
                        var4 = var4.bind(var7)(var2);
                        throw var2;
case 432: // try_end8 // catch_target5 // catch_target6 // catch_target7 // catch_target8
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
case 268:
                        var2 = new Array(0);
                        return var2;
case 383:
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
    var8 = 23;
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
    var8 = 43;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'actions/native/BillingActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['restoreFromLocalReceipt'] = var6;
    var3['getIAPJWTRequestData'] = var5;
    var3['updateAppleSubscription'] = var4;
    var4 = function cancelGenericSubscription(arg1, arg2) {
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
    var4 = function createGenericSubscription(arg1) {
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
    var4 = function resubscribeGenericSubscription(arg1, arg2) {
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
    var2 = function mobilePurchaseSKU(arg1, arg2) {
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