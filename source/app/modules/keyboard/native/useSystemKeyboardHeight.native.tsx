// app/modules/keyboard/native/useSystemKeyboardHeight.native.tsx
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
    var1 = {};
    var6 = false;
    var1['excludeSafeAreaInsets'] = var6;
    var _closure1_slot3 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useSystemKeyboardHeight.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSystemKeyboardHeight() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
case 2:
            var2 = var2.excludeSafeAreaInsets;
            if(!(var2 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = false;
case 4:
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 0;
            var4 = var5[var4];
            var6 = var6.bind(var3)(var4);
            var4 = var6.useAppEntryKey;
            var4 = var4.bind(var6)();
            _closure2_slot1 = var4;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.byAppEntry;
                    var2 = _closure2_slot1;
                    var2 = var3[var2];
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var2.keyboardHeight;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var1 = var2.keyboardHeightExcludingSafeAreaInsets;
case 8:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getSystemKeyboardHeight() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arguments[0];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = _closure1_slot3;
case 9:
            var1 = var2.excludeSafeAreaInsets;
            if(!(var1 === var5)) { _fun0003_ip = 5; continue _fun0003 }
case 11:
            var1 = false;
case 5:
            var3 = var2.appEntryKey;
            if(!(var3 === var5)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 0;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var3 = var2.DEFAULT_APP_ENTRY_KEY;
case 12:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.byAppEntry;
            var2 = var2[var3];
            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var2.keyboardHeight;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var1 = var2.keyboardHeightExcludingSafeAreaInsets;
case 16:
            return var1;
        }
    };
    var3['getSystemKeyboardHeight'] = var2;
    return var1;
})();