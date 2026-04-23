// app/modules/keyboard/native/useCustomKeyboardHeight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useCustomKeyboardHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCustomKeyboardHeight() {
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 0;
        var4 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var4);
        var4 = var6.useAppEntryKey;
        var4 = var4.bind(var6)();
        var _closure2_slot0 = var4;
        var4 = _closure1_slot1;
        var2 = 1;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.byAppEntry;
            var1 = _closure2_slot0;
            var1 = var2[var1];
            var1 = var1.customKeyboardHeight;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getCustomKeyboardHeight() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var2 = var1.DEFAULT_APP_ENTRY_KEY;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.byAppEntry;
            var1 = var1[var2];
            var1 = var1.customKeyboardHeight;
            return var1;
        }
    };
    var3['getCustomKeyboardHeight'] = var2;
    return var1;
})();