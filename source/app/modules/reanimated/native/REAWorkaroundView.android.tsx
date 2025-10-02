// app/modules/reanimated/native/REAWorkaroundView.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var1 = global;
        var7 = var1.Object;
        var4 = var7.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var7)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var2 = var4.isFabric;
        var2 = var2.bind(var4)();
        var4 = 1;
        var4 = var6[var4];
        var8 = var9.bind(var1)(var4);
        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2 = var8.View;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var7 = var8.createAnimatedComponent;
        var4 = 2;
        var4 = var6[var4];
        var4 = var9.bind(var1)(var4);
        var2 = var7.bind(var8)(var4);
case 4:
        var4 = 3;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/reanimated/native/REAWorkaroundView.android.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();