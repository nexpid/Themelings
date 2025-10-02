// app/modules/remixing/native/components/ColorCarousel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var12;
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
        var4 = var6[var1];
        var1 = undefined;
        var4 = var12.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var16 = var4.StyleSheet;
        var8 = var4.TouchableOpacity;
        var _closure1_slot5 = var8;
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var14 = 3;
        var4 = var6[var14];
        var4 = var5.bind(var1)(var4);
        var4 = var4.useRemixingEditorStore;
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot8 = var8;
        var4 = var4.jsxs;
        var _closure1_slot9 = var4;
        var4 = [0, 1, 2, 3, 4, 5, 6, 7];
        var _closure1_slot10 = var4;
        var4 = 5;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var13 = 'flex';
        var10 = {'display': 'flex', 'alignItems': 'center'};
        var4['flexCenter'] = var10;
        var10 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'marginBottom': 24, 'height': 80, 'width': null, 'overflow': 'hidden'};
        var11 = 6;
        var11 = var6[var11];
        var15 = var5.bind(var1)(var11);
        var11 = var15.isAndroid;
        var15 = var11.bind(var15)();
        var17 = 'transparent';
        var11 = var17;
        if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var11 = 'rgba(24, 25, 28, 0.8)';
case 2:
        var10['backgroundColor'] = var11;
        var11 = 7;
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xl;
        var10['borderRadius'] = var15;
        var15 = 8;
        var18 = var6[var15];
        var18 = var5.bind(var1)(var18);
        var18 = var18.COLOR_CAROUSEL_WIDTH;
        var10['width'] = var18;
        var4['iconContainer'] = var10;
        var10 = {};
        var20 = var16.absoluteFillObject;
        var21 = var10;
        var16 = copyDataProperties(var21, var20);
        var16 = 'backgroundColor';
        var10[var16] = var17;
        var4['visualEffectView'] = var10;
        var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'paddingLeft': 24};
        var4['colorRowContainer'] = var10;
        var10 = {'display': 'flex', 'flexDirection': 'row'};
        var15 = var6[var15];
        var15 = var5.bind(var1)(var15);
        var15 = var15.COLOR_CAROUSEL_WIDTH;
        var10['width'] = var15;
        var4['colorRow'] = var10;
        var10 = {'width': 24, 'height': 24, 'borderRadius': 40, 'margin': 5, 'position': 'relative', 'overflow': 'hidden'};
        var4['colorCircle'] = var10;
        var10 = {};
        var10['margin'] = var14;
        var4['compactCircle'] = var10;
        var10 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
        var4['rainbow'] = var10;
        var10 = {'borderWidth': 3, 'borderColor': 'white'};
        var4['selectedColor'] = var10;
        var10 = {};
        var10['borderWidth'] = var14;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.FOCUS_PRIMARY;
        var10['borderColor'] = var14;
        var4['selectedAlternate'] = var10;
        var10 = {'borderWidth': 1, 'borderColor': 'white'};
        var4['blackUnselected'] = var10;
        var10 = {};
        var10['display'] = var13;
        var4['selectorContainer'] = var10;
        var10 = {'display': 'flex', 'flex': 1};
        var4['container'] = var10;
        var10 = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center'};
        var4['pagination'] = var10;
        var10 = {'width': 6, 'height': 6, 'borderRadius': null, 'backgroundColor': 'rgba(78, 80, 88, 0.48)', 'marginHorizontal': 4};
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.radii;
        var11 = var11.xs;
        var10['borderRadius'] = var11;
        var4['dot'] = var10;
        var10 = {};
        var11 = '#F2F3F5';
        var10['backgroundColor'] = var11;
        var4['activeDot'] = var10;
        var10 = {};
        var4['touchTarget'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot11 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var16 = var2.colors;
                var11 = var2.carouselIndex;
                var _closure2_slot0 = var11;
                var19 = var2.selectedColor;
                var _closure2_slot1 = var19;
                var1 = var2.allowRainbow;
                var _closure2_slot2 = var1;
                var12 = var2.setColor;
                var _closure2_slot3 = var12;
                var2 = var2.carouselRef;
                var _closure2_slot4 = var2;
                var2 = _closure1_slot11;
                var4 = undefined;
                var15 = var2.bind(var4)();
                var _closure2_slot5 = var15;
                var7 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 9;
                var5 = var3[var5];
                var5 = var2.bind(var4)(var5);
                var6 = var5.shallow;
                var5 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.showRainbowColor;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = var2.setShowRainbowColor;
                    var1[1] = var2;
                    return var1;
                };
                var5 = var7.bind(var4)(var5, var6);
                var18 = _closure1_slot3;
                var6 = 2;
                var5 = var18.bind(var4)(var5, var6);
                var10 = 0;
                var8 = var5[var10];
                var _closure2_slot6 = var8;
                var13 = 1;
                var17 = var5[var13];
                var _closure2_slot7 = var17;
                var7 = _closure1_slot4;
                var20 = var7.useState;
                var5 = new Array(0);
                var5 = var20.bind(var7)(var5);
                var6 = var18.bind(var4)(var5, var6);
                var5 = var6[var10];
                var _closure2_slot8 = var5;
                var6 = var6[var13];
                var _closure2_slot9 = var6;
                var13 = var7.useEffect;
                var6 = new Array(4);
                var6[0] = var8;
                var6[1] = var17;
                var6[2] = var5;
                var6[3] = var1;
                var5 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot6;
                        if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var4 = _closure2_slot8;
                        var1 = var4.join;
                        var4 = var1.bind(var4)();
                        var5 = _closure1_slot10;
                        var1 = var5.join;
                        var1 = var1.bind(var5)();
                        var2 = var4 === var1;
case 6:
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var13.bind(var7)(var5, var6);
                var6 = var7.useCallback;
                var5 = new Array(3);
                var5[0] = var12;
                var5[1] = var1;
                var5[2] = var11;
                var1 = function(arg1, arg2, arg3) {
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var2 = arg2;
                    var _closure3_slot1 = var2;
                    var2 = arg3;
                    var _closure3_slot2 = var2;
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 10;
                            var2 = var6[var1];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var2);
                            var2 = var4.triggerHapticFeedback;
                            var1 = var6[var1];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var4)(var1);
                            var2 = _closure2_slot2;
                            if(!var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                            var5 = _closure2_slot0;
                            var4 = 0;
                            var2 = var4 === var5;
case 8:
                            if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                            var4 = _closure3_slot0;
                            var2 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var1 = new Array(1);
                                    var5 = arg1;
                                    var4 = 0;
                                    var6 = var1;
                                    var3 = arraySpread(var6, var5, var4);
                                    var2 = _closure3_slot2;
                                    var1[var3] = var2;
                                    var2 = 1;
                                    var2 = var3 + var2;
                                    var3 = var1.length;
                                    var2 = _closure1_slot10;
                                    var2 = var2.length;
                                    if(!(var3 > var2)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                                    var2 = var1.shift;
                                    var2 = var2.bind(var1)();
case 12:
                                    return var1;
                                }
                            };
                            var2 = var4.bind(var3)(var2);
case 10:
                            var2 = _closure2_slot3;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = var6.bind(var7)(var1, var5);
                var _closure2_slot10 = var1;
                var1 = 11;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useIsScreenReaderEnabled;
                var12 = var1.bind(var2)();
                var _closure2_slot11 = var12;
                var3 = _closure1_slot8;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = 'radiogroup';
                var1['accessibilityRole'] = var5;
                var5 = var15.colorRowContainer;
                var1['style'] = var5;
                var6 = _closure1_slot9;
                var5 = {};
                var7 = var15.colorRow;
                var5['style'] = var7;
                var13 = var16.map;
                var7 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var13 = arg1;
                        var5 = arg2;
                        var4 = _closure1_slot8;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var1 = 'radio';
                        var2['accessibilityRole'] = var1;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var14 = 12;
                        var6 = var1[var14];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.hexToDrawingColor;
                        var6 = var6.bind(var7)(var13);
                        var2['accessibilityLabel'] = var6;
                        var6 = {};
                        var7 = _closure2_slot1;
                        var7 = var13 === var7;
                        var6['selected'] = var7;
                        var2['accessibilityState'] = var6;
                        var8 = _closure2_slot5;
                        var6 = var8.touchTarget;
                        var2['style'] = var6;
                        var7 = _closure2_slot10;
                        var6 = _closure2_slot9;
                        var6 = var7.bind(var1)(var6, var13, var5);
                        var2['onPress'] = var6;
                        var7 = _closure1_slot6;
                        var6 = {};
                        var9 = var8.colorCircle;
                        var8 = new Array(6);
                        var8[0] = var9;
                        var9 = {};
                        var9['backgroundColor'] = var13;
                        var8[1] = var9;
                        var9 = _closure2_slot6;
                        if(!var9) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                        var15 = _closure2_slot0;
                        var12 = 0;
                        var9 = var12 === var15;
case 14:
                        if(var9) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var9 = _closure2_slot11;
case 16:
                        if(!var9) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                        var12 = _closure2_slot5;
                        var9 = var12.compactCircle;
case 18:
                        var8[2] = var9;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var14];
                        var9 = var12.bind(var1)(var9);
                        var9 = var9.DrawingColors;
                        var9 = var9.BLACK;
                        var9 = var13 === var9;
                        if(!var9) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var12 = _closure2_slot5;
                        var9 = var12.blackUnselected;
case 20:
                        var8[3] = var9;
                        var9 = _closure2_slot1;
                        var9 = var13 === var9;
                        if(!var9) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var12 = _closure2_slot5;
                        var9 = var12.selectedColor;
case 22:
                        var8[4] = var9;
                        var9 = _closure2_slot1;
                        var9 = var13 === var9;
                        if(!var9) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var14];
                        var11 = var12.bind(var1)(var11);
                        var12 = var11.DRAWING_TOOL_COLORS_WITH_ALTERNATE_OUTLINE;
                        var11 = var12.includes;
                        var9 = var11.bind(var12)(var13);
case 24:
                        if(!var9) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var10 = _closure2_slot5;
                        var9 = var10.selectedAlternate;
case 26:
                        var8[5] = var9;
                        var6['style'] = var8;
                        var6 = var4.bind(var1)(var7, var6);
                        var2['children'] = var6;
                        var1 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    }
                };
                var13 = var13.bind(var16)(var7);
                var7 = new Array(2);
                var7[0] = var13;
                if(var12) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                if(!var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var8 = var10 === var11;
case 30:
                if(!var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var13 = _closure1_slot8;
                var12 = _closure1_slot5;
                var11 = {};
                var10 = var15.touchTarget;
                var11['style'] = var10;
                var10 = function onPress() {
                    var3 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.RemixShader;
                    var1 = var1.RAINBOW;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var11['onPress'] = var10;
                var16 = _closure1_slot6;
                var10 = {};
                var18 = var15.colorCircle;
                var17 = new Array(3);
                var17[0] = var18;
                var18 = var15.compactCircle;
                var17[1] = var18;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 14;
                var18 = var21[var18];
                var18 = var20.bind(var4)(var18);
                var18 = var18.RemixShader;
                var18 = var18.RAINBOW;
                var18 = var19 === var18;
                if(!var18) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var18 = var15.selectedColor;
case 34:
                var17[2] = var18;
                var10['style'] = var17;
                var19 = _closure1_slot8;
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var17 = 15;
                var17 = var20[var17];
                var18 = var18.bind(var4)(var17);
                var17 = {'style': null, 'useAngle': true, 'angle': 90};
                var20 = var15.rainbow;
                var17['style'] = var20;
                var20 = {'x': 0.75, 'y': 0.5};
                var17['angleCenter'] = var20;
                var20 = ['rgba(255, 0, 0, 1)', 'rgba(255, 154, 0, 1)', 'rgba(208, 222, 33, 1)', 'rgba(79, 220, 74, 1)', 'rgba(63, 218, 216, 1)', 'rgba(47, 201, 226, 1)', 'rgba(28, 127, 238, 1)', 'rgba(95, 21, 242, 1)', 'rgba(186, 12, 248, 1)', 'rgba(251, 7, 217, 1)', 'rgba(255, 0, 0, 1)'];
                var17['colors'] = var20;
                var17 = var19.bind(var4)(var18, var17);
                var10['children'] = var17;
                var10 = var13.bind(var4)(var16, var10);
                var11['children'] = var10;
                var10 = 'RAINBOW';
                var8 = var13.bind(var4)(var12, var11, var10);
case 32:
                _fun0002_ip = 36; continue _fun0002;
case 28:
                var12 = _closure1_slot8;
                var11 = _closure1_slot5;
                var10 = {};
                var13 = var15.touchTarget;
                var10['style'] = var13;
                var9 = function onPress() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure2_slot4;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                        var2 = var3.next;
                        var1 = var2.bind(var3)();
case 37:
                        return var1;
                    }
                };
                var10['onPress'] = var9;
                var13 = _closure1_slot6;
                var9 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 13;
                var16 = var19[var14];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.MlJlDg;
                var14 = var16.bind(var17)(var14);
                var9['accessibilityLabel'] = var14;
                var16 = var15.colorCircle;
                var14 = new Array(3);
                var14[0] = var16;
                var16 = {};
                var17 = 12;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.DrawingColors;
                var17 = var17.WHITE;
                var16['backgroundColor'] = var17;
                var14[1] = var16;
                var15 = var15.compactCircle;
                var14[2] = var15;
                var9['style'] = var14;
                var9 = var12.bind(var4)(var13, var9);
                var10['children'] = var9;
                var9 = 'next colors';
                var8 = var12.bind(var4)(var11, var10, var9);
case 36:
                var7[1] = var8;
                var5['children'] = var7;
                var5 = var6.bind(var4)(var2, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot12 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = var1.carouselIndex;
            var _closure2_slot0 = var2;
            var7 = var1.pageCount;
            var2 = _closure1_slot11;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var _closure2_slot1 = var6;
            var3 = _closure1_slot8;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var6.pagination;
            var1['style'] = var6;
            var6 = global;
            var6 = var6.Array;
            var10 = var6.bind(var4)(var7);
            var7 = new Array(0);
            var9 = 0;
            var11 = var7;
            var6 = arraySpread(var11, var10, var9);
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg2;
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var6 = var1.dot;
                    var1 = new Array(2);
                    var1[0] = var6;
                    var6 = _closure2_slot0;
                    var6 = var5 === var6;
                    if(!var6) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var7 = _closure2_slot1;
                    var6 = var7.activeDot;
case 39:
                    var1[1] = var6;
                    var2['style'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot13 = var4;
        var4 = var7.memo;
        var2 = function ColorCarousel(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var9 = var2.setColor;
                var _closure2_slot0 = var9;
                var10 = var2.selectedColor;
                var _closure2_slot1 = var10;
                var14 = var2.setCarouselIndex;
                var16 = var2.carouselIndex;
                var11 = var2.usePagination;
                var7 = var2.forDrawing;
                var4 = undefined;
                if(!(var7 === var4)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var7 = false;
case 41:
                var12 = var2.allowRainbow;
                if(!(var12 === var4)) { _fun0009_ip = 43; continue _fun0009 }
case 9:
                var12 = false;
case 43:
                var _closure2_slot2 = var12;
                var24 = var2.style;
                var8 = var2.animatedViewStyle;
                var19 = var2.width;
                var _closure2_slot3 = var4;
                var2 = _closure1_slot11;
                var23 = var2.bind(var4)();
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var2 = null;
                var17 = var3.bind(var5)(var2);
                _closure2_slot3 = var17;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 16;
                var3 = var21[var2];
                var6 = var22.bind(var4)(var3);
                var3 = var6.useOverlayLayoutDriver;
                var6 = var3.bind(var6)();
                var2 = var21[var2];
                var3 = var22.bind(var4)(var2);
                var2 = var3.useFooterLayoutAnimation;
                var6 = var2.bind(var3)(var6);
                var3 = var5.useCallback;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var10;
                var2[2] = var9;
                var1 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.item;
                    var1 = var1.index;
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot12;
                    var2 = {};
                    var2['colors'] = var5;
                    var2['carouselIndex'] = var1;
                    var5 = _closure2_slot2;
                    var2['allowRainbow'] = var5;
                    var5 = _closure2_slot3;
                    var2['carouselRef'] = var5;
                    var5 = _closure2_slot0;
                    var2['setColor'] = var5;
                    var1 = _closure2_slot1;
                    var2['selectedColor'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var20 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot8;
                var13 = _closure1_slot1;
                var1 = 17;
                var1 = var21[var1];
                var1 = var13.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var5 = new Array(3);
                var5[0] = var8;
                var8 = {};
                var8['top'] = var4;
                var5[1] = var8;
                var5[2] = var6;
                var1['style'] = var5;
                var5 = 18;
                var5 = var21[var5];
                var5 = var22.bind(var4)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {'bottom': null, 'left': true, 'right': true, 'pointerEvents': 'box-none'};
                var5['bottom'] = var7;
                var18 = true;
                var10 = 'box-none';
                var7 = var23.flexCenter;
                var5['style'] = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot6;
                var7 = {};
                var25 = var23.iconContainer;
                var12 = new Array(2);
                var12[0] = var25;
                var12[1] = var24;
                var7['style'] = var12;
                var7['pointerEvents'] = var10;
                var10 = 19;
                var10 = var21[var10];
                var12 = var13.bind(var4)(var10);
                var10 = {};
                var24 = 'dark';
                var10['blurTheme'] = var24;
                var23 = var23.visualEffectView;
                var10['style'] = var23;
                var12 = var3.bind(var4)(var12, var10);
                var10 = new Array(3);
                var10[0] = var12;
                var12 = 20;
                var12 = var21[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12['ref'] = var17;
                var17 = 12;
                var21 = var21[var17];
                var21 = var22.bind(var4)(var21);
                var21 = var21.DRAWING_TOOL_COLOR_PRESETS;
                var12['data'] = var21;
                var12['renderItem'] = var20;
                var20 = 40;
                var12['height'] = var20;
                var12['width'] = var19;
                var12['defaultIndex'] = var16;
                var19 = {};
                var20 = 'relative';
                var19['position'] = var20;
                var12['style'] = var19;
                var12['pagingEnabled'] = var18;
                var12['onSnapToItem'] = var14;
                var14 = 250;
                var12['scrollAnimationDuration'] = var14;
                var12 = var3.bind(var4)(var13, var12);
                var10[1] = var12;
                if(!var11) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                var14 = _closure1_slot8;
                var13 = _closure1_slot13;
                var12 = {};
                var12['carouselIndex'] = var16;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var17];
                var15 = var16.bind(var4)(var15);
                var15 = var15.DRAWING_TOOL_COLOR_PRESETS;
                var15 = var15.length;
                var12['pageCount'] = var15;
                var11 = var14.bind(var4)(var13, var12);
case 44:
                var10[2] = var11;
                var7['children'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5['children'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 21;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/remixing/native/components/ColorCarousel.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();