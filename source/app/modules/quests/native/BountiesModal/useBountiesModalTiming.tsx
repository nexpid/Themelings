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
    var5 = 5;
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
            var22 = var1.endMode;
            var _closure2_slot0 = var22;
            var8 = var1.rewardDurationMs;
            var _closure2_slot1 = var8;
            var17 = var1.isCompleted;
            var11 = var1.onRewardEarned;
            var _closure2_slot2 = var11;
            var12 = var1.onVideoProgress;
            var _closure2_slot3 = var12;
            var25 = var1.onVideoEnd;
            var _closure2_slot4 = var25;
            var23 = var1.onVideoLooped;
            var _closure2_slot5 = var23;
            var10 = var1.onVideoPaused;
            var _closure2_slot6 = var10;
            var21 = var1.onVideoResumed;
            var _closure2_slot7 = var21;
            var9 = var1.playerRef;
            var _closure2_slot8 = var9;
            var19 = var1.initialProgressSec;
            var24 = undefined;
            if(!(var19 === var24)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = 0;
case 2:
            var _closure2_slot9 = var19;
            var20 = var1.initialMaxVideoProgressSec;
            if(!(var20 === var24)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var20 = 0;
case 4:
            var27 = var1.initialVideoDurationSec;
            if(!(var27 === var24)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var27 = null;
case 6:
            var _closure2_slot10 = var27;
            var14 = var1.isScrollIndicatorOverlayEnabled;
            if(!(var14 === var24)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = false;
case 8:
            var _closure2_slot11 = var24;
            var _closure2_slot12 = var24;
            var _closure2_slot13 = var24;
            var _closure2_slot14 = var24;
            var _closure2_slot15 = var24;
            var _closure2_slot16 = var24;
            var _closure2_slot17 = var24;
            var _closure2_slot18 = var24;
            var _closure2_slot19 = var24;
            var _closure2_slot20 = var24;
            var _closure2_slot21 = var24;
            var3 = _closure1_slot3;
            var2 = var3.useState;
            var6 = null;
            var1 = var6 != var27;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = 1;
            var4 = var27 - var4;
            var1 = var19 >= var4;
case 10:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot5;
            var4 = var4.LOOP;
            var1 = var22 !== var4;
case 12:
            var1 = var2.bind(var3)(var1);
            var29 = _closure1_slot2;
            var13 = 2;
            var1 = var29.bind(var24)(var1, var13);
            var16 = 0;
            var15 = var1[var16];
            var28 = 1;
            var1 = var1[var28];
            _closure2_slot11 = var1;
            var26 = _closure1_slot3;
            var2 = var26.useState;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = 0;
                    if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot10;
                    var1 = var3 / var2;
case 14:
                    return var1;
                }
            };
            var1 = var2.bind(var26)(var1);
            var1 = var29.bind(var24)(var1, var13);
            var4 = var1[var16];
            var1 = var1[var28];
            _closure2_slot12 = var1;
            var1 = var26.useState;
            var1 = var1.bind(var26)(var6);
            var1 = var29.bind(var24)(var1, var13);
            var5 = var1[var16];
            var1 = var1[var28];
            _closure2_slot13 = var1;
            var1 = var26.useState;
            var1 = var1.bind(var26)(var20);
            var1 = var29.bind(var24)(var1, var13);
            var3 = var1[var16];
            var1 = var1[var28];
            _closure2_slot14 = var1;
            var1 = var26.useState;
            var1 = var1.bind(var26)(var27);
            var1 = var29.bind(var24)(var1, var13);
            var2 = var1[var16];
            var1 = var1[var28];
            _closure2_slot15 = var1;
            var1 = var26.useState;
            var1 = var1.bind(var26)(var19);
            var13 = var29.bind(var24)(var1, var13);
            var1 = var13[var16];
            var13 = var13[var28];
            _closure2_slot16 = var13;
            var13 = var26.useRef;
            var13 = var13.bind(var26)(var17);
            _closure2_slot17 = var13;
            var13 = var26.useRef;
            var13 = var13.bind(var26)(var20);
            _closure2_slot18 = var13;
            var20 = var26.useRef;
            var28 = var6 != var27;
            var13 = 0;
            if(!var28) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var13 = var27;
case 16:
            var13 = var20.bind(var26)(var13);
            _closure2_slot19 = var13;
            var20 = _closure1_slot3;
            var13 = var20.useRef;
            var13 = var13.bind(var20)(var16);
            _closure2_slot20 = var13;
            var13 = var20.useRef;
            var13 = var13.bind(var20)(var19);
            _closure2_slot21 = var13;
            var19 = var20.useCallback;
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
                    var3 = _closure2_slot18;
                    var3 = var3.current;
                    var5 = var5.bind(var8)(var6, var3);
                    var3 = _closure2_slot18;
                    var3['current'] = var5;
                    var3 = _closure2_slot19;
                    var3['current'] = var4;
                    var3 = _closure2_slot21;
                    var3['current'] = var6;
                    var3 = _closure2_slot12;
                    var3 = var3.bind(var1)(var7);
                    var3 = _closure2_slot14;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot15;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot16;
                    var3 = var3.bind(var1)(var6);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5, var4, var6);
                    var3 = _closure2_slot17;
                    var3 = var3.current;
                    var3 = !var3;
                    if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 9:
                    var4 = 1000;
                    var5 = var4 * var5;
                    var4 = _closure2_slot1;
                    var3 = var5 >= var4;
case 18:
                    if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure2_slot17;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 19:
                    return var1;
                }
            };
            var12 = var19.bind(var20)(var12, var13);
            var19 = var20.useCallback;
            var13 = new Array(4);
            var13[0] = var22;
            var13[1] = var25;
            var13[2] = var23;
            var13[3] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = _closure2_slot4;
                    var1 = _closure2_slot18;
                    var5 = var1.current;
                    var1 = _closure2_slot19;
                    var4 = var1.current;
                    var1 = _closure2_slot21;
                    var3 = var1.current;
                    var1 = undefined;
                    var3 = var6.bind(var1)(var5, var4, var3);
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot5;
                    var3 = var3.LOOP;
                    if(!(var4 !== var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = _closure2_slot11;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    _fun0004_ip = 23; continue _fun0004;
case 21:
                    var4 = _closure2_slot20;
                    var5 = var4.current;
                    var3 = 1;
                    var3 = var5 + var3;
                    var4['current'] = var3;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot20;
                    var3 = var3.current;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot21;
                    var4 = 0;
                    var3['current'] = var4;
                    var3 = _closure2_slot16;
                    var3 = var3.bind(var1)(var4);
case 23:
                    var3 = _closure2_slot17;
                    var3 = var3.current;
                    if(var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var4 = _closure2_slot17;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 24:
                    return var1;
                }
            };
            var13 = var19.bind(var20)(var11, var13);
            var19 = var20.useCallback;
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
                    if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var5 = _closure2_slot8;
                    var5 = var5.current;
                    var3 = var6 == var5;
                    var4 = var5;
case 26:
                    if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = var4.seekToStart;
                    var3 = var3.bind(var4)();
case 28:
                    var4 = _closure2_slot13;
                    var3 = 0;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot11;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var19.bind(var20)(var9, var11);
            var19 = var20.useCallback;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function(arg1) {
                var4 = _closure2_slot6;
                var1 = _closure2_slot21;
                var3 = var1.current;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var11 = var19.bind(var20)(var10, var11);
            var19 = var20.useCallback;
            var10 = new Array(1);
            var10[0] = var21;
            var7 = function(arg1) {
                var4 = _closure2_slot7;
                var1 = _closure2_slot21;
                var3 = var1.current;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var10 = var19.bind(var20)(var7, var10);
            var7 = 1000;
            var21 = var7 * var3;
            var7 = var8 / var7;
            var20 = global;
            var25 = var20.Math;
            var23 = var25.max;
            var19 = var7 - var3;
            var19 = var23.bind(var25)(var16, var19);
            var23 = var21 >= var8;
            var8 = 0;
            if(var23) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var8 = 0;
            if(var15) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var8 = 0;
            if(var17) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            var8 = var19;
            if(!(var6 != var2)) { _fun0001_ip = 30; continue _fun0001 }
case 34:
            var8 = var19;
            if(!(var2 > var16)) { _fun0001_ip = 30; continue _fun0001 }
case 35:
            var23 = var20.Math;
            var19 = var23.min;
            var19 = var19.bind(var23)(var7, var2);
            var23 = var20.Math;
            var20 = var23.max;
            var19 = var19 - var3;
            var8 = var20.bind(var23)(var16, var19);
case 30:
            var23 = _closure1_slot0;
            var26 = _closure1_slot1;
            var19 = 3;
            var19 = var26[var19];
            var19 = var23.bind(var24)(var19);
            var27 = var19.BountiesStage1Experiment;
            var20 = var27.useConfig;
            var19 = {};
            var25 = _closure1_slot4;
            var28 = var25.VIDEO_MODAL_MOBILE;
            var19['location'] = var28;
            var19 = var20.bind(var27)(var19);
            var20 = var19.ctaTimerMilliSeconds;
            var19 = 4;
            var19 = var26[var19];
            var19 = var23.bind(var24)(var19);
            var24 = var19.BountiesVerticalScrollExperiment;
            var23 = var24.useConfig;
            var19 = {};
            var25 = var25.VIDEO_MODAL_MOBILE;
            var19['location'] = var25;
            var19 = var23.bind(var24)(var19);
            var23 = var19.enabled;
            var19 = var19.ctaTimerMilliSeconds;
            if(!var23) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var20 = var19;
case 36:
            var19 = var15;
            if(!var15) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var18 = _closure1_slot5;
            var18 = var18.END_CARD_WITH_CTA;
            var19 = var22 !== var18;
case 38:
            var18 = var1 - var16;
            var1 = {};
            if(var17) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var17 = var21 > var20;
case 40:
            if(!var17) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var17 = !var19;
case 42:
            var1['isCtaVisible'] = var17;
            var1['isEndCardVisible'] = var15;
            if(!var14) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            if(var15) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var16 = var18 >= var16;
            if(!var16) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var17 = 10;
            var18 = var18 % var17;
            var17 = 5;
            var16 = var18 < var17;
case 48:
            var15 = var16;
case 46:
            var14 = var15;
case 44:
            var1['isScrollIndicatorVisible'] = var14;
            var1['handleVideoEnd'] = var13;
            var1['handleVideoProgress'] = var12;
            var1['handleVideoPaused'] = var11;
            var1['handleVideoResumed'] = var10;
            var1['handleReplay'] = var9;
            var1['rewardRemainingSeconds'] = var8;
            var1['rewardTotalSeconds'] = var7;
            if(!(var6 != var5)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var4 = var5;
case 50:
            var1['normalizedProgress'] = var4;
            var1['maxVideoProgressSeconds'] = var3;
            var1['videoDuration'] = var2;
            return var1;
        }
    };
    var3['useBountiesModalTiming'] = var2;
    return var1;
})();