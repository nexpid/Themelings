// app/modules/client_themes/native/useColorThemeBackground.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/useColorThemeBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useColorThemeBackground() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var2);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot2;
                var1 = var1.gradientPreset;
                return var1;
            };
            var4 = var4.bind(var7)(var2, var1);
            var1 = 2;
            var1 = var6[var1];
            var2 = var5.bind(var3)(var1);
            var1 = var2.useCustomBackgroundGradient;
            var2 = var1.bind(var2)();
            var1 = 3;
            var1 = var6[var1];
            var5 = var5.bind(var3)(var1);
            var3 = var5.useIsCustomThemeMobileRenderingEnabled;
            var1 = 'useColorThemeBackground';
            var3 = var3.bind(var5)(var1);
            var1 = var4;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var1 = var4;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();