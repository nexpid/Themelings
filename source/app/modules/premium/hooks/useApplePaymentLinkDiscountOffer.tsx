// app/modules/premium/hooks/useApplePaymentLinkDiscountOffer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.APPLE_PAYMENT_LINK_1_MONTH_10_PERCENT_DISCOUNT;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = function maybeGetApplePaymentLinkDiscountFromOffer(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.discount_id;
            var3 = var2.discount;
            var4 = var1 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var1 != var7;
            var2 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = var3.plan_ids;
            var4 = var6.includes;
            var4 = var4.bind(var6)(var7);
            var2 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var4 = _closure1_slot7;
            var2 = null;
            if(!(var5 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var2 = var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/hooks/useApplePaymentLinkDiscountOffer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['maybeGetApplePaymentLinkDiscountFromOffer'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var15 = var3.location;
            var _closure2_slot0 = var15;
            var10 = var3.analyticsLoadId;
            var _closure2_slot1 = var10;
            var14 = var3.shouldUseApplePaymentLinkDiscount;
            var _closure2_slot2 = var14;
            var2 = var3.subscriptionPlanId;
            var _closure2_slot3 = var2;
            var8 = var3.analyticsLocations;
            var _closure2_slot4 = var8;
            var16 = undefined;
            var _closure2_slot10 = var16;
            var _closure2_slot11 = var16;
            var _closure2_slot12 = var16;
            var12 = _closure1_slot5;
            var3 = var12.useRef;
            var6 = false;
            var3 = var3.bind(var12)(var6);
            var _closure2_slot5 = var3;
            var3 = var12.useState;
            var3 = var3.bind(var12)(var6);
            var17 = _closure1_slot4;
            var13 = 2;
            var7 = var17.bind(var16)(var3, var13);
            var3 = 0;
            var4 = var7[var3];
            var11 = 1;
            var7 = var7[var11];
            var _closure2_slot6 = var7;
            var7 = var12.useState;
            var9 = null;
            var7 = var7.bind(var12)(var9);
            var7 = var17.bind(var16)(var7, var13);
            var3 = var7[var3];
            var _closure2_slot7 = var3;
            var7 = var7[var11];
            var _closure2_slot8 = var7;
            var13 = var12.useCallback;
            var11 = _closure1_slot3;
            var7 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = undefined;
                        var6 = undefined;
                        var4 = _closure2_slot6;
                        var5 = true;
                        var4 = var4.bind(var2)(var5);
case 11: // try_start_0
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 6;
                        var4 = var9[var4];
                        var9 = var7.bind(var2)(var4);
                        var7 = var9.fetchApplePaymentLinkOffer;
                        var4 = {};
                        var10 = _closure2_slot0;
                        var4['location'] = var10;
                        var4 = var7.bind(var9)(var4);
                        SaveGenerator(address=76);
case 12:
                        return var4;
case 8:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var6 = var4;
                        var7 = _closure2_slot5;
                        var7['current'] = var5;
                        var10 = null;
                        if(!(var10 != var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var9 = _closure2_slot8;
                        var7 = var6;
                        var7 = var7.userDiscountOffer;
                        var7 = var9.bind(var2)(var7);
case 15:
                        var9 = var6;
                        var9 = var10 != var9;
                        var7 = var9;
                        if(!var9) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var9 = var6;
                        var9 = var9.userDiscountOffer;
                        var7 = var10 != var9;
case 17:
                        if(var7) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 7;
                        var7 = var10[var7];
                        var11 = var9.bind(var2)(var7);
                        var10 = var11.captureApplePaymentLinkSentryError;
                        var7 = global;
                        var9 = var7.Error;
                        var12 = _closure1_slot6;
                        var8 = var12.getId;
                        var12 = var8.bind(var12)();
                        var7 = var7.HermesInternal;
                        var8 = var7.concat;
                        var7 = 'No Apple Payment Link user discount offer found for user: ';
                        var16 = var8.bind(var7)(var12);
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {constructor: {value: var9}});
                        var17 = var8;
                        var7 = new var17[var9](var16, var15);
                        var9 = var7 instanceof Object ? var7 : var8;
                        var8 = _closure2_slot0;
                        var7 = {};
                        var12 = {};
                        var13 = _closure2_slot1;
                        var12['load_id'] = var13;
                        var13 = 'fetch_apple_payment_link_offer';
                        var12['error_type'] = var13;
                        var13 = var6;
                        var12['offer_response'] = var13;
                        var7['extra'] = var12;
                        var7 = var10.bind(var11)(var9, var8, var7);
case 19:
                        var8 = _closure2_slot6;
                        var7 = false;
                        var7 = var8.bind(var2)(var7);
case 21: // try_end0
                        return var6;
case 13:
                        return var4;
case 22: // catch_target0
                        CatchBlockStart(arg_register=8);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 7;
                        var4 = var7[var4];
                        var8 = var6.bind(var2)(var4);
                        var7 = var8.captureApplePaymentLinkSentryError;
                        var6 = _closure2_slot0;
                        var4 = {};
                        var10 = {'load_id': null, 'error_type': 'fetch_apple_payment_link_offer', 'message': 'Unhandled error when fetching Apple Payment Link offer'};
                        var11 = _closure2_slot1;
                        var10['load_id'] = var11;
                        var4['extra'] = var10;
                        var4 = var7.bind(var8)(var9, var6, var4);
                        var4 = _closure2_slot5;
                        var4['current'] = var5;
                        var4 = _closure2_slot6;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
case 9:
                        return var1;
                    }
                };
                return var1;
            };
            var11 = var11.bind(var16)(var7);
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var15;
            var7 = var13.bind(var12)(var11, var7);
            var _closure2_slot9 = var7;
            var13 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var14;
            var11[1] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0004_ip = 23; continue _fun0004 }
case 25:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var13.bind(var12)(var7, var11);
            var11 = var12.useMemo;
            var7 = new Array(2);
            var7[0] = var3;
            var7[1] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = _closure2_slot7;
                var2 = _closure2_slot3;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var11.bind(var12)(var2, var7);
            var7 = var9 != var2;
            var11 = null;
            if(!var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var11 = var2.id;
case 26:
            _closure2_slot10 = var11;
            var7 = var9 != var3;
            var9 = null;
            if(!var7) { _fun0002_ip = 19; continue _fun0002 }
case 28:
            var9 = var3.id;
case 19:
            _closure2_slot11 = var9;
            var7 = _closure1_slot5;
            var5 = var7.useRef;
            var5 = var5.bind(var7)(var6);
            _closure2_slot12 = var5;
            var6 = var7.useEffect;
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var9;
            var5[3] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 24:
                    var4 = _closure2_slot10;
                    var3 = null;
                    var2 = var3 == var4;
case 29:
                    if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 11:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.APPLE_PAYMENT_LINK_DISCOUNT_OFFER_PROMPT_VIEWED;
                    var2 = {};
                    var6 = _closure2_slot10;
                    var2['discount_id'] = var6;
                    var6 = _closure2_slot11;
                    var2['user_discount_offer_id'] = var6;
                    var6 = _closure2_slot1;
                    var2['load_id'] = var6;
                    var6 = _closure2_slot4;
                    var2['location_stack'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot12;
                    var1 = true;
                    var2['current'] = var1;
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['isLoadingUserOffer'] = var4;
            var1['userDiscountOffer'] = var3;
            var1['visibleApplePaymentLinkDiscount'] = var2;
            return var1;
        }
    };
    var3['useApplePaymentLinkDiscountOffer'] = var2;
    return var1;
})();