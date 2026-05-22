// app/modules/quests/managers/QuestFetchManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var8 = 5;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot9 = var4;
    var4 = 7;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.DAY;
    var _closure1_slot10 = var9;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var10 = var9.MINUTE;
    var9 = 30;
    var9 = var9 * var10;
    var _closure1_slot11 = var9;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var8 * var9;
    var _closure1_slot12 = var9;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var8 * var9;
    var _closure1_slot13 = var9;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.HOUR;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var8 * var4;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function QuestFetchManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var3 = 0;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var1['instantiatedAt'] = var4;
                var4 = null;
                var1['initialFetchTimerId'] = var4;
                var1['initialQuestHomeHeroFetchTimerId'] = var4;
                var1['recurringFetchTimerId'] = var4;
                var1['lastFetchAttemptedAt'] = var3;
                var1['lastFetchedQuestForLocaleChangeAt'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2['lastFetchAttemptedAt'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleQuestsFetchCurrentQuestsBegin'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = global;
                        var6 = var4.window;
                        var5 = var6.clearTimeout;
                        var7 = _closure3_slot0;
                        var1 = var7.initialFetchTimerId;
                        var1 = var5.bind(var6)(var1);
                        var6 = var4.window;
                        var5 = var6.clearTimeout;
                        var1 = var7.initialQuestHomeHeroFetchTimerId;
                        var1 = var5.bind(var6)(var1);
                        var6 = var4.window;
                        var5 = var6.clearTimeout;
                        var1 = var7.recurringFetchTimerId;
                        var1 = var5.bind(var6)(var1);
                        var9 = var4.window;
                        var8 = var9.setInterval;
                        var6 = _closure1_slot11;
                        var1 = function() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var1 = global;
                                var2 = var1.Date;
                                var1 = var2.now;
                                var3 = var1.bind(var2)();
                                var2 = _closure3_slot0;
                                var2 = var2.lastFetchAttemptedAt;
                                var3 = var3 - var2;
                                var2 = _closure1_slot10;
                                if(!(var3 > var2)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                                var3 = _closure3_slot0;
                                var2 = var3._fetch;
                                var1 = 'post_connect_recurring';
                                var1 = var2.bind(var3)(var1);
case 9:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var8.bind(var9)(var1, var6);
                        var7['recurringFetchTimerId'] = var1;
                        var8 = var4.Math;
                        var6 = var8.floor;
                        var9 = var4.Math;
                        var1 = var9.random;
                        var9 = var1.bind(var9)();
                        var1 = _closure1_slot12;
                        var1 = var9 * var1;
                        var6 = var6.bind(var8)(var1);
                        var9 = var4.window;
                        var8 = var9.setTimeout;
                        var1 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = global;
                                var2 = var1.Date;
                                var1 = var2.now;
                                var3 = var1.bind(var2)();
                                var2 = _closure1_slot8;
                                var2 = var2.lastFetchedCurrentQuests;
                                var2 = var3 - var2;
                                var1 = _closure1_slot14;
                                if(!(!(var2 <= var1))) { _fun0005_ip = 9; continue _fun0005 }
case 11:
                                var3 = _closure3_slot0;
                                var2 = var3._fetch;
                                var1 = 'post_connect_initial';
                                var1 = var2.bind(var3)(var1);
case 9:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var8.bind(var9)(var1, var6);
                        var7['initialFetchTimerId'] = var1;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 8;
                        var7 = var7[var1];
                        var1 = undefined;
                        var7 = var8.bind(var1)(var7);
                        var9 = var7.FetchQuestHomeHeroOnConnectionOpenExperiment;
                        var8 = var9.getConfig;
                        var7 = {};
                        var10 = _closure1_slot9;
                        var10 = var10.QUESTS_MANAGER;
                        var7['location'] = var10;
                        var7 = var8.bind(var9)(var7);
                        var7 = var7.enabled;
                        if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 9;
                        var7 = var9[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.getIsEligibleForQuests;
                        var7 = var7.bind(var8)();
                        if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                        var8 = var4.Math;
                        var7 = var8.floor;
                        var10 = var4.Math;
                        var9 = var10.random;
                        var9 = var9.bind(var10)();
                        var5 = _closure1_slot12;
                        var5 = var9 * var5;
                        var5 = var7.bind(var8)(var5);
                        var6 = var6 + var5;
                        var3 = _closure3_slot0;
                        var5 = var4.window;
                        var4 = var5.setTimeout;
                        var2 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0: // try_start_0
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.fetchQuestHomeHero;
                                var1 = var1.bind(var2)();
case 15: // try_end0
                                _fun0006_ip = 16; continue _fun0006;
case 17: // catch_target0
                                CatchBlockStart(arg_register=0);
case 16:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var2, var6);
                        var3['initialQuestHomeHeroFetchTimerId'] = var2;
case 12:
                        return var1;
                    }
                };
                var1['handlePostConnectionOpen'] = var3;
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1['handleRunningGamesChange'] = var3;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.partial;
                        var1 = var2.settings;
                        var2 = var2.wasSaved;
                        var4 = var1.proto;
                        var1 = 'localization';
                        var4 = var1 in var4;
                        var1 = !var4;
                        if(!var4) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                        var1 = !var3;
case 18:
                        if(var1) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                        var1 = var2;
case 20:
                        if(var1) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var3 = var2.bind(var3)();
                        var2 = _closure3_slot0;
                        var2 = var2.lastFetchedQuestForLocaleChangeAt;
                        var3 = var3 - var2;
                        var2 = _closure1_slot13;
                        var1 = var3 <= var2;
case 22:
                        if(var1) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                        var3 = _closure3_slot0;
                        var1 = global;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var1 = var1.bind(var2)();
                        var3['lastFetchedQuestForLocaleChangeAt'] = var1;
                        var2 = var3._fetch;
                        var1 = 'user_settings';
                        var1 = var2.bind(var3)(var1);
case 24:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleUserSettingsProtoUpdate'] = var3;
                var2 = function() {
                    var1 = global;
                    var5 = var1.window;
                    var4 = var5.clearTimeout;
                    var2 = _closure3_slot0;
                    var3 = var2.initialFetchTimerId;
                    var3 = var4.bind(var5)(var3);
                    var5 = var1.window;
                    var4 = var5.clearTimeout;
                    var3 = var2.initialQuestHomeHeroFetchTimerId;
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.window;
                    var3 = var4.clearTimeout;
                    var1 = var2.recurringFetchTimerId;
                    var1 = var3.bind(var4)(var1);
                    var1 = 0;
                    var2['lastFetchAttemptedAt'] = var1;
                    var2['lastFetchedQuestForLocaleChangeAt'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleLogout'] = var2;
                var2 = {};
                var3 = var1.handleQuestsFetchCurrentQuestsBegin;
                var2['QUESTS_FETCH_CURRENT_QUESTS_BEGIN'] = var3;
                var3 = var1.handlePostConnectionOpen;
                var2['POST_CONNECTION_OPEN'] = var3;
                var3 = var1.handleRunningGamesChange;
                var2['RUNNING_GAMES_CHANGE'] = var3;
                var3 = var1.handleRunningGamesChange;
                var2['RUNNING_NON_GAMES_CHANGE'] = var3;
                var3 = var1.handleUserSettingsProtoUpdate;
                var2['USER_SETTINGS_PROTO_UPDATE'] = var3;
                var3 = var1.handleLogout;
                var2['LOGOUT'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = '_fetch';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.getIsEligibleForQuests;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0008_ip = 26; continue _fun0008 }
case 19:
                var4 = _closure1_slot8;
                var4 = var4.isFetchingCurrentQuests;
                var2 = !var4;
case 26:
                if(!var2) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var6 = var4.bind(var1)(var2);
                var4 = var6.addBreadcrumb;
                var2 = {'category': 'quests.fetch', 'message': 'QuestFetchManager._fetch triggered'};
                var8 = {};
                var8['callerSource'] = var5;
                var9 = _closure1_slot8;
                var10 = var9.quests;
                var10 = var10.size;
                var8['storeSize'] = var10;
                var10 = var9.lastFetchedCurrentQuests;
                var8['lastFetchedCurrentQuests'] = var10;
                var10 = global;
                var11 = var10.Date;
                var10 = var11.now;
                var11 = var10.bind(var11)();
                var10 = var9.lastFetchedCurrentQuests;
                var10 = var11 - var10;
                var8['msSinceLastFetch'] = var10;
                var9 = var9.isFetchingCurrentQuests;
                var8['isFetchingCurrentQuests'] = var9;
                var2['data'] = var8;
                var2 = var4.bind(var6)(var2);
                var6 = _closure1_slot0;
                var2 = 10;
                var4 = var7[var2];
                var8 = var6.bind(var1)(var4);
                var4 = var8.fetchCurrentQuests;
                var4 = var4.bind(var8)();
                var4 = 12;
                var4 = var7[var4];
                var6 = var6.bind(var1)(var4);
                var4 = var6.isMac;
                var4 = var4.bind(var6)();
                if(!var4) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 13;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.getState;
                var7 = var6.bind(var7)();
                var6 = 'focused';
                var4 = var6 !== var7;
case 29:
                if(var4) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 14;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.getConfig;
                var6 = {};
                var9 = 'QuestFetchManager';
                var6['location'] = var9;
                var6 = var7.bind(var8)(var6);
                var4 = var6.enableNewRequestBehavior;
case 31:
                if(var4) { _fun0008_ip = 27; continue _fun0008 }
case 33:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.fetchQuestToDeliver;
                var2 = 15;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.QuestPlacement;
                var2 = var2.MOBILE_HOME_DOCK_AREA;
                var2 = var3.bind(var4)(var2, var5);
case 27:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/managers/QuestFetchManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();