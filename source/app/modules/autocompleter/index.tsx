// app/modules/autocompleter/index.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var4 = metroImportDefault;
        var3 = exports;
        var5 = dependencyMap;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var5[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var2);
        var7 = var8.fileFinishedImporting;
        var2 = 'modules/autocompleter/index.tsx';
        var2 = var7.bind(var8)(var2);
        var2 = 1;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var3['default'] = var2;
        var2 = 2;
        var2 = var5[var2];
        var11 = var6.bind(var1)(var2);
        var9 = var11;
        for(var2 in var9)
case 2:
        {
case 3:
            var13 = var2;
            var12 = var11[var13];
            var3[var13] = var12;
            _fun0001_ip = 2; continue _fun0001;
        }
case 4:
        var2 = 3;
        var2 = var5[var2];
        var2 = var6.bind(var1)(var2);
        var2 = var2.createHeaderResult;
        var3['createHeaderResult'] = var2;
        var2 = 4;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var3['findNextSelectedResult'] = var2;
        var2 = 5;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var3['sortByMatchScore'] = var2;
        return var1;
    }
})();