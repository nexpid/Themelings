// app/actions/BillingPaymentGatewayActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var6;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var11;
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
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _getPaymentIntentInfo() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
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
                    if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 7:
                    var4 = var2.body;
                    var3 = {};
                    var5 = var4.stripe_payment_intent_client_secret;
                    var3['clientSecret'] = var5;
                    var4 = var4.stripe_payment_intent_payment_method_id;
                    var3['paymentMethodId'] = var4;
                    return var3;
case 9:
                    return var2;
case 8:
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
    var8 = function createAdyenPaymentSourceToken(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot8;
            var2 = var3.has;
            var1 = var6.type;
            var2 = var2.bind(var3)(var1);
            var5 = null;
            var1 = null;
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var2 = {};
            var8 = _closure1_slot9;
            var7 = var8.get;
            var6 = var6.type;
            var6 = var7.bind(var8)(var6);
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = var6;
case 12:
            var2['type'] = var5;
            var1 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot18 = var8;
    var7 = function dispatchPaymentElementsConfirmationError(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arguments[1];
            var5 = arguments[2];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var6 = true;
case 14:
            if(!(var5 === var3)) { _fun0004_ip = 13; continue _fun0004 }
case 16:
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
case 13:
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
    var _closure1_slot19 = var7;
    var1 = function _createCardToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var6 = null;
                    if(!(var6 != var7)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    if(!(var6 != var8)) { _fun0005_ip = 19; continue _fun0005 }
case 11:
                    var5 = var8.getElement;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 7;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.CardNumberElement;
                    var5 = var5.bind(var8)(var3);
                    if(!(var6 != var5)) { _fun0005_ip = 21; continue _fun0005 }
case 4:
                    var3 = var7.createToken;
                    var3 = var3.bind(var7)(var5);
                    SaveGenerator(address=98);
case 22:
                    return var3;
case 23:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var5 = var3.token;
                    var7 = var3.error;
                    if(!(var6 == var7)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    if(!(var6 != var5)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var5 = var5.id;
                    return var5;
case 28:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var8 = var6.bind(var4)(var5);
                    var6 = var8.dispatchConfirmationError;
                    var5 = 'token not available with successful stripe call';
                    var5 = var6.bind(var8)(var5);
                    throw var5;
case 26:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 6;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.dispatchConfirmationError;
                    var5 = var5.bind(var6)(var7);
                    throw var5;
case 24:
                    return var3;
case 21:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Unable to load card elements from Stripe';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 19:
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
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _confirmEPS() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var14 = arg2;
                    var13 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    if(!(var9 != var14)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var11 = var13.email;
                    var12 = var13.name;
                    var21 = var13.line1;
                    var20 = var13.line2;
                    var19 = var13.city;
                    var18 = var13.state;
                    var17 = var13.postalCode;
                    var16 = var13.country;
                    if(!(var9 != var12)) { _fun0006_ip = 36; continue _fun0006 }
case 10:
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
case 37:
                    return var2;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 40:
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
case 41:
                    return var3;
case 42:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    if(!(var9 != var5)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
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
case 47:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'paymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 45:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 43:
                    return var3;
case 39:
                    return var2;
case 36:
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
case 34:
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
case 32:
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
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _confirmIdeal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var13 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 18:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0007_ip = 50; continue _fun0007 }
case 20:
                    var11 = var13.email;
                    var12 = var13.name;
                    var20 = var13.line1;
                    var19 = var13.line2;
                    var18 = var13.city;
                    var17 = var13.state;
                    var16 = var13.postalCode;
                    var15 = var13.country;
                    if(!(var9 != var12)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
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
case 53:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 55; continue _fun0007 }
case 56:
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
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0007_ip = 61; continue _fun0007 }
case 44:
                    if(!(var9 != var5)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
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
case 62:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'paymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 61:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 59:
                    return var3;
case 55:
                    return var2;
case 51:
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
case 50:
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
case 49:
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
    var1 = function _confirmPrzelewy() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var13 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 64; continue _fun0008 }
case 18:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0008_ip = 65; continue _fun0008 }
case 20:
                    var11 = var13.email;
                    var12 = var13.name;
                    var21 = var13.line1;
                    var20 = var13.line2;
                    var19 = var13.city;
                    var18 = var13.state;
                    var17 = var13.postalCode;
                    var16 = var13.country;
                    if(!(var9 != var11)) { _fun0008_ip = 66; continue _fun0008 }
case 52:
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
case 53:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 67; continue _fun0008 }
case 56:
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
case 68:
                    return var3;
case 69:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0008_ip = 72; continue _fun0008 }
case 17:
                    if(!(var9 != var5)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
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
case 73:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'paymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 72:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 70:
                    return var3;
case 67:
                    return var2;
case 66:
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
case 65:
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
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _confirmPaymentElementSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                    var31 = 0;
                    var2 = copyRestArgs(var31);
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
                    if(var17) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var5 = var14;
case 77:
                    var11 = var5;
                    var5 = undefined;
                    var14 = var4;
                    if(var14) { _fun0009_ip = 12; continue _fun0009 }
case 79:
                    var14 = var7().value;
                    var17 = var3;
                    var17 = var17 === var9;
                    var4 = var17;
                    if(var17) { _fun0009_ip = 12; continue _fun0009 }
case 13:
                    var5 = var14;
case 12:
                    var22 = var5;
                    var5 = undefined;
                    var14 = var4;
                    if(var14) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var14 = var7().value;
                    var17 = var3;
                    var17 = var17 === var9;
                    var4 = var17;
                    if(var17) { _fun0009_ip = 80; continue _fun0009 }
case 82:
                    var5 = var14;
case 80: // try_start_0
                    var14 = var5;
                    var12 = var14.billingAddress;
                    var8 = var14.paymentSourceType;
                    var16 = var14.lastConfirmedSetupIntentRef;
case 83: // try_end0
                    var5 = undefined;
                    var14 = var4;
                    if(var14) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var7 = var7().value;
                    var14 = var3;
                    var14 = var14 === var9;
                    var4 = var14;
                    if(var14) { _fun0009_ip = 84; continue _fun0009 }
case 86:
                    var5 = var7;
case 84:
                    var18 = var5;
                    var5 = var4;
                    if(var5) { _fun0009_ip = 87; continue _fun0009 }
case 26:
                    var3.return();
case 87:
                    var19 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var24 = undefined;
                    var26 = undefined;
                    var15 = undefined;
                    var23 = undefined;
                    SaveGenerator(address=191);
case 88:
                    return var9;
case 89:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 90; continue _fun0009 }
case 91:
                    var6 = var11;
                    var21 = null;
                    if(!(var21 != var6)) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                    var6 = var22;
                    if(!(var21 != var6)) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var17 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 8;
                    var7 = var6[var7];
                    var20 = var17.bind(var9)(var7);
                    var17 = var20.dispatch;
                    var7 = {};
                    var25 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var7['type'] = var25;
                    var7 = var17.bind(var20)(var7);
                    var7 = _closure1_slot0;
                    var17 = 6;
                    var6 = var6[var17];
                    var20 = var7.bind(var9)(var6);
                    var7 = var20.validatePaymentSourceBillingAddress;
                    var6 = var12;
                    var6 = var7.bind(var20)(var6);
                    SaveGenerator(address=301);
case 96:
                    return var6;
case 97:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var19 = var6;
                    var20 = var8;
                    var7 = _closure1_slot11;
                    var7 = var7.PAYMENT_REQUEST;
                    if(!(var20 !== var7)) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                    var20 = _closure1_slot14;
                    var7 = var22;
                    var7 = var20.bind(var9)(var7);
                    SaveGenerator(address=346);
case 102:
                    return var7;
case 62:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=19);
                    if(var20) { _fun0009_ip = 103; continue _fun0009 }
case 100:
                    var13 = null;
                    var25 = var8;
                    var20 = _closure1_slot11;
                    var20 = var20.CARD;
                    if(!(var25 !== var20)) { _fun0009_ip = 67; continue _fun0009 }
case 104:
                    var25 = var8;
                    var20 = _closure1_slot11;
                    var20 = var20.PAYMENT_REQUEST;
                    if(!(var25 !== var20)) { _fun0009_ip = 67; continue _fun0009 }
case 105:
                    var27 = _closure1_slot15;
                    var25 = var11;
                    var20 = var22;
                    var20 = var27.bind(var9)(var25, var20);
                    SaveGenerator(address=411);
case 106:
                    return var20;
case 107:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=24);
                    if(var25) { _fun0009_ip = 70; continue _fun0009 }
case 108:
                    var25 = var20.paymentMethod;
                    var13 = var25.id;
                    _fun0009_ip = 109; continue _fun0009;
case 70:
                    return var20;
case 67:
                    var20 = var16;
                    var20 = var20.current;
                    var24 = var20;
                    var25 = var21 != var20;
                    var20 = undefined;
                    if(!var25) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                    var20 = var24;
case 110:
                    var26 = var20;
                    if(!(var21 != var20)) { _fun0009_ip = 65; continue _fun0009 }
case 112:
                    var24 = var8;
                    var20 = _closure1_slot11;
                    var20 = var20.PAYMENT_REQUEST;
                    if(!(var24 !== var20)) { _fun0009_ip = 113; continue _fun0009 }
case 65:
                    var25 = var11;
                    var24 = var25.confirmSetup;
                    var20 = {};
                    var27 = 'if_required';
                    var20['redirect'] = var27;
                    var27 = var22;
                    var20['elements'] = var27;
                    var24 = var24.bind(var25)(var20);
                    SaveGenerator(address=522);
case 114:
                    return var24;
case 115:
                    ResumeGenerator(result_out_reg=23, return_bool_out_reg=19);
                    var25 = var20;
                    var20 = var24;
                    if(!var25) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                    return var24;
case 113:
                    var24 = {};
                    var25 = var26;
                    var27 = var21 != var25;
                    var25 = undefined;
                    if(!var27) { _fun0009_ip = 118; continue _fun0009 }
case 119:
                    var25 = var26;
case 118:
                    var24['setupIntent'] = var25;
                    var24['error'] = var9;
                    var20 = var24;
case 116:
                    var15 = var20;
                    var20 = var20.error;
                    var10 = var20;
                    if(!(var21 != var20)) { _fun0009_ip = 120; continue _fun0009 }
case 121:
                    var20 = var10;
                    var24 = var20.code;
                    var20 = 'setup_intent_unexpected_state';
                    if(!(var20 === var24)) { _fun0009_ip = 120; continue _fun0009 }
case 122:
                    var20 = var10;
                    var20 = var20.setup_intent;
                    if(!(var21 != var20)) { _fun0009_ip = 120; continue _fun0009 }
case 123:
                    var10 = var10.setup_intent;
                    var20 = var10.status;
                    var10 = 'succeeded';
                    if(!(var10 === var20)) { _fun0009_ip = 120; continue _fun0009 }
case 124:
                    var10 = var8;
                    var8 = _closure1_slot11;
                    var8 = var8.PAYMENT_REQUEST;
                    if(!(var10 !== var8)) { _fun0009_ip = 120; continue _fun0009 }
case 125:
                    var10 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var8 = 10;
                    var8 = var20[var8];
                    var10 = var10.bind(var9)(var8);
                    var8 = var10.createSetupIntentForPaymentElements;
                    var8 = var8.bind(var10)();
                    SaveGenerator(address=697);
case 126:
                    return var8;
case 127:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0009_ip = 128; continue _fun0009 }
case 129:
                    var23 = var8.client_secret;
                    var20 = _closure1_slot14;
                    var10 = var22;
                    var10 = var20.bind(var9)(var10);
                    SaveGenerator(address=728);
case 130:
                    return var10;
case 131:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=19);
                    if(var20) { _fun0009_ip = 132; continue _fun0009 }
case 133:
                    var21 = var11;
                    var20 = var21.confirmSetup;
                    var11 = {};
                    var24 = 'if_required';
                    var11['redirect'] = var24;
                    var11['clientSecret'] = var23;
                    var11['elements'] = var22;
                    var11 = var20.bind(var21)(var11);
                    SaveGenerator(address=778);
case 134:
                    return var11;
case 135:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=19);
                    if(var20) { _fun0009_ip = 136; continue _fun0009 }
case 137:
                    var15 = var11;
case 120:
                    var22 = _closure1_slot13;
                    var21 = var15.setupIntent;
                    var20 = var15.error;
                    var15 = function(arg1) {
                        var4 = _closure1_slot19;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var15 = var22.bind(var9)(var21, var20, var15);
                    var15 = var15.setupIntent;
                    var16['current'] = var15;
                    var13 = var15.payment_method;
case 109:
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var15 = var15[var17];
                    var17 = var16.bind(var9)(var15);
                    var16 = var17.createPaymentSource;
                    var14 = _closure1_slot6;
                    var31 = var14.STRIPE;
                    var30 = var13;
                    var29 = var12;
                    var12 = {};
                    var12['billingAddressToken'] = var19;
                    var12['analyticsLocation'] = var18;
                    var32 = var17;
                    var28 = var12;
                    var12 = var32[var16](var31, var30, var29, var28, var27);
                    return var12;
case 136:
                    return var11;
case 132:
                    return var10;
case 128:
                    return var8;
case 103:
                    return var7;
case 98:
                    return var6;
case 94:
                    var8 = _closure1_slot19;
                    var7 = 'Stripe Elements not loaded';
                    var6 = true;
                    var6 = var8.bind(var9)(var7, var6);
                    throw var6;
case 92:
                    var8 = _closure1_slot19;
                    var7 = 'Stripe not loaded';
                    var6 = true;
                    var6 = var8.bind(var9)(var7, var6);
                    throw var6;
case 90:
                    return var5;
case 138: // catch_target0
                    CatchBlockStart(arg_register=1);
                    _fun0009_ip = 139; continue _fun0009;
case 140:
                    CatchBlockStart(arg_register=1);
case 139:
                    if(var4) { _fun0009_ip = 141; continue _fun0009 }
case 142:
                    var3.return();
case 141:
                    throw var2;
case 75:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _confirmCardPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 143; continue _fun0010 }
case 144:
                    var8 = var2;
                    var17 = arg2;
                    var7 = arg3;
                    var13 = arg4;
                    var4 = undefined;
                    var6 = undefined;
                    var14 = undefined;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0010_ip = 43; continue _fun0010 }
case 145:
                    var2 = var17;
                    if(!(var3 != var2)) { _fun0010_ip = 43; continue _fun0010 }
case 146:
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
case 147: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 10;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.createStripeSetupIntent;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=131);
case 148:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 149; continue _fun0010 }
case 150:
                    var6 = var3.client_secret;
case 151: // try_end0
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var11 = 6;
                    var5 = var5[var11];
                    var10 = var9.bind(var4)(var5);
                    var9 = var10.validatePaymentSourceBillingAddress;
                    var5 = var7;
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=184);
case 152:
                    return var5;
case 153:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0010_ip = 105; continue _fun0010 }
case 154:
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
case 155:
                    return var6;
case 156:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0010_ip = 157; continue _fun0010 }
case 158:
                    var12 = var6.setupIntent;
                    var10 = var6.error;
                    var9 = _closure1_slot13;
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
                    var8 = var9.bind(var4)(var12, var10, var8);
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
case 157:
                    return var6;
case 105:
                    return var5;
case 149:
                    return var3;
case 159: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 6;
                    var2 = var6[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.dispatchConfirmationError;
                    var2 = var2.bind(var3)(var5);
                    throw var2;
case 43:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Stripe or token not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 143:
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
    var1 = function _createStripePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var13 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 160; continue _fun0011 }
case 18:
                    var9 = null;
                    if(!(var9 != var6)) { _fun0011_ip = 161; continue _fun0011 }
case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var8 = 6;
                    var2 = var2[var8];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var3)(var13);
                    SaveGenerator(address=65);
case 162:
                    return var2;
case 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 164; continue _fun0011 }
case 165:
                    var11 = var13.name;
                    var19 = var13.line1;
                    var18 = var13.line2;
                    var17 = var13.city;
                    var16 = var13.state;
                    var15 = var13.postalCode;
                    var14 = var13.country;
                    var10 = _closure1_slot10;
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
case 166:
                    return var3;
case 167:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 168; continue _fun0011 }
case 169:
                    var5 = var3.paymentMethod;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0011_ip = 170; continue _fun0011 }
case 171:
                    if(!(var9 != var5)) { _fun0011_ip = 172; continue _fun0011 }
case 68:
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
case 172:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.dispatchConfirmationError;
                    var5 = 'stripePaymentMethod not available with successful stripe call';
                    var5 = var9.bind(var10)(var5);
                    throw var5;
case 170:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 168:
                    return var3;
case 164:
                    return var2;
case 161:
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
case 160:
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
    var1 = function _createAdyenPrepaidPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 173; continue _fun0012 }
case 144:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var7 = 6;
                    var2 = var2[var7];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.validatePaymentSourceBillingAddress;
                    var2 = var2.bind(var4)(var8);
                    SaveGenerator(address=53);
case 174:
                    return var2;
case 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 176; continue _fun0012 }
case 79:
                    var9 = {};
                    var10 = _closure1_slot9;
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
case 176:
                    return var2;
case 173:
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
    var1 = function _createAdyenVaultablePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var22 = arg2;
                    var15 = arg4;
                    var2 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 131; continue _fun0013 }
case 31:
                    var12 = arg1;
                    var20 = arg3;
                    var13 = undefined;
                    if(!(var2 === var13)) { _fun0013_ip = 177; continue _fun0013 }
case 178:
                    var2 = false;
case 177:
                    var7 = var2;
                    var21 = undefined;
                    var14 = undefined;
                    var19 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=48);
case 179:
                    return var13;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 180; continue _fun0013 }
case 181:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var8 = 6;
                    var3 = var3[var8];
                    var10 = var4.bind(var13)(var3);
                    var4 = var10.validatePaymentSourceBillingAddress;
                    var3 = var12;
                    var3 = var4.bind(var10)(var3);
                    SaveGenerator(address=98);
case 22:
                    return var3;
case 23:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 182; continue _fun0013 }
case 82:
                    var21 = var3;
                    var4 = {};
                    var11 = _closure1_slot9;
                    var10 = var11.get;
                    var10 = var10.bind(var11)(var22);
                    var4['type'] = var10;
                    var11 = null;
                    var16 = var11 == var15;
                    var10 = undefined;
                    if(var16) { _fun0013_ip = 183; continue _fun0013 }
case 85:
                    var10 = var15.paymentMethod;
case 183:
                    if(!(var11 == var10)) { _fun0013_ip = 184; continue _fun0013 }
case 185:
                    var10 = {};
case 184:
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
case 186:
                    return var4;
case 187:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0013_ip = 188; continue _fun0013 }
case 189:
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
                    if(!var10) { _fun0013_ip = 190; continue _fun0013 }
case 60:
                    var16 = var4;
case 190:
                    var10 = 'success';
                    var10 = var17.bind(var18)(var22, var16, var10);
                    var19 = var15 + var10;
case 191: // try_start_0
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
case 170:
                    return var7;
case 192:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0013_ip = 105; continue _fun0013 }
case 193:
                    var10['paymentSource'] = var7;
                    var12 = false;
                    var10['redirectConfirmation'] = var12;
case 157: // try_end0
                    return var10;
case 105:
                    return var7;
case 149: // catch_target0
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
                    if(!(var10 === var7)) { _fun0013_ip = 194; continue _fun0013 }
case 195:
                    var7 = var5;
                    var7 = var7.fields;
                    var7 = var7.adyen_redirect_url;
                    var6 = var7;
                    if(!(var11 != var7)) { _fun0013_ip = 65; continue _fun0013 }
case 50:
                    var7 = _closure1_slot34;
                    var6 = var7.bind(var13)(var6);
                    var6 = {};
                    var7 = true;
                    var6['redirectConfirmation'] = var7;
                    return var6;
case 65:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var8];
                    var8 = var7.bind(var13)(var6);
                    var7 = var8.dispatchConfirmationError;
                    var6 = 'redirect url cannot be null on a redirect for adyen.';
                    var6 = var7.bind(var8)(var6);
                    throw var6;
case 194:
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
                    if(var10) { _fun0013_ip = 196; continue _fun0013 }
case 197:
                    var10 = var5;
                    var17 = var10.code;
case 196:
                    var10 = var5;
                    var10 = var11 == var10;
                    var16 = undefined;
                    if(var10) { _fun0013_ip = 198; continue _fun0013 }
case 199:
                    var10 = var5;
                    var16 = var10.message;
case 198:
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
case 188:
                    return var4;
case 182:
                    return var3;
case 180:
                    return var2;
case 131:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = function createStripePaymentSourceToken() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var4;
    var1 = function _createStripePaymentSourceToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 200; continue _fun0014 }
case 144:
                    var5 = _closure1_slot8;
                    var4 = var5.has;
                    var2 = var9.type;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0014_ip = 201; continue _fun0014 }
case 202:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=77);
case 203:
                    return var2;
case 204:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 205; continue _fun0014 }
case 206:
                    var7 = null;
                    if(!(var7 != var2)) { _fun0014_ip = 207; continue _fun0014 }
case 208:
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
                    var4 = _closure1_slot11;
                    var4 = var4.GIROPAY;
                    if(!(var4 !== var11)) { _fun0014_ip = 209; continue _fun0014 }
case 210:
                    var4 = _closure1_slot11;
                    var4 = var4.SOFORT;
                    if(!(var4 !== var11)) { _fun0014_ip = 211; continue _fun0014 }
case 167:
                    var4 = _closure1_slot11;
                    var4 = var4.BANCONTACT;
                    if(!(var4 !== var11)) { _fun0014_ip = 212; continue _fun0014 }
case 213:
                    var4 = _closure1_slot11;
                    var4 = var4.IDEAL;
                    if(!(var4 !== var11)) { _fun0014_ip = 214; continue _fun0014 }
case 215:
                    var4 = _closure1_slot11;
                    var4 = var4.PRZELEWY24;
                    if(!(var4 !== var11)) { _fun0014_ip = 216; continue _fun0014 }
case 158:
                    var4 = _closure1_slot11;
                    var4 = var4.EPS;
                    if(!(var4 === var11)) { _fun0014_ip = 217; continue _fun0014 }
case 218:
                    var4 = var9.bank;
                    if(!(var7 != var4)) { _fun0014_ip = 219; continue _fun0014 }
case 220:
                    var4 = 'eps';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var9.bank;
                    var4['bank'] = var11;
                    var6['eps'] = var4;
                    _fun0014_ip = 217; continue _fun0014;
case 219:
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
case 216:
                    var4 = var9.bank;
                    if(!(var7 != var4)) { _fun0014_ip = 221; continue _fun0014 }
case 36:
                    var4 = 'p24';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var9.bank;
                    var4['bank'] = var11;
                    var6['p24'] = var4;
                    var11 = var6.billing_details;
                    var4 = var9.email;
                    var11['email'] = var4;
                    _fun0014_ip = 217; continue _fun0014;
case 221:
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
case 214:
                    var4 = 'ideal';
                    var6['type'] = var4;
                    var4 = {};
                    var9 = var9.bank;
                    var4['bank'] = var9;
                    var6['ideal'] = var4;
                    _fun0014_ip = 217; continue _fun0014;
case 212:
                    var4 = 'bancontact';
                    var6['type'] = var4;
                    _fun0014_ip = 217; continue _fun0014;
case 211:
                    var4 = 'sofort';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var7 != var10;
                    var9 = '';
                    if(!var11) { _fun0014_ip = 222; continue _fun0014 }
case 223:
                    var9 = var10;
case 222:
                    var4['country'] = var9;
                    var6['sofort'] = var4;
                    var4 = var6.billing_details;
                    var4['email'] = var8;
                    _fun0014_ip = 217; continue _fun0014;
case 209:
                    var4 = 'giropay';
                    var6['type'] = var4;
case 217:
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
                    SaveGenerator(address=735);
case 224:
                    return var4;
case 225:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0014_ip = 226; continue _fun0014 }
case 227:
                    var8 = var4.paymentMethod;
                    var6 = var4.error;
                    if(!(var7 == var6)) { _fun0014_ip = 228; continue _fun0014 }
case 229:
                    if(!(var7 != var8)) { _fun0014_ip = 228; continue _fun0014 }
case 230:
                    var8 = var8.id;
                    return var8;
case 228:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var10 = 13;
                    var8 = var8[var10];
                    var8 = var9.bind(var5)(var8);
                    var9 = var8.BillingError;
                    var8 = var7 == var6;
                    var12 = undefined;
                    if(var8) { _fun0014_ip = 231; continue _fun0014 }
case 232:
                    var12 = var6.code;
case 231:
                    var7 = var7 == var6;
                    var11 = undefined;
                    if(var7) { _fun0014_ip = 233; continue _fun0014 }
case 234:
                    var11 = var6.message;
case 233:
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
case 226:
                    return var4;
case 207:
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
case 205:
                    return var2;
case 201:
                    var2 = null;
                    return var2;
case 200:
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
    var1 = function _handleAdyenConfirmation() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 235; continue _fun0015 }
case 18:
                    var3 = null;
                    if(!(var3 != var4)) { _fun0015_ip = 151; continue _fun0015 }
case 20:
                    if(!(var3 != var2)) { _fun0015_ip = 236; continue _fun0015 }
case 237:
                    var6 = _closure1_slot7;
                    var3 = var6.has;
                    var2 = var2.type;
                    var2 = var3.bind(var6)(var2);
                    var3 = {};
                    if(var2) { _fun0015_ip = 238; continue _fun0015 }
case 239:
                    var2 = false;
                    var3['redirectConfirmation'] = var2;
                    var3['redirectURL'] = var4;
                    var2 = var3;
                    _fun0015_ip = 240; continue _fun0015;
case 238:
                    var6 = _closure1_slot34;
                    var5 = undefined;
                    var5 = var6.bind(var5)(var4);
                    var5 = true;
                    var3['redirectConfirmation'] = var5;
                    var3['redirectURL'] = var4;
                    var2 = var3;
case 240:
                    return var2;
case 236:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'Payment source cannot be null on a redirect.';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 151:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatchConfirmationError;
                    var2 = 'redirect url cannot be null on a redirect for adyen.';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 235:
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
    var1 = function _handleStripeConfirmation() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 149; continue _fun0016 }
case 241:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=54);
case 242:
                    return var2;
case 243:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 105; continue _fun0016 }
case 162:
                    var8 = null;
                    if(!(var8 != var11)) { _fun0016_ip = 244; continue _fun0016 }
case 245:
                    var6 = function getPaymentIntentInfo() {
                        var1 = undefined;
                        var4 = _closure1_slot17;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = arg1;
                    var4 = var6.bind(var5)(var4);
                    SaveGenerator(address=89);
case 246:
                    return var4;
case 247:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 248; continue _fun0016 }
case 23:
                    var10 = var4.clientSecret;
                    var6 = var4.paymentMethodId;
                    if(!(var8 != var2)) { _fun0016_ip = 99; continue _fun0016 }
case 249:
                    var12 = _closure1_slot7;
                    var9 = var12.has;
                    var8 = var11.type;
                    var8 = var9.bind(var12)(var8);
                    if(var8) { _fun0016_ip = 186; continue _fun0016 }
case 250:
                    var8 = {};
                    var8['stripe'] = var2;
                    var8['clientSecret'] = var10;
                    var8['paymentMethodId'] = var6;
                    var8['paymentSource'] = var11;
                    var6 = function confirmPayments() {
                        var1 = undefined;
                        var4 = _closure1_slot35;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var6 = var6.bind(var5)(var8);
                    SaveGenerator(address=175);
case 87:
                    return var6;
case 40:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 154; continue _fun0016 }
case 251:
                    var8 = {};
                    var9 = false;
                    var8['redirectConfirmation'] = var9;
                    return var8;
case 154:
                    return var6;
case 186:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 6;
                    var6 = var9[var6];
                    var9 = var8.bind(var5)(var6);
                    var8 = var9.popupBridgeState;
                    var6 = var11.type;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=236);
case 252:
                    return var6;
case 253:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0016_ip = 254; continue _fun0016 }
case 255:
                    var8 = _closure1_slot34;
                    var9 = {};
                    var9['stripe'] = var2;
                    var9['paymentSource'] = var11;
                    var9['clientSecret'] = var10;
                    var9['state'] = var6;
                    var7 = function getStripeRedirect() {
                        var1 = undefined;
                        var4 = _closure1_slot36;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var5)(var9);
                    SaveGenerator(address=281);
case 256:
                    return var7;
case 257:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0016_ip = 258; continue _fun0016 }
case 259:
                    var8 = var8.bind(var5)(var7);
                    var8 = {};
                    var9 = true;
                    var8['redirectConfirmation'] = var9;
                    return var8;
case 258:
                    return var7;
case 254:
                    return var6;
case 99:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 6;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatchConfirmationError;
                    var6 = 'Stripe cannot be null on a redirect.';
                    var6 = var7.bind(var8)(var6);
                    throw var6;
case 248:
                    return var4;
case 244:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatchConfirmationError;
                    var3 = 'Payment source cannot be null on a redirect.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 105:
                    return var2;
case 149:
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
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 260; continue _fun0017 }
case 144:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=52);
case 146:
                    return var2;
case 242:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 61; continue _fun0017 }
case 261:
                    var10 = null;
                    if(!(var10 != var2)) { _fun0017_ip = 262; continue _fun0017 }
case 263:
                    if(!(var10 != var6)) { _fun0017_ip = 258; continue _fun0017 }
case 204:
                    var4 = function getClientSecret() {
                        var1 = undefined;
                        var4 = _closure1_slot16;
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
case 264:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0017_ip = 97; continue _fun0017 }
case 236:
                    var6 = var2.retrievePaymentIntent;
                    var6 = var6.bind(var2)(var4);
                    SaveGenerator(address=117);
case 265:
                    return var6;
case 249:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0017_ip = 266; continue _fun0017 }
case 267:
                    var7 = var6.paymentIntent;
                    var9 = var6.error;
                    if(!(var10 == var9)) { _fun0017_ip = 69; continue _fun0017 }
case 268:
                    if(!(var10 != var7)) { _fun0017_ip = 269; continue _fun0017 }
case 270:
                    var8 = var7.last_payment_error;
                    if(!(var10 == var8)) { _fun0017_ip = 271; continue _fun0017 }
case 86:
                    var8 = true;
                    return var8;
case 271:
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
case 269:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 6;
                    var7 = var10[var7];
                    var10 = var8.bind(var5)(var7);
                    var8 = var10.dispatchConfirmationError;
                    var7 = 'paymentIntent not available with successful stripe call';
                    var7 = var8.bind(var10)(var7);
                    throw var7;
case 69:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 6;
                    var7 = var10[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.dispatchConfirmationError;
                    var7 = var7.bind(var8)(var9);
                    throw var7;
case 266:
                    return var6;
case 97:
                    return var4;
case 258:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 6;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatchConfirmationError;
                    var4 = 'payment intent id cannot be null.';
                    var4 = var6.bind(var7)(var4);
                    throw var4;
case 262:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatchConfirmationError;
                    var3 = 'Stripe has not loaded.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 61:
                    return var2;
case 260:
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
    var1 = function performRedirect(arg1) {
        var1 = global;
        var3 = var1.window;
        var2 = var3.open;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function _confirmPayments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 272; continue _fun0018 }
case 144:
                    var4 = var2.stripe;
                    var3 = var2.paymentSource;
                    var9 = var2.paymentMethodId;
                    var8 = var2.clientSecret;
                    var5 = undefined;
                    SaveGenerator(address=43);
case 202:
                    return var5;
case 273:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 74; continue _fun0018 }
case 242:
                    var6 = {};
                    var10 = var3.type;
                    var7 = _closure1_slot11;
                    var7 = var7.SEPA_DEBIT;
                    if(!(var10 === var7)) { _fun0018_ip = 274; continue _fun0018 }
case 12:
                    var7 = null;
                    if(!(var7 != var9)) { _fun0018_ip = 275; continue _fun0018 }
case 10:
                    var6['payment_method'] = var9;
                    var4 = var4.confirmSepaDebitPayment;
                    var4 = var4.bind(var5)(var8, var6);
                    SaveGenerator(address=112);
case 80:
                    return var4;
case 276:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 93; continue _fun0018 }
case 277:
                    var6 = var4.paymentIntent;
                    var8 = var4.error;
                    if(!(var7 == var8)) { _fun0018_ip = 278; continue _fun0018 }
case 83:
                    if(!(var7 != var6)) { _fun0018_ip = 150; continue _fun0018 }
case 279:
                    return var5;
case 150:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 6;
                    var6 = var9[var6];
                    var9 = var7.bind(var5)(var6);
                    var7 = var9.dispatchConfirmationError;
                    var6 = 'paymentIntent not available with successful stripe call';
                    var6 = var7.bind(var9)(var6);
                    throw var6;
case 278:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 6;
                    var6 = var9[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.dispatchConfirmationError;
                    var6 = var6.bind(var7)(var8);
                    throw var6;
case 93:
                    return var4;
case 275:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 6;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatchConfirmationError;
                    var4 = 'On a sepa payment payment method id cannot be null';
                    var4 = var6.bind(var7)(var4);
                    throw var4;
case 274:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatchConfirmationError;
                    var3 = 'Unsupported redirected payment source type.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 74:
                    return var2;
case 272:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _getStripeRedirect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0019_ip = 280; continue _fun0019 }
case 144:
                    var11 = var2.stripe;
                    var9 = var2.paymentSource;
                    var8 = var2.clientSecret;
                    var3 = var2.state;
                    var7 = undefined;
                    SaveGenerator(address=42);
case 145:
                    return var7;
case 281:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0019_ip = 282; continue _fun0019 }
case 174:
                    var6 = var9.type;
                    var5 = _closure1_slot11;
                    var5 = var5.GIROPAY;
                    if(!(var5 !== var6)) { _fun0019_ip = 283; continue _fun0019 }
case 13:
                    var5 = _closure1_slot11;
                    var5 = var5.BANCONTACT;
                    if(!(var5 !== var6)) { _fun0019_ip = 284; continue _fun0019 }
case 264:
                    var5 = _closure1_slot11;
                    var5 = var5.SOFORT;
                    if(!(var5 !== var6)) { _fun0019_ip = 285; continue _fun0019 }
case 80:
                    var5 = _closure1_slot11;
                    var5 = var5.PRZELEWY24;
                    if(!(var5 !== var6)) { _fun0019_ip = 107; continue _fun0019 }
case 286:
                    var5 = _closure1_slot11;
                    var5 = var5.EPS;
                    if(!(var5 !== var6)) { _fun0019_ip = 287; continue _fun0019 }
case 268:
                    var5 = _closure1_slot11;
                    var5 = var5.IDEAL;
                    if(!(var5 !== var6)) { _fun0019_ip = 288; continue _fun0019 }
case 86:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 6;
                    var5 = var10[var5];
                    var10 = var6.bind(var7)(var5);
                    var6 = var10.dispatchConfirmationError;
                    var5 = 'Unsupported redirected payment source type.';
                    var5 = var6.bind(var10)(var5);
                    throw var5;
case 288:
                    var10 = {};
                    var5 = {};
                    var10['ideal'] = var5;
                    var5 = {};
                    var6 = var9.billingAddress;
                    var6 = var6.name;
                    var5['name'] = var6;
                    var10['billing_details'] = var5;
                    var6 = var9.bank;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0019_ip = 171; continue _fun0019 }
case 289:
                    var5 = {};
                    var6 = var9.bank;
                    var5['bank'] = var6;
                    var10['ideal'] = var5;
case 171:
                    var6 = var11.confirmIdealPayment;
                    _fun0019_ip = 290; continue _fun0019;
case 287:
                    var12 = var9.bank;
                    var5 = null;
                    if(!(var5 != var12)) { _fun0019_ip = 291; continue _fun0019 }
case 292:
                    var5 = {};
                    var12 = {};
                    var13 = var9.bank;
                    var12['bank'] = var13;
                    var5['eps'] = var12;
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var5['billing_details'] = var12;
                    var6 = var11.confirmEpsPayment;
                    var10 = var5;
                    _fun0019_ip = 290; continue _fun0019;
case 291:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var5 = 6;
                    var5 = var13[var5];
                    var13 = var12.bind(var7)(var5);
                    var12 = var13.dispatchConfirmationError;
                    var16 = var9.id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var15 = var5.concat;
                    var14 = 'PaymentSource (';
                    var5 = ') missing bank info for EPS.';
                    var5 = var15.bind(var14)(var16, var5);
                    var5 = var12.bind(var13)(var5);
                    throw var5;
case 107:
                    var12 = var9.bank;
                    var5 = null;
                    if(!(var5 != var12)) { _fun0019_ip = 293; continue _fun0019 }
case 294:
                    var5 = {};
                    var12 = {};
                    var13 = var9.bank;
                    var12['bank'] = var13;
                    var5['p24'] = var12;
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var13 = var9.email;
                    var12['email'] = var13;
                    var5['billing_details'] = var12;
                    var6 = var11.confirmP24Payment;
                    var10 = var5;
                    _fun0019_ip = 290; continue _fun0019;
case 293:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var5 = 6;
                    var5 = var13[var5];
                    var13 = var12.bind(var7)(var5);
                    var12 = var13.dispatchConfirmationError;
                    var16 = var9.id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var15 = var5.concat;
                    var14 = 'PaymentSource (';
                    var5 = ') missing bank info for p24.';
                    var5 = var15.bind(var14)(var16, var5);
                    var5 = var12.bind(var13)(var5);
                    throw var5;
case 285:
                    var5 = {};
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.country;
                    var12['country'] = var13;
                    var5['sofort'] = var12;
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var13 = var9.email;
                    var12['email'] = var13;
                    var5['billing_details'] = var12;
                    var6 = var11.confirmSofortPayment;
                    var10 = var5;
                    _fun0019_ip = 290; continue _fun0019;
case 284:
                    var5 = {};
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var13 = var9.email;
                    var12['email'] = var13;
                    var5['billing_details'] = var12;
                    var6 = var11.confirmBancontactPayment;
                    var10 = var5;
                    _fun0019_ip = 290; continue _fun0019;
case 283:
                    var5 = {};
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var5['billing_details'] = var12;
                    var6 = var11.confirmGiropayPayment;
                    var10 = var5;
case 290:
                    var5 = {};
                    var5['payment_method'] = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var10 = 4;
                    var10 = var12[var10];
                    var11 = var11.bind(var7)(var10);
                    var10 = var11.getAPIBaseURL;
                    var10 = var10.bind(var11)();
                    var14 = _closure1_slot5;
                    var13 = var14.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var12 = var9.type;
                    var9 = null;
                    var15 = var9 != var3;
                    var11 = '';
                    if(!var15) { _fun0019_ip = 137; continue _fun0019 }
case 295:
                    var11 = var3;
case 137:
                    var3 = 'success';
                    var3 = var13.bind(var14)(var12, var11, var3);
                    var3 = var10 + var3;
                    var5['return_url'] = var3;
                    var3 = {};
                    var10 = false;
                    var3['handleActions'] = var10;
                    var3 = var6.bind(var7)(var8, var5, var3);
                    SaveGenerator(address=826);
case 296:
                    return var3;
case 297:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 298; continue _fun0019 }
case 299:
                    var5 = var3.paymentIntent;
                    var6 = var3.error;
                    if(!(var9 == var6)) { _fun0019_ip = 300; continue _fun0019 }
case 301:
                    if(!(var9 != var5)) { _fun0019_ip = 302; continue _fun0019 }
case 303:
                    var10 = var5.next_action;
                    var11 = var9 == var10;
                    var8 = undefined;
                    if(var11) { _fun0019_ip = 304; continue _fun0019 }
case 305:
                    var10 = var10.redirect_to_url;
                    var11 = var9 == var10;
                    var8 = undefined;
                    if(var11) { _fun0019_ip = 304; continue _fun0019 }
case 306:
                    var8 = var10.url;
case 304:
                    if(!(var9 != var8)) { _fun0019_ip = 307; continue _fun0019 }
case 308:
                    var5 = var5.next_action;
                    var5 = var5.redirect_to_url;
                    var5 = var5.url;
                    return var5;
case 307:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 6;
                    var5 = var9[var5];
                    var9 = var8.bind(var7)(var5);
                    var8 = var9.dispatchConfirmationError;
                    var5 = 'confirm payment did not return a redirect url';
                    var5 = var8.bind(var9)(var5);
                    throw var5;
case 302:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 6;
                    var5 = var9[var5];
                    var9 = var8.bind(var7)(var5);
                    var8 = var9.dispatchConfirmationError;
                    var5 = 'paymentIntent not available with successful api call';
                    var5 = var8.bind(var9)(var5);
                    throw var5;
case 300:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 6;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var4 = var4.bind(var5)(var6);
                    throw var4;
case 298:
                    return var3;
case 282:
                    return var2;
case 280:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var5);
    var1 = 0;
    var5 = var11[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var9 = var5.Endpoints;
    var _closure1_slot5 = var9;
    var9 = var5.PaymentGateways;
    var _closure1_slot6 = var9;
    var9 = var5.REDIRECTED_PAYMENT_SOURCES;
    var _closure1_slot7 = var9;
    var5 = var5.VAULTABLE_PAYMENT_SOURCES;
    var _closure1_slot8 = var5;
    var5 = 2;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var9 = var5.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot9 = var9;
    var9 = var5.STRIPE_PAYMENT_SOURCES;
    var _closure1_slot10 = var9;
    var5 = var5.PaymentSourceTypes;
    var _closure1_slot11 = var5;
    var5 = 3;
    var5 = var11[var5];
    var9 = var6.bind(var1)(var5);
    var5 = var9.prototype;
    var6 = Object.create(var5, {constructor: {value: var9}});
    var15 = 'BillingPaymentGatewayActionCreators.tsx';
    var16 = var6;
    var5 = new var16[var9](var15, var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot12 = var5;
    var5 = function validateSetupIntentResponse(arg1, arg2, arg3) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var5 = null;
            if(!(var5 == var3)) { _fun0020_ip = 267; continue _fun0020 }
case 241:
            if(!(var5 != var4)) { _fun0020_ip = 309; continue _fun0020 }
case 31:
            var1 = var4.payment_method;
            if(!(var5 != var1)) { _fun0020_ip = 22; continue _fun0020 }
case 237:
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
case 22:
            var4 = undefined;
            var1 = 'setupIntent.payment_method not available with successful stripe call';
            var1 = var2.bind(var4)(var1);
            throw var1;
case 309:
            var4 = undefined;
            var1 = 'SetupIntent not created';
            var1 = var2.bind(var4)(var1);
            throw var1;
case 267:
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            throw var1;
        }
    };
    var _closure1_slot13 = var5;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 185; continue _fun0021 }
case 144:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0021_ip = 267; continue _fun0021 }
case 31:
                    var2 = var3.submit;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=33);
case 178:
                    return var2;
case 177:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 29; continue _fun0021 }
case 310:
                    var7 = _closure1_slot12;
                    var6 = var7.info;
                    var4 = 'Stripe Elements submit response: ';
                    var4 = var6.bind(var7)(var4, var2);
                    var4 = var2.error;
                    if(!(var5 == var4)) { _fun0021_ip = 13; continue _fun0021 }
case 238:
                    return var2;
case 13:
                    var7 = _closure1_slot12;
                    var6 = var7.error;
                    var5 = var2.error;
                    var4 = 'Stripe Elements submit error: ';
                    var4 = var6.bind(var7)(var4, var5);
                    var6 = _closure1_slot19;
                    var5 = var2.error;
                    var4 = undefined;
                    var3 = true;
                    var3 = var6.bind(var4)(var5, var3);
                    throw var3;
case 29:
                    return var2;
case 267:
                    var5 = _closure1_slot19;
                    var4 = undefined;
                    var3 = 'Stripe Elements not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 185:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var5.bind(var1)();
    var _closure1_slot14 = var6;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 152; continue _fun0022 }
case 144:
                    var3 = var4.createPaymentMethod;
                    var2 = {};
                    var5 = arg2;
                    var2['elements'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=38);
case 311:
                    return var2;
case 312:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0022_ip = 278; continue _fun0022 }
case 313:
                    var4 = var2.paymentMethod;
                    var6 = var2.error;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0022_ip = 250; continue _fun0022 }
case 314:
                    if(!(var3 != var4)) { _fun0022_ip = 315; continue _fun0022 }
case 316:
                    var3 = {};
                    var3['paymentMethod'] = var4;
                    var3['error'] = var6;
                    return var3;
case 315:
                    var8 = _closure1_slot12;
                    var7 = var8.warn;
                    var5 = {};
                    var5['paymentMethod'] = var4;
                    var5['error'] = var6;
                    var4 = 'Stripe createPaymentMethod failed to return payment method: ';
                    var4 = var7.bind(var8)(var4, var5);
                    var7 = _closure1_slot19;
                    var5 = undefined;
                    var4 = 'paymentMethod not available with successful stripe call';
                    var3 = true;
                    var3 = var7.bind(var5)(var4, var3);
                    throw var3;
case 250:
                    var7 = _closure1_slot12;
                    var5 = var7.error;
                    var4 = 'Stripe createPaymentMethod error: ';
                    var4 = var5.bind(var7)(var4, var6);
                    var5 = _closure1_slot19;
                    var4 = undefined;
                    var3 = true;
                    var3 = var5.bind(var4)(var6, var3);
                    throw var3;
case 278:
                    return var2;
case 152:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot15 = var5;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 185; continue _fun0023 }
case 18:
                    var2 = null;
                    if(!(var2 != var6)) { _fun0023_ip = 267; continue _fun0023 }
case 317:
                    if(!(var2 != var5)) { _fun0023_ip = 318; continue _fun0023 }
case 319:
                    var2 = _closure1_slot14;
                    var4 = undefined;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=44);
case 281:
                    return var2;
case 320:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0023_ip = 23; continue _fun0023 }
case 146:
                    var3 = _closure1_slot15;
                    var3 = var3.bind(var4)(var6, var5);
                    SaveGenerator(address=64);
case 321:
                    return var3;
case 314:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 208; continue _fun0023 }
case 263:
                    var4 = {};
                    var5 = var3.paymentMethod;
                    var4['paymentMethod'] = var5;
                    var5 = var3.error;
                    var4['error'] = var5;
                    return var4;
case 208:
                    return var3;
case 23:
                    return var2;
case 318:
                    var5 = _closure1_slot19;
                    var4 = undefined;
                    var3 = 'Stripe Elements not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 267:
                    var5 = _closure1_slot19;
                    var4 = undefined;
                    var3 = 'Stripe not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 185:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var9 = 14;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'actions/BillingPaymentGatewayActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['createAdyenPaymentSourceToken'] = var8;
    var3['dispatchPaymentElementsConfirmationError'] = var7;
    var7 = function createCardToken() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createCardToken'] = var7;
    var7 = function confirmEPS() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmEPS'] = var7;
    var7 = function confirmIdeal() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmIdeal'] = var7;
    var7 = function confirmPrzelewy24() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmPrzelewy24'] = var7;
    var3['submitElementsForPaymentElement'] = var6;
    var3['createPaymentRequestMethodForPaymentElement'] = var5;
    var5 = function confirmPaymentElementSource() {
        var1 = undefined;
        var4 = _closure1_slot24;
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
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmCardPaymentSource'] = var5;
    var5 = function createPaymentRequestPaymentSource(arg1, arg2, arg3) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
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
            if(!(var7 != var1)) { _fun0024_ip = 208; continue _fun0024 }
case 322:
            var5 = var1;
case 208:
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
        var4 = _closure1_slot26;
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
        var4 = _closure1_slot27;
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
        var4 = _closure1_slot28;
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
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot8;
            var2 = var4.has;
            var1 = var5.type;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(var2) { _fun0025_ip = 12; continue _fun0025 }
case 323:
            var6 = _closure1_slot9;
            var4 = var6.has;
            var2 = var5.type;
            var2 = var4.bind(var6)(var2);
            if(var2) { _fun0025_ip = 163; continue _fun0025 }
case 242:
            var4 = _closure1_slot29;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            _fun0025_ip = 13; continue _fun0025;
case 163:
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['createPaymentSourceToken'] = var4;
    var4 = function handleAdyenConfirmation() {
        var1 = undefined;
        var4 = _closure1_slot31;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleAdyenConfirmation'] = var4;
    var4 = function handleStripeConfirmation() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleStripeConfirmation'] = var4;
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