// app/modules/safety_flows/native/SafetyFlowsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function getScreensForTaskType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.TASK_TYPE_TO_SCREENS;
            var8 = var1[var9];
            var7 = null;
            var2 = var7 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 163; continue _fun0001 }
 49:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.TaskType;
            var4 = var2.EMAIL_VERIFICATION;
            var2 = var8;
            if(!(var9 === var4)) { _fun0001_ip = 160; continue _fun0001 }
 85:
            var9 = _closure1_slot5;
            var4 = var9.getCurrentUser;
            var9 = var4.bind(var9)();
            var10 = var7 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 113; continue _fun0001 }
 107:
            var4 = var9.email;
 113:
            var2 = var8;
            if(!(var7 != var4)) { _fun0001_ip = 160; continue _fun0001 }
 120:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SafetyFlowScreens;
            var4 = var3.VERIFY_EMAIL;
            var3 = new Array(1);
            var3[0] = var4;
            var2 = var3;
 160:
            var1 = var2;
 163:
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var5 = function fetchAndUpdateTask() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var5;
    var1 = function _fetchAndUpdateTask() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 72; continue _fun0002 }
 7:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getCurrentTask;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=46);
 44:
                    return var2;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 69; continue _fun0002 }
 52:
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 66; continue _fun0002 }
 58:
                    var3 = arg1;
                    var3 = var3.bind(var4)(var2);
 66:
                    return var2;
 69:
                    return var2;
 72:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var4 = function navigateToScreenForTask(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 98; continue _fun0003 }
 12:
            var6 = _closure1_slot6;
            var5 = var1.task_type;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            if(!(var3 == var5)) { _fun0003_ip = 80; continue _fun0003 }
 36:
            var3 = var4.push;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.SafetyFlowScreens;
            var2 = var2.UPDATE_APP;
            var2 = var3.bind(var4)(var2);
            _fun0003_ip = 96; continue _fun0003;
 80:
            var3 = var4.push;
            var2 = 0;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
 96:
            return var1;
 98:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var7 = undefined;
            var3 = var8.bind(var7)(var2);
            var2 = var3.popWithKey;
            var5 = _closure1_slot0;
            var1 = 6;
            var1 = var9[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.SAFETY_FLOWS_MODAL_KEY;
            var1 = var2.bind(var3)(var1);
            var1 = 7;
            var1 = var9[var1];
            var3 = var8.bind(var7)(var1);
            var2 = var3.open;
            var1 = {};
            var4 = 'SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS';
            var1['key'] = var4;
            var4 = 8;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var1['icon'] = var4;
            var4 = 9;
            var4 = var9[var4];
            var4 = var5.bind(var7)(var4);
            var6 = var4.intl;
            var5 = var6.string;
            var4 = 10;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4./fHz9f;
            var4 = var5.bind(var6)(var4);
            var1['content'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var11 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 13;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/safety_flows/native/SafetyFlowsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getScreensForTaskType'] = var6;
    var3['fetchAndUpdateTask'] = var5;
    var3['navigateToScreenForTask'] = var4;
    var2 = function useOnTaskComplete() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 11;
        var4 = var6[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var4);
        var4 = var7.useNavigation;
        var7 = var4.bind(var7)();
        var _closure2_slot0 = var7;
        var4 = 12;
        var4 = var6[var4];
        var5 = var5.bind(var2)(var4);
        var4 = var5.useSafetyFlowTask;
        var4 = var4.bind(var5)();
        var6 = var4.task;
        var _closure2_slot1 = var6;
        var5 = var4.setTask;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 146; continue _fun0004 }
 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 4;
                        var2 = var4[var2];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var2);
                        var3 = var7.completeTask;
                        var2 = {};
                        var8 = _closure2_slot1;
                        var9 = var8.task_id;
                        var2['task_id'] = var9;
                        var8 = var8.flow_context;
                        var8 = var8.flow_id;
                        var2['flow_id'] = var8;
                        var8 = arg1;
                        var2['data'] = var8;
                        var2 = var3.bind(var7)(var2);
                        SaveGenerator(address=94);
 92:
                        return var2;
 94:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 143; continue _fun0004 }
 100:
                        var7 = _closure1_slot7;
                        var3 = _closure2_slot2;
                        var3 = var7.bind(var4)(var3);
                        SaveGenerator(address=117);
 115:
                        return var3;
 117:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0004_ip = 140; continue _fun0004 }
 123:
                        var6 = _closure1_slot9;
                        var5 = _closure2_slot0;
                        var5 = var6.bind(var4)(var5, var3);
                        return var4;
 140:
                        return var3;
 143:
                        return var2;
 146:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useOnTaskComplete'] = var2;
    return var1;
})();