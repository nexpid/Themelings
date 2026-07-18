// app/modules/parent_tools/RestrictedScheduleActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _addRestrictedScheduleRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 2;
                    var2 = var10[var8];
                    var6 = undefined;
                    var2 = var9.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var12 = _closure1_slot4;
                    var11 = var12.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE;
                    var11 = var11.bind(var12)(var7);
                    var2['url'] = var11;
                    var11 = arg2;
                    var2['body'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=109);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var4['type'] = var8;
                    var4['userId'] = var7;
                    var4['restrictedSchedule'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
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
    var1 = function _updateRestrictedScheduleRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 2;
                    var2 = var10[var8];
                    var6 = undefined;
                    var2 = var9.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.patch;
                    var2 = {};
                    var13 = _closure1_slot4;
                    var12 = var13.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES;
                    var11 = arg2;
                    var11 = var12.bind(var13)(var7, var11);
                    var2['url'] = var11;
                    var11 = arg3;
                    var2['body'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=113);
case 9:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var4['type'] = var8;
                    var4['userId'] = var7;
                    var4['restrictedSchedule'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 11:
                    return var2;
case 8:
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
    var1 = function _deleteRestrictedScheduleRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 2;
                    var2 = var10[var7];
                    var3 = undefined;
                    var2 = var9.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.del;
                    var2 = {};
                    var13 = _closure1_slot4;
                    var12 = var13.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES;
                    var11 = arg2;
                    var11 = var12.bind(var13)(var8, var11);
                    var2['url'] = var11;
                    var7 = var10[var7];
                    var9 = var9.bind(var3)(var7);
                    var7 = var9.rejectWithMigratedError;
                    var7 = var7.bind(var9)();
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=106);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var7 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var4['type'] = var9;
                    var4['userId'] = var8;
                    var4['restrictedSchedule'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 15:
                    return var2;
case 6:
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/RestrictedScheduleActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function addRestrictedScheduleRule() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['addRestrictedScheduleRule'] = var4;
    var4 = function updateRestrictedScheduleRule() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateRestrictedScheduleRule'] = var4;
    var2 = function deleteRestrictedScheduleRule() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteRestrictedScheduleRule'] = var2;
    return var1;
})();