// discord_common/js/packages/analytics-utils/encodeProperties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = '../discord_common/js/packages/analytics-utils/encodeProperties.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function encodeProperties(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var4 = global;
            var3 = var4.Buffer;
            var2 = var3.from;
            var5 = var4.JSON;
            var4 = var5.stringify;
            var1 = var4.bind(var5)(var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.toString;
            var1 = 'base64';
            var1 = var2.bind(var3)(var1);
 52: // try_end0
            return var1;
 54: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var3['encodeProperties'] = var2;
    return var1;
})();