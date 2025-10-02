// app/modules/themes/native/useNativeThemeUpdater.tsx
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/native/useNativeThemeUpdater.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNativeThemeUpdater() {
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = _closure1_slot3;
        var2 = var2.theme;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = var4.useLayoutEffect;
        var2 = function() {
            var4 = function handleThemeUpdate() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var3 = var2.theme;
                    var4 = _closure2_slot0;
                    var4 = var4.current;
                    if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure2_slot0;
                    var2['current'] = var3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.updateTheme;
                    var1 = var1.bind(var2)(var3);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.updateTheme;
            var3 = _closure1_slot3;
            var2 = var3.theme;
            var2 = var5.bind(var6)(var2);
            var2 = var3.addChangeListener;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.removeChangeListener;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();