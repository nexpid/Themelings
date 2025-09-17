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
    var4 = var4.useRef;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function BalanceCounterTsx1(){}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function BalanceCounterTsx2(){const{animatedValue,runOnJS,setDisplayValue}=this.__closure;const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);return{};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var2 = function BalanceCounter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.value;
            var _closure2_slot0 = var3;
            var18 = var1.onValueChange;
            var _closure2_slot1 = var18;
            var7 = var1.onValueReached;
            var11 = var1.style;
            var1 = _closure1_slot4;
            var5 = undefined;
            var10 = 0;
            var2 = var1.bind(var5)(var10);
            var12 = _closure1_slot3;
            var8 = 2;
            var13 = var12.bind(var5)(var2, var8);
            var9 = var13[var10];
            var2 = 1;
            var13 = var13[var2];
            var _closure2_slot2 = var13;
            var1 = var1.bind(var5)(var2);
            var1 = var12.bind(var5)(var1, var8);
            var14 = var1[var10];
            var1 = var1[var2];
            var _closure2_slot3 = var1;
            var8 = _closure1_slot6;
            var1 = var8.bind(var5)(var3);
            var _closure2_slot4 = var1;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 3;
            var1 = var15[var2];
            var12 = var16.bind(var5)(var1);
            var1 = var12.useSharedValue;
            var17 = var1.bind(var12)(var10);
            var _closure2_slot5 = var17;
            var1 = null;
            var8 = var8.bind(var5)(var1);
            var _closure2_slot6 = var8;
            var8 = function clearAnimationTimeout() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 48; continue _fun0002 }
 18:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var1 = _closure2_slot6;
                    var4 = var1.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1['current'] = var2;
 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot7 = var8;
            var12 = _closure1_slot5;
            var8 = new Array(4);
            var8[0] = var3;
            var8[1] = var18;
            var8[2] = var7;
            var8[3] = var17;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 !== var1)) { _fun0003_ip = 48; continue _fun0003 }
 15:
                    var1 = _closure2_slot4;
                    var1 = var1.current;
                    if(!(var4 !== var1)) { _fun0003_ip = 252; continue _fun0003 }
 31:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot4;
                    var1 = var1.current;
                    if(!(var4 === var1)) { _fun0003_ip = 52; continue _fun0003 }
 48:
                    var1 = undefined;
                    return var1;
 52:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot4;
                    var5 = var1.current;
                    var8 = var4 - var5;
                    var5 = _closure2_slot1;
                    var7 = undefined;
                    var5 = var5.bind(var7)(var8);
                    var1 = var1.current;
                    var5 = var1 | 0;
                    var _closure3_slot0 = var4;
                    var1 = var5.toString;
                    var1 = var1.bind(var5)();
                    var10 = var1.length;
                    var1 = var4.toString;
                    var1 = var1.bind(var4)();
                    var9 = var1.length;
                    var4 = _closure2_slot3;
                    var5 = global;
                    var6 = var5.Math;
                    var1 = var6.max;
                    var1 = var1.bind(var6)(var10, var9);
                    var1 = var4.bind(var7)(var1);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 5;
                    var4 = var10[var1];
                    var6 = var9.bind(var7)(var4);
                    var4 = var6.getDesiredAnimationConfigs;
                    var1 = var10[var1];
                    var1 = var9.bind(var7)(var1);
                    var1 = var1.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
                    var1 = var4.bind(var6)(var8, var1);
                    var4 = var1.duration;
                    var _closure3_slot1 = var4;
                    var6 = var1.delay;
                    var1 = _closure2_slot7;
                    var4 = var1.bind(var7)();
                    var4 = _closure2_slot6;
                    var5 = var5.setTimeout;
                    var3 = function() {
                        var6 = _closure2_slot5;
                        var5 = _closure3_slot0;
                        var4 = _closure3_slot1;
                        var3 = function(arg1, arg2, arg3) {
                            var4 = arg1;
                            var3 = var4.set;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 4;
                            var5 = var5[var1];
                            var1 = undefined;
                            var9 = var6.bind(var1)(var5);
                            var8 = var9.withSpring;
                            var7 = {'duration': null, 'damping': 15, 'stiffness': 150, 'mass': 1};
                            var5 = arg3;
                            var7['duration'] = var5;
                            var6 = function l() {
                                var1 = undefined;
                                return var1;
                            };
                            var5 = {};
                            var6['__closure'] = var5;
                            var5 = 14623063431550.0;
                            var6['__workletHash'] = var5;
                            var2 = _closure1_slot8;
                            var6['__initData'] = var2;
                            var13 = arg2;
                            var11 = 'respect-motion-settings';
                            var14 = var9;
                            var12 = var7;
                            var10 = var6;
                            var2 = var14[var8](var13, var12, var11, var10, var9);
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1 = undefined;
                        var3 = var3.bind(var1)(var6, var5, var4);
                        var3 = _closure2_slot6;
                        var2 = null;
                        var3['current'] = var2;
                        return var1;
                    };
                    var3 = var5.bind(var7)(var3, var6);
                    var4['current'] = var3;
                    return var1;
 252:
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var1);
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var1);
                    var2 = _closure2_slot4;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var12.bind(var5)(var7, var8);
            var7 = var15[var2];
            var8 = var16.bind(var5)(var7);
            var7 = var8.useAnimatedStyle;
            var4 = function B() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.round;
                var5 = _closure2_slot5;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var3 = var3.bind(var4)(var2);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.runOnJS;
                var1 = _closure2_slot2;
                var1 = var4.bind(var5)(var1);
                var1 = var1.bind(var2)(var3);
                var1 = {};
                return var1;
            };
            var12 = {};
            var12['animatedValue'] = var17;
            var15 = var15[var2];
            var15 = var16.bind(var5)(var15);
            var15 = var15.runOnJS;
            var12['runOnJS'] = var15;
            var12['setDisplayValue'] = var13;
            var4['__closure'] = var12;
            var12 = 11232302221290.0;
            var4['__workletHash'] = var12;
            var12 = _closure1_slot9;
            var4['__initData'] = var12;
            var12 = var7.bind(var8)(var4);
            if(!(var1 !== var3)) { _fun0001_ip = 441; continue _fun0001 }
 309:
            var4 = _closure1_slot7;
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
 441:
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