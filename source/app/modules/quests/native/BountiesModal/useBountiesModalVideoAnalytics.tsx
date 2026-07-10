// app/modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = [25, 50, 75];
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBountiesModalVideoAnalytics(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.bountyId;
            var _closure2_slot0 = var10;
            var7 = var1.sourceQuestContent;
            var _closure2_slot1 = var7;
            var6 = var1.rewardDurationMs;
            var _closure2_slot2 = var6;
            var4 = var1.initialPlaybackTimeSec;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0004_ip = 5; continue _fun0004 }
case 36:
            var4 = 0;
case 5:
            var11 = var1.initialMaxVideoProgressSec;
            if(!(var11 === var9)) { _fun0004_ip = 7; continue _fun0004 }
case 37:
            var11 = 0;
case 7:
            var _closure2_slot3 = var11;
            var1 = var1.initialVideoDurationSec;
            if(!(var1 === var9)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = 0;
case 38:
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var9;
            var _closure2_slot6 = var9;
            var _closure2_slot7 = var9;
            var _closure2_slot8 = var9;
            var _closure2_slot9 = var9;
            var _closure2_slot10 = var9;
            var _closure2_slot11 = var9;
            var _closure2_slot12 = var9;
            var _closure2_slot13 = var9;
            var _closure2_slot14 = var9;
            var _closure2_slot15 = var9;
            var _closure2_slot16 = var9;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 2;
            var5 = var12[var5];
            var8 = var8.bind(var9)(var5);
            var5 = var8.useQuestImpressionId;
            var8 = var5.bind(var8)();
            _closure2_slot5 = var8;
            var13 = _closure1_slot3;
            var12 = var13.useMemo;
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = new Array(0);
            var9 = var12.bind(var13)(var9, var5);
            _closure2_slot6 = var9;
            var12 = var13.useRef;
            var5 = global;
            var5 = var5.Set;
            var14 = var5.prototype;
            var14 = Object.create(var14, {constructor: {value: var5}});
            var19 = var14;
            var5 = new var19[var5](var18);
            var5 = var5 instanceof Object ? var5 : var14;
            var15 = 0;
            var14 = var4 > var15;
            if(var14) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var14 = var11 > var15;
case 40:
            if(!var14) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var15 = var5.add;
            var14 = 'start';
            var14 = var15.bind(var5)(var14);
case 42:
            var14 = 1000;
            var14 = var14 * var11;
            if(!(var14 >= var6)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var15 = var5.add;
            var14 = 'threshold';
            var14 = var15.bind(var5)(var14);
case 44:
            var5 = var12.bind(var13)(var5);
            _closure2_slot7 = var5;
            var5 = _closure1_slot3;
            var12 = var5.useRef;
            var3 = false;
            var3 = var12.bind(var5)(var3);
            _closure2_slot8 = var3;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var4);
            _closure2_slot9 = var3;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var1);
            _closure2_slot10 = var3;
            var4 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var1;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot8;
                    var1 = var1.current;
                    if(var1) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var2 = _closure2_slot8;
                    var1 = true;
                    var2['current'] = var1;
                    var1 = 0;
                    if(!(!(var5 > var1))) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var5 = _closure2_slot4;
case 48:
                    if(!(!(var5 <= var1))) { _fun0005_ip = 46; continue _fun0005 }
case 50:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.formatVideoProgressRatio;
                    var2 = _closure2_slot3;
                    var7 = var3.bind(var4)(var2, var5);
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot5;
                    var6 = var2.bind(var8)(var1);
                    var2 = var6.bind(var8)();
                    var1 = var2.done;
                    var5 = global;
                    var4 = 'p';
                    var3 = 100;
                    if(var1) { _fun0005_ip = 46; continue _fun0005 }
case 51:
                    var12 = var2.value;
                    var1 = var12 / var3;
                    if(!(var7 >= var1)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var1 = _closure2_slot7;
                    var11 = var1.current;
                    var10 = var11.add;
                    var1 = var5.HermesInternal;
                    var1 = var1.concat;
                    var1 = var1.bind(var4)(var12);
                    var1 = var10.bind(var11)(var1);
case 52:
                    var10 = var6.bind(var8)();
                    var1 = var10.done;
                    var2 = var10;
                    if(!var1) { _fun0005_ip = 51; continue _fun0005 }
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var4.bind(var5)(var1, var3);
            _closure2_slot11 = var15;
            var4 = var5.useCallback;
            var3 = new Array(5);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var1 = function(arg1) {
                var1 = arg1;
                var8 = var1.videoTimestampSeconds;
                var9 = var1.progress;
                var7 = var1.thresholdMet;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 5;
                var2 = var12[var1];
                var1 = undefined;
                var4 = var11.bind(var1)(var2);
                var3 = var4.trackAdContentEvent;
                var2 = {};
                var10 = _closure2_slot0;
                var2['adContentId'] = var10;
                var10 = 6;
                var10 = var12[var10];
                var10 = var11.bind(var1)(var10);
                var10 = var10.AdCreativeType;
                var10 = var10.BOUNTY;
                var2['adCreativeType'] = var10;
                var6 = _closure1_slot4;
                var6 = var6.AD_VIDEO_PROGRESSED;
                var2['event'] = var6;
                var6 = {};
                var6['progress'] = var9;
                var6['video_timestamp_seconds'] = var8;
                var8 = _closure2_slot6;
                var6['video_session_id'] = var8;
                var8 = _closure2_slot5;
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
            var1 = var4.bind(var5)(var1, var3);
            _closure2_slot12 = var1;
            var11 = var5.useCallback;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = var3.has;
                    var4 = 'start';
                    var2 = var2.bind(var3)(var4);
                    if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    var3 = _closure2_slot12;
                    var2 = undefined;
                    var1 = {'videoTimestampSeconds': 0, 'progress': 0, 'thresholdMet': false};
                    var1 = var3.bind(var2)(var1);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var11.bind(var5)(var3, var4);
            _closure2_slot13 = var14;
            var11 = var5.useCallback;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var6;
            var3 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = var3.has;
                    var4 = 'threshold';
                    var2 = var2.bind(var3)(var4);
                    if(var2) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var2 = _closure2_slot7;
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
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.formatVideoProgressRatio;
                    var2 = arg2;
                    var4 = var4.bind(var6)(var5, var2);
                    var2 = _closure2_slot12;
                    var1 = {};
                    var1['videoTimestampSeconds'] = var5;
                    var1['progress'] = var4;
                    var4 = true;
                    var1['thresholdMet'] = var4;
                    var1 = var2.bind(var3)(var1);
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var11.bind(var5)(var3, var4);
            _closure2_slot14 = var13;
            var11 = var5.useCallback;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var3 = var1.current;
                    var1 = var3.has;
                    var4 = 'end';
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0008_ip = 58; continue _fun0008 }
case 55:
                    var1 = _closure2_slot7;
                    var3 = var1.current;
                    var1 = var3.add;
                    var1 = var1.bind(var3)(var4);
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var3 = arg1;
                    var1 = arg2;
                    var1 = var4.bind(var5)(var3, var1);
                    var3 = _closure2_slot12;
                    var2 = {'videoTimestampSeconds': null, 'progress': 1, 'thresholdMet': true};
                    var2['videoTimestampSeconds'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var11.bind(var5)(var3, var4);
            _closure2_slot15 = var3;
            var11 = var5.useCallback;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var6;
            var1 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var11 = arg1;
                    var4 = arg2;
                    var1 = 0;
                    if(!(!(var4 <= var1))) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var10 = undefined;
                    var3 = var3.bind(var10)(var2);
                    var2 = var3.formatVideoProgressRatio;
                    var9 = var2.bind(var3)(var11, var4);
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot5;
                    var8 = var2.bind(var10)(var1);
                    var2 = var8.bind(var10)();
                    var1 = var2.done;
                    var6 = 1000;
                    var5 = 100;
                    var4 = global;
                    var3 = 'p';
                    if(var1) { _fun0009_ip = 59; continue _fun0009 }
case 61:
                    var1 = var2.value;
                    var12 = var4.HermesInternal;
                    var12 = var12.concat;
                    var13 = var12.bind(var3)(var1);
                    var12 = _closure2_slot7;
                    var14 = var12.current;
                    var12 = var14.has;
                    var12 = var12.bind(var14)(var13);
                    if(var12) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var1 = var1 / var5;
                    if(!(!(var9 < var1))) { _fun0009_ip = 62; continue _fun0009 }
case 64:
                    var1 = _closure2_slot7;
                    var12 = var1.current;
                    var1 = var12.add;
                    var1 = var1.bind(var12)(var13);
                    var12 = _closure2_slot12;
                    var1 = {};
                    var1['videoTimestampSeconds'] = var11;
                    var1['progress'] = var9;
                    var14 = var6 * var11;
                    var13 = _closure2_slot2;
                    var13 = var14 >= var13;
                    var1['thresholdMet'] = var13;
                    var1 = var12.bind(var10)(var1);
case 62:
                    var12 = var8.bind(var10)();
                    var1 = var12.done;
                    var2 = var12;
                    if(!var1) { _fun0009_ip = 61; continue _fun0009 }
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var11.bind(var5)(var1, var4);
            _closure2_slot16 = var12;
            var1 = {};
            var16 = var5.useCallback;
            var11 = new Array(5);
            var11[0] = var15;
            var11[1] = var14;
            var11[2] = var13;
            var11[3] = var12;
            var11[4] = var6;
            var4 = function(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot9;
                    var1 = arg3;
                    var5['current'] = var1;
                    var1 = _closure2_slot10;
                    var1['current'] = var3;
                    var5 = _closure2_slot11;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var5 = 0;
                    if(!(var5 === var4)) { _fun0010_ip = 65; continue _fun0010 }
case 5:
                    var5 = _closure2_slot13;
                    var5 = var5.bind(var1)();
case 65:
                    var5 = 1000;
                    var6 = var5 * var4;
                    var5 = _closure2_slot2;
                    if(!(var6 >= var5)) { _fun0010_ip = 66; continue _fun0010 }
case 39:
                    var5 = _closure2_slot14;
                    var5 = var5.bind(var1)(var4, var3);
case 66:
                    var2 = _closure2_slot16;
                    var2 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var4 = var16.bind(var5)(var4, var11);
            var1['handleVideoProgressAnalytics'] = var4;
            var11 = var5.useCallback;
            var4 = new Array(5);
            var4[0] = var15;
            var4[1] = var14;
            var4[2] = var13;
            var4[3] = var12;
            var4[4] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot9;
                    var1 = arg3;
                    var5['current'] = var1;
                    var1 = _closure2_slot10;
                    var1['current'] = var3;
                    var5 = _closure2_slot11;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var5 = 0;
                    if(!(var5 === var4)) { _fun0011_ip = 65; continue _fun0011 }
case 5:
                    var5 = _closure2_slot13;
                    var5 = var5.bind(var1)();
case 65:
                    var5 = _closure2_slot14;
                    var5 = var5.bind(var1)(var4, var3);
                    var5 = _closure2_slot16;
                    var5 = var5.bind(var1)(var4, var3);
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var3 = var11.bind(var5)(var3, var4);
            var1['handleVideoEndAnalytics'] = var3;
            var11 = var5.useCallback;
            var4 = new Array(5);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var7;
            var4[4] = var6;
            var3 = function(arg1) {
                var2 = _closure2_slot9;
                var1 = 0;
                var2['current'] = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var8.bind(var1)(var2);
                var3 = var4.trackAdContentEvent;
                var2 = {};
                var7 = _closure2_slot0;
                var2['adContentId'] = var7;
                var7 = 6;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.AdCreativeType;
                var7 = var7.BOUNTY;
                var2['adCreativeType'] = var7;
                var6 = _closure1_slot4;
                var6 = var6.AD_VIDEO_LOOPED;
                var2['event'] = var6;
                var6 = {};
                var7 = _closure2_slot6;
                var6['video_session_id'] = var7;
                var7 = _closure2_slot5;
                var6['impression_id'] = var7;
                var7 = arg1;
                var6['loop_count'] = var7;
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
            var3 = var11.bind(var5)(var3, var4);
            var1['handleVideoLoopedAnalytics'] = var3;
            var11 = var5.useCallback;
            var4 = new Array(5);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var7;
            var4[4] = var6;
            var3 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.PlaybackTriggerSource;
                    var3 = var2.USER_INTERACTION;
                    var2 = arg2;
                    if(!(var2 === var3)) { _fun0012_ip = 67; continue _fun0012 }
case 36:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var2 = var9[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.trackAdContentEvent;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['adContentId'] = var7;
                    var7 = 6;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.AdCreativeType;
                    var7 = var7.BOUNTY;
                    var2['adCreativeType'] = var7;
                    var6 = _closure1_slot4;
                    var6 = var6.AD_VIDEO_PAUSED;
                    var2['event'] = var6;
                    var6 = {};
                    var7 = arg1;
                    var6['video_timestamp_seconds'] = var7;
                    var7 = _closure2_slot6;
                    var6['video_session_id'] = var7;
                    var7 = _closure2_slot5;
                    var6['impression_id'] = var7;
                    var8 = _closure2_slot2;
                    var7 = 1000;
                    var7 = var8 / var7;
                    var6['reward_timer_seconds'] = var7;
                    var2['properties'] = var6;
                    var5 = _closure2_slot1;
                    var2['sourceQuestContent'] = var5;
                    var2 = var3.bind(var4)(var2);
case 67:
                    return var1;
                }
            };
            var3 = var11.bind(var5)(var3, var4);
            var1['handleVideoPausedAnalytics'] = var3;
            var11 = var5.useCallback;
            var4 = new Array(5);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var7;
            var4[4] = var6;
            var3 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.PlaybackTriggerSource;
                    var3 = var2.USER_INTERACTION;
                    var2 = arg2;
                    if(!(var2 === var3)) { _fun0013_ip = 67; continue _fun0013 }
case 36:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var2 = var9[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.trackAdContentEvent;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['adContentId'] = var7;
                    var7 = 6;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.AdCreativeType;
                    var7 = var7.BOUNTY;
                    var2['adCreativeType'] = var7;
                    var6 = _closure1_slot4;
                    var6 = var6.AD_VIDEO_RESUMED;
                    var2['event'] = var6;
                    var6 = {};
                    var7 = arg1;
                    var6['video_timestamp_seconds'] = var7;
                    var7 = _closure2_slot6;
                    var6['video_session_id'] = var7;
                    var7 = _closure2_slot5;
                    var6['impression_id'] = var7;
                    var8 = _closure2_slot2;
                    var7 = 1000;
                    var7 = var8 / var7;
                    var6['reward_timer_seconds'] = var7;
                    var2['properties'] = var6;
                    var5 = _closure2_slot1;
                    var2['sourceQuestContent'] = var5;
                    var2 = var3.bind(var4)(var2);
case 67:
                    return var1;
                }
            };
            var3 = var11.bind(var5)(var3, var4);
            var1['handleVideoResumedAnalytics'] = var3;
            var4 = var5.useCallback;
            var3 = new Array(5);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg1;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 5;
                    var2 = var11[var1];
                    var1 = undefined;
                    var6 = var10.bind(var1)(var2);
                    var3 = var6.trackAdContentEvent;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['adContentId'] = var8;
                    var8 = 6;
                    var8 = var11[var8];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.AdCreativeType;
                    var8 = var8.BOUNTY;
                    var2['adCreativeType'] = var8;
                    var8 = _closure1_slot4;
                    var8 = var8.AD_VIDEO_ERROR;
                    var2['event'] = var8;
                    var8 = {'video_progress': null, 'video_error_type': null, 'network_connection_speed': null};
                    var9 = 4;
                    var9 = var11[var9];
                    var12 = var10.bind(var1)(var9);
                    var11 = var12.formatVideoProgressRatio;
                    var9 = _closure2_slot9;
                    var10 = var9.current;
                    var9 = _closure2_slot10;
                    var9 = var9.current;
                    var9 = var11.bind(var12)(var10, var9);
                    var8['video_progress'] = var9;
                    var9 = null;
                    var10 = _closure2_slot6;
                    var8['video_session_id'] = var10;
                    var11 = var9 == var4;
                    var10 = undefined;
                    if(var11) { _fun0014_ip = 68; continue _fun0014 }
case 69:
                    var11 = var4.error;
                    var10 = var11.code;
case 68:
                    var8['video_error_code'] = var10;
                    var11 = var9 == var4;
                    var10 = undefined;
                    if(var11) { _fun0014_ip = 70; continue _fun0014 }
case 71:
                    var11 = var4.error;
                    var10 = var11.localizedDescription;
case 70:
                    if(!(var9 == var10)) { _fun0014_ip = 72; continue _fun0014 }
case 73:
                    var12 = var9 == var4;
                    var11 = undefined;
                    if(var12) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                    var12 = var4.error;
                    var11 = var12.errorString;
case 74:
                    var10 = var11;
case 72:
                    var8['video_error_message'] = var10;
                    var8['video_network_state'] = var9;
                    var9 = _closure2_slot5;
                    var8['impression_id'] = var9;
                    var10 = _closure2_slot2;
                    var9 = 1000;
                    var9 = var10 / var9;
                    var8['reward_timer_seconds'] = var9;
                    var2['properties'] = var8;
                    var7 = _closure2_slot1;
                    var2['sourceQuestContent'] = var7;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isSourceError;
                    var2 = var2.bind(var3)(var4);
                    if(!var2) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.increment;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = 10;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.MetricEvents;
                    var5 = var5.QUEST_VIDEO_ERROR;
                    var2['name'] = var5;
                    var5 = ['error_type:SOURCE_ERROR'];
                    var2['tags'] = var5;
                    var2 = var3.bind(var4)(var2);
case 76:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['handleVideoErrorAnalytics'] = var2;
            return var1;
        }
    };
    var3['useBountiesModalVideoAnalytics'] = var2;
    return var1;
})();