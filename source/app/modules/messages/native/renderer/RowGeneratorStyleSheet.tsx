// app/modules/messages/native/renderer/RowGeneratorStyleSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/RowGeneratorStyleSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function processColorOrThrow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var1 = undefined;
            var1 = var2.bind(var1)(var5);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 25; continue _fun0001 }
 23:
            return var1;
 25:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = 'Unable to parse color: "';
            var1 = '"';
            var7 = var4.bind(var2)(var5, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['processColorOrThrow'] = var2;
    return var1;
})();