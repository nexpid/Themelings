// app/modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isAnimationComplete&&isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}";
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FadeOutLottieAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = var5.onComplete;
            var _closure2_slot0 = var1;
            var1 = null;
            var4 = Object.create(var1);
            var3 = 0;
            var4['onComplete'] = var3;
            var21 = {};
            var20 = var5;
            var19 = var4;
            var8 = copyDataProperties(var21, var20, var19);
            var13 = _closure1_slot4;
            var4 = var13.useState;
            var2 = false;
            var2 = var4.bind(var13)(var2);
            var7 = _closure1_slot3;
            var5 = undefined;
            var6 = 2;
            var2 = var7.bind(var5)(var2, var6);
            var4 = var2[var3];
            var _closure2_slot1 = var4;
            var10 = 1;
            var2 = var2[var10];
            var _closure2_slot2 = var2;
            var11 = var13.useState;
            var2 = true;
            var2 = var11.bind(var13)(var2);
            var2 = var7.bind(var5)(var2, var6);
            var3 = var2[var3];
            var _closure2_slot3 = var3;
            var15 = var2[var10];
            var _closure2_slot4 = var15;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 5;
            var2 = var16[var2];
            var11 = var17.bind(var5)(var2);
            var7 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var7.bind(var11)(var6, var2);
            var7 = var13.useEffect;
            var6 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var13)(var6, var2);
            var2 = 6;
            var6 = var16[var2];
            var13 = var17.bind(var5)(var6);
            var7 = var13.useAnimatedStyle;
            var6 = function I() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = {};
                    var2 = 1;
                    var1['opacity'] = var2;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 5:
                    var2 = {};
                    var3 = 0;
                    var2['opacity'] = var3;
                    _fun0002_ip = 8; continue _fun0002;
case 7:
                    var3 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 7;
                    var5 = var14[var5];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var5);
                    var8 = var9.withTiming;
                    var7 = {};
                    var5 = 300;
                    var7['duration'] = var5;
                    var6 = function t(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot4;
                            var2 = var2.bind(var4)(var1);
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
case 9:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = 6;
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot4;
                    var5['setIsFadeOut'] = var10;
                    var6['__closure'] = var5;
                    var5 = 14133863353798.0;
                    var6['__workletHash'] = var5;
                    var4 = _closure1_slot9;
                    var6['__initData'] = var4;
                    var18 = 0;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var17 = var7;
                    var15 = var6;
                    var4 = var19[var8](var18, var17, var16, var15, var14);
                    var3['opacity'] = var4;
                    var2 = var3;
case 8:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var14 = {};
            var14['isAnimationComplete'] = var4;
            var14['isFadeOut'] = var3;
            var18 = 7;
            var18 = var16[var18];
            var18 = var17.bind(var5)(var18);
            var18 = var18.withTiming;
            var14['withTiming'] = var18;
            var16 = var16[var2];
            var16 = var17.bind(var5)(var16);
            var16 = var16.runOnJS;
            var14['runOnJS'] = var16;
            var14['setIsFadeOut'] = var15;
            var6['__closure'] = var14;
            var14 = 14102166699404.0;
            var6['__workletHash'] = var14;
            var14 = _closure1_slot8;
            var6['__initData'] = var14;
            var6 = var7.bind(var13)(var6);
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = null;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var4 = _closure1_slot6;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = var13[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var2['style'] = var6;
            var6 = 8;
            var6 = var13[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var12 = _closure1_slot7;
            var12 = var12.content;
            var6['style'] = var12;
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = 0.5;
case 14:
            var6['speed'] = var10;
            var9 = function onAnimationFinish(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
case 16:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6['onAnimationFinish'] = var9;
            var21 = var6;
            var20 = var8;
            var8 = copyDataProperties(var21, var20);
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();