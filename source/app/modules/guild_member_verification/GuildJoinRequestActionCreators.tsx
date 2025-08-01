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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 157; continue _fun0001 }
 10:
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
 82:
                    return var2;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 154; continue _fun0001 }
 90:
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
 154:
                    return var2;
 157:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 527; continue _fun0002 }
 13:
                    var11 = var2.guildId;
                    var4 = var2.status;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0002_ip = 64; continue _fun0002 }
 29:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.GuildJoinRequestApplicationStatuses;
                    var4 = var7.SUBMITTED;
 64:
                    var15 = var4;
                    var17 = var2.before;
                    var16 = var2.after;
                    var4 = var2.limit;
                    if(!(var4 === var3)) { _fun0002_ip = 117; continue _fun0002 }
 88:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var4 = var7.MAX_RESULTS_PER_PAGE;
 117:
                    var12 = var4;
                    var4 = var2.force;
                    if(!(var4 === var3)) { _fun0002_ip = 132; continue _fun0002 }
 130:
                    var4 = false;
 132:
                    var8 = undefined;
                    var6 = undefined;
                    var13 = undefined;
                    SaveGenerator(address=142);
 140:
                    return var3;
 142:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 524; continue _fun0002 }
 151:
                    if(var4) { _fun0002_ip = 178; continue _fun0002 }
 154:
                    var9 = _closure1_slot5;
                    var7 = var9.hasFetched;
                    var5 = var11;
                    var5 = var7.bind(var9)(var5);
                    var4 = !var5;
 178:
                    var9 = _closure1_slot5;
                    var7 = var9.isFetching;
                    var7 = var7.bind(var9)();
                    if(var7) { _fun0002_ip = 521; continue _fun0002 }
 201:
                    if(!var4) { _fun0002_ip = 521; continue _fun0002 }
 207:
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
 249: // try_start_0
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
                    SaveGenerator(address=348);
 346:
                    return var4;
 348:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 475; continue _fun0002 }
 354:
                    var6 = var4;
                    var9 = var4.body;
                    var13 = var9.total;
                    var9 = var4.body;
                    var10 = var9.guild_join_requests;
                    var8 = var10;
                    var9 = null;
                    if(!(var9 == var10)) { _fun0002_ip = 394; continue _fun0002 }
 388:
                    var10 = new Array(0);
                    _fun0002_ip = 397; continue _fun0002;
 394:
                    var10 = var8;
 397:
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
 472: // try_end0
                    return var6;
 475:
                    return var4;
 478: // catch_target0
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
 521:
                    return var3;
 524:
                    return var2;
 527:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 154; continue _fun0003 }
 10:
                    var6 = arg1;
 13: // try_start_0
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
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 147; continue _fun0003 }
 94:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'USER_GUILD_JOIN_REQUEST_UPDATE', 'guildId': null, 'request': null};
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
 144: // try_end0
                    return var2;
 147:
                    return var2;
 150: // catch_target0
                    CatchBlockStart(arg_register=1);
                    throw var2;
 154:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 344; continue _fun0004 }
 10:
                    var6 = arg1;
                    var7 = arg2;
 16: // try_start_0 // try_start_1
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
 93:
                    return var2;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 160; continue _fun0004 }
 101: // try_end0 // try_end1
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
 160:
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
 219: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
 221: // try_end2
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
 285: // catch_target1 // catch_target2
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
 344:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    var10 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 306; continue _fun0005 }
 16:
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0005_ip = 57; continue _fun0005 }
 22:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.GuildJoinRequestApplicationStatuses;
                    var10 = var2.APPROVED;
 57:
                    SaveGenerator(address=61);
 59:
                    return var4;
 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 303; continue _fun0005 }
 70:
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
 0:
                            var3 = arg1;
                            var1 = var3;
                            if(!var1) { _fun0006_ip = 14; continue _fun0006 }
 9:
                            var1 = var3.body;
 14:
                            if(!var1) { _fun0006_ip = 44; continue _fun0006 }
 17:
                            var2 = var3.body;
                            var4 = var2.code;
                            var2 = _closure1_slot7;
                            var2 = var2.REQUEST_TO_JOIN_USER_INELIGIBLE;
                            var1 = var4 === var2;
 44:
                            if(!var1) { _fun0006_ip = 195; continue _fun0006 }
 50:
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
 195:
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.reject;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=222);
 220:
                    return var3;
 222:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 300; continue _fun0005 }
 228:
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
 300:
                    return var3;
 303:
                    return var2;
 306:
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
 0:
                    StartGenerator();
                    var7 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 165; continue _fun0007 }
 16:
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
 96:
                    return var2;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 162; continue _fun0007 }
 104:
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
 162:
                    return var2;
 165:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 160; continue _fun0008 }
 10:
                    var7 = arg1;
 13: // try_start_0
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
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 153; continue _fun0008 }
 94:
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
 150: // try_end0
                    return var3;
 153:
                    return var2;
 156: // catch_target0
                    CatchBlockStart(arg_register=1);
                    throw var2;
 160:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 140; continue _fun0009 }
 10:
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
 74:
                    return var2;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 137; continue _fun0009 }
 82:
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
 137:
                    return var2;
 140:
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
 0:
                    StartGenerator();
                    var6 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 224; continue _fun0010 }
 13:
                    var7 = undefined;
                    if(!(var6 === var7)) { _fun0010_ip = 21; continue _fun0010 }
 19:
                    var6 = true;
 21:
                    SaveGenerator(address=25);
 23:
                    return var7;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 221; continue _fun0010 }
 34:
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
 105:
                    return var3;
 107:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 218; continue _fun0010 }
 113:
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
                    if(!var6) { _fun0010_ip = 210; continue _fun0010 }
 174:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 11;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.selectPrivateChannel;
                    var5 = var4.id;
                    var5 = var6.bind(var7)(var5);
 210:
                    var4 = var4.id;
                    return var4;
 218:
                    return var3;
 221:
                    return var2;
 224:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 223; continue _fun0011 }
 10:
                    var6 = arg1;
 13: // try_start_0
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
 85:
                    return var2;
 87:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 161; continue _fun0011 }
 93:
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
 158: // try_end0
                    return var2;
 161:
                    return var2;
 164: // catch_target0
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
 223:
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
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0012_ip = 75; continue _fun0012 }
 12:
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
 75:
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