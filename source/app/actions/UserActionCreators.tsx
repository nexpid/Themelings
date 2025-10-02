// app/actions/UserActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchProfile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = arg1;
                    var12 = undefined;
                    if(!(var2 === var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = {};
case 4:
                    var23 = var2.type;
                    var20 = var2.withMutualGuilds;
                    var21 = var2.withMutualFriendsCount;
                    var22 = var2.withMutualFriends;
                    var7 = var2.guildId;
                    var19 = var2.connectionsRoleId;
                    var18 = var2.joinRequestId;
                    var16 = var2.abortSignal;
                    var11 = arguments[2];
                    var9 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=81);
case 6:
                    return var12;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = global;
                    var6 = var5.Date;
                    var4 = var6.now;
                    var9 = var4.bind(var6)();
                    var13 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 6;
                    var6 = var6[var4];
                    var14 = var13.bind(var12)(var6);
                    var13 = var14.dispatch;
                    var6 = {};
                    var17 = 'USER_PROFILE_FETCH_START';
                    var6['type'] = var17;
                    var17 = var8;
                    var6['userId'] = var17;
                    var17 = var7;
                    var6['guildId'] = var17;
                    var17 = var22;
                    var6['withMutualFriends'] = var17;
                    var6 = var13.bind(var14)(var6);
case 10: // try_start_0
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 5;
                    var6 = var14[var6];
                    var6 = var13.bind(var12)(var6);
                    var14 = var6.HTTP;
                    var13 = var14.get;
                    var6 = {};
                    var25 = _closure1_slot6;
                    var24 = var25.USER_PROFILE;
                    var17 = var8;
                    var17 = var24.bind(var25)(var17);
                    var6['url'] = var17;
                    var17 = {};
                    var17['type'] = var23;
                    var17['with_mutual_guilds'] = var20;
                    var20 = var22;
                    var17['with_mutual_friends'] = var20;
                    var20 = var21;
                    if(!var21) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var24 = var22;
                    var23 = null;
                    var23 = var23 == var24;
                    var21 = var23;
                    if(var23) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var21 = !var22;
case 13:
                    var20 = var21;
case 11:
                    var17['with_mutual_friends_count'] = var20;
                    var20 = var7;
                    var17['guild_id'] = var20;
                    var17['connections_role_id'] = var19;
                    var17['join_request_id'] = var18;
                    var6['query'] = var17;
                    var6['signal'] = var16;
                    var16 = true;
                    var6['rejectWithError'] = var16;
                    var6 = var13.bind(var14)(var6);
                    SaveGenerator(address=329);
case 15:
                    return var6;
case 16:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var15 = var6;
                    var13 = var11;
                    var14 = null;
                    if(!(var14 != var13)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var16 = var11;
                    var11 = var15;
                    var13 = var11.body;
                    var11 = var7;
                    var11 = var16.bind(var12)(var13, var11);
case 19:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var16 = var11[var4];
                    var19 = var13.bind(var12)(var16);
                    var18 = var19.dispatch;
                    var16 = {};
                    var17 = 'USER_UPDATE';
                    var16['type'] = var17;
                    var17 = var15;
                    var20 = var17.body;
                    var20 = var20.user;
                    var16['user'] = var20;
                    var16 = var18.bind(var19)(var16);
                    var11 = var11[var4];
                    var16 = var13.bind(var12)(var11);
                    var13 = var16.dispatch;
                    var11 = {};
                    var18 = 'USER_PROFILE_FETCH_SUCCESS';
                    var11['type'] = var18;
                    var17 = var17.body;
                    var11['userProfile'] = var17;
                    var17 = var9;
                    var11['fetchStartedAt'] = var17;
                    var11 = var13.bind(var16)(var11);
                    var13 = var7;
                    var13 = var14 != var13;
                    var11 = var13;
                    if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var13 = var15;
                    var13 = var13.body;
                    var13 = var13.guild_member;
                    var11 = var14 != var13;
case 21:
                    if(!var11) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var4];
                    var14 = var13.bind(var12)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var16 = 'GUILD_MEMBER_PROFILE_UPDATE';
                    var11['type'] = var16;
                    var16 = var7;
                    var11['guildId'] = var16;
                    var15 = var15.body;
                    var15 = var15.guild_member;
                    var11['guildMember'] = var15;
                    var11 = var13.bind(var14)(var11);
case 23: // try_end0
                    return var12;
case 17:
                    return var6;
case 25: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var3 = var11;
                    var13 = null;
                    var11 = var13 != var11;
                    var6 = var11;
                    if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var11 = var3;
                    var14 = var13 == var11;
                    var11 = undefined;
                    if(var14) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var14 = var3;
                    var11 = var14.body;
case 28:
                    var6 = var13 != var11;
case 26:
                    if(!var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var11 = _closure1_slot7;
                    var6 = var11.warn;
                    var13 = var3;
                    var14 = var13.body;
                    var16 = var14.code;
                    var13 = var13.body;
                    var15 = var13.message;
                    var5 = var5.HermesInternal;
                    var14 = var5.concat;
                    var13 = 'fetchProfile error: ';
                    var5 = ' - ';
                    var5 = var14.bind(var13)(var16, var5, var15);
                    var5 = var6.bind(var11)(var5);
case 30:
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = var13[var4];
                    var6 = var5.bind(var12)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var11 = 'USER_PROFILE_FETCH_FAILURE';
                    var4['type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = 10;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.APIError;
                    var11 = var10.prototype;
                    var11 = Object.create(var11, {constructor: {value: var10}});
                    var29 = var11;
                    var28 = var3;
                    var10 = new var29[var10](var28, var27);
                    var10 = var10 instanceof Object ? var10 : var11;
                    var4['apiError'] = var10;
                    var4['fetchStartedAt'] = var9;
                    var4['userId'] = var8;
                    var4['guildId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _fetchMutualFriends() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
case 3:
                    var6 = var11;
                    var10 = arg2;
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var7 = 6;
                    var4 = var4[var7];
                    var5 = undefined;
                    var9 = var8.bind(var5)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var12 = 'MUTUAL_FRIENDS_FETCH_START';
                    var4['type'] = var12;
                    var4['userId'] = var11;
                    var4 = var8.bind(var9)(var4);
case 33: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 5;
                    var4 = var9[var4];
                    var4 = var8.bind(var5)(var4);
                    var9 = var4.HTTP;
                    var8 = var9.get;
                    var4 = {};
                    var13 = _closure1_slot6;
                    var12 = var13.USER_RELATIONSHIPS;
                    var11 = var6;
                    var11 = var12.bind(var13)(var11);
                    var4['url'] = var11;
                    var11 = true;
                    var4['oldFormErrors'] = var11;
                    var4['signal'] = var10;
                    var10 = false;
                    var4['rejectWithError'] = var10;
                    var4 = var8.bind(var9)(var4);
                    SaveGenerator(address=151);
case 34:
                    return var4;
case 35:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'MUTUAL_FRIENDS_FETCH_SUCCESS';
                    var8['type'] = var11;
                    var11 = var6;
                    var8['userId'] = var11;
                    var11 = var4.body;
                    var8['mutualFriends'] = var11;
                    var8 = var9.bind(var10)(var8);
case 38: // try_end0
                    return var5;
case 36:
                    return var4;
case 39: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var8 = null;
                    var9 = var8 == var4;
                    var4 = undefined;
                    if(var9) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var9 = var2;
                    var4 = var9.body;
case 40:
                    if(!(var8 != var4)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var9 = _closure1_slot7;
                    var8 = var9.warn;
                    var4 = var2;
                    var10 = var4.body;
                    var13 = var10.code;
                    var4 = var4.body;
                    var12 = var4.message;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var11 = var4.concat;
                    var10 = 'fetchMutualFriends error: ';
                    var4 = ' - ';
                    var4 = var11.bind(var10)(var13, var4, var12);
                    var4 = var8.bind(var9)(var4);
case 42:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'MUTUAL_FRIENDS_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['userId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 32:
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
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'UserProfileModalActionCreators';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchCurrentUser() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 3; continue _fun0003 }
case 44:
            var2 = {};
case 3:
            var _closure2_slot0 = var4;
            var2 = var2.withAnalyticsToken;
            var6 = var4 !== var2;
            if(!var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var6 = var2;
case 45:
            _closure2_slot0 = var6;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.ME;
            var2['url'] = var5;
            var5 = {};
            var5['with_analytics_token'] = var6;
            var2['query'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'CURRENT_USER_UPDATE';
                    var3['type'] = var7;
                    var7 = var1.body;
                    var3['user'] = var7;
                    var7 = _closure2_slot0;
                    if(!var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var7 = var1.body;
                    var6 = var7.analytics_token;
case 47:
                    var3['analyticsToken'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot4;
                    var8 = var1.body;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var9 = var2;
                    var1 = new var9[var3](var8, var7);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['fetchCurrentUser'] = var4;
    var4 = function acceptAgreements() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arguments[0];
            var6 = arguments[1];
            var10 = undefined;
            if(!(var7 === var10)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var7 = true;
case 49:
            if(!(var6 === var10)) { _fun0005_ip = 5; continue _fun0005 }
case 51:
            var6 = true;
case 5:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var4 = var3.bind(var10)(var2);
            var3 = var4.patch;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.USER_AGREEMENTS;
            var2['url'] = var5;
            var5 = {};
            var9 = _closure1_slot0;
            var8 = 8;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.NetworkActionNames;
            var8 = var8.USER_ACCEPT_AGREEMENTS;
            var5['event'] = var8;
            var2['trackedActionData'] = var5;
            var5 = {};
            var5['terms'] = var7;
            var5['privacy'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function() {
                var1 = true;
                return var1;
            };
            var1 = function() {
                var1 = false;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['acceptAgreements'] = var4;
    var4 = function setFlag(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var5 = null;
            var6 = var5 != var1;
            var5 = 'setFlag: user cannot be undefined';
            var5 = var7.bind(var3)(var6, var5);
            var1 = var1.flags;
            var5 = arg2;
            if(var5) { _fun0006_ip = 6; continue _fun0006 }
case 33:
            var5 = ~var2;
            var5 = var1 & var5;
            _fun0006_ip = 52; continue _fun0006;
case 6:
            var5 = var1 | var2;
case 52:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var4 = _closure1_slot6;
            var4 = var4.ME;
            var1['url'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = {};
            var4['flags'] = var5;
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['setFlag'] = var4;
    var4 = function getUser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot5;
            var2 = var3.getUser;
            var4 = var2.bind(var3)(var8);
            var2 = null;
            if(!(var2 == var4)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var5 = var2.HTTP;
            var3 = var5.get;
            var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
            var7 = _closure1_slot6;
            var6 = var7.USER;
            var6 = var6.bind(var7)(var8);
            var2['url'] = var6;
            var3 = var3.bind(var5)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'USER_UPDATE';
                var2['type'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var2['user'] = var5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot5;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0007_ip = 55; continue _fun0007;
case 53:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)(var4);
case 55:
            return var1;
        }
    };
    var3['getUser'] = var4;
    var4 = function insertStaticUser(arg1) {
        var1 = arg1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.dispatch;
        var3 = {};
        var6 = 'USER_UPDATE';
        var3['type'] = var6;
        var3['user'] = var1;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot5;
        var2 = var3.getUser;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['insertStaticUser'] = var4;
    var4 = function fetchProfile() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchProfile'] = var4;
    var2 = function fetchMutualFriends() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMutualFriends'] = var2;
    return var1;
})();