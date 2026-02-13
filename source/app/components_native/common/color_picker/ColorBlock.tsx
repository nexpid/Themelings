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
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'minWidth': 44, 'height': 44, 'borderRadius': null, 'marginHorizontal': 12, 'marginVertical': 8, 'justifyContent': 'center', 'alignItems': 'center'};
    var11 = 4;
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
            var2 = _closure1_slot5;
            var8 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = 5;
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
            var10 = var8.colorBlock;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var9;
            var10 = {};
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var17 = var17.bind(var5)(var13);
            var13 = var17.int2hex;
            var13 = var13.bind(var17)(var14);
            var10['backgroundColor'] = var13;
            var4[2] = var10;
            var1['style'] = var4;
            var4 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot4;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var10 = 8;
            var10 = var20[var10];
            var13 = var19.bind(var5)(var10);
            var10 = {};
            var18 = 9;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var10['source'] = var18;
            var18 = 0.5;
            if(!(!(var12 < var18))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.unsafe_rawColors;
            var18 = var18.BLACK;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 4;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.unsafe_rawColors;
            var18 = var19.WHITE;
case 10:
            var10['color'] = var18;
            var4 = var17.bind(var5)(var13, var10);
case 6:
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 11; continue _fun0001;
case 4:
            var4 = _closure1_slot4;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var2 = var10[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var17 = 'button';
            var2['accessibilityRole'] = var17;
            var17 = 7;
            var17 = var10[var17];
            var20 = var13.bind(var5)(var17);
            var19 = var20.hexToColorName;
            var17 = var10[var15];
            var18 = var13.bind(var5)(var17);
            var17 = var18.int2hex;
            var18 = var17.bind(var18)(var14);
            var17 = true;
            var17 = var19.bind(var20)(var18, var17);
            var2['accessibilityLabel'] = var17;
            var17 = {};
            var17['selected'] = var7;
            var2['accessibilityState'] = var17;
            var16 = function onPress() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var16;
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
            var7 = 8;
            var7 = var14[var7];
            var8 = var13.bind(var5)(var7);
            var7 = {};
            var10 = 9;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var7['source'] = var10;
            var10 = 0.5;
            if(!(!(var12 < var10))) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 4;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.BLACK;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 4;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.unsafe_rawColors;
            var10 = var11.WHITE;
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
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/common/color_picker/ColorBlock.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useStyles'] = var2;
    return var1;
})();