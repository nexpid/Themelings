// app/design/components/Input/native/InputFieldContainer.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var4 = function useInputStyles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.size;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 'lg';
case 2:
            var4 = var1.isRound;
            if(!(var4 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
case 4:
            var3 = var1.isDisabled;
            if(!(var3 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = false;
case 6:
            var2 = var1.grow;
            if(!(var2 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = true;
case 8:
            var1 = _closure1_slot8;
            var11 = undefined;
            var10 = var6;
            var9 = var4;
            var8 = var3;
            var7 = var2;
            var1 = var11[var1](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Platform;
    var8 = var5.StyleSheet;
    var _closure1_slot3 = var8;
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot5 = var8;
    var5 = var5.jsxs;
    var _closure1_slot6 = var5;
    var5 = {'mass': 0.5, 'damping': 15, 'stiffness': 200, 'overshootClamping': true};
    var _closure1_slot7 = var5;
    var5 = 3;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arguments[0];
            var14 = arguments[1];
            var12 = arguments[2];
            var16 = arguments[3];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 2:
            var2 = 'lg';
case 10:
            if(!(var14 === var5)) { _fun0002_ip = 5; continue _fun0002 }
case 11:
            var14 = false;
case 5:
            if(!(var12 === var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = false;
case 12:
            if(!(var16 === var5)) { _fun0002_ip = 7; continue _fun0002 }
case 14:
            var16 = true;
case 7:
            var1 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var6 = var7[var4];
            var6 = var8.bind(var5)(var6);
            var6 = var6.InputHeights;
            var6 = var6.SM;
            var1['sm'] = var6;
            var6 = var7[var4];
            var6 = var8.bind(var5)(var6);
            var6 = var6.InputHeights;
            var6 = var6.MD;
            var1['md'] = var6;
            var4 = var7[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.InputHeights;
            var4 = var4.LG;
            var1['lg'] = var4;
            var15 = var1[var2];
            var1 = {};
            var9 = _closure1_slot1;
            var6 = 5;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.md;
            var1['sm'] = var4;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.md;
            var1['md'] = var4;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.lg;
            var1['lg'] = var4;
            var13 = var1[var2];
            var1 = {};
            var4 = 6;
            var10 = var7[var4];
            var10 = var8.bind(var5)(var10);
            var10 = var10.TextStyleSheet;
            var10 = var10.text-xs/medium;
            var1['sm'] = var10;
            var10 = var7[var4];
            var10 = var8.bind(var5)(var10);
            var10 = var10.TextStyleSheet;
            var10 = var10.text-sm/medium;
            var1['md'] = var10;
            var4 = var7[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.TextStyleSheet;
            var4 = var4.text-md/medium;
            var1['lg'] = var4;
            var8 = var1[var2];
            var1 = {};
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var1['sm'] = var4;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_12;
            var1['md'] = var4;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_16;
            var1['lg'] = var4;
            var10 = var1[var2];
            var1 = {};
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_4;
            var1['sm'] = var4;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var1['md'] = var4;
            var4 = var7[var6];
            var4 = var9.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var1['lg'] = var4;
            var11 = var1[var2];
            var1 = {};
            var4 = {};
            var17 = var7[var6];
            var17 = var9.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_8;
            var4['paddingHorizontal'] = var17;
            var17 = var7[var6];
            var17 = var9.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_4;
            var4['paddingVertical'] = var17;
            var1['sm'] = var4;
            var4 = {};
            var17 = var7[var6];
            var17 = var9.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_12;
            var4['paddingHorizontal'] = var17;
            var17 = var7[var6];
            var17 = var9.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_8;
            var4['paddingVertical'] = var17;
            var1['md'] = var4;
            var4 = {};
            var17 = var7[var6];
            var17 = var9.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_16;
            var4['paddingHorizontal'] = var17;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var7 = var7.spacing;
            var9 = var7.PX_8;
            var7 = 2;
            var7 = var9 + var7;
            var4['paddingVertical'] = var7;
            var1['lg'] = var4;
            var4 = var1[var2];
            var1 = {};
            var2 = {};
            var7 = 1;
            var9 = var7;
            if(!var12) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var9 = 0.5;
case 15:
            var2['opacity'] = var9;
            var9 = 'auto';
            if(!var12) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = 'none';
case 17:
            var2['pointerEvents'] = var9;
            var9 = 'row';
            var2['flexDirection'] = var9;
            var9 = 0;
            if(!var16) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = var7;
case 19:
            var2['flexGrow'] = var9;
            var9 = 'center';
            var2['alignItems'] = var9;
            var1['container'] = var2;
            var2 = {};
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var18 = var16[var6];
            var18 = var17.bind(var5)(var18);
            var18 = var18.colors;
            var18 = var18.INPUT_BACKGROUND;
            var2['backgroundColor'] = var18;
            var1['background'] = var2;
            var2 = {};
            var16 = var16[var6];
            var16 = var17.bind(var5)(var16);
            var16 = var16.colors;
            var16 = var16.INPUT_PLACEHOLDER_TEXT;
            var2['color'] = var16;
            var1['placeholderText'] = var2;
            var2 = {};
            var2['minHeight'] = var15;
            var1['minHeight'] = var2;
            var2 = {};
            if(!var14) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var14 = var15.bind(var5)(var14);
            var14 = var14.radii;
            var13 = var14.round;
case 21:
            var2['borderRadius'] = var13;
            var1['radius'] = var2;
            var1['padding'] = var4;
            var2 = {};
            var20 = var2;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var8 = 'lineHeight';
            var2[var8] = var5;
            var13 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var13.bind(var5)(var8);
            var8 = var8.colors;
            if(var12) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var12 = var8.TEXT_NORMAL;
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var12 = var8.TEXT_MUTED;
case 25:
            var8 = 'color';
            var2[var8] = var12;
            var8 = 'flexGrow';
            var2[var8] = var7;
            var1['text'] = var2;
            var2 = {'position': 'absolute', 'left': 0};
            var20 = var2;
            var19 = var4;
            var8 = copyDataProperties(var20, var19);
            var8 = 'paddingEnd';
            var2[var8] = var11;
            var13 = 'zIndex';
            var2[var13] = var7;
            var8 = 'none';
            var12 = 'pointerEvents';
            var2[var12] = var8;
            var1['leadingText'] = var2;
            var2 = {'position': 'absolute', 'right': 0};
            var20 = var2;
            var19 = var4;
            var14 = copyDataProperties(var20, var19);
            var14 = 'paddingStart';
            var2[var14] = var11;
            var2[var13] = var7;
            var2[var12] = var8;
            var1['trailingText'] = var2;
            var2 = {'position': 'absolute', 'left': 0, 'top': 0, 'bottom': 0};
            var2['paddingTop'] = var10;
            var2['paddingBottom'] = var10;
            var2['paddingStart'] = var10;
            var2['paddingEnd'] = var11;
            var2['justifyContent'] = var9;
            var2['zIndex'] = var7;
            var2['pointerEvents'] = var8;
            var1['leadingIcon'] = var2;
            var2 = {'position': 'absolute', 'right': 0, 'top': 0, 'bottom': 0};
            var2['paddingTop'] = var10;
            var2['paddingBottom'] = var10;
            var2['paddingStart'] = var11;
            var2['paddingEnd'] = var10;
            var2['justifyContent'] = var9;
            var2['zIndex'] = var7;
            var2['pointerEvents'] = var8;
            var1['trailingIcon'] = var2;
            var2 = {};
            var20 = var2;
            var19 = var4;
            var4 = copyDataProperties(var20, var19);
            var4 = 'borderRightWidth';
            var2[var4] = var7;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var4 = var3.DIVIDER_STRONG;
            var3 = 'borderRightColor';
            var2[var3] = var4;
            var1['splitBorder'] = var2;
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot8 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyleProperties;
    var5 = {};
    var10 = 5;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_DANGER;
    var5['error'] = var12;
    var12 = 'transparent';
    var5['default'] = var12;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INPUT_FOCUSED_BORDER;
    var5['focused'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG)};}";
    var5['code'] = var8;
    var _closure1_slot10 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Input/native/InputFieldContainer.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useInputStyles'] = var4;
    var2 = function InputFieldContainer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot9;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var _closure2_slot0 = var13;
            var2 = var5.isFocused;
            var8 = var4 !== var2;
            if(!var8) { _fun0003_ip = 14; continue _fun0003 }
case 26:
            var8 = var2;
case 14:
            var _closure2_slot1 = var8;
            var2 = var5.status;
            var14 = 'default';
            if(!(var4 !== var2)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var14 = var2;
case 27:
            var _closure2_slot2 = var14;
            var6 = var5.children;
            var3 = _closure1_slot11;
            var2 = {};
            var7 = var5.size;
            var2['size'] = var7;
            var7 = var5.isRound;
            var2['isRound'] = var7;
            var7 = var5.isDisabled;
            var2['isDisabled'] = var7;
            var7 = var5.grow;
            var2['grow'] = var7;
            var7 = var5.leadingIcon;
            var5 = null;
            var5 = var5 != var7;
            var2['hasLeadingIcon'] = var5;
            var11 = var3.bind(var4)(var2);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 7;
            var2 = var12[var5];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function s() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = 'default';
                    if(!(var2 === var3)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var2 = _closure2_slot1;
                    var5 = 'transparent';
                    var10 = 0;
                    if(!var2) { _fun0004_ip = 28; continue _fun0004 }
case 5:
                    var2 = _closure2_slot0;
                    var5 = var2.focused;
                    var10 = 1;
                    _fun0004_ip = 28; continue _fun0004;
case 29:
                    var1 = _closure2_slot0;
                    var5 = var1.error;
                    var10 = 2;
case 28:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var8 = var7[var2];
                    var3 = undefined;
                    var9 = var6.bind(var3)(var8);
                    var8 = var9.withSpring;
                    var4 = _closure1_slot7;
                    var8 = var8.bind(var9)(var10, var4);
                    var1['borderWidth'] = var8;
                    var2 = var7[var2];
                    var3 = var6.bind(var3)(var2);
                    var2 = var3.withSpring;
                    var2 = var2.bind(var3)(var5, var4);
                    var1['borderColor'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['status'] = var14;
            var7['ringColors'] = var13;
            var7['isFocused'] = var8;
            var8 = 8;
            var8 = var12[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.withSpring;
            var7['withSpring'] = var8;
            var8 = _closure1_slot7;
            var7['RING_SPRING_CONFIG'] = var8;
            var1['__closure'] = var7;
            var7 = 16944298057521.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot10;
            var1['__initData'] = var7;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var11.container;
            var7 = new Array(4);
            var7[0] = var8;
            var8 = var11.background;
            var7[1] = var8;
            var8 = var11.radius;
            var7[2] = var8;
            var8 = var11.minHeight;
            var7[3] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var9 = _closure1_slot3;
            var12 = var9.absoluteFill;
            var9 = new Array(3);
            var9[0] = var12;
            var11 = var11.radius;
            var9[1] = var11;
            var9[2] = var10;
            var5['style'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['InputFieldContainer'] = var2;
    return var1;
})();