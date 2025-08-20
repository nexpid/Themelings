// app/modules/quests/QuestsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _manuallyStartConsoleQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 656; continue _fun0001 }
 13:
                    var11 = arg1;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0001_ip = 24; continue _fun0001 }
 22:
                    var2 = false;
 24:
                    var14 = var2;
                    var10 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=37);
 35:
                    return var9;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 653; continue _fun0001 }
 46: // try_start_0
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
                    if(!var12) { _fun0001_ip = 119; continue _fun0001 }
 109:
                    var12 = {};
                    var12['preview'] = var14;
                    var11 = var12;
 119:
                    var4['query'] = var11;
                    var11 = true;
                    var4['failImmediatelyWhenRateLimited'] = var11;
                    var11 = false;
                    var4['rejectWithError'] = var11;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=145);
 143:
                    return var4;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 304; continue _fun0001 }
 154:
                    var7 = var4.body;
                    var10 = var7;
                    var7 = var7.quest_user_status;
                    var8 = null;
                    if(!(var8 == var7)) { _fun0001_ip = 237; continue _fun0001 }
 174:
                    var7 = var10;
                    var7 = var7.error_hints_v2;
                    if(!(var8 != var7)) { _fun0001_ip = 290; continue _fun0001 }
 187:
                    var7 = var10;
                    var7 = var7.error_hints_v2;
                    var7 = var7.length;
                    var12 = 0;
                    if(!(var7 > var12)) { _fun0001_ip = 290; continue _fun0001 }
 207:
                    var7 = {};
                    var8 = var10;
                    var11 = var8.error_hints_v2;
                    var8 = var11.slice;
                    var8 = var8.bind(var11)(var12, var13);
                    var7['errorHints'] = var8;
 234: // try_end0
                    return var7;
 237: // try_start_1
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
 290: // try_end1
                    var6 = {};
                    var7 = new Array(0);
                    var6['errorHints'] = var7;
                    return var6;
 304:
                    return var4;
 307: // catch_target0 // catch_target1
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
                    if(!(var6 !== var7)) { _fun0001_ip = 532; continue _fun0001 }
 376:
                    var6 = var5;
                    var5 = var6.getAnyErrorMessage;
                    var6 = var5.bind(var6)();
                    var3 = var6;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0001_ip = 455; continue _fun0001 }
 398:
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
                    _fun0001_ip = 458; continue _fun0001;
 455:
                    var5 = var3;
 458:
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
 532:
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
 653:
                    return var2;
 656:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _manualStopConsoleQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 94; continue _fun0002 }
 7:
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
 80:
                    return var2;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 91; continue _fun0002 }
 88:
                    return var3;
 91:
                    return var2;
 94:
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
    var1 = function _resetRecentQuestCompletions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 86; continue _fun0003 }
 7:
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
 72:
                    return var2;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 83; continue _fun0003 }
 80:
                    return var3;
 83:
                    return var2;
 86:
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
    var1 = function _fetchCurrentQuests() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 490; continue _fun0004 }
 12:
                    var3 = _closure1_slot4;
                    var3 = var3.isFetchingCurrentQuests;
                    if(var3) { _fun0004_ip = 485; continue _fun0004 }
 31:
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
 113: // try_start_0
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
 172:
                    return var3;
 174:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 362; continue _fun0004 }
 183:
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
 0:
                            var2 = arg1;
                            var4 = var2.userStatus;
                            var3 = null;
                            var6 = var3 == var4;
                            var5 = undefined;
                            var1 = undefined;
                            if(var6) { _fun0005_ip = 28; continue _fun0005 }
 22:
                            var1 = var4.claimedAt;
 28:
                            var1 = var3 != var1;
                            if(var1) { _fun0005_ip = 97; continue _fun0005 }
 35:
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
 97:
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
 357: // try_end0
                    _fun0004_ip = 485; continue _fun0004;
 362:
                    return var3;
 365: // catch_target0
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
 485:
                    var2 = undefined;
                    return var2;
 490:
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
    var1 = function _sendHeartbeat() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 483; continue _fun0006 }
 13:
                    var8 = var2.questId;
                    var7 = var2.streamKey;
                    var2 = var2.terminal;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0006_ip = 39; continue _fun0006 }
 37:
                    var2 = false;
 39:
                    var9 = var2;
                    var14 = undefined;
                    SaveGenerator(address=48);
 46:
                    return var3;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 480; continue _fun0006 }
 57: // try_start_0
                    var5 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = 13;
                    var4 = var16[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.post;
                    var4 = {};
                    var12 = _closure1_slot9;
                    var11 = var12.QUESTS_HEARTBEAT;
                    var13 = var8;
                    var11 = var11.bind(var12)(var13);
                    var4['url'] = var11;
                    var11 = {};
                    var12 = var7;
                    var11['stream_key'] = var12;
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
                    if(!var15) { _fun0006_ip = 238; continue _fun0006 }
 235:
                    var13 = var14;
 238:
                    var12['stack_trace'] = var13;
                    var13 = true;
                    var12['is_playtime_eligible'] = var13;
                    var11['properties'] = var12;
                    var4['trackedActionData'] = var11;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=275);
 273:
                    return var4;
 275:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 378; continue _fun0006 }
 281:
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
 376: // try_end0
                    _fun0006_ip = 477; continue _fun0006;
 378:
                    return var4;
 381: // catch_target0
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
 477:
                    return var3;
 480:
                    return var2;
 483:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _enrollInQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 515; continue _fun0007 }
 13:
                    var5 = arg1;
                    var10 = var2;
                    var3 = var2.questContentCTA;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 135; continue _fun0007 }
 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackQuestContentClicked;
                    var2 = {};
                    var6 = var5;
                    var2['questId'] = var6;
                    var6 = var10;
                    var7 = var6.questContent;
                    var2['questContent'] = var7;
                    var7 = var6.questContentCTA;
                    var2['questContentCTA'] = var7;
                    var7 = var6.questContentPosition;
                    var2['questContentPosition'] = var7;
                    var7 = var6.questContentRowIndex;
                    var2['questContentRowIndex'] = var7;
                    var6 = var6.sourceQuestContent;
                    var2['sourceQuestContent'] = var6;
                    var2 = var3.bind(var4)(var2);
 135:
                    var4 = var5;
                    var3 = _closure1_slot7;
                    if(!(var4 === var3)) { _fun0007_ip = 181; continue _fun0007 }
 149:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.dismissOrbsOnboardingExperience;
                    var3 = var3.bind(var4)();
 181:
                    var6 = _closure1_slot4;
                    var4 = var6.isEnrolling;
                    var3 = var5;
                    var3 = var4.bind(var6)(var3);
                    if(var3) { _fun0007_ip = 510; continue _fun0007 }
 205:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 6;
                    var3 = var3[var6];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'QUESTS_ENROLL_BEGIN';
                    var3['type'] = var9;
                    var9 = var5;
                    var3['questId'] = var9;
                    var3 = var7.bind(var8)(var3);
 257: // try_start_0
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 5;
                    var3 = var11[var3];
                    var3 = var13.bind(var4)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.post;
                    var3 = {};
                    var12 = _closure1_slot9;
                    var9 = var12.QUESTS_ENROLL;
                    var14 = var5;
                    var9 = var9.bind(var12)(var14);
                    var3['url'] = var9;
                    var9 = {};
                    var12 = var10.questContent;
                    var9['location'] = var12;
                    var12 = 11;
                    var11 = var11[var12];
                    var13 = var13.bind(var4)(var11);
                    var11 = var13.getAdDecisionData;
                    var10 = var10.questContent;
                    var15 = var11.bind(var13)(var14, var10);
                    var16 = var9;
                    var10 = copyDataProperties(var16, var15);
                    var3['body'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=380);
 378:
                    return var3;
 380:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 461; continue _fun0007 }
 386:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = var10[var6];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'QUESTS_ENROLL_SUCCESS';
                    var7['type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = var10[var12];
                    var12 = var11.bind(var4)(var10);
                    var11 = var12.questUserStatusFromServer;
                    var10 = var3.body;
                    var10 = var11.bind(var12)(var10);
                    var7['enrolledQuestUserStatus'] = var10;
                    var7 = var8.bind(var9)(var7);
 459: // try_end0
                    _fun0007_ip = 510; continue _fun0007;
 461:
                    return var3;
 464: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'QUESTS_ENROLL_FAILURE';
                    var2['type'] = var6;
                    var2['questId'] = var5;
                    var2 = var3.bind(var4)(var2);
 510:
                    var2 = undefined;
                    return var2;
 515:
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
    var1 = function _claimQuestReward() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 463; continue _fun0008 }
 13:
                    var7 = var8;
                    var12 = arg2;
                    var11 = arg3;
                    var2 = undefined;
                    var6 = undefined;
                    var4 = _closure1_slot4;
                    var3 = var4.isClaimingReward;
                    var3 = var3.bind(var4)(var8);
                    if(var3) { _fun0008_ip = 460; continue _fun0008 }
 50:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 6;
                    var3 = var3[var4];
                    var9 = var8.bind(var2)(var3);
                    var8 = var9.dispatch;
                    var3 = {};
                    var10 = 'QUESTS_CLAIM_REWARD_BEGIN';
                    var3['type'] = var10;
                    var10 = var7;
                    var3['questId'] = var10;
                    var3 = var8.bind(var9)(var3);
 100: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var3 = var8.bind(var2)(var3);
                    var9 = var3.HTTP;
                    var8 = var9.post;
                    var3 = {};
                    var14 = _closure1_slot9;
                    var13 = var14.QUESTS_CLAIM_REWARD;
                    var10 = var7;
                    var10 = var13.bind(var14)(var10);
                    var3['url'] = var10;
                    var10 = {};
                    var10['platform'] = var12;
                    var10['location'] = var11;
                    var3['body'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=185);
 183:
                    return var3;
 185:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 370; continue _fun0008 }
 194:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var8 = var10[var8];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.questsEntitlementsFromServer;
                    var8 = var3.body;
                    var8 = var9.bind(var10)(var8);
                    var6 = var8;
                    var8 = var8.errors;
                    var9 = var8.length;
                    var8 = 0;
                    if(!(var8 !== var9)) { _fun0008_ip = 312; continue _fun0008 }
 250:
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
                    _fun0008_ip = 367; continue _fun0008;
 312:
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
 367: // try_end0
                    return var6;
 370:
                    return var3;
 373: // catch_target0
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
                    var16 = var9;
                    var15 = var3;
                    var8 = new var16[var8](var15, var14);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4['error'] = var8;
                    var4['questId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
 460:
                    return var2;
 463:
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
    var1 = function _fetchQuestRewardCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 348; continue _fun0009 }
 13:
                    var6 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.isFetchingRewardCode;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0009_ip = 343; continue _fun0009 }
 40:
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
 92: // try_start_0
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
 159:
                    return var2;
 161:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 253; continue _fun0009 }
 167:
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
 251: // try_end0
                    _fun0009_ip = 343; continue _fun0009;
 253:
                    return var2;
 256: // catch_target0
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
 343:
                    var2 = undefined;
                    return var2;
 348:
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
    var1 = function _dismissQuestContent() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 421; continue _fun0010 }
 16:
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
                    if(var5) { _fun0010_ip = 418; continue _fun0010 }
 81:
                    if(!var3) { _fun0010_ip = 418; continue _fun0010 }
 87:
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
 144: // try_start_0
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
 247:
                    return var5;
 249:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 330; continue _fun0010 }
 255:
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
 328: // try_end0
                    _fun0010_ip = 418; continue _fun0010;
 330:
                    return var5;
 333: // catch_target0
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
 418:
                    return var2;
 421:
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
    var1 = function _completeQuestPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 312; continue _fun0011 }
 13:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0011_ip = 25; continue _fun0011 }
 22:
                    var2 = 1;
 25:
                    var10 = var2;
                    SaveGenerator(address=32);
 30:
                    return var3;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 309; continue _fun0011 }
 41: // try_start_0
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
 123:
                    return var4;
 125:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 212; continue _fun0011 }
 131:
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
 210: // try_end0
                    _fun0011_ip = 306; continue _fun0011;
 212:
                    return var4;
 215: // catch_target0
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
 306:
                    return var3;
 309:
                    return var2;
 312:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _resetQuestPreviewStatus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 282; continue _fun0012 }
 10:
                    var5 = arg1;
 13: // try_start_0
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
 92:
                    return var2;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 181; continue _fun0012 }
 100:
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
 179: // try_end0
                    _fun0012_ip = 277; continue _fun0012;
 181:
                    return var2;
 184: // catch_target0
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
 277:
                    var2 = undefined;
                    return var2;
 282:
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
    var1 = function _resetQuestDismissibilityStatus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 317; continue _fun0013 }
 10:
                    var5 = arg1;
 13: // try_start_0
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
 130:
                    return var2;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 216; continue _fun0013 }
 138:
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
 214: // try_end0
                    _fun0013_ip = 312; continue _fun0013;
 216:
                    return var2;
 219: // catch_target0
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
 312:
                    var2 = undefined;
                    return var2;
 317:
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
    var1 = function _fetchClaimedQuests() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 302; continue _fun0014 }
 10:
                    var2 = _closure1_slot4;
                    var2 = var2.isFetchingClaimedQuests;
                    if(var2) { _fun0014_ip = 297; continue _fun0014 }
 29:
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
 73: // try_start_0
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
 132:
                    return var4;
 134:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 214; continue _fun0014 }
 140:
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
 212: // try_end0
                    _fun0014_ip = 297; continue _fun0014;
 214:
                    return var4;
 217: // catch_target0
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
 297:
                    var2 = undefined;
                    return var2;
 302:
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
    var1 = function _fetchQuestToDeliver() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    var16 = arg1;
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 1221; continue _fun0015 }
 16:
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
                    var20 = undefined;
                    var19 = undefined;
                    var14 = undefined;
                    var18 = undefined;
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
 128: // try_start_0
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 17;
                    var5 = var12[var5];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.getSession;
                    var5 = var5.bind(var10)();
                    SaveGenerator(address=162);
 160:
                    return var5;
 162:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0015_ip = 921; continue _fun0015 }
 171:
                    var31 = var5;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 18;
                    var10 = var15[var10];
                    var12 = var12.bind(var2)(var10);
                    var10 = var12.getOrRefreshAdSession;
                    var10 = var10.bind(var12)();
                    SaveGenerator(address=208);
 206:
                    return var10;
 208:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 918; continue _fun0015 }
 217:
                    var20 = var10;
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
                    if(var32) { _fun0015_ip = 285; continue _fun0015 }
 279:
                    var21 = var31.uuid;
 285:
                    var20 = var20.uuid;
                    var20 = var29.bind(var30)(var28, var21, var20);
                    var12['url'] = var20;
                    var20 = false;
                    var12['rejectWithError'] = var20;
                    var12 = var16.bind(var17)(var12);
                    SaveGenerator(address=317);
 315:
                    return var12;
 317:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                    if(var16) { _fun0015_ip = 915; continue _fun0015 }
 326:
                    var16 = var12.body;
                    var19 = var16;
                    var16 = var16.quest;
                    var14 = var16;
                    var16 = var15 != var16;
                    var20 = undefined;
                    if(!var16) { _fun0015_ip = 383; continue _fun0015 }
 352:
                    var17 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var16 = 11;
                    var16 = var21[var16];
                    var17 = var17.bind(var2)(var16);
                    var16 = var17.questConfigFromServer;
                    var20 = var16.bind(var17)(var14);
 383:
                    var18 = var20;
                    var16 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var3];
                    var17 = var16.bind(var2)(var14);
                    var16 = var17.dispatch;
                    var14 = {};
                    var21 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                    var14['type'] = var21;
                    var14['quest'] = var20;
                    var20 = {};
                    var21 = var19;
                    var21 = var21.ad_identifiers;
                    var27 = var21;
                    var28 = var15 == var21;
                    var21 = undefined;
                    if(var28) { _fun0015_ip = 454; continue _fun0015 }
 448:
                    var21 = var27.ad_id;
 454:
                    var20['ad_id'] = var21;
                    var21 = var19;
                    var21 = var21.ad_identifiers;
                    var26 = var21;
                    var27 = var15 == var21;
                    var21 = undefined;
                    if(var27) { _fun0015_ip = 486; continue _fun0015 }
 480:
                    var21 = var26.adset_id;
 486:
                    var20['adset_id'] = var21;
                    var21 = var19;
                    var21 = var21.ad_identifiers;
                    var25 = var21;
                    var26 = var15 == var21;
                    var21 = undefined;
                    if(var26) { _fun0015_ip = 518; continue _fun0015 }
 512:
                    var21 = var25.ad_set_id;
 518:
                    var20['ad_set_id'] = var21;
                    var21 = var19;
                    var21 = var21.ad_identifiers;
                    var24 = var21;
                    var25 = var15 == var21;
                    var21 = undefined;
                    if(var25) { _fun0015_ip = 550; continue _fun0015 }
 544:
                    var21 = var24.campaign_id;
 550:
                    var20['campaign_id'] = var21;
                    var21 = var19;
                    var21 = var21.ad_identifiers;
                    var23 = var21;
                    var24 = var15 == var21;
                    var21 = undefined;
                    if(var24) { _fun0015_ip = 582; continue _fun0015 }
 576:
                    var21 = var23.creative_id;
 582:
                    var20['creative_id'] = var21;
                    var21 = var19;
                    var21 = var21.ad_identifiers;
                    var22 = var21;
                    var23 = var15 == var21;
                    var21 = undefined;
                    if(var23) { _fun0015_ip = 614; continue _fun0015 }
 608:
                    var21 = var22.creative_type;
 614:
                    var20['creative_type'] = var21;
                    var21 = var19.request_id;
                    var20['decision_id'] = var21;
                    var21 = var19.ad_identifiers;
                    var21 = var15 != var21;
                    var20['is_targeted'] = var21;
                    var14['adDecisionData'] = var20;
                    var20 = var19.metadata_raw;
                    var14['metadataRaw'] = var20;
                    var19 = var19.ad_context;
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
                    var14 = var16.bind(var17)(var11, var14);
                    var14 = var18;
                    if(!(var15 != var14)) { _fun0015_ip = 912; continue _fun0015 }
 735:
                    var15 = var6;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var14 = 8;
                    var14 = var17[var14];
                    var14 = var16.bind(var2)(var14);
                    var14 = var14.QuestPlacement;
                    var14 = var14.DESKTOP_ACCOUNT_PANEL_AREA;
                    if(!(var15 === var14)) { _fun0015_ip = 813; continue _fun0015 }
 774:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 19;
                    var14 = var16[var14];
                    var16 = var15.bind(var2)(var14);
                    var15 = var16.startTracking;
                    var14 = var18;
                    var14 = var14.id;
                    var14 = var15.bind(var16)(var14);
 813:
                    var20 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var14 = 20;
                    var14 = var21[var14];
                    var17 = var20.bind(var2)(var14);
                    var16 = var17.track;
                    var14 = _closure1_slot8;
                    var15 = var14.QUEST_DECISION_RECEIVED;
                    var14 = {};
                    var19 = 21;
                    var19 = var21[var19];
                    var19 = var20.bind(var2)(var19);
                    var34 = var19.bind(var2)();
                    var35 = var14;
                    var19 = copyDataProperties(var35, var34);
                    var19 = var18.id;
                    var18 = 'quest_id';
                    var14[var18] = var19;
                    var19 = var13;
                    var18 = 'caller_source';
                    var14[var18] = var19;
                    var14 = var16.bind(var17)(var15, var14);
 907: // try_end0
                    _fun0015_ip = 1218; continue _fun0015;
 912:
                    return var2;
 915:
                    return var12;
 918:
                    return var10;
 921:
                    return var5;
 924: // catch_target0
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
                    var4 = 20;
                    var4 = var16[var4];
                    var12 = var15.bind(var2)(var4);
                    var11 = var12.track;
                    var4 = _closure1_slot8;
                    var5 = var4.QUEST_DECISION_ROUNDTRIP_ERROR;
                    var4 = {};
                    var10 = 21;
                    var10 = var16[var10];
                    var10 = var15.bind(var2)(var10);
                    var34 = var10.bind(var2)();
                    var35 = var4;
                    var10 = copyDataProperties(var35, var34);
                    var10 = null;
                    var15 = var10 == var14;
                    var14 = undefined;
                    if(var15) { _fun0015_ip = 1038; continue _fun0015 }
 1030:
                    var15 = var9;
                    var14 = var15.message;
 1038:
                    var8 = var14;
                    var14 = var10 != var14;
                    var10 = null;
                    if(!var14) { _fun0015_ip = 1053; continue _fun0015 }
 1050:
                    var10 = var8;
 1053:
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
 1218:
                    return var2;
 1221:
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
    var1 = function _updateVideoProgress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 229; continue _fun0016 }
 16:
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
                    if(!var10) { _fun0016_ip = 187; continue _fun0016 }
 184:
                    var8 = var9;
 187:
                    var7['stack_trace'] = var8;
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=217);
 215:
                    return var2;
 217:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 226; continue _fun0016 }
 223:
                    return var3;
 226:
                    return var2;
 229:
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
    var1 = function _fetchVideoTranscript() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 416; continue _fun0017 }
 13:
                    var7 = var11;
                    var2 = undefined;
                    var8 = undefined;
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 22;
                    var5 = var12[var3];
                    var10 = var4.bind(var2)(var5);
                    var9 = var10.resolveVideoQuestAsset;
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
                    var4 = var17[var9](var16, var15, var14, var13, var12);
                    var8 = var4;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0017_ip = 173; continue _fun0017 }
 113:
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var5 = var3.bind(var4)();
                    var4 = var5.setTranscriptAsset;
                    var3 = {};
                    var9 = var7;
                    var9 = var9.id;
                    var3['questId'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.FAILURE;
                    var3['fetchStatus'] = var9;
                    var3 = var4.bind(var5)(var3);
                    _fun0017_ip = 413; continue _fun0017;
 173:
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var5 = var3.bind(var4)();
                    var4 = var5.setTranscriptAsset;
                    var3 = {};
                    var9 = var7;
                    var9 = var9.id;
                    var3['questId'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.FETCHING;
                    var3['fetchStatus'] = var9;
                    var3 = var4.bind(var5)(var3);
 228: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var8 = var8.url;
                    var3['url'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=284);
 282:
                    return var3;
 284:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 356; continue _fun0017 }
 290:
                    var5 = _closure1_slot5;
                    var4 = var5.getState;
                    var8 = var4.bind(var5)();
                    var5 = var8.setTranscriptAsset;
                    var4 = {};
                    var9 = var7;
                    var9 = var9.id;
                    var4['questId'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.SUCCESS;
                    var4['fetchStatus'] = var9;
                    var9 = var3.text;
                    var4['text'] = var9;
                    var4 = var5.bind(var8)(var4);
 354: // try_end0
                    _fun0017_ip = 413; continue _fun0017;
 356:
                    return var3;
 359: // catch_target0
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
 413:
                    return var2;
 416:
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
    var1 = function _fetchQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 132; continue _fun0018 }
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
                    var9 = _closure1_slot9;
                    var8 = var9.QUEST;
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
                    if(var4) { _fun0018_ip = 129; continue _fun0018 }
 90:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.questConfigFromServer;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 129:
                    return var2;
 132:
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
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchStatus;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ORBS_INTRO_QUEST_ID;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function manuallyStartConsoleQuest() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['manuallyStartConsoleQuest'] = var4;
    var4 = function manualStopConsoleQuest() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['manualStopConsoleQuest'] = var4;
    var4 = function resetRecentQuestCompletions() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resetRecentQuestCompletions'] = var4;
    var4 = function fetchCurrentQuests() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchCurrentQuests'] = var4;
    var4 = function sendHeartbeat() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendHeartbeat'] = var4;
    var4 = function enrollInQuest() {
        var1 = undefined;
        var4 = _closure1_slot15;
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
        var4 = _closure1_slot16;
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
        var4 = _closure1_slot17;
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
        var4 = _closure1_slot18;
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
        var4 = _closure1_slot19;
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
        var4 = _closure1_slot20;
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
        var4 = _closure1_slot21;
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
        var4 = _closure1_slot22;
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
        var4 = _closure1_slot23;
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
        var4 = _closure1_slot24;
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
        var4 = _closure1_slot25;
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
    var2 = function fetchQuest() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuest'] = var2;
    return var1;
})();