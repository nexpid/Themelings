// app/modules/quests/native/BountiesModal/useBountiesModalTiming.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'END_CARD';
    var4['END_CARD'] = var5;
    var5 = 'LOOP';
    var4['LOOP'] = var5;
    var _closure1_slot5 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/BountiesModal/useBountiesModalTiming.tsx';
    var5 = var6.bind(var7)(var5);
    var3['BountyVideoEndMode'] = var4;
    var2 = function useBountiesModalTiming(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.endMode;
            var _closure2_slot0 = var17;
            var1 = var2.rewardDurationMs;
            var _closure2_slot1 = var1;
            var10 = var2.isCompleted;
            var15 = var2.onRewardEarned;
            var _closure2_slot2 = var15;
            var7 = var2.onVideoProgress;
            var _closure2_slot3 = var7;
            var16 = var2.onVideoEnd;
            var _closure2_slot4 = var16;
            var11 = var2.initialMaxVideoProgressSec;
            var13 = undefined;
            if(!(var11 === var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 0;
case 2:
            var19 = var2.initialVideoDurationSec;
            if(!(var19 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var19 = null;
case 4:
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var13;
            var _closure2_slot7 = var13;
            var _closure2_slot8 = var13;
            var _closure2_slot9 = var13;
            var _closure2_slot10 = var13;
            var _closure2_slot11 = var13;
            var4 = _closure1_slot3;
            var3 = var4.useState;
            var6 = null;
            var2 = var6 != var19;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = 1;
            var8 = var19 - var8;
            var2 = var11 >= var8;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot5;
            var8 = var8.END_CARD;
            var2 = var17 === var8;
case 8:
            var2 = var3.bind(var4)(var2);
            var21 = _closure1_slot2;
            var8 = 2;
            var2 = var21.bind(var13)(var2, var8);
            var18 = 0;
            var9 = var2[var18];
            var20 = 1;
            var2 = var2[var20];
            _closure2_slot5 = var2;
            var12 = _closure1_slot3;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var18);
            var2 = var21.bind(var13)(var2, var8);
            var4 = var2[var18];
            var2 = var2[var20];
            _closure2_slot6 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var11);
            var2 = var21.bind(var13)(var2, var8);
            var3 = var2[var18];
            var2 = var2[var20];
            _closure2_slot7 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var19);
            var8 = var21.bind(var13)(var2, var8);
            var2 = var8[var18];
            var8 = var8[var20];
            _closure2_slot8 = var8;
            var8 = var12.useRef;
            var8 = var8.bind(var12)(var10);
            _closure2_slot9 = var8;
            var8 = var12.useRef;
            var8 = var8.bind(var12)(var11);
            _closure2_slot10 = var8;
            var11 = var12.useRef;
            var20 = var6 != var19;
            var8 = 0;
            if(!var20) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var19;
case 10:
            var8 = var11.bind(var12)(var8);
            _closure2_slot11 = var8;
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var8 = new Array(3);
            var8[0] = var7;
            var8[1] = var15;
            var8[2] = var1;
            var7 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.progress;
                    var6 = var1.currentTime;
                    var4 = var1.seekableDuration;
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.max;
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var5 = var3.bind(var5)(var6, var1);
                    var1 = _closure2_slot10;
                    var1['current'] = var5;
                    var1 = _closure2_slot11;
                    var1['current'] = var4;
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var7);
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5, var4, var6);
                    var3 = _closure2_slot9;
                    var3 = var3.current;
                    var3 = !var3;
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = 1000;
                    var5 = var4 * var5;
                    var4 = _closure2_slot1;
                    var3 = var5 >= var4;
case 12:
                    if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = _closure2_slot9;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 14:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var7, var8);
            var11 = var12.useCallback;
            var8 = new Array(3);
            var8[0] = var17;
            var8[1] = var16;
            var8[2] = var15;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot5;
                    var2 = var2.LOOP;
                    if(!(var3 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot5;
                    var5 = undefined;
                    var2 = true;
                    var2 = var3.bind(var5)(var2);
                    var4 = _closure2_slot4;
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var2 = var4.bind(var5)(var3, var2);
case 16:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = _closure2_slot9;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var5, var8);
            var11 = 1000;
            var12 = var11 * var3;
            var15 = var6 != var2;
            var5 = null;
            var6 = null;
            if(!var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = global;
            var17 = var15.Math;
            var16 = var17.min;
            var11 = var1 / var11;
            var11 = var16.bind(var17)(var11, var2);
            var16 = var12 >= var1;
            var1 = 0;
            if(var16) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = 0;
            if(var9) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var1 = 0;
            if(var10) { _fun0001_ip = 22; continue _fun0001 }
case 25:
            var17 = var15.Math;
            var16 = var17.max;
            var15 = var11 - var3;
            var1 = var16.bind(var17)(var18, var15);
case 22:
            var6 = var1;
            var5 = var11;
case 20:
            var11 = _closure1_slot0;
            var15 = _closure1_slot1;
            var1 = 3;
            var1 = var15[var1];
            var1 = var11.bind(var13)(var1);
            var13 = var1.BountiesStage1Experiment;
            var11 = var13.useConfig;
            var1 = {};
            var14 = _closure1_slot4;
            var14 = var14.VIDEO_MODAL_MOBILE;
            var1['location'] = var14;
            var1 = var11.bind(var13)(var1);
            var11 = var1.ctaTimerMilliSeconds;
            var1 = {};
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = var12 > var11;
case 26:
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = !var9;
case 28:
            var1['isCtaVisible'] = var10;
            var1['isEndCardVisible'] = var9;
            var1['handleVideoEnd'] = var8;
            var1['handleVideoProgress'] = var7;
            var1['rewardRemainingSeconds'] = var6;
            var1['rewardTotalSeconds'] = var5;
            var1['normalizedProgress'] = var4;
            var1['maxVideoProgressSeconds'] = var3;
            var1['videoDuration'] = var2;
            return var1;
        }
    };
    var3['useBountiesModalTiming'] = var2;
    return var1;
})();