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
                    var3 = arguments[1];
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var24 = arg1;
                    var5 = undefined;
                    if(!(var3 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = true;
case 4:
                    if(!(var2 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var12 = {};
                    var12['offerId'] = var5;
                    var12['paymentGatewayOverride'] = var5;
                    var2 = var12;
case 6:
                    var4 = var2;
                    var21 = arguments[3];
                    var11 = arguments[4];
                    var18 = undefined;
                    var17 = undefined;
                    var9 = undefined;
                    var14 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var8 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=79);
case 8:
                    return var5;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = false;
                    return var3;
case 12:
                    var19 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 4;
                    var12 = var12[var6];
                    var20 = var19.bind(var5)(var12);
                    var19 = var20.dispatch;
                    var12 = {};
                    var22 = 'BILLING_USER_OFFER_FETCH_START';
                    var12['type'] = var22;
                    var12 = var19.bind(var20)(var12);
case 14: // try_start_0
                    var19 = var24;
                    var12 = null;
                    if(!(var12 != var19)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var20 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var19 = 5;
                    var19 = var22[var19];
                    var23 = var20.bind(var5)(var19);
                    var22 = var23.track;
                    var19 = _closure1_slot5;
                    var20 = var19.FETCH_USER_OFFER_STARTED;
                    var19 = {};
                    var19['call_location'] = var24;
                    var19 = var22.bind(var23)(var20, var19);
case 15:
                    var14 = var4.offerId;
                    var4 = var4.paymentGatewayOverride;
                    var7 = var4;
                    if(!(var5 === var4)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var19 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var20 = 3;
                    var4 = var4[var20];
                    var19 = var19.bind(var5)(var4);
                    var4 = var19.isAndroid;
                    var4 = var4.bind(var19)();
                    if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var19 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var20];
                    var19 = var19.bind(var5)(var4);
                    var4 = var19.isIOS;
                    var19 = var4.bind(var19)();
                    var4 = null;
                    if(!var19) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var19 = _closure1_slot7;
                    var4 = var19.APPLE;
                    _fun0001_ip = 21; continue _fun0001;
case 19:
                    var19 = _closure1_slot7;
                    var4 = var19.GOOGLE;
case 21:
                    _fun0001_ip = 23; continue _fun0001;
case 17:
                    var4 = var7;
case 23:
                    var10 = var4;
                    if(!(var12 == var4)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var4 = var14;
                    if(!(var12 == var4)) { _fun0001_ip = 24; continue _fun0001 }
case 26:
                    var7 = {};
                    _fun0001_ip = 27; continue _fun0001;
case 24:
                    var4 = {};
                    var4['payment_gateway'] = var10;
                    var10 = var14;
                    var4['offer_id'] = var10;
                    var7 = var4;
case 27:
                    var10 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var4 = 6;
                    var4 = var19[var4];
                    var4 = var10.bind(var5)(var4);
                    var19 = var4.HTTP;
                    var10 = var19.post;
                    var4 = {};
                    var20 = _closure1_slot6;
                    var20 = var20.USER_OFFER;
                    var4['url'] = var20;
                    var4['body'] = var7;
                    var7 = true;
                    var4['rejectWithError'] = var7;
                    var20 = var21;
                    var22 = var12 != var20;
                    var20 = undefined;
                    if(!var22) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var20 = var21.retries;
case 28:
                    var4['retries'] = var20;
                    var4 = var10.bind(var19)(var4);
                    SaveGenerator(address=436);
case 30:
                    return var4;
case 31:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var8 = var4;
                    var10 = var4.body;
                    var10 = var10.user_trial_offer;
                    var18 = var10;
                    var19 = var12 != var10;
                    var10 = null;
                    if(!var19) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var10 = var18;
case 34:
                    var15 = var10;
                    var10 = var8;
                    var10 = var10.body;
                    var10 = var10.user_discount;
                    var17 = var10;
                    var18 = var12 != var10;
                    var10 = null;
                    if(!var18) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var10 = var17;
case 36:
                    var16 = var10;
                    var8 = var8.body;
                    var8 = var8.user_discount_offer;
                    var9 = var8;
                    var10 = var12 != var8;
                    var8 = null;
                    if(!var10) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var8 = var9;
case 38:
                    var13 = var8;
                    var8 = var14;
                    if(!(var12 != var8)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var8 = var13;
                    if(!(var12 != var8)) { _fun0001_ip = 40; continue _fun0001 }
case 42:
                    var8 = var13;
                    var9 = var8.discount_id;
                    var8 = var14;
                    if(!(var9 === var8)) { _fun0001_ip = 43; continue _fun0001 }
case 40:
                    var9 = var15;
                    var9 = var12 == var9;
                    var8 = var9;
                    if(!var9) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var9 = 8;
                    var9 = var19[var9];
                    var17 = var18.bind(var5)(var9);
                    var10 = var17.UNSAFE_isDismissibleContentDismissed;
                    var9 = 9;
                    var9 = var19[var9];
                    var9 = var18.bind(var5)(var9);
                    var9 = var9.DismissibleContent;
                    var9 = var9.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    var8 = var10.bind(var17)(var9);
case 44:
                    if(!var8) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var8 = 10;
                    var8 = var18[var8];
                    var10 = var17.bind(var5)(var8);
                    var9 = var10.removeDismissedContent;
                    var8 = 9;
                    var8 = var18[var8];
                    var8 = var17.bind(var5)(var8);
                    var8 = var8.DismissibleContent;
                    var8 = var8.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    var8 = var9.bind(var10)(var8);
case 46:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var6];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var17 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    var8['type'] = var17;
                    var8['userTrialOffer'] = var15;
                    var15 = var16;
                    var17 = var12 != var15;
                    var15 = null;
                    if(!var17) { _fun0001_ip = 48; continue _fun0001 }
case 49:
                    var18 = _closure1_slot4;
                    var17 = var18.createFromServer;
                    var15 = var17.bind(var18)(var16);
case 48:
                    var8['userDiscount'] = var15;
                    var15 = var13;
                    var15 = var12 != var15;
                    var12 = null;
                    if(!var15) { _fun0001_ip = 50; continue _fun0001 }
case 51:
                    var17 = _closure1_slot4;
                    var16 = var17.createFromServer;
                    var15 = var13;
                    var12 = var16.bind(var17)(var15);
case 50:
                    var8['userDiscountOffer'] = var12;
                    var8 = var9.bind(var10)(var8);
case 52: // try_end0
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
                    var8 = 7;
                    var8 = var10[var8];
                    var10 = var9.bind(var5)(var8);
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
                    return var4;
case 53: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_USER_OFFER_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = false;
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
                    if(var2) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var2 = undefined;
                    var9 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 4;
                    var4 = var4[var5];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'BILLING_USER_OFFER_FETCH_START';
                    var4['type'] = var10;
                    var4 = var7.bind(var8)(var4);
case 56: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var10 = _closure1_slot6;
                    var10 = var10.CHURN_USER_OFFER;
                    var4['url'] = var10;
                    var10 = true;
                    var4['rejectWithError'] = var10;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=122);
case 57:
                    return var4;
case 58:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                    var7 = var4.body;
                    var8 = var7.offer;
                    var9 = var8;
                    var7 = null;
                    var10 = var7 != var8;
                    var8 = null;
                    if(!var10) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                    var8 = var9;
case 61:
                    var6 = var8;
                    var8 = var7 != var8;
                    var7 = null;
                    if(!var8) { _fun0002_ip = 63; continue _fun0002 }
case 64:
                    var9 = _closure1_slot4;
                    var8 = var9.createFromServer;
                    var7 = var8.bind(var9)(var6);
case 63:
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
case 65: // try_end0
                    return var6;
case 59:
                    return var4;
case 66: // catch_target0
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
case 54:
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
                    if(var3) { _fun0003_ip = 67; continue _fun0003 }
case 55:
                    var6 = undefined;
                    var9 = undefined;
                    var5 = undefined;
                    var8 = null;
                    var2 = null;
case 68: // try_start_0
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var3 = var7.bind(var6)(var3);
                    var10 = var3.HTTP;
                    var7 = var10.post;
                    var3 = {};
                    var11 = _closure1_slot6;
                    var11 = var11.CHURN_USER_OFFER;
                    var3['url'] = var11;
                    var11 = true;
                    var3['rejectWithError'] = var11;
                    var3 = var7.bind(var10)(var3);
                    SaveGenerator(address=85);
case 69:
                    return var3;
case 70:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 71; continue _fun0003 }
case 13:
                    var7 = var3.body;
                    var7 = var7.offer;
                    var9 = var7;
                    var10 = var8 != var7;
                    var7 = null;
                    if(!var10) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var7 = var9;
case 72:
                    var5 = var7;
                    if(!(var8 != var7)) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                    var8 = _closure1_slot4;
                    var7 = var8.createFromServer;
                    var7 = var7.bind(var8)(var5);
                    var2 = var7;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 4;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['userDiscountOffer'] = var7;
                    var4 = var5.bind(var6)(var4);
case 74: // try_end0
                    _fun0003_ip = 76; continue _fun0003;
case 71:
                    return var3;
case 77: // catch_target0
                    CatchBlockStart(arg_register=2);
case 76:
                    return var2;
case 67:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot6 = var7;
    var4 = var4.PaymentGateways;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/UserOfferActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchUserOffer() {
        var1 = undefined;
        var4 = _closure1_slot8;
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
        var4 = _closure1_slot9;
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
        var4 = _closure1_slot10;
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
            if(!var6) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var6 = var3.expires_at;
            var6 = var5 == var6;
            var7 = undefined;
            if(!var6) { _fun0004_ip = 78; continue _fun0004 }
case 80:
            var7 = var3.id;
case 78:
            var3 = var5 != var2;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var3 = var2.expiresAt;
            var3 = var5 == var3;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 81; continue _fun0004 }
case 83:
            var6 = var2.id;
case 81:
            if(!(var4 === var7)) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            if(!(var4 === var6)) { _fun0004_ip = 84; continue _fun0004 }
case 86:
            return var4;
case 84:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var5 = _closure1_slot6;
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
                    var7 = arg1;
                    var1 = var7.body;
                    var1 = var1.user_discount;
                    var5 = null;
                    var2 = var5 != var1;
                    var11 = null;
                    if(!var2) { _fun0005_ip = 87; continue _fun0005 }
case 5:
                    var11 = var1;
case 87:
                    var1 = var7.body;
                    var1 = var1.user_discount_offer;
                    var2 = var5 != var1;
                    var8 = null;
                    if(!var2) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                    var8 = var1;
case 88:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var9 = 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS';
                    var2['type'] = var9;
                    var7 = var7.body;
                    var9 = var7.user_trial_offer;
                    var10 = var5 != var9;
                    var7 = null;
                    if(!var10) { _fun0005_ip = 73; continue _fun0005 }
case 90:
                    var7 = var9;
case 73:
                    var2['userTrialOffer'] = var7;
                    var9 = var5 != var11;
                    var7 = null;
                    if(!var9) { _fun0005_ip = 91; continue _fun0005 }
case 60:
                    var10 = _closure1_slot4;
                    var9 = var10.createFromServer;
                    var7 = var9.bind(var10)(var11);
case 91:
                    var2['userDiscount'] = var7;
                    var7 = var5 != var8;
                    var5 = null;
                    if(!var7) { _fun0005_ip = 92; continue _fun0005 }
case 93:
                    var7 = _closure1_slot4;
                    var6 = var7.createFromServer;
                    var5 = var6.bind(var7)(var8);
case 92:
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
                    if(!(var1 === var2)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {'type': 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null, 'userDiscount': null, 'userDiscountOffer': null};
                    var1 = var2.bind(var3)(var1);
case 94:
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