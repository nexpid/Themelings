// app/modules/display_name_styles/native/effects/GummyStripes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.Fragment;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['stripe'] = var9;
    var9 = {};
    var10 = -1;
    var9['marginLeft'] = var10;
    var4['stripeOverlap'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/effects/GummyStripes.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GummyStripes(arg1) {
        var1 = arg1;
        var7 = var1.colors;
        var2 = _closure1_slot5;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg2;
                var4 = _closure1_slot3;
                var3 = _closure1_slot2;
                var2 = {};
                var6 = _closure2_slot0;
                var7 = var6.stripe;
                var6 = new Array(3);
                var6[0] = var7;
                var7 = 0;
                var7 = var5 > var7;
                if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = _closure2_slot0;
                var7 = var8.stripeOverlap;
case 2:
                var6[1] = var7;
                var7 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var8 = var8[var1];
                var1 = undefined;
                var10 = var9.bind(var1)(var8);
                var9 = var10.int2hex;
                var8 = arg1;
                var8 = var9.bind(var10)(var8);
                var7['backgroundColor'] = var8;
                var6[2] = var7;
                var2['style'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();