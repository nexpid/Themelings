// app/uikit-native/refresh/Pressables.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function PressableBase(arg1) {
        var4 = arg1;
        var6 = var4.children;
        var12 = var4.androidRippleConfig;
        var _closure2_slot0 = var12;
        var11 = var4.style;
        var _closure2_slot1 = var11;
        var15 = var4.type;
        var _closure2_slot2 = var15;
        var14 = var4.activeOpacity;
        var _closure2_slot3 = var14;
        var13 = var4.underlayColor;
        var _closure2_slot4 = var13;
        var7 = var4.innerRef;
        var3 = {'children': 0, 'androidRippleConfig': 0, 'style': 0, 'type': 0, 'activeOpacity': 0, 'underlayColor': 0, 'innerRef': 0};
        var17 = null;
        var18 = var3;
        var1 = silentSetPrototypeOf(var18, var17);
        var18 = {};
        var17 = var4;
        var16 = var3;
        var5 = copyDataProperties(var18, var17, var16);
        var3 = _closure1_slot8;
        var4 = undefined;
        var3 = var3.bind(var4)();
        var3 = var3.pressedHighlight;
        var3 = var3.backgroundColor;
        var _closure2_slot5 = var3;
        var10 = _closure1_slot3;
        var9 = var10.useMemo;
        var8 = new Array(5);
        var8[0] = var15;
        var8[1] = var14;
        var8[2] = var13;
        var8[3] = var11;
        var8[4] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.isAndroid;
                var1 = var1.bind(var2)();
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.pressed;
                        var2 = _closure2_slot1;
                        var1 = new Array(3);
                        var1[0] = var2;
                        var7 = null;
                        var2 = null;
                        if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = _closure2_slot2;
                        var3 = 'highlight';
                        if(!(var3 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = {};
                        var4 = _closure2_slot3;
                        var5 = var7 != var4;
                        var4 = 0.2;
                        if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var4 = _closure2_slot3;
case 8:
                        var3['opacity'] = var4;
                        _fun0002_ip = 10; continue _fun0002;
case 6:
                        var4 = {};
                        var5 = _closure2_slot4;
                        if(!(var7 == var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var5 = _closure2_slot5;
                        _fun0002_ip = 13; continue _fun0002;
case 11:
                        var5 = _closure2_slot4;
case 13:
                        var4['backgroundColor'] = var5;
                        var3 = var4;
case 10:
                        var2 = var3;
case 4:
                        var1[1] = var2;
                        var2 = _closure1_slot5;
                        var1[2] = var2;
                        return var1;
                    }
                };
                _fun0001_ip = 14; continue _fun0001;
case 2:
                var1 = _closure2_slot1;
case 14:
                return var1;
            }
        };
        var8 = var9.bind(var10)(var3, var8);
        var10 = _closure1_slot3;
        var9 = var10.useMemo;
        var3 = new Array(2);
        var3[0] = var12;
        var3[1] = var11;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 3:
                return var3;
case 15:
                var2 = _closure2_slot0;
                var6 = null;
                if(!(var6 == var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var2 = {};
                _fun0003_ip = 18; continue _fun0003;
case 16:
                var2 = _closure2_slot0;
case 18:
                var7 = var2.cornerRadius;
                var5 = var7;
                if(!(var6 == var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 8;
                var2 = var9[var2];
                var10 = var8.bind(var3)(var2);
                var9 = var10.getStyleProp;
                var8 = _closure2_slot1;
                var2 = 'borderRadius';
                var2 = var9.bind(var10)(var8, var2);
                var5 = var7;
                if(!(var6 != var2)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                var5 = var2;
case 19:
                var2 = _closure1_slot6;
                var1 = {};
                var11 = _closure2_slot0;
                var12 = var1;
                var4 = copyDataProperties(var12, var11);
                var4 = 'cornerRadius';
                var1[3] = var5;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var9 = var9.bind(var10)(var2, var3);
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var1['android_ripple'] = var9;
        var1['style'] = var8;
        var1['ref'] = var7;
        var18 = var1;
        var17 = var5;
        var5 = copyDataProperties(var18, var17);
        var5 = 'children';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
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
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var10['backgroundColor'] = var11;
    var4['pressedHighlight'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var5 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var6 = var3.activeOpacity;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var6 = 0.2;
case 22:
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
            var7 = arg2;
            var1['innerRef'] = var7;
            var7 = 'opacity';
            var1['type'] = var7;
            var1['activeOpacity'] = var6;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        var3 = arg1;
        var5 = var3.underlayColor;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['underlayColor'] = var1;
        var9 = {};
        var8 = var3;
        var7 = var2;
        var8 = copyDataProperties(var9, var8, var7);
        var4 = _closure1_slot7;
        var3 = _closure1_slot9;
        var2 = {};
        var6 = arg2;
        var2['innerRef'] = var6;
        var6 = 'highlight';
        var2['type'] = var6;
        var2['underlayColor'] = var5;
        var9 = var2;
        var1 = copyDataProperties(var9, var8);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
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
})();