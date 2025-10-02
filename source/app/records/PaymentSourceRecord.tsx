// app/records/PaymentSourceRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var22 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var23 = dependencyMap;
    var _closure1_slot0 = var22;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var23;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot28;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var23[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var23[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var23[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var23[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var23[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var23[var4];
    var5 = var5.bind(var1)(var4);
    var4 = 6;
    var4 = var23[var4];
    var4 = var22.bind(var1)(var4);
    var6 = var4.IRREDEEMABLE_PAYMENT_SOURCES;
    var _closure1_slot8 = var6;
    var6 = var4.PaymentGateways;
    var _closure1_slot9 = var6;
    var4 = var4.PaymentSourceTypes;
    var _closure1_slot10 = var4;
    var4 = function(arg1) {
        var5 = function PaymentSourceRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var6 = this;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var6, var5);
                var1 = _closure1_slot27;
                var1 = var1.bind(var2)(var6, var5);
                var2 = global;
                var6 = var2.Object;
                var5 = var6.values;
                var4 = _closure1_slot10;
                var6 = var5.bind(var6)(var4);
                var5 = var6.includes;
                var4 = var3.type;
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var5 = var2.Error;
                var6 = var3.type;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = 'Unrecognized payment source type ';
                var8 = var4.bind(var2)(var6);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
case 11:
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.type;
                var1['type'] = var2;
                var2 = var3.paymentGateway;
                var1['paymentGateway'] = var2;
                var5 = var3.invalid;
                var2 = null;
                var4 = var2 != var5;
                if(!var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var4 = var5;
case 13:
                var1['invalid'] = var4;
                var4 = var3.billingAddress;
                if(!(var2 == var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = {};
case 15:
                var1['billingAddress'] = var4;
                var4 = var3.isDefault;
                var1['isDefault'] = var4;
                var5 = var3.flags;
                var6 = var2 != var5;
                var4 = 0;
                if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var4 = var5;
case 17:
                var1['flags'] = var4;
                var3 = var3.country;
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var2 = var3;
case 19:
                var1['country'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot4;
        var1 = {};
        var2 = 'hasFlag';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.flags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'paymentMethodCountry';
        var1['key'] = var6;
        var6 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.country;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var3 = var2.country;
                var1 = '';
                if(!(var1 === var3)) { _fun0004_ip = 23; continue _fun0004 }
case 21:
                var1 = var2.billingAddress;
                var1 = var1.country;
                _fun0004_ip = 24; continue _fun0004;
case 23:
                var1 = var2.country;
case 24:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'canRedeemTrial';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getCurrentConfig;
                var1 = {};
                var6 = '3a6d55_1';
                var1['location'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var1.enabled;
                var5 = var2.paymentGateway;
                var4 = _closure1_slot9;
                var4 = var4.ADYEN;
                if(!(var5 === var4)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var5 = var2.type;
                var4 = _closure1_slot10;
                var4 = var4.CASH_APP;
                if(!(var5 !== var4)) { _fun0005_ip = 27; continue _fun0005 }
case 25:
                var4 = _closure1_slot8;
                var3 = var4.has;
                var2 = var2.type;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
case 27:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var6 = {};
        var1 = 'createFromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var3 = var2.billing_address;
                var1 = null;
                if(!(var1 == var3)) { _fun0006_ip = 28; continue _fun0006 }
case 22:
                var3 = {};
case 28:
                var4 = {};
                var1 = var2.id;
                var4['id'] = var1;
                var1 = var2.type;
                var4['type'] = var1;
                var1 = var2.payment_gateway;
                var4['paymentGateway'] = var1;
                var1 = var2.invalid;
                var4['invalid'] = var1;
                var1 = var2.default;
                var4['isDefault'] = var1;
                var1 = {};
                var5 = var3.name;
                var1['name'] = var5;
                var5 = var3.line_1;
                var1['line1'] = var5;
                var5 = var3.line_2;
                var1['line2'] = var5;
                var5 = var3.city;
                var1['city'] = var5;
                var5 = var3.postal_code;
                var1['postalCode'] = var5;
                var5 = var3.state;
                var1['state'] = var5;
                var3 = var3.country;
                var1['country'] = var3;
                var4['billingAddress'] = var1;
                var1 = var2.country;
                var4['country'] = var1;
                var1 = var2.flags;
                var4['flags'] = var1;
                var5 = var2.type;
                var3 = _closure1_slot10;
                var3 = var3.CARD;
                if(!(var3 !== var5)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var3 = _closure1_slot10;
                var3 = var3.PAYPAL;
                if(!(var3 !== var5)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                var3 = _closure1_slot10;
                var3 = var3.VENMO;
                if(!(var3 !== var5)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var3 = _closure1_slot10;
                var3 = var3.SEPA_DEBIT;
                if(!(var3 !== var5)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                var3 = _closure1_slot10;
                var3 = var3.SOFORT;
                if(!(var3 !== var5)) { _fun0006_ip = 35; continue _fun0006 }
case 37:
                var3 = _closure1_slot10;
                var3 = var3.GIROPAY;
                if(!(var3 !== var5)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var3 = _closure1_slot10;
                var3 = var3.PRZELEWY24;
                if(!(var3 !== var5)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var3 = _closure1_slot10;
                var3 = var3.EPS;
                if(!(var3 !== var5)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var3 = _closure1_slot10;
                var3 = var3.PAYSAFE_CARD;
                if(!(var3 !== var5)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var3 = _closure1_slot10;
                var3 = var3.GCASH;
                if(!(var3 !== var5)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var3 = _closure1_slot10;
                var3 = var3.GRABPAY_MY;
                if(!(var3 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var3 = _closure1_slot10;
                var3 = var3.MOMO_WALLET;
                if(!(var3 !== var5)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var3 = _closure1_slot10;
                var3 = var3.KAKAOPAY;
                if(!(var3 !== var5)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var3 = _closure1_slot10;
                var3 = var3.GOPAY_WALLET;
                if(!(var3 !== var5)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var3 = _closure1_slot10;
                var3 = var3.BANCONTACT;
                if(!(var3 !== var5)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var3 = _closure1_slot10;
                var3 = var3.IDEAL;
                if(!(var3 !== var5)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                var3 = _closure1_slot10;
                var3 = var3.CASH_APP;
                if(!(var3 !== var5)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 9;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.assertNever;
                var5 = var5.bind(var6)(var2);
                return var3;
case 60:
                var6 = _closure1_slot26;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.username;
                var5 = 'username';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 58:
                var6 = _closure1_slot17;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.bank;
                var5 = 'bank';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 56:
                var6 = _closure1_slot25;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 54:
                var6 = _closure1_slot24;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 52:
                var6 = _closure1_slot23;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 50:
                var6 = _closure1_slot21;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 48:
                var6 = _closure1_slot20;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 46:
                var6 = _closure1_slot19;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 44:
                var6 = _closure1_slot18;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 42:
                var6 = _closure1_slot16;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.bank;
                var5 = 'bank';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 40:
                var6 = _closure1_slot15;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.email;
                var5 = 'email';
                var3[var5] = var7;
                var7 = var2.bank;
                var5 = 'bank';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 38:
                var6 = _closure1_slot14;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 35:
                var6 = _closure1_slot13;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.email;
                var5 = 'email';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 33:
                var6 = _closure1_slot22;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.username;
                var5 = 'username';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 31:
                var6 = _closure1_slot12;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var7 = var2.email;
                var5 = 'email';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
case 29:
                var3 = _closure1_slot11;
                var1 = {};
                var9 = var1;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var5 = var2.brand;
                var4 = 'brand';
                var1[var4] = var5;
                var5 = var2.last_4;
                var4 = 'last4';
                var1[var4] = var5;
                var5 = var2.expires_month;
                var4 = 'expiresMonth';
                var1[var4] = var5;
                var4 = var2.expires_year;
                var2 = 'expiresYear';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'createFromSerialized';
        var6['key'] = var8;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var6 = var3.type;
                var2 = _closure1_slot10;
                var2 = var2.CARD;
                if(!(var2 !== var6)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var2 = _closure1_slot10;
                var2 = var2.PAYPAL;
                if(!(var2 !== var6)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var2 = _closure1_slot10;
                var2 = var2.SOFORT;
                if(!(var2 !== var6)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var2 = _closure1_slot10;
                var2 = var2.SEPA_DEBIT;
                if(!(var2 !== var6)) { _fun0007_ip = 66; continue _fun0007 }
case 68:
                var2 = _closure1_slot10;
                var2 = var2.GIROPAY;
                if(!(var2 !== var6)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                var2 = _closure1_slot10;
                var2 = var2.PRZELEWY24;
                if(!(var2 !== var6)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                var2 = _closure1_slot10;
                var2 = var2.PAYSAFE_CARD;
                if(!(var2 !== var6)) { _fun0007_ip = 73; continue _fun0007 }
case 74:
                var2 = _closure1_slot10;
                var2 = var2.GCASH;
                if(!(var2 !== var6)) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                var2 = _closure1_slot10;
                var2 = var2.GRABPAY_MY;
                if(!(var2 !== var6)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                var2 = _closure1_slot10;
                var2 = var2.MOMO_WALLET;
                if(!(var2 !== var6)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                var2 = _closure1_slot10;
                var2 = var2.VENMO;
                if(!(var2 !== var6)) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                var2 = _closure1_slot10;
                var2 = var2.KAKAOPAY;
                if(!(var2 !== var6)) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                var2 = _closure1_slot10;
                var2 = var2.GOPAY_WALLET;
                if(!(var2 !== var6)) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                var2 = _closure1_slot10;
                var2 = var2.BANCONTACT;
                if(!(var2 !== var6)) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                var2 = _closure1_slot10;
                var2 = var2.EPS;
                if(!(var2 !== var6)) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                var2 = _closure1_slot10;
                var2 = var2.IDEAL;
                if(!(var2 !== var6)) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                var2 = _closure1_slot10;
                var2 = var2.CASH_APP;
                if(!(var2 !== var6)) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.assertNever;
                var4 = var4.bind(var5)(var6);
                return var2;
case 93:
                var2 = _closure1_slot26;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 91:
                var2 = _closure1_slot17;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 89:
                var2 = _closure1_slot16;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 87:
                var2 = _closure1_slot25;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 85:
                var2 = _closure1_slot24;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 83:
                var2 = _closure1_slot23;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 81:
                var2 = _closure1_slot22;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 79:
                var2 = _closure1_slot21;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 77:
                var2 = _closure1_slot20;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 75:
                var2 = _closure1_slot19;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 73:
                var2 = _closure1_slot18;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 71:
                var2 = _closure1_slot15;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 69:
                var2 = _closure1_slot14;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 66:
                var2 = _closure1_slot13;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 64:
                var2 = _closure1_slot12;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var7 = var3;
                var2 = new var8[var2](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 62:
                var1 = _closure1_slot11;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var8 = var2;
                var7 = var3;
                var1 = new var8[var1](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var20 = var4.bind(var1)(var5);
    var4 = function(arg1) {
        var3 = function CreditCardSourceRecord(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.CARD;
                if(!(var5 === var3)) { _fun0008_ip = 95; continue _fun0008 }
case 96:
                var7 = var4.brand;
                var6 = null;
                var8 = var6 != var7;
                var3 = '';
                var5 = var3;
                if(!var8) { _fun0008_ip = 97; continue _fun0008 }
case 98:
                var5 = var7;
case 97:
                var1['brand'] = var5;
                var5 = var4.last4;
                var7 = var6 != var5;
                if(!var7) { _fun0008_ip = 72; continue _fun0008 }
case 99:
                var3 = var5;
case 72:
                var1['last4'] = var3;
                var7 = var4.expiresMonth;
                var8 = var6 != var7;
                var5 = 0;
                if(!var8) { _fun0008_ip = 100; continue _fun0008 }
case 101:
                var5 = var7;
case 100:
                var1['expiresMonth'] = var5;
                var5 = var4.expiresYear;
                var6 = var6 != var5;
                var3 = 0;
                if(!var6) { _fun0008_ip = 102; continue _fun0008 }
case 103:
                var3 = var5;
case 102:
                var1['expiresYear'] = var3;
                return var1;
case 95:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.CARD;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate CreditCardSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var19 = var4.bind(var1)(var20);
    var _closure1_slot11 = var19;
    var4 = function(arg1) {
        var3 = function PaypalSourceRecord(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.PAYPAL;
                if(!(var5 === var3)) { _fun0009_ip = 104; continue _fun0009 }
case 96:
                var3 = var4.email;
                if(var3) { _fun0009_ip = 68; continue _fun0009 }
case 105:
                var3 = '';
case 68:
                var1['email'] = var3;
                return var1;
case 104:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.PAYPAL;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate PaypalSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var18 = var4.bind(var1)(var20);
    var _closure1_slot12 = var18;
    var4 = function(arg1) {
        var3 = function SofortSourceRecord(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var2 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var2 = var2.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var2 = new Array(1);
                var2[0] = var4;
                var2 = var3.bind(var5)(var7, var6, var2);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.SOFORT;
                if(!(var5 !== var3)) { _fun0010_ip = 106; continue _fun0010 }
case 96:
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.SEPA_DEBIT;
                if(!(var5 === var3)) { _fun0010_ip = 107; continue _fun0010 }
case 106:
                var3 = var4.email;
                if(var3) { _fun0010_ip = 108; continue _fun0010 }
case 109:
                var3 = '';
case 108:
                var2['email'] = var3;
                return var2;
case 107:
                var2 = global;
                var3 = var2.Error;
                var12 = var4.type;
                var1 = _closure1_slot10;
                var10 = var1.SOFORT;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var13 = 'Cannot instantiate SofortSourceRecord with type: ';
                var11 = ', must be ';
                var9 = ' or ';
                var2 = var13[var6](var12, var11, var10, var9, var8);
                var1 = var1.SEPA_DEBIT;
                var12 = var2 + var1;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var17 = var4.bind(var1)(var20);
    var _closure1_slot13 = var17;
    var4 = function(arg1) {
        var3 = function GiropaySourceRecord(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.GIROPAY;
                if(!(var5 === var3)) { _fun0011_ip = 110; continue _fun0011 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.GIROPAY;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate GiropaySourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var16 = var4.bind(var1)(var20);
    var _closure1_slot14 = var16;
    var4 = function(arg1) {
        var3 = function Przelewy24SourceRecord(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.PRZELEWY24;
                if(!(var5 === var3)) { _fun0012_ip = 111; continue _fun0012 }
case 96:
                var3 = var4.email;
                if(var3) { _fun0012_ip = 68; continue _fun0012 }
case 105:
                var3 = '';
case 68:
                var1['email'] = var3;
                var3 = var4.bank;
                var1['bank'] = var3;
                return var1;
case 111:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.PRZELEWY24;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate Przelewy24SourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var15 = var4.bind(var1)(var20);
    var _closure1_slot15 = var15;
    var4 = function(arg1) {
        var3 = function EPSSourceRecord(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.EPS;
                if(!(var5 === var3)) { _fun0013_ip = 112; continue _fun0013 }
case 96:
                var3 = var4.bank;
                var1['bank'] = var3;
                return var1;
case 112:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.EPS;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate EPSSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var14 = var4.bind(var1)(var20);
    var _closure1_slot16 = var14;
    var4 = function(arg1) {
        var3 = function IdealSourceRecord(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.IDEAL;
                if(!(var5 === var3)) { _fun0014_ip = 112; continue _fun0014 }
case 96:
                var3 = var4.bank;
                var1['bank'] = var3;
                return var1;
case 112:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.IDEAL;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate IdealSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var13 = var4.bind(var1)(var20);
    var _closure1_slot17 = var13;
    var4 = function(arg1) {
        var3 = function PaysafeSourceRecord(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.PAYSAFE_CARD;
                if(!(var5 === var3)) { _fun0015_ip = 110; continue _fun0015 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.PAYSAFE_CARD;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate PaysafeSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var12 = var4.bind(var1)(var20);
    var _closure1_slot18 = var12;
    var4 = function(arg1) {
        var3 = function GcashSourceRecord(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.GCASH;
                if(!(var5 === var3)) { _fun0016_ip = 110; continue _fun0016 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.GCASH;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate GcashSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var11 = var4.bind(var1)(var20);
    var _closure1_slot19 = var11;
    var4 = function(arg1) {
        var3 = function GrabPayMySourceRecord(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.GRABPAY_MY;
                if(!(var5 === var3)) { _fun0017_ip = 110; continue _fun0017 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.GRABPAY_MY;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate GrabPayMySourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var10 = var4.bind(var1)(var20);
    var _closure1_slot20 = var10;
    var4 = function(arg1) {
        var3 = function MomoWalletSourceRecord(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.MOMO_WALLET;
                if(!(var5 === var3)) { _fun0018_ip = 110; continue _fun0018 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.MOMO_WALLET;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate MomoWalletSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var9 = var4.bind(var1)(var20);
    var _closure1_slot21 = var9;
    var4 = function(arg1) {
        var3 = function VenmoSourceRecord(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.VENMO;
                if(!(var5 === var3)) { _fun0019_ip = 113; continue _fun0019 }
case 96:
                var3 = var4.username;
                if(var3) { _fun0019_ip = 12; continue _fun0019 }
case 9:
                var3 = '';
case 12:
                var1['username'] = var3;
                return var1;
case 113:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.VENMO;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate VenmoSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var8 = var4.bind(var1)(var20);
    var _closure1_slot22 = var8;
    var4 = function(arg1) {
        var3 = function KaKaoPaySourceRecord(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.KAKAOPAY;
                if(!(var5 === var3)) { _fun0020_ip = 110; continue _fun0020 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.KAKAOPAY;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate KaKaoPaySourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var7 = var4.bind(var1)(var20);
    var _closure1_slot23 = var7;
    var4 = function(arg1) {
        var3 = function GoPayWalletSourceRecord(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.GOPAY_WALLET;
                if(!(var5 === var3)) { _fun0021_ip = 110; continue _fun0021 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.GOPAY_WALLET;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate GoPayWalletSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var6 = var4.bind(var1)(var20);
    var _closure1_slot24 = var6;
    var4 = function(arg1) {
        var3 = function BancontactSourceRecord(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.BANCONTACT;
                if(!(var5 === var3)) { _fun0022_ip = 110; continue _fun0022 }
case 96:
                return var1;
case 110:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.BANCONTACT;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate BancontactSourceRecord with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var5 = var4.bind(var1)(var20);
    var _closure1_slot25 = var5;
    var4 = function(arg1) {
        var3 = function CashAppSourceRecord(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var4 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var7, var6);
                var3 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var5)(var7, var6, var1);
                var5 = var4.type;
                var3 = _closure1_slot10;
                var3 = var3.CASH_APP;
                if(!(var5 === var3)) { _fun0023_ip = 113; continue _fun0023 }
case 96:
                var3 = var4.username;
                if(var3) { _fun0023_ip = 12; continue _fun0023 }
case 9:
                var3 = '';
case 12:
                var1['username'] = var3;
                return var1;
case 113:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.CASH_APP;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate Cashapp with type: ';
                var1 = ', must be ';
                var11 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var4.bind(var1)(var20);
    var _closure1_slot26 = var4;
    var2 = function(arg1) {
        var3 = function AppleSourceRecord(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var4 = arg1;
                var8 = this;
                var1 = _closure1_slot3;
                var7 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var8, var7);
                var1 = '';
                var4['id'] = var1;
                var3 = _closure1_slot9;
                var3 = var3.APPLE_PARTNER;
                var4['paymentGateway'] = var3;
                var3 = _closure1_slot10;
                var5 = var3.APPLE;
                var4['type'] = var5;
                var5 = {};
                var4['billingAddress'] = var5;
                var4['country'] = var1;
                var1 = false;
                var4['invalid'] = var1;
                var4['isDefault'] = var1;
                var1 = 0;
                var4['flags'] = var1;
                var5 = _closure1_slot27;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var5.bind(var6)(var8, var7, var1);
                var5 = var4.type;
                var3 = var3.APPLE;
                if(!(var5 === var3)) { _fun0024_ip = 114; continue _fun0024 }
case 115:
                return var1;
case 114:
                var1 = global;
                var3 = var1.Error;
                var6 = var4.type;
                var2 = _closure1_slot10;
                var5 = var2.APPLE;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Cannot instantiate AppleSourceRecord with type: ';
                var1 = ', must be ';
                var12 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var20);
    var21 = 10;
    var21 = var23[var21];
    var23 = var22.bind(var1)(var21);
    var22 = var23.fileFinishedImporting;
    var21 = 'records/PaymentSourceRecord.tsx';
    var21 = var22.bind(var23)(var21);
    var3['default'] = var20;
    var3['CreditCardSourceRecord'] = var19;
    var3['PaypalSourceRecord'] = var18;
    var3['SofortSourceRecord'] = var17;
    var3['GiropaySourceRecord'] = var16;
    var3['Przelewy24SourceRecord'] = var15;
    var3['EPSSourceRecord'] = var14;
    var3['IdealSourceRecord'] = var13;
    var3['PaysafeSourceRecord'] = var12;
    var3['GcashSourceRecord'] = var11;
    var3['GrabPayMySourceRecord'] = var10;
    var3['MomoWalletSourceRecord'] = var9;
    var3['VenmoSourceRecord'] = var8;
    var3['KaKaoPaySourceRecord'] = var7;
    var3['GoPayWalletSourceRecord'] = var6;
    var3['BancontactSourceRecord'] = var5;
    var3['CashAppSourceRecord'] = var4;
    var3['AppleSourceRecord'] = var2;
    return var1;
})();