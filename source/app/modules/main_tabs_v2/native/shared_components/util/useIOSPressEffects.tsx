// app/modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = {'overshootClamping': true, 'damping': 35, 'stiffness': 450, 'mass': 0.5, 'restDisplacementThreshold': 0.001};
    var _closure1_slot4 = var4;
    var5 = {};
    var8 = 'function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}';
    var5['code'] = var8;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SPRING_CONFIG'] = var4;
    var2 = function useIOSPressEffects(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = arguments[1];
            var _closure2_slot0 = var2;
            var13 = undefined;
            if(!(var9 === var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var13;
            var _closure2_slot3 = var13;
            var _closure2_slot4 = var13;
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 1;
            var3 = var14[var8];
            var3 = var4.bind(var13)(var3);
            var3 = var3.bind(var13)();
            var5 = var3.width;
            _closure2_slot2 = var5;
            var12 = _closure1_slot0;
            var11 = 2;
            var3 = var14[var11];
            var6 = var12.bind(var13)(var3);
            var4 = var6.useSharedValue;
            var3 = var2 / var5;
            var3 = var8 - var3;
            var10 = var4.bind(var6)(var3);
            _closure2_slot3 = var10;
            var8 = _closure1_slot3;
            var4 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var5;
            var3[1] = var2;
            var3[2] = var10;
            var2 = function() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var4 = _closure2_slot0;
                var1 = _closure2_slot2;
                var4 = var4 / var1;
                var1 = 1;
                var1 = var1 - var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var8)(var2, var3);
            var2 = var14[var11];
            var4 = var12.bind(var13)(var2);
            var3 = var4.useSharedValue;
            var2 = 0;
            var5 = var3.bind(var4)(var2);
            _closure2_slot4 = var5;
            var4 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var5;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 1;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var3 = var4.bind(var8)(var2, var3);
            var6 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var5;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 0;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var2, var4);
            var2 = var14[var11];
            var6 = var12.bind(var13)(var2);
            var2 = var6.useAnimatedStyle;
            var1 = function S() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 4;
                    var4 = var1[var5];
                    var9 = undefined;
                    var7 = var2.bind(var9)(var4);
                    var6 = var7.withSpring;
                    var10 = 2;
                    var1 = var1[var10];
                    var12 = var2.bind(var9)(var1);
                    var11 = var12.interpolate;
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var8 = var1.bind(var2)();
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = [1];
                    var2[1] = var1;
                    var1 = [0, 1];
                    var2 = var11.bind(var12)(var8, var1, var2);
                    var1 = _closure1_slot4;
                    var6 = var6.bind(var7)(var2, var1);
                    var1 = _closure2_slot1;
                    var7 = {};
                    if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var2 = {};
                    var2['scale'] = var6;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var7['transform'] = var1;
                    var1 = var7;
                    _fun0004_ip = 9; continue _fun0004;
case 7:
                    var2 = {};
                    var7['scale'] = var6;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var2['transform'] = var6;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = var7[var5];
                    var6 = var8.bind(var9)(var5);
                    var5 = var6.withSpring;
                    var7 = var7[var10];
                    var10 = var8.bind(var9)(var7);
                    var9 = var10.interpolate;
                    var7 = _closure2_slot4;
                    var4 = var7.get;
                    var8 = var4.bind(var7)();
                    var7 = [0, 1];
                    var4 = [1, 0.5];
                    var4 = var9.bind(var10)(var8, var7, var4);
                    var3 = _closure1_slot4;
                    var3 = var5.bind(var6)(var4, var3);
                    var2['opacity'] = var3;
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var8 = {};
            var15 = 4;
            var15 = var14[var15];
            var15 = var12.bind(var13)(var15);
            var15 = var15.withSpring;
            var8['withSpring'] = var15;
            var11 = var14[var11];
            var11 = var12.bind(var13)(var11);
            var11 = var11.interpolate;
            var8['interpolate'] = var11;
            var8['sharedPressState'] = var5;
            var8['sharedWidthScale'] = var10;
            var10 = _closure1_slot4;
            var8['SPRING_CONFIG'] = var10;
            var8['withOpacity'] = var9;
            var1['__closure'] = var8;
            var8 = 1305898392151.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot5;
            var1['__initData'] = var7;
            var2 = var2.bind(var6)(var1);
            var1 = {};
            var1['sharedPressState'] = var5;
            var1['onPressOut'] = var4;
            var1['onPressIn'] = var3;
            var1['pressableStyles'] = var2;
            return var1;
        }
    };
    var3['useIOSPressEffects'] = var2;
    return var1;
})();