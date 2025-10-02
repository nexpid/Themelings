// app/design/components/ThemeContextProvider/ThemeContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var7 = function createThemedContext(arg1) {
        var2 = arg1;
        var1 = global;
        var3 = var1.JSON;
        var1 = var3.stringify;
        var3 = var1.bind(var3)(var2);
        var1 = {};
        var5 = var1;
        var4 = var2;
        var2 = copyDataProperties(var5, var4);
        var2 = 'key';
        var1[var2] = var3;
        return var1;
    };
    var6 = function useThemeContext() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = var3.useContext;
            var1 = _closure1_slot3;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'useThemeContext must be used within a ThemeContext.Provider';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot4 = var6;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var10[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot0 = var8;
    var4 = 1;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var5 = var4.Fragment;
    var _closure1_slot1 = var5;
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = {'theme': 'light', 'primaryColor': null, 'secondaryColor': null, 'gradient': null, 'flags': 0, 'contrast': 1, 'saturation': 1, 'density': 'compact', 'disableAdaptiveTheme': false, 'reduceAdaptiveTheme': false};
    var5 = var7.bind(var1)(var4);
    var4 = var8.createContext;
    var4 = var4.bind(var8)(var5);
    var _closure1_slot3 = var4;
    var8 = 2;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'design/components/ThemeContextProvider/ThemeContext.tsx';
    var8 = var9.bind(var10)(var8);
    var3['createThemedContext'] = var7;
    var3['useThemeContext'] = var6;
    var3['FALLBACK_THEME_CONTEXT_VALUE'] = var5;
    var3['ThemeContext'] = var4;
    var2 = function UseThemeContext(arg1) {
        var1 = arg1;
        var6 = var1.children;
        var2 = _closure1_slot4;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot2;
        var2 = _closure1_slot1;
        var1 = {};
        var5 = var6.bind(var4)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['UseThemeContext'] = var2;
    return var1;
})();