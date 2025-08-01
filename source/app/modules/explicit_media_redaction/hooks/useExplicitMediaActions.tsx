// app/modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useExplicitMediaActions(arg1) {
        var1 = arg1;
        var9 = var1.onError;
        var _closure2_slot0 = var9;
        var8 = var1.onSuccess;
        var _closure2_slot1 = var8;
        var7 = var1.report;
        var _closure2_slot2 = var7;
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var1 = false;
        var5 = var2.bind(var6)(var1);
        var2 = _closure1_slot3;
        var10 = undefined;
        var1 = 2;
        var5 = var2.bind(var10)(var5, var1);
        var1 = 0;
        var2 = var5[var1];
        var1 = 1;
        var1 = var5[var1];
        var _closure2_slot3 = var1;
        var _closure2_slot4 = var2;
        var1 = {};
        var5 = var6.useCallback;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 194; continue _fun0001 }
 10:
                    var2 = undefined;
                    var3 = undefined;
                    var5 = _closure2_slot4;
                    if(var5) { _fun0001_ip = 191; continue _fun0001 }
 27:
                    var6 = _closure2_slot3;
                    var5 = true;
                    var5 = var6.bind(var2)(var5);
 38: // try_start_0 // try_start_1
                    var5 = _closure2_slot2;
                    var5 = var5.bind(var2)();
                    SaveGenerator(address=50);
 48:
                    return var5;
 50:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 76; continue _fun0001 }
 56:
                    var7 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0001_ip = 74; continue _fun0001 }
 66:
                    var6 = _closure2_slot1;
                    var6 = var6.bind(var2)();
 74: // try_end0
                    _fun0001_ip = 163; continue _fun0001;
 76: // try_end1
                    var7 = _closure2_slot3;
                    var6 = false;
                    var6 = var7.bind(var2)(var6);
                    return var5;
 90: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var5 = var8[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.APIError;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var10 = var6;
                    var9 = var7;
                    var5 = new var10[var5](var9, var8);
                    var3 = var5 instanceof Object ? var5 : var6;
                    var6 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0001_ip = 163; continue _fun0001 }
 154:
                    var5 = _closure2_slot0;
                    var3 = var5.bind(var2)(var3);
 163: // try_end2
                    var5 = _closure2_slot3;
                    var3 = false;
                    var3 = var5.bind(var2)(var3);
                    _fun0001_ip = 191; continue _fun0001;
 176: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var5 = _closure2_slot3;
                    var4 = false;
                    var4 = var5.bind(var2)(var4);
                    throw var3;
 191:
                    return var2;
 194:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var10)(var3);
        var3 = new Array(4);
        var3[0] = var2;
        var3[1] = var9;
        var3[2] = var8;
        var3[3] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['reportFalsePositive'] = var3;
        var1['isReportFalsePositiveLoading'] = var2;
        return var1;
    };
    var3['useExplicitMediaActions'] = var2;
    return var1;
})();