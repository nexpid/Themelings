// app/modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreateCreatorMonetizationEnableRequest(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot5;
        var1 = var6.useState;
        var1 = var1.bind(var6)();
        var12 = _closure1_slot4;
        var8 = undefined;
        var11 = 2;
        var1 = var12.bind(var8)(var1, var11);
        var2 = 0;
        var9 = var1[var2];
        var10 = 1;
        var1 = var1[var10];
        var _closure2_slot1 = var1;
        var1 = var6.useState;
        var13 = false;
        var1 = var1.bind(var6)(var13);
        var1 = var12.bind(var8)(var1, var11);
        var5 = var1[var2];
        var1 = var1[var10];
        var _closure2_slot2 = var1;
        var1 = var6.useState;
        var1 = var1.bind(var6)(var13);
        var1 = var12.bind(var8)(var1, var11);
        var2 = var1[var2];
        var1 = var1[var10];
        var _closure2_slot3 = var1;
        var1 = {};
        var1['error'] = var9;
        var1['loading'] = var5;
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = _closure2_slot2;
                    var5 = undefined;
                    var7 = true;
                    var2 = var2.bind(var5)(var7);
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var5)(var5);
                    var2 = _closure2_slot3;
                    var4 = false;
                    var2 = var2.bind(var5)(var4);
case 6: // try_start_0 // try_start_1
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 3;
                    var2 = var8[var2];
                    var8 = var6.bind(var5)(var2);
                    var6 = var8.createCreatorMonetizationEnableRequest;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=101);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = _closure2_slot3;
                    var6 = var6.bind(var5)(var7);
case 11: // try_end0
                    _fun0001_ip = 12; continue _fun0001;
case 9: // try_end1
                    var6 = _closure2_slot2;
                    var6 = var6.bind(var5)(var4);
                    return var2;
case 13: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var6 = _closure2_slot1;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 4;
                    var2 = var9[var2];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {constructor: {value: var2}});
                    var11 = var7;
                    var10 = var8;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var7;
                    var2 = var6.bind(var5)(var2);
case 12: // try_end2
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var5)(var4);
case 4:
                    var2 = undefined;
                    return var2;
case 14: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var5)(var4);
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var8)(var3);
        var3 = new Array(1);
        var3[0] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['createEnableRequest'] = var3;
        var1['submittedRequest'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();