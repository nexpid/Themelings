// app/modules/core/CodeSplittingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var9 = exports;
        var8 = dependencyMap;
        var1 = global;
        var11 = var1.Object;
        var3 = var11.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var3.bind(var11)(var9, var1, var2);
        var3 = 0;
        var2 = var8[var3];
        var1 = undefined;
        var12 = var10.bind(var1)(var2);
        var11 = var12.setAwaitOnline;
        var2 = 1;
        var13 = var8[var2];
        var2 = metroImportDefault;
        var2 = var2.bind(var1)(var13);
        var2 = var2.awaitOnline;
        var2 = var11.bind(var12)(var2);
        var2 = 2;
        var2 = var8[var2];
        var12 = var10.bind(var1)(var2);
        var11 = var12.fileFinishedImporting;
        var2 = 'modules/core/CodeSplittingUtils.tsx';
        var2 = var11.bind(var12)(var2);
        var2 = var8[var3];
        var6 = var10.bind(var1)(var2);
        for(var2 in var6)
case 2:
        {
case 3:
            var12 = var2;
            var11 = var8[var3];
            var11 = var10.bind(var1)(var11);
            var11 = var11[var12];
            var9[var12] = var11;
            _fun0001_ip = 2; continue _fun0001;
        }
case 4:
        return var1;
    }
})();