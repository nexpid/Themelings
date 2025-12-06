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
                    var9 = 'PREMIUM_GROUP_MEMBERSHIP_FETCH';
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
                    var11 = var11.member_type;
                    var10['memberType'] = var11;
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
                    SaveGenerator(address=128);
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
                    var5 = arg1;
                    var6 = arg2;
case 22: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot6;
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
case 23:
                    return var2;
case 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var3 = {};
                    var4 = var2.body;
                    var4 = var4.invited_users;
                    var3['invitedUsers'] = var4;
                    var4 = var2.body;
                    var4 = var4.ineligible_users;
                    var3['ineligibleUsers'] = var4;
case 27: // try_end0
                    return var3;
case 25:
                    return var2;
case 28: // catch_target0
                    CatchBlockStart(arg_register=1);
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
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 29:
                    var6 = arg1;
                    var5 = arg2;
case 14: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var7 = var8.BILLING_SUBSCRIPTION_REMOVE_USER;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=86);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 33: // try_end0
                    return var2;
case 32:
                    return var2;
case 34: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = undefined;
                    return var2;
case 26:
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
                    if(var2) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var8 = arg1;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 4;
                    var3 = var3[var5];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var9 = 'PREMIUM_GROUP_MEMBERS_FETCH';
                    var3['type'] = var9;
                    var3 = var6.bind(var7)(var3);
case 37: // try_start_0
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
case 17:
                    return var3;
case 18:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 38; continue _fun0005 }
case 39:
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
case 40: // try_end0
                    return var6;
case 38:
                    return var3;
case 41: // catch_target0
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
case 35:
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
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 34; continue _fun0006 }
case 29:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.BILLING_SUBSCRIPTION_INVITE;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=86);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    return var3;
case 32:
                    return var2;
case 34:
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
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 26; continue _fun0007 }
case 29:
                    var6 = arg1;
                    var5 = arg2;
case 14: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var7 = var8.BILLING_SUBSCRIPTION_INVITE;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=86);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 33: // try_end0
                    return var2;
case 32:
                    return var2;
case 34: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = undefined;
                    return var2;
case 26:
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
                    if(var2) { _fun0008_ip = 42; continue _fun0008 }
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
case 43: // try_start_0
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
case 44:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 45; continue _fun0008 }
case 46:
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
case 47: // try_end0
                    _fun0008_ip = 48; continue _fun0008;
case 45:
                    return var4;
case 49: // catch_target0
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
case 48:
                    return var2;
case 42:
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
                    if(var2) { _fun0009_ip = 50; continue _fun0009 }
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
                    var4['inviteId'] = var11;
                    var4 = var6.bind(var10)(var4);
case 51: // try_start_0
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
case 39:
                    return var4;
case 52:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 53; continue _fun0009 }
case 27:
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
                    var6['inviteId'] = var13;
                    var6['invite'] = var12;
                    var6 = var10.bind(var11)(var6);
case 54: // try_end0
                    _fun0009_ip = 55; continue _fun0009;
case 53:
                    return var4;
case 56: // catch_target0
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
                    var3['inviteId'] = var8;
                    var8 = null;
                    var10 = var8 == var6;
                    var6 = undefined;
                    if(var10) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var6 = var9.status;
case 57:
                    var7 = var6;
                    var8 = var8 != var6;
                    var6 = 0;
                    if(!var8) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var6 = var7;
case 59:
                    var3['status'] = var6;
                    var3 = var4.bind(var5)(var3);
case 55:
                    return var2;
case 50:
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