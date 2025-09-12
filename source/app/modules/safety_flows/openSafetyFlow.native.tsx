// app/modules/safety_flows/openSafetyFlow.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _openSafetyFlow() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 582; continue _fun0001 }
 13:
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0001_ip = 21; continue _fun0001 }
 19:
                    var2 = {};
 21:
                    var9 = var2.requiredAction;
                    var7 = undefined;
                    SaveGenerator(address=33);
 31:
                    return var3;
 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 579; continue _fun0001 }
 42:
                    var4 = null;
                    if(!(var4 == var9)) { _fun0001_ip = 65; continue _fun0001 }
 48:
                    var6 = _closure1_slot4;
                    var5 = var6.getAction;
                    var9 = var5.bind(var6)();
 65:
                    var6 = _closure1_slot5;
                    var6 = var6.REQUIRE_SAFETY_FLOWS;
                    if(!(var9 !== var6)) { _fun0001_ip = 119; continue _fun0001 }
 82:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 4;
                    var6 = var10[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.isFullScreenVerification;
                    var6 = var6.bind(var8)(var9);
                    if(!var6) { _fun0001_ip = 576; continue _fun0001 }
 119: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 5;
                    var6 = var9[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.getCurrentTask;
                    var6 = var6.bind(var8)();
                    SaveGenerator(address=153);
 151:
                    return var6;
 153:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 450; continue _fun0001 }
 162:
                    var7 = var6;
                    if(!(var4 != var6)) { _fun0001_ip = 447; continue _fun0001 }
 172:
                    var14 = var7;
                    var8 = var14.task_type;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 3;
                    var7 = var7[var10];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.TaskType;
                    var7 = var7.AGE_VERIFICATION;
                    if(!(var8 !== var7)) { _fun0001_ip = 316; continue _fun0001 }
 217:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.TASK_TYPE_TO_SCREENS;
                    var7 = var14.task_type;
                    var7 = var8[var7];
                    if(!(var4 == var7)) { _fun0001_ip = 285; continue _fun0001 }
 254:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.SafetyFlowScreens;
                    var7 = var7.UPDATE_APP;
                    _fun0001_ip = 314; continue _fun0001;
 285:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.SafetyFlowScreens;
                    var7 = var8.OVERVIEW;
 314:
                    _fun0001_ip = 345; continue _fun0001;
 316:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.SafetyFlowScreens;
                    var7 = var8.AGE_VERIFICATION;
 345:
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 6;
                    var8 = var13[var8];
                    var11 = var9.bind(var3)(var8);
                    var10 = var11.pushLazy;
                    var12 = _closure1_slot0;
                    var8 = 8;
                    var8 = var13[var8];
                    var15 = var12.bind(var3)(var8);
                    var8 = 7;
                    var9 = var13[var8];
                    var8 = var13.paths;
                    var9 = var15.bind(var3)(var9, var8);
                    var8 = {};
                    var8['task'] = var14;
                    var8['initialScreen'] = var7;
                    var7 = 9;
                    var7 = var13[var7];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.SAFETY_FLOWS_MODAL_KEY;
                    var7 = var10.bind(var11)(var9, var8, var7);
 442: // try_end0
                    _fun0001_ip = 576; continue _fun0001;
 447:
                    return var3;
 450:
                    return var6;
 453: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 6;
                    var6 = var10[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.pushLazy;
                    var9 = _closure1_slot0;
                    var5 = 8;
                    var5 = var10[var5];
                    var11 = var9.bind(var3)(var5);
                    var5 = 7;
                    var6 = var10[var5];
                    var5 = var10.paths;
                    var6 = var11.bind(var3)(var6, var5);
                    var5 = {};
                    var5['task'] = var4;
                    var4 = 3;
                    var4 = var10[var4];
                    var4 = var9.bind(var3)(var4);
                    var4 = var4.SafetyFlowScreens;
                    var4 = var4.ERROR;
                    var5['initialScreen'] = var4;
                    var4 = 9;
                    var4 = var10[var4];
                    var4 = var9.bind(var3)(var4);
                    var4 = var4.SAFETY_FLOWS_MODAL_KEY;
                    var4 = var7.bind(var8)(var6, var5, var4);
 576:
                    return var3;
 579:
                    return var2;
 582:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRequiredActions;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/openSafetyFlow.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openSafetyFlow() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['openSafetyFlow'] = var2;
    return var1;
})();