// app/design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGradientThemeFromFlags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var2 = var8[var1];
            var6 = undefined;
            var4 = var7.bind(var6)(var2);
            var3 = var4.hasThemeFlag;
            var2 = var8[var1];
            var2 = var7.bind(var6)(var2);
            var2 = var2.ThemeContextFlags;
            var2 = var2.MOBILE_DARK_GRADIENT_THEME_ENABLED;
            var2 = var3.bind(var4)(var5, var2);
            var3 = var8[var1];
            var4 = var7.bind(var6)(var3);
            var3 = var4.hasThemeFlag;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.ThemeContextFlags;
            var1 = var1.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
            var3 = var3.bind(var4)(var5, var1);
            var1 = 'dark';
            if(var2) { _fun0001_ip = 121; continue _fun0001 }
 109:
            var2 = null;
            if(!var3) { _fun0001_ip = 118; continue _fun0001 }
 114:
            var2 = 'light';
 118:
            var1 = var2;
 121:
            return var1;
        }
    };
    var3['getGradientThemeFromFlags'] = var2;
    return var1;
})();