// app/design/components/Button/native/BaseButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = ['style'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Pressable;
    var9 = var4.TouchableOpacity;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IOS_POINTER_STYLE;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = {};
            var1 = 'secondary';
            if(!(var1 !== var2)) { _fun0001_ip = 62; continue _fun0001 }
 13:
            var1 = 'primary-overlay';
            if(!(var1 === var2)) { _fun0001_ip = 99; continue _fun0001 }
 23:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.shadows;
            var3 = var1.SHADOW_BUTTON_OVERLAY;
            _fun0001_ip = 99; continue _fun0001;
 62:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.shadows;
            var3 = var1.SHADOW_LOW;
 99:
            var1 = {};
            var2 = {};
            var6 = var2;
            var5 = var3;
            var3 = copyDataProperties(var6, var5);
            var1['button'] = var2;
            var2 = {};
            var3 = 0.5;
            var2['opacity'] = var3;
            var1['disabled'] = var2;
            return var1;
        }
    };
    var4 = var10.bind(var11)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var10 = var6[var4];
    var11 = var8.bind(var1)(var10);
    var10 = var11.createAnimatedComponent;
    var10 = var10.bind(var11)(var12);
    var _closure1_slot9 = var10;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var4 = var8.createAnimatedComponent;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot10 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var24 = arg2;
            var30 = var1.children;
            var27 = var1.style;
            var32 = var1.variant;
            var4 = undefined;
            if(!(var32 === var4)) { _fun0002_ip = 33; continue _fun0002 }
 29:
            var32 = 'primary';
 33:
            var3 = var1.disabled;
            if(!(var3 === var4)) { _fun0002_ip = 44; continue _fun0002 }
 42:
            var3 = false;
 44:
            var6 = var1.loading;
            if(!(var6 === var4)) { _fun0002_ip = 56; continue _fun0002 }
 54:
            var6 = false;
 56:
            var _closure2_slot0 = var6;
            var11 = var1.pressed;
            var2 = var1.onPress;
            var10 = var1.onPressDisabled;
            var28 = var1.onPressIn;
            var22 = var1.onPressOut;
            var9 = var1.onLongPress;
            var31 = var1.onLayout;
            var23 = var1.accessible;
            var5 = var1.accessibilityRole;
            var20 = var1.accessibilityLabel;
            var19 = var1.accessibilityHint;
            var18 = var1.accessibilityValue;
            var29 = var1.accessibilityState;
            var _closure2_slot1 = var29;
            var16 = var1.accessibilityActions;
            var15 = var1.onAccessibilityAction;
            var14 = var1.accessibilityElementsHidden;
            var13 = var1.importantForAccessibility;
            var12 = var1.pointerEvents;
            var7 = var1.hitSlop;
            var33 = var1.scaleAmountInPx;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var8 = _closure1_slot8;
            var25 = var8.bind(var4)(var32);
            var8 = var3;
            if(!var3) { _fun0002_ip = 213; continue _fun0002 }
 207:
            var17 = null;
            var8 = var17 == var10;
 213:
            _closure2_slot2 = var8;
            if(!var3) { _fun0002_ip = 223; continue _fun0002 }
 220:
            var2 = var10;
 223:
            var21 = null;
            var17 = var21 != var2;
            var10 = undefined;
            if(!var17) { _fun0002_ip = 237; continue _fun0002 }
 234:
            var10 = var2;
 237:
            var17 = _closure1_slot0;
            var34 = _closure1_slot2;
            var2 = 8;
            var2 = var34[var2];
            var17 = var17.bind(var4)(var2);
            var2 = var17.useButtonPressAnimationProps;
            var40 = var17;
            var39 = var11;
            var38 = var33;
            var37 = var31;
            var36 = var28;
            var35 = var22;
            var34 = var40[var2](var39, var38, var37, var36, var35, var34);
            var17 = var34.style;
            var33 = _closure1_slot4;
            var2 = _closure1_slot3;
            var2 = var33.bind(var4)(var34, var2);
            if(!(var21 != var11)) { _fun0002_ip = 322; continue _fun0002 }
 308:
            var11 = {};
            var11['animatedScaleStyles'] = var17;
            var11['buttonAnimationProps'] = var2;
            _fun0002_ip = 354; continue _fun0002;
 322:
            var2 = {};
            var2['animatedScaleStyles'] = var4;
            var17 = {};
            var17['onLayout'] = var31;
            var17['onPressIn'] = var28;
            var17['onPressOut'] = var22;
            var2['buttonAnimationProps'] = var17;
            var11 = var2;
 354:
            var2 = var11.animatedScaleStyles;
            var22 = var11.buttonAnimationProps;
            _closure2_slot3 = var22;
            var28 = _closure1_slot5;
            var17 = var28.useMemo;
            var11 = new Array(3);
            var11[0] = var29;
            var11[1] = var8;
            var11[2] = var6;
            var6 = function() {
                var1 = {};
                var5 = _closure2_slot1;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure2_slot2;
                var3 = 'disabled';
                var1[var3] = var4;
                var3 = _closure2_slot0;
                var2 = 'busy';
                var1[var2] = var3;
                return var1;
            };
            var17 = var17.bind(var28)(var6, var11);
            var11 = _closure1_slot0;
            var28 = _closure1_slot2;
            var6 = 5;
            var6 = var28[var6];
            var11 = var11.bind(var4)(var6);
            var6 = var11.useThemeContext;
            var6 = var6.bind(var11)();
            var28 = var6.theme;
            var11 = 'light';
            var6 = 'primary-overlay';
            var31 = var11;
            if(!(var6 !== var32)) { _fun0002_ip = 484; continue _fun0002 }
 459:
            var29 = 'secondary-overlay';
            var6 = undefined;
            if(!(var29 === var32)) { _fun0002_ip = 481; continue _fun0002 }
 471:
            var6 = undefined;
            if(!(var11 === var28)) { _fun0002_ip = 481; continue _fun0002 }
 477:
            var6 = 'dark';
 481:
            var31 = var6;
 484:
            var6 = var30;
            if(!(var21 != var31)) { _fun0002_ip = 538; continue _fun0002 }
 491:
            var29 = _closure1_slot7;
            var28 = _closure1_slot0;
            var32 = _closure1_slot2;
            var11 = 10;
            var11 = var32[var11];
            var11 = var28.bind(var4)(var11);
            var28 = var11.ThemeContextProvider;
            var11 = {};
            var11['theme'] = var31;
            var11['children'] = var30;
            var6 = var29.bind(var4)(var28, var11);
 538:
            var28 = var25.button;
            var11 = new Array(5);
            var11[0] = var28;
            var11[1] = var27;
            if(!var3) { _fun0002_ip = 564; continue _fun0002 }
 559:
            var3 = var25.disabled;
 564:
            var11[2] = var3;
            var11[3] = var2;
            var2 = _closure1_slot6;
            var11[4] = var2;
            var29 = 'none';
            if(!(var29 === var5)) { _fun0002_ip = 864; continue _fun0002 }
 591:
            var28 = '';
            if(var14) { _fun0002_ip = 662; continue _fun0002 }
 598:
            var25 = new Array(2);
            var25[0] = var20;
            var25[1] = var19;
            var3 = var25.filter;
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var2 = 11;
            var2 = var30[var2];
            var2 = var27.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var25 = var3.bind(var25)(var2);
            var3 = var25.join;
            var2 = ', ';
            var28 = var3.bind(var25)(var2);
 662:
            var25 = _closure1_slot7;
            var3 = _closure1_slot10;
            var2 = {};
            var39 = var2;
            var38 = var22;
            var27 = copyDataProperties(var39, var38);
            var27 = 'ref';
            var2[var27] = var24;
            var27 = var23;
            if(!(var21 == var27)) { _fun0002_ip = 727; continue _fun0002 }
 698:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 12;
            var30 = var32[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var31.isAndroid;
            var27 = var30.bind(var31)();
 727:
            var30 = !var27;
            if(!var30) { _fun0002_ip = 735; continue _fun0002 }
 733:
            var30 = undefined;
 735:
            var27 = 'accessible';
            var2[var27] = var30;
            var27 = 'accessibilityRole';
            var2[var27] = var29;
            var27 = 'accessibilityLabel';
            var2[var27] = var28;
            var27 = 'accessibilityElementsHidden';
            var2[var27] = var14;
            var28 = 1;
            var27 = 'activeOpacity';
            var2[var27] = var28;
            var27 = 'importantForAccessibility';
            var2[var27] = var13;
            var27 = 'style';
            var2[var27] = var11;
            var27 = 'onPress';
            var2[var27] = var10;
            var28 = function onPressIn(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.onPressIn;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 37; continue _fun0003 }
 19:
                    var3 = _closure2_slot3;
                    var2 = var3.onPressIn;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = 'onPressIn';
            var2[var27] = var28;
            var27 = function onPressOut(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.onPressOut;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 37; continue _fun0004 }
 19:
                    var3 = _closure2_slot3;
                    var2 = var3.onPressOut;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = 'onPressOut';
            var2[var26] = var27;
            var26 = 'hitSlop';
            var2[var26] = var7;
            var26 = 'children';
            var2[var26] = var6;
            var2 = var25.bind(var4)(var3, var2);
            return var2;
 864:
            var3 = _closure1_slot7;
            var2 = _closure1_slot9;
            var1 = {};
            var39 = var1;
            var38 = var22;
            var22 = copyDataProperties(var39, var38);
            var22 = 'ref';
            var1[var22] = var24;
            var22 = 'accessible';
            var1[var22] = var23;
            var22 = var21 != var5;
            var21 = 'button';
            if(!var22) { _fun0002_ip = 916; continue _fun0002 }
 913:
            var21 = var5;
 916:
            var5 = 'accessibilityRole';
            var1[var5] = var21;
            var5 = 'accessibilityLabel';
            var1[var5] = var20;
            var5 = 'accessibilityHint';
            var1[var5] = var19;
            var5 = 'accessibilityValue';
            var1[var5] = var18;
            var5 = 'accessibilityState';
            var1[var5] = var17;
            var5 = 'accessibilityActions';
            var1[var5] = var16;
            var5 = 'onAccessibilityAction';
            var1[var5] = var15;
            var5 = 'accessibilityElementsHidden';
            var1[var5] = var14;
            var5 = 'importantForAccessibility';
            var1[var5] = var13;
            var5 = 'pointerEvents';
            var1[var5] = var12;
            var5 = 'style';
            var1[var5] = var11;
            var5 = 'onPress';
            var1[var5] = var10;
            var5 = 'onLongPress';
            var1[var5] = var9;
            var5 = 'disabled';
            var1[var5] = var8;
            var5 = 'hitSlop';
            var1[var5] = var7;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/BaseButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseButton'] = var2;
    return var1;
})();