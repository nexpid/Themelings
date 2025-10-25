// app/modules/low_performance_mode/LowPerformanceAndroidDevices.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = null;
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/low_performance_mode/LowPerformanceAndroidDevices.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isLowPerformanceDevice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var4 = var2.Set;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var5 = ['dandelion', 'a3core', 'a10s', 'OP4F2F', 'OP4F97', 'OP56F5', 'angelica', 'a02q', 'a11q', 'blue', 'a03s', 'a03su', 'a04', 'a04e', 'a12', 'borag', 'hawaiip', 'a04s', 'a12s', 'a13', 'a14', 'a21s', 'a50', 'a31', 'java', 'lake', 'ginkgo', 'OP4EFDL1', 'OP4F11L1', 'a51', 'gta4xlwifi', 'Infinix-X6525', 'Infinix-X6528', 'TECNO-BG6', 'TECNO-KI5k', 'lion', 'sabahl', 'HWMAR', 'HWSTK-HF', 'a30s', 'gracelte', 'lime', 'gta8wifi', 'Infinix-X6532', 'fogorow', 'pond', 'tides', 'a03', 'cancun', 'RE58C2', 'RE5C9F', 'RE6054', 'TECNO-KL4', 'serenity', 'HNJDY-M1', 'OP574FL1', 'OP5759L1', 'OP575DL1', 'REE2ADL1', 'V2333', 'a05m', 'a06', 'a13ve', 'a14m', 'a22', 'a32', 'earth', 'fire', 'gale'];
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var3 = var2 instanceof Object ? var2 : var3;
            _closure1_slot0 = var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
case 4:
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['isLowPerformanceDevice'] = var2;
    return var1;
})();