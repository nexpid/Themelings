// app/modules/report_to_mod/getGuildModeratorReportChannelId.tsx
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
    var2 = 'modules/report_to_mod/getGuildModeratorReportChannelId.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getGuildModeratorReportChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.moderatorReporting;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 26; continue _fun0001 }
 20:
            var2 = var3.moderatorReportChannelId;
 26:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 38; continue _fun0001 }
 35:
            var1 = var2;
 38:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();