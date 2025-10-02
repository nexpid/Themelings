// app/modules/in_app_reports/trackInAppReportsFeedback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/trackInAppReportsFeedback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackInAppReportsFeedback(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.problem;
            var7 = var2.feedback;
            var10 = var2.reportType;
            var9 = var2.reportId;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = null;
case 2:
            var8 = var2.rating;
            if(!(var8 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = null;
case 4:
            var6 = var2.dontShowAgain;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.IAR_FEEDBACK_SUBMITTED;
            var2 = {};
            var2['reason'] = var11;
            var2['report_type'] = var10;
            var2['report_id'] = var9;
            var2['rating'] = var8;
            var2['feedback'] = var7;
            var2['dont_show_again'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();