// app/modules/a11y/native/setAccessibilityFocusPrevious.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/setAccessibilityFocusPrevious.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setAccessibilityFocusPrevious() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 60; continue _fun0001 }
 38:
            var2 = _closure1_slot2;
            var3 = var2.DCDAccessibilityManager;
            var2 = var3.restorePreviousFocus;
            var2 = var2.bind(var3)();
 60:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();