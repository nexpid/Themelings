// app/modules/quests/QuestActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
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
                    var13 = var2;
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
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var4 = var7.bind(var9)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.post;
                    var4 = {};
                    var14 = _closure1_slot13;
                    var12 = var14.QUEST_ON_CONSOLE_START;
                    var11 = var12.bind(var14)(var11);
                    var4['url'] = var11;
                    var12 = var13;
                    var11 = undefined;
                    if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var12 = {};
                    var12['preview'] = var13;
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
                    var13 = 0;
                    if(!(var7 > var13)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
                    var7 = {};
                    var8 = var10;
                    var12 = var8.error_hints_v2;
                    var11 = var12.slice;
                    var8 = 5;
                    var8 = var11.bind(var12)(var13, var8);
                    var7['errorHints'] = var8;
case 21: // try_end0
                    return var7;
case 16: // try_start_1
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 10;
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
                    var6 = 11;
                    var6 = var10[var6];
                    var6 = var7.bind(var9)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var17 = var7;
                    var16 = var8;
                    var6 = new var17[var6](var16, var15);
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
                    var5 = 13;
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
                    var7 = 12;
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
                    var4 = 12;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.QuestConsoleStartErrorLocal;
                    var4 = var4.RATE_LIMITED;
                    var5['type'] = var4;
                    var4 = 13;
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
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
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
                    var2 = 9;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var8 = _closure1_slot13;
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
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
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
                    var2 = 9;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var6 = _closure1_slot13;
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
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
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
                    var2 = undefined;
                    var6 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var3 = _closure1_slot8;
                    var3 = var3.isFetchingCurrentQuests;
                    if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var3 = _closure1_slot8;
                    var5 = var3.quests;
                    var3 = var5.keys;
                    var23 = var3.bind(var5)();
                    var3 = new Array(0);
                    var22 = 0;
                    var24 = var3;
                    var5 = arraySpread(var24, var23, var22);
                    var6 = var3;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var5 = var5[var3];
                    var9 = var7.bind(var2)(var5);
                    var7 = var9.dispatch;
                    var5 = {};
                    var10 = 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN';
                    var5['type'] = var10;
                    var5 = var7.bind(var9)(var5);
case 42: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 9;
                    var5 = var9[var5];
                    var5 = var7.bind(var2)(var5);
                    var9 = var5.HTTP;
                    var7 = var9.get;
                    var5 = {};
                    var10 = _closure1_slot13;
                    var10 = var10.QUESTS_CURRENT_QUESTS;
                    var5['url'] = var10;
                    var10 = false;
                    var5['rejectWithError'] = var10;
                    var5 = var7.bind(var9)(var5);
                    SaveGenerator(address=179);
case 43:
                    return var5;
case 44:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 45; continue _fun0004 }
case 19:
                    var7 = var5.body;
                    var13 = var7.quests;
                    var9 = var13.filter;
                    var7 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isQuestWithKnownConfigVersion;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var9.bind(var13)(var7);
                    var9 = var10.map;
                    var7 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.questWithUserStatusFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var12 = var9.bind(var10)(var7);
                    var7 = var5.body;
                    var9 = var7.quest_enrollment_blocked_until;
                    var10 = var12.filter;
                    var7 = function(arg1) {
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
                    var11 = var10.bind(var12)(var7);
                    var10 = var13.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var20 = var10.bind(var13)(var7);
                    var10 = var12.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var12 = var10.bind(var12)(var7);
                    _closure4_slot0 = var12;
                    var10 = var20.filter;
                    var7 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var17 = var10.bind(var20)(var7);
                    var10 = var11.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var19 = var10.bind(var11)(var7);
                    _closure4_slot1 = var19;
                    var10 = var12.filter;
                    var7 = function(arg1) {
                        var3 = _closure4_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var16 = var10.bind(var12)(var7);
                    var18 = var6;
                    var7 = var18.filter;
                    var6 = function(arg1) {
                        var3 = _closure4_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var15 = var7.bind(var18)(var6);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var10 = 15;
                    var10 = var6[var10];
                    var13 = var7.bind(var2)(var10);
                    var12 = var13.addBreadcrumb;
                    var10 = {'category': 'quests.fetch', 'message': 'fetchCurrentQuests completed'};
                    var14 = {};
                    var21 = var20.length;
                    var14['rawCount'] = var21;
                    var14['rawIds'] = var20;
                    var20 = var19.length;
                    var14['validCount'] = var20;
                    var14['validIds'] = var19;
                    var14['prevQuestIds'] = var18;
                    var14['droppedByConfigVersion'] = var17;
                    var14['droppedByPlatformFilter'] = var16;
                    var14['removedFromStore'] = var15;
                    var10['data'] = var14;
                    var10 = var12.bind(var13)(var10);
                    var10 = var5.body;
                    var12 = var10.excluded_quests;
                    var10 = var12.map;
                    var8 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.excludedQuestFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var10.bind(var12)(var8);
                    var6 = var6[var3];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var12 = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                    var6['type'] = var12;
                    var6['quests'] = var11;
                    var6['excludedQuests'] = var10;
                    var6['questEnrollmentBlockedUntil'] = var9;
                    var6 = var7.bind(var8)(var6);
case 50: // try_end0
                    _fun0004_ip = 40; continue _fun0004;
case 45:
                    return var5;
case 51: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var5 = var7.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE';
                    var3['type'] = var6;
                    var6 = 11;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var25 = var7;
                    var24 = var8;
                    var6 = new var25[var6](var24, var23);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
case 40:
                    return var2;
case 38:
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
                    var13 = var2.applicationId;
                    var5 = var2.terminal;
                    var3 = undefined;
                    if(!(var5 === var3)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var5 = false;
case 53:
                    var9 = var5;
                    var16 = var2.executablePath;
                    var12 = var2.executableFingerprint;
                    var14 = undefined;
                    SaveGenerator(address=65);
case 55:
                    return var3;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 57; continue _fun0006 }
case 36: // try_start_0
                    var5 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var4 = 16;
                    var4 = var17[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.post;
                    var4 = {};
                    var18 = _closure1_slot13;
                    var11 = var18.QUESTS_HEARTBEAT;
                    var15 = var8;
                    var11 = var11.bind(var18)(var15);
                    var4['url'] = var11;
                    var11 = {};
                    var18 = var7;
                    var11['stream_key'] = var18;
                    var11['application_id'] = var13;
                    var11['terminal'] = var9;
                    var11['executable_path'] = var16;
                    var11['executable_fingerprint'] = var12;
                    var4['body'] = var11;
                    var11 = {};
                    var16 = _closure1_slot0;
                    var12 = 17;
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
                    var20 = var15;
                    var13 = new var20[var13](var19);
                    var13 = var13 instanceof Object ? var13 : var15;
                    var15 = var13.stack;
                    var14 = var15;
                    var13 = null;
                    var15 = var13 != var15;
                    var13 = '';
                    if(!var15) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var13 = var14;
case 58:
                    var12['stack_trace'] = var13;
                    var13 = true;
                    var12['is_playtime_eligible'] = var13;
                    var11['properties'] = var12;
                    var4['trackedActionData'] = var11;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=316);
case 60:
                    return var4;
case 61:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 10;
                    var5 = var12[var5];
                    var9 = var6.bind(var3)(var5);
                    var6 = var9.dispatch;
                    var5 = {};
                    var11 = 'QUESTS_SEND_HEARTBEAT_SUCCESS';
                    var5['type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = 14;
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
case 64: // try_end0
                    _fun0006_ip = 65; continue _fun0006;
case 62:
                    return var4;
case 66: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 10;
                    var4 = var12[var4];
                    var6 = var10.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'QUESTS_SEND_HEARTBEAT_FAILURE';
                    var4['type'] = var9;
                    var9 = 11;
                    var9 = var12[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var20 = var10;
                    var19 = var11;
                    var9 = new var20[var9](var19, var18);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var4['error'] = var9;
                    var4['questId'] = var8;
                    var4['streamKey'] = var7;
                    var4 = var5.bind(var6)(var4);
case 65:
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
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
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
                    if(var3) { _fun0007_ip = 67; continue _fun0007 }
case 3:
                    var10 = arg1;
                    var4 = var2;
                    var6 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var2 = var2.questContentCTA;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var2 = var4;
                    var8 = var2.questContentCTA;
                    var5 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 19;
                    var9 = var14[var2];
                    var13 = var5.bind(var6)(var9);
                    var9 = var13.shouldMigrateToAdAnalyticsInterface;
                    var2 = var14[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.AdAnalyticsInterfaceExperimentStep;
                    var5 = var2.STEP_2_CLICKED_INTERNAL;
                    var2 = 'enroll_in_quest';
                    var2 = var9.bind(var13)(var5, var2);
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var2 = 23;
                    var2 = var14[var2];
                    var5 = var13.bind(var6)(var2);
                    var3 = var5.trackQuestContentClicked;
                    var2 = {};
                    var9 = var10;
                    var2['questId'] = var9;
                    var9 = var4;
                    var15 = var9.questContent;
                    var2['questContent'] = var15;
                    var2['questContentCTA'] = var8;
                    var15 = var9.questContentPosition;
                    var2['questContentPosition'] = var15;
                    var15 = var9.questContentRowIndex;
                    var2['questContentRowIndex'] = var15;
                    var9 = var9.sourceQuestContent;
                    var2['sourceQuestContent'] = var9;
                    var2 = var3.bind(var5)(var2);
                    _fun0007_ip = 68; continue _fun0007;
case 70:
                    var2 = 20;
                    var2 = var14[var2];
                    var5 = var13.bind(var6)(var2);
                    var3 = var5.captureAdUserAction;
                    var2 = {};
                    var9 = 21;
                    var9 = var14[var9];
                    var9 = var13.bind(var6)(var9);
                    var9 = var9.AdUserActionType;
                    var9 = var9.CLICK_INTERNAL;
                    var2['type'] = var9;
                    var9 = 22;
                    var9 = var14[var9];
                    var9 = var13.bind(var6)(var9);
                    var9 = var9.AdCreativeType;
                    var9 = var9.QUEST;
                    var2['adCreativeType'] = var9;
                    var9 = var10;
                    var2['adCreativeId'] = var9;
                    var2['questContentCTA'] = var8;
                    var8 = var4;
                    var9 = var8.questContent;
                    var2['surfaceId'] = var9;
                    var9 = var8.sourceQuestContent;
                    var2['sourceQuestContent'] = var9;
                    var9 = var8.questContentPosition;
                    var2['questContentPosition'] = var9;
                    var8 = var8.questContentRowIndex;
                    var2['questContentRowIndex'] = var8;
                    var2 = var3.bind(var5)(var2);
case 68:
                    var5 = var10;
                    var2 = _closure1_slot11;
                    if(!(var5 === var2)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 24;
                    var2 = var8[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.dismissOrbsOnboardingExperience;
                    var2 = var2.bind(var5)();
case 72:
                    var8 = _closure1_slot8;
                    var5 = var8.isEnrolling;
                    var2 = var10;
                    var2 = var5.bind(var8)(var2);
                    if(var2) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
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
                    var15 = 25;
                    var5 = var18[var15];
                    var8 = var16.bind(var6)(var5);
                    var5 = var8.getAdMetadataSealed;
                    var14 = var4;
                    var4 = var14.questContent;
                    var13 = var5.bind(var8)(var4);
                    var12 = var13;
                    var4 = var18[var15];
                    var8 = var16.bind(var6)(var4);
                    var5 = var8.getAdTrafficMetadataSealed;
                    var4 = var14.questContent;
                    var17 = var10;
                    var11 = var5.bind(var8)(var4, var17);
                    var4 = 9;
                    var4 = var18[var4];
                    var4 = var16.bind(var6)(var4);
                    var8 = var4.HTTP;
                    var5 = var8.post;
                    var4 = {};
                    var19 = _closure1_slot13;
                    var9 = var19.QUESTS_ENROLL;
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
                    var12 = 'metadata_sealed';
                    var9[11] = var13;
                    var12 = var11;
                    var13 = var7 != var12;
                    var12 = null;
                    if(!var13) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var12 = var11;
case 79:
                    var11 = 'traffic_metadata_sealed';
                    var9[10] = var12;
                    var4['body'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var5.bind(var8)(var4);
                    SaveGenerator(address=699);
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
                    var11 = 14;
                    var11 = var13[var11];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.questUserStatusFromServer;
                    var11 = var4.body;
                    var11 = var12.bind(var13)(var11);
                    var5['enrolledQuestUserStatus'] = var11;
                    var5 = var8.bind(var9)(var5);
                    var5 = {};
                    var8 = _closure1_slot14;
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
                    var2 = 18;
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
                    var5 = _closure1_slot14;
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
                    var3 = _closure1_slot14;
                    var3 = var3.PREVIOUS_IN_FLIGHT_REQUEST;
                    var2['type'] = var3;
                    return var2;
case 67:
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
                    var4 = _closure1_slot8;
                    var3 = var4.isClaimingReward;
                    var3 = var3.bind(var4)(var8);
                    if(var3) { _fun0008_ip = 109; continue _fun0008 }
case 110:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 10;
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
                    var12 = 25;
                    var3 = var18[var12];
                    var8 = var15.bind(var2)(var3);
                    var3 = var8.getAdMetadataSealed;
                    var17 = var9;
                    var14 = var3.bind(var8)(var17);
                    var13 = var14;
                    var3 = var18[var12];
                    var8 = var15.bind(var2)(var3);
                    var3 = var8.getAdTrafficMetadataSealed;
                    var16 = var7;
                    var11 = var3.bind(var8)(var17, var16);
                    var3 = 9;
                    var3 = var18[var3];
                    var3 = var15.bind(var2)(var3);
                    var9 = var3.HTTP;
                    var8 = var9.post;
                    var3 = {};
                    var20 = _closure1_slot13;
                    var10 = var20.QUESTS_CLAIM_REWARD;
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
                    var13 = 'metadata_sealed';
                    var10[12] = var14;
                    var13 = var11;
                    var13 = var12 != var13;
                    var12 = null;
                    if(!var13) { _fun0008_ip = 114; continue _fun0008 }
case 115:
                    var12 = var11;
case 114:
                    var11 = 'traffic_metadata_sealed';
                    var10[10] = var12;
                    var3['body'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=314);
case 116:
                    return var3;
case 60:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 117; continue _fun0008 }
case 118:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 14;
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
                    _fun0008_ip = 121; continue _fun0008;
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
case 121: // try_end0
                    return var6;
case 117:
                    return var3;
case 122: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = var10[var4];
                    var6 = var9.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'QUESTS_CLAIM_REWARD_FAILURE';
                    var4['type'] = var8;
                    var8 = 11;
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
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
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
                    if(var2) { _fun0009_ip = 123; continue _fun0009 }
case 3:
                    var6 = var5;
                    var3 = _closure1_slot8;
                    var2 = var3.isFetchingRewardCode;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0009_ip = 124; continue _fun0009 }
case 69:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 10;
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
case 125: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot13;
                    var10 = var11.QUESTS_REWARD_CODE;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=161);
case 126:
                    return var2;
case 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 128; continue _fun0009 }
case 129:
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
                    var10 = 14;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.questsRewardCodeFromServer;
                    var10 = var2.body;
                    var10 = var11.bind(var12)(var10);
                    var5['rewardCode'] = var10;
                    var5 = var7.bind(var8)(var5);
case 130: // try_end0
                    _fun0009_ip = 124; continue _fun0009;
case 128:
                    return var2;
case 131: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_REWARD_CODE_FAILURE';
                    var3['type'] = var7;
                    var7 = 11;
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
case 124:
                    var2 = undefined;
                    return var2;
case 123:
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
    var1 = function _dismissQuestContent() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 132; continue _fun0010 }
case 133:
                    var6 = var7;
                    var8 = var9;
                    var2 = undefined;
                    var10 = undefined;
                    var5 = _closure1_slot8;
                    var3 = var5.isDismissingContent;
                    var5 = var3.bind(var5)(var7);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var16 = 25;
                    var3 = var3[var16];
                    var7 = var7.bind(var2)(var3);
                    var3 = var7.isDismissible;
                    var3 = var3.bind(var7)(var9);
                    if(var5) { _fun0010_ip = 134; continue _fun0010 }
case 37:
                    if(!var3) { _fun0010_ip = 134; continue _fun0010 }
case 135:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var5 = var5[var3];
                    var9 = var7.bind(var2)(var5);
                    var7 = var9.dispatch;
                    var5 = {};
                    var11 = 'QUESTS_DISMISS_CONTENT_BEGIN';
                    var5['type'] = var11;
                    var11 = var6;
                    var5['questId'] = var11;
                    var11 = var8;
                    var5['content'] = var11;
                    var5 = var7.bind(var9)(var5);
case 13: // try_start_0
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = var11[var16];
                    var7 = var13.bind(var2)(var5);
                    var5 = var7.getAdTrafficMetadataSealed;
                    var15 = var8;
                    var14 = var6;
                    var12 = var5.bind(var7)(var15, var14);
                    var10 = var12;
                    var5 = 9;
                    var5 = var11[var5];
                    var5 = var13.bind(var2)(var5);
                    var8 = var5.HTTP;
                    var7 = var8.post;
                    var5 = {};
                    var17 = _closure1_slot13;
                    var9 = var17.QUESTS_DISMISS_CONTENT;
                    var9 = var9.bind(var17)(var14, var15);
                    var5['url'] = var9;
                    var9 = {};
                    var11 = var11[var16];
                    var13 = var13.bind(var2)(var11);
                    var11 = var13.getAdDecisionData;
                    var18 = var11.bind(var13)(var14, var15);
                    var19 = var9;
                    var11 = copyDataProperties(var19, var18);
                    var11 = null;
                    var12 = var11 != var12;
                    if(!var12) { _fun0010_ip = 136; continue _fun0010 }
case 137:
                    var11 = var10;
case 136:
                    var10 = 'traffic_metadata_sealed';
                    var9[9] = var11;
                    var5['body'] = var9;
                    var9 = false;
                    var5['rejectWithError'] = var9;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=299);
case 138:
                    return var5;
case 139:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 140; continue _fun0010 }
case 141:
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = var12[var3];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'QUESTS_DISMISS_CONTENT_SUCCESS';
                    var7['type'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 14;
                    var10 = var12[var10];
                    var12 = var11.bind(var2)(var10);
                    var11 = var12.questUserStatusFromServer;
                    var10 = var5.body;
                    var10 = var11.bind(var12)(var10);
                    var7['dismissedQuestUserStatus'] = var10;
                    var7 = var8.bind(var9)(var7);
case 142: // try_end0
                    _fun0010_ip = 134; continue _fun0010;
case 140:
                    return var5;
case 143: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_DISMISS_CONTENT_FAILURE';
                    var3['type'] = var7;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var20 = var8;
                    var19 = var9;
                    var7 = new var20[var7](var19, var18);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['questId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 134:
                    return var2;
case 132:
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
                    if(var3) { _fun0011_ip = 144; continue _fun0011 }
case 3:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0011_ip = 145; continue _fun0011 }
case 5:
                    var2 = 1;
case 145:
                    var10 = var2;
                    SaveGenerator(address=32);
case 146:
                    return var3;
case 147:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 148; continue _fun0011 }
case 149: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var12 = _closure1_slot13;
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
case 150:
                    return var4;
case 151:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 152; continue _fun0011 }
case 153:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 10;
                    var5 = var11[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var10 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var5['type'] = var10;
                    var10 = _closure1_slot0;
                    var9 = 14;
                    var9 = var11[var9];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.questUserStatusFromServer;
                    var9 = var4.body;
                    var9 = var10.bind(var11)(var9);
                    var5['previewQuestUserStatus'] = var9;
                    var5 = var6.bind(var8)(var5);
case 20: // try_end0
                    _fun0011_ip = 154; continue _fun0011;
case 152:
                    return var4;
case 155: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 10;
                    var4 = var11[var4];
                    var6 = var9.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    var4['type'] = var8;
                    var8 = 11;
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
case 154:
                    return var3;
case 148:
                    return var2;
case 144:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
                    if(var2) { _fun0012_ip = 156; continue _fun0012 }
case 157:
                    var5 = arg1;
case 3: // try_start_0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var9 = undefined;
                    var2 = var3.bind(var9)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var10 = _closure1_slot13;
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
case 125:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 44; continue _fun0012 }
case 158:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 10;
                    var3 = var10[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var3['type'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 14;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.questUserStatusFromServer;
                    var7 = var2.body;
                    var7 = var8.bind(var9)(var7);
                    var3['previewQuestUserStatus'] = var7;
                    var3 = var4.bind(var6)(var3);
case 43: // try_end0
                    _fun0012_ip = 159; continue _fun0012;
case 44:
                    return var2;
case 160: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 10;
                    var2 = var10[var2];
                    var7 = undefined;
                    var4 = var9.bind(var7)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    var2['type'] = var6;
                    var6 = 11;
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
case 159:
                    var2 = undefined;
                    return var2;
case 156:
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
                    if(var2) { _fun0013_ip = 161; continue _fun0013 }
case 157:
                    var5 = arg1;
case 3: // try_start_0
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var2 = var6[var3];
                    var9 = undefined;
                    var8 = var4.bind(var9)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var10 = 'QUESTS_DOCK_RESET_SOFT_DISMISSAL';
                    var2['type'] = var10;
                    var2 = var4.bind(var8)(var2);
                    var4 = _closure1_slot0;
                    var2 = 9;
                    var2 = var6[var2];
                    var2 = var4.bind(var9)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.del;
                    var2 = {};
                    var11 = _closure1_slot13;
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
case 162:
                    return var2;
case 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 164; continue _fun0013 }
case 165:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var3['type'] = var8;
                    var8 = _closure1_slot0;
                    var7 = 14;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.questUserStatusFromServer;
                    var7 = var2.body;
                    var7 = var8.bind(var9)(var7);
                    var3['previewQuestUserStatus'] = var7;
                    var3 = var4.bind(var6)(var3);
case 70: // try_end0
                    _fun0013_ip = 144; continue _fun0013;
case 164:
                    return var2;
case 166: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 10;
                    var2 = var10[var2];
                    var7 = undefined;
                    var4 = var9.bind(var7)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                    var2['type'] = var6;
                    var6 = 11;
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
case 144:
                    var2 = undefined;
                    return var2;
case 161:
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
case 157:
                    var2 = _closure1_slot8;
                    var2 = var2.isFetchingClaimedQuests;
                    if(var2) { _fun0014_ip = 139; continue _fun0014 }
case 167:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var4 = var4[var2];
                    var8 = undefined;
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
case 168: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var8)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot13;
                    var7 = var7.QUESTS_CLAIMED_QUESTS;
                    var4['url'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=134);
case 163:
                    return var4;
case 169:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 170; continue _fun0014 }
case 171:
                    var5 = var4.body;
                    var7 = var5.quests;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
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
case 164: // try_end0
                    _fun0014_ip = 139; continue _fun0014;
case 170:
                    return var4;
case 172: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = var9[var2];
                    var4 = var6.bind(var8)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE';
                    var2['type'] = var5;
                    var5 = 11;
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
case 139:
                    var2 = undefined;
                    return var2;
case 154:
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
    var1 = function _fetchQuestToDeliver() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var36 = arg1;
                    var37 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 173; continue _fun0015 }
case 174:
                    var6 = var36;
                    var13 = var37;
                    var2 = undefined;
                    var12 = undefined;
                    var31 = undefined;
                    var30 = undefined;
                    var29 = undefined;
                    var28 = undefined;
                    var27 = undefined;
                    var26 = undefined;
                    var23 = undefined;
                    var24 = undefined;
                    var32 = undefined;
                    var22 = undefined;
                    var33 = undefined;
                    var35 = undefined;
                    var _closure4_slot0 = var2;
                    var34 = undefined;
                    var17 = undefined;
                    var25 = undefined;
                    var _closure4_slot1 = var2;
                    var21 = undefined;
                    var19 = undefined;
                    var15 = undefined;
                    var18 = undefined;
                    var8 = undefined;
                    var20 = global;
                    var4 = var20.Date;
                    var3 = var4.now;
                    var12 = var3.bind(var4)();
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 26;
                    var3 = var5[var4];
                    var16 = var10.bind(var2)(var3);
                    var3 = var16.recordQuestRequestAttempt;
                    var11 = '/quests/decision';
                    var3 = var3.bind(var16)(var11, var37, var36);
                    var3 = 10;
                    var5 = var5[var3];
                    var16 = var10.bind(var2)(var5);
                    var10 = var16.dispatch;
                    var5 = {};
                    var37 = 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN';
                    var5['type'] = var37;
                    var5['placement'] = var36;
                    var5 = var10.bind(var16)(var5);
case 175: // try_start_0
                    var10 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = 27;
                    var5 = var16[var5];
                    var10 = var10.bind(var2)(var5);
                    var5 = var10.getSession;
                    var5 = var5.bind(var10)();
                    SaveGenerator(address=210);
case 20:
                    return var5;
case 152:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0015_ip = 176; continue _fun0015 }
case 172:
                    var32 = var5;
                    var16 = _closure1_slot0;
                    var36 = _closure1_slot2;
                    var10 = 28;
                    var10 = var36[var10];
                    var16 = var16.bind(var2)(var10);
                    var10 = var16.getOrRefreshAdSession;
                    var10 = var10.bind(var16)();
                    SaveGenerator(address=256);
case 177:
                    return var10;
case 131:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=15);
                    if(var16) { _fun0015_ip = 178; continue _fun0015 }
case 179:
                    var22 = var10;
                    var36 = _closure1_slot0;
                    var37 = _closure1_slot2;
                    var16 = 29;
                    var16 = var37[var16];
                    var16 = var36.bind(var2)(var16);
                    var37 = var16.LessPersonalizedAdsExperiment;
                    var36 = var37.getConfig;
                    var16 = {};
                    var38 = 'QuestActionCreators.fetchQuestToDeliver';
                    var16['location'] = var38;
                    var33 = var36.bind(var37)(var16);
                    var16 = _closure1_slot4;
                    var36 = var16.bind(var2)();
                    var35 = var36;
                    var16 = null;
                    if(!(var16 == var36)) { _fun0015_ip = 180; continue _fun0015 }
case 181:
                    var37 = new Array(0);
                    _fun0015_ip = 182; continue _fun0015;
case 180:
                    var37 = var35.bind(var2)();
case 182:
                    var36 = _closure1_slot7;
                    var35 = var36.getGuildsTree;
                    var35 = var35.bind(var36)();
                    _closure4_slot0 = var35;
                    var36 = var37.filter;
                    var35 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var5 = arg1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 30;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.isPseudoGuildId;
                            var2 = var2.bind(var4)(var5);
                            if(var2) { _fun0016_ip = 183; continue _fun0016 }
case 54:
                            var4 = _closure4_slot0;
                            var2 = var4.getNode;
                            var2 = var2.bind(var4)(var5);
                            var4 = null;
                            var5 = var4 == var2;
                            var1 = undefined;
                            if(var5) { _fun0016_ip = 184; continue _fun0016 }
case 185:
                            var1 = var2.parentId;
case 184:
                            var1 = var4 == var1;
                            if(var1) { _fun0016_ip = 186; continue _fun0016 }
case 187:
                            var4 = _closure1_slot5;
                            var3 = var4.isFolderExpanded;
                            var2 = var2.parentId;
                            var1 = var3.bind(var4)(var2);
case 186:
                            return var1;
case 183:
                            var1 = false;
                            return var1;
                        }
                    };
                    var38 = var36.bind(var37)(var35);
                    var37 = var38.slice;
                    var36 = 0;
                    var35 = 50;
                    var34 = var37.bind(var38)(var36, var35);
                    var35 = var33.enabled;
                    var33 = undefined;
                    if(!var35) { _fun0015_ip = 188; continue _fun0015 }
case 189:
                    var33 = var34;
case 188:
                    var17 = var33;
                    var35 = var20.URLSearchParams;
                    var33 = {};
                    var36 = var20.String;
                    var34 = var6;
                    var34 = var36.bind(var2)(var34);
                    var33['placement'] = var34;
                    var34 = var35.prototype;
                    var34 = Object.create(var34, {constructor: {value: var35}});
                    var42 = var34;
                    var41 = var33;
                    var33 = new var42[var35](var41, var40);
                    var33 = var33 instanceof Object ? var33 : var34;
                    var25 = var33;
                    _closure4_slot1 = var33;
                    var33 = var32;
                    var34 = var16 == var33;
                    var33 = undefined;
                    if(var34) { _fun0015_ip = 190; continue _fun0015 }
case 191:
                    var34 = var32;
                    var33 = var34.uuid;
case 190:
                    if(!(var16 != var33)) { _fun0015_ip = 192; continue _fun0015 }
case 193:
                    var35 = var25;
                    var34 = var35.append;
                    var33 = var32.uuid;
                    var32 = 'client_heartbeat_session_id';
                    var32 = var34.bind(var35)(var32, var33);
case 192:
                    var32 = var22;
                    var32 = var32.uuid;
                    if(!(var16 != var32)) { _fun0015_ip = 194; continue _fun0015 }
case 195:
                    var34 = var25;
                    var33 = var34.append;
                    var32 = var22.uuid;
                    var22 = 'client_ad_session_id';
                    var22 = var33.bind(var34)(var22, var32);
case 194:
                    var22 = var17;
                    if(!(var16 != var22)) { _fun0015_ip = 196; continue _fun0015 }
case 50:
                    var22 = var17;
                    var17 = var22.forEach;
                    var14 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.append;
                        var2 = 'visible_guild_ids';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var14 = var17.bind(var22)(var14);
case 196:
                    var17 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var14 = 9;
                    var14 = var22[var14];
                    var14 = var17.bind(var2)(var14);
                    var22 = var14.HTTP;
                    var17 = var22.get;
                    var14 = {};
                    var32 = _closure1_slot13;
                    var35 = var32.QUEST_FETCH_QUEST_TO_DELIVER;
                    var32 = var25;
                    var25 = var32.toString;
                    var34 = var25.bind(var32)();
                    var25 = var20.HermesInternal;
                    var33 = var25.concat;
                    var32 = '';
                    var25 = '?';
                    var25 = var33.bind(var32)(var35, var25, var34);
                    var14['url'] = var25;
                    var25 = false;
                    var14['rejectWithError'] = var25;
                    var25 = {};
                    var33 = _closure1_slot6;
                    var32 = var33.getType;
                    var32 = var32.bind(var33)();
                    var25['connection_type'] = var32;
                    var14['context'] = var25;
                    var14 = var17.bind(var22)(var14);
                    SaveGenerator(address=709);
case 197:
                    return var14;
case 198:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=16);
                    if(var17) { _fun0015_ip = 199; continue _fun0015 }
case 200:
                    var17 = var14.body;
                    var19 = var17;
                    var17 = var17.creative;
                    var15 = var17;
                    if(!(var16 == var17)) { _fun0015_ip = 201; continue _fun0015 }
case 202:
                    var17 = var19;
                    var17 = var17.quest;
                    var18 = var17;
                    var22 = var16 != var17;
                    var17 = undefined;
                    if(!var22) { _fun0015_ip = 203; continue _fun0015 }
case 204:
                    var25 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var22 = 14;
                    var22 = var32[var22];
                    var25 = var25.bind(var2)(var22);
                    var22 = var25.questConfigFromServer;
                    var17 = var22.bind(var25)(var18);
case 203:
                    var21 = var17;
                    _fun0015_ip = 205; continue _fun0015;
case 201:
                    var17 = var15;
                    var18 = var17.creative_type;
                    var22 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var17 = 22;
                    var17 = var25[var17];
                    var17 = var22.bind(var2)(var17);
                    var17 = var17.AdCreativeType;
                    var17 = var17.QUEST;
                    if(!(var18 === var17)) { _fun0015_ip = 205; continue _fun0015 }
case 206:
                    var18 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var17 = 14;
                    var17 = var22[var17];
                    var18 = var18.bind(var2)(var17);
                    var17 = var18.questConfigFromServer;
                    var15 = var15.creative_content;
                    var21 = var17.bind(var18)(var15);
case 205:
                    var17 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var15 = var15[var3];
                    var18 = var17.bind(var2)(var15);
                    var17 = var18.dispatch;
                    var15 = {};
                    var22 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                    var15['type'] = var22;
                    var22 = var21;
                    var15['quest'] = var22;
                    var25 = {};
                    var22 = var19;
                    var22 = var22.ad_identifiers;
                    var31 = var22;
                    var32 = var16 == var22;
                    var22 = undefined;
                    if(var32) { _fun0015_ip = 207; continue _fun0015 }
case 208:
                    var22 = var31.ad_id;
case 207:
                    var25['ad_id'] = var22;
                    var22 = var19;
                    var22 = var22.ad_identifiers;
                    var30 = var22;
                    var31 = var16 == var22;
                    var22 = undefined;
                    if(var31) { _fun0015_ip = 209; continue _fun0015 }
case 210:
                    var22 = var30.adset_id;
case 209:
                    var25['adset_id'] = var22;
                    var22 = var19;
                    var22 = var22.ad_identifiers;
                    var29 = var22;
                    var30 = var16 == var22;
                    var22 = undefined;
                    if(var30) { _fun0015_ip = 211; continue _fun0015 }
case 212:
                    var22 = var29.ad_set_id;
case 211:
                    var25['ad_set_id'] = var22;
                    var22 = var19;
                    var22 = var22.ad_identifiers;
                    var28 = var22;
                    var29 = var16 == var22;
                    var22 = undefined;
                    if(var29) { _fun0015_ip = 213; continue _fun0015 }
case 214:
                    var22 = var28.campaign_id;
case 213:
                    var25['campaign_id'] = var22;
                    var22 = var19;
                    var22 = var22.ad_identifiers;
                    var27 = var22;
                    var28 = var16 == var22;
                    var22 = undefined;
                    if(var28) { _fun0015_ip = 215; continue _fun0015 }
case 216:
                    var22 = var27.creative_id;
case 215:
                    var25['creative_id'] = var22;
                    var22 = var19;
                    var22 = var22.ad_identifiers;
                    var26 = var22;
                    var27 = var16 == var22;
                    var22 = undefined;
                    if(var27) { _fun0015_ip = 217; continue _fun0015 }
case 218:
                    var22 = var26.creative_type;
case 217:
                    var25['creative_type'] = var22;
                    var22 = var19;
                    var26 = var22.request_id;
                    var25['decision_id'] = var26;
                    var26 = var22.ad_identifiers;
                    var26 = var16 != var26;
                    var25['is_targeted'] = var26;
                    var15['adDecisionData'] = var25;
                    var25 = var22.metadata_sealed;
                    var15['metadataSealed'] = var25;
                    var25 = var22.traffic_metadata_sealed;
                    var15['trafficMetadataSealed'] = var25;
                    var25 = var22.ad_context;
                    var15['adContext'] = var25;
                    var25 = var22.response_ttl_seconds;
                    var15['responseTtlSeconds'] = var25;
                    var25 = var6;
                    var15['placement'] = var25;
                    var25 = var12;
                    var15['fetchedAt'] = var25;
                    var15 = var17.bind(var18)(var15);
                    var17 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var15 = var15[var4];
                    var18 = var17.bind(var2)(var15);
                    var17 = var18.recordQuestRequestApiResponse;
                    var15 = {};
                    var25 = true;
                    var15['wasSuccessful'] = var25;
                    var25 = var20.String;
                    var22 = var22.request_id;
                    var22 = var25.bind(var2)(var22);
                    var15['adRequestId'] = var22;
                    var22 = var21;
                    var24 = var22;
                    var25 = var16 == var22;
                    var22 = undefined;
                    if(var25) { _fun0015_ip = 219; continue _fun0015 }
case 220:
                    var22 = var24.id;
case 219:
                    var23 = var22;
                    var24 = var16 != var22;
                    var22 = null;
                    if(!var24) { _fun0015_ip = 221; continue _fun0015 }
case 222:
                    var22 = var23;
case 221:
                    var15['currentQuestId'] = var22;
                    var22 = var12;
                    var15['currentFetchedAt'] = var22;
                    var15 = var17.bind(var18)(var11, var15);
                    var15 = var21;
                    if(!(var16 != var15)) { _fun0015_ip = 223; continue _fun0015 }
case 224:
                    var16 = var6;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var15 = 12;
                    var15 = var18[var15];
                    var15 = var17.bind(var2)(var15);
                    var15 = var15.AdPlacement;
                    var15 = var15.DESKTOP_ACCOUNT_PANEL_AREA;
                    if(!(var16 === var15)) { _fun0015_ip = 225; continue _fun0015 }
case 226:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var15 = 31;
                    var15 = var17[var15];
                    var17 = var16.bind(var2)(var15);
                    var16 = var17.startTracking;
                    var15 = var21;
                    var15 = var15.id;
                    var15 = var16.bind(var17)(var15);
case 225:
                    var23 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var15 = 32;
                    var15 = var24[var15];
                    var18 = var23.bind(var2)(var15);
                    var17 = var18.track;
                    var15 = _closure1_slot12;
                    var16 = var15.QUEST_DECISION_RECEIVED;
                    var15 = {};
                    var22 = 33;
                    var22 = var24[var22];
                    var22 = var23.bind(var2)(var22);
                    var40 = var22.bind(var2)();
                    var41 = var15;
                    var22 = copyDataProperties(var41, var40);
                    var22 = var21.id;
                    var21 = 'quest_id';
                    var15[20] = var22;
                    var22 = var13;
                    var21 = 'caller_source';
                    var15[20] = var22;
                    var20 = var20.String;
                    var19 = var19.request_id;
                    var20 = var20.bind(var2)(var19);
                    var19 = 'ad_request_id';
                    var15[18] = var20;
                    var15 = var17.bind(var18)(var16, var15);
case 227: // try_end0
                    _fun0015_ip = 228; continue _fun0015;
case 223:
                    return var2;
case 199:
                    return var14;
case 178:
                    return var10;
case 176:
                    return var5;
case 229: // catch_target0
                    CatchBlockStart(arg_register=13);
                    var9 = var14;
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = var16[var4];
                    var10 = var15.bind(var2)(var4);
                    var5 = var10.recordQuestRequestApiResponse;
                    var4 = {};
                    var17 = false;
                    var4['wasSuccessful'] = var17;
                    var4['currentFetchedAt'] = var12;
                    var4 = var5.bind(var10)(var11, var4);
                    var4 = 32;
                    var4 = var16[var4];
                    var12 = var15.bind(var2)(var4);
                    var11 = var12.track;
                    var4 = _closure1_slot12;
                    var5 = var4.QUEST_DECISION_ROUNDTRIP_ERROR;
                    var4 = {};
                    var10 = 33;
                    var10 = var16[var10];
                    var10 = var15.bind(var2)(var10);
                    var40 = var10.bind(var2)();
                    var41 = var4;
                    var10 = copyDataProperties(var41, var40);
                    var10 = null;
                    var15 = var10 == var14;
                    var14 = undefined;
                    if(var15) { _fun0015_ip = 230; continue _fun0015 }
case 231:
                    var15 = var9;
                    var14 = var15.message;
case 230:
                    var8 = var14;
                    var14 = var10 != var14;
                    var10 = null;
                    if(!var14) { _fun0015_ip = 232; continue _fun0015 }
case 233:
                    var10 = var8;
case 232:
                    var8 = 'reason';
                    var4[7] = var10;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var14 = var10[var7];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.prototype;
                    var15 = Object.create(var15, {constructor: {value: var14}});
                    var42 = var15;
                    var41 = var9;
                    var14 = new var42[var14](var41, var40);
                    var15 = var14 instanceof Object ? var14 : var15;
                    var14 = var15.getAnyErrorMessage;
                    var15 = var14.bind(var15)();
                    var14 = 'api_error';
                    var4[13] = var15;
                    var14 = var13;
                    var13 = 'caller_source';
                    var4[12] = var14;
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
                    var42 = var8;
                    var41 = var9;
                    var7 = new var42[var7](var41, var40);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['placement'] = var6;
                    var3 = var4.bind(var5)(var3);
case 228:
                    return var2;
case 173:
                    return var1;
                }
            };
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
    var1 = function _fetchEarnedQuestToDeliver() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 202; continue _fun0017 }
case 174:
                    var4 = var12;
                    var3 = arg3;
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var10 = undefined;
                    var11 = undefined;
                    var15 = undefined;
                    var22 = undefined;
                    var _closure4_slot1 = var2;
                    var7 = _closure1_slot8;
                    var5 = var7.isFetchingEarnedQuestToDeliverByPlacement;
                    var5 = var5.bind(var7)(var12);
                    if(var5) { _fun0017_ip = 234; continue _fun0017 }
case 235:
                    var5 = _closure1_slot8;
                    var12 = var5.earnedQuestForPlacement;
                    var7 = var12.get;
                    var5 = var4;
                    var7 = var7.bind(var12)(var5);
                    var14 = null;
                    var12 = var14 == var7;
                    var5 = undefined;
                    if(var12) { _fun0017_ip = 236; continue _fun0017 }
case 111:
                    var5 = var7.earnedDecisionByQuestId;
case 236:
                    _closure4_slot0 = var5;
                    var7 = var8.filter;
                    var5 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var3 = _closure4_slot0;
                            var2 = null;
                            var2 = var2 == var3;
                            var4 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0018_ip = 7; continue _fun0018 }
case 47:
                            var5 = _closure4_slot0;
                            var2 = var5.get;
                            var1 = arg1;
                            var3 = var2.bind(var5)(var1);
case 7:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 25;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.earnedDecisionIsValid;
                            var1 = var1.bind(var2)(var3);
                            var1 = !var1;
                            return var1;
                        }
                    };
                    var5 = var7.bind(var8)(var5);
                    var10 = var5;
                    var7 = var5.length;
                    var5 = 0;
                    if(!(var5 !== var7)) { _fun0017_ip = 234; continue _fun0017 }
case 237:
                    var12 = global;
                    var7 = var12.Date;
                    var5 = var7.now;
                    var11 = var5.bind(var7)();
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 34;
                    var13 = var7[var5];
                    var17 = var8.bind(var2)(var13);
                    var13 = var17.recordEarnedRequestAttempt;
                    var16 = var4;
                    var3 = var13.bind(var17)(var16, var3);
                    var3 = 10;
                    var7 = var7[var3];
                    var13 = var8.bind(var2)(var7);
                    var8 = var13.dispatch;
                    var7 = {};
                    var17 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN';
                    var7['type'] = var17;
                    var7['content'] = var16;
                    var7 = var8.bind(var13)(var7);
case 238: // try_start_0
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 27;
                    var7 = var13[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.getSession;
                    var7 = var7.bind(var8)();
                    SaveGenerator(address=274);
case 239:
                    return var7;
case 240:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0017_ip = 241; continue _fun0017 }
case 115:
                    var22 = var7;
                    var16 = var10;
                    var13 = var16.join;
                    var8 = ',';
                    var21 = var13.bind(var16)(var8);
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var8 = 9;
                    var8 = var16[var8];
                    var8 = var13.bind(var2)(var8);
                    var16 = var8.HTTP;
                    var13 = var16.get;
                    var8 = {};
                    var20 = _closure1_slot13;
                    var19 = var20.QUEST_EARNED_DECISION;
                    var18 = var4;
                    var23 = var14 == var7;
                    var17 = undefined;
                    if(var23) { _fun0017_ip = 242; continue _fun0017 }
case 243:
                    var17 = var22.uuid;
case 242:
                    var17 = var19.bind(var20)(var21, var18, var17);
                    var8['url'] = var17;
                    var17 = false;
                    var8['rejectWithError'] = var17;
                    var8 = var13.bind(var16)(var8);
                    SaveGenerator(address=389);
case 244:
                    return var8;
case 245:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=12);
                    if(var13) { _fun0017_ip = 246; continue _fun0017 }
case 72:
                    var13 = var8.body;
                    var13 = var13.quests;
                    _closure4_slot1 = var13;
                    var13 = var8.body;
                    var18 = var13.response_ttl_seconds;
                    var12 = var12.Map;
                    var13 = var10;
                    var10 = var13.map;
                    var9 = function(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            var2 = arg1;
                            var3 = _closure4_slot1;
                            var5 = null;
                            var4 = var5 == var3;
                            var7 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0019_ip = 247; continue _fun0019 }
case 248:
                            var1 = _closure4_slot1;
                            var3 = var1[var2];
case 247:
                            var1 = new Array(2);
                            var1[0] = var2;
                            var4 = var5 != var3;
                            var2 = null;
                            if(!var4) { _fun0019_ip = 249; continue _fun0019 }
case 250:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 14;
                            var4 = var8[var4];
                            var6 = var6.bind(var7)(var4);
                            var4 = var6.isQuestWithKnownConfigVersion;
                            var4 = var4.bind(var6)(var3);
                            var2 = null;
                            if(!var4) { _fun0019_ip = 249; continue _fun0019 }
case 251:
                            var2 = var3;
case 249:
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var26 = var10.bind(var13)(var9);
                    var10 = var12.prototype;
                    var10 = Object.create(var10, {constructor: {value: var12}});
                    var27 = var10;
                    var9 = new var27[var12](var26, var25);
                    var13 = var9 instanceof Object ? var9 : var10;
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var12 = var9[var3];
                    var17 = var10.bind(var2)(var12);
                    var16 = var17.dispatch;
                    var12 = {};
                    var19 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS';
                    var12['type'] = var19;
                    var12['serverQuests'] = var13;
                    var13 = var4;
                    var12['content'] = var13;
                    var19 = var11;
                    var12['fetchedAt'] = var19;
                    var12['responseTtlSeconds'] = var18;
                    var12 = var16.bind(var17)(var12);
                    var9 = var9[var5];
                    var12 = var10.bind(var2)(var9);
                    var10 = var12.recordEarnedRequestApiResponse;
                    var9 = {};
                    var16 = true;
                    var9['wasSuccessful'] = var16;
                    var16 = var8.body;
                    var16 = var16.request_id;
                    var15 = var16;
                    var16 = var14 != var16;
                    var14 = null;
                    if(!var16) { _fun0017_ip = 252; continue _fun0017 }
case 253:
                    var14 = var15;
case 252:
                    var9['requestId'] = var14;
                    var14 = var11;
                    var9['fetchedAt'] = var14;
                    var9 = var10.bind(var12)(var13, var9);
case 254: // try_end0
                    _fun0017_ip = 234; continue _fun0017;
case 246:
                    return var8;
case 241:
                    return var7;
case 255: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = var10[var5];
                    var7 = var8.bind(var2)(var5);
                    var5 = var7.recordEarnedRequestApiResponse;
                    var6 = var4;
                    var4 = {};
                    var12 = false;
                    var4['wasSuccessful'] = var12;
                    var4['fetchedAt'] = var11;
                    var4 = var5.bind(var7)(var6, var4);
                    var3 = var10[var3];
                    var5 = var8.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE';
                    var3['type'] = var7;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var27 = var8;
                    var26 = var9;
                    var7 = new var27[var7](var26, var25);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['content'] = var6;
                    var3 = var4.bind(var5)(var3);
case 234:
                    return var2;
case 202:
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
    var1 = function _updateVideoProgress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 256; continue _fun0020 }
case 133:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 16;
                    var2 = var11[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.post;
                    var2 = {};
                    var10 = _closure1_slot13;
                    var6 = var10.QUESTS_VIDEO_PROGRESS;
                    var6 = var6.bind(var10)(var8);
                    var2['url'] = var6;
                    var6 = {};
                    var6['timestamp'] = var9;
                    var2['body'] = var6;
                    var6 = {};
                    var10 = _closure1_slot0;
                    var7 = 17;
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
                    if(!var10) { _fun0020_ip = 257; continue _fun0020 }
case 258:
                    var8 = var9;
case 257:
                    var7['stack_trace'] = var8;
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=217);
case 259:
                    return var2;
case 166:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 260; continue _fun0020 }
case 261:
                    return var3;
case 260:
                    return var2;
case 256:
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
    var1 = function _fetchVideoTranscript() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var11 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 262; continue _fun0021 }
case 3:
                    var8 = arg1;
                    var3 = undefined;
                    if(!(var11 === var3)) { _fun0021_ip = 4; continue _fun0021 }
case 5:
                    var11 = false;
case 4:
                    var10 = undefined;
                    SaveGenerator(address=30);
case 263:
                    return var3;
case 146:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 264; continue _fun0021 }
case 265:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 35;
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
                    if(!(var4 == var5)) { _fun0021_ip = 175; continue _fun0021 }
case 266:
                    var5 = _closure1_slot9;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setTranscriptAsset;
                    var4 = {};
                    var9 = var8;
                    var9 = var9.id;
                    var4['questId'] = var9;
                    var9 = _closure1_slot10;
                    var9 = var9.FAILURE;
                    var4['fetchStatus'] = var9;
                    var4 = var5.bind(var6)(var4);
                    _fun0021_ip = 267; continue _fun0021;
case 175:
                    var5 = _closure1_slot9;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setTranscriptAsset;
                    var4 = {};
                    var9 = var8;
                    var9 = var9.id;
                    var4['questId'] = var9;
                    var9 = _closure1_slot10;
                    var9 = var9.FETCHING;
                    var4['fetchStatus'] = var9;
                    var4 = var5.bind(var6)(var4);
case 268: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
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
case 269:
                    return var4;
case 270:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 271; continue _fun0021 }
case 272:
                    var6 = _closure1_slot9;
                    var5 = var6.getState;
                    var9 = var5.bind(var6)();
                    var6 = var9.setTranscriptAsset;
                    var5 = {};
                    var11 = var8;
                    var11 = var11.id;
                    var5['questId'] = var11;
                    var11 = _closure1_slot10;
                    var11 = var11.SUCCESS;
                    var5['fetchStatus'] = var11;
                    var11 = var4.text;
                    var5['text'] = var11;
                    var10 = var10.url;
                    var5['url'] = var10;
                    var5 = var6.bind(var9)(var5);
case 273: // try_end0
                    _fun0021_ip = 267; continue _fun0021;
case 271:
                    return var4;
case 274: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot9;
                    var4 = var5.getState;
                    var6 = var4.bind(var5)();
                    var5 = var6.setTranscriptAsset;
                    var4 = {};
                    var8 = var8.id;
                    var4['questId'] = var8;
                    var7 = _closure1_slot10;
                    var7 = var7.FAILURE;
                    var4['fetchStatus'] = var7;
                    var4 = var5.bind(var6)(var4);
case 267:
                    return var3;
case 264:
                    return var2;
case 262:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _fetchQuest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 163; continue _fun0022 }
case 157:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot13;
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
case 187:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 275; continue _fun0022 }
case 249:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.questConfigFromServer;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 275:
                    return var2;
case 163:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function _fetchQuestPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 123; continue _fun0023 }
case 3:
                    var6 = var5;
                    var3 = _closure1_slot8;
                    var2 = var3.isFetchingQuestPreview;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0023_ip = 124; continue _fun0023 }
case 69:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 10;
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
case 125: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot13;
                    var10 = var11.QUEST_PREVIEW;
                    var8 = var6;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=161);
case 126:
                    return var2;
case 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0023_ip = 128; continue _fun0023 }
case 129:
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
                    var10 = 14;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.questWithUserStatusFromServer;
                    var10 = var2.body;
                    var10 = var11.bind(var12)(var10);
                    var5['quest'] = var10;
                    var5 = var7.bind(var8)(var5);
case 130: // try_end0
                    _fun0023_ip = 124; continue _fun0023;
case 128:
                    return var2;
case 131: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_PREVIEW_FAILURE';
                    var3['type'] = var7;
                    var7 = 11;
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
case 124:
                    var2 = undefined;
                    return var2;
case 123:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot34 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function _fetchQuestHomeHero() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 276; continue _fun0024 }
case 157:
                    var2 = undefined;
                    var7 = undefined;
                    var12 = undefined;
                    var17 = undefined;
                    var23 = undefined;
                    var10 = undefined;
                    var22 = undefined;
                    var21 = undefined;
                    var20 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    var26 = undefined;
                    var16 = undefined;
                    var14 = undefined;
                    var9 = undefined;
                    var13 = undefined;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AdPlacement;
                    var6 = var3.QUEST_HOME_BANNER_DESKTOP;
                    var7 = var6;
                    var4 = _closure1_slot8;
                    var3 = var4.isFetchingQuestToDeliverByPlacement;
                    var3 = var3.bind(var4)(var6);
                    if(var3) { _fun0024_ip = 277; continue _fun0024 }
case 186:
                    var4 = _closure1_slot8;
                    var3 = var4.getLastFetchedQuestHomeHero;
                    var4 = var3.bind(var4)();
                    var15 = null;
                    if(!(var15 != var4)) { _fun0024_ip = 278; continue _fun0024 }
case 151:
                    var3 = global;
                    var6 = var3.Date;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    var4 = var3 - var4;
                    var3 = _closure1_slot15;
                    if(!(!(var4 <= var3))) { _fun0024_ip = 277; continue _fun0024 }
case 278:
                    var25 = global;
                    var4 = var25.Date;
                    var3 = var4.now;
                    var12 = var3.bind(var4)();
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 10;
                    var3 = var3[var4];
                    var24 = var6.bind(var2)(var3);
                    var6 = var24.dispatch;
                    var3 = {};
                    var27 = 'QUESTS_FETCH_QUEST_HOME_HERO_BEGIN';
                    var3['type'] = var27;
                    var27 = var7;
                    var3['placement'] = var27;
                    var3 = var6.bind(var24)(var3);
case 279: // try_start_0
                    var6 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var3 = 27;
                    var3 = var24[var3];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.getSession;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=258);
case 131:
                    return var3;
case 280:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0024_ip = 281; continue _fun0024 }
case 282:
                    var11 = var3;
                    var24 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var6 = 28;
                    var6 = var27[var6];
                    var24 = var24.bind(var2)(var6);
                    var6 = var24.getOrRefreshAdSession;
                    var6 = var6.bind(var24)();
                    SaveGenerator(address=304);
case 283:
                    return var6;
case 154:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=23);
                    if(var24) { _fun0024_ip = 284; continue _fun0024 }
case 285:
                    var8 = var6;
                    var28 = var25.URLSearchParams;
                    var24 = {};
                    var29 = var25.String;
                    var27 = var7;
                    var27 = var29.bind(var2)(var27);
                    var24['placement'] = var27;
                    var27 = '1';
                    var24['num_decisions_requested'] = var27;
                    var27 = var28.prototype;
                    var27 = Object.create(var27, {constructor: {value: var28}});
                    var33 = var27;
                    var32 = var24;
                    var24 = new var33[var28](var32, var31);
                    var26 = var24 instanceof Object ? var24 : var27;
                    var24 = var11;
                    var27 = var15 == var24;
                    var24 = undefined;
                    if(var27) { _fun0024_ip = 72; continue _fun0024 }
case 245:
                    var27 = var11;
                    var24 = var27.uuid;
case 72:
                    if(!(var15 != var24)) { _fun0024_ip = 286; continue _fun0024 }
case 26:
                    var28 = var26;
                    var27 = var28.append;
                    var24 = var11.uuid;
                    var11 = 'client_heartbeat_session_id';
                    var11 = var27.bind(var28)(var11, var24);
case 286:
                    var11 = var8;
                    var11 = var11.uuid;
                    if(!(var15 != var11)) { _fun0024_ip = 287; continue _fun0024 }
case 288:
                    var27 = var26;
                    var24 = var27.append;
                    var11 = var8.uuid;
                    var8 = 'client_ad_session_id';
                    var8 = var24.bind(var27)(var8, var11);
case 287:
                    var11 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var8 = 9;
                    var8 = var24[var8];
                    var8 = var11.bind(var2)(var8);
                    var24 = var8.HTTP;
                    var11 = var24.get;
                    var8 = {};
                    var27 = _closure1_slot13;
                    var29 = var27.QUESTS_GET_DECISIONS;
                    var27 = var26;
                    var26 = var27.toString;
                    var28 = var26.bind(var27)();
                    var25 = var25.HermesInternal;
                    var27 = var25.concat;
                    var26 = '';
                    var25 = '?';
                    var25 = var27.bind(var26)(var29, var25, var28);
                    var8['url'] = var25;
                    var25 = false;
                    var8['rejectWithError'] = var25;
                    var25 = {};
                    var27 = _closure1_slot6;
                    var26 = var27.getType;
                    var26 = var26.bind(var27)();
                    var25['connection_type'] = var26;
                    var8['context'] = var25;
                    var8 = var11.bind(var24)(var8);
                    SaveGenerator(address=591);
case 109:
                    return var8;
case 289:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0024_ip = 290; continue _fun0024 }
case 291:
                    var11 = var8.body;
                    var16 = var11;
                    var11 = var11.decisions;
                    var23 = var11;
                    var24 = var15 == var11;
                    var11 = undefined;
                    if(var24) { _fun0024_ip = 292; continue _fun0024 }
case 293:
                    var24 = var23;
                    var23 = 0;
                    var11 = var24[var23];
case 292:
                    var17 = var11;
                    var23 = var15 != var11;
                    var11 = null;
                    if(!var23) { _fun0024_ip = 294; continue _fun0024 }
case 77:
                    var11 = var17;
case 294:
                    var14 = var11;
                    var17 = var15 == var11;
                    var11 = undefined;
                    if(var17) { _fun0024_ip = 79; continue _fun0024 }
case 295:
                    var17 = var14;
                    var11 = var17.creative;
case 79:
                    var10 = var11;
                    var17 = var15 != var11;
                    var11 = null;
                    if(!var17) { _fun0024_ip = 296; continue _fun0024 }
case 297:
                    var11 = var10;
case 296:
                    var9 = var11;
                    var13 = null;
                    var11 = var15 != var11;
                    var10 = var11;
                    if(!var11) { _fun0024_ip = 298; continue _fun0024 }
case 299:
                    var11 = var9;
                    var17 = var11.creative_type;
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var11 = 22;
                    var11 = var24[var11];
                    var11 = var23.bind(var2)(var11);
                    var11 = var11.AdCreativeType;
                    var11 = var11.QUEST_HOME_HERO;
                    var10 = var17 === var11;
case 298:
                    if(!var10) { _fun0024_ip = 300; continue _fun0024 }
case 301:
                    var11 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var10 = 37;
                    var10 = var17[var10];
                    var11 = var11.bind(var2)(var10);
                    var10 = var11.questHomeHeroFromServer;
                    var13 = var10.bind(var11)(var9);
case 300:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var4];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var17 = 'QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS';
                    var9['type'] = var17;
                    var9['questHomeHero'] = var13;
                    var13 = {};
                    var17 = var14;
                    var23 = var15 == var17;
                    var17 = undefined;
                    if(var23) { _fun0024_ip = 302; continue _fun0024 }
case 303:
                    var23 = var14;
                    var23 = var23.ad_identifiers;
                    var22 = var23;
                    var23 = var15 == var23;
                    var17 = undefined;
                    if(var23) { _fun0024_ip = 302; continue _fun0024 }
case 304:
                    var17 = var22.ad_id;
case 302:
                    var13['ad_id'] = var17;
                    var17 = var14;
                    var22 = var15 == var17;
                    var17 = undefined;
                    if(var22) { _fun0024_ip = 305; continue _fun0024 }
case 306:
                    var22 = var14;
                    var22 = var22.ad_identifiers;
                    var21 = var22;
                    var22 = var15 == var22;
                    var17 = undefined;
                    if(var22) { _fun0024_ip = 305; continue _fun0024 }
case 307:
                    var17 = var21.ad_set_id;
case 305:
                    var13['ad_set_id'] = var17;
                    var17 = var14;
                    var21 = var15 == var17;
                    var17 = undefined;
                    if(var21) { _fun0024_ip = 98; continue _fun0024 }
case 94:
                    var21 = var14;
                    var21 = var21.ad_identifiers;
                    var20 = var21;
                    var21 = var15 == var21;
                    var17 = undefined;
                    if(var21) { _fun0024_ip = 98; continue _fun0024 }
case 308:
                    var17 = var20.campaign_id;
case 98:
                    var13['campaign_id'] = var17;
                    var17 = var14;
                    var20 = var15 == var17;
                    var17 = undefined;
                    if(var20) { _fun0024_ip = 309; continue _fun0024 }
case 310:
                    var20 = var14;
                    var20 = var20.ad_identifiers;
                    var19 = var20;
                    var20 = var15 == var20;
                    var17 = undefined;
                    if(var20) { _fun0024_ip = 309; continue _fun0024 }
case 311:
                    var17 = var19.creative_id;
case 309:
                    var13['creative_id'] = var17;
                    var17 = var14;
                    var19 = var15 == var17;
                    var17 = undefined;
                    if(var19) { _fun0024_ip = 312; continue _fun0024 }
case 313:
                    var19 = var14;
                    var19 = var19.ad_identifiers;
                    var18 = var19;
                    var19 = var15 == var19;
                    var17 = undefined;
                    if(var19) { _fun0024_ip = 312; continue _fun0024 }
case 91:
                    var17 = var18.creative_type;
case 312:
                    var13['creative_type'] = var17;
                    var16 = var16.request_id;
                    var13['decision_id'] = var16;
                    var16 = var14;
                    var17 = var15 == var16;
                    var16 = undefined;
                    if(var17) { _fun0024_ip = 74; continue _fun0024 }
case 314:
                    var17 = var14;
                    var16 = var17.ad_identifiers;
case 74:
                    var16 = var15 != var16;
                    var13['is_targeted'] = var16;
                    var9['adDecisionData'] = var13;
                    var13 = var14;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 315; continue _fun0024 }
case 316:
                    var16 = var14;
                    var13 = var16.metadata_sealed;
case 315:
                    var9['metadataSealed'] = var13;
                    var13 = var14;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 317; continue _fun0024 }
case 318:
                    var16 = var14;
                    var13 = var16.traffic_metadata_sealed;
case 317:
                    var9['trafficMetadataSealed'] = var13;
                    var13 = var14;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 319; continue _fun0024 }
case 320:
                    var16 = var14;
                    var13 = var16.ad_context;
case 319:
                    var9['adContext'] = var13;
                    var13 = var14;
                    var15 = var15 == var13;
                    var13 = undefined;
                    if(var15) { _fun0024_ip = 321; continue _fun0024 }
case 322:
                    var13 = var14.response_ttl_seconds;
case 321:
                    var9['responseTtlSeconds'] = var13;
                    var13 = var7;
                    var9['placement'] = var13;
                    var9['fetchedAt'] = var12;
                    var9 = var10.bind(var11)(var9);
case 323: // try_end0
                    _fun0024_ip = 277; continue _fun0024;
case 290:
                    return var8;
case 284:
                    return var6;
case 281:
                    return var3;
case 324: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = var10[var4];
                    var6 = var9.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'QUESTS_FETCH_QUEST_HOME_HERO_FAILURE';
                    var4['type'] = var8;
                    var8 = 11;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var33 = var9;
                    var32 = var3;
                    var8 = new var33[var8](var32, var31);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4['error'] = var8;
                    var4['placement'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 277:
                    return var2;
case 276:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function _fetchQuestHomeHeroPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0025_ip = 99; continue _fun0025 }
case 157:
                    var2 = arg1;
                    var9 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var15 = undefined;
                    var21 = undefined;
                    var7 = undefined;
                    var20 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var14 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var11 = undefined;
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 12;
                    var3 = var8[var3];
                    var3 = var13.bind(var9)(var3);
                    var3 = var3.AdPlacement;
                    var24 = var3.QUEST_HOME_BANNER_DESKTOP;
                    var6 = var24;
                    var22 = global;
                    var13 = var22.Date;
                    var3 = var13.now;
                    var10 = var3.bind(var13)();
                    var13 = _closure1_slot1;
                    var3 = 10;
                    var8 = var8[var3];
                    var23 = var13.bind(var9)(var8);
                    var13 = var23.dispatch;
                    var8 = {};
                    var25 = 'QUESTS_FETCH_QUEST_HOME_HERO_BEGIN';
                    var8['type'] = var25;
                    var8['placement'] = var24;
                    var8 = var13.bind(var23)(var8);
case 325: // try_start_0
                    var8 = var22.URLSearchParams;
                    var13 = var8.prototype;
                    var13 = Object.create(var13, {constructor: {value: var8}});
                    var30 = var13;
                    var8 = new var30[var8](var29);
                    var24 = var8 instanceof Object ? var8 : var13;
                    var13 = var24.append;
                    var8 = var2;
                    var2 = 'ad_creative_ids';
                    var2 = var13.bind(var24)(var2, var8);
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 9;
                    var2 = var13[var2];
                    var2 = var8.bind(var9)(var2);
                    var13 = var2.HTTP;
                    var8 = var13.get;
                    var2 = {};
                    var23 = _closure1_slot13;
                    var26 = var23.QUESTS_CREATIVE_PREVIEW;
                    var23 = var24.toString;
                    var25 = var23.bind(var24)();
                    var22 = var22.HermesInternal;
                    var24 = var22.concat;
                    var23 = '';
                    var22 = '?';
                    var22 = var24.bind(var23)(var26, var22, var25);
                    var2['url'] = var22;
                    var22 = false;
                    var2['rejectWithError'] = var22;
                    var2 = var8.bind(var13)(var2);
                    SaveGenerator(address=286);
case 326:
                    return var2;
case 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0025_ip = 327; continue _fun0025 }
case 328:
                    var8 = var2.body;
                    var14 = var8;
                    var8 = var8.decisions;
                    var21 = var8;
                    var13 = null;
                    var22 = var13 == var8;
                    var8 = undefined;
                    if(var22) { _fun0025_ip = 329; continue _fun0025 }
case 118:
                    var22 = var21;
                    var21 = 0;
                    var8 = var22[var21];
case 329:
                    var15 = var8;
                    var21 = var13 != var8;
                    var8 = null;
                    if(!var21) { _fun0025_ip = 330; continue _fun0025 }
case 182:
                    var8 = var15;
case 330:
                    var12 = var8;
                    var15 = var13 == var8;
                    var8 = undefined;
                    if(var15) { _fun0025_ip = 73; continue _fun0025 }
case 331:
                    var15 = var12;
                    var8 = var15.creative;
case 73:
                    var7 = var8;
                    var15 = var13 != var8;
                    var8 = null;
                    if(!var15) { _fun0025_ip = 140; continue _fun0025 }
case 24:
                    var8 = var7;
case 140:
                    var5 = var8;
                    var11 = null;
                    var8 = var13 != var8;
                    var7 = var8;
                    if(!var8) { _fun0025_ip = 332; continue _fun0025 }
case 72:
                    var8 = var5;
                    var15 = var8.creative_type;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var8 = 22;
                    var8 = var22[var8];
                    var8 = var21.bind(var9)(var8);
                    var8 = var8.AdCreativeType;
                    var8 = var8.QUEST_HOME_HERO;
                    var7 = var15 === var8;
case 332:
                    if(!var7) { _fun0025_ip = 333; continue _fun0025 }
case 334:
                    var8 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var7 = 37;
                    var7 = var15[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.questHomeHeroFromServer;
                    var11 = var7.bind(var8)(var5);
case 333:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var3];
                    var8 = var7.bind(var9)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var15 = 'QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS';
                    var5['type'] = var15;
                    var5['questHomeHero'] = var11;
                    var11 = {};
                    var15 = var12;
                    var21 = var13 == var15;
                    var15 = undefined;
                    if(var21) { _fun0025_ip = 335; continue _fun0025 }
case 336:
                    var21 = var12;
                    var21 = var21.ad_identifiers;
                    var20 = var21;
                    var21 = var13 == var21;
                    var15 = undefined;
                    if(var21) { _fun0025_ip = 335; continue _fun0025 }
case 337:
                    var15 = var20.ad_id;
case 335:
                    var11['ad_id'] = var15;
                    var15 = var12;
                    var20 = var13 == var15;
                    var15 = undefined;
                    if(var20) { _fun0025_ip = 338; continue _fun0025 }
case 339:
                    var20 = var12;
                    var20 = var20.ad_identifiers;
                    var19 = var20;
                    var20 = var13 == var20;
                    var15 = undefined;
                    if(var20) { _fun0025_ip = 338; continue _fun0025 }
case 340:
                    var15 = var19.ad_set_id;
case 338:
                    var11['ad_set_id'] = var15;
                    var15 = var12;
                    var19 = var13 == var15;
                    var15 = undefined;
                    if(var19) { _fun0025_ip = 341; continue _fun0025 }
case 342:
                    var19 = var12;
                    var19 = var19.ad_identifiers;
                    var18 = var19;
                    var19 = var13 == var19;
                    var15 = undefined;
                    if(var19) { _fun0025_ip = 341; continue _fun0025 }
case 343:
                    var15 = var18.campaign_id;
case 341:
                    var11['campaign_id'] = var15;
                    var15 = var12;
                    var18 = var13 == var15;
                    var15 = undefined;
                    if(var18) { _fun0025_ip = 344; continue _fun0025 }
case 295:
                    var18 = var12;
                    var18 = var18.ad_identifiers;
                    var17 = var18;
                    var18 = var13 == var18;
                    var15 = undefined;
                    if(var18) { _fun0025_ip = 344; continue _fun0025 }
case 297:
                    var15 = var17.creative_id;
case 344:
                    var11['creative_id'] = var15;
                    var15 = var12;
                    var17 = var13 == var15;
                    var15 = undefined;
                    if(var17) { _fun0025_ip = 345; continue _fun0025 }
case 346:
                    var17 = var12;
                    var17 = var17.ad_identifiers;
                    var16 = var17;
                    var17 = var13 == var17;
                    var15 = undefined;
                    if(var17) { _fun0025_ip = 345; continue _fun0025 }
case 347:
                    var15 = var16.creative_type;
case 345:
                    var11['creative_type'] = var15;
                    var14 = var14.request_id;
                    var11['decision_id'] = var14;
                    var14 = var12;
                    var15 = var13 == var14;
                    var14 = undefined;
                    if(var15) { _fun0025_ip = 348; continue _fun0025 }
case 349:
                    var15 = var12;
                    var14 = var15.ad_identifiers;
case 348:
                    var14 = var13 != var14;
                    var11['is_targeted'] = var14;
                    var5['adDecisionData'] = var11;
                    var11 = var12;
                    var14 = var13 == var11;
                    var11 = undefined;
                    if(var14) { _fun0025_ip = 350; continue _fun0025 }
case 201:
                    var14 = var12;
                    var11 = var14.metadata_sealed;
case 350:
                    var5['metadataSealed'] = var11;
                    var11 = var12;
                    var14 = var13 == var11;
                    var11 = undefined;
                    if(var14) { _fun0025_ip = 351; continue _fun0025 }
case 352:
                    var14 = var12;
                    var11 = var14.traffic_metadata_sealed;
case 351:
                    var5['trafficMetadataSealed'] = var11;
                    var11 = var12;
                    var14 = var13 == var11;
                    var11 = undefined;
                    if(var14) { _fun0025_ip = 353; continue _fun0025 }
case 354:
                    var14 = var12;
                    var11 = var14.ad_context;
case 353:
                    var5['adContext'] = var11;
                    var11 = var12;
                    var13 = var13 == var11;
                    var11 = undefined;
                    if(var13) { _fun0025_ip = 355; continue _fun0025 }
case 356:
                    var11 = var12.response_ttl_seconds;
case 355:
                    var5['responseTtlSeconds'] = var11;
                    var11 = var6;
                    var5['placement'] = var11;
                    var5['fetchedAt'] = var10;
                    var5 = var7.bind(var8)(var5);
case 92: // try_end0
                    return var9;
case 327:
                    return var2;
case 357: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = var10[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'QUESTS_FETCH_QUEST_HOME_HERO_FAILURE';
                    var3['type'] = var7;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var30 = var8;
                    var29 = var2;
                    var7 = new var30[var7](var29, var28);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3['error'] = var7;
                    var3['placement'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 99:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot36 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.getVisibleGuildIdsMethod;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var8 = 5;
    var4 = var7[var8];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var5 = var7[var4];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.FetchStatus;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ORBS_INTRO_QUEST_ID;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot12 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot13 = var4;
    var4 = {};
    var5 = 'success';
    var4['SUCCESS'] = var5;
    var5 = 'captcha_failed';
    var4['CAPTCHA_FAILED'] = var5;
    var5 = 'unknown_error';
    var4['UNKNOWN_ERROR'] = var5;
    var5 = 'previous_in_flight_request';
    var4['PREVIOUS_IN_FLIGHT_REQUEST'] = var5;
    var _closure1_slot14 = var4;
    var5 = 36;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.MINUTE;
    var5 = var8 * var5;
    var _closure1_slot15 = var5;
    var5 = 38;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/QuestActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function manuallyStartConsoleQuest() {
        var1 = undefined;
        var4 = _closure1_slot16;
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
        var4 = _closure1_slot17;
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
        var4 = _closure1_slot18;
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
        var4 = _closure1_slot19;
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
        var4 = _closure1_slot20;
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
        var4 = _closure1_slot21;
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
        var4 = _closure1_slot22;
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
        var4 = _closure1_slot23;
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
        var4 = _closure1_slot24;
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
        var1 = 10;
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
        var4 = _closure1_slot25;
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
        var4 = _closure1_slot26;
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
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resetQuestDismissibilityStatus'] = var4;
    var4 = function overrideQuestForPlacement(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_PREVIEW_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['placement'] = var5;
        var5 = arg2;
        var2['questId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['overrideQuestForPlacement'] = var4;
    var4 = function selectTaskPlatform(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
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
        var1 = 10;
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
        var4 = _closure1_slot28;
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
        var1 = 10;
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
        var1 = 10;
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
        var4 = _closure1_slot29;
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
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER';
        var2['type'] = var5;
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
        var4 = _closure1_slot30;
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
        var1 = 10;
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
        var4 = _closure1_slot31;
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
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchVideoTranscript'] = var4;
    var4 = function updateQuestDockVisibilityEligibility(arg1) {
        var1 = arg1;
        var5 = var1.isEligibleToBeVisible;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE';
        var2['type'] = var6;
        var2['isEligibleToBeVisible'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateQuestDockVisibilityEligibility'] = var4;
    var4 = function fetchQuest() {
        var1 = undefined;
        var4 = _closure1_slot33;
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
        var4 = _closure1_slot34;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestPreview'] = var4;
    var4 = function fetchQuestHomeHero() {
        var1 = undefined;
        var4 = _closure1_slot35;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestHomeHero'] = var4;
    var4 = function fetchQuestHomeHeroPreview() {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestHomeHeroPreview'] = var4;
    var4 = function dismissQuestActivityModal(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UNENROLLED_ACTIVITY_QUEST_DISMISS';
        var2['type'] = var5;
        var5 = arg1;
        var2['questId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissQuestActivityModal'] = var4;
    var4 = function setAutoEnroll(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL';
        var2['type'] = var5;
        var5 = arg1;
        var2['autoEnroll'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setAutoEnroll'] = var4;
    var4 = function markAdContentSeen(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'AD_CONTENT_MARK_SEEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['adCreativeType'] = var5;
        var5 = arg2;
        var2['contentIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markAdContentSeen'] = var4;
    var4 = function markAdContentUnseen(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'AD_CONTENT_MARK_UNSEEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['adCreativeType'] = var5;
        var5 = arg2;
        var2['contentIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markAdContentUnseen'] = var4;
    var2 = function markQuestDiscovered(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUESTS_MARK_DISCOVERED';
        var2['type'] = var5;
        var5 = arg1;
        var2['questId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markQuestDiscovered'] = var2;
    return var1;
})();