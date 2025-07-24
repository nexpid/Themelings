// app/design/components/Input/native/NativeTextInput.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function useKeyboardBlurring(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getKeyboardIsOpen;
            var4 = var4.bind(var5)();
            var _closure3_slot0 = var4;
            var2 = _closure1_slot8;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.keyboardOpen;
                    var3 = _closure3_slot0;
                    var3 = var2 === var3;
                    if(var3) { _fun0001_ip = 26; continue _fun0001 }
 23:
                    var3 = var2;
 26:
                    if(var3) { _fun0001_ip = 57; continue _fun0001 }
 29:
                    var3 = _closure2_slot0;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0001_ip = 57; continue _fun0001 }
 47:
                    var3 = var4.blur;
                    var3 = var3.bind(var4)();
 57:
                    _closure3_slot0 = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.Pressable;
    var _closure1_slot4 = var10;
    var10 = var5.TextInput;
    var _closure1_slot5 = var10;
    var10 = var5.StyleSheet;
    var _closure1_slot6 = var10;
    var5 = var5.View;
    var _closure1_slot7 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.KeyboardThemes;
    var _closure1_slot9 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot10 = var9;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot3;
            var3 = var4.useRef;
            var5 = null;
            var10 = var3.bind(var4)(var5);
            var3 = _closure1_slot12;
            var4 = undefined;
            var3 = var3.bind(var4)(var10);
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var14 = var3.bind(var4)(var1);
            var3 = function useControlledValueProps(arg1, arg2) {
                var2 = arg1;
                var8 = arg2;
                var _closure3_slot0 = var8;
                var7 = var2.value;
                var _closure3_slot1 = var7;
                var3 = var2.defaultValue;
                var _closure3_slot2 = var3;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1.current;
                        var6 = null;
                        if(!(var6 != var3)) { _fun0003_ip = 53; continue _fun0003 }
 18:
                        var2 = var3.setNativeProps;
                        var1 = {};
                        var4 = _closure3_slot1;
                        if(!(var6 == var4)) { _fun0003_ip = 40; continue _fun0003 }
 34:
                        var4 = _closure3_slot2;
                        _fun0003_ip = 44; continue _fun0003;
 40:
                        var4 = _closure3_slot1;
 44:
                        var1['text'] = var4;
                        var1 = var2.bind(var3)(var1);
 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useMountLayoutEffect;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0004_ip = 39; continue _fun0004 }
 18:
                        var2 = var3.setNativeProps;
                        var1 = {};
                        var4 = _closure3_slot1;
                        var1['text'] = var4;
                        var1 = var2.bind(var3)(var1);
 39:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = {};
                var1['value'] = var2;
                var1['defaultValue'] = var2;
                return var1;
            };
            var13 = var3.bind(var4)(var1, var10);
            var2 = function usePanGestureWrapper(arg1) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.useIsScreenReaderEnabled;
                var1 = var1.bind(var5)();
                var _closure3_slot1 = var1;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0005_ip = 33; continue _fun0005 }
 23:
                        var2 = var3.focus;
                        var1 = var2.bind(var3)();
 33:
                        return var1;
                    }
                };
                var4 = var6.bind(var7)(var4, var5);
                var _closure3_slot2 = var4;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = {};
                        var2 = _closure1_slot6;
                        var4 = var2.absoluteFillObject;
                        var5 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var2 = _closure3_slot1;
                        var3 = 'flex';
                        if(!var2) { _fun0006_ip = 40; continue _fun0006 }
 36:
                        var3 = 'none';
 40:
                        var2 = 'display';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                var _closure3_slot3 = var1;
                var1 = {};
                var2 = function panGestureWrapper(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = _closure1_slot11;
                        var3 = _closure1_slot7;
                        var2 = {};
                        var5 = {'flexBasis': 0, 'flexGrow': 1};
                        var2['style'] = var5;
                        var5 = new Array(2);
                        var6 = arg1;
                        var5[0] = var6;
                        var8 = _closure1_slot10;
                        var7 = _closure1_slot4;
                        var6 = {};
                        var9 = _closure3_slot0;
                        var12 = var9.current;
                        var9 = null;
                        var10 = var9 != var12;
                        var11 = 'auto';
                        var9 = var11;
                        if(!var10) { _fun0007_ip = 100; continue _fun0007 }
 80:
                        var10 = var12.isFocused;
                        var10 = var10.bind(var12)();
                        var9 = var11;
                        if(!var10) { _fun0007_ip = 100; continue _fun0007 }
 96:
                        var9 = 'none';
 100:
                        var6['pointerEvents'] = var9;
                        var9 = _closure3_slot2;
                        var6['onPress'] = var9;
                        var1 = _closure3_slot3;
                        var6['style'] = var1;
                        var1 = undefined;
                        var6 = var8.bind(var1)(var7, var6);
                        var5[1] = var6;
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var1['panGestureWrapper'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var10);
            var3 = var2.panGestureWrapper;
            var6 = _closure1_slot0;
            var2 = 9;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useThemeContext;
            var2 = var2.bind(var6)();
            var6 = var2.theme;
            var2 = var1.keyboardAppearance;
            if(!(var5 == var2)) { _fun0002_ip = 187; continue _fun0002 }
 129:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isThemeDark;
            var2 = var2.bind(var5)(var6);
            var5 = _closure1_slot9;
            if(var2) { _fun0002_ip = 175; continue _fun0002 }
 167:
            var2 = var5.LIGHT;
            _fun0002_ip = 181; continue _fun0002;
 175:
            var2 = var5.DARK;
 181:
            var1['keyboardAppearance'] = var2;
 187:
            var6 = _closure1_slot10;
            var5 = _closure1_slot5;
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 10;
            var11 = var9[var7];
            var12 = var8.bind(var4)(var11);
            var11 = var12.mergeProps;
            var16 = var11.bind(var12)(var1, var14, var13);
            var17 = var2;
            var11 = copyDataProperties(var17, var16);
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.mergeRefs;
            var7 = arg2;
            var8 = var8.bind(var9)(var10, var7);
            var7 = 'ref';
            var2[var7] = var8;
            var2 = var6.bind(var4)(var5, var2);
            var5 = var1.multiline;
            var1 = var2;
            if(var5) { _fun0002_ip = 293; continue _fun0002 }
 288:
            var1 = var3.bind(var4)(var2);
 293:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Input/native/NativeTextInput.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useKeyboardBlurring'] = var4;
    var3['NativeTextInput'] = var2;
    return var1;
})();