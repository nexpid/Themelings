// app/modules/quests/QuestBarRenderDelayTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function QuestBarRenderDelayTracker() {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['startTime'] = var2;
            var3['questId'] = var2;
            var3['timeoutTimer'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isEligible';
        var1['key'] = var2;
        var2 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isEligibleForQuestBarRenderDelay;
            var1 = _closure1_slot5;
            var1 = var1.QUESTS_BAR;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'clearTimeoutTimer';
        var1['key'] = var6;
        var6 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var3 = var2.timeoutTimer;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 42; continue _fun0001 }
 15:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.timeoutTimer;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['timeoutTimer'] = var1;
 42:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'sendMetric';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var7 = arg1;
                var6 = arg2;
                var5 = arg3;
                var12 = global;
                var2 = var12.Math;
                var1 = var2.random;
                var2 = var1.bind(var2)();
                var1 = 0.1;
                if(!(!(var2 > var1))) { _fun0002_ip = 225; continue _fun0002 }
 44:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 5;
                var2 = var8[var2];
                var3 = undefined;
                var10 = var4.bind(var3)(var2);
                var9 = var10.distribution;
                var2 = {};
                var13 = _closure1_slot0;
                var11 = 6;
                var11 = var8[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.MetricEvents;
                var11 = var11.QUEST_BAR_RENDER_DELAY;
                var2['name'] = var11;
                var11 = var12.HermesInternal;
                var13 = var11.concat;
                var11 = 'quest_id:';
                var13 = var13.bind(var11)(var7);
                var11 = new Array(2);
                var11[0] = var13;
                var12 = var12.HermesInternal;
                var13 = var12.concat;
                var12 = 'timeout:';
                var12 = var13.bind(var12)(var6);
                var11[1] = var12;
                var2['tags'] = var11;
                var2 = var9.bind(var10)(var2, var5);
                var2 = 7;
                var2 = var8[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.track;
                var1 = _closure1_slot6;
                var2 = var1.QUEST_BAR_RENDER_DELAY;
                var1 = {};
                var1['quest_id'] = var7;
                var1['timeout'] = var6;
                var1['duration'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 225:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'startTracking';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var3 = var2.isEligible;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0003_ip = 101; continue _fun0003 }
 29:
                var3 = var2.clearTracking;
                var3 = var3.bind(var2)();
                var3 = global;
                var6 = var3.performance;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var2['startTime'] = var5;
                var2['questId'] = var4;
                var5 = var3.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.stopTracking;
                    var2 = _closure3_slot1;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = 30000;
                var1 = var5.bind(var4)(var3, var1);
                var2['timeoutTimer'] = var1;
 101:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'stopTracking';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var5 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0004_ip = 17; continue _fun0004 }
 15:
                var5 = false;
 17:
                var2 = var3.isEligible;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0004_ip = 201; continue _fun0004 }
 33:
                var4 = var3.startTime;
                var2 = null;
                if(!(var2 !== var4)) { _fun0004_ip = 201; continue _fun0004 }
 48:
                var2 = var3.questId;
                if(!(var2 === var6)) { _fun0004_ip = 201; continue _fun0004 }
 61:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.getState;
                var4 = var2.bind(var4)();
                var2 = 'active';
                if(!(var2 === var4)) { _fun0004_ip = 191; continue _fun0004 }
 102:
                var8 = 30000;
                var7 = var8;
                if(var5) { _fun0004_ip = 157; continue _fun0004 }
 114:
                var2 = global;
                var9 = var2.Math;
                var4 = var9.round;
                var10 = var2.performance;
                var2 = var10.now;
                var10 = var2.bind(var10)();
                var2 = var3.startTime;
                var2 = var10 - var2;
                var7 = var4.bind(var9)(var2);
 157:
                var2 = global;
                var4 = var2.Math;
                var2 = var4.min;
                var4 = var2.bind(var4)(var7, var8);
                var2 = var3.sendMetric;
                var2 = var2.bind(var3)(var6, var5, var4);
 191:
                var2 = var3.clearTracking;
                var2 = var2.bind(var3)();
 201:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'clearTracking';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = var2.clearTimeoutTimer;
            var1 = var1.bind(var2)();
            var1 = null;
            var2['startTime'] = var1;
            var2['questId'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[5] = var1;
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestBarRenderDelayTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();