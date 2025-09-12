// app/modules/safety_flows/SafetyFlowsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getCurrentTask() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 142; continue _fun0001 }
 10:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.SAFETY_FLOWS_TASK;
                    var2['url'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = 3;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.USER_VERIFY;
                    var5['event'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=111);
 109:
                    return var2;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 139; continue _fun0001 }
 117:
                    var5 = var2.status;
                    var4 = 204;
                    var3 = null;
                    if(!(var4 !== var5)) { _fun0001_ip = 136; continue _fun0001 }
 131:
                    var3 = var2.body;
 136:
                    return var3;
 139:
                    return var2;
 142:
                    return var1;
                }
            };
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
    var1 = function _completeTask() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 136; continue _fun0002 }
 10:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.SAFETY_FLOWS_TASK;
                    var2['url'] = var5;
                    var5 = arg1;
                    var2['body'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = 3;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.USER_VERIFY;
                    var5['event'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=119);
 117:
                    return var2;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 133; continue _fun0002 }
 125:
                    var3 = var2.body;
                    return var3;
 133:
                    return var2;
 136:
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
    var1 = function _resendVerificationCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 190; continue _fun0003 }
 10:
                    var7 = arg1;
 13: // try_start_0
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.SAFETY_FLOWS_RESEND_VERIFICATION_CODE;
                    var2['url'] = var5;
                    var5 = {};
                    var5['flow_id'] = var7;
                    var2['body'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = 3;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.USER_VERIFY;
                    var5['event'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=126);
 124:
                    return var2;
 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 135; continue _fun0003 }
 132: // try_end0
                    return var2;
 135:
                    return var2;
 138: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var11 = var3;
                    var10 = var4;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 190:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/SafetyFlowsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getCurrentTask() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getCurrentTask'] = var4;
    var4 = function completeTask() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['completeTask'] = var4;
    var2 = function resendVerificationCode() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resendVerificationCode'] = var2;
    return var1;
})();