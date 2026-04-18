// app/modules/quests/native/BountiesModal/BountiesModalTimer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var9 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Platform;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot5 = var9;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.SMALL_BUTTON_HEIGHT;
    var4 = 4;
    var9 = var9 - var4;
    var9 = var9 / var10;
    var _closure1_slot7 = var9;
    var8 = var8.Math;
    var8 = var8.PI;
    var8 = var10 * var8;
    var8 = var8 * var9;
    var _closure1_slot8 = var8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Circle;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'alignItems': 'center', 'justifyContent': 'center'};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 7;
            var8 = var4[var6];
            var5 = undefined;
            var8 = var7.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var8;
            var8 = var4[var6];
            var8 = var7.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var9 = _closure1_slot0;
            var8 = 3;
            var10 = var4[var8];
            var10 = var9.bind(var5)(var10);
            var10 = var10.SMALL_BUTTON_HEIGHT;
            var2['width'] = var10;
            var8 = var4[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.SMALL_BUTTON_HEIGHT;
            var2['height'] = var8;
            var1['progress'] = var2;
            var2 = {};
            var8 = 'absolute';
            var2['position'] = var8;
            var9 = {};
            var8 = '-90deg';
            var9['rotate'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var2['transform'] = var8;
            var1['ring'] = var2;
            var2 = {};
            var8 = var4[var6];
            var8 = var7.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_SURFACE_HIGHEST;
            var2['color'] = var8;
            var1['trackPath'] = var2;
            var2 = {};
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
            var2['color'] = var4;
            var8 = 'android';
            var7 = arg1;
            var4 = undefined;
            if(!(var8 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 14;
case 2:
            var2['lineHeight'] = var4;
            var1['countdownText'] = var2;
            var2 = {'position': 'absolute', 'inset': 6};
            var1['checkmarkWrapper'] = var2;
            var2 = {'width': 20, 'height': 20, 'backgroundColor': '#2ECC71'};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var1['completeCheckmark'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function BountiesModalTimerTsx2(){const{withTiming,hasCountdownEnded,timingStandard}=this.__closure;return{opacity:withTiming(hasCountdownEnded?0:1,timingStandard)};}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function BountiesModalTimerTsx3(){const{withTiming,hasCountdownEnded,timingStandard}=this.__closure;return{opacity:withTiming(hasCountdownEnded?1:0,timingStandard),transform:[{scale:withTiming(hasCountdownEnded?1:0.75,timingStandard)}]};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesModalTimer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesModalTimer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var6 = var2.isCompleted;
            var5 = var2.totalSeconds;
            var3 = var2.remainingSeconds;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot10;
            var2 = 'android';
            var11 = var7.bind(var4)(var2);
            var10 = var6;
            if(var10) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = 0;
            var2 = var3 <= var7;
case 6:
            var10 = var2;
case 4:
            _closure2_slot0 = var10;
            var12 = null;
            var2 = var12 != var3;
            var17 = null;
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = global;
            var13 = var2.Math;
            var8 = var13.max;
            var7 = var2.Math;
            var2 = var7.ceil;
            var7 = var2.bind(var7)(var3);
            var2 = 1;
            var17 = var8.bind(var13)(var2, var7);
case 8:
            var2 = 0;
            _closure2_slot1 = var2;
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var12 != var5;
            if(!var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var5 > var2;
case 12:
            if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var12 != var3;
case 14:
            var2 = 0;
            if(!var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = var3 / var5;
            var3 = 1;
            var3 = var3 - var5;
            _closure2_slot1 = var3;
            var2 = var3;
            _fun0002_ip = 16; continue _fun0002;
case 10:
            var3 = 1;
            _closure2_slot1 = var3;
            var2 = var3;
case 16:
            var25 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 4;
            var3 = var7[var6];
            var5 = var25.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var13 = var3.bind(var5)(var2);
            _closure2_slot2 = var13;
            var8 = _closure1_slot3;
            var5 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure2_slot2;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var5 = var5[var1];
                var1 = undefined;
                var8 = var6.bind(var1)(var5);
                var7 = var8.withTiming;
                var6 = _closure2_slot1;
                var5 = {};
                var2 = 500;
                var5['duration'] = var2;
                var2 = 'animate-always';
                var2 = var7.bind(var8)(var6, var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var8)(var2, var3);
            var2 = var7[var6];
            var5 = var25.bind(var4)(var2);
            var3 = var5.useAnimatedProps;
            var2 = function f() {
                var1 = {};
                var3 = _closure1_slot8;
                var4 = _closure2_slot2;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var3 * var2;
                var2 = var3 - var2;
                var1['strokeDashoffset'] = var2;
                return var1;
            };
            var8 = {};
            var21 = _closure1_slot8;
            var8['PROGRESS_CIRCUMFERENCE'] = var21;
            var8['animatedProgress'] = var13;
            var2['__closure'] = var8;
            var8 = 12964700773124.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot11;
            var2['__initData'] = var8;
            var20 = var3.bind(var5)(var2);
            var2 = var7[var6];
            var5 = var25.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function p() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var7 = undefined;
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot0;
                    var3 = 1;
                    if(!var6) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = 0;
case 18:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.timingStandard;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var13 = 8;
            var8 = var7[var13];
            var8 = var25.bind(var4)(var8);
            var8 = var8.withTiming;
            var14['withTiming'] = var8;
            var14['hasCountdownEnded'] = var10;
            var8 = 9;
            var15 = var7[var8];
            var15 = var25.bind(var4)(var15);
            var15 = var15.timingStandard;
            var14['timingStandard'] = var15;
            var2['__closure'] = var14;
            var14 = 6609399908223.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot12;
            var2['__initData'] = var14;
            var15 = var3.bind(var5)(var2);
            var2 = var7[var6];
            var3 = var25.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function A() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 8;
                    var3 = var3[var7];
                    var8 = undefined;
                    var12 = var4.bind(var8)(var3);
                    var11 = var12.withTiming;
                    var3 = _closure2_slot0;
                    var10 = 0;
                    if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                    var10 = 1;
case 18:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 9;
                    var3 = var5[var9];
                    var3 = var6.bind(var8)(var3);
                    var3 = var3.timingStandard;
                    var3 = var11.bind(var12)(var10, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var5 = var5[var7];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withTiming;
                    var7 = _closure2_slot0;
                    var4 = 0.75;
                    if(!var7) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = 1;
case 21:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
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
            var13 = var7[var13];
            var13 = var25.bind(var4)(var13);
            var13 = var13.withTiming;
            var5['withTiming'] = var13;
            var5['hasCountdownEnded'] = var10;
            var8 = var7[var8];
            var8 = var25.bind(var4)(var8);
            var8 = var8.timingStandard;
            var5['timingStandard'] = var8;
            var1['__closure'] = var5;
            var5 = 10338034363423.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot13;
            var1['__initData'] = var5;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.progress;
            var1['style'] = var5;
            var8 = _closure1_slot1;
            var16 = 5;
            var5 = var7[var16];
            var14 = var8.bind(var4)(var5);
            var5 = {};
            var23 = 3;
            var10 = var7[var23];
            var10 = var25.bind(var4)(var10);
            var10 = var10.SMALL_BUTTON_HEIGHT;
            var5['height'] = var10;
            var10 = var7[var23];
            var10 = var25.bind(var4)(var10);
            var10 = var10.SMALL_BUTTON_HEIGHT;
            var5['width'] = var10;
            var10 = var11.ring;
            var5['style'] = var10;
            var10 = _closure1_slot5;
            var16 = var7[var16];
            var16 = var25.bind(var4)(var16);
            var18 = var16.Circle;
            var16 = {};
            var19 = var7[var23];
            var19 = var25.bind(var4)(var19);
            var19 = var19.SMALL_BUTTON_HEIGHT;
            var24 = 2;
            var19 = var19 / var24;
            var16['cx'] = var19;
            var19 = var7[var23];
            var19 = var25.bind(var4)(var19);
            var19 = var19.SMALL_BUTTON_HEIGHT;
            var19 = var19 / var24;
            var16['cy'] = var19;
            var22 = _closure1_slot7;
            var16['r'] = var22;
            var19 = 'none';
            var16['fill'] = var19;
            var19 = var11.trackPath;
            var19 = var19.color;
            var16['stroke'] = var19;
            var16['strokeWidth'] = var6;
            var18 = var10.bind(var4)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var19 = _closure1_slot9;
            var18 = {'cx': null, 'cy': null, 'r': null, 'fill': 'none', 'stroke': '#2ECC71', 'strokeWidth': 4};
            var26 = var7[var23];
            var26 = var25.bind(var4)(var26);
            var26 = var26.SMALL_BUTTON_HEIGHT;
            var26 = var26 / var24;
            var18['cx'] = var26;
            var23 = var7[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.SMALL_BUTTON_HEIGHT;
            var23 = var23 / var24;
            var18['cy'] = var23;
            var18['r'] = var22;
            var18['strokeDasharray'] = var21;
            var21 = 'round';
            var18['strokeLinecap'] = var21;
            var18['animatedProps'] = var20;
            var18 = var10.bind(var4)(var19, var18);
            var16[1] = var18;
            var5['children'] = var16;
            var14 = var3.bind(var4)(var14, var5);
            var5 = new Array(3);
            var5[0] = var14;
            var7 = var7[var6];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var14 = new Array(1);
            var14[0] = var15;
            var7['style'] = var14;
            var12 = var12 != var17;
            if(!var12) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 10;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-sm/semibold', 'style': null, 'maxFontSizeMultiplier': 1};
            var18 = var11.countdownText;
            var14['style'] = var18;
            var14['children'] = var17;
            var12 = var16.bind(var4)(var15, var14);
case 23:
            var7['children'] = var12;
            var7 = var10.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var14 = var11.checkmarkWrapper;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var13;
            var6['style'] = var10;
            var10 = _closure1_slot0;
            var9 = 11;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.CheckmarkSmallBoldIcon;
            var9 = {'size': 'custom', 'color': '#000000'};
            var11 = var11.completeCheckmark;
            var9['style'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();