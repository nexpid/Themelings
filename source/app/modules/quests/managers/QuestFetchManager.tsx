// app/modules/quests/managers/QuestFetchManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var9 = 5;
    var4 = var6[var9];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot8 = var4;
    var4 = 7;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var _closure1_slot9 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var10 = var8.MINUTE;
    var8 = 30;
    var8 = var8 * var10;
    var _closure1_slot10 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var9 * var8;
    var _closure1_slot11 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var9 * var8;
    var _closure1_slot12 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HOUR;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function QuestFetchManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var3 = 0;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot2;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 88; continue _fun0002 }
 75:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 122; continue _fun0002;
 88:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 122:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var1['instantiatedAt'] = var4;
                var4 = null;
                var1['initialFetchTimerId'] = var4;
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
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.getIsEligibleForFetchQuestOnPostConnectionOpen;
                    var3 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.QUESTS_MANAGER;
                    var3['location'] = var7;
                    var3 = var4.bind(var6)(var3);
                    var _closure4_slot0 = var3;
                    var4 = global;
                    var8 = var4.window;
                    var7 = var8.clearTimeout;
                    var3 = _closure3_slot0;
                    var6 = var3.initialFetchTimerId;
                    var6 = var7.bind(var8)(var6);
                    var8 = var4.window;
                    var7 = var8.clearTimeout;
                    var6 = var3.recurringFetchTimerId;
                    var6 = var7.bind(var8)(var6);
                    var9 = var4.window;
                    var8 = var9.setInterval;
                    var7 = _closure1_slot10;
                    var6 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var3 = var1.bind(var2)();
                            var2 = _closure3_slot0;
                            var2 = var2.lastFetchAttemptedAt;
                            var3 = var3 - var2;
                            var2 = _closure1_slot9;
                            if(!(var3 > var2)) { _fun0003_ip = 59; continue _fun0003 }
 45:
                            var2 = _closure3_slot0;
                            var1 = var2._fetch;
                            var1 = var1.bind(var2)();
 59:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var6, var7);
                    var3['recurringFetchTimerId'] = var6;
                    var7 = var4.Math;
                    var6 = var7.floor;
                    var9 = var4.Math;
                    var8 = var9.random;
                    var8 = var8.bind(var9)();
                    var5 = _closure1_slot11;
                    var5 = var8 * var5;
                    var6 = var6.bind(var7)(var5);
                    var _closure4_slot1 = var6;
                    var5 = var4.window;
                    var4 = var5.setTimeout;
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var3 = var1.bind(var2)();
                            var2 = _closure4_slot1;
                            var4 = var3 - var2;
                            var3 = _closure1_slot7;
                            var3 = var3.lastFetchedCurrentQuests;
                            if(!(!(var4 < var3))) { _fun0004_ip = 88; continue _fun0004 }
 45:
                            var1 = _closure4_slot0;
                            if(var1) { _fun0004_ip = 68; continue _fun0004 }
 52:
                            var2 = _closure1_slot7;
                            var3 = var2.lastFetchedCurrentQuests;
                            var2 = 0;
                            var1 = var2 === var3;
 68:
                            if(!var1) { _fun0004_ip = 88; continue _fun0004 }
 71:
                            var2 = _closure3_slot0;
                            var1 = var2._fetch;
                            var1 = var1.bind(var2)();
 88:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var6);
                    var3['initialFetchTimerId'] = var2;
                    return var1;
                };
                var1['handlePostConnectionOpen'] = var3;
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1['handleRunningGamesChange'] = var3;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.partial;
                        var1 = var2.settings;
                        var2 = var2.wasSaved;
                        var4 = var1.proto;
                        var1 = 'localization';
                        var4 = var1 in var4;
                        var1 = !var4;
                        if(!var4) { _fun0005_ip = 44; continue _fun0005 }
 41:
                        var1 = !var3;
 44:
                        if(var1) { _fun0005_ip = 50; continue _fun0005 }
 47:
                        var1 = var2;
 50:
                        if(var1) { _fun0005_ip = 98; continue _fun0005 }
 53:
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var3 = var2.bind(var3)();
                        var2 = _closure3_slot0;
                        var2 = var2.lastFetchedQuestForLocaleChangeAt;
                        var3 = var3 - var2;
                        var2 = _closure1_slot12;
                        var1 = var3 <= var2;
 98:
                        if(var1) { _fun0005_ip = 141; continue _fun0005 }
 101:
                        var2 = _closure3_slot0;
                        var1 = global;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var2['lastFetchedQuestForLocaleChangeAt'] = var1;
                        var1 = var2._fetch;
                        var1 = var1.bind(var2)();
 141:
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
                var3 = var1.handleUserSettingsProtoUpdate;
                var2['USER_SETTINGS_PROTO_UPDATE'] = var3;
                var3 = var1.handleLogout;
                var2['LOGOUT'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = '_fetch';
        var5['key'] = var6;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getIsEligibleForQuests;
                var3 = {};
                var6 = _closure1_slot8;
                var6 = var6.QUESTS_MANAGER;
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0006_ip = 68; continue _fun0006 }
 55:
                var4 = _closure1_slot7;
                var4 = var4.isFetchingCurrentQuests;
                var3 = !var4;
 68:
                if(!var3) { _fun0006_ip = 145; continue _fun0006 }
 71:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 10;
                var3 = var6[var2];
                var4 = var5.bind(var1)(var3);
                var3 = var4.fetchCurrentQuests;
                var3 = var3.bind(var4)();
                var2 = var6[var2];
                var4 = var5.bind(var1)(var2);
                var3 = var4.fetchQuestToDeliver;
                var2 = 11;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.QuestPlacement;
                var2 = var2.MOBILE_HOME_DOCK_AREA;
                var2 = var3.bind(var4)(var2);
 145:
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/managers/QuestFetchManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();