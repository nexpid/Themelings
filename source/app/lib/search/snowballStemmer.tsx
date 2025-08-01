// app/lib/search/snowballStemmer.tsx
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.newStemmer;
    var4 = 'english';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/search/snowballStemmer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function snowballStem(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.stem;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['snowballStem'] = var2;
    return var1;
})();