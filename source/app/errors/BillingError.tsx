// app/errors/BillingError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var12 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
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
                if(var1) { _fun0002_ip = 80; continue _fun0002 }
 67:
                var1 = var14.apply;
                var1 = var1.bind(var14)(var4, var15);
                _fun0002_ip = 114; continue _fun0002;
 80:
                var10 = global;
                var12 = var10.Reflect;
                var11 = var12.construct;
                var10 = _closure1_slot5;
                var10 = var10.bind(var13)(var4);
                var10 = var10.constructor;
                var1 = var11.bind(var12)(var14, var15, var10);
 114:
                var1 = var3.bind(var13)(var4, var1);
                var4 = null;
                var1['paymentId'] = var4;
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.NEGATIVE_INVOICE_AMOUNT;
                if(!(var10 !== var3)) { _fun0002_ip = 1238; continue _fun0002 }
 150:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.INVALID_PAYMENT_SOURCE;
                if(!(var10 !== var3)) { _fun0002_ip = 1173; continue _fun0002 }
 172:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.UNKNOWN_PAYMENT_SOURCE;
                if(!(var10 !== var3)) { _fun0002_ip = 1105; continue _fun0002 }
 194:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.SUBSCRIPTION_RENEWAL_IN_PROGRESS;
                if(!(var10 !== var3)) { _fun0002_ip = 1037; continue _fun0002 }
 216:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_TRIAL_REDEMPTION_DISABLED;
                if(!(var10 !== var3)) { _fun0002_ip = 969; continue _fun0002 }
 238:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_BUNDLE_ALREADY_PURCHASED;
                if(!(var10 !== var3)) { _fun0002_ip = 901; continue _fun0002 }
 260:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_BUNDLE_PARTIALLY_OWNED;
                if(!(var10 !== var3)) { _fun0002_ip = 833; continue _fun0002 }
 282:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_INSUFFICIENT_FUNDS;
                if(!(var10 !== var3)) { _fun0002_ip = 765; continue _fun0002 }
 304:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.CARD_DECLINED;
                if(!(var10 !== var3)) { _fun0002_ip = 697; continue _fun0002 }
 326:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.BILLING_OUTDATED_REQUEST_PARAMETERS;
                if(!(var10 !== var3)) { _fun0002_ip = 629; continue _fun0002 }
 348:
                var10 = var1.status;
                var3 = 429;
                if(!(var3 !== var10)) { _fun0002_ip = 561; continue _fun0002 }
 366:
                var10 = var1.code;
                var3 = _closure1_slot7;
                var3 = var3.UNKNOWN;
                if(!(var10 !== var3)) { _fun0002_ip = 493; continue _fun0002 }
 385:
                var10 = var1.status;
                var3 = 400;
                var3 = var3 === var10;
                if(!var3) { _fun0002_ip = 419; continue _fun0002 }
 403:
                var10 = var1.fields;
                var10 = var10.captcha_key;
                var3 = var4 != var10;
 419:
                if(!var3) { _fun0002_ip = 1301; continue _fun0002 }
 425:
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
                _fun0002_ip = 1301; continue _fun0002;
 493:
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
                _fun0002_ip = 1301; continue _fun0002;
 561:
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
                _fun0002_ip = 1301; continue _fun0002;
 629:
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
                _fun0002_ip = 1301; continue _fun0002;
 697:
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
                _fun0002_ip = 1301; continue _fun0002;
 765:
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
                _fun0002_ip = 1301; continue _fun0002;
 833:
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
                _fun0002_ip = 1301; continue _fun0002;
 901:
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
                _fun0002_ip = 1301; continue _fun0002;
 969:
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
                _fun0002_ip = 1301; continue _fun0002;
 1037:
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
                _fun0002_ip = 1301; continue _fun0002;
 1105:
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
                _fun0002_ip = 1301; continue _fun0002;
 1173:
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
                _fun0002_ip = 1301; continue _fun0002;
 1238:
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
 1301:
                var8 = var1.fields;
                for(var3 in var8)
 1315:
                {
 1324:
                    var13 = var3;
                    var10 = _closure1_slot8;
                    var12 = var10[var13];
                    if(var12) { _fun0002_ip = 1346; continue _fun0002 }
 1338:
                    var10 = _closure1_slot9;
                    var12 = var10[var13];
 1346:
                    if(var4 == var12) { _fun0002_ip = 1315; continue _fun0002 }
 1350:
                    var10 = var1.fields;
                    var11 = var10[var13];
                    var10 = var1.fields;
                    var10 = delete var10[var13];
                    var10 = var1.fields;
                    var10[var12] = var11;
                    _fun0002_ip = 1315; continue _fun0002;
                }
 1382:
                var3 = var2.body;
                var3 = var4 != var3;
                if(!var3) { _fun0002_ip = 1416; continue _fun0002 }
 1394:
                var4 = var2.body;
                var4 = var4.payment_id;
                var5 = 'string';
                var4 = typeof var4;
                var3 = var5 === var4;
 1416:
                if(!var3) { _fun0002_ip = 1436; continue _fun0002 }
 1419:
                var2 = var2.body;
                var2 = var2.payment_id;
                var1['paymentId'] = var2;
 1436:
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
 0:
                var7 = arg1;
                var1 = this;
                var5 = var1.fields;
                for(var2 in var5)
 20:
                {
 29:
                    var8 = var2;
                    var1 = var7.has;
                    var1 = var1.bind(var7)(var8);
                    if(!var1) { _fun0003_ip = 20; continue _fun0003 }
 45:
                    var1 = true;
                    return var1;
                }
 49:
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
 0:
            var3 = arg1;
            var2 = 'string';
            var1 = typeof var3;
            if(!(var2 !== var1)) { _fun0004_ip = 367; continue _fun0004 }
 17:
            var6 = null;
            var1 = var6 == var3;
            var4 = undefined;
            var7 = undefined;
            if(var1) { _fun0004_ip = 49; continue _fun0004 }
 30:
            var1 = var3.body;
            var2 = var6 == var1;
            var7 = undefined;
            if(var2) { _fun0004_ip = 49; continue _fun0004 }
 44:
            var7 = var1.code;
 49:
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 5;
            var2 = var2[var5];
            var2 = var8.bind(var4)(var2);
            var2 = var2.INVALID_FORM_BODY_ERROR_CODE;
            if(!(var7 === var2)) { _fun0004_ip = 367; continue _fun0004 }
 85:
            var2 = global;
            var8 = var2.Array;
            var7 = var8.isArray;
            var9 = var6 == var3;
            var2 = undefined;
            if(var9) { _fun0004_ip = 127; continue _fun0004 }
 107:
            var9 = var3.body;
            var10 = var6 == var9;
            var2 = undefined;
            if(var10) { _fun0004_ip = 127; continue _fun0004 }
 121:
            var2 = var9.errors;
 127:
            var2 = var7.bind(var8)(var2);
            if(var2) { _fun0004_ip = 298; continue _fun0004 }
 138:
            var7 = var6 == var3;
            var2 = undefined;
            if(var7) { _fun0004_ip = 182; continue _fun0004 }
 147:
            var7 = var3.body;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 182; continue _fun0004 }
 161:
            var7 = var7.errors;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 182; continue _fun0004 }
 176:
            var2 = var7.billing_address;
 182:
            if(!(var6 != var2)) { _fun0004_ip = 298; continue _fun0004 }
 186:
            var2 = var3.body;
            var2 = var2.errors;
            var9 = var2.billing_address;
            for(var2 in var9)
 211:
            {
 220:
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
                _fun0004_ip = 211; continue _fun0004;
            }
 282:
            var2 = var3.body;
            var2 = var2.errors;
            var2 = delete var2.billing_address;
 298:
            var7 = var3.body;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 318; continue _fun0004 }
 312:
            var2 = var7.errors;
 318:
            if(!(var6 != var2)) { _fun0004_ip = 367; continue _fun0004 }
 322:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var4 = var2.bind(var4)(var1);
            var2 = var4.convertSkemaError;
            var1 = var3.body;
            var1 = var1.errors;
            var1 = var2.bind(var4)(var1);
            var3['body'] = var1;
 367:
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