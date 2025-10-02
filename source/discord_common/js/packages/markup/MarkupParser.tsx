// discord_common/js/packages/markup/MarkupParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var12 = require;
        var3 = exports;
        var11 = dependencyMap;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var2 = 0;
        var4 = var11[var2];
        var1 = undefined;
        var4 = var12.bind(var1)(var4);
        var4 = var4.default;
        var4 = var4.reactParserFor;
        var2 = var11[var2];
        var2 = var12.bind(var1)(var2);
        var2 = var2.default;
        var2 = var2.astParserFor;
        var5 = 1;
        var5 = var11[var5];
        var13 = var12.bind(var1)(var5);
        var6 = var13.fileFinishedImporting;
        var5 = '../discord_common/js/packages/markup/MarkupParser.tsx';
        var5 = var6.bind(var13)(var5);
        var6 = 2;
        var5 = var11[var6];
        var9 = var12.bind(var1)(var5);
        for(var5 in var9)
case 2:
        {
case 3:
            var14 = var5;
            var13 = var11[var6];
            var13 = var12.bind(var1)(var13);
            var13 = var13[var14];
            var3[var14] = var13;
            _fun0001_ip = 2; continue _fun0001;
        }
case 4:
        var6 = 3;
        var5 = var11[var6];
        var9 = var12.bind(var1)(var5);
        for(var5 in var9)
case 5:
        {
case 6:
            var14 = var5;
            var13 = var11[var6];
            var13 = var12.bind(var1)(var13);
            var13 = var13[var14];
            var3[var14] = var13;
            _fun0001_ip = 5; continue _fun0001;
        }
case 7:
        var3['reactParserFor'] = var4;
        var3['astParserFor'] = var2;
        return var1;
    }
})();