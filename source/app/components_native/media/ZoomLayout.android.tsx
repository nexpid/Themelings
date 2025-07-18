// app/components_native/media/ZoomLayout.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = native2;
        var3 = native6;
        var7 = native7;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var2);
        var1 = 0;
        var5 = var7[var1];
        var2 = native4;
        var1 = undefined;
        var8 = var2.bind(var1)(var5);
        var2 = 1;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var5 = var2.requireNativeComponent;
        var2 = 2;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var2 = var2.jsx;
        var _closure1_slot0 = var2;
        var2 = 3;
        var2 = var7[var2];
        var9 = var6.bind(var1)(var2);
        var2 = var9.isFabric;
        var2 = var2.bind(var9)();
        if(var2) { _fun0001_ip = 136; continue _fun0001 }
 123:
        var2 = 'DCDZoomLayoutAndroid';
        var2 = var5.bind(var1)(var2);
        _fun0001_ip = 153; continue _fun0001;
 136:
        var5 = 4;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var2 = var5.default;
 153:
        var _closure1_slot1 = var2;
        var2 = 5;
        var5 = var7[var2];
        var2 = native3;
        var5 = var2.bind(var1)(var5);
        var2 = {};
        var9 = ['zoomTo', 'unzoom'];
        var2['supportedCommands'] = var9;
        var2 = var5.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var5 = var8.forwardRef;
        var2 = function(arg1, arg2) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = {};
            var6 = arg1;
            var7 = var2;
            var1 = copyDataProperties(var7, var6);
            var5 = arg2;
            var1 = 'ref';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = var5.bind(var8)(var2);
        var5 = 6;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'components_native/media/ZoomLayout.android.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var2;
        var5 = function zoomTo(arg1, arg2, arg3) {
            var5 = _closure1_slot2;
            var4 = var5.zoomTo;
            var3 = arg1;
            var2 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var3['zoomTo'] = var5;
        var4 = function unzoom(arg1) {
            var3 = _closure1_slot2;
            var2 = var3.unzoom;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['unzoom'] = var4;
        var3['ZoomLayout'] = var2;
        return var1;
    }
})();