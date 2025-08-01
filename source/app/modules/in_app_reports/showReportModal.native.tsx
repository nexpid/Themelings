// app/modules/in_app_reports/showReportModal.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _showReportModal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 299; continue _fun0001 }
 13:
                    var12 = arg1;
                    var4 = arg2;
                    var11 = var2.onSubmit;
                    var2 = var2.isEligibleForFeedback;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0001_ip = 39; continue _fun0001 }
 37:
                    var2 = true;
 39:
                    var10 = var2;
                    SaveGenerator(address=46);
 44:
                    return var3;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 296; continue _fun0001 }
 55: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 1;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.ReportMenuTypeSets;
                    var8 = var6.REPORT_TO_MOD;
                    var7 = var8.has;
                    var6 = var12;
                    var6 = var6.name;
                    var6 = var7.bind(var8)(var6);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 2;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    if(var6) { _fun0001_ip = 165; continue _fun0001 }
 131:
                    var9 = var8.getReportMenu;
                    var7 = var12;
                    var6 = var4;
                    var6 = var9.bind(var8)(var7, var6);
                    SaveGenerator(address=153);
 151:
                    return var6;
 153:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    var13 = var6;
                    if(!var7) { _fun0001_ip = 193; continue _fun0001 }
 162: // try_end0
                    return var6;
 165: // try_start_1
                    var7 = var8.getReportMenuForModeratorReport;
                    var6 = var12;
                    var4 = var7.bind(var8)(var6, var4);
                    SaveGenerator(address=184);
 182:
                    return var4;
 184:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    var13 = var4;
                    if(var6) { _fun0001_ip = 288; continue _fun0001 }
 193:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 3;
                    var7 = var6[var7];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.pushLazy;
                    var14 = _closure1_slot0;
                    var7 = 5;
                    var7 = var6[var7];
                    var14 = var14.bind(var3)(var7);
                    var7 = 4;
                    var7 = var6[var7];
                    var6 = var6.paths;
                    var7 = var14.bind(var3)(var7, var6);
                    var6 = {};
                    var6['menu'] = var13;
                    var6['reportType'] = var12;
                    var6['afterSubmit'] = var11;
                    var6['isEligibleForFeedback'] = var10;
                    var5 = _closure1_slot4;
                    var5 = var8.bind(var9)(var7, var6, var5);
 286: // try_end1
                    _fun0001_ip = 293; continue _fun0001;
 288:
                    return var4;
 291: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
 293:
                    return var3;
 296:
                    return var2;
 299:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 'IN_APP_REPORT_MODAL_KEY';
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/showReportModal.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function showReportModal() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['showReportModal'] = var4;
    var2 = function hideReportModal() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot4;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideReportModal'] = var2;
    return var1;
})();