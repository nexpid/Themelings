// app/modules/forums/native/posts/AnimatedCounter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getStartPosition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.current;
            var1 = var1.previous;
            if(!(!(var2 > var1))) { _fun0001_ip = 52; continue _fun0001 }
 18:
            if(!(!(var2 < var1))) { _fun0001_ip = 37; continue _fun0001 }
 22:
            var1 = _closure1_slot10;
            var1 = var1.NEUTRAL;
            _fun0001_ip = 50; continue _fun0001;
 37:
            var2 = _closure1_slot10;
            var1 = var2.ABOVE;
 50:
            _fun0001_ip = 65; continue _fun0001;
 52:
            var2 = _closure1_slot10;
            var1 = var2.BELOW;
 65:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function AnimatedCount(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.count;
            var8 = var1.formatter;
            var17 = var1.state;
            var _closure2_slot0 = var17;
            var20 = var1.cleanUp;
            var _closure2_slot1 = var20;
            var15 = var1.height;
            var _closure2_slot2 = var15;
            var22 = var1.springConfig;
            var _closure2_slot3 = var22;
            var11 = var1.textColor;
            var12 = var1.textVariant;
            var10 = var1.textStyle;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var6 = _closure1_slot4;
            var3 = var6.useContext;
            var1 = _closure1_slot12;
            var18 = var3.bind(var6)(var1);
            var _closure2_slot4 = var18;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var7 = var6.bind(var4)(var1);
            var1 = null;
            var6 = var1 != var18;
            var1 = '[AnimatedCount] Context should not be nullish.';
            var1 = var7.bind(var4)(var6, var1);
            var13 = _closure1_slot0;
            var1 = 6;
            var6 = var3[var1];
            var7 = var13.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var21 = 7;
            var3 = var3[var21];
            var3 = var13.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var3 = var3.MOUNTED;
            if(!(var17 !== var3)) { _fun0002_ip = 207; continue _fun0002 }
 196:
            var3 = _closure1_slot15;
            var3 = var3.bind(var4)(var18);
            _fun0002_ip = 217; continue _fun0002;
 207:
            var13 = _closure1_slot10;
            var3 = var13.NEUTRAL;
 217:
            var19 = var6.bind(var7)(var3);
            _closure2_slot5 = var19;
            var13 = _closure1_slot4;
            var7 = var13.useMemo;
            var6 = new Array(1);
            var6[0] = var15;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = arg1;
                        var3 = _closure2_slot2;
                        var1 = null;
                        var4 = var1 != var3;
                        var1 = 0;
                        if(!var4) { _fun0003_ip = 92; continue _fun0003 }
 21:
                        var4 = _closure2_slot2;
                        var2 = _closure1_slot10;
                        var2 = var2.ABOVE;
                        if(!(var2 !== var6)) { _fun0003_ip = 79; continue _fun0003 }
 42:
                        var2 = _closure1_slot10;
                        var7 = var2.BELOW;
                        var2 = var4;
                        if(!(var7 !== var6)) { _fun0003_ip = 89; continue _fun0003 }
 59:
                        var5 = _closure1_slot10;
                        var5 = var5.NEUTRAL;
                        var2 = undefined;
                        if(!(var5 === var6)) { _fun0003_ip = 89; continue _fun0003 }
 75:
                        var2 = 0;
                        _fun0003_ip = 89; continue _fun0003;
 79:
                        var3 = -1;
                        var2 = var3 * var4;
 89:
                        var1 = var2;
 92:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var7.bind(var13)(var3, var6);
            _closure2_slot6 = var23;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = var13[var1];
            var14 = var6.bind(var4)(var3);
            var7 = var14.useAnimatedStyle;
            var3 = function y() {
                var1 = {};
                var3 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 8;
                var4 = var14[var4];
                var12 = undefined;
                var8 = var13.bind(var12)(var4);
                var7 = var8.withSpring;
                var11 = 6;
                var4 = var14[var11];
                var15 = var13.bind(var12)(var4);
                var9 = var15.interpolate;
                var5 = _closure2_slot5;
                var4 = var5.get;
                var6 = var4.bind(var5)();
                var5 = _closure1_slot11;
                var4 = _closure2_slot6;
                var6 = var9.bind(var15)(var6, var5, var4);
                var18 = _closure2_slot3;
                var4 = function t(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0004_ip = 54; continue _fun0004 }
 6:
                        var3 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = var2.TransitionStates;
                        var2 = var2.YEETED;
                        var1 = var3 === var2;
 54:
                        if(!var1) { _fun0004_ip = 103; continue _fun0004 }
 57:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 103:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = {};
                var15 = _closure2_slot0;
                var9['state'] = var15;
                var15 = 7;
                var15 = var14[var15];
                var15 = var13.bind(var12)(var15);
                var15 = var15.TransitionStates;
                var9['TransitionStates'] = var15;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var9['runOnJS'] = var11;
                var10 = _closure2_slot1;
                var9['cleanUp'] = var10;
                var4['__closure'] = var9;
                var9 = 10933954976568.0;
                var4['__workletHash'] = var9;
                var2 = _closure1_slot14;
                var4['__initData'] = var2;
                var17 = 'respect-motion-settings';
                var20 = var8;
                var19 = var6;
                var16 = var4;
                var2 = var20[var7](var19, var18, var17, var16, var15);
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var16 = {};
            var24 = 8;
            var24 = var13[var24];
            var24 = var6.bind(var4)(var24);
            var24 = var24.withSpring;
            var16['withSpring'] = var24;
            var24 = var13[var1];
            var24 = var6.bind(var4)(var24);
            var24 = var24.interpolate;
            var16['interpolate'] = var24;
            var16['animationState'] = var19;
            var24 = _closure1_slot11;
            var16['ANIMATION_INPUT'] = var24;
            var16['animationOutput'] = var23;
            var16['springConfig'] = var22;
            var16['state'] = var17;
            var21 = var13[var21];
            var21 = var6.bind(var4)(var21);
            var21 = var21.TransitionStates;
            var16['TransitionStates'] = var21;
            var21 = var13[var1];
            var21 = var6.bind(var4)(var21);
            var21 = var21.runOnJS;
            var16['runOnJS'] = var21;
            var16['cleanUp'] = var20;
            var3['__closure'] = var16;
            var16 = 13513457118386.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot13;
            var3['__initData'] = var16;
            var14 = var7.bind(var14)(var3);
            var16 = _closure1_slot4;
            var7 = var16.useEffect;
            var3 = new Array(3);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var17;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var7 = _closure2_slot0;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var2 = var2.YEETED;
                    if(!(var7 !== var2)) { _fun0005_ip = 69; continue _fun0005 }
 57:
                    var2 = _closure1_slot10;
                    var2 = var2.NEUTRAL;
                    _fun0005_ip = 92; continue _fun0005;
 69:
                    var6 = _closure1_slot15;
                    var5 = _closure2_slot4;
                    var6 = var6.bind(var1)(var5);
                    var5 = -1;
                    var2 = var5 * var6;
 92:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var7.bind(var16)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = _closure1_slot5;
            var16 = var7.absoluteFill;
            var7 = new Array(3);
            var7[0] = var16;
            var7[1] = var14;
            var14 = {};
            var14['height'] = var15;
            var7[2] = var14;
            var1['style'] = var7;
            var7 = _closure1_slot7;
            var5 = 9;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var5['variant'] = var12;
            var5['color'] = var11;
            var5['style'] = var10;
            var8 = var8.bind(var4)(var9);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getItemKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function AnimatedCounterTransitionGroup(arg1) {
        var2 = arg1;
        var13 = var2.count;
        var _closure2_slot0 = var13;
        var12 = var2.formatter;
        var _closure2_slot1 = var12;
        var15 = var2.textColor;
        var _closure2_slot2 = var15;
        var16 = var2.textVariant;
        var _closure2_slot3 = var16;
        var14 = var2.textStyle;
        var _closure2_slot4 = var14;
        var6 = var2.springConfig;
        var _closure2_slot5 = var6;
        var2 = _closure1_slot9;
        var4 = undefined;
        var18 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var3 = var2.bind(var3)();
        var2 = _closure1_slot3;
        var10 = 2;
        var2 = var2.bind(var4)(var3, var10);
        var5 = 0;
        var7 = var2[var5];
        var _closure2_slot6 = var7;
        var3 = 1;
        var2 = var2[var3];
        var _closure2_slot7 = var2;
        var11 = _closure1_slot4;
        var8 = var11.useState;
        var2 = new Array(1);
        var2[0] = var13;
        var8 = var8.bind(var11)(var2);
        var2 = _closure1_slot3;
        var2 = var2.bind(var4)(var8, var10);
        var22 = var2[var5];
        var2 = var2[var3];
        var _closure2_slot8 = var2;
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var2 = var2.bind(var3)(var22);
        var _closure2_slot9 = var2;
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var3 = var2.bind(var3)(var13);
        var _closure2_slot10 = var3;
        var10 = _closure1_slot4;
        var8 = var10.useEffect;
        var5 = new Array(1);
        var5[0] = var13;
        var2 = function() {
            var3 = _closure2_slot10;
            var4 = _closure2_slot9;
            var5 = var4.current;
            var1 = 0;
            var1 = var5[var1];
            var3['current'] = var1;
            var1 = _closure2_slot0;
            var3 = new Array(1);
            var3[0] = var1;
            var4['current'] = var3;
            var3 = _closure2_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var8.bind(var10)(var2, var5);
        var2 = function useAnimationContext(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var _closure3_slot0 = var6;
            var _closure3_slot1 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var1 = {};
                var4 = _closure3_slot0;
                var3 = 0;
                var3 = var4[var3];
                var1['current'] = var3;
                var2 = _closure3_slot1;
                var2 = var2.current;
                var1['previous'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var8 = var2.bind(var4)(var22, var3);
        var10 = _closure1_slot4;
        var5 = var10.useCallback;
        var3 = function(arg1) {
            var3 = _closure2_slot7;
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var2 = var1.height;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = new Array(0);
        var11 = var5.bind(var10)(var3, var2);
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = new Array(6);
        var2[0] = var12;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var15;
        var2[4] = var14;
        var2[5] = var16;
        var1 = function(arg1, arg2, arg3, arg4) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = _closure1_slot7;
                var4 = _closure1_slot16;
                var3 = {};
                var6 = _closure2_slot1;
                var3['formatter'] = var6;
                var7 = _closure2_slot5;
                var6 = null;
                if(!(var6 == var7)) { _fun0006_ip = 65; continue _fun0006 }
 35:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.springStandard;
                _fun0006_ip = 69; continue _fun0006;
 65:
                var2 = _closure2_slot5;
 69:
                var3['springConfig'] = var2;
                var2 = arg2;
                var3['count'] = var2;
                var2 = arg3;
                var3['state'] = var2;
                var2 = arg4;
                var3['cleanUp'] = var2;
                var2 = _closure2_slot6;
                var3['height'] = var2;
                var2 = _closure2_slot2;
                var3['textColor'] = var2;
                var2 = _closure2_slot3;
                var3['textVariant'] = var2;
                var1 = _closure2_slot4;
                var3['textStyle'] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var21 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot8;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var18.container;
        var1['style'] = var5;
        var7 = _closure1_slot7;
        var5 = _closure1_slot12;
        var6 = var5.Provider;
        var5 = {};
        var5['value'] = var8;
        var20 = _closure1_slot7;
        var10 = _closure1_slot0;
        var17 = _closure1_slot2;
        var8 = 7;
        var8 = var17[var8];
        var8 = var10.bind(var4)(var8);
        var19 = var8.TransitionGroup;
        var8 = {};
        var8['items'] = var22;
        var8['renderItem'] = var21;
        var21 = _closure1_slot17;
        var8['getItemKey'] = var21;
        var8 = var20.bind(var4)(var19, var8);
        var5['children'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot7;
        var7 = _closure1_slot6;
        var6 = {};
        var18 = var18.hidden;
        var6['style'] = var18;
        var6['onLayout'] = var11;
        var11 = _closure1_slot7;
        var9 = 9;
        var9 = var17[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.Text;
        var9 = {};
        var9['variant'] = var16;
        var9['color'] = var15;
        var9['style'] = var14;
        var12 = var12.bind(var4)(var13);
        var9['children'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function BasicCounter(arg1) {
        var1 = arg1;
        var6 = var1.count;
        var7 = var1.textStyle;
        var8 = var1.textColor;
        var9 = var1.textVariant;
        var5 = var1.formatter;
        var4 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {};
        var1['variant'] = var9;
        var1['color'] = var8;
        var1['style'] = var7;
        var5 = var5.bind(var3)(var6);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var7 = var6[var9];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var8 = var11.createStyles;
    var4 = {};
    var12 = {'flex': 0, 'flexGrow': 0, 'flexShrink': 0, 'justifyContent': 'flex-start', 'alignItems': 'flex-start', 'overflow': 'hidden'};
    var4['container'] = var12;
    var12 = {};
    var12['opacity'] = var10;
    var4['hidden'] = var12;
    var4 = var8.bind(var11)(var4);
    var _closure1_slot9 = var4;
    var8 = {};
    var11 = -1;
    var8['ABOVE'] = var11;
    var4 = 'ABOVE';
    var8[var11] = var4;
    var8['NEUTRAL'] = var10;
    var4 = 'NEUTRAL';
    var8[var10] = var4;
    var8['BELOW'] = var9;
    var4 = 'BELOW';
    var8[var9] = var4;
    var _closure1_slot10 = var8;
    var9 = var8.ABOVE;
    var4 = new Array(3);
    var4[0] = var9;
    var9 = var8.NEUTRAL;
    var4[1] = var9;
    var8 = var8.BELOW;
    var4[2] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.createContext;
    var4 = var4.bind(var7)(var1);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}";
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var11 = var2.count;
            var9 = var2.springConfig;
            var6 = var2.textStyle;
            var1 = var2.animate;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0007_ip = 34; continue _fun0007 }
 32:
            var1 = true;
 34:
            var8 = var2.textColor;
            if(!(var8 === var5)) { _fun0007_ip = 50; continue _fun0007 }
 44:
            var8 = 'text-normal';
 50:
            var7 = var2.textVariant;
            if(!(var7 === var5)) { _fun0007_ip = 66; continue _fun0007 }
 60:
            var7 = 'text-sm/normal';
 66:
            var10 = var2.formatter;
            if(!(var10 === var5)) { _fun0007_ip = 105; continue _fun0007 }
 76:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var10 = var2.defaultFormatter;
 105:
            var4 = _closure1_slot7;
            if(var1) { _fun0007_ip = 153; continue _fun0007 }
 115:
            var3 = _closure1_slot19;
            var1 = {};
            var1['count'] = var11;
            var1['formatter'] = var10;
            var1['textColor'] = var8;
            var1['textVariant'] = var7;
            var1['textStyle'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0007_ip = 194; continue _fun0007;
 153:
            var3 = _closure1_slot18;
            var2 = {};
            var2['count'] = var11;
            var2['formatter'] = var10;
            var2['springConfig'] = var9;
            var2['textColor'] = var8;
            var2['textVariant'] = var7;
            var2['textStyle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 194:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/AnimatedCounter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();