// app/modules/quests/QuestActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _manuallyStartConsoleQuest() {
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
                    var11 = arg1;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = false;
case 4:
                    var14 = var2;
                    var10 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=37);
case 6:
                    return var9;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9: // try_start_0
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var13 = 5;
                    var4 = var4[var13];
                    var4 = var7.bind(var9)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.post;
                    var4 = {};
                    var15 = _closure1_slot10;
                    var12 = var15.QUEST_ON_CONSOLE_START;
                    var11 = var12.bind(var15)(var11);
                    var4['url'] = var11;
                    var12 = var14;
                    var11 = undefined;
                    if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var12 = {};
                    var12['preview'] = var14;
                    var11 = var12;
case 10:
                    var4['query'] = var11;
                    var11 = true;
                    var4['failImmediatelyWhenRateLimited'] = var11;
                    var11 = false;
                    var4['rejectWithError'] = var11;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=145);
case 12:
                    return var4;
case 13:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = var4.body;
                    var10 = var7;
                    var7 = var7.quest_user_status;
                    var8 = null;
                    if(!(var8 == var7)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var7 = var10;
                    var7 = var7.error_hints_v2;
                    if(!(var8 != var7)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var7 = var10;
                    var7 = var7.error_hints_v2;
                    var7 = var7.length;
                    var12 = 0;
                    if(!(var7 > var12)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
                    var7 = {};
                    var8 = var10;
                    var11 = var8.error_hints_v2;
                    var8 = var11.slice;
                    var8 = var8.bind(var11)(var12, var13);
                    var7['errorHints'] = var8;
case 21: // try_end0
                    return var7;
case 16: // try_start_1
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var6 = var8[var6];
                    var8 = var7.bind(var9)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'QUESTS_USER_STATUS_UPDATE';
                    var6['type'] = var11;
                    var10 = var10.quest_user_status;
                    var6['user_status'] = var10;
                    var6 = var7.bind(var8)(var6);
case 18: // try_end1
                    var6 = {};
                    var7 = new Array(0);
                    var6['errorHints'] = var7;
                    return var6;
case 14:
                    return var4;
case 22: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 7;
                    var6 = var10[var6];
                    var6 = var7.bind(var9)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var18 = var7;
                    var17 = var8;
                    var6 = new var18[var6](var17, var16);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var5 = var6;
                    var7 = var6.status;
                    var6 = 429;
                    if(!(var6 !== var7)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var6 = var5;
                    var5 = var6.getAnyErrorMessage;
                    var6 = var5.bind(var6)();
                    var3 = var6;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 9;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.xSCvBf;
                    var5 = var6.bind(var7)(var5);
                    _fun0001_ip = 27; continue _fun0001;
case 25:
                    var5 = var3;
case 27:
                    var3 = {};
                    var6 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 8;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.QuestConsoleStartErrorLocal;
                    var7 = var7.GENERIC;
                    var6['type'] = var7;
                    var6['message'] = var5;
                    var5 = '';
                    var6['connected_account_id'] = var5;
                    var6['connected_account_type'] = var5;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var3['errorHints'] = var5;
                    return var3;
case 23:
                    var3 = {};
                    var5 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.QuestConsoleStartErrorLocal;
                    var4 = var4.RATE_LIMITED;
                    var5['type'] = var4;
                    var4 = 9;
                    var6 = var10[var4];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.t;
                    var4 = var4.Whhv4w;
                    var4 = var6.bind(var7)(var4);
                    var5['message'] = var4;
                    var4 = '';
                    var5['connected_account_id'] = var4;
                    var5['connected_account_type'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3['errorHints'] = var4;
                    return var3;
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
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _manualStopConsoleQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var8 = _closure1_slot10;
                    var7 = var8.QUEST_ON_CONSOLE_STOP;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=82);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    return var3;
case 32:
                    return var2;
case 28:
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
    var1 = function _resetRecentQuestCompletions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 34; continue _fun0003 }
case 29:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var6 = _closure1_slot10;
                    var6 = var6.QUESTS_RESET_RECENT_QUEST_COMPLETIONS;
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=74);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 37; continue _fun0003 }
case 30:
                    return var3;
case 37:
                    return var2;
case 34:
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
    var1 = function _fetchCurrentQuests() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var2 = _closure1_slot4;
                    var2 = var2.isFetchingCurrentQuests;
                    if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var8 = undefined;
                    var7 = var6.bind(var8)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var9 = 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN';
                    var4['type'] = var9;
                    var4 = var6.bind(var7)(var4);
case 42: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var4 = var6.bind(var8)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var9 = _closure1_slot10;
                    var9 = var9.QUESTS_CURRENT_QUESTS;
                    var4['url'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=134);
case 43:
                    return var4;
case 44:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 45; continue _fun0004 }
case 12:
                    var6 = var4.body;
                    var9 = var6.quests;
                    var7 = var9.filter;
                    var6 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isQuestWithKnownConfigVersion;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.map;
                    var6 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.questWithUserStatusFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var7.bind(var9)(var6);
                    var6 = var4.body;
                    var9 = var6.quest_enrollment_blocked_until;
                    var7 = var10.filter;
                    var6 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.userStatus;
                            var3 = null;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if(var5) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                            var1 = var4.claimedAt;
case 46:
                            var1 = var3 != var1;
                            if(var1) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                            var2 = var2.config;
                            var2 = var2.rewardsConfig;
                            var2 = var2.platforms;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
case 48:
                            return var1;
                        }
                    };
                    var11 = var7.bind(var10)(var6);
                    var6 = var4.body;
                    var7 = var6.excluded_quests;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.excludedQuestFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var6.bind(var7)(var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var2];
                    var7 = var6.bind(var8)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var12 = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                    var5['type'] = var12;
                    var5['quests'] = var11;
                    var5['excludedQuests'] = var10;
                    var5['questEnrollmentBlockedUntil'] = var9;
                    var5 = var6.bind(var7)(var5);
case 50: // try_end0
                    _fun0004_ip = 40; continue _fun0004;
case 45:
                    return var4;
case 51: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = var9[var2];
                    var4 = var6.bind(var8)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE';
                    var2['type'] = var5;
                    var5 = 7;
                    var5 = var9[var5];
                    var5 = var6.bind(var8)(var5);
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var14 = var6;
                    var13 = var7;
                    var5 = new var14[var5](var13, var12);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2['error'] = var5;
                    var2 = var3.bind(var4)(var2);
case 40:
                    var2 = undefined;
                    return var2;
case 38:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _sendHeartbeat() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 52; continue _fun0006 }
case 3:
                    var8 = var2.questId;
                    var7 = var2.streamKey;
                    var12 = var2.applicationId;
                    var2 = var2.terminal;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var2 = false;
case 53:
                    var9 = var2;
                    var14 = undefined;
                    SaveGenerator(address=53);
case 55:
                    return var3;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 57; continue _fun0006 }
case 58: // try_start_0
                    var5 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var4 = 11;
                    var4 = var17[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.post;
                    var4 = {};
                    var13 = _closure1_slot10;
                    var11 = var13.QUESTS_HEARTBEAT;
                    var15 = var8;
                    var11 = var11.bind(var13)(var15);
                    var4['url'] = var11;
                    var11 = {};
                    var13 = var7;
                    var11['stream_key'] = var13;
                    var13 = var12;
                    var11['application_id'] = var13;
                    var11['terminal'] = var9;
                    var4['body'] = var11;
                    var11 = {};
                    var16 = _closure1_slot0;
                    var12 = 12;
                    var12 = var17[var12];
                    var12 = var16.bind(var3)(var12);
                    var12 = var12.NetworkActionNames;
                    var12 = var12.QUEST_HEARTBEAT;
                    var11['event'] = var12;
                    var12 = {};
                    var12['quest_id'] = var15;
                    var12['application_id'] = var13;
                    var12['terminal'] = var9;
                    var9 = false;
                    var12['is_overlay'] = var9;
                    var13 = global;
                    var13 = var13.Error;
                    var15 = var13.prototype;
                    var15 = Object.create(var15, {constructor: {value: var13}});
                    var19 = var15;
                    var13 = new var19[var13](var18);
                    var13 = var13 instanceof Object ? var13 : var15;
                    var15 = var13.stack;
                    var14 = var15;
                    var13 = null;
                    var15 = var13 != var15;
                    var13 = '';
                    if(!var15) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var13 = var14;
case 59:
                    var12['stack_trace'] = var13;
                    var13 = true;
                    var12['is_playtime_eligible'] = var13;
                    var11['properties'] = var12;
                    var4['trackedActionData'] = var11;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=293);
case 61:
                    return var4;
case 62:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 6;
                    var5 = var12[var5];
                    var9 = var6.bind(var3)(var5);
                    var6 = var9.dispatch;
                    var5 = {};
                    var11 = 'QUESTS_SEND_HEARTBEAT_SUCCESS';
                    var5['type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = 10;
                    var10 = var12[var10];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.questUserStatusFromServer;
                    var10 = var4.body;
                    var10 = var11.bind(var12)(var10);
                    var5['userStatus'] = var10;
                    var10 = var8;
                    var5['questId'] = var10;
                    var10 = var7;
                    var5['streamKey'] = var10;
                    var5 = var6.bind(var9)(var5);
case 65: // try_end0
                    _fun0006_ip = 66; continue _fun0006;
case 63:
                    return var4;
case 67: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 6;
                    var4 = var12[var4];
                    var6 = var10.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'QUESTS_SEND_HEARTBEAT_FAILURE';
                    var4['type'] = var9;
                    var9 = 7;
                    var9 = var12[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var19 = var10;
                    var18 = var11;
                    var9 = new var19[var9](var18, var17);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var4['error'] = var9;
                    var4['questId'] = var8;
                    var4['streamKey'] = var7;
                    var4 = var5.bind(var6)(var4);
case 66:
                    return var3;
case 57:
                    return var2;
case 52:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _enrollInQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 68; continue _fun0007 }
case 3:
                    var10 = arg1;
                    var4 = var2;
                    var6 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var2 = var2.questContentCTA;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0007_ip = 69; continue _fun0007 }
case 7:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var2 = var5[var2];
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.trackQuestContentClicked;
                    var2 = {};
                    var8 = var10;
                    var2['questId'] = var8;
                    var8 = var4;
                    var9 = var8.questContent;
                    var2['questContent'] = var9;
                    var9 = var8.questContentCTA;
                    var2['questContentCTA'] = var9;
                    var9 = var8.questContentPosition;
                    var2['questContentPosition'] = var9;
                    var9 = var8.questContentRowIndex;
                    var2['questContentRowIndex'] = var9;
                    var8 = var8.sourceQuestContent;
                    var2['sourceQuestContent'] = var8;
                    var2 = var3.bind(var5)(var2);
case 69:
                    var5 = var10;
                    var2 = _closure1_slot8;
                    if(!(var5 === var2)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 15;
                    var2 = var8[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.dismissOrbsOnboardingExperience;
                    var2 = var2.bind(var5)();
case 70:
                    var5 = var10;
                    var2 = _closure1_slot7;
                    if(!(var5 === var2)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 15;
                    var2 = var8[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.dismissMobileOrbsOnboardingExperience;
                    var2 = var2.bind(var5)();
case 72:
                    var8 = _closure1_slot4;
                    var5 = var8.isEnrolling;
                    var2 = var10;
                    var2 = var5.bind(var8)(var2);
                    if(var2) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var5 = var5[var2];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var13 = 'QUESTS_ENROLL_BEGIN';
                    var5['type'] = var13;
                    var13 = var10;
                    var5['questId'] = var13;
                    var5 = var8.bind(var9)(var5);
case 76: // try_start_0
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var15 = 16;
                    var5 = var18[var15];
                    var8 = var16.bind(var6)(var5);
                    var5 = var8.getAdMetadataRaw;
                    var14 = var4;
                    var4 = var14.questContent;
                    var13 = var5.bind(var8)(var4);
                    var12 = var13;
                    var4 = var18[var15];
                    var8 = var16.bind(var6)(var4);
                    var5 = var8.getAdMetadataSealed;
                    var4 = var14.questContent;
                    var11 = var5.bind(var8)(var4);
                    var4 = 5;
                    var4 = var18[var4];
                    var4 = var16.bind(var6)(var4);
                    var8 = var4.HTTP;
                    var5 = var8.post;
                    var4 = {};
                    var19 = _closure1_slot10;
                    var9 = var19.QUESTS_ENROLL;
                    var17 = var10;
                    var9 = var9.bind(var19)(var17);
                    var4['url'] = var9;
                    var9 = {};
                    var19 = var14.questContent;
                    var9['location'] = var19;
                    var15 = var18[var15];
                    var16 = var16.bind(var6)(var15);
                    var15 = var16.getAdDecisionData;
                    var14 = var14.questContent;
                    var20 = var15.bind(var16)(var17, var14);
                    var21 = var9;
                    var14 = copyDataProperties(var21, var20);
                    var14 = var7 != var13;
                    var13 = null;
                    if(!var14) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                    var13 = var12;
case 77:
                    var12 = 'metadata_raw';
                    var9[var12] = var13;
                    var12 = var11;
                    var13 = var7 != var12;
                    var12 = null;
                    if(!var13) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var12 = var11;
case 79:
                    var11 = 'metadata_sealed';
                    var9[var11] = var12;
                    var4['body'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var8)(var4);
                    SaveGenerator(address=524);
case 81:
                    return var4;
case 82:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var5 = var13[var2];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var11 = 'QUESTS_ENROLL_SUCCESS';
                    var5['type'] = var11;
                    var12 = _closure1_slot0;
                    var11 = 10;
                    var11 = var13[var11];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.questUserStatusFromServer;
                    var11 = var4.body;
                    var11 = var12.bind(var13)(var11);
                    var5['enrolledQuestUserStatus'] = var11;
                    var5 = var8.bind(var9)(var5);
                    var5 = {};
                    var8 = _closure1_slot11;
                    var8 = var8.SUCCESS;
                    var5['type'] = var8;
case 85: // try_end0
                    return var5;
case 83:
                    return var4;
case 86: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = var5[var2];
                    var9 = var4.bind(var6)(var2);
                    var4 = var9.dispatch;
                    var2 = {};
                    var11 = 'QUESTS_ENROLL_FAILURE';
                    var2['type'] = var11;
                    var2['questId'] = var10;
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 13;
                    var2 = var5[var2];
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.CaptchaCancelError;
                    var2 = var8 instanceof var2;
                    if(var2) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                    var4 = var7 != var8;
                    if(!var4) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                    var9 = 'object';
                    var5 = typeof var8;
                    var4 = var9 === var5;
case 89:
                    if(!var4) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var9 = var8.status;
                    var5 = 400;
                    var5 = var5 === var9;
                    if(!var5) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var10 = var8.body;
                    var11 = var7 == var10;
                    var9 = undefined;
                    if(var11) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                    var9 = var10.captcha_key;
case 95:
                    var5 = var7 != var9;
case 93:
                    if(var5) { _fun0007_ip = 97; continue _fun0007 }
case 98:
                    var9 = var8.captchaFields;
                    var9 = var7 != var9;
                    if(!var9) { _fun0007_ip = 99; continue _fun0007 }
case 100:
                    var10 = global;
                    var12 = var10.Object;
                    var11 = var12.keys;
                    var10 = var8.captchaFields;
                    var10 = var11.bind(var12)(var10);
                    var11 = var10.length;
                    var10 = 0;
                    var9 = var11 > var10;
case 99:
                    var5 = var9;
case 97:
                    if(var5) { _fun0007_ip = 101; continue _fun0007 }
case 102:
                    var8 = var8.fields;
                    var9 = var7 == var8;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 103; continue _fun0007 }
case 104:
                    var6 = var8.captcha_key;
case 103:
                    var5 = var7 != var6;
case 101:
                    var4 = var5;
case 91:
                    var2 = var4;
case 87:
                    var4 = {};
                    var5 = _closure1_slot11;
                    if(var2) { _fun0007_ip = 105; continue _fun0007 }
case 106:
                    var2 = var5.UNKNOWN_ERROR;
                    var4['type'] = var2;
                    var2 = var4;
                    _fun0007_ip = 107; continue _fun0007;
case 105:
                    var5 = var5.CAPTCHA_FAILED;
                    var4['type'] = var5;
                    var2 = var4;
case 107:
                    return var2;
case 74:
                    var2 = {};
                    var3 = _closure1_slot11;
                    var3 = var3.PREVIOUS_IN_FLIGHT_REQUEST;
                    var2['type'] = var3;
                    return var2;
case 68:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _claimQuestReward() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 108; continue _fun0008 }
case 3:
                    var7 = var8;
                    var19 = arg2;
                    var9 = arg3;
                    var2 = undefined;
                    var13 = undefined;
                    var11 = undefined;
                    var6 = undefined;
                    var4 = _closure1_slot4;
                    var3 = var4.isClaimingReward;
                    var3 = var3.bind(var4)(var8);
                    if(var3) { _fun0008_ip = 109; continue _fun0008 }
case 110:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 6;
                    var3 = var3[var4];
                    var10 = var8.bind(var2)(var3);
                    var8 = var10.dispatch;
                    var3 = {};
                    var12 = 'QUESTS_CLAIM_REWARD_BEGIN';
                    var3['type'] = var12;
                    var12 = var7;
                    var3['questId'] = var12;
                    var3 = var8.bind(var10)(var3);
case 111: // try_start_0
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 16;
                    var3 = var18[var12];
                    var8 = var15.bind(var2)(var3);
                    var3 = var8.getAdMetadataRaw;
                    var17 = var9;
                    var14 = var3.bind(var8)(var17);
                    var13 = var14;
                    var3 = var18[var12];
                    var8 = var15.bind(var2)(var3);
                    var3 = var8.getAdMetadataSealed;
                    var11 = var3.bind(var8)(var17);
                    var3 = 5;
                    var3 = var18[var3];
                    var3 = var15.bind(var2)(var3);
                    var9 = var3.HTTP;
                    var8 = var9.post;
                    var3 = {};
                    var20 = _closure1_slot10;
                    var10 = var20.QUESTS_CLAIM_REWARD;
                    var16 = var7;
                    var10 = var10.bind(var20)(var16);
                    var3['url'] = var10;
                    var10 = {};
                    var10['platform'] = var19;
                    var10['location'] = var17;
                    var12 = var18[var12];
                    var15 = var15.bind(var2)(var12);
                    var12 = var15.getAdDecisionData;
                    var21 = var12.bind(var15)(var16, var17);
                    var22 = var10;
                    var12 = copyDataProperties(var22, var21);
                    var12 = null;
                    var15 = var12 != var14;
                    var14 = null;
                    if(!var15) { _fun0008_ip = 112; continue _fun0008 }
case 113:
                    var14 = var13;
case 112:
                    var13 = 'metadata_raw';
                    var10[var13] = var14;
                    var13 = var11;
                    var13 = var12 != var13;
                    var12 = null;
                    if(!var13) { _fun0008_ip = 114; continue _fun0008 }
case 115:
                    var12 = var11;
case 114:
                    var11 = 'metadata_sealed';
                    var10[var11] = var12;
                    var3['body'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=313);
case 116:
                    return var3;
case 117:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 57; continue _fun0008 }
case 118:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 10;
                    var8 = var10[var8];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.questsEntitlementsFromServer;
                    var8 = var3.body;
                    var8 = var9.bind(var10)(var8);
                    var6 = var8;
                    var8 = var8.errors;
                    var9 = var8.length;
                    var8 = 0;
                    if(!(var8 !== var9)) { _fun0008_ip = 119; continue _fun0008 }
case 120:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var4];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'QUESTS_CLAIM_REWARD_FAILURE';
                    var8['type'] = var11;
                    var11 = var6;
                    var11 = var11.errors;
                    var8['error'] = var11;
                    var11 = var7;
                    var8['questId'] = var11;
                    var8 = var9.bind(var10)(var8);
                    _fun0008_ip = 66; continue _fun0008;
case 119:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var4];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'QUESTS_CLAIM_REWARD_SUCCESS';
                    var8['type'] = var11;
                    var11 = var7;
                    var8['questId'] = var11;
                    var11 = var6;
                    var8['entitlements'] = var11;
                    var8 = var9.bind(var10)(var8);
case 66: // try_end0
                    return var6;
case 57:
                    return var3;
case 52: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = var10[var4];
                    var6 = var9.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'QUESTS_CLAIM_REWARD_FAILURE';
                    var4['type'] = var8;
                    var8 = 7;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var23 = var9;
                    var22 = var3;
                    var8 = new var23[var8](var22, var21);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4['error'] = var8;
                    var4['questId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 109:
                    return var2;
case 108:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _fetchQuestRewardCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 121; continue _fun0009 }
case 3:
                    var6 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.isFetchingRewardCode;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0009_ip = 122; continue _fun0009 }
case 123:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 6;
                    var2 = var2[var3];
                    var9 = undefined;
                    var7 = var5.bind(var9)(var2);
                    var5 = var7.dispatch;
                    var2 = {};
                    var8 = 'QUESTS_FETCH_REWARD_CODE_BEGIN';
                    var2['type'] = var8;
                    var8 = var6;
                    var2['questId'] = var8;
                    var2 = var5.bind(var7)(var2);
case 124: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot10;
                    var10 = var11.QUESTS_REWARD_CODE;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=161);
case 125:
                    return var2;
case 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 60; continue _fun0009 }
case 127:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = var12[var3];
                    var8 = var7.bind(var9)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var10 = 'QUESTS_FETCH_REWARD_CODE_SUCCESS';
                    var5['type'] = var10;
                    var10 = var6;
                    var5['questId'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 10;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.questsRewardCodeFromServer;
                    var10 = var2.body;
                    var10 = var11.bind(var12)(var10);
                    var5['rewardCode'] = var10;
                    var5 = var7.bind(var8)(var5);
case 128: // try_end0
                    _fun0009_ip = 122; continue _fun0009;
case 60:
                    return var2;
case 59: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_REWARD_CODE_FAILURE';
                    var3['type'] = var7;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var14 = var8;
                    var13 = var2;
                    var7 = new var14[var7](var13, var12);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['questId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 122:
                    var2 = undefined;
                    return var2;
case 121:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _dismissQuestContent() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 129; continue _fun0010 }
case 130:
                    var6 = var5;
                    var12 = var8;
                    var3 = _closure1_slot4;
                    var2 = var3.isDismissingContent;
                    var5 = var2.bind(var3)(var5);
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var14 = 16;
                    var3 = var2[var14];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var3);
                    var3 = var7.isDismissible;
                    var3 = var3.bind(var7)(var8);
                    if(var5) { _fun0010_ip = 131; continue _fun0010 }
case 132:
                    if(!var3) { _fun0010_ip = 131; continue _fun0010 }
case 133:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var5 = var5[var3];
                    var8 = var7.bind(var2)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var9 = 'QUESTS_DISMISS_CONTENT_BEGIN';
                    var5['type'] = var9;
                    var9 = var6;
                    var5['questId'] = var9;
                    var9 = var12;
                    var5['content'] = var9;
                    var5 = var7.bind(var8)(var5);
case 134: // try_start_0
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var5 = var10[var5];
                    var5 = var11.bind(var2)(var5);
                    var8 = var5.HTTP;
                    var7 = var8.post;
                    var5 = {};
                    var15 = _closure1_slot10;
                    var9 = var15.QUESTS_DISMISS_CONTENT;
                    var13 = var6;
                    var9 = var9.bind(var15)(var13, var12);
                    var5['url'] = var9;
                    var9 = {};
                    var10 = var10[var14];
                    var11 = var11.bind(var2)(var10);
                    var10 = var11.getAdDecisionData;
                    var16 = var10.bind(var11)(var13, var12);
                    var17 = var9;
                    var10 = copyDataProperties(var17, var16);
                    var5['body'] = var9;
                    var9 = false;
                    var5['rejectWithError'] = var9;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=249);
case 135:
                    return var5;
case 136:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 137; continue _fun0010 }
case 138:
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = var12[var3];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'QUESTS_DISMISS_CONTENT_SUCCESS';
                    var7['type'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 10;
                    var10 = var12[var10];
                    var12 = var11.bind(var2)(var10);
                    var11 = var12.questUserStatusFromServer;
                    var10 = var5.body;
                    var10 = var11.bind(var12)(var10);
                    var7['dismissedQuestUserStatus'] = var10;
                    var7 = var8.bind(var9)(var7);
case 139: // try_end0
                    _fun0010_ip = 131; continue _fun0010;
case 137:
                    return var5;
case 140: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_DISMISS_CONTENT_FAILURE';
                    var3['type'] = var7;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var18 = var8;
                    var17 = var9;
                    var7 = new var18[var7](var17, var16);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['questId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 131:
                    return var2;
case 129:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _completeQuestPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 141; continue _fun0011 }
case 3:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0011_ip = 142; continue _fun0011 }
case 5:
                    var2 = 1;
case 142:
                    var10 = var2;
                    SaveGenerator(address=32);
case 143:
                    return var3;
case 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 145; continue _fun0011 }
case 146: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var12 = _closure1_slot10;
                    var11 = var12.QUESTS_PREVIEW_COMPLETE;
                    var8 = var7;
                    var8 = var11.bind(var12)(var8);
                    var4['url'] = var8;
                    var8 = {};
                    var8['percent'] = var10;
                    var4['body'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=125);
case 147:
                    return var4;
case 148:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 149; continue _fun0011 }
case 150:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 6;
                    var5 = var11[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var10 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var5['type'] = var10;
                    var10 = _closure1_slot0;
                    var9 = 10;
                    var9 = var11[var9];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.questUserStatusFromServer;
                    var9 = var4.body;
                    var9 = var10.bind(var11)(var9);
                    var5['previewQuestUserStatus'] = var9;
                    var5 = var6.bind(var8)(var5);
case 151: // try_end0
                    _fun0011_ip = 152; continue _fun0011;
case 149:
                    return var4;
case 153: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 6;
                    var4 = var11[var4];
                    var6 = var9.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    var4['type'] = var8;
                    var8 = 7;
                    var8 = var11[var8];
                    var8 = var9.bind(var3)(var8);
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var14 = var9;
                    var13 = var10;
                    var8 = new var14[var8](var13, var12);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4['error'] = var8;
                    var4['questId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 152:
                    return var3;
case 145:
                    return var2;
case 141:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _resetQuestPreviewStatus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 115; continue _fun0012 }
case 154:
                    var5 = arg1;
case 3: // try_start_0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var9 = undefined;
                    var2 = var3.bind(var9)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var10 = _closure1_slot10;
                    var8 = var10.QUESTS_PREVIEW_STATUS;
                    var6 = var5;
                    var6 = var8.bind(var10)(var6);
                    var2['url'] = var6;
                    var6 = {};
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=94);
case 124:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 155; continue _fun0012 }
case 156:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var3['type'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 10;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.questUserStatusFromServer;
                    var7 = var2.body;
                    var7 = var8.bind(var9)(var7);
                    var3['previewQuestUserStatus'] = var7;
                    var3 = var4.bind(var6)(var3);
case 157: // try_end0
                    _fun0012_ip = 158; continue _fun0012;
case 155:
                    return var2;
case 159: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 6;
                    var2 = var10[var2];
                    var7 = undefined;
                    var4 = var9.bind(var7)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    var2['type'] = var6;
                    var6 = 7;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var12 = var7;
                    var11 = var8;
                    var6 = new var12[var6](var11, var10);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var2['error'] = var6;
                    var2['questId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 158:
                    var2 = undefined;
                    return var2;
case 115:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _resetQuestDismissibilityStatus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 160; continue _fun0013 }
case 154:
                    var5 = arg1;
case 3: // try_start_0
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var2 = var6[var3];
                    var9 = undefined;
                    var8 = var4.bind(var9)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var10 = 'QUESTS_DOCK_RESET_SOFT_DISMISSAL';
                    var2['type'] = var10;
                    var2 = var4.bind(var8)(var2);
                    var4 = _closure1_slot0;
                    var2 = 5;
                    var2 = var6[var2];
                    var2 = var4.bind(var9)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.del;
                    var2 = {};
                    var11 = _closure1_slot10;
                    var10 = var11.QUESTS_PREVIEW_DISMISSIBILITY;
                    var8 = var5;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=132);
case 161:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 162; continue _fun0013 }
case 163:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var3['type'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 10;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.questUserStatusFromServer;
                    var7 = var2.body;
                    var7 = var8.bind(var9)(var7);
                    var3['previewQuestUserStatus'] = var7;
                    var3 = var4.bind(var6)(var3);
case 164: // try_end0
                    _fun0013_ip = 141; continue _fun0013;
case 162:
                    return var2;
case 165: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 6;
                    var2 = var10[var2];
                    var7 = undefined;
                    var4 = var9.bind(var7)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    var2['type'] = var6;
                    var6 = 7;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var13 = var7;
                    var12 = var8;
                    var6 = new var13[var6](var12, var11);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var2['error'] = var6;
                    var2['questId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 141:
                    var2 = undefined;
                    return var2;
case 160:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _fetchClaimedQuests() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 166; continue _fun0014 }
case 154:
                    var2 = _closure1_slot4;
                    var2 = var2.isFetchingClaimedQuests;
                    if(var2) { _fun0014_ip = 51; continue _fun0014 }
case 167:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var8 = undefined;
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
case 42: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var8)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.QUESTS_CLAIMED_QUESTS;
                    var4['url'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=134);
case 43:
                    return var4;
case 44:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 164; continue _fun0014 }
case 168:
                    var5 = var4.body;
                    var7 = var5.quests;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getClaimedQuestWithUserStatusFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var6.bind(var7)(var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var2];
                    var7 = var6.bind(var8)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var10 = 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS';
                    var5['type'] = var10;
                    var5['quests'] = var9;
                    var5 = var6.bind(var7)(var5);
case 149: // try_end0
                    _fun0014_ip = 51; continue _fun0014;
case 164:
                    return var4;
case 169: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = var9[var2];
                    var4 = var6.bind(var8)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE';
                    var2['type'] = var5;
                    var5 = 7;
                    var5 = var9[var5];
                    var5 = var6.bind(var8)(var5);
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var12 = var6;
                    var11 = var7;
                    var5 = new var12[var5](var11, var10);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2['error'] = var5;
                    var2 = var3.bind(var4)(var2);
case 51:
                    var2 = undefined;
                    return var2;
case 166:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _fetchQuestToDeliver() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var15 = arg1;
                    var16 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 170; continue _fun0015 }
case 130:
                    var6 = var15;
                    var13 = var16;
                    var2 = undefined;
                    var21 = undefined;
                    var30 = undefined;
                    var29 = undefined;
                    var28 = undefined;
                    var27 = undefined;
                    var26 = undefined;
                    var25 = undefined;
                    var23 = undefined;
                    var34 = undefined;
                    var22 = undefined;
                    var18 = undefined;
                    var14 = undefined;
                    var20 = undefined;
                    var8 = undefined;
                    var19 = global;
                    var4 = var19.Date;
                    var3 = var4.now;
                    var21 = var3.bind(var4)();
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 17;
                    var3 = var5[var4];
                    var12 = var10.bind(var2)(var3);
                    var3 = var12.recordQuestRequestAttempt;
                    var11 = '/quests/decision';
                    var3 = var3.bind(var12)(var11, var16, var15);
                    var3 = 6;
                    var5 = var5[var3];
                    var12 = var10.bind(var2)(var5);
                    var10 = var12.dispatch;
                    var5 = {};
                    var16 = 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN';
                    var5['type'] = var16;
                    var5['placement'] = var15;
                    var5 = var10.bind(var12)(var5);
case 171: // try_start_0
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 18;
                    var5 = var12[var5];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.getSession;
                    var5 = var5.bind(var10)();
                    SaveGenerator(address=186);
case 159:
                    return var5;
case 172:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0015_ip = 173; continue _fun0015 }
case 174:
                    var34 = var5;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 19;
                    var10 = var15[var10];
                    var12 = var12.bind(var2)(var10);
                    var10 = var12.getOrRefreshAdSession;
                    var10 = var10.bind(var12)();
                    SaveGenerator(address=232);
case 175:
                    return var10;
case 176:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 177; continue _fun0015 }
case 178:
                    var22 = var10;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 5;
                    var12 = var16[var12];
                    var12 = var15.bind(var2)(var12);
                    var17 = var12.HTTP;
                    var16 = var17.get;
                    var12 = {};
                    var33 = _closure1_slot10;
                    var32 = var33.QUEST_FETCH_QUEST_TO_DELIVER;
                    var31 = var6;
                    var24 = var34;
                    var15 = null;
                    var35 = var15 == var24;
                    var24 = undefined;
                    if(var35) { _fun0015_ip = 145; continue _fun0015 }
case 179:
                    var24 = var34.uuid;
case 145:
                    var22 = var22.uuid;
                    var22 = var32.bind(var33)(var31, var24, var22);
                    var12['url'] = var22;
                    var22 = false;
                    var12['rejectWithError'] = var22;
                    var12 = var16.bind(var17)(var12);
                    SaveGenerator(address=341);
case 180:
                    return var12;
case 181:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                    if(var16) { _fun0015_ip = 182; continue _fun0015 }
case 183:
                    var16 = var12.body;
                    var18 = var16;
                    var16 = var16.quest;
                    var14 = var16;
                    var16 = var15 != var16;
                    var22 = undefined;
                    if(!var16) { _fun0015_ip = 184; continue _fun0015 }
case 24:
                    var17 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var16 = 10;
                    var16 = var24[var16];
                    var17 = var17.bind(var2)(var16);
                    var16 = var17.questConfigFromServer;
                    var22 = var16.bind(var17)(var14);
case 184:
                    var20 = var22;
                    var16 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var3];
                    var17 = var16.bind(var2)(var14);
                    var16 = var17.dispatch;
                    var14 = {};
                    var24 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                    var14['type'] = var24;
                    var14['quest'] = var22;
                    var24 = {};
                    var22 = var18;
                    var22 = var22.ad_identifiers;
                    var30 = var22;
                    var31 = var15 == var22;
                    var22 = undefined;
                    if(var31) { _fun0015_ip = 185; continue _fun0015 }
case 77:
                    var22 = var30.ad_id;
case 185:
                    var24['ad_id'] = var22;
                    var22 = var18;
                    var22 = var22.ad_identifiers;
                    var29 = var22;
                    var30 = var15 == var22;
                    var22 = undefined;
                    if(var30) { _fun0015_ip = 186; continue _fun0015 }
case 187:
                    var22 = var29.adset_id;
case 186:
                    var24['adset_id'] = var22;
                    var22 = var18;
                    var22 = var22.ad_identifiers;
                    var28 = var22;
                    var29 = var15 == var22;
                    var22 = undefined;
                    if(var29) { _fun0015_ip = 188; continue _fun0015 }
case 189:
                    var22 = var28.ad_set_id;
case 188:
                    var24['ad_set_id'] = var22;
                    var22 = var18;
                    var22 = var22.ad_identifiers;
                    var27 = var22;
                    var28 = var15 == var22;
                    var22 = undefined;
                    if(var28) { _fun0015_ip = 190; continue _fun0015 }
case 191:
                    var22 = var27.campaign_id;
case 190:
                    var24['campaign_id'] = var22;
                    var22 = var18;
                    var22 = var22.ad_identifiers;
                    var26 = var22;
                    var27 = var15 == var22;
                    var22 = undefined;
                    if(var27) { _fun0015_ip = 192; continue _fun0015 }
case 193:
                    var22 = var26.creative_id;
case 192:
                    var24['creative_id'] = var22;
                    var22 = var18;
                    var22 = var22.ad_identifiers;
                    var25 = var22;
                    var26 = var15 == var22;
                    var22 = undefined;
                    if(var26) { _fun0015_ip = 194; continue _fun0015 }
case 195:
                    var22 = var25.creative_type;
case 194:
                    var24['creative_type'] = var22;
                    var22 = var18;
                    var25 = var22.request_id;
                    var24['decision_id'] = var25;
                    var25 = var22.ad_identifiers;
                    var25 = var15 != var25;
                    var24['is_targeted'] = var25;
                    var14['adDecisionData'] = var24;
                    var24 = var22.metadata_raw;
                    var14['metadataRaw'] = var24;
                    var24 = var22.metadata_sealed;
                    var14['metadataSealed'] = var24;
                    var24 = var22.ad_context;
                    var14['adContext'] = var24;
                    var24 = var22.response_ttl_seconds;
                    var14['responseTtlSeconds'] = var24;
                    var24 = var6;
                    var14['placement'] = var24;
                    var24 = var21;
                    var14['fetchedAt'] = var24;
                    var14 = var16.bind(var17)(var14);
                    var16 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var4];
                    var17 = var16.bind(var2)(var14);
                    var16 = var17.recordQuestRequestApiResponse;
                    var14 = {};
                    var24 = true;
                    var14['wasSuccessful'] = var24;
                    var24 = var19.String;
                    var22 = var22.request_id;
                    var22 = var24.bind(var2)(var22);
                    var14['adRequestId'] = var22;
                    var22 = var20;
                    var24 = var15 == var22;
                    var22 = undefined;
                    if(var24) { _fun0015_ip = 196; continue _fun0015 }
case 197:
                    var24 = var20;
                    var22 = var24.id;
case 196:
                    var23 = var22;
                    var24 = var15 != var22;
                    var22 = null;
                    if(!var24) { _fun0015_ip = 198; continue _fun0015 }
case 199:
                    var22 = var23;
case 198:
                    var14['currentQuestId'] = var22;
                    var14['currentFetchedAt'] = var21;
                    var14 = var16.bind(var17)(var11, var14);
                    var14 = var20;
                    if(!(var15 != var14)) { _fun0015_ip = 200; continue _fun0015 }
case 201:
                    var15 = var6;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var14 = 8;
                    var14 = var17[var14];
                    var14 = var16.bind(var2)(var14);
                    var14 = var14.QuestPlacement;
                    var14 = var14.DESKTOP_ACCOUNT_PANEL_AREA;
                    if(!(var15 === var14)) { _fun0015_ip = 202; continue _fun0015 }
case 74:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 20;
                    var14 = var16[var14];
                    var16 = var15.bind(var2)(var14);
                    var15 = var16.startTracking;
                    var14 = var20;
                    var14 = var14.id;
                    var14 = var15.bind(var16)(var14);
case 202:
                    var22 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var14 = 21;
                    var14 = var23[var14];
                    var17 = var22.bind(var2)(var14);
                    var16 = var17.track;
                    var14 = _closure1_slot9;
                    var15 = var14.QUEST_DECISION_RECEIVED;
                    var14 = {};
                    var21 = 22;
                    var21 = var23[var21];
                    var21 = var22.bind(var2)(var21);
                    var37 = var21.bind(var2)();
                    var38 = var14;
                    var21 = copyDataProperties(var38, var37);
                    var21 = var20.id;
                    var20 = 'quest_id';
                    var14[var20] = var21;
                    var21 = var13;
                    var20 = 'caller_source';
                    var14[var20] = var21;
                    var19 = var19.String;
                    var18 = var18.request_id;
                    var19 = var19.bind(var2)(var18);
                    var18 = 'ad_request_id';
                    var14[var18] = var19;
                    var14 = var16.bind(var17)(var15, var14);
case 203: // try_end0
                    _fun0015_ip = 204; continue _fun0015;
case 200:
                    return var2;
case 182:
                    return var12;
case 177:
                    return var10;
case 173:
                    return var5;
case 205: // catch_target0
                    CatchBlockStart(arg_register=13);
                    var9 = var14;
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = var16[var4];
                    var10 = var15.bind(var2)(var4);
                    var5 = var10.recordQuestRequestApiResponse;
                    var4 = {};
                    var12 = false;
                    var4['wasSuccessful'] = var12;
                    var4 = var5.bind(var10)(var11, var4);
                    var4 = 21;
                    var4 = var16[var4];
                    var12 = var15.bind(var2)(var4);
                    var11 = var12.track;
                    var4 = _closure1_slot9;
                    var5 = var4.QUEST_DECISION_ROUNDTRIP_ERROR;
                    var4 = {};
                    var10 = 22;
                    var10 = var16[var10];
                    var10 = var15.bind(var2)(var10);
                    var37 = var10.bind(var2)();
                    var38 = var4;
                    var10 = copyDataProperties(var38, var37);
                    var10 = null;
                    var15 = var10 == var14;
                    var14 = undefined;
                    if(var15) { _fun0015_ip = 206; continue _fun0015 }
case 207:
                    var15 = var9;
                    var14 = var15.message;
case 206:
                    var8 = var14;
                    var14 = var10 != var14;
                    var10 = null;
                    if(!var14) { _fun0015_ip = 208; continue _fun0015 }
case 209:
                    var10 = var8;
case 208:
                    var8 = 'reason';
                    var4[var8] = var10;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var14 = var10[var7];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.prototype;
                    var15 = Object.create(var15, {constructor: {value: var14}});
                    var39 = var15;
                    var38 = var9;
                    var14 = new var39[var14](var38, var37);
                    var15 = var14 instanceof Object ? var14 : var15;
                    var14 = var15.getAnyErrorMessage;
                    var15 = var14.bind(var15)();
                    var14 = 'api_error';
                    var4[var14] = var15;
                    var14 = var13;
                    var13 = 'caller_source';
                    var4[var13] = var14;
                    var4 = var11.bind(var12)(var5, var4);
                    var3 = var10[var3];
                    var5 = var8.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var11 = 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE';
                    var3['type'] = var11;
                    var7 = var10[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var39 = var8;
                    var38 = var9;
                    var7 = new var39[var7](var38, var37);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['placement'] = var6;
                    var3 = var4.bind(var5)(var3);
case 204:
                    return var2;
case 170:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _fetchEarnedQuestToDeliver() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 187; continue _fun0016 }
case 3:
                    var7 = arg1;
                    var6 = var12;
                    var2 = undefined;
                    var18 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var5 = var5[var3];
                    var11 = var10.bind(var2)(var5);
                    var10 = var11.dispatch;
                    var5 = {};
                    var13 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN';
                    var5['type'] = var13;
                    var5['content'] = var12;
                    var5 = var10.bind(var11)(var5);
case 210: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 18;
                    var5 = var11[var5];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.getSession;
                    var5 = var5.bind(var10)();
                    SaveGenerator(address=110);
case 211:
                    return var5;
case 212:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0016_ip = 213; continue _fun0016 }
case 10:
                    var18 = var5;
                    var11 = var7;
                    var10 = var11.join;
                    var7 = ',';
                    var17 = var10.bind(var11)(var7);
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 5;
                    var7 = var11[var7];
                    var7 = var10.bind(var2)(var7);
                    var11 = var7.HTTP;
                    var10 = var11.get;
                    var7 = {};
                    var16 = _closure1_slot10;
                    var15 = var16.QUEST_EARNED_DECISION;
                    var14 = var6;
                    var12 = null;
                    var19 = var12 == var5;
                    var13 = undefined;
                    if(var19) { _fun0016_ip = 214; continue _fun0016 }
case 174:
                    var13 = var18.uuid;
case 214:
                    var13 = var15.bind(var16)(var17, var14, var13);
                    var7['url'] = var13;
                    var13 = false;
                    var7['rejectWithError'] = var13;
                    var7 = var10.bind(var11)(var7);
                    SaveGenerator(address=227);
case 215:
                    return var7;
case 216:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0016_ip = 217; continue _fun0016 }
case 218:
                    var8 = var7;
                    var10 = var7.body;
                    var10 = var10.quest;
                    var9 = var10;
                    var11 = var12 != var10;
                    var10 = null;
                    if(!var11) { _fun0016_ip = 219; continue _fun0016 }
case 220:
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var13 = 10;
                    var11 = var11[var13];
                    var15 = var14.bind(var2)(var11);
                    var14 = var15.isQuestWithKnownConfigVersion;
                    var11 = var9;
                    var11 = var14.bind(var15)(var11);
                    var10 = null;
                    if(!var11) { _fun0016_ip = 219; continue _fun0016 }
case 221:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var13];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.questWithUserStatusFromServer;
                    var10 = var11.bind(var12)(var9);
case 219:
                    var8 = var8.body;
                    var9 = var8.metadata_raw;
                    var11 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var3];
                    var12 = var11.bind(var2)(var8);
                    var11 = var12.dispatch;
                    var8 = {};
                    var13 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS';
                    var8['type'] = var13;
                    var8['quest'] = var10;
                    var8['metadataRaw'] = var9;
                    var13 = var6;
                    var8['content'] = var13;
                    var8 = var11.bind(var12)(var8);
                    var8 = {};
                    var8['quest'] = var10;
                    var8['metadataRaw'] = var9;
case 222: // try_end0
                    return var8;
case 217:
                    return var7;
case 213:
                    return var5;
case 223: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE';
                    var3['type'] = var7;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var23 = var8;
                    var22 = var9;
                    var7 = new var23[var7](var22, var21);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['content'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 187:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _updateVideoProgress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 224; continue _fun0017 }
case 130:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 11;
                    var2 = var11[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.post;
                    var2 = {};
                    var10 = _closure1_slot10;
                    var6 = var10.QUESTS_VIDEO_PROGRESS;
                    var6 = var6.bind(var10)(var8);
                    var2['url'] = var6;
                    var6 = {};
                    var6['timestamp'] = var9;
                    var2['body'] = var6;
                    var6 = {};
                    var10 = _closure1_slot0;
                    var7 = 12;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.NetworkActionNames;
                    var7 = var7.QUEST_VIDEO_PROGRESS;
                    var6['event'] = var7;
                    var7 = {};
                    var7['quest_id'] = var8;
                    var8 = var9.toString;
                    var8 = var8.bind(var9)();
                    var7['timestamp_sec'] = var8;
                    var8 = global;
                    var8 = var8.Error;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var13 = var9;
                    var8 = new var13[var8](var12);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var9 = var8.stack;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0017_ip = 19; continue _fun0017 }
case 159:
                    var8 = var9;
case 19:
                    var7['stack_trace'] = var8;
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=217);
case 153:
                    return var2;
case 169:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 225; continue _fun0017 }
case 226:
                    return var3;
case 225:
                    return var2;
case 224:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _fetchVideoTranscript() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var11 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 227; continue _fun0018 }
case 3:
                    var8 = arg1;
                    var3 = undefined;
                    if(!(var11 === var3)) { _fun0018_ip = 4; continue _fun0018 }
case 5:
                    var11 = false;
case 4:
                    var10 = undefined;
                    SaveGenerator(address=30);
case 228:
                    return var3;
case 143:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0018_ip = 229; continue _fun0018 }
case 230:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 23;
                    var5 = var13[var4];
                    var9 = var12.bind(var3)(var5);
                    var6 = var9.getQuestAsset;
                    var5 = var8;
                    var4 = var13[var4];
                    var4 = var12.bind(var3)(var4);
                    var4 = var4.QuestAssetType;
                    var16 = var4.VIDEO_PLAYER_TRANSCRIPT;
                    var18 = var9;
                    var17 = var5;
                    var15 = undefined;
                    var14 = var11;
                    var5 = var18[var6](var17, var16, var15, var14, var13);
                    var10 = var5;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0018_ip = 231; continue _fun0018 }
case 232:
                    var5 = _closure1_slot5;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setTranscriptAsset;
                    var4 = {};
                    var9 = var8;
                    var9 = var9.id;
                    var4['questId'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.FAILURE;
                    var4['fetchStatus'] = var9;
                    var4 = var5.bind(var6)(var4);
                    _fun0018_ip = 233; continue _fun0018;
case 231:
                    var5 = _closure1_slot5;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setTranscriptAsset;
                    var4 = {};
                    var9 = var8;
                    var9 = var9.id;
                    var4['questId'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.FETCHING;
                    var4['fetchStatus'] = var9;
                    var4 = var5.bind(var6)(var4);
case 234: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var9 = var10;
                    var9 = var9.url;
                    var4['url'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=290);
case 235:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0018_ip = 236; continue _fun0018 }
case 237:
                    var6 = _closure1_slot5;
                    var5 = var6.getState;
                    var9 = var5.bind(var6)();
                    var6 = var9.setTranscriptAsset;
                    var5 = {};
                    var11 = var8;
                    var11 = var11.id;
                    var5['questId'] = var11;
                    var11 = _closure1_slot6;
                    var11 = var11.SUCCESS;
                    var5['fetchStatus'] = var11;
                    var11 = var4.text;
                    var5['text'] = var11;
                    var10 = var10.url;
                    var5['url'] = var10;
                    var5 = var6.bind(var9)(var5);
case 238: // try_end0
                    _fun0018_ip = 233; continue _fun0018;
case 236:
                    return var4;
case 239: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot5;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setTranscriptAsset;
                    var4 = {};
                    var8 = var8.id;
                    var4['questId'] = var8;
                    var7 = _closure1_slot6;
                    var7 = var7.FAILURE;
                    var4['fetchStatus'] = var7;
                    var4 = var5.bind(var6)(var4);
case 233:
                    return var3;
case 229:
                    return var2;
case 227:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _fetchQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 43; continue _fun0019 }
case 154:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var8 = var9.QUEST;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=84);
case 31:
                    return var2;
case 240:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0019_ip = 241; continue _fun0019 }
case 242:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.questConfigFromServer;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 241:
                    return var2;
case 43:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _fetchQuestPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 121; continue _fun0020 }
case 3:
                    var6 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.isFetchingQuestPreview;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0020_ip = 122; continue _fun0020 }
case 123:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 6;
                    var2 = var2[var3];
                    var9 = undefined;
                    var7 = var5.bind(var9)(var2);
                    var5 = var7.dispatch;
                    var2 = {};
                    var8 = 'QUESTS_FETCH_PREVIEW_BEGIN';
                    var2['type'] = var8;
                    var8 = var6;
                    var2['questId'] = var8;
                    var2 = var5.bind(var7)(var2);
case 124: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot10;
                    var10 = var11.QUEST_PREVIEW;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=161);
case 125:
                    return var2;
case 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0020_ip = 60; continue _fun0020 }
case 127:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = var12[var3];
                    var8 = var7.bind(var9)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var10 = 'QUESTS_FETCH_PREVIEW_SUCCESS';
                    var5['type'] = var10;
                    var10 = var6;
                    var5['questId'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 10;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.questWithUserStatusFromServer;
                    var10 = var2.body;
                    var10 = var11.bind(var12)(var10);
                    var5['quest'] = var10;
                    var5 = var7.bind(var8)(var5);
case 128: // try_end0
                    _fun0020_ip = 122; continue _fun0020;
case 60:
                    return var2;
case 59: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_PREVIEW_FAILURE';
                    var3['type'] = var7;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var14 = var8;
                    var13 = var2;
                    var7 = new var14[var7](var13, var12);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['questId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 122:
                    var2 = undefined;
                    return var2;
case 121:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _fetchQuestHomeTakeover() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 243; continue _fun0021 }
case 154:
                    var3 = _closure1_slot4;
                    var2 = var3.isFetchingQuestHomeTakeover;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0021_ip = 244; continue _fun0021 }
case 49:
                    var3 = _closure1_slot4;
                    var2 = var3.getLastFetchedQuestHomeTakeover;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0021_ip = 133; continue _fun0021 }
case 245:
                    var2 = global;
                    var5 = var2.Date;
                    var2 = var5.now;
                    var2 = var2.bind(var5)();
                    var3 = var2 - var3;
                    var2 = _closure1_slot12;
                    if(!(!(var3 <= var2))) { _fun0021_ip = 244; continue _fun0021 }
case 133:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 6;
                    var2 = var2[var3];
                    var8 = undefined;
                    var6 = var5.bind(var8)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN';
                    var2['type'] = var7;
                    var2 = var5.bind(var6)(var2);
case 150: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 8;
                    var2 = var11[var9];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.QuestPlacementType;
                    var2 = var2.QUEST_HOME_BANNER;
                    var12 = new Array(1);
                    var12[0] = var2;
                    var2 = 5;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.QUEST_PLACEMENT;
                    var2['url'] = var7;
                    var7 = {};
                    var7['placements'] = var12;
                    var9 = var11[var9];
                    var9 = var10.bind(var8)(var9);
                    var9 = var9.QuestPlacementPlatform;
                    var9 = var9.WEB;
                    var7['platform'] = var9;
                    var2['query'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=261);
case 246:
                    return var2;
case 112:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 247; continue _fun0021 }
case 248:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = var11[var3];
                    var7 = var6.bind(var8)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS';
                    var5['type'] = var9;
                    var10 = _closure1_slot0;
                    var9 = 10;
                    var9 = var11[var9];
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.questHomeTakeoverConfigFromServer;
                    var9 = var2.body;
                    var9 = var10.bind(var11)(var9);
                    var5['takeover'] = var9;
                    var5 = var6.bind(var7)(var5);
case 122: // try_end0
                    _fun0021_ip = 244; continue _fun0021;
case 247:
                    return var2;
case 121: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var5 = var7.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE';
                    var3['type'] = var6;
                    var6 = 7;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var14 = var7;
                    var13 = var2;
                    var6 = new var14[var6](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 244:
                    var2 = undefined;
                    return var2;
case 243:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var5 = var7[var4];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.FetchStatus;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.MOBILE_ORBS_INTRO_QUEST_ID;
    var _closure1_slot7 = var5;
    var4 = var4.ORBS_INTRO_QUEST_ID;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot9 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'success';
    var4['SUCCESS'] = var5;
    var5 = 'captcha_failed';
    var4['CAPTCHA_FAILED'] = var5;
    var5 = 'unknown_error';
    var4['UNKNOWN_ERROR'] = var5;
    var5 = 'previous_in_flight_request';
    var4['PREVIOUS_IN_FLIGHT_REQUEST'] = var5;
    var _closure1_slot11 = var4;
    var5 = 24;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.MINUTE;
    var5 = 5;
    var5 = var5 * var8;
    var _closure1_slot12 = var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/QuestActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function manuallyStartConsoleQuest() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['manuallyStartConsoleQuest'] = var5;
    var5 = function manualStopConsoleQuest() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['manualStopConsoleQuest'] = var5;
    var5 = function resetRecentQuestCompletions() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resetRecentQuestCompletions'] = var5;
    var5 = function fetchCurrentQuests() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchCurrentQuests'] = var5;
    var5 = function sendHeartbeat() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendHeartbeat'] = var5;
    var3['QuestEnrollmentResultType'] = var4;
    var4 = function enrollInQuest() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['enrollInQuest'] = var4;
    var4 = function claimQuestReward() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimQuestReward'] = var4;
    var4 = function fetchQuestRewardCode() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestRewardCode'] = var4;
    var4 = function dismissQuestContent() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['dismissQuestContent'] = var4;
    var4 = function dismissProgressTrackingFailureNotice(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE';
        var2['type'] = var5;
        var5 = arg1;
        var2['streamKey'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissProgressTrackingFailureNotice'] = var4;
    var4 = function completeQuestPreview() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['completeQuestPreview'] = var4;
    var4 = function resetQuestPreviewStatus() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resetQuestPreviewStatus'] = var4;
    var4 = function resetQuestDismissibilityStatus() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resetQuestDismissibilityStatus'] = var4;
    var4 = function overrideQuestDelivery(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_DELIVERY_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['questId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['overrideQuestDelivery'] = var4;
    var4 = function selectTaskPlatform(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_SELECT_TASK_PLATFORM';
        var2['type'] = var5;
        var5 = arg1;
        var2['questId'] = var5;
        var5 = arg2;
        var2['platform'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['selectTaskPlatform'] = var4;
    var4 = function questsVisibleMobileMessagesChanged(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED';
        var2['type'] = var5;
        var5 = arg1;
        var2['payload'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['questsVisibleMobileMessagesChanged'] = var4;
    var4 = function fetchClaimedQuests() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchClaimedQuests'] = var4;
    var4 = function updateOptimisticProgress(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS';
        var2['type'] = var5;
        var5 = arg1;
        var2['questId'] = var5;
        var5 = arg2;
        var2['taskEventName'] = var5;
        var5 = arg3;
        var2['progress'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateOptimisticProgress'] = var4;
    var4 = function resetOptimisticProgress(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_RESET_OPTIMISTIC_PROGRESS';
        var2['type'] = var5;
        var5 = arg1;
        var2['questId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetOptimisticProgress'] = var4;
    var4 = function fetchQuestToDeliver() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestToDeliver'] = var4;
    var4 = function clearQuestAdDecision(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
        var2['type'] = var5;
        var2['quest'] = var1;
        var5 = arg1;
        var2['placement'] = var5;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var5 = var5.bind(var6)();
        var2['fetchedAt'] = var5;
        var6 = arg2;
        var5 = 1000;
        var5 = var6 / var5;
        var2['responseTtlSeconds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearQuestAdDecision'] = var4;
    var4 = function fetchEarnedQuestToDeliver() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchEarnedQuestToDeliver'] = var4;
    var4 = function updatePrevRestingQuestDockMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['mode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updatePrevRestingQuestDockMode'] = var4;
    var4 = function updateVideoProgress() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateVideoProgress'] = var4;
    var4 = function fetchVideoTranscript() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchVideoTranscript'] = var4;
    var4 = function updateQuestDockVisibilityOverride(arg1) {
        var1 = arg1;
        var5 = var1.isVisible;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE';
        var2['type'] = var6;
        var2['isVisible'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateQuestDockVisibilityOverride'] = var4;
    var4 = function fetchQuest() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuest'] = var4;
    var4 = function fetchQuestPreview() {
        var1 = undefined;
        var4 = _closure1_slot31;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestPreview'] = var4;
    var2 = function fetchQuestHomeTakeover() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestHomeTakeover'] = var2;
    return var1;
})();