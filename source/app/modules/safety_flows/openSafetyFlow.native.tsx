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
                    if(var3) { _fun0001_ip = 422; continue _fun0001 }
 13:
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0001_ip = 21; continue _fun0001 }
 19:
                    var2 = {};
 21:
                    var8 = var2.requiredAction;
                    SaveGenerator(address=31);
 29:
                    return var4;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 419; continue _fun0001 }
 40:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.isEligibleForSafetyFlowsExperiment;
                    var3 = {};
                    var9 = 'open-safety-flow';
                    var3['location'] = var9;
                    var3 = var5.bind(var7)(var3);
                    if(!var3) { _fun0001_ip = 410; continue _fun0001 }
 92:
                    var7 = null;
                    if(!(var7 == var8)) { _fun0001_ip = 112; continue _fun0001 }
 98:
                    var5 = _closure1_slot4;
                    var3 = var5.getAction;
                    var8 = var3.bind(var5)();
 112:
                    var3 = _closure1_slot5;
                    var3 = var3.REQUIRE_SAFETY_FLOWS;
                    if(!(var8 !== var3)) { _fun0001_ip = 163; continue _fun0001 }
 126:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 4;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isFullScreenVerification;
                    var3 = var3.bind(var5)(var8);
                    if(!var3) { _fun0001_ip = 410; continue _fun0001 }
 163:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getCurrentTask;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=197);
 195:
                    return var3;
 197:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 416; continue _fun0001 }
 206:
                    if(!(var7 != var3)) { _fun0001_ip = 413; continue _fun0001 }
 213:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 6;
                    var5 = var5[var9];
                    var5 = var8.bind(var4)(var5);
                    var8 = var5.TASK_TYPE_TO_SCREENS;
                    var5 = var3.task_type;
                    var5 = var8[var5];
                    if(!(var7 == var5)) { _fun0001_ip = 284; continue _fun0001 }
 253:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.SafetyFlowScreens;
                    var5 = var5.UPDATE_APP;
                    _fun0001_ip = 313; continue _fun0001;
 284:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.SafetyFlowScreens;
                    var5 = var7.OVERVIEW;
 313:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 7;
                    var7 = var11[var7];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.pushLazy;
                    var10 = _closure1_slot0;
                    var6 = 9;
                    var6 = var11[var6];
                    var12 = var10.bind(var4)(var6);
                    var6 = 8;
                    var7 = var11[var6];
                    var6 = var11.paths;
                    var7 = var12.bind(var4)(var7, var6);
                    var6 = {};
                    var6['task'] = var3;
                    var6['initialScreen'] = var5;
                    var5 = 10;
                    var5 = var11[var5];
                    var5 = var10.bind(var4)(var5);
                    var5 = var5.SAFETY_FLOWS_MODAL_KEY;
                    var5 = var8.bind(var9)(var7, var6, var5);
 410:
                    return var4;
 413:
                    return var4;
 416:
                    return var3;
 419:
                    return var2;
 422:
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
    var4 = 11;
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