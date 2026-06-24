// app/design/components/TagListInput/native/TagListInput.native.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.ScrollView;
    var _closure1_slot6 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.INPUT_PLACEHOLDER_TEXT_DEFAULT;
        var2['color'] = var8;
        var1['placeholder'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.space;
        var8 = var8.PX_12;
        var2['paddingHorizontal'] = var8;
        var1['iconContainer'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.space;
        var8 = var8.PX_12;
        var2['marginLeft'] = var8;
        var1['iconLeft'] = var2;
        var2 = {};
        var2['paddingVertical'] = var3;
        var1['scrollViewContent'] = var2;
        var2 = {};
        var8 = 1;
        var2['flexGrow'] = var8;
        var1['horizontalScrollViewContent'] = var2;
        var2 = {'marginHorizontal': null, 'alignItems': 'center', 'flexDirection': 'row', 'flexWrap': 'wrap', 'flex': 1};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.space;
        var9 = var9.PX_4;
        var2['marginHorizontal'] = var9;
        var1['inputInner'] = var2;
        var2 = {};
        var9 = 'nowrap';
        var2['flexWrap'] = var9;
        var1['horizontalInputInner'] = var2;
        var2 = {};
        var2['flex'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.space;
        var8 = var8.PX_24;
        var2['minHeight'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.space;
        var8 = var8.PX_48;
        var2['minWidth'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.TEXT_DEFAULT;
        var2['color'] = var8;
        var8 = _closure1_slot0;
        var7 = 6;
        var7 = var6[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.TextStyleSheet;
        var10 = var7.text-sm/medium;
        var11 = var2;
        var7 = copyDataProperties(var11, var10);
        var8 = 0;
        var7 = 'paddingVertical';
        var2[6] = var8;
        var8 = 2;
        var7 = 'marginVertical';
        var2[6] = var8;
        var1['searchInput'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.space;
        var3 = var3.PX_64;
        var2['minWidth'] = var3;
        var1['horizontalSearchInput'] = var2;
        return var1;
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot10 = var8;
    var8 = {'x': 0, 'y': 0.5};
    var _closure1_slot11 = var8;
    var8 = {'x': 1, 'y': 0.5};
    var _closure1_slot12 = var8;
    var8 = ['transparent', 'black'];
    var _closure1_slot13 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var1['fill'] = var2;
        var2 = {};
        var3 = _closure1_slot7;
        var6 = var3.absoluteFillObject;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var5 = 'row';
        var4 = 'flexDirection';
        var2[3] = var5;
        var1['mask'] = var2;
        var2 = {};
        var4 = 32;
        var2['width'] = var4;
        var1['leadingFade'] = var2;
        var2 = {};
        var6 = var3.absoluteFillObject;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var4 = 'black';
        var3 = 'backgroundColor';
        var2[2] = var4;
        var1['leadingCover'] = var2;
        var2 = {'flex': 1, 'backgroundColor': 'black'};
        var1['maskRemainder'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}";
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function TagListInput(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var42 = var3.accessibilityHint;
            var36 = var3.defaultValue;
            var17 = var3.disabled;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = false;
case 2:
            var31 = var3.placeholder;
            var27 = var3.accessibilityLabel;
            var12 = var3.icon;
            var14 = var3.onChangeText;
            var13 = var3.onBlur;
            var18 = var3.onFocus;
            var1 = var3.onScroll;
            var6 = var3.style;
            var28 = var3.returnKeyType;
            if(!(var28 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var28 = 'search';
case 4:
            var30 = var3.tags;
            var _closure2_slot0 = var30;
            var38 = var3.horizontal;
            if(!(var38 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var38 = false;
case 6:
            var9 = var3.footer;
            var39 = var3.focusOnAdd;
            if(!(var39 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var39 = true;
case 8:
            var _closure2_slot1 = var39;
            var2 = var3.inActionSheet;
            var25 = var3.onSubmitEditing;
            var5 = var3.onRemove;
            var _closure2_slot2 = var5;
            var29 = var3.autoFocus;
            var19 = var3.autoClearInputOnTagAdd;
            if(!(var19 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var19 = true;
case 10:
            var _closure2_slot3 = var19;
            var16 = var3.leadingFade;
            if(!(var16 === var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var16 = false;
case 12:
            var10 = var3.ref;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var3 = _closure1_slot10;
            var15 = var3.bind(var4)();
            var8 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 13;
            var3 = var22[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var5.useFontScale;
            var7 = var3.bind(var5)();
            var3 = global;
            var5 = var3.Math;
            var3 = var5.min;
            var24 = 2;
            var7 = var3.bind(var5)(var24, var7);
            var3 = 14;
            var3 = var22[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.InputHeights;
            var3 = var3.MD;
            var5 = var3 * var7;
            var3 = function useTagListInputState(arg1, arg2) {
                var3 = arg2;
                var _closure3_slot0 = var3;
                var9 = _closure1_slot4;
                var4 = var9.useRef;
                var2 = null;
                var5 = var4.bind(var9)(var2);
                var _closure3_slot1 = var5;
                var4 = var9.useRef;
                var2 = '';
                var4 = var4.bind(var9)(var2);
                var _closure3_slot2 = var4;
                var2 = var9.useRef;
                var8 = false;
                var2 = var2.bind(var9)(var8);
                var _closure3_slot3 = var2;
                var7 = var9.useState;
                var11 = var7.bind(var9)(var8);
                var8 = _closure1_slot3;
                var10 = undefined;
                var7 = 2;
                var8 = var8.bind(var10)(var11, var7);
                var7 = 0;
                var11 = var8[var7];
                var _closure3_slot4 = var11;
                var7 = 1;
                var7 = var8[var7];
                var _closure3_slot5 = var7;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var4 = arguments[1];
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var4 = false;
case 14:
                        var6 = _closure3_slot3;
                        var2 = true;
                        var6['current'] = var2;
                        var2 = _closure3_slot2;
                        var2['current'] = var5;
                        var6 = _closure3_slot5;
                        var7 = var5.length;
                        var2 = 0;
                        var2 = var7 > var2;
                        var2 = var6.bind(var1)(var2);
                        var6 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var6 = _closure3_slot0;
                        var6 = var6.bind(var1)(var5);
case 16:
                        if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 18:
                        var3 = _closure3_slot1;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 19:
                        var3 = var4.setNativeProps;
                        var2 = {};
                        var2['text'] = var5;
                        var2 = var3.bind(var4)(var2);
case 6:
                        return var1;
                    }
                };
                var3 = var8.bind(var9)(var3, var7);
                var _closure3_slot6 = var3;
                var12 = var9.useImperativeHandle;
                var8 = arg1;
                var7 = function() {
                    var1 = {};
                    var3 = function blur() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                            var2 = var3.blur;
                            var1 = var2.bind(var3)();
case 20:
                            return var1;
                        }
                    };
                    var1['blur'] = var3;
                    var3 = function focus() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
case 20:
                            return var1;
                        }
                    };
                    var1['focus'] = var3;
                    var3 = function setText(arg1) {
                        var4 = _closure3_slot6;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['setText'] = var3;
                    var3 = function getText() {
                        var1 = _closure3_slot2;
                        var1 = var1.current;
                        return var1;
                    };
                    var1['getText'] = var3;
                    var3 = function isFocused() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var3 = var1 == var4;
                            var2 = undefined;
                            if(var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 20:
                            var1 = var1 != var2;
                            if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var1 = var2;
case 22:
                            return var1;
                        }
                    };
                    var1['isFocused'] = var3;
                    var3 = function measure(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 21:
                            var3 = var4.measure;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 24:
                            return var1;
                        }
                    };
                    var1['measure'] = var3;
                    var3 = function measureInWindow(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0007_ip = 24; continue _fun0007 }
case 21:
                            var3 = var4.measureInWindow;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 24:
                            return var1;
                        }
                    };
                    var1['measureInWindow'] = var3;
                    var2 = function measureLayout(arg1, arg2, arg3) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var6 = var1.current;
                            var1 = null;
                            var2 = var1 == var6;
                            var1 = undefined;
                            if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 21:
                            var5 = var6.measureLayout;
                            var4 = arg1;
                            var3 = arg2;
                            var2 = arg3;
                            var1 = var5.bind(var6)(var4, var3, var2);
case 25:
                            return var1;
                        }
                    };
                    var1['measureLayout'] = var2;
                    return var1;
                };
                var7 = var12.bind(var9)(var8, var7);
                var8 = var9.useMemo;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var3;
                var1 = function() {
                    var1 = {};
                    var2 = {};
                    var4 = true;
                    var2['isClearable'] = var4;
                    var1['clearProps'] = var2;
                    var2 = {};
                    var4 = _closure3_slot4;
                    var2['hasValue'] = var4;
                    var4 = function clear() {
                        var4 = _closure3_slot6;
                        var3 = undefined;
                        var2 = '';
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['clear'] = var4;
                    var3 = function setTextValue(arg1) {
                        var4 = _closure3_slot6;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['setTextValue'] = var3;
                    var1['clearState'] = var2;
                    return var1;
                };
                var1 = var8.bind(var9)(var1, var7);
                var9 = var1.clearProps;
                var8 = var1.clearState;
                var1 = {};
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 12;
                var6 = var11[var6];
                var7 = var7.bind(var10)(var6);
                var6 = var7.useInputClearButton;
                var6 = var6.bind(var7)(var9, var8);
                var1['clearButton'] = var6;
                var1['inputRef'] = var5;
                var1['inputValueRef'] = var4;
                var1['inputUpdate'] = var3;
                var1['inputInitializedRef'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var10, var14);
            var43 = var3.inputRef;
            _closure2_slot4 = var43;
            var37 = var3.inputValueRef;
            _closure2_slot5 = var37;
            var35 = var3.inputUpdate;
            _closure2_slot6 = var35;
            var14 = var3.clearButton;
            var41 = var3.inputInitializedRef;
            var21 = _closure1_slot4;
            var10 = var21.useRef;
            var34 = 0;
            var3 = {'start': 0, 'end': 0};
            var3 = var10.bind(var21)(var3);
            _closure2_slot7 = var3;
            var3 = 15;
            var3 = var22[var3];
            var10 = var8.bind(var4)(var3);
            var3 = var10.useKeyboardBlurring;
            var3 = var3.bind(var10)(var43);
            var40 = 16;
            var3 = var22[var40];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useFocus;
            var3 = var3.bind(var8)();
            var8 = var3.focusProps;
            _closure2_slot8 = var8;
            var8 = var3.isFocused;
            var20 = _closure1_slot1;
            var3 = 17;
            var3 = var22[var3];
            var10 = var20.bind(var4)(var3);
            var3 = {};
            var3['onFocus'] = var18;
            var3['onBlur'] = var13;
            var3 = var10.bind(var4)(var3);
            var10 = var3.onFocus;
            _closure2_slot9 = var10;
            var3 = var3.onBlur;
            _closure2_slot10 = var3;
            var3 = var21.useRef;
            var10 = null;
            var13 = var3.bind(var21)(var10);
            _closure2_slot11 = var13;
            var3 = var21.useState;
            var3 = var3.bind(var21)(var10);
            var26 = _closure1_slot3;
            var3 = var26.bind(var4)(var3, var24);
            var18 = var3[var34];
            _closure2_slot12 = var18;
            var18 = 1;
            var3 = var3[var18];
            _closure2_slot13 = var3;
            var3 = var21.useState;
            var33 = false;
            var3 = var3.bind(var21)(var33);
            var3 = var26.bind(var4)(var3, var24);
            var26 = var3[var34];
            var3 = var3[var18];
            _closure2_slot14 = var3;
            var3 = 18;
            var3 = var22[var3];
            var3 = var20.bind(var4)(var3);
            var3 = var3.bind(var4)(var30);
            _closure2_slot15 = var3;
            var20 = var21.useRef;
            var32 = var20.bind(var21)(var30);
            _closure2_slot16 = var32;
            var22 = var21.useLayoutEffect;
            var20 = new Array(7);
            var20[0] = var39;
            var20[1] = var35;
            var20[2] = var32;
            var20[3] = var30;
            var20[4] = var43;
            var20[5] = var37;
            var20[6] = var19;
            var19 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    if(!(var3 < var2)) { _fun0009_ip = 10; continue _fun0009 }
case 20:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0009_ip = 26; continue _fun0009 }
case 23:
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    var2 = null;
                    var3 = var2 == var5;
                    var4 = undefined;
                    if(var3) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var3 = var5.isFocused;
                    var4 = var3.bind(var5)();
case 27:
                    var3 = false;
                    if(!(var3 === var4)) { _fun0009_ip = 26; continue _fun0009 }
case 29:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0009_ip = 26; continue _fun0009 }
case 4:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 26:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var5 = undefined;
                    var3 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure2_slot11;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0010_ip = 22; continue _fun0010 }
case 21:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
case 22:
                            return var1;
                        }
                    };
                    var2 = 10;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
case 30:
                    if(!var2) { _fun0009_ip = 10; continue _fun0009 }
case 32:
                    var4 = _closure2_slot6;
                    var3 = '';
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
case 10:
                    var2 = _closure2_slot16;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var22.bind(var21)(var19, var20);
            var20 = var21.useLayoutEffect;
            var19 = new Array(1);
            var19[0] = var3;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0011_ip = 33; continue _fun0011 }
case 34:
                    var1 = _closure2_slot11;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0011_ip = 33; continue _fun0011 }
case 20:
                    var2 = var3.scrollToEnd;
                    var1 = {};
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var20.bind(var21)(var3, var19);
            if(var2) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = _closure1_slot6;
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 19;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var3 = var19.BottomSheetScrollView;
case 37:
            if(var2) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 21;
            var2 = var20[var2];
            var22 = var19.bind(var4)(var2);
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 20;
            var2 = var20[var2];
            var2 = var19.bind(var4)(var2);
            var22 = var2.BottomSheetTextInput;
case 40:
            var2 = 33;
            var7 = var2 * var7;
            var20 = _closure1_slot4;
            var2 = var20.useState;
            var19 = var2.bind(var20)(var34);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var19, var24);
            var39 = var2[var34];
            var2 = var2[var18];
            _closure2_slot17 = var2;
            var19 = var20.useCallback;
            var18 = function(arg1) {
                var3 = _closure2_slot17;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var18 = var19.bind(var20)(var18, var2);
            var32 = var10 == var14;
            if(!(var10 == var31)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var21 = _closure1_slot0;
            var44 = _closure1_slot2;
            var2 = 22;
            var19 = var44[var2];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var2 = var44[var2];
            var2 = var21.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2["5h0QOP"];
            var31 = var19.bind(var20)(var2);
case 41:
            if(!(var10 == var27)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var21 = _closure1_slot0;
            var44 = _closure1_slot2;
            var2 = 22;
            var19 = var44[var2];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var2 = var44[var2];
            var2 = var21.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2["5h0QOP"];
            var27 = var19.bind(var20)(var2);
case 43:
            var2 = {};
            var2['horizontal'] = var38;
            var2['leadingFade'] = var16;
            var2['onScroll'] = var1;
            var1 = function useLeadingFade(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var5 = var3.horizontal;
                    var2 = var3.leadingFade;
                    var6 = var3.onScroll;
                    var _closure3_slot0 = var6;
                    var3 = undefined;
                    var _closure3_slot2 = var3;
                    var _closure3_slot3 = var3;
                    var _closure3_slot4 = var3;
                    var4 = _closure1_slot14;
                    var4 = var4.bind(var3)();
                    var _closure3_slot1 = var4;
                    if(!var5) { _fun0012_ip = 45; continue _fun0012 }
case 46:
                    var5 = var2;
case 45:
                    _closure3_slot2 = var5;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 7;
                    var7 = var15[var2];
                    var9 = var14.bind(var3)(var7);
                    var8 = var9.useSharedValue;
                    var7 = false;
                    var13 = var8.bind(var9)(var7);
                    _closure3_slot3 = var13;
                    var9 = _closure1_slot4;
                    var10 = var9.useCallback;
                    var8 = new Array(3);
                    var8[0] = var5;
                    var8[1] = var6;
                    var8[2] = var13;
                    var7 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure3_slot2;
                            if(!var2) { _fun0013_ip = 47; continue _fun0013 }
case 48:
                            var5 = _closure3_slot3;
                            var4 = var5.set;
                            var2 = var3.nativeEvent;
                            var2 = var2.contentOffset;
                            var6 = var2.x;
                            var2 = 1;
                            var2 = var6 > var2;
                            var2 = var4.bind(var5)(var2);
case 47:
                            var4 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0013_ip = 49; continue _fun0013 }
case 50:
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 49:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var8 = var10.bind(var9)(var7, var8);
                    var2 = var15[var2];
                    var10 = var14.bind(var3)(var2);
                    var7 = var10.useAnimatedStyle;
                    var2 = function s() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var5 = var6.withSpring;
                            var4 = _closure3_slot3;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = 1;
                            if(!var3) { _fun0014_ip = 51; continue _fun0014 }
case 52:
                            var4 = 0;
case 51:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 9;
                            var2 = var8[var2];
                            var2 = var3.bind(var7)(var2);
                            var3 = var2.springStandard;
                            var2 = 'animate-always';
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var1['opacity'] = var2;
                            return var1;
                        }
                    };
                    var12 = {};
                    var16 = 8;
                    var16 = var15[var16];
                    var16 = var14.bind(var3)(var16);
                    var16 = var16.withSpring;
                    var12['withSpring'] = var16;
                    var12['scrolled'] = var13;
                    var13 = 9;
                    var13 = var15[var13];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.springStandard;
                    var12['springStandard'] = var13;
                    var2['__closure'] = var12;
                    var12 = 11561232362008.0;
                    var2['__workletHash'] = var12;
                    var11 = _closure1_slot15;
                    var2['__initData'] = var11;
                    var10 = var7.bind(var10)(var2);
                    _closure3_slot4 = var10;
                    var7 = var9.useCallback;
                    var2 = new Array(3);
                    var2[0] = var5;
                    var2[1] = var4;
                    var2[2] = var10;
                    var1 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var6 = arg1;
                            var2 = _closure3_slot2;
                            var1 = var6;
                            if(!var2) { _fun0015_ip = 53; continue _fun0015 }
case 54:
                            var5 = _closure1_slot8;
                            var14 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var2 = 10;
                            var2 = var15[var2];
                            var4 = undefined;
                            var3 = var14.bind(var4)(var2);
                            var2 = {};
                            var12 = _closure3_slot1;
                            var7 = var12.fill;
                            var2['style'] = var7;
                            var7 = 'software';
                            var2['androidRenderingMode'] = var7;
                            var9 = _closure1_slot9;
                            var8 = _closure1_slot5;
                            var7 = {};
                            var10 = var12.mask;
                            var7['style'] = var10;
                            var10 = {};
                            var11 = var12.leadingFade;
                            var10['style'] = var11;
                            var11 = 11;
                            var11 = var15[var11];
                            var13 = var14.bind(var4)(var11);
                            var11 = {};
                            var18 = _closure1_slot11;
                            var11['start'] = var18;
                            var18 = _closure1_slot12;
                            var11['end'] = var18;
                            var18 = _closure1_slot13;
                            var11['colors'] = var18;
                            var17 = _closure1_slot7;
                            var17 = var17.absoluteFill;
                            var11['style'] = var17;
                            var13 = var5.bind(var4)(var13, var11);
                            var11 = new Array(2);
                            var11[0] = var13;
                            var13 = 7;
                            var13 = var15[var13];
                            var13 = var14.bind(var4)(var13);
                            var14 = var13.View;
                            var13 = {};
                            var17 = var12.leadingCover;
                            var15 = new Array(2);
                            var15[0] = var17;
                            var16 = _closure3_slot4;
                            var15[1] = var16;
                            var13['style'] = var15;
                            var13 = var5.bind(var4)(var14, var13);
                            var11[1] = var13;
                            var10['children'] = var11;
                            var11 = var9.bind(var4)(var8, var10);
                            var10 = new Array(2);
                            var10[0] = var11;
                            var11 = {};
                            var12 = var12.maskRemainder;
                            var11['style'] = var12;
                            var11 = var5.bind(var4)(var8, var11);
                            var10[1] = var11;
                            var7['children'] = var10;
                            var7 = var9.bind(var4)(var8, var7);
                            var2['maskElement'] = var7;
                            var2['children'] = var6;
                            var1 = var5.bind(var4)(var3, var2);
case 53:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var9)(var1, var2);
                    var7 = var5;
                    if(var7) { _fun0012_ip = 55; continue _fun0012 }
case 56:
                    var1 = null;
                    var7 = var1 != var6;
case 55:
                    var1 = {};
                    var6 = undefined;
                    if(!var7) { _fun0012_ip = 57; continue _fun0012 }
case 58:
                    var6 = var8;
case 57:
                    var1['onScroll'] = var6;
                    var6 = undefined;
                    if(!var7) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                    var6 = 16;
case 59:
                    var1['scrollEventThrottle'] = var6;
                    var3 = undefined;
                    if(!var5) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                    var3 = var4.fill;
case 61:
                    var1['scrollerStyle'] = var3;
                    var1['wrap'] = var2;
                    return var1;
                }
            };
            var16 = var1.bind(var4)(var2);
            var2 = _closure1_slot8;
            var1 = {};
            var20 = {};
            var19 = 3;
            var19 = var19 * var7;
            var20['maxHeight'] = var19;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var16.scrollerStyle;
            var19[1] = var20;
            var1['style'] = var19;
            var20 = var15.scrollViewContent;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = undefined;
            if(!var38) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var20 = var15.horizontalScrollViewContent;
case 63:
            var19[1] = var20;
            var1['contentContainerStyle'] = var19;
            var1['ref'] = var13;
            var1['bounces'] = var33;
            var13 = var16.onScroll;
            var1['onScroll'] = var13;
            var13 = undefined;
            if(!var38) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var13 = var18;
case 65:
            var1['onLayout'] = var13;
            var13 = var16.scrollEventThrottle;
            var1['scrollEventThrottle'] = var13;
            var1['horizontal'] = var38;
            var1['snapToInterval'] = var7;
            var7 = 'never';
            var1['overScrollMode'] = var7;
            var7 = 'handled';
            var1['keyboardShouldPersistTaps'] = var7;
            var18 = _closure1_slot9;
            var13 = _closure1_slot5;
            var7 = {};
            var20 = var15.inputInner;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var38;
            if(!var38) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var20 = var15.horizontalInputInner;
case 67:
            var19[1] = var20;
            var7['style'] = var19;
            var20 = var30.map;
            var19 = function(arg1, arg2) {
                var6 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TagListInputTagComponent;
                var1 = {};
                var1['tag'] = var6;
                var9 = var6.id;
                var8 = _closure2_slot12;
                var8 = var9 === var8;
                var1['selected'] = var8;
                var7 = function onPress(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = 'select';
                        var1 = arg1;
                        if(!(var2 !== var1)) { _fun0016_ip = 69; continue _fun0016 }
case 70:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var3 = var1 == var3;
                        var4 = undefined;
                        var1 = undefined;
                        if(var3) { _fun0016_ip = 71; continue _fun0016 }
case 72:
                        var3 = _closure2_slot2;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2);
case 71:
                        _fun0016_ip = 73; continue _fun0016;
case 69:
                        var2 = _closure3_slot0;
                        var5 = _closure2_slot12;
                        var4 = var2.id;
                        if(!(var5 !== var4)) { _fun0016_ip = 74; continue _fun0016 }
case 75:
                        var5 = _closure2_slot13;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
case 74:
                        var2 = _closure2_slot4;
                        var5 = var2.current;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0016_ip = 76; continue _fun0016 }
case 77:
                        var2 = var5.focus;
                        var2 = var2.bind(var5)();
case 76:
                        var6 = _closure2_slot14;
                        var2 = undefined;
                        var5 = true;
                        var5 = var6.bind(var2)(var5);
                        var5 = _closure2_slot4;
                        var6 = var5.current;
                        if(!(var4 != var6)) { _fun0016_ip = 78; continue _fun0016 }
case 79:
                        var5 = var6.setSelection;
                        var4 = 0;
                        var4 = var5.bind(var6)(var4, var4);
case 78:
                        var4 = _closure2_slot7;
                        var3 = {'start': 0, 'end': 0};
                        var4['current'] = var3;
                        var1 = undefined;
case 73:
                        return var1;
                    }
                };
                var1['onPress'] = var7;
                var7 = 0;
                var7 = var7 === var5;
                var1['start'] = var7;
                var6 = _closure2_slot0;
                var7 = var6.length;
                var6 = 1;
                var6 = var7 - var6;
                var6 = var5 === var6;
                var1['end'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var20 = var20.bind(var30)(var19);
            var19 = new Array(2);
            var19[0] = var20;
            var21 = _closure1_slot8;
            var20 = {};
            var20['ref'] = var43;
            var20['accessibilityHint'] = var42;
            var42 = 'search';
            var20['accessibilityRole'] = var42;
            var41 = var41.current;
            if(!var41) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var36 = var37.current;
case 80:
            var20['defaultValue'] = var36;
            var37 = var15.searchInput;
            var36 = new Array(3);
            var36[0] = var37;
            var37 = var38;
            if(!var37) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var37 = var15.horizontalSearchInput;
case 82:
            var36[1] = var37;
            var37 = undefined;
            if(!var38) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var37 = undefined;
            if(!var32) { _fun0001_ip = 84; continue _fun0001 }
case 86:
            var38 = {};
            var39 = var39 - var40;
            var38['maxWidth'] = var39;
            var37 = var38;
case 84:
            var36[2] = var37;
            var20['style'] = var36;
            var20['onChangeText'] = var35;
            var35 = function onKeyPress(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var5 = _closure2_slot14;
                    var1 = undefined;
                    var3 = false;
                    var3 = var5.bind(var1)(var3);
                    var3 = arg1;
                    var3 = var3.nativeEvent;
                    var5 = var3.key;
                    var3 = 'Backspace';
                    var7 = var3 === var5;
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var3 = var3.start;
                    var6 = 0;
                    var5 = var6 === var3;
                    if(!var5) { _fun0017_ip = 87; continue _fun0017 }
case 88:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var3 = var3.end;
                    var5 = var6 === var3;
case 87:
                    if(!var7) { _fun0017_ip = 26; continue _fun0017 }
case 89:
                    var8 = _closure2_slot12;
                    var3 = null;
                    if(!(var3 == var8)) { _fun0017_ip = 90; continue _fun0017 }
case 26:
                    if(!var7) { _fun0017_ip = 91; continue _fun0017 }
case 92:
                    if(var5) { _fun0017_ip = 93; continue _fun0017 }
case 91:
                    var5 = _closure2_slot12;
                    var7 = null;
                    if(!(var7 == var5)) { _fun0017_ip = 94; continue _fun0017 }
case 95:
                    var5 = _closure2_slot7;
                    var5 = var5.current;
                    var5 = var7 != var5;
                    if(!var5) { _fun0017_ip = 96; continue _fun0017 }
case 31:
                    var8 = _closure2_slot7;
                    var8 = var8.current;
                    var9 = var8.start;
                    var8 = _closure2_slot7;
                    var8 = var8.current;
                    var8 = var8.end;
                    var5 = var9 === var8;
case 96:
                    if(!var5) { _fun0017_ip = 97; continue _fun0017 }
case 98:
                    var8 = _closure2_slot7;
                    var8 = var8.current;
                    var9 = var8.start;
                    var8 = _closure2_slot5;
                    var8 = var8.current;
                    var8 = var8.length;
                    var5 = var9 === var8;
case 97:
                    if(!var5) { _fun0017_ip = 99; continue _fun0017 }
case 100:
                    var5 = global;
                    var9 = var5.setTimeout;
                    var8 = function() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var1 = _closure2_slot11;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 22; continue _fun0018 }
case 21:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
case 22:
                            return var1;
                        }
                    };
                    var5 = 10;
                    var5 = var9.bind(var1)(var8, var5);
                    _fun0017_ip = 99; continue _fun0017;
case 94:
                    var5 = _closure2_slot13;
                    var5 = var5.bind(var1)(var7);
                    _fun0017_ip = 99; continue _fun0017;
case 93:
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    if(!(var6 !== var5)) { _fun0017_ip = 101; continue _fun0017 }
case 102:
                    var6 = _closure2_slot0;
                    var7 = var6.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var11 = var6[var5];
                    var6 = _closure2_slot13;
                    var5 = var11.id;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot14;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 24;
                    var5 = var12[var5];
                    var5 = var8.bind(var1)(var5);
                    var7 = var5.AccessibilityAnnouncer;
                    var6 = var7.announce;
                    var5 = 22;
                    var9 = var12[var5];
                    var9 = var8.bind(var1)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var5 = var12[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var8 = var5.QymItZ;
                    var5 = {};
                    var11 = var11.text;
                    var5['text'] = var11;
                    var5 = var9.bind(var10)(var8, var5);
                    var5 = var6.bind(var7)(var5);
                    _fun0017_ip = 99; continue _fun0017;
case 101:
                    return var1;
case 90:
                    var6 = _closure2_slot0;
                    var5 = var6.findIndex;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot12;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = -1;
                    if(!(var5 > var4)) { _fun0017_ip = 103; continue _fun0017 }
case 104:
                    var4 = _closure2_slot2;
                    if(!(var3 != var4)) { _fun0017_ip = 103; continue _fun0017 }
case 105:
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)(var5);
case 103:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var1)(var3);
case 99:
                    return var1;
                }
            };
            var20['onKeyPress'] = var35;
            var35 = function onFocus(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.onFocus;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0019_ip = 106; continue _fun0019 }
case 107:
                    var3 = _closure2_slot9;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var20['onFocus'] = var35;
            var35 = function onBlur(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.onBlur;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0020_ip = 106; continue _fun0020 }
case 107:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var20['onBlur'] = var35;
            var35 = function onPressIn() {
                var4 = _closure2_slot14;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot13;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20['onPressIn'] = var35;
            var35 = 'none';
            var20['autoCapitalize'] = var35;
            var20['autoCorrect'] = var33;
            var20['aria-label'] = var27;
            var33 = var30.length;
            var30 = undefined;
            if(!(var34 === var33)) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var30 = undefined;
            if(!var32) { _fun0001_ip = 108; continue _fun0001 }
case 110:
            var30 = var31;
case 108:
            var20['placeholder'] = var30;
            var30 = var15.placeholder;
            var30 = var30.color;
            var20['placeholderTextColor'] = var30;
            var20['autoFocus'] = var29;
            var20['returnKeyType'] = var28;
            var20['accessibilityLabel'] = var27;
            var20['caretHidden'] = var26;
            var20['onSubmitEditing'] = var25;
            var20['maxFontSizeMultiplier'] = var24;
            var23 = function onSelectionChange(arg1) {
                var2 = _closure2_slot7;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.selection;
                var2['current'] = var1;
                return var1;
            };
            var20['onSelectionChange'] = var23;
            var20 = var21.bind(var4)(var22, var20);
            var19[1] = var20;
            var7['children'] = var19;
            var7 = var18.bind(var4)(var13, var7);
            var1['children'] = var7;
            var13 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = {};
            var7['minHeight'] = var5;
            var5 = 'hidden';
            var7['overflow'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 25;
            var5 = var18[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.InputFieldContainer;
            var5 = {};
            var18 = 'sm';
            var5['size'] = var18;
            var5['isDisabled'] = var17;
            var5['isFocused'] = var8;
            if(!(var10 == var12)) { _fun0001_ip = 111; continue _fun0001 }
case 112:
            var18 = _closure1_slot8;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 26;
            var8 = var19[var8];
            var8 = var17.bind(var4)(var8);
            var17 = var8.MagnifyingGlassIcon;
            var8 = {'style': null, 'size': 'xs', 'color': 'interactive-text-default'};
            var19 = var15.iconLeft;
            var8['style'] = var19;
            var12 = var18.bind(var4)(var17, var8);
case 111:
            var8 = new Array(3);
            var8[0] = var12;
            var12 = var16.wrap;
            var12 = var12.bind(var16)(var13);
            var8[1] = var12;
            if(!(var10 == var9)) { _fun0001_ip = 113; continue _fun0001 }
case 114:
            var12 = var10 != var14;
            var10 = null;
            if(!var12) { _fun0001_ip = 115; continue _fun0001 }
case 116:
            var13 = _closure1_slot8;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var15.iconContainer;
            var11['style'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 115:
            var9 = var10;
case 113:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TagListInput/native/TagListInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();