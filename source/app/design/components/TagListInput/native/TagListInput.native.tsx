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
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arguments[0];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var1 = {};
            var2 = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 2};
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 5;
            var3 = var3[var6];
            var3 = var8.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.INPUT_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var3;
            var8 = 2;
            var9 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var9.bind(var5)(var3);
            var9 = var3.radii;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var9.lg;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = var9.md;
case 6:
            var2['borderRadius'] = var3;
            var3 = undefined;
            if(!var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = 1;
case 7:
            var2['borderWidth'] = var3;
            var3 = undefined;
            if(!var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var7 = var7.colors;
            var3 = var7.INPUT_BORDER_DEFAULT;
case 9:
            var2['borderColor'] = var3;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 6;
            var7 = var3[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.InputHeights;
            var7 = var7.MD;
            var2['minHeight'] = var7;
            var7 = 'hidden';
            var2['overflow'] = var7;
            var1['inputContainer'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.INPUT_PLACEHOLDER_TEXT_DEFAULT;
            var2['color'] = var7;
            var1['placeholder'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var2['paddingHorizontal'] = var7;
            var1['iconContainer'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var2['marginLeft'] = var7;
            var1['iconLeft'] = var2;
            var2 = {};
            var7 = 3;
            var2['paddingVertical'] = var7;
            var1['scrollViewContent'] = var2;
            var2 = {};
            var7 = 1;
            var2['flexGrow'] = var7;
            var1['horizontalScrollViewContent'] = var2;
            var2 = {'marginHorizontal': null, 'alignItems': 'center', 'flexDirection': 'row', 'flexWrap': 'wrap', 'flex': 1};
            var10 = var3[var6];
            var10 = var4.bind(var5)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_4;
            var2['marginHorizontal'] = var10;
            var1['inputInner'] = var2;
            var2 = {};
            var2['flex'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_24;
            var2['minHeight'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_48;
            var2['minWidth'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.TEXT_DEFAULT;
            var2['color'] = var7;
            var7 = 7;
            var7 = var3[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.TextStyleSheet;
            var11 = var7.text-sm/medium;
            var12 = var2;
            var7 = copyDataProperties(var12, var11);
            var9 = 0;
            var7 = 'paddingVertical';
            var2[var7] = var9;
            var7 = 'marginVertical';
            var2[var7] = var8;
            var1['searchInput'] = var2;
            var2 = {};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_64;
            var2['minWidth'] = var3;
            var1['horizontalSearchInput'] = var2;
            var2 = {};
            var3 = 0.5;
            var2['opacity'] = var3;
            var1['searchInputDisabled'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function TagListInput(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var35 = var2.defaultValue;
            var36 = var2.disabled;
            var4 = undefined;
            if(!(var36 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var36 = false;
case 11:
            var25 = var2.placeholder;
            var9 = var2.icon;
            var11 = var2.onChangeText;
            var7 = var2.onBlur;
            var16 = var2.onFocus;
            var15 = var2.onScroll;
            var10 = var2.style;
            var26 = var2.returnKeyType;
            if(!(var26 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var26 = 'search';
case 13:
            var28 = var2.tags;
            var _closure2_slot0 = var28;
            var38 = var2.horizontal;
            if(!(var38 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var38 = false;
case 15:
            var6 = var2.footer;
            var29 = var2.focusOnAdd;
            if(!(var29 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 17:
            var29 = true;
case 8:
            var _closure2_slot1 = var29;
            var1 = var2.inActionSheet;
            var23 = var2.onSubmitEditing;
            var3 = var2.onRemove;
            var _closure2_slot2 = var3;
            var27 = var2.autoFocus;
            var13 = var2.autoClearInputOnTagAdd;
            if(!(var13 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var13 = true;
case 18:
            var _closure2_slot3 = var13;
            var5 = var2.ref;
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
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 9;
            var2 = var18[var2];
            var3 = var14.bind(var4)(var2);
            var2 = 'TagListInput';
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot9;
            var12 = var2.bind(var4)(var3);
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFontScale;
            var19 = var2.bind(var3)();
            var2 = global;
            var17 = var2.Math;
            var3 = var17.min;
            var22 = 2;
            var3 = var3.bind(var17)(var22, var19);
            var20 = var2.Math;
            var19 = var20.max;
            var2 = var12.inputContainer;
            var17 = var2.minHeight;
            var2 = var12.inputContainer;
            var2 = var2.minHeight;
            var2 = var2 * var3;
            var19 = var19.bind(var20)(var17, var2);
            var2 = function useTagListInputState(arg1, arg2) {
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = arg1;
                        var4 = arguments[1];
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var4 = false;
case 20:
                        var2 = _closure3_slot2;
                        var2['current'] = var5;
                        var6 = _closure3_slot4;
                        var7 = var5.length;
                        var2 = 0;
                        var2 = var7 > var2;
                        var2 = var6.bind(var1)(var2);
                        var6 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                        var6 = _closure3_slot0;
                        var6 = var6.bind(var1)(var5);
case 22:
                        if(!var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var3 = _closure3_slot1;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                        var3 = var4.setNativeProps;
                        var2 = {};
                        var2['text'] = var5;
                        var2 = var3.bind(var4)(var2);
case 24:
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                            var2 = var3.blur;
                            var1 = var2.bind(var3)();
case 27:
                            return var1;
                        }
                    };
                    var1['blur'] = var3;
                    var3 = function focus() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
case 27:
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var3 = var1 == var4;
                            var2 = undefined;
                            if(var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 27:
                            var1 = var1 != var2;
                            if(!var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                            var1 = var2;
case 29:
                            return var1;
                        }
                    };
                    var1['isFocused'] = var3;
                    var3 = function measure(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0007_ip = 31; continue _fun0007 }
case 28:
                            var3 = var4.measure;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 31:
                            return var1;
                        }
                    };
                    var1['measure'] = var3;
                    var3 = function measureInWindow(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 28:
                            var3 = var4.measureInWindow;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 31:
                            return var1;
                        }
                    };
                    var1['measureInWindow'] = var3;
                    var2 = function measureLayout(arg1, arg2, arg3) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var6 = var1.current;
                            var1 = null;
                            var2 = var1 == var6;
                            var1 = undefined;
                            if(var2) { _fun0009_ip = 32; continue _fun0009 }
case 28:
                            var5 = var6.measureLayout;
                            var4 = arg1;
                            var3 = arg2;
                            var2 = arg3;
                            var1 = var5.bind(var6)(var4, var3, var2);
case 32:
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
            var2 = var2.bind(var4)(var5, var11);
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
            var2 = 11;
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
            var5 = 12;
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    if(!(var3 < var2)) { _fun0010_ip = 33; continue _fun0010 }
case 27:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0010_ip = 24; continue _fun0010 }
case 30:
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    var2 = null;
                    var3 = var2 == var5;
                    var4 = undefined;
                    if(var3) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var3 = var5.isFocused;
                    var4 = var3.bind(var5)();
case 34:
                    var3 = false;
                    if(!(var3 === var4)) { _fun0010_ip = 24; continue _fun0010 }
case 36:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0010_ip = 24; continue _fun0010 }
case 37:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 24:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var5 = undefined;
                    var3 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = _closure2_slot8;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0011_ip = 29; continue _fun0011 }
case 28:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
case 29:
                            return var1;
                        }
                    };
                    var2 = 10;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
case 38:
                    if(!var2) { _fun0010_ip = 33; continue _fun0010 }
case 40:
                    var4 = _closure2_slot6;
                    var3 = '';
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
case 33:
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0012_ip = 41; continue _fun0012 }
case 42:
                    var1 = _closure2_slot8;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0012_ip = 41; continue _fun0012 }
case 27:
                    var2 = var3.scrollToEnd;
                    var1 = {};
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var14.bind(var17)(var5, var13);
            if(var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var13 = _closure1_slot6;
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 13;
            var5 = var17[var5];
            var5 = var14.bind(var4)(var5);
            var13 = var5.BottomSheetScrollView;
case 45:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var1) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var1 = 15;
            var1 = var14[var1];
            var1 = var5.bind(var4)(var1);
            var20 = var1.TextInput;
            _fun0002_ip = 48; continue _fun0002;
case 46:
            var1 = 14;
            var1 = var14[var1];
            var1 = var5.bind(var4)(var1);
            var20 = var1.BottomSheetTextInput;
case 48:
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
            if(!(var7 == var25)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var5 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 16;
            var2 = var18[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var18[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.5h0QOP;
            var25 = var2.bind(var3)(var1);
case 49:
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
            if(!(var7 == var9)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var18 = _closure1_slot7;
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 17;
            var5 = var19[var5];
            var5 = var10.bind(var4)(var5);
            var10 = var5.MagnifyingGlassIcon;
            var5 = {'style': null, 'size': 'xs', 'color': 'interactive-text-default'};
            var19 = var12.iconLeft;
            var5['style'] = var19;
            var9 = var18.bind(var4)(var10, var5);
case 51:
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
            if(!var38) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var19 = var12.horizontalScrollViewContent;
case 53:
            var18[1] = var19;
            var9['contentContainerStyle'] = var18;
            var9['ref'] = var16;
            var9['bounces'] = var30;
            var9['onScroll'] = var15;
            var16 = undefined;
            if(!var38) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var16 = var17;
case 55:
            var9['onLayout'] = var16;
            var16 = var7 != var15;
            var15 = undefined;
            if(!var16) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var15 = 16;
case 57:
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
                var1 = 18;
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
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = 'select';
                        var1 = arg1;
                        if(!(var2 !== var1)) { _fun0013_ip = 59; continue _fun0013 }
case 2:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var3 = var1 == var3;
                        var4 = undefined;
                        var1 = undefined;
                        if(var3) { _fun0013_ip = 60; continue _fun0013 }
case 61:
                        var3 = _closure2_slot2;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2);
case 60:
                        _fun0013_ip = 62; continue _fun0013;
case 59:
                        var3 = _closure3_slot0;
                        var5 = _closure2_slot9;
                        var4 = var3.id;
                        if(!(var5 !== var4)) { _fun0013_ip = 63; continue _fun0013 }
case 64:
                        var5 = _closure2_slot10;
                        var4 = var3.id;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
case 63:
                        var3 = _closure2_slot4;
                        var4 = var3.current;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0013_ip = 65; continue _fun0013 }
case 4:
                        var3 = var4.focus;
                        var3 = var3.bind(var4)();
case 65:
                        var4 = _closure2_slot11;
                        var2 = undefined;
                        var3 = true;
                        var3 = var4.bind(var2)(var3);
                        var1 = undefined;
case 62:
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
            if(!(var39 !== var41)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var35 = var37.current;
case 66:
            var18['defaultValue'] = var35;
            var37 = var12.searchInput;
            var35 = new Array(4);
            var35[0] = var37;
            var37 = var38;
            if(!var37) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var37 = var12.horizontalSearchInput;
case 68:
            var35[1] = var37;
            var37 = undefined;
            if(!var38) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var37 = undefined;
            if(!var29) { _fun0002_ip = 70; continue _fun0002 }
case 72:
            var38 = {};
            var39 = 16;
            var39 = var40 - var39;
            var38['maxWidth'] = var39;
            var37 = var38;
case 70:
            var35[2] = var37;
            if(!var36) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var36 = var12.searchInputDisabled;
case 73:
            var35[3] = var36;
            var18['style'] = var35;
            var18['onChangeText'] = var34;
            var34 = function onKeyPress(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = _closure2_slot11;
                    var1 = undefined;
                    var3 = false;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var3 = var3.length;
                    var6 = 0;
                    if(!(var6 === var3)) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                    var3 = arg1;
                    var3 = var3.nativeEvent;
                    var5 = var3.key;
                    var3 = 'Backspace';
                    if(!(var3 !== var5)) { _fun0014_ip = 77; continue _fun0014 }
case 75:
                    var3 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 == var3)) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var3 = var5 != var3;
                    if(!var3) { _fun0014_ip = 80; continue _fun0014 }
case 81:
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var8 = var7.start;
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var7 = var7.end;
                    var3 = var8 === var7;
case 80:
                    if(!var3) { _fun0014_ip = 82; continue _fun0014 }
case 83:
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var8 = var7.start;
                    var7 = _closure2_slot5;
                    var7 = var7.current;
                    var7 = var7.length;
                    var3 = var8 === var7;
case 82:
                    if(!var3) { _fun0014_ip = 84; continue _fun0014 }
case 85:
                    var3 = global;
                    var8 = var3.setTimeout;
                    var7 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = _closure2_slot8;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0015_ip = 29; continue _fun0015 }
case 28:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
case 29:
                            return var1;
                        }
                    };
                    var3 = 10;
                    var3 = var8.bind(var1)(var7, var3);
                    _fun0014_ip = 84; continue _fun0014;
case 78:
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)(var5);
                    _fun0014_ip = 84; continue _fun0014;
case 77:
                    var5 = _closure2_slot9;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    if(!(var5 > var6)) { _fun0014_ip = 84; continue _fun0014 }
case 88:
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
                    var5 = 19;
                    var5 = var12[var5];
                    var5 = var8.bind(var1)(var5);
                    var7 = var5.AccessibilityAnnouncer;
                    var6 = var7.announce;
                    var5 = 16;
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
                    _fun0014_ip = 84; continue _fun0014;
case 86:
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
                    if(!(var5 > var4)) { _fun0014_ip = 84; continue _fun0014 }
case 89:
                    var4 = _closure2_slot2;
                    if(!(var3 != var4)) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)(var5);
case 90:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var1)(var3);
case 84:
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
            if(!(var31 === var30)) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var28 = undefined;
            if(!var29) { _fun0002_ip = 92; continue _fun0002 }
case 94:
            var28 = var25;
case 92:
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
            if(!(var7 == var6)) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var9 = var7 != var11;
            var7 = null;
            if(!var9) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var10 = _closure1_slot7;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var12.iconContainer;
            var8['style'] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 97:
            var6 = var7;
case 95:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TagListInput/native/TagListInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();