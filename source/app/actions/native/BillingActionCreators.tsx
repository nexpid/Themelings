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
            var1 = _closure1_slot21;
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
            var3 = _closure1_slot16;
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
            var8 = _closure1_slot18;
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
                var2 = _closure1_slot21;
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
                var6 = _closure1_slot22;
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
    var _closure1_slot26 = var12;
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
                    var5 = _closure1_slot18;
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
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function handlePurchaseException(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot23;
            var3 = var4.has;
            var2 = var1.code;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var2 = var1.message;
            var3 = global;
            var4 = var3.JSON;
            var2 = var4.stringify;
            var2 = var2.bind(var4)(var1);
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var2 = 34;
            var2 = var5[var2];
            var10 = undefined;
            var4 = var4.bind(var10)(var2);
            var2 = var4.getUnderlyingIOSError;
            var5 = var2.bind(var4)(var1);
            var8 = null;
            if(!(var8 == var5)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var9 = _closure1_slot0;
            var2 = _closure1_slot3;
            var11 = 27;
            var4 = var2[var11];
            var4 = var9.bind(var10)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var2 = var2[var11];
            var2 = var9.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.PjfUXe;
            var2 = var4.bind(var7)(var2);
            var7 = var1.name;
            var4 = 'HTTPResponseError';
            var12 = var2;
            if(!(var4 !== var7)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var4 = 'status';
            var4 = var4 in var1;
            if(!var4) { _fun0006_ip = 67; continue _fun0006 }
case 16:
            var4 = 'method';
            var4 = var4 in var1;
            var12 = var2;
            if(var4) { _fun0006_ip = 65; continue _fun0006 }
case 67:
            var4 = var1.message;
            if(var4) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var4 = var2;
case 68:
            var12 = var4;
case 65:
            var7 = var1.body;
            var4 = var12;
            if(!(var8 != var7)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var7 = var1.body;
            var9 = var7.apple_error_code;
            var4 = var12;
            if(!(var8 != var9)) { _fun0006_ip = 70; continue _fun0006 }
case 72:
            var15 = var7.apple_error_code;
            var3 = var3.HermesInternal;
            var12 = var3.concat;
            var18 = '';
            var16 = ' (code: ';
            var14 = ')';
            var17 = var2;
            var4 = var18[var12](var17, var16, var15, var14, var13);
case 70:
            var9 = var4;
            if(!(var9 === var2)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var12 = 35;
            var2 = var2[var12];
            var2 = var3.bind(var10)(var2);
            var2 = var2.BillingError;
            var3 = var1 instanceof var2;
            var2 = var1;
            if(var3) { _fun0006_ip = 75; continue _fun0006 }
case 8:
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var12];
            var3 = var7.bind(var10)(var3);
            var3 = var3.BillingError;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var18 = var7;
            var17 = var1;
            var3 = new var18[var3](var17, var16);
            var2 = var3 instanceof Object ? var3 : var7;
case 75:
            var7 = var2.code;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var3 = 36;
            var3 = var13[var3];
            var3 = var12.bind(var10)(var3);
            var3 = var3.ErrorCodes;
            var3 = var3.UNKNOWN;
            var3 = var7 !== var3;
            if(!var3) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var12 = var2.code;
            var7 = -1;
            var3 = var7 !== var12;
case 76:
            if(!var3) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var7 = var2.message;
            var3 = var8 != var7;
case 78:
            var9 = var4;
            if(!var3) { _fun0006_ip = 73; continue _fun0006 }
case 80:
            var9 = var2.message;
case 73:
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
            var8 = _closure1_slot22;
            var7['source'] = var8;
            var8 = arg2;
            var7['purchase_type'] = var8;
            var2['tags'] = var7;
            var2 = var3.bind(var4)(var1, var2);
            throw var1;
case 63:
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
            var6 = var6.POsVOt;
            var6 = var7.bind(var8)(var6);
            var2['title'] = var6;
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
            throw var1;
case 61:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function canMakeIAPRequest() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot15;
            var1 = var2.isBusy;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(!var1) { _fun0007_ip = 81; continue _fun0007 }
case 31:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 25;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.getIsPaymentsBlocked;
            var2 = var2.bind(var5)();
            var2 = !var2;
            if(var2) { _fun0007_ip = 82; continue _fun0007 }
case 7:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 26;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var2 = false;
case 82:
            var1 = var2;
case 81:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function clearAndMakeIAPRequest(arg1, arg2, arg3, arg4) {
        var1 = undefined;
        var4 = _closure1_slot31;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _clearAndMakeIAPRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 83; continue _fun0008 }
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
case 84: // try_start_0 // try_start_1
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var3 = 20;
                    var3 = var21[var3];
                    var20 = var20.bind(var6)(var3);
                    var3 = var20.clearTransactionIOS;
                    var3 = var3.bind(var20)();
                    SaveGenerator(address=81);
case 85:
                    return var3;
case 86:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=19);
                    if(var20) { _fun0008_ip = 87; continue _fun0008 }
case 81:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 22;
                    var20 = var22[var20];
                    var21 = var21.bind(var6)(var20);
                    var20 = var21.makeIAPRequest;
                    var11 = var20.bind(var21)(var16, var13, var11);
                    SaveGenerator(address=127);
case 57:
                    return var11;
case 41:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0008_ip = 88; continue _fun0008 }
case 89:
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
                    if(var20) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var20 = var19;
                    var19 = var20.toString;
                    var16 = var19.bind(var20)();
case 90:
                    var18 = var16;
                    if(!(var10 == var16)) { _fun0008_ip = 92; continue _fun0008 }
case 71:
                    var16 = var15;
                    _fun0008_ip = 93; continue _fun0008;
case 92:
                    var16 = var18;
case 93:
                    var13['original_transaction_id'] = var16;
                    var16 = var12;
                    var16 = var16.purchaseResponse;
                    var16 = var16.originalTransactionDate;
                    var17 = var16;
                    if(!(var10 == var16)) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                    var16 = var14;
                    _fun0008_ip = 50; continue _fun0008;
case 94:
                    var16 = var17;
case 50:
                    var13['original_transaction_date'] = var16;
                    var13['transaction_id'] = var15;
                    var13['transaction_date'] = var14;
                    var7 = var13;
case 96: // try_end0 // try_end1
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var13 = 15;
                    var13 = var15[var13];
                    var16 = var14.bind(var6)(var13);
                    var15 = var16.track;
                    var13 = _closure1_slot16;
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
case 88:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var12 = 15;
                    var12 = var14[var12];
                    var15 = var13.bind(var6)(var12);
                    var14 = var15.track;
                    var12 = _closure1_slot16;
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
case 87:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var11 = 15;
                    var11 = var13[var11];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.track;
                    var4 = _closure1_slot16;
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
case 97: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var3 = {};
                    var4 = var4.code;
                    var5 = var4;
                    var10 = var10 == var4;
                    var4 = undefined;
                    if(var10) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                    var10 = var5;
                    var5 = var10.toString;
                    var4 = var5.bind(var10)();
case 98:
                    var3['error_code'] = var4;
                    var5 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var4 = 34;
                    var4 = var10[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getUnderlyingIOSError;
                    var4 = var4.bind(var5)(var2);
                    var3['error_message'] = var4;
                    var7 = var3;
                    throw var2;
case 100: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 15;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot16;
                    var4 = var3.APPLE_PARTNER_IAP_REQUEST_SENT;
                    var3 = {};
                    var3['request_identifier'] = var9;
                    var3['success'] = var8;
                    var24 = var7;
                    var25 = var3;
                    var7 = copyDataProperties(var25, var24);
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
case 83:
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
    var6 = function getIAPJWTRequestData(arg1) {
        var1 = undefined;
        var4 = _closure1_slot33;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var6;
    var1 = function _getIAPJWTRequestData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var _closure4_slot0 = var5;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 37;
                    var2 = var11[var2];
                    var10 = undefined;
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var6 = _closure1_slot18;
                    var6 = var6.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = 38;
                    var8 = var11[var8];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.APPLE_JWT_TOKEN_CREATE;
                    var6['event'] = var8;
                    var7 = function properties(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var7 = arg1;
                            var1 = _closure4_slot0;
                            var4 = var1.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var8 = 39;
                            var3 = var3[var8];
                            var9 = undefined;
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = 40;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0010_ip = 103; continue _fun0010 }
case 55:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.MODIFY;
                            if(!(var4 !== var3)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0010_ip = 107; continue _fun0010 }
case 109:
                            var3 = {};
                            var12 = _closure4_slot0;
                            var13 = var3;
                            var4 = copyDataProperties(var13, var12);
                            var4 = var3;
                            _fun0010_ip = 110; continue _fun0010;
case 107:
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
                            if(!(var6 != var10)) { _fun0010_ip = 111; continue _fun0010 }
case 112:
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var3['gift_info_options'] = var6;
case 111:
                            var4 = var3;
                            if(!var5) { _fun0010_ip = 110; continue _fun0010 }
case 113:
                            var3['is_gift'] = var5;
                            var4 = var3;
                            _fun0010_ip = 110; continue _fun0010;
case 105:
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
                            _fun0010_ip = 110; continue _fun0010;
case 103:
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
case 110:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 41;
                            var1 = var3[var1];
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 114; continue _fun0010 }
case 115:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 114; continue _fun0010 }
case 116:
                            var6 = var7.request_data;
case 114:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0010_ip = 117; continue _fun0010 }
case 118:
                            var5 = var6;
case 117:
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
case 119:
                    return var2;
case 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                    var3 = {};
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.stringify;
                    var4 = var2.body;
                    var4 = var4.request_data;
                    var4 = var5.bind(var6)(var4);
                    var3['requestJSONString'] = var4;
                    return var3;
case 121:
                    return var2;
case 101:
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
    var5 = function updateAppleSubscription(arg1) {
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
    var1 = function _updateAppleSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 123; continue _fun0011 }
case 102:
                    var _closure4_slot0 = var6;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 37;
                    var2 = var10[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.patch;
                    var2 = {};
                    var12 = _closure1_slot18;
                    var11 = var12.BILLING_APPLE_SUBSCRIPTION;
                    var9 = var6.subscription_id;
                    var9 = var11.bind(var12)(var9);
                    var2['url'] = var9;
                    var2['body'] = var6;
                    var6 = true;
                    var2['oldFormErrors'] = var6;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = 38;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.APPLE_JWT_TOKEN_CREATE;
                    var6['event'] = var8;
                    var7 = function properties(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var7 = arg1;
                            var4 = {};
                            var10 = _closure4_slot0;
                            var11 = var4;
                            var1 = copyDataProperties(var11, var10);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 41;
                            var1 = var3[var1];
                            var9 = undefined;
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0012_ip = 124; continue _fun0012 }
case 126:
                            var6 = var7.request_data;
case 124:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0012_ip = 64; continue _fun0012 }
case 127:
                            var5 = var6;
case 64:
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
case 128:
                    return var2;
case 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 130; continue _fun0011 }
case 131:
                    return var3;
case 130:
                    return var2;
case 123:
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
    var1 = function determineProductId(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 39;
            var2 = var2[var6];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CREATE;
            if(!(var2 !== var4)) { _fun0013_ip = 132; continue _fun0013 }
case 133:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CANCEL;
            if(!(var2 !== var4)) { _fun0013_ip = 132; continue _fun0013 }
case 124:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.RESUBSCRIBE;
            if(!(var2 !== var4)) { _fun0013_ip = 132; continue _fun0013 }
case 134:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.REACTIVATE;
            if(!(var2 !== var4)) { _fun0013_ip = 132; continue _fun0013 }
case 106:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CHARGE;
            if(!(var2 !== var4)) { _fun0013_ip = 135; continue _fun0013 }
case 136:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 40;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CREATE;
            if(!(var2 !== var4)) { _fun0013_ip = 137; continue _fun0013 }
case 138:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CANCEL;
            if(!(var2 !== var4)) { _fun0013_ip = 137; continue _fun0013 }
case 139:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.REACTIVATE;
            if(!(var2 !== var4)) { _fun0013_ip = 137; continue _fun0013 }
case 140:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.MODIFY;
            if(!(var2 !== var4)) { _fun0013_ip = 137; continue _fun0013 }
case 141:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CHARGE;
            if(!(var2 !== var4)) { _fun0013_ip = 142; continue _fun0013 }
case 143:
            var2 = global;
            var5 = var2.Error;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var7 = 'Invalid operation';
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            throw var2;
case 142:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_CONSUMABLE;
            return var2;
case 137:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_SUBSCRIPTION;
            return var2;
case 135:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_CONSUMABLE;
            return var2;
case 132:
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 24;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.ProductIds;
            var1 = var1.GENERIC_SUBSCRIPTION;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function _cancelGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 144; continue _fun0014 }
case 53:
                    var11 = arg1;
                    var8 = arg2;
                    var3 = arg3;
                    var6 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    var2 = _closure1_slot29;
                    var2 = var2.bind(var6)();
                    if(var2) { _fun0014_ip = 84; continue _fun0014 }
case 145:
                    var2 = false;
                    return var2;
case 84:
                    var2 = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    if(var2) { _fun0014_ip = 146; continue _fun0014 }
case 147:
                    var2 = 39;
                    var2 = var9[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.APBRequestOperations;
                    var5 = var2.CANCEL;
                    _fun0014_ip = 148; continue _fun0014;
case 146:
                    var2 = 40;
                    var2 = var9[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.ACRequestOperations;
                    var5 = var2.CANCEL;
case 148:
                    var12 = var5;
                    var2 = _closure1_slot36;
                    var13 = var2.bind(var6)(var5);
                    var10 = var13;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var9 = 21;
                    var2 = var2[var9];
                    var7 = var5.bind(var6)(var2);
                    var5 = var7.dispatch;
                    var2 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_START';
                    var2['type'] = var14;
                    var2['productIdentifier'] = var13;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=174);
case 149:
                    return var2;
case 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 151; continue _fun0014 }
case 152: // try_start_0
                    var7 = _closure1_slot34;
                    var5 = {};
                    var5['operation'] = var12;
                    var5['request_identifier'] = var11;
                    var5['subscription_id'] = var8;
                    var5 = var7.bind(var6)(var5);
                    SaveGenerator(address=213);
case 153:
                    return var5;
case 154:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0014_ip = 47; continue _fun0014 }
case 71:
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
case 139: // try_end0
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
                    var4 = _closure1_slot28;
                    var7 = var3;
                    var3 = 'partner_subscription';
                    if(!var7) { _fun0014_ip = 155; continue _fun0014 }
case 156:
                    var3 = 'advanced_commerce';
case 155:
                    var3 = var4.bind(var6)(var5, var3);
                    var3 = false;
                    return var3;
case 151:
                    return var2;
case 144:
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
    var4 = function isValidCurrency(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot17;
        var3 = var2.bind(var3)(var1);
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot38 = var4;
    var1 = function _createGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 157; continue _fun0015 }
case 158:
                    var6 = var2.requestIdentifier;
                    var5 = var2.items;
                    var17 = var2.currency;
                    var16 = var2.countryCode;
                    var13 = var2.orderId;
                    var7 = undefined;
                    var10 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=53);
case 159:
                    return var7;
case 160:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 161; continue _fun0015 }
case 162:
                    var3 = _closure1_slot29;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0015_ip = 86; continue _fun0015 }
case 163:
                    var3 = false;
                    return var3;
case 86:
                    var9 = _closure1_slot36;
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var18 = 40;
                    var8 = var3[var18];
                    var8 = var11.bind(var7)(var8);
                    var8 = var8.ACRequestOperations;
                    var8 = var8.CREATE;
                    var12 = var9.bind(var7)(var8);
                    var10 = var12;
                    var8 = _closure1_slot1;
                    var9 = 21;
                    var3 = var3[var9];
                    var11 = var8.bind(var7)(var3);
                    var8 = var11.dispatch;
                    var3 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var14;
                    var3['productIdentifier'] = var12;
                    var3 = var8.bind(var11)(var3);
                    SaveGenerator(address=172);
case 164:
                    return var3;
case 149:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 165; continue _fun0015 }
case 166: // try_start_0
                    var11 = _closure1_slot38;
                    var8 = var17;
                    var8 = var11.bind(var7)(var8);
                    if(var8) { _fun0015_ip = 51; continue _fun0015 }
case 167:
                    var8 = global;
                    var12 = var8.Error;
                    var19 = var17;
                    var8 = var8.HermesInternal;
                    var14 = var8.concat;
                    var11 = "Unable to create subscription with invalid currency '";
                    var8 = "' ";
                    var23 = var14.bind(var11)(var19, var8);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var24 = var11;
                    var8 = new var24[var12](var23, var22);
                    var8 = var8 instanceof Object ? var8 : var11;
                    throw var8;
case 51:
                    var11 = {};
                    var8 = var6;
                    var11['request_identifier'] = var8;
                    var12 = var5;
                    var8 = var12.map;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.planId;
                        var1['plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var5 = var8.bind(var12)(var5);
                    var11['items'] = var5;
                    var5 = var17;
                    var11['currency'] = var5;
                    var5 = var16;
                    var11['country_code'] = var5;
                    var8 = _closure1_slot32;
                    var5 = {};
                    var14 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var12 = var12[var18];
                    var12 = var14.bind(var7)(var12);
                    var12 = var12.ACRequestOperations;
                    var12 = var12.CREATE;
                    var5['operation'] = var12;
                    var23 = var5;
                    var22 = var11;
                    var11 = copyDataProperties(var23, var22);
                    var5 = var8.bind(var7)(var5);
                    SaveGenerator(address=368);
case 168:
                    return var5;
case 143:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 169; continue _fun0015 }
case 105:
                    var22 = var5.requestJSONString;
                    var11 = _closure1_slot30;
                    var23 = var6;
                    var21 = var10;
                    var12 = true;
                    var24 = undefined;
                    var20 = true;
                    var6 = var24[var11](var23, var22, var21, var20, var19);
                    SaveGenerator(address=407);
case 170:
                    return var6;
case 171:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 172; continue _fun0015 }
case 173:
                    var14 = var6.purchaseResponse;
                    var15 = var6.originalPurchase;
                    var11 = _closure1_slot26;
                    var8 = {};
                    var18 = var14.transactionReceipt;
                    var8['encodedReceipt'] = var18;
                    var18 = 3;
                    var8['retries'] = var18;
                    var8['presentmentCurrency'] = var17;
                    var8['appStoreRegion'] = var16;
                    var14 = var14.jwsRepresentation;
                    var8['jwsRepresentation'] = var14;
                    var14 = 'createGenericSubscription';
                    var8['source'] = var14;
                    var8['orderId'] = var13;
                    var8 = var11.bind(var7)(var8);
                    SaveGenerator(address=498);
case 174:
                    return var8;
case 175:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0015_ip = 176; continue _fun0015 }
case 177:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var11 = 20;
                    var11 = var14[var11];
                    var14 = var13.bind(var7)(var11);
                    var13 = var14.finishTransaction;
                    var11 = {};
                    var11['purchase'] = var15;
                    var11 = var13.bind(var14)(var11);
                    SaveGenerator(address=546);
case 178:
                    return var11;
case 179:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0015_ip = 180; continue _fun0015 }
case 181:
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var13 = var13[var9];
                    var15 = var14.bind(var7)(var13);
                    var14 = var15.dispatch;
                    var13 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var13['type'] = var16;
                    var16 = var10;
                    var13['productIdentifier'] = var16;
                    var13 = var14.bind(var15)(var13);
case 182: // try_end0
                    return var12;
case 180:
                    return var11;
case 176:
                    return var8;
case 172:
                    return var6;
case 169:
                    return var5;
case 183: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var9];
                    var9 = var8.bind(var7)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var5['type'] = var11;
                    var5['productIdentifier'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var5 = _closure1_slot28;
                    var4 = 'advanced_commerce';
                    var4 = var5.bind(var7)(var6, var4);
                    var4 = false;
                    return var4;
case 165:
                    return var3;
case 161:
                    return var2;
case 157:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot39 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function _modifyGenericSubscription() {
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
                    if(var3) { _fun0016_ip = 184; continue _fun0016 }
case 158:
                    var6 = var2.requestIdentifier;
                    var16 = var2.subscriptionId;
                    var12 = var2.items;
                    var13 = var2.orderId;
                    var11 = var2.onPurchaseComplete;
                    var7 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=55);
case 160:
                    return var7;
case 4:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 185; continue _fun0016 }
case 186:
                    var3 = _closure1_slot29;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0016_ip = 124; continue _fun0016 }
case 187:
                    var3 = false;
                    return var3;
case 124:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var5 = 24;
                    var5 = var3[var5];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.ProductIds;
                    var17 = var5.GENERIC_SUBSCRIPTION;
                    var10 = var17;
                    var5 = _closure1_slot1;
                    var9 = 21;
                    var3 = var3[var9];
                    var8 = var5.bind(var7)(var3);
                    var5 = var8.dispatch;
                    var3 = {};
                    var18 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var18;
                    var3['productIdentifier'] = var17;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=165);
case 14:
                    return var3;
case 123:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 188; continue _fun0016 }
case 150: // try_start_1
                    var8 = _closure1_slot32;
                    var5 = {};
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var17 = 40;
                    var17 = var19[var17];
                    var17 = var18.bind(var7)(var17);
                    var17 = var17.ACRequestOperations;
                    var17 = var17.MODIFY;
                    var5['operation'] = var17;
                    var17 = var6;
                    var5['request_identifier'] = var17;
                    var5['subscription_id'] = var16;
                    var17 = var12;
                    var16 = var17.map;
                    var12 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.planId;
                        var1['plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var12 = var16.bind(var17)(var12);
                    var5['subscription_items'] = var12;
                    var5 = var8.bind(var7)(var5);
                    SaveGenerator(address=264);
case 107:
                    return var5;
case 50:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 116; continue _fun0016 }
case 189:
                    var22 = var5.requestJSONString;
                    var16 = _closure1_slot30;
                    var23 = var6;
                    var21 = var10;
                    var12 = true;
                    var24 = undefined;
                    var20 = true;
                    var6 = var24[var16](var23, var22, var21, var20, var19);
                    SaveGenerator(address=303);
case 190:
                    return var6;
case 191:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 192; continue _fun0016 }
case 193:
                    var14 = var6.purchaseResponse;
                    var15 = var6.originalPurchase;
case 194: // try_start_0
                    var16 = var11;
                    var8 = null;
                    var16 = var8 == var16;
                    var8 = undefined;
                    if(var16) { _fun0016_ip = 155; continue _fun0016 }
case 195:
                    var8 = var11.bind(var7)();
case 155:
                    SaveGenerator(address=346);
case 196:
                    return var8;
case 197:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0016_ip = 111; continue _fun0016 }
case 198: // try_end0
                    _fun0016_ip = 199; continue _fun0016;
case 111: // try_end1
                    return var8;
case 200: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=15);
                    var11 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var8 = 17;
                    var8 = var17[var8];
                    var11 = var11.bind(var7)(var8);
                    var8 = var11.captureBillingException;
                    var8 = var8.bind(var11)(var16);
case 199:
                    var11 = _closure1_slot26;
                    var8 = {};
                    var16 = var14.transactionReceipt;
                    var8['encodedReceipt'] = var16;
                    var16 = 3;
                    var8['retries'] = var16;
                    var14 = var14.jwsRepresentation;
                    var8['jwsRepresentation'] = var14;
                    var14 = 'modifyGenericSubscription';
                    var8['source'] = var14;
                    var8['orderId'] = var13;
                    var8 = var11.bind(var7)(var8);
                    SaveGenerator(address=450);
case 201:
                    return var8;
case 202:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0016_ip = 203; continue _fun0016 }
case 204:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var11 = 20;
                    var11 = var14[var11];
                    var14 = var13.bind(var7)(var11);
                    var13 = var14.finishTransaction;
                    var11 = {};
                    var11['purchase'] = var15;
                    var11 = var13.bind(var14)(var11);
                    SaveGenerator(address=498);
case 174:
                    return var11;
case 175:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(var13) { _fun0016_ip = 205; continue _fun0016 }
case 177:
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var13 = var13[var9];
                    var15 = var14.bind(var7)(var13);
                    var14 = var15.dispatch;
                    var13 = {};
                    var16 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var13['type'] = var16;
                    var16 = var10;
                    var13['productIdentifier'] = var16;
                    var13 = var14.bind(var15)(var13);
case 206: // try_end2
                    return var12;
case 205:
                    return var11;
case 203:
                    return var8;
case 192:
                    return var6;
case 116:
                    return var5;
case 207: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var9];
                    var9 = var8.bind(var7)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var5['type'] = var11;
                    var5['productIdentifier'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var5 = _closure1_slot28;
                    var4 = 'advanced_commerce';
                    var4 = var5.bind(var7)(var6, var4);
                    var4 = false;
                    return var4;
case 188:
                    return var3;
case 185:
                    return var2;
case 184:
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
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 208; continue _fun0017 }
case 158:
                    var8 = var2.requestIdentifier;
                    var6 = var2.subscriptionId;
                    var4 = arg2;
                    var7 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=40);
case 209:
                    return var7;
case 210:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 211; continue _fun0017 }
case 5:
                    var3 = _closure1_slot29;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0017_ip = 212; continue _fun0017 }
case 125:
                    var3 = false;
                    return var3;
case 212:
                    var3 = {};
                    var9 = var8;
                    var3['request_identifier'] = var9;
                    var3['subscription_id'] = var6;
                    var12 = var3;
                    var6 = _closure1_slot36;
                    var3 = var4;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    if(var3) { _fun0017_ip = 213; continue _fun0017 }
case 214:
                    var3 = 39;
                    var3 = var13[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.APBRequestOperations;
                    var3 = var3.REACTIVATE;
                    _fun0017_ip = 215; continue _fun0017;
case 213:
                    var9 = 40;
                    var9 = var13[var9];
                    var9 = var10.bind(var7)(var9);
                    var9 = var9.ACRequestOperations;
                    var3 = var9.REACTIVATE;
case 215:
                    var13 = var6.bind(var7)(var3);
                    var11 = var13;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var10 = 21;
                    var3 = var3[var10];
                    var9 = var6.bind(var7)(var3);
                    var6 = var9.dispatch;
                    var3 = {};
                    var14 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var14;
                    var3['productIdentifier'] = var13;
                    var3 = var6.bind(var9)(var3);
                    SaveGenerator(address=213);
case 153:
                    return var3;
case 154:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0017_ip = 216; continue _fun0017 }
case 217: // try_start_0
                    var6 = var4;
                    if(var6) { _fun0017_ip = 140; continue _fun0017 }
case 218:
                    var9 = _closure1_slot34;
                    var6 = {};
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 39;
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
case 219:
                    return var6;
case 220:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(!var9) { _fun0017_ip = 221; continue _fun0017 }
case 222: // try_end0
                    return var6;
case 140: // try_start_1
                    var9 = _closure1_slot32;
                    var6 = {};
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 40;
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
case 223:
                    return var6;
case 224:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0017_ip = 225; continue _fun0017 }
case 226:
                    var19 = var6.requestJSONString;
                    var13 = _closure1_slot30;
                    var20 = var8;
                    var18 = var11;
                    var17 = true;
                    var21 = undefined;
                    var8 = var21[var13](var20, var19, var18, var17, var16);
                    SaveGenerator(address=401);
case 227:
                    return var8;
case 228:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0017_ip = 229; continue _fun0017 }
case 230:
                    var13 = var8.purchaseResponse;
                    var15 = var8.originalPurchase;
                    var12 = _closure1_slot26;
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
                    SaveGenerator(address=477);
case 231:
                    return var9;
case 232:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0017_ip = 233; continue _fun0017 }
case 234:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 20;
                    var12 = var14[var12];
                    var14 = var13.bind(var7)(var12);
                    var13 = var14.finishTransaction;
                    var12 = {};
                    var12['purchase'] = var15;
                    var12 = var13.bind(var14)(var12);
                    SaveGenerator(address=525);
case 235:
                    return var12;
case 236:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(var13) { _fun0017_ip = 117; continue _fun0017 }
case 221:
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
case 237: // try_end1
                    var13 = true;
                    return var13;
case 117:
                    return var12;
case 233:
                    return var9;
case 229:
                    return var8;
case 225:
                    return var6;
case 238: // catch_target0 // catch_target1
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
                    var5 = _closure1_slot28;
                    var8 = var4;
                    var4 = 'partner_subscription';
                    if(!var8) { _fun0017_ip = 239; continue _fun0017 }
case 83:
                    var4 = 'advanced_commerce';
case 239:
                    var4 = var5.bind(var7)(var6, var4);
                    var4 = false;
                    return var4;
case 216:
                    return var3;
case 211:
                    return var2;
case 208:
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
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 240; continue _fun0018 }
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
                    var2 = 22;
                    var2 = var6[var2];
                    var8 = var3.bind(var7)(var2);
                    var6 = var8.restorePurchases;
                    var2 = {};
                    var3 = false;
                    var2['fullRestore'] = var3;
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=79);
case 126:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 241; continue _fun0018 }
case 242:
                    var4 = new Array(0);
                    var6 = var2.length;
                    var8 = 0;
                    if(!(var8 !== var6)) { _fun0018_ip = 243; continue _fun0018 }
case 244:
                    var6 = _closure1_slot24;
                    var6 = var6.bind(var7)(var2);
                    var17 = var6;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    var13 = 15;
                    var12 = null;
                    var11 = 20;
                    var10 = 3;
                    var9 = 'retryPendingPurchases';
                    if(var6) { _fun0018_ip = 245; continue _fun0018 }
case 129:
                    var6 = var16;
                    var6 = var6.value;
                    var6 = var6.purchaseResponse;
                    var18 = var6;
                    var19 = var6.productIdentifier;
                    var23 = var6.transactionIdentifier;
                    var6 = var23.toString;
                    var20 = var6.bind(var23)();
case 136: // try_start_0
                    var23 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var13];
                    var25 = var23.bind(var7)(var6);
                    var24 = var25.track;
                    var6 = _closure1_slot16;
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
                    SaveGenerator(address=312);
case 246:
                    return var6;
case 193:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=22);
                    if(var23) { _fun0018_ip = 247; continue _fun0018 }
case 248:
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
case 228:
                    return var23;
case 249:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(var24) { _fun0018_ip = 250; continue _fun0018 }
case 251:
                    var25 = _closure1_slot1;
                    var24 = _closure1_slot3;
                    var24 = var24[var13];
                    var27 = var25.bind(var7)(var24);
                    var26 = var27.track;
                    var24 = _closure1_slot16;
                    var25 = var24.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED;
                    var24 = {};
                    var28 = var19;
                    var24['product_id'] = var28;
                    var28 = var20;
                    var24['transaction_id'] = var28;
                    var24 = var26.bind(var27)(var25, var24);
case 252: // try_end0
                    _fun0018_ip = 253; continue _fun0018;
case 250:
                    return var23;
case 247:
                    return var6;
case 254: // catch_target0
                    CatchBlockStart(arg_register=23);
                    var22 = var24;
                    var23 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var13];
                    var26 = var23.bind(var7)(var6);
                    var25 = var26.track;
                    var6 = _closure1_slot16;
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
                    if(var27) { _fun0018_ip = 192; continue _fun0018 }
case 255:
                    var28 = var21;
                    var27 = var28.toString;
                    var24 = var27.bind(var28)();
case 192:
                    var6['error_code'] = var24;
                    var24 = var22;
                    var27 = var24.message;
                    var6['error_message'] = var27;
                    var6 = var25.bind(var26)(var23, var6);
                    var23 = var4;
                    var6 = var23.push;
                    var6 = var6.bind(var23)(var24);
case 253:
                    var6 = var17;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    if(!var6) { _fun0018_ip = 129; continue _fun0018 }
case 245:
                    var6 = var4;
                    var6 = var6.length;
                    if(!(!(var6 > var8))) { _fun0018_ip = 256; continue _fun0018 }
case 257:
                    var6 = true;
                    return var6;
case 256:
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
case 243:
                    var3 = true;
                    return var3;
case 241:
                    return var2;
case 240:
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
        var4 = _closure1_slot8;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0019_ip = 258; continue _fun0019 }
case 158:
                    var20 = var2.requestIdentifier;
                    var9 = var2.skuId;
                    var26 = var2.currency;
                    var14 = var2.countryCode;
                    var29 = var2.analyticsLocations;
                    var30 = var2.analyticsLoadId;
                    var13 = var2.isGift;
                    var8 = var2.giftInfoOptions;
                    var2 = var2.isFreeForStaffSelfPurchase;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0019_ip = 259; continue _fun0019 }
case 260:
                    var2 = true;
case 259:
                    var12 = var2;
                    var15 = arg2;
                    var22 = undefined;
                    var21 = undefined;
                    var25 = undefined;
                    var27 = undefined;
                    var28 = undefined;
                    var11 = undefined;
                    var17 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=100);
case 261:
                    return var7;
case 262:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0019_ip = 263; continue _fun0019 }
case 55:
                    var3 = _closure1_slot29;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0019_ip = 60; continue _fun0019 }
case 264:
                    var3 = false;
                    return var3;
case 60:
                    var18 = _closure1_slot36;
                    var19 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var33 = 40;
                    var16 = var3[var33];
                    var16 = var19.bind(var7)(var16);
                    var16 = var16.ACRequestOperations;
                    var16 = var16.CHARGE;
                    var23 = var18.bind(var7)(var16);
                    var22 = var23;
                    var18 = _closure1_slot1;
                    var16 = 21;
                    var3 = var3[var16];
                    var19 = var18.bind(var7)(var3);
                    var18 = var19.dispatch;
                    var3 = {};
                    var24 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var24;
                    var3['productIdentifier'] = var23;
                    var3 = var18.bind(var19)(var3);
                    SaveGenerator(address=219);
case 265:
                    return var3;
case 71:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=17);
                    if(var18) { _fun0019_ip = 266; continue _fun0019 }
case 218:
                    var19 = _closure1_slot0;
                    var23 = _closure1_slot3;
                    var18 = 42;
                    var18 = var23[var18];
                    var23 = var19.bind(var7)(var18);
                    var19 = var23.trackPaymentFlowStartedAnalyticsAndCTP;
                    var18 = {};
                    var24 = var9;
                    var18['sku_id'] = var24;
                    var24 = var30;
                    var18['load_id'] = var24;
                    var24 = var29;
                    var18['location_stack'] = var24;
                    var24 = _closure1_slot19;
                    var24 = var24.APPLE_PARTNER;
                    var18['payment_gateway'] = var24;
                    var18 = var19.bind(var23)(var18);
case 267: // try_start_0
                    var19 = _closure1_slot38;
                    var18 = var26;
                    var18 = var19.bind(var7)(var18);
                    if(var18) { _fun0019_ip = 105; continue _fun0019 }
case 268:
                    var18 = global;
                    var23 = var18.Error;
                    var31 = var26;
                    var18 = var18.HermesInternal;
                    var24 = var18.concat;
                    var19 = "Unable to create subscription with invalid currency '";
                    var18 = "' ";
                    var37 = var24.bind(var19)(var31, var18);
                    var19 = var23.prototype;
                    var19 = Object.create(var19, {constructor: {value: var23}});
                    var38 = var19;
                    var18 = new var38[var23](var37, var36);
                    var18 = var18 instanceof Object ? var18 : var19;
                    throw var18;
case 105:
                    var23 = var26;
                    var19 = var14;
                    var18 = function retryPendingPurchases(arg1, arg2) {
                        var1 = undefined;
                        var4 = _closure1_slot42;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var18 = var18.bind(var7)(var23, var19);
                    SaveGenerator(address=400);
case 269:
                    return var18;
case 270:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=18);
                    if(var19) { _fun0019_ip = 271; continue _fun0019 }
case 251:
                    var24 = {};
                    var19 = var9;
                    var24['sku_id'] = var19;
                    var19 = var20;
                    var24['request_identifier'] = var19;
                    var19 = var26;
                    var24['currency'] = var19;
                    var19 = var14;
                    var24['country_code'] = var19;
                    var19 = var13;
                    var24['is_gift'] = var19;
                    var19 = var8;
                    var24['gift_info_options'] = var19;
                    var23 = _closure1_slot32;
                    var19 = {};
                    var32 = _closure1_slot0;
                    var31 = _closure1_slot3;
                    var31 = var31[var33];
                    var31 = var32.bind(var7)(var31);
                    var31 = var31.ACRequestOperations;
                    var31 = var31.CHARGE;
                    var19['operation'] = var31;
                    var37 = var19;
                    var36 = var24;
                    var24 = copyDataProperties(var37, var36);
                    var19 = var23.bind(var7)(var19);
                    SaveGenerator(address=518);
case 272:
                    return var19;
case 273:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=22);
                    if(var23) { _fun0019_ip = 274; continue _fun0019 }
case 275:
                    var36 = var19.requestJSONString;
                    var31 = _closure1_slot30;
                    var37 = var20;
                    var35 = var22;
                    var24 = true;
                    var38 = undefined;
                    var34 = true;
                    var20 = var38[var31](var37, var36, var35, var34, var33);
                    SaveGenerator(address=557);
case 276:
                    return var20;
case 203:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=22);
                    if(var23) { _fun0019_ip = 277; continue _fun0019 }
case 207:
                    var23 = var20.purchaseResponse;
                    var25 = var23;
                    var27 = var20.originalPurchase;
                    var31 = var23.jwsRepresentation;
                    var21 = var31;
                    var23 = null;
                    if(!(var23 == var31)) { _fun0019_ip = 278; continue _fun0019 }
case 279:
                    var23 = var25;
                    var31 = var23.transactionReceipt;
                    _fun0019_ip = 280; continue _fun0019;
case 278:
                    var31 = var21;
case 280:
                    var23 = _closure1_slot1;
                    var32 = _closure1_slot3;
                    var21 = 13;
                    var21 = var32[var21];
                    var23 = var23.bind(var7)(var21);
                    var21 = var23.v3;
                    var28 = var21.bind(var23)(var31);
                    var21 = var13;
                    if(!var21) { _fun0019_ip = 281; continue _fun0019 }
case 282:
                    var23 = _closure1_slot1;
                    var21 = _closure1_slot3;
                    var21 = var21[var16];
                    var31 = var23.bind(var7)(var21);
                    var23 = var31.dispatch;
                    var21 = {};
                    var32 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var21['type'] = var32;
                    var32 = var28;
                    var21['key'] = var32;
                    var32 = {};
                    var36 = var8;
                    var37 = var32;
                    var33 = copyDataProperties(var37, var36);
                    var21['giftOptions'] = var32;
                    var21 = var23.bind(var31)(var21);
case 281:
                    var23 = _closure1_slot26;
                    var21 = {};
                    var31 = var25.transactionReceipt;
                    var21['encodedReceipt'] = var31;
                    var31 = 3;
                    var21['retries'] = var31;
                    var21['presentmentCurrency'] = var26;
                    var26 = var14;
                    var21['appStoreRegion'] = var26;
                    var26 = var8;
                    var21['giftInfoOptions'] = var26;
                    var26 = var13;
                    var21['isGift'] = var26;
                    var25 = var25.jwsRepresentation;
                    var21['jwsRepresentation'] = var25;
                    var25 = 'mobilePurchaseSKU';
                    var21['source'] = var25;
                    var21 = var23.bind(var7)(var21);
                    SaveGenerator(address=794);
case 283:
                    return var21;
case 284:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=22);
                    if(var23) { _fun0019_ip = 285; continue _fun0019 }
case 286:
                    var23 = var13;
                    if(!var23) { _fun0019_ip = 287; continue _fun0019 }
case 288:
                    var25 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var23 = var23[var16];
                    var26 = var25.bind(var7)(var23);
                    var25 = var26.dispatch;
                    var23 = {};
                    var31 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var23['type'] = var31;
                    var23['key'] = var28;
                    var23 = var25.bind(var26)(var23);
case 287:
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot3;
                    var23 = 20;
                    var23 = var26[var23];
                    var26 = var25.bind(var7)(var23);
                    var25 = var26.finishTransaction;
                    var23 = {};
                    var23['purchase'] = var27;
                    var23 = var25.bind(var26)(var23);
                    SaveGenerator(address=894);
case 289:
                    return var23;
case 290:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=24);
                    if(var25) { _fun0019_ip = 291; continue _fun0019 }
case 292:
                    var26 = _closure1_slot1;
                    var27 = _closure1_slot3;
                    var25 = var27[var16];
                    var31 = var26.bind(var7)(var25);
                    var28 = var31.dispatch;
                    var25 = {};
                    var32 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var25['type'] = var32;
                    var32 = var22;
                    var25['productIdentifier'] = var32;
                    var25 = var28.bind(var31)(var25);
                    var25 = 15;
                    var25 = var27[var25];
                    var28 = var26.bind(var7)(var25);
                    var27 = var28.track;
                    var25 = _closure1_slot16;
                    var26 = var25.PAYMENT_FLOW_COMPLETED;
                    var25 = {};
                    var31 = var9;
                    var25['sku_id'] = var31;
                    var25['load_id'] = var30;
                    var25['location_stack'] = var29;
                    var29 = _closure1_slot19;
                    var29 = var29.APPLE_PARTNER;
                    var25['payment_gateway'] = var29;
                    var29 = var13;
                    var25['is_gift'] = var29;
                    var25 = var27.bind(var28)(var26, var25);
case 293: // try_end0
                    return var24;
case 291:
                    return var23;
case 285:
                    return var21;
case 277:
                    return var20;
case 274:
                    return var19;
case 271:
                    return var18;
case 294: // catch_target0
                    CatchBlockStart(arg_register=18);
                    var4 = var19;
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot3;
                    var16 = var20[var16];
                    var21 = var18.bind(var7)(var16);
                    var18 = var21.dispatch;
                    var16 = {};
                    var23 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var16['type'] = var23;
                    var16['productIdentifier'] = var22;
                    var16 = var18.bind(var21)(var16);
                    var18 = _closure1_slot0;
                    var16 = 35;
                    var16 = var20[var16];
                    var16 = var18.bind(var7)(var16);
                    var16 = var16.BillingError;
                    var18 = var16.prototype;
                    var18 = Object.create(var18, {constructor: {value: var16}});
                    var38 = var18;
                    var37 = var19;
                    var16 = new var38[var16](var37, var36);
                    var11 = var16 instanceof Object ? var16 : var18;
                    var18 = _closure1_slot13;
                    var16 = var18.getCurrentUser;
                    var18 = var16.bind(var18)();
                    var17 = var18;
                    var16 = null;
                    if(!(var16 != var18)) { _fun0019_ip = 295; continue _fun0019 }
case 296:
                    var18 = var17;
                    var17 = var18.isStaff;
                    var17 = var17.bind(var18)();
                    if(!var17) { _fun0019_ip = 295; continue _fun0019 }
case 297:
                    if(!var12) { _fun0019_ip = 295; continue _fun0019 }
case 298:
                    var17 = var11.code;
                    var18 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var11 = 36;
                    var12 = var12[var11];
                    var12 = var18.bind(var7)(var12);
                    var12 = var12.ErrorCodes;
                    var12 = var12.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(var17 === var12)) { _fun0019_ip = 295; continue _fun0019 }
case 299:
                    var12 = var15;
                    if(!(var16 == var12)) { _fun0019_ip = 300; continue _fun0019 }
case 301:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var12 = 43;
                    var12 = var17[var12];
                    var12 = var16.bind(var7)(var12);
                    var12 = var12.purchaseSKU;
                    _fun0019_ip = 302; continue _fun0019;
case 300:
                    var12 = var15;
case 302:
                    var10 = var12;
case 303: // try_start_1
                    var12 = var10;
                    var10 = var9;
                    var9 = {};
                    var9['countryCode'] = var14;
                    var14 = 0;
                    var9['expectedAmount'] = var14;
                    var14 = _closure1_slot17;
                    var14 = var14.USD;
                    var9['expectedCurrency'] = var14;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 44;
                    var14 = var16[var14];
                    var15 = var15.bind(var7)(var14);
                    var14 = var15.v4;
                    var14 = var14.bind(var15)();
                    var9['loadId'] = var14;
                    var9['isGift'] = var13;
                    var9['giftInfoOptions'] = var8;
                    var8 = 'collectibles';
                    var8 = var12.bind(var7)(var8, var10, var9);
                    SaveGenerator(address=1368);
case 304:
                    return var8;
case 305:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0019_ip = 306; continue _fun0019 }
case 307: // try_end1
                    var9 = true;
                    return var9;
case 306:
                    return var8;
case 308: // catch_target1
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var9 = var8.code;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var11];
                    var8 = var10.bind(var7)(var8);
                    var8 = var8.ErrorCodes;
                    var8 = var8.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(var9 === var8)) { _fun0019_ip = 295; continue _fun0019 }
case 309:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 17;
                    var8 = var10[var8];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.captureBillingException;
                    var8 = var6;
                    var6 = {};
                    var6 = var9.bind(var10)(var8, var6);
case 295:
                    var6 = _closure1_slot28;
                    var5 = var4;
                    var4 = 'collectibles';
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = false;
                    return var4;
case 266:
                    return var3;
case 263:
                    return var2;
case 258:
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
    var1 = function _migrateToACOM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 17; continue _fun0020 }
case 53:
                    var2 = _closure1_slot29;
                    var5 = undefined;
                    var2 = var2.bind(var5)();
                    if(var2) { _fun0020_ip = 62; continue _fun0020 }
case 310:
                    var2 = false;
                    return var2;
case 62:
                    var4 = _closure1_slot14;
                    var2 = var4.getActiveGuildSubscriptions;
                    var6 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 == var6)) { _fun0020_ip = 4; continue _fun0020 }
case 159:
                    var6 = new Array(0);
case 4:
                    var4 = var6.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.paymentGateway;
                        var1 = _closure1_slot19;
                        var1 = var1.APPLE_PARTNER;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0020_ip = 311; continue _fun0020 }
case 124: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 16;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var3 = _closure1_slot18;
                    var3 = var3.BILLING_ACOM_SUBSCRIPTION_MIGRATION;
                    var2['url'] = var3;
                    var3 = true;
                    var2['rejectWithError'] = var3;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=145);
case 312:
                    return var2;
case 313:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 215; continue _fun0020 }
case 128: // try_end0
                    return var3;
case 215:
                    return var2;
case 314: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 311:
                    var2 = false;
                    return var2;
case 17:
                    return var1;
                }
            };
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
    var1 = ['items', 'country_code'];
    var _closure1_slot4 = var1;
    var1 = ['subscription_items'];
    var _closure1_slot5 = var1;
    var1 = ['sku_id', 'country_code', 'is_gift', 'gift_info_options'];
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var7 = 3;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.setPaymentSuccess;
    var _closure1_slot11 = var11;
    var7 = var7.showOldPaymentFlowSuccess;
    var _closure1_slot12 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.AnalyticEvents;
    var _closure1_slot16 = var11;
    var11 = var7.CurrencyCodes;
    var _closure1_slot17 = var11;
    var11 = var7.Endpoints;
    var _closure1_slot18 = var11;
    var11 = var7.StoreKitErrors;
    var7 = 10;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.PaymentGateways;
    var _closure1_slot19 = var7;
    var7 = 11;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot20 = var7;
    var7 = 'localAppleReceiptHash';
    var _closure1_slot21 = var7;
    var7 = 'BILLING';
    var _closure1_slot22 = var7;
    var7 = 12;
    var7 = var10[var7];
    var14 = var13.bind(var1)(var7);
    var7 = var14.prototype;
    var19 = Object.create(var7, {constructor: {value: var14}});
    var18 = 'BillingActionCreators.tsx';
    var7 = new var19[var14](var18, var17);
    var7 = {};
    var7['applyAppleReceipt'] = var12;
    var12 = 18;
    var13 = var10[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.fetchMostRecentSubscription;
    var7['fetchMostRecentSubscription'] = var13;
    var12 = var10[var12];
    var12 = var9.bind(var1)(var12);
    var12 = var12.fetchIpCountryCode;
    var7['fetchIpCountryCode'] = var12;
    var12 = function init() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 66; continue _fun0021 }
case 53: // try_start_0
                    var2 = global;
                    var5 = var2.Promise;
                    var4 = var5.all;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 19;
                    var2 = var9[var2];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var2);
                    var2 = var3.fetchPremiumSubscriptionPlans;
                    var3 = var2.bind(var3)();
                    var2 = new Array(3);
                    var2[0] = var3;
                    var10 = _closure2_slot0;
                    var6 = var10.loadProducts;
                    var6 = var6.bind(var10)();
                    var2[1] = var6;
                    var6 = 18;
                    var6 = var9[var6];
                    var7 = var8.bind(var7)(var6);
                    var6 = var7.fetchSubscriptions;
                    var6 = var6.bind(var7)();
                    var2[2] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=123);
case 42:
                    return var2;
case 264:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 15; continue _fun0021 }
case 315:
                    var4 = _closure2_slot0;
                    var3 = var4.restoreAndApplyPurchases;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=147);
case 313:
                    return var3;
case 316:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 106; continue _fun0021 }
case 129: // try_end0
                    _fun0021_ip = 14; continue _fun0021;
case 106:
                    return var3;
case 15:
                    return var2;
case 317: // catch_target0
                    CatchBlockStart(arg_register=1);
case 14:
                    var2 = undefined;
                    return var2;
case 66:
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
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0022_ip = 265; continue _fun0022 }
case 53:
                    var5 = undefined;
                    var2 = undefined;
                    var6 = _closure1_slot9;
                    var4 = var6.isGenericIapConnected;
                    var4 = var4.bind(var6)();
                    var2 = var4;
                    if(var4) { _fun0022_ip = 318; continue _fun0022 }
case 319: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 20;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.initConnection;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=76);
case 259:
                    return var4;
case 163:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0022_ip = 320; continue _fun0022 }
case 321:
                    var2 = var4;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 21;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'GENERIC_IAP_INIT_CONNECTION';
                    var6['type'] = var9;
                    var6['connected'] = var4;
                    var6 = var7.bind(var8)(var6);
case 322: // try_end0
                    return var4;
case 320:
                    return var4;
case 119: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 17;
                    var4 = var6[var4];
                    var7 = var7.bind(var5)(var4);
                    var4 = var7.captureBillingException;
                    var4 = var4.bind(var7)(var8);
                    var4 = _closure1_slot1;
                    var3 = 21;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = false;
                    return var3;
case 318:
                    return var2;
case 265:
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
    var12 = function disconnectGenericIap() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 21;
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
    var12 = function loadProducts(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 323; continue _fun0023 }
case 53:
                    var2 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var9 = undefined;
case 29: // try_start_0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var7 = 21;
                    var6 = var3[var7];
                    var12 = var4.bind(var2)(var6);
                    var11 = var12.dispatch;
                    var6 = {};
                    var14 = 'IAP_LOAD_PRODUCTS_START';
                    var6['type'] = var14;
                    var6 = var11.bind(var12)(var6);
                    var12 = 22;
                    var3 = var3[var12];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.loadProducts;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=91);
case 324:
                    return var3;
case 325:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 326; continue _fun0023 }
case 262:
                    var13 = var3;
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var4 = 23;
                    var4 = var11[var4];
                    var11 = var6.bind(var2)(var4);
                    var6 = var11.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 24;
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
                    if(!(var6 != var11)) { _fun0023_ip = 327; continue _fun0023 }
case 215:
                    var8 = _closure2_slot0;
                    _fun0023_ip = 328; continue _fun0023;
case 327:
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.fetchStoreFront;
                    var4 = var4.bind(var11)();
                    SaveGenerator(address=191);
case 101:
                    return var4;
case 136:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0023_ip = 329; continue _fun0023 }
case 91:
                    var10 = var4;
                    if(!(var6 == var4)) { _fun0023_ip = 330; continue _fun0023 }
case 65:
                    var6 = {'country': 'US', 'currency': 'usd'};
                    _fun0023_ip = 331; continue _fun0023;
case 330:
                    var6 = var10;
case 331:
                    var8 = var6;
case 328:
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
                    var6 = 24;
                    var6 = var12[var6];
                    var6 = var11.bind(var2)(var6);
                    var6 = var6.GenericProductIds;
                    var6 = var6.length;
                    if(!(var10 !== var6)) { _fun0023_ip = 332; continue _fun0023 }
case 193:
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
                    _fun0023_ip = 230; continue _fun0023;
case 332:
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
case 230: // try_end0
                    _fun0023_ip = 38; continue _fun0023;
case 329:
                    return var4;
case 326:
                    return var3;
case 333: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 21;
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
case 323:
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
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 334; continue _fun0024 }
case 335:
                    var2 = undefined;
                    var12 = undefined;
                    var16 = undefined;
                    var23 = undefined;
                    var18 = undefined;
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
                    var16 = var3.isGift;
                    var23 = var3.giftInfoOptions;
                    var18 = var3.baseAnalyticsData;
                    var26 = var3.applicationId;
                    var32 = var3.offerId;
                    var15 = var3.onPurchaseComplete;
                    var8 = var3.onPurchaseError;
                    var21 = var3.orderId;
                    var4 = _closure1_slot15;
                    var3 = var4.isBusy;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0024_ip = 336; continue _fun0024 }
case 337:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 25;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getIsPaymentsBlocked;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    if(var3) { _fun0024_ip = 338; continue _fun0024 }
case 339:
                    var11 = 21;
                    var3 = var5[var11];
                    var19 = var4.bind(var2)(var3);
                    var9 = var19.dispatch;
                    var3 = {};
                    var25 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var25;
                    var25 = var12;
                    var3['productIdentifier'] = var25;
                    var3 = var9.bind(var19)(var3);
                    SaveGenerator(address=231);
case 328:
                    return var3;
case 340:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 341; continue _fun0024 }
case 342: // try_start_0
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var31 = 22;
                    var9 = var9[var31];
                    var19 = var19.bind(var2)(var9);
                    var9 = var19.canMakePayments;
                    var9 = var9.bind(var19)();
                    SaveGenerator(address=274);
case 343:
                    return var9;
case 52:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=18);
                    if(var19) { _fun0024_ip = 344; continue _fun0024 }
case 10:
                    var25 = _closure1_slot14;
                    var19 = var25.hasFetchedSubscriptions;
                    var19 = var19.bind(var25)();
                    if(var19) { _fun0024_ip = 79; continue _fun0024 }
case 191:
                    var25 = _closure1_slot0;
                    var33 = _closure1_slot3;
                    var19 = 18;
                    var19 = var33[var19];
                    var25 = var25.bind(var2)(var19);
                    var19 = var25.fetchSubscriptions;
                    var19 = var19.bind(var25)();
                    SaveGenerator(address=337);
case 141:
                    return var19;
case 345:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 76; continue _fun0024 }
case 6:
                    var25 = global;
                    var34 = var25.Error;
                    var36 = _closure1_slot0;
                    var37 = _closure1_slot3;
                    var25 = 27;
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
case 76: // try_end0
                    return var19;
case 79: // try_start_1
                    var25 = _closure1_slot13;
                    var19 = var25.getCurrentUser;
                    var25 = var19.bind(var25)();
                    var10 = var25;
                    var19 = null;
                    if(!(var19 != var25)) { _fun0024_ip = 346; continue _fun0024 }
case 204:
                    var33 = _closure1_slot0;
                    var25 = _closure1_slot3;
                    var25 = var25[var31];
                    var33 = var33.bind(var2)(var25);
                    var25 = var33.convertToUUID;
                    var10 = var10.id;
                    var13 = var25.bind(var33)(var10);
                    var20 = undefined;
                    var10 = var32;
                    if(!(var19 != var10)) { _fun0024_ip = 172; continue _fun0024 }
case 175:
                    var34 = var12;
                    var33 = var32;
                    var25 = var13;
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
                    var10 = var10.bind(var2)(var34, var33, var25);
                    SaveGenerator(address=523);
case 347:
                    return var10;
case 235:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 308; continue _fun0024 }
case 348:
                    var30 = var10;
                    if(!(var19 != var10)) { _fun0024_ip = 172; continue _fun0024 }
case 349:
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
case 172:
                    var30 = _closure1_slot1;
                    var25 = _closure1_slot3;
                    var25 = var25[var31];
                    var31 = var30.bind(var2)(var25);
                    var30 = var31.purchaseProduct;
                    var25 = var12;
                    var13 = var30.bind(var31)(var25, var20, var13);
                    SaveGenerator(address=645);
case 350:
                    return var13;
case 351:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=19);
                    if(var20) { _fun0024_ip = 306; continue _fun0024 }
case 352:
                    var22 = var13;
                    var20 = var13.jwsRepresentation;
                    var14 = var20;
                    if(!(var19 == var20)) { _fun0024_ip = 165; continue _fun0024 }
case 353:
                    var20 = var22;
                    var31 = var20.transactionReceipt;
                    _fun0024_ip = 161; continue _fun0024;
case 165:
                    var31 = var14;
case 161:
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
                    var20 = var19 == var14;
                    var14 = undefined;
                    if(var20) { _fun0024_ip = 354; continue _fun0024 }
case 355:
                    var14 = var15.bind(var2)();
case 354:
                    SaveGenerator(address=790);
case 356:
                    return var14;
case 357:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0024_ip = 358; continue _fun0024 }
case 359:
                    var25 = _closure1_slot15;
                    var20 = var25.getProduct;
                    var15 = var12;
                    var15 = var20.bind(var25)(var15);
                    var29 = var15;
                    var20 = var19 == var15;
                    var15 = undefined;
                    if(var20) { _fun0024_ip = 360; continue _fun0024 }
case 361:
                    var20 = var29;
                    var15 = var20.price;
case 360:
                    var27 = var15;
                    var15 = var29;
                    var15 = var19 == var15;
                    var25 = undefined;
                    if(var15) { _fun0024_ip = 362; continue _fun0024 }
case 363:
                    var15 = var29;
                    var25 = var15.currencyCode;
case 362:
                    var28 = var25;
                    var20 = _closure1_slot26;
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
                    var30 = var19 == var25;
                    var25 = undefined;
                    if(var30) { _fun0024_ip = 364; continue _fun0024 }
case 365:
                    var25 = var29.countryCode;
case 364:
                    var15['appStoreRegion'] = var25;
                    var15['giftInfoOptions'] = var23;
                    var22 = var22.jwsRepresentation;
                    var15['jwsRepresentation'] = var22;
                    var22 = 'createSubscription';
                    var15['source'] = var22;
                    var15['orderId'] = var21;
                    var15 = var20.bind(var2)(var15);
                    SaveGenerator(address=967);
case 366:
                    return var15;
case 367:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0024_ip = 368; continue _fun0024 }
case 369:
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
                    var20 = _closure1_slot16;
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
                    if(var29) { _fun0024_ip = 370; continue _fun0024 }
case 371:
                    var29 = var28;
                    var28 = var29.toLowerCase;
                    var27 = var28.bind(var29)();
case 370:
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
                    if(var16) { _fun0024_ip = 305; continue _fun0024 }
case 372:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var16 = 18;
                    var16 = var20[var16];
                    var18 = var18.bind(var2)(var16);
                    var16 = var18.fetchSubscriptions;
                    var16 = var16.bind(var18)();
                    SaveGenerator(address=1233);
case 373:
                    return var16;
case 374:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    if(var18) { _fun0024_ip = 375; continue _fun0024 }
case 376:
                    var20 = _closure1_slot14;
                    var18 = var20.getPremiumSubscription;
                    var18 = var18.bind(var20)();
                    _closure4_slot0 = var18;
                    if(!(var19 != var18)) { _fun0024_ip = 377; continue _fun0024 }
case 378:
                    var18 = _closure1_slot12;
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
                                    var5 = arg1;
                                    var _closure8_slot0 = var5;
                                    var4 = _closure1_slot20;
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
                                        var1 = 32;
                                        var3 = var6[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.popWithKey;
                                        var5 = _closure1_slot0;
                                        var2 = 33;
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
                    var17 = var18.bind(var2)(var17);
                    _fun0024_ip = 305; continue _fun0024;
case 377:
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
                    var17 = var17.PjfUXe;
                    var40 = var18.bind(var20)(var17);
                    var18 = var19.prototype;
                    var18 = Object.create(var18, {constructor: {value: var19}});
                    var41 = var18;
                    var17 = new var41[var19](var40, var39);
                    var17 = var17 instanceof Object ? var17 : var18;
                    throw var17;
case 375: // try_end1
                    return var16;
case 305:
                    _fun0024_ip = 336; continue _fun0024;
case 368:
                    return var15;
case 358:
                    return var14;
case 306:
                    return var13;
case 308:
                    return var10;
case 346: // try_start_2
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
                    var10 = var10.PjfUXe;
                    var40 = var13.bind(var15)(var10);
                    var13 = var14.prototype;
                    var13 = Object.create(var13, {constructor: {value: var14}});
                    var41 = var13;
                    var10 = new var41[var14](var40, var39);
                    var10 = var10 instanceof Object ? var10 : var13;
                    throw var10;
case 344: // try_end2
                    return var9;
case 379: // catch_target0 // catch_target1 // catch_target2
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
                    if(!(var9 != var10)) { _fun0024_ip = 380; continue _fun0024 }
case 381:
                    var9 = var8;
                    var8 = var6;
                    var8 = var9.bind(var2)(var8);
case 380:
                    var8 = _closure1_slot28;
                    var7 = var6;
                    var6 = 'subscription';
                    var6 = var8.bind(var2)(var7, var6);
                    _fun0024_ip = 336; continue _fun0024;
case 341:
                    return var3;
case 338:
                    var3 = 26;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.bind(var2)();
case 336:
                    return var2;
case 334:
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
    var12 = function restoreAndApplyPurchases() {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0025_ip = 158; continue _fun0025 }
case 382:
            var3 = false;
case 158:
            var _closure2_slot0 = var3;
            var3 = this;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot8;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0026_ip = 383; continue _fun0026 }
case 335:
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
                        if(var2) { _fun0026_ip = 384; continue _fun0026 }
case 385:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var6 = 21;
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
case 386:
                        return var2;
case 387:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0026_ip = 388; continue _fun0026 }
case 315:
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var4 = 22;
                        var4 = var12[var4];
                        var12 = var8.bind(var5)(var4);
                        var8 = var12.restorePurchases;
                        var4 = {};
                        var13 = _closure2_slot0;
                        var4['fullRestore'] = var13;
                        var4 = var8.bind(var12)(var4);
                        SaveGenerator(address=175);
case 389:
                        return var4;
case 390:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(var8) { _fun0026_ip = 391; continue _fun0026 }
case 392:
                        var7 = var4;
                        var8 = var4.length;
                        var13 = 0;
                        if(!(var13 !== var8)) { _fun0026_ip = 393; continue _fun0026 }
case 69:
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var8 = 23;
                        var8 = var14[var8];
                        var8 = var12.bind(var5)(var8);
                        var12 = var8.bind(var5)(var7);
                        var8 = var12.uniqBy;
                        var7 = function(arg1) {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.purchaseResponse;
                                var1 = var1.jwsRepresentation;
                                var3 = null;
                                if(!(var3 == var1)) { _fun0027_ip = 33; continue _fun0027 }
case 394:
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
                                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                    StartGenerator();
                                    var5 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0028_ip = 170; continue _fun0028 }
case 102:
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
                                    if(!(var5 == var11)) { _fun0028_ip = 395; continue _fun0028 }
case 146:
                                    var7 = var4;
                                    var11 = var7.transactionReceipt;
case 395:
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
case 312: // try_start_0
                                    var7 = _closure1_slot26;
                                    var6 = {};
                                    var8 = var4;
                                    var11 = var8.jwsRepresentation;
                                    var6['jwsRepresentation'] = var11;
                                    var8 = var8.transactionReceipt;
                                    var6['encodedReceipt'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0028_ip = 20; continue _fun0028 }
case 121:
                                    var11 = var9;
                                    var8 = var11.currencyCode;
case 20:
                                    var6['presentmentCurrency'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0028_ip = 396; continue _fun0028 }
case 90:
                                    var11 = var9;
                                    var8 = var11.price;
case 396:
                                    var6['presentmentAmount'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0028_ip = 397; continue _fun0028 }
case 398:
                                    var8 = var9.countryCode;
case 397:
                                    var6['appStoreRegion'] = var8;
                                    var8 = {};
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0028_ip = 343; continue _fun0028 }
case 399:
                                    var11 = var10;
                                    var9 = var11.gift_style;
case 343:
                                    var8['gift_style'] = var9;
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0028_ip = 400; continue _fun0028 }
case 25:
                                    var9 = var10.reward_sku_ids;
case 400:
                                    var8['reward_sku_ids'] = var9;
                                    var6['giftInfoOptions'] = var8;
                                    var8 = 'restoreSubscription';
                                    var6['source'] = var8;
                                    var8 = _closure2_slot0;
                                    var6['skipDupCheck'] = var8;
                                    var7 = var7.bind(var2)(var6);
                                    var6 = var7.then;
                                    var3 = function(arg1) {
                                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                            var3 = arg1;
                                            var2 = _closure1_slot0;
                                            var5 = _closure1_slot3;
                                            var1 = 20;
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
                                            if(!(var1 != var3)) { _fun0029_ip = 401; continue _fun0029 }
case 402:
                                            var5 = _closure1_slot1;
                                            var7 = _closure1_slot3;
                                            var4 = 21;
                                            var4 = var7[var4];
                                            var6 = var5.bind(var6)(var4);
                                            var5 = var6.dispatch;
                                            var4 = {};
                                            var7 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                            var4['type'] = var7;
                                            var7 = _closure6_slot2;
                                            var4['key'] = var7;
                                            var4 = var5.bind(var6)(var4);
case 401:
                                            var3 = var1 != var3;
                                            var1 = null;
                                            if(!var3) { _fun0029_ip = 101; continue _fun0029 }
case 339:
                                            var1 = _closure6_slot0;
case 101:
                                            return var1;
                                        }
                                    };
                                    var3 = var6.bind(var7)(var3);
                                    SaveGenerator(address=351);
case 403:
                                    return var3;
case 404:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0028_ip = 405; continue _fun0028 }
case 200:
                                    if(!(var5 != var3)) { _fun0028_ip = 406; continue _fun0028 }
case 332:
                                    var6 = _closure4_slot0;
                                    var5 = var6.push;
                                    var4 = var5.bind(var6)(var4);
case 406: // try_end0
                                    _fun0028_ip = 407; continue _fun0028;
case 405:
                                    return var3;
case 408: // catch_target0
                                    CatchBlockStart(arg_register=4);
                                    var4 = _closure4_slot1;
                                    var3 = var4.push;
                                    var3 = var3.bind(var4)(var5);
case 407:
                                    return var2;
case 170:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var7 = _closure1_slot24;
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
                        if(var7) { _fun0026_ip = 409; continue _fun0026 }
case 410:
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
case 411:
                        var20 = var25;
                        var20 = var26.bind(var21)(var20);
                        var29 = var20;
                        var28 = var12;
                        var22 = ensureObject(var29, var28);
                        var7 = var20;
                        var22 = var20.done;
                        if(var22) { _fun0026_ip = 208; continue _fun0026 }
case 412: // try_start_0
                        var22 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 413:
                        return var20;
case 414: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=21);
                        var29 = var21;
                        var28 = var14;
                        var20 = getMethod(var29, var28);
                        if(!(var20 !== var5)) { _fun0026_ip = 184; continue _fun0026 }
case 415:
                        var20 = var20.bind(var21)(var22);
                        var29 = var20;
                        var28 = var15;
                        var22 = ensureObject(var29, var28);
                        var22 = var20.done;
                        if(var22) { _fun0026_ip = 416; continue _fun0026 }
case 250:
                        var22 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 254:
                        return var20;
case 417: // try_start_1
                        ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                        var25 = var22;
                        var23 = var24;
                        if(!var23) { _fun0026_ip = 411; continue _fun0026 }
case 46:
                        var25 = var22;
case 418: // try_end1
                        var28 = 'return';
                        var29 = var21;
                        var27 = getMethod(var29, var28);
                        if(!(var27 !== var5)) { _fun0026_ip = 225; continue _fun0026 }
case 419:
                        var23 = var25;
                        var23 = var27.bind(var21)(var23);
                        var28 = 'iterator.return() did not return an object';
                        var29 = var23;
                        var27 = ensureObject(var29, var28);
                        var27 = var23.done;
                        if(var27) { _fun0026_ip = 420; continue _fun0026 }
case 421:
                        var27 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 422:
                        return var23;
case 420:
                        var23 = var23.value;
case 423: // try_end2 // try_end5
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
case 225:
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
case 416: // try_start_3 // try_start_6
                        var7 = var20;
                        _fun0026_ip = 208; continue _fun0026;
case 184:
                        var28 = 'return';
                        var29 = var21;
                        var20 = getMethod(var29, var28);
                        if(!(var20 !== var5)) { _fun0026_ip = 424; continue _fun0026 }
case 352:
                        var29 = var20.bind(var21)();
                        var28 = 'iterator.return() did not return an object';
                        var20 = ensureObject(var29, var28);
case 424:
                        var29 = 'yield* delegate must have a .throw() method';
                        var20 = throwTypeError(var29);
                        throw var5;
case 208:
                        var7 = var7.value;
                        var7 = var19;
                        var7 = var7.bind(var5)();
                        var17 = var7;
                        var7 = var7.done;
                        if(!var7) { _fun0026_ip = 410; continue _fun0026 }
case 409:
                        var7 = var11;
                        var7 = var7.length;
                        if(!(var7 > var13)) { _fun0026_ip = 425; continue _fun0026 }
case 426:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var7 = 18;
                        var7 = var14[var7];
                        var12 = var12.bind(var5)(var7);
                        var7 = var12.fetchSubscriptions;
                        var7 = var7.bind(var12)();
                        SaveGenerator(address=752);
case 427:
                        return var7;
case 428:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                        if(var12) { _fun0026_ip = 429; continue _fun0026 }
case 425:
                        var12 = var10;
                        var12 = var12.length;
                        if(!(!(var12 > var13))) { _fun0026_ip = 430; continue _fun0026 }
case 431: // try_end3 // try_end6
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
case 430: // try_start_4 // try_start_7
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
case 429: // try_end4 // try_end7
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
case 393:
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
case 391:
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
case 388:
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
case 432: // try_start_8 // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=1);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.captureBillingException;
                        var4 = var4.bind(var7)(var2);
                        throw var2;
case 433: // try_end8 // catch_target5 // catch_target6 // catch_target7 // catch_target8
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
case 384:
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
    var7['restoreAndApplyPurchases'] = var12;
    var12 = var8.Set;
    var8 = 20;
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
    var8 = 45;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'actions/native/BillingActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['getIAPJWTRequestData'] = var6;
    var3['updateAppleSubscription'] = var5;
    var5 = function cancelGenericSubscription(arg1, arg2, arg3) {
        var1 = undefined;
        var4 = _closure1_slot37;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelGenericSubscription'] = var5;
    var3['isValidCurrency'] = var4;
    var4 = function createGenericSubscription(arg1) {
        var1 = undefined;
        var4 = _closure1_slot39;
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
        var4 = _closure1_slot40;
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
        var4 = _closure1_slot41;
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
        var4 = _closure1_slot43;
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
        var4 = _closure1_slot44;
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