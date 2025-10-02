// app/modules/display_name_styles/DisplayNameStylesConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = 0;
    var4 = var8[var2];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.DisplayNameEffect;
    var4 = var4.SOLID;
    var5 = new Array(5);
    var5[0] = var4;
    var4 = var8[var2];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DisplayNameEffect;
    var4 = var4.GRADIENT;
    var5[1] = var4;
    var4 = var8[var2];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DisplayNameEffect;
    var4 = var4.NEON;
    var5[2] = var4;
    var4 = var8[var2];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DisplayNameEffect;
    var4 = var4.TOON;
    var5[3] = var4;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.DisplayNameEffect;
    var2 = var2.POP;
    var5[4] = var2;
    var2 = 1;
    var4 = var8[var2];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DisplayNameFont;
    var6 = var4.DEFAULT;
    var4 = new Array(8);
    var4[0] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DisplayNameFont;
    var6 = var6.ZILLA_SLAB;
    var4[1] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DisplayNameFont;
    var6 = var6.CHERRY_BOMB;
    var4[2] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DisplayNameFont;
    var6 = var6.CHICLE;
    var4[3] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DisplayNameFont;
    var6 = var6.MUSEO_MODERNO;
    var4[4] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DisplayNameFont;
    var6 = var6.NEO_CASTEL;
    var4[5] = var6;
    var6 = var8[var2];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DisplayNameFont;
    var6 = var6.PIXELIFY;
    var4[6] = var6;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.DisplayNameFont;
    var2 = var2.SINISTRE;
    var4[7] = var2;
    var9 = new Array(8);
    var2 = [2797222, 16762000];
    var9[0] = var2;
    var2 = [2535780, 9497343];
    var9[1] = var2;
    var2 = [14966527, 2522592];
    var9[2] = var2;
    var2 = [9452762, 2939534];
    var9[3] = var2;
    var2 = [15709354, 14970082];
    var9[4] = var2;
    var2 = [14631474, 12423167];
    var9[5] = var2;
    var2 = [16095292, 15031015];
    var9[6] = var2;
    var2 = [14963742, 6674404];
    var9[7] = var2;
    var6 = var9.map;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var2 = var5().value;
            var3 = var1;
            var7 = undefined;
            var4 = var3 === var7;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2;
case 2:
            var2 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var2 = undefined;
            var4 = var5;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var6;
            var4 = var5;
case 4:
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1.return();
case 7:
            var1 = {};
            var1['start'] = var3;
            var1['end'] = var2;
            var2 = '';
            var1['name'] = var2;
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/display_name_styles/DisplayNameStylesConstants.tsx';
    var6 = var7.bind(var8)(var6);
    var3['EFFECT_ORDER'] = var5;
    var3['FONT_ORDER'] = var4;
    var4 = [1628845, 2417517, 1874155, 12790527, 16521573, 13018645, 695675, 1027403, 747943, 11080677, 14287177, 16332578];
    var3['DISPLAY_NAME_STYLES_COLOR_PRESETS'] = var4;
    var3['DISPLAY_NAME_STYLES_GRADIENT_PRESETS'] = var2;
    return var1;
})();