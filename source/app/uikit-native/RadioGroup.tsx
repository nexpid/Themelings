// app/uikit-native/RadioGroup.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var14 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var8;
    var1 = function RadioBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.checked;
            var5 = var1.option;
            var13 = var1.style;
            var7 = var1.size;
            var9 = var1.disabled;
            var10 = var1.indicatorLeft;
            var8 = var1.showIndicator;
            var14 = var1.onPress;
            var2 = _closure1_slot9;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var6 = _closure1_slot5;
            var3 = _closure1_slot14;
            var2 = {};
            var2['size'] = var7;
            var2['active'] = var15;
            var7 = var6.bind(var4)(var3, var2);
            if(var15) { _fun0001_ip = 96; continue _fun0001 }
 88:
            var12 = var11.collapsibleBackground;
            _fun0001_ip = 102; continue _fun0001;
 96:
            var12 = var11.collapsibleBackgroundSelected;
 102:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = 'radio';
            var1['accessibilityRole'] = var6;
            var6 = {};
            var6['selected'] = var15;
            var6['disabled'] = var9;
            var1['accessibilityState'] = var6;
            var1['disabled'] = var9;
            var6 = undefined;
            if(var9) { _fun0001_ip = 164; continue _fun0001 }
 161:
            var6 = var14;
 164:
            var1['onPress'] = var6;
            var6 = new Array(3);
            var6[0] = var13;
            if(!var9) { _fun0001_ip = 184; continue _fun0001 }
 179:
            var9 = var11.disabled;
 184:
            var6[1] = var9;
            var11 = var5.collapsibleContent;
            var9 = null;
            var11 = var9 != var11;
            if(!var11) { _fun0001_ip = 206; continue _fun0001 }
 203:
            var11 = var12;
 206:
            var6[2] = var11;
            var1['DEPRECATED_style'] = var6;
            var6 = var5.name;
            var1['label'] = var6;
            var6 = var5.desc;
            var1['subLabel'] = var6;
            var6 = null;
            if(var10) { _fun0001_ip = 248; continue _fun0001 }
 240:
            var6 = null;
            if(!var8) { _fun0001_ip = 248; continue _fun0001 }
 245:
            var6 = var7;
 248:
            var1['trailing'] = var6;
            var6 = var5.leading;
            if(!(var9 != var6)) { _fun0001_ip = 271; continue _fun0001 }
 263:
            var5 = var5.leading;
            _fun0001_ip = 287; continue _fun0001;
 271:
            var6 = null;
            if(!var10) { _fun0001_ip = 284; continue _fun0001 }
 276:
            var6 = null;
            if(!var8) { _fun0001_ip = 284; continue _fun0001 }
 281:
            var6 = var7;
 284:
            var5 = var6;
 287:
            var1['leading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var2 = function RadioItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.option;
            var _closure2_slot0 = var11;
            var12 = var1.checked;
            var _closure2_slot1 = var12;
            var15 = var1.style;
            var _closure2_slot2 = var15;
            var14 = var1.size;
            var _closure2_slot3 = var14;
            var13 = var1.disabled;
            var7 = var1.indicatorLeft;
            var _closure2_slot4 = var7;
            var4 = var1.showIndicator;
            var _closure2_slot5 = var4;
            var1 = var1.onPress;
            var _closure2_slot6 = var1;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot9;
            var10 = var1.bind(var5)();
            var8 = function handlePress(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot6;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 46; continue _fun0003 }
 33:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 46:
                    return var1;
                }
            };
            var _closure2_slot7 = var8;
            if(var13) { _fun0002_ip = 111; continue _fun0002 }
 106:
            var13 = var11.disabled;
 111:
            _closure2_slot8 = var13;
            var2 = var11.collapsibleContent;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 187; continue _fun0002 }
 127:
            var3 = _closure1_slot5;
            var2 = _closure1_slot15;
            var1 = {};
            var1['option'] = var11;
            var1['checked'] = var12;
            var1['style'] = var15;
            var1['size'] = var14;
            var13 = !var13;
            var13 = !var13;
            var1['disabled'] = var13;
            var1['onPress'] = var8;
            var1['indicatorLeft'] = var7;
            var1['showIndicator'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 284; continue _fun0002;
 187:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var10.collapsibleContainer;
            var2['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var13 = _closure1_slot1;
            var6 = 8;
            var6 = var13[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['isExpanded'] = var12;
            var11 = var11.collapsibleContent;
            var6['collapsibleContent'] = var11;
            var10 = var10.collapsibleStyle;
            var6['style'] = var10;
            var9 = function children(arg1) {
                var1 = arg1;
                var1 = var1.onPress;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot5;
                var3 = _closure1_slot15;
                var2 = {};
                var6 = _closure2_slot0;
                var2['option'] = var6;
                var6 = _closure2_slot1;
                var2['checked'] = var6;
                var6 = _closure2_slot2;
                var2['style'] = var6;
                var6 = _closure2_slot3;
                var2['size'] = var6;
                var6 = _closure2_slot8;
                var6 = !var6;
                var6 = !var6;
                var2['disabled'] = var6;
                var5 = function onPress(arg1) {
                    var3 = arg1;
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var2['onPress'] = var5;
                var5 = _closure2_slot4;
                var2['indicatorLeft'] = var5;
                var1 = _closure2_slot5;
                var2['showIndicator'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 284:
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var5 = function RadioGroup(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.value;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 18; continue _fun0004 }
 16:
            var2 = null;
 18:
            var _closure2_slot0 = var2;
            var7 = var1.options;
            if(!(var7 === var4)) { _fun0004_ip = 35; continue _fun0004 }
 31:
            var7 = new Array(0);
 35:
            var _closure2_slot1 = var7;
            var2 = var1.style;
            var _closure2_slot2 = var2;
            var2 = var1.size;
            if(!(var2 === var4)) { _fun0004_ip = 70; continue _fun0004 }
 57:
            var3 = _closure1_slot7;
            var2 = var3.MEDIUM;
 70:
            var _closure2_slot3 = var2;
            var2 = var1.disabled;
            if(!(var2 === var4)) { _fun0004_ip = 85; continue _fun0004 }
 83:
            var2 = false;
 85:
            var _closure2_slot4 = var2;
            var2 = var1.withSpacing;
            if(!(var2 === var4)) { _fun0004_ip = 101; continue _fun0004 }
 99:
            var2 = false;
 101:
            var _closure2_slot5 = var2;
            var2 = var1.indicatorLeft;
            if(!(var2 === var4)) { _fun0004_ip = 117; continue _fun0004 }
 115:
            var2 = false;
 117:
            var _closure2_slot6 = var2;
            var2 = var1.showIndicator;
            if(!(var2 === var4)) { _fun0004_ip = 133; continue _fun0004 }
 131:
            var2 = true;
 133:
            var _closure2_slot7 = var2;
            var2 = var1.withDividers;
            if(!(var2 === var4)) { _fun0004_ip = 149; continue _fun0004 }
 147:
            var2 = true;
 149:
            var _closure2_slot8 = var2;
            var1 = var1.onChange;
            if(!(var1 === var4)) { _fun0004_ip = 170; continue _fun0004 }
 163:
            var1 = _closure1_slot4;
 170:
            var _closure2_slot9 = var1;
            var _closure2_slot10 = var4;
            var2 = _closure1_slot9;
            var2 = var2.bind(var4)();
            _closure2_slot10 = var2;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg1;
                    var9 = arg2;
                    var5 = _closure1_slot6;
                    var1 = _closure1_slot2;
                    var4 = var1.Fragment;
                    var3 = {};
                    var16 = _closure1_slot5;
                    var14 = _closure1_slot16;
                    var11 = {};
                    var11['option'] = var6;
                    var2 = _closure2_slot0;
                    var1 = var6.value;
                    var1 = var2 === var1;
                    var11['checked'] = var1;
                    var2 = _closure2_slot2;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = _closure2_slot1;
                    var2 = var2.length;
                    var13 = 1;
                    var2 = var2 - var13;
                    if(!(var9 !== var2)) { _fun0005_ip = 118; continue _fun0005 }
 93:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0005_ip = 104; continue _fun0005 }
 100:
                    var2 = {};
                    _fun0005_ip = 116; continue _fun0005;
 104:
                    var7 = {};
                    var8 = 8;
                    var7['marginBottom'] = var8;
                    var2 = var7;
 116:
                    _fun0005_ip = 129; continue _fun0005;
 118:
                    var7 = {};
                    var8 = 0;
                    var7['marginBottom'] = var8;
                    var2 = var7;
 129:
                    var1[1] = var2;
                    var11['style'] = var1;
                    var1 = _closure2_slot3;
                    var11['size'] = var1;
                    var1 = _closure2_slot4;
                    var11['disabled'] = var1;
                    var1 = _closure2_slot9;
                    var11['onPress'] = var1;
                    var1 = _closure2_slot6;
                    var11['indicatorLeft'] = var1;
                    var1 = _closure2_slot7;
                    var11['showIndicator'] = var1;
                    var1 = global;
                    var8 = var1.JSON;
                    var7 = var8.stringify;
                    var2 = var6.value;
                    var10 = var7.bind(var8)(var2);
                    var2 = var1.HermesInternal;
                    var2 = var2.concat;
                    var8 = 'radio-option-';
                    var7 = '-';
                    var10 = var2.bind(var8)(var10, var7, var9);
                    var2 = undefined;
                    var11 = var16.bind(var2)(var14, var11, var10);
                    var10 = new Array(2);
                    var10[0] = var11;
                    var11 = _closure2_slot1;
                    var11 = var11.length;
                    var13 = var11 - var13;
                    var11 = null;
                    if(!(var9 !== var13)) { _fun0005_ip = 306; continue _fun0005 }
 267:
                    var13 = _closure2_slot8;
                    var11 = null;
                    if(!var13) { _fun0005_ip = 306; continue _fun0005 }
 276:
                    var14 = _closure1_slot5;
                    var13 = _closure1_slot3;
                    var12 = {};
                    var15 = _closure2_slot10;
                    var15 = var15.divider;
                    var12['style'] = var15;
                    var11 = var14.bind(var2)(var13, var12);
 306:
                    var10[1] = var11;
                    var3['children'] = var10;
                    var11 = var1.JSON;
                    var10 = var11.stringify;
                    var6 = var6.value;
                    var6 = var10.bind(var11)(var6);
                    var1 = var1.HermesInternal;
                    var1 = var1.concat;
                    var1 = var1.bind(var8)(var6, var7, var9);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var4);
    var1 = 0;
    var6 = var8[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var12 = 2;
    var4 = var8[var12];
    var4 = var7.bind(var1)(var4);
    var15 = var4.Fonts;
    var4 = var4.NOOP;
    var _closure1_slot4 = var4;
    var11 = 3;
    var4 = var8[var11];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot5 = var6;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var6 = {};
    var10 = 8;
    var6['SMALL'] = var10;
    var4 = 'SMALL';
    var6[var10] = var4;
    var10 = 10;
    var6['MEDIUM'] = var10;
    var4 = 'MEDIUM';
    var6[var10] = var4;
    var10 = 12;
    var6['LARGE'] = var10;
    var4 = 'LARGE';
    var6[var10] = var4;
    var _closure1_slot7 = var6;
    var10 = {};
    var4 = var6.SMALL;
    var10[var4] = var12;
    var4 = var6.MEDIUM;
    var10[var4] = var11;
    var11 = var6.LARGE;
    var4 = 4;
    var10[var11] = var4;
    var _closure1_slot8 = var10;
    var4 = var8[var4];
    var11 = var7.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {'flex': 0, 'marginRight': 8, 'borderRadius': null, 'borderColor': null, 'borderWidth': 2};
    var13 = 5;
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var12['borderRadius'] = var16;
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_MUTED;
    var12['borderColor'] = var16;
    var4['radioIcon'] = var12;
    var12 = {};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_ACTIVE;
    var12['borderColor'] = var16;
    var4['radioIconSelected'] = var12;
    var12 = {};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var12['borderRadius'] = var16;
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.CONTROL_BRAND_FOREGROUND;
    var12['backgroundColor'] = var16;
    var4['radioTick'] = var12;
    var12 = {'flex': 1, 'flexGrow': 1, 'flexDirection': 'column'};
    var4['radioBarInternal'] = var12;
    var12 = {};
    var16 = 6;
    var17 = var8[var16];
    var20 = var14.bind(var1)(var17);
    var19 = var15.PRIMARY_MEDIUM;
    var17 = var8[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var18 = var17.INTERACTIVE_NORMAL;
    var17 = 16;
    var22 = var20.bind(var1)(var19, var18, var17);
    var23 = var12;
    var17 = copyDataProperties(var23, var22);
    var4['radioOptionName'] = var12;
    var12 = {};
    var17 = var8[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_ACTIVE;
    var12['color'] = var17;
    var4['radioOptionSelected'] = var12;
    var12 = {};
    var16 = var8[var16];
    var18 = var14.bind(var1)(var16);
    var17 = var15.PRIMARY_MEDIUM;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var16 = var15.INTERACTIVE_NORMAL;
    var15 = 14;
    var22 = var18.bind(var1)(var17, var16, var15);
    var23 = var12;
    var15 = copyDataProperties(var23, var22);
    var4['radioOptionDesc'] = var12;
    var12 = {};
    var15 = 0.3;
    var12['opacity'] = var15;
    var4['disabled'] = var12;
    var12 = {'height': 1, 'alignSelf': 'stretch', 'backgroundColor': null, 'marginLeft': 16};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACCENT;
    var12['backgroundColor'] = var15;
    var4['divider'] = var12;
    var12 = {};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var15 = 'hidden';
    var12['overflow'] = var15;
    var4['collapsibleStyle'] = var12;
    var12 = {};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_TERTIARY;
    var12['backgroundColor'] = var15;
    var4['collapsibleBackgroundSelected'] = var12;
    var12 = {};
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var12['backgroundColor'] = var13;
    var4['collapsibleBackground'] = var12;
    var12 = {'paddingVertical': 4, 'paddingHorizontal': 12};
    var4['collapsibleContainer'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot9 = var4;
    var4 = function getOuterStylesFromSize() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0006_ip = 22; continue _fun0006 }
 9:
            var1 = _closure1_slot7;
            var3 = var1.MEDIUM;
 22:
            var1 = {};
            var2 = 2;
            var4 = var2 * var3;
            var1['width'] = var4;
            var2 = var2 * var3;
            var1['height'] = var2;
            var2 = _closure1_slot8;
            var2 = var2[var3];
            var1['padding'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function getTickStylesFromSize() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0007_ip = 22; continue _fun0007 }
 9:
            var1 = _closure1_slot7;
            var2 = var1.MEDIUM;
 22:
            var1 = {};
            var1['width'] = var2;
            var1['height'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = function RadioEmpty(arg1) {
        var1 = arg1;
        var8 = var1.size;
        var6 = var1.style;
        var1 = _closure1_slot9;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var9 = var5.radioIcon;
        var5 = new Array(3);
        var5[0] = var9;
        var7 = _closure1_slot10;
        var7 = var7.bind(var4)(var8);
        var5[1] = var7;
        var5[2] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var4;
    var4 = function RadioSelected(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var10 = var1.size;
            var7 = var1.active;
            var6 = var1.style;
            var1 = _closure1_slot9;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var11 = var8.radioIcon;
            var5 = new Array(4);
            var5[0] = var11;
            var11 = _closure1_slot10;
            var11 = var11.bind(var4)(var10);
            var5[1] = var11;
            if(!var7) { _fun0008_ip = 78; continue _fun0008 }
 72:
            var7 = var8.radioIconSelected;
 78:
            var5[2] = var7;
            var5[3] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var11 = var8.radioTick;
            var8 = new Array(2);
            var8[0] = var11;
            var9 = _closure1_slot11;
            var9 = var9.bind(var4)(var10);
            var8[1] = var9;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function RadioIndicator(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var7 = var1.size;
            var6 = var1.active;
            var2 = var1.style;
            var5 = _closure1_slot5;
            if(var6) { _fun0009_ip = 53; continue _fun0009 }
 29:
            var8 = _closure1_slot12;
            var4 = {};
            var4['size'] = var7;
            var4['style'] = var2;
            var1 = undefined;
            var1 = var5.bind(var1)(var8, var4);
            _fun0009_ip = 80; continue _fun0009;
 53:
            var4 = _closure1_slot13;
            var3 = {};
            var3['size'] = var7;
            var3['active'] = var6;
            var3['style'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 80:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4['Sizes'] = var6;
    var5['Sizes'] = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'uikit-native/RadioGroup.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['RadioIndicator'] = var4;
    var3['RadioItem'] = var2;
    return var1;
})();