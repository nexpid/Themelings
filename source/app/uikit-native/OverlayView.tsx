// app/uikit-native/OverlayView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = native2;
        var3 = native6;
        var8 = native7;
        var1 = global;
        var6 = var1.Object;
        var5 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var2);
        var1 = 0;
        var5 = var8[var1];
        var2 = native4;
        var1 = undefined;
        var2 = var2.bind(var1)(var5);
        var2 = 1;
        var2 = var8[var2];
        var5 = var7.bind(var1)(var2);
        var2 = var5.View;
        var _closure1_slot0 = var2;
        var5 = var5.StyleSheet;
        var _closure1_slot1 = var5;
        var5 = 2;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.jsx;
        var _closure1_slot2 = var5;
        var6 = 3;
        var5 = var8[var6];
        var9 = var7.bind(var1)(var5);
        var5 = var9.isIOS;
        var9 = var5.bind(var9)();
        var5 = var2;
        if(!var9) { _fun0001_ip = 157; continue _fun0001 }
 139:
        var9 = 4;
        var9 = var8[var9];
        var9 = var7.bind(var1)(var9);
        var5 = var9.FullWindowOverlay;
 157:
        var _closure1_slot3 = var5;
        var6 = var8[var6];
        var9 = var7.bind(var1)(var6);
        var6 = var9.isIOS;
        var6 = var6.bind(var9)();
        if(!var6) { _fun0001_ip = 198; continue _fun0001 }
 183:
        var6 = 5;
        var9 = var8[var6];
        var6 = native3;
        var2 = var6.bind(var1)(var9);
 198:
        var6 = 6;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'uikit-native/OverlayView.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var4 = function TransitionGroupOverlayView(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var8 = var3.children;
                var4 = null;
                var2 = Object.create(var4);
                var5 = 0;
                var2['children'] = var5;
                var11 = {};
                var10 = var3;
                var9 = var2;
                var2 = copyDataProperties(var11, var10, var9);
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var3 = var1.bind(var3)(var8);
                var1 = null;
                if(!var3) { _fun0002_ip = 138; continue _fun0002 }
 54:
                var3 = var8.length;
                var3 = var3 > var5;
                var1 = null;
                if(!var3) { _fun0002_ip = 138; continue _fun0002 }
 68:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var3 = {};
                var7 = _closure1_slot1;
                var7 = var7.absoluteFill;
                var3['style'] = var7;
                var7 = _closure1_slot0;
                var6 = {};
                var11 = var6;
                var10 = var2;
                var2 = copyDataProperties(var11, var10);
                var2 = 'children';
                var6[var2] = var8;
                var2 = undefined;
                var6 = var5.bind(var2)(var7, var6);
                var3['children'] = var6;
                var1 = var5.bind(var2)(var4, var3);
 138:
                return var1;
            }
        };
        var3['TransitionGroupOverlayView'] = var4;
        var3['NonExpandingOverlayView'] = var2;
        return var1;
    }
})();