// app/modules/hotspot/index.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var11 = require;
        var3 = exports;
        var10 = dependencyMap;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var1 = 0;
        var4 = var10[var1];
        var2 = metroImportDefault;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var4 = 1;
        var4 = var10[var4];
        var6 = var11.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/hotspot/index.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = 2;
        var4 = var10[var4];
        var9 = var11.bind(var1)(var4);
        var7 = var9;
        for(var4 in var7)
 108:
        {
 117:
            var13 = var4;
            var12 = var9[var13];
            var3[var13] = var12;
            _fun0001_ip = 108; continue _fun0001;
        }
 130:
        var5 = 3;
        var4 = var10[var5];
        var8 = var11.bind(var1)(var4);
        for(var4 in var8)
 150:
        {
 159:
            var13 = var4;
            var12 = var10[var5];
            var12 = var11.bind(var1)(var12);
            var12 = var12[var13];
            var3[var13] = var12;
            _fun0001_ip = 150; continue _fun0001;
        }
 181:
        var3['HotspotStore'] = var2;
        return var1;
    }
})();