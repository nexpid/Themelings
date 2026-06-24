// app/modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG;
    var _closure1_slot4 = var7;
    var7 = var4.CHAT_INPUT_FLOATING_COLLAPSED_SCALE;
    var _closure1_slot5 = var7;
    var7 = var4.CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG;
    var _closure1_slot6 = var7;
    var4 = var4.CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function useChatInputFloatingBounceTsx2(finished){const{runOnJS,handleExitFinished}=this.__closure;if(finished===true){runOnJS(handleExitFinished)();}}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChatInputFloatingBounce(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.visible;
            var _closure2_slot0 = var12;
            var11 = var2.initiallyVisible;
            var7 = undefined;
            if(!(var11 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var12;
case 2:
            var1 = var2.enterDelayMs;
            if(!(var1 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 0;
case 4:
            var _closure2_slot1 = var1;
            var4 = var2.onExitComplete;
            var _closure2_slot2 = var4;
            var5 = var2.interactiveDuringEnter;
            if(!(var5 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = false;
case 6:
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 3;
            var2 = var2[var10];
            var9 = var8.bind(var7)(var2);
            var8 = var9.useSharedValue;
            var14 = 0;
            var2 = 0;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = 1;
case 8:
            var9 = var8.bind(var9)(var2);
            _closure2_slot3 = var9;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var10];
            var13 = var8.bind(var7)(var2);
            var8 = var13.useSharedValue;
            var15 = 1;
            var2 = var15;
            if(var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot5;
case 10:
            var8 = var8.bind(var13)(var2);
            _closure2_slot4 = var8;
            var18 = _closure1_slot3;
            var2 = var18.useState;
            var2 = var2.bind(var18)(var11);
            var17 = _closure1_slot2;
            var16 = 2;
            var2 = var17.bind(var7)(var2, var16);
            var11 = var2[var14];
            var13 = var2[var15];
            _closure2_slot5 = var13;
            var2 = var18.useState;
            var2 = var2.bind(var18)(var12);
            var2 = var17.bind(var7)(var2, var16);
            var14 = var2[var14];
            var2 = var2[var15];
            if(!(var12 !== var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var2.bind(var7)(var12);
            if(var12) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var2 = false;
            var2 = var13.bind(var7)(var2);
case 12:
            var2 = var12;
            if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var12;
            if(!var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var11;
case 17:
            var2 = var5;
case 15:
            var11 = _closure1_slot3;
            var5 = var11.useRef;
            var5 = var5.bind(var11)(var4);
            _closure2_slot6 = var5;
            var13 = var11.useEffect;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot2;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var13.bind(var11)(var4, var5);
            var5 = var11.useEffect;
            var4 = new Array(4);
            var4[0] = var12;
            var4[1] = var1;
            var4[2] = var9;
            var4[3] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var9 = function handleExitFinished() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                            var3 = _closure2_slot6;
                            var2 = var3.current;
                            var1 = var2.bind(var3)();
case 19:
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var9;
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var12 = _closure2_slot3;
                    var6 = var12.set;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 4;
                    var3 = var11[var2];
                    var7 = undefined;
                    var15 = var8.bind(var7)(var3);
                    var14 = var15.withTiming;
                    var10 = _closure1_slot7;
                    var13 = function f(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = true;
                            var1 = arg1;
                            if(!(var2 === var1)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure3_slot0;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 23:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = {};
                    var16 = 3;
                    var16 = var11[var16];
                    var16 = var8.bind(var7)(var16);
                    var16 = var16.runOnJS;
                    var3['runOnJS'] = var16;
                    var3['handleExitFinished'] = var9;
                    var13['__closure'] = var3;
                    var3 = 6186469155404.0;
                    var13['__workletHash'] = var3;
                    var3 = _closure1_slot9;
                    var13['__initData'] = var3;
                    var20 = 0;
                    var9 = 'respect-motion-settings';
                    var21 = var15;
                    var19 = var10;
                    var18 = var9;
                    var17 = var13;
                    var3 = var21[var14](var20, var19, var18, var17, var16);
                    var3 = var6.bind(var12)(var3);
                    var6 = _closure2_slot4;
                    var3 = var6.set;
                    var2 = var11[var2];
                    var8 = var8.bind(var7)(var2);
                    var7 = var8.withTiming;
                    var2 = _closure1_slot5;
                    var2 = var7.bind(var8)(var2, var10, var9);
                    var2 = var3.bind(var6)(var2);
                    _fun0002_ip = 25; continue _fun0002;
case 21:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 4;
                    var2 = var7[var2];
                    var8 = undefined;
                    var10 = var11.bind(var8)(var2);
                    var3 = var10.withTiming;
                    var19 = _closure1_slot6;
                    var1 = function I(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = true;
                            var1 = arg1;
                            if(!(var3 === var1)) { _fun0005_ip = 26; continue _fun0005 }
case 24:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.bind(var2)(var3);
case 26:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = {};
                    var9 = 3;
                    var7 = var7[var9];
                    var7 = var11.bind(var8)(var7);
                    var7 = var7.runOnJS;
                    var6['runOnJS'] = var7;
                    var7 = _closure2_slot5;
                    var6['setEnterFinished'] = var7;
                    var1['__closure'] = var6;
                    var6 = 9490441890617.0;
                    var1['__workletHash'] = var6;
                    var6 = _closure1_slot8;
                    var1['__initData'] = var6;
                    var7 = 1;
                    var6 = 'respect-motion-settings';
                    var21 = var10;
                    var20 = var7;
                    var18 = var6;
                    var17 = var1;
                    var14 = var21[var3](var20, var19, var18, var17, var16);
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var11 = _closure2_slot1;
                    var10 = 0;
                    var1 = var14;
                    if(!(var11 > var10)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var9];
                    var13 = var12.bind(var8)(var11);
                    var12 = var13.withDelay;
                    var11 = _closure2_slot1;
                    var1 = var12.bind(var13)(var11, var14);
case 27:
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.withSpring;
                    var1 = _closure1_slot4;
                    var7 = var2.bind(var3)(var7, var1, var6);
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var6 = _closure2_slot1;
                    var1 = var7;
                    if(!(var6 > var10)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withDelay;
                    var4 = _closure2_slot1;
                    var1 = var5.bind(var6)(var4, var7);
case 29:
                    var1 = var2.bind(var3)(var1);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var11)(var1, var4);
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var10];
            var5 = var5.bind(var7)(var4);
            var4 = var5.useAnimatedStyle;
            var3 = function J() {
                var1 = {};
                var4 = _closure2_slot3;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['opacity'] = var3;
                var3 = {};
                var4 = _closure2_slot4;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var7 = {};
            var7['opacity'] = var9;
            var7['scale'] = var8;
            var3['__closure'] = var7;
            var7 = 8631256891065.0;
            var3['__workletHash'] = var7;
            var6 = _closure1_slot10;
            var3['__initData'] = var6;
            var3 = var4.bind(var5)(var3);
            var1['animatedStyle'] = var3;
            var1['isInteractive'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();