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
    var8 = 'function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}';
    var5['code'] = var8;
    var _closure1_slot6 = var5;
    var5 = {};
    var8 = 'function useBountiesRecapOrbCountTsx3({count:count,revealed:revealed}){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count);}';
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
        var16 = var1.scrollY;
        var _closure2_slot0 = var16;
        var15 = var1.lastBountyScrollOffset;
        var _closure2_slot1 = var15;
        var17 = var1.recapRevealHeight;
        var _closure2_slot2 = var17;
        var14 = var1.targetOrbAmount;
        var _closure2_slot3 = var14;
        var18 = var1.enabled;
        var _closure2_slot4 = var18;
        var7 = _closure1_slot3;
        var3 = var7.useState;
        var1 = 0;
        var4 = var3.bind(var7)(var1);
        var3 = _closure1_slot2;
        var12 = undefined;
        var13 = 2;
        var4 = var3.bind(var12)(var4, var13);
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot5 = var3;
        var5 = var7.useCallback;
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure2_slot5;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure3_slot0;
                    if(!(var3 > var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var1 = _closure3_slot0;
case 5:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var8 = var5.bind(var7)(var4, var3);
        var _closure2_slot6 = var8;
        var5 = var7.useCallback;
        var4 = function() {
            var3 = _closure2_slot5;
            var1 = undefined;
            var2 = 0;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var9 = var5.bind(var7)(var4, var3);
        var _closure2_slot7 = var9;
        var11 = _closure1_slot0;
        var10 = _closure1_slot1;
        var3 = var10[var13];
        var5 = var11.bind(var12)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function b() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot4;
                if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = _closure2_slot2;
                var1 = 0;
                if(!(!(var3 <= var1))) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var5 = undefined;
                var8 = var4.bind(var5)(var1);
                var7 = var8.getRevealProgress;
                var4 = _closure2_slot0;
                var1 = var4.get;
                var6 = var1.bind(var4)();
                var4 = _closure2_slot1;
                var1 = _closure2_slot2;
                var4 = var7.bind(var8)(var6, var4, var1);
                var1 = 0.95;
                var4 = var4 / var1;
                var1 = 0.1;
                if(!(!(var4 <= var1))) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = {};
                var3 = _closure1_slot5;
                var2 = _closure2_slot3;
                var2 = var3.bind(var5)(var4, var2);
                var1['count'] = var2;
                var2 = true;
                var1['revealed'] = var2;
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var1 = {'count': 0, 'revealed': false};
case 12:
                return var1;
case 7:
                var1 = {'count': 0, 'revealed': false};
                return var1;
            }
        };
        var7 = {};
        var7['enabled'] = var18;
        var7['recapRevealHeight'] = var17;
        var17 = 3;
        var17 = var10[var17];
        var17 = var11.bind(var12)(var17);
        var17 = var17.getRevealProgress;
        var7['getRevealProgress'] = var17;
        var7['scrollY'] = var16;
        var7['lastBountyScrollOffset'] = var15;
        var15 = 0.95;
        var7['RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS'] = var15;
        var15 = _closure1_slot5;
        var7['getRecapOrbCountFromPullProgress'] = var15;
        var7['targetOrbAmount'] = var14;
        var3['__closure'] = var7;
        var7 = 2855285055570.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot6;
        var3['__initData'] = var7;
        var2 = function p(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = var1.count;
                var6 = var1.revealed;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.runOnJS;
                if(var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var6 = _closure2_slot7;
                var6 = var4.bind(var5)(var6);
                var6 = var6.bind(var1)();
                _fun0004_ip = 15; continue _fun0004;
case 13:
                var2 = _closure2_slot6;
                var2 = var4.bind(var5)(var2);
                var2 = var2.bind(var1)(var3);
case 15:
                return var1;
            }
        };
        var7 = {};
        var10 = var10[var13];
        var10 = var11.bind(var12)(var10);
        var10 = var10.runOnJS;
        var7['runOnJS'] = var10;
        var7['resetDisplayCount'] = var9;
        var7['setDisplayCountMonotonic'] = var8;
        var2['__closure'] = var7;
        var7 = 12006414940221.0;
        var2['__workletHash'] = var7;
        var6 = _closure1_slot7;
        var2['__initData'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useBountiesRecapOrbCount'] = var2;
    return var1;
})();