// app/modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'top': 0};
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function ThemedHeaderBackgroundGradient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.baseColor;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 49; continue _fun0001 }
 15:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.colors;
            var10 = var2.BG_BASE_TERTIARY;
 49:
            var6 = var1.minHeight;
            if(!(var6 === var4)) { _fun0001_ip = 62; continue _fun0001 }
 59:
            var6 = 16;
 62:
            var1 = _closure1_slot6;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 6;
            var2 = var8[var2];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useToken;
            var9 = var2.bind(var9)(var10);
            var2 = 7;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.hex2rgb;
            var2 = 0;
            var2 = var3.bind(var8)(var9, var2);
            var3 = null;
            var3 = var3 != var2;
            var8 = 'transparent';
            if(!var3) { _fun0001_ip = 166; continue _fun0001 }
 163:
            var8 = var2;
 166:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var1 = var1.top;
            var10 = var2.bind(var3)(var1, var6);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['height'] = var10;
            var5[1] = var6;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var7 = _closure1_slot3;
            var7 = var7.absoluteFill;
            var5['style'] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var5['colors'] = var7;
            var7 = {'x': 0, 'y': 0};
            var5['start'] = var7;
            var7 = {'x': 0, 'y': 1};
            var5['end'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();