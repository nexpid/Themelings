// app/modules/keyboard/native/useSystemKeyboardHeight.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = function SYSTEM_KEYBOARD_HEIGHT_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.keyboardHeight;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = function SYSTEM_KEYBOARD_HEIGHT_GETTER_IGNORING_KEYBOARD(arg1) {
        var1 = arg1;
        var1 = var1.keyboardHeightExcludingSafeAreaInsets;
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = {};
    var5 = false;
    var1['excludeSafeAreaInsets'] = var5;
    var _closure1_slot4 = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useSystemKeyboardHeight.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSystemKeyboardHeight() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var3 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot4;
case 2:
            var1 = var1.excludeSafeAreaInsets;
            if(!(var1 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 0;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot2;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = _closure1_slot3;
case 8:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getSystemKeyboardHeight() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arguments[0];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = _closure1_slot4;
case 2:
            var1 = var1.excludeSafeAreaInsets;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var2.keyboardHeight;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var1 = var2.keyboardHeightExcludingSafeAreaInsets;
case 11:
            return var1;
        }
    };
    var3['getSystemKeyboardHeight'] = var2;
    return var1;
})();