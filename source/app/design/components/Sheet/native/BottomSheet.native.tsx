// app/design/components/Sheet/native/BottomSheet.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function Background(arg1) {
        var4 = _closure1_slot16;
        var3 = _closure1_slot6;
        var2 = {};
        var5 = arg1;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function GradientBackground(arg1) {
        var2 = _closure1_slot19;
        var4 = undefined;
        var1 = false;
        var8 = var2.bind(var4)(var1);
        var3 = _closure1_slot16;
        var2 = _closure1_slot6;
        var1 = {};
        var9 = arg1;
        var10 = var1;
        var6 = copyDataProperties(var10, var9);
        var7 = _closure1_slot16;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var8.backgroundOverlay;
        var5['style'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = 'children';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot26 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.Platform;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var4 = var9.ACTION_SHEET_BACKGROUND_COLOR;
    var _closure1_slot7 = var4;
    var4 = var9.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot8 = var4;
    var4 = var9.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot9 = var4;
    var4 = var9.ACTION_SHEET_SPRING_CONFIG;
    var _closure1_slot10 = var4;
    var4 = var9.ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION;
    var _closure1_slot11 = var4;
    var8 = var9.ACTION_SHEET_HANDLE_SPACING;
    var4 = var9.ACTION_SHEET_GRADIENT_BORDER_WIDTH;
    var _closure1_slot12 = var4;
    var4 = var9.ACTION_SHEET_GRADIENT_BORDER_RADIUS;
    var _closure1_slot13 = var4;
    var4 = var9.ACTION_SHEET_HANDLE_OVERHANG_REDESIGN;
    var10 = var9.ACTION_SHEET_BORDER_RADIUS;
    var _closure1_slot14 = var10;
    var9 = var9.ACTION_SHEET_INNER_BORDER_RADIUS;
    var _closure1_slot15 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var10 = var9.jsx;
    var _closure1_slot16 = var10;
    var9 = var9.jsxs;
    var _closure1_slot17 = var9;
    var4 = var8 - var4;
    var _closure1_slot18 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var7 = arguments[1];
            var5 = arguments[2];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var7 = 0;
 17:
            if(!(var5 === var6)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var5 = false;
 23:
            var1 = {};
            var2 = {};
            var9 = 'hidden';
            var2['overflow'] = var9;
            var3 = _closure1_slot14;
            var2['borderTopLeftRadius'] = var3;
            var2['borderTopRightRadius'] = var3;
            var4 = _closure1_slot7;
            var2['backgroundColor'] = var4;
            var1['background'] = var2;
            var3 = 1;
            var2 = {'overflow': 'hidden', 'flex': 1};
            var1['wrapper'] = var2;
            var2 = {};
            var2['overflow'] = var9;
            var11 = _closure1_slot12;
            var2['marginTop'] = var11;
            var2['marginHorizontal'] = var11;
            var11 = _closure1_slot13;
            var2['borderTopLeftRadius'] = var11;
            var2['borderTopRightRadius'] = var11;
            var2['backgroundColor'] = var4;
            var1['wrapperWithBorder'] = var2;
            var2 = {};
            var4 = undefined;
            if(!var10) { _fun0001_ip = 142; continue _fun0001 }
 138:
            var4 = _closure1_slot14;
 142:
            var2['borderTopLeftRadius'] = var4;
            var4 = undefined;
            if(!var10) { _fun0001_ip = 156; continue _fun0001 }
 152:
            var4 = _closure1_slot14;
 156:
            var2['borderTopRightRadius'] = var4;
            var4 = undefined;
            if(!var10) { _fun0001_ip = 169; continue _fun0001 }
 166:
            var4 = var9;
 169:
            var2['overflow'] = var4;
            var4 = 0;
            if(var5) { _fun0001_ip = 186; continue _fun0001 }
 179:
            var5 = 4;
            var4 = var7 + var5;
 186:
            var2['marginBottom'] = var4;
            var2['flex'] = var3;
            var1['content'] = var2;
            var2 = {};
            var4 = '100%';
            var2['height'] = var4;
            var4 = _closure1_slot15;
            var2['borderTopLeftRadius'] = var4;
            var2['borderTopRightRadius'] = var4;
            var1['gradient'] = var2;
            var2 = {};
            var4 = _closure1_slot18;
            var2['paddingTop'] = var4;
            var1['themedContentPadding'] = var2;
            var2 = {};
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var9 = var7[var4];
            var9 = var5.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BG_MOD_STRONG;
            var2['backgroundColor'] = var9;
            var1['handleIndicator'] = var2;
            var2 = {};
            var8 = _closure1_slot5;
            var13 = var8.absoluteFillObject;
            var14 = var2;
            var8 = copyDataProperties(var14, var13);
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            var5 = var4.ACTION_SHEET_GRADIENT_BG;
            var4 = 'backgroundColor';
            var2[var4] = var5;
            var1['backgroundOverlay'] = var2;
            var2 = {};
            var4 = 16;
            var2['marginBottom'] = var4;
            var1['header'] = var2;
            var2 = {};
            var2['flex'] = var3;
            var1['body'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var2 = var6.startHeight;
            var3 = var6.hasEverExpanded;
            var3 = var6.windowDimensions;
            var18 = var3.height;
            var12 = var6.wrapperStyle;
            var9 = var6.scrollViewStyle;
            var13 = var6.startExpanded;
            var14 = var6.onChange;
            var _closure2_slot0 = var14;
            var7 = var6.onExpand;
            var _closure2_slot1 = var7;
            var10 = var6.keyboardShouldPersistTaps;
            var11 = var6.children;
            var15 = var6.maxDynamicContentSize;
            var4 = {'startHeight': 0, 'hasEverExpanded': 0, 'windowDimensions': 0, 'wrapperStyle': 0, 'scrollViewStyle': 0, 'startExpanded': 0, 'onChange': 0, 'onExpand': 0, 'keyboardShouldPersistTaps': 0, 'children': 0, 'maxDynamicContentSize': 0};
            var16 = null;
            var23 = var4;
            var22 = null;
            var3 = silentSetPrototypeOf(var23, var22);
            var5 = 0;
            var23 = {};
            var22 = var6;
            var21 = var4;
            var6 = copyDataProperties(var23, var22, var21);
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 7;
            var3 = var20[var3];
            var3 = var17.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var17 = var3.top;
            var19 = _closure1_slot0;
            var3 = 8;
            var3 = var20[var3];
            var19 = var19.bind(var4)(var3);
            var3 = var19.useIsScreenReaderEnabled;
            var3 = var3.bind(var19)();
            var _closure2_slot2 = var3;
            if(!(var16 == var2)) { _fun0002_ip = 206; continue _fun0002 }
 198:
            var19 = _closure1_slot8;
            var2 = var18 * var19;
 206:
            _closure2_slot3 = var2;
            if(!(var16 == var15)) { _fun0002_ip = 248; continue _fun0002 }
 214:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 9;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.NAV_BAR_HEIGHT_MULTILINE;
            var16 = var18 - var16;
            var15 = var16 - var17;
 248:
            var17 = _closure1_slot4;
            var16 = var17.useState;
            if(var3) { _fun0002_ip = 273; continue _fun0002 }
 260:
            if(var13) { _fun0002_ip = 273; continue _fun0002 }
 263:
            var13 = new Array(1);
            var13[0] = var2;
            _fun0002_ip = 277; continue _fun0002;
 273:
            var13 = new Array(0);
 277:
            var17 = var16.bind(var17)(var13);
            var16 = _closure1_slot3;
            var13 = 2;
            var13 = var16.bind(var4)(var17, var13);
            var16 = var13[var5];
            var5 = 1;
            var5 = var13[var5];
            _closure2_slot4 = var5;
            var5 = _closure1_slot4;
            var17 = var5.useEffect;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 25; continue _fun0003 }
 10:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = new Array(0);
                    var1 = var3.bind(var2)(var1);
 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var17.bind(var5)(var3, var13);
            var13 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var2 = _closure2_slot3;
                    if(!(var3 < var2)) { _fun0004_ip = 45; continue _fun0004 }
 30:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = new Array(0);
                    var1 = var3.bind(var2)(var1);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var13.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var7;
            var1 = function(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 35; continue _fun0005 }
 16:
                    var7 = _closure2_slot0;
                    var6 = undefined;
                    var5 = arg2;
                    var2 = arg3;
                    var2 = var7.bind(var6)(var4, var5, var2);
 35:
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0005_ip = 59; continue _fun0005 }
 41:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0005_ip = 59; continue _fun0005 }
 49:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 10;
            var1 = var14[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var23 = var1;
            var22 = var6;
            var6 = copyDataProperties(var23, var22);
            var17 = true;
            var6 = 'enableDynamicSizing';
            var1[var6] = var17;
            var6 = 'snapPoints';
            var1[var6] = var16;
            var6 = 'maxDynamicContentSize';
            var1[var6] = var15;
            var15 = arg2;
            var6 = 'ref';
            var1[var6] = var15;
            var6 = 'onChange';
            var1[var6] = var7;
            var7 = _closure1_slot16;
            var6 = _closure1_slot0;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var5['keyboardShouldPersistTaps'] = var10;
            var5['style'] = var9;
            var10 = _closure1_slot16;
            var9 = _closure1_slot6;
            var8 = {};
            var8['onLayout'] = var13;
            var8['style'] = var12;
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
    var4 = var8.bind(var7)(var4);
    var _closure1_slot20 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var2 = var8.startHeight;
            var14 = var8.contentHeight;
            var3 = var8.maxHeight;
            var21 = var8.hasEverExpanded;
            var _closure2_slot0 = var21;
            var4 = var8.windowDimensions;
            var9 = var4.height;
            var17 = var8.wrapperStyle;
            var20 = var8.onChange;
            var _closure2_slot1 = var20;
            var19 = var8.onExpand;
            var _closure2_slot2 = var19;
            var10 = var8.children;
            var11 = var8.borderGradient;
            var5 = var8.extraContent;
            var7 = {'startHeight': 0, 'contentHeight': 0, 'maxHeight': 0, 'hasEverExpanded': 0, 'windowDimensions': 0, 'wrapperStyle': 0, 'onChange': 0, 'onExpand': 0, 'children': 0, 'borderGradient': 0, 'extraContent': 0};
            var6 = null;
            var26 = var7;
            var25 = null;
            var4 = silentSetPrototypeOf(var26, var25);
            var26 = {};
            var25 = var8;
            var24 = var7;
            var7 = copyDataProperties(var26, var25, var24);
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var8 = _closure1_slot19;
            var15 = false;
            var13 = var8.bind(var4)(var15);
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var8 = 7;
            var8 = var22[var8];
            var8 = var16.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var8 = var8.top;
            var18 = _closure1_slot0;
            var16 = 8;
            var16 = var22[var16];
            var18 = var18.bind(var4)(var16);
            var16 = var18.useIsScreenReaderEnabled;
            var16 = var16.bind(var18)();
            var _closure2_slot3 = var16;
            if(!(var6 == var2)) { _fun0006_ip = 223; continue _fun0006 }
 215:
            var18 = _closure1_slot8;
            var2 = var9 * var18;
 223:
            _closure2_slot4 = var2;
            var18 = var14;
            if(!(var6 != var3)) { _fun0006_ip = 237; continue _fun0006 }
 234:
            var18 = var3;
 237:
            if(!(var6 == var18)) { _fun0006_ip = 275; continue _fun0006 }
 241:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var3 = 9;
            var3 = var23[var3];
            var3 = var22.bind(var4)(var3);
            var3 = var3.NAV_BAR_HEIGHT_MULTILINE;
            var3 = var9 - var3;
            var18 = var3 - var8;
 275:
            _closure2_slot5 = var18;
            var8 = _closure1_slot4;
            var9 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var21;
            var3[1] = var16;
            var3[2] = var18;
            var3[3] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = new Array(0);
                    var3 = _closure2_slot3;
                    var3 = !var3;
                    if(!var3) { _fun0007_ip = 24; continue _fun0007 }
 17:
                    var4 = _closure2_slot0;
                    var3 = !var4;
 24:
                    if(!var3) { _fun0007_ip = 39; continue _fun0007 }
 27:
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot5;
                    var3 = var5 < var4;
 39:
                    if(!var3) { _fun0007_ip = 56; continue _fun0007 }
 42:
                    var4 = var1.push;
                    var3 = _closure2_slot4;
                    var3 = var4.bind(var1)(var3);
 56:
                    var3 = var1.push;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var9.bind(var8)(var2, var3);
            var3 = var9.length;
            var2 = 1;
            var16 = var3 - var2;
            _closure2_slot6 = var16;
            var3 = var8.useCallback;
            var2 = new Array(3);
            var2[0] = var20;
            var2[1] = var19;
            var2[2] = var16;
            var1 = function(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0008_ip = 35; continue _fun0008 }
 16:
                    var7 = _closure2_slot1;
                    var6 = undefined;
                    var5 = arg2;
                    var2 = arg3;
                    var2 = var7.bind(var6)(var4, var5, var2);
 35:
                    var2 = _closure2_slot6;
                    if(!(var4 === var2)) { _fun0008_ip = 61; continue _fun0008 }
 43:
                    var2 = _closure2_slot2;
                    if(!(var3 != var2)) { _fun0008_ip = 61; continue _fun0008 }
 51:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var17['maxHeight'] = var18;
            var16[1] = var17;
            var1['style'] = var16;
            var1['children'] = var10;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 10;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var26 = var1;
            var25 = var7;
            var7 = copyDataProperties(var26, var25);
            var16 = arg2;
            var7 = 'ref';
            var1[var7] = var16;
            var7 = 'enableDynamicSizing';
            var1[var7] = var15;
            var7 = 'contentHeight';
            var1[var7] = var14;
            var7 = 'snapPoints';
            var1[var7] = var9;
            var7 = 'onChange';
            var1[var7] = var8;
            var7 = var10;
            if(!(var6 != var11)) { _fun0006_ip = 608; continue _fun0006 }
 501:
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 11;
            var6 = var14[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var13 = var13.gradient;
            var6['style'] = var13;
            var13 = _closure1_slot0;
            var12 = 12;
            var15 = var14[var12];
            var15 = var13.bind(var4)(var15);
            var15 = var15.VerticalGradient;
            var15 = var15.START;
            var6['start'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.VerticalGradient;
            var12 = var12.END;
            var6['end'] = var12;
            var6['colors'] = var11;
            var6['children'] = var10;
            var7 = var9.bind(var4)(var8, var6);
 608:
            var6 = new Array(2);
            var6[0] = var7;
            var6[1] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}";
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var11 = arg1;
            var27 = var11.scrollable;
            var5 = undefined;
            if(!(var27 === var5)) { _fun0009_ip = 19; continue _fun0009 }
 17:
            var27 = false;
 19:
            var37 = var11.startHeight;
            var35 = var11.maxHeight;
            var34 = var11.containerHeight;
            var33 = var11.startExpanded;
            if(!(var33 === var5)) { _fun0009_ip = 49; continue _fun0009 }
 47:
            var33 = false;
 49:
            var31 = var11.backdropOpacity;
            var _closure2_slot0 = var31;
            var7 = var11.backdropChildren;
            var _closure2_slot1 = var7;
            var22 = var11.header;
            var23 = var11.handleComponent;
            var17 = var11.handleDisabled;
            if(!(var17 === var5)) { _fun0009_ip = 92; continue _fun0009 }
 90:
            var17 = false;
 92:
            var6 = var11.footer;
            var _closure2_slot2 = var6;
            var15 = var11.onExpand;
            var _closure2_slot3 = var15;
            var26 = var11.onDismiss;
            var _closure2_slot4 = var26;
            var25 = var11.keyboardShouldPersistTaps;
            var19 = var11.children;
            var28 = var11.backgroundStyles;
            var16 = var11.contentStyles;
            var21 = var11.bodyStyles;
            var10 = var11.borderGradient;
            var4 = var11.showGradient;
            var9 = var11.extraContent;
            var36 = var11.contentHeight;
            var8 = {'scrollable': 0, 'startHeight': 0, 'maxHeight': 0, 'containerHeight': 0, 'startExpanded': 0, 'backdropOpacity': 0, 'backdropChildren': 0, 'header': 0, 'handleComponent': 0, 'handleDisabled': 0, 'footer': 0, 'onExpand': 0, 'onDismiss': 0, 'keyboardShouldPersistTaps': 0, 'children': 0, 'backgroundStyles': 0, 'contentStyles': 0, 'bodyStyles': 0, 'borderGradient': 0, 'showGradient': 0, 'extraContent': 0, 'contentHeight': 0};
            var3 = null;
            var45 = var8;
            var44 = null;
            var2 = silentSetPrototypeOf(var45, var44);
            var14 = 0;
            var45 = {};
            var44 = var11;
            var43 = var8;
            var8 = copyDataProperties(var45, var44, var43);
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var24 = _closure1_slot4;
            var12 = var24.useContext;
            var20 = _closure1_slot1;
            var39 = _closure1_slot2;
            var11 = 14;
            var11 = var39[var11];
            var11 = var20.bind(var5)(var11);
            var13 = var12.bind(var24)(var11);
            var42 = var13.transitionState;
            _closure2_slot5 = var42;
            var12 = var13.close;
            _closure2_slot6 = var12;
            var11 = var13.onLeave;
            _closure2_slot7 = var11;
            var13 = var13.registerDismissHandler;
            _closure2_slot8 = var13;
            var18 = 7;
            var18 = var39[var18];
            var18 = var20.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var20 = var18.bottom;
            var18 = _closure1_slot19;
            var20 = var18.bind(var5)(var17, var20, var27);
            var18 = var24.useRef;
            var38 = var18.bind(var24)(var3);
            _closure2_slot9 = var38;
            var18 = var24.useState;
            var30 = var18.bind(var24)(var33);
            var29 = _closure1_slot3;
            var18 = 2;
            var18 = var29.bind(var5)(var30, var18);
            var32 = var18[var14];
            var14 = 1;
            var14 = var18[var14];
            _closure2_slot10 = var14;
            var18 = var24.useRef;
            var14 = false;
            var14 = var18.bind(var24)(var14);
            _closure2_slot11 = var14;
            var14 = var24.useRef;
            var29 = true;
            var14 = var14.bind(var24)(var29);
            _closure2_slot12 = var14;
            var18 = var24.useContext;
            var30 = _closure1_slot0;
            var14 = 15;
            var14 = var39[var14];
            var14 = var30.bind(var5)(var14);
            var14 = var14.AccessibilityPreferencesContext;
            var14 = var18.bind(var24)(var14);
            var14 = var14.reducedMotion;
            var14 = var14.enabled;
            var24 = var17;
            if(var14) { _fun0009_ip = 504; continue _fun0009 }
 498:
            var17 = _closure1_slot10;
            _fun0009_ip = 508; continue _fun0009;
 504:
            var17 = _closure1_slot11;
 508:
            var30 = _closure1_slot4;
            var18 = var30.useLayoutEffect;
            var14 = new Array(2);
            var14[0] = var26;
            var14[1] = var13;
            var13 = function() {
                var3 = _closure2_slot8;
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = var18.bind(var30)(var13, var14);
            var26 = var30.useImperativeHandle;
            var18 = arg2;
            var14 = function() {
                var1 = {};
                var3 = function expandActionSheet() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = _closure2_slot9;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0010_ip = 28; continue _fun0010 }
 18:
                        var1 = var2.expand;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['expandActionSheet'] = var3;
                var2 = function closeActionSheet() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = _closure2_slot9;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0011_ip = 28; continue _fun0011 }
 18:
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['closeActionSheet'] = var2;
                return var1;
            };
            var13 = new Array(0);
            var13 = var26.bind(var30)(var18, var14, var13);
            var18 = var30.useEffect;
            var14 = new Array(2);
            var14[0] = var42;
            var14[1] = var12;
            var13 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = 'exiting';
                    var2 = var2 !== var3;
                    if(var2) { _fun0012_ip = 27; continue _fun0012 }
 18:
                    var3 = _closure2_slot11;
                    var2 = var3.current;
 27:
                    if(var2) { _fun0012_ip = 67; continue _fun0012 }
 30:
                    var3 = _closure2_slot12;
                    var2 = false;
                    var3['current'] = var2;
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 67; continue _fun0012 }
 57:
                    var2 = var3.forceClose;
                    var2 = var2.bind(var3)();
 67:
                    var3 = _closure2_slot5;
                    var2 = 'visible';
                    var2 = var2 === var3;
                    if(!var2) { _fun0012_ip = 91; continue _fun0012 }
 82:
                    var3 = _closure2_slot11;
                    var2 = var3.current;
 91:
                    if(!var2) { _fun0012_ip = 104; continue _fun0012 }
 94:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var18.bind(var30)(var13, var14);
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var18 = 16;
            var18 = var13[var18];
            var39 = var14.bind(var5)(var18);
            var26 = var39.useUnmountEffect;
            var18 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    if(!var2) { _fun0013_ip = 35; continue _fun0013 }
 15:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 35; continue _fun0013 }
 25:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 35:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var18 = var26.bind(var39)(var18);
            var26 = var30.useCallback;
            var18 = new Array(1);
            var18[0] = var12;
            var12 = function(arg1, arg2, arg3, arg4, arg5) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var3 = arg2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ANIMATION_SOURCE;
                    var4 = var2.KEYBOARD;
                    var2 = arg5;
                    if(!(var2 !== var4)) { _fun0014_ip = 138; continue _fun0014 }
 47:
                    var2 = -1;
                    if(!(var2 === var3)) { _fun0014_ip = 94; continue _fun0014 }
 57:
                    var5 = _closure2_slot11;
                    var5 = var5.current;
                    if(var5) { _fun0014_ip = 94; continue _fun0014 }
 72:
                    var6 = _closure2_slot11;
                    var5 = true;
                    var6['current'] = var5;
                    var4 = _closure2_slot6;
                    var4 = var4.bind(var1)();
                    _fun0014_ip = 138; continue _fun0014;
 94:
                    if(!(var3 > var2)) { _fun0014_ip = 138; continue _fun0014 }
 98:
                    var3 = _closure2_slot11;
                    var3 = var3.current;
                    if(!var3) { _fun0014_ip = 138; continue _fun0014 }
 113:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0014_ip = 138; continue _fun0014 }
 128:
                    var2 = var3.forceClose;
                    var2 = var2.bind(var3)();
 138:
                    return var1;
                }
            };
            var12 = var26.bind(var30)(var12, var18);
            var26 = var30.useCallback;
            var18 = new Array(1);
            var18[0] = var15;
            var15 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var4 = _closure2_slot10;
                    var1 = undefined;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0015_ip = 34; continue _fun0015 }
 26:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
 34:
                    return var1;
                }
            };
            var30 = var26.bind(var30)(var15, var18);
            var8 = var8.animatedIndex;
            var40 = 13;
            var13 = var13[var40];
            var15 = var14.bind(var5)(var13);
            var14 = var15.useSharedValue;
            var13 = -1;
            var13 = var14.bind(var15)(var13);
            if(!(var3 != var8)) { _fun0009_ip = 720; continue _fun0009 }
 717:
            var13 = var8;
 720:
            _closure2_slot13 = var13;
            var41 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = var8[var40];
            var18 = var41.bind(var5)(var14);
            var15 = var18.useDerivedValue;
            var14 = function se() {
                var2 = _closure2_slot13;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = -1;
                var1 = var2 <= var1;
                return var1;
            };
            var26 = {};
            var26['animatedIndex'] = var13;
            var14['__closure'] = var26;
            var26 = 4341912681188.0;
            var14['__workletHash'] = var26;
            var26 = _closure1_slot22;
            var14['__initData'] = var26;
            var39 = var15.bind(var18)(var14);
            _closure2_slot14 = var39;
            var14 = var8[var40];
            var26 = var41.bind(var5)(var14);
            var18 = var26.useAnimatedReaction;
            var15 = function ce() {
                var2 = _closure2_slot14;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = {};
            var14['animatedIsVisuallyClosed'] = var39;
            var15['__closure'] = var14;
            var14 = 6995719052506.0;
            var15['__workletHash'] = var14;
            var14 = _closure1_slot23;
            var15['__initData'] = var14;
            var14 = function ue(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0016_ip = 21; continue _fun0016 }
 6:
                    var3 = _closure2_slot5;
                    var2 = 'exiting';
                    var1 = var2 === var3;
 21:
                    if(!var1) { _fun0016_ip = 70; continue _fun0016 }
 24:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot7;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var39 = {};
            var39['transitionState'] = var42;
            var40 = var8[var40];
            var40 = var41.bind(var5)(var40);
            var40 = var40.runOnJS;
            var39['runOnJS'] = var40;
            var39['onLeave'] = var11;
            var14['__closure'] = var39;
            var39 = 77590951197.0;
            var14['__workletHash'] = var39;
            var39 = _closure1_slot24;
            var14['__initData'] = var39;
            var14 = var18.bind(var26)(var15, var14);
            var26 = _closure1_slot4;
            var18 = var26.useCallback;
            var15 = function() {
                var4 = _closure1_slot16;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.ActionSheetHeaderBar;
                var1 = {};
                var5 = function onPress() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var1 = _closure2_slot9;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0017_ip = 28; continue _fun0017 }
 18:
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onPress'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var14 = new Array(0);
            var18 = var18.bind(var26)(var15, var14);
            var15 = var26.useCallback;
            var14 = new Array(2);
            var14[0] = var31;
            var14[1] = var7;
            var7 = function(arg1) {
                var1 = arg1;
                var7 = var1.style;
                var6 = var1.animatedIndex;
                var4 = _closure1_slot17;
                var3 = _closure1_slot6;
                var2 = {};
                var5 = _closure1_slot5;
                var8 = var5.absoluteFill;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var2['style'] = var5;
                var8 = _closure1_slot16;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.BottomSheetBackdrop;
                var5 = {};
                var5['animatedIndex'] = var6;
                var9 = _closure2_slot0;
                var5['opacity'] = var9;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var6 = _closure2_slot1;
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15 = var15.bind(var26)(var7, var14);
            var14 = var26.useCallback;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.BottomSheetFooter;
                    var1 = {};
                    var10 = arg1;
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var8 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 == var8)) { _fun0018_ip = 100; continue _fun0018 }
 60:
                    var8 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 19;
                    var6 = var9[var6];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.NavScrim;
                    var6 = {};
                    var6 = var8.bind(var3)(var7, var6);
                    _fun0018_ip = 104; continue _fun0018;
 100:
                    var6 = _closure2_slot2;
 104:
                    var5 = 'children';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var14 = var14.bind(var26)(var6, var7);
            var7 = _closure1_slot1;
            var6 = 20;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['ignoreKeyboard'] = var29;
            var31 = var7.bind(var5)(var6);
            var1 = function useConstrainedContainerStyle(arg1) {
                var2 = arg1;
                var5 = var2.width;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var1 = {};
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var3 = _closure3_slot0;
                    var2 = _closure1_slot9;
                    var3 = var3 - var2;
                    var2 = 0;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = 2;
                    var2 = var3 / var2;
                    var1['marginHorizontal'] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var26 = var1.bind(var5)(var31);
            if(var27) { _fun0009_ip = 1057; continue _fun0009 }
 1051:
            var8 = _closure1_slot20;
            _fun0009_ip = 1061; continue _fun0009;
 1057:
            var8 = _closure1_slot21;
 1061:
            var6 = _closure1_slot1;
            var40 = _closure1_slot2;
            var1 = 21;
            var1 = var40[var1];
            var1 = var6.bind(var5)(var1);
            var7 = var1.bind(var5)();
            var6 = _closure1_slot16;
            var1 = {};
            var1['ref'] = var38;
            var39 = _closure1_slot0;
            var38 = 22;
            var38 = var40[var38];
            var39 = var39.bind(var5)(var38);
            var38 = var39.isIOS;
            var38 = var38.bind(var39)();
            var38 = !var38;
            if(!var38) { _fun0009_ip = 1129; continue _fun0009 }
 1127:
            var38 = undefined;
 1129:
            var1['accessible'] = var38;
            var38 = 'none';
            var1['accessibilityRole'] = var38;
            var38 = '';
            var1['accessibilityLabel'] = var38;
            var1['startHeight'] = var37;
            var1['contentHeight'] = var36;
            var1['maxHeight'] = var35;
            var1['containerHeight'] = var34;
            var1['startExpanded'] = var33;
            var1['hasEverExpanded'] = var32;
            var1['windowDimensions'] = var31;
            var32 = var20.wrapper;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var3 != var10;
            if(!var32) { _fun0009_ip = 1212; continue _fun0009 }
 1206:
            var32 = var20.wrapperWithBorder;
 1212:
            var31[1] = var32;
            var1['wrapperStyle'] = var31;
            var1['onExpand'] = var30;
            var1['enablePanDownToClose'] = var29;
            var1['containerStyle'] = var26;
            var29 = var20.background;
            var26 = new Array(2);
            var26[0] = var29;
            var26[1] = var28;
            var1['backgroundStyle'] = var26;
            var26 = 'interactive';
            if(!var27) { _fun0009_ip = 1270; continue _fun0009 }
 1266:
            var26 = 'extend';
 1270:
            var1['keyboardBehavior'] = var26;
            var26 = 'restore';
            var1['keyboardBlurBehavior'] = var26;
            var1['keyboardShouldPersistTaps'] = var25;
            var1['animationConfigs'] = var17;
            var17 = var20.handleIndicator;
            var1['handleIndicatorStyle'] = var17;
            var17 = null;
            if(var24) { _fun0009_ip = 1320; continue _fun0009 }
 1310:
            if(!(var3 != var23)) { _fun0009_ip = 1317; continue _fun0009 }
 1314:
            var18 = var23;
 1317:
            var17 = var18;
 1320:
            var1['handleComponent'] = var17;
            var1['backdropComponent'] = var15;
            if(var4) { _fun0009_ip = 1339; continue _fun0009 }
 1333:
            var15 = _closure1_slot25;
            _fun0009_ip = 1343; continue _fun0009;
 1339:
            var15 = _closure1_slot26;
 1343:
            var1['backgroundComponent'] = var15;
            var1['renderFooter'] = var14;
            var1['animatedIndex'] = var13;
            var1['onAnimate'] = var12;
            var1['onClose'] = var11;
            var1['borderGradient'] = var10;
            var1['extraContent'] = var9;
            var11 = _closure1_slot16;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.LayerScope;
            var9 = {};
            var14 = _closure1_slot17;
            var13 = _closure1_slot6;
            var12 = {};
            var17 = var20.content;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var12['style'] = var15;
            var16 = var3 != var22;
            if(!var16) { _fun0009_ip = 1477; continue _fun0009 }
 1448:
            var18 = _closure1_slot16;
            var17 = _closure1_slot6;
            var15 = {};
            var23 = var20.header;
            var15['style'] = var23;
            var15['children'] = var22;
            var16 = var18.bind(var5)(var17, var15);
 1477:
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot16;
            var17 = _closure1_slot6;
            var16 = {};
            var22 = var20.body;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var16['style'] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var1['children'] = var9;
            var6 = var6.bind(var5)(var8, var1);
            var1 = var6;
            if(!var4) { _fun0009_ip = 1620; continue _fun0009 }
 1566:
            var1 = var6;
            if(!(var3 != var7)) { _fun0009_ip = 1620; continue _fun0009 }
 1573:
            var4 = _closure1_slot16;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['gradient'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1620:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/BottomSheet.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BottomSheet'] = var2;
    return var1;
})();