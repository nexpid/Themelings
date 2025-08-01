// app/modules/safety_flows/native/SafetyFlowsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getScreensForTaskType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 2;
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
            var9 = _closure1_slot4;
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
    var _closure1_slot5 = var4;
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
                    var2 = 3;
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
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_flows/native/SafetyFlowsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getScreensForTaskType'] = var4;
    var4 = function fetchAndUpdateTask() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAndUpdateTask'] = var4;
    var2 = function navigateToScreenForTask(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 98; continue _fun0003 }
 12:
            var6 = _closure1_slot5;
            var5 = var1.task_type;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            if(!(var3 == var5)) { _fun0003_ip = 80; continue _fun0003 }
 36:
            var3 = var4.push;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
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
            var2 = 4;
            var2 = var9[var2];
            var7 = undefined;
            var3 = var8.bind(var7)(var2);
            var2 = var3.popWithKey;
            var5 = _closure1_slot0;
            var1 = 5;
            var1 = var9[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.SAFETY_FLOWS_MODAL_KEY;
            var1 = var2.bind(var3)(var1);
            var1 = 6;
            var1 = var9[var1];
            var3 = var8.bind(var7)(var1);
            var2 = var3.open;
            var1 = {};
            var4 = 'SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS';
            var1['key'] = var4;
            var4 = 7;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var1['icon'] = var4;
            var4 = 8;
            var4 = var9[var4];
            var4 = var5.bind(var7)(var4);
            var6 = var4.intl;
            var5 = var6.string;
            var4 = 9;
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
    var3['navigateToScreenForTask'] = var2;
    return var1;
})();