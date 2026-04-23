// app/modules/keyboard/native/useKeyboardType.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function getKeyboardContextForType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var2 = var1.DEFAULT_APP_ENTRY_KEY;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.byAppEntry;
            var1 = var1[var2];
            var2 = var1.keyboardContexts;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function getKeyboardType() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var2 = var1.DEFAULT_APP_ENTRY_KEY;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.byAppEntry;
            var1 = var1[var2];
            var1 = var1.keyboardType;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot3 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/keyboard/native/useKeyboardType.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useKeyboardType() {
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 1;
        var4 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var4);
        var4 = var6.useAppEntryKey;
        var4 = var4.bind(var6)();
        var _closure2_slot0 = var4;
        var4 = _closure1_slot1;
        var2 = 2;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.byAppEntry;
            var1 = _closure2_slot0;
            var1 = var2[var1];
            var1 = var1.keyboardType;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var6;
    var3['getKeyboardContextForType'] = var5;
    var5 = function useKeyboardContextForType(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 1;
        var4 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var4);
        var4 = var6.useAppEntryKey;
        var4 = var4.bind(var6)();
        var _closure2_slot1 = var4;
        var4 = _closure1_slot1;
        var2 = 2;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.byAppEntry;
            var2 = _closure2_slot1;
            var2 = var3[var2];
            var2 = var2.keyboardContexts;
            var1 = _closure2_slot0;
            var1 = var2[var1];
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useKeyboardContextForType'] = var5;
    var3['getKeyboardType'] = var4;
    var4 = function getKeyboardTypePrevious() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var2 = var1.DEFAULT_APP_ENTRY_KEY;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.byAppEntry;
            var1 = var1[var2];
            var1 = var1.keyboardTypePrevious;
            return var1;
        }
    };
    var3['getKeyboardTypePrevious'] = var4;
    var4 = function useKeyboardTypePrevious() {
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 1;
        var4 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var4);
        var4 = var6.useAppEntryKey;
        var4 = var4.bind(var6)();
        var _closure2_slot0 = var4;
        var4 = _closure1_slot1;
        var2 = 2;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.byAppEntry;
            var1 = _closure2_slot0;
            var1 = var2[var1];
            var1 = var1.keyboardTypePrevious;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useKeyboardTypePrevious'] = var4;
    var4 = function useKeyboardTypeSharedValue() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 1;
        var1 = var5[var1];
        var7 = undefined;
        var6 = var4.bind(var7)(var1);
        var1 = var6.useAppEntryKey;
        var6 = var1.bind(var6)();
        var _closure2_slot0 = var6;
        var1 = 3;
        var1 = var5[var1];
        var5 = var4.bind(var7)(var1);
        var4 = var5.useSharedValue;
        var1 = _closure1_slot5;
        var1 = var1.bind(var7)(var6);
        var1 = var4.bind(var5)(var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.addKeyboardTypeChangedListener;
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg2;
                    var1 = arg1;
                    var3 = var1.type;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var2 = _closure2_slot0;
                    var1 = var4 !== var2;
case 4:
                    if(var1) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useKeyboardTypeSharedValue'] = var4;
    var2 = function useKeyboardWillOpenSharedValue() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 1;
        var1 = var10[var1];
        var8 = undefined;
        var4 = var9.bind(var8)(var1);
        var1 = var4.useAppEntryKey;
        var6 = var1.bind(var4)();
        var _closure2_slot0 = var6;
        var1 = 3;
        var1 = var10[var1];
        var5 = var9.bind(var8)(var1);
        var4 = var5.useSharedValue;
        var7 = _closure1_slot4;
        var1 = 4;
        var1 = var10[var1];
        var1 = var9.bind(var8)(var1);
        var1 = var1.KeyboardTypes;
        var1 = var1.SYSTEM;
        var1 = var7.bind(var8)(var1, var6);
        var7 = var1.keyboardWillOpen;
        var1 = true;
        var1 = var1 === var7;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.addKeyboardWillOpenChangedListener;
            var1 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                    var2 = _closure2_slot0;
                    var1 = var3 !== var2;
case 8:
                    if(var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useKeyboardWillOpenSharedValue'] = var2;
    return var1;
})();