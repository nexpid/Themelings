// app/modules/keyboard/native/KeyboardAwareView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getKeyboardHeightWithOffset(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 5;
            var1 = var5[var1];
            var8 = undefined;
            var5 = var2.bind(var8)(var1);
            var2 = var5.getSystemKeyboardHeight;
            var1 = {};
            var7 = true;
            var1['excludeSafeAreaInsets'] = var7;
            var5 = var2.bind(var5)(var1);
            var2 = 0;
            if(!(var2 === var5)) { _fun0001_ip = 157; continue _fun0001 }
 64:
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 6;
            var1 = var10[var1];
            var9 = var7.bind(var8)(var1);
            var1 = var9.getKeyboardType;
            var9 = var1.bind(var9)();
            var1 = 7;
            var1 = var10[var1];
            var1 = var7.bind(var8)(var1);
            var1 = var1.KeyboardTypes;
            var7 = var1.SYSTEM;
            var1 = 0;
            if(!(var9 !== var7)) { _fun0001_ip = 154; continue _fun0001 }
 124:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 8;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.getCustomKeyboardHeight;
            var1 = var6.bind(var7)();
 154:
            var5 = var1;
 157:
            var1 = arg1;
            var1 = var5 + var1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function KeyboardAwareViewInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.style;
            var _closure2_slot0 = var9;
            var5 = var1.children;
            var6 = var1.pointerEvents;
            var3 = var1.animated;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 39; continue _fun0002 }
 37:
            var3 = true;
 39:
            var _closure2_slot1 = var3;
            var7 = var1.keyboardHeightOffset;
            if(!(var7 === var4)) { _fun0002_ip = 57; continue _fun0002 }
 55:
            var7 = 0;
 57:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var11 = _closure1_slot3;
            var10 = var11.useRef;
            var8 = _closure1_slot8;
            var8 = var8.bind(var4)(var7);
            var8 = var10.bind(var11)(var8);
            _closure2_slot3 = var8;
            var11 = _closure1_slot3;
            var10 = var11.useState;
            var8 = var8.current;
            var11 = var10.bind(var11)(var8);
            var10 = _closure1_slot2;
            var8 = 2;
            var11 = var10.bind(var4)(var11, var8);
            var8 = 0;
            var10 = var11[var8];
            _closure2_slot4 = var10;
            var8 = 1;
            var8 = var11[var8];
            _closure2_slot5 = var8;
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure1_slot8;
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot3;
                        var4 = var4.current;
                        if(!(var4 !== var3)) { _fun0003_ip = 53; continue _fun0003 }
 34:
                        var4 = _closure2_slot3;
                        var4['current'] = var3;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var3);
 53:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7 = var11.bind(var12)(var7, var8);
            var11 = _closure1_slot3;
            var8 = var11.useRef;
            var7 = false;
            var7 = var8.bind(var11)(var7);
            _closure2_slot6 = var7;
            var11 = _closure1_slot3;
            var8 = var11.useEffect;
            var7 = new Array(2);
            var7[0] = var3;
            var7[1] = var10;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    if(var1) { _fun0004_ip = 29; continue _fun0004 }
 15:
                    var3 = _closure2_slot6;
                    var1 = true;
                    var3['current'] = var1;
                    _fun0004_ip = 111; continue _fun0004;
 29:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 9;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getKeyboardDuration;
                    var3 = var3.bind(var5)();
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 77; continue _fun0004 }
 71:
                    var5 = 0;
                    var2 = var3 > var5;
 77:
                    if(!var2) { _fun0004_ip = 111; continue _fun0004 }
 80:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 10;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.DeprecatedLayoutAnimationKeyboard;
                    var1 = var1.bind(var2)(var3);
 111:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var3, var7);
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var9;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 117; continue _fun0005 }
 13:
                    var4 = _closure1_slot5;
                    var3 = var4.flatten;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var4)(var1);
                    var1 = var4.marginBottom;
                    var3 = 'number';
                    var1 = typeof var1;
                    if(!(var3 !== var1)) { _fun0005_ip = 78; continue _fun0005 }
 51:
                    var1 = {};
                    var7 = var1;
                    var6 = var4;
                    var3 = copyDataProperties(var7, var6);
                    var5 = _closure2_slot4;
                    var3 = 'marginBottom';
                    var1[var3] = var5;
                    _fun0005_ip = 115; continue _fun0005;
 78:
                    var3 = {};
                    var7 = var3;
                    var6 = var4;
                    var5 = copyDataProperties(var7, var6);
                    var5 = var4.marginBottom;
                    var4 = _closure2_slot4;
                    var5 = var5 + var4;
                    var4 = 'marginBottom';
                    var3[var4] = var5;
                    var1 = var3;
 115:
                    return var1;
 117:
                    var1 = {};
                    var2 = _closure2_slot4;
                    var1['marginBottom'] = var2;
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var7;
            var1['pointerEvents'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function KeyboardAwareView(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = var4.disabled;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0006_ip = 47; continue _fun0006 }
 14:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isLegacyAndroidKeyboard;
            var1 = var2.bind(var3)();
 47:
            var2 = null;
            var3 = Object.create(var2);
            var2 = 0;
            var3['disabled'] = var2;
            var10 = {};
            var9 = var4;
            var8 = var3;
            var6 = copyDataProperties(var10, var9, var8);
            var4 = _closure1_slot7;
            if(var1) { _fun0006_ip = 104; continue _fun0006 }
 80:
            var3 = _closure1_slot9;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 145; continue _fun0006;
 104:
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.children;
            var2['children'] = var7;
            var7 = var6.pointerEvents;
            var2['pointerEvents'] = var7;
            var6 = var6.style;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 145:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/KeyboardAwareView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();