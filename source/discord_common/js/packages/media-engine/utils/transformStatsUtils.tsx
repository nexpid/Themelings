// discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx
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
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function formatSinkWantStat(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            var2 = var3[var1];
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 27; continue _fun0001 }
 16:
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            _fun0001_ip = 77; continue _fun0001;
 27:
            var2 = '100';
            var4 = arg3;
            if(!var4) { _fun0001_ip = 74; continue _fun0001 }
 39:
            var6 = var3.any;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = ' (any)';
            var2 = var5.bind(var4)(var6, var3);
 74:
            var1 = var2;
 77:
            return var1;
        }
    };
    var3['formatSinkWantStat'] = var4;
    var2 = function formatSinkWantAsInt(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var1 = var2[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 22; continue _fun0002 }
 16:
            var1 = var2.any;
 22:
            return var1;
        }
    };
    var3['formatSinkWantAsInt'] = var2;
    return var1;
})();