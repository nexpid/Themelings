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
                    var25 = var2.type;
                    var22 = var2.withMutualGuilds;
                    var23 = var2.withMutualFriendsCount;
                    var24 = var2.withMutualFriends;
                    var7 = var2.guildId;
                    var20 = var2.connectionsRoleId;
                    var19 = var2.joinRequestId;
                    var17 = var2.abortSignal;
                    var11 = arguments[2];
                    var9 = undefined;
                    var21 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=83);
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
                    var4 = 7;
                    var6 = var6[var4];
                    var14 = var13.bind(var12)(var6);
                    var13 = var14.dispatch;
                    var6 = {};
                    var16 = 'USER_PROFILE_FETCH_START';
                    var6['type'] = var16;
                    var16 = var8;
                    var6['userId'] = var16;
                    var16 = var7;
                    var6['guildId'] = var16;
                    var16 = var24;
                    var6['withMutualFriends'] = var16;
                    var6 = var13.bind(var14)(var6);
case 10: // try_start_0
                    var6 = var7;
                    var14 = null;
                    var13 = var14 == var6;
                    var6 = undefined;
                    if(var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var18 = _closure1_slot7;
                    var16 = var18.includes;
                    var13 = var7;
                    var13 = var16.bind(var18)(var13);
                    var6 = undefined;
                    if(var13) { _fun0001_ip = 11; continue _fun0001 }
case 13:
                    var6 = var7;
case 11:
                    var21 = var6;
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var6 = 6;
                    var6 = var16[var6];
                    var6 = var13.bind(var12)(var6);
                    var16 = var6.HTTP;
                    var13 = var16.get;
                    var6 = {};
                    var27 = _closure1_slot6;
                    var26 = var27.USER_PROFILE;
                    var18 = var8;
                    var18 = var26.bind(var27)(var18);
                    var6['url'] = var18;
                    var18 = {};
                    var18['type'] = var25;
                    var18['with_mutual_guilds'] = var22;
                    var22 = var24;
                    var18['with_mutual_friends'] = var22;
                    var22 = var23;
                    if(!var23) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var25 = var24;
                    var25 = var14 == var25;
                    var23 = var25;
                    if(var25) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var23 = !var24;
case 16:
                    var22 = var23;
case 14:
                    var18['with_mutual_friends_count'] = var22;
                    var18['guild_id'] = var21;
                    var18['connections_role_id'] = var20;
                    var18['join_request_id'] = var19;
                    var6['query'] = var18;
                    var6['signal'] = var17;
                    var17 = true;
                    var6['rejectWithError'] = var17;
                    var6 = var13.bind(var16)(var6);
                    SaveGenerator(address=368);
case 18:
                    return var6;
case 19:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var15 = var6;
                    var13 = var11;
                    if(!(var14 != var13)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var16 = var11;
                    var11 = var15;
                    var13 = var11.body;
                    var11 = var7;
                    var11 = var16.bind(var12)(var13, var11);
case 22:
                    var16 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var13 = var11[var4];
                    var19 = var16.bind(var12)(var13);
                    var18 = var19.dispatch;
                    var17 = {};
                    var13 = 'USER_UPDATE';
                    var17['type'] = var13;
                    var13 = var15;
                    var20 = var13.body;
                    var20 = var20.user;
                    var17['user'] = var20;
                    var17 = var18.bind(var19)(var17);
                    var11 = var11[var4];
                    var17 = var16.bind(var12)(var11);
                    var16 = var17.dispatch;
                    var11 = {};
                    var18 = 'USER_PROFILE_FETCH_SUCCESS';
                    var11['type'] = var18;
                    var13 = var13.body;
                    var11['userProfile'] = var13;
                    var13 = var9;
                    var11['fetchStartedAt'] = var13;
                    var13 = var7;
                    var11['guildId'] = var13;
                    var11 = var16.bind(var17)(var11);
                    var13 = var14 != var13;
                    var11 = var13;
                    if(!var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var13 = var15;
                    var13 = var13.body;
                    var13 = var13.guild_member;
                    var11 = var14 != var13;
case 24:
                    if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
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
case 26: // try_end0
                    return var12;
case 20:
                    return var6;
case 28: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var3 = var11;
                    var13 = null;
                    var11 = var13 != var11;
                    var6 = var11;
                    if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var11 = var3;
                    var14 = var13 == var11;
                    var11 = undefined;
                    if(var14) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var14 = var3;
                    var11 = var14.body;
case 31:
                    var6 = var13 != var11;
case 29:
                    if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var11 = _closure1_slot8;
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
case 33:
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = var13[var4];
                    var6 = var5.bind(var12)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var11 = 'USER_PROFILE_FETCH_FAILURE';
                    var4['type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = 11;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.APIError;
                    var11 = var10.prototype;
                    var11 = Object.create(var11, {constructor: {value: var10}});
                    var31 = var11;
                    var30 = var3;
                    var10 = new var31[var10](var30, var29);
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _fetchMutualFriends() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 35; continue _fun0002 }
case 3:
                    var6 = var10;
                    var13 = arg2;
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var7 = 7;
                    var4 = var4[var7];
                    var5 = undefined;
                    var9 = var8.bind(var5)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var11 = 'MUTUAL_FRIENDS_FETCH_START';
                    var4['type'] = var11;
                    var4['userId'] = var10;
                    var4 = var8.bind(var9)(var4);
case 36: // try_start_0
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 6;
                    var4 = var12[var10];
                    var4 = var11.bind(var5)(var4);
                    var9 = var4.HTTP;
                    var8 = var9.get;
                    var4 = {};
                    var16 = _closure1_slot6;
                    var15 = var16.USER_RELATIONSHIPS;
                    var14 = var6;
                    var14 = var15.bind(var16)(var14);
                    var4['url'] = var14;
                    var14 = true;
                    var4['oldFormErrors'] = var14;
                    var4['signal'] = var13;
                    var10 = var12[var10];
                    var11 = var11.bind(var5)(var10);
                    var10 = var11.rejectWithMigratedError;
                    var10 = var10.bind(var11)();
                    var4['rejectWithError'] = var10;
                    var4 = var8.bind(var9)(var4);
                    SaveGenerator(address=168);
case 37:
                    return var4;
case 38:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
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
case 41: // try_end0
                    return var5;
case 39:
                    return var4;
case 42: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var4;
                    var8 = null;
                    var9 = var8 == var4;
                    var4 = undefined;
                    if(var9) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var9 = var2;
                    var4 = var9.body;
case 43:
                    if(!(var8 != var4)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var9 = _closure1_slot8;
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
case 45:
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
case 35:
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.PSEUDO_GUILD_IDS;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'UserProfileModalActionCreators';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchCurrentUser() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arguments[0];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0003_ip = 3; continue _fun0003 }
case 47:
            var2 = {};
case 3:
            var _closure2_slot0 = var7;
            var2 = var2.withAnalyticsToken;
            var10 = var7 !== var2;
            if(!var10) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var10 = var2;
case 48:
            _closure2_slot0 = var10;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {};
            var9 = _closure1_slot6;
            var9 = var9.ME;
            var2['url'] = var9;
            var9 = {};
            var9['with_analytics_token'] = var10;
            var2['query'] = var9;
            var9 = true;
            var2['oldFormErrors'] = var9;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.rejectWithMigratedError;
            var5 = var5.bind(var6)();
            var2['rejectWithError'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
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
                    if(!var7) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var7 = var1.body;
                    var6 = var7.analytics_token;
case 50:
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
            var10 = arguments[0];
            var9 = arguments[1];
            var7 = undefined;
            if(!(var10 === var7)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var10 = true;
case 52:
            if(!(var9 === var7)) { _fun0005_ip = 5; continue _fun0005 }
case 54:
            var9 = true;
case 5:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.patch;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.USER_AGREEMENTS;
            var2['url'] = var5;
            var5 = {};
            var6 = _closure1_slot0;
            var11 = 9;
            var11 = var8[var11];
            var11 = var6.bind(var7)(var11);
            var11 = var11.NetworkActionNames;
            var11 = var11.USER_ACCEPT_AGREEMENTS;
            var5['event'] = var11;
            var2['trackedActionData'] = var5;
            var5 = {};
            var5['terms'] = var10;
            var5['privacy'] = var9;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = 6;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.rejectWithMigratedError;
            var5 = var5.bind(var6)();
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
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var3 = null;
            var4 = var3 != var1;
            var3 = 'setFlag: user cannot be undefined';
            var3 = var5.bind(var6)(var4, var3);
            var1 = var1.flags;
            var3 = arg2;
            if(var3) { _fun0006_ip = 55; continue _fun0006 }
case 36:
            var3 = ~var2;
            var9 = var1 & var3;
            _fun0006_ip = 7; continue _fun0006;
case 55:
            var9 = var1 | var2;
case 7:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var1 = var7[var4];
            var1 = var5.bind(var6)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var8 = _closure1_slot6;
            var8 = var8.ME;
            var1['url'] = var8;
            var8 = true;
            var1['oldFormErrors'] = var8;
            var8 = {};
            var8['flags'] = var9;
            var1['body'] = var8;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.rejectWithMigratedError;
            var4 = var4.bind(var5)();
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['setFlag'] = var4;
    var4 = function getUser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var3 = _closure1_slot5;
            var2 = var3.getUser;
            var4 = var2.bind(var3)(var12);
            var2 = null;
            if(!(var2 == var4)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 6;
            var2 = var9[var6];
            var7 = undefined;
            var2 = var8.bind(var7)(var2);
            var5 = var2.HTTP;
            var3 = var5.get;
            var2 = {};
            var11 = _closure1_slot6;
            var10 = var11.USER;
            var10 = var10.bind(var11)(var12);
            var2['url'] = var10;
            var10 = true;
            var2['oldFormErrors'] = var10;
            var6 = var9[var6];
            var7 = var8.bind(var7)(var6);
            var6 = var7.rejectWithMigratedError;
            var6 = var6.bind(var7)();
            var2['rejectWithError'] = var6;
            var3 = var3.bind(var5)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 7;
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
            _fun0007_ip = 58; continue _fun0007;
case 56:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)(var4);
case 58:
            return var1;
        }
    };
    var3['getUser'] = var4;
    var4 = function insertStaticUser(arg1) {
        var1 = arg1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 7;
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
        var4 = _closure1_slot9;
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
        var4 = _closure1_slot10;
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