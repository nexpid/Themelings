// app/actions/native/BillingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var13 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var11;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
    var12 = function applyAppleReceipt(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var18 = var1.encodedReceipt;
            var17 = var1.entitlementSkuId;
            var16 = var1.presentmentCurrency;
            var15 = var1.presentmentAmount;
            var14 = var1.appStoreRegion;
            var13 = var1.giftInfoOptions;
            var12 = var1.isGift;
            var7 = var1.retries;
            var3 = var1.jwsRepresentation;
            var10 = var1.jwsRepresentations;
            var11 = var1.source;
            var4 = var1.skipDupCheck;
            var9 = var1.orderId;
            var20 = null;
            if(!(var20 != var10)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            if(!(var20 == var3)) { _fun0004_ip = 38; continue _fun0004 }
case 36:
            if(!(var20 != var3)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var1 = new Array(1);
            var1[0] = var3;
            var10 = var1;
case 39:
            var6 = var18;
            if(!(var20 != var10)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = 0;
            var6 = var10[var1];
case 41:
            var3 = _closure1_slot1;
            var19 = _closure1_slot3;
            var1 = 13;
            var1 = var19[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.v3;
            var3 = var1.bind(var3)(var6);
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var1 = 14;
            var1 = var19[var1];
            var1 = var6.bind(var5)(var1);
            var19 = var1.Storage;
            var6 = var19.get;
            var1 = _closure1_slot22;
            var1 = var6.bind(var19)(var1);
            if(var4) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            if(!(var1 === var3)) { _fun0004_ip = 43; continue _fun0004 }
case 45:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)(var20);
            _fun0004_ip = 46; continue _fun0004;
case 43:
            var6 = true;
            var3 = var6 !== var12;
            if(var3) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var4 = var20 != var13;
            if(!var4) { _fun0004_ip = 49; continue _fun0004 }
case 18:
            var21 = var20 == var13;
            var19 = undefined;
            if(var21) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var19 = var13.gift_style;
case 50:
            var4 = var20 != var19;
case 49:
            var3 = var4;
case 47:
            if(var3) { _fun0004_ip = 27; continue _fun0004 }
case 52:
            var4 = _closure1_slot1;
            var19 = _closure1_slot3;
            var3 = 15;
            var3 = var19[var3];
            var20 = var4.bind(var5)(var3);
            var19 = var20.track;
            var3 = _closure1_slot17;
            var4 = var3.GIFT_INFO_OPTIONS_MISSING;
            var3 = {};
            var3['source'] = var11;
            var3['sku_id'] = var17;
            var3 = var19.bind(var20)(var4, var3);
case 27:
            var4 = _closure1_slot0;
            var19 = _closure1_slot3;
            var3 = 16;
            var3 = var19[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {};
            var8 = _closure1_slot19;
            var8 = var8.BILLING_APPLY_APPLE_RECEIPT;
            var3['url'] = var8;
            var8 = {};
            var8['encoded_receipt'] = var18;
            var8['entitlement_sku_id'] = var17;
            var8['presentment_currency'] = var16;
            var8['presentment_amount'] = var15;
            var8['app_store_region'] = var14;
            var8['gift_info_options'] = var13;
            var8['is_gift'] = var12;
            var8['source'] = var11;
            var8['jws_representations'] = var10;
            var8['order_id'] = var9;
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
                var2 = _closure1_slot22;
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
                var6 = _closure1_slot23;
                var5['source'] = var6;
                var2['tags'] = var5;
                var2 = var3.bind(var4)(var1, var2);
                throw var1;
            };
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
case 38:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var23 = "Can pass either 'jwsRepresentation' or 'jwsRepresentations'.  Not both";
            var24 = var2;
            var1 = new var24[var3](var23, var22);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot28 = var12;
    var1 = function _getTrialOfferSignature() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 53:
                    var8 = arg1;
                    var7 = arg2;
                    var6 = arg3;
case 54: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot19;
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
case 55:
                    return var2;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var3 = var2.body;
case 59: // try_end0
                    return var3;
case 57:
                    return var2;
case 60: // catch_target0
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
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function preCompletionFailureReason(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot24;
            var3 = var4.has;
            var1 = arg1;
            var1 = var1.code;
            var1 = var3.bind(var4)(var1);
            var2 = _closure1_slot25;
            if(var1) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var1 = var2.PURCHASE_INCOMPLETE;
            _fun0006_ip = 2; continue _fun0006;
case 61:
            var1 = var2.USER_CANCELLED;
case 2:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handlePurchaseException(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0007_ip = 32; continue _fun0007 }
case 63:
            var5 = true;
case 32:
            var7 = _closure1_slot24;
            var6 = var7.has;
            var4 = var3.code;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 35;
            var7 = var6[var4];
            var8 = var9.bind(var1)(var7);
            var7 = var8.isSpendingLimitError;
            var14 = 36;
            var6 = var6[var14];
            var6 = var9.bind(var1)(var6);
            var6 = var6.BillingError;
            var9 = var3 instanceof var6;
            var6 = var3;
            if(var9) { _fun0007_ip = 66; continue _fun0007 }
case 11:
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var14];
            var9 = var10.bind(var1)(var9);
            var9 = var9.BillingError;
            var10 = var9.prototype;
            var10 = Object.create(var10, {constructor: {value: var9}});
            var21 = var10;
            var20 = var3;
            var9 = new var21[var9](var20, var19);
            var6 = var9 instanceof Object ? var9 : var10;
case 66:
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var6 = var3.message;
            var6 = global;
            var8 = var6.JSON;
            var7 = var8.stringify;
            var7 = var7.bind(var8)(var3);
            var8 = _closure1_slot2;
            var9 = _closure1_slot3;
            var7 = 37;
            var7 = var9[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.getUnderlyingIOSError;
            var8 = var7.bind(var8)(var3);
            var10 = null;
            if(!(var10 == var8)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var12 = _closure1_slot0;
            var7 = _closure1_slot3;
            var13 = 28;
            var9 = var7[var13];
            var9 = var12.bind(var1)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var7 = var7[var13];
            var7 = var12.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.PjfUXe;
            var7 = var9.bind(var11)(var7);
            var11 = var3.name;
            var9 = 'HTTPResponseError';
            var15 = var7;
            if(!(var9 !== var11)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var9 = 'status';
            var9 = var9 in var3;
            if(!var9) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var9 = 'method';
            var9 = var9 in var3;
            var15 = var7;
            if(var9) { _fun0007_ip = 71; continue _fun0007 }
case 73:
            var9 = var3.message;
            if(var9) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var9 = var7;
case 75:
            var15 = var9;
case 71:
            var9 = var3.body;
            var12 = var15;
            if(!(var10 != var9)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var9 = var3.body;
            var11 = var9.apple_error_code;
            var12 = var15;
            if(!(var10 != var11)) { _fun0007_ip = 77; continue _fun0007 }
case 79:
            var18 = var9.apple_error_code;
            var6 = var6.HermesInternal;
            var15 = var6.concat;
            var21 = '';
            var19 = ' (code: ';
            var17 = ')';
            var20 = var7;
            var12 = var21[var15](var20, var19, var18, var17, var16);
case 77:
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var14];
            var6 = var9.bind(var1)(var6);
            var6 = var6.BillingError;
            var9 = var3 instanceof var6;
            var6 = var3;
            if(var9) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var11 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var14];
            var9 = var11.bind(var1)(var9);
            var9 = var9.BillingError;
            var11 = var9.prototype;
            var11 = Object.create(var11, {constructor: {value: var9}});
            var21 = var11;
            var20 = var3;
            var9 = new var21[var9](var20, var19);
            var6 = var9 instanceof Object ? var9 : var11;
case 80:
            var7 = var12 === var7;
            if(!var7) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var7 = var5;
case 82:
            if(!var7) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var11 = var6.code;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var9 = 38;
            var9 = var15[var9];
            var9 = var14.bind(var1)(var9);
            var9 = var9.ErrorCodes;
            var9 = var9.UNKNOWN;
            var7 = var11 !== var9;
case 84:
            if(!var7) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var11 = var6.code;
            var9 = -1;
            var7 = var9 !== var11;
case 86:
            if(!var7) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var9 = var6.message;
            var7 = var10 != var9;
case 88:
            if(!var7) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var12 = var6.message;
case 90:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 30;
            var6 = var9[var6];
            var11 = var7.bind(var1)(var6);
            var10 = var11.show;
            var6 = {};
            var7 = _closure1_slot0;
            var14 = var9[var13];
            var14 = var7.bind(var1)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var9[var13];
            var13 = var7.bind(var1)(var13);
            var13 = var13.t;
            var13 = var13.zrhHH3;
            var13 = var14.bind(var15)(var13);
            var6['title'] = var13;
            var6['body'] = var12;
            var12 = true;
            var6['isDismissable'] = var12;
            var6['hideActionSheet'] = var5;
            var6 = var10.bind(var11)(var6);
            var6 = 17;
            var6 = var9[var6];
            var9 = var7.bind(var1)(var6);
            var7 = var9.captureBillingException;
            var6 = {};
            var10 = {};
            var11 = _closure1_slot23;
            var10['source'] = var11;
            var11 = arg2;
            var10['purchase_type'] = var11;
            var6['tags'] = var10;
            var6 = var7.bind(var9)(var3, var6);
            if(!var5) { _fun0007_ip = 64; continue _fun0007 }
case 92:
            throw var3;
case 69:
            var6 = _closure1_slot1;
            var13 = _closure1_slot3;
            var5 = 30;
            var5 = var13[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.show;
            var5 = {};
            var12 = _closure1_slot0;
            var9 = 28;
            var10 = var13[var9];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var1)(var9);
            var9 = var9.t;
            var9 = var9.POsVOt;
            var9 = var10.bind(var11)(var9);
            var5['title'] = var9;
            var5['body'] = var8;
            var5 = var6.bind(var7)(var5);
            throw var3;
case 67:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.showSpendingLimitReachedAlert;
            var2 = var2.bind(var3)();
case 64:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function canMakeIAPRequest() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot15;
            var1 = var2.isBusy;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(!var1) { _fun0008_ip = 93; continue _fun0008 }
case 31:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 26;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.getIsPaymentsBlocked;
            var2 = var2.bind(var5)();
            var2 = !var2;
            if(var2) { _fun0008_ip = 94; continue _fun0008 }
case 7:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 27;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var2 = false;
case 94:
            var1 = var2;
case 93:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function clearAndMakeIAPRequest(arg1, arg2, arg3, arg4) {
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
    var1 = function _clearAndMakeIAPRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 95; continue _fun0009 }
case 53:
                    var9 = arg1;
                    var16 = arg2;
                    var13 = arg3;
                    var11 = arg4;
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
case 96: // try_start_0 // try_start_1
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var3 = 22;
                    var3 = var21[var3];
                    var20 = var20.bind(var6)(var3);
                    var3 = var20.clearTransactionIOS;
                    var3 = var3.bind(var20)();
                    SaveGenerator(address=81);
case 97:
                    return var3;
case 98:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=19);
                    if(var20) { _fun0009_ip = 81; continue _fun0009 }
case 93:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 20;
                    var20 = var22[var20];
                    var21 = var21.bind(var6)(var20);
                    var20 = var21.makeIAPRequest;
                    var11 = var20.bind(var21)(var16, var13, var11);
                    SaveGenerator(address=127);
case 57:
                    return var11;
case 41:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0009_ip = 99; continue _fun0009 }
case 100:
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
                    if(var20) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var20 = var19;
                    var19 = var20.toString;
                    var16 = var19.bind(var20)();
case 101:
                    var18 = var16;
                    if(!(var10 == var16)) { _fun0009_ip = 103; continue _fun0009 }
case 104:
                    var16 = var15;
                    _fun0009_ip = 105; continue _fun0009;
case 103:
                    var16 = var18;
case 105:
                    var13['original_transaction_id'] = var16;
                    var16 = var12;
                    var16 = var16.purchaseResponse;
                    var16 = var16.originalTransactionDate;
                    var17 = var16;
                    if(!(var10 == var16)) { _fun0009_ip = 106; continue _fun0009 }
case 107:
                    var16 = var14;
                    _fun0009_ip = 50; continue _fun0009;
case 106:
                    var16 = var17;
case 50:
                    var13['original_transaction_date'] = var16;
                    var13['transaction_id'] = var15;
                    var13['transaction_date'] = var14;
                    var7 = var13;
case 108: // try_end0 // try_end1
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var13 = 15;
                    var13 = var15[var13];
                    var16 = var14.bind(var6)(var13);
                    var15 = var16.track;
                    var13 = _closure1_slot17;
                    var14 = var13.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var13 = {};
                    var17 = var9;
                    var13['request_identifier'] = var17;
                    var17 = var8;
                    var13['success'] = var17;
                    var24 = var7;
                    var25 = var13;
                    var17 = copyDataProperties(var25, var24);
                    var13 = var15.bind(var16)(var14, var13);
                    return var12;
case 99:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var12 = 15;
                    var12 = var14[var12];
                    var15 = var13.bind(var6)(var12);
                    var14 = var15.track;
                    var12 = _closure1_slot17;
                    var13 = var12.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var12 = {};
                    var16 = var9;
                    var12['request_identifier'] = var16;
                    var16 = var8;
                    var12['success'] = var16;
                    var24 = var7;
                    var25 = var12;
                    var16 = copyDataProperties(var25, var24);
                    var12 = var14.bind(var15)(var13, var12);
                    return var11;
case 81:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var11 = 15;
                    var11 = var13[var11];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.track;
                    var4 = _closure1_slot17;
                    var11 = var4.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var4 = {};
                    var14 = var9;
                    var4['request_identifier'] = var14;
                    var14 = var8;
                    var4['success'] = var14;
                    var24 = var7;
                    var25 = var4;
                    var14 = copyDataProperties(var25, var24);
                    var4 = var12.bind(var13)(var11, var4);
                    return var3;
case 109: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var3 = {};
                    var4 = var4.code;
                    var5 = var4;
                    var10 = var10 == var4;
                    var4 = undefined;
                    if(var10) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                    var10 = var5;
                    var5 = var10.toString;
                    var4 = var5.bind(var10)();
case 110:
                    var3['error_code'] = var4;
                    var5 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var4 = 37;
                    var4 = var10[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getUnderlyingIOSError;
                    var4 = var4.bind(var5)(var2);
                    var3['error_message'] = var4;
                    var7 = var3;
                    throw var2;
case 112: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 15;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot17;
                    var4 = var3.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var3 = {};
                    var3['request_identifier'] = var9;
                    var3['success'] = var8;
                    var24 = var7;
                    var25 = var3;
                    var7 = copyDataProperties(var25, var24);
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
case 95:
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
    var7 = function getIAPJWTRequestData(arg1) {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var7;
    var1 = function _getIAPJWTRequestData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 113; continue _fun0010 }
case 114:
                    var _closure4_slot0 = var5;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 39;
                    var2 = var11[var2];
                    var10 = undefined;
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var6 = _closure1_slot19;
                    var6 = var6.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = 40;
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
                            var8 = 41;
                            var3 = var3[var8];
                            var9 = undefined;
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0011_ip = 115; continue _fun0011 }
case 116:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = 42;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0011_ip = 115; continue _fun0011 }
case 55:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.MODIFY;
                            if(!(var4 !== var3)) { _fun0011_ip = 117; continue _fun0011 }
case 118:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0011_ip = 119; continue _fun0011 }
case 120:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0011_ip = 119; continue _fun0011 }
case 121:
                            var3 = {};
                            var12 = _closure4_slot0;
                            var13 = var3;
                            var4 = copyDataProperties(var13, var12);
                            var4 = var3;
                            _fun0011_ip = 122; continue _fun0011;
case 119:
                            var11 = _closure4_slot0;
                            var8 = var11.sku_id;
                            var6 = var11.country_code;
                            var5 = var11.is_gift;
                            var10 = var11.gift_info_options;
                            var3 = {};
                            var3['sku_id'] = var8;
                            var3['request_country_code'] = var6;
                            var8 = _closure1_slot7;
                            var6 = _closure1_slot6;
                            var12 = var8.bind(var9)(var11, var6);
                            var13 = var3;
                            var6 = copyDataProperties(var13, var12);
                            var6 = null;
                            if(!(var6 != var10)) { _fun0011_ip = 123; continue _fun0011 }
case 124:
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var3['gift_info_options'] = var6;
case 123:
                            var4 = var3;
                            if(!var5) { _fun0011_ip = 122; continue _fun0011 }
case 125:
                            var3['is_gift'] = var5;
                            var4 = var3;
                            _fun0011_ip = 122; continue _fun0011;
case 117:
                            var6 = _closure4_slot0;
                            var10 = var6.subscription_items;
                            var5 = _closure1_slot7;
                            var3 = _closure1_slot5;
                            var12 = var5.bind(var9)(var6, var3);
                            var3 = {};
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var3['subscription_items_json_string'] = var6;
                            var13 = var3;
                            var5 = copyDataProperties(var13, var12);
                            var4 = var3;
                            _fun0011_ip = 122; continue _fun0011;
case 115:
                            var6 = _closure4_slot0;
                            var10 = var6.items;
                            var5 = var6.country_code;
                            var3 = _closure1_slot7;
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
case 122:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 43;
                            var1 = var3[var1];
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0011_ip = 90; continue _fun0011 }
case 86:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0011_ip = 90; continue _fun0011 }
case 126:
                            var6 = var7.request_data;
case 90:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0011_ip = 127; continue _fun0011 }
case 128:
                            var5 = var6;
case 127:
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
case 129:
                    return var2;
case 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 131; continue _fun0010 }
case 132:
                    var3 = {};
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.stringify;
                    var4 = var2.body;
                    var4 = var4.request_data;
                    var4 = var5.bind(var6)(var4);
                    var3['requestJSONString'] = var4;
                    return var3;
case 131:
                    return var2;
case 113:
                    return var1;
                }
            };
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
    var6 = function updateAppleSubscription(arg1) {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var6;
    var1 = function _updateAppleSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 133; continue _fun0012 }
case 114:
                    var _closure4_slot0 = var6;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 39;
                    var2 = var10[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.patch;
                    var2 = {};
                    var12 = _closure1_slot19;
                    var11 = var12.BILLING_APPLE_SUBSCRIPTION;
                    var9 = var6.subscription_id;
                    var9 = var11.bind(var12)(var9);
                    var2['url'] = var9;
                    var2['body'] = var6;
                    var6 = true;
                    var2['oldFormErrors'] = var6;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = 40;
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
                            var1 = 43;
                            var1 = var3[var1];
                            var9 = undefined;
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 134; continue _fun0013 }
case 135:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 134; continue _fun0013 }
case 136:
                            var6 = var7.request_data;
case 134:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0013_ip = 137; continue _fun0013 }
case 138:
                            var5 = var6;
case 137:
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
case 139:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 140; continue _fun0012 }
case 141:
                    return var3;
case 140:
                    return var2;
case 133:
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
    var1 = function determineProductId(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 41;
            var2 = var2[var6];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CREATE;
            if(!(var2 !== var4)) { _fun0014_ip = 142; continue _fun0014 }
case 143:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CANCEL;
            if(!(var2 !== var4)) { _fun0014_ip = 142; continue _fun0014 }
case 134:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.RESUBSCRIBE;
            if(!(var2 !== var4)) { _fun0014_ip = 142; continue _fun0014 }
case 144:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.REACTIVATE;
            if(!(var2 !== var4)) { _fun0014_ip = 142; continue _fun0014 }
case 118:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CHARGE;
            if(!(var2 !== var4)) { _fun0014_ip = 145; continue _fun0014 }
case 146:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 42;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CREATE;
            if(!(var2 !== var4)) { _fun0014_ip = 147; continue _fun0014 }
case 148:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CANCEL;
            if(!(var2 !== var4)) { _fun0014_ip = 147; continue _fun0014 }
case 149:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.REACTIVATE;
            if(!(var2 !== var4)) { _fun0014_ip = 147; continue _fun0014 }
case 150:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.MODIFY;
            if(!(var2 !== var4)) { _fun0014_ip = 147; continue _fun0014 }
case 151:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CHARGE;
            if(!(var2 !== var4)) { _fun0014_ip = 152; continue _fun0014 }
case 153:
            var2 = global;
            var5 = var2.Error;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var7 = 'Invalid operation';
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            throw var2;
case 152:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 25;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_CONSUMABLE;
            return var2;
case 147:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 25;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_SUBSCRIPTION;
            return var2;
case 145:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 25;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_CONSUMABLE;
            return var2;
case 142:
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 25;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.ProductIds;
            var1 = var1.GENERIC_SUBSCRIPTION;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function _cancelGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 154; continue _fun0015 }
case 53:
                    var11 = arg1;
                    var8 = arg2;
                    var3 = arg3;
                    var6 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    var2 = _closure1_slot32;
                    var2 = var2.bind(var6)();
                    if(var2) { _fun0015_ip = 96; continue _fun0015 }
case 155:
                    var2 = false;
                    return var2;
case 96:
                    var2 = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    if(var2) { _fun0015_ip = 156; continue _fun0015 }
case 157:
                    var2 = 41;
                    var2 = var9[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.APBRequestOperations;
                    var5 = var2.CANCEL;
                    _fun0015_ip = 158; continue _fun0015;
case 156:
                    var2 = 42;
                    var2 = var9[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.ACRequestOperations;
                    var5 = var2.CANCEL;
case 158:
                    var12 = var5;
                    var2 = _closure1_slot39;
                    var13 = var2.bind(var6)(var5);
                    var10 = var13;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var9 = 23;
                    var2 = var2[var9];
                    var7 = var5.bind(var6)(var2);
                    var5 = var7.dispatch;
                    var2 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_START';
                    var2['type'] = var14;
                    var2['productIdentifier'] = var13;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=174);
case 159:
                    return var2;
case 160:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 161; continue _fun0015 }
case 162: // try_start_0
                    var7 = _closure1_slot37;
                    var5 = {};
                    var5['operation'] = var12;
                    var5['request_identifier'] = var11;
                    var5['subscription_id'] = var8;
                    var5 = var7.bind(var6)(var5);
                    SaveGenerator(address=213);
case 163:
                    return var5;
case 164:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0015_ip = 47; continue _fun0015 }
case 104:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var9];
                    var11 = var8.bind(var6)(var7);
                    var8 = var11.dispatch;
                    var7 = {};
                    var12 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var7['type'] = var12;
                    var12 = var10;
                    var7['productIdentifier'] = var12;
                    var7 = var8.bind(var11)(var7);
case 149: // try_end0
                    var7 = true;
                    return var7;
case 47:
                    return var5;
case 52: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var9];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var7['type'] = var11;
                    var7['productIdentifier'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var4 = _closure1_slot31;
                    var7 = var3;
                    var3 = 'partner_subscription';
                    if(!var7) { _fun0015_ip = 165; continue _fun0015 }
case 166:
                    var3 = 'advanced_commerce';
case 165:
                    var3 = var4.bind(var6)(var5, var3);
                    var3 = false;
                    return var3;
case 161:
                    return var2;
case 154:
                    return var1;
                }
            };
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
    var5 = function isValidCurrency(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot18;
        var3 = var2.bind(var3)(var1);
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot41 = var5;
    var1 = function _createGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 167; continue _fun0016 }
case 168:
                    var9 = var2.requestIdentifier;
                    var4 = var2.items;
                    var19 = var2.currency;
                    var17 = var2.countryCode;
                    var8 = var2.orderId;
                    var11 = undefined;
                    var13 = undefined;
                    var5 = undefined;
                    var18 = undefined;
                    SaveGenerator(address=54);
case 169:
                    return var11;
case 170:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 171; continue _fun0016 }
case 135:
                    var3 = _closure1_slot32;
                    var3 = var3.bind(var11)();
                    if(var3) { _fun0016_ip = 172; continue _fun0016 }
case 136:
                    var3 = {};
                    var7 = false;
                    var3['success'] = var7;
                    var7 = _closure1_slot25;
                    var7 = var7.CANNOT_MAKE_REQUEST;
                    var3['failureReason'] = var7;
                    return var3;
case 172:
                    var7 = _closure1_slot41;
                    var3 = var19;
                    var3 = var7.bind(var11)(var3);
                    if(var3) { _fun0016_ip = 132; continue _fun0016 }
case 144:
                    var3 = {};
                    var7 = false;
                    var3['success'] = var7;
                    var7 = _closure1_slot25;
                    var7 = var7.INVALID_CURRENCY;
                    var3['failureReason'] = var7;
                    return var3;
case 132:
                    var10 = _closure1_slot39;
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var20 = 42;
                    var7 = var3[var20];
                    var7 = var12.bind(var11)(var7);
                    var7 = var7.ACRequestOperations;
                    var7 = var7.CREATE;
                    var14 = var10.bind(var11)(var7);
                    var13 = var14;
                    var7 = _closure1_slot1;
                    var12 = 23;
                    var3 = var3[var12];
                    var10 = var7.bind(var11)(var3);
                    var7 = var10.dispatch;
                    var3 = {};
                    var15 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var15;
                    var3['productIdentifier'] = var14;
                    var3 = var7.bind(var10)(var3);
                    SaveGenerator(address=237);
case 173:
                    return var3;
case 174:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0016_ip = 175; continue _fun0016 }
case 176:
                    var7 = false;
                    var5 = false;
case 177: // try_start_0
                    var14 = {};
                    var10 = var9;
                    var14['request_identifier'] = var10;
                    var15 = var4;
                    var10 = var15.map;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.planId;
                        var1['plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var4 = var10.bind(var15)(var4);
                    var14['items'] = var4;
                    var4 = var19;
                    var14['currency'] = var4;
                    var4 = var17;
                    var14['country_code'] = var4;
                    var4 = var8;
                    var14['order_id'] = var4;
                    var10 = _closure1_slot35;
                    var4 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var15 = var15[var20];
                    var15 = var16.bind(var11)(var15);
                    var15 = var15.ACRequestOperations;
                    var15 = var15.CREATE;
                    var4['operation'] = var15;
                    var24 = var4;
                    var23 = var14;
                    var14 = copyDataProperties(var24, var23);
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=367);
case 178:
                    return var4;
case 179:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0016_ip = 180; continue _fun0016 }
case 181:
                    var23 = var4.requestJSONString;
                    var14 = _closure1_slot33;
                    var24 = var9;
                    var22 = var13;
                    var16 = true;
                    var25 = undefined;
                    var21 = true;
                    var9 = var25[var14](var24, var23, var22, var21, var20);
                    SaveGenerator(address=406);
case 152:
                    return var9;
case 182:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(var10) { _fun0016_ip = 183; continue _fun0016 }
case 184:
                    var15 = var9.purchaseResponse;
                    var18 = var9.originalPurchase;
                    var5 = true;
                    var14 = _closure1_slot28;
                    var10 = {};
                    var20 = var15.transactionReceipt;
                    var10['encodedReceipt'] = var20;
                    var20 = 3;
                    var10['retries'] = var20;
                    var10['presentmentCurrency'] = var19;
                    var10['appStoreRegion'] = var17;
                    var15 = var15.jwsRepresentation;
                    var10['jwsRepresentation'] = var15;
                    var15 = 'createGenericSubscription';
                    var10['source'] = var15;
                    var15 = var8;
                    var10['orderId'] = var15;
                    var10 = var14.bind(var11)(var10);
                    SaveGenerator(address=500);
case 185:
                    return var10;
case 186:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                    if(var14) { _fun0016_ip = 187; continue _fun0016 }
case 122:
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var14 = 22;
                    var14 = var17[var14];
                    var17 = var15.bind(var11)(var14);
                    var15 = var17.finishTransaction;
                    var14 = {};
                    var14['purchase'] = var18;
                    var14 = var15.bind(var17)(var14);
                    SaveGenerator(address=551);
case 188:
                    return var14;
case 89:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0016_ip = 189; continue _fun0016 }
case 190:
                    var17 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var15 = var15[var12];
                    var18 = var17.bind(var11)(var15);
                    var17 = var18.dispatch;
                    var15 = {};
                    var19 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var15['type'] = var19;
                    var19 = var13;
                    var15['productIdentifier'] = var19;
                    var15 = var17.bind(var18)(var15);
                    var15 = {};
                    var15['success'] = var16;
                    var16 = _closure1_slot25;
                    var16 = var16.NONE;
                    var15['failureReason'] = var16;
case 191: // try_end0
                    return var15;
case 189:
                    return var14;
case 187:
                    return var10;
case 183:
                    return var9;
case 180:
                    return var4;
case 192: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var12 = var9.bind(var11)(var4);
                    var9 = var12.dispatch;
                    var4 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var4['type'] = var14;
                    var4['productIdentifier'] = var13;
                    var4 = var9.bind(var12)(var4);
                    var9 = _closure1_slot31;
                    var12 = var8;
                    var8 = null;
                    var8 = var8 == var12;
                    var4 = var8;
                    if(var8) { _fun0016_ip = 193; continue _fun0016 }
case 194:
                    var4 = var5;
case 193:
                    var8 = var4;
                    var4 = 'advanced_commerce';
                    var4 = var9.bind(var11)(var10, var4, var8);
                    var4 = {};
                    var4['success'] = var7;
                    var6 = _closure1_slot25;
                    if(var5) { _fun0016_ip = 195; continue _fun0016 }
case 196:
                    var5 = var6.PURCHASE_INCOMPLETE;
                    _fun0016_ip = 197; continue _fun0016;
case 195:
                    var5 = var6.POST_PURCHASE_FAILED;
case 197:
                    var4['failureReason'] = var5;
                    return var4;
case 175:
                    return var3;
case 171:
                    return var2;
case 167:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _modifyGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 198; continue _fun0017 }
case 168:
                    var9 = var2.requestIdentifier;
                    var17 = var2.subscriptionId;
                    var16 = var2.items;
                    var8 = var2.orderId;
                    var14 = var2.onPurchaseComplete;
                    var11 = undefined;
                    var13 = undefined;
                    var5 = undefined;
                    var15 = undefined;
                    var18 = undefined;
                    SaveGenerator(address=56);
case 170:
                    return var11;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 199; continue _fun0017 }
case 200:
                    var3 = _closure1_slot32;
                    var3 = var3.bind(var11)();
                    if(var3) { _fun0017_ip = 201; continue _fun0017 }
case 97:
                    var3 = {};
                    var4 = false;
                    var3['success'] = var4;
                    var4 = _closure1_slot25;
                    var4 = var4.CANNOT_MAKE_REQUEST;
                    var3['failureReason'] = var4;
                    return var3;
case 201:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var4 = 25;
                    var4 = var3[var4];
                    var4 = var7.bind(var11)(var4);
                    var4 = var4.ProductIds;
                    var10 = var4.GENERIC_SUBSCRIPTION;
                    var13 = var10;
                    var4 = _closure1_slot1;
                    var12 = 23;
                    var3 = var3[var12];
                    var7 = var4.bind(var11)(var3);
                    var4 = var7.dispatch;
                    var3 = {};
                    var19 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var19;
                    var3['productIdentifier'] = var10;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=188);
case 131:
                    return var3;
case 202:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 203; continue _fun0017 }
case 204:
                    var7 = false;
                    var5 = false;
case 205: // try_start_1
                    var10 = _closure1_slot35;
                    var4 = {};
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var19 = 42;
                    var19 = var21[var19];
                    var19 = var20.bind(var11)(var19);
                    var19 = var19.ACRequestOperations;
                    var19 = var19.MODIFY;
                    var4['operation'] = var19;
                    var19 = var9;
                    var4['request_identifier'] = var19;
                    var4['subscription_id'] = var17;
                    var19 = var16;
                    var17 = var19.map;
                    var16 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.planId;
                        var1['plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var16 = var17.bind(var19)(var16);
                    var4['subscription_items'] = var16;
                    var16 = var8;
                    var4['order_id'] = var16;
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=299);
case 206:
                    return var4;
case 74:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0017_ip = 207; continue _fun0017 }
case 208:
                    var24 = var4.requestJSONString;
                    var17 = _closure1_slot33;
                    var25 = var9;
                    var23 = var13;
                    var16 = true;
                    var26 = undefined;
                    var22 = true;
                    var9 = var26[var17](var25, var24, var23, var22, var21);
                    SaveGenerator(address=338);
case 166:
                    return var9;
case 209:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(var10) { _fun0017_ip = 210; continue _fun0017 }
case 211:
                    var15 = var9.purchaseResponse;
                    var18 = var9.originalPurchase;
                    var5 = true;
case 212: // try_start_0
                    var17 = var14;
                    var10 = null;
                    var17 = var10 == var17;
                    var10 = undefined;
                    if(var17) { _fun0017_ip = 213; continue _fun0017 }
case 214:
                    var10 = var14.bind(var11)();
case 213:
                    SaveGenerator(address=383);
case 215:
                    return var10;
case 216:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                    if(var14) { _fun0017_ip = 217; continue _fun0017 }
case 218: // try_end0
                    _fun0017_ip = 219; continue _fun0017;
case 217: // try_end1
                    return var10;
case 220: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=16);
                    var14 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var10 = 17;
                    var10 = var19[var10];
                    var14 = var14.bind(var11)(var10);
                    var10 = var14.captureBillingException;
                    var10 = var10.bind(var14)(var17);
case 219:
                    var14 = _closure1_slot28;
                    var10 = {};
                    var17 = var15.transactionReceipt;
                    var10['encodedReceipt'] = var17;
                    var17 = 3;
                    var10['retries'] = var17;
                    var15 = var15.jwsRepresentation;
                    var10['jwsRepresentation'] = var15;
                    var15 = 'modifyGenericSubscription';
                    var10['source'] = var15;
                    var15 = var8;
                    var10['orderId'] = var15;
                    var10 = var14.bind(var11)(var10);
                    SaveGenerator(address=490);
case 221:
                    return var10;
case 46:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                    if(var14) { _fun0017_ip = 222; continue _fun0017 }
case 223:
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var14 = 22;
                    var14 = var17[var14];
                    var17 = var15.bind(var11)(var14);
                    var15 = var17.finishTransaction;
                    var14 = {};
                    var14['purchase'] = var18;
                    var14 = var15.bind(var17)(var14);
                    SaveGenerator(address=541);
case 224:
                    return var14;
case 225:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0017_ip = 226; continue _fun0017 }
case 227:
                    var17 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var15 = var15[var12];
                    var18 = var17.bind(var11)(var15);
                    var17 = var18.dispatch;
                    var15 = {};
                    var19 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var15['type'] = var19;
                    var19 = var13;
                    var15['productIdentifier'] = var19;
                    var15 = var17.bind(var18)(var15);
                    var15 = {};
                    var15['success'] = var16;
                    var16 = _closure1_slot25;
                    var16 = var16.NONE;
                    var15['failureReason'] = var16;
case 228: // try_end2
                    return var15;
case 226:
                    return var14;
case 222:
                    return var10;
case 210:
                    return var9;
case 207:
                    return var4;
case 229: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var12 = var9.bind(var11)(var4);
                    var9 = var12.dispatch;
                    var4 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var4['type'] = var14;
                    var4['productIdentifier'] = var13;
                    var4 = var9.bind(var12)(var4);
                    var9 = _closure1_slot31;
                    var12 = var8;
                    var8 = null;
                    var8 = var8 == var12;
                    var4 = var8;
                    if(var8) { _fun0017_ip = 230; continue _fun0017 }
case 231:
                    var4 = var5;
case 230:
                    var8 = var4;
                    var4 = 'advanced_commerce';
                    var4 = var9.bind(var11)(var10, var4, var8);
                    var4 = {};
                    var4['success'] = var7;
                    var6 = _closure1_slot25;
                    if(var5) { _fun0017_ip = 232; continue _fun0017 }
case 233:
                    var5 = var6.PURCHASE_INCOMPLETE;
                    _fun0017_ip = 234; continue _fun0017;
case 232:
                    var5 = var6.POST_PURCHASE_FAILED;
case 234:
                    var4['failureReason'] = var5;
                    return var4;
case 203:
                    return var3;
case 199:
                    return var2;
case 198:
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
    var1 = function _resubscribeGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 235; continue _fun0018 }
case 168:
                    var8 = var2.requestIdentifier;
                    var6 = var2.subscriptionId;
                    var4 = arg2;
                    var7 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=40);
case 236:
                    return var7;
case 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 237; continue _fun0018 }
case 5:
                    var3 = _closure1_slot32;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0018_ip = 238; continue _fun0018 }
case 135:
                    var3 = false;
                    return var3;
case 238:
                    var3 = {};
                    var9 = var8;
                    var3['request_identifier'] = var9;
                    var3['subscription_id'] = var6;
                    var12 = var3;
                    var6 = _closure1_slot39;
                    var3 = var4;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    if(var3) { _fun0018_ip = 239; continue _fun0018 }
case 172:
                    var3 = 41;
                    var3 = var13[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.APBRequestOperations;
                    var3 = var3.REACTIVATE;
                    _fun0018_ip = 240; continue _fun0018;
case 239:
                    var9 = 42;
                    var9 = var13[var9];
                    var9 = var10.bind(var7)(var9);
                    var9 = var9.ACRequestOperations;
                    var3 = var9.REACTIVATE;
case 240:
                    var13 = var6.bind(var7)(var3);
                    var11 = var13;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var10 = 23;
                    var3 = var3[var10];
                    var9 = var6.bind(var7)(var3);
                    var6 = var9.dispatch;
                    var3 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var14;
                    var3['productIdentifier'] = var13;
                    var3 = var6.bind(var9)(var3);
                    SaveGenerator(address=213);
case 163:
                    return var3;
case 164:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 241; continue _fun0018 }
case 242: // try_start_0
                    var6 = var4;
                    if(var6) { _fun0018_ip = 150; continue _fun0018 }
case 243:
                    var9 = _closure1_slot37;
                    var6 = {};
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 41;
                    var13 = var16[var13];
                    var13 = var14.bind(var7)(var13);
                    var13 = var13.APBRequestOperations;
                    var13 = var13.REACTIVATE;
                    var6['operation'] = var13;
                    var19 = var12;
                    var20 = var6;
                    var13 = copyDataProperties(var20, var19);
                    var6 = var9.bind(var7)(var6);
                    SaveGenerator(address=290);
case 72:
                    return var6;
case 244:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(!var9) { _fun0018_ip = 245; continue _fun0018 }
case 74: // try_end0
                    return var6;
case 150: // try_start_1
                    var9 = _closure1_slot35;
                    var6 = {};
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 42;
                    var13 = var16[var13];
                    var13 = var14.bind(var7)(var13);
                    var13 = var13.ACRequestOperations;
                    var13 = var13.REACTIVATE;
                    var6['operation'] = var13;
                    var19 = var12;
                    var20 = var6;
                    var12 = copyDataProperties(var20, var19);
                    var6 = var9.bind(var7)(var6);
                    SaveGenerator(address=364);
case 246:
                    return var6;
case 247:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0018_ip = 248; continue _fun0018 }
case 249:
                    var19 = var6.requestJSONString;
                    var13 = _closure1_slot33;
                    var20 = var8;
                    var18 = var11;
                    var17 = true;
                    var21 = undefined;
                    var8 = var21[var13](var20, var19, var18, var17, var16);
                    SaveGenerator(address=401);
case 250:
                    return var8;
case 251:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0018_ip = 112; continue _fun0018 }
case 252:
                    var13 = var8.purchaseResponse;
                    var15 = var8.originalPurchase;
                    var12 = _closure1_slot28;
                    var9 = {};
                    var14 = var13.transactionReceipt;
                    var9['encodedReceipt'] = var14;
                    var14 = 3;
                    var9['retries'] = var14;
                    var13 = var13.jwsRepresentation;
                    var9['jwsRepresentation'] = var13;
                    var13 = 'resubscribeGenericSubscription';
                    var9['source'] = var13;
                    var9 = var12.bind(var7)(var9);
                    SaveGenerator(address=475);
case 253:
                    return var9;
case 254:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0018_ip = 255; continue _fun0018 }
case 256:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 22;
                    var12 = var14[var12];
                    var14 = var13.bind(var7)(var12);
                    var13 = var14.finishTransaction;
                    var12 = {};
                    var12['purchase'] = var15;
                    var12 = var13.bind(var14)(var12);
                    SaveGenerator(address=523);
case 257:
                    return var12;
case 258:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(var13) { _fun0018_ip = 259; continue _fun0018 }
case 245:
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var13 = var13[var10];
                    var15 = var14.bind(var7)(var13);
                    var14 = var15.dispatch;
                    var13 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var13['type'] = var16;
                    var16 = var11;
                    var13['productIdentifier'] = var16;
                    var13 = var14.bind(var15)(var13);
case 260: // try_end1
                    var13 = true;
                    return var13;
case 259:
                    return var12;
case 255:
                    return var9;
case 112:
                    return var8;
case 248:
                    return var6;
case 261: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var10];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var8['type'] = var12;
                    var8['productIdentifier'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var5 = _closure1_slot31;
                    var8 = var4;
                    var4 = 'partner_subscription';
                    if(!var8) { _fun0018_ip = 262; continue _fun0018 }
case 263:
                    var4 = 'advanced_commerce';
case 262:
                    var4 = var5.bind(var7)(var6, var4);
                    var4 = false;
                    return var4;
case 241:
                    return var3;
case 237:
                    return var2;
case 235:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot44 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function _retryPendingPurchases() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 264; continue _fun0019 }
case 53:
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
                    var2 = 20;
                    var2 = var6[var2];
                    var8 = var3.bind(var7)(var2);
                    var6 = var8.restorePurchases;
                    var2 = {};
                    var3 = false;
                    var2['fullRestore'] = var3;
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=79);
case 136:
                    return var2;
case 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0019_ip = 265; continue _fun0019 }
case 266:
                    var4 = new Array(0);
                    var6 = var2.length;
                    var8 = 0;
                    if(!(var8 !== var6)) { _fun0019_ip = 267; continue _fun0019 }
case 201:
                    var6 = _closure1_slot26;
                    var6 = var6.bind(var7)(var2);
                    var17 = var6;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    var13 = 15;
                    var12 = null;
                    var11 = 22;
                    var10 = 3;
                    var9 = 'retryPendingPurchases';
                    if(var6) { _fun0019_ip = 268; continue _fun0019 }
case 68:
                    var6 = var16;
                    var6 = var6.value;
                    var6 = var6.purchaseResponse;
                    var18 = var6;
                    var19 = var6.productIdentifier;
                    var23 = var6.transactionIdentifier;
                    var6 = var23.toString;
                    var20 = var6.bind(var23)();
case 146: // try_start_0
                    var23 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var13];
                    var25 = var23.bind(var7)(var6);
                    var24 = var25.track;
                    var6 = _closure1_slot17;
                    var23 = var6.APPLE_RETRY_PENDING_PURCHASE_STARTED;
                    var6 = {};
                    var26 = var19;
                    var6['product_id'] = var26;
                    var26 = var20;
                    var6['transaction_id'] = var26;
                    var6 = var24.bind(var25)(var23, var6);
                    var23 = _closure1_slot28;
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
                    SaveGenerator(address=312);
case 269:
                    return var6;
case 270:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=22);
                    if(var23) { _fun0019_ip = 253; continue _fun0019 }
case 76:
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
                    SaveGenerator(address=403);
case 251:
                    return var23;
case 271:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(var24) { _fun0019_ip = 272; continue _fun0019 }
case 273:
                    var25 = _closure1_slot1;
                    var24 = _closure1_slot3;
                    var24 = var24[var13];
                    var27 = var25.bind(var7)(var24);
                    var26 = var27.track;
                    var24 = _closure1_slot17;
                    var25 = var24.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED;
                    var24 = {};
                    var28 = var19;
                    var24['product_id'] = var28;
                    var28 = var20;
                    var24['transaction_id'] = var28;
                    var24 = var26.bind(var27)(var25, var24);
case 274: // try_end0
                    _fun0019_ip = 275; continue _fun0019;
case 272:
                    return var23;
case 253:
                    return var6;
case 80: // catch_target0
                    CatchBlockStart(arg_register=23);
                    var22 = var24;
                    var23 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var13];
                    var26 = var23.bind(var7)(var6);
                    var25 = var26.track;
                    var6 = _closure1_slot17;
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
                    if(var27) { _fun0019_ip = 88; continue _fun0019 }
case 86:
                    var28 = var21;
                    var27 = var28.toString;
                    var24 = var27.bind(var28)();
case 88:
                    var6['error_code'] = var24;
                    var24 = var22;
                    var27 = var24.message;
                    var6['error_message'] = var27;
                    var6 = var25.bind(var26)(var23, var6);
                    var23 = var4;
                    var6 = var23.push;
                    var6 = var6.bind(var23)(var24);
case 275:
                    var6 = var17;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    if(!var6) { _fun0019_ip = 68; continue _fun0019 }
case 268:
                    var6 = var4;
                    var6 = var6.length;
                    if(!(!(var6 > var8))) { _fun0019_ip = 183; continue _fun0019 }
case 276:
                    var6 = true;
                    return var6;
case 183:
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
case 267:
                    var3 = true;
                    return var3;
case 265:
                    return var2;
case 264:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot45 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function _mobilePurchaseSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0020_ip = 277; continue _fun0020 }
case 168:
                    var23 = var2.requestIdentifier;
                    var12 = var2.skuId;
                    var29 = var2.currency;
                    var18 = var2.countryCode;
                    var32 = var2.analyticsLocations;
                    var33 = var2.analyticsLoadId;
                    var17 = var2.isGift;
                    var11 = var2.giftInfoOptions;
                    var6 = var2.isFreeForStaffSelfPurchase;
                    var8 = undefined;
                    if(!(var6 === var8)) { _fun0020_ip = 278; continue _fun0020 }
case 279:
                    var6 = true;
case 278:
                    var16 = var6;
                    var10 = var2.orderId;
                    var19 = arg2;
                    var25 = undefined;
                    var7 = undefined;
                    var24 = undefined;
                    var27 = undefined;
                    var30 = undefined;
                    var31 = undefined;
                    var15 = undefined;
                    var20 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=108);
case 201:
                    return var8;
case 158:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0020_ip = 280; continue _fun0020 }
case 58:
                    var3 = _closure1_slot32;
                    var3 = var3.bind(var8)();
                    if(var3) { _fun0020_ip = 15; continue _fun0020 }
case 281:
                    var3 = {};
                    var9 = false;
                    var3['success'] = var9;
                    var9 = _closure1_slot25;
                    var9 = var9.CANNOT_MAKE_REQUEST;
                    var3['failureReason'] = var9;
                    return var3;
case 15:
                    var9 = _closure1_slot41;
                    var3 = var29;
                    var3 = var9.bind(var8)(var3);
                    if(var3) { _fun0020_ip = 102; continue _fun0020 }
case 282:
                    var3 = {};
                    var9 = false;
                    var3['success'] = var9;
                    var9 = _closure1_slot25;
                    var9 = var9.INVALID_CURRENCY;
                    var3['failureReason'] = var9;
                    return var3;
case 102:
                    var13 = _closure1_slot39;
                    var21 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var36 = 42;
                    var9 = var3[var36];
                    var9 = var21.bind(var8)(var9);
                    var9 = var9.ACRequestOperations;
                    var9 = var9.CHARGE;
                    var22 = var13.bind(var8)(var9);
                    var25 = var22;
                    var9 = _closure1_slot1;
                    var13 = 23;
                    var3 = var3[var13];
                    var21 = var9.bind(var8)(var3);
                    var9 = var21.dispatch;
                    var3 = {};
                    var26 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var26;
                    var3['productIdentifier'] = var22;
                    var3 = var9.bind(var21)(var3);
                    SaveGenerator(address=291);
case 25:
                    return var3;
case 283:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0020_ip = 284; continue _fun0020 }
case 285:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var9 = 44;
                    var9 = var22[var9];
                    var22 = var21.bind(var8)(var9);
                    var21 = var22.trackPaymentFlowStartedAnalyticsAndCTP;
                    var9 = {};
                    var26 = var12;
                    var9['sku_id'] = var26;
                    var26 = var33;
                    var9['load_id'] = var26;
                    var26 = var32;
                    var9['location_stack'] = var26;
                    var26 = _closure1_slot20;
                    var26 = var26.APPLE_ADVANCED_COMMERCE;
                    var9['payment_gateway'] = var26;
                    var9 = var21.bind(var22)(var9);
                    var9 = false;
                    var7 = false;
case 181: // try_start_0
                    var26 = var29;
                    var22 = var18;
                    var21 = function retryPendingPurchases(arg1, arg2) {
                        var1 = undefined;
                        var4 = _closure1_slot45;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var21 = var21.bind(var8)(var26, var22);
                    SaveGenerator(address=399);
case 77:
                    return var21;
case 250:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(var22) { _fun0020_ip = 286; continue _fun0020 }
case 287:
                    var28 = {};
                    var22 = var12;
                    var28['sku_id'] = var22;
                    var22 = var23;
                    var28['request_identifier'] = var22;
                    var22 = var29;
                    var28['currency'] = var22;
                    var22 = var18;
                    var28['country_code'] = var22;
                    var22 = var17;
                    var28['is_gift'] = var22;
                    var22 = var11;
                    var28['gift_info_options'] = var22;
                    var22 = var10;
                    var28['order_id'] = var22;
                    var26 = _closure1_slot35;
                    var22 = {};
                    var35 = _closure1_slot0;
                    var34 = _closure1_slot3;
                    var34 = var34[var36];
                    var34 = var35.bind(var8)(var34);
                    var34 = var34.ACRequestOperations;
                    var34 = var34.CHARGE;
                    var22['operation'] = var34;
                    var40 = var22;
                    var39 = var28;
                    var28 = copyDataProperties(var40, var39);
                    var22 = var26.bind(var8)(var22);
                    SaveGenerator(address=525);
case 258:
                    return var22;
case 288:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=25);
                    if(var26) { _fun0020_ip = 289; continue _fun0020 }
case 290:
                    var39 = var22.requestJSONString;
                    var34 = _closure1_slot33;
                    var40 = var23;
                    var38 = var25;
                    var28 = true;
                    var41 = undefined;
                    var37 = true;
                    var23 = var41[var34](var40, var39, var38, var37, var36);
                    SaveGenerator(address=564);
case 126:
                    return var23;
case 291:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=25);
                    if(var26) { _fun0020_ip = 292; continue _fun0020 }
case 293:
                    var26 = var23.purchaseResponse;
                    var27 = var26;
                    var30 = var23.originalPurchase;
                    var7 = true;
                    var34 = var26.jwsRepresentation;
                    var24 = var34;
                    var26 = null;
                    if(!(var26 == var34)) { _fun0020_ip = 228; continue _fun0020 }
case 294:
                    var26 = var27;
                    var34 = var26.transactionReceipt;
                    _fun0020_ip = 226; continue _fun0020;
case 228:
                    var34 = var24;
case 226:
                    var26 = _closure1_slot1;
                    var35 = _closure1_slot3;
                    var24 = 13;
                    var24 = var35[var24];
                    var26 = var26.bind(var8)(var24);
                    var24 = var26.v3;
                    var31 = var24.bind(var26)(var34);
                    var24 = var17;
                    if(!var24) { _fun0020_ip = 295; continue _fun0020 }
case 296:
                    var26 = _closure1_slot1;
                    var24 = _closure1_slot3;
                    var24 = var24[var13];
                    var34 = var26.bind(var8)(var24);
                    var26 = var34.dispatch;
                    var24 = {};
                    var35 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var24['type'] = var35;
                    var35 = var31;
                    var24['key'] = var35;
                    var35 = {};
                    var39 = var11;
                    var40 = var35;
                    var36 = copyDataProperties(var40, var39);
                    var24['giftOptions'] = var35;
                    var24 = var26.bind(var34)(var24);
case 295:
                    var26 = _closure1_slot28;
                    var24 = {};
                    var34 = var27.transactionReceipt;
                    var24['encodedReceipt'] = var34;
                    var34 = 3;
                    var24['retries'] = var34;
                    var24['presentmentCurrency'] = var29;
                    var29 = var18;
                    var24['appStoreRegion'] = var29;
                    var29 = var11;
                    var24['giftInfoOptions'] = var29;
                    var29 = var17;
                    var24['isGift'] = var29;
                    var27 = var27.jwsRepresentation;
                    var24['jwsRepresentation'] = var27;
                    var27 = 'mobilePurchaseSKU';
                    var24['source'] = var27;
                    var27 = var10;
                    var24['orderId'] = var27;
                    var24 = var26.bind(var8)(var24);
                    SaveGenerator(address=811);
case 297:
                    return var24;
case 298:
                    ResumeGenerator(result_out_reg=23, return_bool_out_reg=25);
                    if(var26) { _fun0020_ip = 299; continue _fun0020 }
case 67:
                    var26 = var17;
                    if(!var26) { _fun0020_ip = 300; continue _fun0020 }
case 301:
                    var27 = _closure1_slot1;
                    var26 = _closure1_slot3;
                    var26 = var26[var13];
                    var29 = var27.bind(var8)(var26);
                    var27 = var29.dispatch;
                    var26 = {};
                    var34 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var26['type'] = var34;
                    var26['key'] = var31;
                    var26 = var27.bind(var29)(var26);
case 300:
                    var27 = _closure1_slot0;
                    var29 = _closure1_slot3;
                    var26 = 22;
                    var26 = var29[var26];
                    var29 = var27.bind(var8)(var26);
                    var27 = var29.finishTransaction;
                    var26 = {};
                    var26['purchase'] = var30;
                    var26 = var27.bind(var29)(var26);
                    SaveGenerator(address=911);
case 302:
                    return var26;
case 303:
                    ResumeGenerator(result_out_reg=25, return_bool_out_reg=26);
                    if(var27) { _fun0020_ip = 304; continue _fun0020 }
case 305:
                    var29 = _closure1_slot1;
                    var30 = _closure1_slot3;
                    var27 = var30[var13];
                    var34 = var29.bind(var8)(var27);
                    var31 = var34.dispatch;
                    var27 = {};
                    var35 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var27['type'] = var35;
                    var35 = var25;
                    var27['productIdentifier'] = var35;
                    var27 = var31.bind(var34)(var27);
                    var27 = 15;
                    var27 = var30[var27];
                    var31 = var29.bind(var8)(var27);
                    var30 = var31.track;
                    var27 = _closure1_slot17;
                    var29 = var27.PAYMENT_FLOW_COMPLETED;
                    var27 = {};
                    var34 = var12;
                    var27['sku_id'] = var34;
                    var27['load_id'] = var33;
                    var27['location_stack'] = var32;
                    var32 = _closure1_slot20;
                    var32 = var32.APPLE_ADVANCED_COMMERCE;
                    var27['payment_gateway'] = var32;
                    var32 = var17;
                    var27['is_gift'] = var32;
                    var27 = var30.bind(var31)(var29, var27);
                    var27 = {};
                    var27['success'] = var28;
                    var28 = _closure1_slot25;
                    var28 = var28.NONE;
                    var27['failureReason'] = var28;
case 306: // try_end0
                    return var27;
case 304:
                    return var26;
case 299:
                    return var24;
case 292:
                    return var23;
case 289:
                    return var22;
case 286:
                    return var21;
case 307: // catch_target0
                    CatchBlockStart(arg_register=21);
                    var5 = var22;
                    var21 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var13 = var23[var13];
                    var24 = var21.bind(var8)(var13);
                    var21 = var24.dispatch;
                    var13 = {};
                    var26 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var13['type'] = var26;
                    var13['productIdentifier'] = var25;
                    var13 = var21.bind(var24)(var13);
                    var21 = _closure1_slot0;
                    var13 = 36;
                    var13 = var23[var13];
                    var13 = var21.bind(var8)(var13);
                    var13 = var13.BillingError;
                    var21 = var13.prototype;
                    var21 = Object.create(var21, {constructor: {value: var13}});
                    var41 = var21;
                    var40 = var22;
                    var13 = new var41[var13](var40, var39);
                    var15 = var13 instanceof Object ? var13 : var21;
                    var21 = _closure1_slot13;
                    var13 = var21.getCurrentUser;
                    var21 = var13.bind(var21)();
                    var20 = var21;
                    var13 = null;
                    if(!(var13 != var21)) { _fun0020_ip = 308; continue _fun0020 }
case 309:
                    var21 = var20;
                    var20 = var21.isStaff;
                    var20 = var20.bind(var21)();
                    if(!var20) { _fun0020_ip = 308; continue _fun0020 }
case 310:
                    if(!var16) { _fun0020_ip = 308; continue _fun0020 }
case 311:
                    var20 = var15.code;
                    var21 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var15 = 38;
                    var16 = var16[var15];
                    var16 = var21.bind(var8)(var16);
                    var16 = var16.ErrorCodes;
                    var16 = var16.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(var20 === var16)) { _fun0020_ip = 308; continue _fun0020 }
case 312:
                    var16 = var19;
                    if(!(var13 == var16)) { _fun0020_ip = 313; continue _fun0020 }
case 314:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var16 = 45;
                    var16 = var21[var16];
                    var16 = var20.bind(var8)(var16);
                    var16 = var16.purchaseSKU;
                    _fun0020_ip = 315; continue _fun0020;
case 313:
                    var16 = var19;
case 315:
                    var14 = var16;
case 316: // try_start_1
                    var16 = var14;
                    var14 = var12;
                    var12 = {};
                    var12['countryCode'] = var18;
                    var18 = 0;
                    var12['expectedAmount'] = var18;
                    var18 = _closure1_slot18;
                    var18 = var18.USD;
                    var12['expectedCurrency'] = var18;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var18 = 46;
                    var18 = var20[var18];
                    var19 = var19.bind(var8)(var18);
                    var18 = var19.v4;
                    var18 = var18.bind(var19)();
                    var12['loadId'] = var18;
                    var12['isGift'] = var17;
                    var12['giftInfoOptions'] = var11;
                    var11 = 'collectibles';
                    var11 = var16.bind(var8)(var11, var14, var12);
                    SaveGenerator(address=1407);
case 317:
                    return var11;
case 318:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0020_ip = 319; continue _fun0020 }
case 320:
                    var12 = {};
                    var14 = true;
                    var12['success'] = var14;
                    var14 = _closure1_slot25;
                    var14 = var14.NONE;
                    var12['failureReason'] = var14;
case 321: // try_end1
                    return var12;
case 319:
                    return var11;
case 322: // catch_target1
                    CatchBlockStart(arg_register=10);
                    var4 = var11;
                    var12 = var11.code;
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var11 = var11[var15];
                    var11 = var14.bind(var8)(var11);
                    var11 = var11.ErrorCodes;
                    var11 = var11.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(var12 === var11)) { _fun0020_ip = 308; continue _fun0020 }
case 323:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var11 = 17;
                    var11 = var14[var11];
                    var14 = var12.bind(var8)(var11);
                    var12 = var14.captureBillingException;
                    var11 = var4;
                    var4 = {};
                    var4 = var12.bind(var14)(var11, var4);
case 308:
                    var12 = _closure1_slot31;
                    var11 = var5;
                    var10 = var13 == var10;
                    var4 = var10;
                    if(var10) { _fun0020_ip = 324; continue _fun0020 }
case 325:
                    var4 = var7;
case 324:
                    var10 = var4;
                    var4 = 'collectibles';
                    var4 = var12.bind(var8)(var11, var4, var10);
                    var4 = {};
                    var4['success'] = var9;
                    if(var7) { _fun0020_ip = 326; continue _fun0020 }
case 327:
                    var7 = _closure1_slot30;
                    var5 = var7.bind(var8)(var5);
                    _fun0020_ip = 328; continue _fun0020;
case 326:
                    var6 = _closure1_slot25;
                    var5 = var6.POST_PURCHASE_FAILED;
case 328:
                    var4['failureReason'] = var5;
                    return var4;
case 284:
                    return var3;
case 280:
                    return var2;
case 277:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot46 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function _migrateToACOM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 6; continue _fun0021 }
case 63:
                    var6 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot13;
                    var2 = var5.getCurrentUser;
                    var2 = var2.bind(var5)();
                    var10 = null;
                    if(!(var10 != var2)) { _fun0021_ip = 209; continue _fun0021 }
case 329:
                    var2 = _closure1_slot32;
                    var2 = var2.bind(var6)();
                    if(var2) { _fun0021_ip = 330; continue _fun0021 }
case 169:
                    var2 = false;
                    return var2;
case 330:
                    var5 = _closure1_slot14;
                    var2 = var5.getActiveGuildSubscriptions;
                    var7 = var2.bind(var5)();
                    if(!(var10 == var7)) { _fun0021_ip = 97; continue _fun0021 }
case 331:
                    var7 = new Array(0);
case 97:
                    var5 = var7.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.paymentGateway;
                        var1 = _closure1_slot20;
                        var1 = var1.APPLE_PARTNER;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var5.bind(var7)(var2);
                    var5 = global;
                    var9 = var5.Object;
                    var7 = var9.values;
                    var11 = _closure1_slot14;
                    var5 = var11.getSubscriptions;
                    var5 = var5.bind(var11)();
                    if(!(var10 == var5)) { _fun0021_ip = 332; continue _fun0021 }
case 57:
                    var5 = new Array(0);
case 332:
                    var7 = var7.bind(var9)(var5);
                    var5 = var7.filter;
                    var3 = function(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.paymentGateway;
                            var1 = _closure1_slot20;
                            var1 = var1.APPLE;
                            var1 = var4 === var1;
                            if(!var1) { _fun0022_ip = 333; continue _fun0022 }
case 334:
                            var3 = var3.type;
                            var2 = _closure1_slot16;
                            var2 = var2.PREMIUM;
                            var1 = var3 === var2;
case 333:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var7)(var3);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 47;
                    var5 = var9[var5];
                    var5 = var7.bind(var6)(var5);
                    var9 = var5.NitroACOMSubscriptionExperiment;
                    var7 = var9.getConfig;
                    var5 = {};
                    var10 = 'migrateToACOM';
                    var5['location'] = var10;
                    var5 = var7.bind(var9)(var5);
                    var7 = var5.enabled;
                    var5 = var3.length;
                    var3 = 0;
                    var5 = var5 > var3;
                    if(!var5) { _fun0021_ip = 335; continue _fun0021 }
case 70:
                    var5 = var7;
case 335:
                    var8 = var5;
                    var2 = var2.length;
                    if(!(var3 === var2)) { _fun0021_ip = 121; continue _fun0021 }
case 336:
                    var3 = var8;
                    var2 = false;
                    if(!(var2 !== var3)) { _fun0021_ip = 151; continue _fun0021 }
case 121: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 16;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.post;
                    var3 = {};
                    var4 = _closure1_slot19;
                    var4 = var4.BILLING_ACOM_SUBSCRIPTION_MIGRATION;
                    var3['url'] = var4;
                    var4 = true;
                    var3['rejectWithError'] = var4;
                    var7 = {};
                    var7['migrate_premium'] = var8;
                    var3['body'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=316);
case 337:
                    return var3;
case 338:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 339; continue _fun0021 }
case 340: // try_end0
                    return var4;
case 339:
                    return var3;
case 341: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = false;
                    return var3;
case 151:
                    return var2;
case 209:
                    var2 = false;
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot47 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot47 = var1;
    var1 = ['items', 'country_code'];
    var _closure1_slot4 = var1;
    var1 = ['subscription_items'];
    var _closure1_slot5 = var1;
    var1 = ['sku_id', 'country_code', 'is_gift', 'gift_info_options'];
    var _closure1_slot6 = var1;
    var4 = global;
    var15 = var4.Object;
    var14 = var15.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var13.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 2;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var8 = 3;
    var8 = var11[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 4;
    var8 = var11[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 5;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var9 = var8.setPaymentSuccess;
    var _closure1_slot11 = var9;
    var8 = var8.showOldPaymentFlowSuccess;
    var _closure1_slot12 = var8;
    var8 = 6;
    var8 = var11[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 7;
    var8 = var11[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 8;
    var8 = var11[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 9;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var9 = var8.SubscriptionTypes;
    var _closure1_slot16 = var9;
    var9 = var8.AnalyticEvents;
    var _closure1_slot17 = var9;
    var9 = var8.CurrencyCodes;
    var _closure1_slot18 = var9;
    var9 = var8.Endpoints;
    var _closure1_slot19 = var9;
    var9 = var8.StoreKitErrors;
    var8 = 10;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.PaymentGateways;
    var _closure1_slot20 = var8;
    var8 = 11;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot21 = var8;
    var8 = 'localAppleReceiptHash';
    var _closure1_slot22 = var8;
    var8 = 'BILLING';
    var _closure1_slot23 = var8;
    var8 = 12;
    var8 = var11[var8];
    var14 = var13.bind(var1)(var8);
    var8 = var14.prototype;
    var19 = Object.create(var8, {constructor: {value: var14}});
    var18 = 'BillingActionCreators.tsx';
    var8 = new var19[var14](var18, var17);
    var8 = {};
    var8['applyAppleReceipt'] = var12;
    var12 = 18;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.fetchMostRecentSubscription;
    var8['fetchMostRecentSubscription'] = var13;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.fetchIpCountryCode;
    var8['fetchIpCountryCode'] = var12;
    var12 = function init() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 342; continue _fun0023 }
case 53:
                    var2 = undefined;
                    var11 = undefined;
case 32: // try_start_1
                    var12 = null;
                    var11 = null;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0023_ip = 201; continue _fun0023 }
case 170: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 20;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchStoreFront;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=88);
case 9:
                    return var3;
case 266:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 36; continue _fun0023 }
case 138:
                    var11 = var3;
case 137: // try_end0
                    _fun0023_ip = 201; continue _fun0023;
case 36: // try_end1
                    return var3;
case 343: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=2);
                    var11 = null;
case 201:
                    var3 = global;
                    var6 = var3.Promise;
                    var5 = var6.all;
                    var3 = var11;
                    if(!(var12 == var3)) { _fun0023_ip = 141; continue _fun0023 }
case 41:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 21;
                    var3 = var8[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchPremiumSubscriptionPlans;
                    var4 = var3.bind(var4)();
                    _fun0023_ip = 344; continue _fun0023;
case 141:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 21;
                    var3 = var9[var3];
                    var10 = var8.bind(var2)(var3);
                    var9 = var10.fetchPremiumSubscriptionPlans;
                    var3 = var11;
                    var16 = var3.country;
                    var3 = _closure1_slot20;
                    var13 = var3.APPLE_ADVANCED_COMMERCE;
                    var17 = var10;
                    var15 = undefined;
                    var14 = undefined;
                    var4 = var17[var9](var16, var15, var14, var13, var12);
case 344:
                    var3 = new Array(3);
                    var3[0] = var4;
                    var10 = _closure2_slot0;
                    var9 = var10.loadProducts;
                    var8 = var11;
                    var12 = var12 != var8;
                    var8 = undefined;
                    if(!var12) { _fun0023_ip = 345; continue _fun0023 }
case 346:
                    var8 = var11;
case 345:
                    var8 = var9.bind(var10)(var8);
                    var3[1] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 18;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.fetchSubscriptions;
                    var7 = var7.bind(var8)();
                    var3[2] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=303);
case 347:
                    return var3;
case 348:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0023_ip = 209; continue _fun0023 }
case 349:
                    var5 = _closure2_slot0;
                    var4 = var5.restoreAndApplyPurchases;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=327);
case 339:
                    return var4;
case 71:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0023_ip = 151; continue _fun0023 }
case 350: // try_end2
                    _fun0023_ip = 6; continue _fun0023;
case 151:
                    return var4;
case 209:
                    return var3;
case 351: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
case 6:
                    return var2;
case 342:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var8['init'] = var12;
    var12 = function connectGenericIap() {
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 344; continue _fun0024 }
case 53:
                    var5 = undefined;
                    var2 = undefined;
                    var6 = _closure1_slot9;
                    var4 = var6.isGenericIapConnected;
                    var4 = var4.bind(var6)();
                    var2 = var4;
                    if(var4) { _fun0024_ip = 101; continue _fun0024 }
case 61: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 22;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.initConnection;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=74);
case 279:
                    return var4;
case 278:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0024_ip = 352; continue _fun0024 }
case 353:
                    var2 = var4;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 23;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'GENERIC_IAP_INIT_CONNECTION';
                    var6['type'] = var9;
                    var6['connected'] = var4;
                    var6 = var7.bind(var8)(var6);
case 239: // try_end0
                    return var4;
case 352:
                    return var4;
case 100: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 17;
                    var4 = var6[var4];
                    var7 = var7.bind(var5)(var4);
                    var4 = var7.captureBillingException;
                    var4 = var4.bind(var7)(var8);
                    var4 = _closure1_slot1;
                    var3 = 23;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = false;
                    return var3;
case 101:
                    return var2;
case 344:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var8['connectGenericIap'] = var12;
    var12 = function disconnectGenericIap() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 23;
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
    var8['disconnectGenericIap'] = var12;
    var12 = function loadProducts(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 354; continue _fun0025 }
case 53:
                    var2 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var9 = undefined;
case 29: // try_start_0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var7 = 23;
                    var6 = var3[var7];
                    var12 = var4.bind(var2)(var6);
                    var11 = var12.dispatch;
                    var6 = {};
                    var14 = 'IAP_LOAD_PRODUCTS_START';
                    var6['type'] = var14;
                    var6 = var11.bind(var12)(var6);
                    var12 = 20;
                    var3 = var3[var12];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.loadProducts;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=91);
case 355:
                    return var3;
case 356:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0025_ip = 184; continue _fun0025 }
case 357:
                    var13 = var3;
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var4 = 24;
                    var4 = var11[var4];
                    var11 = var6.bind(var2)(var4);
                    var6 = var11.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.GenericProductIds;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.identifier;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var6.bind(var11)(var3, var4);
                    var11 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var11)) { _fun0025_ip = 358; continue _fun0025 }
case 240:
                    var8 = _closure2_slot0;
                    _fun0025_ip = 359; continue _fun0025;
case 358:
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.fetchStoreFront;
                    var4 = var4.bind(var11)();
                    SaveGenerator(address=191);
case 113:
                    return var4;
case 146:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0025_ip = 360; continue _fun0025 }
case 102:
                    var10 = var4;
                    if(!(var6 == var4)) { _fun0025_ip = 361; continue _fun0025 }
case 362:
                    var6 = {'country': 'US', 'currency': 'usd'};
                    _fun0025_ip = 363; continue _fun0025;
case 361:
                    var6 = var10;
case 363:
                    var8 = var6;
case 359:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var6 = var12[var7];
                    var11 = var10.bind(var2)(var6);
                    var10 = var11.dispatch;
                    var6 = {};
                    var14 = 'IAP_LOAD_PRODUCTS';
                    var6['type'] = var14;
                    var6['products'] = var13;
                    var6 = var10.bind(var11)(var6);
                    var6 = var9;
                    var10 = var6.length;
                    var11 = _closure1_slot0;
                    var6 = 25;
                    var6 = var12[var6];
                    var6 = var11.bind(var2)(var6);
                    var6 = var6.GenericProductIds;
                    var6 = var6.length;
                    if(!(var10 !== var6)) { _fun0025_ip = 212; continue _fun0025 }
case 270:
                    var10 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var7];
                    var11 = var10.bind(var2)(var6);
                    var10 = var11.dispatch;
                    var6 = {};
                    var12 = 'GENERIC_IAP_SET_STORE_FRONT';
                    var6['type'] = var12;
                    var12 = var8;
                    var6['storeFront'] = var12;
                    var6 = var10.bind(var11)(var6);
                    _fun0025_ip = 252; continue _fun0025;
case 212:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var10 = 'IAP_LOAD_GENERIC_PRODUCTS';
                    var5['type'] = var10;
                    var5['products'] = var9;
                    var5['storeFront'] = var8;
                    var5 = var6.bind(var7)(var5);
case 252: // try_end0
                    _fun0025_ip = 38; continue _fun0025;
case 360:
                    return var4;
case 184:
                    return var3;
case 364: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 23;
                    var4 = var6[var4];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'IAP_LOAD_PRODUCTS_FAILED';
                    var4['type'] = var9;
                    var4 = var7.bind(var8)(var4);
                    var4 = _closure1_slot0;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureBillingException;
                    var3 = var3.bind(var4)(var5);
case 38:
                    return var2;
case 354:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var8['loadProducts'] = var12;
    var12 = function createSubscription(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0026_ip = 365; continue _fun0026 }
case 63:
                    var2 = undefined;
                    var12 = undefined;
                    var17 = undefined;
                    var23 = undefined;
                    var19 = undefined;
                    var26 = undefined;
                    var32 = undefined;
                    var15 = undefined;
                    var8 = undefined;
                    var21 = undefined;
                    var14 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var20 = undefined;
                    var30 = undefined;
                    var22 = undefined;
                    var24 = undefined;
                    var29 = undefined;
                    var27 = undefined;
                    var28 = undefined;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot0;
                    var12 = var3.productId;
                    var17 = var3.isGift;
                    var23 = var3.giftInfoOptions;
                    var19 = var3.baseAnalyticsData;
                    var26 = var3.applicationId;
                    var32 = var3.offerId;
                    var15 = var3.onPurchaseComplete;
                    var8 = var3.onPurchaseError;
                    var21 = var3.orderId;
                    var4 = _closure1_slot15;
                    var3 = var4.isBusy;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0026_ip = 366; continue _fun0026 }
case 367:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 26;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getIsPaymentsBlocked;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    if(var3) { _fun0026_ip = 368; continue _fun0026 }
case 369:
                    var11 = 23;
                    var3 = var5[var11];
                    var18 = var4.bind(var2)(var3);
                    var9 = var18.dispatch;
                    var3 = {};
                    var25 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var25;
                    var25 = var12;
                    var3['productIdentifier'] = var25;
                    var3 = var9.bind(var18)(var3);
                    SaveGenerator(address=231);
case 359:
                    return var3;
case 370:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0026_ip = 308; continue _fun0026 }
case 371: // try_start_1
                    var18 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var31 = 20;
                    var9 = var9[var31];
                    var18 = var18.bind(var2)(var9);
                    var9 = var18.canMakePayments;
                    var9 = var9.bind(var18)();
                    SaveGenerator(address=274);
case 372:
                    return var9;
case 52:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=17);
                    if(var18) { _fun0026_ip = 373; continue _fun0026 }
case 10:
                    var25 = _closure1_slot14;
                    var18 = var25.hasFetchedSubscriptions;
                    var18 = var18.bind(var25)();
                    if(var18) { _fun0026_ip = 374; continue _fun0026 }
case 348:
                    var25 = _closure1_slot0;
                    var33 = _closure1_slot3;
                    var18 = 18;
                    var18 = var33[var18];
                    var25 = var25.bind(var2)(var18);
                    var18 = var25.fetchSubscriptions;
                    var18 = var18.bind(var25)();
                    SaveGenerator(address=337);
case 151:
                    return var18;
case 375:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=24);
                    if(var25) { _fun0026_ip = 376; continue _fun0026 }
case 6:
                    var25 = global;
                    var34 = var25.Error;
                    var36 = _closure1_slot0;
                    var37 = _closure1_slot3;
                    var25 = 28;
                    var33 = var37[var25];
                    var33 = var36.bind(var2)(var33);
                    var35 = var33.intl;
                    var33 = var35.string;
                    var25 = var37[var25];
                    var25 = var36.bind(var2)(var25);
                    var25 = var25.t;
                    var25 = var25.PjfUXe;
                    var40 = var33.bind(var35)(var25);
                    var33 = var34.prototype;
                    var33 = Object.create(var33, {constructor: {value: var34}});
                    var41 = var33;
                    var25 = new var41[var34](var40, var39);
                    var25 = var25 instanceof Object ? var25 : var33;
                    throw var25;
case 376: // try_end1
                    return var18;
case 374: // try_start_2
                    var25 = _closure1_slot13;
                    var18 = var25.getCurrentUser;
                    var25 = var18.bind(var25)();
                    var10 = var25;
                    var18 = null;
                    if(!(var18 != var25)) { _fun0026_ip = 377; continue _fun0026 }
case 378:
                    var33 = _closure1_slot0;
                    var25 = _closure1_slot3;
                    var25 = var25[var31];
                    var33 = var33.bind(var2)(var25);
                    var25 = var33.convertToUUID;
                    var10 = var10.id;
                    var13 = var25.bind(var33)(var10);
                    var20 = undefined;
                    var10 = var32;
                    if(!(var18 != var10)) { _fun0026_ip = 379; continue _fun0026 }
case 185:
                    var34 = var12;
                    var33 = var32;
                    var25 = var13;
                    var10 = function getTrialOfferSignature() {
                        var1 = undefined;
                        var4 = _closure1_slot29;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var10 = var10.bind(var2)(var34, var33, var25);
                    SaveGenerator(address=523);
case 257:
                    return var10;
case 258:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=24);
                    if(var25) { _fun0026_ip = 380; continue _fun0026 }
case 381:
                    var30 = var10;
                    if(!(var18 != var10)) { _fun0026_ip = 379; continue _fun0026 }
case 224:
                    var25 = {};
                    var25['identifier'] = var32;
                    var32 = var30.key_id;
                    var25['keyIdentifier'] = var32;
                    var32 = var30.nonce;
                    var25['nonce'] = var32;
                    var32 = var30.signature;
                    var25['signature'] = var32;
                    var32 = global;
                    var32 = var32.Number;
                    var30 = var30.timestamp;
                    var30 = var32.bind(var2)(var30);
                    var25['timestamp'] = var30;
                    var20 = var25;
case 379:
                    var30 = _closure1_slot1;
                    var25 = _closure1_slot3;
                    var25 = var25[var31];
                    var31 = var30.bind(var2)(var25);
                    var30 = var31.purchaseProduct;
                    var25 = var12;
                    var13 = var30.bind(var31)(var25, var20, var13);
                    SaveGenerator(address=645);
case 382:
                    return var13;
case 383:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=19);
                    if(var20) { _fun0026_ip = 384; continue _fun0026 }
case 385:
                    var22 = var13;
                    var20 = var13.jwsRepresentation;
                    var14 = var20;
                    if(!(var18 == var20)) { _fun0026_ip = 386; continue _fun0026 }
case 387:
                    var20 = var22;
                    var31 = var20.transactionReceipt;
                    _fun0026_ip = 388; continue _fun0026;
case 386:
                    var31 = var14;
case 388:
                    var20 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var25 = 13;
                    var25 = var14[var25];
                    var30 = var20.bind(var2)(var25);
                    var25 = var30.v3;
                    var30 = var25.bind(var30)(var31);
                    var24 = var30;
                    var14 = var14[var11];
                    var25 = var20.bind(var2)(var14);
                    var20 = var25.dispatch;
                    var14 = {};
                    var31 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var14['type'] = var31;
                    var14['key'] = var30;
                    var30 = {};
                    var39 = var23;
                    var40 = var30;
                    var31 = copyDataProperties(var40, var39);
                    var14['giftOptions'] = var30;
                    var14 = var20.bind(var25)(var14);
                    var14 = var15;
                    var20 = var18 == var14;
                    var14 = undefined;
                    if(var20) { _fun0026_ip = 389; continue _fun0026 }
case 390:
                    var14 = var15.bind(var2)();
case 389:
                    SaveGenerator(address=790);
case 391:
                    return var14;
case 392:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0026_ip = 393; continue _fun0026 }
case 394:
                    var25 = _closure1_slot15;
                    var20 = var25.getProduct;
                    var15 = var12;
                    var15 = var20.bind(var25)(var15);
                    var29 = var15;
                    var20 = var18 == var15;
                    var15 = undefined;
                    if(var20) { _fun0026_ip = 395; continue _fun0026 }
case 396:
                    var20 = var29;
                    var15 = var20.price;
case 395:
                    var27 = var15;
                    var15 = var29;
                    var15 = var18 == var15;
                    var25 = undefined;
                    if(var15) { _fun0026_ip = 397; continue _fun0026 }
case 398:
                    var15 = var29;
                    var25 = var15.currencyCode;
case 397:
                    var28 = var25;
                    var20 = _closure1_slot28;
                    var15 = {};
                    var30 = var22;
                    var30 = var30.transactionReceipt;
                    var15['encodedReceipt'] = var30;
                    var30 = 3;
                    var15['retries'] = var30;
                    var15['presentmentCurrency'] = var25;
                    var25 = var27;
                    var15['presentmentAmount'] = var25;
                    var25 = var29;
                    var30 = var18 == var25;
                    var25 = undefined;
                    if(var30) { _fun0026_ip = 399; continue _fun0026 }
case 400:
                    var25 = var29.countryCode;
case 399:
                    var15['appStoreRegion'] = var25;
                    var15['giftInfoOptions'] = var23;
                    var22 = var22.jwsRepresentation;
                    var15['jwsRepresentation'] = var22;
                    var22 = 'createSubscription';
                    var15['source'] = var22;
                    var15['orderId'] = var21;
                    var15 = var20.bind(var2)(var15);
                    SaveGenerator(address=967);
case 401:
                    return var15;
case 402:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0026_ip = 403; continue _fun0026 }
case 404:
                    var20 = _closure1_slot11;
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
                    var20 = _closure1_slot17;
                    var20 = var20.PAYMENT_FLOW_COMPLETED;
                    var24 = _closure1_slot0;
                    var23 = 29;
                    var23 = var25[var23];
                    var25 = var24.bind(var2)(var23);
                    var24 = var25.getPaymentFlowCompletedAnalyticsFields;
                    var23 = var19;
                    var19 = {};
                    var29 = var12;
                    var19['subscription_plan_gateway_plan_id'] = var29;
                    var19['price'] = var27;
                    var19['regular_price'] = var27;
                    var27 = var28;
                    var29 = var18 == var27;
                    var27 = undefined;
                    if(var29) { _fun0026_ip = 405; continue _fun0026 }
case 406:
                    var29 = var28;
                    var28 = var29.toLowerCase;
                    var27 = var28.bind(var29)();
case 405:
                    var19['currency'] = var27;
                    var19['application_id'] = var26;
                    var19 = var24.bind(var25)(var23, var19);
                    var19 = var21.bind(var22)(var20, var19);
                    var20 = _closure1_slot1;
                    var19 = _closure1_slot3;
                    var19 = var19[var11];
                    var21 = var20.bind(var2)(var19);
                    var20 = var21.dispatch;
                    var19 = {};
                    var22 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var19['type'] = var22;
                    var22 = var12;
                    var19['productIdentifier'] = var22;
                    var19 = var20.bind(var21)(var19);
                    if(var17) { _fun0026_ip = 407; continue _fun0026 }
case 408: // try_start_0
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var17 = 18;
                    var17 = var20[var17];
                    var19 = var19.bind(var2)(var17);
                    var17 = var19.fetchSubscriptions;
                    var17 = var17.bind(var19)();
                    SaveGenerator(address=1233);
case 409:
                    return var17;
case 410:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=18);
                    if(var19) { _fun0026_ip = 411; continue _fun0026 }
case 412: // try_end0
                    _fun0026_ip = 413; continue _fun0026;
case 411: // try_end2
                    return var17;
case 414: // try_start_3 // catch_target0
                    CatchBlockStart(arg_register=20);
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var17 = 17;
                    var17 = var20[var17];
                    var20 = var19.bind(var2)(var17);
                    var19 = var20.captureBillingException;
                    var17 = {};
                    var22 = {};
                    var23 = 'createSubscriptionFetchSubscriptions';
                    var22['source'] = var23;
                    var17['tags'] = var22;
                    var17 = var19.bind(var20)(var21, var17);
case 413:
                    var19 = _closure1_slot14;
                    var17 = var19.getPremiumTypeSubscription;
                    var17 = var17.bind(var19)();
                    _closure4_slot0 = var17;
                    if(!(var18 != var17)) { _fun0026_ip = 407; continue _fun0026 }
case 415:
                    var17 = _closure1_slot12;
                    var16 = function() {
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
                                    var5 = arg1;
                                    var _closure8_slot0 = var5;
                                    var4 = _closure1_slot21;
                                    var3 = _closure7_slot0;
                                    var2 = {};
                                    var8 = var2;
                                    var7 = var5;
                                    var5 = copyDataProperties(var8, var7);
                                    var6 = _closure4_slot0;
                                    var5 = 'subscription';
                                    var2[4] = var6;
                                    var5 = function onClose() {
                                        var2 = _closure8_slot0;
                                        var1 = var2.onClose;
                                        var1 = var1.bind(var2)();
                                        var4 = _closure1_slot1;
                                        var6 = _closure1_slot3;
                                        var1 = 33;
                                        var3 = var6[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.popWithKey;
                                        var5 = _closure1_slot0;
                                        var2 = 34;
                                        var2 = var6[var2];
                                        var2 = var5.bind(var1)(var2);
                                        var2 = var2.PREMIUM_KEY;
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    };
                                    var1 = 'onClose';
                                    var2[0] = var5;
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
                    var16 = var17.bind(var2)(var16);
case 407: // try_end3
                    _fun0026_ip = 366; continue _fun0026;
case 403:
                    return var15;
case 393:
                    return var14;
case 384:
                    return var13;
case 380:
                    return var10;
case 377: // try_start_4
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
                    var40 = var13.bind(var15)(var10);
                    var13 = var14.prototype;
                    var13 = Object.create(var13, {constructor: {value: var14}});
                    var41 = var13;
                    var10 = new var41[var14](var40, var39);
                    var10 = var10 instanceof Object ? var10 : var13;
                    throw var10;
case 373: // try_end4
                    return var9;
case 416: // catch_target1 // catch_target2 // catch_target3 // catch_target4
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
                    if(!(var9 != var10)) { _fun0026_ip = 417; continue _fun0026 }
case 418:
                    var9 = var8;
                    var8 = var6;
                    var8 = var9.bind(var2)(var8);
case 417:
                    var8 = _closure1_slot31;
                    var7 = var6;
                    var6 = 'subscription';
                    var6 = var8.bind(var2)(var7, var6);
                    _fun0026_ip = 366; continue _fun0026;
case 308:
                    return var3;
case 368:
                    var3 = 27;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.bind(var2)();
case 366:
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
    var8['createSubscription'] = var12;
    var12 = function restoreAndApplyPurchases() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0027_ip = 168; continue _fun0027 }
case 419:
            var3 = false;
case 168:
            var _closure2_slot0 = var3;
            var3 = this;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot8;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0028_ip = 420; continue _fun0028 }
case 63:
                        var5 = undefined;
                        var7 = undefined;
                        var17 = undefined;
                        var11 = undefined;
                        var _closure4_slot0 = var5;
                        var10 = undefined;
                        var _closure4_slot1 = var5;
                        var18 = undefined;
                        var19 = undefined;
                        var4 = _closure1_slot15;
                        var2 = var4.isBusy;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0028_ip = 421; continue _fun0028 }
case 330:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var6 = 23;
                        var2 = var2[var6];
                        var8 = var4.bind(var5)(var2);
                        var4 = var8.dispatch;
                        var2 = {};
                        var12 = 'IAP_RESTORE_PURCHASES_START';
                        var2['type'] = var12;
                        var2 = var4.bind(var8)(var2);
case 36: // try_start_2 // try_start_5
                        var4 = _closure2_slot1;
                        var2 = var4.loadProducts;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=120);
case 422:
                        return var2;
case 423:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0028_ip = 424; continue _fun0028 }
case 332:
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var4 = 20;
                        var4 = var12[var4];
                        var12 = var8.bind(var5)(var4);
                        var8 = var12.restorePurchases;
                        var4 = {};
                        var13 = _closure2_slot0;
                        var4['fullRestore'] = var13;
                        var4 = var8.bind(var12)(var4);
                        SaveGenerator(address=175);
case 282:
                        return var4;
case 425:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(var8) { _fun0028_ip = 426; continue _fun0028 }
case 427:
                        var7 = var4;
                        var8 = var4.length;
                        var13 = 0;
                        if(!(var13 !== var8)) { _fun0028_ip = 428; continue _fun0028 }
case 205:
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var8 = 24;
                        var8 = var14[var8];
                        var8 = var12.bind(var5)(var8);
                        var12 = var8.bind(var5)(var7);
                        var8 = var12.uniqBy;
                        var7 = function(arg1) {
                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.purchaseResponse;
                                var1 = var1.jwsRepresentation;
                                var3 = null;
                                if(!(var3 == var1)) { _fun0029_ip = 33; continue _fun0029 }
case 429:
                                var2 = var2.purchaseResponse;
                                var1 = var2.originalTransactionIdentifier;
case 33:
                                return var1;
                            }
                        };
                        var8 = var8.bind(var12)(var7);
                        var7 = var8.value;
                        var8 = var7.bind(var8)();
                        var7 = new Array(0);
                        var11 = var7;
                        _closure4_slot0 = var7;
                        var7 = new Array(0);
                        var10 = var7;
                        _closure4_slot1 = var7;
                        var18 = function* _loop(arg1) {
                            var1 = function* anon_0__loop(arg1) {
                                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                                    StartGenerator();
                                    var5 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0030_ip = 430; continue _fun0030 }
case 114:
                                    var _closure6_slot0 = var5;
                                    var2 = undefined;
                                    var4 = undefined;
                                    var _closure6_slot1 = var2;
                                    var9 = undefined;
                                    var _closure6_slot2 = var2;
                                    var10 = undefined;
                                    var5 = var5.purchaseResponse;
                                    var4 = var5;
                                    _closure6_slot1 = var5;
                                    var11 = _closure1_slot15;
                                    var8 = var11.getProduct;
                                    var7 = var5.productIdentifier;
                                    var9 = var8.bind(var11)(var7);
                                    var11 = var5.jwsRepresentation;
                                    var5 = null;
                                    if(!(var5 == var11)) { _fun0030_ip = 431; continue _fun0030 }
case 156:
                                    var7 = var4;
                                    var11 = var7.transactionReceipt;
case 431:
                                    var8 = _closure1_slot1;
                                    var12 = _closure1_slot3;
                                    var7 = 13;
                                    var7 = var12[var7];
                                    var8 = var8.bind(var2)(var7);
                                    var7 = var8.v3;
                                    var11 = var7.bind(var8)(var11);
                                    _closure6_slot2 = var11;
                                    var8 = _closure1_slot10;
                                    var7 = var8.getGiftOptionsForKey;
                                    var10 = var7.bind(var8)(var11);
case 432: // try_start_0
                                    var7 = _closure1_slot28;
                                    var6 = {};
                                    var8 = var4;
                                    var11 = var8.jwsRepresentation;
                                    var6['jwsRepresentation'] = var11;
                                    var8 = var8.transactionReceipt;
                                    var6['encodedReceipt'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0030_ip = 20; continue _fun0030 }
case 131:
                                    var11 = var9;
                                    var8 = var11.currencyCode;
case 20:
                                    var6['presentmentCurrency'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0030_ip = 433; continue _fun0030 }
case 101:
                                    var11 = var9;
                                    var8 = var11.price;
case 433:
                                    var6['presentmentAmount'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0030_ip = 434; continue _fun0030 }
case 435:
                                    var8 = var9.countryCode;
case 434:
                                    var6['appStoreRegion'] = var8;
                                    var8 = {};
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0030_ip = 372; continue _fun0030 }
case 436:
                                    var11 = var10;
                                    var9 = var11.gift_style;
case 372:
                                    var8['gift_style'] = var9;
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0030_ip = 437; continue _fun0030 }
case 25:
                                    var9 = var10.reward_sku_ids;
case 437:
                                    var8['reward_sku_ids'] = var9;
                                    var6['giftInfoOptions'] = var8;
                                    var8 = 'restoreSubscription';
                                    var6['source'] = var8;
                                    var8 = _closure2_slot0;
                                    var6['skipDupCheck'] = var8;
                                    var7 = var7.bind(var2)(var6);
                                    var6 = var7.then;
                                    var3 = function(arg1) {
                                        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                                            var3 = arg1;
                                            var2 = _closure1_slot0;
                                            var5 = _closure1_slot3;
                                            var1 = 22;
                                            var1 = var5[var1];
                                            var6 = undefined;
                                            var7 = var2.bind(var6)(var1);
                                            var5 = var7.finishTransaction;
                                            var1 = {};
                                            var8 = {};
                                            var9 = _closure6_slot1;
                                            var9 = var9.productIdentifier;
                                            var8['productId'] = var9;
                                            var9 = _closure6_slot1;
                                            var9 = var9.transactionDate;
                                            var8['transactionDate'] = var9;
                                            var9 = _closure6_slot1;
                                            var9 = var9.transactionReceipt;
                                            var8['transactionReceipt'] = var9;
                                            var9 = _closure6_slot1;
                                            var10 = var9.transactionIdentifier;
                                            var9 = var10.toString;
                                            var9 = var9.bind(var10)();
                                            var8['transactionId'] = var9;
                                            var1['purchase'] = var8;
                                            var1 = var5.bind(var7)(var1);
                                            var1 = null;
                                            if(!(var1 != var3)) { _fun0031_ip = 438; continue _fun0031 }
case 439:
                                            var5 = _closure1_slot1;
                                            var7 = _closure1_slot3;
                                            var4 = 23;
                                            var4 = var7[var4];
                                            var6 = var5.bind(var6)(var4);
                                            var5 = var6.dispatch;
                                            var4 = {};
                                            var7 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                            var4['type'] = var7;
                                            var7 = _closure6_slot2;
                                            var4['key'] = var7;
                                            var4 = var5.bind(var6)(var4);
case 438:
                                            var3 = var1 != var3;
                                            var1 = null;
                                            if(!var3) { _fun0031_ip = 113; continue _fun0031 }
case 369:
                                            var1 = _closure6_slot0;
case 113:
                                            return var1;
                                        }
                                    };
                                    var3 = var6.bind(var7)(var3);
                                    SaveGenerator(address=351);
case 440:
                                    return var3;
case 441:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0030_ip = 442; continue _fun0030 }
case 79:
                                    if(!(var5 != var3)) { _fun0030_ip = 443; continue _fun0030 }
case 212:
                                    var6 = _closure4_slot0;
                                    var5 = var6.push;
                                    var4 = var5.bind(var6)(var4);
case 443: // try_end0
                                    _fun0030_ip = 444; continue _fun0030;
case 442:
                                    return var3;
case 216: // catch_target0
                                    CatchBlockStart(arg_register=4);
                                    var4 = _closure4_slot1;
                                    var3 = var4.push;
                                    var3 = var3.bind(var4)(var5);
case 444:
                                    return var2;
case 430:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var7 = _closure1_slot26;
                        var7 = var7.bind(var5)(var8);
                        var19 = var7;
                        var7 = var7.bind(var5)();
                        var17 = var7;
                        var7 = var7.done;
                        var8 = global;
                        var16 = 'iterator is not an object';
                        var15 = 'iterator.throw() did not return an object';
                        var14 = 'throw';
                        var12 = 'iterator.next() did not return an object';
                        if(var7) { _fun0028_ip = 194; continue _fun0028 }
case 445:
                        var7 = var17;
                        var20 = var7.value;
                        var7 = var18;
                        var20 = var7.bind(var5)(var20);
                        var7 = var8.Symbol;
                        var7 = var7.iterator;
                        var7 = var20[var7];
                        var21 = var7.bind(var20)();
                        var29 = var21;
                        var28 = var16;
                        var7 = ensureObject(var29, var28);
                        var26 = var21.next;
                        var25 = undefined;
case 446:
                        var20 = var25;
                        var20 = var26.bind(var21)(var20);
                        var29 = var20;
                        var28 = var12;
                        var22 = ensureObject(var29, var28);
                        var7 = var20;
                        var22 = var20.done;
                        if(var22) { _fun0028_ip = 447; continue _fun0028 }
case 448: // try_start_0
                        var22 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 449:
                        return var20;
case 450: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=21);
                        var29 = var21;
                        var28 = var14;
                        var20 = getMethod(var29, var28);
                        if(!(var20 !== var5)) { _fun0028_ip = 451; continue _fun0028 }
case 452:
                        var20 = var20.bind(var21)(var22);
                        var29 = var20;
                        var28 = var15;
                        var22 = ensureObject(var29, var28);
                        var22 = var20.done;
                        if(var22) { _fun0028_ip = 453; continue _fun0028 }
case 272:
                        var22 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 80:
                        return var20;
case 454: // try_start_1
                        ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                        var25 = var22;
                        var23 = var24;
                        if(!var23) { _fun0028_ip = 446; continue _fun0028 }
case 46:
                        var25 = var22;
case 455: // try_end1
                        var28 = 'return';
                        var29 = var21;
                        var27 = getMethod(var29, var28);
                        if(!(var27 !== var5)) { _fun0028_ip = 456; continue _fun0028 }
case 457:
                        var23 = var25;
                        var23 = var27.bind(var21)(var23);
                        var28 = 'iterator.return() did not return an object';
                        var29 = var23;
                        var27 = ensureObject(var29, var28);
                        var27 = var23.done;
                        if(var27) { _fun0028_ip = 458; continue _fun0028 }
case 459:
                        var27 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 460:
                        return var23;
case 458:
                        var23 = var23.value;
case 461: // try_end2 // try_end5
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
case 456:
                        var24 = _closure1_slot1;
                        var23 = _closure1_slot3;
                        var23 = var23[var6];
                        var25 = var24.bind(var5)(var23);
                        var24 = var25.dispatch;
                        var23 = {};
                        var26 = 'IAP_RESTORE_PURCHASES_END';
                        var23['type'] = var26;
                        var23 = var24.bind(var25)(var23);
                        return var22;
case 453: // try_start_3 // try_start_6
                        var7 = var20;
                        _fun0028_ip = 447; continue _fun0028;
case 451:
                        var28 = 'return';
                        var29 = var21;
                        var20 = getMethod(var29, var28);
                        if(!(var20 !== var5)) { _fun0028_ip = 462; continue _fun0028 }
case 385:
                        var29 = var20.bind(var21)();
                        var28 = 'iterator.return() did not return an object';
                        var20 = ensureObject(var29, var28);
case 462:
                        var29 = 'yield* delegate must have a .throw() method';
                        var20 = throwTypeError(var29);
                        throw var5;
case 447:
                        var7 = var7.value;
                        var7 = var19;
                        var7 = var7.bind(var5)();
                        var17 = var7;
                        var7 = var7.done;
                        if(!var7) { _fun0028_ip = 445; continue _fun0028 }
case 194:
                        var7 = var11;
                        var7 = var7.length;
                        if(!(var7 > var13)) { _fun0028_ip = 463; continue _fun0028 }
case 464:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var7 = 18;
                        var7 = var14[var7];
                        var12 = var12.bind(var5)(var7);
                        var7 = var12.fetchSubscriptions;
                        var7 = var7.bind(var12)();
                        SaveGenerator(address=752);
case 465:
                        return var7;
case 466:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                        if(var12) { _fun0028_ip = 467; continue _fun0028 }
case 463:
                        var12 = var10;
                        var12 = var12.length;
                        if(!(!(var12 > var13))) { _fun0028_ip = 468; continue _fun0028 }
case 469: // try_end3 // try_end6
                        var13 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var12 = var12[var6];
                        var14 = var13.bind(var5)(var12);
                        var13 = var14.dispatch;
                        var12 = {};
                        var15 = 'IAP_RESTORE_PURCHASES_END';
                        var12['type'] = var15;
                        var12 = var13.bind(var14)(var12);
                        return var11;
case 468: // try_start_4 // try_start_7
                        var11 = var10;
                        var10 = var11.forEach;
                        var9 = function(arg1) {
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
                        var9 = var10.bind(var11)(var9);
                        var10 = var8.Error;
                        var8 = var10.prototype;
                        var9 = Object.create(var8, {constructor: {value: var10}});
                        var29 = 'There were some errors while trying to restore';
                        var30 = var9;
                        var8 = new var30[var10](var29, var28);
                        var8 = var8 instanceof Object ? var8 : var9;
                        throw var8;
case 467: // try_end4 // try_end7
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
case 428:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var6];
                        var9 = var8.bind(var5)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'IAP_RESTORE_PURCHASES_END';
                        var7['type'] = var10;
                        var7 = var8.bind(var9)(var7);
                        var7 = new Array(0);
                        return var7;
case 426:
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
case 424:
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
case 470: // try_start_8 // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=1);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.captureBillingException;
                        var4 = var4.bind(var7)(var2);
                        throw var2;
case 299: // try_end8 // catch_target5 // catch_target6 // catch_target7 // catch_target8
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
case 421:
                        var2 = new Array(0);
                        return var2;
case 420:
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
    var8['restoreAndApplyPurchases'] = var12;
    var12 = var4.Set;
    var4 = 22;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var4.ErrorCode;
    var13 = var4.E_USER_CANCELLED;
    var4 = new Array(2);
    var4[0] = var13;
    var9 = var9.PAYMENT_CANCELED;
    var4[1] = var9;
    var9 = var12.prototype;
    var9 = Object.create(var9, {constructor: {value: var12}});
    var19 = var9;
    var18 = var4;
    var4 = new var19[var12](var18, var17);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot24 = var4;
    var4 = {};
    var9 = 'none';
    var4['NONE'] = var9;
    var9 = 'cannot_make_request';
    var4['CANNOT_MAKE_REQUEST'] = var9;
    var9 = 'invalid_currency';
    var4['INVALID_CURRENCY'] = var9;
    var9 = 'purchase_incomplete';
    var4['PURCHASE_INCOMPLETE'] = var9;
    var9 = 'user_cancelled';
    var4['USER_CANCELLED'] = var9;
    var9 = 'post_purchase_failed';
    var4['POST_PURCHASE_FAILED'] = var9;
    var _closure1_slot25 = var4;
    var9 = 48;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'actions/native/BillingActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['getIAPJWTRequestData'] = var7;
    var3['updateAppleSubscription'] = var6;
    var6 = function cancelGenericSubscription(arg1, arg2, arg3) {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelGenericSubscription'] = var6;
    var3['isValidCurrency'] = var5;
    var3['SubscriptionPurchaseFailureReason'] = var4;
    var4 = function createGenericSubscription(arg1) {
        var1 = undefined;
        var4 = _closure1_slot42;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGenericSubscription'] = var4;
    var4 = function modifyGenericSubscription(arg1) {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['modifyGenericSubscription'] = var4;
    var4 = function resubscribeGenericSubscription(arg1, arg2) {
        var1 = undefined;
        var4 = _closure1_slot44;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resubscribeGenericSubscription'] = var4;
    var4 = function mobilePurchaseSKU(arg1, arg2) {
        var1 = undefined;
        var4 = _closure1_slot46;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['mobilePurchaseSKU'] = var4;
    var2 = function migrateToACOM() {
        var1 = undefined;
        var4 = _closure1_slot47;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['migrateToACOM'] = var2;
    return var1;
})();