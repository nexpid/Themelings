// app/modules/billing/actions/StripeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createStripeSetupIntent() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = undefined;
                    if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = {};
case 4:
                    SaveGenerator(address=22);
case 6:
                    return var5;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 2;
                    var3 = var8[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot3;
                    var7 = var7.BILLING_STRIPE_SETUP_INTENT_SECRET;
                    var3['url'] = var7;
                    var10 = var3;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=107);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = var3.body;
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _createSetupIntentForPaymentElements() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var6 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = undefined;
                    if(!(var6 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = {};
case 4:
                    SaveGenerator(address=22);
case 6:
                    return var5;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 2;
                    var3 = var8[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true, 'failImmediatelyWhenRateLimited': true};
                    var7 = _closure1_slot3;
                    var7 = var7.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS;
                    var3['url'] = var7;
                    var10 = var3;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=107);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var3.body;
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/actions/StripeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createStripeSetupIntent() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createStripeSetupIntent'] = var4;
    var2 = function createSetupIntentForPaymentElements() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createSetupIntentForPaymentElements'] = var2;
    return var1;
})();