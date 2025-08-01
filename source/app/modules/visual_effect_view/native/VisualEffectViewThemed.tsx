// app/modules/visual_effect_view/native/VisualEffectViewThemed.tsx
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.forwardRef;
    var2 = function VisualEffectViewThemed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeLight;
            var2 = var2.bind(var3)(var5);
            var5 = 'dark';
            if(!var2) { _fun0001_ip = 67; continue _fun0001 }
 63:
            var5 = 'light';
 67:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = arg2;
            var1['ref'] = var6;
            var1['blurTheme'] = var5;
            var7 = arg1;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/visual_effect_view/native/VisualEffectViewThemed.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();