// app/modules/billing/actions/StripeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getSetupIntentSecret() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = function _getSetupIntentSecret() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arguments[0];
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = undefined;
                    if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = {};
case 4:
                    SaveGenerator(address=28);
case 6:
                    return var5;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = null;
                    var3 = var3 != var4;
                    var7 = undefined;
                    if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = {};
                    var4 = var4.regionalPaymentMethods;
                    var3['regional_payment_element_source_types'] = var4;
                    var7 = var3;
case 10:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 3;
                    var3 = var9[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var8 = _closure1_slot4;
                    var8 = var8.BILLING_STRIPE_SETUP_INTENT_SECRET;
                    var3['url'] = var8;
                    var3['body'] = var7;
                    var11 = var3;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=153);
case 12:
                    return var3;
case 13:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = var3.body;
                    var4 = var4.client_secret;
                    return var4;
case 14:
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
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/billing/actions/StripeActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getSetupIntentSecret'] = var4;
    var2 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[0];
            var1 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = undefined;
case 16:
            if(!(var1 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = {};
case 18:
            var7 = null;
            if(!(var7 == var6)) { _fun0002_ip = 20; continue _fun0002 }
case 6:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getPaymentMethods;
            var2 = {};
            var8 = _closure1_slot3;
            var8 = var8.ipCountryCode;
            var9 = var7 != var8;
            var7 = 'ALL';
            if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var7 = var8;
case 21:
            var2['ipCountryCode'] = var7;
            var7 = 'create_setup_intent_for_payment_elements';
            var2['location'] = var7;
            var2 = var3.bind(var5)(var2);
            var6 = var2.countryPaymentMethods;
case 20:
            var3 = _closure1_slot5;
            var2 = {};
            var5 = true;
            var2['failImmediatelyWhenRateLimited'] = var5;
            var11 = var2;
            var10 = var1;
            var1 = copyDataProperties(var11, var10);
            var5 = var6.length;
            var1 = 0;
            var5 = var5 > var1;
            var1 = undefined;
            if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 23:
            var5 = {};
            var5['regionalPaymentMethods'] = var6;
            var1 = var5;
case 15:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['createSetupIntentForPaymentElements'] = var2;
    return var1;
})();