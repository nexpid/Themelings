// app/modules/billing/actions/StripeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot4;
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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var4 = arguments[0];
                    var6 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 5:
                    var5 = undefined;
                    if(!(var4 === var5)) { _fun0002_ip = 15; continue _fun0002 }
case 7:
                    var4 = undefined;
case 15:
                    if(!(var6 === var5)) { _fun0002_ip = 16; continue _fun0002 }
case 9:
                    var6 = {};
case 16:
                    SaveGenerator(address=34);
case 17:
                    return var5;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var9 = null;
                    if(!(var9 == var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 4;
                    var3 = var8[var3];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.getPaymentMethods;
                    var3 = {};
                    var10 = _closure1_slot3;
                    var10 = var10.ipCountryCode;
                    var11 = var9 != var10;
                    var9 = 'ALL';
                    if(!var11) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var9 = var10;
case 23:
                    var3['ipCountryCode'] = var9;
                    var9 = 'create_setup_intent_for_payment_elements';
                    var3['location'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var4 = var3.countryPaymentMethods;
case 21:
                    var7 = var4.length;
                    var3 = 0;
                    if(!(!(var7 > var3))) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var7 = {};
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var3 = {};
                    var3['regional_payment_source_types'] = var4;
                    var7 = var3;
case 27:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 3;
                    var3 = var9[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true, 'body': null, 'failImmediatelyWhenRateLimited': true};
                    var8 = _closure1_slot4;
                    var8 = var8.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS;
                    var3['url'] = var8;
                    var3['body'] = var7;
                    var13 = var3;
                    var12 = var6;
                    var6 = copyDataProperties(var13, var12);
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=246);
case 28:
                    return var3;
case 29:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var4 = var3.body;
                    return var4;
case 30:
                    return var3;
case 19:
                    return var2;
case 14:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var2 = var2.bind(var1)();
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/billing/actions/StripeActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function createStripeSetupIntent() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createStripeSetupIntent'] = var4;
    var3['createSetupIntentForPaymentElements'] = var2;
    return var1;
})();