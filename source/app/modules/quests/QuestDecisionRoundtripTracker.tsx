// app/modules/quests/QuestDecisionRoundtripTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function trackRoundtrip(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 0.1;
            if(!(!(var2 > var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var6.apiResponseTimestamp;
            var8 = null;
            var1 = var8 == var1;
            var10 = null;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6.apiResponseTimestamp;
            var1 = var6.initialSendTimestamp;
            var10 = var2 - var1;
case 4:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var1 = var13[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.getSignalStrength;
            var11 = var1.bind(var2)();
            var12 = _closure1_slot1;
            var1 = 6;
            var1 = var13[var1];
            var4 = var12.bind(var7)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.QUEST_DECISION_ROUNDTRIP;
            var1 = {};
            var9 = 7;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var14 = var9.bind(var7)();
            var15 = var1;
            var9 = copyDataProperties(var15, var14);
            var12 = var6.endpoint;
            var9 = 'endpoint';
            var1[8] = var12;
            var12 = var6.wasSuccessful;
            var9 = 'was_successful';
            var1[8] = var12;
            var9 = 'api_latency_ms';
            var1[8] = var10;
            var10 = _closure1_slot5;
            var9 = var10.getType;
            var10 = var9.bind(var10)();
            var9 = 'mobile_network_type';
            var1[8] = var10;
            var9 = var8 != var11;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = {};
            var10['mobile_signal_strength_level'] = var11;
            var9 = var10;
case 6:
            var15 = var1;
            var14 = var9;
            var9 = copyDataProperties(var15, var14);
            var10 = var6.callerSource;
            var9 = 'caller_source';
            var1[8] = var10;
            var10 = var6.adRequestId;
            var9 = 'ad_request_id';
            var1[8] = var10;
            var10 = arg3;
            var9 = 'fetched_at';
            var1[8] = var10;
            var10 = var6.previousAdDecision;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var10.adDecisionData;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var9 = var10.decision_id;
case 8:
            var11 = var8 != var9;
            var10 = null;
            if(!var11) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var9;
case 11:
            var9 = 'previous_ad_request_id';
            var1[8] = var10;
            var9 = var6.previousAdDecision;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var9.fetchedAt;
case 13:
            var9 = var8 != var6;
            var8 = null;
            if(!var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var6;
case 15:
            var6 = 'previous_fetched_at';
            var1[5] = var8;
            var8 = arg2;
            var6 = 'transition_case';
            var1[5] = var8;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 8;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isForegrounded;
            var6 = var5.bind(var6)();
            var5 = 'is_foregrounded';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function QuestDecisionRoundtripTracker() {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['pendingRequests'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'recordQuestRequestAttempt';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = arg1;
                var5 = arguments[2];
                var4 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var7;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var5 = null;
case 17:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 9;
                var6 = var9[var6];
                var9 = var8.bind(var1)(var6);
                var8 = var9.getConfig;
                var6 = {};
                var10 = 'recordQuestRequestAttempt';
                var6['location'] = var10;
                var6 = var8.bind(var9)(var6);
                var6 = var6.enableNewRequestBehavior;
                var9 = null;
                var8 = null;
                if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var6 = var9 != var5;
                var8 = null;
                if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 21:
                var3 = _closure1_slot6;
                var6 = var3.questAdDecisionByPlacement;
                var3 = var6.get;
                var3 = var3.bind(var6)(var5);
                var6 = var9 != var3;
                var8 = null;
                if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 22:
                var8 = var3;
case 19:
                var6 = {'initialSendTimestamp': null, 'endpoint': null, 'apiResponseTimestamp': null, 'wasSuccessful': false, 'callerSource': null, 'adRequestId': null};
                var3 = global;
                var10 = var3.Date;
                var9 = var10.now;
                var9 = var9.bind(var10)();
                var6['initialSendTimestamp'] = var9;
                var6['endpoint'] = var7;
                var9 = arg2;
                var6['callerSource'] = var9;
                var6['previousAdDecision'] = var8;
                var6['placement'] = var5;
                var5 = var4.pendingRequests;
                var4 = var5.set;
                var4 = var4.bind(var5)(var7, var6);
                var4 = var3.setTimeout;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.pendingRequests;
                        var3 = var4.get;
                        var2 = _closure3_slot1;
                        var6 = var3.bind(var4)(var2);
                        var5 = null;
                        if(!(var5 != var6)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                        var4 = _closure1_slot8;
                        var3 = undefined;
                        var2 = 'timeout';
                        var2 = var4.bind(var3)(var6, var2, var5);
                        var2 = _closure3_slot0;
                        var3 = var2.pendingRequests;
                        var2 = var3.delete;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 30000;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'recordQuestRequestApiResponse';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var10 = var3.wasSuccessful;
                var9 = var3.adRequestId;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0004_ip = 25; continue _fun0004 }
case 17:
                var9 = null;
case 25:
                var14 = var3.currentQuestId;
                if(!(var14 === var1)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var14 = null;
case 26:
                var5 = var3.currentFetchedAt;
                if(!(var5 === var1)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var5 = null;
case 28:
                var6 = var2.pendingRequests;
                var3 = var6.get;
                var8 = var3.bind(var6)(var4);
                var12 = null;
                if(!(var12 != var8)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 9;
                var6 = var11[var6];
                var11 = var7.bind(var1)(var6);
                var7 = var11.getConfig;
                var6 = {};
                var13 = 'recordQuestRequestApiResponse';
                var6['location'] = var13;
                var6 = var7.bind(var11)(var6);
                var11 = var6.enableNewRequestBehavior;
                var7 = 'legacy';
                var6 = null;
                if(!var11) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var13 = null;
                if(!(var12 !== var5)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var11 = {};
                var11['questId'] = var14;
                var11['fetchedAt'] = var5;
                var14 = 0;
                var11['ttlMillis'] = var14;
                var14 = var12 != var9;
                var12 = undefined;
                if(!var14) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var14 = {};
                var14['decision_id'] = var9;
                var12 = var14;
case 36:
                var11['adDecisionData'] = var12;
                var13 = var11;
case 34:
                var12 = var8.previousAdDecision;
                var11 = function computeTransitionCase(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = arg1;
                        var2 = arg2;
                        var1 = function getState(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var2 = arg1;
                                var3 = null;
                                var4 = var3 == var2;
                                var1 = 'null';
                                if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                                var2 = var2.questId;
                                var3 = var3 == var2;
                                var2 = 'quest';
                                if(!var3) { _fun0006_ip = 27; continue _fun0006 }
case 24:
                                var2 = 'no_serve';
case 27:
                                var1 = var2;
case 38:
                                return var1;
                            }
                        };
                        var3 = undefined;
                        var8 = var1.bind(var3)(var6);
                        var7 = var1.bind(var3)(var2);
                        var1 = 'quest';
                        if(!(var1 === var8)) { _fun0005_ip = 27; continue _fun0005 }
case 40:
                        if(!(var1 !== var7)) { _fun0005_ip = 4; continue _fun0005 }
case 27:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = '';
                        var1 = '_to_';
                        var1 = var5.bind(var4)(var8, var1, var7);
                        _fun0005_ip = 41; continue _fun0005;
case 4:
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                        var4 = var6.questId;
case 42:
                        var5 = var5 == var2;
                        var3 = undefined;
                        if(var5) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var3 = var2.questId;
case 44:
                        var2 = 'different_quest';
                        if(!(var4 === var3)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                        var2 = 'same_quest';
case 46:
                        var1 = var2;
case 41:
                        return var1;
                    }
                };
                var7 = var11.bind(var1)(var12, var13);
                var6 = var5;
case 32:
                var5 = _closure1_slot8;
                var3 = {};
                var18 = var3;
                var17 = var8;
                var8 = copyDataProperties(var18, var17);
                var8 = global;
                var11 = var8.Date;
                var8 = var11.now;
                var11 = var8.bind(var11)();
                var8 = 'apiResponseTimestamp';
                var3[7] = var11;
                var8 = 'wasSuccessful';
                var3[7] = var10;
                var8 = 'adRequestId';
                var3[7] = var9;
                var3 = var5.bind(var1)(var3, var7, var6);
                var3 = var2.pendingRequests;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
case 30:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestDecisionRoundtripTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();