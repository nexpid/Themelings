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
            var19 = var1.endMode;
            var _closure2_slot0 = var19;
            var8 = var1.rewardDurationMs;
            var _closure2_slot1 = var8;
            var15 = var1.isCompleted;
            var11 = var1.onRewardEarned;
            var _closure2_slot2 = var11;
            var12 = var1.onVideoProgress;
            var _closure2_slot3 = var12;
            var23 = var1.onVideoEnd;
            var _closure2_slot4 = var23;
            var21 = var1.onVideoLooped;
            var _closure2_slot5 = var21;
            var10 = var1.onVideoPaused;
            var _closure2_slot6 = var10;
            var18 = var1.onVideoResumed;
            var _closure2_slot7 = var18;
            var9 = var1.playerRef;
            var _closure2_slot8 = var9;
            var13 = var1.initialProgressSec;
            var20 = undefined;
            if(!(var13 === var20)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = 0;
case 2:
            var _closure2_slot9 = var13;
            var16 = var1.initialMaxVideoProgressSec;
            if(!(var16 === var20)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = 0;
case 4:
            var24 = var1.initialVideoDurationSec;
            if(!(var24 === var20)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var24 = null;
case 6:
            var _closure2_slot10 = var24;
            var _closure2_slot11 = var20;
            var _closure2_slot12 = var20;
            var _closure2_slot13 = var20;
            var _closure2_slot14 = var20;
            var _closure2_slot15 = var20;
            var _closure2_slot16 = var20;
            var _closure2_slot17 = var20;
            var _closure2_slot18 = var20;
            var _closure2_slot19 = var20;
            var _closure2_slot20 = var20;
            var4 = _closure1_slot3;
            var3 = var4.useState;
            var6 = null;
            var2 = var6 != var24;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = 1;
            var5 = var24 - var5;
            var2 = var13 >= var5;
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot5;
            var5 = var5.LOOP;
            var2 = var19 !== var5;
case 10:
            var2 = var3.bind(var4)(var2);
            var26 = _closure1_slot2;
            var13 = 2;
            var2 = var26.bind(var20)(var2, var13);
            var22 = 0;
            var14 = var2[var22];
            var25 = 1;
            var2 = var2[var25];
            _closure2_slot11 = var2;
            var17 = _closure1_slot3;
            var3 = var17.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = 0;
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot10;
                    var1 = var3 / var2;
case 12:
                    return var1;
                }
            };
            var2 = var3.bind(var17)(var2);
            var2 = var26.bind(var20)(var2, var13);
            var4 = var2[var22];
            var2 = var2[var25];
            _closure2_slot12 = var2;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var6);
            var2 = var26.bind(var20)(var2, var13);
            var5 = var2[var22];
            var2 = var2[var25];
            _closure2_slot13 = var2;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var16);
            var2 = var26.bind(var20)(var2, var13);
            var3 = var2[var22];
            var2 = var2[var25];
            _closure2_slot14 = var2;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var24);
            var13 = var26.bind(var20)(var2, var13);
            var2 = var13[var22];
            var13 = var13[var25];
            _closure2_slot15 = var13;
            var13 = var17.useRef;
            var13 = var13.bind(var17)(var15);
            _closure2_slot16 = var13;
            var13 = var17.useRef;
            var13 = var13.bind(var17)(var16);
            _closure2_slot17 = var13;
            var16 = var17.useRef;
            var25 = var6 != var24;
            var13 = 0;
            if(!var25) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = var24;
case 14:
            var13 = var16.bind(var17)(var13);
            _closure2_slot18 = var13;
            var17 = _closure1_slot3;
            var13 = var17.useRef;
            var13 = var13.bind(var17)(var22);
            _closure2_slot19 = var13;
            var13 = var17.useRef;
            var13 = var13.bind(var17)(var22);
            _closure2_slot20 = var13;
            var16 = var17.useCallback;
            var13 = new Array(3);
            var13[0] = var12;
            var13[1] = var11;
            var13[2] = var8;
            var12 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.progress;
                    var6 = var1.currentTime;
                    var4 = var1.seekableDuration;
                    var5 = _closure2_slot13;
                    var1 = undefined;
                    var3 = null;
                    var3 = var5.bind(var1)(var3);
                    var3 = global;
                    var8 = var3.Math;
                    var5 = var8.max;
                    var3 = _closure2_slot17;
                    var3 = var3.current;
                    var5 = var5.bind(var8)(var6, var3);
                    var3 = _closure2_slot17;
                    var3['current'] = var5;
                    var3 = _closure2_slot18;
                    var3['current'] = var4;
                    var3 = _closure2_slot20;
                    var3['current'] = var6;
                    var3 = _closure2_slot12;
                    var3 = var3.bind(var1)(var7);
                    var3 = _closure2_slot14;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot15;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5, var4, var6);
                    var3 = _closure2_slot16;
                    var3 = var3.current;
                    var3 = !var3;
                    if(!var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = 1000;
                    var5 = var4 * var5;
                    var4 = _closure2_slot1;
                    var3 = var5 >= var4;
case 16:
                    if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = _closure2_slot16;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 18:
                    return var1;
                }
            };
            var12 = var16.bind(var17)(var12, var13);
            var16 = var17.useCallback;
            var13 = new Array(4);
            var13[0] = var19;
            var13[1] = var23;
            var13[2] = var21;
            var13[3] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure2_slot4;
                    var1 = _closure2_slot17;
                    var4 = var1.current;
                    var1 = _closure2_slot18;
                    var3 = var1.current;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var4, var3);
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot5;
                    var3 = var3.LOOP;
                    if(!(var4 !== var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var4 = _closure2_slot11;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    _fun0004_ip = 22; continue _fun0004;
case 20:
                    var4 = _closure2_slot19;
                    var5 = var4.current;
                    var3 = 1;
                    var3 = var5 + var3;
                    var4['current'] = var3;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot19;
                    var3 = var3.current;
                    var3 = var4.bind(var1)(var3);
case 22:
                    var3 = _closure2_slot16;
                    var3 = var3.current;
                    if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var4 = _closure2_slot16;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 23:
                    return var1;
                }
            };
            var13 = var16.bind(var17)(var11, var13);
            var16 = var17.useCallback;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var6 = null;
                    var3 = var6 == var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var5 = _closure2_slot8;
                    var5 = var5.current;
                    var3 = var6 == var5;
                    var4 = var5;
case 25:
                    if(var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var3 = var4.seekToStart;
                    var3 = var3.bind(var4)();
case 27:
                    var4 = _closure2_slot13;
                    var3 = 0;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot11;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var16.bind(var17)(var9, var11);
            var16 = var17.useCallback;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function(arg1) {
                var4 = _closure2_slot6;
                var1 = _closure2_slot20;
                var3 = var1.current;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var11 = var16.bind(var17)(var10, var11);
            var16 = var17.useCallback;
            var10 = new Array(1);
            var10[0] = var18;
            var7 = function(arg1) {
                var4 = _closure2_slot7;
                var1 = _closure2_slot20;
                var3 = var1.current;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var10 = var16.bind(var17)(var7, var10);
            var7 = 1000;
            var18 = var7 * var3;
            var7 = var8 / var7;
            var17 = global;
            var23 = var17.Math;
            var21 = var23.max;
            var16 = var7 - var3;
            var16 = var21.bind(var23)(var22, var16);
            var21 = var18 >= var8;
            var8 = 0;
            if(var21) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = 0;
            if(var14) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var8 = 0;
            if(var15) { _fun0001_ip = 29; continue _fun0001 }
case 32:
            var8 = var16;
            if(!(var6 != var2)) { _fun0001_ip = 29; continue _fun0001 }
case 33:
            var8 = var16;
            if(!(var2 > var22)) { _fun0001_ip = 29; continue _fun0001 }
case 34:
            var21 = var17.Math;
            var16 = var21.min;
            var16 = var16.bind(var21)(var7, var2);
            var21 = var17.Math;
            var17 = var21.max;
            var16 = var16 - var3;
            var8 = var17.bind(var21)(var22, var16);
case 29:
            var17 = _closure1_slot0;
            var21 = _closure1_slot1;
            var16 = 3;
            var16 = var21[var16];
            var16 = var17.bind(var20)(var16);
            var20 = var16.BountiesStage1Experiment;
            var17 = var20.useConfig;
            var16 = {};
            var21 = _closure1_slot4;
            var21 = var21.VIDEO_MODAL_MOBILE;
            var16['location'] = var21;
            var16 = var17.bind(var20)(var16);
            var17 = var16.ctaTimerMilliSeconds;
            var16 = var14;
            if(!var16) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var1 = _closure1_slot5;
            var1 = var1.END_CARD_WITH_CTA;
            var16 = var19 !== var1;
case 35:
            var1 = {};
            if(var15) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var15 = var18 > var17;
case 37:
            if(!var15) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var15 = !var16;
case 39:
            var1['isCtaVisible'] = var15;
            var1['isEndCardVisible'] = var14;
            var1['handleVideoEnd'] = var13;
            var1['handleVideoProgress'] = var12;
            var1['handleVideoPaused'] = var11;
            var1['handleVideoResumed'] = var10;
            var1['handleReplay'] = var9;
            var1['rewardRemainingSeconds'] = var8;
            var1['rewardTotalSeconds'] = var7;
            if(!(var6 != var5)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var4 = var5;
case 41:
            var1['normalizedProgress'] = var4;
            var1['maxVideoProgressSeconds'] = var3;
            var1['videoDuration'] = var2;
            return var1;
        }
    };
    var3['useBountiesModalTiming'] = var2;
    return var1;
})();