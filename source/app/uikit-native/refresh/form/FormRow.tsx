// app/uikit-native/refresh/form/FormRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function renderCustom(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var2 = var4.isValidElement;
            var4 = var2.bind(var4)(var6);
            var2 = var6;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot5;
            var4 = undefined;
            var3 = {};
            var2 = var5.bind(var4)(var6, var3);
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = global;
    var9 = var2.Object;
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Platform;
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot5 = var9;
    var7 = var7.jsxs;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var11 = var5.bind(var1)(var7);
    var9 = var11.createStyles;
    var7 = function() {
        var5 = function getPadding() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = 0;
case 6:
                var1 = {};
                var2 = 16;
                var2 = var2 + var3;
                var1['paddingHorizontal'] = var2;
                var1['paddingVertical'] = var2;
                return var1;
            }
        };
        var1 = {};
        var2 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center'};
        var4 = undefined;
        var8 = var5.bind(var4)();
        var9 = var2;
        var3 = copyDataProperties(var9, var8);
        var1['container'] = var2;
        var2 = {};
        var1['containerPressed'] = var2;
        var2 = {'flexShrink': 1, 'flexGrow': 1, 'flexBasis': '30%'};
        var1['label'] = var2;
        var2 = {'flexGrow': 0, 'marginRight': 16};
        var1['leading'] = var2;
        var2 = {'marginLeft': 'auto', 'paddingLeft': 16, 'textAlign': 'right', 'flexShrink': 0};
        var1['trailing'] = var2;
        var2 = {};
        var3 = 0.5;
        var2['opacity'] = var3;
        var1['disabled'] = var2;
        var2 = {};
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 4;
        var3 = var7[var3];
        var3 = var6.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.STATUS_DANGER;
        var2['borderColor'] = var3;
        var3 = 2;
        var2['borderWidth'] = var3;
        var3 = -2;
        var8 = var5.bind(var4)(var3);
        var9 = var2;
        var3 = copyDataProperties(var9, var8);
        var1['error'] = var2;
        return var1;
    };
    var7 = var9.bind(var11)(var7);
    var _closure1_slot7 = var7;
    var7 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var37 = arg2;
            var20 = var1.label;
            var _closure2_slot0 = var20;
            var25 = var1.leading;
            var _closure2_slot1 = var25;
            var6 = var1.onPress;
            var5 = var1.onLongPress;
            var28 = var1.onPressOut;
            var36 = var1.DEPRECATED_style;
            var19 = var1.subLabel;
            var _closure2_slot2 = var19;
            var3 = var1.trailing;
            var _closure2_slot3 = var3;
            var17 = var1.disabled;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var17 = false;
case 8:
            var33 = var1.hasError;
            if(!(var33 === var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var33 = false;
case 10:
            var16 = var1.accessible;
            if(!(var16 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var16 = true;
case 12:
            var15 = var1.accessibilityLabel;
            var14 = var1.accessibilityHint;
            var13 = var1.accessibilityRole;
            var12 = var1.accessibilityState;
            var11 = var1.accessibilityActions;
            var10 = var1.onAccessibilityAction;
            var9 = var1.onAccessibilityTap;
            var8 = var1.numberOfLines;
            var _closure2_slot4 = var8;
            var32 = var1.activeOpacity;
            var35 = var1.style;
            var7 = var1.labelStyle;
            var _closure2_slot5 = var7;
            var7 = var1.trailingWrapperStyle;
            var _closure2_slot6 = var7;
            var7 = var1.leadingStyle;
            var _closure2_slot7 = var7;
            var7 = var1.delayLongPress;
            var23 = var1.start;
            if(!(var23 === var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var23 = false;
case 14:
            var22 = var1.end;
            if(!(var22 === var4)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var22 = false;
case 16:
            var24 = var1.variant;
            var _closure2_slot8 = var4;
            var27 = function renderInnerView() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = 'function';
                    var1 = typeof var1;
                    if(!(var2 !== var1)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = _closure1_slot3;
                    var4 = var5.isValidElement;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1['numberOfLines'] = var6;
                    var6 = _closure2_slot0;
                    var1['text'] = var6;
                    var6 = _closure2_slot5;
                    var1['style'] = var6;
                    var14 = var5.bind(var4)(var3, var1);
                    _fun0004_ip = 21; continue _fun0004;
case 18:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var14 = var4.bind(var1)(var3);
case 21:
                    var1 = _closure2_slot2;
                    var1 = typeof var1;
                    if(!(var2 !== var1)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = _closure1_slot3;
                    var4 = var5.isValidElement;
                    var3 = _closure2_slot2;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var3 = _closure2_slot2;
                    var13 = null;
                    var3 = var13 != var3;
                    if(!var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['text'] = var6;
                    var6 = _closure2_slot4;
                    var1['numberOfLines'] = var6;
                    var13 = var5.bind(var4)(var3, var1);
case 25:
                    _fun0004_ip = 27; continue _fun0004;
case 22:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var13 = var4.bind(var1)(var3);
case 27:
                    var1 = _closure2_slot1;
                    var1 = typeof var1;
                    if(!(var2 !== var1)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var4 = _closure1_slot3;
                    var3 = var4.isValidElement;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 30:
                    var5 = _closure2_slot1;
                    _fun0004_ip = 31; continue _fun0004;
case 28:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
case 31:
                    var1 = _closure2_slot3;
                    var1 = typeof var1;
                    if(!(var2 !== var1)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var3 = _closure1_slot3;
                    var2 = var3.isValidElement;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0004_ip = 32; continue _fun0004 }
case 34:
                    var10 = _closure2_slot3;
                    _fun0004_ip = 35; continue _fun0004;
case 32:
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var10 = var3.bind(var1)(var2);
case 35:
                    var4 = _closure1_slot6;
                    var1 = _closure1_slot3;
                    var3 = var1.Fragment;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var6 = null;
                    var8 = var6 != var1;
                    var1 = null;
                    if(!var8) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var11 = _closure1_slot5;
                    var9 = _closure1_slot4;
                    var8 = {};
                    var15 = _closure2_slot8;
                    var16 = var15.leading;
                    var15 = new Array(2);
                    var15[0] = var16;
                    var16 = _closure2_slot7;
                    var15[1] = var16;
                    var8['style'] = var15;
                    var8['children'] = var5;
                    var5 = undefined;
                    var1 = var11.bind(var5)(var9, var8);
case 36:
                    var5 = new Array(3);
                    var5[0] = var1;
                    var11 = _closure1_slot6;
                    var9 = _closure1_slot4;
                    var8 = {};
                    var1 = _closure2_slot8;
                    var1 = var1.label;
                    var8['style'] = var1;
                    var1 = new Array(2);
                    var1[0] = var14;
                    var1[1] = var13;
                    var8['children'] = var1;
                    var1 = undefined;
                    var8 = var11.bind(var1)(var9, var8);
                    var5[1] = var8;
                    var8 = _closure2_slot3;
                    var8 = var6 != var8;
                    var6 = null;
                    if(!var8) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var11 = _closure2_slot8;
                    var13 = var11.trailing;
                    var11 = new Array(2);
                    var11[0] = var13;
                    var12 = _closure2_slot6;
                    var11[1] = var12;
                    var7['style'] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 38:
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var18 = _closure1_slot7;
            var34 = var18.bind(var4)();
            _closure2_slot8 = var34;
            var21 = _closure1_slot3;
            var18 = var21.useContext;
            var26 = _closure1_slot0;
            var30 = _closure1_slot2;
            var2 = 5;
            var2 = var30[var2];
            var2 = var26.bind(var4)(var2);
            var2 = var2.FormContext;
            var2 = var18.bind(var21)(var2);
            var29 = var2.isForm;
            var21 = _closure1_slot3;
            var18 = var21.useContext;
            var2 = 6;
            var2 = var30[var2];
            var2 = var26.bind(var4)(var2);
            var2 = var2.RedesignCompatContext;
            var2 = var18.bind(var21)(var2);
            if(var2) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var30 = {};
            var30['disabled'] = var17;
            var41 = var30;
            var40 = var12;
            var2 = copyDataProperties(var41, var40);
            var31 = null;
            if(!(var31 == var6)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            if(!(var31 == var5)) { _fun0003_ip = 42; continue _fun0003 }
case 44:
            var21 = _closure1_slot5;
            var18 = _closure1_slot4;
            var2 = {};
            var2['ref'] = var37;
            var38 = var34.container;
            var26 = new Array(5);
            var26[0] = var38;
            var26[1] = var36;
            var26[2] = var35;
            var38 = var33;
            if(!var33) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var38 = var34.error;
case 45:
            var26[3] = var38;
            var38 = null;
            if(!var17) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var38 = var34.disabled;
case 47:
            var26[4] = var38;
            var2['style'] = var26;
            var2['accessible'] = var16;
            var2['accessibilityRole'] = var13;
            var2['accessibilityState'] = var30;
            var2['accessibilityLabel'] = var15;
            var2['accessibilityHint'] = var14;
            var2['accessibilityActions'] = var11;
            var2['onAccessibilityAction'] = var10;
            var2['onAccessibilityTap'] = var9;
            var26 = var27.bind(var4)();
            var2['children'] = var26;
            var2 = var21.bind(var4)(var18, var2);
            _fun0003_ip = 49; continue _fun0003;
case 42:
            var26 = _closure1_slot5;
            var21 = _closure1_slot0;
            var38 = _closure1_slot2;
            var18 = 10;
            var18 = var38[var18];
            var18 = var21.bind(var4)(var18);
            var21 = var18.PressableHighlight;
            var18 = {};
            var18['ref'] = var37;
            var18['activeOpacity'] = var32;
            var37 = var34.container;
            var32 = new Array(5);
            var32[0] = var37;
            var32[1] = var36;
            var32[2] = var35;
            if(!var33) { _fun0003_ip = 38; continue _fun0003 }
case 50:
            var33 = var34.error;
case 38:
            var32[3] = var33;
            var33 = null;
            if(!var17) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var33 = var34.disabled;
case 51:
            var32[4] = var33;
            var18['style'] = var32;
            var18['disabled'] = var17;
            var32 = true;
            var18['accessible'] = var32;
            var32 = var31 != var13;
            var31 = 'button';
            if(!var32) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var31 = var13;
case 53:
            var18['accessibilityRole'] = var31;
            var18['accessibilityState'] = var30;
            var18['accessibilityLabel'] = var15;
            var18['accessibilityHint'] = var14;
            var18['accessibilityActions'] = var11;
            var18['onAccessibilityAction'] = var10;
            var30 = undefined;
            if(var17) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var30 = var9;
case 55:
            var18['onAccessibilityTap'] = var30;
            var30 = undefined;
            if(var17) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var30 = var6;
case 57:
            var18['onPress'] = var30;
            var18['onLongPress'] = var5;
            var18['onPressOut'] = var28;
            var18['delayLongPress'] = var7;
            var28 = undefined;
            if(!var29) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var28 = 130;
case 59:
            var18['unstable_pressDelay'] = var28;
            var27 = var27.bind(var4)();
            var18['children'] = var27;
            var2 = var26.bind(var4)(var21, var18);
case 49:
            return var2;
case 40:
            var18 = 'function';
            var2 = typeof var20;
            if(!(var18 !== var2)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var21 = _closure1_slot3;
            var2 = var21.isValidElement;
            var2 = var2.bind(var21)(var20);
            var21 = var20;
            if(!var2) { _fun0003_ip = 63; continue _fun0003 }
case 61:
            var2 = _closure1_slot8;
            var21 = var2.bind(var4)(var20);
case 63:
            var2 = typeof var19;
            if(!(var18 !== var2)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var20 = _closure1_slot3;
            var2 = var20.isValidElement;
            var2 = var2.bind(var20)(var19);
            if(var2) { _fun0003_ip = 64; continue _fun0003 }
case 66:
            var20 = null;
            var2 = var20 != var19;
            if(!var2) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var20 = var19;
case 67:
            _fun0003_ip = 69; continue _fun0003;
case 64:
            var2 = _closure1_slot8;
            var20 = var2.bind(var4)(var19);
case 69:
            var2 = typeof var25;
            if(!(var18 !== var2)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var19 = _closure1_slot3;
            var2 = var19.isValidElement;
            var2 = var2.bind(var19)(var25);
            var19 = var25;
            if(!var2) { _fun0003_ip = 72; continue _fun0003 }
case 70:
            var2 = _closure1_slot8;
            var19 = var2.bind(var4)(var25);
case 72:
            var2 = typeof var3;
            if(!(var18 !== var2)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var18 = _closure1_slot3;
            var2 = var18.isValidElement;
            var2 = var2.bind(var18)(var3);
            var18 = var3;
            if(!var2) { _fun0003_ip = 75; continue _fun0003 }
case 73:
            var2 = _closure1_slot8;
            var18 = var2.bind(var4)(var3);
case 75:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 7;
            var1 = var25[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['variant'] = var24;
            var1['start'] = var23;
            var1['end'] = var22;
            var1['label'] = var21;
            var1['subLabel'] = var20;
            var1['icon'] = var19;
            var1['trailing'] = var18;
            var1['disabled'] = var17;
            var1['accessible'] = var16;
            var1['accessibilityLabel'] = var15;
            var1['accessibilityHint'] = var14;
            var1['accessibilityRole'] = var13;
            var1['accessibilityState'] = var12;
            var1['accessibilityActions'] = var11;
            var1['onAccessibilityAction'] = var10;
            var1['onAccessibilityTap'] = var9;
            var1['labelLineClamp'] = var8;
            var1['delayLongPress'] = var7;
            var1['onPress'] = var6;
            var1['onLongPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var9 = var7.bind(var8)(var4);
    var8 = var2.Object;
    var7 = var8.assign;
    var4 = {};
    var2 = 11;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['Arrow'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['Label'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['SubLabel'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['Radio'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['Checkbox'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['Checkmark'] = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var4['Icon'] = var2;
    var2 = {};
    var2 = var7.bind(var8)(var2, var9, var4);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();