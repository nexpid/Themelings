// app/modules/premium/UserOfferActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchUserOffer() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 688; continue _fun0001 }
 13:
                    var18 = arg1;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 24; continue _fun0001 }
 22:
                    var4 = true;
 24:
                    var15 = undefined;
                    var14 = undefined;
                    var11 = undefined;
                    var19 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    SaveGenerator(address=44);
 42:
                    return var3;
 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 685; continue _fun0001 }
 53:
                    if(!var4) { _fun0001_ip = 682; continue _fun0001 }
 59:
                    var12 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 3;
                    var5 = var5[var6];
                    var13 = var12.bind(var3)(var5);
                    var12 = var13.dispatch;
                    var5 = {};
                    var16 = 'BILLING_USER_OFFER_FETCH_START';
                    var5['type'] = var16;
                    var5 = var12.bind(var13)(var5);
 104: // try_start_0
                    var5 = var18;
                    var12 = null;
                    if(!(var12 != var5)) { _fun0001_ip = 163; continue _fun0001 }
 113:
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var5 = 4;
                    var5 = var16[var5];
                    var17 = var13.bind(var3)(var5);
                    var16 = var17.track;
                    var5 = _closure1_slot4;
                    var13 = var5.FETCH_USER_OFFER_STARTED;
                    var5 = {};
                    var5['call_location'] = var18;
                    var5 = var16.bind(var17)(var13, var5);
 163:
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var16 = 2;
                    var5 = var5[var16];
                    var13 = var13.bind(var3)(var5);
                    var5 = var13.isAndroid;
                    var5 = var5.bind(var13)();
                    if(var5) { _fun0001_ip = 239; continue _fun0001 }
 195:
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var16];
                    var13 = var13.bind(var3)(var5);
                    var5 = var13.isIOS;
                    var5 = var5.bind(var13)();
                    var17 = null;
                    if(!var5) { _fun0001_ip = 249; continue _fun0001 }
 227:
                    var5 = _closure1_slot6;
                    var17 = var5.APPLE;
                    _fun0001_ip = 249; continue _fun0001;
 239:
                    var5 = _closure1_slot6;
                    var17 = var5.GOOGLE;
 249:
                    var19 = var17;
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 5;
                    var5 = var16[var5];
                    var5 = var13.bind(var3)(var5);
                    var16 = var5.HTTP;
                    var13 = var16.post;
                    var5 = {};
                    var18 = _closure1_slot5;
                    var18 = var18.USER_OFFER;
                    var5['url'] = var18;
                    if(!(var12 == var17)) { _fun0001_ip = 307; continue _fun0001 }
 303:
                    var17 = {};
                    _fun0001_ip = 317; continue _fun0001;
 307:
                    var18 = {};
                    var18['payment_gateway'] = var19;
                    var17 = var18;
 317:
                    var5['body'] = var17;
                    var17 = true;
                    var5['rejectWithError'] = var17;
                    var5 = var13.bind(var16)(var5);
                    SaveGenerator(address=336);
 334:
                    return var5;
 336:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 638; continue _fun0001 }
 345:
                    var7 = var5;
                    var13 = var5.body;
                    var13 = var13.user_trial_offer;
                    var15 = var13;
                    var16 = var12 != var13;
                    var13 = null;
                    if(!var16) { _fun0001_ip = 374; continue _fun0001 }
 371:
                    var13 = var15;
 374:
                    var10 = var13;
                    var13 = var7;
                    var13 = var13.body;
                    var13 = var13.user_discount;
                    var14 = var13;
                    var15 = var12 != var13;
                    var13 = null;
                    if(!var15) { _fun0001_ip = 406; continue _fun0001 }
 403:
                    var13 = var14;
 406:
                    var9 = var13;
                    var7 = var7.body;
                    var7 = var7.user_discount_offer;
                    var11 = var7;
                    var13 = var12 != var7;
                    var7 = null;
                    if(!var13) { _fun0001_ip = 435; continue _fun0001 }
 432:
                    var7 = var11;
 435:
                    var8 = var7;
                    var11 = var10;
                    var11 = var12 == var11;
                    var7 = var11;
                    if(!var11) { _fun0001_ip = 506; continue _fun0001 }
 451:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 6;
                    var11 = var15[var11];
                    var13 = var14.bind(var3)(var11);
                    var12 = var13.UNSAFE_isDismissibleContentDismissed;
                    var11 = 7;
                    var11 = var15[var11];
                    var11 = var14.bind(var3)(var11);
                    var11 = var11.DismissibleContent;
                    var11 = var11.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    var7 = var12.bind(var13)(var11);
 506:
                    if(!var7) { _fun0001_ip = 564; continue _fun0001 }
 509:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 8;
                    var7 = var14[var7];
                    var12 = var13.bind(var3)(var7);
                    var11 = var12.removeDismissedContent;
                    var7 = 7;
                    var7 = var14[var7];
                    var7 = var13.bind(var3)(var7);
                    var7 = var7.DismissibleContent;
                    var7 = var7.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    var7 = var11.bind(var12)(var7);
 564:
                    var11 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var12 = var11.bind(var3)(var7);
                    var11 = var12.dispatch;
                    var7 = {};
                    var13 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    var7['type'] = var13;
                    var7['userTrialOffer'] = var10;
                    var7['userDiscount'] = var9;
                    var7['userDiscountOffer'] = var8;
                    var7 = var11.bind(var12)(var7);
                    var7 = {};
                    var7['userTrialOffer'] = var10;
                    var7['userDiscount'] = var9;
                    var7['userDiscountOffer'] = var8;
 635: // try_end0
                    return var7;
 638:
                    return var5;
 641: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_USER_OFFER_FETCH_FAIL';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
 682:
                    return var3;
 685:
                    return var2;
 688:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot5 = var7;
    var4 = var4.PaymentGateways;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/UserOfferActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchUserOffer() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchUserOffer'] = var4;
    var2 = function acknowledgeUserOffer(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var5 = null;
            var6 = var5 != var3;
            var4 = undefined;
            var7 = undefined;
            if(!var6) { _fun0002_ip = 41; continue _fun0002 }
 21:
            var6 = var3.expires_at;
            var6 = var5 == var6;
            var7 = undefined;
            if(!var6) { _fun0002_ip = 41; continue _fun0002 }
 36:
            var7 = var3.id;
 41:
            var3 = var5 != var2;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 70; continue _fun0002 }
 50:
            var3 = var2.expires_at;
            var3 = var5 == var3;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 70; continue _fun0002 }
 65:
            var6 = var2.id;
 70:
            if(!(var4 === var7)) { _fun0002_ip = 80; continue _fun0002 }
 74:
            if(!(var4 === var6)) { _fun0002_ip = 80; continue _fun0002 }
 78:
            return var4;
 80:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.USER_OFFER_ACKNOWLEDGED;
            var2['url'] = var5;
            var5 = {};
            var5['user_trial_offer_id'] = var7;
            var5['user_discount_offer_id'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS';
                    var2['type'] = var5;
                    var5 = var6.body;
                    var8 = var5.user_trial_offer;
                    var5 = null;
                    var9 = var5 != var8;
                    var7 = null;
                    if(!var9) { _fun0003_ip = 70; continue _fun0003 }
 67:
                    var7 = var8;
 70:
                    var2['userTrialOffer'] = var7;
                    var7 = var6.body;
                    var8 = var7.user_discount;
                    var9 = var5 != var8;
                    var7 = null;
                    if(!var9) { _fun0003_ip = 98; continue _fun0003 }
 95:
                    var7 = var8;
 98:
                    var2['userDiscount'] = var7;
                    var6 = var6.body;
                    var6 = var6.user_discount_offer;
                    var7 = var5 != var6;
                    var5 = null;
                    if(!var7) { _fun0003_ip = 126; continue _fun0003 }
 123:
                    var5 = var6;
 126:
                    var2['userDiscountOffer'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.status;
                    var1 = 404;
                    if(!(var1 === var2)) { _fun0004_ip = 67; continue _fun0004 }
 18:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {'type': 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null, 'userDiscount': null, 'userDiscountOffer': null};
                    var1 = var2.bind(var3)(var1);
 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['acknowledgeUserOffer'] = var2;
    return var1;
})();