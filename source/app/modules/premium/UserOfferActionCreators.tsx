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
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 924; continue _fun0001 }
 16:
                    var24 = arg1;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 27; continue _fun0001 }
 25:
                    var4 = true;
 27:
                    if(!(var2 === var3)) { _fun0001_ip = 46; continue _fun0001 }
 31:
                    var12 = {};
                    var12['offerId'] = var3;
                    var12['paymentGatewayOverride'] = var3;
                    var2 = var12;
 46:
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
 77:
                    return var3;
 79:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 921; continue _fun0001 }
 88:
                    if(!var4) { _fun0001_ip = 918; continue _fun0001 }
 94:
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
 139: // try_start_0
                    var19 = var24;
                    var12 = null;
                    if(!(var12 != var19)) { _fun0001_ip = 198; continue _fun0001 }
 148:
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
 198:
                    var14 = var5.offerId;
                    var5 = var5.paymentGatewayOverride;
                    var18 = var5;
                    if(!(var3 === var5)) { _fun0001_ip = 305; continue _fun0001 }
 217:
                    var19 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var21 = 2;
                    var5 = var5[var21];
                    var19 = var19.bind(var3)(var5);
                    var5 = var19.isAndroid;
                    var5 = var5.bind(var19)();
                    if(var5) { _fun0001_ip = 293; continue _fun0001 }
 249:
                    var19 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var21];
                    var19 = var19.bind(var3)(var5);
                    var5 = var19.isIOS;
                    var19 = var5.bind(var19)();
                    var5 = null;
                    if(!var19) { _fun0001_ip = 303; continue _fun0001 }
 281:
                    var19 = _closure1_slot6;
                    var5 = var19.APPLE;
                    _fun0001_ip = 303; continue _fun0001;
 293:
                    var19 = _closure1_slot6;
                    var5 = var19.GOOGLE;
 303:
                    _fun0001_ip = 308; continue _fun0001;
 305:
                    var5 = var18;
 308:
                    var15 = var5;
                    if(!(var12 == var5)) { _fun0001_ip = 326; continue _fun0001 }
 315:
                    var5 = var14;
                    if(!(var12 == var5)) { _fun0001_ip = 326; continue _fun0001 }
 322:
                    var19 = {};
                    _fun0001_ip = 344; continue _fun0001;
 326:
                    var5 = {};
                    var5['payment_gateway'] = var15;
                    var15 = var14;
                    var5['offer_id'] = var15;
                    var19 = var5;
 344:
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
                    if(!var21) { _fun0001_ip = 419; continue _fun0001 }
 413:
                    var19 = var20.retries;
 419:
                    var5['retries'] = var19;
                    var5 = var15.bind(var18)(var5);
                    SaveGenerator(address=433);
 431:
                    return var5;
 433:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=14);
                    if(var15) { _fun0001_ip = 874; continue _fun0001 }
 442:
                    var7 = var5;
                    var15 = var5.body;
                    var15 = var15.user_trial_offer;
                    var17 = var15;
                    var18 = var12 != var15;
                    var15 = null;
                    if(!var18) { _fun0001_ip = 471; continue _fun0001 }
 468:
                    var15 = var17;
 471:
                    var9 = var15;
                    var15 = var7;
                    var15 = var15.body;
                    var15 = var15.user_discount;
                    var16 = var15;
                    var17 = var12 != var15;
                    var15 = null;
                    if(!var17) { _fun0001_ip = 503; continue _fun0001 }
 500:
                    var15 = var16;
 503:
                    var8 = var15;
                    var7 = var7.body;
                    var7 = var7.user_discount_offer;
                    var10 = var7;
                    var15 = var12 != var7;
                    var7 = null;
                    if(!var15) { _fun0001_ip = 532; continue _fun0001 }
 529:
                    var7 = var10;
 532:
                    var13 = var7;
                    var7 = var14;
                    if(!(var12 != var7)) { _fun0001_ip = 568; continue _fun0001 }
 542:
                    var7 = var13;
                    if(!(var12 != var7)) { _fun0001_ip = 568; continue _fun0001 }
 549:
                    var7 = var13;
                    var10 = var7.discount_id;
                    var7 = var14;
                    if(!(var10 === var7)) { _fun0001_ip = 777; continue _fun0001 }
 568:
                    var10 = var9;
                    var10 = var12 == var10;
                    var7 = var10;
                    if(!var10) { _fun0001_ip = 636; continue _fun0001 }
 581:
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
 636:
                    if(!var7) { _fun0001_ip = 694; continue _fun0001 }
 639:
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
 694:
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
 774: // try_end0
                    return var7;
 777: // try_start_1
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
 874: // try_end1
                    return var5;
 877: // catch_target0 // catch_target1
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
 918:
                    return var3;
 921:
                    return var2;
 924:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 253; continue _fun0002 }
 10:
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
 59: // try_start_0
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
 118:
                    return var4;
 120:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 206; continue _fun0002 }
 126:
                    var7 = var4.body;
                    var8 = var7.offer;
                    var6 = var8;
                    var7 = null;
                    var8 = var7 != var8;
                    if(!var8) { _fun0002_ip = 152; continue _fun0002 }
 149:
                    var7 = var6;
 152:
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
 203: // try_end0
                    return var6;
 206:
                    return var4;
 209: // catch_target0
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
 253:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 182; continue _fun0003 }
 10:
                    var6 = undefined;
                    var8 = undefined;
                    var7 = null;
                    var2 = null;
 18: // try_start_0
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
 81:
                    return var3;
 83:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 174; continue _fun0003 }
 89:
                    var5 = var3.body;
                    var5 = var5.offer;
                    var8 = var5;
                    var9 = var7 != var5;
                    var5 = null;
                    if(!var9) { _fun0003_ip = 115; continue _fun0003 }
 112:
                    var5 = var8;
 115:
                    var2 = var5;
                    if(!(var7 != var5)) { _fun0003_ip = 172; continue _fun0003 }
 122:
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
 172: // try_end0
                    _fun0003_ip = 179; continue _fun0003;
 174:
                    return var3;
 177: // catch_target0
                    CatchBlockStart(arg_register=2);
 179:
                    return var2;
 182:
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
 0:
            var3 = arg1;
            var2 = arg2;
            var5 = null;
            var6 = var5 != var3;
            var4 = undefined;
            var7 = undefined;
            if(!var6) { _fun0004_ip = 41; continue _fun0004 }
 21:
            var6 = var3.expires_at;
            var6 = var5 == var6;
            var7 = undefined;
            if(!var6) { _fun0004_ip = 41; continue _fun0004 }
 36:
            var7 = var3.id;
 41:
            var3 = var5 != var2;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 70; continue _fun0004 }
 50:
            var3 = var2.expires_at;
            var3 = var5 == var3;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 70; continue _fun0004 }
 65:
            var6 = var2.id;
 70:
            if(!(var4 === var7)) { _fun0004_ip = 80; continue _fun0004 }
 74:
            if(!(var4 === var6)) { _fun0004_ip = 80; continue _fun0004 }
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(!var9) { _fun0005_ip = 70; continue _fun0005 }
 67:
                    var7 = var8;
 70:
                    var2['userTrialOffer'] = var7;
                    var7 = var6.body;
                    var8 = var7.user_discount;
                    var9 = var5 != var8;
                    var7 = null;
                    if(!var9) { _fun0005_ip = 98; continue _fun0005 }
 95:
                    var7 = var8;
 98:
                    var2['userDiscount'] = var7;
                    var6 = var6.body;
                    var6 = var6.user_discount_offer;
                    var7 = var5 != var6;
                    var5 = null;
                    if(!var7) { _fun0005_ip = 126; continue _fun0005 }
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.status;
                    var1 = 404;
                    if(!(var1 === var2)) { _fun0006_ip = 67; continue _fun0006 }
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