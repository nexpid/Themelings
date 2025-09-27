// app/design/components/Button/native/BaseTextButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function CollapsingText(arg1) {
        var2 = arg1;
        var8 = var2.children;
        var3 = var2.collapseText;
        var2 = _closure1_slot9;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 5;
        var2 = var10[var5];
        var11 = var9.bind(var4)(var2);
        var6 = var11.useSharedValue;
        var2 = 0;
        var2 = var6.bind(var11)(var2);
        var _closure2_slot0 = var2;
        var6 = var10[var5];
        var13 = var9.bind(var4)(var6);
        var11 = var13.useWorkletCallback;
        var9 = function o(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var2 = var1.nativeEvent;
                var4 = _closure2_slot0;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = 0;
                if(!(var3 === var4)) { _fun0001_ip = 55; continue _fun0001 }
 30:
                var2 = var2.layout;
                var3 = var2.width;
                var2 = _closure2_slot0;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
 55:
                var1 = undefined;
                return var1;
            }
        };
        var6 = {};
        var6['containerWidth'] = var2;
        var9['__closure'] = var6;
        var6 = 5541458715155.0;
        var9['__workletHash'] = var6;
        var6 = _closure1_slot13;
        var9['__initData'] = var6;
        var6 = new Array(1);
        var6[0] = var2;
        var11 = var11.bind(var13)(var9, var6);
        var6 = function useCollapsingTextContainerStyles(arg1, arg2) {
            var10 = arg1;
            var6 = arg2;
            var _closure3_slot0 = var10;
            var _closure3_slot1 = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var7 = undefined;
            var3 = var8.bind(var7)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function o() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    if(!(var7 !== var1)) { _fun0002_ip = 204; continue _fun0002 }
 25:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var11 = 7;
                    var3 = var3[var11];
                    var8 = undefined;
                    var15 = var4.bind(var8)(var3);
                    var14 = var15.withSpring;
                    var4 = _closure3_slot1;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var6 = 1;
                    var13 = 0;
                    if(!(var6 !== var3)) { _fun0002_ip = 92; continue _fun0002 }
 79:
                    var4 = _closure3_slot0;
                    var3 = var4.get;
                    var13 = var3.bind(var4)();
 92:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 8;
                    var5 = var3[var9];
                    var5 = var4.bind(var8)(var5);
                    var12 = var5.SUBTLE_SPRING;
                    var5 = 'animate-always';
                    var12 = var14.bind(var15)(var13, var12, var5);
                    var1['width'] = var12;
                    var3 = var3[var11];
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.withSpring;
                    var11 = _closure3_slot1;
                    var10 = var11.get;
                    var10 = var10.bind(var11)();
                    if(!(var6 === var10)) { _fun0002_ip = 168; continue _fun0002 }
 166:
                    var6 = 0;
 168:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var3.bind(var4)(var6, var2, var5);
                    var1['opacity'] = var2;
                    _fun0002_ip = 206; continue _fun0002;
 204:
                    var1 = {};
 206:
                    return var1;
                }
            };
            var5 = {};
            var5['containerWidth'] = var10;
            var10 = 7;
            var10 = var9[var10];
            var10 = var8.bind(var7)(var10);
            var10 = var10.withSpring;
            var5['withSpring'] = var10;
            var5['collapsed'] = var6;
            var6 = 8;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.SUBTLE_SPRING;
            var5['SUBTLE_SPRING'] = var6;
            var1['__closure'] = var5;
            var5 = 493185281611.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot14;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var13 = var6.bind(var4)(var2, var3);
        var1 = function useCollapsingTextStyles(arg1, arg2) {
            var6 = arg1;
            var8 = arg2;
            var _closure3_slot0 = var6;
            var _closure3_slot1 = var8;
            var2 = _closure1_slot9;
            var5 = undefined;
            var2 = var2.bind(var5)();
            var7 = var2.textCollapsed;
            var _closure3_slot2 = var7;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function l() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure3_slot1;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0003_ip = 59; continue _fun0003 }
 22:
                    var1 = {};
                    var4 = _closure3_slot2;
                    var5 = var1;
                    var3 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'width';
                    var1[var2] = var3;
                    _fun0003_ip = 61; continue _fun0003;
 59:
                    var1 = {};
 61:
                    return var1;
                }
            };
            var5 = {};
            var5['collapsed'] = var8;
            var5['textCollapsed'] = var7;
            var5['containerWidth'] = var6;
            var1['__closure'] = var5;
            var5 = 5824483783888.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot15;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var1.bind(var4)(var2, var3);
        var3 = _closure1_slot6;
        var6 = _closure1_slot1;
        var1 = var10[var5];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var14 = var12.container;
        var12 = new Array(2);
        var12[0] = var14;
        var12[1] = var13;
        var1['style'] = var12;
        var1['onLayout'] = var11;
        var7 = _closure1_slot6;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.View;
        var5 = {};
        var5['style'] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var10 = function getHitSlop(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 9;
            var2 = var2[var7];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.LARGE_BUTTON_HEIGHT;
            var4 = 'sm';
            if(!(var4 !== var5)) { _fun0004_ip = 75; continue _fun0004 }
 42:
            var4 = 'md';
            if(!(var4 === var5)) { _fun0004_ip = 98; continue _fun0004 }
 50:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var3)(var4);
            var2 = var4.MEDIUM_BUTTON_HEIGHT;
            _fun0004_ip = 98; continue _fun0004;
 75:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var3)(var4);
            var2 = var4.SMALL_BUTTON_HEIGHT;
 98:
            var4 = global;
            var5 = var4.Math;
            var4 = var5.max;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var6.bind(var3)(var1);
            var1 = var1.MINIMUM_HIT_AREA;
            var2 = var1 - var2;
            var1 = 2;
            var2 = var2 / var1;
            var1 = 0;
            var2 = var4.bind(var5)(var2, var1);
            var1 = {};
            var1['top'] = var2;
            var1['left'] = var3;
            var1['right'] = var3;
            var1['bottom'] = var2;
            return var1;
        }
    };
    var1 = function BaseTextButtonIcon(arg1) {
        var1 = arg1;
        var5 = var1.icon;
        var9 = var1.size;
        var6 = var1.iconPosition;
        var3 = var1.iconOpticalOffsetMargin;
        var8 = var1.style;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 10;
        var2 = var4[var2];
        var4 = undefined;
        var7 = var7.bind(var4)(var2);
        var2 = var7.useIconSizeStyles;
        var7 = var2.bind(var7)(var9);
        var2 = _closure1_slot16;
        var6 = var2.bind(var4)(var6, var3);
        var3 = _closure1_slot6;
        var2 = _closure1_slot11;
        var1 = {};
        var1['source'] = var5;
        var5 = new Array(3);
        var5[0] = var8;
        var5[1] = var7;
        var6 = var6.offset;
        var5[2] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var _closure1_slot3 = var9;
    var15 = 1;
    var7 = var6[var15];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Platform;
    var8 = var7.Text;
    var _closure1_slot4 = var8;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot6 = var8;
    var7 = var7.jsxs;
    var _closure1_slot7 = var7;
    var7 = 3;
    var8 = var6[var7];
    var12 = var5.bind(var1)(var8);
    var11 = var12.createStyles;
    var8 = function(arg1, arg2) {
        var1 = {};
        var3 = 1;
        var2 = {'flexGrow': 1, 'alignSelf': 'stretch'};
        var1['grow'] = var2;
        var2 = {};
        var2['flexShrink'] = var3;
        var1['shrink'] = var2;
        var2 = {'flexShrink': 1, 'flexGrow': 0};
        var6 = _closure1_slot18;
        var5 = undefined;
        var4 = arg2;
        var3 = arg1;
        var3 = var6.bind(var5)(var4, var3);
        var2['lineHeight'] = var3;
        var1['buttonText'] = var2;
        var2 = {'flexShrink': 0, 'flexGrow': 0};
        var1['icon'] = var2;
        var2 = {};
        var3 = 4;
        var2['paddingLeft'] = var3;
        var1['iconLeft'] = var2;
        var2 = {};
        var2['paddingRight'] = var3;
        var1['iconRight'] = var2;
        return var1;
    };
    var8 = var11.bind(var12)(var8);
    var _closure1_slot8 = var8;
    var8 = var6[var7];
    var12 = var5.bind(var1)(var8);
    var11 = var12.createStyles;
    var8 = {};
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
    var8['container'] = var14;
    var14 = {'position': 'absolute', 'left': 0};
    var8['textCollapsed'] = var14;
    var8 = var11.bind(var12)(var8);
    var _closure1_slot9 = var8;
    var8 = var6[var7];
    var12 = var5.bind(var1)(var8);
    var11 = var12.createStyles;
    var8 = {};
    var14 = {};
    var14['borderWidth'] = var15;
    var15 = 4;
    var16 = var6[var15];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var14['borderRadius'] = var16;
    var15 = var6[var15];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var14['borderColor'] = var15;
    var15 = 'hidden';
    var14['overflow'] = var15;
    var8['entityWrapper'] = var14;
    var8 = var11.bind(var12)(var8);
    var _closure1_slot10 = var8;
    var8 = 5;
    var8 = var6[var8];
    var12 = var13.bind(var1)(var8);
    var11 = var12.createAnimatedComponent;
    var8 = 6;
    var8 = var6[var8];
    var8 = var13.bind(var1)(var8);
    var8 = var11.bind(var12)(var8);
    var _closure1_slot11 = var8;
    var11 = var9.createContext;
    var8 = 'md';
    var11 = var11.bind(var9)(var8);
    var _closure1_slot12 = var11;
    var11 = {};
    var12 = 'function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}';
    var11['code'] = var12;
    var _closure1_slot13 = var11;
    var11 = {};
    var12 = "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}";
    var11['code'] = var12;
    var _closure1_slot14 = var11;
    var11 = {};
    var12 = 'function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}';
    var11['code'] = var12;
    var _closure1_slot15 = var11;
    var7 = var6[var7];
    var12 = var5.bind(var1)(var7);
    var11 = var12.createStyles;
    var7 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0005_ip = 71; continue _fun0005 }
 12:
            var1 = 'start';
            if(!(var1 !== var2)) { _fun0005_ip = 55; continue _fun0005 }
 20:
            var1 = 'end';
            if(!(var1 !== var2)) { _fun0005_ip = 39; continue _fun0005 }
 28:
            var1 = {};
            var2 = {};
            var1['offset'] = var2;
            return var1;
 39:
            var1 = {};
            var2 = {};
            var2['marginRight'] = var3;
            var1['offset'] = var2;
            return var1;
 55:
            var1 = {};
            var2 = {};
            var2['marginLeft'] = var3;
            var1['offset'] = var2;
            return var1;
 71:
            var1 = {};
            var2 = {};
            var1['offset'] = var2;
            return var1;
        }
    };
    var7 = var11.bind(var12)(var7);
    var _closure1_slot16 = var7;
    var7 = {};
    var11 = 'sm';
    var11 = var10.bind(var1)(var11);
    var7['sm'] = var11;
    var8 = var10.bind(var1)(var8);
    var7['md'] = var8;
    var8 = 'lg';
    var8 = var10.bind(var1)(var8);
    var7['lg'] = var8;
    var _closure1_slot17 = var7;
    var7 = function getTextPlatformLineHeight(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            var1 = undefined;
            if(!var2) { _fun0006_ip = 66; continue _fun0006 }
 14:
            var3 = {};
            var3['sm'] = var4;
            var2 = 0.5;
            var2 = var4 + var2;
            var3['md'] = var2;
            var2 = 1.9;
            var2 = var4 + var2;
            var3['lg'] = var2;
            var2 = arg2;
            var1 = var3[var2];
 66:
            return var1;
        }
    };
    var _closure1_slot18 = var7;
    var8 = var9.forwardRef;
    var7 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var24 = arg1;
            var5 = var24.style;
            var9 = var24.pillStyle;
            var23 = var24.text;
            var20 = var24.textElement;
            var1 = var24.variant;
            var19 = 'primary';
            var4 = undefined;
            if(!(var4 !== var1)) { _fun0007_ip = 43; continue _fun0007 }
 40:
            var19 = var1;
 43:
            var16 = var24.size;
            if(!(var4 === var16)) { _fun0007_ip = 81; continue _fun0007 }
 52:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var16 = var1.DEFAULT_BUTTON_SIZE;
 81:
            var18 = var24.loading;
            var14 = var24.icon;
            var1 = var24.iconPosition;
            var11 = 'start';
            var15 = var11;
            if(!(var4 !== var1)) { _fun0007_ip = 112; continue _fun0007 }
 109:
            var15 = var1;
 112:
            var1 = var24.iconOpticalOffsetMargin;
            var13 = 0;
            var32 = 0;
            if(!(var4 !== var1)) { _fun0007_ip = 129; continue _fun0007 }
 126:
            var32 = var1;
 129:
            var1 = var24.grow;
            var27 = var4 !== var1;
            if(!var27) { _fun0007_ip = 145; continue _fun0007 }
 142:
            var27 = var1;
 145:
            var1 = var24.shrink;
            var25 = var4 !== var1;
            if(!var25) { _fun0007_ip = 161; continue _fun0007 }
 158:
            var25 = var1;
 161:
            var21 = var24.collapseText;
            var1 = var24.accessibilityRole;
            var22 = 'button';
            if(!(var4 !== var1)) { _fun0007_ip = 183; continue _fun0007 }
 180:
            var22 = var1;
 183:
            var7 = var24.accessibilityLabel;
            var28 = var24.maxFontSizeMultiplier;
            if(!(var4 === var28)) { _fun0007_ip = 227; continue _fun0007 }
 198:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var28 = var1.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
 227:
            var1 = var24.shiny;
            var8 = var4 !== var1;
            if(!var8) { _fun0007_ip = 243; continue _fun0007 }
 240:
            var8 = var1;
 243:
            var1 = var24.textVariant;
            var12 = null;
            if(!(var12 == var1)) { _fun0007_ip = 291; continue _fun0007 }
 255:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getButtonDefaultTextVariant;
            var6 = var1.bind(var2)(var16);
            _fun0007_ip = 297; continue _fun0007;
 291:
            var6 = var24.textVariant;
 297:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.TextStyleSheet;
            var31 = var1[var6];
            var6 = _closure1_slot8;
            var1 = var31.fontSize;
            var26 = var6.bind(var4)(var16, var1);
            var1 = _closure1_slot17;
            var6 = var1[var16];
            var1 = 5;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var1 = var10.useSharedValue;
            var10 = var1.bind(var10)(var13);
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useButtonTextColorStyles;
            var30 = var1.bind(var2)(var19);
            if(!(var12 != var14)) { _fun0007_ip = 423; continue _fun0007 }
 403:
            if(!(var11 !== var15)) { _fun0007_ip = 415; continue _fun0007 }
 407:
            var29 = var26.iconRight;
            _fun0007_ip = 421; continue _fun0007;
 415:
            var29 = var26.iconLeft;
 421:
            _fun0007_ip = 425; continue _fun0007;
 423:
            var29 = {};
 425:
            if(!(var12 != var14)) { _fun0007_ip = 450; continue _fun0007 }
 429:
            var2 = _closure1_slot3;
            var1 = var2.isValidElement;
            var1 = var1.bind(var2)(var14);
            var13 = var14;
            if(var1) { _fun0007_ip = 517; continue _fun0007 }
 450:
            var3 = _closure1_slot6;
            var2 = _closure1_slot20;
            var1 = {};
            var1['icon'] = var14;
            var1['size'] = var16;
            var34 = var26.icon;
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var35 = var30.color;
            var34['tintColor'] = var35;
            var33[1] = var34;
            var1['style'] = var33;
            var1['iconOpticalOffsetMargin'] = var32;
            var1['iconPosition'] = var15;
            var13 = var3.bind(var4)(var2, var1);
 517:
            if(!(var12 == var20)) { _fun0007_ip = 584; continue _fun0007 }
 521:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['maxFontSizeMultiplier'] = var28;
            var28 = 1;
            var1['numberOfLines'] = var28;
            var32 = var26.buttonText;
            var28 = new Array(4);
            var28[0] = var32;
            var28[1] = var31;
            var28[2] = var30;
            var28[3] = var29;
            var1['style'] = var28;
            var1['children'] = var23;
            var20 = var3.bind(var4)(var2, var1);
 584:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var28 = _closure1_slot2;
            var1 = 12;
            var1 = var28[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseButton;
            var1 = {};
            var28 = arg2;
            var1['ref'] = var28;
            var37 = var1;
            var36 = var24;
            var24 = copyDataProperties(var37, var36);
            if(!var27) { _fun0007_ip = 642; continue _fun0007 }
 636:
            var27 = var26.grow;
 642:
            var24 = new Array(3);
            var24[0] = var27;
            if(!var25) { _fun0007_ip = 659; continue _fun0007 }
 653:
            var25 = var26.shrink;
 659:
            var24[1] = var25;
            var24[2] = var5;
            var5 = 'style';
            var1[var5] = var24;
            var5 = 'pressed';
            var1[var5] = var10;
            var5 = 'accessibilityRole';
            var1[var5] = var22;
            if(!(var12 == var7)) { _fun0007_ip = 729; continue _fun0007 }
 698:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var5 = 13;
            var5 = var24[var5];
            var22 = var22.bind(var4)(var5);
            var5 = var22.getNodeText;
            var7 = var5.bind(var22)(var23);
 729:
            var5 = 'accessibilityLabel';
            var1[var5] = var7;
            var5 = 'hitSlop';
            var1[var5] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 14;
            var5 = var22[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ButtonPill;
            var5 = {};
            var5['variant'] = var19;
            var5['size'] = var16;
            var5['loading'] = var18;
            var5['pressed'] = var10;
            var5['style'] = var9;
            var5['shiny'] = var8;
            var10 = _closure1_slot7;
            var8 = _closure1_slot12;
            var9 = var8.Provider;
            var8 = {};
            var8['value'] = var16;
            var16 = var12 != var14;
            if(!var16) { _fun0007_ip = 837; continue _fun0007 }
 833:
            var16 = var11 === var15;
 837:
            if(!var16) { _fun0007_ip = 843; continue _fun0007 }
 840:
            var16 = var13;
 843:
            var11 = new Array(3);
            var11[0] = var16;
            var16 = var20;
            if(!(var4 !== var21)) { _fun0007_ip = 883; continue _fun0007 }
 858:
            var19 = _closure1_slot6;
            var18 = _closure1_slot19;
            var17 = {};
            var17['collapseText'] = var21;
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 883:
            var11[1] = var16;
            var12 = var12 != var14;
            if(!var12) { _fun0007_ip = 902; continue _fun0007 }
 894:
            var14 = 'end';
            var12 = var14 === var15;
 902:
            if(!var12) { _fun0007_ip = 908; continue _fun0007 }
 905:
            var12 = var13;
 908:
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var9 = var8.bind(var9)(var7);
    var8 = var4.Object;
    var7 = var8.assign;
    var4 = {};
    var2 = function TextButtonIcon(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var10 = var1.source;
            var4 = var1.variant;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0008_ip = 23; continue _fun0008 }
 19:
            var4 = 'icon';
 23:
            var9 = var1.disableColor;
            if(!(var9 === var5)) { _fun0008_ip = 35; continue _fun0008 }
 33:
            var9 = true;
 35:
            var6 = _closure1_slot3;
            var3 = var6.useContext;
            var1 = _closure1_slot12;
            var6 = var3.bind(var6)(var1);
            var1 = _closure1_slot10;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useIconSizeStyles;
            var8 = var1.bind(var3)(var6);
            var6 = _closure1_slot6;
            var3 = _closure1_slot11;
            var1 = {};
            var1['source'] = var10;
            var1['disableColor'] = var9;
            var1['style'] = var8;
            var6 = var6.bind(var5)(var3, var1);
            var3 = 'entity';
            var1 = var6;
            if(!(var3 === var4)) { _fun0008_ip = 168; continue _fun0008 }
 138:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.entityWrapper;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 168:
            return var1;
        }
    };
    var4['Icon'] = var2;
    var2 = {};
    var2 = var7.bind(var8)(var2, var9, var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/BaseTextButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseTextButton'] = var2;
    return var1;
})();