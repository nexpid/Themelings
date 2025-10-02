// app/errors/BillingError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var5 = global;
    var9 = var5.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var9 = 0;
    var4 = var8[var9];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var4['UNKNOWN'] = var9;
    var6 = 'UNKNOWN';
    var4[var9] = var6;
    var9 = 100001;
    var4['UNKNOWN_BILLING_PROFILE'] = var9;
    var6 = 'UNKNOWN_BILLING_PROFILE';
    var4[var9] = var6;
    var9 = 100002;
    var4['UNKNOWN_PAYMENT_SOURCE'] = var9;
    var6 = 'UNKNOWN_PAYMENT_SOURCE';
    var4[var9] = var6;
    var9 = 100003;
    var4['UNKNOWN_SUBSCRIPTION'] = var9;
    var6 = 'UNKNOWN_SUBSCRIPTION';
    var4[var9] = var6;
    var9 = 100004;
    var4['ALREADY_SUBSCRIBED'] = var9;
    var6 = 'ALREADY_SUBSCRIBED';
    var4[var9] = var6;
    var9 = 100005;
    var4['INVALID_PLAN'] = var9;
    var6 = 'INVALID_PLAN';
    var4[var9] = var6;
    var9 = 100006;
    var4['PAYMENT_SOURCE_REQUIRED'] = var9;
    var6 = 'PAYMENT_SOURCE_REQUIRED';
    var4[var9] = var6;
    var9 = 100007;
    var4['ALREADY_CANCELED'] = var9;
    var6 = 'ALREADY_CANCELED';
    var4[var9] = var6;
    var9 = 100008;
    var4['INVALID_PAYMENT'] = var9;
    var6 = 'INVALID_PAYMENT';
    var4[var9] = var6;
    var9 = 100009;
    var4['ALREADY_REFUNDED'] = var9;
    var6 = 'ALREADY_REFUNDED';
    var4[var9] = var6;
    var9 = 100010;
    var4['INVALID_BILLING_ADDRESS'] = var9;
    var6 = 'INVALID_BILLING_ADDRESS';
    var4[var9] = var6;
    var9 = 100011;
    var4['ALREADY_PURCHASED'] = var9;
    var6 = 'ALREADY_PURCHASED';
    var4[var9] = var6;
    var9 = 100012;
    var4['DUPLICATE_PURCHASE_ATTEMPT'] = var9;
    var6 = 'DUPLICATE_PURCHASE_ATTEMPT';
    var4[var9] = var6;
    var9 = 100017;
    var4['BILLING_PURCHASE_REQUEST_INVALID'] = var9;
    var6 = 'BILLING_PURCHASE_REQUEST_INVALID';
    var4[var9] = var6;
    var9 = 100027;
    var4['NEGATIVE_INVOICE_AMOUNT'] = var9;
    var6 = 'NEGATIVE_INVOICE_AMOUNT';
    var4[var9] = var6;
    var9 = 100029;
    var4['AUTHENTICATION_REQUIRED'] = var9;
    var6 = 'AUTHENTICATION_REQUIRED';
    var4[var9] = var6;
    var9 = 100042;
    var4['SUBSCRIPTION_RENEWAL_IN_PROGRESS'] = var9;
    var6 = 'SUBSCRIPTION_RENEWAL_IN_PROGRESS';
    var4[var9] = var6;
    var9 = 100047;
    var4['CONFIRMATION_REQUIRED'] = var9;
    var6 = 'CONFIRMATION_REQUIRED';
    var4[var9] = var6;
    var9 = 100054;
    var4['CARD_DECLINED'] = var9;
    var6 = 'CARD_DECLINED';
    var4[var9] = var6;
    var9 = 50097;
    var4['INVALID_GIFT_REDEMPTION_FRAUD_REJECTED'] = var9;
    var6 = 'INVALID_GIFT_REDEMPTION_FRAUD_REJECTED';
    var4[var9] = var6;
    var9 = 100056;
    var4['PURCHASE_TOKEN_AUTHORIZATION_REQUIRED'] = var9;
    var6 = 'PURCHASE_TOKEN_AUTHORIZATION_REQUIRED';
    var4[var9] = var6;
    var9 = 50048;
    var4['INVALID_PAYMENT_SOURCE'] = var9;
    var6 = 'INVALID_PAYMENT_SOURCE';
    var4[var9] = var6;
    var9 = 100051;
    var4['INVALID_CURRENCY_FOR_PAYMENT_SOURCE'] = var9;
    var6 = 'INVALID_CURRENCY_FOR_PAYMENT_SOURCE';
    var4[var9] = var6;
    var9 = 100070;
    var4['BILLING_APPLE_SERVER_API_ERROR'] = var9;
    var6 = 'BILLING_APPLE_SERVER_API_ERROR';
    var4[var9] = var6;
    var9 = 100078;
    var4['BILLING_TRIAL_REDEMPTION_DISABLED'] = var9;
    var6 = 'BILLING_TRIAL_REDEMPTION_DISABLED';
    var4[var9] = var6;
    var9 = 100079;
    var4['BILLING_PAUSE_DISABLED'] = var9;
    var6 = 'BILLING_PAUSE_DISABLED';
    var4[var9] = var6;
    var9 = 100080;
    var4['BILLING_PAUSE_PENDING_ALREADY_SET'] = var9;
    var6 = 'BILLING_PAUSE_PENDING_ALREADY_SET';
    var4[var9] = var6;
    var9 = 100081;
    var4['BILLING_PAUSE_NOT_ELIGIBLE'] = var9;
    var6 = 'BILLING_PAUSE_NOT_ELIGIBLE';
    var4[var9] = var6;
    var9 = 100082;
    var4['BILLING_PAUSE_INVALID_INTERVAL'] = var9;
    var6 = 'BILLING_PAUSE_INVALID_INTERVAL';
    var4[var9] = var6;
    var9 = 100083;
    var4['BILLING_ALREADY_PAUSED'] = var9;
    var6 = 'BILLING_ALREADY_PAUSED';
    var4[var9] = var6;
    var9 = 100084;
    var4['BILLING_CANNOT_CHARGE_ZERO_AMOUNT'] = var9;
    var6 = 'BILLING_CANNOT_CHARGE_ZERO_AMOUNT';
    var4[var9] = var6;
    var9 = 100094;
    var4['BILLING_PAUSE_INVALID_UPDATE'] = var9;
    var6 = 'BILLING_PAUSE_INVALID_UPDATE';
    var4[var9] = var6;
    var9 = 100096;
    var4['BILLING_BUNDLE_ALREADY_PURCHASED'] = var9;
    var6 = 'BILLING_BUNDLE_ALREADY_PURCHASED';
    var4[var9] = var6;
    var9 = 100097;
    var4['BILLING_BUNDLE_PARTIALLY_OWNED'] = var9;
    var6 = 'BILLING_BUNDLE_PARTIALLY_OWNED';
    var4[var9] = var6;
    var9 = 100107;
    var4['BILLING_INSUFFICIENT_FUNDS'] = var9;
    var6 = 'BILLING_INSUFFICIENT_FUNDS';
    var4[var9] = var6;
    var9 = 100111;
    var4['BILLING_OUTDATED_REQUEST_PARAMETERS'] = var9;
    var6 = 'BILLING_OUTDATED_REQUEST_PARAMETERS';
    var4[var9] = var6;
    var9 = 590001;
    var4['VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE'] = var9;
    var6 = 'VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE';
    var4[var9] = var6;
    var _closure1_slot7 = var4;
    var11 = {};
    var6 = 'cardNumber';
    var11['CARD_NUMBER'] = var6;
    var6 = 'cvc';
    var11['CARD_CVC'] = var6;
    var6 = 'expirationDate';
    var11['CARD_EXPIRATION_DATE'] = var6;
    var6 = 'name';
    var11['CARD_NAME'] = var6;
    var11['ADDRESS_NAME'] = var6;
    var6 = 'line1';
    var11['ADDRESS_LINE_1'] = var6;
    var6 = 'line2';
    var11['ADDRESS_LINE_2'] = var6;
    var6 = 'city';
    var11['ADDRESS_CITY'] = var6;
    var6 = 'state';
    var11['ADDRESS_STATE'] = var6;
    var6 = 'postalCode';
    var11['ADDRESS_POSTAL_CODE'] = var6;
    var6 = 'country';
    var11['ADDRESS_COUNTRY'] = var6;
    var13 = {};
    var6 = 'address_line1';
    var13['ADDRESS_LINE_1'] = var6;
    var6 = 'address_line2';
    var13['ADDRESS_LINE_2'] = var6;
    var6 = 'address_city';
    var13['ADDRESS_CITY'] = var6;
    var6 = 'address_state';
    var13['ADDRESS_STATE'] = var6;
    var6 = 'address_zip';
    var13['ADDRESS_ZIP'] = var6;
    var6 = 'address_country';
    var13['ADDRESS_COUNTRY'] = var6;
    var6 = 'number';
    var13['CARD_NUMBER'] = var6;
    var6 = 'exp';
    var13['CARD_EXPIRATION_DATE'] = var6;
    var6 = 'exp_month';
    var13['CARD_EXPIRATION_MONTH'] = var6;
    var6 = 'exp_year';
    var13['CARD_EXPIRATION_YEAR'] = var6;
    var10 = var5.Object;
    var9 = var10.freeze;
    var6 = {};
    var15 = var13.ADDRESS_LINE_1;
    var14 = var11.ADDRESS_LINE_1;
    var6[var15] = var14;
    var15 = var13.ADDRESS_LINE_2;
    var14 = var11.ADDRESS_LINE_2;
    var6[var15] = var14;
    var15 = var13.ADDRESS_CITY;
    var14 = var11.ADDRESS_CITY;
    var6[var15] = var14;
    var15 = var13.ADDRESS_STATE;
    var14 = var11.ADDRESS_STATE;
    var6[var15] = var14;
    var15 = var13.ADDRESS_ZIP;
    var14 = var11.ADDRESS_POSTAL_CODE;
    var6[var15] = var14;
    var15 = var13.ADDRESS_COUNTRY;
    var14 = var11.ADDRESS_COUNTRY;
    var6[var15] = var14;
    var15 = var13.CARD_NUMBER;
    var14 = var11.CARD_NUMBER;
    var6[var15] = var14;
    var15 = var13.CARD_EXPIRATION_DATE;
    var14 = var11.CARD_EXPIRATION_DATE;
    var6[var15] = var14;
    var15 = var13.CARD_EXPIRATION_MONTH;
    var14 = var11.CARD_EXPIRATION_DATE;
    var6[var15] = var14;
    var14 = var13.CARD_EXPIRATION_YEAR;
    var13 = var11.CARD_EXPIRATION_DATE;
    var6[var14] = var13;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot8 = var6;
    var10 = var5.Object;
    var9 = var10.freeze;
    var6 = {};
    var13 = var11.ADDRESS_LINE_1;
    var6['line_1'] = var13;
    var13 = var11.ADDRESS_LINE_2;
    var6['line_2'] = var13;
    var13 = var11.ADDRESS_POSTAL_CODE;
    var6['postal_code'] = var13;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot9 = var6;
    var10 = {};
    var6 = 'card';
    var10['CARD'] = var6;
    var6 = 'address';
    var10['ADDRESS'] = var6;
    var13 = var5.Set;
    var9 = var11.CARD_NUMBER;
    var6 = new Array(4);
    var6[0] = var9;
    var9 = var11.CARD_CVC;
    var6[1] = var9;
    var9 = var11.CARD_EXPIRATION_DATE;
    var6[2] = var9;
    var9 = var11.CARD_NAME;
    var6[3] = var9;
    var9 = var13.prototype;
    var9 = Object.create(var9, {constructor: {value: var13}});
    var19 = var9;
    var18 = var6;
    var6 = new var19[var13](var18, var17);
    var9 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot10 = var9;
    var13 = var5.Set;
    var6 = var11.ADDRESS_NAME;
    var5 = new Array(7);
    var5[0] = var6;
    var6 = var11.ADDRESS_LINE_1;
    var5[1] = var6;
    var6 = var11.ADDRESS_LINE_2;
    var5[2] = var6;
    var6 = var11.ADDRESS_CITY;
    var5[3] = var6;
    var6 = var11.ADDRESS_STATE;
    var5[4] = var6;
    var6 = var11.ADDRESS_POSTAL_CODE;
    var5[5] = var6;
    var6 = var11.ADDRESS_COUNTRY;
    var5[6] = var6;
    var6 = var13.prototype;
    var6 = Object.create(var6, {constructor: {value: var13}});
    var19 = var6;
    var18 = var5;
    var5 = new var19[var13](var18, var17);
    var6 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot11 = var6;
    var5 = 7;
    var5 = var8[var5];
    var12 = var12.bind(var1)(var5);
    var5 = function(arg1) {
        var4 = function BillingError(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var13 = undefined;
                var1 = var1.bind(var13)(var4, var3);
                var15 = new Array(2);
                var15[0] = var2;
                var1 = arg2;
                var15[1] = var1;
                var1 = _closure1_slot5;
                var14 = var1.bind(var13)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var13)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var14.apply;
                var1 = var1.bind(var14)(var4, var15);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var10 = global;
                var12 = var10.Reflect;
                var11 = var12.construct;
                var10 = _closure1_slot5;
                var10 = var10.bind(var13)(var4);
                var10 = var10.constructor;
                var1 = var11.bind(var12)(var14, var15, var10);
case 8:
                var1 = var3.bind(var13)(var4, var1);
                var4 = null;
                var1['paymentId'] = var4;
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.NEGATIVE_INVOICE_AMOUNT;
                if(!(var10 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.INVALID_PAYMENT_SOURCE;
                if(!(var10 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.UNKNOWN_PAYMENT_SOURCE;
                if(!(var10 !== var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.SUBSCRIPTION_RENEWAL_IN_PROGRESS;
                if(!(var10 !== var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_TRIAL_REDEMPTION_DISABLED;
                if(!(var10 !== var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_BUNDLE_ALREADY_PURCHASED;
                if(!(var10 !== var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_BUNDLE_PARTIALLY_OWNED;
                if(!(var10 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_INSUFFICIENT_FUNDS;
                if(!(var10 !== var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.CARD_DECLINED;
                if(!(var10 !== var3)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_OUTDATED_REQUEST_PARAMETERS;
                if(!(var10 !== var3)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var10 = var1.status;
                var3 = 429;
                if(!(var3 !== var10)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.UNKNOWN;
                if(!(var10 !== var3)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var10 = var1.status;
                var3 = 400;
                var3 = var3 === var10;
                if(!var3) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var10 = var1.fields;
                var10 = var10.captcha_key;
                var3 = var4 != var10;
case 33:
                if(!var3) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.3s/vDA;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 31:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.5mlOCQ;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 29:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.sUWxgY;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 27:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.uhPY5u;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 25:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.p0UBvb;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 23:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.yX8s2t;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 21:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.c5zDr6;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 19:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.Hiwqub;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 17:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.MHlpoK;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 15:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.3jprCQ;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 13:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.yNYvKy;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 11:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.DtFqEB;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
                _fun0002_ip = 35; continue _fun0002;
case 9:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 6;
                var10 = var14[var3];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var3 = var14[var3];
                var3 = var12.bind(var13)(var3);
                var3 = var3.t;
                var3 = var3.+4Empq;
                var3 = var10.bind(var11)(var3);
                var1['message'] = var3;
case 35:
                var8 = var1.fields;
                for(var3 in var8)
case 37:
                {
case 38:
                    var13 = var3;
                    var10 = _closure1_slot8;
                    var12 = var10[var13];
                    if(var12) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var10 = _closure1_slot9;
                    var12 = var10[var13];
case 39:
                    if(var4 == var12) { _fun0002_ip = 37; continue _fun0002 }
case 41:
                    var10 = var1.fields;
                    var11 = var10[var13];
                    var10 = var1.fields;
                    var10 = delete var10[var13];
                    var10 = var1.fields;
                    var10[var12] = var11;
                    _fun0002_ip = 37; continue _fun0002;
                }
case 42:
                var3 = var2.body;
                var3 = var4 != var3;
                if(!var3) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var4 = var2.body;
                var4 = var4.payment_id;
                var5 = 'string';
                var4 = typeof var4;
                var3 = var5 === var4;
case 43:
                if(!var3) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var2 = var2.body;
                var2 = var2.payment_id;
                var1['paymentId'] = var2;
case 45:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = '_isInFieldSet';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var7 = arg1;
                var1 = this;
                var5 = var1.fields;
                for(var2 in var5)
case 47:
                {
case 48:
                    var8 = var2;
                    var1 = var7.has;
                    var1 = var1.bind(var7)(var8);
                    if(!var1) { _fun0003_ip = 47; continue _fun0003 }
case 49:
                    var1 = true;
                    return var1;
                }
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasCardError';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3._isInFieldSet;
            var1 = _closure1_slot10;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasAddressError';
        var5['key'] = var7;
        var6 = function value() {
            var3 = this;
            var2 = var3._isInFieldSet;
            var1 = _closure1_slot11;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var12);
    var _closure1_slot12 = var5;
    var5['ErrorCodes'] = var4;
    var5['Fields'] = var11;
    var5['Sections'] = var10;
    var5['CARD_ERRORS'] = var9;
    var5['ADDRESS_ERRORS'] = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'errors/BillingError.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['ErrorCodes'] = var4;
    var2 = function parseV8BillingAddressSkemaErrorToBillingError(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = 'string';
            var1 = typeof var3;
            if(!(var2 !== var1)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var6 = null;
            var1 = var6 == var3;
            var4 = undefined;
            var7 = undefined;
            if(var1) { _fun0004_ip = 50; continue _fun0004 }
case 53:
            var1 = var3.body;
            var2 = var6 == var1;
            var7 = undefined;
            if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 54:
            var7 = var1.code;
case 50:
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 5;
            var2 = var2[var5];
            var2 = var8.bind(var4)(var2);
            var2 = var2.INVALID_FORM_BODY_ERROR_CODE;
            if(!(var7 === var2)) { _fun0004_ip = 51; continue _fun0004 }
case 55:
            var2 = global;
            var8 = var2.Array;
            var7 = var8.isArray;
            var9 = var6 == var3;
            var2 = undefined;
            if(var9) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var9 = var3.body;
            var10 = var6 == var9;
            var2 = undefined;
            if(var10) { _fun0004_ip = 56; continue _fun0004 }
case 58:
            var2 = var9.errors;
case 56:
            var2 = var7.bind(var8)(var2);
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var7 = var6 == var3;
            var2 = undefined;
            if(var7) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var7 = var3.body;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 61; continue _fun0004 }
case 63:
            var7 = var7.errors;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 61; continue _fun0004 }
case 64:
            var2 = var7.billing_address;
case 61:
            if(!(var6 != var2)) { _fun0004_ip = 59; continue _fun0004 }
case 65:
            var2 = var3.body;
            var2 = var2.errors;
            var9 = var2.billing_address;
            for(var2 in var9)
case 66:
            {
case 67:
                var13 = var2;
                var11 = var3.body;
                var11 = var11.errors;
                var11 = var11.billing_address;
                var12 = var11[var13];
                var11 = var3.body;
                var11 = var11.errors;
                var11 = var11.billing_address;
                var11 = delete var11[var13];
                var11 = var3.body;
                var11 = var11.errors;
                var11[var13] = var12;
                _fun0004_ip = 66; continue _fun0004;
            }
case 22:
            var2 = var3.body;
            var2 = var2.errors;
            var2 = delete var2.billing_address;
case 59:
            var7 = var3.body;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var2 = var7.errors;
case 68:
            if(!(var6 != var2)) { _fun0004_ip = 51; continue _fun0004 }
case 70:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var4 = var2.bind(var4)(var1);
            var2 = var4.convertSkemaError;
            var1 = var3.body;
            var1 = var1.errors;
            var1 = var2.bind(var4)(var1);
            var3['body'] = var1;
case 51:
            var1 = _closure1_slot12;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var15 = var2;
            var14 = var3;
            var1 = new var15[var1](var14, var13);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['parseV8BillingAddressSkemaErrorToBillingError'] = var2;
    return var1;
})();