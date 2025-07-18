// app/modules/report_to_mod/getGuildModeratorReportingEnabled.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/report_to_mod/getGuildModeratorReportingEnabled.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getGuildModeratorReportingEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.moderatorReporting;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 26; continue _fun0001 }
 20:
            var2 = var3.moderatorReportingEnabled;
 26:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 36; continue _fun0001 }
 33:
            var1 = var2;
 36:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();