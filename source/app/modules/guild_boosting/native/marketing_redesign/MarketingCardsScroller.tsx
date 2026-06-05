// app/modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function getClampedIndex(arg1, arg2) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var6 = var1.Math;
        var5 = var6.min;
        var2 = arg2;
        var1 = 1;
        var2 = var2 - var1;
        var1 = arg1;
        var2 = var5.bind(var6)(var2, var1);
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var8 = var4.ScrollView;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'relative';
    var10['position'] = var11;
    var4['wrapper'] = var10;
    var10 = {'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'height': 44, 'justifyContent': 'center', 'position': 'absolute', 'top': '50%', 'transform': null, 'width': 44, 'zIndex': 1};
    var11 = 6;
    var11 = var6[var11];
    var16 = var5.bind(var1)(var11);
    var15 = var16.hexWithOpacity;
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.BLACK;
    var13 = 0.56;
    var13 = var15.bind(var16)(var14, var13);
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var12 = {};
    var11 = -22;
    var12['translateY'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var10['transform'] = var11;
    var4['navigationButton'] = var10;
    var10 = {};
    var11 = 16;
    var10['left'] = var11;
    var4['navigationButtonPrevious'] = var10;
    var10 = {};
    var10['right'] = var11;
    var4['navigationButtonNext'] = var10;
    var10 = {};
    var11 = 0.32;
    var10['opacity'] = var11;
    var4['navigationButtonDisabled'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var8 = function handleNavigatePrevious() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot10;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot6;
                    var1 = 1;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot13 = var8;
            var9 = function handleNavigateNext() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(!var2) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot6;
                    var1 = 1;
                    var2 = var2 + var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot14 = var9;
            var17 = function handleScrollEnd(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var6 = _closure2_slot7;
                    var1 = var3.nativeEvent;
                    var1 = var1.contentOffset;
                    var10 = var1.x;
                    var8 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var7 = _closure1_slot11;
                    var5 = global;
                    var9 = var5.Math;
                    var5 = var9.round;
                    var1 = var10 / var1;
                    var5 = var5.bind(var9)(var1);
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5, var8);
                    var5 = var6.bind(var1)(var5);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var3 = var3.nativeEvent;
                    var6 = var3.velocity;
                    var4 = null;
                    var3 = var4 == var6;
                    if(var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var5 = var6.x;
                    var7 = 0;
                    var5 = var7 === var5;
                    if(!var5) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var6 = var6.y;
                    var5 = var7 === var6;
case 8:
                    var3 = var5;
case 6:
                    if(!var3) { _fun0004_ip = 4; continue _fun0004 }
case 10:
                    var3 = _closure2_slot2;
                    if(!(var4 != var3)) { _fun0004_ip = 4; continue _fun0004 }
case 11:
                    var3 = _closure2_slot2;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 4:
                    return var1;
                }
            };
            var _closure2_slot15 = var17;
            var2 = var3.cardMarginRight;
            var1 = var3.cardWidth;
            var7 = var3.children;
            var21 = var3.contentContainerStyle;
            var5 = var3.initialIndex;
            var13 = 0;
            var4 = undefined;
            var10 = 0;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var5;
case 12:
            var _closure2_slot0 = var10;
            var18 = var3.itemCount;
            var _closure2_slot1 = var18;
            var5 = var3.onScrollingChange;
            var _closure2_slot2 = var5;
            var6 = var3.style;
            var3 = _closure1_slot10;
            var11 = var3.bind(var4)();
            var5 = _closure1_slot4;
            var12 = var5.useRef;
            var3 = null;
            var16 = var12.bind(var5)(var3);
            var _closure2_slot3 = var16;
            var1 = var1 + var2;
            var _closure2_slot4 = var1;
            var3 = var5.useRef;
            var2 = _closure1_slot11;
            var2 = var2.bind(var4)(var10, var18);
            var2 = var2 * var1;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot5 = var2;
            var3 = var5.useState;
            var2 = function() {
                var4 = _closure1_slot11;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var10 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var2 = var3.bind(var4)(var10, var2);
            var12 = var2[var13];
            var _closure2_slot6 = var12;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot7 = var2;
            var19 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var23 = var19.bind(var4)(var2);
            var22 = var23.useStateFromStores;
            var2 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var2 = var22.bind(var23)(var15, var2);
            var _closure2_slot8 = var2;
            var15 = var5.useRef;
            var15 = var15.bind(var5)(var2);
            var _closure2_slot9 = var15;
            var15 = var12 > var13;
            var _closure2_slot10 = var15;
            var3 = var18 - var3;
            var13 = var12 < var3;
            var _closure2_slot11 = var13;
            var22 = var5.useMemo;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var1;
            var3 = function() {
                var1 = global;
                var3 = var1.Array;
                var4 = _closure2_slot1;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.fill;
                var1 = 0;
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    var2 = _closure2_slot4;
                    var1 = arg2;
                    var1 = var1 * var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var22.bind(var5)(var3, var12);
            var22 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure2_slot9;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var22.bind(var5)(var2, var3);
            var22 = var5.useEffect;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var4 = var2.current;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 14; continue _fun0005 }
case 16:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var1['x'] = var4;
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var22.bind(var5)(var3, var2);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var18;
            var2[1] = var1;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot11;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var7 = var4.bind(var1)(var2, var3);
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)(var7);
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var3 = var4.scrollTo;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var6 = var7 * var6;
                    var2['x'] = var6;
                    var5 = _closure2_slot9;
                    var5 = var5.current;
                    var5 = !var5;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
case 17:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var _closure2_slot12 = var1;
            var18 = var5.useImperativeHandle;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = arg2;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot12;
                var1['scrollToIndex'] = var2;
                return var1;
            };
            var1 = var18.bind(var5)(var2, var1, var3);
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var13;
            var2[1] = var15;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure2_slot10;
                    if(!var3) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var4 = var1.push;
                    var3 = {};
                    var5 = 'previous';
                    var3['name'] = var5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 9;
                    var6 = var10[var5];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.vgfxaA;
                    var5 = var6.bind(var7)(var5);
                    var3['label'] = var5;
                    var3 = var4.bind(var1)(var3);
case 19:
                    var2 = _closure2_slot11;
                    if(!var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var3 = var1.push;
                    var2 = {};
                    var4 = 'next';
                    var2['name'] = var4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 9;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.XiOHRX;
                    var4 = var5.bind(var6)(var4);
                    var2['label'] = var4;
                    var2 = var3.bind(var1)(var2);
case 21:
                    return var1;
                }
            };
            var22 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var11.wrapper;
            var5[1] = var6;
            var1['style'] = var5;
            var18 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {'accessibilityActions': null, 'centerContent': true, 'contentContainerStyle': null, 'decelerationRate': 0.1, 'horizontal': true};
            var5['accessibilityActions'] = var22;
            var5['contentContainerStyle'] = var21;
            var21 = function onAccessibilityAction(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'previous';
                    if(!(var1 !== var2)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var1 = 'next';
                    if(!(var1 === var2)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var2 = _closure2_slot14;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0008_ip = 25; continue _fun0008;
case 23:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onAccessibilityAction'] = var21;
            var21 = function onMomentumScrollEnd(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure2_slot15;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var3 = _closure2_slot2;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 27:
                    return var1;
                }
            };
            var5['onMomentumScrollEnd'] = var21;
            var20 = function onScrollBeginDrag() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onScrollBeginDrag'] = var20;
            var5['onScrollEndDrag'] = var17;
            var5['ref'] = var16;
            var5['snapToOffsets'] = var12;
            var5['children'] = var7;
            var6 = var18.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = 11;
            var7 = var10[var6];
            var7 = var19.bind(var4)(var7);
            var17 = var7.PressableOpacity;
            var7 = {};
            var20 = 9;
            var12 = var10[var20];
            var12 = var19.bind(var4)(var12);
            var16 = var12.intl;
            var12 = var16.string;
            var10 = var10[var20];
            var10 = var19.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.vgfxaA;
            var10 = var12.bind(var16)(var10);
            var7['accessibilityLabel'] = var10;
            var10 = 'button';
            var7['accessibilityRole'] = var10;
            var16 = {};
            var12 = !var15;
            var16['disabled'] = var12;
            var7['accessibilityState'] = var16;
            var7['disabled'] = var12;
            var7['onPress'] = var8;
            var16 = var11.navigationButton;
            var8 = new Array(3);
            var8[0] = var16;
            var16 = var11.navigationButtonPrevious;
            var8[1] = var16;
            if(var15) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var12 = var11.navigationButtonDisabled;
case 31:
            var8[2] = var12;
            var7['style'] = var8;
            var8 = _closure1_slot8;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 12;
            var12 = var16[var12];
            var12 = var19.bind(var4)(var12);
            var22 = var12.ChevronLargeLeftIcon;
            var21 = {};
            var23 = _closure1_slot1;
            var15 = 7;
            var12 = var16[var15];
            var12 = var23.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var21['color'] = var12;
            var12 = 'sm';
            var21['size'] = var12;
            var21 = var8.bind(var4)(var22, var21);
            var7['children'] = var21;
            var7 = var18.bind(var4)(var17, var7);
            var5[1] = var7;
            var6 = var16[var6];
            var6 = var19.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.XiOHRX;
            var16 = var17.bind(var18)(var16);
            var6['accessibilityLabel'] = var16;
            var6['accessibilityRole'] = var10;
            var16 = {};
            var10 = !var13;
            var16['disabled'] = var10;
            var6['accessibilityState'] = var16;
            var6['disabled'] = var10;
            var6['onPress'] = var9;
            var16 = var11.navigationButton;
            var9 = new Array(3);
            var9[0] = var16;
            var16 = var11.navigationButtonNext;
            var9[1] = var16;
            if(var13) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var10 = var11.navigationButtonDisabled;
case 33:
            var9[2] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 13;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ChevronLargeRightIcon;
            var9 = {};
            var14 = _closure1_slot1;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var9['color'] = var13;
            var9['size'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MarketingCardsScroller'] = var2;
    return var1;
})();