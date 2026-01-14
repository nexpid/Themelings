// app/modules/premium/premium_group/PremiumGroupActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchPremiumGroupMembership() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 4;
                    var3 = var3[var5];
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH_START';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.get;
                    var3 = {};
                    var9 = _closure1_slot6;
                    var9 = var9.PREMIUM_GROUP_MEMBERSHIP;
                    var3['url'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=120);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var8 = var3.body;
                    var6 = var8;
                    var7 = null;
                    if(!(var7 == var8)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND';
                    var7['type'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0001_ip = 11; continue _fun0001;
case 9:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var10 = {};
                    var11 = var6;
                    var12 = var11.subscription_id;
                    var10['subscriptionId'] = var12;
                    var12 = var11.member_type;
                    var10['memberType'] = var12;
                    var12 = var11.subscription_status;
                    var10['subscriptionStatus'] = var12;
                    var12 = global;
                    var13 = var12.Date;
                    var14 = var11.current_period_end;
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var15 = var12;
                    var11 = new var15[var13](var14, var13);
                    var11 = var11 instanceof Object ? var11 : var12;
                    var10['currentPeriodEnd'] = var11;
                    var7['membership'] = var10;
                    var7 = var8.bind(var9)(var7);
case 11: // try_end0
                    return var6;
case 7:
                    return var3;
case 12: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    return var2;
case 2:
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
    var1 = function _fetchEligibleUsers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var8 = _closure1_slot6;
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
                    if(!var8) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var6 = var7;
case 15:
                    var5['limit'] = var6;
                    var6 = arg3;
                    var5['search_query'] = var6;
                    var2['query'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=127);
case 17:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var3 = var2.body;
                    var7 = var3.users;
                    var4 = var3.next_index;
                    var3 = {};
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot4;
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
case 19:
                    return var2;
case 13:
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
    var1 = function _inviteUsersToSubscriptionGroup() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 3:
                    var9 = arg1;
                    var10 = arg2;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 4;
                    var3 = var3[var5];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var8 = 'PREMIUM_GROUP_INVITE_USERS_START';
                    var3['type'] = var8;
                    var3 = var6.bind(var7)(var3);
case 22: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.post;
                    var3 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.BILLING_SUBSCRIPTION_INVITES;
                    var8 = var9;
                    var8 = var11.bind(var12)(var8);
                    var3['url'] = var8;
                    var8 = {};
                    var8['user_ids'] = var10;
                    var3['body'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=144);
case 23:
                    return var3;
case 24:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'PREMIUM_GROUP_INVITE_USERS_SUCCESS';
                    var6['type'] = var10;
                    var6['subscriptionId'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var6 = {};
                    var7 = var3.body;
                    var7 = var7.invited_users;
                    var6['invitedUsers'] = var7;
                    var7 = var3.body;
                    var7 = var7.ineligible_users;
                    var6['ineligibleUsers'] = var7;
case 27: // try_end0
                    return var6;
case 25:
                    return var3;
case 28: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'PREMIUM_GROUP_INVITE_USERS_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    return var2;
case 21:
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
    var1 = function _removeUserFromSubscriptionGroup() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 3:
                    var9 = arg1;
                    var8 = arg2;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 4;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var10 = 'PREMIUM_GROUP_REMOVE_MEMBER_START';
                    var2['type'] = var10;
                    var2 = var4.bind(var7)(var2);
case 22: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.del;
                    var2 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.BILLING_SUBSCRIPTION_REMOVE_USER;
                    var10 = var9;
                    var8 = var11.bind(var12)(var10, var8);
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=134);
case 29:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 31:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS';
                    var4['type'] = var10;
                    var4['subscriptionId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 32: // try_end0
                    return var2;
case 9:
                    return var2;
case 33: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'PREMIUM_GROUP_REMOVE_MEMBER_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 27:
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
    var1 = function _fetchSubscriptionGroupMembers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var8 = arg1;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 4;
                    var3 = var3[var5];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var9 = 'PREMIUM_GROUP_MEMBERS_FETCH_START';
                    var3['type'] = var9;
                    var3 = var6.bind(var7)(var3);
case 36: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.get;
                    var3 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.BILLING_SUBSCRIPTION_MEMBERS;
                    var8 = var9.bind(var10)(var8);
                    var3['url'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=128);
case 37:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var8 = var3.body;
                    var7 = var8.map;
                    var6 = _closure1_slot5;
                    var6 = var6.createFromServer;
                    var6 = var7.bind(var8)(var6);
                    var8 = var6.find;
                    var7 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isPrimary;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var12 = var8.bind(var6)(var7);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var9 = 6;
                    var9 = var7[var9];
                    var13 = var8.bind(var4)(var9);
                    var9 = null;
                    var10 = var9 != var12;
                    var9 = 'Primary member not found in premium group';
                    var9 = var13.bind(var4)(var10, var9);
                    var7 = var7[var5];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var10 = {};
                    var12 = var12.user;
                    var10['primary'] = var12;
                    var13 = var6.filter;
                    var12 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isMember;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var14 = var13.bind(var6)(var12);
                    var13 = var14.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var12 = var13.bind(var14)(var12);
                    var10['members'] = var12;
                    var13 = var6.filter;
                    var12 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isInvited;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var13 = var13.bind(var6)(var12);
                    var12 = var13.map;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var11 = var12.bind(var13)(var11);
                    var10['invitedUsers'] = var11;
                    var7['members'] = var10;
                    var7 = var8.bind(var9)(var7);
case 41: // try_end0
                    return var6;
case 39:
                    return var3;
case 42: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'PREMIUM_GROUP_MEMBERS_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = new Array(0);
                    return var2;
case 34:
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
    var1 = function _acceptSubscriptionGroupInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 14:
                    var10 = arg1;
                    var9 = arg2;
                    var6 = var11;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 4;
                    var2 = var2[var7];
                    var5 = undefined;
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var12 = 'PREMIUM_GROUP_ACCEPT_INVITE_START';
                    var2['type'] = var12;
                    var2['subscriptionGroupMemberId'] = var11;
                    var2 = var4.bind(var8)(var2);
case 44: // try_start_0
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.patch;
                    var2 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.BILLING_SUBSCRIPTION_INVITE;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=142);
case 31:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var9 = var8.bind(var5)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var10 = 'PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS';
                    var4['type'] = var10;
                    var10 = var6;
                    var4['subscriptionGroupMemberId'] = var10;
                    var4 = var8.bind(var9)(var4);
case 47: // try_end0
                    return var2;
case 45:
                    return var2;
case 48: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'PREMIUM_GROUP_ACCEPT_INVITE_FAIL';
                    var3['type'] = var7;
                    var3['subscriptionGroupMemberId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 43:
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
    var1 = function _removeSubscriptionGroupInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var13 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 49; continue _fun0007 }
case 14:
                    var6 = arg1;
                    var12 = arg2;
                    var10 = var13;
                    var7 = undefined;
                    var8 = undefined;
                    var9 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 4;
                    var4 = var4[var5];
                    var11 = var9.bind(var7)(var4);
                    var9 = var11.dispatch;
                    var4 = {};
                    var14 = 'PREMIUM_GROUP_REMOVE_INVITE_START';
                    var4['type'] = var14;
                    var4['subscriptionGroupMemberId'] = var13;
                    var4 = var9.bind(var11)(var4);
case 50: // try_start_0
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 5;
                    var4 = var11[var4];
                    var4 = var9.bind(var7)(var4);
                    var11 = var4.HTTP;
                    var9 = var11.del;
                    var4 = {};
                    var15 = _closure1_slot6;
                    var14 = var15.BILLING_SUBSCRIPTION_INVITE;
                    var13 = var6;
                    var12 = var14.bind(var15)(var13, var12);
                    var4['url'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var4 = var9.bind(var11)(var4);
                    SaveGenerator(address=147);
case 51:
                    return var4;
case 52:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var5];
                    var12 = var11.bind(var7)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var13 = 'PREMIUM_GROUP_REMOVE_INVITE_SUCCESS';
                    var9['type'] = var13;
                    var13 = var6;
                    var9['subscriptionId'] = var13;
                    var13 = var10;
                    var9['subscriptionGroupMemberId'] = var13;
                    var9 = var11.bind(var12)(var9);
case 55: // try_end0
                    return var4;
case 53:
                    return var4;
case 56: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var2 = var9;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var11 = 'PREMIUM_GROUP_REMOVE_INVITE_FAILURE';
                    var3['type'] = var11;
                    var3['subscriptionGroupMemberId'] = var10;
                    var10 = var9.body;
                    var8 = var10;
                    var9 = null;
                    var9 = var9 == var10;
                    var7 = undefined;
                    if(var9) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var7 = var8.code;
case 57:
                    var3['errorCode'] = var7;
                    var3['subscriptionId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 49:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchPremiumGroupInvites() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 59; continue _fun0008 }
case 3:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 4;
                    var4 = var2[var5];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'PREMIUM_GROUP_INVITES_FETCH_START';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
case 60: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.PREMIUM_GROUP_INVITES;
                    var4['url'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=118);
case 61:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var9 = var4.body;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'PREMIUM_GROUP_INVITES_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var6['invites'] = var9;
                    var6 = var7.bind(var8)(var6);
case 64: // try_end0
                    _fun0008_ip = 65; continue _fun0008;
case 62:
                    return var4;
case 66: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'PREMIUM_GROUP_INVITES_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 65:
                    return var2;
case 59:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _fetchPremiumGroupInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 67; continue _fun0009 }
case 14:
                    var8 = var11;
                    var2 = undefined;
                    var7 = undefined;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 4;
                    var4 = var4[var5];
                    var10 = var6.bind(var2)(var4);
                    var6 = var10.dispatch;
                    var4 = {};
                    var12 = 'PREMIUM_GROUP_INVITE_FETCH_START';
                    var4['type'] = var12;
                    var4['subscriptionGroupMemberId'] = var11;
                    var4 = var6.bind(var10)(var4);
case 68: // try_start_0
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var4 = var6.bind(var2)(var4);
                    var10 = var4.HTTP;
                    var6 = var10.get;
                    var4 = {};
                    var13 = _closure1_slot6;
                    var12 = var13.PREMIUM_GROUP_INVITE;
                    var11 = var8;
                    var11 = var12.bind(var13)(var11);
                    var4['url'] = var11;
                    var11 = true;
                    var4['rejectWithError'] = var11;
                    var4 = var6.bind(var10)(var4);
                    SaveGenerator(address=139);
case 40:
                    return var4;
case 69:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 70; continue _fun0009 }
case 51:
                    var12 = var4.body;
                    var10 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var11 = var10.bind(var2)(var6);
                    var10 = var11.dispatch;
                    var6 = {};
                    var13 = 'PREMIUM_GROUP_INVITE_FETCH_SUCCESS';
                    var6['type'] = var13;
                    var13 = var8;
                    var6['subscriptionGroupMemberId'] = var13;
                    var6['invite'] = var12;
                    var6 = var10.bind(var11)(var6);
case 71: // try_end0
                    _fun0009_ip = 72; continue _fun0009;
case 70:
                    return var4;
case 73: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var9 = var6;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var10 = 'PREMIUM_GROUP_INVITE_FETCH_FAIL';
                    var3['type'] = var10;
                    var3['subscriptionGroupMemberId'] = var8;
                    var8 = null;
                    var10 = var8 == var6;
                    var6 = undefined;
                    if(var10) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var6 = var9.status;
case 74:
                    var7 = var6;
                    var8 = var8 != var6;
                    var6 = 0;
                    if(!var8) { _fun0009_ip = 57; continue _fun0009 }
case 76:
                    var6 = var7;
case 57:
                    var3['status'] = var6;
                    var3 = var4.bind(var5)(var3);
case 72:
                    return var2;
case 67:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/PremiumGroupActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchPremiumGroupMembership() {
        var1 = undefined;
        var4 = _closure1_slot7;
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
        var4 = _closure1_slot8;
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
        var4 = _closure1_slot9;
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
        var4 = _closure1_slot10;
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
        var4 = _closure1_slot11;
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
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['acceptSubscriptionGroupInvite'] = var4;
    var4 = function removeSubscriptionGroupInvite() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeSubscriptionGroupInvite'] = var4;
    var4 = function fetchPremiumGroupInvites() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPremiumGroupInvites'] = var4;
    var2 = function fetchPremiumGroupInvite() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPremiumGroupInvite'] = var2;
    return var1;
})();