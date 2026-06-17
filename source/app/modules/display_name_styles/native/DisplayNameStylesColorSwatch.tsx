// app/modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 24, 'height': 24};
    var10 = 3;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['colorSwatch'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayNameStylesColorSwatch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.colors;
            var2 = _closure1_slot5;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = var8.length;
            var2 = 2;
            if(!(!(var3 >= var2))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var8.length;
            var2 = 0;
            var3 = var3 > var2;
            var10 = '#000000';
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.int2hex;
            var2 = var8[var2];
            var10 = var3.bind(var6)(var2);
case 4:
            var6 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var9 = var5.colorSwatch;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var9['backgroundColor'] = var10;
            var7[1] = var9;
            var2['style'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 2:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var8.map;
            var6 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var1['colors'] = var6;
            var6 = {'x': 0, 'y': 0};
            var1['start'] = var6;
            var6 = {'x': 1, 'y': 0};
            var1['end'] = var6;
            var5 = var5.colorSwatch;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();