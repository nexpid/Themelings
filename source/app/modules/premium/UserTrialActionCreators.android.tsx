// app/modules/premium/UserTrialActionCreators.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot4 = var7;
    var2 = var2.PaymentGateways;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function fetchUserTrialOffer() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.USER_TRIAL_OFFER;
                    var2['url'] = var7;
                    var7 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.GOOGLE;
                    var7['payment_gateway'] = var8;
                    var2['query'] = var7;
                    var7 = true;
                    var2['oldFormErrors'] = var7;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=103);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = var2.body;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['userTrialOffer'] = var6;
                    var3 = var4.bind(var5)(var3);
case 8: // try_end0
                    _fun0001_ip = 9; continue _fun0001;
case 6:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 9:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchUserTrialOffer'] = var7;
    var4 = function acknowledgeUserTrialOffer(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var3 = var2.expires_at;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.post;
                    var2 = {};
                    var9 = _closure1_slot4;
                    var8 = var9.USER_TRIAL_OFFER_ACKNOWLEDGED;
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=113);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var6 = var2.body;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS';
                    var3['type'] = var7;
                    var3['userTrialOffer'] = var6;
                    var3 = var4.bind(var5)(var3);
case 18: // try_end0
                    _fun0002_ip = 12; continue _fun0002;
case 16:
                    return var2;
case 19: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = var2.status;
                    var2 = 404;
                    if(!(var2 === var3)) { _fun0002_ip = 12; continue _fun0002 }
case 20:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {'type': 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null};
                    var2 = var3.bind(var4)(var2);
case 12:
                    var2 = undefined;
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['acknowledgeUserTrialOffer'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/UserTrialActionCreators.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();