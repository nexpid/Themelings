// app/modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getApplicationSubscriptionGroupListingsForApplication() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var12 = _closure1_slot4;
                    var11 = var12.APPLICATION_SUBSCRIPTION_GROUP_LISTING;
                    var10 = arg1;
                    var9 = arg2;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=102);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _getEntitlementsForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.GUILD_ENTITLEMENTS;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var9 = {'with_sku': true, 'with_application': true};
                    var2['query'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=120);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = var2.body;
                    return var3;
case 12:
                    return var2;
case 8:
                    return var1;
                }
            };
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
    var1 = function _getSubscriptionGroupForSubscriptionPlan() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.SUBSCRIPTION_PLAN_GROUP_LISTING;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=98);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = var2.body;
                    return var3;
case 17:
                    return var2;
case 14:
                    return var1;
                }
            };
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
    var1 = function _fetchEligibleApplicationSubscriptionGuilds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 9:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['application_id'] = var10;
                    var10 = arg2;
                    var9['sku_id'] = var10;
                    var2['query'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=116);
case 20:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var3 = var2.body;
                    return var3;
case 21:
                    return var2;
case 19:
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
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getApplicationSubscriptionGroupListingsForApplication() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getApplicationSubscriptionGroupListingsForApplication'] = var4;
    var4 = function getEntitlementsForGuild() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getEntitlementsForGuild'] = var4;
    var4 = function getSubscriptionGroupForSubscriptionPlan() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getSubscriptionGroupForSubscriptionPlan'] = var4;
    var4 = function fetchApplication(arg1, arg2) {
        var11 = arg1;
        var _closure2_slot0 = var11;
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 3;
        var2 = var8[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_FETCH';
        var2['type'] = var5;
        var2['applicationId'] = var11;
        var2 = var3.bind(var4)(var2);
        var6 = _closure1_slot0;
        var5 = 2;
        var2 = var8[var5];
        var2 = var6.bind(var7)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var10 = _closure1_slot4;
        var9 = var10.APPLICATION_PUBLIC;
        var9 = var9.bind(var10)(var11);
        var2['url'] = var9;
        var9 = arg2;
        var2['signal'] = var9;
        var5 = var8[var5];
        var6 = var6.bind(var7)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {'type': 'APPLICATION_FETCH_SUCCESS', 'application': null, 'isHydrated': true};
            var5 = var1.body;
            var2['application'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var1.body;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function(arg1) {
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'APPLICATION_FETCH_FAIL';
            var1['type'] = var7;
            var7 = _closure2_slot0;
            var1['applicationId'] = var7;
            var1 = var2.bind(var3)(var1);
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var1 = 4;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var8 = arg1;
            var9 = var4;
            var1 = new var9[var5](var8, var7);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchApplication'] = var4;
    var2 = function fetchEligibleApplicationSubscriptionGuilds() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchEligibleApplicationSubscriptionGuilds'] = var2;
    return var1;
})();