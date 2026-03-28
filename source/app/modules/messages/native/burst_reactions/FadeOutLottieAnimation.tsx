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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}";
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
            var3 = Object.create(var1);
            var4 = 0;
            var3['onComplete'] = var4;
            var22 = {};
            var21 = var5;
            var20 = var3;
            var8 = copyDataProperties(var22, var21, var20);
            var2 = _closure1_slot7;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var14 = _closure1_slot4;
            var6 = var14.useState;
            var2 = false;
            var2 = var6.bind(var14)(var2);
            var11 = _closure1_slot3;
            var6 = 2;
            var2 = var11.bind(var5)(var2, var6);
            var7 = var2[var4];
            var _closure2_slot1 = var7;
            var10 = 1;
            var2 = var2[var10];
            var _closure2_slot2 = var2;
            var13 = var14.useState;
            var2 = true;
            var2 = var13.bind(var14)(var2);
            var2 = var11.bind(var5)(var2, var6);
            var4 = var2[var4];
            var _closure2_slot3 = var4;
            var16 = var2[var10];
            var _closure2_slot4 = var16;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 5;
            var2 = var17[var2];
            var13 = var18.bind(var5)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var11.bind(var13)(var6, var2);
            var13 = var14.useEffect;
            var6 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var13.bind(var14)(var6, var2);
            var2 = 6;
            var6 = var17[var2];
            var14 = var18.bind(var5)(var6);
            var13 = var14.useAnimatedStyle;
            var6 = function T() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = {};
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = 1;
                    var3['opacity'] = var1;
                    var1 = var3;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = 0;
                    var3['opacity'] = var2;
                    var2 = var3;
                    _fun0002_ip = 7; continue _fun0002;
case 5:
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
                            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
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
case 8:
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
case 7:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var15 = {};
            var15['isAnimationComplete'] = var7;
            var15['isFadeOut'] = var4;
            var19 = 7;
            var19 = var17[var19];
            var19 = var18.bind(var5)(var19);
            var19 = var19.withTiming;
            var15['withTiming'] = var19;
            var17 = var17[var2];
            var17 = var18.bind(var5)(var17);
            var17 = var17.runOnJS;
            var15['runOnJS'] = var17;
            var15['setIsFadeOut'] = var16;
            var6['__closure'] = var15;
            var15 = 1137618554665.0;
            var6['__workletHash'] = var15;
            var15 = _closure1_slot8;
            var6['__initData'] = var15;
            var6 = var13.bind(var14)(var6);
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = null;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 10:
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
            var12 = var12.content;
            var6['style'] = var12;
            if(!var11) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = 0.5;
case 13:
            var6['speed'] = var10;
            var9 = function onAnimationFinish(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 2; continue _fun0004 }
case 15:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
case 2:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6['onAnimationFinish'] = var9;
            var22 = var6;
            var21 = var8;
            var8 = copyDataProperties(var22, var21);
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();