// app/uikit-native/color_picker/HSVColorPicker.tsx
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
    var9 = {};
    var10 = 12;
    var9['marginTop'] = var10;
    var4['huePicker'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/color_picker/HSVColorPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HSVColorPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.hue;
            var16 = var1.saturation;
            var14 = var1.value;
            var9 = var1.onPanFinalize;
            var1 = _closure1_slot6;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 4;
            var3 = var12[var1];
            var8 = var2.bind(var4)(var3);
            var7 = var8.useSharedValue;
            var3 = 0;
            var10 = var7.bind(var8)(var3);
            var3 = var12[var1];
            var8 = var2.bind(var4)(var3);
            var7 = var8.useSharedValue;
            var3 = 1;
            var15 = var7.bind(var8)(var3);
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var13 = var1.bind(var2)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.hsvColorPicker;
            var1['style'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var5 = 5;
            var5 = var12[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var12 = null;
            var17 = var10;
            if(!(var12 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = var11;
case 2:
            var5['hue'] = var17;
            if(!(var12 != var16)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var16;
case 4:
            var5['saturation'] = var15;
            if(!(var12 != var14)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var14;
case 6:
            var5['value'] = var13;
            var5['onPanFinalize'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 6;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            if(!(var12 != var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var11;
case 8:
            var6['hue'] = var10;
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