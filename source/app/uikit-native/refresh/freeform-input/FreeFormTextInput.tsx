// app/uikit-native/refresh/freeform-input/FreeFormTextInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function ClearButton(arg1) {
        var1 = arg1;
        var6 = var1.onPress;
        var1 = _closure1_slot9;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var13 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 5;
        var1 = var10[var1];
        var1 = var13.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var12 = 8;
        var7 = {'borderRadius': 20, 'padding': 8};
        var1['style'] = var7;
        var7 = 'button';
        var1['accessibilityRole'] = var7;
        var7 = 6;
        var8 = var10[var7];
        var8 = var13.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var10[var7];
        var7 = var13.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.VkKicX;
        var7 = var8.bind(var9)(var7);
        var1['accessibilityLabel'] = var7;
        var1['onPress'] = var6;
        var6 = {'top': 8, 'bottom': 8, 'right': 8};
        var1['hitSlop'] = var6;
        var7 = _closure1_slot7;
        var9 = _closure1_slot1;
        var8 = 7;
        var5 = var10[var8];
        var6 = var9.bind(var4)(var5);
        var5 = {};
        var12 = var10[var12];
        var12 = var9.bind(var4)(var12);
        var5['source'] = var12;
        var11 = var11.closeIcon;
        var5['style'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.Sizes;
        var8 = var8.MEDIUM;
        var5['size'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var14 = 1;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TouchableWithoutFeedback;
    var _closure1_slot4 = var7;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.TouchableOpacity;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var11 = {'backgroundColor': null, 'height': 48, 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'paddingRight': 6, 'paddingLeft': 12, 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = 4;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var4 = var4.colors;
    var4 = var4.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var4;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var4 = var4.colors;
    var4 = var4.BACKGROUND_TERTIARY;
    var11['borderColor'] = var4;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.xs;
    var11['borderRadius'] = var4;
    var4 = 12;
    var15 = 'row';
    var7['container'] = var11;
    var11 = {};
    var11['flexDirection'] = var15;
    var7['onPress'] = var11;
    var11 = {};
    var11['flex'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.HEADER_PRIMARY;
    var11['color'] = var14;
    var7['input'] = var11;
    var11 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.RED_400;
    var11['borderColor'] = var14;
    var7['error'] = var11;
    var11 = {'tintColor': null, 'paddingLeft': 8, 'flexShrink': 0};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_NORMAL;
    var11['tintColor'] = var14;
    var7['closeIcon'] = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var11['color'] = var12;
    var7['placeholder'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot9 = var7;
    var7 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var1 = var11.style;
            var3 = var11.error;
            var8 = var11.renderLeadingComponent;
            var14 = var11.renderTrailingComponent;
            var20 = var11.onChangeText;
            var _closure2_slot0 = var20;
            var2 = var11.onFocus;
            var _closure2_slot1 = var2;
            var24 = var11.accessibilityRole;
            var2 = var11.onBlur;
            var _closure2_slot2 = var2;
            var21 = var11.value;
            var2 = var11.onPress;
            var _closure2_slot3 = var2;
            var17 = var11.editable;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 90; continue _fun0001 }
 88:
            var17 = true;
 90:
            var _closure2_slot4 = var17;
            var23 = var11.accessibilityLabel;
            var6 = var11.accessibilityHint;
            var7 = var11.forceAccessibleContainer;
            if(!(var7 === var4)) { _fun0001_ip = 117; continue _fun0001 }
 115:
            var7 = false;
 117:
            var12 = var11.clearButtonVisibility;
            if(!(var12 === var4)) { _fun0001_ip = 162; continue _fun0001 }
 127:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.ClearButtonVisibility;
            var12 = var5.WITH_CONTENT;
 162:
            var10 = {'style': 0, 'error': 0, 'renderLeadingComponent': 0, 'renderTrailingComponent': 0, 'onChangeText': 0, 'onFocus': 0, 'accessibilityRole': 0, 'onBlur': 0, 'value': 0, 'onPress': 0, 'editable': 0, 'accessibilityLabel': 0, 'accessibilityHint': 0, 'forceAccessibleContainer': 0, 'clearButtonVisibility': 0};
            var9 = null;
            var29 = var10;
            var28 = null;
            var5 = silentSetPrototypeOf(var29, var28);
            var29 = {};
            var28 = var11;
            var27 = var10;
            var18 = copyDataProperties(var29, var28, var27);
            var _closure2_slot5 = var4;
            var5 = _closure1_slot9;
            var19 = var5.bind(var4)();
            var16 = _closure1_slot3;
            var5 = var16.useRef;
            var22 = var5.bind(var16)(var9);
            _closure2_slot5 = var22;
            var15 = var16.useImperativeHandle;
            var11 = arg2;
            var5 = function() {
                var1 = _closure2_slot5;
                var1 = var1.current;
                return var1;
            };
            var5 = var15.bind(var16)(var11, var5);
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var16 = 9;
            var5 = var5[var16];
            var5 = var11.bind(var4)(var5);
            var5 = var5.ClearButtonVisibility;
            var5 = var5.ALWAYS;
            var11 = true;
            if(!(var5 !== var12)) { _fun0001_ip = 380; continue _fun0001 }
 290:
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var16];
            var5 = var15.bind(var4)(var5);
            var5 = var5.ClearButtonVisibility;
            var5 = var5.WITH_CONTENT;
            if(!(var5 !== var12)) { _fun0001_ip = 362; continue _fun0001 }
 323:
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var16];
            var5 = var15.bind(var4)(var5);
            var5 = var5.ClearButtonVisibility;
            var5 = var5.NEVER;
            var11 = undefined;
            if(!(var5 === var12)) { _fun0001_ip = 380; continue _fun0001 }
 358:
            var11 = false;
            _fun0001_ip = 380; continue _fun0001;
 362:
            var5 = var9 != var21;
            if(!var5) { _fun0001_ip = 377; continue _fun0001 }
 369:
            var12 = '';
            var5 = var12 !== var21;
 377:
            var11 = var5;
 380:
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 10;
            var5 = var15[var5];
            var15 = var12.bind(var4)(var5);
            var5 = var9 != var2;
            if(!var5) { _fun0001_ip = 410; continue _fun0001 }
 407:
            var5 = var17;
 410:
            var12 = !var5;
            var5 = 'Cannot have an editable input w/ onPress handler';
            var5 = var15.bind(var4)(var12, var5);
            var26 = var9 != var2;
            var2 = var19.container;
            var12 = new Array(3);
            var12[0] = var2;
            var2 = null;
            if(!var3) { _fun0001_ip = 452; continue _fun0001 }
 447:
            var2 = var19.error;
 452:
            var12[1] = var2;
            var12[2] = var1;
            var3 = _closure1_slot7;
            if(var26) { _fun0001_ip = 473; continue _fun0001 }
 467:
            var2 = _closure1_slot4;
            _fun0001_ip = 477; continue _fun0001;
 473:
            var2 = _closure1_slot6;
 477:
            var1 = {};
            var5 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0002_ip = 35; continue _fun0002 }
 10:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 35; continue _fun0002 }
 25:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
 35:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 55; continue _fun0002 }
 45:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var5 = null;
            if(!var26) { _fun0001_ip = 496; continue _fun0001 }
 493:
            var5 = var12;
 496:
            var1['style'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 509; continue _fun0001 }
 505:
            var5 = 'button';
 509:
            var1['accessibilityRole'] = var5;
            var1['accessible'] = var7;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 526; continue _fun0001 }
 523:
            var5 = var23;
 526:
            var1['accessibilityLabel'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 544; continue _fun0001 }
 535:
            var15 = {};
            var15['text'] = var21;
            var5 = var15;
 544:
            var1['accessibilityValue'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 557; continue _fun0001 }
 554:
            var5 = var6;
 557:
            var1['accessibilityHint'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {};
            if(!var26) { _fun0001_ip = 580; continue _fun0001 }
 575:
            var12 = var19.onPress;
 580:
            var5['style'] = var12;
            var15 = var9 == var8;
            var12 = undefined;
            if(var15) { _fun0001_ip = 597; continue _fun0001 }
 593:
            var12 = var8.bind(var4)();
 597:
            var8 = new Array(4);
            var8[0] = var12;
            var16 = _closure1_slot7;
            var15 = _closure1_slot0;
            var25 = _closure1_slot2;
            var12 = 11;
            var12 = var25[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.TextInput;
            var12 = {};
            var25 = 'auto';
            if(!var26) { _fun0001_ip = 648; continue _fun0001 }
 644:
            var25 = 'none';
 648:
            var12['pointerEvents'] = var25;
            var12['accessibilityRole'] = var24;
            var12['accessibilityLabel'] = var23;
            var12['ref'] = var22;
            var12['editable'] = var17;
            var22 = var19.input;
            var12['style'] = var22;
            var22 = 1;
            var12['numberOfLines'] = var22;
            var22 = false;
            var12['multiline'] = var22;
            var12['value'] = var21;
            var12['onChangeText'] = var20;
            var20 = function onFocus(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var12['onFocus'] = var20;
            var20 = function onBlur(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 27; continue _fun0004 }
 13:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var12['onBlur'] = var20;
            var19 = var19.placeholder;
            var19 = var19.color;
            var12['placeholderTextColor'] = var19;
            var19 = 'never';
            var12['clearButtonMode'] = var19;
            var29 = var12;
            var28 = var18;
            var18 = copyDataProperties(var29, var28);
            var19 = 'no-hide-descendants';
            if(!var17) { _fun0001_ip = 776; continue _fun0001 }
 770:
            var19 = 'yes';
 776:
            var18 = 'importantForAccessibility';
            var12[var18] = var19;
            var18 = !var17;
            var17 = 'accessibilityElementsHidden';
            var12[var17] = var18;
            var12 = var16.bind(var4)(var15, var12);
            var8[1] = var12;
            var15 = var9 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 820; continue _fun0001 }
 816:
            var12 = var14.bind(var4)();
 820:
            var8[2] = var12;
            var9 = null;
            if(!var11) { _fun0001_ip = 854; continue _fun0001 }
 829:
            var12 = _closure1_slot7;
            var11 = _closure1_slot10;
            var10 = {};
            var13 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 33; continue _fun0005 }
 20:
                    var3 = _closure2_slot0;
                    var2 = '';
                    var1 = var3.bind(var4)(var2);
 33:
                    return var1;
                }
            };
            var10['onPress'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 854:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/freeform-input/FreeFormTextInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();