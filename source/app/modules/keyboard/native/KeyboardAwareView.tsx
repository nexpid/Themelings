// app/modules/keyboard/native/KeyboardAwareView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getKeyboardHeightWithOffset(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 5;
            var1 = var10[var1];
            var8 = undefined;
            var5 = var9.bind(var8)(var1);
            var2 = var5.getSystemKeyboardHeight;
            var1 = {};
            var7 = 6;
            var7 = var10[var7];
            var9 = var9.bind(var8)(var7);
            var7 = var9.isAndroid;
            var7 = var7.bind(var9)();
            var1['excludeSafeAreaInsets'] = var7;
            var5 = var2.bind(var5)(var1);
            var2 = 0;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 7;
            var1 = var10[var1];
            var9 = var7.bind(var8)(var1);
            var1 = var9.getKeyboardType;
            var9 = var1.bind(var9)();
            var1 = 8;
            var1 = var10[var1];
            var1 = var7.bind(var8)(var1);
            var1 = var1.KeyboardTypes;
            var7 = var1.SYSTEM;
            var1 = 0;
            if(!(var9 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 9;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.getCustomKeyboardHeight;
            var1 = var6.bind(var7)();
case 4:
            var5 = var1;
case 2:
            var1 = arg1;
            var1 = var5 + var1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = metroImportAll;
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.style;
            var _closure2_slot0 = var9;
            var5 = var1.children;
            var6 = var1.pointerEvents;
            var3 = var1.animated;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = true;
case 6:
            var _closure2_slot1 = var3;
            var7 = var1.keyboardHeightOffset;
            if(!(var7 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = 0;
case 8:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var8 = _closure1_slot3;
            var11 = var8.useRef;
            var10 = _closure1_slot8;
            var10 = var10.bind(var4)(var7);
            var10 = var11.bind(var8)(var10);
            _closure2_slot3 = var10;
            var11 = var8.useState;
            var10 = var10.current;
            var12 = var11.bind(var8)(var10);
            var11 = _closure1_slot2;
            var10 = 2;
            var12 = var11.bind(var4)(var12, var10);
            var10 = 0;
            var10 = var12[var10];
            _closure2_slot4 = var10;
            var11 = 1;
            var11 = var12[var11];
            _closure2_slot5 = var11;
            var12 = var8.useEffect;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot8;
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot3;
                        var4 = var4.current;
                        if(!(var4 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var4 = _closure2_slot3;
                        var4['current'] = var3;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var3);
case 10:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7 = var12.bind(var8)(var7, var11);
            var11 = var8.useRef;
            var7 = false;
            var7 = var11.bind(var8)(var7);
            _closure2_slot6 = var7;
            var11 = var8.useEffect;
            var7 = new Array(2);
            var7[0] = var3;
            var7[1] = var10;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = _closure2_slot6;
                    var1 = true;
                    var3['current'] = var1;
                    _fun0004_ip = 14; continue _fun0004;
case 12:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 10;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getKeyboardDuration;
                    var3 = var3.bind(var5)();
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var5 = 0;
                    var2 = var3 > var5;
case 15:
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 17:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 11;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.DeprecatedLayoutAnimationKeyboard;
                    var1 = var1.bind(var2)(var3);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var11.bind(var8)(var3, var7);
            var7 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var9;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var4 = _closure1_slot5;
                    var3 = var4.flatten;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var4)(var1);
                    var1 = var4.marginBottom;
                    var3 = 'number';
                    var1 = typeof var1;
                    if(!(var3 !== var1)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var1 = {};
                    var7 = var1;
                    var6 = var4;
                    var3 = copyDataProperties(var7, var6);
                    var5 = _closure2_slot4;
                    var3 = 'marginBottom';
                    var1[var3] = var5;
                    _fun0005_ip = 22; continue _fun0005;
case 20:
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
case 22:
                    return var1;
case 18:
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