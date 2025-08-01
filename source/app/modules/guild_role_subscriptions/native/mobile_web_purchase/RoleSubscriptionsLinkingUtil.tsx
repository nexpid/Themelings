// app/modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var7 = function performRoleSubscriptionUpsellRedirect() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var7;
    var1 = function _performRoleSubscriptionUpsellRedirect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 212; continue _fun0001 }
 10:
                    var4 = undefined;
                    var5 = undefined;
                    var8 = _closure1_slot5;
                    var7 = var8.CHANNEL;
                    var3 = _closure1_slot6;
                    var6 = var3.ROLE_SUBSCRIPTIONS;
                    var3 = arg1;
                    var5 = var7.bind(var8)(var3, var6);
 46: // try_start_0
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 4;
                    var6 = var3[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = 3;
                    var6 = var3[var6];
                    var3 = var3.paths;
                    var3 = var7.bind(var4)(var6, var3);
                    SaveGenerator(address=88);
 86:
                    return var3;
 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 139; continue _fun0001 }
 94:
                    var9 = var3.default;
                    var8 = var9.redirectWithHandoffToken;
                    var7 = var5;
                    var5 = {};
                    var6 = true;
                    var5['forceExternalBrowser'] = var6;
                    var5 = var8.bind(var9)(var7, var5);
                    SaveGenerator(address=127);
 125:
                    return var5;
 127:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 136; continue _fun0001 }
 133: // try_end0
                    return var6;
 136:
                    return var5;
 139:
                    return var3;
 142: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var12 = 'RoleSubscriptionsLinkingUtil';
                    var13 = var3;
                    var2 = new var13[var4](var12, var11);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.error;
                    var2 = 'Could not perform handoff';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = false;
                    return var2;
 212:
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
    var1 = function _performRoleSubscriptionTeamCreationRedirect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 47; continue _fun0002 }
 7:
                    var3 = _closure1_slot4;
                    var4 = var3.DEVELOPER_PORTAL_TEAMS;
                    var2 = _closure1_slot11;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=35);
 33:
                    return var2;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 44; continue _fun0002 }
 41:
                    return var3;
 44:
                    return var2;
 47:
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
    var1 = function _performRoleSubscriptionEditPayoutRedirect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 55; continue _fun0003 }
 7:
                    var5 = _closure1_slot4;
                    var4 = var5.DEVELOPER_PORTAL_EDIT_PAYOUTS;
                    var3 = arg1;
                    var4 = var4.bind(var5)(var3);
                    var2 = _closure1_slot11;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=43);
 41:
                    return var2;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 52; continue _fun0003 }
 49:
                    return var3;
 52:
                    return var2;
 55:
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
    var1 = function performDeveloperPortalRedirectWithTokenHandoff() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _performDeveloperPortalRedirectWithTokenHandoff() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 178; continue _fun0004 }
 10:
                    var3 = arg1;
 13: // try_start_0
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 4;
                    var4 = var2[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var4 = 3;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=60);
 58:
                    return var2;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 100; continue _fun0004 }
 66:
                    var5 = var2.default;
                    var4 = var5.redirectDeveloperPortalWithHandoffToken;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=86);
 84:
                    return var3;
 86:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 97; continue _fun0004 }
 92: // try_end0
                    var4 = true;
                    return var4;
 97:
                    return var3;
 100:
                    return var2;
 103: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var8 = 'RoleSubscriptionsLinkingUtil';
                    var9 = var3;
                    var2 = new var9[var4](var8, var7);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.error;
                    var2 = 'Could not perform handoff for the developer portal';
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = false;
                    return var2;
 178:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.RelativeMarketingURLs;
    var _closure1_slot4 = var8;
    var2 = var2.Routes;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.StaticChannelRoute;
    var _closure1_slot6 = var2;
    var2 = {};
    var2['performRoleSubscriptionUpsellRedirect'] = var7;
    var7 = function performRoleSubscriptionTeamCreationRedirect() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['performRoleSubscriptionTeamCreationRedirect'] = var7;
    var7 = function performRoleSubscriptionEditPayoutRedirect() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['performRoleSubscriptionEditPayoutRedirect'] = var7;
    var4 = function maybePerformRoleSubscriptionUpsellRedirect(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = var1.channelId;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 49; continue _fun0005 }
 19:
            var2 = _closure1_slot6;
            var2 = var2.ROLE_SUBSCRIPTIONS;
            if(!(var4 === var2)) { _fun0005_ip = 49; continue _fun0005 }
 36:
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0005_ip = 70; continue _fun0005;
 49:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = false;
            var1 = var3.bind(var4)(var2);
 70:
            return var1;
        }
    };
    var2['maybePerformRoleSubscriptionUpsellRedirect'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();