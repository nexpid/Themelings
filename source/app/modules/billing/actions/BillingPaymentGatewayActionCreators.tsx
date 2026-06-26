// app/modules/billing/actions/BillingPaymentGatewayActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
    var1 = function _getClientSecret() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot5;
                    var6 = var7.BILLING_STRIPE_PAYMENT_INTENTS;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    var3 = var3.stripe_payment_intent_client_secret;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
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
    var7 = function createAdyenPaymentSourceToken(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot7;
            var2 = var3.has;
            var1 = var6.type;
            var2 = var2.bind(var3)(var1);
            var5 = null;
            var1 = null;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var2 = {};
            var8 = _closure1_slot8;
            var7 = var8.get;
            var6 = var6.type;
            var6 = var7.bind(var8)(var6);
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var6;
case 10:
            var2['type'] = var5;
            var1 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot14 = var7;
    var6 = function dispatchPaymentElementsConfirmationError(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arguments[1];
            var5 = arguments[2];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = true;
case 12:
            if(!(var5 === var3)) { _fun0003_ip = 11; continue _fun0003 }
case 14:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 5;
            var2 = var8[var1];
            var2 = var7.bind(var3)(var2);
            var4 = var2.intl;
            var2 = var4.string;
            var1 = var8[var1];
            var1 = var7.bind(var3)(var1);
            var1 = var1.t;
            var1 = var1.khEaRI;
            var5 = var2.bind(var4)(var1);
case 11:
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 6;
            var1 = var4[var1];
            var4 = var2.bind(var3)(var1);
            var3 = var4.dispatchConfirmationError;
            var2 = {};
            var1 = {};
            var7 = 'payment_elements';
            var1['source'] = var7;
            var2['tags'] = var1;
            var12 = arg1;
            var13 = var4;
            var11 = var6;
            var10 = var5;
            var9 = var2;
            var1 = var13[var3](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot15 = var6;
    var1 = function _createCardToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var6 = null;
                    if(!(var6 != var7)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    if(!(var6 != var8)) { _fun0004_ip = 17; continue _fun0004 }
case 9:
                    var5 = var8.getElement;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 7;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.CardNumberElement;
                    var5 = var5.bind(var8)(var3);
                    if(!(var6 != var5)) { _fun0004_ip = 19; continue _fun0004 }
case 4:
                    var3 = var7.createToken;
                    var3 = var3.bind(var7)(var5);
                    SaveGenerator(address=98);
case 20:
                    return var3;
case 21:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = var3.token;
                    var7 = var3.error;
                    if(!(var6 == var7)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    if(!(var6 != var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var5 = var5.id;
                    return var5;
case 26:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var8 = var6.bind(var4)(var5);
                    var6 = var8.dispatchConfirmationError;
                    var5 = 'token not available with successful stripe call';
                    var5 = var6.bind(var8)(var5);
                    throw var5;
case 24:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.dispatchConfirmationError;
                    var5 = var5.bind(var6)(var7);
                    throw var5;
case 22:
                    return var3;
case 19:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Unable to load card elements from Stripe';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe or elements not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 15:
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
    var1 = function _confirmEPS() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var14 = arg2;
                    var13 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    if(!(var9 != var14)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var11 = var13.email;
                    var12 = var13.name;
                    var21 = var13.line1;
                    var20 = var13.line2;
                    var19 = var13.city;
                    var18 = var13.state;
                    var17 = var13.postalCode;
                    var16 = var13.country;
                    if(!(var9 != var12)) { _fun0005_ip = 34; continue _fun0005 }
case 8:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 8;
                    var3 = var2[var3];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var3);
                    var5 = var8.dispatch;
                    var3 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var3['type'] = var10;
                    var3 = var5.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var8 = 6;
                    var2 = var2[var8];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var3)(var13);
                    SaveGenerator(address=166);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var5 = var6.createPaymentMethod;
                    var3 = {};
                    var10 = 'eps';
                    var3['type'] = var10;
                    var10 = {};
                    var10['bank'] = var14;
                    var3['eps'] = var10;
                    var10 = {};
                    var15 = {};
                    var15['line1'] = var21;
                    var15['line2'] = var20;
                    var15['city'] = var19;
                    var15['state'] = var18;
                    var15['postal_code'] = var17;
                    var15['country'] = var16;
                    var10['address'] = var15;
                    var10['name'] = var12;
                    var10['email'] = var11;
                    var3['billing_details'] = var10;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=264);
case 39:
                    return var3;
case 40:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    if(!(var9 != var5)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var8];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.createPaymentSource;
                    var9 = _closure1_slot6;
                    var25 = var9.STRIPE;
                    var24 = var5.id;
                    var5 = {};
                    var5['billingAddressToken'] = var2;
                    var15 = arg4;
                    var5['analyticsLocation'] = var15;
                    var5['bank'] = var14;
                    var26 = var12;
                    var23 = var13;
                    var22 = var5;
                    var5 = var26[var11](var25, var24, var23, var22, var21);
                    return var5;
case 45:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'paymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 43:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 41:
                    return var3;
case 37:
                    return var2;
case 34:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Name required for EPS';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 32:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Bank required for EPS';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 30:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 28:
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
    var1 = function _confirmIdeal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var13 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 47; continue _fun0006 }
case 16:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0006_ip = 48; continue _fun0006 }
case 18:
                    var11 = var13.email;
                    var12 = var13.name;
                    var20 = var13.line1;
                    var19 = var13.line2;
                    var18 = var13.city;
                    var17 = var13.state;
                    var16 = var13.postalCode;
                    var15 = var13.country;
                    if(!(var9 != var12)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 8;
                    var3 = var2[var3];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var3);
                    var5 = var8.dispatch;
                    var3 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var3['type'] = var10;
                    var3 = var5.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var8 = 6;
                    var2 = var2[var8];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var3)(var13);
                    SaveGenerator(address=156);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var5 = var6.createPaymentMethod;
                    var3 = {};
                    var10 = 'ideal';
                    var3['type'] = var10;
                    var10 = {};
                    var3['ideal'] = var10;
                    var10 = {};
                    var14 = {};
                    var14['line1'] = var20;
                    var14['line2'] = var19;
                    var14['city'] = var18;
                    var14['state'] = var17;
                    var14['postal_code'] = var16;
                    var14['country'] = var15;
                    var10['address'] = var14;
                    var10['name'] = var12;
                    var10['email'] = var11;
                    var3['billing_details'] = var10;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=249);
case 55:
                    return var3;
case 56:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0006_ip = 59; continue _fun0006 }
case 42:
                    if(!(var9 != var5)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var8];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.createPaymentSource;
                    var9 = _closure1_slot6;
                    var24 = var9.STRIPE;
                    var23 = var5.id;
                    var5 = {};
                    var5['billingAddressToken'] = var2;
                    var14 = arg3;
                    var5['analyticsLocation'] = var14;
                    var25 = var12;
                    var22 = var13;
                    var21 = var5;
                    var5 = var25[var11](var24, var23, var22, var21, var20);
                    return var5;
case 60:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'paymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 59:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 57:
                    return var3;
case 53:
                    return var2;
case 49:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Name required for iDEAL';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 48:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _confirmPrzelewy() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var13 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 16:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0007_ip = 63; continue _fun0007 }
case 18:
                    var11 = var13.email;
                    var12 = var13.name;
                    var21 = var13.line1;
                    var20 = var13.line2;
                    var19 = var13.city;
                    var18 = var13.state;
                    var17 = var13.postalCode;
                    var16 = var13.country;
                    if(!(var9 != var11)) { _fun0007_ip = 64; continue _fun0007 }
case 50:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 8;
                    var3 = var2[var3];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var3);
                    var5 = var8.dispatch;
                    var3 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var3['type'] = var10;
                    var3 = var5.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var8 = 6;
                    var2 = var2[var8];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var3)(var13);
                    SaveGenerator(address=156);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 65; continue _fun0007 }
case 54:
                    var3 = arg2;
                    var14 = var3.p24Bank;
                    var5 = var6.createPaymentMethod;
                    var3 = {};
                    var10 = 'p24';
                    var3['type'] = var10;
                    var10 = {};
                    var10['bank'] = var14;
                    var3['p24'] = var10;
                    var10 = {};
                    var15 = {};
                    var15['line1'] = var21;
                    var15['line2'] = var20;
                    var15['city'] = var19;
                    var15['state'] = var18;
                    var15['postal_code'] = var17;
                    var15['country'] = var16;
                    var10['address'] = var15;
                    var10['name'] = var12;
                    var10['email'] = var11;
                    var3['billing_details'] = var10;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=265);
case 66:
                    return var3;
case 67:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0007_ip = 70; continue _fun0007 }
case 15:
                    if(!(var9 != var5)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var8];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.createPaymentSource;
                    var9 = _closure1_slot6;
                    var25 = var9.STRIPE;
                    var24 = var5.id;
                    var5 = {};
                    var5['billingAddressToken'] = var2;
                    var15 = arg4;
                    var5['analyticsLocation'] = var15;
                    var5['bank'] = var14;
                    var26 = var12;
                    var23 = var13;
                    var22 = var5;
                    var5 = var26[var11](var25, var24, var23, var22, var21);
                    return var5;
case 71:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'paymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 70:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 68:
                    return var3;
case 65:
                    return var2;
case 64:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Email required for Przelewy24';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 63:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 62:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function validateSetupIntentResponse(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var5 = null;
            if(!(var5 == var3)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            if(!(var5 != var4)) { _fun0008_ip = 75; continue _fun0008 }
case 29:
            var1 = var4.payment_method;
            if(!(var5 != var1)) { _fun0008_ip = 20; continue _fun0008 }
case 76:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 9;
            var1 = var6[var1];
            var7 = undefined;
            var6 = var5.bind(var7)(var1);
            var1 = var4.payment_method;
            var5 = 'string';
            var1 = typeof var1;
            var5 = var5 === var1;
            var1 = 'setupIntent.payment_method expanded not supported';
            var1 = var6.bind(var7)(var5, var1);
            var1 = {};
            var1['setupIntent'] = var4;
            var1['error'] = var3;
            return var1;
case 20:
            var4 = undefined;
            var1 = 'setupIntent.payment_method not available with successful stripe call';
            var1 = var2.bind(var4)(var1);
            throw var1;
case 75:
            var4 = undefined;
            var1 = 'SetupIntent not created';
            var1 = var2.bind(var4)(var1);
            throw var1;
case 73:
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            throw var1;
        }
    };
    var _closure1_slot20 = var1;
    var5 = function submitElementsForPaymentElement() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var5;
    var1 = function _submitElementsForPaymentElement() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0009_ip = 73; continue _fun0009 }
case 29:
                    var2 = var3.submit;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=33);
case 79:
                    return var2;
case 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 27; continue _fun0009 }
case 81:
                    var7 = _closure1_slot11;
                    var6 = var7.info;
                    var4 = 'Stripe Elements submit response: ';
                    var4 = var6.bind(var7)(var4, var2);
                    var4 = var2.error;
                    if(!(var5 == var4)) { _fun0009_ip = 11; continue _fun0009 }
case 82:
                    return var2;
case 11:
                    var7 = _closure1_slot11;
                    var6 = var7.error;
                    var5 = var2.error;
                    var4 = 'Stripe Elements submit error: ';
                    var4 = var6.bind(var7)(var4, var5);
                    var6 = _closure1_slot15;
                    var5 = var2.error;
                    var4 = undefined;
                    var3 = true;
                    var3 = var6.bind(var4)(var5, var3);
                    throw var3;
case 27:
                    return var2;
case 73:
                    var5 = _closure1_slot15;
                    var4 = undefined;
                    var3 = 'Stripe Elements not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 77:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function createStripePaymentMethodWithElements() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _createStripePaymentMethodWithElements() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 83; continue _fun0010 }
case 78:
                    var3 = var4.createPaymentMethod;
                    var2 = {};
                    var5 = arg2;
                    var2['elements'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=38);
case 84:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var4 = var2.paymentMethod;
                    var6 = var2.error;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                    if(!(var3 != var4)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                    var3 = {};
                    var3['paymentMethod'] = var4;
                    var3['error'] = var6;
                    return var3;
case 90:
                    var8 = _closure1_slot11;
                    var7 = var8.warn;
                    var5 = {};
                    var5['paymentMethod'] = var4;
                    var5['error'] = var6;
                    var4 = 'Stripe createPaymentMethod failed to return payment method: ';
                    var4 = var7.bind(var8)(var4, var5);
                    var7 = _closure1_slot15;
                    var5 = undefined;
                    var4 = 'paymentMethod not available with successful stripe call';
                    var3 = true;
                    var3 = var7.bind(var5)(var4, var3);
                    throw var3;
case 88:
                    var7 = _closure1_slot11;
                    var5 = var7.error;
                    var4 = 'Stripe createPaymentMethod error: ';
                    var4 = var5.bind(var7)(var4, var6);
                    var5 = _closure1_slot15;
                    var4 = undefined;
                    var3 = true;
                    var3 = var5.bind(var4)(var6, var3);
                    throw var3;
case 86:
                    return var2;
case 83:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _submitElementsAndCreateStripePaymentMethod() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 77; continue _fun0011 }
case 16:
                    var2 = null;
                    if(!(var2 != var6)) { _fun0011_ip = 73; continue _fun0011 }
case 92:
                    if(!(var2 != var5)) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                    var2 = _closure1_slot21;
                    var4 = undefined;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=44);
case 95:
                    return var2;
case 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0011_ip = 21; continue _fun0011 }
case 97:
                    var3 = _closure1_slot23;
                    var3 = var3.bind(var4)(var6, var5);
                    SaveGenerator(address=64);
case 98:
                    return var3;
case 89:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                    var4 = {};
                    var5 = var3.paymentMethod;
                    var4['paymentMethod'] = var5;
                    var5 = var3.error;
                    var4['error'] = var5;
                    return var4;
case 99:
                    return var3;
case 21:
                    return var2;
case 93:
                    var5 = _closure1_slot15;
                    var4 = undefined;
                    var3 = 'Stripe Elements not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 73:
                    var5 = _closure1_slot15;
                    var4 = undefined;
                    var3 = 'Stripe not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 77:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _confirmPaymentElementSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                    var34 = 0;
                    var2 = copyRestArgs(var34);
                    var7 = var2;
                    var3 = var7[Symbol.iterator];
                    var7 = var3().next;
                    var9 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var14 = var7().value;
                    var17 = var3;
                    var17 = var17 === var9;
                    var4 = var17;
                    if(var17) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                    var5 = var14;
case 103:
                    var11 = var5;
                    var5 = undefined;
                    var14 = var4;
                    if(var14) { _fun0012_ip = 10; continue _fun0012 }
case 105:
                    var14 = var7().value;
                    var17 = var3;
                    var17 = var17 === var9;
                    var4 = var17;
                    if(var17) { _fun0012_ip = 10; continue _fun0012 }
case 11:
                    var5 = var14;
case 10:
                    var23 = var5;
                    var5 = undefined;
                    var14 = var4;
                    if(var14) { _fun0012_ip = 106; continue _fun0012 }
case 107:
                    var14 = var7().value;
                    var17 = var3;
                    var17 = var17 === var9;
                    var4 = var17;
                    if(var17) { _fun0012_ip = 106; continue _fun0012 }
case 108:
                    var5 = var14;
case 106: // try_start_0
                    var14 = var5;
                    var12 = var14.billingAddress;
                    var10 = var14.paymentSourceType;
                    var16 = var14.lastConfirmedSetupIntentRef;
                    var8 = var14.createSetupIntent;
case 109: // try_end0
                    var5 = undefined;
                    var14 = var4;
                    if(var14) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                    var7 = var7().value;
                    var14 = var3;
                    var14 = var14 === var9;
                    var4 = var14;
                    if(var14) { _fun0012_ip = 110; continue _fun0012 }
case 36:
                    var5 = var7;
case 110:
                    var19 = var5;
                    var5 = var4;
                    if(var5) { _fun0012_ip = 112; continue _fun0012 }
case 113:
                    var3.return();
case 112:
                    var20 = undefined;
                    var18 = undefined;
                    var13 = undefined;
                    var22 = undefined;
                    var27 = undefined;
                    var15 = undefined;
                    var24 = undefined;
                    var25 = undefined;
                    var28 = undefined;
                    SaveGenerator(address=203);
case 114:
                    return var9;
case 22:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                    var6 = var11;
                    var26 = null;
                    if(!(var26 != var6)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                    var6 = var23;
                    if(!(var26 != var6)) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                    var17 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 8;
                    var7 = var6[var7];
                    var21 = var17.bind(var9)(var7);
                    var17 = var21.dispatch;
                    var7 = {};
                    var29 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var7['type'] = var29;
                    var7 = var17.bind(var21)(var7);
                    var7 = _closure1_slot0;
                    var17 = 6;
                    var6 = var6[var17];
                    var21 = var7.bind(var9)(var6);
                    var7 = var21.validatePaymentSourceBillingAddress;
                    var6 = var12;
                    var6 = var7.bind(var21)(var6);
                    SaveGenerator(address=313);
case 121:
                    return var6;
case 122:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                    var20 = var6;
                    var21 = var10;
                    var7 = _closure1_slot10;
                    var7 = var7.PAYMENT_REQUEST;
                    if(!(var21 !== var7)) { _fun0012_ip = 71; continue _fun0012 }
case 125:
                    var21 = _closure1_slot21;
                    var7 = var23;
                    var7 = var21.bind(var9)(var7);
                    SaveGenerator(address=358);
case 126:
                    return var7;
case 127:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=20);
                    if(var21) { _fun0012_ip = 128; continue _fun0012 }
case 71:
                    var13 = null;
                    var30 = _closure1_slot12;
                    var29 = var30.has;
                    var21 = var10;
                    var21 = var29.bind(var30)(var21);
                    if(var21) { _fun0012_ip = 129; continue _fun0012 }
case 130:
                    var30 = _closure1_slot23;
                    var29 = var11;
                    var21 = var23;
                    var21 = var30.bind(var9)(var29, var21);
                    SaveGenerator(address=412);
case 131:
                    return var21;
case 57:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=28);
                    if(var29) { _fun0012_ip = 132; continue _fun0012 }
case 133:
                    var29 = var21.paymentMethod;
                    var25 = var29;
                    var13 = var29.id;
                    var30 = var10;
                    var29 = _closure1_slot10;
                    var29 = var29.PIX;
                    if(!(var30 === var29)) { _fun0012_ip = 134; continue _fun0012 }
case 135:
                    var25 = var25.billing_details;
                    var28 = var25;
                    var29 = var26 == var25;
                    var25 = undefined;
                    if(var29) { _fun0012_ip = 32; continue _fun0012 }
case 136:
                    var29 = var28;
                    var25 = var29.tax_id;
case 32:
                    if(!(var26 != var25)) { _fun0012_ip = 137; continue _fun0012 }
case 138:
                    var25 = var28;
                    var29 = var25.tax_id;
                    var25 = '';
                    if(!(var25 !== var29)) { _fun0012_ip = 137; continue _fun0012 }
case 139:
                    var25 = {};
                    var28 = var28.tax_id;
                    var25['taxId'] = var28;
                    var18 = var25;
                    _fun0012_ip = 134; continue _fun0012;
case 137:
                    var29 = _closure1_slot15;
                    var28 = 'Missing PIX tax_id from Payment Element';
                    var25 = true;
                    var25 = var29.bind(var9)(var28, var25);
                    throw var25;
case 132:
                    return var21;
case 129:
                    var21 = var16;
                    var21 = var21.current;
                    var22 = var21;
                    var25 = var26 != var21;
                    var21 = undefined;
                    if(!var25) { _fun0012_ip = 28; continue _fun0012 }
case 140:
                    var21 = var22;
case 28:
                    var27 = var21;
                    if(!(var26 != var21)) { _fun0012_ip = 141; continue _fun0012 }
case 142:
                    var22 = var10;
                    var21 = _closure1_slot10;
                    var21 = var21.PAYMENT_REQUEST;
                    if(!(var22 !== var21)) { _fun0012_ip = 143; continue _fun0012 }
case 141:
                    var25 = var11;
                    var22 = var25.confirmSetup;
                    var21 = {};
                    var28 = 'if_required';
                    var21['redirect'] = var28;
                    var28 = var23;
                    var21['elements'] = var28;
                    var22 = var22.bind(var25)(var21);
                    SaveGenerator(address=633);
case 144:
                    return var22;
case 145:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=20);
                    var25 = var21;
                    var21 = var22;
                    if(!var25) { _fun0012_ip = 146; continue _fun0012 }
case 147:
                    return var22;
case 143:
                    var22 = {};
                    var25 = var27;
                    var28 = var26 != var25;
                    var25 = undefined;
                    if(!var28) { _fun0012_ip = 148; continue _fun0012 }
case 149:
                    var25 = var27;
case 148:
                    var22['setupIntent'] = var25;
                    var22['error'] = var9;
                    var21 = var22;
case 146:
                    var15 = var21;
                    var25 = var21.error;
                    var21 = var26 != var25;
                    if(!var21) { _fun0012_ip = 150; continue _fun0012 }
case 151:
                    var27 = var25.code;
                    var22 = 'setup_intent_unexpected_state';
                    var21 = var22 === var27;
case 150:
                    if(!var21) { _fun0012_ip = 152; continue _fun0012 }
case 153:
                    var22 = var25.setup_intent;
                    var21 = var26 != var22;
case 152:
                    if(!var21) { _fun0012_ip = 154; continue _fun0012 }
case 155:
                    var22 = var25.setup_intent;
                    var26 = var22.status;
                    var22 = 'succeeded';
                    var22 = var22 === var26;
                    if(var22) { _fun0012_ip = 156; continue _fun0012 }
case 157:
                    var25 = var25.setup_intent;
                    var26 = var25.status;
                    var25 = 'canceled';
                    var22 = var25 === var26;
case 156:
                    var21 = var22;
case 154:
                    if(!var21) { _fun0012_ip = 158; continue _fun0012 }
case 159:
                    var21 = var10;
                    var10 = _closure1_slot10;
                    var10 = var10.PAYMENT_REQUEST;
                    if(!(var21 !== var10)) { _fun0012_ip = 158; continue _fun0012 }
case 160:
                    var8 = var8.bind(var9)();
                    SaveGenerator(address=795);
case 161:
                    return var8;
case 162:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0012_ip = 163; continue _fun0012 }
case 164:
                    var24 = var8.client_secret;
                    var21 = _closure1_slot21;
                    var10 = var23;
                    var10 = var21.bind(var9)(var10);
                    SaveGenerator(address=826);
case 165:
                    return var10;
case 166:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=20);
                    if(var21) { _fun0012_ip = 167; continue _fun0012 }
case 168:
                    var22 = var11;
                    var21 = var22.confirmSetup;
                    var11 = {};
                    var25 = 'if_required';
                    var11['redirect'] = var25;
                    var11['clientSecret'] = var24;
                    var11['elements'] = var23;
                    var11 = var21.bind(var22)(var11);
                    SaveGenerator(address=876);
case 169:
                    return var11;
case 170:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=20);
                    if(var21) { _fun0012_ip = 171; continue _fun0012 }
case 172:
                    var15 = var11;
case 158:
                    var23 = _closure1_slot20;
                    var22 = var15.setupIntent;
                    var21 = var15.error;
                    var15 = function(arg1) {
                        var4 = _closure1_slot15;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var15 = var23.bind(var9)(var22, var21, var15);
                    var15 = var15.setupIntent;
                    var16['current'] = var15;
                    var13 = var15.payment_method;
case 134:
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var15 = var15[var17];
                    var17 = var16.bind(var9)(var15);
                    var16 = var17.createPaymentSource;
                    var14 = _closure1_slot6;
                    var34 = var14.STRIPE;
                    var33 = var13;
                    var32 = var12;
                    var12 = {};
                    var12['billingAddressToken'] = var20;
                    var12['analyticsLocation'] = var19;
                    var12['pix'] = var18;
                    var35 = var17;
                    var31 = var12;
                    var12 = var35[var16](var34, var33, var32, var31, var30);
                    return var12;
case 171:
                    return var11;
case 167:
                    return var10;
case 163:
                    return var8;
case 128:
                    return var7;
case 123:
                    return var6;
case 119:
                    var8 = _closure1_slot15;
                    var7 = 'Stripe Elements not loaded';
                    var6 = true;
                    var6 = var8.bind(var9)(var7, var6);
                    throw var6;
case 117:
                    var8 = _closure1_slot15;
                    var7 = 'Stripe not loaded';
                    var6 = true;
                    var6 = var8.bind(var9)(var7, var6);
                    throw var6;
case 115:
                    return var5;
case 173: // catch_target0
                    CatchBlockStart(arg_register=1);
                    _fun0012_ip = 174; continue _fun0012;
case 175:
                    CatchBlockStart(arg_register=1);
case 174:
                    if(var4) { _fun0012_ip = 176; continue _fun0012 }
case 177:
                    var3.return();
case 176:
                    throw var2;
case 101:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _confirmCardPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 178; continue _fun0013 }
case 78:
                    var8 = var2;
                    var17 = arg2;
                    var7 = arg3;
                    var13 = arg4;
                    var4 = undefined;
                    var6 = undefined;
                    var14 = undefined;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0013_ip = 41; continue _fun0013 }
case 179:
                    var2 = var17;
                    if(!(var3 != var2)) { _fun0013_ip = 41; continue _fun0013 }
case 97:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 8;
                    var5 = var10[var5];
                    var10 = var9.bind(var4)(var5);
                    var9 = var10.dispatch;
                    var5 = {};
                    var11 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var5['type'] = var11;
                    var5 = var9.bind(var10)(var5);
                    var6 = null;
case 180: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 10;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.createStripeSetupIntent;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=131);
case 181:
                    return var3;
case 26:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0013_ip = 182; continue _fun0013 }
case 183:
                    var6 = var3.client_secret;
case 184: // try_end0
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var11 = 6;
                    var5 = var5[var11];
                    var10 = var9.bind(var4)(var5);
                    var9 = var10.validatePaymentSourceBillingAddress;
                    var5 = var7;
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=184);
case 83:
                    return var5;
case 185:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0013_ip = 186; continue _fun0013 }
case 187:
                    var14 = var5;
                    var10 = _closure1_slot2;
                    var12 = _closure1_slot3;
                    var9 = 11;
                    var9 = var12[var9];
                    var12 = var10.bind(var4)(var9);
                    var10 = var12.parseBillingAddressInfoToStripeBillingDetails;
                    var9 = var7;
                    var15 = var10.bind(var12)(var9);
                    var10 = var8;
                    var9 = var10.confirmCardSetup;
                    var8 = var6;
                    var6 = {};
                    var12 = {};
                    var16 = {};
                    var16['token'] = var17;
                    var12['card'] = var16;
                    var12['billing_details'] = var15;
                    var6['payment_method'] = var12;
                    var6 = var9.bind(var10)(var8, var6);
                    SaveGenerator(address=280);
case 188:
                    return var6;
case 189:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0013_ip = 190; continue _fun0013 }
case 191:
                    var12 = _closure1_slot20;
                    var10 = var6.setupIntent;
                    var9 = var6.error;
                    var8 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatchConfirmationError;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var8 = var12.bind(var4)(var10, var9, var8);
                    var8 = var8.setupIntent;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var11];
                    var12 = var10.bind(var4)(var9);
                    var11 = var12.createPaymentSource;
                    var9 = _closure1_slot6;
                    var21 = var9.STRIPE;
                    var20 = var8.payment_method;
                    var19 = var7;
                    var7 = {};
                    var7['billingAddressToken'] = var14;
                    var7['analyticsLocation'] = var13;
                    var22 = var12;
                    var18 = var7;
                    var7 = var22[var11](var21, var20, var19, var18, var17);
                    return var7;
case 190:
                    return var6;
case 186:
                    return var5;
case 182:
                    return var3;
case 192: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 6;
                    var2 = var6[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.dispatchConfirmationError;
                    var2 = var2.bind(var3)(var5);
                    throw var2;
case 41:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe or token not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 178:
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
    var1 = function _createStripePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var13 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 193; continue _fun0014 }
case 16:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0014_ip = 194; continue _fun0014 }
case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var8 = 6;
                    var2 = var2[var8];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var3)(var13);
                    SaveGenerator(address=65);
case 195:
                    return var2;
case 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 197; continue _fun0014 }
case 198:
                    var11 = var13.name;
                    var19 = var13.line1;
                    var18 = var13.line2;
                    var17 = var13.city;
                    var16 = var13.state;
                    var15 = var13.postalCode;
                    var14 = var13.country;
                    var10 = _closure1_slot9;
                    var5 = var10.get;
                    var3 = arg3;
                    var10 = var5.bind(var10)(var3);
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var3 = 9;
                    var3 = var12[var3];
                    var12 = var5.bind(var7)(var3);
                    var5 = var9 != var10;
                    var3 = 'unsupported payment method type';
                    var3 = var12.bind(var7)(var5, var3);
                    var5 = var6.createPaymentMethod;
                    var3 = {};
                    var3['type'] = var10;
                    var10 = {};
                    var12 = {};
                    var12['line1'] = var19;
                    var12['line2'] = var18;
                    var12['city'] = var17;
                    var12['state'] = var16;
                    var12['postal_code'] = var15;
                    var12['country'] = var14;
                    var10['address'] = var12;
                    var10['name'] = var11;
                    var3['billing_details'] = var10;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=235);
case 199:
                    return var3;
case 200:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 201; continue _fun0014 }
case 202:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0014_ip = 203; continue _fun0014 }
case 204:
                    if(!(var9 != var5)) { _fun0014_ip = 205; continue _fun0014 }
case 66:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var8];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.createPaymentSource;
                    var9 = _closure1_slot6;
                    var23 = var9.STRIPE;
                    var22 = var5.id;
                    var5 = {};
                    var5['billingAddressToken'] = var2;
                    var14 = arg4;
                    var5['analyticsLocation'] = var14;
                    var24 = var12;
                    var21 = var13;
                    var20 = var5;
                    var5 = var24[var11](var23, var22, var21, var20, var19);
                    return var5;
case 205:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'stripePaymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 203:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 201:
                    return var3;
case 197:
                    return var2;
case 194:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 193:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _createAdyenPrepaidPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 206; continue _fun0015 }
case 78:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var7 = 6;
                    var2 = var2[var7];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var4)(var8);
                    SaveGenerator(address=53);
case 207:
                    return var2;
case 208:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 209; continue _fun0015 }
case 105:
                    var9 = {};
                    var10 = _closure1_slot8;
                    var5 = var10.get;
                    var4 = arg2;
                    var4 = var5.bind(var10)(var4);
                    var9['type'] = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var7 = var5.bind(var6)(var4);
                    var6 = var7.createPaymentSource;
                    var3 = _closure1_slot6;
                    var5 = var3.ADYEN;
                    var3 = global;
                    var4 = var3.JSON;
                    var3 = var4.stringify;
                    var13 = var3.bind(var4)(var9);
                    var3 = {};
                    var3['billingAddressToken'] = var2;
                    var9 = arg3;
                    var3['analyticsLocation'] = var9;
                    var15 = var7;
                    var14 = var5;
                    var12 = var8;
                    var11 = var3;
                    var3 = var15[var6](var14, var13, var12, var11, var10);
                    return var3;
case 209:
                    return var2;
case 206:
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
    var1 = function _createAdyenVaultablePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var22 = arg2;
                    var15 = arg4;
                    var2 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 210; continue _fun0016 }
case 29:
                    var12 = arg1;
                    var20 = arg3;
                    var13 = undefined;
                    if(!(var2 === var13)) { _fun0016_ip = 80; continue _fun0016 }
case 79:
                    var2 = false;
case 80:
                    var7 = var2;
                    var21 = undefined;
                    var14 = undefined;
                    var19 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=48);
case 211:
                    return var13;
case 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 212; continue _fun0016 }
case 213:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 6;
                    var3 = var3[var8];
                    var10 = var4.bind(var13)(var3);
                    var4 = var10.validatePaymentSourceBillingAddress;
                    var3 = var12;
                    var3 = var4.bind(var10)(var3);
                    SaveGenerator(address=98);
case 20:
                    return var3;
case 21:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 214; continue _fun0016 }
case 108:
                    var21 = var3;
                    var4 = {};
                    var11 = _closure1_slot8;
                    var10 = var11.get;
                    var10 = var10.bind(var11)(var22);
                    var4['type'] = var10;
                    var11 = null;
                    var16 = var11 == var15;
                    var10 = undefined;
                    if(var16) { _fun0016_ip = 215; continue _fun0016 }
case 109:
                    var10 = var15.paymentMethod;
case 215:
                    if(!(var11 == var10)) { _fun0016_ip = 216; continue _fun0016 }
case 77:
                    var10 = {};
case 216:
                    var27 = var4;
                    var26 = var10;
                    var10 = copyDataProperties(var27, var26);
                    var14 = var4;
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var10 = var10.bind(var13)(var4);
                    var4 = var10.popupBridgeState;
                    var4 = var4.bind(var10)(var22);
                    SaveGenerator(address=198);
case 217:
                    return var4;
case 218:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0016_ip = 219; continue _fun0016 }
case 220:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var10 = 4;
                    var10 = var16[var10];
                    var15 = var15.bind(var13)(var10);
                    var10 = var15.getAPIBaseURL;
                    var15 = var10.bind(var15)();
                    var18 = _closure1_slot5;
                    var17 = var18.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var10 = var11 != var4;
                    var16 = '';
                    if(!var10) { _fun0016_ip = 221; continue _fun0016 }
case 58:
                    var16 = var4;
case 221:
                    var10 = 'success';
                    var10 = var17.bind(var18)(var22, var16, var10);
                    var19 = var15 + var10;
case 222: // try_start_0
                    var10 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var15 = var15[var8];
                    var18 = var16.bind(var13)(var15);
                    var17 = var18.createPaymentSource;
                    var15 = _closure1_slot6;
                    var16 = var15.ADYEN;
                    var15 = global;
                    var22 = var15.JSON;
                    var15 = var22.stringify;
                    var26 = var15.bind(var22)(var14);
                    var25 = var12;
                    var12 = {};
                    var12['billingAddressToken'] = var21;
                    var12['analyticsLocation'] = var20;
                    var12['returnUrl'] = var19;
                    var23 = var7;
                    var28 = var18;
                    var27 = var16;
                    var24 = var12;
                    var7 = var28[var17](var27, var26, var25, var24, var23, var22);
                    SaveGenerator(address=370);
case 203:
                    return var7;
case 223:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0016_ip = 186; continue _fun0016 }
case 224:
                    var10['paymentSource'] = var7;
                    var12 = false;
                    var10['redirectConfirmation'] = var12;
case 190: // try_end0
                    return var10;
case 186:
                    return var7;
case 182: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var5 = var7;
                    var10 = var7.code;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var7 = 12;
                    var7 = var14[var7];
                    var7 = var12.bind(var13)(var7);
                    var7 = var7.ErrorCodes;
                    var7 = var7.CONFIRMATION_REQUIRED;
                    if(!(var10 === var7)) { _fun0016_ip = 225; continue _fun0016 }
case 226:
                    var7 = var5;
                    var7 = var7.fields;
                    var7 = var7.adyen_redirect_url;
                    var6 = var7;
                    if(!(var11 != var7)) { _fun0016_ip = 227; continue _fun0016 }
case 48:
                    var10 = var6;
                    var6 = global;
                    var7 = var6.window;
                    var6 = var7.open;
                    var6 = var6.bind(var7)(var10);
                    var6 = {};
                    var7 = true;
                    var6['redirectConfirmation'] = var7;
                    return var6;
case 227:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var8];
                    var8 = var7.bind(var13)(var6);
                    var7 = var8.dispatchConfirmationError;
                    var6 = 'redirect url cannot be null on a redirect for adyen.';
                    var6 = var7.bind(var8)(var6);
                    throw var6;
case 225:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 8;
                    var6 = var10[var6];
                    var8 = var7.bind(var13)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var12 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                    var6['type'] = var12;
                    var12 = _closure1_slot0;
                    var14 = 13;
                    var10 = var10[var14];
                    var10 = var12.bind(var13)(var10);
                    var12 = var10.BillingError;
                    var10 = var5;
                    var10 = var11 == var10;
                    var17 = undefined;
                    if(var10) { _fun0016_ip = 228; continue _fun0016 }
case 229:
                    var10 = var5;
                    var17 = var10.code;
case 228:
                    var10 = var5;
                    var10 = var11 == var10;
                    var16 = undefined;
                    if(var10) { _fun0016_ip = 144; continue _fun0016 }
case 230:
                    var10 = var5;
                    var16 = var10.message;
case 144:
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var15 = var10.concat;
                    var11 = 'Unable to create payment source token: code: ';
                    var10 = ' message: ';
                    var11 = var15.bind(var11)(var17, var10, var16);
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var14];
                    var9 = var10.bind(var13)(var9);
                    var9 = var9.BillingError;
                    var9 = var9.ErrorCodes;
                    var26 = var9.UNKNOWN;
                    var10 = var12.prototype;
                    var10 = Object.create(var10, {constructor: {value: var12}});
                    var28 = var10;
                    var27 = var11;
                    var9 = new var28[var12](var27, var26, var25);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var6['error'] = var9;
                    var6 = var7.bind(var8)(var6);
                    throw var5;
case 219:
                    return var4;
case 214:
                    return var3;
case 212:
                    return var2;
case 210:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = function createStripePaymentSourceToken() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var4;
    var1 = function _createStripePaymentSourceToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 231; continue _fun0017 }
case 78:
                    var5 = _closure1_slot7;
                    var4 = var5.has;
                    var2 = var9.type;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0017_ip = 232; continue _fun0017 }
case 233:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=77);
case 234:
                    return var2;
case 235:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 236; continue _fun0017 }
case 237:
                    var7 = null;
                    if(!(var7 != var2)) { _fun0017_ip = 238; continue _fun0017 }
case 99:
                    var4 = var9.billingAddress;
                    var8 = var4.email;
                    var11 = var4.name;
                    var17 = var4.line1;
                    var16 = var4.line2;
                    var15 = var4.city;
                    var14 = var4.state;
                    var13 = var4.postalCode;
                    var10 = var4.country;
                    var6 = {};
                    var4 = {};
                    var12 = {};
                    var12['line1'] = var17;
                    var12['line2'] = var16;
                    var12['city'] = var15;
                    var12['state'] = var14;
                    var12['postal_code'] = var13;
                    var12['country'] = var10;
                    var4['address'] = var12;
                    var4['name'] = var11;
                    var6['billing_details'] = var4;
                    var11 = var9.type;
                    var4 = _closure1_slot10;
                    var4 = var4.GIROPAY;
                    if(!(var4 !== var11)) { _fun0017_ip = 239; continue _fun0017 }
case 240:
                    var4 = _closure1_slot10;
                    var4 = var4.SOFORT;
                    if(!(var4 !== var11)) { _fun0017_ip = 241; continue _fun0017 }
case 200:
                    var4 = _closure1_slot10;
                    var4 = var4.BANCONTACT;
                    if(!(var4 !== var11)) { _fun0017_ip = 242; continue _fun0017 }
case 243:
                    var4 = _closure1_slot10;
                    var4 = var4.IDEAL;
                    if(!(var4 !== var11)) { _fun0017_ip = 244; continue _fun0017 }
case 245:
                    var4 = _closure1_slot10;
                    var4 = var4.PRZELEWY24;
                    if(!(var4 !== var11)) { _fun0017_ip = 246; continue _fun0017 }
case 191:
                    var4 = _closure1_slot10;
                    var4 = var4.EPS;
                    if(!(var4 !== var11)) { _fun0017_ip = 247; continue _fun0017 }
case 248:
                    var4 = _closure1_slot10;
                    var4 = var4.PIX;
                    if(!(var4 === var11)) { _fun0017_ip = 249; continue _fun0017 }
case 250:
                    var4 = 'pix';
                    var6['type'] = var4;
                    var11 = var6.billing_details;
                    var4 = var9.email;
                    var11['email'] = var4;
                    var11 = var6.billing_details;
                    var12 = var9.pixMetadata;
                    var13 = var7 == var12;
                    var4 = undefined;
                    if(var13) { _fun0017_ip = 251; continue _fun0017 }
case 45:
                    var4 = var12.taxId;
case 251:
                    var11['tax_id'] = var4;
                    _fun0017_ip = 249; continue _fun0017;
case 247:
                    var4 = var9.bank;
                    if(!(var7 != var4)) { _fun0017_ip = 252; continue _fun0017 }
case 253:
                    var4 = 'eps';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var9.bank;
                    var4['bank'] = var11;
                    var6['eps'] = var4;
                    _fun0017_ip = 249; continue _fun0017;
case 252:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 13;
                    var13 = var12[var4];
                    var13 = var11.bind(var5)(var13);
                    var13 = var13.BillingError;
                    var4 = var12[var4];
                    var4 = var11.bind(var5)(var4);
                    var4 = var4.BillingError;
                    var4 = var4.ErrorCodes;
                    var19 = var4.UNKNOWN_PAYMENT_SOURCE;
                    var4 = var13.prototype;
                    var11 = Object.create(var4, {constructor: {value: var13}});
                    var20 = 'EPS missing bank information';
                    var21 = var11;
                    var4 = new var21[var13](var20, var19, var18);
                    var4 = var4 instanceof Object ? var4 : var11;
                    throw var4;
case 246:
                    var4 = var9.bank;
                    if(!(var7 != var4)) { _fun0017_ip = 28; continue _fun0017 }
case 254:
                    var4 = 'p24';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var9.bank;
                    var4['bank'] = var11;
                    var6['p24'] = var4;
                    var11 = var6.billing_details;
                    var4 = var9.email;
                    var11['email'] = var4;
                    _fun0017_ip = 249; continue _fun0017;
case 28:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 13;
                    var13 = var12[var4];
                    var13 = var11.bind(var5)(var13);
                    var13 = var13.BillingError;
                    var4 = var12[var4];
                    var4 = var11.bind(var5)(var4);
                    var4 = var4.BillingError;
                    var4 = var4.ErrorCodes;
                    var19 = var4.UNKNOWN_PAYMENT_SOURCE;
                    var4 = var13.prototype;
                    var11 = Object.create(var4, {constructor: {value: var13}});
                    var20 = 'p24 missing bank information';
                    var21 = var11;
                    var4 = new var21[var13](var20, var19, var18);
                    var4 = var4 instanceof Object ? var4 : var11;
                    throw var4;
case 244:
                    var4 = 'ideal';
                    var6['type'] = var4;
                    var4 = {};
                    var9 = var9.bank;
                    var4['bank'] = var9;
                    var6['ideal'] = var4;
                    _fun0017_ip = 249; continue _fun0017;
case 242:
                    var4 = 'bancontact';
                    var6['type'] = var4;
                    _fun0017_ip = 249; continue _fun0017;
case 241:
                    var4 = 'sofort';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var7 != var10;
                    var9 = '';
                    if(!var11) { _fun0017_ip = 255; continue _fun0017 }
case 256:
                    var9 = var10;
case 255:
                    var4['country'] = var9;
                    var6['sofort'] = var4;
                    var4 = var6.billing_details;
                    var4['email'] = var8;
                    _fun0017_ip = 249; continue _fun0017;
case 239:
                    var4 = 'giropay';
                    var6['type'] = var4;
case 249:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 9;
                    var4 = var9[var4];
                    var9 = var8.bind(var5)(var4);
                    var4 = var6.type;
                    var8 = var7 != var4;
                    var4 = 'unsupported payment method type';
                    var4 = var9.bind(var5)(var8, var4);
                    var4 = var2.createPaymentMethod;
                    var4 = var4.bind(var2)(var6);
                    SaveGenerator(address=815);
case 257:
                    return var4;
case 258:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0017_ip = 259; continue _fun0017 }
case 165:
                    var8 = var4.paymentMethod;
                    var6 = var4.error;
                    if(!(var7 == var6)) { _fun0017_ip = 260; continue _fun0017 }
case 261:
                    if(!(var7 != var8)) { _fun0017_ip = 260; continue _fun0017 }
case 262:
                    var8 = var8.id;
                    return var8;
case 260:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var10 = 13;
                    var8 = var8[var10];
                    var8 = var9.bind(var5)(var8);
                    var9 = var8.BillingError;
                    var8 = var7 == var6;
                    var12 = undefined;
                    if(var8) { _fun0017_ip = 263; continue _fun0017 }
case 264:
                    var12 = var6.code;
case 263:
                    var7 = var7 == var6;
                    var11 = undefined;
                    if(var7) { _fun0017_ip = 265; continue _fun0017 }
case 266:
                    var11 = var6.message;
case 265:
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var7 = 'Unable to create payment source token: code: ';
                    var6 = ' message: ';
                    var8 = var8.bind(var7)(var12, var6, var11);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var10];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.BillingError;
                    var6 = var6.ErrorCodes;
                    var19 = var6.UNKNOWN;
                    var7 = var9.prototype;
                    var7 = Object.create(var7, {constructor: {value: var9}});
                    var21 = var7;
                    var20 = var8;
                    var6 = new var21[var9](var20, var19, var18);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 259:
                    return var4;
case 238:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 13;
                    var6 = var7[var3];
                    var6 = var4.bind(var5)(var6);
                    var6 = var6.BillingError;
                    var3 = var7[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.BillingError;
                    var3 = var3.ErrorCodes;
                    var19 = var3.UNKNOWN;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var20 = 'Stripe not loaded';
                    var21 = var4;
                    var3 = new var21[var6](var20, var19, var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 236:
                    return var2;
case 232:
                    var2 = null;
                    return var2;
case 231:
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
    var1 = function _paymentIntentSucceeded() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 267; continue _fun0018 }
case 78:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=52);
case 97:
                    return var2;
case 268:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0018_ip = 59; continue _fun0018 }
case 269:
                    var10 = null;
                    if(!(var10 != var2)) { _fun0018_ip = 270; continue _fun0018 }
case 100:
                    if(!(var10 != var6)) { _fun0018_ip = 271; continue _fun0018 }
case 235:
                    var4 = function getClientSecret() {
                        var1 = undefined;
                        var4 = _closure1_slot13;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var6);
                    SaveGenerator(address=93);
case 7:
                    return var4;
case 272:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 273; continue _fun0018 }
case 274:
                    var6 = var2.retrievePaymentIntent;
                    var6 = var6.bind(var2)(var4);
                    SaveGenerator(address=117);
case 275:
                    return var6;
case 276:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0018_ip = 277; continue _fun0018 }
case 73:
                    var7 = var6.paymentIntent;
                    var9 = var6.error;
                    if(!(var10 == var9)) { _fun0018_ip = 67; continue _fun0018 }
case 278:
                    if(!(var10 != var7)) { _fun0018_ip = 279; continue _fun0018 }
case 280:
                    var8 = var7.last_payment_error;
                    if(!(var10 == var8)) { _fun0018_ip = 281; continue _fun0018 }
case 282:
                    var8 = true;
                    return var8;
case 281:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 6;
                    var8 = var11[var8];
                    var10 = var10.bind(var5)(var8);
                    var8 = var10.dispatchConfirmationError;
                    var12 = var7.last_payment_error;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var11 = var7.concat;
                    var7 = 'unable to retrieve payment intent ';
                    var7 = var11.bind(var7)(var12);
                    var7 = var8.bind(var10)(var7);
                    throw var7;
case 279:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 6;
                    var7 = var10[var7];
                    var10 = var8.bind(var5)(var7);
                    var8 = var10.dispatchConfirmationError;
                    var7 = 'paymentIntent not available with successful stripe call';
                    var7 = var8.bind(var10)(var7);
                    throw var7;
case 67:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 6;
                    var7 = var10[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.dispatchConfirmationError;
                    var7 = var7.bind(var8)(var9);
                    throw var7;
case 277:
                    return var6;
case 273:
                    return var4;
case 271:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 6;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatchConfirmationError;
                    var4 = 'payment intent id cannot be null.';
                    var4 = var6.bind(var7)(var4);
                    throw var4;
case 270:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatchConfirmationError;
                    var3 = 'Stripe has not loaded.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 59:
                    return var2;
case 267:
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
    var8 = global;
    var14 = var8.Object;
    var12 = var14.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var14)(var3, var1, var11);
    var1 = 0;
    var11 = var10[var1];
    var1 = undefined;
    var11 = var13.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 1;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var12 = var11.Endpoints;
    var _closure1_slot5 = var12;
    var12 = var11.PaymentGateways;
    var _closure1_slot6 = var12;
    var11 = var11.VAULTABLE_PAYMENT_SOURCES;
    var _closure1_slot7 = var11;
    var11 = 2;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var12 = var11.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot8 = var12;
    var12 = var11.STRIPE_PAYMENT_SOURCES;
    var _closure1_slot9 = var12;
    var11 = var11.PaymentSourceTypes;
    var _closure1_slot10 = var11;
    var12 = 3;
    var12 = var10[var12];
    var14 = var13.bind(var1)(var12);
    var12 = var14.prototype;
    var13 = Object.create(var12, {constructor: {value: var14}});
    var17 = 'BillingPaymentGatewayActionCreators.tsx';
    var18 = var13;
    var12 = new var18[var14](var17, var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot11 = var12;
    var12 = var8.Set;
    var13 = var11.CARD;
    var8 = new Array(2);
    var8[0] = var13;
    var11 = var11.PAYMENT_REQUEST;
    var8[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {constructor: {value: var12}});
    var18 = var11;
    var17 = var8;
    var8 = new var18[var12](var17, var16);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot12 = var8;
    var8 = 14;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/billing/actions/BillingPaymentGatewayActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['createAdyenPaymentSourceToken'] = var7;
    var3['dispatchPaymentElementsConfirmationError'] = var6;
    var6 = function createCardToken() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createCardToken'] = var6;
    var6 = function confirmEPS() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmEPS'] = var6;
    var6 = function confirmIdeal() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmIdeal'] = var6;
    var6 = function confirmPrzelewy24() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmPrzelewy24'] = var6;
    var3['submitElementsForPaymentElement'] = var5;
    var5 = function submitElementsAndCreateStripePaymentMethod() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['submitElementsAndCreateStripePaymentMethod'] = var5;
    var5 = function confirmPaymentElementSource() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmPaymentElementSource'] = var5;
    var5 = function confirmCardPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmCardPaymentSource'] = var5;
    var5 = function createPaymentRequestPaymentSource(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg2;
            var4 = _closure1_slot2;
            var8 = _closure1_slot3;
            var3 = 11;
            var3 = var8[var3];
            var7 = undefined;
            var5 = var4.bind(var7)(var3);
            var4 = var5.parseStripePaymentMethod;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            var6 = var3.token;
            var5 = var3.billingAddressInfo;
            var4 = _closure1_slot0;
            var3 = 6;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.createPaymentSource;
            var2 = _closure1_slot6;
            var2 = var2.STRIPE;
            var7 = null;
            if(!(var7 != var1)) { _fun0019_ip = 99; continue _fun0019 }
case 283:
            var5 = var1;
case 99:
            var1 = {};
            var7 = arg3;
            var1['analyticsLocation'] = var7;
            var13 = var4;
            var12 = var2;
            var11 = var6;
            var10 = var5;
            var9 = var1;
            var1 = var13[var3](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['createPaymentRequestPaymentSource'] = var5;
    var5 = function createBraintreePaymentSource(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var4.bind(var2)(var3);
        var5 = var6.createPaymentSource;
        var1 = _closure1_slot6;
        var10 = var1.BRAINTREE;
        var3 = {};
        var1 = arg3;
        var3['analyticsLocation'] = var1;
        var9 = arg1;
        var8 = arg2;
        var11 = var6;
        var7 = var3;
        var1 = var11[var5](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['createBraintreePaymentSource'] = var5;
    var5 = function createStripePaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createStripePaymentSource'] = var5;
    var5 = function createAdyenPrepaidPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createAdyenPrepaidPaymentSource'] = var5;
    var5 = function createAdyenVaultablePaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createAdyenVaultablePaymentSource'] = var5;
    var3['createStripePaymentSourceToken'] = var4;
    var4 = function createPaymentSourceToken(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot7;
            var2 = var4.has;
            var1 = var5.type;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(var2) { _fun0020_ip = 10; continue _fun0020 }
case 284:
            var6 = _closure1_slot8;
            var4 = var6.has;
            var2 = var5.type;
            var2 = var4.bind(var6)(var2);
            if(var2) { _fun0020_ip = 196; continue _fun0020 }
case 268:
            var4 = _closure1_slot31;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            _fun0020_ip = 11; continue _fun0020;
case 196:
            var4 = _closure1_slot14;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['createPaymentSourceToken'] = var4;
    var2 = function paymentIntentSucceeded() {
        var1 = undefined;
        var4 = _closure1_slot33;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['paymentIntentSucceeded'] = var2;
    return var1;
})();