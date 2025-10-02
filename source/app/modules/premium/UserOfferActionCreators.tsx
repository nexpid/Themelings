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
case 0:
                    StartGenerator();
                    var4 = arguments[1];
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var24 = arg1;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = true;
case 4:
                    if(!(var2 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var12 = {};
                    var12['offerId'] = var3;
                    var12['paymentGatewayOverride'] = var3;
                    var2 = var12;
case 6:
                    var5 = var2;
                    var20 = arguments[3];
                    var11 = arguments[4];
                    var17 = undefined;
                    var16 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    var18 = undefined;
                    var15 = undefined;
                    var7 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=79);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var19 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 3;
                    var12 = var12[var6];
                    var21 = var19.bind(var3)(var12);
                    var19 = var21.dispatch;
                    var12 = {};
                    var22 = 'BILLING_USER_OFFER_FETCH_START';
                    var12['type'] = var22;
                    var12 = var19.bind(var21)(var12);
case 14: // try_start_0
                    var19 = var24;
                    var12 = null;
                    if(!(var12 != var19)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var21 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var19 = 4;
                    var19 = var22[var19];
                    var23 = var21.bind(var3)(var19);
                    var22 = var23.track;
                    var19 = _closure1_slot4;
                    var21 = var19.FETCH_USER_OFFER_STARTED;
                    var19 = {};
                    var19['call_location'] = var24;
                    var19 = var22.bind(var23)(var21, var19);
case 15:
                    var14 = var5.offerId;
                    var5 = var5.paymentGatewayOverride;
                    var18 = var5;
                    if(!(var3 === var5)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var19 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var21 = 2;
                    var5 = var5[var21];
                    var19 = var19.bind(var3)(var5);
                    var5 = var19.isAndroid;
                    var5 = var5.bind(var19)();
                    if(var5) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var19 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var21];
                    var19 = var19.bind(var3)(var5);
                    var5 = var19.isIOS;
                    var19 = var5.bind(var19)();
                    var5 = null;
                    if(!var19) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var19 = _closure1_slot6;
                    var5 = var19.APPLE;
                    _fun0001_ip = 21; continue _fun0001;
case 19:
                    var19 = _closure1_slot6;
                    var5 = var19.GOOGLE;
case 21:
                    _fun0001_ip = 23; continue _fun0001;
case 17:
                    var5 = var18;
case 23:
                    var15 = var5;
                    if(!(var12 == var5)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var5 = var14;
                    if(!(var12 == var5)) { _fun0001_ip = 24; continue _fun0001 }
case 26:
                    var19 = {};
                    _fun0001_ip = 27; continue _fun0001;
case 24:
                    var5 = {};
                    var5['payment_gateway'] = var15;
                    var15 = var14;
                    var5['offer_id'] = var15;
                    var19 = var5;
case 27:
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var5 = 5;
                    var5 = var18[var5];
                    var5 = var15.bind(var3)(var5);
                    var18 = var5.HTTP;
                    var15 = var18.post;
                    var5 = {};
                    var21 = _closure1_slot5;
                    var21 = var21.USER_OFFER;
                    var5['url'] = var21;
                    var5['body'] = var19;
                    var19 = true;
                    var5['rejectWithError'] = var19;
                    var19 = var20;
                    var21 = var12 != var19;
                    var19 = undefined;
                    if(!var21) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var19 = var20.retries;
case 28:
                    var5['retries'] = var19;
                    var5 = var15.bind(var18)(var5);
                    SaveGenerator(address=433);
case 30:
                    return var5;
case 31:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=14);
                    if(var15) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var7 = var5;
                    var15 = var5.body;
                    var15 = var15.user_trial_offer;
                    var17 = var15;
                    var18 = var12 != var15;
                    var15 = null;
                    if(!var18) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var15 = var17;
case 34:
                    var9 = var15;
                    var15 = var7;
                    var15 = var15.body;
                    var15 = var15.user_discount;
                    var16 = var15;
                    var17 = var12 != var15;
                    var15 = null;
                    if(!var17) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var15 = var16;
case 36:
                    var8 = var15;
                    var7 = var7.body;
                    var7 = var7.user_discount_offer;
                    var10 = var7;
                    var15 = var12 != var7;
                    var7 = null;
                    if(!var15) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var7 = var10;
case 38:
                    var13 = var7;
                    var7 = var14;
                    if(!(var12 != var7)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var7 = var13;
                    if(!(var12 != var7)) { _fun0001_ip = 40; continue _fun0001 }
case 42:
                    var7 = var13;
                    var10 = var7.discount_id;
                    var7 = var14;
                    if(!(var10 === var7)) { _fun0001_ip = 43; continue _fun0001 }
case 40:
                    var10 = var9;
                    var10 = var12 == var10;
                    var7 = var10;
                    if(!var10) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var10 = 7;
                    var10 = var17[var10];
                    var15 = var16.bind(var3)(var10);
                    var12 = var15.UNSAFE_isDismissibleContentDismissed;
                    var10 = 8;
                    var10 = var17[var10];
                    var10 = var16.bind(var3)(var10);
                    var10 = var10.DismissibleContent;
                    var10 = var10.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    var7 = var12.bind(var15)(var10);
case 44:
                    if(!var7) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 9;
                    var7 = var16[var7];
                    var12 = var15.bind(var3)(var7);
                    var10 = var12.removeDismissedContent;
                    var7 = 8;
                    var7 = var16[var7];
                    var7 = var15.bind(var3)(var7);
                    var7 = var7.DismissibleContent;
                    var7 = var7.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    var7 = var10.bind(var12)(var7);
case 46:
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var15 = var10.bind(var3)(var7);
                    var12 = var15.dispatch;
                    var7 = {};
                    var10 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var10 = var9;
                    var7['userTrialOffer'] = var10;
                    var9 = var8;
                    var7['userDiscount'] = var9;
                    var8 = var13;
                    var7['userDiscountOffer'] = var8;
                    var7 = var12.bind(var15)(var7);
                    var7 = {};
                    var7['userTrialOffer'] = var10;
                    var7['userDiscount'] = var9;
                    var7['userDiscountOffer'] = var8;
case 48: // try_end0
                    return var7;
case 43: // try_start_1
                    var7 = global;
                    var9 = var7.Error;
                    var7 = var9.prototype;
                    var8 = Object.create(var7, {constructor: {value: var9}});
                    var26 = 'Returned user discount offer does not match offer ID request parameter';
                    var27 = var8;
                    var7 = new var27[var9](var26, var25);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 6;
                    var8 = var10[var8];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.captureException;
                    var8 = {};
                    var12 = {};
                    var12['offer_id'] = var14;
                    var12['user_discount_offer'] = var13;
                    var8['extra'] = var12;
                    var25 = var11;
                    var26 = var8;
                    var11 = copyDataProperties(var26, var25);
                    var8 = var9.bind(var10)(var7, var8);
                    throw var7;
case 32: // try_end1
                    return var5;
case 49: // catch_target0 // catch_target1
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
case 12:
                    return var3;
case 10:
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
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _fetchExistingChurnDiscountOffer() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var2 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 3;
                    var4 = var4[var5];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'BILLING_USER_OFFER_FETCH_START';
                    var4['type'] = var9;
                    var4 = var7.bind(var8)(var4);
case 52: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var9 = _closure1_slot5;
                    var9 = var9.CHURN_USER_OFFER;
                    var4['url'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=120);
case 53:
                    return var4;
case 54:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var7 = var4.body;
                    var8 = var7.offer;
                    var6 = var8;
                    var7 = null;
                    var8 = var7 != var8;
                    if(!var8) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                    var7 = var6;
case 57:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var10 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var6['userDiscountOffer'] = var7;
                    var6 = var8.bind(var9)(var6);
                    var6 = {};
                    var6['userDiscountOffer'] = var7;
case 59: // try_end0
                    return var6;
case 55:
                    return var4;
case 60: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_USER_OFFER_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 50:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchChurnDiscountOffer() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 61; continue _fun0003 }
case 51:
                    var6 = undefined;
                    var8 = undefined;
                    var7 = null;
                    var2 = null;
case 62: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var3 = var5.bind(var6)(var3);
                    var9 = var3.HTTP;
                    var5 = var9.post;
                    var3 = {};
                    var10 = _closure1_slot5;
                    var10 = var10.CHURN_USER_OFFER;
                    var3['url'] = var10;
                    var10 = true;
                    var3['rejectWithError'] = var10;
                    var3 = var5.bind(var9)(var3);
                    SaveGenerator(address=83);
case 63:
                    return var3;
case 64:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                    var5 = var3.body;
                    var5 = var5.offer;
                    var8 = var5;
                    var9 = var7 != var5;
                    var5 = null;
                    if(!var9) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var5 = var8;
case 67:
                    var2 = var5;
                    if(!(var7 != var5)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var7 = var2;
                    var4['userDiscountOffer'] = var7;
                    var4 = var5.bind(var6)(var4);
case 69: // try_end0
                    _fun0003_ip = 71; continue _fun0003;
case 65:
                    return var3;
case 72: // catch_target0
                    CatchBlockStart(arg_register=2);
case 71:
                    return var2;
case 61:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = 10;
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
    var4 = function fetchExistingChurnDiscountOffer() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchExistingChurnDiscountOffer'] = var4;
    var4 = function fetchChurnDiscountOffer() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchChurnDiscountOffer'] = var4;
    var2 = function acknowledgeUserOffer(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = null;
            var6 = var5 != var3;
            var4 = undefined;
            var7 = undefined;
            if(!var6) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var6 = var3.expires_at;
            var6 = var5 == var6;
            var7 = undefined;
            if(!var6) { _fun0004_ip = 73; continue _fun0004 }
case 75:
            var7 = var3.id;
case 73:
            var3 = var5 != var2;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var3 = var2.expires_at;
            var3 = var5 == var3;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 76; continue _fun0004 }
case 78:
            var6 = var2.id;
case 76:
            if(!(var4 === var7)) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            if(!(var4 === var6)) { _fun0004_ip = 79; continue _fun0004 }
case 81:
            return var4;
case 79:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                    if(!var9) { _fun0005_ip = 76; continue _fun0005 }
case 82:
                    var7 = var8;
case 76:
                    var2['userTrialOffer'] = var7;
                    var7 = var6.body;
                    var8 = var7.user_discount;
                    var9 = var5 != var8;
                    var7 = null;
                    if(!var9) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var7 = var8;
case 83:
                    var2['userDiscount'] = var7;
                    var6 = var6.body;
                    var6 = var6.user_discount_offer;
                    var7 = var5 != var6;
                    var5 = null;
                    if(!var7) { _fun0005_ip = 56; continue _fun0005 }
case 85:
                    var5 = var6;
case 56:
                    var2['userDiscountOffer'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.status;
                    var1 = 404;
                    if(!(var1 === var2)) { _fun0006_ip = 82; continue _fun0006 }
case 62:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {'type': 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null, 'userDiscount': null, 'userDiscountOffer': null};
                    var1 = var2.bind(var3)(var1);
case 82:
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