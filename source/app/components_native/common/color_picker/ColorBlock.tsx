// app/components_native/common/color_picker/ColorBlock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.StyleSheet;
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var5 = var9.create;
    var2 = {};
    var10 = {'minWidth': 44, 'height': 44, 'borderRadius': null, 'marginHorizontal': 12, 'marginVertical': 8, 'justifyContent': 'center', 'alignItems': 'center'};
    var11 = 3;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var10['borderRadius'] = var11;
    var2['colorBlock'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot5 = var2;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.color;
            var _closure2_slot0 = var14;
            var9 = var1.style;
            var7 = var1.selected;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var1 = var1.onSelect;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = 4;
            var2 = var2[var15];
            var3 = var3.bind(var5)(var2);
            var2 = var3.int2hsv;
            var2 = var2.bind(var3)(var14);
            var12 = var2.v;
            var6 = null;
            if(!(var6 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var4 = _closure1_slot5;
            var10 = var4.colorBlock;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var9;
            var10 = {};
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var16 = var16.bind(var5)(var13);
            var13 = var16.int2hex;
            var13 = var13.bind(var16)(var14);
            var10['backgroundColor'] = var13;
            var4[2] = var10;
            var1['style'] = var4;
            var4 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = _closure1_slot4;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 7;
            var10 = var19[var10];
            var13 = var18.bind(var5)(var10);
            var10 = {};
            var17 = 8;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var10['source'] = var17;
            var17 = 0.5;
            if(!(!(var12 < var17))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 3;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.unsafe_rawColors;
            var17 = var17.BLACK_500;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 3;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.unsafe_rawColors;
            var17 = var18.WHITE_500;
case 10:
            var10['color'] = var17;
            var4 = var16.bind(var5)(var13, var10);
case 6:
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 11; continue _fun0001;
case 4:
            var4 = _closure1_slot4;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var16 = 'button';
            var2['accessibilityRole'] = var16;
            var16 = 6;
            var16 = var10[var16];
            var19 = var13.bind(var5)(var16);
            var18 = var19.hexToColorName;
            var16 = var10[var15];
            var17 = var13.bind(var5)(var16);
            var16 = var17.int2hex;
            var17 = var16.bind(var17)(var14);
            var16 = true;
            var16 = var18.bind(var19)(var17, var16);
            var2['accessibilityLabel'] = var16;
            var16 = {};
            var16['selected'] = var7;
            var2['accessibilityState'] = var16;
            var8 = function onPress() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var8;
            var8 = _closure1_slot5;
            var16 = var8.colorBlock;
            var8 = new Array(3);
            var8[0] = var16;
            var8[1] = var9;
            var9 = {};
            var10 = var10[var15];
            var13 = var13.bind(var5)(var10);
            var10 = var13.int2hex;
            var10 = var10.bind(var13)(var14);
            var9['backgroundColor'] = var10;
            var8[2] = var9;
            var2['style'] = var8;
            var6 = null;
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot4;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 7;
            var7 = var14[var7];
            var8 = var13.bind(var5)(var7);
            var7 = {};
            var10 = 8;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var7['source'] = var10;
            var10 = 0.5;
            if(!(!(var12 < var10))) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 3;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.BLACK_500;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 3;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.unsafe_rawColors;
            var10 = var11.WHITE_500;
case 16:
            var7['color'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 12:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/common/color_picker/ColorBlock.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['styles'] = var2;
    return var1;
})();