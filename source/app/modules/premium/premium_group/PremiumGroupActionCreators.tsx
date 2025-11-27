// app/modules/premium/premium_group/PremiumGroupActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _fetchPremiumGroupMembership() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot5;
                    var5 = var5.PREMIUM_GROUP_MEMBERSHIP;
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=73);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
case 8: // try_end0
                    return var3;
case 6:
                    return var2;
case 9: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
case 2:
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
    var1 = function _fetchEligibleUsers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var6 = var8.BILLING_SUBSCRIPTION_ELIGIBLE_USERS;
                    var5 = arg1;
                    var5 = var6.bind(var8)(var5);
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg2;
                    var5['index'] = var6;
                    var6 = null;
                    var8 = var6 != var7;
                    var6 = 10;
                    if(!var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = var7;
case 12:
                    var5['limit'] = var6;
                    var6 = arg3;
                    var5['search_query'] = var6;
                    var2['query'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=128);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = var2.body;
                    var7 = var3.users;
                    var4 = var3.next_index;
                    var3 = {};
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot3;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {constructor: {value: var3}});
                        var4 = arg1;
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var3['users'] = var5;
                    var3['nextIndex'] = var4;
                    return var3;
case 16:
                    return var2;
case 10:
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
    var1 = function _inviteUsersToSubscriptionGroup() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var5 = arg1;
                    var6 = arg2;
case 20: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var7 = var8.BILLING_SUBSCRIPTION_INVITES;
                    var5 = var7.bind(var8)(var5);
                    var2['url'] = var5;
                    var5 = {};
                    var5['user_ids'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=99);
case 2:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var3 = {};
                    var4 = var2.body;
                    var4 = var4.invited_users;
                    var3['invitedUsers'] = var4;
                    var4 = var2.body;
                    var4 = var4.ineligible_users;
                    var3['ineligibleUsers'] = var4;
case 24: // try_end0
                    return var3;
case 22:
                    return var2;
case 25: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
case 18:
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
    var1 = function _removeUserFromSubscriptionGroup() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 3:
                    var6 = arg1;
                    var5 = arg2;
case 11: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var7 = var8.BILLING_SUBSCRIPTION_REMOVE_USER;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=86);
case 8:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 27; continue _fun0004 }
case 28: // try_end0
                    return var2;
case 27:
                    return var2;
case 29: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = undefined;
                    return var2;
case 23:
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
    var1 = function _fetchSubscriptionGroupMembers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 3:
                    var6 = arg1;
case 19: // try_start_0
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var7 = var8.BILLING_SUBSCRIPTION_MEMBERS;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=81);
case 7:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 32; continue _fun0005 }
case 6:
                    var5 = var2.body;
                    var4 = var5.map;
                    var3 = _closure1_slot4;
                    var3 = var3.createFromServer;
                    var3 = var4.bind(var5)(var3);
case 33: // try_end0
                    return var3;
case 32:
                    return var2;
case 34: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = new Array(0);
                    return var2;
case 30:
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
    var1 = function _acceptSubscriptionGroupInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 29; continue _fun0006 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var9 = _closure1_slot5;
                    var8 = var9.BILLING_SUBSCRIPTION_INVITE;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=86);
case 8:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    return var3;
case 27:
                    return var2;
case 29:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _removeSubscriptionGroupInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 23; continue _fun0007 }
case 3:
                    var6 = arg1;
                    var5 = arg2;
case 11: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var7 = var8.BILLING_SUBSCRIPTION_INVITE;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=86);
case 8:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 28: // try_end0
                    return var2;
case 27:
                    return var2;
case 29: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = undefined;
                    return var2;
case 23:
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/PremiumGroupActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchPremiumGroupMembership() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPremiumGroupMembership'] = var4;
    var4 = function fetchEligibleUsers() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchEligibleUsers'] = var4;
    var4 = function inviteUsersToSubscriptionGroup() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['inviteUsersToSubscriptionGroup'] = var4;
    var4 = function removeUserFromSubscriptionGroup() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeUserFromSubscriptionGroup'] = var4;
    var4 = function fetchSubscriptionGroupMembers() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSubscriptionGroupMembers'] = var4;
    var4 = function acceptSubscriptionGroupInvite() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['acceptSubscriptionGroupInvite'] = var4;
    var2 = function removeSubscriptionGroupInvite() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeSubscriptionGroupInvite'] = var2;
    return var1;
})();