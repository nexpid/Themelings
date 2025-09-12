// app/modules/safe_area/SafeAreaConstants.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
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
        var5 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
        var2 = 0;
        var4 = var8[var2];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var4 = var4.initialWindowMetrics;
        var9 = null;
        var6 = var9 != var4;
        var4 = undefined;
        if(!var6) { _fun0001_ip = 100; continue _fun0001 }
 85:
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.initialWindowMetrics;
 100:
        var2 = var9 == var4;
        var6 = undefined;
        if(var2) { _fun0001_ip = 115; continue _fun0001 }
 109:
        var6 = var4.insets;
 115:
        var2 = var5;
        if(!(var9 != var6)) { _fun0001_ip = 125; continue _fun0001 }
 122:
        var2 = var6;
 125:
        var6 = 1;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/safe_area/SafeAreaConstants.native.tsx';
        var6 = var7.bind(var8)(var6);
        var3['EMPTY_SAFE_AREA_INSETS'] = var5;
        var3['INITIAL_SAFE_AREA_METRICS'] = var4;
        var3['INITIAL_SAFE_AREA_INSETS'] = var2;
        return var1;
    }
})();