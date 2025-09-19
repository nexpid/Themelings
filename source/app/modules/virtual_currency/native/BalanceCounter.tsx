// app/modules/virtual_currency/native/BalanceCounter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useState;
    var _closure1_slot4 = var7;
    var7 = var4.useEffect;
    var _closure1_slot5 = var7;
    var7 = var4.useRef;
    var _closure1_slot6 = var7;
    var4 = var4.useCallback;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var2 = function BalanceCounter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.value;
            var _closure2_slot0 = var3;
            var21 = var1.onValueChange;
            var _closure2_slot1 = var21;
            var20 = var1.onValueReached;
            var11 = var1.style;
            var7 = _closure1_slot6;
            var5 = undefined;
            var1 = null;
            var2 = var7.bind(var5)(var1);
            var _closure2_slot2 = var2;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 3;
            var8 = var16[var2];
            var9 = var17.bind(var5)(var8);
            var8 = var9.useSharedValue;
            var10 = 0;
            var18 = var8.bind(var9)(var10);
            var _closure2_slot3 = var18;
            var7 = var7.bind(var5)(var1);
            var _closure2_slot4 = var7;
            var22 = _closure1_slot4;
            var7 = var22.bind(var5)(var10);
            var19 = _closure1_slot3;
            var12 = 2;
            var7 = var19.bind(var5)(var7, var12);
            var9 = var7[var10];
            var8 = 1;
            var15 = var7[var8];
            var _closure2_slot5 = var15;
            var7 = var22.bind(var5)(var8);
            var7 = var19.bind(var5)(var7, var12);
            var14 = var7[var10];
            var13 = var7[var8];
            var _closure2_slot6 = var13;
            var7 = false;
            var7 = var22.bind(var5)(var7);
            var7 = var19.bind(var5)(var7, var12);
            var19 = var7[var10];
            var _closure2_slot7 = var19;
            var7 = var7[var8];
            var _closure2_slot8 = var7;
            var12 = _closure1_slot7;
            var8 = function(arg1, arg2, arg3) {
                var4 = arg1;
                var10 = _closure2_slot8;
                var1 = undefined;
                var2 = true;
                var2 = var10.bind(var1)(var2);
                var3 = var4.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 4;
                var5 = var13[var5];
                var9 = var12.bind(var1)(var5);
                var8 = var9.withSpring;
                var7 = {'duration': null, 'damping': 15, 'stiffness': 150, 'mass': 1};
                var5 = arg3;
                var7['duration'] = var5;
                var6 = function s() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot8;
                    var3 = var3.bind(var4)(var2);
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = {};
                var11 = 3;
                var11 = var13[var11];
                var11 = var12.bind(var1)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var5['setIsAnimating'] = var10;
                var6['__closure'] = var5;
                var5 = 16153226572520.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot9;
                var6['__initData'] = var2;
                var17 = arg2;
                var15 = 'respect-motion-settings';
                var18 = var9;
                var16 = var7;
                var14 = var6;
                var2 = var18[var8](var17, var16, var15, var14, var13);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = new Array(0);
            var7 = var12.bind(var5)(var8, var7);
            var _closure2_slot9 = var7;
            var8 = function clearAnimationTimeout() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 48; continue _fun0002 }
 18:
                    var2 = global;
                    var6 = var2.clearTimeout;
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var2['current'] = var3;
 48:
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var _closure2_slot10 = var8;
            var12 = _closure1_slot5;
            var8 = new Array(5);
            var8[0] = var3;
            var8[1] = var21;
            var8[2] = var20;
            var8[3] = var18;
            var8[4] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 !== var1)) { _fun0003_ip = 63; continue _fun0003 }
 15:
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    if(!(var4 !== var1)) { _fun0003_ip = 207; continue _fun0003 }
 31:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    if(!(var4 === var1)) { _fun0003_ip = 67; continue _fun0003 }
 48:
                    var5 = _closure2_slot5;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
 63:
                    var1 = undefined;
                    return var1;
 67:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var5 = var1.current;
                    var6 = var4 - var5;
                    var5 = _closure2_slot1;
                    var7 = undefined;
                    var5 = var5.bind(var7)(var6);
                    var1['current'] = var4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var4 = var9[var1];
                    var5 = var8.bind(var7)(var4);
                    var4 = var5.getDesiredAnimationConfigs;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
                    var1 = var4.bind(var5)(var6, var1);
                    var4 = var1.duration;
                    var _closure3_slot0 = var4;
                    var6 = var1.delay;
                    var1 = _closure2_slot10;
                    var4 = var1.bind(var7)();
                    var4 = _closure2_slot4;
                    var5 = global;
                    var5 = var5.setTimeout;
                    var3 = function() {
                        var6 = _closure2_slot9;
                        var5 = _closure2_slot3;
                        var4 = _closure2_slot0;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var6.bind(var1)(var5, var4, var3);
                        var3 = _closure2_slot4;
                        var2 = null;
                        var3['current'] = var2;
                        return var1;
                    };
                    var3 = var5.bind(var7)(var3, var6);
                    var4['current'] = var3;
                    return var1;
 207:
                    var4 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var1);
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var1);
                    var2 = _closure2_slot2;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var12.bind(var5)(var7, var8);
            var7 = var16[var2];
            var8 = var17.bind(var5)(var7);
            var7 = var8.useAnimatedStyle;
            var4 = function R() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0004_ip = 127; continue _fun0004 }
 10:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.round;
                    var5 = _closure2_slot3;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var4 = var3.bind(var4)(var2);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
                    var7 = var6[var2];
                    var3 = undefined;
                    var9 = var5.bind(var3)(var7);
                    var8 = var9.runOnJS;
                    var7 = _closure2_slot5;
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.bind(var3)(var4);
                    var2 = var6[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.runOnJS;
                    var1 = _closure2_slot6;
                    var2 = var2.bind(var5)(var1);
                    var1 = var4.toString;
                    var1 = var1.bind(var4)();
                    var1 = var1.length;
                    var1 = var2.bind(var3)(var1);
 127:
                    var1 = {};
                    return var1;
                }
            };
            var12 = {};
            var12['isAnimating'] = var19;
            var12['animatedValue'] = var18;
            var16 = var16[var2];
            var16 = var17.bind(var5)(var16);
            var16 = var16.runOnJS;
            var12['runOnJS'] = var16;
            var12['setDisplayValue'] = var15;
            var12['setMaxDigits'] = var13;
            var4['__closure'] = var12;
            var12 = 4408542396979.0;
            var4['__workletHash'] = var12;
            var12 = _closure1_slot10;
            var4['__initData'] = var12;
            var12 = var7.bind(var8)(var4);
            if(!(var1 !== var3)) { _fun0001_ip = 512; continue _fun0001 }
 380:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var7 = new Array(2);
            var7[0] = var12;
            var12 = {};
            var13 = 9;
            var13 = var13 * var14;
            var12['minWidth'] = var13;
            var7[1] = var12;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var8 = 'text-md/semibold';
            var6['variant'] = var8;
            var8 = new Array(1);
            var8[0] = var11;
            var6['style'] = var8;
            var8 = var9.toFixed;
            var8 = var8.bind(var9)(var10);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 512:
            return var1;
        }
    };
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceCounter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceCounter'] = var2;
    return var1;
})();