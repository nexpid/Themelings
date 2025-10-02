// app/modules/guild_member_verification/GuildJoinRequestActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.createChannelRecordFromServer;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.joinRequestFromServer;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.AbortCodes;
    var _closure1_slot7 = var4;
    var2 = var2.Endpoints;
    var _closure1_slot8 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot8;
                    var8 = var9.GUILD_JOIN_REQUEST_BY_ID;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=84);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot6;
                    var4 = var2.body;
                    var6 = var6.bind(var5)(var4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['joinRequest'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 6:
                    return var2;
case 2:
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
    var16 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var11 = var2.guildId;
                    var4 = var2.status;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.GuildJoinRequestApplicationStatuses;
                    var4 = var7.SUBMITTED;
case 10:
                    var15 = var4;
                    var17 = var2.before;
                    var16 = var2.after;
                    var4 = var2.limit;
                    if(!(var4 === var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var4 = var7.MAX_RESULTS_PER_PAGE;
case 12:
                    var12 = var4;
                    var4 = var2.force;
                    if(!(var4 === var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = false;
case 14:
                    var8 = undefined;
                    var6 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=142);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 6:
                    var9 = _closure1_slot5;
                    var7 = var9.hasFetched;
                    var5 = var11;
                    var5 = var7.bind(var9)(var5);
                    var4 = !var5;
case 20:
                    var9 = _closure1_slot5;
                    var7 = var9.isFetching;
                    var7 = var7.bind(var9)();
                    if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    if(!var4) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                    var9 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var7 = 6;
                    var4 = var4[var7];
                    var10 = var9.bind(var3)(var4);
                    var9 = var10.dispatch;
                    var4 = {};
                    var14 = 'GUILD_JOIN_REQUESTS_FETCH_START';
                    var4['type'] = var14;
                    var4 = var9.bind(var10)(var4);
case 24: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var4 = var9.bind(var3)(var4);
                    var10 = var4.HTTP;
                    var9 = var10.get;
                    var4 = {};
                    var19 = _closure1_slot8;
                    var18 = var19.GUILD_JOIN_REQUESTS;
                    var14 = var11;
                    var14 = var18.bind(var19)(var14);
                    var4['url'] = var14;
                    var14 = {};
                    var18 = var15;
                    var14['status'] = var18;
                    var18 = var12;
                    var14['limit'] = var18;
                    var14['before'] = var17;
                    var14['after'] = var16;
                    var4['query'] = var14;
                    var14 = false;
                    var4['rejectWithError'] = var14;
                    var4 = var9.bind(var10)(var4);
                    SaveGenerator(address=349);
case 25:
                    return var4;
case 26:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var6 = var4;
                    var9 = var4.body;
                    var13 = var9.total;
                    var9 = var4.body;
                    var10 = var9.guild_join_requests;
                    var8 = var10;
                    var9 = null;
                    if(!(var9 == var10)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var10 = new Array(0);
                    _fun0002_ip = 31; continue _fun0002;
case 29:
                    var10 = var8;
case 31:
                    var9 = var10.map;
                    var8 = _closure1_slot6;
                    var14 = var9.bind(var10)(var8);
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var16 = 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS';
                    var8['type'] = var16;
                    var8['status'] = var15;
                    var8['requests'] = var14;
                    var8['total'] = var13;
                    var8['limit'] = var12;
                    var8['guildId'] = var11;
                    var8 = var9.bind(var10)(var8);
case 32: // try_end0
                    return var6;
case 27:
                    return var4;
case 33: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'GUILD_JOIN_REQUESTS_FETCH_FAILURE';
                    var5['type'] = var8;
                    var5 = var6.bind(var7)(var5);
                    throw var4;
case 21:
                    return var3;
case 18:
                    return var2;
case 8:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var15 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                    var6 = arg1;
case 9: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.del;
                    var2 = {};
                    var10 = _closure1_slot8;
                    var9 = var10.GUILD_MEMBER_REQUEST_TO_JOIN;
                    var8 = var6;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=88);
case 34:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'USER_GUILD_JOIN_REQUEST_UPDATE', 'guildId': null, 'request': null};
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 37: // try_end0
                    return var2;
case 35:
                    return var2;
case 38: // catch_target0
                    CatchBlockStart(arg_register=1);
                    throw var2;
case 6:
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
    var13 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 39; continue _fun0004 }
case 3:
                    var6 = arg1;
                    var7 = arg2;
case 40: // try_start_0 // try_start_1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.post;
                    var2 = {};
                    var12 = _closure1_slot8;
                    var11 = var12.GUILD_JOIN_REQUEST_ACK;
                    var10 = var6;
                    var9 = var7;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var9 = false;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=95);
case 41:
                    return var2;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 43; continue _fun0004 }
case 44: // try_end0 // try_end1
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var9 = var8.bind(var5)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var10 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                    var4['type'] = var10;
                    var10 = var7;
                    var4['id'] = var10;
                    var10 = var6;
                    var4['guildId'] = var10;
                    var4 = var8.bind(var9)(var4);
                    return var2;
case 43:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                    var3['type'] = var8;
                    var8 = var7;
                    var3['id'] = var8;
                    var8 = var6;
                    var3['guildId'] = var8;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 45: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
case 46: // try_end2
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                    var3['type'] = var8;
                    var8 = var7;
                    var3['id'] = var8;
                    var8 = var6;
                    var3['guildId'] = var8;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 47: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'ACK_APPROVED_GUILD_JOIN_REQUEST';
                    var3['type'] = var8;
                    var3['id'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 39:
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
    var14 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var10 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 48; continue _fun0005 }
case 40:
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.GuildJoinRequestApplicationStatuses;
                    var10 = var2.APPROVED;
case 49:
                    SaveGenerator(address=61);
case 51:
                    return var4;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var11 = var6.bind(var4)(var3);
                    var9 = var11.trackMemberApplicationAction;
                    var3 = {};
                    var3['guildId'] = var8;
                    var3['actionType'] = var10;
                    var12 = arg2;
                    var3['applicationUserId'] = var12;
                    var3 = var9.bind(var11)(var3);
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.patch;
                    var3 = {};
                    var12 = _closure1_slot8;
                    var11 = var12.GUILD_JOIN_REQUEST_ID;
                    var9 = arg3;
                    var9 = var11.bind(var12)(var8, var9);
                    var3['url'] = var9;
                    var9 = {};
                    var9['action'] = var10;
                    var10 = arguments[4];
                    var9['rejection_reason'] = var10;
                    var3['body'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.catch;
                    var3 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3;
                            if(!var1) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                            var1 = var3.body;
case 55:
                            if(!var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                            var2 = var3.body;
                            var4 = var2.code;
                            var2 = _closure1_slot7;
                            var2 = var2.REQUEST_TO_JOIN_USER_INELIGIBLE;
                            var1 = var4 === var2;
case 57:
                            if(!var1) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var1 = 9;
                            var1 = var10[var1];
                            var9 = undefined;
                            var4 = var2.bind(var9)(var1);
                            var2 = var4.show;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var5 = 10;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var11 = var6.intl;
                            var7 = var11.string;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.t;
                            var6 = var6.DxJj4e;
                            var6 = var7.bind(var11)(var6);
                            var1['title'] = var6;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.t;
                            var5 = var5.rSAOk5;
                            var5 = var6.bind(var7)(var5);
                            var1['body'] = var5;
                            var1 = var2.bind(var4)(var1);
case 59:
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.reject;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=224);
case 61:
                    return var3;
case 62:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'GUILD_JOIN_REQUEST_UPDATE';
                    var5['type'] = var9;
                    var5['guildId'] = var8;
                    var8 = var3.body;
                    var8 = var8.application_status;
                    var5['status'] = var8;
                    var8 = var3.body;
                    var5['request'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 63:
                    return var3;
case 53:
                    return var2;
case 48:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var12 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 65; continue _fun0007 }
case 40:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.patch;
                    var2 = {};
                    var10 = _closure1_slot8;
                    var9 = var10.GUILD_JOIN_REQUESTS;
                    var9 = var9.bind(var10)(var7);
                    var2['url'] = var9;
                    var9 = {};
                    var9['action'] = var6;
                    var2['body'] = var9;
                    var9 = false;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=98);
case 66:
                    return var2;
case 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'GUILD_JOIN_REQUESTS_BULK_ACTION';
                    var3['type'] = var8;
                    var3['guildId'] = var7;
                    var3['action'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.body;
                    return var3;
case 68:
                    return var2;
case 65:
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
    var11 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 43; continue _fun0008 }
case 3:
                    var7 = arg1;
case 9: // try_start_0
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var10 = _closure1_slot8;
                    var9 = var10.GUILD_MEMBER_REQUEST_TO_JOIN;
                    var8 = var7;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=88);
case 34:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 70; continue _fun0008 }
case 36:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var4['request'] = var3;
                    var4 = var5.bind(var6)(var4);
case 38: // try_end0
                    return var3;
case 70:
                    return var2;
case 71: // catch_target0
                    CatchBlockStart(arg_register=1);
                    throw var2;
case 43:
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
    var10 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 16; continue _fun0009 }
case 3:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.USER_JOIN_REQUEST_GUILDS;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=76);
case 72:
                    return var2;
case 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 74; continue _fun0009 }
case 4:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 6;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'USER_JOIN_REQUEST_GUILDS_FETCH';
                    var4['type'] = var7;
                    var7 = var2.body;
                    var4['guilds'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 74:
                    return var2;
case 16:
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
    var9 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var6 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 62; continue _fun0010 }
case 9:
                    var7 = undefined;
                    if(!(var6 === var7)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var6 = true;
case 75:
                    SaveGenerator(address=25);
case 77:
                    return var7;
case 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 46; continue _fun0010 }
case 79:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var4.bind(var7)(var3);
                    var8 = var3.HTTP;
                    var4 = var8.post;
                    var3 = {};
                    var11 = _closure1_slot8;
                    var10 = var11.GUILD_JOIN_REQUEST_INTERVIEW;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var3['url'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var4.bind(var8)(var3);
                    SaveGenerator(address=107);
case 80:
                    return var3;
case 81:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                    var8 = _closure1_slot4;
                    var4 = var3.body;
                    var4 = var8.bind(var7)(var4);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 6;
                    var8 = var10[var8];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'CHANNEL_CREATE';
                    var8['type'] = var11;
                    var8['channel'] = var4;
                    var8 = var9.bind(var10)(var8);
                    if(!var6) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 11;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.selectPrivateChannel;
                    var5 = var4.id;
                    var5 = var6.bind(var7)(var5);
case 84:
                    var4 = var4.id;
                    return var4;
case 82:
                    return var3;
case 46:
                    return var2;
case 62:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var7 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 86; continue _fun0011 }
case 3:
                    var6 = arg1;
case 9: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var10 = _closure1_slot8;
                    var9 = var10.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN;
                    var8 = var6;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=87);
case 87:
                    return var2;
case 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 89; continue _fun0011 }
case 41:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH';
                    var3['type'] = var7;
                    var7 = var6;
                    var3['guildId'] = var7;
                    var7 = var2.body;
                    var7 = var7.cooldown;
                    var3['cooldown'] = var7;
                    var3 = var4.bind(var5)(var3);
case 90: // try_end0
                    return var2;
case 89:
                    return var2;
case 91: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {'type': 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH', 'guildId': null, 'cooldown': null};
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 86:
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
    var4 = var2.bind(var1)();
    var2 = {};
    var2['fetchGuildJoinRequest'] = var16;
    var2['fetchGuildJoinRequests'] = var15;
    var2['ackUserGuildJoinRequest'] = var14;
    var2['removeGuildJoinRequest'] = var13;
    var2['updateGuildJoinRequest'] = var12;
    var2['actionAllPendingJoinRequests'] = var11;
    var2['resetGuildJoinRequest'] = var10;
    var2['fetchRequestToJoinGuilds'] = var9;
    var9 = function setSelectedApplicationTab(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['applicationTab'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setSelectedApplicationTab'] = var9;
    var9 = function setSelectedSortOrder(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['sortOrder'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setSelectedSortOrder'] = var9;
    var8 = function setSelectedGuildJoinRequest(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0012_ip = 92; continue _fun0012 }
case 93:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackMemberApplicationViewed;
            var1 = {};
            var1['guildId'] = var6;
            var4 = var5.applicationStatus;
            var1['applicationStatus'] = var4;
            var4 = var5.userId;
            var1['applicationUserId'] = var4;
            var1 = var2.bind(var3)(var1);
case 92:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'GUILD_JOIN_REQUESTS_SET_SELECTED';
            var2['type'] = var7;
            var2['guildId'] = var6;
            var2['request'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setSelectedGuildJoinRequest'] = var8;
    var2['createOrEnterJoinRequestInterview'] = var7;
    var2['fetchJoinRequestCooldown'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/GuildJoinRequestActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();