// app/actions/SubscriptionPlanActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var15 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 508; continue _fun0001 }
 13:
                    var5 = var15;
                    var12 = arg2;
                    var11 = arg3;
                    var9 = arg4;
                    var7 = arg5;
                    var6 = undefined;
                    var3 = undefined;
                    var4 = undefined;
                    var13 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 4;
                    var10 = var10[var8];
                    var14 = var13.bind(var6)(var10);
                    var13 = var14.dispatch;
                    var10 = {};
                    var16 = 'SUBSCRIPTION_PLANS_FETCH';
                    var10['type'] = var16;
                    var10['skuId'] = var15;
                    var10 = var13.bind(var14)(var10);
 84: // try_start_0
                    var10 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true, 'retries': 10};
                    var15 = _closure1_slot5;
                    var14 = var15.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS;
                    var13 = var5;
                    var13 = var14.bind(var15)(var13);
                    var10['url'] = var13;
                    var3 = var10;
                    var4 = {};
                    var13 = var12;
                    var10 = null;
                    if(!(var10 != var13)) { _fun0001_ip = 145; continue _fun0001 }
 136:
                    var13 = var4;
                    var13['country_code'] = var12;
 145:
                    var12 = var11;
                    if(!(var10 != var12)) { _fun0001_ip = 161; continue _fun0001 }
 152:
                    var12 = var4;
                    var12['payment_source_id'] = var11;
 161:
                    var11 = var9;
                    if(!(var10 != var11)) { _fun0001_ip = 177; continue _fun0001 }
 168:
                    var11 = var4;
                    var11['include_unpublished'] = var9;
 177:
                    var9 = var7;
                    if(!(var10 != var9)) { _fun0001_ip = 195; continue _fun0001 }
 184:
                    var9 = var4;
                    var9['revenue_surface'] = var7;
 195:
                    var7 = var3;
                    var7['query'] = var4;
                    var4 = _closure1_slot4;
                    var4 = var4.ipCountryCodeLoaded;
                    if(var4) { _fun0001_ip = 260; continue _fun0001 }
 217:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 5;
                    var4 = var9[var4];
                    var7 = var7.bind(var6)(var4);
                    var4 = var7.fetchIpCountryCode;
                    var4 = var4.bind(var7)();
                    SaveGenerator(address=251);
 249:
                    return var4;
 251:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(!var7) { _fun0001_ip = 260; continue _fun0001 }
 257: // try_end0
                    return var4;
 260: // try_start_1
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var4 = var7.bind(var6)(var4);
                    var7 = var4.HTTP;
                    var4 = var7.get;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=299);
 297:
                    return var3;
 299:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 365; continue _fun0001 }
 305:
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
 362: // try_end1
                    return var6;
 365:
                    return var3;
 368: // catch_target0 // catch_target1
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
                    var18 = var3;
                    var17 = var4;
                    var2 = new var18[var2](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'Failed to fetch subscription plans for SKU ';
                    var3 = var4.bind(var3)(var5);
                    var2['message'] = var3;
                    throw var2;
 508:
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
    var4 = function fetchSubscriptionPlansBySKUs(arg1, arg2) {
        var6 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
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
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchSubscriptionPlansBySKUs'] = var4;
    var4 = function fetchPremiumSubscriptionPlans(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
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
            var6 = _closure1_slot8;
            var10 = _closure2_slot0;
            var9 = _closure2_slot1;
            var7 = _closure2_slot2;
            var11 = arg1;
            var12 = undefined;
            var8 = undefined;
            var1 = var12[var6](var11, var10, var9, var8, var7, var6);
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