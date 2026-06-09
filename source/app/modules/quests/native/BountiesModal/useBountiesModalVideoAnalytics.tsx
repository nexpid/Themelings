// app/modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBountiesModalVideoAnalytics(arg1) {
        var3 = arg1;
        var9 = var3.bountyId;
        var _closure2_slot0 = var9;
        var1 = var3.sourceQuestContent;
        var _closure2_slot1 = var1;
        var3 = var3.rewardDurationMs;
        var _closure2_slot2 = var3;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var5 = 2;
        var6 = var6[var5];
        var5 = undefined;
        var6 = var7.bind(var5)(var6);
        var5 = var6.useQuestImpressionId;
        var7 = var5.bind(var6)();
        var _closure2_slot3 = var7;
        var5 = _closure1_slot2;
        var8 = var5.useMemo;
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.v4;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = new Array(0);
        var8 = var8.bind(var5)(var6, var4);
        var _closure2_slot4 = var8;
        var6 = var5.useRef;
        var4 = global;
        var4 = var4.Set;
        var10 = var4.prototype;
        var10 = Object.create(var10, {constructor: {value: var4}});
        var13 = var10;
        var4 = new var13[var4](var12);
        var4 = var4 instanceof Object ? var4 : var10;
        var4 = var6.bind(var5)(var4);
        var _closure2_slot5 = var4;
        var6 = var5.useCallback;
        var4 = new Array(5);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var4[3] = var1;
        var4[4] = var3;
        var1 = function(arg1) {
            var1 = arg1;
            var8 = var1.videoTimestampSeconds;
            var9 = var1.progress;
            var7 = var1.thresholdMet;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 4;
            var2 = var12[var1];
            var1 = undefined;
            var4 = var11.bind(var1)(var2);
            var3 = var4.trackAdContentEvent;
            var2 = {};
            var10 = _closure2_slot0;
            var2['adContentId'] = var10;
            var10 = 5;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.AdCreativeType;
            var10 = var10.BOUNTY;
            var2['adCreativeType'] = var10;
            var6 = _closure1_slot3;
            var6 = var6.AD_VIDEO_PROGRESSED;
            var2['event'] = var6;
            var6 = {};
            var6['progress'] = var9;
            var6['video_timestamp_seconds'] = var8;
            var8 = _closure2_slot4;
            var6['video_session_id'] = var8;
            var8 = _closure2_slot3;
            var6['impression_id'] = var8;
            var6['threshold_met'] = var7;
            var8 = _closure2_slot2;
            var7 = 1000;
            var7 = var8 / var7;
            var6['reward_timer_seconds'] = var7;
            var2['properties'] = var6;
            var5 = _closure2_slot1;
            var2['sourceQuestContent'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var6.bind(var5)(var1, var4);
        var _closure2_slot6 = var1;
        var7 = var5.useCallback;
        var6 = new Array(1);
        var6[0] = var1;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot5;
                var3 = var2.current;
                var2 = var3.has;
                var4 = 'start';
                var2 = var2.bind(var3)(var4);
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot5;
                var3 = var2.current;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var3 = _closure2_slot6;
                var2 = undefined;
                var1 = {'videoTimestampSeconds': 0, 'progress': 0, 'thresholdMet': false};
                var1 = var3.bind(var2)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var7.bind(var5)(var4, var6);
        var _closure2_slot7 = var8;
        var7 = var5.useCallback;
        var6 = new Array(2);
        var6[0] = var1;
        var6[1] = var3;
        var4 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot5;
                var3 = var2.current;
                var2 = var3.has;
                var4 = 'threshold';
                var2 = var2.bind(var3)(var4);
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot5;
                var3 = var2.current;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var3 = _closure2_slot2;
                var2 = 1000;
                var3 = var3 / var2;
                var2 = arg1;
                var5 = var4.bind(var5)(var3, var2);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var4 = var6.formatVideoProgressRatio;
                var2 = arg2;
                var4 = var4.bind(var6)(var5, var2);
                var2 = _closure2_slot6;
                var1 = {};
                var1['videoTimestampSeconds'] = var5;
                var1['progress'] = var4;
                var4 = true;
                var1['thresholdMet'] = var4;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var7.bind(var5)(var4, var6);
        var _closure2_slot8 = var7;
        var6 = var5.useCallback;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot5;
                var3 = var1.current;
                var1 = var3.has;
                var4 = 'end';
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                var1 = _closure2_slot5;
                var3 = var1.current;
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
                var1 = global;
                var5 = var1.Math;
                var4 = var5.max;
                var3 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var1);
                var3 = _closure2_slot6;
                var2 = {'videoTimestampSeconds': null, 'progress': 1, 'thresholdMet': true};
                var2['videoTimestampSeconds'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var6.bind(var5)(var1, var4);
        var _closure2_slot9 = var6;
        var1 = {};
        var9 = var5.useCallback;
        var4 = new Array(3);
        var4[0] = var8;
        var4[1] = var7;
        var4[2] = var3;
        var3 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot7;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = 1000;
                var5 = var3 * var4;
                var3 = _closure2_slot2;
                if(!(var5 >= var3)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                var3 = _closure2_slot8;
                var2 = arg2;
                var2 = var3.bind(var1)(var4, var2);
case 7:
                return var1;
            }
        };
        var3 = var9.bind(var5)(var3, var4);
        var1['handleVideoProgressAnalytics'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function(arg1, arg2) {
            var4 = arg1;
            var3 = arg2;
            var5 = _closure2_slot7;
            var1 = undefined;
            var5 = var5.bind(var1)();
            var5 = _closure2_slot8;
            var5 = var5.bind(var1)(var4, var3);
            var2 = _closure2_slot9;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['handleVideoEndAnalytics'] = var2;
        return var1;
    };
    var3['useBountiesModalVideoAnalytics'] = var2;
    return var1;
})();