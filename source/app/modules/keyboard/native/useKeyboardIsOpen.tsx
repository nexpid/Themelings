// app/modules/keyboard/native/useKeyboardIsOpen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getKeyboardIsOpen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var1 = _closure1_slot4;
 16:
            var2 = var1.includeCustomKeyboard;
            if(!(var2 === var6)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var2 = false;
 28:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 2;
            var1 = var1[var4];
            var5 = var5.bind(var6)(var1);
            var1 = var5.getState;
            var1 = var1.bind(var5)();
            var5 = var1.systemKeyboardOpen;
            var1 = var5;
            if(!var2) { _fun0001_ip = 147; continue _fun0001 }
 73:
            var2 = var5;
            if(var5) { _fun0001_ip = 144; continue _fun0001 }
 79:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getState;
            var4 = var4.bind(var5)();
            var4 = var4.keyboardType;
            var5 = _closure1_slot0;
            var3 = 1;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.SYSTEM;
            var2 = var4 !== var3;
 144:
            var1 = var2;
 147:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = {};
    var _closure1_slot4 = var5;
    var5 = function KEYBOARD_OPEN_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.systemKeyboardOpen;
        return var1;
    };
    var _closure1_slot5 = var5;
    var5 = function KEYBOARD_OPEN_OR_CUSTOM_KEYBOARD_OPEN_GETTER(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.systemKeyboardOpen;
            if(var1) { _fun0002_ip = 59; continue _fun0002 }
 12:
            var3 = var2.keyboardType;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.KeyboardTypes;
            var2 = var2.SYSTEM;
            var1 = var3 !== var2;
 59:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyboard/native/useKeyboardIsOpen.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useKeyboardIsOpen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arguments[0];
            var3 = undefined;
            if(!(var1 === var3)) { _fun0003_ip = 16; continue _fun0003 }
 9:
            var1 = _closure1_slot4;
 16:
            var1 = var1.includeCustomKeyboard;
            if(!(var1 === var3)) { _fun0003_ip = 28; continue _fun0003 }
 26:
            var1 = false;
 28:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            if(var1) { _fun0003_ip = 60; continue _fun0003 }
 54:
            var1 = _closure1_slot5;
            _fun0003_ip = 64; continue _fun0003;
 60:
            var1 = _closure1_slot6;
 64:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function subscribeToKeyboardIsOpen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0004_ip = 25; continue _fun0004 }
 18:
            var2 = _closure1_slot4;
 25:
            var2 = var2.includeCustomKeyboard;
            if(!(var2 === var3)) { _fun0004_ip = 37; continue _fun0004 }
 35:
            var2 = false;
 37:
            var _closure2_slot1 = var2;
            var2 = _closure1_slot3;
            var1 = function() {
                var3 = _closure2_slot0;
                var4 = _closure1_slot7;
                var1 = {};
                var2 = _closure2_slot1;
                var1['includeCustomKeyboard'] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['subscribeToKeyboardIsOpen'] = var4;
    var3['getKeyboardIsOpen'] = var2;
    return var1;
})();