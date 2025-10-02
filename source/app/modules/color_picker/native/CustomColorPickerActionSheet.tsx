// app/modules/color_picker/native/CustomColorPickerActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function SuggestedColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.suggestedColors;
            var2 = var1.onSelect;
            var _closure2_slot0 = var2;
            var1 = var1.color;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot8;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var _closure2_slot2 = var7;
            var9 = null;
            var3 = var9 == var8;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.suggestedColorsContainer;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var9 = arg1;
                var _closure3_slot0 = var9;
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['color'] = var9;
                var7 = _closure2_slot2;
                var7 = var7.suggestedColor;
                var2['style'] = var7;
                var6 = _closure2_slot1;
                var6 = var9 === var6;
                var2['selected'] = var6;
                var1 = function onSelect() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var3 = _closure2_slot0;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onSelect'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var7 = '';
                var6 = '-';
                var1 = arg2;
                var1 = var8.bind(var7)(var9, var6, var1);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingBottom'] = var12;
    var4['container'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center'};
    var4['save'] = var9;
    var9 = {'minWidth': 32, 'height': 32};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['suggestedColor'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'center'};
    var4['suggestedColorsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/color_picker/native/CustomColorPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomColorPickerActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = var2.color;
            var1 = var2.onSelect;
            var _closure2_slot0 = var1;
            var6 = var2.suggestedColors;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot8;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var20 = 7;
            var2 = var10[var20];
            var7 = var3.bind(var4)(var2);
            var2 = var7.int2hex;
            var11 = var2.bind(var7)(var5);
            var2 = var10[var20];
            var7 = var3.bind(var4)(var2);
            var2 = var7.int2hsv;
            var2 = var2.bind(var7)(var5);
            var15 = var2.h;
            var14 = var2.s;
            var7 = var2.v;
            var16 = _closure1_slot4;
            var2 = var16.useState;
            var13 = var2.bind(var16)(var11);
            var11 = _closure1_slot3;
            var2 = 2;
            var11 = var11.bind(var4)(var13, var2);
            var2 = 0;
            var19 = var11[var2];
            var _closure2_slot1 = var19;
            var2 = 1;
            var2 = var11[var2];
            var _closure2_slot2 = var2;
            var13 = var16.useMemo;
            var11 = new Array(1);
            var11[0] = var19;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 7; continue _fun0004 }
case 6: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hex2int;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
case 8: // try_end0
                    return var1;
case 9: // catch_target0
                    CatchBlockStart(arg_register=0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hex2int;
                    var1 = '#000000';
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 7:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hex2int;
                    var1 = '#000000';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var17 = var13.bind(var16)(var2, var11);
            var _closure2_slot3 = var17;
            var2 = 8;
            var11 = var10[var2];
            var13 = var3.bind(var4)(var11);
            var11 = var13.useSharedValue;
            var15 = var11.bind(var13)(var15);
            var _closure2_slot4 = var15;
            var11 = var10[var2];
            var13 = var3.bind(var4)(var11);
            var11 = var13.useSharedValue;
            var14 = var11.bind(var13)(var14);
            var _closure2_slot5 = var14;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var13 = var2.bind(var3)(var7);
            var _closure2_slot6 = var13;
            var18 = null;
            var2 = var18 == var6;
            var23 = undefined;
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = var6.map;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hex2int;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var6)(var2);
            var2 = var3.concat;
            var23 = var2.bind(var3)(var5);
case 10:
            var2 = function updateInputHexValueFromHsv(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.hsvToRgbWorklet;
                var2 = arg1;
                var7 = var5.bind(var6)(var2);
                var2 = 10;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.rgbToHex;
                var2 = 0;
                var4 = var7[var2];
                var2 = 1;
                var3 = var7[var2];
                var2 = 2;
                var2 = var7[var2];
                var3 = var5.bind(var6)(var4, var3, var2);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            _closure2_slot7 = var2;
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(6);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var1;
            var2[4] = var17;
            var2[5] = var19;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0005_ip = 12; continue _fun0005 }
case 6:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.hex2rgb2hsv;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var2);
                    if(!(var4 == var2)) { _fun0005_ip = 13; continue _fun0005 }
case 12:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = undefined;
                    var9 = var6.bind(var4)(var2);
                    var8 = var9.hsv;
                    var6 = _closure2_slot4;
                    var2 = var6.get;
                    var7 = var2.bind(var6)();
                    var6 = _closure2_slot5;
                    var2 = var6.get;
                    var6 = var2.bind(var6)();
                    var10 = _closure2_slot6;
                    var2 = var10.get;
                    var2 = var2.bind(var10)();
                    var6 = var8.bind(var9)(var7, var6, var2);
                    var2 = var6.num;
                    var2 = var2.bind(var6)();
                    var2 = var5.bind(var4)(var2);
                    _fun0005_ip = 14; continue _fun0005;
case 13:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var6)(var1, var2);
            _closure2_slot8 = var5;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var22 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot6;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 13;
            var1 = var24[var1];
            var1 = var25.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['onDismiss'] = var5;
            var5 = true;
            var1['startExpanded'] = var5;
            var7 = _closure1_slot6;
            var5 = 14;
            var5 = var24[var5];
            var5 = var25.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var16 = 15;
            var10 = var24[var16];
            var10 = var25.bind(var4)(var10);
            var21 = var10.intl;
            var11 = var21.string;
            var10 = var24[var16];
            var10 = var25.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.WTqQ5e;
            var10 = var11.bind(var21)(var10);
            var5['title'] = var10;
            var21 = _closure1_slot6;
            var10 = 16;
            var10 = var24[var10];
            var10 = var25.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {'variant': 'secondary', 'size': 'sm'};
            var26 = var24[var16];
            var26 = var25.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var24[var16];
            var26 = var25.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.XqMe3N;
            var26 = var27.bind(var28)(var26);
            var10['text'] = var26;
            var10['onPress'] = var22;
            var10 = var21.bind(var4)(var11, var10);
            var5['trailing'] = var10;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var8.container;
            var5['style'] = var8;
            var11 = _closure1_slot6;
            var8 = 17;
            var8 = var24[var8];
            var8 = var25.bind(var4)(var8);
            var10 = var8.TextInput;
            var8 = {};
            var21 = var24[var16];
            var21 = var25.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var16 = var24[var16];
            var16 = var25.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.ozfa/v;
            var16 = var21.bind(var22)(var16);
            var8['accessibilityLabel'] = var16;
            var8['value'] = var19;
            var16 = function onChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.length;
                    var4 = 0;
                    var1 = var1 > var4;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var3 = var2.charAt;
                    var4 = var3.bind(var2)(var4);
                    var3 = '#';
                    var1 = var3 !== var4;
case 15:
                    var5 = var2;
                    if(!var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var1 = '#';
                    var5 = var1 + var2;
case 17:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hex2rgb2hsv;
                    var2 = var2.bind(var3)(var5);
                    var4 = _closure2_slot2;
                    var4 = var4.bind(var1)(var5);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var6 = _closure2_slot4;
                    var5 = var6.set;
                    var4 = var2.h;
                    var4 = var5.bind(var6)(var4);
                    var7 = _closure2_slot5;
                    var6 = var7.set;
                    var4 = var2.s;
                    var5 = 100;
                    var4 = var4 / var5;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var2 = var2.v;
                    var2 = var2 / var5;
                    var2 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var8['onChange'] = var16;
            var8['maxLength'] = var20;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var16 = _closure1_slot6;
            var11 = _closure1_slot9;
            var10 = {};
            var22 = _closure1_slot1;
            var21 = 18;
            var21 = var24[var21];
            var22 = var22.bind(var4)(var21);
            var21 = var22.uniq;
            var21 = var21.bind(var22)(var23);
            var10['suggestedColors'] = var21;
            var21 = function onSelect(arg1) {
                var5 = arg1;
                var8 = _closure2_slot2;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var7 = var6[var3];
                var1 = undefined;
                var9 = var4.bind(var1)(var7);
                var7 = var9.int2hex;
                var7 = var7.bind(var9)(var5);
                var7 = var8.bind(var1)(var7);
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.int2hsv;
                var3 = var3.bind(var4)(var5);
                var7 = var3.h;
                var6 = var3.s;
                var4 = var3.v;
                var5 = _closure2_slot4;
                var3 = var5.set;
                var3 = var3.bind(var5)(var7);
                var5 = _closure2_slot5;
                var3 = var5.set;
                var3 = var3.bind(var5)(var6);
                var3 = _closure2_slot6;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var10['onSelect'] = var21;
            if(!(var18 == var19)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var20];
            var22 = var19.bind(var4)(var18);
            var21 = var22.hsv2int;
            var18 = var15.get;
            var20 = var18.bind(var15)();
            var18 = var14.get;
            var19 = var18.bind(var14)();
            var18 = var13.get;
            var18 = var18.bind(var13)();
            var17 = var21.bind(var22)(var20, var19, var18);
case 21:
            var10['color'] = var17;
            var10 = var16.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot6;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 19;
            var9 = var16[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['hue'] = var15;
            var9['saturation'] = var14;
            var9['value'] = var13;
            var12 = function onPanFinalize() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.runOnJS;
                var2 = _closure2_slot7;
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var6 = _closure2_slot4;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var2['h'] = var5;
                var6 = _closure2_slot5;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var2['s'] = var5;
                var5 = _closure2_slot6;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var2['v'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onPanFinalize'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();