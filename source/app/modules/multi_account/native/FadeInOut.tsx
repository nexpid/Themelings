// app/modules/multi_account/native/FadeInOut.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {};
    var8 = 'function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var4['code'] = var8;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = 'function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}';
    var4['code'] = var8;
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var5 = var1.children;
        var2 = var1.duration;
        var _closure2_slot0 = var2;
        var8 = var1.style;
        var9 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var7 = var6[var1];
        var4 = undefined;
        var11 = var9.bind(var4)(var7);
        var10 = var11.useSharedValue;
        var7 = 0;
        var12 = var10.bind(var11)(var7);
        var _closure2_slot1 = var12;
        var7 = var6[var1];
        var10 = var9.bind(var4)(var7);
        var9 = var10.useAnimatedStyle;
        var7 = function h() {
            var1 = {};
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['opacity'] = var2;
            return var1;
        };
        var11 = {};
        var11['opacity'] = var12;
        var7['__closure'] = var11;
        var11 = 8749472415282.0;
        var7['__workletHash'] = var11;
        var11 = _closure1_slot5;
        var7['__initData'] = var11;
        var7 = var9.bind(var10)(var7);
        var11 = _closure1_slot3;
        var10 = var11.useRef;
        var9 = null;
        var9 = var10.bind(var11)(var9);
        var _closure2_slot2 = var9;
        var12 = var11.useCallback;
        var10 = new Array(1);
        var10[0] = var9;
        var9 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot2;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 31; continue _fun0001 }
 18:
                var2 = _closure2_slot2;
                var1 = var2.current;
                var1 = var1.bind(var2)();
 31:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var12.bind(var11)(var9, var10);
        var _closure2_slot3 = var9;
        var10 = var11.useImperativeHandle;
        var9 = arg2;
        var3 = function() {
            var1 = {};
            var3 = function componentDidAppear() {
                var4 = _closure2_slot1;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withTiming;
                var5 = {};
                var2 = _closure2_slot0;
                var5['duration'] = var2;
                var2 = 1;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['componentDidAppear'] = var3;
            var3 = function componentDidEnter() {
                var4 = _closure2_slot1;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withTiming;
                var5 = {};
                var2 = _closure2_slot0;
                var5['duration'] = var2;
                var2 = 1;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['componentDidEnter'] = var3;
            var2 = function componentWillLeave(arg1) {
                var2 = _closure2_slot2;
                var1 = arg1;
                var2['current'] = var1;
                var4 = _closure2_slot1;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 3;
                var5 = var13[var1];
                var1 = undefined;
                var9 = var12.bind(var1)(var5);
                var8 = var9.withTiming;
                var7 = {};
                var5 = _closure2_slot0;
                var7['duration'] = var5;
                var6 = function t(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0002_ip = 52; continue _fun0002 }
 6:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot3;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var11 = 2;
                var11 = var13[var11];
                var11 = var12.bind(var1)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot3;
                var5['handleTransitionFinished'] = var10;
                var6['__closure'] = var5;
                var5 = 7644958904451.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot6;
                var6['__initData'] = var2;
                var17 = 0;
                var15 = 'respect-motion-settings';
                var18 = var9;
                var16 = var7;
                var14 = var6;
                var2 = var18[var8](var17, var16, var15, var14, var13);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['componentWillLeave'] = var2;
            return var1;
        };
        var3 = var10.bind(var11)(var9, var3);
        var3 = _closure1_slot4;
        var2 = _closure1_slot1;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/native/FadeInOut.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();