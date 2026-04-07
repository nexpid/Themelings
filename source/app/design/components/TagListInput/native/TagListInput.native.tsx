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
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var2['paddingHorizontal'] = var8;
        var1['iconContainer'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
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
        var9 = var9.spacing;
        var9 = var9.PX_4;
        var2['marginHorizontal'] = var9;
        var1['inputInner'] = var2;
        var2 = {};
        var2['flex'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['minHeight'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
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
        var3 = var3.spacing;
        var3 = var3.PX_64;
        var2['minWidth'] = var3;
        var1['horizontalSearchInput'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function TagListInput(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var36 = var2.defaultValue;
            var13 = var2.disabled;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = false;
case 2:
            var28 = var2.placeholder;
            var12 = var2.icon;
            var14 = var2.onChangeText;
            var10 = var2.onBlur;
            var19 = var2.onFocus;
            var18 = var2.onScroll;
            var6 = var2.style;
            var29 = var2.returnKeyType;
            if(!(var29 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var29 = 'search';
case 4:
            var31 = var2.tags;
            var _closure2_slot0 = var31;
            var38 = var2.horizontal;
            if(!(var38 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var38 = false;
case 6:
            var9 = var2.footer;
            var23 = var2.focusOnAdd;
            if(!(var23 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var23 = true;
case 8:
            var _closure2_slot1 = var23;
            var1 = var2.inActionSheet;
            var26 = var2.onSubmitEditing;
            var3 = var2.onRemove;
            var _closure2_slot2 = var3;
            var30 = var2.autoFocus;
            var16 = var2.autoClearInputOnTagAdd;
            if(!(var16 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = true;
case 10:
            var _closure2_slot3 = var16;
            var8 = var2.ref;
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
            var _closure2_slot18 = var4;
            var2 = _closure1_slot9;
            var15 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 8;
            var2 = var21[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useFontScale;
            var5 = var2.bind(var3)();
            var2 = global;
            var3 = var2.Math;
            var2 = var3.min;
            var25 = 2;
            var3 = var2.bind(var3)(var25, var5);
            var2 = 9;
            var2 = var21[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.InputHeights;
            var2 = var2.MD;
            var5 = var2 * var3;
            var2 = function useTagListInputState(arg1, arg2) {
                var4 = arg2;
                var _closure3_slot0 = var4;
                var10 = _closure1_slot4;
                var2 = var10.useRef;
                var8 = null;
                var6 = var2.bind(var10)(var8);
                var _closure3_slot1 = var6;
                var3 = var10.useRef;
                var2 = '';
                var5 = var3.bind(var10)(var2);
                var _closure3_slot2 = var5;
                var2 = var10.useRef;
                var9 = false;
                var3 = var2.bind(var10)(var9);
                var _closure3_slot3 = var3;
                var2 = var10.useRef;
                var2 = var2.bind(var10)(var8);
                var _closure3_slot4 = var2;
                var8 = var10.useState;
                var12 = var8.bind(var10)(var9);
                var9 = _closure1_slot3;
                var11 = undefined;
                var8 = 2;
                var9 = var9.bind(var11)(var12, var8);
                var8 = 0;
                var12 = var9[var8];
                var _closure3_slot5 = var12;
                var8 = 1;
                var8 = var9[var8];
                var _closure3_slot6 = var8;
                var9 = var10.useCallback;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var4 = arguments[1];
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = false;
case 12:
                        var2 = _closure3_slot4;
                        var10 = var2.current;
                        var2 = null;
                        if(!(var2 != var10)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var6 = _closure3_slot4;
                        var6['current'] = var2;
                        if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                        var6 = var10.text;
                        if(!(var5 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 17:
                        var7 = _closure3_slot2;
                        var6 = var10.text;
                        var7['current'] = var6;
                        var6 = _closure3_slot1;
                        var9 = var6.current;
                        var6 = var2 == var9;
                        if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 18:
                        var8 = var9.setNativeProps;
                        var7 = {};
                        var11 = var10.text;
                        var7['text'] = var11;
                        var10 = var10.selection;
                        var7['selection'] = var10;
                        var6 = var8.bind(var9)(var7);
case 8:
                        var6 = undefined;
                        return var6;
case 14:
                        var7 = _closure3_slot3;
                        var6 = true;
                        var7['current'] = var6;
                        var6 = _closure3_slot2;
                        var6['current'] = var5;
                        var7 = _closure3_slot6;
                        var8 = var5.length;
                        var6 = 0;
                        var6 = var8 > var6;
                        var6 = var7.bind(var1)(var6);
                        var6 = _closure3_slot0;
                        if(!(var2 != var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var6 = _closure3_slot0;
                        var6 = var6.bind(var1)(var5);
case 19:
                        if(!var4) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                        var3 = _closure3_slot1;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                        var3 = var4.setNativeProps;
                        var2 = {};
                        var2['text'] = var5;
                        var2 = var3.bind(var4)(var2);
case 21:
                        return var1;
                    }
                };
                var4 = var9.bind(var10)(var4, var8);
                var _closure3_slot7 = var4;
                var13 = var10.useImperativeHandle;
                var9 = arg1;
                var8 = function() {
                    var1 = {};
                    var3 = function blur() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                            var2 = var3.blur;
                            var1 = var2.bind(var3)();
case 24:
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
                            if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                            var2 = var3.focus;
                            var1 = var2.bind(var3)();
case 24:
                            return var1;
                        }
                    };
                    var1['focus'] = var3;
                    var3 = function setText(arg1) {
                        var4 = _closure3_slot7;
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
                            if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 24:
                            var1 = var1 != var2;
                            if(!var1) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                            var1 = var2;
case 26:
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
                            if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 25:
                            var3 = var4.measure;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 28:
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
                            if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 25:
                            var3 = var4.measureInWindow;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 28:
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
                            if(var2) { _fun0008_ip = 16; continue _fun0008 }
case 25:
                            var5 = var6.measureLayout;
                            var4 = arg1;
                            var3 = arg2;
                            var2 = arg3;
                            var1 = var5.bind(var6)(var4, var3, var2);
case 16:
                            return var1;
                        }
                    };
                    var1['measureLayout'] = var2;
                    return var1;
                };
                var8 = var13.bind(var10)(var9, var8);
                var9 = var10.useMemo;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var4;
                var1 = function() {
                    var1 = {};
                    var2 = {};
                    var4 = true;
                    var2['isClearable'] = var4;
                    var1['clearProps'] = var2;
                    var2 = {};
                    var4 = _closure3_slot5;
                    var2['hasValue'] = var4;
                    var4 = function clear() {
                        var4 = _closure3_slot7;
                        var3 = undefined;
                        var2 = '';
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['clear'] = var4;
                    var3 = function setTextValue(arg1) {
                        var4 = _closure3_slot7;
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
                var1 = var9.bind(var10)(var1, var8);
                var10 = var1.clearProps;
                var9 = var1.clearState;
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 7;
                var7 = var12[var7];
                var8 = var8.bind(var11)(var7);
                var7 = var8.useInputClearButton;
                var7 = var7.bind(var8)(var10, var9);
                var1['clearButton'] = var7;
                var1['inputRef'] = var6;
                var1['inputValueRef'] = var5;
                var1['inputUpdate'] = var4;
                var1['inputInitializedRef'] = var3;
                var1['inputSnapshotRef'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var8, var14);
            var41 = var2.inputRef;
            _closure2_slot4 = var41;
            var37 = var2.inputValueRef;
            _closure2_slot5 = var37;
            var35 = var2.inputUpdate;
            _closure2_slot6 = var35;
            var14 = var2.clearButton;
            var39 = var2.inputInitializedRef;
            var2 = var2.inputSnapshotRef;
            _closure2_slot7 = var2;
            var20 = _closure1_slot4;
            var8 = var20.useRef;
            var34 = 0;
            var2 = {'start': 0, 'end': 0};
            var2 = var8.bind(var20)(var2);
            _closure2_slot8 = var2;
            var2 = 10;
            var2 = var21[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useFocus;
            var2 = var2.bind(var7)();
            var7 = var2.focusProps;
            _closure2_slot9 = var7;
            var8 = var2.isFocused;
            var17 = _closure1_slot1;
            var2 = 11;
            var2 = var21[var2];
            var7 = var17.bind(var4)(var2);
            var2 = {};
            var2['onFocus'] = var19;
            var2['onBlur'] = var10;
            var2 = var7.bind(var4)(var2);
            var7 = var2.onFocus;
            _closure2_slot10 = var7;
            var2 = var2.onBlur;
            _closure2_slot11 = var2;
            var2 = var20.useRef;
            var10 = null;
            var19 = var2.bind(var20)(var10);
            _closure2_slot12 = var19;
            var2 = var20.useState;
            var2 = var2.bind(var20)(var10);
            var22 = _closure1_slot3;
            var7 = var22.bind(var4)(var2, var25);
            var2 = var7[var34];
            _closure2_slot13 = var2;
            var2 = 1;
            var7 = var7[var2];
            _closure2_slot14 = var7;
            var7 = var20.useState;
            var33 = false;
            var7 = var7.bind(var20)(var33);
            var7 = var22.bind(var4)(var7, var25);
            var27 = var7[var34];
            var7 = var7[var2];
            _closure2_slot15 = var7;
            var7 = 12;
            var7 = var21[var7];
            var7 = var17.bind(var4)(var7);
            var7 = var7.bind(var4)(var31);
            _closure2_slot16 = var7;
            var17 = var20.useRef;
            var22 = var17.bind(var20)(var31);
            _closure2_slot17 = var22;
            var21 = var20.useLayoutEffect;
            var17 = new Array(7);
            var17[0] = var23;
            var17[1] = var35;
            var17[2] = var22;
            var17[3] = var31;
            var17[4] = var41;
            var17[5] = var37;
            var17[6] = var16;
            var16 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var2 = var2.current;
                    var3 = var2.length;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    if(!(var3 < var2)) { _fun0009_ip = 29; continue _fun0009 }
case 24:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0009_ip = 30; continue _fun0009 }
case 27:
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    var2 = null;
                    var3 = var2 == var5;
                    var4 = undefined;
                    if(var3) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                    var3 = var5.isFocused;
                    var4 = var3.bind(var5)();
case 31:
                    var3 = false;
                    if(!(var3 === var4)) { _fun0009_ip = 30; continue _fun0009 }
case 33:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0009_ip = 30; continue _fun0009 }
case 34:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 30:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var5 = undefined;
                    var3 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure2_slot12;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0010_ip = 26; continue _fun0010 }
case 25:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
case 26:
                            return var1;
                        }
                    };
                    var2 = 10;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
case 35:
                    if(!var2) { _fun0009_ip = 29; continue _fun0009 }
case 37:
                    var4 = _closure2_slot6;
                    var3 = '';
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
case 29:
                    var2 = _closure2_slot17;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var21.bind(var20)(var16, var17);
            var17 = var20.useLayoutEffect;
            var16 = new Array(1);
            var16[0] = var7;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                    var1 = _closure2_slot12;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0011_ip = 38; continue _fun0011 }
case 24:
                    var2 = var3.scrollToEnd;
                    var1 = {};
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var20)(var7, var16);
            if(var1) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var16 = _closure1_slot6;
            _fun0001_ip = 42; continue _fun0001;
case 40:
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var7 = 13;
            var7 = var20[var7];
            var7 = var17.bind(var4)(var7);
            var16 = var7.BottomSheetScrollView;
case 42:
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            if(var1) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var1 = 15;
            var1 = var17[var1];
            var1 = var7.bind(var4)(var1);
            var23 = var1.TextInput;
            _fun0001_ip = 45; continue _fun0001;
case 43:
            var1 = 14;
            var1 = var17[var1];
            var1 = var7.bind(var4)(var1);
            var23 = var1.BottomSheetTextInput;
case 45:
            var1 = 33;
            var17 = var1 * var3;
            var7 = _closure1_slot4;
            var1 = var7.useState;
            var3 = var1.bind(var7)(var34);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var25);
            var40 = var1[var34];
            var1 = var1[var2];
            _closure2_slot18 = var1;
            var3 = var7.useCallback;
            var2 = function(arg1) {
                var3 = _closure2_slot18;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var20 = var3.bind(var7)(var2, var1);
            var32 = var10 == var14;
            if(!(var10 == var28)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 16;
            var2 = var21[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var21[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["5h0QOP"];
            var28 = var2.bind(var3)(var1);
case 46:
            var3 = _closure1_slot7;
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
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 17;
            var5 = var21[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.InputFieldContainer;
            var5 = {};
            var21 = 'sm';
            var5['size'] = var21;
            var5['isDisabled'] = var13;
            var5['isFocused'] = var8;
            if(!(var10 == var12)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var21 = _closure1_slot7;
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 18;
            var8 = var22[var8];
            var8 = var13.bind(var4)(var8);
            var13 = var8.MagnifyingGlassIcon;
            var8 = {'style': null, 'size': 'xs', 'color': 'interactive-text-default'};
            var22 = var15.iconLeft;
            var8['style'] = var22;
            var12 = var21.bind(var4)(var13, var8);
case 48:
            var8 = new Array(3);
            var8[0] = var12;
            var13 = _closure1_slot7;
            var12 = {};
            var21 = {};
            var22 = 3;
            var22 = var22 * var17;
            var21['maxHeight'] = var22;
            var12['style'] = var21;
            var22 = var15.scrollViewContent;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = undefined;
            if(!var38) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var22 = var15.horizontalScrollViewContent;
case 50:
            var21[1] = var22;
            var12['contentContainerStyle'] = var21;
            var12['ref'] = var19;
            var12['bounces'] = var33;
            var12['onScroll'] = var18;
            var19 = undefined;
            if(!var38) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var19 = var20;
case 52:
            var12['onLayout'] = var19;
            var19 = var10 != var18;
            var18 = undefined;
            if(!var19) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var18 = 16;
case 54:
            var12['scrollEventThrottle'] = var18;
            var12['horizontal'] = var38;
            var12['snapToInterval'] = var17;
            var17 = 'never';
            var12['overScrollMode'] = var17;
            var17 = 'handled';
            var12['keyboardShouldPersistTaps'] = var17;
            var19 = _closure1_slot8;
            var18 = _closure1_slot5;
            var17 = {};
            var20 = var15.inputInner;
            var17['style'] = var20;
            var21 = var31.map;
            var20 = function(arg1, arg2) {
                var6 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TagListInputTagComponent;
                var1 = {};
                var1['tag'] = var6;
                var9 = var6.id;
                var8 = _closure2_slot13;
                var8 = var9 === var8;
                var1['selected'] = var8;
                var7 = function onPress(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = 'select';
                        var1 = arg1;
                        if(!(var2 !== var1)) { _fun0012_ip = 56; continue _fun0012 }
case 57:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var3 = var1 == var3;
                        var4 = undefined;
                        var1 = undefined;
                        if(var3) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                        var3 = _closure2_slot2;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2);
case 58:
                        _fun0012_ip = 60; continue _fun0012;
case 56:
                        var3 = _closure3_slot0;
                        var5 = _closure2_slot13;
                        var4 = var3.id;
                        if(!(var5 !== var4)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                        var5 = _closure2_slot14;
                        var4 = var3.id;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
case 61:
                        var3 = _closure2_slot4;
                        var4 = var3.current;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                        var3 = var4.focus;
                        var3 = var3.bind(var4)();
case 63:
                        var4 = _closure2_slot15;
                        var2 = undefined;
                        var3 = true;
                        var3 = var4.bind(var2)(var3);
                        var1 = undefined;
case 60:
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
            var21 = var21.bind(var31)(var20);
            var20 = new Array(2);
            var20[0] = var21;
            var22 = _closure1_slot7;
            var21 = {};
            var21['ref'] = var41;
            var41 = 'search';
            var21['accessibilityRole'] = var41;
            var39 = var39.current;
            if(!var39) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var36 = var37.current;
case 65:
            var21['defaultValue'] = var36;
            var37 = var15.searchInput;
            var36 = new Array(3);
            var36[0] = var37;
            var37 = var38;
            if(!var37) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var37 = var15.horizontalSearchInput;
case 67:
            var36[1] = var37;
            var37 = undefined;
            if(!var38) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var37 = undefined;
            if(!var32) { _fun0001_ip = 69; continue _fun0001 }
case 71:
            var38 = {};
            var39 = 16;
            var39 = var40 - var39;
            var38['maxWidth'] = var39;
            var37 = var38;
case 69:
            var36[2] = var37;
            var21['style'] = var36;
            var21['onChangeText'] = var35;
            var35 = function onKeyPress(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = _closure2_slot15;
                    var1 = undefined;
                    var3 = false;
                    var3 = var5.bind(var1)(var3);
                    var5 = _closure2_slot7;
                    var3 = null;
                    var5['current'] = var3;
                    var5 = arg1;
                    var5 = var5.nativeEvent;
                    var6 = var5.key;
                    var5 = 'Backspace';
                    var5 = var5 === var6;
                    var6 = _closure2_slot8;
                    var6 = var6.current;
                    var6 = var6.start;
                    var7 = 0;
                    var6 = var7 === var6;
                    if(!var6) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    var8 = _closure2_slot8;
                    var8 = var8.current;
                    var8 = var8.end;
                    var6 = var7 === var8;
case 72:
                    if(!var5) { _fun0013_ip = 74; continue _fun0013 }
case 7:
                    var8 = _closure2_slot13;
                    if(!(var3 == var8)) { _fun0013_ip = 75; continue _fun0013 }
case 74:
                    if(!var5) { _fun0013_ip = 8; continue _fun0013 }
case 76:
                    if(var6) { _fun0013_ip = 77; continue _fun0013 }
case 8:
                    var5 = _closure2_slot13;
                    if(!(var3 == var5)) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var5 = _closure2_slot8;
                    var5 = var5.current;
                    var5 = var3 != var5;
                    if(!var5) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                    var8 = _closure2_slot8;
                    var8 = var8.current;
                    var9 = var8.start;
                    var8 = _closure2_slot8;
                    var8 = var8.current;
                    var8 = var8.end;
                    var5 = var9 === var8;
case 80:
                    if(!var5) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                    var8 = _closure2_slot8;
                    var8 = var8.current;
                    var9 = var8.start;
                    var8 = _closure2_slot5;
                    var8 = var8.current;
                    var8 = var8.length;
                    var5 = var9 === var8;
case 82:
                    if(!var5) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                    var5 = global;
                    var9 = var5.setTimeout;
                    var8 = function() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = _closure2_slot12;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0014_ip = 26; continue _fun0014 }
case 25:
                            var3 = var4.scrollToEnd;
                            var2 = {};
                            var5 = false;
                            var2['animated'] = var5;
                            var1 = var3.bind(var4)(var2);
case 26:
                            return var1;
                        }
                    };
                    var5 = 10;
                    var5 = var9.bind(var1)(var8, var5);
                    _fun0013_ip = 84; continue _fun0013;
case 78:
                    var5 = _closure2_slot14;
                    var5 = var5.bind(var1)(var3);
                    _fun0013_ip = 84; continue _fun0013;
case 77:
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    if(!(var7 !== var5)) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                    var8 = _closure2_slot0;
                    var9 = var8.length;
                    var5 = 1;
                    var5 = var9 - var5;
                    var13 = var8[var5];
                    var8 = _closure2_slot14;
                    var5 = var13.id;
                    var5 = var8.bind(var1)(var5);
                    var8 = _closure2_slot15;
                    var5 = true;
                    var5 = var8.bind(var1)(var5);
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 20;
                    var5 = var14[var5];
                    var5 = var10.bind(var1)(var5);
                    var9 = var5.AccessibilityAnnouncer;
                    var8 = var9.announce;
                    var5 = 16;
                    var11 = var14[var5];
                    var11 = var10.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var5 = var14[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.t;
                    var10 = var5.QymItZ;
                    var5 = {};
                    var13 = var13.text;
                    var5['text'] = var13;
                    var5 = var11.bind(var12)(var10, var5);
                    var5 = var8.bind(var9)(var5);
                    _fun0013_ip = 84; continue _fun0013;
case 86:
                    return var1;
case 75:
                    var8 = _closure2_slot0;
                    var5 = var8.findIndex;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot13;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var5.bind(var8)(var4);
                    var4 = -1;
                    if(!(var5 > var4)) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var4 = !var6;
                    if(var6) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var6 = _closure2_slot5;
                    var6 = var6.current;
                    var6 = var6.length;
                    var4 = var6 > var7;
case 90:
                    if(!var4) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                    var6 = _closure2_slot7;
                    var4 = {};
                    var7 = _closure2_slot5;
                    var7 = var7.current;
                    var4['text'] = var7;
                    var7 = {};
                    var8 = _closure2_slot8;
                    var8 = var8.current;
                    var8 = var8.start;
                    var7['start'] = var8;
                    var8 = _closure2_slot8;
                    var8 = var8.current;
                    var8 = var8.end;
                    var7['end'] = var8;
                    var4['selection'] = var7;
                    var6['current'] = var4;
case 92:
                    var4 = _closure2_slot2;
                    if(!(var3 != var4)) { _fun0013_ip = 88; continue _fun0013 }
case 94:
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)(var5);
case 88:
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)(var3);
case 84:
                    return var1;
                }
            };
            var21['onKeyPress'] = var35;
            var35 = function onFocus(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = var3.onFocus;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 95; continue _fun0015 }
case 96:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var21['onFocus'] = var35;
            var35 = function onBlur(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = var3.onBlur;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot11;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 95; continue _fun0016 }
case 96:
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var21['onBlur'] = var35;
            var35 = function onPressIn() {
                var4 = _closure2_slot15;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot14;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var21['onPressIn'] = var35;
            var35 = 'none';
            var21['autoCapitalize'] = var35;
            var21['autoCorrect'] = var33;
            var21['aria-label'] = var28;
            var33 = var31.length;
            var31 = undefined;
            if(!(var34 === var33)) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var31 = undefined;
            if(!var32) { _fun0001_ip = 97; continue _fun0001 }
case 99:
            var31 = var28;
case 97:
            var21['placeholder'] = var31;
            var31 = var15.placeholder;
            var31 = var31.color;
            var21['placeholderTextColor'] = var31;
            var21['autoFocus'] = var30;
            var21['returnKeyType'] = var29;
            var21['accessibilityLabel'] = var28;
            var21['caretHidden'] = var27;
            var21['onSubmitEditing'] = var26;
            var21['maxFontSizeMultiplier'] = var25;
            var24 = function onSelectionChange(arg1) {
                var2 = _closure2_slot8;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.selection;
                var2['current'] = var1;
                return var1;
            };
            var21['onSelectionChange'] = var24;
            var21 = var22.bind(var4)(var23, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var12['children'] = var17;
            var12 = var13.bind(var4)(var16, var12);
            var8[1] = var12;
            if(!(var10 == var9)) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var12 = var10 != var14;
            var10 = null;
            if(!var12) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var13 = _closure1_slot7;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var15.iconContainer;
            var11['style'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 102:
            var9 = var10;
case 100:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
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
    var4 = 'design/components/TagListInput/native/TagListInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();