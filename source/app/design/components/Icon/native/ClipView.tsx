// app/design/components/Icon/native/ClipView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var6 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var1 = 0;
        var2 = var8[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var5 = var2.requireNativeComponent;
        var2 = {};
        var4 = 'circle';
        var2['Circle'] = var4;
        var4 = 'rounded-rect';
        var2['RoundedRect'] = var4;
        var4 = 1;
        var4 = var8[var4];
        var9 = var7.bind(var1)(var4);
        var4 = var9.isAndroid;
        var4 = var4.bind(var9)();
        if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 'ClipView';
        var5 = var5.bind(var1)(var4);
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var4 = 2;
        var4 = var8[var4];
        var5 = var6.bind(var1)(var4);
case 4:
        var4 = 3;
        var4 = var8[var4];
        var6 = var6.bind(var1)(var4);
        var4 = var6.createAnimatedComponent;
        var4 = var4.bind(var6)(var5);
        var6 = 4;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'design/components/Icon/native/ClipView.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var3['ClipViewAnimated'] = var4;
        var3['CutoutShape'] = var2;
        return var1;
    }
})();