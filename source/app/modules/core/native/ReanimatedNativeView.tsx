// app/modules/core/native/ReanimatedNativeView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var1 = global;
        var8 = var1.Object;
        var4 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var7[var1];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var9 = var2.View;
        var2 = 1;
        var2 = var7[var2];
        var4 = var6.bind(var1)(var2);
        var2 = var4.isFabric;
        var2 = var2.bind(var4)();
        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2 = 3;
        var2 = var7[var2];
        var8 = var5.bind(var1)(var2);
        var4 = var8.createAnimatedComponent;
        var2 = 4;
        var2 = var7[var2];
        var2 = var5.bind(var1)(var2);
        var4 = var4.bind(var8)(var2);
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var2 = 2;
        var2 = var7[var2];
        var4 = var5.bind(var1)(var2);
case 4:
        var2 = 3;
        var2 = var7[var2];
        var8 = var5.bind(var1)(var2);
        var5 = var8.createAnimatedComponent;
        var2 = {};
        var10 = 5;
        var10 = var7[var10];
        var11 = var6.bind(var1)(var10);
        var10 = var11.isAndroid;
        var10 = var10.bind(var11)();
        var2['disableReactSync'] = var10;
        var2 = var5.bind(var8)(var9, var2);
        var5 = 6;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/core/native/ReanimatedNativeView.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['BandAidReanimatedView'] = var2;
        return var1;
    }
})();