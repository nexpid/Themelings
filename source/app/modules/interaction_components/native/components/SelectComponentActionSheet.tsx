// app/modules/interaction_components/native/components/SelectComponentActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function SelectionHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renderIcon;
            var _closure2_slot0 = var1;
            var22 = var2.selectionActionComponent;
            var16 = var2.labelComponent;
            var20 = var2.selectButtonDisabled;
            var7 = var2.selectedOptions;
            var _closure2_slot1 = var7;
            var19 = var2.submitSelection;
            var3 = var2.onPressOptionItem;
            var _closure2_slot2 = var3;
            var3 = var2.onRemoveOptionItem;
            var _closure2_slot3 = var3;
            var6 = var2.onQueryChange;
            var _closure2_slot4 = var6;
            var2 = _closure1_slot11;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var _closure2_slot5 = var12;
            var3 = var22.maxValues;
            var2 = 1;
            var14 = var3 > var2;
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var8 = null;
            var2 = var2.bind(var3)(var8);
            var _closure2_slot6 = var2;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var12;
            var2[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot1;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var10 = arg1;
                        var1 = {};
                        var2 = var10.value;
                        var1['id'] = var2;
                        var2 = var10.label;
                        var1['text'] = var2;
                        var5 = _closure1_slot8;
                        var4 = _closure1_slot4;
                        var3 = {};
                        var9 = _closure2_slot5;
                        var7 = var9.tagListIconWrapper;
                        var3['style'] = var7;
                        var8 = _closure1_slot8;
                        var7 = _closure1_slot4;
                        var6 = {};
                        var9 = var9.tagListIcon;
                        var6['style'] = var9;
                        var9 = _closure2_slot0;
                        var2 = undefined;
                        var9 = var9.bind(var2)(var10);
                        var6['children'] = var9;
                        var6 = var8.bind(var2)(var7, var6);
                        var3['children'] = var6;
                        var2 = var5.bind(var2)(var4, var3);
                        var1['icon'] = var2;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3);
case 2:
                    if(!(var2 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = new Array(0);
case 4:
                    return var1;
                }
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var9 = _closure1_slot8;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 8;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.BottomSheetTitleHeader;
            var5 = {};
            var17 = var8 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var16.label;
case 6:
            if(!(var8 == var15)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var22.placeholder;
case 8:
            if(!(var8 == var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 9;
            var17 = var23[var16];
            var17 = var21.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var23[var16];
            var16 = var21.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Otr6W1;
            var15 = var17.bind(var18)(var16);
case 10:
            var5['title'] = var15;
            var15 = undefined;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var22.minValues;
            var16 = 0;
            var16 = var17 > var16;
            var15 = undefined;
            if(!var16) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 9;
            var18 = var23[var16];
            var18 = var17.bind(var4)(var18);
            var21 = var18.intl;
            var18 = var21.formatToPlainString;
            var16 = var23[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.Jmwzd3;
            var16 = {};
            var22 = var22.minValues;
            var16['count'] = var22;
            var15 = var18.bind(var21)(var17, var16);
case 12:
            var5['subtitle'] = var15;
            var15 = undefined;
            if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var18 = _closure1_slot8;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 10;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Button;
            var16 = {};
            var21 = 'sm';
            var16['size'] = var21;
            var21 = 'primary';
            if(!var20) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var21 = 'secondary';
case 17:
            var16['variant'] = var21;
            var16['disabled'] = var20;
            var16['onPress'] = var19;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 9;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.XqMe3N;
            var19 = var20.bind(var21)(var19);
            var16['text'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 15:
            var5['trailing'] = var15;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var8 != var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = var8 != var11;
            var6 = null;
            if(!var7) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var15 = true;
            var7['inActionSheet'] = var15;
            var12 = var12.textInputWrapper;
            var7['style'] = var12;
            var12 = undefined;
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var15 = var11.length;
            var14 = 0;
            var12 = undefined;
            if(!(var14 !== var15)) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var15 = _closure1_slot8;
            var14 = _closure1_slot4;
            var13 = {};
            var12 = var15.bind(var4)(var14, var13);
case 22:
            var7['icon'] = var12;
            var7['tags'] = var11;
            var11 = function onRemove(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var2 = _closure2_slot1;
                    var3 = var2[var4];
case 25:
                    if(!(var6 != var3)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var2 = _closure2_slot3;
                    if(!(var6 == var2)) { _fun0003_ip = 4; continue _fun0003 }
case 29:
                    var2 = _closure2_slot2;
                    _fun0003_ip = 30; continue _fun0003;
case 4:
                    var2 = _closure2_slot3;
case 30:
                    var2 = var2.bind(var1)(var4, var3);
case 27:
                    return var1;
                }
            };
            var7['onRemove'] = var11;
            var10 = function onChangeText(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 29; continue _fun0004 }
case 3:
                    var3 = var4.scrollTo;
                    var2 = {'y': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
case 29:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var7['onChangeText'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 19:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function SelectionOptionItem(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var14 = var1.item;
            var _closure2_slot0 = var14;
            var2 = var1.onPressOptionItem;
            var _closure2_slot1 = var2;
            var11 = var1.clearable;
            var13 = var1.selected;
            var6 = var1.disabled;
            var2 = var1.index;
            var _closure2_slot2 = var2;
            var16 = var1.start;
            var15 = var1.end;
            var19 = var1.iconContainerStyle;
            var21 = var1.itemAccessibilityLabel;
            var7 = var1.skipIcon;
            var20 = var1.multi;
            var12 = var1.renderDescription;
            var17 = var1.renderIcon;
            var8 = var1.renderOptionSuffix;
            var1 = _closure1_slot11;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var9 = 'radio';
            if(!var20) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var9 = 'checkbox';
case 31:
            var1['accessibilityRole'] = var9;
            var9 = null;
            var22 = var9 == var21;
            var20 = undefined;
            if(var22) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var20 = var21.bind(var4)(var14);
case 33:
            var1['accessibilityLabel'] = var20;
            var20 = {};
            var20['disabled'] = var6;
            var20['checked'] = var13;
            var1['accessibilityState'] = var20;
            var1['start'] = var16;
            var1['end'] = var15;
            var1['disabled'] = var6;
            var6 = null;
            if(var7) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var16 = _closure1_slot8;
            var15 = _closure1_slot4;
            var7 = {};
            var20 = var18.selectionOptionItemIconWrapper;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var7['style'] = var18;
            var17 = var17.bind(var4)(var14);
            var7['children'] = var17;
            var6 = var16.bind(var4)(var15, var7);
case 35:
            var1['icon'] = var6;
            var6 = var14.label;
            var1['label'] = var6;
            var6 = 1;
            var1['labelLineClamp'] = var6;
            var15 = var9 == var12;
            var7 = undefined;
            if(var15) { _fun0005_ip = 37; continue _fun0005 }
case 10:
            var7 = var12.bind(var4)(var14);
case 37:
            var1['subLabel'] = var7;
            var1['subLabelLineClamp'] = var6;
            var5 = function onPress() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['onPress'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot4;
            var5 = {};
            var12 = {};
            var15 = 'row';
            var12['flexDirection'] = var15;
            var5['style'] = var12;
            var15 = var9 == var8;
            var12 = undefined;
            if(var15) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var12 = var8.bind(var4)(var14);
case 38:
            var8 = new Array(2);
            var8[0] = var12;
            if(var11) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var11 = true;
            var9 = null;
            if(!(var11 === var13)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var14 = _closure1_slot8;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 14;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.CheckmarkSmallBoldIcon;
            var11 = {};
            var15 = 'text-brand';
            var11['color'] = var15;
            var9 = var14.bind(var4)(var12, var11);
case 42:
            _fun0005_ip = 44; continue _fun0005;
case 40:
            var12 = _closure1_slot8;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 13;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.FormCheckbox;
            var10 = {};
            if(var13) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var13 = false;
case 45:
            var10['checked'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 44:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['width'] = var12;
    var12 = 'center';
    var9['alignItems'] = var12;
    var4['selectionOptionItemIconWrapper'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['width'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['height'] = var12;
    var4['tagListIconWrapper'] = var9;
    var9 = {};
    var13 = {};
    var12 = 0.75;
    var13['scale'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var9['transform'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var12 = -var12;
    var9['top'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var12 = -var12;
    var9['left'] = var12;
    var4['tagListIcon'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginHorizontal'] = var10;
    var4['textInputWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/SelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SelectComponentActionSheet(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var23 = var2.selectionActionComponent;
            var _closure2_slot0 = var23;
            var22 = var2.labelComponent;
            var18 = var2.onPressOptionItem;
            var _closure2_slot1 = var18;
            var21 = var2.selectedOptions;
            var24 = var2.selectedCount;
            var _closure2_slot2 = var24;
            var13 = var2.renderIcon;
            var _closure2_slot3 = var13;
            var15 = var2.renderHeaderIcon;
            var28 = var2.iconContainerStyle;
            var _closure2_slot4 = var28;
            var27 = var2.skipIcon;
            var _closure2_slot5 = var27;
            var26 = var2.renderDescription;
            var _closure2_slot6 = var26;
            var16 = var2.renderOptionSuffix;
            var _closure2_slot7 = var16;
            var19 = var2.onQueryChange;
            var12 = var2.options;
            var _closure2_slot8 = var12;
            var29 = var2.itemStyle;
            var _closure2_slot9 = var29;
            var30 = var2.isSelected;
            var _closure2_slot10 = var30;
            var20 = var2.submitSelection;
            var1 = var2.itemAccessibilityLabel;
            var _closure2_slot11 = var1;
            var31 = var2.channelId;
            var _closure2_slot12 = var31;
            var5 = var2.expanded;
            var17 = var2.onRemoveOptionItem;
            var3 = _closure1_slot1;
            var25 = _closure1_slot2;
            var2 = 15;
            var2 = var25[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = false;
            var2['isKeyboardAwareOnAndroid'] = var6;
            var2 = var3.bind(var4)(var2);
            var10 = var2.insets;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var3 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 16;
                var2 = var8[var1];
                var1 = undefined;
                var2 = var7.bind(var1)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 9;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.7gxe9v;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var6.bind(var7)(var3, var2);
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var3 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 17;
                var2 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var2);
                var2 = var3.getSafeAreaInsets;
                var2 = var2.bind(var3)();
                var3 = 18;
                var3 = var7[var3];
                var4 = var6.bind(var5)(var3);
                var3 = var4.getWindowDimensions;
                var3 = var3.bind(var4)();
                var4 = var3.height;
                var3 = 19;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.NAV_BAR_HEIGHT_MULTILINE;
                var3 = var4 - var3;
                var2 = var2.top;
                var2 = var3 - var2;
                var1 = _closure1_slot7;
                var1 = var1 * var2;
                return var1;
            };
            var2 = new Array(0);
            var6 = var6.bind(var7)(var3, var2);
            var2 = _closure1_slot0;
            var3 = 20;
            var3 = var25[var3];
            var9 = var2.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var32 = var8.bind(var9)(var7, var3);
            var _closure2_slot13 = var32;
            var7 = _closure1_slot5;
            var3 = var7.getChannel;
            var3 = var3.bind(var7)(var31);
            var _closure2_slot14 = var3;
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var7 = new Array(3);
            var7[0] = var32;
            var7[1] = var31;
            var7[2] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot14;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var5 = _closure2_slot14;
                    var3 = var5.isGuildVoice;
                    var1 = var3.bind(var5)();
case 47:
                    if(var1) { _fun0007_ip = 2; continue _fun0007 }
case 49:
                    var3 = _closure2_slot12;
                    var1 = var4 == var3;
case 2:
                    if(var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot12;
                    var1 = var3 === var2;
case 50:
                    if(var1) { _fun0007_ip = 52; continue _fun0007 }
case 27:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var7);
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var23;
            var3 = function() {
                var1 = _closure2_slot0;
                var2 = var1.maxValues;
                var1 = 1;
                var1 = var2 > var1;
                return var1;
            };
            var9 = var8.bind(var9)(var3, var7);
            var _closure2_slot15 = var9;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var3 = new Array(14);
            var3[0] = var30;
            var3[1] = var9;
            var30 = var23.minValues;
            var3[2] = var30;
            var30 = var23.maxValues;
            var3[3] = var30;
            var3[4] = var29;
            var3[5] = var24;
            var29 = var12.length;
            var3[6] = var29;
            var3[7] = var18;
            var3[8] = var13;
            var3[9] = var28;
            var3[10] = var27;
            var3[11] = var26;
            var3[12] = var16;
            var3[13] = var1;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var9 = var1.index;
                    var1 = _closure2_slot10;
                    var4 = undefined;
                    var8 = var1.bind(var4)(var6, var9);
                    var1 = _closure2_slot15;
                    var7 = !var1;
                    if(!var7) { _fun0008_ip = 2; continue _fun0008 }
case 53:
                    var7 = var8;
case 2:
                    if(!var7) { _fun0008_ip = 54; continue _fun0008 }
case 51:
                    var1 = _closure2_slot0;
                    var2 = var1.minValues;
                    var1 = 0;
                    var7 = var2 > var1;
case 54:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var10 = _closure2_slot9;
                    var1['itemStyle'] = var10;
                    var1['item'] = var6;
                    var1['index'] = var9;
                    var10 = 0;
                    var6 = var10 === var9;
                    var1['start'] = var6;
                    var6 = _closure2_slot8;
                    var11 = var6.length;
                    var6 = 1;
                    var6 = var11 - var6;
                    var6 = var9 === var6;
                    var1['end'] = var6;
                    var6 = _closure2_slot15;
                    if(var6) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var9 = _closure2_slot0;
                    var9 = var9.minValues;
                    var6 = var10 === var9;
case 55:
                    var1['clearable'] = var6;
                    var1['selected'] = var8;
                    var6 = _closure2_slot15;
                    if(!var6) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot0;
                    var9 = var9.maxValues;
                    var6 = var10 >= var9;
case 57:
                    if(!var6) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var6 = !var8;
case 59:
                    if(var6) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var6 = var7;
case 61:
                    var1['disabled'] = var6;
                    var6 = _closure2_slot1;
                    var1['onPressOptionItem'] = var6;
                    var6 = _closure2_slot4;
                    var1['iconContainerStyle'] = var6;
                    var6 = _closure2_slot5;
                    var1['skipIcon'] = var6;
                    var6 = _closure2_slot6;
                    var1['renderDescription'] = var6;
                    var6 = _closure2_slot3;
                    var1['renderIcon'] = var6;
                    var6 = _closure2_slot7;
                    var1['renderOptionSuffix'] = var6;
                    var6 = _closure2_slot11;
                    var1['itemAccessibilityLabel'] = var6;
                    var5 = _closure2_slot15;
                    var1['multi'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var1, var3);
            var3 = _closure1_slot3;
            var1 = var3.useRef;
            var16 = null;
            var7 = var1.bind(var3)(var16);
            var3 = _closure1_slot8;
            var1 = 22;
            var1 = var25[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var25 = true;
            var1['scrollable'] = var25;
            var1['ref'] = var7;
            var1['startHeight'] = var6;
            var1['startExpanded'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot12;
            var5 = {};
            var5['selectionActionComponent'] = var23;
            var5['labelComponent'] = var22;
            var22 = var23.maxValues;
            var22 = var24 > var22;
            if(var22) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var23 = var23.minValues;
            var22 = var24 < var23;
case 63:
            var5['selectButtonDisabled'] = var22;
            var5['selectedOptions'] = var21;
            var5['submitSelection'] = var20;
            var5['onQueryChange'] = var19;
            var5['onPressOptionItem'] = var18;
            var5['onRemoveOptionItem'] = var17;
            if(!(var16 != var15)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var13 = var15;
case 65:
            var5['renderIcon'] = var13;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 23;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetFlatList;
            var5 = {};
            var14 = function keyExtractor(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['keyExtractor'] = var14;
            var5['data'] = var12;
            var5['renderItem'] = var8;
            var8 = {};
            var12 = _closure1_slot1;
            var11 = 7;
            var14 = var13[var11];
            var14 = var12.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var8['paddingHorizontal'] = var14;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var10 = var10.bottom;
            var10 = var11 + var10;
            var8['paddingBottom'] = var10;
            var5['contentContainerStyle'] = var8;
            var8 = 'always';
            var5['keyboardShouldPersistTaps'] = var8;
            var8 = 'radiogroup';
            if(!var9) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var8 = 'none';
case 67:
            var5['accessibilityRole'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();