// app/modules/color_picker/native/HSVColorPicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['alignItems'] = var10;
    var4['hsvColorPicker'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/color_picker/native/HSVColorPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HSVColorPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.hue;
            var24 = var1.saturation;
            var22 = var1.value;
            var20 = var1.saturationValuePickerStyle;
            var19 = var1.saturationValueColorBoxStyle;
            var18 = var1.saturationValueColorBoxInnerStyle;
            var17 = var1.saturationValueSelectorStyle;
            var13 = var1.huePickerStyle;
            var12 = var1.hueColorBarInnerStyle;
            var11 = var1.hueSliderStyle;
            var10 = var1.onPanUpdate;
            var9 = var1.onPanFinalize;
            var1 = _closure1_slot6;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 4;
            var3 = var16[var1];
            var8 = var2.bind(var4)(var3);
            var7 = var8.useSharedValue;
            var3 = 0;
            var14 = var7.bind(var8)(var3);
            var3 = var16[var1];
            var8 = var2.bind(var4)(var3);
            var7 = var8.useSharedValue;
            var3 = 1;
            var23 = var7.bind(var8)(var3);
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var21 = var1.bind(var2)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.hsvColorPicker;
            var1['style'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var5 = 5;
            var5 = var16[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var16 = null;
            var25 = var14;
            if(!(var16 != var15)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var25 = var15;
case 2:
            var5['hue'] = var25;
            if(!(var16 != var24)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var23 = var24;
case 4:
            var5['saturation'] = var23;
            if(!(var16 != var22)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var21 = var22;
case 6:
            var5['value'] = var21;
            var5['style'] = var20;
            var5['colorBoxStyle'] = var19;
            var5['colorBoxInnerStyle'] = var18;
            var5['selectorStyle'] = var17;
            var5['onPanUpdate'] = var10;
            var5['onPanFinalize'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 6;
            var6 = var17[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            if(!(var16 != var15)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var15;
case 8:
            var6['hue'] = var14;
            var6['style'] = var13;
            var6['colorBarInnerStyle'] = var12;
            var6['sliderStyle'] = var11;
            var6['onPanUpdate'] = var10;
            var6['onPanFinalize'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();