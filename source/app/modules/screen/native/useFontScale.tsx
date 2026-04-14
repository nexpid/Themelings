// app/modules/screen/native/useFontScale.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useFontScaleStore;
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/native/useFontScale.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getFontScale() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'main';
case 2:
            var4 = _closure1_slot4;
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.byAppEntry;
            var2 = var2[var3];
            var2 = var2.fontScale;
            var3 = _closure1_slot3;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.fontScale;
            var1 = var2 * var1;
            return var1;
        }
    };
    var3['getFontScale'] = var4;
    var2 = function useFontScale() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var3 = var4[var3];
        var4 = undefined;
        var5 = var5.bind(var4)(var3);
        var3 = var5.useAppEntryKey;
        var8 = var3.bind(var5)();
        var _closure2_slot0 = var8;
        var3 = _closure1_slot4;
        var7 = _closure1_slot2;
        var6 = var7.useCallback;
        var5 = new Array(1);
        var5[0] = var8;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.byAppEntry;
            var1 = _closure2_slot0;
            var1 = var2[var1];
            var1 = var1.fontScale;
            return var1;
        };
        var2 = var6.bind(var7)(var2, var5);
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var1 = var3.getState;
        var1 = var1.bind(var3)();
        var1 = var1.fontScale;
        var1 = var2 * var1;
        return var1;
    };
    var3['useFontScale'] = var2;
    return var1;
})();