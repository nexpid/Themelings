// app/modules/keyboard/native/useKeyboardDuration.tsx
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
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useKeyboardDuration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getKeyboardDuration() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var3 = var1.DEFAULT_APP_ENTRY_KEY;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isAndroid;
            var4 = var1.bind(var4)();
            var1 = 300;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.byAppEntry;
            var2 = var2[var3];
            var1 = var2.keyboardDuration;
case 4:
            return var1;
        }
    };
    var3['getKeyboardDuration'] = var2;
    return var1;
})();