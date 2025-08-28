// app/modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = function _fetchEligibleApplicationSubscriptionGuilds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 113; continue _fun0001 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['application_id'] = var6;
                    var6 = arg2;
                    var5['sku_id'] = var6;
                    var2['query'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=96);
 94:
                    return var2;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 110; continue _fun0001 }
 102:
                    var3 = var2.body;
                    return var3;
 110:
                    return var2;
 113:
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
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 102; continue _fun0002 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var8 = _closure1_slot4;
                    var7 = var8.APPLICATION_SUBSCRIPTION_GROUP_LISTING;
                    var6 = arg1;
                    var5 = arg2;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
 83:
                    return var2;
 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 99; continue _fun0002 }
 91:
                    var3 = var2.body;
                    return var3;
 99:
                    return var2;
 102:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 117; continue _fun0003 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var6 = var7.GUILD_ENTITLEMENTS;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = {'with_sku': true, 'with_application': true};
                    var2['query'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=100);
 98:
                    return var2;
 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 114; continue _fun0003 }
 106:
                    var3 = var2.body;
                    return var3;
 114:
                    return var2;
 117:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 98; continue _fun0004 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var6 = var7.SUBSCRIPTION_PLAN_GROUP_LISTING;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=81);
 79:
                    return var2;
 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 95; continue _fun0004 }
 87:
                    var3 = var2.body;
                    return var3;
 95:
                    return var2;
 98:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getApplicationSubscriptionGroupListingsForApplication'] = var6;
    var3['getEntitlementsForGuild'] = var5;
    var3['getSubscriptionGroupForSubscriptionPlan'] = var4;
    var4 = function fetchApplication(arg1, arg2) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 3;
        var2 = var6[var2];
        var4 = undefined;
        var8 = var3.bind(var4)(var2);
        var3 = var8.dispatch;
        var2 = {};
        var9 = 'APPLICATION_FETCH';
        var2['type'] = var9;
        var2['applicationId'] = var7;
        var2 = var3.bind(var8)(var2);
        var3 = _closure1_slot0;
        var2 = 2;
        var2 = var6[var2];
        var2 = var3.bind(var4)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var6 = _closure1_slot4;
        var5 = var6.APPLICATION_PUBLIC;
        var5 = var5.bind(var6)(var7);
        var2['url'] = var5;
        var5 = arg2;
        var2['signal'] = var5;
        var5 = false;
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
            var2 = {};
            var5 = 'APPLICATION_FETCH_SUCCESS';
            var2['type'] = var5;
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
        var4 = _closure1_slot5;
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