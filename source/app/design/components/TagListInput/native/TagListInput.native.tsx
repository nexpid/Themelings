// app/design/components/TagListInput/native/TagListInput.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var15 = 0;
    var4 = var6[var15];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var16 = 3;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 2, 'borderRadius': null, 'minHeight': null, 'overflow': 'hidden'};
    var11 = 5;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INPUT_BACKGROUND;
    var10['backgroundColor'] = var17;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var10['borderRadius'] = var17;
    var17 = 6;
    var17 = var6[var17];
    var17 = var5.bind(var1)(var17);
    var17 = var17.InputHeights;
    var17 = var17.MD;
    var10['minHeight'] = var17;
    var4['inputContainer'] = var10;
    var10 = {};
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INPUT_PLACEHOLDER_TEXT;
    var10['color'] = var17;
    var4['placeholder'] = var10;
    var10 = {};
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var10['paddingHorizontal'] = var17;
    var4['iconContainer'] = var10;
    var10 = {};
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var10['marginLeft'] = var17;
    var4['iconLeft'] = var10;
    var10 = {};
    var10['paddingVertical'] = var16;
    var4['scrollViewContent'] = var10;
    var10 = {};
    var10['flexGrow'] = var13;
    var4['horizontalScrollViewContent'] = var10;
    var10 = {'marginHorizontal': null, 'alignItems': 'center', 'flexDirection': 'row', 'flexWrap': 'wrap', 'flex': 1};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var10['marginHorizontal'] = var16;
    var4['inputInner'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var10['minHeight'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_48;
    var10['minWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var10['color'] = var13;
    var13 = 7;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.TextStyleSheet;
    var19 = var13.text-sm/medium;
    var20 = var10;
    var13 = copyDataProperties(var20, var19);
    var13 = 'paddingVertical';
    var10[var13] = var15;
    var13 = 'marginVertical';
    var10[var13] = var14;
    var4['searchInput'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_64;
    var10['minWidth'] = var11;
    var4['horizontalSearchInput'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var4['searchInputDisabled'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var35 = var2.defaultValue;
            var36 = var2.disabled;
            var4 = undefined;
            if(!(var36 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 22:
            var36 = false;
 24:
            var25 = var2.placeholder;
            var9 = var2.icon;
            var11 = var2.onChangeText;
            var7 = var2.onBlur;
            var16 = var2.onFocus;
            var15 = var2.onScroll;
            var10 = var2.style;
            var26 = var2.returnKeyType;
            if(!(var26 === var4)) { _fun0001_ip = 78; continue _fun0001 }
 74:
            var26 = 'search';
 78:
            var28 = var2.tags;
            var _closure2_slot0 = var28;
            var38 = var2.horizontal;
            if(!(var38 === var4)) { _fun0001_ip = 100; continue _fun0001 }
 98:
            var38 = false;
 100:
            var6 = var2.footer;
            var29 = var2.focusOnAdd;
            if(!(var29 === var4)) { _fun0001_ip = 118; continue _fun0001 }
 116:
            var29 = true;
 118:
            var _closure2_slot1 = var29;
            var1 = var2.inActionSheet;
            var23 = var2.onSubmitEditing;
            var3 = var2.onRemove;
            var _closure2_slot2 = var3;
            var27 = var2.autoFocus;
            var13 = var2.autoClearInputOnTagAdd;
            if(!(var13 === var4)) { _fun0001_ip = 162; continue _fun0001 }
 160:
            var13 = true;
 162:
            var _closure2_slot3 = var13;
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
            var2 = _closure1_slot9;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 9;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFontScale;
            var14 = var2.bind(var3)();
            var2 = global;
            var5 = var2.Math;
            var3 = var5.min;
            var22 = 2;
            var3 = var3.bind(var5)(var22, var14);
            var17 = var2.Math;
            var14 = var17.max;
            var2 = var12.inputContainer;
            var5 = var2.minHeight;
            var2 = var12.inputContainer;
            var2 = var2.minHeight;
            var2 = var2 * var3;
            var19 = var14.bind(var17)(var5, var2);
            var5 = function useTagListInputState(arg1, arg2) {
                var2 = arg2;
                var _closure3_slot0 = var2;
                var8 = _closure1_slot4;
                var4 = var8.useRef;
                var3 = null;
                var4 = var4.bind(var8)(var3);
                var _closure3_slot1 = var4;
                var6 = var8.useRef;
                var3 = '';
                var3 = var6.bind(var8)(var3);
                var _closure3_slot2 = var3;
                var7 = var8.useState;
                var6 = false;
                var10 = var7.bind(var8)(var6);
                var7 = _closure1_slot3;
                var9 = undefined;
                var6 = 2;
                var7 = var7.bind(var9)(var10, var6);
                var6 = 0;
                var10 = var7[var6];
                var _closure3_slot3 = var10;
                var6 = 1;
                var6 = var7[var6];
                var _closure3_slot4 = var6;
                var7 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = arg1;
                        var4 = arguments[1];
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0002_ip = 14; continue _fun0002 }
 12:
                        var4 = false;
 14:
                        var2 = _closure3_slot2;
                        var2['current'] = var5;
                        var6 = _closure3_slot4;
                        var7 = var5.length;
                        var2 = 0;
                        var2 = var7 > var2;
                        var2 = var6.bind(var1)(var2);
                        var6 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0002_ip = 66; continue _fun0002 }
 57:
                        var6 = _closure3_slot0;
                        var6 = var6.bind(var1)(var5);
 66:
                        if(!var4) { _fun0002_ip = 99; continue _fun0002 }
 69:
                        var3 = _closure3_slot1;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0002_ip = 99; continue _fun0002 }
 82:
                        var3 = var4.setNativeProps;
                        var2 = {};
                        var2['text'] = var5;
                        var2 = var3.bind(var4)(var2);
 99:
                        return var1;
                    }
                };
                var2 = var7.bind(var8)(var2, var6);
                var _closure3_slot5 = var2;
                var11 = var8.useImperativeHandle;
                var7 = arg1;
                var6 = function() {
                    var1 = {};
                    var3 = function blur() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0003_ip = 33; continue _fun0003 }
 23:
                            var2 = var3.blur;
                            var1 = var2.bind(var3)();
 33:
                            return var1;
                        }
                    };
                    var1['blur'] = var3;
                    var3 = function focus() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0004_ip = 33; continue _fun0004 }
 23:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
 33:
                            return var1;
                        }
                    };
                    var1['focus'] = var3;
                    var3 = function setText(arg1) {
                        var4 = _closure3_slot5;
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
 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var3 = var1 == var4;
                            var2 = undefined;
                            if(var3) { _fun0005_ip = 33; continue _fun0005 }
 23:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
 33:
                            var1 = var1 != var2;
                            if(!var1) { _fun0005_ip = 43; continue _fun0005 }
 40:
                            var1 = var2;
 43:
                            return var1;
                        }
                    };
                    var1['isFocused'] = var3;
                    var3 = function measure(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0006_ip = 37; continue _fun0006 }
 23:
                            var3 = var4.measure;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
 37:
                            return var1;
                        }
                    };
                    var1['measure'] = var3;
                    var3 = function measureInWindow(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0007_ip = 37; continue _fun0007 }
 23:
                            var3 = var4.measureInWindow;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
 37:
                            return var1;
                        }
                    };
                    var1['measureInWindow'] = var3;
                    var2 = function measureLayout(arg1, arg2, arg3) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = _closure3_slot1;
                            var6 = var1.current;
                            var1 = null;
                            var2 = var1 == var6;
                            var1 = undefined;
                            if(var2) { _fun0008_ip = 45; continue _fun0008 }
 23:
                            var5 = var6.measureLayout;
                            var4 = arg1;
                            var3 = arg2;
                            var2 = arg3;
                            var1 = var5.bind(var6)(var4, var3, var2);
 45:
                            return var1;
                        }
                    };
                    var1['measureLayout'] = var2;
                    return var1;
                };
                var6 = var11.bind(var8)(var7, var6);
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var2;
                var1 = function() {
                    var1 = {};
                    var2 = {};
                    var4 = true;
                    var2['isClearable'] = var4;
                    var1['clearProps'] = var2;
                    var2 = {};
                    var4 = _closure3_slot3;
                    var2['hasValue'] = var4;
                    var4 = function clear() {
                        var4 = _closure3_slot5;
                        var3 = undefined;
                        var2 = '';
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['clear'] = var4;
                    var3 = function setTextValue(arg1) {
                        var4 = _closure3_slot5;
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
                var1 = var7.bind(var8)(var1, var6);
                var8 = var1.clearProps;
                var7 = var1.clearState;
                var1 = {};
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var6 = var6.bind(var9)(var5);
                var5 = var6.useInputClearButton;
                var5 = var5.bind(var6)(var8, var7);
                var1['clearButton'] = var5;
                var1['inputRef'] = var4;
                var1['inputValueRef'] = var3;
                var1['inputUpdate'] = var2;
                return var1;
            };
            var2 = arg2;
            var2 = var5.bind(var4)(var2, var11);
            var39 = var2.inputRef;
            _closure2_slot4 = var39;
            var37 = var2.inputValueRef;
            _closure2_slot5 = var37;
            var34 = var2.inputUpdate;
            _closure2_slot6 = var34;
            var11 = var2.clearButton;
            var17 = _closure1_slot4;
            var5 = var17.useRef;
            var31 = 0;
            var2 = {'start': 0, 'end': 0};
            var2 = var5.bind(var17)(var2);
            _closure2_slot7 = var2;
            var14 = _closure1_slot1;
            var2 = 10;
            var2 = var18[var2];
            var5 = var14.bind(var4)(var2);
            var2 = {};
            var2['onFocus'] = var16;
            var2['onBlur'] = var7;
            var2 = var5.bind(var4)(var2);
            var33 = var2.onFocus;
            var32 = var2.onBlur;
            var2 = var17.useRef;
            var7 = null;
            var16 = var2.bind(var17)(var7);
            _closure2_slot8 = var16;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var7);
            var20 = _closure1_slot3;
            var5 = var20.bind(var4)(var2, var22);
            var2 = var5[var31];
            _closure2_slot9 = var2;
            var2 = 1;
            var5 = var5[var2];
            _closure2_slot10 = var5;
            var5 = var17.useState;
            var30 = false;
            var5 = var5.bind(var17)(var30);
            var5 = var20.bind(var4)(var5, var22);
            var24 = var5[var31];
            var5 = var5[var2];
            _closure2_slot11 = var5;
            var5 = 11;
            var5 = var18[var5];
            var5 = var14.bind(var4)(var5);
            var5 = var5.bind(var4)(var28);
            _closure2_slot12 = var5;
            var14 = var17.useRef;
            var20 = var14.bind(var17)(var28);
            _closure2_slot13 = var20;
            var18 = var17.useLayoutEffect;
            var14 = new Array(7);
            var14[0] = var29;
            var14[1] = var34;
            var14[2] = var20;
            var14[3] = var28;
            var14[4] = var39;
            var14[5] = var37;
            var14[6] = var13;
            var13 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    if(!(var3 < var2)) { _fun0009_ip = 171; continue _fun0009 }
 33:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0009_ip = 99; continue _fun0009 }
 40:
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    var2 = null;
                    var3 = var2 == var5;
                    var4 = undefined;
                    if(var3) { _fun0009_ip = 70; continue _fun0009 }
 60:
                    var3 = var5.isFocused;
                    var4 = var3.bind(var5)();
 70:
                    var3 = false;
                    if(!(var3 === var4)) { _fun0009_ip = 99; continue _fun0009 }
 76:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0009_ip = 99; continue _fun0009 }
 89:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
 99:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var5 = undefined;
                    var3 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = _closure2_slot8;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0010_ip = 43; continue _fun0010 }
 23:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
 43:
                            return var1;
                        }
                    };
                    var2 = 10;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0009_ip = 152; continue _fun0009 }
 132:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
 152:
                    if(!var2) { _fun0009_ip = 171; continue _fun0009 }
 155:
                    var4 = _closure2_slot6;
                    var3 = '';
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
 171:
                    var2 = _closure2_slot13;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var18.bind(var17)(var13, var14);
            var14 = var17.useLayoutEffect;
            var13 = new Array(1);
            var13[0] = var5;
            var5 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot12;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0011_ip = 53; continue _fun0011 }
 18:
                    var1 = _closure2_slot8;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0011_ip = 53; continue _fun0011 }
 33:
                    var2 = var3.scrollToEnd;
                    var1 = {};
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var14.bind(var17)(var5, var13);
            if(var1) { _fun0001_ip = 646; continue _fun0001 }
 640:
            var13 = _closure1_slot6;
            _fun0001_ip = 672; continue _fun0001;
 646:
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 12;
            var5 = var17[var5];
            var5 = var14.bind(var4)(var5);
            var13 = var5.BottomSheetScrollView;
 672:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var1) { _fun0001_ip = 703; continue _fun0001 }
 683:
            var1 = 14;
            var1 = var14[var1];
            var1 = var5.bind(var4)(var1);
            var20 = var1.TextInput;
            _fun0001_ip = 721; continue _fun0001;
 703:
            var1 = 13;
            var1 = var14[var1];
            var1 = var5.bind(var4)(var1);
            var20 = var1.BottomSheetTextInput;
 721:
            var1 = 33;
            var14 = var1 * var3;
            var5 = _closure1_slot4;
            var1 = var5.useState;
            var3 = var1.bind(var5)(var31);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var22);
            var40 = var1[var31];
            var1 = var1[var2];
            _closure2_slot14 = var1;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var3 = _closure2_slot14;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var17 = var3.bind(var5)(var2, var1);
            var29 = var7 == var11;
            if(!(var7 == var25)) { _fun0001_ip = 847; continue _fun0001 }
 792:
            var5 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 15;
            var2 = var18[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var18[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.5h0QOD;
            var25 = var2.bind(var3)(var1);
 847:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var18 = var12.inputContainer;
            var5 = new Array(3);
            var5[0] = var18;
            var18 = {};
            var18['minHeight'] = var19;
            var5[1] = var18;
            var5[2] = var10;
            var1['style'] = var5;
            if(!(var7 == var9)) { _fun0001_ip = 956; continue _fun0001 }
 894:
            var18 = _closure1_slot7;
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 16;
            var5 = var19[var5];
            var5 = var10.bind(var4)(var5);
            var10 = var5.MagnifyingGlassIcon;
            var5 = {'style': null, 'size': 'xs', 'color': 'interactive-normal'};
            var19 = var12.iconLeft;
            var5['style'] = var19;
            var9 = var18.bind(var4)(var10, var5);
 956:
            var5 = new Array(3);
            var5[0] = var9;
            var10 = _closure1_slot7;
            var9 = {};
            var18 = {};
            var19 = 3;
            var19 = var19 * var14;
            var18['maxHeight'] = var19;
            var9['style'] = var18;
            var19 = var12.scrollViewContent;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = undefined;
            if(!var38) { _fun0001_ip = 1013; continue _fun0001 }
 1007:
            var19 = var12.horizontalScrollViewContent;
 1013:
            var18[1] = var19;
            var9['contentContainerStyle'] = var18;
            var9['ref'] = var16;
            var9['bounces'] = var30;
            var9['onScroll'] = var15;
            var16 = undefined;
            if(!var38) { _fun0001_ip = 1044; continue _fun0001 }
 1041:
            var16 = var17;
 1044:
            var9['onLayout'] = var16;
            var16 = var7 != var15;
            var15 = undefined;
            if(!var16) { _fun0001_ip = 1061; continue _fun0001 }
 1058:
            var15 = 16;
 1061:
            var9['scrollEventThrottle'] = var15;
            var9['horizontal'] = var38;
            var9['snapToInterval'] = var14;
            var14 = 'never';
            var9['overScrollMode'] = var14;
            var14 = 'handled';
            var9['keyboardShouldPersistTaps'] = var14;
            var16 = _closure1_slot8;
            var15 = _closure1_slot5;
            var14 = {};
            var17 = var12.inputInner;
            var14['style'] = var17;
            var18 = var28.map;
            var17 = function(arg1, arg2) {
                var6 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TagListInputTagComponent;
                var1 = {};
                var1['tag'] = var6;
                var9 = var6.id;
                var8 = _closure2_slot9;
                var8 = var9 === var8;
                var1['selected'] = var8;
                var7 = function onPress(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = 'select';
                        var1 = arg1;
                        if(!(var2 !== var1)) { _fun0012_ip = 49; continue _fun0012 }
 11:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var3 = var1 == var3;
                        var4 = undefined;
                        var1 = undefined;
                        if(var3) { _fun0012_ip = 47; continue _fun0012 }
 31:
                        var3 = _closure2_slot2;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2);
 47:
                        _fun0012_ip = 128; continue _fun0012;
 49:
                        var3 = _closure3_slot0;
                        var5 = _closure2_slot9;
                        var4 = var3.id;
                        if(!(var5 !== var4)) { _fun0012_ip = 88; continue _fun0012 }
 72:
                        var5 = _closure2_slot10;
                        var4 = var3.id;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
 88:
                        var3 = _closure2_slot4;
                        var4 = var3.current;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0012_ip = 113; continue _fun0012 }
 103:
                        var3 = var4.focus;
                        var3 = var3.bind(var4)();
 113:
                        var4 = _closure2_slot11;
                        var2 = undefined;
                        var3 = true;
                        var3 = var4.bind(var2)(var3);
                        var1 = undefined;
 128:
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
            var18 = var18.bind(var28)(var17);
            var17 = new Array(2);
            var17[0] = var18;
            var19 = _closure1_slot7;
            var18 = {};
            var18['ref'] = var39;
            var39 = 'search';
            var18['accessibilityRole'] = var39;
            var41 = var37.current;
            var39 = '';
            if(!(var39 !== var41)) { _fun0001_ip = 1175; continue _fun0001 }
 1170:
            var35 = var37.current;
 1175:
            var18['defaultValue'] = var35;
            var37 = var12.searchInput;
            var35 = new Array(4);
            var35[0] = var37;
            var37 = var38;
            if(!var37) { _fun0001_ip = 1206; continue _fun0001 }
 1200:
            var37 = var12.horizontalSearchInput;
 1206:
            var35[1] = var37;
            var37 = undefined;
            if(!var38) { _fun0001_ip = 1237; continue _fun0001 }
 1215:
            var37 = undefined;
            if(!var29) { _fun0001_ip = 1237; continue _fun0001 }
 1220:
            var38 = {};
            var39 = 16;
            var39 = var40 - var39;
            var38['maxWidth'] = var39;
            var37 = var38;
 1237:
            var35[2] = var37;
            if(!var36) { _fun0001_ip = 1250; continue _fun0001 }
 1244:
            var36 = var12.searchInputDisabled;
 1250:
            var35[3] = var36;
            var18['style'] = var35;
            var18['onChangeText'] = var34;
            var34 = function onKeyPress(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var5 = _closure2_slot11;
                    var1 = undefined;
                    var3 = false;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var3 = var3.length;
                    var6 = 0;
                    if(!(var6 === var3)) { _fun0013_ip = 64; continue _fun0013 }
 38:
                    var3 = arg1;
                    var3 = var3.nativeEvent;
                    var5 = var3.key;
                    var3 = 'Backspace';
                    if(!(var3 !== var5)) { _fun0013_ip = 204; continue _fun0013 }
 64:
                    var3 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 == var3)) { _fun0013_ip = 190; continue _fun0013 }
 74:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var3 = var5 != var3;
                    if(!var3) { _fun0013_ip = 122; continue _fun0013 }
 90:
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var8 = var7.start;
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var7 = var7.end;
                    var3 = var8 === var7;
 122:
                    if(!var3) { _fun0013_ip = 157; continue _fun0013 }
 125:
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var8 = var7.start;
                    var7 = _closure2_slot5;
                    var7 = var7.current;
                    var7 = var7.length;
                    var3 = var8 === var7;
 157:
                    if(!var3) { _fun0013_ip = 437; continue _fun0013 }
 163:
                    var3 = global;
                    var8 = var3.setTimeout;
                    var7 = function() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var1 = _closure2_slot8;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0014_ip = 43; continue _fun0014 }
 23:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
 43:
                            return var1;
                        }
                    };
                    var3 = 10;
                    var3 = var8.bind(var1)(var7, var3);
                    _fun0013_ip = 437; continue _fun0013;
 190:
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)(var5);
                    _fun0013_ip = 437; continue _fun0013;
 204:
                    var5 = _closure2_slot9;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0013_ip = 381; continue _fun0013 }
 217:
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    if(!(var5 > var6)) { _fun0013_ip = 437; continue _fun0013 }
 233:
                    var6 = _closure2_slot0;
                    var7 = var6.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var11 = var6[var5];
                    var6 = _closure2_slot10;
                    var5 = var11.id;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot11;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 18;
                    var5 = var12[var5];
                    var5 = var8.bind(var1)(var5);
                    var7 = var5.AccessibilityAnnouncer;
                    var6 = var7.announce;
                    var5 = 15;
                    var9 = var12[var5];
                    var9 = var8.bind(var1)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var5 = var12[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var8 = var5.QymItb;
                    var5 = {};
                    var11 = var11.text;
                    var5['text'] = var11;
                    var5 = var9.bind(var10)(var8, var5);
                    var5 = var6.bind(var7)(var5);
                    _fun0013_ip = 437; continue _fun0013;
 381:
                    var6 = _closure2_slot0;
                    var5 = var6.findIndex;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot9;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = -1;
                    if(!(var5 > var4)) { _fun0013_ip = 437; continue _fun0013 }
 411:
                    var4 = _closure2_slot2;
                    if(!(var3 != var4)) { _fun0013_ip = 428; continue _fun0013 }
 419:
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)(var5);
 428:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var1)(var3);
 437:
                    return var1;
                }
            };
            var18['onKeyPress'] = var34;
            var18['onFocus'] = var33;
            var18['onBlur'] = var32;
            var32 = function onPressIn() {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot10;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onPressIn'] = var32;
            var32 = 'none';
            var18['autoCapitalize'] = var32;
            var18['autoCorrect'] = var30;
            var18['aria-label'] = var25;
            var30 = var28.length;
            var28 = undefined;
            if(!(var31 === var30)) { _fun0001_ip = 1331; continue _fun0001 }
 1323:
            var28 = undefined;
            if(!var29) { _fun0001_ip = 1331; continue _fun0001 }
 1328:
            var28 = var25;
 1331:
            var18['placeholder'] = var28;
            var28 = var12.placeholder;
            var28 = var28.color;
            var18['placeholderTextColor'] = var28;
            var18['autoFocus'] = var27;
            var18['returnKeyType'] = var26;
            var18['accessibilityLabel'] = var25;
            var18['caretHidden'] = var24;
            var18['onSubmitEditing'] = var23;
            var18['maxFontSizeMultiplier'] = var22;
            var21 = function onSelectionChange(arg1) {
                var2 = _closure2_slot7;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.selection;
                var2['current'] = var1;
                return var1;
            };
            var18['onSelectionChange'] = var21;
            var18 = var19.bind(var4)(var20, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var9['children'] = var14;
            var9 = var10.bind(var4)(var13, var9);
            var5[1] = var9;
            if(!(var7 == var6)) { _fun0001_ip = 1471; continue _fun0001 }
 1429:
            var9 = var7 != var11;
            var7 = null;
            if(!var9) { _fun0001_ip = 1468; continue _fun0001 }
 1438:
            var10 = _closure1_slot7;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var12.iconContainer;
            var8['style'] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 1468:
            var6 = var7;
 1471:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TagListInput/native/TagListInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();