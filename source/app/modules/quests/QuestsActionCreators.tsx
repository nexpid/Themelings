// app/modules/quests/QuestsActionCreators.tsx
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
                    var15 = _closure1_slot9;
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
                    SaveGenerator(address=146);
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
                    var5 = var5.xSCvBQ;
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
                    var4 = var4.Whhv4+;
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
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
                    var8 = _closure1_slot9;
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
                    var6 = _closure1_slot9;
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
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
                    var3 = _closure1_slot4;
                    var3 = var3.isFetchingCurrentQuests;
                    if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 6;
                    var6 = var3[var7];
                    var5 = undefined;
                    var10 = var8.bind(var5)(var6);
                    var9 = var10.dispatch;
                    var6 = {};
                    var11 = 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN';
                    var6['type'] = var11;
                    var6 = var9.bind(var10)(var6);
                    var6 = 10;
                    var3 = var3[var6];
                    var10 = var8.bind(var5)(var3);
                    var9 = var10.recordQuestRequestAttempt;
                    var3 = _closure1_slot9;
                    var8 = var3.QUESTS_CURRENT_QUESTS;
                    var3 = 'fetch_quests';
                    var3 = var9.bind(var10)(var8, var3);
case 42: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var3 = var8.bind(var5)(var3);
                    var9 = var3.HTTP;
                    var8 = var9.get;
                    var3 = {};
                    var10 = _closure1_slot9;
                    var10 = var10.QUESTS_CURRENT_QUESTS;
                    var3['url'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=174);
case 43:
                    return var3;
case 44:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var8 = var3.body;
                    var10 = var8.quests;
                    var9 = var10.filter;
                    var8 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isQuestWithKnownConfigVersion;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var9.bind(var10)(var8);
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.questWithUserStatusFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var9.bind(var10)(var8);
                    var8 = var3.body;
                    var12 = var8.quest_enrollment_blocked_until;
                    var8 = var9.filter;
                    var4 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.userStatus;
                            var3 = null;
                            var6 = var3 == var4;
                            var5 = undefined;
                            var1 = undefined;
                            if(var6) { _fun0005_ip = 47; continue _fun0005 }
case 5:
                            var1 = var4.claimedAt;
case 47:
                            var1 = var3 != var1;
                            if(var1) { _fun0005_ip = 48; continue _fun0005 }
case 6:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 12;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var4 = var3.SharedQuestFields;
                            var3 = var4.build;
                            var2 = var2.config;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.rewardPlatforms;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
case 48:
                            return var1;
                        }
                    };
                    var14 = var8.bind(var9)(var4);
                    var4 = var3.body;
                    var13 = var4.excluded_quests;
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = var4[var7];
                    var11 = var8.bind(var5)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var15 = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                    var9['type'] = var15;
                    var9['quests'] = var14;
                    var9['excludedQuests'] = var13;
                    var9['questEnrollmentBlockedUntil'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var4 = var4[var6];
                    var10 = var8.bind(var5)(var4);
                    var9 = var10.recordQuestRequestApiResponse;
                    var4 = _closure1_slot9;
                    var8 = var4.QUESTS_CURRENT_QUESTS;
                    var4 = {};
                    var11 = true;
                    var4['wasSuccessful'] = var11;
                    var4 = var9.bind(var10)(var8, var4);
case 49: // try_end0
                    _fun0004_ip = 40; continue _fun0004;
case 45:
                    return var3;
case 50: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = var3[var7];
                    var9 = var4.bind(var5)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE';
                    var7['type'] = var10;
                    var10 = 7;
                    var10 = var3[var10];
                    var10 = var4.bind(var5)(var10);
                    var11 = var10.prototype;
                    var11 = Object.create(var11, {constructor: {value: var10}});
                    var18 = var11;
                    var17 = var12;
                    var10 = new var18[var10](var17, var16);
                    var10 = var10 instanceof Object ? var10 : var11;
                    var7['error'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.recordQuestRequestApiResponse;
                    var2 = _closure1_slot9;
                    var3 = var2.QUESTS_CURRENT_QUESTS;
                    var2 = {};
                    var6 = false;
                    var2['wasSuccessful'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
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
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
                    if(var3) { _fun0006_ip = 51; continue _fun0006 }
case 3:
                    var8 = var2.questId;
                    var7 = var2.streamKey;
                    var12 = var2.applicationId;
                    var2 = var2.terminal;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var2 = false;
case 52:
                    var9 = var2;
                    var14 = undefined;
                    SaveGenerator(address=53);
case 54:
                    return var3;
case 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 56: // try_start_0
                    var5 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = 13;
                    var4 = var16[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.post;
                    var4 = {};
                    var15 = _closure1_slot9;
                    var11 = var15.QUESTS_HEARTBEAT;
                    var13 = var8;
                    var11 = var11.bind(var15)(var13);
                    var4['url'] = var11;
                    var11 = {};
                    var15 = var7;
                    var11['stream_key'] = var15;
                    var11['application_id'] = var12;
                    var11['terminal'] = var9;
                    var4['body'] = var11;
                    var11 = {};
                    var15 = _closure1_slot0;
                    var12 = 14;
                    var12 = var16[var12];
                    var12 = var15.bind(var3)(var12);
                    var12 = var12.NetworkActionNames;
                    var12 = var12.QUEST_HEARTBEAT;
                    var11['event'] = var12;
                    var12 = {};
                    var12['quest_id'] = var13;
                    var12['terminal'] = var9;
                    var9 = false;
                    var12['is_overlay'] = var9;
                    var13 = global;
                    var13 = var13.Error;
                    var15 = var13.prototype;
                    var15 = Object.create(var15, {constructor: {value: var13}});
                    var18 = var15;
                    var13 = new var18[var13](var17);
                    var13 = var13 instanceof Object ? var13 : var15;
                    var15 = var13.stack;
                    var14 = var15;
                    var13 = null;
                    var15 = var13 != var15;
                    var13 = '';
                    if(!var15) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var13 = var14;
case 57:
                    var12['stack_trace'] = var13;
                    var13 = true;
                    var12['is_playtime_eligible'] = var13;
                    var11['properties'] = var12;
                    var4['trackedActionData'] = var11;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=285);
case 59:
                    return var4;
case 60:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 61; continue _fun0006 }
case 18:
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
                    var10 = 11;
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
case 62: // try_end0
                    _fun0006_ip = 63; continue _fun0006;
case 61:
                    return var4;
case 64: // catch_target0
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
                    var18 = var10;
                    var17 = var11;
                    var9 = new var18[var9](var17, var16);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var4['error'] = var9;
                    var4['questId'] = var8;
                    var4['streamKey'] = var7;
                    var4 = var5.bind(var6)(var4);
case 63:
                    return var3;
case 38:
                    return var2;
case 51:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
                    if(var3) { _fun0007_ip = 65; continue _fun0007 }
case 3:
                    var10 = arg1;
                    var11 = var2;
                    var2 = var2.questContentCTA;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0007_ip = 66; continue _fun0007 }
case 41:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackQuestContentClicked;
                    var2 = {};
                    var5 = var10;
                    var2['questId'] = var5;
                    var5 = var11;
                    var6 = var5.questContent;
                    var2['questContent'] = var6;
                    var6 = var5.questContentCTA;
                    var2['questContentCTA'] = var6;
                    var6 = var5.questContentPosition;
                    var2['questContentPosition'] = var6;
                    var6 = var5.questContentRowIndex;
                    var2['questContentRowIndex'] = var6;
                    var5 = var5.sourceQuestContent;
                    var2['sourceQuestContent'] = var5;
                    var2 = var3.bind(var4)(var2);
case 66:
                    var4 = var10;
                    var2 = _closure1_slot7;
                    if(!(var4 === var2)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.dismissOrbsOnboardingExperience;
                    var2 = var2.bind(var4)();
case 67:
                    var5 = _closure1_slot4;
                    var4 = var5.isEnrolling;
                    var2 = var10;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var6 = undefined;
                    var8 = var5.bind(var6)(var4);
                    var5 = var8.dispatch;
                    var4 = {};
                    var9 = 'QUESTS_ENROLL_BEGIN';
                    var4['type'] = var9;
                    var9 = var10;
                    var4['questId'] = var9;
                    var4 = var5.bind(var8)(var4);
case 71: // try_start_0
                    var14 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 5;
                    var4 = var12[var4];
                    var4 = var14.bind(var6)(var4);
                    var8 = var4.HTTP;
                    var5 = var8.post;
                    var4 = {};
                    var13 = _closure1_slot9;
                    var9 = var13.QUESTS_ENROLL;
                    var15 = var10;
                    var9 = var9.bind(var13)(var15);
                    var4['url'] = var9;
                    var9 = {};
                    var13 = var11.questContent;
                    var9['location'] = var13;
                    var13 = 11;
                    var12 = var12[var13];
                    var14 = var14.bind(var6)(var12);
                    var12 = var14.getAdDecisionData;
                    var11 = var11.questContent;
                    var16 = var12.bind(var14)(var15, var11);
                    var17 = var9;
                    var11 = copyDataProperties(var17, var16);
                    var4['body'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var8)(var4);
                    SaveGenerator(address=380);
case 72:
                    return var4;
case 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 74; continue _fun0007 }
case 62:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = var11[var2];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var12 = 'QUESTS_ENROLL_SUCCESS';
                    var5['type'] = var12;
                    var12 = _closure1_slot0;
                    var11 = var11[var13];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.questUserStatusFromServer;
                    var11 = var4.body;
                    var11 = var12.bind(var13)(var11);
                    var5['enrolledQuestUserStatus'] = var11;
                    var5 = var8.bind(var9)(var5);
                    var5 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.SUCCESS;
                    var5['type'] = var8;
case 75: // try_end0
                    return var5;
case 74:
                    return var4;
case 76: // catch_target0
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
                    var2 = 15;
                    var2 = var5[var2];
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.CaptchaCancelError;
                    var2 = var8 instanceof var2;
                    if(var2) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                    var4 = var7 != var8;
                    if(!var4) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var9 = 'object';
                    var5 = typeof var8;
                    var4 = var9 === var5;
case 79:
                    if(!var4) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                    var9 = var8.status;
                    var5 = 400;
                    var5 = var5 === var9;
                    if(!var5) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var10 = var8.body;
                    var11 = var7 == var10;
                    var9 = undefined;
                    if(var11) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var9 = var10.captcha_key;
case 85:
                    var5 = var7 != var9;
case 83:
                    if(var5) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                    var9 = var8.captchaFields;
                    var9 = var7 != var9;
                    if(!var9) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                    var10 = global;
                    var12 = var10.Object;
                    var11 = var12.keys;
                    var10 = var8.captchaFields;
                    var10 = var11.bind(var12)(var10);
                    var11 = var10.length;
                    var10 = 0;
                    var9 = var11 > var10;
case 89:
                    var5 = var9;
case 87:
                    if(var5) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var8 = var8.fields;
                    var9 = var7 == var8;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var6 = var8.captcha_key;
case 93:
                    var5 = var7 != var6;
case 91:
                    var4 = var5;
case 81:
                    var2 = var4;
case 77:
                    var4 = {};
                    var5 = _closure1_slot10;
                    if(var2) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                    var2 = var5.UNKNOWN_ERROR;
                    var4['type'] = var2;
                    var2 = var4;
                    _fun0007_ip = 97; continue _fun0007;
case 95:
                    var5 = var5.CAPTCHA_FAILED;
                    var4['type'] = var5;
                    var2 = var4;
case 97:
                    return var2;
case 69:
                    var2 = {};
                    var3 = _closure1_slot10;
                    var3 = var3.PREVIOUS_IN_FLIGHT_REQUEST;
                    var2['type'] = var3;
                    return var2;
case 65:
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
                    if(var2) { _fun0008_ip = 98; continue _fun0008 }
case 3:
                    var7 = var8;
                    var14 = arg2;
                    var10 = arg3;
                    var2 = undefined;
                    var6 = undefined;
                    var4 = _closure1_slot4;
                    var3 = var4.isClaimingReward;
                    var3 = var3.bind(var4)(var8);
                    if(var3) { _fun0008_ip = 99; continue _fun0008 }
case 100:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 6;
                    var3 = var3[var4];
                    var9 = var8.bind(var2)(var3);
                    var8 = var9.dispatch;
                    var3 = {};
                    var11 = 'QUESTS_CLAIM_REWARD_BEGIN';
                    var3['type'] = var11;
                    var11 = var7;
                    var3['questId'] = var11;
                    var3 = var8.bind(var9)(var3);
case 101: // try_start_0
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 5;
                    var3 = var12[var3];
                    var3 = var13.bind(var2)(var3);
                    var9 = var3.HTTP;
                    var8 = var9.post;
                    var3 = {};
                    var16 = _closure1_slot9;
                    var11 = var16.QUESTS_CLAIM_REWARD;
                    var15 = var7;
                    var11 = var11.bind(var16)(var15);
                    var3['url'] = var11;
                    var11 = {};
                    var11['platform'] = var14;
                    var14 = var10;
                    var11['location'] = var14;
                    var10 = 11;
                    var12 = var12[var10];
                    var13 = var13.bind(var2)(var12);
                    var12 = var13.getAdDecisionData;
                    var17 = var12.bind(var13)(var15, var14);
                    var18 = var11;
                    var12 = copyDataProperties(var18, var17);
                    var3['body'] = var11;
                    var11 = false;
                    var3['rejectWithError'] = var11;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=219);
case 102:
                    return var3;
case 103:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 104; continue _fun0008 }
case 105:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.questsEntitlementsFromServer;
                    var8 = var3.body;
                    var8 = var9.bind(var10)(var8);
                    var6 = var8;
                    var8 = var8.errors;
                    var9 = var8.length;
                    var8 = 0;
                    if(!(var8 !== var9)) { _fun0008_ip = 106; continue _fun0008 }
case 107:
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
                    _fun0008_ip = 108; continue _fun0008;
case 106:
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
case 108: // try_end0
                    return var6;
case 104:
                    return var3;
case 109: // catch_target0
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
                    var19 = var9;
                    var18 = var3;
                    var8 = new var19[var8](var18, var17);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4['error'] = var8;
                    var4['questId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 99:
                    return var2;
case 98:
                    return var1;
                }
            };
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
                    if(var2) { _fun0009_ip = 110; continue _fun0009 }
case 3:
                    var6 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.isFetchingRewardCode;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0009_ip = 106; continue _fun0009 }
case 111:
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
case 112: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot9;
                    var10 = var11.QUESTS_REWARD_CODE;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=161);
case 113:
                    return var2;
case 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 115; continue _fun0009 }
case 116:
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
                    var10 = 11;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.questsRewardCodeFromServer;
                    var10 = var2.body;
                    var10 = var11.bind(var12)(var10);
                    var5['rewardCode'] = var10;
                    var5 = var7.bind(var8)(var5);
case 117: // try_end0
                    _fun0009_ip = 106; continue _fun0009;
case 115:
                    return var2;
case 118: // catch_target0
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
case 106:
                    var2 = undefined;
                    return var2;
case 110:
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
                    if(var2) { _fun0010_ip = 119; continue _fun0010 }
case 120:
                    var6 = var5;
                    var13 = var8;
                    var3 = _closure1_slot4;
                    var2 = var3.isDismissingContent;
                    var5 = var2.bind(var3)(var5);
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var12 = 11;
                    var3 = var2[var12];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var3);
                    var3 = var7.isDismissible;
                    var3 = var3.bind(var7)(var8);
                    if(var5) { _fun0010_ip = 121; continue _fun0010 }
case 122:
                    if(!var3) { _fun0010_ip = 121; continue _fun0010 }
case 123:
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
                    var9 = var13;
                    var5['content'] = var9;
                    var5 = var7.bind(var8)(var5);
case 12: // try_start_0
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var5 = var10[var5];
                    var5 = var11.bind(var2)(var5);
                    var8 = var5.HTTP;
                    var7 = var8.post;
                    var5 = {};
                    var15 = _closure1_slot9;
                    var9 = var15.QUESTS_DISMISS_CONTENT;
                    var14 = var6;
                    var9 = var9.bind(var15)(var14, var13);
                    var5['url'] = var9;
                    var9 = {};
                    var10 = var10[var12];
                    var11 = var11.bind(var2)(var10);
                    var10 = var11.getAdDecisionData;
                    var16 = var10.bind(var11)(var14, var13);
                    var17 = var9;
                    var10 = copyDataProperties(var17, var16);
                    var5['body'] = var9;
                    var9 = false;
                    var5['rejectWithError'] = var9;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=249);
case 124:
                    return var5;
case 125:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 126; continue _fun0010 }
case 127:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = var10[var3];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'QUESTS_DISMISS_CONTENT_SUCCESS';
                    var7['type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = var10[var12];
                    var12 = var11.bind(var2)(var10);
                    var11 = var12.questUserStatusFromServer;
                    var10 = var5.body;
                    var10 = var11.bind(var12)(var10);
                    var7['dismissedQuestUserStatus'] = var10;
                    var7 = var8.bind(var9)(var7);
case 128: // try_end0
                    _fun0010_ip = 121; continue _fun0010;
case 126:
                    return var5;
case 129: // catch_target0
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
case 121:
                    return var2;
case 119:
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
                    if(var3) { _fun0011_ip = 130; continue _fun0011 }
case 3:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0011_ip = 131; continue _fun0011 }
case 5:
                    var2 = 1;
case 131:
                    var10 = var2;
                    SaveGenerator(address=32);
case 132:
                    return var3;
case 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 134; continue _fun0011 }
case 135: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var12 = _closure1_slot9;
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
case 136:
                    return var4;
case 137:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 138; continue _fun0011 }
case 139:
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
                    var9 = 11;
                    var9 = var11[var9];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.questUserStatusFromServer;
                    var9 = var4.body;
                    var9 = var10.bind(var11)(var9);
                    var5['previewQuestUserStatus'] = var9;
                    var5 = var6.bind(var8)(var5);
case 140: // try_end0
                    _fun0011_ip = 141; continue _fun0011;
case 138:
                    return var4;
case 142: // catch_target0
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
case 141:
                    return var3;
case 134:
                    return var2;
case 130:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
                    if(var2) { _fun0012_ip = 143; continue _fun0012 }
case 144:
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
                    var10 = _closure1_slot9;
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
case 112:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 67; continue _fun0012 }
case 101:
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
                    var7 = 11;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.questUserStatusFromServer;
                    var7 = var2.body;
                    var7 = var8.bind(var9)(var7);
                    var3['previewQuestUserStatus'] = var7;
                    var3 = var4.bind(var6)(var3);
case 145: // try_end0
                    _fun0012_ip = 146; continue _fun0012;
case 67:
                    return var2;
case 147: // catch_target0
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
case 146:
                    var2 = undefined;
                    return var2;
case 143:
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
                    if(var2) { _fun0013_ip = 148; continue _fun0013 }
case 144:
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
                    var11 = _closure1_slot9;
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
case 149:
                    return var2;
case 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 151; continue _fun0013 }
case 152:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var3['type'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 11;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.questUserStatusFromServer;
                    var7 = var2.body;
                    var7 = var8.bind(var9)(var7);
                    var3['previewQuestUserStatus'] = var7;
                    var3 = var4.bind(var6)(var3);
case 153: // try_end0
                    _fun0013_ip = 130; continue _fun0013;
case 151:
                    return var2;
case 103: // catch_target0
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
case 130:
                    var2 = undefined;
                    return var2;
case 148:
                    return var1;
                }
            };
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
                    if(var2) { _fun0014_ip = 154; continue _fun0014 }
case 144:
                    var2 = _closure1_slot4;
                    var2 = var2.isFetchingClaimedQuests;
                    if(var2) { _fun0014_ip = 155; continue _fun0014 }
case 156:
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
case 157: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var8)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.QUESTS_CLAIMED_QUESTS;
                    var4['url'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=134);
case 150:
                    return var4;
case 158:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 153; continue _fun0014 }
case 159:
                    var5 = var4.body;
                    var7 = var5.quests;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
case 138: // try_end0
                    _fun0014_ip = 155; continue _fun0014;
case 153:
                    return var4;
case 102: // catch_target0
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
case 155:
                    var2 = undefined;
                    return var2;
case 154:
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
    var1 = function _fetchQuestToDeliver() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var16 = arg1;
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 160; continue _fun0015 }
case 120:
                    var6 = var16;
                    var13 = var12;
                    var2 = undefined;
                    var27 = undefined;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    var23 = undefined;
                    var22 = undefined;
                    var31 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var14 = undefined;
                    var20 = undefined;
                    var8 = undefined;
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var4 = var5[var3];
                    var15 = var10.bind(var2)(var4);
                    var11 = var15.dispatch;
                    var4 = {};
                    var17 = 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN';
                    var4['type'] = var17;
                    var4['placement'] = var16;
                    var4 = var11.bind(var15)(var4);
                    var4 = 10;
                    var5 = var5[var4];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.recordQuestRequestAttempt;
                    var11 = '/quests/decision';
                    var5 = var5.bind(var10)(var11, var12);
case 161: // try_start_0
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 18;
                    var5 = var12[var5];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.getSession;
                    var5 = var5.bind(var10)();
                    SaveGenerator(address=162);
case 162:
                    return var5;
case 163:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0015_ip = 164; continue _fun0015 }
case 165:
                    var31 = var5;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 19;
                    var10 = var15[var10];
                    var12 = var12.bind(var2)(var10);
                    var10 = var12.getOrRefreshAdSession;
                    var10 = var10.bind(var12)();
                    SaveGenerator(address=208);
case 166:
                    return var10;
case 20:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 167; continue _fun0015 }
case 102:
                    var19 = var10;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 5;
                    var12 = var16[var12];
                    var12 = var15.bind(var2)(var12);
                    var17 = var12.HTTP;
                    var16 = var17.get;
                    var12 = {};
                    var30 = _closure1_slot9;
                    var29 = var30.QUEST_FETCH_QUEST_TO_DELIVER;
                    var28 = var6;
                    var21 = var31;
                    var15 = null;
                    var32 = var15 == var21;
                    var21 = undefined;
                    if(var32) { _fun0015_ip = 60; continue _fun0015 }
case 168:
                    var21 = var31.uuid;
case 60:
                    var19 = var19.uuid;
                    var19 = var29.bind(var30)(var28, var21, var19);
                    var12['url'] = var19;
                    var19 = false;
                    var12['rejectWithError'] = var19;
                    var12 = var16.bind(var17)(var12);
                    SaveGenerator(address=317);
case 169:
                    return var12;
case 148:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                    if(var16) { _fun0015_ip = 170; continue _fun0015 }
case 171:
                    var16 = var12.body;
                    var18 = var16;
                    var16 = var16.quest;
                    var14 = var16;
                    var16 = var15 != var16;
                    var19 = undefined;
                    if(!var16) { _fun0015_ip = 172; continue _fun0015 }
case 173:
                    var17 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var16 = 11;
                    var16 = var21[var16];
                    var17 = var17.bind(var2)(var16);
                    var16 = var17.questConfigFromServer;
                    var19 = var16.bind(var17)(var14);
case 172:
                    var20 = var19;
                    var16 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var3];
                    var17 = var16.bind(var2)(var14);
                    var16 = var17.dispatch;
                    var14 = {};
                    var21 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                    var14['type'] = var21;
                    var14['quest'] = var19;
                    var19 = {};
                    var21 = var18;
                    var21 = var21.ad_identifiers;
                    var27 = var21;
                    var28 = var15 == var21;
                    var21 = undefined;
                    if(var28) { _fun0015_ip = 174; continue _fun0015 }
case 175:
                    var21 = var27.ad_id;
case 174:
                    var19['ad_id'] = var21;
                    var21 = var18;
                    var21 = var21.ad_identifiers;
                    var26 = var21;
                    var27 = var15 == var21;
                    var21 = undefined;
                    if(var27) { _fun0015_ip = 176; continue _fun0015 }
case 177:
                    var21 = var26.adset_id;
case 176:
                    var19['adset_id'] = var21;
                    var21 = var18;
                    var21 = var21.ad_identifiers;
                    var25 = var21;
                    var26 = var15 == var21;
                    var21 = undefined;
                    if(var26) { _fun0015_ip = 178; continue _fun0015 }
case 179:
                    var21 = var25.ad_set_id;
case 178:
                    var19['ad_set_id'] = var21;
                    var21 = var18;
                    var21 = var21.ad_identifiers;
                    var24 = var21;
                    var25 = var15 == var21;
                    var21 = undefined;
                    if(var25) { _fun0015_ip = 180; continue _fun0015 }
case 181:
                    var21 = var24.campaign_id;
case 180:
                    var19['campaign_id'] = var21;
                    var21 = var18;
                    var21 = var21.ad_identifiers;
                    var23 = var21;
                    var24 = var15 == var21;
                    var21 = undefined;
                    if(var24) { _fun0015_ip = 182; continue _fun0015 }
case 183:
                    var21 = var23.creative_id;
case 182:
                    var19['creative_id'] = var21;
                    var21 = var18;
                    var21 = var21.ad_identifiers;
                    var22 = var21;
                    var23 = var15 == var21;
                    var21 = undefined;
                    if(var23) { _fun0015_ip = 184; continue _fun0015 }
case 185:
                    var21 = var22.creative_type;
case 184:
                    var19['creative_type'] = var21;
                    var21 = var18;
                    var22 = var21.request_id;
                    var19['decision_id'] = var22;
                    var22 = var21.ad_identifiers;
                    var22 = var15 != var22;
                    var19['is_targeted'] = var22;
                    var14['adDecisionData'] = var19;
                    var19 = var21.metadata_raw;
                    var14['metadataRaw'] = var19;
                    var19 = var21.ad_context;
                    var14['adContext'] = var19;
                    var19 = var6;
                    var14['placement'] = var19;
                    var14 = var16.bind(var17)(var14);
                    var16 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var4];
                    var17 = var16.bind(var2)(var14);
                    var16 = var17.recordQuestRequestApiResponse;
                    var14 = {};
                    var19 = true;
                    var14['wasSuccessful'] = var19;
                    var19 = global;
                    var22 = var19.String;
                    var21 = var21.request_id;
                    var21 = var22.bind(var2)(var21);
                    var14['adRequestId'] = var21;
                    var14 = var16.bind(var17)(var11, var14);
                    var14 = var20;
                    if(!(var15 != var14)) { _fun0015_ip = 186; continue _fun0015 }
case 187:
                    var15 = var6;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var14 = 8;
                    var14 = var17[var14];
                    var14 = var16.bind(var2)(var14);
                    var14 = var14.QuestPlacement;
                    var14 = var14.DESKTOP_ACCOUNT_PANEL_AREA;
                    if(!(var15 === var14)) { _fun0015_ip = 188; continue _fun0015 }
case 189:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 20;
                    var14 = var16[var14];
                    var16 = var15.bind(var2)(var14);
                    var15 = var16.startTracking;
                    var14 = var20;
                    var14 = var14.id;
                    var14 = var15.bind(var16)(var14);
case 188:
                    var22 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var14 = 21;
                    var14 = var23[var14];
                    var17 = var22.bind(var2)(var14);
                    var16 = var17.track;
                    var14 = _closure1_slot8;
                    var15 = var14.QUEST_DECISION_RECEIVED;
                    var14 = {};
                    var21 = 22;
                    var21 = var23[var21];
                    var21 = var22.bind(var2)(var21);
                    var34 = var21.bind(var2)();
                    var35 = var14;
                    var21 = copyDataProperties(var35, var34);
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
case 190: // try_end0
                    _fun0015_ip = 191; continue _fun0015;
case 186:
                    return var2;
case 170:
                    return var12;
case 167:
                    return var10;
case 164:
                    return var5;
case 192: // catch_target0
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
                    var4 = _closure1_slot8;
                    var5 = var4.QUEST_DECISION_ROUNDTRIP_ERROR;
                    var4 = {};
                    var10 = 22;
                    var10 = var16[var10];
                    var10 = var15.bind(var2)(var10);
                    var34 = var10.bind(var2)();
                    var35 = var4;
                    var10 = copyDataProperties(var35, var34);
                    var10 = null;
                    var15 = var10 == var14;
                    var14 = undefined;
                    if(var15) { _fun0015_ip = 193; continue _fun0015 }
case 194:
                    var15 = var9;
                    var14 = var15.message;
case 193:
                    var8 = var14;
                    var14 = var10 != var14;
                    var10 = null;
                    if(!var14) { _fun0015_ip = 195; continue _fun0015 }
case 196:
                    var10 = var8;
case 195:
                    var8 = 'reason';
                    var4[var8] = var10;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var14 = var10[var7];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.prototype;
                    var15 = Object.create(var15, {constructor: {value: var14}});
                    var36 = var15;
                    var35 = var9;
                    var14 = new var36[var14](var35, var34);
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
                    var36 = var8;
                    var35 = var9;
                    var7 = new var36[var7](var35, var34);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['placement'] = var6;
                    var3 = var4.bind(var5)(var3);
case 191:
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
    var1 = function _updateVideoProgress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 197; continue _fun0016 }
case 120:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 13;
                    var2 = var11[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.post;
                    var2 = {};
                    var10 = _closure1_slot9;
                    var6 = var10.QUESTS_VIDEO_PROGRESS;
                    var6 = var6.bind(var10)(var8);
                    var2['url'] = var6;
                    var6 = {};
                    var6['timestamp'] = var9;
                    var2['body'] = var6;
                    var6 = {};
                    var10 = _closure1_slot0;
                    var7 = 14;
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
                    if(!var10) { _fun0016_ip = 198; continue _fun0016 }
case 147:
                    var8 = var9;
case 198:
                    var7['stack_trace'] = var8;
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=217);
case 142:
                    return var2;
case 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 199; continue _fun0016 }
case 200:
                    return var3;
case 199:
                    return var2;
case 197:
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
    var1 = function _fetchVideoTranscript() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 201; continue _fun0017 }
case 3:
                    var7 = var11;
                    var2 = undefined;
                    var9 = undefined;
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 23;
                    var5 = var12[var3];
                    var10 = var4.bind(var2)(var5);
                    var8 = var10.resolveVideoQuestAsset;
                    var5 = var12[var3];
                    var5 = var4.bind(var2)(var5);
                    var5 = var5.VideoVariant;
                    var14 = var5.VIDEO;
                    var3 = var12[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.VideoAssetProperty;
                    var13 = var3.TRANSCRIPT;
                    var15 = arg2;
                    var17 = var10;
                    var16 = var11;
                    var4 = var17[var8](var16, var15, var14, var13, var12);
                    var9 = var4;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0017_ip = 202; continue _fun0017 }
case 42:
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var5 = var3.bind(var4)();
                    var4 = var5.setTranscriptAsset;
                    var3 = {};
                    var8 = var7;
                    var8 = var8.id;
                    var3['questId'] = var8;
                    var8 = _closure1_slot6;
                    var8 = var8.FAILURE;
                    var3['fetchStatus'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0017_ip = 203; continue _fun0017;
case 202:
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var5 = var3.bind(var4)();
                    var4 = var5.setTranscriptAsset;
                    var3 = {};
                    var8 = var7;
                    var8 = var8.id;
                    var3['questId'] = var8;
                    var8 = _closure1_slot6;
                    var8 = var8.FETCHING;
                    var3['fetchStatus'] = var8;
                    var3 = var4.bind(var5)(var3);
case 105: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var8 = var9;
                    var8 = var8.url;
                    var3['url'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=287);
case 60:
                    return var3;
case 204:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 205; continue _fun0017 }
case 206:
                    var5 = _closure1_slot5;
                    var4 = var5.getState;
                    var8 = var4.bind(var5)();
                    var5 = var8.setTranscriptAsset;
                    var4 = {};
                    var10 = var7;
                    var10 = var10.id;
                    var4['questId'] = var10;
                    var10 = _closure1_slot6;
                    var10 = var10.SUCCESS;
                    var4['fetchStatus'] = var10;
                    var10 = var3.text;
                    var4['text'] = var10;
                    var9 = var9.url;
                    var4['url'] = var9;
                    var4 = var5.bind(var8)(var4);
case 207: // try_end0
                    _fun0017_ip = 203; continue _fun0017;
case 205:
                    return var3;
case 208: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var5 = var3.bind(var4)();
                    var4 = var5.setTranscriptAsset;
                    var3 = {};
                    var7 = var7.id;
                    var3['questId'] = var7;
                    var6 = _closure1_slot6;
                    var6 = var6.FAILURE;
                    var3['fetchStatus'] = var6;
                    var3 = var4.bind(var5)(var3);
case 203:
                    return var2;
case 201:
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
    var1 = function _fetchQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 150; continue _fun0018 }
case 144:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot9;
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
case 209:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0018_ip = 210; continue _fun0018 }
case 211:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.questConfigFromServer;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 210:
                    return var2;
case 150:
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
    var1 = function _fetchQuestPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 110; continue _fun0019 }
case 3:
                    var6 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.isFetchingQuestPreview;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0019_ip = 106; continue _fun0019 }
case 111:
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
case 112: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot9;
                    var10 = var11.QUEST_PREVIEW;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=161);
case 113:
                    return var2;
case 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 115; continue _fun0019 }
case 116:
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
                    var10 = 11;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.questWithUserStatusFromServer;
                    var10 = var2.body;
                    var10 = var11.bind(var12)(var10);
                    var5['quest'] = var10;
                    var5 = var7.bind(var8)(var5);
case 117: // try_end0
                    _fun0019_ip = 106; continue _fun0019;
case 115:
                    return var2;
case 118: // catch_target0
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
case 106:
                    var2 = undefined;
                    return var2;
case 110:
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
    var4 = var4.ORBS_INTRO_QUEST_ID;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot8 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = {};
    var5 = 'success';
    var4['SUCCESS'] = var5;
    var5 = 'captcha_failed';
    var4['CAPTCHA_FAILED'] = var5;
    var5 = 'unknown_error';
    var4['UNKNOWN_ERROR'] = var5;
    var5 = 'previous_in_flight_request';
    var4['PREVIOUS_IN_FLIGHT_REQUEST'] = var5;
    var _closure1_slot10 = var4;
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/QuestsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function manuallyStartConsoleQuest() {
        var1 = undefined;
        var4 = _closure1_slot11;
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
        var4 = _closure1_slot12;
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
        var4 = _closure1_slot13;
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
        var4 = _closure1_slot14;
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
        var4 = _closure1_slot15;
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
        var4 = _closure1_slot16;
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
        var4 = _closure1_slot17;
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
        var4 = _closure1_slot18;
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
        var4 = _closure1_slot19;
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
        var4 = _closure1_slot20;
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
        var4 = _closure1_slot21;
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
        var4 = _closure1_slot22;
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
        var4 = _closure1_slot23;
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
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestToDeliver'] = var4;
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
        var4 = _closure1_slot25;
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
        var4 = _closure1_slot26;
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
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuest'] = var4;
    var2 = function fetchQuestPreview() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestPreview'] = var2;
    return var1;
})();