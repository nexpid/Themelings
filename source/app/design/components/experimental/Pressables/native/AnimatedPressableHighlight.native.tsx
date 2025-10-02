// app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var2);
        var1 = 0;
        var8 = var6[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var2 = var2.bind(var1)(var8);
        var _closure1_slot3 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.Pressable;
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.jsx;
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var6[var2];
        var8 = var7.bind(var1)(var2);
        var7 = var8.createAnimatedComponent;
        var2 = 4;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.PressableHighlight;
        var2 = var7.bind(var8)(var2);
        var _closure1_slot6 = var2;
        var2 = 8;
        var2 = var6[var2];
        var7 = var5.bind(var1)(var2);
        var2 = var7.isAndroid;
        var2 = var2.bind(var7)();
        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2 = function AnimatedPressableHighlightiOS(arg1) {
            var3 = arg1;
            var6 = var3.children;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['children'] = var1;
            var13 = {};
            var12 = var3;
            var11 = var2;
            var5 = copyDataProperties(var13, var12, var11);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.useIOSPressEffects;
            var2 = 4;
            var2 = var3.bind(var7)(var2);
            var9 = var2.onPressIn;
            var7 = var2.onPressOut;
            var8 = var2.pressableStyles;
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var10 = 'button';
            var1['accessibilityRole'] = var10;
            var1['onPressIn'] = var9;
            var1['onPressOut'] = var7;
            var13 = var1;
            var12 = var5;
            var7 = copyDataProperties(var13, var12);
            var7 = new Array(2);
            var7[0] = var8;
            var5 = var5.style;
            var7[1] = var5;
            var5 = 'style';
            var1[var5] = var7;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var2 = function AnimatedPressableHighlightAndroid(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var6 = var4.children;
                var9 = null;
                var3 = Object.create(var9);
                var1 = 0;
                var3['children'] = var1;
                var14 = {};
                var13 = var4;
                var12 = var3;
                var5 = copyDataProperties(var14, var13, var12);
                var _closure2_slot0 = var5;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 6;
                var3 = var11[var3];
                var4 = undefined;
                var8 = var7.bind(var4)(var3);
                var7 = var8.useToken;
                var10 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var4)(var3);
                var3 = var3.colors;
                var3 = var3.ANDROID_RIPPLE;
                var10 = var7.bind(var8)(var3);
                var _closure2_slot1 = var10;
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var3 = new Array(2);
                var3[0] = var10;
                var10 = var5.androidRippleConfig;
                var11 = var9 == var10;
                var9 = undefined;
                if(var11) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var9 = var10.cornerRadius;
case 5:
                var3[1] = var9;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = {};
                        var3 = _closure2_slot1;
                        var1['color'] = var3;
                        var2 = _closure2_slot0;
                        var4 = var2.androidRippleConfig;
                        var2 = null;
                        var5 = var2 == var4;
                        var3 = undefined;
                        if(var5) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var3 = var4.cornerRadius;
case 7:
                        var4 = var2 != var3;
                        var2 = 12;
                        if(!var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = var3;
case 9:
                        var1['cornerRadius'] = var2;
                        return var1;
                    }
                };
                var7 = var7.bind(var8)(var2, var3);
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var1['android_ripple'] = var7;
                var14 = var1;
                var13 = var5;
                var5 = copyDataProperties(var14, var13);
                var5 = 'children';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
case 4:
        var4 = 9;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx';
        var4 = var5.bind(var6)(var4);
        var3['AnimatedPressableHighlight'] = var2;
        return var1;
    }
})();