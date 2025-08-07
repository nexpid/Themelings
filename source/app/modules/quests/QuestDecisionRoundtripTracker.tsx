// app/modules/quests/QuestDecisionRoundtripTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function trackRoundtrip(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 0.1;
            if(!(!(var2 > var1))) { _fun0001_ip = 278; continue _fun0001 }
 38:
            var1 = var5.apiResponseTimestamp;
            var6 = null;
            var1 = var6 == var1;
            var10 = null;
            if(var1) { _fun0001_ip = 71; continue _fun0001 }
 55:
            var2 = var5.apiResponseTimestamp;
            var1 = var5.initialSendTimestamp;
            var10 = var2 - var1;
 71:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 4;
            var1 = var13[var1];
            var11 = undefined;
            var2 = var2.bind(var11)(var1);
            var1 = var2.getSignalStrength;
            var8 = var1.bind(var2)();
            var12 = _closure1_slot1;
            var1 = 5;
            var1 = var13[var1];
            var4 = var12.bind(var11)(var1);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.QUEST_DECISION_ROUNDTRIP;
            var1 = {};
            var9 = 6;
            var9 = var13[var9];
            var9 = var12.bind(var11)(var9);
            var14 = var9.bind(var11)();
            var15 = var1;
            var9 = copyDataProperties(var15, var14);
            var11 = var5.endpoint;
            var9 = 'endpoint';
            var1[var9] = var11;
            var11 = var5.wasSuccessful;
            var9 = 'was_successful';
            var1[var9] = var11;
            var9 = 'api_latency_ms';
            var1[var9] = var10;
            var9 = _closure1_slot5;
            var7 = var9.getType;
            var9 = var7.bind(var9)();
            var7 = 'mobile_network_type';
            var1[var7] = var9;
            var6 = var6 != var8;
            if(!var6) { _fun0001_ip = 245; continue _fun0001 }
 235:
            var7 = {};
            var7['mobile_signal_strength_level'] = var8;
            var6 = var7;
 245:
            var15 = var1;
            var14 = var6;
            var6 = copyDataProperties(var15, var14);
            var6 = var5.callerSource;
            var5 = 'caller_source';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
 278:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
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
            var6 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var6;
            var5 = {};
            var1 = global;
            var7 = var1.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var5['initialSendTimestamp'] = var4;
            var5['endpoint'] = var6;
            var4 = null;
            var5['apiResponseTimestamp'] = var4;
            var4 = false;
            var5['wasSuccessful'] = var4;
            var4 = arg2;
            var5['callerSource'] = var4;
            var4 = var3.pendingRequests;
            var3 = var4.set;
            var3 = var3.bind(var4)(var6, var5);
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure3_slot0;
                    var4 = var2.pendingRequests;
                    var3 = var4.get;
                    var2 = _closure3_slot1;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 71; continue _fun0002 }
 33:
                    var3 = _closure1_slot7;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var2 = _closure3_slot0;
                    var3 = var2.pendingRequests;
                    var2 = var3.delete;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 30000;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'recordQuestRequestApiResponse';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = arg2;
                var6 = var2.wasSuccessful;
                var4 = var1.pendingRequests;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var2)) { _fun0003_ip = 114; continue _fun0003 }
 37:
                var5 = _closure1_slot7;
                var4 = {};
                var9 = var4;
                var8 = var2;
                var2 = copyDataProperties(var9, var8);
                var2 = global;
                var7 = var2.Date;
                var2 = var7.now;
                var7 = var2.bind(var7)();
                var2 = 'apiResponseTimestamp';
                var4[var2] = var7;
                var2 = 'wasSuccessful';
                var4[var2] = var6;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var1.pendingRequests;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 114:
                var1 = undefined;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestDecisionRoundtripTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();