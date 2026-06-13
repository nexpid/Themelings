// app/modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx
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
    var4 = {};
    var5 = 'function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);}';
    var4['code'] = var5;
    var _closure1_slot4 = var4;
    var4 = function() {
        var1 = function getRecapOrbCountFromPullProgress(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg2;
                var1 = 0;
                if(!(!(var5 <= var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = global;
                var4 = var3.Number;
                var2 = var4.isFinite;
                var2 = var2.bind(var4)(var5);
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var7 = var3.Math;
                var6 = var7.min;
                var8 = var3.Math;
                var4 = var8.max;
                var2 = arg1;
                var4 = var4.bind(var8)(var1, var2);
                var2 = 1;
                var2 = var6.bind(var7)(var2, var4);
                var4 = var3.Math;
                var3 = var4.round;
                var2 = var2 * var5;
                var2 = var3.bind(var4)(var2);
                return var2;
case 2:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 14295638108053.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot4;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot5 = var4;
    var5 = {};
    var8 = 'function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return 0;}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;return getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount);}';
    var5['code'] = var8;
    var _closure1_slot6 = var5;
    var5 = {};
    var8 = 'function useBountiesRecapOrbCountTsx3(count,previousCount){const{runOnJS,setDisplayCount}=this.__closure;if(count!==previousCount){runOnJS(setDisplayCount)(count);}}';
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getRecapOrbCountFromPullProgress'] = var4;
    var2 = function useBountiesRecapOrbCount(arg1) {
        var1 = arg1;
        var15 = var1.scrollY;
        var _closure2_slot0 = var15;
        var14 = var1.lastBountyScrollOffset;
        var _closure2_slot1 = var14;
        var16 = var1.recapRevealHeight;
        var _closure2_slot2 = var16;
        var13 = var1.targetOrbAmount;
        var _closure2_slot3 = var13;
        var17 = var1.enabled;
        var _closure2_slot4 = var17;
        var4 = _closure1_slot3;
        var3 = var4.useState;
        var1 = 0;
        var4 = var3.bind(var4)(var1);
        var3 = _closure1_slot2;
        var11 = undefined;
        var12 = 2;
        var4 = var3.bind(var11)(var4, var12);
        var1 = var4[var1];
        var3 = 1;
        var8 = var4[var3];
        var _closure2_slot5 = var8;
        var10 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = var9[var12];
        var5 = var10.bind(var11)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function b() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot4;
                if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = _closure2_slot2;
                var2 = 0;
                if(!(!(var3 <= var2))) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var3 = var4[var3];
                var4 = undefined;
                var8 = var5.bind(var4)(var3);
                var7 = var8.getRevealProgress;
                var5 = _closure2_slot0;
                var3 = var5.get;
                var6 = var3.bind(var5)();
                var5 = _closure2_slot1;
                var3 = _closure2_slot2;
                var5 = var7.bind(var8)(var6, var5, var3);
                var3 = 0.95;
                var3 = var5 / var3;
                var2 = _closure1_slot5;
                var1 = _closure2_slot3;
                var1 = var2.bind(var4)(var3, var1);
                return var1;
case 5:
                var1 = 0;
                return var1;
            }
        };
        var7 = {};
        var7['enabled'] = var17;
        var7['recapRevealHeight'] = var16;
        var16 = 3;
        var16 = var9[var16];
        var16 = var10.bind(var11)(var16);
        var16 = var16.getRevealProgress;
        var7['getRevealProgress'] = var16;
        var7['scrollY'] = var15;
        var7['lastBountyScrollOffset'] = var14;
        var14 = 0.95;
        var7['RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS'] = var14;
        var14 = _closure1_slot5;
        var7['getRecapOrbCountFromPullProgress'] = var14;
        var7['targetOrbAmount'] = var13;
        var3['__closure'] = var7;
        var7 = 4104379785818.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot6;
        var3['__initData'] = var7;
        var2 = function p(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                if(!(var3 !== var1)) { _fun0003_ip = 8; continue _fun0003 }
case 6:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var1 = var2[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var4 = var5.runOnJS;
                var1 = _closure2_slot5;
                var1 = var4.bind(var5)(var1);
                var1 = var1.bind(var2)(var3);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var7 = {};
        var9 = var9[var12];
        var9 = var10.bind(var11)(var9);
        var9 = var9.runOnJS;
        var7['runOnJS'] = var9;
        var7['setDisplayCount'] = var8;
        var2['__closure'] = var7;
        var7 = 9695149305796.0;
        var2['__workletHash'] = var7;
        var6 = _closure1_slot7;
        var2['__initData'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useBountiesRecapOrbCount'] = var2;
    return var1;
})();