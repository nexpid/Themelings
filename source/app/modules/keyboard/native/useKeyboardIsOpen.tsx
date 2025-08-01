// app/modules/keyboard/native/useKeyboardIsOpen.tsx
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
    var _closure1_slot3 = var1;
    var1 = function KEYBOARD_OPEN_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.keyboardOpen;
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function KEYBOARD_OPEN_OR_CUSTOM_KEYBOARD_OPEN_GETTER(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.keyboardOpen;
            if(var1) { _fun0001_ip = 58; continue _fun0001 }
 12:
            var3 = var2.keyboardType;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 0;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.KeyboardTypes;
            var2 = var2.SYSTEM;
            var1 = var3 !== var2;
 58:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useKeyboardIsOpen.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useKeyboardIsOpen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arguments[0];
            var3 = undefined;
            if(!(var1 === var3)) { _fun0002_ip = 16; continue _fun0002 }
 9:
            var1 = _closure1_slot3;
 16:
            var1 = var1.includeCustomKeyboard;
            if(!(var1 === var3)) { _fun0002_ip = 28; continue _fun0002 }
 26:
            var1 = false;
 28:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            if(var1) { _fun0002_ip = 60; continue _fun0002 }
 54:
            var1 = _closure1_slot4;
            _fun0002_ip = 64; continue _fun0002;
 60:
            var1 = _closure1_slot5;
 64:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getKeyboardIsOpen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0003_ip = 16; continue _fun0003 }
 9:
            var1 = _closure1_slot3;
 16:
            var2 = var1.includeCustomKeyboard;
            if(!(var2 === var6)) { _fun0003_ip = 28; continue _fun0003 }
 26:
            var2 = false;
 28:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 1;
            var1 = var1[var4];
            var5 = var5.bind(var6)(var1);
            var1 = var5.getState;
            var1 = var1.bind(var5)();
            var5 = var1.keyboardOpen;
            var1 = var5;
            if(!var2) { _fun0003_ip = 146; continue _fun0003 }
 73:
            var2 = var5;
            if(var5) { _fun0003_ip = 143; continue _fun0003 }
 79:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getState;
            var4 = var4.bind(var5)();
            var4 = var4.keyboardType;
            var5 = _closure1_slot0;
            var3 = 0;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.SYSTEM;
            var2 = var4 !== var3;
 143:
            var1 = var2;
 146:
            return var1;
        }
    };
    var3['getKeyboardIsOpen'] = var2;
    return var1;
})();