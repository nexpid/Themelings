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
case 0:
            var2 = arguments[0];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot4;
case 2:
            var1 = var2.includeCustomKeyboard;
            if(!(var1 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var4 = var2.appEntryKey;
            if(!(var4 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var2 = var3.bind(var6)(var2);
            var4 = var2.DEFAULT_APP_ENTRY_KEY;
case 6:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.getState;
            var2 = var2.bind(var5)();
            var2 = var2.byAppEntry;
            var4 = var2[var4];
            var5 = var4.systemKeyboardOpen;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var5;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = var5;
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = var4.keyboardType;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 3;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.SYSTEM;
            var2 = var4 !== var3;
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
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
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyboard/native/useKeyboardIsOpen.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useKeyboardIsOpen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arguments[0];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = _closure1_slot4;
case 13:
            var2 = var2.includeCustomKeyboard;
            if(!(var2 === var3)) { _fun0002_ip = 15; continue _fun0002 }
case 4:
            var2 = false;
case 15:
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 1;
            var4 = var5[var4];
            var6 = var6.bind(var3)(var4);
            var4 = var6.useAppEntryKey;
            var4 = var4.bind(var6)();
            _closure2_slot1 = var4;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.byAppEntry;
                    var2 = _closure2_slot1;
                    var3 = var3[var2];
                    var1 = _closure2_slot0;
                    var4 = var3.systemKeyboardOpen;
                    if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 16:
                    var1 = var4;
                    _fun0003_ip = 17; continue _fun0003;
case 7:
                    var2 = var4;
                    if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = var3.keyboardType;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.KeyboardTypes;
                    var3 = var3.SYSTEM;
                    var2 = var4 !== var3;
case 18:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function subscribeToKeyboardIsOpen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 20; continue _fun0004 }
case 13:
            var2 = _closure1_slot4;
case 20:
            var3 = var2.includeCustomKeyboard;
            if(!(var3 === var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = false;
case 21:
            var _closure2_slot1 = var3;
            var3 = var2.appEntryKey;
            if(!(var3 === var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var3 = var2.DEFAULT_APP_ENTRY_KEY;
case 23:
            var _closure2_slot2 = var3;
            var2 = _closure1_slot3;
            var1 = function() {
                var3 = _closure2_slot0;
                var4 = _closure1_slot5;
                var1 = {};
                var5 = _closure2_slot1;
                var1['includeCustomKeyboard'] = var5;
                var2 = _closure2_slot2;
                var1['appEntryKey'] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        }
    };
    var3['subscribeToKeyboardIsOpen'] = var4;
    var3['getKeyboardIsOpen'] = var2;
    return var1;
})();