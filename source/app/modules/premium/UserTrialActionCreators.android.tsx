// app/modules/premium/UserTrialActionCreators.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 215; continue _fun0001 }
 10: // try_start_0
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
                    SaveGenerator(address=102);
 100:
                    return var2;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 160; continue _fun0001 }
 108:
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
 158: // try_end0
                    _fun0001_ip = 210; continue _fun0001;
 160:
                    return var2;
 163: // catch_target0
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
 210:
                    var2 = undefined;
                    return var2;
 215:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 247; continue _fun0002 }
 10:
                    var2 = _closure2_slot0;
                    var3 = var2.expires_at;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 242; continue _fun0002 }
 32: // try_start_0
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
 111:
                    return var2;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 173; continue _fun0002 }
 119:
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
 171: // try_end0
                    _fun0002_ip = 242; continue _fun0002;
 173:
                    return var2;
 176: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = var2.status;
                    var2 = 404;
                    if(!(var2 === var3)) { _fun0002_ip = 242; continue _fun0002 }
 193:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {'type': 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null};
                    var2 = var3.bind(var4)(var2);
 242:
                    var2 = undefined;
                    return var2;
 247:
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