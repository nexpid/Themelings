// app/uikit-native/refresh/Pressables.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var7;
        var1 = function PressableBase(arg1) {
            var7 = arg1;
            var5 = var7.children;
            var11 = var7.androidRippleConfig;
            var _closure2_slot0 = var11;
            var10 = var7.style;
            var _closure2_slot1 = var10;
            var4 = var7.iosPressedStyle;
            var _closure2_slot2 = var4;
            var6 = var7.innerRef;
            var2 = {'children': 0, 'androidRippleConfig': 0, 'style': 0, 'iosPressedStyle': 0, 'innerRef': 0};
            var13 = null;
            var14 = var2;
            var1 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var7;
            var12 = var2;
            var1 = copyDataProperties(var14, var13, var12);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var4;
            var7[1] = var10;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.isAndroid;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = new Array(3);
                    var1[0] = var2;
                    var4 = arg1;
                    var6 = var4.pressed;
                    var4 = null;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot2;
case 4:
                    var1[1] = var4;
                    var3 = _closure1_slot5;
                    var1[2] = var3;
                    _fun0002_ip = 6; continue _fun0002;
case 2:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var4, var7);
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var10;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = {};
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var2 = _closure2_slot0;
case 9:
                    var5 = var2.cornerRadius;
                    var4 = var5;
                    if(!(var3 == var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var6 = var6[var2];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.getStyleProp;
                    var6 = _closure2_slot1;
                    var2 = 'borderRadius';
                    var2 = var7.bind(var8)(var6, var2);
                    var4 = var5;
                    if(!(var3 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
                    var4 = var2;
case 10:
                    var3 = _closure1_slot6;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var10 = var2;
                    var1 = copyDataProperties(var10, var9);
                    var1 = 'cornerRadius';
                    var2[var1] = var4;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var3, var4);
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var2['android_ripple'] = var8;
            var2['style'] = var7;
            var2['ref'] = var6;
            var14 = var2;
            var13 = var1;
            var1 = copyDataProperties(var14, var13);
            var1 = 'children';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var _closure1_slot9 = var1;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var4);
        var1 = 0;
        var5 = var7[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var8 = var4.bind(var1)(var5);
        var _closure1_slot3 = var8;
        var4 = 1;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.Pressable;
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.IOS_POINTER_STYLE;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.getThemedRippleConfig;
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var7[var4];
        var9 = var6.bind(var1)(var4);
        var5 = var9.createStyles;
        var4 = {};
        var10 = {};
        var11 = 6;
        var11 = var7[var11];
        var12 = var6.bind(var1)(var11);
        var11 = var12.isAndroid;
        var12 = var11.bind(var12)();
        var11 = undefined;
        if(var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
        var12 = 7;
        var12 = var7[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var11 = var12.BG_MOD_FAINT;
case 13:
        var10['backgroundColor'] = var11;
        var4['pressedHighlight'] = var10;
        var4 = var5.bind(var9)(var4);
        var _closure1_slot8 = var4;
        var5 = var8.forwardRef;
        var4 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var7 = var3.activeOpacity;
                var4 = undefined;
                if(!(var7 === var4)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var7 = 0.2;
case 15:
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['activeOpacity'] = var1;
                var10 = {};
                var9 = var3;
                var8 = var2;
                var9 = copyDataProperties(var10, var9, var8);
                var3 = _closure1_slot7;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = arg2;
                var1['innerRef'] = var6;
                var6 = {};
                var6['opacity'] = var7;
                var1['iosPressedStyle'] = var6;
                var10 = var1;
                var5 = copyDataProperties(var10, var9);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var5.bind(var8)(var4);
        var5 = var8.forwardRef;
        var2 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var8 = var3.underlayColor;
                var7 = var3.activeOpacity;
                var10 = null;
                var2 = Object.create(var10);
                var1 = 0;
                var2['underlayColor'] = var1;
                var2['activeOpacity'] = var1;
                var13 = {};
                var12 = var3;
                var11 = var2;
                var5 = copyDataProperties(var13, var12, var11);
                var2 = _closure1_slot8;
                var4 = undefined;
                var9 = var2.bind(var4)();
                var3 = _closure1_slot7;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = arg2;
                var1['innerRef'] = var6;
                var6 = {};
                if(!(var10 == var8)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var9 = var9.pressedHighlight;
                var8 = var9.backgroundColor;
case 17:
                var6['backgroundColor'] = var8;
                var6['opacity'] = var7;
                var1['iosPressedStyle'] = var6;
                var13 = var1;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var5.bind(var8)(var2);
        var5 = 9;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'uikit-native/refresh/Pressables.tsx';
        var5 = var6.bind(var7)(var5);
        var3['PressableOpacity'] = var4;
        var3['PressableHighlight'] = var2;
        return var1;
    }
})();