// app/modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaInsetsKeyboardAware() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[0];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 13; continue _fun0001 }
 11:
            var1 = {};
 13:
            var8 = var1.isKeyboardAwareOnIOS;
            if(!(var8 === var7)) { _fun0001_ip = 27; continue _fun0001 }
 25:
            var8 = true;
 27:
            var _closure2_slot0 = var8;
            var5 = var1.isKeyboardAwareOnAndroid;
            if(!(var5 === var7)) { _fun0001_ip = 43; continue _fun0001 }
 41:
            var5 = true;
 43:
            var _closure2_slot1 = var5;
            var3 = var1.includeCustomKeyboardHeight;
            if(!(var3 === var7)) { _fun0001_ip = 59; continue _fun0001 }
 57:
            var3 = true;
 59:
            var _closure2_slot2 = var3;
            var1 = var1.includeKeyboardHeight;
            if(!(var1 === var7)) { _fun0001_ip = 75; continue _fun0001 }
 73:
            var1 = false;
 75:
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 5;
            var4 = var10[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.bind(var7)();
            var12 = _closure1_slot4;
            var10 = var12.useCallback;
            var6 = new Array(3);
            var6[0] = var3;
            var6[1] = var8;
            var6[2] = var5;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 6;
                    var1 = var1[var4];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0002_ip = 52; continue _fun0002 }
 38:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 52; continue _fun0002 }
 48:
                    var1 = 0;
                    return var1;
 52:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.isAndroid;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0002_ip = 95; continue _fun0002 }
 81:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 95; continue _fun0002 }
 91:
                    var1 = 0;
                    return var1;
 95:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var1 = var4[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.getSystemKeyboardHeight;
                    var1 = var1.bind(var2)();
                    var6 = 0;
                    if(!(var6 === var1)) { _fun0002_ip = 236; continue _fun0002 }
 131:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var2 = var8[var2];
                    var7 = var4.bind(var5)(var2);
                    var2 = var7.getKeyboardType;
                    var7 = var2.bind(var7)();
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.KeyboardTypes;
                    var4 = var2.SYSTEM;
                    var2 = 0;
                    if(!(var7 !== var4)) { _fun0002_ip = 233; continue _fun0002 }
 191:
                    var4 = _closure2_slot2;
                    var2 = 0;
                    if(!var4) { _fun0002_ip = 233; continue _fun0002 }
 203:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getCustomKeyboardHeight;
                    var2 = var3.bind(var4)();
 233:
                    var1 = var2;
 236:
                    return var1;
                }
            };
            var13 = var10.bind(var12)(var3, var6);
            _closure2_slot3 = var13;
            var6 = var12.useRef;
            var3 = var13.bind(var7)();
            var3 = var6.bind(var12)(var3);
            _closure2_slot4 = var3;
            var6 = var12.useState;
            var3 = var3.current;
            var10 = var6.bind(var12)(var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var11 = var6.bind(var7)(var10, var3);
            var6 = 0;
            var3 = var11[var6];
            var10 = 1;
            var10 = var11[var10];
            _closure2_slot5 = var10;
            var11 = var12.useEffect;
            var10 = new Array(3);
            var10[0] = var13;
            var10[1] = var8;
            var10[2] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var4 = _closure2_slot4;
                        var4 = var4.current;
                        if(!(var4 !== var3)) { _fun0003_ip = 45; continue _fun0003 }
 26:
                        var4 = _closure2_slot4;
                        var4['current'] = var3;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var3);
 45:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5 = var11.bind(var12)(var5, var10);
            var5 = {};
            var5['keyboardHeight'] = var3;
            var8 = !var8;
            if(var8) { _fun0001_ip = 265; continue _fun0001 }
 262:
            var8 = !var1;
 265:
            if(var8) { _fun0001_ip = 297; continue _fun0001 }
 268:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var10 = var10.bind(var7)(var9);
            var9 = var10.isAndroid;
            var8 = var9.bind(var10)();
 297:
            var5['disabled'] = var8;
            var2 = function useAnimateChanges(arg1) {
                var2 = arg1;
                var6 = var2.keyboardHeight;
                var5 = var2.disabled;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useRef;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot1 = var2;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.getKeyboardDuration;
                        var5 = var2.bind(var4)();
                        var4 = _closure3_slot1;
                        var4 = var4.current;
                        if(!var4) { _fun0004_ip = 96; continue _fun0004 }
 50:
                        var4 = 0;
                        if(!(var4 !== var5)) { _fun0004_ip = 96; continue _fun0004 }
 56:
                        var4 = _closure3_slot0;
                        if(var4) { _fun0004_ip = 96; continue _fun0004 }
 63:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.DeprecatedLayoutAnimationKeyboard;
                        var3 = var3.bind(var4)(var5);
                        _fun0004_ip = 108; continue _fun0004;
 96:
                        var3 = _closure3_slot1;
                        var2 = true;
                        var3['current'] = var2;
 108:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var7)(var5);
            var5 = 0;
            if(!var1) { _fun0001_ip = 319; continue _fun0001 }
 316:
            var5 = var3;
 319:
            var1 = {};
            var2 = var4;
            if(!(var3 > var6)) { _fun0001_ip = 352; continue _fun0001 }
 328:
            var3 = {};
            var15 = var3;
            var14 = var4;
            var4 = copyDataProperties(var15, var14);
            var4 = 'bottom';
            var3[var4] = var5;
            var2 = var3;
 352:
            var1['insets'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();