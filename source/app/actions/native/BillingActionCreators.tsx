// app/actions/native/BillingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var12 = metroImportDefault;
    var10 = metroImportAll;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var10;
    var _closure1_slot3 = var9;
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
            var9 = _closure1_slot24;
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
            var7 = _closure1_slot24;
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
    var _closure1_slot23 = var1;
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
    var _closure1_slot24 = var1;
    var11 = function applyAppleReceipt(arg1) {
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
            var1 = _closure1_slot20;
            var1 = var6.bind(var19)(var1);
            if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 43:
            if(!(var1 === var3)) { _fun0004_ip = 21; continue _fun0004 }
case 44:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)(var20);
            _fun0004_ip = 45; continue _fun0004;
case 21:
            var6 = true;
            var3 = var6 !== var12;
            if(var3) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var4 = var20 != var13;
            if(!var4) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var21 = var20 == var13;
            var19 = undefined;
            if(var21) { _fun0004_ip = 24; continue _fun0004 }
case 50:
            var19 = var13.gift_style;
case 24:
            var4 = var20 != var19;
case 48:
            var3 = var4;
case 46:
            if(var3) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var4 = _closure1_slot1;
            var19 = _closure1_slot3;
            var3 = 15;
            var3 = var19[var3];
            var20 = var4.bind(var5)(var3);
            var19 = var20.track;
            var3 = _closure1_slot15;
            var4 = var3.GIFT_INFO_OPTIONS_MISSING;
            var3 = {};
            var3['source'] = var11;
            var3['sku_id'] = var17;
            var3 = var19.bind(var20)(var4, var3);
case 51:
            var4 = _closure1_slot0;
            var19 = _closure1_slot3;
            var3 = 16;
            var3 = var19[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {};
            var8 = _closure1_slot17;
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
    var _closure1_slot25 = var11;
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
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function handlePurchaseException(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot22;
            var3 = var4.has;
            var2 = var1.code;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var2 = var1.message;
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var3 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var3 = 34;
            var3 = var5[var3];
            var10 = undefined;
            var4 = var4.bind(var10)(var3);
            var3 = var4.getUnderlyingIOSError;
            var5 = var3.bind(var4)(var1);
            var7 = null;
            if(!(var7 == var5)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
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
            var3 = var3.PjfUXe;
            var12 = var4.bind(var8)(var3);
            var4 = var1.name;
            var3 = 'HTTPResponseError';
            var8 = var12;
            if(!(var3 !== var4)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var3 = 'status';
            var3 = var3 in var1;
            if(!var3) { _fun0006_ip = 67; continue _fun0006 }
case 16:
            var3 = 'method';
            var3 = var3 in var1;
            var8 = var12;
            if(var3) { _fun0006_ip = 65; continue _fun0006 }
case 67:
            var3 = var1.message;
            if(var3) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var3 = var12;
case 68:
            var8 = var3;
case 65:
            var3 = var1.body;
            var9 = var8;
            if(!(var7 != var3)) { _fun0006_ip = 52; continue _fun0006 }
case 70:
            var3 = var1.body;
            var4 = var3.apple_error_code;
            var9 = var8;
            if(!(var7 != var4)) { _fun0006_ip = 52; continue _fun0006 }
case 71:
            var15 = var3.apple_error_code;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var18 = '';
            var16 = ' (code: ';
            var14 = ')';
            var17 = var12;
            var9 = var18[var7](var17, var16, var15, var14, var13);
case 52:
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
            var8 = _closure1_slot21;
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
    var _closure1_slot27 = var1;
    var1 = function canMakeIAPRequest() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot14;
            var1 = var2.isBusy;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(!var1) { _fun0007_ip = 72; continue _fun0007 }
case 31:
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
            if(var2) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 26;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var2 = false;
case 73:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function clearAndMakeIAPRequest(arg1, arg2, arg3, arg4) {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _clearAndMakeIAPRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 75; continue _fun0008 }
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
case 76: // try_start_0 // try_start_1
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var3 = 20;
                    var3 = var21[var3];
                    var20 = var20.bind(var6)(var3);
                    var3 = var20.clearTransactionIOS;
                    var3 = var3.bind(var20)();
                    SaveGenerator(address=81);
case 77:
                    return var3;
case 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=19);
                    if(var20) { _fun0008_ip = 79; continue _fun0008 }
case 74:
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
                    if(var13) { _fun0008_ip = 80; continue _fun0008 }
case 81:
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
                    if(var20) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                    var20 = var19;
                    var19 = var20.toString;
                    var16 = var19.bind(var20)();
case 82:
                    var18 = var16;
                    if(!(var10 == var16)) { _fun0008_ip = 84; continue _fun0008 }
case 70:
                    var16 = var15;
                    _fun0008_ip = 85; continue _fun0008;
case 84:
                    var16 = var18;
case 85:
                    var13['original_transaction_id'] = var16;
                    var16 = var12;
                    var16 = var16.purchaseResponse;
                    var16 = var16.originalTransactionDate;
                    var17 = var16;
                    if(!(var10 == var16)) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                    var16 = var14;
                    _fun0008_ip = 88; continue _fun0008;
case 86:
                    var16 = var17;
case 88:
                    var13['original_transaction_date'] = var16;
                    var13['transaction_id'] = var15;
                    var13['transaction_date'] = var14;
                    var7 = var13;
case 89: // try_end0 // try_end1
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
                    var24 = var7;
                    var25 = var13;
                    var17 = copyDataProperties(var25, var24);
                    var13 = var15.bind(var16)(var14, var13);
                    return var12;
case 80:
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
                    var24 = var7;
                    var25 = var12;
                    var16 = copyDataProperties(var25, var24);
                    var12 = var14.bind(var15)(var13, var12);
                    return var11;
case 79:
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
                    var24 = var7;
                    var25 = var4;
                    var14 = copyDataProperties(var25, var24);
                    var4 = var12.bind(var13)(var11, var4);
                    return var3;
case 90: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var3 = {};
                    var4 = var4.code;
                    var5 = var4;
                    var10 = var10 == var4;
                    var4 = undefined;
                    if(var10) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    var10 = var5;
                    var5 = var10.toString;
                    var4 = var5.bind(var10)();
case 91:
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
case 93: // try_end2 // catch_target1 // catch_target2
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
                    var24 = var7;
                    var25 = var3;
                    var7 = copyDataProperties(var25, var24);
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var5 = function getIAPJWTRequestData(arg1) {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var5;
    var1 = function _getIAPJWTRequestData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var _closure4_slot0 = var5;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 35;
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
                    var8 = 36;
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
                            var8 = 37;
                            var3 = var3[var8];
                            var9 = undefined;
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0010_ip = 96; continue _fun0010 }
case 97:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = 38;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.CREATE;
                            if(!(var4 !== var3)) { _fun0010_ip = 96; continue _fun0010 }
case 55:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.APBRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                            var3 = _closure4_slot0;
                            var4 = var3.operation;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var9)(var3);
                            var3 = var3.ACRequestOperations;
                            var3 = var3.CHARGE;
                            if(!(var4 !== var3)) { _fun0010_ip = 98; continue _fun0010 }
case 20:
                            var3 = {};
                            var12 = _closure4_slot0;
                            var13 = var3;
                            var4 = copyDataProperties(var13, var12);
                            var4 = var3;
                            _fun0010_ip = 100; continue _fun0010;
case 98:
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
                            if(!(var6 != var10)) { _fun0010_ip = 101; continue _fun0010 }
case 10:
                            var6 = global;
                            var8 = var6.JSON;
                            var6 = var8.stringify;
                            var6 = var6.bind(var8)(var10);
                            var3['gift_info_options'] = var6;
case 101:
                            var4 = var3;
                            if(!var5) { _fun0010_ip = 100; continue _fun0010 }
case 102:
                            var3['is_gift'] = var5;
                            var4 = var3;
                            _fun0010_ip = 100; continue _fun0010;
case 96:
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
case 100:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 39;
                            var1 = var3[var1];
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 103; continue _fun0010 }
case 105:
                            var6 = var7.request_data;
case 103:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0010_ip = 106; continue _fun0010 }
case 107:
                            var5 = var6;
case 106:
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
case 108:
                    return var2;
case 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                    var3 = {};
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.stringify;
                    var4 = var2.body;
                    var4 = var4.request_data;
                    var4 = var5.bind(var6)(var4);
                    var3['requestJSONString'] = var4;
                    return var3;
case 110:
                    return var2;
case 94:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var4 = function updateAppleSubscription(arg1) {
        var1 = undefined;
        var4 = _closure1_slot34;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var4;
    var1 = function _updateAppleSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 112; continue _fun0011 }
case 95:
                    var _closure4_slot0 = var6;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 35;
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
                    var8 = 36;
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
                            var1 = 39;
                            var1 = var3[var1];
                            var9 = undefined;
                            var3 = var2.bind(var9)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0012_ip = 113; continue _fun0012 }
case 115:
                            var6 = var7.request_data;
case 113:
                            var7 = var5 != var6;
                            var5 = '';
                            if(!var7) { _fun0012_ip = 64; continue _fun0012 }
case 116:
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
case 117:
                    return var2;
case 118:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 119; continue _fun0011 }
case 120:
                    return var3;
case 119:
                    return var2;
case 112:
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
    var1 = function determineProductId(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 37;
            var2 = var2[var6];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CREATE;
            if(!(var2 !== var4)) { _fun0013_ip = 121; continue _fun0013 }
case 122:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CANCEL;
            if(!(var2 !== var4)) { _fun0013_ip = 121; continue _fun0013 }
case 113:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.RESUBSCRIBE;
            if(!(var2 !== var4)) { _fun0013_ip = 121; continue _fun0013 }
case 72:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.REACTIVATE;
            if(!(var2 !== var4)) { _fun0013_ip = 121; continue _fun0013 }
case 123:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.APBRequestOperations;
            var2 = var2.CHARGE;
            if(!(var2 !== var4)) { _fun0013_ip = 124; continue _fun0013 }
case 125:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 38;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CREATE;
            if(!(var2 !== var4)) { _fun0013_ip = 126; continue _fun0013 }
case 127:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CANCEL;
            if(!(var2 !== var4)) { _fun0013_ip = 126; continue _fun0013 }
case 128:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.REACTIVATE;
            if(!(var2 !== var4)) { _fun0013_ip = 126; continue _fun0013 }
case 129:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ACRequestOperations;
            var2 = var2.CHARGE;
            if(!(var2 !== var4)) { _fun0013_ip = 130; continue _fun0013 }
case 131:
            var2 = global;
            var5 = var2.Error;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var7 = 'Invalid operation';
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            throw var2;
case 130:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_CONSUMABLE;
            return var2;
case 126:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_SUBSCRIPTION;
            return var2;
case 124:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ProductIds;
            var2 = var2.GENERIC_CONSUMABLE;
            return var2;
case 121:
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
    var _closure1_slot35 = var1;
    var1 = function _cancelGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 132; continue _fun0014 }
case 53:
                    var11 = arg1;
                    var8 = arg2;
                    var3 = arg3;
                    var6 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    var2 = _closure1_slot28;
                    var2 = var2.bind(var6)();
                    if(var2) { _fun0014_ip = 76; continue _fun0014 }
case 133:
                    var2 = false;
                    return var2;
case 76:
                    var2 = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    if(var2) { _fun0014_ip = 134; continue _fun0014 }
case 135:
                    var2 = 37;
                    var2 = var9[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.APBRequestOperations;
                    var5 = var2.CANCEL;
                    _fun0014_ip = 136; continue _fun0014;
case 134:
                    var2 = 38;
                    var2 = var9[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.ACRequestOperations;
                    var5 = var2.CANCEL;
case 136:
                    var12 = var5;
                    var2 = _closure1_slot35;
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
case 137:
                    return var2;
case 138:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 139; continue _fun0014 }
case 140: // try_start_0
                    var7 = _closure1_slot33;
                    var5 = {};
                    var5['operation'] = var12;
                    var5['request_identifier'] = var11;
                    var5['subscription_id'] = var8;
                    var5 = var7.bind(var6)(var5);
                    SaveGenerator(address=213);
case 141:
                    return var5;
case 142:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0014_ip = 143; continue _fun0014 }
case 70:
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
case 128: // try_end0
                    var7 = true;
                    return var7;
case 143:
                    return var5;
case 144: // catch_target0
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
                    var4 = _closure1_slot27;
                    var7 = var3;
                    var3 = 'partner_subscription';
                    if(!var7) { _fun0014_ip = 145; continue _fun0014 }
case 146:
                    var3 = 'advanced_commerce';
case 145:
                    var3 = var4.bind(var6)(var5, var3);
                    var3 = false;
                    return var3;
case 139:
                    return var2;
case 132:
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
    var _closure1_slot37 = var1;
    var1 = function _createGenericSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 147; continue _fun0015 }
case 148:
                    var8 = var2.requestIdentifier;
                    var9 = var2.items;
                    var17 = var2.currency;
                    var16 = var2.countryCode;
                    var7 = undefined;
                    var4 = undefined;
                    var11 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=54);
case 149:
                    return var7;
case 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 151; continue _fun0015 }
case 114:
                    var3 = _closure1_slot28;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0015_ip = 152; continue _fun0015 }
case 115:
                    var3 = false;
                    return var3;
case 152:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var3 = 40;
                    var3 = var12[var3];
                    var3 = var10.bind(var7)(var3);
                    var12 = var3.ACOMSubscriptionExperiment;
                    var10 = var12.getConfig;
                    var3 = {};
                    var13 = 'createGenericSubscription';
                    var3['location'] = var13;
                    var3 = var10.bind(var12)(var3);
                    var3 = var3.enabled;
                    var10 = null;
                    if(!(var10 != var6)) { _fun0015_ip = 153; continue _fun0015 }
case 154:
                    var3 = var6;
case 153:
                    var4 = var3;
                    var6 = _closure1_slot35;
                    var12 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    if(var3) { _fun0015_ip = 94; continue _fun0015 }
case 14:
                    var3 = 37;
                    var3 = var18[var3];
                    var3 = var12.bind(var7)(var3);
                    var3 = var3.APBRequestOperations;
                    var3 = var3.CREATE;
                    _fun0015_ip = 142; continue _fun0015;
case 94:
                    var10 = 38;
                    var10 = var18[var10];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ACRequestOperations;
                    var3 = var10.CREATE;
case 142:
                    var18 = var6.bind(var7)(var3);
                    var11 = var18;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var10 = 21;
                    var3 = var3[var10];
                    var12 = var6.bind(var7)(var3);
                    var6 = var12.dispatch;
                    var3 = {};
                    var19 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var19;
                    var3['productIdentifier'] = var18;
                    var3 = var6.bind(var12)(var3);
                    SaveGenerator(address=272);
case 12:
                    return var3;
case 46:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 155; continue _fun0015 }
case 156: // try_start_0
                    var12 = _closure1_slot37;
                    var6 = var17;
                    var6 = var12.bind(var7)(var6);
                    if(var6) { _fun0015_ip = 80; continue _fun0015 }
case 157:
                    var6 = global;
                    var18 = var6.Error;
                    var20 = var17;
                    var6 = var6.HermesInternal;
                    var19 = var6.concat;
                    var12 = "Unable to create subscription with invalid currency '";
                    var6 = "' ";
                    var24 = var19.bind(var12)(var20, var6);
                    var12 = var18.prototype;
                    var12 = Object.create(var12, {constructor: {value: var18}});
                    var25 = var12;
                    var6 = new var25[var18](var24, var23);
                    var6 = var6 instanceof Object ? var6 : var12;
                    throw var6;
case 80:
                    var6 = {};
                    var12 = var8;
                    var6['request_identifier'] = var12;
                    var18 = var9;
                    var12 = var18.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.planId;
                        var1['plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var9 = var12.bind(var18)(var9);
                    var6['items'] = var9;
                    var9 = var17;
                    var6['currency'] = var9;
                    var9 = var16;
                    var6['country_code'] = var9;
                    var14 = var6;
                    var9 = _closure1_slot31;
                    var6 = var4;
                    var12 = {};
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    if(var6) { _fun0015_ip = 158; continue _fun0015 }
case 159:
                    var6 = 37;
                    var6 = var20[var6];
                    var6 = var19.bind(var7)(var6);
                    var6 = var6.APBRequestOperations;
                    var6 = var6.CREATE;
                    var12['operation'] = var6;
                    var23 = var14;
                    var24 = var12;
                    var6 = copyDataProperties(var24, var23);
                    var6 = var12;
                    _fun0015_ip = 61; continue _fun0015;
case 158:
                    var18 = 38;
                    var18 = var20[var18];
                    var18 = var19.bind(var7)(var18);
                    var18 = var18.ACRequestOperations;
                    var18 = var18.CREATE;
                    var12['operation'] = var18;
                    var23 = var14;
                    var24 = var12;
                    var14 = copyDataProperties(var24, var23);
                    var6 = var12;
case 61:
                    var6 = var9.bind(var7)(var6);
                    SaveGenerator(address=527);
case 160:
                    return var6;
case 161:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0015_ip = 162; continue _fun0015 }
case 163:
                    var23 = var6.requestJSONString;
                    var14 = _closure1_slot29;
                    var24 = var8;
                    var22 = var11;
                    var21 = var4;
                    var25 = undefined;
                    var8 = var25[var14](var24, var23, var22, var21, var20);
                    SaveGenerator(address=565);
case 164:
                    return var8;
case 165:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0015_ip = 166; continue _fun0015 }
case 167:
                    var14 = var8.purchaseResponse;
                    var15 = var8.originalPurchase;
                    var12 = _closure1_slot25;
                    var9 = {};
                    var18 = var14.transactionReceipt;
                    var9['encodedReceipt'] = var18;
                    var18 = 3;
                    var9['retries'] = var18;
                    var9['presentmentCurrency'] = var17;
                    var9['appStoreRegion'] = var16;
                    var14 = var14.jwsRepresentation;
                    var9['jwsRepresentation'] = var14;
                    var9['source'] = var13;
                    var9 = var12.bind(var7)(var9);
                    SaveGenerator(address=645);
case 168:
                    return var9;
case 169:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 170; continue _fun0015 }
case 171:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 20;
                    var12 = var14[var12];
                    var14 = var13.bind(var7)(var12);
                    var13 = var14.finishTransaction;
                    var12 = {};
                    var12['purchase'] = var15;
                    var12 = var13.bind(var14)(var12);
                    SaveGenerator(address=693);
case 172:
                    return var12;
case 173:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(var13) { _fun0015_ip = 174; continue _fun0015 }
case 175:
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
case 176: // try_end0
                    var13 = true;
                    return var13;
case 174:
                    return var12;
case 170:
                    return var9;
case 166:
                    return var8;
case 162:
                    return var6;
case 177: // catch_target0
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
                    var5 = _closure1_slot27;
                    var8 = var4;
                    var4 = 'partner_subscription';
                    if(!var8) { _fun0015_ip = 178; continue _fun0015 }
case 179:
                    var4 = 'advanced_commerce';
case 178:
                    var4 = var5.bind(var7)(var6, var4);
                    var4 = false;
                    return var4;
case 155:
                    return var3;
case 151:
                    return var2;
case 147:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
                    if(var3) { _fun0016_ip = 180; continue _fun0016 }
case 181:
                    var8 = var2.requestIdentifier;
                    var6 = var2.subscriptionId;
                    var4 = arg2;
                    var7 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=40);
case 182:
                    return var7;
case 183:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 184; continue _fun0016 }
case 5:
                    var3 = _closure1_slot28;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0016_ip = 185; continue _fun0016 }
case 114:
                    var3 = false;
                    return var3;
case 185:
                    var3 = {};
                    var9 = var8;
                    var3['request_identifier'] = var9;
                    var3['subscription_id'] = var6;
                    var12 = var3;
                    var6 = _closure1_slot35;
                    var3 = var4;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    if(var3) { _fun0016_ip = 186; continue _fun0016 }
case 187:
                    var3 = 37;
                    var3 = var13[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.APBRequestOperations;
                    var3 = var3.REACTIVATE;
                    _fun0016_ip = 188; continue _fun0016;
case 186:
                    var9 = 38;
                    var9 = var13[var9];
                    var9 = var10.bind(var7)(var9);
                    var9 = var9.ACRequestOperations;
                    var3 = var9.REACTIVATE;
case 188:
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
case 141:
                    return var3;
case 142:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 189; continue _fun0016 }
case 190: // try_start_0
                    var6 = var4;
                    if(var6) { _fun0016_ip = 191; continue _fun0016 }
case 192:
                    var9 = _closure1_slot33;
                    var6 = {};
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 37;
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
case 193:
                    return var6;
case 194:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(!var9) { _fun0016_ip = 195; continue _fun0016 }
case 129: // try_end0
                    return var6;
case 191: // try_start_1
                    var9 = _closure1_slot31;
                    var6 = {};
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 38;
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
case 196:
                    return var6;
case 197:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0016_ip = 198; continue _fun0016 }
case 199:
                    var19 = var6.requestJSONString;
                    var13 = _closure1_slot29;
                    var20 = var8;
                    var18 = var11;
                    var17 = true;
                    var21 = undefined;
                    var8 = var21[var13](var20, var19, var18, var17, var16);
                    SaveGenerator(address=401);
case 200:
                    return var8;
case 201:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0016_ip = 202; continue _fun0016 }
case 203:
                    var13 = var8.purchaseResponse;
                    var15 = var8.originalPurchase;
                    var12 = _closure1_slot25;
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
case 204:
                    return var9;
case 205:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0016_ip = 206; continue _fun0016 }
case 207:
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
case 208:
                    return var12;
case 160:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(var13) { _fun0016_ip = 209; continue _fun0016 }
case 195:
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
case 210: // try_end1
                    var13 = true;
                    return var13;
case 209:
                    return var12;
case 206:
                    return var9;
case 202:
                    return var8;
case 198:
                    return var6;
case 211: // catch_target0 // catch_target1
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
                    var5 = _closure1_slot27;
                    var8 = var4;
                    var4 = 'partner_subscription';
                    if(!var8) { _fun0016_ip = 212; continue _fun0016 }
case 75:
                    var4 = 'advanced_commerce';
case 212:
                    var4 = var5.bind(var7)(var6, var4);
                    var4 = false;
                    return var4;
case 189:
                    return var3;
case 184:
                    return var2;
case 180:
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
                    if(var2) { _fun0017_ip = 213; continue _fun0017 }
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
case 115:
                    return var2;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0017_ip = 214; continue _fun0017 }
case 215:
                    var4 = new Array(0);
                    var6 = var2.length;
                    var8 = 0;
                    if(!(var8 !== var6)) { _fun0017_ip = 216; continue _fun0017 }
case 217:
                    var6 = _closure1_slot23;
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
                    if(var6) { _fun0017_ip = 218; continue _fun0017 }
case 118:
                    var6 = var16;
                    var6 = var6.value;
                    var6 = var6.purchaseResponse;
                    var18 = var6;
                    var19 = var6.productIdentifier;
                    var23 = var6.transactionIdentifier;
                    var6 = var23.toString;
                    var20 = var6.bind(var23)();
case 125: // try_start_0
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
                    var23 = _closure1_slot25;
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
case 219:
                    return var6;
case 220:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=22);
                    if(var23) { _fun0017_ip = 221; continue _fun0017 }
case 222:
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
case 201:
                    return var23;
case 223:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(var24) { _fun0017_ip = 121; continue _fun0017 }
case 224:
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
case 225: // try_end0
                    _fun0017_ip = 226; continue _fun0017;
case 121:
                    return var23;
case 221:
                    return var6;
case 158: // catch_target0
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
                    if(var27) { _fun0017_ip = 227; continue _fun0017 }
case 228:
                    var28 = var21;
                    var27 = var28.toString;
                    var24 = var27.bind(var28)();
case 227:
                    var6['error_code'] = var24;
                    var24 = var22;
                    var27 = var24.message;
                    var6['error_message'] = var27;
                    var6 = var25.bind(var26)(var23, var6);
                    var23 = var4;
                    var6 = var23.push;
                    var6 = var6.bind(var23)(var24);
case 226:
                    var6 = var17;
                    var6 = var6.bind(var7)();
                    var16 = var6;
                    var6 = var6.done;
                    if(!var6) { _fun0017_ip = 118; continue _fun0017 }
case 218:
                    var6 = var4;
                    var6 = var6.length;
                    if(!(!(var6 > var8))) { _fun0017_ip = 229; continue _fun0017 }
case 230:
                    var6 = true;
                    return var6;
case 229:
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
case 216:
                    var3 = true;
                    return var3;
case 214:
                    return var2;
case 213:
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
    var1 = function _mobilePurchaseSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 231; continue _fun0018 }
case 148:
                    var21 = var2.requestIdentifier;
                    var9 = var2.skuId;
                    var28 = var2.currency;
                    var14 = var2.countryCode;
                    var26 = var2.analyticsLocations;
                    var27 = var2.analyticsLoadId;
                    var13 = var2.isGift;
                    var8 = var2.giftInfoOptions;
                    var15 = arg2;
                    var7 = undefined;
                    var18 = undefined;
                    var20 = undefined;
                    var19 = undefined;
                    var31 = undefined;
                    var23 = undefined;
                    var24 = undefined;
                    var25 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=88);
case 9:
                    return var7;
case 215:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 232; continue _fun0018 }
case 64:
                    var3 = _closure1_slot28;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0018_ip = 73; continue _fun0018 }
case 56:
                    var3 = false;
                    return var3;
case 73:
                    var12 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var3 = 40;
                    var3 = var16[var3];
                    var3 = var12.bind(var7)(var3);
                    var16 = var3.ACOMOTPExperiment;
                    var12 = var16.getConfig;
                    var3 = {};
                    var22 = 'mobilePurchaseSKU';
                    var3['location'] = var22;
                    var3 = var12.bind(var16)(var3);
                    var3 = var3.enabled;
                    var16 = null;
                    if(!(var16 != var11)) { _fun0018_ip = 16; continue _fun0018 }
case 233:
                    var3 = var11;
case 16:
                    var18 = var3;
                    var11 = _closure1_slot35;
                    var17 = _closure1_slot0;
                    var29 = _closure1_slot3;
                    if(var3) { _fun0018_ip = 234; continue _fun0018 }
case 235:
                    var3 = 37;
                    var3 = var29[var3];
                    var3 = var17.bind(var7)(var3);
                    var3 = var3.APBRequestOperations;
                    var3 = var3.CHARGE;
                    _fun0018_ip = 23; continue _fun0018;
case 234:
                    var12 = 38;
                    var12 = var29[var12];
                    var12 = var17.bind(var7)(var12);
                    var12 = var12.ACRequestOperations;
                    var3 = var12.CHARGE;
case 23:
                    var29 = var11.bind(var7)(var3);
                    var20 = var29;
                    var12 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var11 = 21;
                    var3 = var3[var11];
                    var17 = var12.bind(var7)(var3);
                    var12 = var17.dispatch;
                    var3 = {};
                    var30 = 'IAP_PURCHASE_PRODUCT_START';
                    var3['type'] = var30;
                    var3['productIdentifier'] = var29;
                    var3 = var12.bind(var17)(var3);
                    SaveGenerator(address=306);
case 236:
                    return var3;
case 237:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(var12) { _fun0018_ip = 238; continue _fun0018 }
case 239:
                    var17 = _closure1_slot0;
                    var29 = _closure1_slot3;
                    var12 = 41;
                    var12 = var29[var12];
                    var29 = var17.bind(var7)(var12);
                    var17 = var29.trackPaymentFlowStartedAnalyticsAndCTP;
                    var12 = {};
                    var30 = var9;
                    var12['sku_id'] = var30;
                    var30 = var27;
                    var12['load_id'] = var30;
                    var30 = var26;
                    var12['location_stack'] = var30;
                    var30 = _closure1_slot18;
                    var30 = var30.APPLE_PARTNER;
                    var12['payment_gateway'] = var30;
                    var12 = var17.bind(var29)(var12);
case 240: // try_start_0
                    var17 = _closure1_slot37;
                    var12 = var28;
                    var12 = var17.bind(var7)(var12);
                    if(var12) { _fun0018_ip = 241; continue _fun0018 }
case 126:
                    var12 = global;
                    var29 = var12.Error;
                    var32 = var28;
                    var12 = var12.HermesInternal;
                    var30 = var12.concat;
                    var17 = "Unable to create subscription with invalid currency '";
                    var12 = "' ";
                    var38 = var30.bind(var17)(var32, var12);
                    var17 = var29.prototype;
                    var17 = Object.create(var17, {constructor: {value: var29}});
                    var39 = var17;
                    var12 = new var39[var29](var38, var37);
                    var12 = var12 instanceof Object ? var12 : var17;
                    throw var12;
case 241:
                    var29 = var28;
                    var17 = var14;
                    var12 = function retryPendingPurchases(arg1, arg2) {
                        var1 = undefined;
                        var4 = _closure1_slot40;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var12 = var12.bind(var7)(var29, var17);
                    SaveGenerator(address=487);
case 242:
                    return var12;
case 243:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=16);
                    if(var17) { _fun0018_ip = 244; continue _fun0018 }
case 245:
                    var17 = {};
                    var29 = var9;
                    var17['sku_id'] = var29;
                    var29 = var21;
                    var17['request_identifier'] = var29;
                    var29 = var28;
                    var17['currency'] = var29;
                    var29 = var14;
                    var17['country_code'] = var29;
                    var29 = var13;
                    var17['is_gift'] = var29;
                    var29 = var8;
                    var17['gift_info_options'] = var29;
                    var31 = var17;
                    var29 = _closure1_slot31;
                    var17 = var18;
                    var30 = {};
                    var33 = _closure1_slot0;
                    var34 = _closure1_slot3;
                    if(var17) { _fun0018_ip = 246; continue _fun0018 }
case 247:
                    var17 = 37;
                    var17 = var34[var17];
                    var17 = var33.bind(var7)(var17);
                    var17 = var17.APBRequestOperations;
                    var17 = var17.CHARGE;
                    var30['operation'] = var17;
                    var37 = var31;
                    var38 = var30;
                    var17 = copyDataProperties(var38, var37);
                    var17 = var30;
                    _fun0018_ip = 248; continue _fun0018;
case 246:
                    var32 = 38;
                    var32 = var34[var32];
                    var32 = var33.bind(var7)(var32);
                    var32 = var32.ACRequestOperations;
                    var32 = var32.CHARGE;
                    var30['operation'] = var32;
                    var37 = var31;
                    var38 = var30;
                    var31 = copyDataProperties(var38, var37);
                    var17 = var30;
case 248:
                    var17 = var29.bind(var7)(var17);
                    SaveGenerator(address=664);
case 249:
                    return var17;
case 250:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=28);
                    if(var29) { _fun0018_ip = 251; continue _fun0018 }
case 252:
                    var37 = var17.requestJSONString;
                    var30 = _closure1_slot29;
                    var38 = var21;
                    var36 = var20;
                    var35 = var18;
                    var39 = undefined;
                    var18 = var39[var30](var38, var37, var36, var35, var34);
                    SaveGenerator(address=702);
case 253:
                    return var18;
case 254:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=20);
                    if(var21) { _fun0018_ip = 255; continue _fun0018 }
case 256:
                    var21 = var18.purchaseResponse;
                    var23 = var21;
                    var24 = var18.originalPurchase;
                    var21 = var21.jwsRepresentation;
                    var19 = var21;
                    if(!(var16 == var21)) { _fun0018_ip = 257; continue _fun0018 }
case 258:
                    var21 = var23;
                    var29 = var21.transactionReceipt;
                    _fun0018_ip = 259; continue _fun0018;
case 257:
                    var29 = var19;
case 259:
                    var21 = _closure1_slot1;
                    var30 = _closure1_slot3;
                    var19 = 13;
                    var19 = var30[var19];
                    var21 = var21.bind(var7)(var19);
                    var19 = var21.v3;
                    var25 = var19.bind(var21)(var29);
                    var19 = var13;
                    if(!var19) { _fun0018_ip = 260; continue _fun0018 }
case 261:
                    var21 = _closure1_slot1;
                    var19 = _closure1_slot3;
                    var19 = var19[var11];
                    var29 = var21.bind(var7)(var19);
                    var21 = var29.dispatch;
                    var19 = {};
                    var30 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    var19['type'] = var30;
                    var30 = var25;
                    var19['key'] = var30;
                    var30 = {};
                    var37 = var8;
                    var38 = var30;
                    var31 = copyDataProperties(var38, var37);
                    var19['giftOptions'] = var30;
                    var19 = var21.bind(var29)(var19);
case 260:
                    var21 = _closure1_slot25;
                    var19 = {};
                    var29 = var23.transactionReceipt;
                    var19['encodedReceipt'] = var29;
                    var29 = 3;
                    var19['retries'] = var29;
                    var19['presentmentCurrency'] = var28;
                    var28 = var14;
                    var19['appStoreRegion'] = var28;
                    var28 = var8;
                    var19['giftInfoOptions'] = var28;
                    var28 = var13;
                    var19['isGift'] = var28;
                    var23 = var23.jwsRepresentation;
                    var19['jwsRepresentation'] = var23;
                    var19['source'] = var22;
                    var19 = var21.bind(var7)(var19);
                    SaveGenerator(address=931);
case 262:
                    return var19;
case 263:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=20);
                    if(var21) { _fun0018_ip = 264; continue _fun0018 }
case 265:
                    var21 = var13;
                    if(!var21) { _fun0018_ip = 266; continue _fun0018 }
case 267:
                    var22 = _closure1_slot1;
                    var21 = _closure1_slot3;
                    var21 = var21[var11];
                    var23 = var22.bind(var7)(var21);
                    var22 = var23.dispatch;
                    var21 = {};
                    var28 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    var21['type'] = var28;
                    var21['key'] = var25;
                    var21 = var22.bind(var23)(var21);
case 266:
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot3;
                    var21 = 20;
                    var21 = var23[var21];
                    var23 = var22.bind(var7)(var21);
                    var22 = var23.finishTransaction;
                    var21 = {};
                    var21['purchase'] = var24;
                    var21 = var22.bind(var23)(var21);
                    SaveGenerator(address=1031);
case 268:
                    return var21;
case 269:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(var22) { _fun0018_ip = 270; continue _fun0018 }
case 271:
                    var23 = _closure1_slot1;
                    var24 = _closure1_slot3;
                    var22 = var24[var11];
                    var28 = var23.bind(var7)(var22);
                    var25 = var28.dispatch;
                    var22 = {};
                    var29 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    var22['type'] = var29;
                    var29 = var20;
                    var22['productIdentifier'] = var29;
                    var22 = var25.bind(var28)(var22);
                    var22 = 15;
                    var22 = var24[var22];
                    var25 = var23.bind(var7)(var22);
                    var24 = var25.track;
                    var22 = _closure1_slot15;
                    var23 = var22.PAYMENT_FLOW_COMPLETED;
                    var22 = {};
                    var28 = var9;
                    var22['sku_id'] = var28;
                    var22['load_id'] = var27;
                    var22['location_stack'] = var26;
                    var26 = _closure1_slot18;
                    var26 = var26.APPLE_PARTNER;
                    var22['payment_gateway'] = var26;
                    var26 = var13;
                    var22['is_gift'] = var26;
                    var22 = var24.bind(var25)(var23, var22);
case 272: // try_end0
                    var22 = true;
                    return var22;
case 270:
                    return var21;
case 264:
                    return var19;
case 255:
                    return var18;
case 251:
                    return var17;
case 244:
                    return var12;
case 273: // catch_target0
                    CatchBlockStart(arg_register=18);
                    var4 = var19;
                    var17 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var11 = var12[var11];
                    var18 = var17.bind(var7)(var11);
                    var17 = var18.dispatch;
                    var11 = {};
                    var21 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    var11['type'] = var21;
                    var11['productIdentifier'] = var20;
                    var11 = var17.bind(var18)(var11);
                    var18 = _closure1_slot0;
                    var11 = 42;
                    var11 = var12[var11];
                    var11 = var18.bind(var7)(var11);
                    var11 = var11.BillingError;
                    var17 = var11.prototype;
                    var17 = Object.create(var17, {constructor: {value: var11}});
                    var39 = var17;
                    var38 = var19;
                    var11 = new var39[var11](var38, var37);
                    var11 = var11 instanceof Object ? var11 : var17;
                    var17 = var11.code;
                    var11 = 43;
                    var12 = var12[var11];
                    var12 = var18.bind(var7)(var12);
                    var12 = var12.ErrorCodes;
                    var12 = var12.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(var17 === var12)) { _fun0018_ip = 274; continue _fun0018 }
case 275:
                    var12 = var15;
                    if(!(var16 == var12)) { _fun0018_ip = 276; continue _fun0018 }
case 277:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var12 = 44;
                    var12 = var17[var12];
                    var12 = var16.bind(var7)(var12);
                    var12 = var12.purchaseSKU;
                    _fun0018_ip = 278; continue _fun0018;
case 276:
                    var12 = var15;
case 278:
                    var10 = var12;
case 279: // try_start_1
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
                    var14 = 45;
                    var14 = var16[var14];
                    var15 = var15.bind(var7)(var14);
                    var14 = var15.v4;
                    var14 = var14.bind(var15)();
                    var9['loadId'] = var14;
                    var9['isGift'] = var13;
                    var9['giftInfoOptions'] = var8;
                    var8 = 'collectibles';
                    var8 = var12.bind(var7)(var8, var10, var9);
                    SaveGenerator(address=1449);
case 280:
                    return var8;
case 281:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0018_ip = 282; continue _fun0018 }
case 283: // try_end1
                    var9 = true;
                    return var9;
case 282:
                    return var8;
case 284: // catch_target1
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var9 = var8.code;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var11];
                    var8 = var10.bind(var7)(var8);
                    var8 = var8.ErrorCodes;
                    var8 = var8.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(var9 === var8)) { _fun0018_ip = 274; continue _fun0018 }
case 285:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 17;
                    var8 = var10[var8];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.captureBillingException;
                    var8 = var6;
                    var6 = {};
                    var6 = var9.bind(var10)(var8, var6);
case 274:
                    var6 = _closure1_slot27;
                    var5 = var4;
                    var4 = 'collectibles';
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = false;
                    return var4;
case 238:
                    return var3;
case 232:
                    return var2;
case 231:
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
    var1 = function _migrateToACOM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 17; continue _fun0019 }
case 53:
                    var2 = _closure1_slot28;
                    var5 = undefined;
                    var2 = var2.bind(var5)();
                    if(var2) { _fun0019_ip = 62; continue _fun0019 }
case 286:
                    var2 = false;
                    return var2;
case 62:
                    var4 = _closure1_slot13;
                    var2 = var4.getActiveGuildSubscriptions;
                    var6 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 == var6)) { _fun0019_ip = 4; continue _fun0019 }
case 287:
                    var6 = new Array(0);
case 4:
                    var4 = var6.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.paymentGateway;
                        var1 = _closure1_slot18;
                        var1 = var1.APPLE_PARTNER;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0019_ip = 288; continue _fun0019 }
case 113: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 16;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var3 = _closure1_slot17;
                    var3 = var3.BILLING_ACOM_SUBSCRIPTION_MIGRATION;
                    var2['url'] = var3;
                    var3 = true;
                    var2['rejectWithError'] = var3;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=145);
case 289:
                    return var2;
case 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0019_ip = 188; continue _fun0019 }
case 117: // try_end0
                    return var3;
case 188:
                    return var2;
case 290: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 288:
                    var2 = false;
                    return var2;
case 17:
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
    var1 = ['items', 'country_code'];
    var _closure1_slot4 = var1;
    var1 = ['sku_id', 'country_code', 'is_gift', 'gift_info_options'];
    var _closure1_slot5 = var1;
    var7 = global;
    var14 = var7.Object;
    var13 = var14.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var12.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var6 = 3;
    var6 = var9[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var10 = var6.setPaymentSuccess;
    var _closure1_slot10 = var10;
    var6 = var6.showOldPaymentFlowSuccess;
    var _closure1_slot11 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var10 = var6.AnalyticEvents;
    var _closure1_slot15 = var10;
    var10 = var6.CurrencyCodes;
    var _closure1_slot16 = var10;
    var10 = var6.Endpoints;
    var _closure1_slot17 = var10;
    var10 = var6.StoreKitErrors;
    var6 = 10;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.PaymentGateways;
    var _closure1_slot18 = var6;
    var6 = 11;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot19 = var6;
    var6 = 'localAppleReceiptHash';
    var _closure1_slot20 = var6;
    var6 = 'BILLING';
    var _closure1_slot21 = var6;
    var6 = 12;
    var6 = var9[var6];
    var13 = var12.bind(var1)(var6);
    var6 = var13.prototype;
    var18 = Object.create(var6, {constructor: {value: var13}});
    var17 = 'BillingActionCreators.tsx';
    var6 = new var18[var13](var17, var16);
    var6 = {};
    var6['applyAppleReceipt'] = var11;
    var11 = 18;
    var12 = var9[var11];
    var12 = var8.bind(var1)(var12);
    var12 = var12.fetchMostRecentSubscription;
    var6['fetchMostRecentSubscription'] = var12;
    var11 = var9[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var11.fetchIpCountryCode;
    var6['fetchIpCountryCode'] = var11;
    var11 = function init() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 66; continue _fun0020 }
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
case 291:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 15; continue _fun0020 }
case 292:
                    var4 = _closure2_slot0;
                    var3 = var4.restoreAndApplyPurchases;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=147);
case 153:
                    return var3;
case 293:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 123; continue _fun0020 }
case 118: // try_end0
                    _fun0020_ip = 14; continue _fun0020;
case 123:
                    return var3;
case 15:
                    return var2;
case 294: // catch_target0
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
    var6['init'] = var11;
    var11 = function connectGenericIap() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 295; continue _fun0021 }
case 53:
                    var5 = undefined;
                    var2 = undefined;
                    var6 = _closure1_slot8;
                    var4 = var6.isGenericIapConnected;
                    var4 = var4.bind(var6)();
                    var2 = var4;
                    if(var4) { _fun0021_ip = 296; continue _fun0021 }
case 297: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 20;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.initConnection;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=76);
case 298:
                    return var4;
case 299:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0021_ip = 300; continue _fun0021 }
case 152:
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
case 301: // try_end0
                    return var4;
case 300:
                    return var4;
case 108: // catch_target0
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
case 296:
                    return var2;
case 295:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['connectGenericIap'] = var11;
    var11 = function disconnectGenericIap() {
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
    var6['disconnectGenericIap'] = var11;
    var11 = function loadProducts(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 302; continue _fun0022 }
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
case 303:
                    return var3;
case 304:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 305; continue _fun0022 }
case 306:
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
                    if(!(var6 != var11)) { _fun0022_ip = 307; continue _fun0022 }
case 188:
                    var8 = _closure2_slot0;
                    _fun0022_ip = 308; continue _fun0022;
case 307:
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var11 = var11.bind(var2)(var4);
                    var4 = var11.fetchStoreFront;
                    var4 = var4.bind(var11)();
                    SaveGenerator(address=191);
case 94:
                    return var4;
case 125:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0022_ip = 309; continue _fun0022 }
case 83:
                    var10 = var4;
                    if(!(var6 == var4)) { _fun0022_ip = 234; continue _fun0022 }
case 65:
                    var6 = {'country': 'US', 'currency': 'usd'};
                    _fun0022_ip = 310; continue _fun0022;
case 234:
                    var6 = var10;
case 310:
                    var8 = var6;
case 308:
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
                    if(!(var10 !== var6)) { _fun0022_ip = 311; continue _fun0022 }
case 220:
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
                    _fun0022_ip = 203; continue _fun0022;
case 311:
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
case 203: // try_end0
                    _fun0022_ip = 312; continue _fun0022;
case 309:
                    return var4;
case 305:
                    return var3;
case 313: // catch_target0
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
case 312:
                    return var2;
case 302:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['loadProducts'] = var11;
    var11 = function createSubscription(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 314; continue _fun0023 }
case 315:
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
                    var4 = _closure1_slot14;
                    var3 = var4.isBusy;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0023_ip = 316; continue _fun0023 }
case 317:
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
                    if(var3) { _fun0023_ip = 318; continue _fun0023 }
case 296:
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
                    SaveGenerator(address=260);
case 319:
                    return var3;
case 320:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0023_ip = 321; continue _fun0023 }
case 48: // try_start_0
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var31 = 22;
                    var9 = var9[var31];
                    var19 = var19.bind(var2)(var9);
                    var9 = var19.canMakePayments;
                    var9 = var9.bind(var19)();
                    SaveGenerator(address=303);
case 322:
                    return var9;
case 323:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=18);
                    if(var19) { _fun0023_ip = 324; continue _fun0023 }
case 220:
                    var25 = _closure1_slot13;
                    var19 = var25.hasFetchedSubscriptions;
                    var19 = var19.bind(var25)();
                    if(var19) { _fun0023_ip = 325; continue _fun0023 }
case 131:
                    var25 = _closure1_slot0;
                    var33 = _closure1_slot3;
                    var19 = 18;
                    var19 = var33[var19];
                    var25 = var25.bind(var2)(var19);
                    var19 = var25.fetchSubscriptions;
                    var19 = var19.bind(var25)();
                    SaveGenerator(address=366);
case 197:
                    return var19;
case 326:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=24);
                    if(var25) { _fun0023_ip = 103; continue _fun0023 }
case 327:
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
case 103: // try_end0
                    return var19;
case 325: // try_start_1
                    var25 = _closure1_slot12;
                    var19 = var25.getCurrentUser;
                    var25 = var19.bind(var25)();
                    var10 = var25;
                    var19 = null;
                    if(!(var19 != var25)) { _fun0023_ip = 328; continue _fun0023 }
case 242:
                    var33 = _closure1_slot0;
                    var25 = _closure1_slot3;
                    var25 = var25[var31];
                    var33 = var33.bind(var2)(var25);
                    var25 = var33.convertToUUID;
                    var10 = var10.id;
                    var13 = var25.bind(var33)(var10);
                    var20 = undefined;
                    var10 = var32;
                    if(!(var19 != var10)) { _fun0023_ip = 329; continue _fun0023 }
case 161:
                    var34 = var12;
                    var33 = var32;
                    var25 = var13;
                    var10 = function getTrialOfferSignature() {
                        var1 = undefined;
                        var4 = _closure1_slot26;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var10 = var10.bind(var2)(var34, var33, var25);
                    SaveGenerator(address=552);
case 330:
                    return var10;
case 331:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=24);
                    if(var25) { _fun0023_ip = 332; continue _fun0023 }
case 333:
                    var30 = var10;
                    if(!(var19 != var10)) { _fun0023_ip = 329; continue _fun0023 }
case 334:
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
case 329:
                    var30 = _closure1_slot1;
                    var25 = _closure1_slot3;
                    var25 = var25[var31];
                    var31 = var30.bind(var2)(var25);
                    var30 = var31.purchaseProduct;
                    var25 = var12;
                    var13 = var30.bind(var31)(var25, var20, var13);
                    SaveGenerator(address=674);
case 335:
                    return var13;
case 189:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=19);
                    if(var20) { _fun0023_ip = 336; continue _fun0023 }
case 337:
                    var22 = var13;
                    var20 = var13.jwsRepresentation;
                    var14 = var20;
                    if(!(var19 == var20)) { _fun0023_ip = 338; continue _fun0023 }
case 175:
                    var20 = var22;
                    var31 = var20.transactionReceipt;
                    _fun0023_ip = 339; continue _fun0023;
case 338:
                    var31 = var14;
case 339:
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
                    if(var20) { _fun0023_ip = 214; continue _fun0023 }
case 340:
                    var14 = var15.bind(var2)();
case 214:
                    SaveGenerator(address=819);
case 341:
                    return var14;
case 342:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0023_ip = 343; continue _fun0023 }
case 344:
                    var25 = _closure1_slot14;
                    var20 = var25.getProduct;
                    var15 = var12;
                    var15 = var20.bind(var25)(var15);
                    var29 = var15;
                    var20 = var19 == var15;
                    var15 = undefined;
                    if(var20) { _fun0023_ip = 345; continue _fun0023 }
case 346:
                    var20 = var29;
                    var15 = var20.price;
case 345:
                    var27 = var15;
                    var15 = var29;
                    var15 = var19 == var15;
                    var25 = undefined;
                    if(var15) { _fun0023_ip = 347; continue _fun0023 }
case 348:
                    var15 = var29;
                    var25 = var15.currencyCode;
case 347:
                    var28 = var25;
                    var20 = _closure1_slot25;
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
                    if(var30) { _fun0023_ip = 349; continue _fun0023 }
case 350:
                    var25 = var29.countryCode;
case 349:
                    var15['appStoreRegion'] = var25;
                    var15['giftInfoOptions'] = var23;
                    var22 = var22.jwsRepresentation;
                    var15['jwsRepresentation'] = var22;
                    var22 = 'createSubscription';
                    var15['source'] = var22;
                    var15['orderId'] = var21;
                    var15 = var20.bind(var2)(var15);
                    SaveGenerator(address=996);
case 351:
                    return var15;
case 352:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0023_ip = 353; continue _fun0023 }
case 354:
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
                    if(var29) { _fun0023_ip = 355; continue _fun0023 }
case 356:
                    var29 = var28;
                    var28 = var29.toLowerCase;
                    var27 = var28.bind(var29)();
case 355:
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
                    if(var16) { _fun0023_ip = 357; continue _fun0023 }
case 358:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var16 = 18;
                    var16 = var20[var16];
                    var18 = var18.bind(var2)(var16);
                    var16 = var18.fetchSubscriptions;
                    var16 = var16.bind(var18)();
                    SaveGenerator(address=1262);
case 359:
                    return var16;
case 360:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    if(var18) { _fun0023_ip = 361; continue _fun0023 }
case 362:
                    var20 = _closure1_slot13;
                    var18 = var20.getPremiumSubscription;
                    var18 = var18.bind(var20)();
                    _closure4_slot0 = var18;
                    if(!(var19 != var18)) { _fun0023_ip = 363; continue _fun0023 }
case 364:
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
                                    var5 = arg1;
                                    var _closure8_slot0 = var5;
                                    var4 = _closure1_slot19;
                                    var3 = _closure7_slot0;
                                    var2 = {};
                                    var8 = var2;
                                    var7 = var5;
                                    var5 = copyDataProperties(var8, var7);
                                    var6 = _closure4_slot0;
                                    var5 = 'subscription';
                                    var2[var5] = var6;
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
                    _fun0023_ip = 357; continue _fun0023;
case 363:
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
case 361: // try_end1
                    return var16;
case 357:
                    _fun0023_ip = 316; continue _fun0023;
case 353:
                    return var15;
case 343:
                    return var14;
case 336:
                    return var13;
case 332:
                    return var10;
case 328: // try_start_2
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
case 324: // try_end2
                    return var9;
case 365: // catch_target0 // catch_target1 // catch_target2
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
                    if(!(var9 != var10)) { _fun0023_ip = 232; continue _fun0023 }
case 366:
                    var9 = var8;
                    var8 = var6;
                    var8 = var9.bind(var2)(var8);
case 232:
                    var8 = _closure1_slot27;
                    var7 = var6;
                    var6 = 'subscription';
                    var6 = var8.bind(var2)(var7, var6);
                    _fun0023_ip = 316; continue _fun0023;
case 321:
                    return var3;
case 318:
                    var3 = 26;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.bind(var2)();
case 316:
                    return var2;
case 314:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['createSubscription'] = var11;
    var11 = function restoreAndApplyPurchases() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0024_ip = 181; continue _fun0024 }
case 367:
            var3 = false;
case 181:
            var _closure2_slot0 = var3;
            var3 = this;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot7;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0025_ip = 368; continue _fun0025 }
case 315:
                        var5 = undefined;
                        var7 = undefined;
                        var17 = undefined;
                        var11 = undefined;
                        var _closure4_slot0 = var5;
                        var10 = undefined;
                        var _closure4_slot1 = var5;
                        var18 = undefined;
                        var19 = undefined;
                        var4 = _closure1_slot14;
                        var2 = var4.isBusy;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0025_ip = 369; continue _fun0025 }
case 370:
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
case 371:
                        return var2;
case 372:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0025_ip = 351; continue _fun0025 }
case 292:
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
case 373:
                        return var4;
case 374:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(var8) { _fun0025_ip = 375; continue _fun0025 }
case 376:
                        var7 = var4;
                        var8 = var4.length;
                        var13 = 0;
                        if(!(var13 !== var8)) { _fun0025_ip = 377; continue _fun0025 }
case 69:
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var8 = 23;
                        var8 = var14[var8];
                        var8 = var12.bind(var5)(var8);
                        var12 = var8.bind(var5)(var7);
                        var8 = var12.uniqBy;
                        var7 = function(arg1) {
                            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.purchaseResponse;
                                var1 = var1.jwsRepresentation;
                                var3 = null;
                                if(!(var3 == var1)) { _fun0026_ip = 33; continue _fun0026 }
case 378:
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
                                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                    StartGenerator();
                                    var5 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0027_ip = 379; continue _fun0027 }
case 95:
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
                                    var11 = _closure1_slot14;
                                    var8 = var11.getProduct;
                                    var7 = var5.productIdentifier;
                                    var9 = var8.bind(var11)(var7);
                                    var11 = var5.jwsRepresentation;
                                    var5 = null;
                                    if(!(var5 == var11)) { _fun0027_ip = 380; continue _fun0027 }
case 134:
                                    var7 = var4;
                                    var11 = var7.transactionReceipt;
case 380:
                                    var8 = _closure1_slot1;
                                    var12 = _closure1_slot3;
                                    var7 = 13;
                                    var7 = var12[var7];
                                    var8 = var8.bind(var2)(var7);
                                    var7 = var8.v3;
                                    var11 = var7.bind(var8)(var11);
                                    _closure6_slot2 = var11;
                                    var8 = _closure1_slot9;
                                    var7 = var8.getGiftOptionsForKey;
                                    var10 = var7.bind(var8)(var11);
case 289: // try_start_0
                                    var7 = _closure1_slot25;
                                    var6 = {};
                                    var8 = var4;
                                    var11 = var8.jwsRepresentation;
                                    var6['jwsRepresentation'] = var11;
                                    var8 = var8.transactionReceipt;
                                    var6['encodedReceipt'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0027_ip = 20; continue _fun0027 }
case 110:
                                    var11 = var9;
                                    var8 = var11.currencyCode;
case 20:
                                    var6['presentmentCurrency'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0027_ip = 381; continue _fun0027 }
case 82:
                                    var11 = var9;
                                    var8 = var11.price;
case 381:
                                    var6['presentmentAmount'] = var8;
                                    var8 = var9;
                                    var11 = var5 == var8;
                                    var8 = undefined;
                                    if(var11) { _fun0027_ip = 382; continue _fun0027 }
case 383:
                                    var8 = var9.countryCode;
case 382:
                                    var6['appStoreRegion'] = var8;
                                    var8 = {};
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0027_ip = 46; continue _fun0027 }
case 384:
                                    var11 = var10;
                                    var9 = var11.gift_style;
case 46:
                                    var8['gift_style'] = var9;
                                    var9 = var10;
                                    var11 = var5 == var9;
                                    var9 = undefined;
                                    if(var11) { _fun0027_ip = 385; continue _fun0027 }
case 25:
                                    var9 = var10.reward_sku_ids;
case 385:
                                    var8['reward_sku_ids'] = var9;
                                    var6['giftInfoOptions'] = var8;
                                    var8 = 'restoreSubscription';
                                    var6['source'] = var8;
                                    var8 = _closure2_slot0;
                                    var6['skipDupCheck'] = var8;
                                    var7 = var7.bind(var2)(var6);
                                    var6 = var7.then;
                                    var3 = function(arg1) {
                                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
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
                                            if(!(var1 != var3)) { _fun0028_ip = 233; continue _fun0028 }
case 386:
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
case 233:
                                            var3 = var1 != var3;
                                            var1 = null;
                                            if(!var3) { _fun0028_ip = 94; continue _fun0028 }
case 387:
                                            var1 = _closure6_slot0;
case 94:
                                            return var1;
                                        }
                                    };
                                    var3 = var6.bind(var7)(var3);
                                    SaveGenerator(address=351);
case 388:
                                    return var3;
case 389:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0027_ip = 390; continue _fun0027 }
case 391:
                                    if(!(var5 != var3)) { _fun0027_ip = 392; continue _fun0027 }
case 311:
                                    var6 = _closure4_slot0;
                                    var5 = var6.push;
                                    var4 = var5.bind(var6)(var4);
case 392: // try_end0
                                    _fun0027_ip = 126; continue _fun0027;
case 390:
                                    return var3;
case 393: // catch_target0
                                    CatchBlockStart(arg_register=4);
                                    var4 = _closure4_slot1;
                                    var3 = var4.push;
                                    var3 = var3.bind(var4)(var5);
case 126:
                                    return var2;
case 379:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var7 = _closure1_slot23;
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
                        if(var7) { _fun0025_ip = 394; continue _fun0025 }
case 131:
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
case 395:
                        var20 = var25;
                        var20 = var26.bind(var21)(var20);
                        var29 = var20;
                        var28 = var12;
                        var22 = ensureObject(var29, var28);
                        var7 = var20;
                        var22 = var20.done;
                        if(var22) { _fun0025_ip = 180; continue _fun0025 }
case 396: // try_start_0
                        var22 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 397:
                        return var20;
case 398: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=21);
                        var29 = var21;
                        var28 = var14;
                        var20 = getMethod(var29, var28);
                        if(!(var20 !== var5)) { _fun0025_ip = 399; continue _fun0025 }
case 400:
                        var20 = var20.bind(var21)(var22);
                        var29 = var20;
                        var28 = var15;
                        var22 = ensureObject(var29, var28);
                        var22 = var20.done;
                        if(var22) { _fun0025_ip = 401; continue _fun0025 }
case 121:
                        var22 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 158:
                        return var20;
case 402: // try_start_1
                        ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                        var25 = var22;
                        var23 = var24;
                        if(!var23) { _fun0025_ip = 395; continue _fun0025 }
case 403:
                        var25 = var22;
case 38: // try_end1
                        var28 = 'return';
                        var29 = var21;
                        var27 = getMethod(var29, var28);
                        if(!(var27 !== var5)) { _fun0025_ip = 198; continue _fun0025 }
case 404:
                        var23 = var25;
                        var23 = var27.bind(var21)(var23);
                        var28 = 'iterator.return() did not return an object';
                        var29 = var23;
                        var27 = ensureObject(var29, var28);
                        var27 = var23.done;
                        if(var27) { _fun0025_ip = 405; continue _fun0025 }
case 406:
                        var27 = generatorSetDelegated();
                        SaveGenerator(address=478);
case 407:
                        return var23;
case 405:
                        var23 = var23.value;
case 330: // try_end2 // try_end5
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
case 198:
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
case 401: // try_start_3 // try_start_6
                        var7 = var20;
                        _fun0025_ip = 180; continue _fun0025;
case 399:
                        var28 = 'return';
                        var29 = var21;
                        var20 = getMethod(var29, var28);
                        if(!(var20 !== var5)) { _fun0025_ip = 408; continue _fun0025 }
case 409:
                        var29 = var20.bind(var21)();
                        var28 = 'iterator.return() did not return an object';
                        var20 = ensureObject(var29, var28);
case 408:
                        var29 = 'yield* delegate must have a .throw() method';
                        var20 = throwTypeError(var29);
                        throw var5;
case 180:
                        var7 = var7.value;
                        var7 = var19;
                        var7 = var7.bind(var5)();
                        var17 = var7;
                        var7 = var7.done;
                        if(!var7) { _fun0025_ip = 131; continue _fun0025 }
case 394:
                        var7 = var11;
                        var7 = var7.length;
                        if(!(var7 > var13)) { _fun0025_ip = 410; continue _fun0025 }
case 411:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var7 = 18;
                        var7 = var14[var7];
                        var12 = var12.bind(var5)(var7);
                        var7 = var12.fetchSubscriptions;
                        var7 = var7.bind(var12)();
                        SaveGenerator(address=752);
case 257:
                        return var7;
case 412:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                        if(var12) { _fun0025_ip = 413; continue _fun0025 }
case 410:
                        var12 = var10;
                        var12 = var12.length;
                        if(!(!(var12 > var13))) { _fun0025_ip = 414; continue _fun0025 }
case 415: // try_end3 // try_end6
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
case 414: // try_start_4 // try_start_7
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
case 413: // try_end4 // try_end7
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
case 377:
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
case 375:
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
case 351:
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
case 416: // try_start_8 // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=1);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 17;
                        var4 = var8[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.captureBillingException;
                        var4 = var4.bind(var7)(var2);
                        throw var2;
case 417: // try_end8 // catch_target5 // catch_target6 // catch_target7 // catch_target8
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
case 369:
                        var2 = new Array(0);
                        return var2;
case 368:
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
    var6['restoreAndApplyPurchases'] = var11;
    var11 = var7.Set;
    var7 = 20;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ErrorCode;
    var12 = var7.E_USER_CANCELLED;
    var7 = new Array(2);
    var7[0] = var12;
    var10 = var10.PAYMENT_CANCELED;
    var7[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var18 = var10;
    var17 = var7;
    var7 = new var18[var11](var17, var16);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot22 = var7;
    var7 = 46;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'actions/native/BillingActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['getIAPJWTRequestData'] = var5;
    var3['updateAppleSubscription'] = var4;
    var4 = function cancelGenericSubscription(arg1, arg2, arg3) {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelGenericSubscription'] = var4;
    var4 = function createGenericSubscription(arg1, arg2) {
        var1 = undefined;
        var4 = _closure1_slot38;
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
        var4 = _closure1_slot39;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resubscribeGenericSubscription'] = var4;
    var4 = function mobilePurchaseSKU(arg1, arg2, arg3) {
        var1 = undefined;
        var4 = _closure1_slot41;
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
        var4 = _closure1_slot42;
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