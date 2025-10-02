// app/utils/StringUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var7 = var4.bind(var1)(var2);
    var6 = var7.fileFinishedImporting;
    var2 = 'utils/StringUtils.tsx';
    var2 = var6.bind(var7)(var2);
    var2 = function isNullOrEmpty(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.length;
            var2 = 0;
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var3['isNullOrEmpty'] = var2;
    var2 = 1;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.upperCaseFirstChar;
    var3['upperCaseFirstChar'] = var6;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.getAcronym;
    var3['getAcronym'] = var6;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.cssValueToNumber;
    var3['cssValueToNumber'] = var6;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.stripDiacritics;
    var3['stripDiacritics'] = var6;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.truncateText;
    var3['truncateText'] = var6;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.normalize;
    var3['normalize'] = var6;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.countGraphemeClusters;
    var3['countGraphemeClusters'] = var2;
    return var1;
})();