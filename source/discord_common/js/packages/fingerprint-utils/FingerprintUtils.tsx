// discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function extractId(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '.';
        var2 = var2.bind(var3)(var1);
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['extractId'] = var4;
    var2 = function maybeExtractId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 2:
            return var1;
        }
    };
    var3['maybeExtractId'] = var2;
    return var1;
})();