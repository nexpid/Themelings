// app/modules/quests/native/BountiesModal/useVisibilityTransition.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}";
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useVisibilityTransition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVisibilityTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.visible;
            var _closure2_slot0 = var2;
            var15 = var1.entranceTiming;
            var _closure2_slot1 = var15;
            var14 = var1.exitTiming;
            var _closure2_slot2 = var14;
            var12 = undefined;
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var12;
            var9 = _closure1_slot3;
            var3 = var9.useState;
            var1 = false;
            var1 = var3.bind(var9)(var1);
            var8 = _closure1_slot2;
            var13 = 2;
            var5 = var8.bind(var12)(var1, var13);
            var16 = 0;
            var3 = var5[var16];
            var1 = 1;
            var6 = var5[var1];
            var _closure2_slot3 = var6;
            var5 = var9.useState;
            var5 = var5.bind(var9)(var2);
            var5 = var8.bind(var12)(var5, var13);
            var8 = var5[var16];
            var5 = var5[var1];
            if(!(var8 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var5.bind(var12)(var2);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = true;
            var5 = var6.bind(var12)(var5);
case 2:
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var6 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var9 = var8.bind(var9)(var6, var5);
            _closure2_slot4 = var9;
            var16 = 0;
            if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var16 = var1;
case 5:
            _closure2_slot5 = var16;
            var1 = {};
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = var10[var13];
            var6 = var11.bind(var12)(var5);
            var5 = var6.useAnimatedStyle;
            var4 = function k() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var12 = undefined;
                    var7 = var4.bind(var12)(var3);
                    var6 = var7.withTiming;
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure2_slot2;
                    _fun0002_ip = 9; continue _fun0002;
case 7:
                    var4 = _closure2_slot1;
case 9:
                    var3 = function n() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot4;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var8 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var10 = 2;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.runOnJS;
                    var8['runOnJS'] = var10;
                    var9 = _closure2_slot4;
                    var8['animationCallbackJSThread'] = var9;
                    var3['__closure'] = var8;
                    var8 = 11904317879470.0;
                    var3['__workletHash'] = var8;
                    var2 = _closure1_slot5;
                    var3['__initData'] = var2;
                    var15 = 'respect-motion-settings';
                    var18 = var7;
                    var17 = var5;
                    var16 = var4;
                    var14 = var3;
                    var2 = var18[var6](var17, var16, var15, var14, var13);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var17 = 3;
            var17 = var10[var17];
            var17 = var11.bind(var12)(var17);
            var17 = var17.withTiming;
            var8['withTiming'] = var17;
            var8['visibility'] = var16;
            var8['visible'] = var2;
            var8['entranceTiming'] = var15;
            var8['exitTiming'] = var14;
            var10 = var10[var13];
            var10 = var11.bind(var12)(var10);
            var10 = var10.runOnJS;
            var8['runOnJS'] = var10;
            var8['animationCallbackJSThread'] = var9;
            var4['__closure'] = var8;
            var8 = 12648900540770.0;
            var4['__workletHash'] = var8;
            var7 = _closure1_slot4;
            var4['__initData'] = var7;
            var4 = var5.bind(var6)(var4);
            var1['opacityStyle'] = var4;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3;
case 10:
            var1['shouldRender'] = var2;
            return var1;
        }
    };
    var3['useVisibilityTransition'] = var2;
    return var1;
})();