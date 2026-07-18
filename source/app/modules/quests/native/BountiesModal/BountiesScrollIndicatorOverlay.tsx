// app/modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,1)'];
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.timingSlowDuration;
    var4 = 5000;
    var4 = var4 + var7;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'height': '45%', 'alignItems': 'center', 'justifyContent': 'center'};
        var3 = 'center';
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 6;
        var8 = var7[var4];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.space;
        var8 = var8.PX_16;
        var2['paddingHorizontal'] = var8;
        var1['scrollIndicator'] = var2;
        var2 = {'position': 'absolute', 'bottom': 124, 'left': 0, 'right': 0, 'alignItems': 'center', 'justifyContent': 'flex-start'};
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.space;
        var4 = var4.PX_8;
        var2['gap'] = var4;
        var1['scrollIndicatorContent'] = var2;
        var2 = {};
        var2['textAlign'] = var3;
        var1['scrollIndicatorText'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,isActive,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,isActive?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,isActive,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!isActive?timingStandard:timingSlow)};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesScrollIndicatorOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.isActive;
            var _closure2_slot0 = var14;
            var17 = var2.isEndCardVisible;
            var _closure2_slot1 = var17;
            var7 = var2.opacityStyle;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot10;
            var12 = var2.bind(var4)();
            var3 = {};
            var3['enabled'] = var14;
            var2 = function useAnimationTiming(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var2 = var2.enabled;
                    var _closure3_slot0 = var2;
                    var13 = _closure1_slot4;
                    var3 = var13.useState;
                    var7 = true;
                    var3 = var3.bind(var13)(var7);
                    var12 = _closure1_slot3;
                    var6 = undefined;
                    var11 = 2;
                    var5 = var12.bind(var6)(var3, var11);
                    var9 = 0;
                    var3 = var5[var9];
                    var10 = 1;
                    var5 = var5[var10];
                    var _closure3_slot1 = var5;
                    var8 = var13.useState;
                    var8 = var8.bind(var13)(var2);
                    var8 = var12.bind(var6)(var8, var11);
                    var9 = var8[var9];
                    var8 = var8[var10];
                    if(!(var2 !== var9)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = var8.bind(var6)(var2);
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = var5.bind(var6)(var7);
case 2:
                    var6 = _closure1_slot4;
                    var5 = var6.useEffect;
                    var4 = new Array(1);
                    var4[0] = var2;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var4 = undefined;
                            if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            return var4;
case 5:
                            var3 = function scheduleNext(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var1 = arg1;
                                    var _closure5_slot0 = var1;
                                    var3 = global;
                                    var4 = var3.setTimeout;
                                    var3 = 5000;
                                    if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                                    var3 = _closure1_slot9;
case 7:
                                    var1 = undefined;
                                    var2 = function() {
                                        var3 = _closure3_slot1;
                                        var2 = _closure5_slot0;
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var3 = _closure4_slot1;
                                        var2 = !var2;
                                        var2 = var3.bind(var1)(var2);
                                        return var1;
                                    };
                                    var3 = var4.bind(var1)(var2, var3);
                                    var _closure4_slot0 = var3;
                                    return var1;
                                }
                            };
                            var _closure4_slot1 = var3;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            var1 = function() {
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            return var1;
                        }
                    };
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = {};
                    if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2 = var3;
case 9:
                    var1['visible'] = var2;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var3);
            var13 = var2.visible;
            var _closure2_slot2 = var13;
            var11 = _closure1_slot4;
            var2 = var11.useState;
            var2 = var2.bind(var11)(var13);
            var9 = _closure1_slot3;
            var8 = 2;
            var2 = var9.bind(var4)(var2, var8);
            var5 = 0;
            var10 = var2[var5];
            var6 = 1;
            var3 = var2[var6];
            var _closure2_slot3 = var3;
            var2 = var11.useState;
            var2 = var2.bind(var11)(var13);
            var2 = var9.bind(var4)(var2, var8);
            var5 = var2[var5];
            var2 = var2[var6];
            if(!(var13 !== var5)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var2.bind(var4)(var13);
            if(!var13) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = true;
            var2 = var3.bind(var4)(var2);
case 11:
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var3 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var18 = var5.bind(var6)(var3, var2);
            _closure2_slot4 = var18;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 7;
            var2 = var16[var6];
            var5 = var15.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function B() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var12 = undefined;
                    var7 = var4.bind(var12)(var3);
                    var6 = var7.withTiming;
                    var3 = _closure2_slot2;
                    var5 = 0;
                    if(!var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var5 = 1;
case 14:
                    var4 = _closure2_slot0;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 4;
                    var3 = var10[var3];
                    var3 = var8.bind(var12)(var3);
                    if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var4 = var3.timingStandard;
                    _fun0005_ip = 18; continue _fun0005;
case 16:
                    var4 = var3.timingSlow;
case 18:
                    var3 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
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
                    var13 = _closure1_slot2;
                    var10 = 7;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.runOnJS;
                    var8['runOnJS'] = var10;
                    var9 = _closure2_slot4;
                    var8['animationCallbackJSThread'] = var9;
                    var3['__closure'] = var8;
                    var8 = 7847207274031.0;
                    var3['__workletHash'] = var8;
                    var2 = _closure1_slot12;
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
            var11 = {};
            var9 = 8;
            var8 = var16[var9];
            var8 = var15.bind(var4)(var8);
            var8 = var8.withTiming;
            var11['withTiming'] = var8;
            var11['visible'] = var13;
            var11['isActive'] = var14;
            var8 = 4;
            var19 = var16[var8];
            var19 = var15.bind(var4)(var19);
            var19 = var19.timingSlow;
            var11['timingSlow'] = var19;
            var19 = var16[var8];
            var19 = var15.bind(var4)(var19);
            var19 = var19.timingStandard;
            var11['timingStandard'] = var19;
            var19 = var16[var6];
            var19 = var15.bind(var4)(var19);
            var19 = var19.runOnJS;
            var11['runOnJS'] = var19;
            var11['animationCallbackJSThread'] = var18;
            var2['__closure'] = var11;
            var11 = 22957586567.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot11;
            var2['__initData'] = var11;
            var18 = var3.bind(var5)(var2);
            var2 = var16[var6];
            var5 = var15.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function E() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var7 = _closure2_slot2;
                    var3 = 0;
                    if(!var7) { _fun0006_ip = 19; continue _fun0006 }
case 15:
                    var7 = _closure2_slot1;
                    var3 = 0;
                    if(var7) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var3 = 1;
case 19:
                    var7 = _closure2_slot1;
                    if(var7) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0006_ip = 21; continue _fun0006 }
case 23:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 4;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.timingSlow;
                    _fun0006_ip = 24; continue _fun0006;
case 21:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 4;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var2 = var6.timingStandard;
case 24:
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var19 = var16[var9];
            var19 = var15.bind(var4)(var19);
            var19 = var19.withTiming;
            var11['withTiming'] = var19;
            var11['visible'] = var13;
            var11['isEndCardVisible'] = var17;
            var11['isActive'] = var14;
            var14 = var16[var8];
            var14 = var15.bind(var4)(var14);
            var14 = var14.timingStandard;
            var11['timingStandard'] = var14;
            var14 = var16[var8];
            var14 = var15.bind(var4)(var14);
            var14 = var14.timingSlow;
            var11['timingSlow'] = var14;
            var2['__closure'] = var11;
            var11 = 4256710479074.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot13;
            var2['__initData'] = var11;
            var14 = var3.bind(var5)(var2);
            var2 = var16[var6];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function j() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var8 = undefined;
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.withTiming;
                    var7 = _closure2_slot2;
                    var4 = 0.9;
                    if(!var7) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var4 = 1;
case 25:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 4;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.timingStandard;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var9 = var9.withTiming;
            var5['withTiming'] = var9;
            var5['visible'] = var13;
            var8 = var16[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.timingStandard;
            var5['timingStandard'] = var8;
            var1['__closure'] = var5;
            var5 = 4041303236067.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot14;
            var1['__initData'] = var5;
            var17 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var9 = _closure1_slot1;
            var1 = var16[var6];
            var1 = var9.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var12.scrollIndicator;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var11 = _closure1_slot6;
            var5 = var16[var6];
            var5 = var9.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var19 = _closure1_slot5;
            var21 = var19.absoluteFill;
            var8 = new Array(2);
            var8[0] = var21;
            var8[1] = var14;
            var5['style'] = var8;
            var8 = 9;
            var8 = var16[var8];
            var14 = var9.bind(var4)(var8);
            var8 = {};
            var20 = _closure1_slot8;
            var8['colors'] = var20;
            var19 = var19.absoluteFill;
            var8['style'] = var19;
            var8 = var11.bind(var4)(var14, var8);
            var5['children'] = var8;
            var7 = var11.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var16[var6];
            var6 = var9.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var14 = var12.scrollIndicatorContent;
            var8 = new Array(2);
            var8[0] = var14;
            var14 = new Array(2);
            var14[0] = var18;
            var14[1] = var17;
            var8[1] = var14;
            var6['style'] = var8;
            var8 = 10;
            var8 = var16[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['visible'] = var13;
            var8['isFadingInContent'] = var10;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 11;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-sm/semibold', 'color': 'text-default'};
            var12 = var12.scrollIndicatorText;
            var9['style'] = var12;
            var12 = 12;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.eafsh4;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();