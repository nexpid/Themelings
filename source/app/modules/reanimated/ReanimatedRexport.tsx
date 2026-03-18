// app/modules/reanimated/ReanimatedRexport.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var11 = metroImportDefault;
        var9 = exports;
        var8 = dependencyMap;
        var2 = global;
        var13 = var2.Object;
        var12 = var13.defineProperty;
        var3 = {};
        var1 = true;
        var3['value'] = var1;
        var1 = '__esModule';
        var1 = var12.bind(var13)(var9, var1, var3);
        var1 = 0;
        var3 = var8[var1];
        var1 = undefined;
        var12 = var10.bind(var1)(var3);
        var3 = var12.isAndroid;
        var3 = var3.bind(var12)();
        if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var13 = var2.Object;
        var12 = var13.assign;
        var2 = 1;
        var2 = var8[var2];
        var3 = var11.bind(var1)(var2);
        var2 = {};
        var14 = 2;
        var14 = var8[var14];
        var14 = var11.bind(var1)(var14);
        var2['View'] = var14;
        var2 = var12.bind(var13)(var3, var2);
case 2:
        var2 = 3;
        var2 = var8[var2];
        var12 = var10.bind(var1)(var2);
        var3 = var12.fileFinishedImporting;
        var2 = 'modules/reanimated/ReanimatedRexport.tsx';
        var2 = var3.bind(var12)(var2);
        var3 = 1;
        var2 = var8[var3];
        var2 = var11.bind(var1)(var2);
        var9['default'] = var2;
        var2 = var8[var3];
        var6 = var10.bind(var1)(var2);
        for(var2 in var6)
case 4:
        {
case 5:
            var12 = var2;
            var11 = var8[var3];
            var11 = var10.bind(var1)(var11);
            var11 = var11[var12];
            var9[var12] = var11;
            _fun0001_ip = 4; continue _fun0001;
        }
case 6:
        return var1;
    }
})();