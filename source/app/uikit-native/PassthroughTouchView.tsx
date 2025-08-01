// app/uikit-native/PassthroughTouchView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var7 = var6[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.requireNativeComponent;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot0 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.isAndroid;
        var4 = var4.bind(var8)();
        if(var4) { _fun0001_ip = 135; continue _fun0001 }
 122:
        var4 = 'PassthroughTouchView';
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 150; continue _fun0001;
 135:
        var7 = 4;
        var8 = var6[var7];
        var7 = metroImportDefault;
        var4 = var7.bind(var1)(var8);
 150:
        var _closure1_slot1 = var4;
        var4 = 5;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'uikit-native/PassthroughTouchView.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function PassthroughTouchView(arg1) {
            var3 = arg1;
            var5 = var3.onTouchDown;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['onTouchDown'] = var1;
            var8 = {};
            var7 = var3;
            var6 = var2;
            var7 = copyDataProperties(var8, var7, var6);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = {};
            var8 = var2;
            var1 = copyDataProperties(var8, var7);
            var1 = 'onTouchDown';
            var2[var1] = var5;
            var5 = 'box-none';
            var1 = 'pointerEvents';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();