// app/design/void/Form/native/FormText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
    var2 = var2.jsx;
    var _closure1_slot2 = var2;
    var2 = 2;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
            var2['color'] = var3;
            var1['primary'] = var2;
            var2 = {};
            var4 = 'small';
            var3 = arg1;
            var5 = var4 === var3;
            var4 = 16;
            var3 = var4;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 12;
case 2:
            var2['fontSize'] = var3;
            var3 = 22;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4;
case 4:
            var2['lineHeight'] = var3;
            var1['text'] = var2;
            return var1;
        }
    };
    var2 = var5.bind(var9)(var2);
    var _closure1_slot3 = var2;
    var2 = {};
    var5 = {};
    var9 = 4;
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_500;
    var5['color'] = var11;
    var2['BRAND'] = var5;
    var5 = {};
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var5['color'] = var11;
    var2['RED'] = var5;
    var5 = {};
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var5['color'] = var11;
    var2['GREEN'] = var5;
    var5 = {};
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.YELLOW_300;
    var5['color'] = var11;
    var2['YELLOW'] = var5;
    var5 = {};
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BLUE_345;
    var5['color'] = var11;
    var2['LINK'] = var5;
    var5 = {};
    var9 = var7[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.WHITE;
    var5['color'] = var9;
    var2['WHITE'] = var5;
    var5 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var3 = var1.size;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = 'medium';
case 6:
            var8 = var1.color;
            var7 = var1.style;
            var2 = _closure1_slot3;
            var9 = var2.bind(var4)(var3);
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var6 = arg2;
            var1['ref'] = var6;
            var10 = var9.text;
            var6 = new Array(3);
            var6[0] = var10;
            var10 = null;
            if(!(var10 == var8)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = var9.primary;
case 8:
            var6[1] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/void/Form/native/FormText.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FormTextColors'] = var2;
    return var1;
})();