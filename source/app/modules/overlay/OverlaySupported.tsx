// app/modules/overlay/OverlaySupported.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
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
        var4 = 0;
        var2 = var6[var4];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var2 = var2.isPlatformEmbedded;
        if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isWindows;
        var4 = var4.bind(var7)();
        if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = false;
case 4:
        var2 = var4;
case 2:
        if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var2 = false;
case 6:
        var4 = 1;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/overlay/OverlaySupported.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = false;
        var3['IS_OVERLAY_DEV_ENV'] = var4;
        var3['OVERLAY_SUPPORTED'] = var2;
        return var1;
    }
})();