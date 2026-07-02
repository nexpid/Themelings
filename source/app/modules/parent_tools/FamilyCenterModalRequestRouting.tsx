// app/modules/parent_tools/FamilyCenterModalRequestRouting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var4 = function getConnectionPrereqTarget(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = 'ready';
            var1 = var1 in var4;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'invalid_link_code';
            var1 = var1 in var4;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'verified_teen_blocked';
            var1 = var1 in var4;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 'requires_adult_verification';
            var1 = var1 in var4;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = _closure1_slot4;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.CONFIRM_AGE;
            var2['section'] = var3;
            var3 = {};
            var5 = var4.teen_identity;
            var3['teenIdentity'] = var5;
            var2['params'] = var3;
            var1 = var2;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.MUST_BE_ADULT;
            var2['section'] = var3;
            var1 = var2;
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 4:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.INVALID_CODE;
            var2['section'] = var3;
            var1 = var2;
case 12:
            _fun0001_ip = 13; continue _fun0001;
case 2:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.REQUEST;
            var2['section'] = var3;
            var3 = {};
            var4 = var4.teen_identity;
            var3['teenIdentity'] = var4;
            var2['params'] = var3;
            var1 = var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function _resolveConnectionPrereqTarget() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = arg1;
                    var2 = arg2;
case 16: // try_start_0
                    var4 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 2;
                    var6 = var6[var3];
                    var3 = undefined;
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.getConnectionPrerequisites;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=58);
case 17:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var3 = var4.bind(var3)(var2);
case 21: // try_end0
                    return var3;
case 19:
                    return var2;
case 22: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = _closure1_slot4;
                    return var2;
case 14:
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
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.FamilyCenterFailureCode;
    var9 = var5.Object;
    var6 = var9.freeze;
    var5 = {'PREREQ_LOADING': 'PREREQ_LOADING', 'CONFIRM_AGE': 'CONFIRM_AGE', 'VERIFYING': 'VERIFYING', 'REQUEST': 'REQUEST', 'SENT': 'SENT', 'ERROR': 'ERROR', 'INVALID_CODE': 'INVALID_CODE', 'MUST_BE_ADULT': 'MUST_BE_ADULT', 'TEEN_SCAN': 'TEEN_SCAN'};
    var5 = var6.bind(var9)(var5);
    var _closure1_slot3 = var5;
    var6 = {};
    var9 = var5.ERROR;
    var6['section'] = var9;
    var9 = {};
    var10 = var10.GENERIC_ERROR;
    var9['failureCode'] = var10;
    var6['params'] = var9;
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/FamilyCenterModalRequestRouting.tsx';
    var6 = var7.bind(var8)(var6);
    var3['FamilyCenterModalRequestSections'] = var5;
    var3['getConnectionPrereqTarget'] = var4;
    var2 = function resolveConnectionPrereqTarget() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resolveConnectionPrereqTarget'] = var2;
    return var1;
})();