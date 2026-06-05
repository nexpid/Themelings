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
    var5 = 'END_CARD_WITH_CTA';
    var4['END_CARD_WITH_CTA'] = var5;
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
            var1 = arg1;
            var17 = var1.endMode;
            var _closure2_slot0 = var17;
            var14 = var1.rewardDurationMs;
            var _closure2_slot1 = var14;
            var13 = var1.isCompleted;
            var8 = var1.onRewardEarned;
            var _closure2_slot2 = var8;
            var9 = var1.onVideoProgress;
            var _closure2_slot3 = var9;
            var19 = var1.onVideoEnd;
            var _closure2_slot4 = var19;
            var16 = var1.playerRef;
            var _closure2_slot5 = var16;
            var11 = var1.initialMaxVideoProgressSec;
            var18 = undefined;
            if(!(var11 === var18)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 0;
case 2:
            var20 = var1.initialVideoDurationSec;
            if(!(var20 === var18)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var20 = null;
case 4:
            var _closure2_slot6 = var18;
            var _closure2_slot7 = var18;
            var _closure2_slot8 = var18;
            var _closure2_slot9 = var18;
            var _closure2_slot10 = var18;
            var _closure2_slot11 = var18;
            var _closure2_slot12 = var18;
            var _closure2_slot13 = var18;
            var4 = _closure1_slot3;
            var3 = var4.useState;
            var6 = null;
            var2 = var6 != var20;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = 1;
            var5 = var20 - var5;
            var2 = var11 >= var5;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot5;
            var5 = var5.LOOP;
            var2 = var17 !== var5;
case 8:
            var2 = var3.bind(var4)(var2);
            var23 = _closure1_slot2;
            var10 = 2;
            var2 = var23.bind(var18)(var2, var10);
            var22 = 0;
            var12 = var2[var22];
            var21 = 1;
            var2 = var2[var21];
            _closure2_slot6 = var2;
            var15 = _closure1_slot3;
            var2 = var15.useState;
            var2 = var2.bind(var15)(var22);
            var2 = var23.bind(var18)(var2, var10);
            var4 = var2[var22];
            var2 = var2[var21];
            _closure2_slot7 = var2;
            var2 = var15.useState;
            var2 = var2.bind(var15)(var6);
            var2 = var23.bind(var18)(var2, var10);
            var5 = var2[var22];
            var2 = var2[var21];
            _closure2_slot8 = var2;
            var2 = var15.useState;
            var2 = var2.bind(var15)(var11);
            var2 = var23.bind(var18)(var2, var10);
            var3 = var2[var22];
            var2 = var2[var21];
            _closure2_slot9 = var2;
            var2 = var15.useState;
            var2 = var2.bind(var15)(var20);
            var10 = var23.bind(var18)(var2, var10);
            var2 = var10[var22];
            var10 = var10[var21];
            _closure2_slot10 = var10;
            var10 = var15.useRef;
            var10 = var10.bind(var15)(var13);
            _closure2_slot11 = var10;
            var10 = var15.useRef;
            var10 = var10.bind(var15)(var11);
            _closure2_slot12 = var10;
            var11 = var15.useRef;
            var21 = var6 != var20;
            var10 = 0;
            if(!var21) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var20;
case 10:
            var10 = var11.bind(var15)(var10);
            _closure2_slot13 = var10;
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var10 = new Array(3);
            var10[0] = var9;
            var10[1] = var8;
            var10[2] = var14;
            var9 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.progress;
                    var6 = var1.currentTime;
                    var4 = var1.seekableDuration;
                    var5 = _closure2_slot8;
                    var1 = undefined;
                    var3 = null;
                    var3 = var5.bind(var1)(var3);
                    var3 = global;
                    var8 = var3.Math;
                    var5 = var8.max;
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    var5 = var5.bind(var8)(var6, var3);
                    var3 = _closure2_slot12;
                    var3['current'] = var5;
                    var3 = _closure2_slot13;
                    var3['current'] = var4;
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var1)(var7);
                    var3 = _closure2_slot9;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5, var4, var6);
                    var3 = _closure2_slot11;
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
                    var4 = _closure2_slot11;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 14:
                    return var1;
                }
            };
            var10 = var11.bind(var15)(var9, var10);
            var11 = var15.useCallback;
            var9 = new Array(3);
            var9[0] = var17;
            var9[1] = var19;
            var9[2] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot5;
                    var2 = var2.LOOP;
                    if(!(var3 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot6;
                    var5 = undefined;
                    var2 = true;
                    var2 = var3.bind(var5)(var2);
                    var4 = _closure2_slot4;
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var2 = var4.bind(var5)(var3, var2);
case 16:
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = _closure2_slot11;
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
            var11 = var11.bind(var15)(var8, var9);
            var9 = var15.useCallback;
            var8 = new Array(1);
            var8[0] = var16;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var6 = null;
                    var3 = var6 == var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var5 = _closure2_slot5;
                    var5 = var5.current;
                    var3 = var6 == var5;
                    var4 = var5;
case 20:
                    if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = var4.seekToStart;
                    var3 = var3.bind(var4)();
case 22:
                    var4 = _closure2_slot8;
                    var3 = 0;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot6;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var9.bind(var15)(var7, var8);
            var15 = 1000;
            var16 = var15 * var3;
            var19 = var6 != var2;
            var7 = null;
            var8 = null;
            if(!var19) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var19 = global;
            var21 = var19.Math;
            var20 = var21.min;
            var15 = var14 / var15;
            var15 = var20.bind(var21)(var15, var2);
            var20 = var16 >= var14;
            var14 = 0;
            if(var20) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var14 = 0;
            if(var12) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var14 = 0;
            if(var13) { _fun0001_ip = 26; continue _fun0001 }
case 29:
            var21 = var19.Math;
            var20 = var21.max;
            var19 = var15 - var3;
            var14 = var20.bind(var21)(var22, var19);
case 26:
            var8 = var14;
            var7 = var15;
case 24:
            var15 = _closure1_slot0;
            var19 = _closure1_slot1;
            var14 = 3;
            var14 = var19[var14];
            var14 = var15.bind(var18)(var14);
            var18 = var14.BountiesStage1Experiment;
            var15 = var18.useConfig;
            var14 = {};
            var19 = _closure1_slot4;
            var19 = var19.VIDEO_MODAL_MOBILE;
            var14['location'] = var19;
            var14 = var15.bind(var18)(var14);
            var15 = var14.ctaTimerMilliSeconds;
            var14 = var12;
            if(!var14) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var1 = _closure1_slot5;
            var1 = var1.END_CARD_WITH_CTA;
            var14 = var17 !== var1;
case 30:
            var1 = {};
            if(var13) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var13 = var16 > var15;
case 32:
            if(!var13) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var13 = !var14;
case 34:
            var1['isCtaVisible'] = var13;
            var1['isEndCardVisible'] = var12;
            var1['handleVideoEnd'] = var11;
            var1['handleVideoProgress'] = var10;
            var1['handleReplay'] = var9;
            var1['rewardRemainingSeconds'] = var8;
            var1['rewardTotalSeconds'] = var7;
            if(!(var6 != var5)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var4 = var5;
case 36:
            var1['normalizedProgress'] = var4;
            var1['maxVideoProgressSeconds'] = var3;
            var1['videoDuration'] = var2;
            return var1;
        }
    };
    var3['useBountiesModalTiming'] = var2;
    return var1;
})();