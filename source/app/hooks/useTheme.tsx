// app/hooks/useTheme.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function useTheme() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useThemeContext;
        var1 = var1.bind(var2)();
        var1 = var1.theme;
        return var1;
    };
    var _closure1_slot3 = var5;
    var2 = function getThemeIndex(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot2;
            var3 = var3.DARK;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot2;
            var1 = var1.LIGHT;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = undefined;
            return var1;
case 4:
            var1 = 1;
            return var1;
case 2:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot2 = var6;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'hooks/useTheme.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useTheme'] = var5;
    var4 = function useThemeIndex() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot3;
        var2 = undefined;
        var1 = var1.bind(var2)();
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useThemeIndex'] = var4;
    var3['getThemeIndex'] = var2;
    return var1;
})();