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
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var9 = _closure1_slot5;
                    var7 = var9.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE;
                    var7 = var7.bind(var9)(var8);
                    var2['url'] = var7;
                    var7 = arg2;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=92);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    var7 = _closure1_slot4;
                    var5 = var7.getUser;
                    var9 = var5.bind(var7)(var8);
                    var7 = {};
                    var5 = null;
                    var11 = var5 == var9;
                    var10 = undefined;
                    if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var9 = var9.restrictedSchedule;
                    var11 = var5 == var9;
                    var10 = undefined;
                    if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                    var10 = var9.rules;
case 8:
                    if(!(var5 == var10)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var10 = new Array(0);
case 11:
                    var9 = var10.map;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.ruleId;
                        var1['rule_id'] = var3;
                        var3 = var2.label;
                        var1['label'] = var3;
                        var3 = var2.startTime;
                        var1['start_time'] = var3;
                        var3 = var2.endTime;
                        var1['end_time'] = var3;
                        var3 = var2.days;
                        var1['days'] = var3;
                        var2 = var2.enabled;
                        var1['enabled'] = var2;
                        return var1;
                    };
                    var13 = var9.bind(var10)(var5);
                    var5 = new Array(1);
                    var12 = 0;
                    var14 = var5;
                    var10 = arraySpread(var14, var13, var12);
                    var5[9] = var3;
                    var9 = 1;
                    var9 = var10 + var9;
                    var7['rules'] = var5;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var4['type'] = var9;
                    var4['userId'] = var8;
                    var4['restrictedSchedule'] = var7;
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
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _updateRestrictedScheduleRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var _closure4_slot0 = var11;
                    var6 = undefined;
                    var _closure4_slot1 = var6;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var3.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.patch;
                    var2 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES;
                    var9 = var9.bind(var10)(var8, var11);
                    var2['url'] = var9;
                    var9 = arg3;
                    var2['body'] = var9;
                    var9 = false;
                    var2['rejectWithError'] = var9;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=106);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = var2.body;
                    _closure4_slot1 = var3;
                    var9 = _closure1_slot4;
                    var7 = var9.getUser;
                    var11 = var7.bind(var9)(var8);
                    var7 = {};
                    var9 = null;
                    var12 = var9 == var11;
                    var10 = undefined;
                    if(var12) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var11 = var11.restrictedSchedule;
                    var12 = var9 == var11;
                    var10 = undefined;
                    if(var12) { _fun0002_ip = 19; continue _fun0002 }
case 21:
                    var10 = var11.rules;
case 19:
                    if(!(var9 == var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var10 = new Array(0);
case 22:
                    var9 = var10.map;
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.ruleId;
                            var1 = _closure4_slot0;
                            if(!(var4 !== var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                            var1 = {};
                            var4 = var3.ruleId;
                            var1['rule_id'] = var4;
                            var4 = var3.label;
                            var1['label'] = var4;
                            var4 = var3.startTime;
                            var1['start_time'] = var4;
                            var4 = var3.endTime;
                            var1['end_time'] = var4;
                            var4 = var3.days;
                            var1['days'] = var4;
                            var3 = var3.enabled;
                            var1['enabled'] = var3;
                            _fun0003_ip = 4; continue _fun0003;
case 24:
                            var1 = _closure4_slot1;
case 4:
                            return var1;
                        }
                    };
                    var5 = var9.bind(var10)(var5);
                    var7['rules'] = var5;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var4['type'] = var9;
                    var4['userId'] = var8;
                    var4['restrictedSchedule'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 17:
                    return var2;
case 13:
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
    var1 = function _deleteRestrictedScheduleRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 14:
                    var _closure4_slot0 = var11;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.del;
                    var2 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES;
                    var9 = var9.bind(var10)(var8, var11);
                    var2['url'] = var9;
                    var9 = false;
                    var2['rejectWithError'] = var9;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=95);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 28; continue _fun0004 }
case 15:
                    var7 = _closure1_slot4;
                    var6 = var7.getUser;
                    var9 = var6.bind(var7)(var8);
                    var7 = {};
                    var6 = null;
                    var11 = var6 == var9;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var9 = var9.restrictedSchedule;
                    var11 = var6 == var9;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                    var10 = var9.rules;
case 29:
                    if(!(var6 == var10)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var10 = new Array(0);
case 32:
                    var9 = var10.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.ruleId;
                        var1 = _closure4_slot0;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var9 = var9.bind(var10)(var6);
                    var6 = var9.map;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.ruleId;
                        var1['rule_id'] = var3;
                        var3 = var2.label;
                        var1['label'] = var3;
                        var3 = var2.startTime;
                        var1['start_time'] = var3;
                        var3 = var2.endTime;
                        var1['end_time'] = var3;
                        var3 = var2.days;
                        var1['days'] = var3;
                        var2 = var2.enabled;
                        var1['enabled'] = var2;
                        return var1;
                    };
                    var5 = var6.bind(var9)(var5);
                    var7['rules'] = var5;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
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
case 28:
                    return var2;
case 17:
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
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/RestrictedScheduleActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function addRestrictedScheduleRule() {
        var1 = undefined;
        var4 = _closure1_slot6;
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
        var4 = _closure1_slot7;
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
        var4 = _closure1_slot8;
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