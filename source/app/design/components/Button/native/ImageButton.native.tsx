// app/design/components/Button/native/ImageButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = var1.LARGE_BUTTON_PADDING;
            var1 = 'sm';
            if(!(var1 !== var4)) { _fun0001_ip = 75; continue _fun0001 }
 42:
            var1 = 'md';
            if(!(var1 === var4)) { _fun0001_ip = 98; continue _fun0001 }
 50:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var2 = var1.MEDIUM_BUTTON_PADDING;
            _fun0001_ip = 98; continue _fun0001;
 75:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var2 = var1.SMALL_BUTTON_PADDING;
 98:
            var1 = 2;
            var2 = var1 * var2;
            var1 = arg2;
            var4 = var1 + var2;
            var1 = {};
            var2 = {};
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 5;
            var9 = var7[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_4;
            var2['paddingBottom'] = var9;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['gap'] = var7;
            var7 = 'center';
            var2['alignItems'] = var7;
            var2['alignSelf'] = var7;
            var8 = arg3;
            var7 = 0;
            if(!var8) { _fun0001_ip = 201; continue _fun0001 }
 198:
            var7 = 1;
 201:
            var2['flexGrow'] = var7;
            var1['labelPressable'] = var2;
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var4;
            var1['button'] = var2;
            var2 = {'paddingHorizontal': 0, 'paddingVertical': 0};
            var2['minHeight'] = var4;
            var2['minWidth'] = var4;
            var1['pill'] = var2;
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var4;
            var7 = 'relative';
            var2['position'] = var7;
            var1['imageWrapper'] = var2;
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var4;
            var1['image'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND;
            var2['backgroundColor'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var1['imageDim'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}";
    var4['code'] = var8;
    var _closure1_slot9 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var12 = arg1;
            var21 = arg2;
            var2 = var12.size;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 23; continue _fun0002 }
 19:
            var2 = 'lg';
 23:
            var10 = var12.label;
            var13 = var12.grow;
            var22 = var12.image;
            var7 = var12.accessibilityLabel;
            var11 = var12.maxFontSizeMultiplier;
            var8 = var12.onPressIn;
            var _closure2_slot0 = var8;
            var4 = var12.onPressOut;
            var _closure2_slot1 = var4;
            var9 = {'size': 0, 'label': 0, 'grow': 0, 'image': 0, 'accessibilityLabel': 0, 'maxFontSizeMultiplier': 0, 'onPressIn': 0, 'onPressOut': 0};
            var1 = null;
            var25 = var9;
            var24 = null;
            var6 = silentSetPrototypeOf(var25, var24);
            var15 = 0;
            var25 = {};
            var24 = var12;
            var23 = var9;
            var17 = copyDataProperties(var25, var24, var23);
            var _closure2_slot2 = var5;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 6;
            var9 = var19[var9];
            var14 = var18.bind(var5)(var9);
            var12 = var14.useIconSizeStyles;
            var9 = true;
            var9 = var12.bind(var14)(var2, var9, var11);
            var12 = _closure1_slot8;
            var9 = var9.width;
            var13 = var12.bind(var5)(var2, var9, var13);
            var12 = 7;
            var9 = var19[var12];
            var14 = var18.bind(var5)(var9);
            var9 = var14.useSharedValue;
            var16 = var9.bind(var14)(var15);
            _closure2_slot2 = var16;
            var14 = _closure1_slot3;
            var15 = var14.useCallback;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var8;
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var2 = 1;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 44; continue _fun0003 }
 30:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var15.bind(var14)(var8, var9);
            var9 = var14.useCallback;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var4;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 43; continue _fun0004 }
 29:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var9.bind(var14)(var4, var8);
            var4 = var19[var12];
            var8 = var18.bind(var5)(var4);
            var4 = var8.useAnimatedStyle;
            var3 = function R() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.withSpring;
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var8 = var3.bind(var4)();
                    var3 = 1;
                    var4 = 0;
                    if(!(var3 === var8)) { _fun0005_ip = 60; continue _fun0005 }
 57:
                    var4 = var3;
 60:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.ON_PRESS_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var20 = 8;
            var20 = var19[var20];
            var20 = var18.bind(var5)(var20);
            var20 = var20.withSpring;
            var9['withSpring'] = var20;
            var9['pressed'] = var16;
            var16 = 9;
            var16 = var19[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.ON_PRESS_SPRING;
            var9['ON_PRESS_SPRING'] = var16;
            var3['__closure'] = var9;
            var9 = 17257158773379.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot9;
            var3['__initData'] = var9;
            var20 = var4.bind(var8)(var3);
            var8 = _closure1_slot7;
            var4 = _closure1_slot4;
            var3 = {};
            var9 = var13.imageWrapper;
            var3['style'] = var9;
            var18 = _closure1_slot6;
            var16 = _closure1_slot5;
            var9 = {};
            var9['source'] = var22;
            var22 = var13.image;
            var9['style'] = var22;
            var16 = var18.bind(var5)(var16, var9);
            var9 = new Array(2);
            var9[0] = var16;
            var16 = _closure1_slot1;
            var12 = var19[var12];
            var12 = var16.bind(var5)(var12);
            var16 = var12.View;
            var12 = {};
            var22 = var13.imageDim;
            var19 = new Array(2);
            var19[0] = var22;
            var19[1] = var20;
            var12['style'] = var19;
            var12 = var18.bind(var5)(var16, var12);
            var9[1] = var12;
            var3['children'] = var9;
            var20 = var8.bind(var5)(var4, var3);
            var8 = var2;
            if(!(var1 == var10)) { _fun0002_ip = 622; continue _fun0002 }
 492:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.BaseIconButton;
            var1 = {};
            var1['ref'] = var21;
            var25 = var1;
            var24 = var17;
            var4 = copyDataProperties(var25, var24);
            var4 = 'size';
            var1[var4] = var8;
            var4 = 'icon';
            var1[var4] = var20;
            var4 = 'accessibilityLabel';
            var1[var4] = var7;
            var8 = var13.pill;
            var4 = 'pillStyle';
            var1[var4] = var8;
            var8 = 'secondary';
            var4 = 'variant';
            var1[var4] = var8;
            var4 = 'onPressIn';
            var1[var4] = var15;
            var4 = 'onPressOut';
            var1[var4] = var14;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 904; continue _fun0002;
 622:
            var4 = _closure1_slot7;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 10;
            var2 = var12[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.BaseButton;
            var2 = {};
            var9 = var13.labelPressable;
            var2['style'] = var9;
            var25 = var2;
            var24 = var17;
            var9 = copyDataProperties(var25, var24);
            var19 = 'none';
            var16 = 'variant';
            var2[var16] = var19;
            var18 = 'accessibilityLabel';
            var2[var18] = var7;
            var9 = _closure1_slot6;
            var6 = 11;
            var6 = var12[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.BaseIconButton;
            var6 = {};
            var6['ref'] = var21;
            var25 = var6;
            var24 = var17;
            var17 = copyDataProperties(var25, var24);
            var17 = 'icon';
            var6[var17] = var20;
            var17 = 'accessibilityRole';
            var6[var17] = var19;
            var17 = '';
            var6[var18] = var17;
            var18 = 'lg';
            var17 = 'size';
            var6[var17] = var18;
            var17 = var13.pill;
            var13 = 'pillStyle';
            var6[var13] = var17;
            var13 = 'secondary';
            var6[var16] = var13;
            var13 = 'onPressIn';
            var6[var13] = var15;
            var13 = 'onPressOut';
            var6[var13] = var14;
            var13 = 'maxFontSizeMultiplier';
            var6[var13] = var11;
            var6 = var9.bind(var5)(var7, var6);
            var7 = new Array(2);
            var7[0] = var6;
            var6 = 12;
            var6 = var12[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-xs/medium', 'color': 'interactive-normal'};
            var6['maxFontSizeMultiplier'] = var11;
            var6['children'] = var10;
            var6 = var9.bind(var5)(var8, var6);
            var7[1] = var6;
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 904:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/ImageButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ImageButton'] = var2;
    return var1;
})();