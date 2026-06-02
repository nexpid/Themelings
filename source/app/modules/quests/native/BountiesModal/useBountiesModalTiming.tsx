// app/modules/quests/native/BountiesModal/useBountiesModalTiming.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var5 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot1 = var4;
    var4 = {};
    var5 = 'END_CARD';
    var4['END_CARD'] = var5;
    var5 = 'LOOP';
    var4['LOOP'] = var5;
    var _closure1_slot2 = var4;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/BountiesModal/useBountiesModalTiming.tsx';
    var5 = var6.bind(var7)(var5);
    var3['BountyVideoEndMode'] = var4;
    var2 = function useBountiesModalTiming(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.endMode;
            var _closure2_slot0 = var15;
            var1 = var2.rewardDurationMs;
            var _closure2_slot1 = var1;
            var10 = var2.isCompleted;
            var13 = var2.onRewardEarned;
            var _closure2_slot2 = var13;
            var7 = var2.onVideoProgress;
            var _closure2_slot3 = var7;
            var14 = var2.onVideoEnd;
            var _closure2_slot4 = var14;
            var12 = _closure1_slot1;
            var4 = var12.useState;
            var2 = false;
            var2 = var4.bind(var12)(var2);
            var18 = _closure1_slot0;
            var17 = undefined;
            var8 = 2;
            var2 = var18.bind(var17)(var2, var8);
            var16 = 0;
            var9 = var2[var16];
            var11 = 1;
            var2 = var2[var11];
            var _closure2_slot5 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var16);
            var2 = var18.bind(var17)(var2, var8);
            var4 = var2[var16];
            var2 = var2[var11];
            var _closure2_slot6 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var16);
            var2 = var18.bind(var17)(var2, var8);
            var3 = var2[var16];
            var2 = var2[var11];
            var _closure2_slot7 = var2;
            var2 = var12.useState;
            var6 = null;
            var2 = var2.bind(var12)(var6);
            var8 = var18.bind(var17)(var2, var8);
            var2 = var8[var16];
            var8 = var8[var11];
            var _closure2_slot8 = var8;
            var8 = var12.useRef;
            var8 = var8.bind(var12)(var10);
            var _closure2_slot9 = var8;
            var8 = var12.useRef;
            var8 = var8.bind(var12)(var3);
            var _closure2_slot10 = var8;
            var8 = var12.useRef;
            var8 = var8.bind(var12)(var16);
            var _closure2_slot11 = var8;
            var11 = var12.useCallback;
            var8 = new Array(3);
            var8[0] = var7;
            var8[1] = var13;
            var8[2] = var1;
            var7 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.progress;
                    var8 = var1.currentTime;
                    var4 = var1.seekableDuration;
                    var1 = global;
                    var7 = var1.Math;
                    var5 = var7.max;
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var5 = var5.bind(var7)(var8, var3);
                    var1['current'] = var5;
                    var1 = _closure2_slot11;
                    var1['current'] = var4;
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var6);
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5, var4);
                    var3 = _closure2_slot9;
                    var3 = var3.current;
                    var3 = !var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = 1000;
                    var5 = var4 * var5;
                    var4 = _closure2_slot1;
                    var3 = var5 >= var4;
case 2:
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot9;
                    var3 = true;
                    var4['current'] = var3;
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 4:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var7, var8);
            var11 = var12.useCallback;
            var8 = new Array(3);
            var8[0] = var15;
            var8[1] = var14;
            var8[2] = var13;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2.LOOP;
                    if(!(var3 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
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
case 6:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot9;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var5, var8);
            var11 = 1000;
            var12 = var11 * var3;
            var13 = var6 != var2;
            var5 = null;
            if(!var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = global;
            var15 = var13.Math;
            var14 = var15.min;
            var11 = var1 / var11;
            var11 = var14.bind(var15)(var11, var2);
            var14 = var12 >= var1;
            var1 = 0;
            if(var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = 0;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var1 = 0;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var15 = var13.Math;
            var14 = var15.max;
            var13 = var11 - var3;
            var1 = var14.bind(var15)(var16, var13);
case 12:
            var6 = var1;
            var5 = var11;
case 10:
            var1 = {};
            if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = 3000;
            var10 = var12 > var11;
case 16:
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = !var9;
case 18:
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