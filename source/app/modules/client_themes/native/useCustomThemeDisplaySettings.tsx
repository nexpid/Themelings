// app/modules/client_themes/native/useCustomThemeDisplaySettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/useCustomThemeDisplaySettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var4 = var3[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var6 = var7.useStateFromStoresArray;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure1_slot3;
                var1 = var3.getCustomTheme;
                var2 = var1.bind(var3)();
                var1 = new Array(3);
                var1[0] = var2;
                var2 = var3.getBaseTheme;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                var2 = var3.getPreviewTheme;
                var2 = var2.bind(var3)();
                var1[2] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var5, var4);
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4.bind(var3)(var5, var1);
            var4 = 0;
            var4 = var1[var4];
            var5 = 1;
            var5 = var1[var5];
            var1 = var1[var2];
            if(!(var3 === var1)) { _fun0001_ip = 120; continue _fun0001 }
 90:
            var2 = undefined;
            if(!(var3 !== var4)) { _fun0001_ip = 117; continue _fun0001 }
 96:
            var2 = undefined;
            if(!(var2 !== var5)) { _fun0001_ip = 117; continue _fun0001 }
 102:
            var3 = {};
            var3['baseTheme'] = var5;
            var3['customTheme'] = var4;
            var2 = var3;
 117:
            var1 = var2;
 120:
            return var1;
        }
    };
    var3['useCustomThemeDisplaySettings'] = var2;
    return var1;
})();