// app/actions/BillingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var15 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var14 = dependencyMap;
        var _closure1_slot0 = var15;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var14;
        var1 = function _deletePaymentSource() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var9 = arg1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 9;
                        var2 = var2[var6];
                        var5 = undefined;
                        var7 = var3.bind(var5)(var2);
                        var3 = var7.dispatch;
                        var2 = {};
                        var8 = 'BILLING_PAYMENT_SOURCE_REMOVE_START';
                        var2['type'] = var8;
                        var2 = var3.bind(var7)(var2);
case 4: // try_start_0
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var2 = var3.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var3 = var7.del;
                        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var11 = _closure1_slot11;
                        var10 = var11.BILLING_PAYMENT_SOURCE;
                        var8 = var9;
                        var8 = var10.bind(var11)(var8);
                        var2['url'] = var8;
                        var2 = var3.bind(var7)(var2);
                        SaveGenerator(address=134);
case 5:
                        return var2;
case 6:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var8 = var7.bind(var5)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var10 = 'BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS';
                        var3['type'] = var10;
                        var3['id'] = var9;
                        var3 = var7.bind(var8)(var3);
case 9: // try_end0
                        return var5;
case 7:
                        return var2;
case 10: // catch_target0
                        CatchBlockStart(arg_register=7);
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 11;
                        var2 = var3[var2];
                        var2 = var7.bind(var5)(var2);
                        var2 = var2.BillingError;
                        var7 = var2.prototype;
                        var7 = Object.create(var7, {constructor: {value: var2}});
                        var13 = var7;
                        var12 = var8;
                        var2 = new var13[var2](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var7;
                        var4 = _closure1_slot1;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENT_SOURCE_REMOVE_FAIL';
                        var3['type'] = var6;
                        var3['error'] = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 2:
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
        var1 = function _updatePaymentSource() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 3:
                        var8 = arg1;
                        var2 = arg2;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 9;
                        var3 = var3[var6];
                        var5 = undefined;
                        var9 = var7.bind(var5)(var3);
                        var7 = var9.dispatch;
                        var3 = {};
                        var10 = 'BILLING_PAYMENT_SOURCE_UPDATE_START';
                        var3['type'] = var10;
                        var3 = var7.bind(var9)(var3);
case 12: // try_start_0
                        var9 = var2;
                        var7 = var9.billingAddress;
                        var14 = var7.line1;
                        var13 = var7.line2;
                        var12 = var7.postalCode;
                        var3 = _closure1_slot4;
                        var2 = _closure1_slot3;
                        var16 = var3.bind(var5)(var7, var2);
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var2 = var3.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var3 = var7.patch;
                        var2 = {};
                        var15 = _closure1_slot11;
                        var10 = var15.BILLING_PAYMENT_SOURCE;
                        var8 = var10.bind(var15)(var8);
                        var2['url'] = var8;
                        var8 = {};
                        var10 = {};
                        var17 = var10;
                        var11 = copyDataProperties(var17, var16);
                        var11 = 'line_1';
                        var10[10] = var14;
                        var11 = 'line_2';
                        var10[10] = var13;
                        var11 = 'postal_code';
                        var10[10] = var12;
                        var8['billing_address'] = var10;
                        var10 = var9.expiresMonth;
                        var8['expires_month'] = var10;
                        var10 = var9.expiresYear;
                        var8['expires_year'] = var10;
                        var9 = var9.isDefault;
                        var8['default'] = var9;
                        var2['body'] = var8;
                        var8 = false;
                        var2['rejectWithError'] = var8;
                        var2 = var3.bind(var7)(var2);
                        SaveGenerator(address=250);
case 13:
                        return var2;
case 14:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var8 = _closure1_slot6;
                        var7 = var8.createFromServer;
                        var3 = var2.body;
                        var9 = var7.bind(var8)(var3);
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var8 = var7.bind(var5)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var10 = 'BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS';
                        var3['type'] = var10;
                        var3['paymentSource'] = var9;
                        var3 = var7.bind(var8)(var3);
case 17: // try_end0
                        return var5;
case 15:
                        return var2;
case 18: // catch_target0
                        CatchBlockStart(arg_register=7);
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 12;
                        var2 = var3[var2];
                        var7 = var7.bind(var5)(var2);
                        var2 = var7.parseV8BillingAddressSkemaErrorToBillingError;
                        var2 = var2.bind(var7)(var8);
                        var4 = _closure1_slot1;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENT_SOURCE_UPDATE_FAIL';
                        var3['type'] = var6;
                        var3['error'] = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 11:
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
        var1 = function _fetchPaymentSources() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var3 = _closure1_slot8;
                        var3 = var3.isPaymentSourceFetching;
                        if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22: // try_start_0
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 10;
                        var3 = var6[var3];
                        var3 = var7.bind(var2)(var3);
                        var8 = var3.HTTP;
                        var7 = var8.get;
                        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var9 = _closure1_slot11;
                        var9 = var9.BILLING_PAYMENT_SOURCES;
                        var3['url'] = var9;
                        var3 = var7.bind(var8)(var3);
                        _closure4_slot0 = var3;
                        var8 = _closure1_slot1;
                        var7 = 9;
                        var6 = var6[var7];
                        var8 = var8.bind(var2)(var6);
                        var6 = var8.wait;
                        var5 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_PAYMENT_SOURCES_FETCH_START';
                            var1['type'] = var4;
                            var4 = _closure4_slot0;
                            var1['request'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var5 = var6.bind(var8)(var5);
                        SaveGenerator(address=138);
case 23:
                        return var3;
case 24:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'BILLING_PAYMENT_SOURCES_FETCH_SUCCESS';
                        var5['type'] = var8;
                        var8 = var3.body;
                        var5['paymentSources'] = var8;
                        var5 = var6.bind(var7)(var5);
case 27: // try_end0
                        return var3;
case 25:
                        return var3;
case 28: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 9;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_PAYMENT_SOURCES_FETCH_FAIL';
                        var4['type'] = var7;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
case 21:
                        return var2;
case 19:
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
        var1 = function _fetchPaymentSource() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 3:
                        var7 = arg1;
case 30: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var5 = undefined;
                        var2 = var4.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.get;
                        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var9 = _closure1_slot11;
                        var8 = var9.BILLING_PAYMENT_SOURCE;
                        var7 = var8.bind(var9)(var7);
                        var2['url'] = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=88);
case 31:
                        return var2;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                        var7 = _closure1_slot6;
                        var6 = var7.createFromServer;
                        var4 = var2.body;
                        var6 = var6.bind(var7)(var4);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 9;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'BILLING_PAYMENT_SOURCE_FETCH_SUCCESS';
                        var3['type'] = var7;
                        var3['paymentSource'] = var6;
                        var3 = var4.bind(var5)(var3);
case 35: // try_end0
                        return var2;
case 33:
                        return var2;
case 36: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENT_SOURCE_FETCH_FAIL';
                        var3['type'] = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 29:
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
        var1 = function _fetchWalletInformation() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        var9 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 37; continue _fun0006 }
case 30:
                        var5 = var9;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 9;
                        var3 = var3[var6];
                        var4 = undefined;
                        var8 = var7.bind(var4)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var10 = 'BILLING_WALLET_BALANCE_FETCH_START';
                        var3['type'] = var10;
                        var3['paymentSourceId'] = var9;
                        var3 = var7.bind(var8)(var3);
case 38: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var3 = var7.bind(var4)(var3);
                        var8 = var3.HTTP;
                        var7 = var8.get;
                        var3 = {};
                        var11 = _closure1_slot11;
                        var10 = var11.BILLING_WALLET_INFORMATION;
                        var9 = var5;
                        var9 = var10.bind(var11)(var9);
                        var3['url'] = var9;
                        var9 = {};
                        var10 = false;
                        var9['get_history'] = var10;
                        var3['query'] = var9;
                        var9 = true;
                        var3['rejectWithError'] = var9;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address=153);
case 39:
                        return var3;
case 40:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                        var7 = {};
                        var8 = var3.body;
                        var8 = var8.currency;
                        var7['currency'] = var8;
                        var8 = var3.body;
                        var8 = var8.balance;
                        var7['amount'] = var8;
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var6];
                        var10 = var9.bind(var4)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'BILLING_WALLET_BALANCE_FETCH_SUCCESS';
                        var8['type'] = var11;
                        var11 = var5;
                        var8['paymentSourceId'] = var11;
                        var11 = var7.currency;
                        var8['currency'] = var11;
                        var11 = var7.amount;
                        var8['amount'] = var11;
                        var8 = var9.bind(var10)(var8);
case 43: // try_end0
                        return var7;
case 41:
                        return var3;
case 44: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'BILLING_WALLET_BALANCE_FETCH_FAIL';
                        var2['type'] = var6;
                        var2['paymentSourceId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = null;
                        return var2;
case 37:
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
        var7 = function fetchPayment() {
            var1 = undefined;
            var4 = _closure1_slot27;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot26 = var7;
        var1 = function _fetchPayment() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 3:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var5 = undefined;
                        var2 = var4.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.get;
                        var2 = {};
                        var9 = _closure1_slot11;
                        var8 = var9.BILLING_PAYMENT;
                        var7 = arg1;
                        var7 = var8.bind(var9)(var7);
                        var2['url'] = var7;
                        var7 = true;
                        var2['rejectWithError'] = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=84);
case 46:
                        return var2;
case 47:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 9;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENT_FETCH_SUCCESS';
                        var3['type'] = var6;
                        var6 = var2.body;
                        var3['payment'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
case 48:
                        return var2;
case 45:
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
        var1 = function _fetchPayments() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 30:
                        var6 = undefined;
                        if(!(var2 === var6)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                        var2 = 10;
case 51:
                        var11 = var2;
                        var10 = arguments[1];
                        SaveGenerator(address=32);
case 53:
                        return var6;
case 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 9;
                        var3 = var3[var7];
                        var8 = var5.bind(var6)(var3);
                        var5 = var8.dispatch;
                        var3 = {};
                        var9 = 'BILLING_PAYMENTS_FETCH_START';
                        var3['type'] = var9;
                        var3 = var5.bind(var8)(var3);
case 31: // try_start_0
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var3 = var5.bind(var6)(var3);
                        var8 = var3.HTTP;
                        var5 = var8.get;
                        var3 = {};
                        var9 = _closure1_slot11;
                        var9 = var9.BILLING_PAYMENTS;
                        var3['url'] = var9;
                        var9 = {};
                        var9['limit'] = var11;
                        var9['before'] = var10;
                        var3['query'] = var9;
                        var9 = true;
                        var3['oldFormErrors'] = var9;
                        var9 = false;
                        var3['rejectWithError'] = var9;
                        var3 = var5.bind(var8)(var3);
                        SaveGenerator(address=170);
case 57:
                        return var3;
case 58:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var9 = var8.bind(var6)(var5);
                        var8 = var9.dispatch;
                        var5 = {};
                        var10 = 'BILLING_PAYMENTS_FETCH_SUCCESS';
                        var5['type'] = var10;
                        var10 = var3.body;
                        var5['payments'] = var10;
                        var5 = var8.bind(var9)(var5);
case 61: // try_end0
                        return var3;
case 59:
                        return var3;
case 62: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_PAYMENTS_FETCH_FAIL';
                        var4['type'] = var7;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
case 55:
                        return var2;
case 50:
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
        var1 = function _fetchSubscriptions() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 3:
                        var5 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var4 = undefined;
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 9;
                        var2 = var2[var6];
                        var8 = var7.bind(var5)(var2);
                        var7 = var8.wait;
                        var2 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'BILLING_SUBSCRIPTION_FETCH_START';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var7.bind(var8)(var2);
case 64: // try_start_0
                        var2 = _closure1_slot15;
                        var12 = var2.ADD_PERKS_IF_DETECTED;
                        var7 = _closure1_slot9;
                        var2 = var7.getLastLazyPerkSync;
                        var7 = var2.bind(var7)();
                        var11 = var7;
                        var8 = null;
                        var7 = var8 == var7;
                        var2 = var7;
                        if(var7) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 13;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var13 = var7.bind(var5)();
                        var10 = var13.diff;
                        var9 = var11;
                        var7 = 'hours';
                        var9 = var10.bind(var13)(var9, var7);
                        var7 = 1;
                        var2 = var9 >= var7;
case 65:
                        if(!var2) { _fun0009_ip = 10; continue _fun0009 }
case 40:
                        var2 = _closure1_slot15;
                        var12 = var2.FULL_RESYNC;
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 13;
                        var2 = var9[var2];
                        var2 = var7.bind(var5)(var2);
                        var11 = var2.bind(var5)();
case 10:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 10;
                        var2 = var9[var2];
                        var2 = var7.bind(var5)(var2);
                        var9 = var2.HTTP;
                        var7 = var9.get;
                        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var10 = _closure1_slot11;
                        var10 = var10.BILLING_SUBSCRIPTIONS;
                        var2['url'] = var10;
                        var10 = {};
                        var10['sync_level'] = var12;
                        var2['query'] = var10;
                        var2 = var7.bind(var9)(var2);
                        SaveGenerator(address=266);
case 67:
                        return var2;
case 68:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(var7) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                        var4 = var2;
                        var7 = var2.body;
                        if(!(var8 != var7)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var10 = var8.bind(var5)(var7);
                        var9 = var10.dispatch;
                        var8 = {};
                        var7 = 'BILLING_SUBSCRIPTION_FETCH_SUCCESS';
                        var8['type'] = var7;
                        var7 = var4;
                        var12 = var7.body;
                        var8['subscriptions'] = var12;
                        var8['lastLazyPerkSync'] = var11;
                        var8 = var9.bind(var10)(var8);
case 73: // try_end0
                        return var7;
case 71: // try_start_1
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 11;
                        var7 = var9[var7];
                        var7 = var8.bind(var5)(var7);
                        var9 = var7.BillingError;
                        var7 = global;
                        var10 = var7.JSON;
                        var8 = var10.stringify;
                        var10 = var8.bind(var10)(var4);
                        var7 = var7.HermesInternal;
                        var8 = var7.concat;
                        var7 = 'response body is null, response: ';
                        var15 = var8.bind(var7)(var10);
                        var14 = var4.status;
                        var7 = var9.prototype;
                        var7 = Object.create(var7, {constructor: {value: var9}});
                        var16 = var7;
                        var4 = new var16[var9](var15, var14, var13);
                        var4 = var4 instanceof Object ? var4 : var7;
                        throw var4;
case 69: // try_end1
                        return var2;
case 74: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_SUBSCRIPTION_FETCH_FAIL';
                        var3['type'] = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 63:
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
        var1 = function _getPerksRelevance() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 29; continue _fun0010 }
case 3:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 9;
                        var4 = var2[var5];
                        var2 = undefined;
                        var7 = var6.bind(var2)(var4);
                        var6 = var7.wait;
                        var4 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'BILLING_PERKS_RELEVANCE_FETCH_START';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var4 = var6.bind(var7)(var4);
case 75: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 10;
                        var4 = var7[var4];
                        var4 = var6.bind(var2)(var4);
                        var7 = var4.HTTP;
                        var6 = var7.get;
                        var4 = {};
                        var8 = _closure1_slot11;
                        var8 = var8.BILLING_PERKS_RELEVANCE;
                        var4['url'] = var8;
                        var8 = true;
                        var4['rejectWithError'] = var8;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address=114);
case 76:
                        return var4;
case 77:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0010_ip = 78; continue _fun0010 }
case 79:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var5];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'BILLING_PERKS_RELEVANCE_FETCH_SUCCESS';
                        var6['type'] = var9;
                        var9 = var4.body;
                        var6['res'] = var9;
                        var6 = var7.bind(var8)(var6);
case 80: // try_end0
                        _fun0010_ip = 81; continue _fun0010;
case 78:
                        return var4;
case 82: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PERKS_RELEVANCE_FETCH_FAIL';
                        var3['type'] = var6;
                        var3 = var4.bind(var5)(var3);
case 81:
                        return var2;
case 29:
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
        var1 = function _getNitroAffinity() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 83; continue _fun0011 }
case 3: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var5 = undefined;
                        var2 = var4.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.get;
                        var2 = {};
                        var7 = _closure1_slot11;
                        var7 = var7.BILLING_NITRO_AFFINITY;
                        var2['url'] = var7;
                        var7 = true;
                        var2['rejectWithError'] = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=76);
case 84:
                        return var2;
case 85:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0011_ip = 86; continue _fun0011 }
case 46:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var7 = 9;
                        var4 = var4[var7];
                        var8 = var6.bind(var5)(var4);
                        var6 = var8.dispatch;
                        var4 = {};
                        var9 = 'BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED';
                        var4['type'] = var9;
                        var11 = var2.body;
                        var10 = var11.map;
                        var9 = function(arg1) {
                            var3 = _closure1_slot7;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var4 = arg1;
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var9 = var10.bind(var11)(var9);
                        var4['res'] = var9;
                        var4 = var6.bind(var8)(var4);
case 39: // try_end0
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var8 = 'BILLING_NITRO_AFFINITY_FETCHED';
                        var4['type'] = var8;
                        var4 = var6.bind(var7)(var4);
                        return var5;
case 86:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 9;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_NITRO_AFFINITY_FETCHED';
                        var3['type'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
case 87: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_NITRO_AFFINITY_FETCHED';
                        var3['type'] = var6;
                        var3 = var4.bind(var5)(var3);
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
        var1 = function _fetchMostRecentSubscription() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 88; continue _fun0012 }
case 3:
                        var2 = undefined;
                        var6 = undefined;
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 9;
                        var4 = var4[var5];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.wait;
                        var4 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var4 = var7.bind(var8)(var4);
case 89: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 10;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var8 = var4.HTTP;
                        var7 = var8.get;
                        var4 = {};
                        var9 = _closure1_slot11;
                        var9 = var9.BILLING_SUBSCRIPTIONS;
                        var4['url'] = var9;
                        var10 = {'include_inactive': true, 'limit': 2, 'exclude_unpaid_statuses': true};
                        var9 = true;
                        var11 = _closure1_slot20;
                        var11 = var11.PREMIUM;
                        var10['subscription_type'] = var11;
                        var4['query'] = var10;
                        var4['oldFormErrors'] = var9;
                        var4['rejectWithError'] = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=155);
case 40:
                        return var4;
case 90:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0012_ip = 91; continue _fun0012 }
case 33:
                        var6 = var4;
                        var7 = var4.ok;
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var5];
                        var9 = var9.bind(var2)(var8);
                        var8 = var9.dispatch;
                        if(var7) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                        var7 = {};
                        var10 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL';
                        var7['type'] = var10;
                        var7 = var8.bind(var9)(var7);
                        _fun0012_ip = 94; continue _fun0012;
case 92:
                        var7 = {};
                        var10 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS';
                        var7['type'] = var10;
                        var10 = var6;
                        var10 = var10.body;
                        var10 = var10.length;
                        var13 = 0;
                        var12 = var10 > var13;
                        var11 = null;
                        if(!var12) { _fun0012_ip = 68; continue _fun0012 }
case 95:
                        var12 = var6;
                        var12 = var12.body;
                        var11 = var12[var13];
case 68:
                        var7['subscription'] = var11;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS';
                        var7['type'] = var11;
                        var11 = var6;
                        var11 = var11.body;
                        var11 = var11.length;
                        var12 = 1;
                        var11 = var11 > var12;
                        var10 = null;
                        if(!var11) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                        var11 = var6;
                        var11 = var11.body;
                        var10 = var11[var12];
case 96:
                        var7['subscription'] = var10;
                        var7 = var8.bind(var9)(var7);
case 94: // try_end0
                        return var6;
case 91:
                        return var4;
case 98: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL';
                        var3['type'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
case 88:
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
        var1 = function _createSubscription() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0013_ip = 99; continue _fun0013 }
case 30:
                        var9 = var2.items;
                        var5 = var2.paymentSource;
                        var24 = var2.trialId;
                        var20 = var2.code;
                        var21 = var2.currency;
                        var11 = var2.metadata;
                        var19 = var2.referralCode;
                        var18 = var2.loadId;
                        var17 = var2.expectedInvoicePrice;
                        var16 = var2.expectedRenewalPrice;
                        var8 = undefined;
                        var23 = undefined;
                        var4 = undefined;
                        SaveGenerator(address=88);
case 31:
                        return var8;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var10 = 9;
                        var3 = var13[var10];
                        var14 = var12.bind(var8)(var3);
                        var12 = var14.dispatch;
                        var3 = {};
                        var15 = 'BILLING_SUBSCRIPTION_UPDATE_START';
                        var3['type'] = var15;
                        var3 = var12.bind(var14)(var3);
                        var12 = _closure1_slot0;
                        var3 = 14;
                        var3 = var13[var3];
                        var13 = var12.bind(var8)(var3);
                        var12 = var13.coerceExistingItemsToNewItemInterval;
                        var3 = var9;
                        var9 = var12.bind(var13)(var3);
                        var22 = null;
                        var23 = null;
                        var3 = var5;
                        if(!(var22 != var3)) { _fun0013_ip = 102; continue _fun0013 }
case 103:
                        var13 = _closure1_slot16;
                        var12 = var13.has;
                        var3 = var5;
                        var3 = var3.type;
                        var3 = var12.bind(var13)(var3);
                        if(var3) { _fun0013_ip = 104; continue _fun0013 }
case 102:
                        _fun0013_ip = 73; continue _fun0013;
case 104:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var3 = 15;
                        var3 = var13[var3];
                        var13 = var12.bind(var8)(var3);
                        var12 = var13.popupBridgeState;
                        var3 = var5;
                        var3 = var3.type;
                        var3 = var12.bind(var13)(var3);
                        SaveGenerator(address=256);
case 95:
                        return var3;
case 16:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                        if(var12) { _fun0013_ip = 105; continue _fun0013 }
case 41:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 10;
                        var12 = var14[var12];
                        var13 = var13.bind(var8)(var12);
                        var12 = var13.getAPIBaseURL;
                        var13 = var12.bind(var13)();
                        var26 = _closure1_slot11;
                        var25 = var26.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var12 = var5;
                        var15 = var12.type;
                        var12 = var22 != var3;
                        var14 = '';
                        if(!var12) { _fun0013_ip = 106; continue _fun0013 }
case 18:
                        var14 = var3;
case 106:
                        var12 = 'success';
                        var12 = var25.bind(var26)(var15, var14, var12);
                        var23 = var13 + var12;
case 73: // try_start_0
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 10;
                        var12 = var14[var12];
                        var12 = var13.bind(var8)(var12);
                        var15 = var12.HTTP;
                        var13 = var15.post;
                        var12 = {};
                        var14 = _closure1_slot11;
                        var14 = var14.BILLING_SUBSCRIPTIONS;
                        var12['url'] = var14;
                        var14 = {};
                        var26 = var9;
                        var25 = var26.map;
                        var9 = function(arg1) {
                            var1 = arg1;
                            var3 = var1.planId;
                            var2 = var1.quantity;
                            var1 = {};
                            var1['plan_id'] = var3;
                            var1['quantity'] = var2;
                            return var1;
                        };
                        var9 = var25.bind(var26)(var9);
                        var14['items'] = var9;
                        var9 = var5;
                        var25 = var22 != var9;
                        var9 = null;
                        if(!var25) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                        var25 = var5;
                        var9 = var25.id;
case 107:
                        var14['payment_source_id'] = var9;
                        var9 = var5;
                        var9 = var22 != var9;
                        var25 = null;
                        if(!var9) { _fun0013_ip = 109; continue _fun0013 }
case 110:
                        var26 = _closure1_slot0;
                        var27 = _closure1_slot2;
                        var9 = 16;
                        var9 = var27[var9];
                        var27 = var26.bind(var8)(var9);
                        var26 = var27.createPaymentSourceToken;
                        var9 = var5;
                        var9 = var26.bind(var27)(var9);
                        SaveGenerator(address=491);
case 111:
                        return var9;
case 112:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=25);
                        var25 = var9;
                        if(var26) { _fun0013_ip = 113; continue _fun0013 }
case 109:
                        var14['payment_source_token'] = var25;
                        var14['trial_id'] = var24;
                        var14['return_url'] = var23;
                        var14['code'] = var20;
                        var20 = var5;
                        if(!(var22 == var20)) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                        var20 = _closure1_slot17;
                        var20 = var20.USD;
                        _fun0013_ip = 116; continue _fun0013;
case 114:
                        var20 = var21;
case 116:
                        var14['currency'] = var20;
                        var14['metadata'] = var11;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var11 = 17;
                        var11 = var21[var11];
                        var21 = var20.bind(var8)(var11);
                        var20 = var21.createGatewayCheckoutContext;
                        var11 = var5;
                        var11 = var20.bind(var21)(var11);
                        SaveGenerator(address=592);
case 117:
                        return var11;
case 118:
                        ResumeGenerator(result_out_reg=10, return_bool_out_reg=19);
                        if(var20) { _fun0013_ip = 119; continue _fun0013 }
case 120:
                        var14['gateway_checkout_context'] = var11;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var20 = 18;
                        var20 = var22[var20];
                        var21 = var21.bind(var8)(var20);
                        var20 = var21.getPurchaseToken;
                        var20 = var20.bind(var21)();
                        var14['purchase_token'] = var20;
                        var14['referral_code'] = var19;
                        var14['load_id'] = var18;
                        var14['expected_invoice_price'] = var17;
                        var14['expected_renewal_price'] = var16;
                        var12['body'] = var14;
                        var14 = true;
                        var12['oldFormErrors'] = var14;
                        var14 = false;
                        var12['rejectWithError'] = var14;
                        var12 = var13.bind(var15)(var12);
                        SaveGenerator(address=689);
case 121:
                        return var12;
case 122:
                        ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                        if(var13) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                        var15 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var10];
                        var16 = var15.bind(var8)(var13);
                        var15 = var16.dispatch;
                        var13 = {};
                        var17 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var13['type'] = var17;
                        var17 = var12.body;
                        var13['subscription'] = var17;
                        var13 = var15.bind(var16)(var13);
                        var13 = {};
                        var15 = var12.body;
                        var13['subscription'] = var15;
                        var13['redirectConfirmation'] = var14;
case 125: // try_end0
                        return var13;
case 123:
                        return var12;
case 119:
                        return var11;
case 113:
                        return var9;
case 126: // catch_target0
                        CatchBlockStart(arg_register=10);
                        var6 = var11;
                        var13 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var12 = 11;
                        var9 = var9[var12];
                        var9 = var13.bind(var8)(var9);
                        var9 = var9.BillingError;
                        var9 = var11 instanceof var9;
                        if(var9) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                        var11 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var12];
                        var9 = var11.bind(var8)(var9);
                        var12 = var9.BillingError;
                        var30 = var6;
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {constructor: {value: var12}});
                        var31 = var11;
                        var9 = new var31[var12](var30, var29);
                        var9 = var9 instanceof Object ? var9 : var11;
                        _fun0013_ip = 129; continue _fun0013;
case 127:
                        var9 = var6;
case 129:
                        var4 = var9;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = var12[var10];
                        var13 = var11.bind(var8)(var10);
                        var11 = var13.dispatch;
                        var10 = {};
                        var14 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var10['type'] = var14;
                        var10['error'] = var9;
                        var10 = var11.bind(var13)(var10);
                        var10 = var9.code;
                        var11 = _closure1_slot0;
                        var9 = 12;
                        var9 = var12[var9];
                        var9 = var11.bind(var8)(var9);
                        var9 = var9.ErrorCodes;
                        var9 = var9.CONFIRMATION_REQUIRED;
                        if(!(var10 === var9)) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                        var9 = var6;
                        var9 = var9.body;
                        var9 = var9.payment_id;
                        if(var9) { _fun0013_ip = 132; continue _fun0013 }
case 133:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 15;
                        var9 = var11[var9];
                        var11 = var10.bind(var8)(var9);
                        var10 = var11.dispatchConfirmationError;
                        var9 = 'payment id cannot be null on redirected confirmations.';
                        var9 = var10.bind(var11)(var9);
                        throw var9;
case 132:
                        var7 = _closure1_slot35;
                        var6 = var6.body;
                        var5 = var7.bind(var8)(var6, var5);
                        return var5;
case 130:
                        throw var4;
case 105:
                        return var3;
case 100:
                        return var2;
case 99:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
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
        var1 = function _payInvoiceManually() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1, arg2, arg3, arg4, arg5) {
                var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        StartGenerator();
                        var2 = arg3;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                        if(var6) { _fun0014_ip = 134; continue _fun0014 }
case 30:
                        var12 = arg1;
                        var4 = arg2;
                        var5 = var2;
                        var14 = arg4;
                        var13 = arg5;
                        var6 = undefined;
                        var3 = undefined;
                        var16 = null;
                        var15 = null;
                        if(!(var16 != var2)) { _fun0014_ip = 38; continue _fun0014 }
case 135:
                        var10 = _closure1_slot19;
                        var9 = var10.has;
                        var2 = var5;
                        var2 = var2.type;
                        var2 = var9.bind(var10)(var2);
                        if(var2) { _fun0014_ip = 136; continue _fun0014 }
case 38:
                        _fun0014_ip = 137; continue _fun0014;
case 136:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 15;
                        var2 = var10[var2];
                        var10 = var9.bind(var6)(var2);
                        var9 = var10.popupBridgeState;
                        var2 = var5;
                        var2 = var2.type;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address=116);
case 77:
                        return var2;
case 138:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                        if(var9) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 10;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAPIBaseURL;
                        var9 = var9.bind(var10)();
                        var18 = _closure1_slot11;
                        var17 = var18.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var8 = var5;
                        var11 = var8.type;
                        var8 = var16 != var2;
                        var10 = '';
                        if(!var8) { _fun0014_ip = 10; continue _fun0014 }
case 7:
                        var10 = var2;
case 10:
                        var8 = 'success';
                        var8 = var17.bind(var18)(var11, var10, var8);
                        var15 = var9 + var8;
case 137: // try_start_0
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 10;
                        var8 = var11[var8];
                        var8 = var9.bind(var6)(var8);
                        var11 = var8.HTTP;
                        var9 = var11.post;
                        var8 = {};
                        var18 = _closure1_slot11;
                        var17 = var18.BILLING_INVOICE_MANUAL_PAYMENT;
                        var12 = var12.id;
                        var4 = var17.bind(var18)(var12, var4);
                        var8['url'] = var4;
                        var12 = {};
                        var4 = var5;
                        var17 = var16 != var4;
                        var4 = null;
                        if(!var17) { _fun0014_ip = 141; continue _fun0014 }
case 50:
                        var17 = var5;
                        var4 = var17.id;
case 141:
                        var12['payment_source_id'] = var4;
                        var4 = var5;
                        var4 = var16 != var4;
                        var16 = null;
                        if(!var4) { _fun0014_ip = 142; continue _fun0014 }
case 143:
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var4 = 16;
                        var4 = var18[var4];
                        var18 = var17.bind(var6)(var4);
                        var17 = var18.createPaymentSourceToken;
                        var4 = var5;
                        var4 = var17.bind(var18)(var4);
                        SaveGenerator(address=340);
case 144:
                        return var4;
case 145:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=16);
                        var16 = var4;
                        if(var17) { _fun0014_ip = 146; continue _fun0014 }
case 142:
                        var12['payment_source_token'] = var16;
                        var12['return_url'] = var15;
                        var12['currency'] = var14;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var14 = 18;
                        var14 = var16[var14];
                        var15 = var15.bind(var6)(var14);
                        var14 = var15.getPurchaseToken;
                        var14 = var14.bind(var15)();
                        var12['purchase_token'] = var14;
                        var12['load_id'] = var13;
                        var8['body'] = var12;
                        var12 = true;
                        var8['oldFormErrors'] = var12;
                        var12 = false;
                        var8['rejectWithError'] = var12;
                        var8 = var9.bind(var11)(var8);
                        SaveGenerator(address=433);
case 147:
                        return var8;
case 148:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                        if(var9) { _fun0014_ip = 149; continue _fun0014 }
case 69:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var9 = 9;
                        var9 = var12[var9];
                        var12 = var11.bind(var6)(var9);
                        var11 = var12.dispatch;
                        var9 = {};
                        var13 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var9['type'] = var13;
                        var13 = var8.body;
                        var9['subscription'] = var13;
                        var9 = var11.bind(var12)(var9);
                        var9 = {};
                        var11 = var8.body;
                        var9['subscription'] = var11;
                        var12 = _closure1_slot13;
                        var11 = var12.has;
                        var10 = var5;
                        var10 = var10.type;
                        var10 = var11.bind(var12)(var10);
                        var9['redirectConfirmation'] = var10;
case 150: // try_end0
                        return var9;
case 149:
                        return var8;
case 146:
                        return var4;
case 151: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var7 = var9;
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var10 = 11;
                        var8 = var8[var10];
                        var8 = var11.bind(var6)(var8);
                        var8 = var8.BillingError;
                        var8 = var9 instanceof var8;
                        if(var8) { _fun0014_ip = 152; continue _fun0014 }
case 153:
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var8 = var9.bind(var6)(var8);
                        var10 = var8.BillingError;
                        var21 = var7;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {constructor: {value: var10}});
                        var22 = var9;
                        var8 = new var22[var10](var21, var20);
                        var8 = var8 instanceof Object ? var8 : var9;
                        _fun0014_ip = 154; continue _fun0014;
case 152:
                        var8 = var7;
case 154:
                        var3 = var8;
                        var9 = var8.code;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 12;
                        var8 = var11[var8];
                        var8 = var10.bind(var6)(var8);
                        var8 = var8.ErrorCodes;
                        var8 = var8.CONFIRMATION_REQUIRED;
                        if(!(var9 === var8)) { _fun0014_ip = 155; continue _fun0014 }
case 156:
                        var8 = var7;
                        var8 = var8.body;
                        var8 = var8.payment_id;
                        if(var8) { _fun0014_ip = 157; continue _fun0014 }
case 158:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 15;
                        var8 = var10[var8];
                        var10 = var9.bind(var6)(var8);
                        var9 = var10.dispatchConfirmationError;
                        var8 = 'payment id cannot be null on redirected confirmations.';
                        var8 = var9.bind(var10)(var8);
                        throw var8;
case 157:
                        var8 = _closure1_slot35;
                        var7 = var7.body;
                        var5 = var8.bind(var6)(var7, var5);
                        return var5;
case 155:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var4['type'] = var7;
                        var4['error'] = var3;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
case 139:
                        return var2;
case 134:
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
        var6 = function handleConfirmation(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arg1;
                var5 = arg2;
                var1 = null;
                if(!(var1 != var5)) { _fun0015_ip = 22; continue _fun0015 }
case 20:
                var6 = _closure1_slot16;
                var4 = var6.has;
                var1 = var5.type;
                var1 = var4.bind(var6)(var1);
                if(var1) { _fun0015_ip = 46; continue _fun0015 }
case 22:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var4);
                var4 = var6.handleStripeConfirmation;
                var1 = var2.payment_id;
                var1 = var4.bind(var6)(var1, var5);
                _fun0015_ip = 159; continue _fun0015;
case 46:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.handleAdyenConfirmation;
                var2 = var2.adyen_redirect_url;
                var1 = var3.bind(var4)(var2, var5);
case 159:
                return var1;
            }
        };
        var _closure1_slot35 = var6;
        var1 = function _redirectedPaymentSucceeded() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        StartGenerator();
                        var8 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0016_ip = 160; continue _fun0016 }
case 30:
                        var2 = _closure1_slot26;
                        var5 = undefined;
                        var2 = var2.bind(var5)(var8);
                        SaveGenerator(address=31);
case 161:
                        return var2;
case 162:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0016_ip = 163; continue _fun0016 }
case 135:
                        var9 = null;
                        var6 = var9 == var2;
                        var4 = undefined;
                        if(var6) { _fun0016_ip = 164; continue _fun0016 }
case 165:
                        var4 = var2.body;
case 164:
                        if(!(var9 != var4)) { _fun0016_ip = 166; continue _fun0016 }
case 12:
                        var7 = _closure1_slot6;
                        var6 = var7.createFromServer;
                        var4 = var2.body;
                        var4 = var4.payment_source;
                        var4 = var6.bind(var7)(var4);
                        var10 = _closure1_slot13;
                        var7 = var10.has;
                        var6 = var4.type;
                        var6 = var7.bind(var10)(var6);
                        if(var6) { _fun0016_ip = 167; continue _fun0016 }
case 168:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 15;
                        var6 = var10[var6];
                        var10 = var7.bind(var5)(var6);
                        var7 = var10.dispatchConfirmationError;
                        var6 = 'unsupported redirect payment source';
                        var6 = var7.bind(var10)(var6);
                        throw var6;
case 167:
                        var6 = var9 == var2;
                        var7 = undefined;
                        if(var6) { _fun0016_ip = 169; continue _fun0016 }
case 35:
                        var6 = var2.body;
                        var9 = var9 == var6;
                        var7 = undefined;
                        if(var9) { _fun0016_ip = 169; continue _fun0016 }
case 170:
                        var7 = var6.status;
case 169:
                        var6 = _closure1_slot18;
                        var6 = var6.FAILED;
                        if(!(var7 !== var6)) { _fun0016_ip = 171; continue _fun0016 }
case 25:
                        var6 = var4.paymentGateway;
                        var4 = _closure1_slot12;
                        var4 = var4.STRIPE;
                        var4 = var6 !== var4;
                        if(var4) { _fun0016_ip = 13; continue _fun0016 }
case 172:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 16;
                        var6 = var9[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.paymentIntentSucceeded;
                        var4 = var6.bind(var7)(var8);
case 13:
                        return var4;
case 171:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 15;
                        var4 = var7[var4];
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.dispatchConfirmationError;
                        var4 = 'payment failed';
                        var4 = var6.bind(var7)(var4);
                        throw var4;
case 166:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 15;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatchConfirmationError;
                        var3 = 'could not fetch payment';
                        var3 = var4.bind(var5)(var3);
                        throw var3;
case 163:
                        return var2;
case 160:
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
        var1 = function _cancelSubscription() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 173; continue _fun0017 }
case 3:
                        var8 = arg1;
                        var9 = arg2;
                        var10 = arg3;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 9;
                        var2 = var2[var6];
                        var5 = undefined;
                        var7 = var3.bind(var5)(var2);
                        var3 = var7.dispatch;
                        var2 = {};
                        var11 = 'BILLING_SUBSCRIPTION_CANCEL_START';
                        var2['type'] = var11;
                        var2 = var3.bind(var7)(var2);
case 174: // try_start_0
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var2 = var3.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var3 = var7.del;
                        var2 = {};
                        var12 = _closure1_slot11;
                        var11 = var12.BILLING_SUBSCRIPTION;
                        var8 = var11.bind(var12)(var8);
                        var2['url'] = var8;
                        var8 = {};
                        var8['location'] = var10;
                        var8['location_stack'] = var9;
                        var2['query'] = var8;
                        var8 = true;
                        var2['oldFormErrors'] = var8;
                        var8 = false;
                        var2['rejectWithError'] = var8;
                        var2 = var3.bind(var7)(var2);
                        SaveGenerator(address=156);
case 175:
                        return var2;
case 176:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 177; continue _fun0017 }
case 178:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var8 = var7.bind(var5)(var3);
                        var7 = var8.dispatch;
                        var3 = {};
                        var9 = 'BILLING_SUBSCRIPTION_CANCEL_SUCCESS';
                        var3['type'] = var9;
                        var3 = var7.bind(var8)(var3);
case 179: // try_end0
                        return var2;
case 177:
                        return var2;
case 180: // catch_target0
                        CatchBlockStart(arg_register=7);
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 11;
                        var2 = var3[var2];
                        var2 = var7.bind(var5)(var2);
                        var2 = var2.BillingError;
                        var7 = var2.prototype;
                        var7 = Object.create(var7, {constructor: {value: var2}});
                        var14 = var7;
                        var13 = var8;
                        var2 = new var14[var2](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var7;
                        var4 = _closure1_slot1;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_SUBSCRIPTION_CANCEL_FAIL';
                        var3['type'] = var6;
                        var3['error'] = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 173:
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
        var5 = function updateSubscription() {
            var1 = undefined;
            var4 = _closure1_slot39;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot38 = var5;
        var1 = function _updateSubscription() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        var3 = arg2;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                        if(var4) { _fun0018_ip = 181; continue _fun0018 }
case 30:
                        var15 = arg1;
                        var5 = var3;
                        var19 = arg3;
                        var18 = arg4;
                        var16 = arg5;
                        var17 = arg6;
                        var10 = arg7;
                        var4 = undefined;
                        var9 = undefined;
                        var13 = undefined;
                        var11 = undefined;
                        var2 = undefined;
                        var3 = var3.paymentSource;
                        var12 = null;
                        if(!(var12 != var3)) { _fun0018_ip = 182; continue _fun0018 }
case 164:
                        var3 = var5;
                        var3 = var3.currency;
                        if(!(var12 != var3)) { _fun0018_ip = 183; continue _fun0018 }
case 182:
                        var14 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 9;
                        var8 = var8[var6];
                        var20 = var14.bind(var4)(var8);
                        var14 = var20.dispatch;
                        var8 = {};
                        var21 = 'BILLING_SUBSCRIPTION_UPDATE_START';
                        var8['type'] = var21;
                        var8 = var14.bind(var20)(var8);
case 184: // try_start_0
                        var14 = {};
                        var8 = var5;
                        var20 = var8.status;
                        var14['status'] = var20;
                        var8 = var8.paymentSource;
                        var9 = var8;
                        var20 = var12 == var8;
                        var8 = undefined;
                        if(var20) { _fun0018_ip = 175; continue _fun0018 }
case 185:
                        var8 = var9.id;
case 175:
                        var14['payment_source_id'] = var8;
                        var8 = var5;
                        var8 = var8.paymentSource;
                        var8 = var12 != var8;
                        var9 = null;
                        if(!var8) { _fun0018_ip = 186; continue _fun0018 }
case 187:
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var8 = 16;
                        var8 = var21[var8];
                        var21 = var20.bind(var4)(var8);
                        var20 = var21.createPaymentSourceToken;
                        var8 = var5;
                        var8 = var8.paymentSource;
                        var8 = var20.bind(var21)(var8);
                        SaveGenerator(address=221);
case 188:
                        return var8;
case 189:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=19);
                        var9 = var8;
                        if(var20) { _fun0018_ip = 190; continue _fun0018 }
case 186:
                        var14['payment_source_token'] = var9;
                        var9 = var5;
                        var20 = var9.currency;
                        var14['currency'] = var20;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var20 = 17;
                        var20 = var22[var20];
                        var21 = var21.bind(var4)(var20);
                        var20 = var21.createGatewayCheckoutContext;
                        var9 = var9.paymentSource;
                        var9 = var20.bind(var21)(var9);
                        SaveGenerator(address=293);
case 191:
                        return var9;
case 192:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=19);
                        if(var20) { _fun0018_ip = 193; continue _fun0018 }
case 143:
                        var14['gateway_checkout_context'] = var9;
                        var14['load_id'] = var10;
                        var10 = var5;
                        var20 = var10.pauseDuration;
                        var14['pause_duration'] = var20;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var20 = 18;
                        var20 = var22[var20];
                        var21 = var21.bind(var4)(var20);
                        var20 = var21.getPurchaseToken;
                        var20 = var20.bind(var21)();
                        var14['purchase_token'] = var20;
                        var14['expected_invoice_price'] = var19;
                        var14['expected_renewal_price'] = var18;
                        var13 = var14;
                        var10 = var10.paymentSource;
                        if(!(var12 != var10)) { _fun0018_ip = 194; continue _fun0018 }
case 195:
                        var18 = _closure1_slot16;
                        var14 = var18.has;
                        var10 = var5;
                        var10 = var10.paymentSource;
                        var10 = var10.type;
                        var10 = var14.bind(var18)(var10);
                        if(!var10) { _fun0018_ip = 194; continue _fun0018 }
case 196:
                        var14 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var10 = 15;
                        var10 = var18[var10];
                        var18 = var14.bind(var4)(var10);
                        var14 = var18.popupBridgeState;
                        var10 = var5;
                        var10 = var10.paymentSource;
                        var10 = var10.type;
                        var10 = var14.bind(var18)(var10);
                        SaveGenerator(address=472);
case 197:
                        return var10;
case 198:
                        ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                        if(var14) { _fun0018_ip = 199; continue _fun0018 }
case 200:
                        var11 = var10;
                        var14 = var13;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var18 = 10;
                        var18 = var20[var18];
                        var19 = var19.bind(var4)(var18);
                        var18 = var19.getAPIBaseURL;
                        var18 = var18.bind(var19)();
                        var22 = _closure1_slot11;
                        var21 = var22.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var19 = var5;
                        var19 = var19.paymentSource;
                        var20 = var19.type;
                        var23 = var12 != var10;
                        var19 = '';
                        if(!var23) { _fun0018_ip = 201; continue _fun0018 }
case 202:
                        var19 = var11;
case 201:
                        var11 = 'success';
                        var11 = var21.bind(var22)(var20, var19, var11);
                        var11 = var18 + var11;
                        var14['return_url'] = var11;
case 194:
                        var11 = var5;
                        var11 = var11.items;
                        if(!(var12 != var11)) { _fun0018_ip = 203; continue _fun0018 }
case 204:
                        var12 = var13;
                        var14 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var11 = 14;
                        var11 = var18[var11];
                        var18 = var14.bind(var4)(var11);
                        var14 = var18.coerceExistingItemsToNewItemInterval;
                        var11 = var5;
                        var11 = var11.items;
                        var18 = var14.bind(var18)(var11);
                        var14 = var18.map;
                        var11 = function(arg1) {
                            var4 = arg1;
                            var3 = var4.planId;
                            var1 = null;
                            var2 = Object.create(var1);
                            var1 = 0;
                            var2['planId'] = var1;
                            var7 = {};
                            var6 = var4;
                            var5 = var2;
                            var6 = copyDataProperties(var7, var6, var5);
                            var1 = {};
                            var7 = var1;
                            var2 = copyDataProperties(var7, var6);
                            var2 = 'plan_id';
                            var1[1] = var3;
                            return var1;
                        };
                        var11 = var14.bind(var18)(var11);
                        var12['items'] = var11;
case 203:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 10;
                        var11 = var14[var11];
                        var11 = var12.bind(var4)(var11);
                        var14 = var11.HTTP;
                        var12 = var14.patch;
                        var11 = {};
                        var19 = _closure1_slot11;
                        var18 = var19.BILLING_SUBSCRIPTION;
                        var15 = var15.id;
                        var15 = var18.bind(var19)(var15);
                        var11['url'] = var15;
                        var15 = {};
                        var15['location'] = var17;
                        var15['location_stack'] = var16;
                        var11['query'] = var15;
                        var11['body'] = var13;
                        var13 = true;
                        var11['oldFormErrors'] = var13;
                        var13 = false;
                        var11['rejectWithError'] = var13;
                        var11 = var12.bind(var14)(var11);
                        SaveGenerator(address=754);
case 205:
                        return var11;
case 206:
                        ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                        if(var12) { _fun0018_ip = 207; continue _fun0018 }
case 208:
                        var14 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var6];
                        var15 = var14.bind(var4)(var12);
                        var14 = var15.dispatch;
                        var12 = {};
                        var16 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var12['type'] = var16;
                        var16 = var11.body;
                        var12['subscription'] = var16;
                        var12 = var14.bind(var15)(var12);
                        var12 = {};
                        var14 = var11.body;
                        var12['subscription'] = var14;
                        var12['redirectConfirmation'] = var13;
case 209: // try_end0
                        return var12;
case 207:
                        return var11;
case 199:
                        return var10;
case 193:
                        return var9;
case 190:
                        return var8;
case 210: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var7 = var9;
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var10 = 11;
                        var8 = var8[var10];
                        var8 = var11.bind(var4)(var8);
                        var8 = var8.BillingError;
                        var8 = var9 instanceof var8;
                        if(var8) { _fun0018_ip = 211; continue _fun0018 }
case 212:
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var8 = var9.bind(var4)(var8);
                        var10 = var8.BillingError;
                        var26 = var7;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {constructor: {value: var10}});
                        var27 = var9;
                        var8 = new var27[var10](var26, var25);
                        var8 = var8 instanceof Object ? var8 : var9;
                        _fun0018_ip = 213; continue _fun0018;
case 211:
                        var8 = var7;
case 213:
                        var2 = var8;
                        var9 = var8.code;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 12;
                        var8 = var11[var8];
                        var8 = var10.bind(var4)(var8);
                        var8 = var8.ErrorCodes;
                        var8 = var8.CONFIRMATION_REQUIRED;
                        if(!(var9 === var8)) { _fun0018_ip = 214; continue _fun0018 }
case 215:
                        var8 = var7;
                        var8 = var8.body;
                        var8 = var8.payment_id;
                        if(var8) { _fun0018_ip = 216; continue _fun0018 }
case 217:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 15;
                        var8 = var10[var8];
                        var10 = var9.bind(var4)(var8);
                        var9 = var10.dispatchConfirmationError;
                        var8 = 'payment id cannot be null on redirected confirmations.';
                        var8 = var9.bind(var10)(var8);
                        throw var8;
case 216:
                        var8 = _closure1_slot35;
                        var7 = var7.body;
                        var5 = var5.paymentSource;
                        var5 = var8.bind(var4)(var7, var5);
                        return var5;
case 214:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var3['type'] = var7;
                        var3['error'] = var2;
                        var3 = var5.bind(var6)(var3);
                        throw var2;
case 183:
                        var2 = global;
                        var3 = var2.Error;
                        var2 = 'Currency must be specified with payment source';
                        var2 = var3.bind(var4)(var2);
                        throw var2;
case 181:
                        return var1;
                    }
                };
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
        var1 = function _voidPendingPayment() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0019_ip = 218; continue _fun0019 }
case 219:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.post;
                        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var8 = _closure1_slot11;
                        var7 = var8.BILLING_PAYMENTS_VOID;
                        var6 = arg1;
                        var6 = var7.bind(var8)(var6);
                        var2['url'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=86);
case 47:
                        return var2;
case 31:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0019_ip = 220; continue _fun0019 }
case 221:
                        return var3;
case 220:
                        return var2;
case 218:
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
        var1 = function _fetchIpCountryCode() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        StartGenerator();
                        var3 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0020_ip = 222; continue _fun0020 }
case 223:
                        var6 = undefined;
                        if(!(var3 === var6)) { _fun0020_ip = 224; continue _fun0020 }
case 225:
                        var3 = false;
case 224:
                        var _closure4_slot0 = var6;
                        SaveGenerator(address=31);
case 161:
                        return var6;
case 162:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0020_ip = 226; continue _fun0020 }
case 135:
                        if(var3) { _fun0020_ip = 227; continue _fun0020 }
case 228:
                        var4 = _closure1_slot8;
                        var7 = var4.ipCountryCodeRequest;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0020_ip = 227; continue _fun0020 }
case 229:
                        var3 = _closure1_slot8;
                        var3 = var3.ipCountryCodeRequest;
                        return var3;
case 227: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var3 = var7.bind(var6)(var3);
                        var9 = var3.HTTP;
                        var7 = var9.get;
                        var3 = {};
                        var10 = _closure1_slot11;
                        var10 = var10.BILLING_COUNTRY_CODE;
                        var3['url'] = var10;
                        var10 = false;
                        var3['rejectWithError'] = var10;
                        var3 = var7.bind(var9)(var3);
                        _closure4_slot0 = var3;
                        var9 = _closure1_slot1;
                        var7 = 9;
                        var8 = var8[var7];
                        var9 = var9.bind(var6)(var8);
                        var8 = var9.wait;
                        var5 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_IP_COUNTRY_CODE_FETCH_START';
                            var1['type'] = var4;
                            var4 = _closure4_slot0;
                            var1['request'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var5 = var8.bind(var9)(var5);
                        SaveGenerator(address=175);
case 230:
                        return var3;
case 170:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0020_ip = 231; continue _fun0020 }
case 9:
                        var5 = var3.body;
                        var8 = var5.country_code;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var7 = var5.bind(var6)(var4);
                        var5 = var7.dispatch;
                        var4 = {};
                        var9 = 'BILLING_SET_IP_COUNTRY_CODE';
                        var4['type'] = var9;
                        var4['countryCode'] = var8;
                        var4 = var5.bind(var7)(var4);
case 232: // try_end0
                        return var3;
case 231:
                        return var3;
case 233: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_IP_COUNTRY_CODE_FAILURE';
                        var4['type'] = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
case 226:
                        return var2;
case 222:
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
        var4 = function fetchPaymentSourceCreationContext() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.get;
            var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
            var4 = _closure1_slot11;
            var4 = var4.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT;
            var1['url'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure1_slot42 = var4;
        var1 = function _fetchIpLocation() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        StartGenerator();
                        var3 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0021_ip = 234; continue _fun0021 }
case 223:
                        var6 = undefined;
                        if(!(var3 === var6)) { _fun0021_ip = 224; continue _fun0021 }
case 225:
                        var3 = false;
case 224:
                        var _closure4_slot0 = var6;
                        SaveGenerator(address=31);
case 161:
                        return var6;
case 162:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0021_ip = 235; continue _fun0021 }
case 135:
                        if(var3) { _fun0021_ip = 227; continue _fun0021 }
case 228:
                        var4 = _closure1_slot8;
                        var7 = var4.ipLocationRequest;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0021_ip = 227; continue _fun0021 }
case 229:
                        var3 = _closure1_slot8;
                        var3 = var3.ipLocationRequest;
                        return var3;
case 227: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var3 = var7.bind(var6)(var3);
                        var9 = var3.HTTP;
                        var7 = var9.get;
                        var3 = {};
                        var10 = _closure1_slot11;
                        var10 = var10.BILLING_LOCATION;
                        var3['url'] = var10;
                        var10 = false;
                        var3['rejectWithError'] = var10;
                        var3 = var7.bind(var9)(var3);
                        _closure4_slot0 = var3;
                        var9 = _closure1_slot1;
                        var7 = 9;
                        var8 = var8[var7];
                        var9 = var9.bind(var6)(var8);
                        var8 = var9.wait;
                        var5 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_IP_LOCATION_FETCH_START';
                            var1['type'] = var4;
                            var4 = _closure4_slot0;
                            var1['request'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var5 = var8.bind(var9)(var5);
                        SaveGenerator(address=175);
case 230:
                        return var3;
case 170:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0021_ip = 173; continue _fun0021 }
case 9:
                        var5 = var3.body;
                        var8 = var5.country_code;
                        var5 = var3.body;
                        var13 = var5.subdivision_code;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var9 = var4[var7];
                        var11 = var5.bind(var6)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var12 = 'BILLING_SET_IP_LOCATION';
                        var9['type'] = var12;
                        var12 = {};
                        var12['countryCode'] = var8;
                        var12['subdivisionCode'] = var13;
                        var9['location'] = var12;
                        var9 = var10.bind(var11)(var9);
                        var4 = var4[var7];
                        var7 = var5.bind(var6)(var4);
                        var5 = var7.dispatch;
                        var4 = {};
                        var9 = 'BILLING_SET_IP_COUNTRY_CODE';
                        var4['type'] = var9;
                        var4['countryCode'] = var8;
                        var4 = var5.bind(var7)(var4);
case 236: // try_end0
                        return var3;
case 173:
                        return var3;
case 143: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var8 = 19;
                        var8 = var7[var8];
                        var10 = var5.bind(var6)(var8);
                        var9 = var10.track;
                        var4 = _closure1_slot10;
                        var8 = var4.BILLING_IP_LOCATION_FETCH_ERROR;
                        var4 = {};
                        var11 = var3.message;
                        var4['error_message'] = var11;
                        var4 = var9.bind(var10)(var8, var4);
                        var4 = 9;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_IP_LOCATION_FAILURE';
                        var4['type'] = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
case 235:
                        return var2;
case 234:
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
        var1 = function _redeemReactivationOffer() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot5;
            var3 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0022_ip = 237; continue _fun0022 }
case 3:
                        var9 = arg1;
                        var8 = arg2;
case 238: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 10;
                        var2 = var6[var2];
                        var6 = undefined;
                        var2 = var5.bind(var6)(var2);
                        var7 = var2.HTTP;
                        var5 = var7.post;
                        var2 = {};
                        var11 = _closure1_slot11;
                        var10 = var11.REACTIVATION_OFFER_REDEEM;
                        var9 = var9.id;
                        var8 = var8.id;
                        var8 = var10.bind(var11)(var9, var8);
                        var2['url'] = var8;
                        var8 = false;
                        var2['rejectWithError'] = var8;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address=99);
case 101:
                        return var2;
case 239:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0022_ip = 240; continue _fun0022 }
case 241:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var4['type'] = var7;
                        var7 = var2.body;
                        var4['subscription'] = var7;
                        var4 = var5.bind(var6)(var4);
case 90: // try_end0
                        _fun0022_ip = 242; continue _fun0022;
case 240:
                        return var2;
case 243: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var3 = var6;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 11;
                        var5 = var4[var7];
                        var4 = undefined;
                        var5 = var8.bind(var4)(var5);
                        var5 = var5.BillingError;
                        var5 = var6 instanceof var5;
                        if(var5) { _fun0022_ip = 95; continue _fun0022 }
case 244:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var5 = var6.bind(var4)(var5);
                        var7 = var5.BillingError;
                        var13 = var3;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var14 = var6;
                        var5 = new var14[var7](var13, var12);
                        var5 = var5 instanceof Object ? var5 : var6;
                        _fun0022_ip = 245; continue _fun0022;
case 95:
                        var5 = var3;
case 245:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 9;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var2['type'] = var6;
                        var2['error'] = var5;
                        var2 = var3.bind(var4)(var2);
case 242:
                        var2 = undefined;
                        return var2;
case 237:
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
        var1 = ['line1', 'line2', 'postalCode'];
        var _closure1_slot3 = var1;
        var1 = global;
        var11 = var1.Object;
        var10 = var11.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var8);
        var1 = 0;
        var8 = var14[var1];
        var1 = undefined;
        var8 = var9.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var8 = 1;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot5 = var8;
        var8 = 2;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot6 = var8;
        var8 = 3;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var8 = 4;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot8 = var8;
        var8 = 5;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot9 = var8;
        var8 = 6;
        var8 = var14[var8];
        var8 = var15.bind(var1)(var8);
        var9 = var8.AnalyticEvents;
        var _closure1_slot10 = var9;
        var9 = var8.Endpoints;
        var _closure1_slot11 = var9;
        var9 = var8.PaymentGateways;
        var _closure1_slot12 = var9;
        var9 = var8.REDIRECTED_PAYMENT_SOURCES;
        var _closure1_slot13 = var9;
        var8 = var8.SubscriptionStatusTypes;
        var _closure1_slot14 = var8;
        var8 = 7;
        var8 = var14[var8];
        var8 = var15.bind(var1)(var8);
        var8 = var8.UserLazyPerkSyncLevels;
        var _closure1_slot15 = var8;
        var8 = 8;
        var8 = var14[var8];
        var8 = var15.bind(var1)(var8);
        var9 = var8.ADYEN_PAYMENT_SOURCES;
        var _closure1_slot16 = var9;
        var9 = var8.CurrencyCodes;
        var _closure1_slot17 = var9;
        var9 = var8.PaymentStatusTypes;
        var _closure1_slot18 = var9;
        var9 = var8.PREPAID_PAYMENT_SOURCES;
        var _closure1_slot19 = var9;
        var8 = var8.SubscriptionTypes;
        var _closure1_slot20 = var8;
        var8 = 20;
        var8 = var14[var8];
        var16 = var15.bind(var1)(var8);
        var9 = var16.fileFinishedImporting;
        var8 = 'actions/BillingActionCreators.tsx';
        var8 = var9.bind(var16)(var8);
        var9 = 16;
        var8 = var14[var9];
        var12 = var15.bind(var1)(var8);
        for(var8 in var12)
case 153:
        {
case 246:
            var17 = var8;
            var16 = var14[var9];
            var16 = var15.bind(var1)(var16);
            var16 = var16[var17];
            var3[var17] = var16;
            _fun0001_ip = 153; continue _fun0001;
        }
case 247:
        var9 = 15;
        var8 = var14[var9];
        var12 = var15.bind(var1)(var8);
        for(var8 in var12)
case 154:
        {
case 248:
            var17 = var8;
            var16 = var14[var9];
            var16 = var15.bind(var1)(var16);
            var16 = var16[var17];
            var3[var17] = var16;
            _fun0001_ip = 154; continue _fun0001;
        }
case 249:
        var8 = function deletePaymentSource() {
            var1 = undefined;
            var4 = _closure1_slot21;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['deletePaymentSource'] = var8;
        var8 = function updatePaymentSource() {
            var1 = undefined;
            var4 = _closure1_slot22;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['updatePaymentSource'] = var8;
        var8 = function fetchPaymentSources() {
            var1 = undefined;
            var4 = _closure1_slot23;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchPaymentSources'] = var8;
        var8 = function fetchPaymentSource() {
            var1 = undefined;
            var4 = _closure1_slot24;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchPaymentSource'] = var8;
        var8 = function fetchWalletInformation() {
            var1 = undefined;
            var4 = _closure1_slot25;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchWalletInformation'] = var8;
        var3['fetchPayment'] = var7;
        var7 = function fetchPayments() {
            var1 = undefined;
            var4 = _closure1_slot28;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchPayments'] = var7;
        var7 = function fetchSubscriptions() {
            var1 = undefined;
            var4 = _closure1_slot29;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchSubscriptions'] = var7;
        var7 = function getPerksRelevance() {
            var1 = undefined;
            var4 = _closure1_slot30;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['getPerksRelevance'] = var7;
        var7 = function getNitroAffinity() {
            var1 = undefined;
            var4 = _closure1_slot31;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['getNitroAffinity'] = var7;
        var7 = function fetchMostRecentSubscription() {
            var1 = undefined;
            var4 = _closure1_slot32;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchMostRecentSubscription'] = var7;
        var7 = function createSubscription() {
            var1 = undefined;
            var4 = _closure1_slot33;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['createSubscription'] = var7;
        var7 = function payInvoiceManually() {
            var1 = undefined;
            var4 = _closure1_slot34;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['payInvoiceManually'] = var7;
        var3['handleConfirmation'] = var6;
        var6 = function redirectedPaymentSucceeded() {
            var1 = undefined;
            var4 = _closure1_slot36;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['redirectedPaymentSucceeded'] = var6;
        var6 = function cancelSubscription() {
            var1 = undefined;
            var4 = _closure1_slot37;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['cancelSubscription'] = var6;
        var6 = function deleteRenewalMutation(arg1, arg2) {
            var7 = arg1;
            var6 = _closure1_slot38;
            var5 = {};
            var2 = var7.items;
            var5['items'] = var2;
            var4 = {};
            var2 = 0;
            var4['amount'] = var2;
            var2 = var7.currency;
            var4['currency'] = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var10 = var2.bind(var3)(var1);
            var9 = var10.getItemPlansTotalServerPrice;
            var8 = var7.items;
            var2 = var7.currency;
            var1 = var7.paymentSourceId;
            var12 = var9.bind(var10)(var8, var2, var1);
            var11 = arg2;
            var16 = undefined;
            var15 = var7;
            var14 = var5;
            var13 = var4;
            var1 = var16[var6](var15, var14, var13, var12, var11, var10);
            return var1;
        };
        var3['deleteRenewalMutation'] = var6;
        var3['updateSubscription'] = var5;
        var5 = function resubscribeToSubscription(arg1, arg2, arg3, arg4, arg5) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var8 = arg1;
                var11 = arg3;
                var7 = _closure1_slot38;
                var6 = {};
                var2 = _closure1_slot14;
                var2 = var2.ACTIVE;
                var6['status'] = var2;
                var6['paymentSource'] = var11;
                var2 = arg4;
                var6['currency'] = var2;
                var5 = {};
                var2 = 0;
                var5['amount'] = var2;
                var2 = var8.currency;
                var5['currency'] = var2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var4 = undefined;
                var10 = var2.bind(var4)(var1);
                var9 = var10.getItemPlansTotalServerPrice;
                var3 = var8.items;
                var2 = var8.currency;
                var1 = null;
                var12 = var1 == var11;
                var1 = undefined;
                if(var12) { _fun0023_ip = 250; continue _fun0023 }
case 168:
                var1 = var11.id;
case 250:
                var15 = var9.bind(var10)(var3, var2, var1);
                var14 = arg2;
                var13 = arg5;
                var19 = undefined;
                var18 = var8;
                var17 = var6;
                var16 = var5;
                var1 = var19[var7](var18, var17, var16, var15, var14, var13, var12);
                return var1;
            }
        };
        var3['resubscribeToSubscription'] = var5;
        var5 = function upgradeSubscription(arg1, arg2, arg3, arg4, arg5, arg6) {
            var8 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var7 = undefined;
            var4 = var3.bind(var7)(var1);
            var3 = var4.getItemsWithUpsertedPremiumPlanId;
            var1 = arg2;
            var1 = var3.bind(var4)(var8, var1);
            var6 = _closure1_slot38;
            var5 = {};
            var2 = _closure1_slot14;
            var2 = var2.ACTIVE;
            var5['status'] = var2;
            var5['items'] = var1;
            var12 = arg3;
            var11 = arg4;
            var10 = arg5;
            var9 = arg6;
            var15 = undefined;
            var14 = var8;
            var13 = var5;
            var1 = var15[var6](var14, var13, var12, var11, var10, var9, var8);
            return var1;
        };
        var3['upgradeSubscription'] = var5;
        var5 = function changeSubscriptionCurrency(arg1, arg2, arg3, arg4, arg5) {
            var2 = arg2;
            var8 = _closure1_slot38;
            var7 = {};
            var7['currency'] = var2;
            var6 = {};
            var1 = 0;
            var6['amount'] = var1;
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            var6['currency'] = var1;
            var15 = undefined;
            var14 = arg1;
            var11 = arg3;
            var10 = arg4;
            var9 = arg5;
            var13 = var7;
            var12 = var6;
            var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
            return var1;
        };
        var3['changeSubscriptionCurrency'] = var5;
        var5 = function changePaymentSource(arg1, arg2, arg3, arg4, arg5, arg6) {
            var2 = arg3;
            var8 = _closure1_slot38;
            var7 = {};
            var1 = arg2;
            var7['paymentSource'] = var1;
            var7['currency'] = var2;
            var6 = {};
            var1 = 0;
            var6['amount'] = var1;
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            var6['currency'] = var1;
            var15 = undefined;
            var14 = arg1;
            var11 = arg4;
            var10 = arg5;
            var9 = arg6;
            var13 = var7;
            var12 = var6;
            var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
            return var1;
        };
        var3['changePaymentSource'] = var5;
        var5 = function clearUpdatePaymentSourceError() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['clearUpdatePaymentSourceError'] = var5;
        var5 = function clearRemovePaymentSourceError() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['clearRemovePaymentSourceError'] = var5;
        var5 = function clearPaymentAuthenticationError() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'PAYMENT_AUTHENTICATION_CLEAR_ERROR';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['clearPaymentAuthenticationError'] = var5;
        var5 = function voidPendingPayment() {
            var1 = undefined;
            var4 = _closure1_slot40;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['voidPendingPayment'] = var5;
        var5 = function popupBridgeCallback(arg1) {
            var2 = arg1;
            var11 = var2.paymentSourceType;
            var _closure2_slot0 = var11;
            var9 = var2.state;
            var8 = var2.path;
            var7 = var2.query;
            var6 = var2.insecure;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 9;
            var2 = var10[var2];
            var4 = undefined;
            var12 = var3.bind(var4)(var2);
            var3 = var12.dispatch;
            var2 = {};
            var13 = 'BILLING_POPUP_BRIDGE_CALLBACK_START';
            var2['type'] = var13;
            var2['paymentSourceType'] = var11;
            var2 = var3.bind(var12)(var2);
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var10 = _closure1_slot11;
            var5 = var10.BILLING_POPUP_BRIDGE_CALLBACK;
            var5 = var5.bind(var10)(var11);
            var2['url'] = var5;
            var5 = {};
            var5['state'] = var9;
            var5['path'] = var8;
            var5['query'] = var7;
            var5['insecure'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'BILLING_POPUP_BRIDGE_CALLBACK_END';
                var1['type'] = var4;
                var4 = _closure2_slot0;
                var1['paymentSourceType'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = arg1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['popupBridgeCallback'] = var5;
        var5 = function fetchIpCountryCode() {
            var1 = undefined;
            var4 = _closure1_slot41;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchIpCountryCode'] = var5;
        var3['fetchPaymentSourceCreationContext'] = var4;
        var4 = function clearAndFetchPaymentSourceCreationContext() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START';
            var4['type'] = var7;
            var4 = var5.bind(var6)(var4);
            var3 = _closure1_slot42;
            var5 = var3.bind(var1)();
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.body;
                    var6 = null;
                    if(!(var6 == var5)) { _fun0024_ip = 251; continue _fun0024 }
case 252:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL';
                    var1['type'] = var4;
                    var4 = global;
                    var8 = var4.Error;
                    var4 = var8.prototype;
                    var7 = Object.create(var4, {constructor: {value: var8}});
                    var10 = 'Missing response body';
                    var11 = var7;
                    var4 = new var11[var8](var10, var9);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var1['error'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0024_ip = 81; continue _fun0024;
case 251:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS';
                    var1['type'] = var4;
                    var4 = {};
                    var8 = var5.store_country;
                    var9 = var6 != var8;
                    var7 = null;
                    if(!var9) { _fun0024_ip = 243; continue _fun0024 }
case 240:
                    var7 = var8;
case 243:
                    var4['store_country'] = var7;
                    var7 = var5.allowed_payment_source_types;
                    if(!(var6 == var7)) { _fun0024_ip = 253; continue _fun0024 }
case 254:
                    var7 = new Array(0);
case 253:
                    var4['allowed_payment_source_types'] = var7;
                    var5 = var5.allowed_billing_address_countries;
                    if(!(var6 == var5)) { _fun0024_ip = 179; continue _fun0024 }
case 28:
                    var5 = new Array(0);
case 179:
                    var4['allowed_billing_address_countries'] = var5;
                    var1['data'] = var4;
                    var1 = var2.bind(var3)(var1);
case 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL';
                    var2['type'] = var5;
                    var6 = global;
                    var5 = var6.Error;
                    var8 = var7 instanceof var5;
                    var5 = var7;
                    if(var8) { _fun0025_ip = 66; continue _fun0025 }
case 12:
                    var8 = var6.Error;
                    var6 = var6.String;
                    var9 = var6.bind(var1)(var7);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var5 = var6 instanceof Object ? var6 : var7;
case 66:
                    var2['error'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['clearAndFetchPaymentSourceCreationContext'] = var4;
        var4 = function fetchIpLocation() {
            var1 = undefined;
            var4 = _closure1_slot43;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['fetchIpLocation'] = var4;
        var4 = function resetPaymentIntentId() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'RESET_PAYMENT_ID';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['resetPaymentIntentId'] = var4;
        var4 = function resetSubscriptionStore() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'BILLING_SUBSCRIPTION_RESET';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['resetSubscriptionStore'] = var4;
        var4 = function startBrowserCheckout(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'USER_PAYMENT_BROWSER_CHECKOUT_STARTED';
            var2['type'] = var5;
            var5 = arg1;
            var2['loadId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['startBrowserCheckout'] = var4;
        var2 = function redeemReactivationOffer() {
            var1 = undefined;
            var4 = _closure1_slot44;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['redeemReactivationOffer'] = var2;
        return var1;
    }
})();