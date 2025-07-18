// app/modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 12;
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
            var10 = var1.isKeyboardAwareOnIOS;
            if(!(var10 === var7)) { _fun0001_ip = 27; continue _fun0001 }
 25:
            var10 = true;
 27:
            var _closure2_slot0 = var10;
            var9 = var1.isKeyboardAwareOnAndroid;
            if(!(var9 === var7)) { _fun0001_ip = 43; continue _fun0001 }
 41:
            var9 = true;
 43:
            var _closure2_slot1 = var9;
            var12 = var1.includeCustomKeyboardHeightIOS;
            if(!(var12 === var7)) { _fun0001_ip = 59; continue _fun0001 }
 57:
            var12 = true;
 59:
            var _closure2_slot2 = var12;
            var3 = var1.includeCustomKeyboardHeightAndroid;
            if(!(var3 === var7)) { _fun0001_ip = 75; continue _fun0001 }
 73:
            var3 = true;
 75:
            var _closure2_slot3 = var3;
            var5 = var1.includeKeyboardHeightIOS;
            if(!(var5 === var7)) { _fun0001_ip = 91; continue _fun0001 }
 89:
            var5 = false;
 91:
            var2 = var1.includeKeyboardHeightAndroid;
            if(!(var2 === var7)) { _fun0001_ip = 146; continue _fun0001 }
 101:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var4 = var4.bind(var7)(var1);
            var1 = var4.isLegacyAndroidKeyboard;
            var1 = var1.bind(var4)();
            var1 = !var1;
            if(!var1) { _fun0001_ip = 143; continue _fun0001 }
 140:
            var1 = var5;
 143:
            var2 = var1;
 146:
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 6;
            var4 = var11[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.bind(var7)();
            var13 = _closure1_slot4;
            var11 = var13.useCallback;
            var6 = new Array(4);
            var6[0] = var12;
            var6[1] = var3;
            var6[2] = var10;
            var6[3] = var9;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 7;
                    var1 = var1[var8];
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
                    var1 = var1[var8];
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
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var4 = var7.bind(var5)(var1);
                    var2 = var4.getSystemKeyboardHeight;
                    var1 = {};
                    var6 = var6[var8];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.isIOS;
                    var6 = var6.bind(var7)();
                    var1['excludeSafeAreaInsets'] = var6;
                    var1 = var2.bind(var4)(var1);
                    var6 = 0;
                    if(!(var6 === var1)) { _fun0002_ip = 337; continue _fun0002 }
 161:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 9;
                    var2 = var9[var2];
                    var7 = var4.bind(var5)(var2);
                    var2 = var7.getKeyboardType;
                    var7 = var2.bind(var7)();
                    var2 = 10;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.KeyboardTypes;
                    var4 = var2.SYSTEM;
                    var2 = 0;
                    if(!(var7 !== var4)) { _fun0002_ip = 334; continue _fun0002 }
 221:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var5)(var4);
                    var4 = var7.isIOS;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0002_ip = 261; continue _fun0002 }
 251:
                    var4 = _closure2_slot2;
                    if(var4) { _fun0002_ip = 304; continue _fun0002 }
 261:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var5)(var4);
                    var4 = var7.isAndroid;
                    var4 = var4.bind(var7)();
                    var2 = 0;
                    if(!var4) { _fun0002_ip = 334; continue _fun0002 }
 292:
                    var4 = _closure2_slot3;
                    var2 = 0;
                    if(!var4) { _fun0002_ip = 334; continue _fun0002 }
 304:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getCustomKeyboardHeight;
                    var2 = var3.bind(var4)();
 334:
                    var1 = var2;
 337:
                    return var1;
                }
            };
            var14 = var11.bind(var13)(var3, var6);
            _closure2_slot4 = var14;
            var6 = var13.useRef;
            var3 = var14.bind(var7)();
            var3 = var6.bind(var13)(var3);
            _closure2_slot5 = var3;
            var6 = var13.useState;
            var3 = var3.current;
            var11 = var6.bind(var13)(var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var12 = var6.bind(var7)(var11, var3);
            var6 = 0;
            var3 = var12[var6];
            var11 = 1;
            var11 = var12[var11];
            _closure2_slot6 = var11;
            var12 = var13.useEffect;
            var11 = new Array(3);
            var11[0] = var14;
            var11[1] = var10;
            var11[2] = var9;
            var9 = function() {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var4 = _closure2_slot5;
                        var4 = var4.current;
                        if(!(var4 !== var3)) { _fun0003_ip = 45; continue _fun0003 }
 26:
                        var4 = _closure2_slot5;
                        var4['current'] = var3;
                        var2 = _closure2_slot6;
                        var2 = var2.bind(var1)(var3);
 45:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var9 = var12.bind(var13)(var9, var11);
            var9 = {};
            var9['keyboardHeight'] = var3;
            var10 = !var10;
            if(var10) { _fun0001_ip = 340; continue _fun0001 }
 337:
            var10 = !var5;
 340:
            if(var10) { _fun0001_ip = 372; continue _fun0001 }
 343:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 7;
            var11 = var13[var11];
            var12 = var12.bind(var7)(var11);
            var11 = var12.isAndroid;
            var10 = var11.bind(var12)();
 372:
            var9['disabled'] = var10;
            var8 = function useAnimateChanges(arg1) {
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
            var8 = var8.bind(var7)(var9);
            if(!var5) { _fun0001_ip = 422; continue _fun0001 }
 389:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 7;
            var5 = var9[var5];
            var8 = var8.bind(var7)(var5);
            var5 = var8.isIOS;
            var5 = var5.bind(var8)();
            if(var5) { _fun0001_ip = 461; continue _fun0001 }
 422:
            var5 = 0;
            if(!var2) { _fun0001_ip = 464; continue _fun0001 }
 427:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var5 = 0;
            if(!var1) { _fun0001_ip = 464; continue _fun0001 }
 461:
            var5 = var3;
 464:
            var1 = {};
            var2 = var4;
            if(!(var3 > var6)) { _fun0001_ip = 497; continue _fun0001 }
 473:
            var3 = {};
            var16 = var3;
            var15 = var4;
            var4 = copyDataProperties(var16, var15);
            var4 = 'bottom';
            var3[var4] = var5;
            var2 = var3;
 497:
            var1['insets'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();