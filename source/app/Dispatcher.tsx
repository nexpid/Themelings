// app/Dispatcher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var5 = 0;
        var2 = var7[var5];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var10 = var2.STORAGE_KEY_LOG_DISPATCHES;
        var2 = {};
        var2['Early'] = var5;
        var4 = 'Early';
        var2[var5] = var4;
        var4 = 1;
        var2['Database'] = var4;
        var5 = 'Database';
        var2[var4] = var5;
        var5 = 2;
        var2['Default'] = var5;
        var8 = 'Default';
        var2[var5] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var8 = var4.ActionLogger;
        var4 = {};
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var9 = var5.Storage;
        var5 = var9.get;
        var9 = var5.bind(var9)(var10);
        var5 = null;
        var5 = var5 != var9;
        if(!var5) { _fun0001_ip = 164; continue _fun0001 }
 161:
        var5 = var9;
 164:
        var4['persist'] = var5;
        var5 = var8.prototype;
        var5 = Object.create(var5, {constructor: {value: var8}});
        var15 = var5;
        var14 = var4;
        var4 = new var15[var8](var14, var13);
        var13 = var4 instanceof Object ? var4 : var5;
        var4 = 3;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var9 = var4.Dispatcher;
        var8 = var2.Default;
        var4 = {};
        var5 = 4;
        var11 = var7[var5];
        var5 = metroImportDefault;
        var5 = var5.bind(var1)(var11);
        var4['addBreadcrumb'] = var5;
        var5 = var9.prototype;
        var5 = Object.create(var5, {constructor: {value: var9}});
        var15 = var5;
        var14 = var8;
        var12 = var4;
        var4 = new var15[var9](var14, var13, var12, var11);
        var4 = var4 instanceof Object ? var4 : var5;
        var5 = 5;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'Dispatcher.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['DispatchBand'] = var2;
        return var1;
    }
})();