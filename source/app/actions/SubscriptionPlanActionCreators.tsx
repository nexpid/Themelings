// app/actions/SubscriptionPlanActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function fetchSubscriptionPlansForSKU() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var4;
    var1 = function _fetchSubscriptionPlansForSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5, arg6) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5, arg6) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var16 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var16;
                    var13 = arg2;
                    var12 = arg3;
                    var11 = arg4;
                    var9 = arg5;
                    var7 = arg6;
                    var6 = undefined;
                    var3 = undefined;
                    var4 = undefined;
                    var14 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 4;
                    var10 = var10[var8];
                    var15 = var14.bind(var6)(var10);
                    var14 = var15.dispatch;
                    var10 = {};
                    var17 = 'SUBSCRIPTION_PLANS_FETCH';
                    var10['type'] = var17;
                    var10['skuId'] = var16;
                    var10 = var14.bind(var15)(var10);
case 4: // try_start_0
                    var10 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true, 'retries': 10};
                    var16 = _closure1_slot5;
                    var15 = var16.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS;
                    var14 = var5;
                    var14 = var15.bind(var16)(var14);
                    var10['url'] = var14;
                    var3 = var10;
                    var4 = {};
                    var14 = var13;
                    var10 = null;
                    if(!(var10 != var14)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var14 = var4;
                    var14['country_code'] = var13;
case 5:
                    var13 = var12;
                    if(!(var10 != var13)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var13 = var4;
                    var13['payment_source_id'] = var12;
case 7:
                    var12 = var11;
                    if(!(var10 != var12)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var12 = var4;
                    var12['include_unpublished'] = var11;
case 9:
                    var11 = var9;
                    if(!(var10 != var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var11 = var4;
                    var11['revenue_surface'] = var9;
case 11:
                    var9 = var7;
                    if(!(var10 != var9)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var9 = var4;
                    var9['payment_gateway'] = var7;
case 13:
                    var7 = var3;
                    var7['query'] = var4;
                    var4 = _closure1_slot4;
                    var4 = var4.ipCountryCodeLoaded;
                    if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 5;
                    var4 = var9[var4];
                    var7 = var7.bind(var6)(var4);
                    var4 = var7.fetchIpCountryCode;
                    var4 = var4.bind(var7)();
                    SaveGenerator(address=269);
case 17:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(!var7) { _fun0001_ip = 15; continue _fun0001 }
case 19: // try_end0
                    return var4;
case 15: // try_start_1
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var4 = var7.bind(var6)(var4);
                    var7 = var4.HTTP;
                    var4 = var7.get;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=317);
case 20:
                    return var3;
case 21:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var9 = var7.bind(var6)(var4);
                    var7 = var9.dispatch;
                    var4 = {};
                    var10 = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                    var4['type'] = var10;
                    var10 = var5;
                    var4['skuId'] = var10;
                    var10 = var3.body;
                    var4['subscriptionPlans'] = var10;
                    var4 = var7.bind(var9)(var4);
                    var4 = var3.body;
case 24: // try_end1
                    return var4;
case 22:
                    return var3;
case 25: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = var7[var8];
                    var10 = var3.bind(var6)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'SUBSCRIPTION_PLANS_FETCH_FAILURE';
                    var8['type'] = var11;
                    var8['skuId'] = var5;
                    var8 = var9.bind(var10)(var8);
                    var8 = _closure1_slot0;
                    var2 = 7;
                    var2 = var7[var2];
                    var8 = var8.bind(var6)(var2);
                    var2 = var8.captureBillingException;
                    var2 = var2.bind(var8)(var4);
                    var2 = 8;
                    var2 = var7[var2];
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var19 = var3;
                    var18 = var4;
                    var2 = new var19[var2](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'Failed to fetch subscription plans for SKU ';
                    var3 = var4.bind(var3)(var5);
                    var2['message'] = var3;
                    throw var2;
case 2:
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot6 = var8;
    var5 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot7 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/SubscriptionPlanActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['fetchSubscriptionPlansForSKU'] = var4;
    var4 = function fetchSubscriptionPlansBySKUs(arg1, arg2, arg3) {
        var6 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.all;
        var5 = var6.filter;
        var4 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.NONE;
            var1 = arg1;
            var1 = var1 !== var2;
            return var1;
        };
        var5 = var5.bind(var6)(var4);
        var4 = var5.map;
        var1 = function(arg1) {
            var5 = _closure1_slot8;
            var10 = _closure2_slot0;
            var6 = _closure2_slot1;
            var11 = arg1;
            var12 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var1 = var12[var5](var11, var10, var9, var8, var7, var6, var5);
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchSubscriptionPlansBySKUs'] = var4;
    var4 = function fetchPremiumSubscriptionPlans(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.all;
        var6 = _closure1_slot6;
        var5 = var6.filter;
        var4 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.NONE;
            var1 = arg1;
            var1 = var1 !== var2;
            return var1;
        };
        var5 = var5.bind(var6)(var4);
        var4 = var5.map;
        var1 = function(arg1) {
            var7 = _closure1_slot8;
            var12 = _closure2_slot0;
            var11 = _closure2_slot1;
            var9 = _closure2_slot2;
            var8 = _closure2_slot3;
            var13 = arg1;
            var14 = undefined;
            var10 = undefined;
            var1 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchPremiumSubscriptionPlans'] = var4;
    var2 = function resetSubscriptionPlanData() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SUBSCRIPTION_PLANS_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetSubscriptionPlanData'] = var2;
    return var1;
})();